/**
 * Affixing Assistant
 * 
 * @author malulleybovo (2018)
 */

const MAX_NUM_AFFIX = 8;
const MAX_NUM_FODDERS = 6;
const RECEPTOR_REGEX = /(X[A-F][0-9]{2})|(XI3[0-2])/;
const AFFIX_REL_SOUL = "soul";

class Assistant {
    constructor(data) {
        // Immutable variables (properties can still change)
        this.affixDB = (new AffixDataParser()).parse(data);
        this.data = data;
        this.rateBoostOptions = [];
        this.potentialOptions = [];
        this.junkCodes = ["ZA01", "ZB01", "ZC01", "ZD01", "ZE01", "ZF01", "ZG01", "ZH01", "ZI01"];
        this.SIMULATOR_WEBSITE = "https://arks-layer.com/abilitysim/";
        // Make functions immutable
        let funcs = Object.getOwnPropertyNames(Assistant.prototype);
        for (var i = 0; i < funcs.length; i++) {
            let prop = funcs[i];
            if (prop == 'constructor') continue;
            if (typeof this[prop] == 'function') {
                Object.defineProperty(this, prop, {
                    enumerable: true,
                    value: this[prop],
                    writable: false
                });
            }
        }
        // Mutable variables
        this.pageTreeRoot = null;
        this.activePageTreeNode = null;
        this.activeFodder = null;
    }

    reset() {
        this.pageTreeRoot = null;
        this.activePageTreeNode = null;
        this.activeFodder = null;
    }

    setGoal(affixes) {
        if (!this.validateAffixes(affixes)) return;
        this.pageTreeRoot = (new PageTreeNode(true)).setPage(
            (new Page()).addFodders(
                (new Fodder()).addAffixes(
                    affixes
                )
            )
        ).addRateBoostOptions(this.getRateBoostOptions())
        .addPotentialOptions(this.getPotentialOptions());
        this.setActivePageTreeNode(this.pageTreeRoot);
        this.setActiveFodder(this.pageTreeRoot.page.fodders[0]);
    }

    setActiveFodder(fodder) {
        if (!(fodder instanceof Fodder) || !this.pageTreeRoot
            || this.pageTreeRoot.find(fodder).length <= 0) return false;
        this.activeFodder = fodder;
        return true;
    }

    setActivePageTreeNode(pageTreeNode) {
        if (!(pageTreeNode instanceof PageTreeNode) || !this.pageTreeRoot
            || this.pageTreeRoot.find(pageTreeNode).length <= 0) return false;
        this.activePageTreeNode = pageTreeNode;
        return true;
    }

    hasActiveFodder() {
        return this.pageTreeRoot && !this.pageTreeRoot.find(this.activeFodder).length > 0;
    }

    hasActivePageTreeNode() {
        return this.pageTreeRoot && this.pageTreeRoot.find(this.activePageTreeNode).length > 0;
    }

    getRateBoostOptions() {
        if (!this.data || !this.data.optionList || !this.data.optionList.support
            || !Array.isArray(this.data.optionList.support)) return null;
        if (this.rateBoostOptions.length > 0) return this.rateBoostOptions;
        let options = this.data.optionList.support;
        for (var i = 0; i < options.length; i++) {
            if (!options[i] || !options[i].id) continue;
            this.rateBoostOptions.push(options[i]);
        }
        return this.rateBoostOptions;
    }

    getPotentialOptions() {
        if (!this.data || !this.data.optionList || !this.data.optionList.potential
            || !Array.isArray(this.data.optionList.potential)) return null;
        if (this.potentialOptions.length > 0) return this.potentialOptions;
        let options = this.data.optionList.potential;
        for (var i = 0; i < options.length; i++) {
            if (!options[i] || !options[i].id) continue;
            this.potentialOptions.push(options[i]);
        }
        return this.potentialOptions;
    }

    validateAffixes(affixes) {
        if (!this.affixDB) return false;
        if (affixes) {
            for (var i = 0; i < affixes.length; i++) {
                let affix = affixes[i];
                if (!affix.code || !this.affixDB[affix.code]) {
                    return false;
                }
            }
        }
        return true;
    }

    getChoicesForAffixes(affixes) {
        if (!affixes) return;
        if (!Array.isArray(affixes)) {
            if (!affixes.code) return;
            affixes = [affixes];
        }
        let choices = {};
        for (var i = 0; i < affixes.length; i++) {
            let affix = affixes[i];
            if (affix && affix.code && this.affixDB[affix.code]) {
                choices[affix.code] = this.affixDB[affix.code].choices.slice();
            }
            else {
                console.warn(
                    `Could not find choices for affix %o because it was not found in the database.`,
                    affix
                );
            }
        }
        return choices;
    }

    // STEP 3: After users select the choice they want for making each affix,
    // get the list of different affixes involved in production for the users
    // to then sort them in order of cost.
    getUniqueAffixesForCostCheck(choicesArray) {
        if (!choicesArray || !Array.isArray(choicesArray) || choicesArray.length <= 0
            || choicesArray.length > MAX_NUM_AFFIX || !this.affixDB) return null;

        let affixes = [];
        for (var i = 0; i < choicesArray.length; i++) {
            if (choicesArray[i].materials) {
                for (var j = 0; j < choicesArray[i].materials.length; j++) {
                    if (!affixes.includes(choicesArray[i].materials[j]))
                        affixes.push(choicesArray[i].materials[j]);
                }
            }
        }
        return affixes;
    }

    // STEP 4: Get all individual instances of any affix involved in production
    // based on the choices the users made.
    // *Assumes choices are for distinct affixes
    getAffixInstancesInvolvedIn(choicesArray) {
        if (!choicesArray || !Array.isArray(choicesArray) || choicesArray.length <= 0
            || choicesArray.length > MAX_NUM_AFFIX || !this.affixDB) return null;

        let lists = [];
        for (var i = 0; i < choicesArray.length; i++) {
            if (choicesArray[i].materials) {
                lists.push(choicesArray[i].materials.slice());
            }
        }

        return this.unionOfListsWithDuplicates(lists);
    }

