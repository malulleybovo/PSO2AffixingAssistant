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
        this.pageTreeRoot = [];
        this.affixDB = (new AffixDataParser()).parse(data);
        this.data = data;
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
    }

    setGoal(affixes) {
        if (affixes) {
            for (var i = 0; i < affixes.length; i++) {
                let affix = affixes[i];
                if (!affix.code || !this.affixDB[affix.code]) {
                    return;
                }
            }
        }
        else return;
        this.pageTreeRoot = (new PageTreeNode(true)).setPage(
            (new Page()).addFodders(
                (new Fodder()).addAffixes(
                    affixes
                )
            )
        );
    }

    validateAffixes(affixes) {
        // TODO
    }

    getChoicesForAffixes(affixes) {
        if (!affixes || !Array.isArray(affixes)) return;
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
        let page = buildPageInPyramid(affixes, targetNumSlots, this);

        if (shouldSpread) {
            page = this.spreadFodders(page, targetNumSlots);
        }

        return page;

        function buildPageInPyramid(affixes, targetNumSlots, that) {
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
                if (that.affixDB[affix.code] && that.affixDB[affix.code].choices
                    && that.affixDB[affix.code].choices.length <= 0
                    && !that.isSpecialAbility(affix)) {
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
                page.fodders[pageStartIdx].addAffixes([ nontransferables[i] ]);
                pageStartIdx++; // Essentially locks the currrent fodder from edits
            }
            // FOR TRANSFERABLES
            // sort affixes by max transfer rate
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
                let placements = that.getPossiblePlacements(affix, page, pageStartIdx);
                let overlaps = placements.overlaps;
                let nooverlaps = placements.nooverlaps;

                // Try placing on best overlap
                if (overlaps.length > 0) {
                    // sort overlaps by rate
                    overlaps.sort((a, b) => b.compoundRate - a.compoundRate);
                    if (page.fodders[overlaps[0].index]) {
                        page.fodders[overlaps[0].index].addAffixes([ affix ]);
                    }
                }
                else if (nooverlaps.length > 0) { // Or try placing on best non-overlap
                    // sort overlaps by rate
                    nooverlaps.sort((a, b) => b.compoundRate - a.compoundRate);
                    if (page.fodders[nooverlaps[0].index]) {
                        page.fodders[nooverlaps[0].index].addAffixes([ affix ]);
                    }
                }
                else {
                    // Or something went wrong and affix cannot be placed anywhere
                    return null;
                }
            }
            return page;
        }

        
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

    spreadFodders(page, targetNumSlots) {
        if (!(page instanceof Page) || page.fodders.length <= 1) return null;
        // sort fodders based on slot count
        page.fodders.sort((fodderA, fodderB) => fodderB.affixes.length > fodderA.affixes.length);
        // while highest slot fodder (first) and lowest slot fodder (last) have count difference of at least 2
        while (Math.abs(page.fodders[0].length - page.fodders[page.length - 1]) > 1) {
            // pick fodder with highest slot (first)
            let fodder = page.fodders[0];
            // get boundary index for fodders with at least 2 slots less than highest slot fodder
            let boundaryIdx = -1;
            for (var i = 1; i < page.fodders.length; i++) {
                if (Math.abs(fodder.length - page.fodders[i]) > 1) {
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
                return placementA.numOverlaps - placementB.numOverlaps;
            });
            // from affix with lowest to highest overlap count
            let toPageIdx = -1;
            let fromAffixIdx = -1;
            let maxOverlapCount = 0;
            for (var i = 0; i < fodder.affixes.length; i++) {
                let affix = fodder.affixes[i];
                // for fodders at boundary index until end
                for (var j = boundaryIdx; j < page.fodders.length; j++) {
                    // get placement of affix on fodder
                    let placement = this.getPlacement(affix, page.fodders[0], 0, targetNumSlots);
                    // track affix and fodder with highest overlap count
                    if (placement && placement.numOverlaps >= maxOverlapCount) {
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
            page.fodders.sort((fodderA, fodderB) => fodderB.affixes.length > fodderA.affixes.length);
        }
        let minNumAffixes = 0;
        while (page.fodders[0].affixes.length != minNumAffixes) {
            for (var j = page.fodders.length - 1; j >= 0; j--) {
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
                        || this.testExcludePattern(affix, fodderAffix)) {
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
                        if (receptorRateFactor != 1) {
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
            nooverlaps: []
        }
        for (var j = pageStartIdx; j < page.fodders.length; j++) {
            let placement = this.getPlacement(affix, page.fodders[j], j, targetNumSlots);
            if (placement) {
                if (placement.overlap) placements.overlaps.push(placement.data);
                else placements.nooverlaps.push(placement.data);
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

    toURL() {
        let url = '/#!' + this.pageTreeRoot.toURL();
    }

    addPageTreeNodes(pageTreeNodes) {
        this.pageTreeRoot.addPageTreeNodes(pageTreeNodes)
        return this;
    }

    removePageTreeNodes(pageTreeNodes) {
        this.pageTreeRoot.removePageTreeNodes(pageTreeNodes);
        return this;
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

    toURL() {
        let url = '';
        for (var i = 0; i < this.size(); i++) {
            if (this.children[i] instanceof Page) {
                url += this.children[i].toURL();
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
                if (pageTreeNode && pageTreeNode instanceof PageTreeNode
                    && !pageTreeNode.isGoal) { // Cannot have goal as a child
                    pageTreeNode.addRateBoostOptions(this.rateBoostOptions);
                    pageTreeNode.addPotentialOptions(this.potentialOptions);
                    this.children.push(pageTreeNode);
                }
            }
        }
        return this;
    }

    setPage(page) {
        if (page && page instanceof Page) {
            this.page = page;
        }
        this.page.addRateBoostOptions(this.rateBoostOptions);
        this.page.addPotentialOptions(this.potentialOptions);
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

    addRateBoostOptions(options) {
        if (options) {
            if (!Array.isArray(options)) options = [options];
            for (var i = 0; i < options.length; i++) {
                let rateBoostOption = options[i];
                if (rateBoostOption && typeof rateBoostOption === 'string'
                    && !this.rateBoostOptions.includes(rateBoostOption)) {
                    this.rateBoostOptions.push(rateBoostOption);
                    this.page.addRateBoostOptions(rateBoostOption);
                    for (var j = 0; j < this.size(); j++) {
                        this.children[j].addRateBoostOptions(rateBoostOption);
                    }
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
                if (potentialOption && typeof potentialOption === 'string'
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
            && this.page && fodderIdx < this.page.fodders.length
            && pageIdx < this.children.length) {
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
        this.isSameGear = false;
        this.rateBoostIdx = 0;
        this.potentialIdx = 0;
        this.connectedTo = null;
    }

    toURL() {
        let url = '';
        for (var i = 0; i < this.size(); i++) {
            url += ((i == 0) ? 's=' : (i + '=')) + this.fodders[i].toURL() + '&';
        }
        url += 'r=';
        if (this.connectedTo) {
            url += this.connectedTo.toURL();
        }
        url += '&o=';
        if (this.rateBoostOptions && this.rateBoostOptions[this.rateBoostIdx]) {
            url += this.rateBoostOptions[this.rateBoostIdx].value;
        }
        // TODO for Special Ability like elegant and grace
        if (this.potentialOptions && this.potentialOptions[this.potentialIdx]) {
            url += '.' + this.potentialOptions[this.potentialIdx].value;
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

    connectTo(fodder) {
        if (fodder == this.connectedTo) return this;
        if (fodder == null || fodder instanceof Fodder) {
            this.connectTo(null);
            this.connectedTo = fodder;
            fodder.connectTo(this);
        }
        return this;
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
                if (rateBoostOption && typeof rateBoostOption === 'string'
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
                if (potentialOption && typeof potentialOption === 'string'
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
        this.successRate = -1;
        this.connectedTo = null;
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

    connectTo(page) {
        if (page == this.connectedTo) return this;
        if (page == null || page instanceof Page) {
            this.connectTo(null);
            this.connectedTo = page;
            page.connectTo(this);
        }
        return this;
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
}

function buildPageForAffixes(affixArray) {
    if (!affixArray || !Array.isArray(affixArray) || affixArray.length <= 0
        || affixArray.length > MAX_NUM_AFFIX || !abilityMap) return null;

    // GET ALL CHOICES
    let choiceTable = [];
    for (var i = 0; i < affixArray.length; i++) {
        if (abilityMap[affixArray[i]]) {
            let choices = abilityMap[affixArray[i]].choices;
            choiceTable.push(choices);
        }
    }

    // CHECK OVERLAPS
}