    // STEP 5: Use all the unique affixes and the cost of each to build a new page
    // that produces the desired result.
    // *Assumes costs is an array of affix codes from most expensive (index 0) to least
    buildPageForChoices(choices, shouldSpread, targetNumSlots) {
        let affixes = this.getAffixInstancesInvolvedIn(choices);
        if (!affixes || !Array.isArray(affixes) || affixes.length <= 0
            || !this.affixDB) return null;

        // Generate new page
        let page = this.buildPageInPyramid(affixes, targetNumSlots);

        if (shouldSpread) {
            this.spreadFodders(page, targetNumSlots);
        }

        // Add any extra fodder to ensure every page has at least 3 fodders
        // for additional affixing boost
        let numFoddersNeeded = 3;
        let hasFodderWithinTargetSlot = false;
        for (var i = 0; i < page.size(); i++) {
            if (page.fodders[i].size() > 0) numFoddersNeeded--;
            if (!hasFodderWithinTargetSlot && page.fodders[i].size() <= targetNumSlots)
                hasFodderWithinTargetSlot = true;
        }
        // Add an extra fodder in case all fodders exceed the target, this new fodder 
        // would the have the abilities affixed to in the real process
        if (!hasFodderWithinTargetSlot && numFoddersNeeded <= 0) numFoddersNeeded = 1;
        for (var i = 0; i < page.size(); i++) {
            if (numFoddersNeeded > 0 && page.fodders[i].size() == 0) {
                page.fodders[i].addAffixes(this.affixDB[this.junkCodes[0]].abilityRef);
                numFoddersNeeded--;
            }
        }

        // Add any extra junk ability to ensure every fodder meets the 
        // target number of slots (otherwise the gear cannot be affixed)
        for (var i = 0; i < page.size(); i++) {
            let fodder = page.fodders[i];
            if (fodder.size() > 0) {
                let junks = [];
                for (var j = 0; j < this.junkCodes.length; j++) {
                    let junk = this.affixDB[this.junkCodes[j]].abilityRef;
                    if (fodder.affixes.includes(junk)) continue;
                    if (fodder.size() + junks.length < targetNumSlots) junks.push(junk);
                    else break;
                }
                if (junks.length > 0) fodder.addAffixes(junks);
            }
        }

        // Check if swapping any two affixes would increase the overall success
        // for every fodderA
        for (var i = 0; i < page.size(); i++) {
            let fodderA = page.fodders[i];
            if (!(fodderA instanceof Fodder)) continue;
            // for every fodderB
            for (var k = 0; k != i && k < page.size(); k++) {
                let fodderB = page.fodders[k];
                if (!(fodderB instanceof Fodder)) continue;
                // for every affixA
                for (var j = 0; j < fodderA.size(); j++) {
                    let affixA = fodderA.affixes[j];
                    // for every affixB
                    for (var m = 0; m < fodderB.size(); m++) {
                        let affixB = fodderB.affixes[m];
                        let arr;
                        // get placementA1 of affixA on fodderA
                        arr = fodderA.affixes.slice(0);
                        arr.splice(j, 1);
                        let placementA1 = this.getPlacement(affixA,
                            (new Fodder()).addAffixes(arr), -1, targetNumSlots);
                        if (!placementA1) continue; // Had conflict
                        // get placementB2 of affixB on fodderA
                        let placementB2 = this.getPlacement(affixB,
                            (new Fodder()).addAffixes(arr), -1, targetNumSlots);
                        if (!placementB2) continue; // Had conflict
                        arr = fodderB.affixes.slice(0);
                        arr.splice(m, 1);
                        // get placementB1 of affixB on fodderB
                        let placementB1 = this.getPlacement(affixB,
                            (new Fodder()).addAffixes(arr), -1, targetNumSlots);
                        if (!placementB1) continue; // Had conflict
                        // get placementA2 of affixA on fodderB
                        let placementA2 = this.getPlacement(affixA,
                            (new Fodder()).addAffixes(arr), -1, targetNumSlots);
                        if (!placementA2) continue; // Had conflict
                        // get totalNumOverlaps1 of placements 1
                        let totalNumOverlaps1 = 0;
                        if (placementA1.overlap) totalNumOverlaps1 += placementA1.data.overlaps - placementA1.data.numOverlapsInvolvingReceptor;
                        if (placementB1.overlap) totalNumOverlaps1 += placementB1.data.overlaps - placementB1.data.numOverlapsInvolvingReceptor;
                        // get totalNumOverlaps2 of placements 2
                        let totalNumOverlaps2 = 0;
                        if (placementA2.overlap) totalNumOverlaps2 += placementA2.data.overlaps - placementA2.data.numOverlapsInvolvingReceptor;
                        if (placementB2.overlap) totalNumOverlaps2 += placementB2.data.overlaps - placementB2.data.numOverlapsInvolvingReceptor;
                        // get compoundRate1 of placements 1
                        let compoundRate1 = placementA1.data.compoundRate * placementB1.data.compoundRate;
                        // get compoundRate2 of placements 2
                        let compoundRate2 = placementA2.data.compoundRate * placementB2.data.compoundRate;
                        // if totalNumOverlaps2 > totalNumOverlaps1 && compoundRate2 > compoundRate1
                        if (totalNumOverlaps2 > totalNumOverlaps1) {
                            // swap affixA with affixB
                            fodderA.affixes.splice(j, 1);
                            fodderB.affixes.splice(m, 1);
                            fodderA.affixes.push(affixB);
                            fodderB.affixes.push(affixA);
                        }
                    }
                }
            }
        }

        // Remove empty fodders from cleanliness
        let foddersToRemove = [];
        for (var i = 0; i < page.size(); i++) {
            if (page.fodders[i].size() == 0) foddersToRemove.push(page.fodders[i]);
        }
        page.removeFodders(foddersToRemove);

        return page;
    }

    produceFromChoices({ fodder, affixChoices, shouldSpread = false, targetNumSlot }) {
        if (!(fodder instanceof Fodder) || !affixChoices
            || !Array.isArray(affixChoices) || (typeof shouldSpread !== 'boolean')
            || (typeof targetNumSlot !== 'number') || targetNumSlot <= 0) return false;

        let producedPage = buildPageForChoices(affixChoices, shouldSpread, targetNumSlot);
        if (!producedPage) return false;

        fodder.connectTo(producedPage);
        return true;
    }

    buildPageInPyramid(affixes, targetNumSlots) {
        let page = new Page();
        let fodders = []
        for (var i = 0; i < page.CAPACITY; i++) { // One list of affixes per fodder
            fodders.push(new Fodder());
        }
        page.addFodders(fodders);
        let pageStartIdx = 0;

        // separate affixes into nontransferables and affixes
        let nontransferables = []
        let transferables = [];
        for (var i = 0; i < affixes.length; i++) {
            let affix = affixes[i];
            if (this.affixDB[affix.code] && this.affixDB[affix.code].choices
                && this.affixDB[affix.code].choices.length <= 0
                && !this.isSpecialAbility(affix)) {
                nontransferables.push(affix);
            }
            else {
                transferables.push(affix);
            }
        }
        // FOR NONTRANSFERABLES
        for (var i = 0; i < nontransferables.length; i++) {
            if (pageStartIdx >= page.fodders.length) {
                // Something went wrong, too many nontransferables to fit
            }
            // place receptor on a separate fodder
            page.fodders[pageStartIdx].addAffixes([nontransferables[i]]);
            pageStartIdx++; // Essentially locks the currrent fodder from edits
        }
        // FOR TRANSFERABLES
        // sort affixes by max transfer rate
        var that = this;
        transferables.sort(function (affixA, affixB) {
            if (that.affixDB[affixA.code] && that.affixDB[affixA.code].choices[0]
                && that.affixDB[affixB.code] && that.affixDB[affixB.code].choices[0]) {
                let maxRateA = that.affixDB[affixA.code].choices[0].transferRate;
                let maxRateB = that.affixDB[affixB.code].choices[0].transferRate;
                return maxRateB - maxRateA;
            }
            else {
                return -1;
            }
        });
        for (var i = 0; i < transferables.length; i++) {
            let affix = transferables[i];
            // for fodders without nontransferables
            // separate fodders into overlaps and no-overlaps
            let placements = this.getPossiblePlacements(affix, page, pageStartIdx);
            let overlaps = placements.overlaps;
            let nooverlaps = placements.nooverlaps;

            // Try placing on best overlap
            if (overlaps.length > 0) {
                // sort overlaps by rate
                overlaps.sort((a, b) => b.compoundRate - a.compoundRate);
                if (page.fodders[overlaps[0].index]) {
                    page.fodders[overlaps[0].index].addAffixes([affix]);
                }
            }
            else if (nooverlaps.length > 0) { // Or try placing on best non-overlap
                // sort overlaps by rate
                nooverlaps.sort((a, b) => b.compoundRate - a.compoundRate);
                if (page.fodders[nooverlaps[0].index]) {
                    page.fodders[nooverlaps[0].index].addAffixes([affix]);
                }
            }
            else {
                // Or something went wrong and affix cannot be placed anywhere
                return null;
            }
        }
        return page;
    }

    enforceSlotNumOnAll(page, targetNumSlots) {
        if (!page || !(page instanceof Page) || typeof targetNumSlots !== 'number') return;
        let numFodders = page.size();
        let numAbilities = 0;
        let hasFodderThatExceedsSlots = false;
        for (var i = 0; i < page.size(); i++) {
            let fodder = page.fodders[i];
            numAbilities += fodder.size();
            if (fodder.size() > targetNumSlots) hasFodderThatExceedsSlots = true;
        }
        // Check if the problem is already solved
        if (!hasFodderThatExceedsSlots) return;
        // check if page has way too many abilities
        if (numAbilities > (numFodders * (new Fodder()).CAPACITY)) return;
    }

    spreadFodders(page, targetNumSlots, targetNumFodders) {
        if (!(page instanceof Page) || typeof targetNumSlots !== 'number') return null;
        if (targetNumSlots <= 0) targetNumSlots = 1;
        if (targetNumSlots > (new Fodder()).CAPACITY) targetNumSlots = (new Fodder()).CAPACITY;
        targetNumFodders = (typeof targetNumFodders === 'number') ? targetNumFodders : page.size();
        if (targetNumFodders <= 1) return null;
        if (targetNumFodders > page.size()) targetNumFodders = page.size();
        // sort fodders based on slot count
        page.fodders.sort((fodderA, fodderB) => fodderB.size() > fodderA.size());
        // check if fodders that are not being accounted for still have abilities
        for (var i = targetNumFodders; i < (new Page()).CAPACITY; i++) {
            // Prevents spreading abilities within N fodders when more than N fodders are used
            if (page.fodders[i] && (page.fodders[i] instanceof Fodder)
                && page.fodders[i].size() > 0) return null;
        }
        // while highest slot fodder (first) and lowest slot fodder (last) have count difference of at least 2
        while (Math.abs(page.fodders[0].size() - page.fodders[page.size() - 1].size()) > 1) {
            // pick fodder with highest slot (first)
            let fodder = page.fodders[0];
            // get boundary index for fodders with at least 2 slots less than highest slot fodder
            let boundaryIdx = -1;
            for (var i = 1; i < targetNumFodders; i++) {
                if (Math.abs(fodder.size() - page.fodders[i].size()) > 1) {
                    boundaryIdx = i;
                    break;
                }
            }
            if (boundaryIdx < 0) break; // No boundary = DONE !
            // sort highest slot fodder based on number of overlaps
            fodder.affixes.sort((affixA, affixB) => {
                let fakeFodder = (new Fodder()).addAffixes(
                    [fodder.affixes.slice(fodder.affixes.indexOf(affixA), 1)]
                    );
                let placementA = this.getPlacement(affixA, fakeFodder, 0, targetNumSlots);
                fakeFodder = (new Fodder()).addAffixes(
                    [fodder.affixes.slice(fodder.affixes.indexOf(affixB), 1)]
                    );
                let placementB = this.getPlacement(affixB, fakeFodder, 0, targetNumSlots);
                if (placementA && placementB) return placementA.numOverlaps - placementB.numOverlaps;
                else if (!placementA) return -1;
                else return 1;
            });
            // from affix with lowest to highest overlap count
            let toPageIdx = -1;
            let fromAffixIdx = -1;
            let maxOverlapCount = 0;
            for (var i = 0; i < fodder.size(); i++) {
                let affix = fodder.affixes[i];
                // for fodders at boundary index until end
                for (var j = boundaryIdx; j < targetNumFodders; j++) {
                    // get placement of affix on fodder
                    let placement = this.getPlacement(affix, page.fodders[j], 0, targetNumSlots);
                    // track affix and fodder with highest overlap count
                    if (placement && (placement.data.overlaps - placement.data.numOverlapsInvolvingReceptor) >= maxOverlapCount) {
                        maxOverlapCount = (placement.data.overlaps - placement.data.numOverlapsInvolvingReceptor);
                        toPageIdx = j;
                        fromAffixIdx = i;
                    }
                }
            }
            // move affix found to fodder found
            if (toPageIdx >= 0 && fromAffixIdx >= 0) {
                let affixToMove = fodder.affixes.splice(fromAffixIdx, 1)[0];
                page.fodders[toPageIdx].addAffixes([ affixToMove ]);
            }
            else {
                // Something went wrong, no affix found
                break;
            }
            // sort fodders based on slot count
            page.fodders.sort((fodderA, fodderB) => fodderB.size() > fodderA.size());
        }
        let minNumAffixes = 0;
        while (page.fodders[0].affixes.length != minNumAffixes) {
            for (var j = targetNumFodders - 1; j >= 0; j--) {
                let fodder = page.fodders[j];
                if (fodder.affixes.length == minNumAffixes) {
                    for (var k = 0; k < j; k++) {
                        if (Math.abs(page.fodders[j].affixes.length - page.fodders[k].affixes.length) <= 1) {
                            break;
                        }
                        else if (k + 1 < j && page.fodders[k].affixes.length > page.fodders[k + 1].affixes.length
                            && this.getPlacement(page.fodders[k].affixes[page.fodders[k].affixes.length - 1], page.fodders[j], j, targetNumSlots)) {
                            fodder.addAffixes([ page.fodders[k].affixes.pop() ]);
                            break;
                        }
                    }
                }
                else {
                    minNumAffixes++;
                    break;
                }
            }
        }

        return page;
    }

    getPlacement(affix, fodder, pageIdx, targetNumSlots) {
        // if fodder is at capacity (either at same slot as result or at max 8)
        if (!(fodder instanceof Fodder) || (targetNumSlots && fodder.affixes.length >= targetNumSlots)) {
            // continue to next fodder
            return false;
        }
        let affixCodePreffix = affix.code.slice(0, 2);
        if (this.affixDB[affix.code]) {
            if (this.affixDB[affix.code].choices) {
                let affixChoices = this.affixDB[affix.code].choices;
                // if affix choices overlap with choices of any affix in fodder
                let numOverlaps = 0;
                let numOverlapsInvolvingReceptor = 0;
                let hasConflict = false;
                let receptorRateFactor = 1;
                let compoundRate = 1;
                // For affixes in each fodder
                for (var k = 0; k < fodder.affixes.length; k++) {
                    var fodderAffix = fodder.affixes[k];
                    // if fodder contains affix code preffix or exclude pattern
                    if (fodderAffix.code.startsWith(affixCodePreffix)
                        || this.testExcludePattern(affix, fodderAffix)
                        || RECEPTOR_REGEX.test(affix.code) || RECEPTOR_REGEX.test(fodderAffix.code)) {
                        hasConflict = true;
                        break;
                    }
                    if (this.affixDB[fodderAffix.code] && this.affixDB[fodderAffix.code].choices) {
                        let fodderAffixChoices = this.affixDB[fodderAffix.code].choices;
                        let isOverlap = false;
                        let hasReceptor = false;
                        // Get top choice that overlaps (which might involve a receptor)
                        for (var m = 0; m < fodderAffixChoices.length; m++) {
                            var fodderAffixChoice = fodderAffixChoices[m];
                            for (var n = 0; n < fodderAffixChoice.materials.length; n++) {
                                let choiceAffix = fodderAffixChoice.materials[n];
                                if (RECEPTOR_REGEX.test(choiceAffix.code)) hasReceptor = true;
                                if (affix == choiceAffix) isOverlap = true;
                            }
                            if (isOverlap) {
                                compoundRate *= fodderAffixChoice.transferRate / 100;
                                if (hasReceptor) receptorRateFactor *= fodderAffixChoice.transferRate / 100;
                                break;
                            }
                        }
                        if (isOverlap) {
                            numOverlaps++;
                            if (hasReceptor) numOverlapsInvolvingReceptor++;
                        }
                        else {
                            if (fodderAffixChoices[0])
                                compoundRate *= fodderAffixChoices[0].transferRate / 100;
                        }
                    }
                }
                if (hasConflict) return false;
                let newItem = {
                    index: pageIdx,
                    overlaps: numOverlaps,
                    numOverlapsInvolvingReceptor: numOverlapsInvolvingReceptor,
                    compoundRate: compoundRate
                }
                if (numOverlaps > 0) {
                    // if affix is soul and any overlap involves receptor
                    if (affix.rel == AFFIX_REL_SOUL && numOverlapsInvolvingReceptor > 0) {
                        // if overlap is 100% transfer
                        if (receptorRateFactor == 1) {
                            // add fodder index and compound rate of overlap choices and max rate of other affixes in fodder to overlaps list
                            return {
                                overlap: true,
                                data: newItem
                            }
                        }
                        else {
                            // add fodder index ands max rate of this affix and other affixes in fodder to no-overlaps list
                            return {
                                overlap: false,
                                data: newItem
                            }
                        }
                    }
                    else {
                        // add fodder index and compound rate of overlap choices and max rate of other affixes in fodder to overlaps list
                        return {
                            overlap: true,
                            data: newItem
                        }
                    }
                }
                else {
                    // add fodder index ands max rate of this affix and other affixes in fodder to no-overlaps list
                    return {
                        overlap: false,
                        data: newItem
                    }
                }
            }
            else {
                // Something went wrong, affix is non-transferable
                return false;
            }
        }
    }

    getPossiblePlacements(affix, page, pageStartIdx, targetNumSlots) {
        let placements = {
            overlaps: [],
            nooverlaps: [],
            compoundRates: []
        }
        for (var j = pageStartIdx; j < page.fodders.length; j++) {
            let placement = this.getPlacement(affix, page.fodders[j], j, targetNumSlots);
            if (placement) {
                if (placement.overlap) placements.overlaps.push(placement.data);
                else placements.nooverlaps.push(placement.data);
                placements.compoundRates.push(placement.data.compoundRate);
            }
        }
        return placements;
    }

    unionOfListsWithDuplicates(lists) {
        lists = lists.slice();
        let union = [];
        for (var i = 0; i < lists.length; i++) {
            union = union.concat(lists[i]);
            for (var j = i + 1; j < lists.length; j++) {
                for (var m = 0; m < lists[i].length; m++) {
                    if (lists[j].includes(lists[i][m])) {
                        lists[j].splice(lists[j].indexOf(lists[i][m]), 1);
                    }
                }
            }
        }
        return union;
    }

    hasConflict(affixA, affixB) {
        return affixB.code.startsWith(affixA.code.slice(0, 2))
            || this.testExcludePattern(affixA, affixB);
    }

    testExcludePattern(affixA, affixB) {
        if (!this.data || !this.data.excludePattern || !affixA
            || !affixB || !affixA.code || !affixB.code
            || !this.data.excludePattern.select) return true;

        let codeA = affixA.code;
        let codeB = affixB.code;
        let patterns = this.data.excludePattern.select;
        for (var i = 0; i < patterns.length; i++) {
            if (!Array.isArray(patterns[i])) patterns[i] = [patterns[i]];
            let checkA = false;
            let checkB = false;
            for (var j = 0; j < patterns[i].length; j++) {
                if (patterns[i][j].endsWith('*'))
                    patterns[i][j] = patterns[i][j].slice(0, patterns[i][j].length - 1);
                if (codeA.startsWith(patterns[i][j])) checkA = true;
                if (codeB.startsWith(patterns[i][j])) checkB = true;
            }
            if (checkA && checkB) {
                return true;
            }
        }
        return false;
    }

    isSpecialAbility(affix) {
        if (!this.data || !this.data.optionList || !this.data.optionList.additional
            || !affix || !affix.name) return false;

        for (var entry in this.data.optionList.additional) {
            if (entry.name && entry.name == affix.name) return true;
        }
        return false;
    }

    toURL(isForSimulator) {
        if (isForSimulator && this.pageTreeRoot.size() > 0) { // Do not include goal in link
            return this.SIMULATOR_WEBSITE + '#!' + this.pageTreeRoot.children[0].toURL(isForSimulator);
        }
        else {
            return '?' + this.encodeURLParams(this.pageTreeRoot.toURL());
        }
    }

    updateConnection({ fodder, page }) {
        if (!(fodder instanceof Fodder) || !(page instanceof Page)
            || this.pageTreeRoot.find(page).length > 0) return false;
        let trackingRoute = this.pageTreeRoot.find(fodder);
        // Tracking route, if found, will always be of form [...,PageTreeNode,Page,Fodder]
        if (trackingRoute.length >= 3 && trackingRoute[trackingRoute.length - 3] instanceof PageTreeNode) {
            let pageTreeNode = trackingRoute[trackingRoute.length - 3];
            if (fodder.hasConnection() && fodder.connectedTo !== page) {
                let pageTrackingRoute = this.pageTreeRoot.find(fodder.connectedTo);
                if (pageTrackingRoute.length >= 2 && pageTrackingRoute[pageTrackingRoute.length - 2] instanceof PageTreeNode) {
                    let pageConnTo = pageTrackingRoute[pageTrackingRoute.length - 2];
                    pageTreeNode.removePageTreeNodes(pageConnTo);
                }
                else return false;
            }
            fodder.connectTo(page);
            pageTreeNode.addPageTreeNodes(
                (new PageTreeNode()).setPage(page)
            );
            return true;
        }
        return false;
    }

    calcSuccessRates() {
        this.calcSuccessRatesStartingAt(this.pageTreeRoot.page);
    }

    calcSuccessRatesStartingAt(page) {
        if (!page || !(page instanceof Page)) return;
        let maxRate = (new Fodder()).MAX_RATE;
        let minRate = (new Fodder()).MIN_RATE;
        // for every fodderA in this page
        for (var i = 0; i < page.size(); i++) {
            let fodder = page.fodders[i];
            // if fodderA has not a connection, continue
            if (!fodder.hasConnection()) continue;
            // go to the page it is connected to
            let pageConn = fodder.connectedTo;
            // get all affixes in that page
            let abilities = [];
            let minNumSlots = (new Fodder()).CAPACITY;
            for (var j = 0; j < pageConn.size(); j++) {
                abilities = abilities.concat(pageConn.fodders[j].affixes);
                if (pageConn.fodders[j].size() < minNumSlots)
                    minNumSlots = pageConn.fodders[j].size();
            }

            // for every affixA in fodderA
            let abilitySuccessRates = {};
            abilitySuccessRates.length = 0;
            let fodderSuccessRate = -1;
            for (var k = 0; k < fodder.size(); k++) {
                let affix = fodder.affixes[k];
                // for every choice for making affixA
                for (var m = 0; m < this.affixDB[affix.code].choices.length; m++) {
                    let choice = this.affixDB[affix.code].choices[m];
                    // count occurrences of each ability in choice
                    let choiceCount = countOccurrences(choice.materials);
                    // count occurrences of each ability in all abilities in page
                    let abilityCount = countOccurrences(abilities);
                    // set flag true
                    let isMatch = true;
                    // for each different occurence in choice
                    for (var code in choiceCount) {
                        // if all bilities have less than count
                        if (!abilityCount[code] || abilityCount[code] < choiceCount[code]) {
                            // does not match, so set flag false and break
                            isMatch = false;
                            break;
                        }
                    }
                    if (isMatch) {
                        // match was found, so save the success rate for affixA
                        abilitySuccessRates[k] = Math.min(Math.max(Math.round(choice.transferRate), minRate), maxRate);
                        if (fodder.size() > minNumSlots) { // If needs upslotting
                            let upslottingFactor = (fodder.size() > 0) ?
                                this.data.extraSlot[fodder.size() - 1][pageConn.size() > 2]
                                : 100; // range 0~100
                            upslottingFactor = (upslottingFactor - minRate) / (maxRate - minRate); // range 0~1
                            abilitySuccessRates[k] = Math.min(Math.max(Math.floor(abilitySuccessRates[k] * upslottingFactor), minRate), maxRate);
                        }
                        if (fodder.isSameGear) {
                            let sameGearFactor = this.data.sameBonusBoost[(pageConn.size() > 2) ? 2 : 1];
                            abilitySuccessRates[k] = Math.min(Math.max(Math.floor(abilitySuccessRates[k] * sameGearFactor), minRate), maxRate);
                        }
                        if (fodder.rateBoostIdx >= 0 && fodder.rateBoostIdx < fodder.rateBoostOptions.length) {
                            abilitySuccessRates[k] = Math.min(Math.max(this.data.optionList.support[fodder.rateBoostIdx].fn(abilitySuccessRates[k]), minRate), maxRate);
                        }
                        if (fodder.potentialIdx >= 0 && fodder.potentialIdx < fodder.potentialOptions.length) {
                            abilitySuccessRates[k] = Math.min(Math.max(this.data.optionList.potential[fodder.potentialIdx].fn(abilitySuccessRates[k]), minRate), maxRate);
                        }
                        abilitySuccessRates.length++;
                        if (fodderSuccessRate < 0) fodderSuccessRate = (abilitySuccessRates[k] - minRate) / (maxRate - minRate);
                        else fodderSuccessRate *= (abilitySuccessRates[k] - minRate) / (maxRate - minRate);
                        break;
                    }
                    else {
                        // something went wrong, the connection cannot produce this fodder
                    }

                }
            }
            // set page success rate to compound success rates of every affix in fodderA
            let overallSuccessRate = (abilitySuccessRates.length == fodder.size()) ?
                Math.min(Math.max(Math.round((fodderSuccessRate * (maxRate - minRate)) + minRate), minRate), maxRate)
                : -1;
            pageConn.setSuccessRate(overallSuccessRate);
            fodder.setSuccessRate(overallSuccessRate, abilitySuccessRates);
            // calculate success rates in that page
            this.calcSuccessRatesStartingAt(pageConn);
        }

        function countOccurrences(abilities) {
            var occurrences = {};
            for (var i = 0; i < abilities.length; i++) {
                if (typeof occurrences[abilities[i].code] == "undefined") {
                    occurrences[abilities[i].code] = 1;
                } else {
                    occurrences[abilities[i].code]++;
                }
            }
            return occurrences;
        }
    }

    addPageTreeNodes(pageTreeNodes) {
        if (this.activePageTreeNode && (this.activePageTreeNode instanceof PageTreeNode)) {
            this.activePageTreeNode.addPageTreeNodes(pageTreeNodes);
        }
        return this;
    }

    removePageTreeNodes(pageTreeNodes) {
        if (this.activePageTreeNode && (this.activePageTreeNode instanceof PageTreeNode)) {
            this.activePageTreeNode.removePageTreeNodes(pageTreeNodes);
        }
        return this;
    }

    loadFromURLParams(params) {
        if (!this.affixDB) return false;
        let pagesData = params.split('/');
        let pages = [];
        for (var i = 0; i < pagesData.length; i++) {
            let pageData = pagesData[i];
            if (!pageData || pagesData == '') continue;
            let targetFodder = pageData.match(/r=([A-Z0-9]{4,}[.]?)*/g);
            if (!targetFodder || !targetFodder[0] || targetFodder == '') continue;
            let targetAffixes = targetFodder[0].match(/[A-Z0-9]{4,}/g);
            if (!targetAffixes || targetAffixes.length <= 0) continue;
            let pageAllFodders = pageData.match(/(s=([A-Z0-9]{4,}[.]?)*)((&[0-9])=([A-Z0-9]{4,}[.]?)*)*/g);
            let pageFoddersAffixes = [];
            for (var j = 0; j < pageAllFodders.length; j++) {
                let pageOneFodder = pageAllFodders[j];
                if (!pageOneFodder || pageOneFodder <= 0) continue;
                let fodderAllAffixes = pageOneFodder.match(/([A-Z0-9]{4,}[.]?)+/g);
                if (!fodderAllAffixes || fodderAllAffixes <= 0) continue;
                for (var k = 0; k < fodderAllAffixes.length; k++) {
                    let fodderOneAffixes = fodderAllAffixes[k];
                    let pageFodderAffixes = fodderOneAffixes.match(/[A-Z0-9]{4,}/g);
                    if (!pageFodderAffixes || pageFodderAffixes.length <= 0) continue;
                    pageFoddersAffixes.push(pageFodderAffixes);
                }
            }
            let boosts = pageData.match(/o=([A-Z0-9]{3,}[.]?)*/g);
            if (!boosts || !boosts[0] || boosts == '') continue;
            boosts = boosts[0].match(/[A-Z0-9]{3,}/g);
            if (!boosts || !Array.isArray(boosts)) boosts = [];
            let connDist = -1;
            let fodderIdx = -1;
            let dist = pageData.match(/d=[0-9]+.[0-9]+/);
            if (dist && dist[0]) {
                dist = dist[0].match(/[0-9]+/g);
                if (dist && dist.length > 1) {
                    connDist = parseInt(dist[0]);
                    fodderIdx = parseInt(dist[1]);
                }
            }
            let connections = [];
            for (var j = 0; j < pageFoddersAffixes.length; j++) {
                let pageFodderAffixes = pageFoddersAffixes[j];
                connections.push(null);
                for (var k = 0; k < pageFodderAffixes.length; k++) {
                    if (this.affixDB[pageFodderAffixes[k]]) {
                        pageFodderAffixes[k] = this.affixDB[pageFodderAffixes[k]].abilityRef;
                    }
                }
            }
            for (var j = 0; j < targetAffixes.length; j++) {
                if (this.affixDB[targetAffixes[j]])
                    targetAffixes[j] = this.affixDB[targetAffixes[j]].abilityRef;
            }
            pages.push({
                fodders: pageFoddersAffixes,
                target: targetAffixes,
                boosts: boosts,
                connections: connections,
                isConnected: false,
                connDist: connDist,
                fodderIdx: fodderIdx
            });
        }
        if (pages.length <= 0 || !pages[0].target || pages[0].target.length <= 0) return false;
        let goalPage = pages[0];
        for (var i = 0; i < pages.length; i++) {
            let pageA = pages[i];
            for (var j = 0; j < pageA.fodders.length; j++) {
                let fodderA = pageA.fodders[j];
                for (var k = 0; k < pages.length; k++) {
                    if (k == i) continue;
                    let pageB = pages[k];
                    if (pageB && !pageB.isConnected && pageB.target) {
                        let isMatch = true;
                        if (fodderA.length == pageB.target.length) {
                            for (var m = 0; m < pageB.target.length; m++) {
                                let targetAffix = pageB.target[m];
                                if (!fodderA.includes(targetAffix)) {
                                    isMatch = false;
                                    break;
                                }
                            }
                        }
                        else isMatch = false;
                        if (isMatch && pageB.connDist >= 0 && pageB.fodderIdx >= 0) {
                            if (Math.abs(k - i) != pageB.connDist || j != pageB.fodderIdx)
                                isMatch = false;
                        }
                        if (isMatch) {
                            // Map indices 0,1,2,3,4,5 to 0,2,4,5,3,1 (even increasing, odd decreasing)
                            // to display pages nicely
                            let idx = -1;
                            if (j < 3) idx = 2 * j;
                            else idx = 11 - 2 * j;
                            pageA.connections[idx] = pageB;
                            pageB.isConnected = true;
                            break;
                        }
                    }
                }
            }
        }
        let filteredPages = [];
        let pageTreeRoot = createPageTree(goalPage);
        if (!pageTreeRoot || !(pageTreeRoot instanceof PageTreeNode)) return false;
        this.setGoal(goalPage.target);
        this.pageTreeRoot.page.fodders[0].connectTo(pageTreeRoot.page);
        this.pageTreeRoot.addPageTreeNodes(pageTreeRoot);
        return true;

        function createPageTree(pageData) {
            // create pagetreenode
            let fodders = [];
            for (var i = 0; i < pageData.fodders.length; i++) {
                fodders.push(
                    (new Fodder()).addAffixes(
                        pageData.fodders[i]
                    )
                );
            }
            // for each connection, create sub tree and add as child
            let children = [];
            for (var i = 0; i < pageData.connections.length; i++) {
                let connection = pageData.connections[i];
                if (connection == null) continue;
                let childNode = createPageTree(connection);
                if (childNode && childNode instanceof PageTreeNode
                    && childNode.page && childNode.page instanceof Page) {
                    // Map indices 0,2,4,5,3,1 (even increasing, odd decreasing) to 0,1,2,3,4,5
                    // to display pages nicely
                    let idx = -1;
                    if (i % 2 == 0) idx = Math.round(i / 2);
                    else idx = Math.round((11 - i) / 2);
                    childNode.page.connectTo(fodders[idx]);
                    children.push(childNode);
                }
            }
            let page = (new Page()).addFodders(
                fodders
            );
            let pageTreeNode = (new PageTreeNode()).setPage(
                page
            ).addPageTreeNodes(
                children
            )
            // return root
            return pageTreeNode;
        }
    }

    // LZW-compress a string
    encodeURLParams(s) {
        if (typeof s !== 'string' || s == '') return '';
        let dict = {};
        let data = (s + "").split("");
        let out = [];
        let currChar;
        let phrase = data[0];
        let code = 256;
        for (var i = 1; i < data.length; i++) {
            currChar = data[i];
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            }
            else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + currChar] = code;
                code++;
                phrase = currChar;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        for (var i = 0; i < out.length; i++) {
            out[i] = String.fromCharCode(out[i]);
        }
        return out.join("");
    }

    // Decompress an LZW-encoded string
    decodeURLParams(s) {
        let dict = {};
        let data = (s + "").split("");
        let currChar = data[0];
        let oldPhrase = currChar;
        let out = [currChar];
        let code = 256;
        let phrase;
        for (var i = 1; i < data.length; i++) {
            let currCode = data[i].charCodeAt(0);
            if (currCode < 256) {
                phrase = data[i];
            }
            else {
                phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
            }
            out.push(phrase);
            currChar = phrase.charAt(0);
            dict[code] = oldPhrase + currChar;
            code++;
            oldPhrase = phrase;
        }
        return out.join("");
    }

    query({ searchRoot, dataClass, properties }) {
        let queue = [];
        let root = (searchRoot && searchRoot instanceof PageTreeNode) ? searchRoot : this.pageTreeRoot;
        let results = [];
        queue.unshift(root);
        while (queue.length > 0) {
            let node = queue.pop();
            for (var i = 0; i < node.size(); i++) {
                let child = node.children[i];
                queue.unshift(child);
            }
            if (isRefAMatch(node)) results.push(node);
            if (node.page && node.page instanceof Page) {
                if (isRefAMatch(node.page)) results.push(node.page);
                for (var i = 0; i < node.page.size(); i++) {
                    let fodder = node.page.fodders[i];
                    if (fodder && fodder instanceof Fodder) {
                        if (isRefAMatch(fodder)) results.push(fodder);
                    }
                }
            }
        }
        return results;

        function isRefAMatch(ref) {
            console.log();
            let isMatch = true;
            if (dataClass) {
                if (ref instanceof dataClass) {
                    if (properties) {
                        for (var key in properties) {
                            if (typeof properties[key] !== 'object') {
                                if (ref[key] != properties[key]) {
                                    isMatch = false;
                                    break;
                                }
                            }
                            else {
                                for (var propKey in properties[key]) {
                                    if (typeof properties[key][propKey] !== 'object') {
                                        if (ref[key][propKey] != properties[key][propKey]) {
                                            isMatch = false;
                                            break;
                                        }
                                    }
                                    else {
                                        for (var propKey2 in properties[key][propKey]) {
                                            if (typeof properties[key][propKey][propKey2] !== 'object') {
                                                if (ref[key][propKey][propKey2] != properties[key][propKey][propKey2]) {
                                                    isMatch = false;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    isMatch = false;
                }
            }
            else {
                if (properties) {
                    for (var key in properties) {
                        if (typeof properties[key] !== 'object') {
                            if (ref[key] != properties[key]) {
                                isMatch = false;
                                break;
                            }
                        }
                        else {
                            for (var propKey in properties[key]) {
                                if (typeof properties[key][propKey] !== 'object') {
                                    if (ref[key][propKey] != properties[key][propKey]) {
                                        isMatch = false;
                                        break;
                                    }
                                }
                                else {
                                    for (var propKey2 in properties[key][propKey]) {
                                        if (typeof properties[key][propKey][propKey2] !== 'object') {
                                            if (ref[key][propKey][propKey2] != properties[key][propKey][propKey2]) {
                                                isMatch = false;
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return isMatch;
        }
    }
}

class PageTreeNode {
    constructor(isGoal) {
        // Immutable variables (properties can still change)
        this.children = [];
        this.isGoal = (typeof isGoal === 'boolean') ? isGoal : false;
        this.rateBoostOptions = [];
        this.potentialOptions = [];
        // Make functions immutable
        let funcs = Object.getOwnPropertyNames(PageTreeNode.prototype);
        for (var i = 0; i < funcs.length; i++) {
            let prop = funcs[i];
            if (prop == 'constructor') continue;
            if (typeof this[prop] == 'function') {
                Object.defineProperty(this, prop, {
                    enumerable: true,
                    value: this[prop],
                    writable: false
                });
            }
        }
        // Mutable variables
        this.page = null;
    }

    toURL(isForSimulator) {
        let url = '';
        let queue = [];
        let curr;
        queue.push({
            node: this,
            connDist: -1,
            fodderIdx: -1
        });
        let idx = 0;
        while (queue.length > idx) {
            curr = queue[idx].node;
            for (var i = 0; i < curr.size(); i++) {
                if (curr.children[i] && curr.children[i] instanceof PageTreeNode) {
                    queue.push({
                        node: curr.children[i],
                        connDist: -1,
                        fodderIdx: -1
                    });
                }
            }
            idx++;
        }
        for (var i = 0; i < queue.length; i++) {
            let nodeA = queue[i].node;
            if (nodeA.page instanceof Page) {
                for (var j = i + 1; j < queue.length; j++) {
                    let nodeB = queue[j].node;
                    if (nodeB.page instanceof Page) {
                        for (var k = 0; k < nodeA.page.size(); k++) {
                            let fodderA = nodeA.page.fodders[k];
                            if (fodderA instanceof Fodder
                                && fodderA.connectedTo === nodeB.page) {
                                // Distance from pageB to pageA
                                queue[j].connDist = j - i;
                                // Index of connected fodder in pageA
                                queue[j].fodderIdx = k;
                            }
                        }
                    }
                }
            }
        }
        for (var i = 0; i < queue.length; i++) {
            let node = queue[i].node;
            if (node.page instanceof Page) {
                url += node.page.toURL(queue[i].connDist, queue[i].fodderIdx, isForSimulator);
            }
        }

        return url;
    }

    size() {
        return this.children.length;
    }

    addPageTreeNodes(pageTreeNodes) {
        if (pageTreeNodes && pageTreeNodes instanceof PageTreeNode) {
            pageTreeNodes = [pageTreeNodes];
        }
        if (pageTreeNodes && Array.isArray(pageTreeNodes)) {
            for (var i = 0; i < pageTreeNodes.length; i++) {
                if (this.page == null || this.size() >= this.page.size())
                    break;
                let pageTreeNode = pageTreeNodes[i];
                let test = this.find(pageTreeNode);
                if (pageTreeNode && (pageTreeNode instanceof PageTreeNode)
                    && !pageTreeNode.isGoal // Cannot have goal as a child
                    && test.length <= 0 // Deny cycles and duplicates
                    && pageTreeNode.page.connectedTo instanceof Fodder) {
                    pageTreeNode.addRateBoostOptions(this.rateBoostOptions)
                        .addPotentialOptions(this.potentialOptions);
                    this.children.push(pageTreeNode);
                    let newEvenChildren = [];
                    for (var k = 0; k < this.page.size(); k += 2) {
                        let fodder = this.page.fodders[k];
                        if (!fodder || !(fodder.connectedTo instanceof Page))
                            continue;
                        for (var j = 0; j < this.size(); j++) {
                            let childNode = this.children[j];
                            if (!childNode || !childNode.page || !(childNode.page.connectedTo instanceof Fodder))
                                continue;
                            if (fodder.connectedTo === childNode.page) {
                                newEvenChildren.push(childNode);
                            }
                        }
                    }
                    let newOddChildren = [];
                    for (var k = 1; k < this.page.size(); k += 2) {
                        let fodder = this.page.fodders[k];
                        if (!fodder || !(fodder.connectedTo instanceof Page))
                            continue;
                        for (var j = 0; j < this.size(); j++) {
                            let childNode = this.children[j];
                            if (!childNode || !childNode.page || !(childNode.page.connectedTo instanceof Fodder))
                                continue;
                            if (fodder.connectedTo === childNode.page) {
                                newOddChildren.unshift(childNode);
                            }
                        }
                    }
                    this.children = newEvenChildren.concat(newOddChildren);
                }
            }
        }
        return this;
    }

    find(elem) {
        let elemType = -1;
        if (elem instanceof Fodder) elemType = 0;
        else if (elem instanceof Page) elemType = 1;
        else if (elem instanceof PageTreeNode) elemType = 2;
        else return [];
        let thisPage = this.page;
        if (thisPage) {
            if (elemType == 1 && elem === thisPage) {
                return [
                    this,
                    thisPage
                ];
            }
            if (elemType == 0) {
                for (var i = 0; i < thisPage.size(); i++) {
                    let fodder = thisPage.fodders[i];
                    if (elem === fodder) {
                        return [
                            this,
                            thisPage,
                            fodder
                        ];
                    }
                }
            }
        }
        for (var i = 0; i < this.size(); i++) {
            let childNode = this.children[i];
            if (elemType == 2 && elem === childNode) {
                return [
                    this
                ];
            }
            let trackingFound = childNode.find(elem);
            if (Array.isArray(trackingFound) && trackingFound.length > 0) {
                trackingFound.unshift(this);
                return trackingFound;
            }
        }
        return [];
    }

    setPage(page) {
        if (page && page instanceof Page && this.find(page).length <= 0) {
            this.page = page;
            this.page.addRateBoostOptions(this.rateBoostOptions);
            this.page.addPotentialOptions(this.potentialOptions);
        }
        return this;
    }

    removePageTreeNodes(pageTreeNodes) {
        if (pageTreeNodes && pageTreeNodes instanceof PageTreeNode) {
            pageTreeNodes = [pageTreeNodes];
        }
        if (pageTreeNodes && Array.isArray(pageTreeNodes)) {
            for (var i = 0; i < pageTreeNodes.length; i++) {
                let pageTreeNode = pageTreeNodes[i];
                if (pageTreeNode && pageTreeNode instanceof PageTreeNode
                    && this.children.includes(pageTreeNode)) {
                    this.children.splice(this.children.indexOf(pageTreeNode), 1);
                }
            }
        }
        return this;
    }

    findAndRemove(elem) {
        let elemType = -1;
        if (elem instanceof Fodder) elemType = 0;
        else if (elem instanceof Page) elemType = 1;
        else if (elem instanceof PageTreeNode) elemType = 2;
        else return false;
        let thisPage = this.page;
        if (thisPage) {
            if (elemType == 1 && elem === thisPage) {
                this.page = null;
                return true;
            }
            if (elemType == 0) {
                for (var i = 0; i < thisPage.fodders; i++) {
                    let fodder = thisPage.fodders[i];
                    if (elem === fodder) {
                        thisPage.fodders.splice(i, 1);
                        return true;
                    }
                }
            }
        }
        for (var i = 0; i < this.size(); i++) {
            let childNode = this.children[i];
            if (elemType == 2 && elem === childNode) {
                this.children.splice(i, 1);
                return true;
            }
            let wasFoundAndRemoved = childNode.findAndRemove(elem);
            if (wasFoundAndRemoved) return true;
        }
        return false;
    }

    addRateBoostOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let rateBoostOption = options[i];
                if (rateBoostOption && rateBoostOption.id && typeof rateBoostOption.id === 'string'
                    && !this.rateBoostOptions.includes(rateBoostOption)) {
                    this.rateBoostOptions.push(rateBoostOption);
                }
            }
            this.page.addRateBoostOptions(options);
            for (var i = 0; i < this.size(); i++) {
                this.children[i].addRateBoostOptions(options);
            }
        }
        return this;
    }

    addPotentialOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let potentialOption = options[i];
                if (potentialOption && potentialOption.id && typeof potentialOption.id === 'string'
                    && !this.potentialOptions.includes(potentialOption)) {
                    this.potentialOptions.push(potentialOption);
                    this.page.addPotentialOptions(potentialOption);
                    for (var j = 0; j < this.size(); j++) {
                        this.children[j].addPotentialOptions(potentialOption);
                    }
                }
            }
        }
        return this;
    }

    connectFodderAtToPageAt(fodderIdx, pageIdx) {
        if (typeof fodderIdx === 'number' && typeof pageIdx === 'number'
            && this.page && fodderIdx >= 0 && fodderIdx < this.page.fodders.length
            && pageIdx >= 0 && pageIdx < this.children.length) {
            this.page.fodders[fodderIdx].connectTo(this.children[pageIdx].page);
        }
        return this;
    }
}

class Page {
    constructor() {
        // Immutable variables (properties can still change)
        this.CAPACITY = 6;
        this.MIN_RATE = 0;
        this.MAX_RATE = 100;
        this.fodders = [];
        this.rateBoostOptions = [];
        this.potentialOptions = [];
        // Make functions immutable
        let funcs = Object.getOwnPropertyNames(Page.prototype);
        for (var i = 0; i < funcs.length; i++) {
            let prop = funcs[i];
            if (prop == 'constructor') continue;
            if (typeof this[prop] == 'function') {
                Object.defineProperty(this, prop, {
                    enumerable: true,
                    value: this[prop],
                    writable: false
                });
            }
        }
        // Mutable variables
        this.successRate = -1;
        this.connectedTo = null;
    }

    toURL(connDist, connFodderIdx, isForSimulator) {
        let url = '';
        for (var i = 0; i < this.size(); i++) {
            url += ((i == 0) ? '/s=' : (i + '=')) + this.fodders[i].toURL() + '&';
        }
        url += 'r=';
        if (this.connectedTo) {
            url += this.connectedTo.toURL();
        }
        url += '&o=';
        if (this.connectedTo && this.connectedTo.rateBoostOptions && this.connectedTo.rateBoostOptions[this.connectedTo.rateBoostIdx]
            && this.connectedTo.rateBoostOptions[this.connectedTo.rateBoostIdx].value) {
            url += this.connectedTo.rateBoostOptions[this.connectedTo.rateBoostIdx].value;
        }
        // TODO for Special Ability like elegant and grace
        if (this.connectedTo && this.connectedTo.potentialOptions && this.connectedTo.potentialOptions[this.connectedTo.potentialIdx]
            && this.connectedTo.potentialOptions[this.connectedTo.potentialIdx].value) {
            url += '.' + this.connectedTo.potentialOptions[this.connectedTo.potentialIdx].value;
        }
        // Custom fodder-page connection identifying data
        if (!isForSimulator && connDist >= 0 && connFodderIdx >= 0) {
            url += '&d=' + connDist + '.' + connFodderIdx;
        }

        return url;
    }

    size() {
        return this.fodders.length;
    }

    addFodders(fodders) {
        if (fodders && fodders instanceof Fodder) {
            fodders = [fodders];
        }
        if (fodders && Array.isArray(fodders)) {
            for (var i = 0; i < fodders.length; i++) {
                let fodder = fodders[i];
                if (fodder && fodder instanceof Fodder) {
                    if (this.size() < this.CAPACITY) {
                        fodder.addRateBoostOptions(this.rateBoostOptions);
                        fodder.addPotentialOptions(this.potentialOptions);
                        this.fodders.push(fodder);
                    }
                    else {
                        console.warn(
                            `Page %o is at capacity and could not add some fodders %o.`,
                            this, fodders
                        );
                        break;
                    }
                }
            }
        }
        return this;
    }

    setSuccessRate(rate) {
        if (typeof rate === 'number' && rate >= this.MIN_RATE
            && rate <= this.MAX_RATE) {
            this.successRate = rate;
        }
        else {
            console.warn(
                `Page %o success rate was not changed from ${this.successRate} to ${rate}.`,
                this
            );
        }
        return this;
    }

    connectTo(fodder) {
        if (fodder == this.connectedTo) return this;
        if (fodder instanceof Fodder) {
            if (this.connectedTo instanceof Page) {
                this.connectedTo.connectedTo = false;
            }
            this.connectedTo = fodder;
            fodder.connectTo(this);
        }
        return this;
    }

    hasConnection() {
        return this.connectedTo instanceof Fodder;
    }

    removeFodders(fodders) {
        if (fodders && fodders instanceof Fodder) {
            fodders = [fodders];
        }
        if (fodders && Array.isArray(fodders)) {
            for (var i = 0; i < fodders.length; i++) {
                let fodder = fodders[i];
                if (fodder && fodder instanceof Fodder
                    && this.fodders.includes(fodder)) {
                    this.fodders.splice(this.fodders.indexOf(fodder), 1)
                }
            }
        }
        return this;
    }

    addRateBoostOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let rateBoostOption = options[i];
                if (rateBoostOption && rateBoostOption.id && typeof rateBoostOption.id === 'string'
                    && !this.rateBoostOptions.includes(rateBoostOption)) {
                    this.rateBoostOptions.push(rateBoostOption);
                }
            }
            for (var i = 0; i < this.size(); i++) {
                this.fodders[i].addRateBoostOptions(options);
            }
        }
        return this;
    }

    addPotentialOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let potentialOption = options[i];
                if (potentialOption && potentialOption.id && typeof potentialOption.id === 'string'
                    && !this.potentialOptions.includes(potentialOption)) {
                    this.potentialOptions.push(potentialOption);
                }
            }
        }
        return this;
    }
}

class Fodder {
    constructor() {
        // Immutable variables (properties can still change)
        this.CAPACITY = 8;
        this.MIN_RATE = 0;
        this.MAX_RATE = 100;
        this.affixes = [];
        this.affixSuccessRates = [];
        this.rateBoostOptions = [];
        this.potentialOptions = [];
        // Make functions immutable
        let funcs = Object.getOwnPropertyNames(Fodder.prototype);
        for (var i = 0; i < funcs.length; i++) {
            let prop = funcs[i];
            if (prop == 'constructor') continue;
            if (typeof this[prop] == 'function') {
                Object.defineProperty(this, prop, {
                    enumerable: true,
                    value: this[prop],
                    writable: false
                });
            }
        }
        // Mutable variables
        this.overallSuccessRate = -1;
        this.connectedTo = null;
        this.isSameGear = false;
        this.rateBoostIdx = 0;
        this.potentialIdx = 0;
    }

    toURL() {
        let url = '';
        for (var i = 0; i < this.size(); i++) {
            url += this.affixes[i].code + ((i < this.size() - 1) ? '.' : '');
        }
        return url;
    }

    size() {
        return this.affixes.length;
    }

    addAffixes(affixes) {
        if (affixes && affixes.code) {
            affixes = [affixes];
        }
        if (affixes && Array.isArray(affixes)) {
            for (var i = 0; i < affixes.length; i++) {
                let affix = affixes[i];
                if (affix && affix.code && !this.affixes.includes(affix)) {
                    if (this.size() < this.CAPACITY) {
                        this.affixes.push(affix);
                    }
                    else {
                        console.warn(
                            `Fodder %o is at capacity and could not add some affixes %o.`,
                            this, affixes
                        );
                        break;
                    }
                }
            }
        }
        return this;
    }

    setSuccessRate(overallRate, affixRates) {
        if (typeof overallRate === 'number') {
            this.overallSuccessRate = overallRate;
            this.affixSuccessRates = affixRates;
        }
        else {
            console.warn(
                `Page %o success rate was not changed from ${this.successRate} to ${rate}.`,
                this
            );
        }
        return this;
    }

    setSameGear(bool) {
        if (typeof bool === 'boolean') {
            this.isSameGear = bool;
        }
        return this;
    }

    setRateBoostIdx(idx) {
        if (typeof idx === 'number' && idx >= 0) {
            this.rateBoostIdx = idx;
        }
        return this;
    }

    setPotentialIdx(idx) {
        if (typeof idx === 'number' && idx >= 0) {
            this.potentialIdx = idx;
        }
        return this;
    }

    connectTo(page) {
        if (page == this.connectedTo) return this;
        if (page instanceof Page) {
            if (this.connectedTo instanceof Fodder) {
                this.connectedTo.connectedTo = false;
            }
            this.connectedTo = page;
            page.connectTo(this);
        }
        return this;
    }

    hasConnection() {
        return this.connectedTo instanceof Page;
    }

    removeAffixes(affixes) {
        if (affixes && affixes.code) {
            affixes = [affixes];
        }
        if (affixes && Array.isArray(affixes)) {
            for (var i = 0; i < affixes.length; i++) {
                let affix = affixes[i];
                if (affix && this.affixes.includes(affix)) {
                    this.affixes.splice(this.affixes.indexOf(affix), 1)
                }
            }
        }
        return this;
    }

    addRateBoostOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let rateBoostOption = options[i];
                if (rateBoostOption && rateBoostOption.id && typeof rateBoostOption.id === 'string'
                    && !this.rateBoostOptions.includes(rateBoostOption)) {
                    this.rateBoostOptions.push(rateBoostOption);
                }
            }
        }
        return this;
    }

    addPotentialOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let potentialOption = options[i];
                if (potentialOption && potentialOption.id && typeof potentialOption.id === 'string'
                    && !this.potentialOptions.includes(potentialOption)) {
                    this.potentialOptions.push(potentialOption);
                }
            }
        }
        return this;
    }
}