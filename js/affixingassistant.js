/**
 * Affixing Assistant
 * 
 * @author malulleybovo (2018)
 * @license GNU General Public License v3.0
 */

const MAX_NUM_AFFIX = 8;
const MAX_NUM_FODDERS = 6;
const RECEPTOR_REGEX = /(X[A-F][0-9]{2})/;
const AFFIX_REL_SOUL = "soul";

class Assistant {
    constructor(data) {
        // Immutable variables (properties can still change)
        this.IDEAL_MIN_PAGE_SIZE = 3;
        this.affixDB = (new AffixDataParser()).parse(data);
        this.data = data;
        this.rateBoostOptions = [];
        this.potentialOptions = [];
        this.boostWeekIdx = 0; // Boost idx from boost week
        this.boostWeekVals = [0, 5, 10]; // Boost values from boost week
        this.trainerCode = "VO01";
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
        this.activePageTreeNode = null;
        this.activeFodder = null;
    }

    setGoal(affixes) {
        if (!this.validateAffixes(affixes)) return;
        this.pageTreeRoot = (new PageTreeNode(true)).setPage(
            (new Page()).addFodders(
                (new Fodder()).addAffixes(
                    affixes
                ).setGoal(true)
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
                try {
                    let msg = (ASSISTANT.pageTreeRoot) ? ASSISTANT.pageTreeRoot.toString() : `root={${ASSISTANT.pageTreeRoot}}`;
                    gaRequests.sendException(msg)
                } catch (e) { }
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
        if (!choicesArray || !Array.isArray(choicesArray)
            || choicesArray.length <= 0 || !this.affixDB) return null;
        let numAbilityFactorChoices = choicesArray.filter((a) => a != null && a.isAbilityFactor).length;
        let numNormalChoices = choicesArray.length - numAbilityFactorChoices;
        if (numNormalChoices > MAX_NUM_AFFIX) return null;

        let lists = [];
        for (var i = 0; i < choicesArray.length; i++) {
            if (choicesArray[i] && choicesArray[i].materials) {
                lists.push(choicesArray[i].materials.slice());
            }
        }

        return this.unionOfListsWithDuplicates(lists);
    }

    /**
     * Builds a Page that produces the desired goal through the choices given
     * such that success rate and overlap count for making each of the fodders
     * in the page are maximized. The page success rate is already determined
     * by the choices given, so this algorithm optimizes each of the fodders
     * that go into this page to further facilitate affixing
     *
     * @param choices The choices to make each ability needed in the goal
     * @param targetNumSlots The desired number of slots on the outcome
     * @param shouldSpread If true, will try to fit the choices in all
     * available fodders. Otherwise, will try to condense the choices in the
     * minimum number of fodders possible such that success rate and overlap
     * count are maximized
     * @param shouldUseTrainer If true, ensures that the outcome contains a
     * Guidance Trainer instance to give additional boost
     * @returns The page that produces the goal given by the choices
     */
    buildPageWith(choices, targetNumSlots, shouldSpread, shouldUseTrainer) {
        let affixes = this.getAffixInstancesInvolvedIn(choices);
        if (!affixes || !Array.isArray(affixes) || !this.affixDB) return null;
        let numSpecialAbilityFactor = 0;
        let numAddAbility = 0;
        for (var i = 0; i < choices.length; i++) {
            let choice = choices[i];
            if (!choice) continue;
            if (choice.isAbilityFactor) numSpecialAbilityFactor++;
            if (choice.isAddAbilityItem) numAddAbility++;
        }
        // Check if theres nothing to be added
        if (affixes.length <= 0
            && numSpecialAbilityFactor <= 0
            && numAddAbility <= 0) return null;

        // Generate new page
        let page = new Page();
        let fodders = [];
        for (var i = 0; i < page.CAPACITY; i++) { // One list of affixes per fodder
            fodders.push(new Fodder());
        }
        page.addFodders(fodders);
        let pageStartIdx = 0;

        if (shouldUseTrainer // If using Guidance Trainer but not transfering it
            && !affixes.includes(this.affixDB[this.trainerCode].abilityRef)) {
            // Add one instance of Guidance Trainer just to increase success rate
            affixes.push(this.affixDB[this.trainerCode].abilityRef);
        }
        // Sort the affixes by success rate
        this.sortAffixesBySuccessRate(affixes);

        // separate affixes into nontransferables and affixes
        let transferablesData = this.getTransferablesAndNonTransferables(affixes);
        let nontransferables = transferablesData.nontransferables;
        let transferables = transferablesData.transferables;

        // FOR NONTRANSFERABLES
        for (var i = 0; i < nontransferables.length; i++) {
            if (pageStartIdx >= page.fodders.length) {
                // Something went wrong, too many nontransferables to fit
            }
            let hasAddedToExisting = false;
            if (/^X[ACF]/.test(nontransferables[i].code)) {
                for (var j = 0; j < page.size() && j < pageStartIdx; j++) {
                    for (var k = 0; k < page.fodders[j].size(); k++) {
                        if (/^X[ACF]/.test(page.fodders[j].affixes[k].code)
                            && page.fodders[j].affixes[k].code != nontransferables[i].code) {
                            page.fodders[j].addAffixes([nontransferables[i]]);
                            hasAddedToExisting = true;
                            break;
                        }
                    }
                    if (hasAddedToExisting) break;
                }
            }
            if (hasAddedToExisting) continue;
            // place receptor on a separate fodder
            page.fodders[pageStartIdx].addAffixes([nontransferables[i]]);
            pageStartIdx++; // Essentially locks the currrent fodder from edits
        }

        // FOR TRANSFERABLES
        // Generate overlap map
        let affLists = transferables.map(a => [a]);
        let conflictValuesUsed = new Set();
        let currLvl = 1;
        while (page.CAPACITY - pageStartIdx > 0) {
            // If spreading, stop when able to fit the affix lists within a page
            if (shouldSpread && affLists.length <= page.CAPACITY - pageStartIdx)
                break;
            // Check if checking level exceeded the permitted number os slots
            if (currLvl > targetNumSlots) break;

            let bestPairsData = this.getBestPairsData(affLists, targetNumSlots,
                currLvl, page.CAPACITY - pageStartIdx, conflictValuesUsed);
            if (bestPairsData == null) break;
            let bestPairs = bestPairsData.bestPairs;
            let maxConflicts = bestPairsData.maxConflicts;

            // Check if multiple pairs are the best
            let pairIdxsToBeMerged = [];
            let pairIdxsUsed = new Set();
            // Check if any two pairs reference each other
            for (var i = 0; i < bestPairs.length; i++) {
                let pairA = bestPairs[i];
                for (var j = i + 1; j < bestPairs.length; j++) {
                    let pairB = bestPairs[j];
                    if (pairA.forRowIdx == pairB.best.idx
                        && pairB.forRowIdx == pairA.best.idx) {
                        // Merge the two pairs
                        pairIdxsToBeMerged.push(i);
                        pairIdxsUsed.add(i);
                        pairIdxsUsed.add(j);
                        break;
                    }
                }
            }
            // Check if any other pairing can be done
            // without conflicting with other chosen pairs
            for (var i = 0; i < bestPairs.length
                && !pairIdxsUsed.has(i); i++) {
                let pairA = bestPairs[i];
                let hasConflict = false;
                if (pairIdxsUsed.has(pairA.forRowIdx)
                    || pairIdxsUsed.has(pairA.best.idx))
                    hasConflict = true;
                if (!hasConflict) {
                    pairIdxsToBeMerged.push(i);
                    pairIdxsUsed.add(pairA.forRowIdx);
                    pairIdxsUsed.add(pairA.best.idx);
                }
            }
            // If nothing can be done
            if (pairIdxsToBeMerged.length == 0) {
                // Try raising the checking level
                if (conflictValuesUsed.has(maxConflicts)) {
                    currLvl++;
                    conflictValuesUsed = new Set();
                }
                else conflictValuesUsed.add(maxConflicts);
            }

            let listsToBeRemoved = [];
            // Merge all the best independent pairs
            for (var i = 0; i < pairIdxsToBeMerged.length; i++) {
                let pairIdxToBeMerged = pairIdxsToBeMerged[i];
                let pair = bestPairs[pairIdxToBeMerged];
                let listIdxA = pair.forRowIdx;
                let listIdxB = pair.best.idx;
                affLists[listIdxA] = affLists[listIdxA]
                    .concat(affLists[listIdxB]);
                listsToBeRemoved.push(affLists[listIdxB]);
            }

            // Cleanup the comsumed lists of the pairs
            for (var i = 0; i < listsToBeRemoved.length; i++) {
                let listToBeRemoved = listsToBeRemoved[i];
                affLists.splice(affLists.indexOf(listToBeRemoved), 1);
            }
        }

        // Check if could not fit the abilities within
        // the number of fodders available
        if (affLists.length > page.CAPACITY - pageStartIdx)
            return 'Error: Page size exceeded limit by ' + (affLists.length
                - page.CAPACITY + pageStartIdx);
        // Check if some mistake happened that caused
        // needed abilities to disappear
        if (affLists.reduce((a, b) => a + b.length, 0) != transferables.length)
            return 'Error: Affixes ended up being removed by mistake';

        // Add the optimized selection of abilities for each fodder to 
        // the fodders in the new page
        affLists.forEach((list, listIdx) => {
            if (!page.fodders[pageStartIdx + listIdx]) return;
            page.fodders[pageStartIdx + listIdx].addAffixes(list);
        });

        // Sort fodders to display the optimal Main Fodder
        this.sortPageFodders(page);

        // Add any extra junk ability to ensure every fodder meets the 
        // target number of slots (otherwise the gear cannot be affixed)
        this.fillPageWithJunk(page, targetNumSlots);

        // Add any Special Ability Factor
        let choicesWithFactor = [];
        for (var i = 0; i < choices.length; i++) {
            let choice = choices[i];
            if (choice.isAbilityFactor && choice.abilityRef) {
                choicesWithFactor.unshift(choice);
            }
        }
        for (var i = 0; i < page.size(); i++) {
            if (choicesWithFactor.length <= 0) break;
            let fodder = page.fodders[i];
            let transferablesData = this.getTransferablesAndNonTransferables(fodder.affixes);
            let hasNonTransferable = transferablesData.hasNonTransferable;
            if (!hasNonTransferable) {
                fodder.setSpecialAbilityFactor(
                    choicesWithFactor.pop().abilityRef
                );
            }
        }

        return page;
    }

    /**
     * Gets the best pairs of lists of abilities within affLists
     * to be merged such that success rate and overlap count are
     * maximized while respecting constraints on target slot count
     * and the number of fodders available to place abilities on.
     *
     * @param affLists The list of lists of abilities to find the pair on
     * @param targetNumSlots The target number of slots for the outcome
     * @param currLvl The current level of checking (checks lists of
     * abilities with up to N abilities)
     * @param numFoddersLeft The number of fodders available
     * @param conflictValuesUsed History of maximum conflict values
     * that have already been checked and are done with
     * @returns {
     *     bestPairs: The best pairs found among lists
     *     maxConflicts: The maximum number of conflicts among lists
     * }, or null if there nothing more that can be done
     */
    getBestPairsData(affLists, targetNumSlots, currLvl, numFoddersLeft, conflictValuesUsed) {
        let maxConflicts = -1;
        let maxRate = 0;
        let rowIdxsWithMostConflict = [];
        let placement = this.getPlacementMappingFor(affLists, targetNumSlots);
        placement.successMap.forEach((a, idx) => {
            let conflictCount = a.filter(b => b <= 0).length;
            // Ignore list of abilities that exceeds the current checking level
            if (affLists[idx].length > currLvl) return;
            // Ignore rows with conflict count already done with
            if (conflictValuesUsed.has(conflictCount)) return;
            // Go for the rows with the highest number of conflicts first
            if (conflictCount > maxConflicts) {
                maxConflicts = conflictCount;
                rowIdxsWithMostConflict = [idx];
                maxRate = Math.max(...placement.successMap[idx]);
            }
            // Select all rows with the maximum conflict count
            else if (conflictCount == maxConflicts) {
                let currMax = Math.max(...placement.successMap[idx]);
                if (currMax > maxRate) {
                    maxRate = currMax;
                    rowIdxsWithMostConflict = [idx];
                }
                else if (currMax == maxRate) {
                    rowIdxsWithMostConflict.push(idx);
                }
            }
        });
        // If no row with highest uncheck conflict count, nothing more can be done
        if (rowIdxsWithMostConflict.length == 0
            && placement.successMap[0].length <= numFoddersLeft) return null;

        let bestPairs = [];
        let bestRate = -100;
        let bestOv = -100;
        for (var i = 0; i < placement.successMap.length; i++) {
            // Skip rows with conflict count that are done with
            if (!rowIdxsWithMostConflict.includes(i)) continue;
            let rateRow = placement.successMap[i].slice(0);
            let ovRow = placement.overlapMap[i].slice(0);
            // Get highest success rate in row
            let bestInRateRow = Math.max(...rateRow);
            if (bestInRateRow <= 0) continue;
            let bestRateIdxs = [];
            rateRow.forEach((a, idx) => a == bestInRateRow ? bestRateIdxs.push(idx) : null);
            // Get highest number of overlaps in row
            let selectedInOvRows = ovRow.filter((a, idx) => bestRateIdxs.includes(idx));
            let bestInOvRow = Math.max(...selectedInOvRows);
            let bestOvIdxs = [];
            selectedInOvRows.forEach((a, idx) => a == bestInOvRow ? bestOvIdxs.push(idx) : null);

            let bestOvIdx = bestOvIdxs[0];
            let bestRateIdx = bestRateIdxs[bestOvIdx];

            if (bestRateIdx === undefined || bestOvIdx === undefined)
                continue;

            let newPair = {
                forRowIdx: i,
                best: {
                    idx: bestRateIdx,
                    rate: rateRow[bestRateIdx],
                    ov: ovRow[bestRateIdx]
                }
            };
            // Get the best pair overall
            if (rateRow[bestRateIdx] > bestRate) { // Prioritize success rate
                bestRate = rateRow[bestRateIdx];
                bestOv = ovRow[bestRateIdx];
                bestPairs = [newPair];
            }
            else if (rateRow[bestRateIdx] == bestRate) { // Then overlap count
                if (ovRow[bestRateIdx] > bestOv) {
                    bestRate = rateRow[bestRateIdx];
                    bestOv = ovRow[bestRateIdx];
                    bestPairs = [newPair];
                }
                else {
                    bestPairs.push(newPair);
                }
            }
        }
        return {
            bestPairs: bestPairs,
            maxConflicts: maxConflicts
        };
    }

    /**
     * Fills a page with junk abilities up to a desired
     * slot count. Existing abilities in the page fodders
     * are kept.
     *
     * @param page The page to fill with junk abilities
     * @param targetNumSlots The target slot count to fill
     */
    fillPageWithJunk(page, targetNumSlots) {
        if (!(page instanceof Page)) return;
        for (var i = 0; i < page.size(); i++) {
            let fodder = page.fodders[i];
            let junks = [];
            for (var j = 0; j < this.junkCodes.length; j++) {
                let junk = this.affixDB[this.junkCodes[j]].abilityRef;
                if (fodder.affixes.includes(junk)) continue;
                if (fodder.size() + junks.length < targetNumSlots)
                    junks.push(junk);
                else break;
            }
            if (junks.length > 0) fodder.addAffixes(junks);
        }
    }

    /**
     * Sorts the fodders of a page by number of useful abilities
     * in each (lowwer to higher count). Junk abilities are
     * ignored. Fodders with only junk abilities are pushed to
     * last in the list of fodders.
     *
     * @param page The Page containing the fodders to sort
     */
    sortPageFodders(page) {
        if (!(page instanceof Page)) return;
        page.fodders.sort((a, b) => {
            // Leave fodders with nontransferables for last
            let numJunkInA = a.affixes.filter(a =>
                this.affixDB[a.code].choices.length == 0).length;
            let numJunkInB = b.affixes.filter(a =>
                this.affixDB[a.code].choices.length == 0).length
            if (numJunkInA > 0 || numJunkInA == a.affixes.length) return 1;
            if (numJunkInB > 0 || numJunkInB == b.affixes.length) return -1;
            // Sort fodders by lowest slots
            if (a.affixes.filter(a => !a.code.startsWith('Z')).length
                > b.affixes.filter(a => !a.code.startsWith('Z')).length)
                // Prioritize b, unless a has trainer
                return a.affixes.includes(
                    this.affixDB[this.trainerCode].abilityRef) ? -1 : 1;
            // Else prioritize a, unless b has trainer
            else return b.affixes.includes(
                this.affixDB[this.trainerCode].abilityRef) ? 1 : -1;
        });
    }

    /**
     * Sort a list of abilities by success rate given the implicit
     * constraints in the sorting algorithm. The sorting happens
     * on the list given, not on a clone of the list.
     *
     * @param affixes The abilities to sort
     * @returns A back reference to the given sorted list
     */
    sortAffixesBySuccessRate(affixes) {
        affixes.sort((affixA, affixB) => {
            // Lowest priority: Unsortable abilities
            if (!this.affixDB[affixA.code]) return 1;
            if (!this.affixDB[affixB.code]) return -1;
            // Second lowest priority: Junk abilities
            if (this.junkCodes.includes(affixA.code)) return 1;
            if (this.junkCodes.includes(affixB.code)) return -1;
            // Third lowest priority: Non-transferable abilities
            let affixAChoices = this.affixDB[affixA.code].choices;
            let affixBChoices = this.affixDB[affixB.code].choices;
            if (!affixAChoices[0]) return 1;
            if (!affixBChoices[0]) return -1;
            // Third highest priority: Abilities only transferable via SAF
            // or Add Ability Item
            let idealChoiceA = this.getBestChoiceFor(affixAChoices, true);
            let idealChoiceB = this.getBestChoiceFor(affixBChoices, true);
            if (!idealChoiceA || idealChoiceA.transferRate === undefined)
                return 1;
            if (!idealChoiceB || idealChoiceB.transferRate === undefined)
                return -1;
            // Second highest priority: Abilities made with non-transferables
            // Those with best choice containing a SAF, or add ability item
            idealChoiceA = this.getBestChoiceFor(affixAChoices, true, true);
            idealChoiceB = this.getBestChoiceFor(affixBChoices, true, true);
            if (!idealChoiceA || idealChoiceA.transferRate === undefined)
                return 1;
            if (!idealChoiceB || idealChoiceB.transferRate === undefined)
                return -1;
            // Highest priority: Transferable abilities with highest success
            // rate, yet lowest number of materials to make it
            let maxRateA = idealChoiceA.transferRate;
            let maxRateB = idealChoiceB.transferRate;
            let numMatA = idealChoiceA.materials.length;
            let numMatB = idealChoiceB.materials.length;
            if (maxRateA == maxRateB) return numMatA - numMatB;
            return maxRateB - maxRateA;
        });
        return affixes;
    }

    /**
     * Gets the choice among the given choices such that success rate
     * is maximized while also following the optional flag constraints
     * (should those be given).
     *
     * @param choices A list of choices sorted by highest success rate
     * @param noSAForAdd Flag to ignore choices via SAF or Add Ability
     * @param noMaterialWithSAForAddItem Flag to ignore choices
     * containing materials made only by SAF or Add Ability Item
     * @returns The choice with highest success rate such that the
     * optional constrainsts are followed. Null if not found.
     */
    getBestChoiceFor(choices, noSAForAdd, noMaterialWithSAForAddItem) {
        let idealChoice = null;
        for (var i = 0; i < choices.length; i++) {
            if (!choices[i]) continue;
            if (noSAForAdd) {
                 // Ignore choices through SAF and Add Ability Item
                if (choices[i].isAbilityFactor
                    || choices[i].isAddAbilityItem)
                    continue;
            }
            if (noMaterialWithSAForAddItem) {
                // Check for materials only made via SAF or Add Ability
                let badMaterials =
                    choices[i].materials.filter(a => {
                        // Check choices for making the material
                        // that do not involve SAF or Add Ability Item
                        let subChoices = this.affixDB[a.code].choices;
                        let subPossibilities = subChoices.filter(b =>
                            !b.isAbilityFactor && !b.isAddAbilityItem);
                        return subPossibilities.length == 0;
                    });
                if (badMaterials.length > 0) continue;
            }
            idealChoice = choices[i];
            break;
        }
        return idealChoice;
    }

    /**
     * Obtains data on how good or bad of a match each
     * entry of the input list is to one another.
     * This data comes in matrix form, divided by two categories: overlap (int)
     * and compound success rate (percentage). Overlap stands for the number
     * of ways to reuse a ability in the formula (i.e.: Vol Soul + Power III
     * overlap because it's possible to reuse the Vol Soul to produce Power III).
     * And compound success rate stands for the optimized success rate in making
     * a fodder by joining two lists of abilities given the best choices that
     * maximize ability transfer rate overlapping. Should there be any conflict
     * among abilities within the matrices, the respective values are default to -1.
     * 
     * @param affixLists A list of size N containing lists of abilities
     * @param optionalNumSlots (optional) The desired target number of slots.
     * @returns {
     *     forEntries: Back reference to the input param
     *     overlapMap: N x N matrix containing data on affixing overlap
     *     successMap: N x N matrix containing data on the compound success rate
     * }
     */
    getPlacementMappingFor(affixLists, optionalNumSlots) {
        let overlapMap = [];
        let successMap = [];
        affixLists.forEach((affixListA, i) => {
            let ovEntry = [];
            let successEntry = [];
            let testFodder = new Fodder();
            testFodder.addAffixes(affixListA);
            affixLists.forEach((affixListB, j) => {
                // Since the matrix is reflected across its diagonal,
                // reuse the already computing values for the reflection
                if (i > j) {
                    ovEntry.push(overlapMap[j][i]);
                    successEntry.push(successMap[j][i]);
                }
                // Placement on itself is impossible by default
                else if (i == j) {
                    ovEntry.push(-2);
                    successEntry.push(-2);
                }
                // Get the placement of every pair of abilities
                else {
                    let placement = this.getPlacement(affixListB, testFodder,
                        optionalNumSlots !== undefined ? optionalNumSlots
                            : testFodder.size() + affixListB.length);
                    ovEntry.push(placement.totalOverlaps);
                    successEntry.push(placement.compoundRate);
                }
            });
            overlapMap.push(ovEntry);
            successMap.push(successEntry);
        });
        return {
            forEntries: affixLists,
            overlapMap: overlapMap,
            successMap: successMap
        }
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

    /**
     * Gets the data on how well the affixes given fit in the fodder given.
     * This is measured by the number of overlaps between the affixes and the
     * fodder affixes as well as the optimized compound success rate of attempting
     * to make these affixes together. Overlap stands for the number
     * of ways to reuse a ability in the formula (i.e.: Vol Soul + Power III
     * overlap because it's possible to reuse the Vol Soul to produce Power III).
     * And compound success rate stands for the optimized success rate in making
     * a fodder by joining two lists of abilities given the best choices that
     * maximize ability transfer rate overlapping. Should there be any conflict
     * among abilities within the matrices, the respective values are default to -1.
     *
     * @param affixes The abilities to test against the fodder affixes
     * @param fodder The fodder containing abilities to test against the affixes
     * @param targetNumSlots The desired number of slots for the outcome fodder
     * @param testExceptionPairing (optional) Flag to perform aditional exception pairing
     * @returns {
     *     totalOverlaps: Number of overlaps between affixes and fodder abilities
     *     compoundRate: Maximized success rate for making fodder after adding the given affixes
     * }
     */
    getPlacement(affixes, fodder, targetNumSlots, testExceptionPairing = false) {
        if (affixes.length === undefined) affixes = [affixes];

        let newItem = {
            // Num of fodder abilities that overlap with the given affix
            totalOverlaps: 0,
            // Ideal success rate with the addition on the given affix
            compoundRate: 1
        }
        // if fodder is at capacity (either at same slot as result or at max 8)
        if (!(fodder instanceof Fodder)
            || !affixes || !this.affixDB
            || (targetNumSlots && affixes.length + fodder.affixes.length > targetNumSlots)
            || affixes.filter(a => !this.affixDB[a.code] || !this.affixDB[a.code].choices).length > 0) {
            // continue to next fodder
            newItem.compoundRate = -1;
            newItem.totalOverlaps = -1;
            return newItem;
        }

        for (var i = 0; i < affixes.length; i++) {
            let affix = affixes[i];
            let affixCodePreffix = affix.code.slice(0, 2);
            let affixChoices = this.affixDB[affix.code].choices;
            // if affix choices overlap with choices of any affix in fodder
            let numBadReceptorOverlaps = 0;

            // Check for conflicts with fodder
            for (var j = 0; j < fodder.size(); j++) {
                let fodderAffix = fodder.affixes[j];
                // if fodder contains affix code preffix or exclude pattern
                if (fodderAffix.code.startsWith(affixCodePreffix) // If of same type
                    || this.testExcludePattern(affix, fodderAffix, testExceptionPairing)) {
                    newItem.compoundRate = -1;
                    newItem.totalOverlaps = -1;
                    return newItem;
                }
                if (affixChoices[0] && affixChoices[0].isAddAbilityItem
                    && this.affixDB[fodderAffix.code].choices.length == 1
                    && this.affixDB[fodderAffix.code].choices[0].materials.includes(affix)) {
                    newItem.compoundRate = -1;
                    newItem.totalOverlaps = -1;
                    return newItem;
                }
                if (this.affixDB[fodderAffix.code].choices[0]
                    && this.affixDB[fodderAffix.code].choices[0].isAddAbilityItem
                    && affixChoices.length == 1
                    && affixChoices[0].materials.includes(fodderAffix)) {
                    newItem.compoundRate = -1;
                    newItem.totalOverlaps = -1;
                    return newItem;
                }
            }
        }

        let affixOptionsList = [];
        let fodderAffixOptionsList = [];
        fodder.affixes.forEach(affix => {
            fodderAffixOptionsList.push([]);
        });

        affixes.forEach(affix => {
            let goodOptions = [];
            let betterOptions = [];
            for (var i = 0; i < fodder.affixes.length; i++) {
                var fodderAffix = fodder.affixes[i];
                // Skip unknown and non-transferable abilities
                if (!this.affixDB[fodderAffix.code]
                    || !this.affixDB[fodderAffix.code].choices)
                    continue;

                let affixChoices = this.affixDB[affix.code].choices;
                let fodderAffixChoices = this.affixDB[fodderAffix.code].choices;

                let goodOption = {
                    successRate: 0,
                    type: null
                };
                // Get top choice that overlaps (which might involve a receptor)
                // Check for overlap with the affix itself
                let isOverlap = false;
                for (var j = 0; !isOverlap && j < fodderAffixChoices.length; j++) {
                    var fodderAffixChoice = fodderAffixChoices[j];
                    for (var k = 0; !isOverlap && k < fodderAffixChoice.materials.length; k++) {
                        let choiceAffix = fodderAffixChoice.materials[k];
                        // If ability matches any material from any choice 
                        // for making any of the fodder's abilities
                        if (affix == choiceAffix) {
                            let receptorMatches = fodderAffixChoice.materials.filter(
                                a => RECEPTOR_REGEX.test(a.code)).length;
                            // Ignore choices that involve receptors
                            // and are not guaranteed to transfer the ability
                            if (fodderAffixChoice.materials.filter(a => a.rel == AFFIX_REL_SOUL).length == 0
                                || receptorMatches == 0
                                || fodderAffixChoice.transferRate == 100) {
                                isOverlap = true;
                                goodOption.successRate = fodderAffixChoice.transferRate;
                                goodOption.type = 'affixMatchesFodderChoice';
                                break;
                            }
                        }
                    }
                }
                if (goodOption.type == null) {
                    // Get highest success rate for the fodder ability (avoid SAF if possible)
                    let bestChoiceFound = this.getBestChoiceFor(fodderAffixChoices, true);
                    goodOption.successRate = bestChoiceFound ? bestChoiceFound.transferRate : 0;
                    goodOption.type = 'noOverlap';
                }

                let betterOption = {
                    successRate: 0,
                    affixSuccessRate: 0,
                    type: null
                };

                // Check for overlaps between any fodder ability and the
                // choices for making the abilities given
                isOverlap = false;
                for (var j = 0; !isOverlap && j < affixChoices.length; j++) {
                    var affixChoice = affixChoices[j];
                    for (var k = 0; !isOverlap && k < affixChoice.materials.length; k++) {
                        let choiceAffix = affixChoice.materials[k];
                        if (choiceAffix == fodderAffix) {
                            let receptorMatches = affixChoice.materials.filter(
                                a => RECEPTOR_REGEX.test(a.code)).length;
                            // Ignore choices that involve receptors
                            // and are not guaranteed to transfer the ability
                            if (affixChoice.materials.filter(a => a.rel == AFFIX_REL_SOUL).length == 0
                                || receptorMatches == 0
                                || affixChoice.transferRate == 100) {
                                isOverlap = true;
                                betterOption.successRate = affixChoice.transferRate;
                                betterOption.type = 'fodderAffixMatchesAffixChoice';
                                break;
                            }
                        }
                    }
                }

                // Check for overlaps between the choices for making each of the fodder's abilities
                // and the choices for making each of the given abilities
                let m = 0;
                let n = 0;
                while (m < fodderAffixChoices.length && n < affixChoices.length) {
                    let fodderAffixChoice = fodderAffixChoices[m];
                    let choice = affixChoices[n];

                    let combined = this.getAffixInstancesInvolvedIn([choice, fodderAffixChoice]);
                    if (combined.length < choice.length + fodderAffixChoice) {
                        let receptorMatches = combined.materials.filter(
                            (mat) => mat.code.match(RECEPTOR_REGEX)).length;
                        let maxRate = Math.max(
                            choice.transferRate,
                            fodderAffixChoice.transferRate);
                        // Ignore choices that involve receptors
                        // and are not guaranteed to transfer the ability
                        if (combined.materials.filter(a => a.rel == AFFIX_REL_SOUL).length == 0
                            || receptorMatches == 0
                            || maxRate == 100) {
                            if (fodderAffixChoice.transferRate > betterOption.successRate) {
                                betterOption.successRate = fodderAffixChoice.transferRate;
                                betterOption.affixSuccessRate = choice.transferRate;
                                betterOption.type = 'fodderChoiceMatchesAffixChoice';
                                break;
                            }
                        }
                    }

                    // goes through 0:0, 0:1, 1:0, 1:1, 1:2, 2:1, 2:2 ... m:n
                    // ensures it checks lowest array indices for both arrays first
                    if (m >= fodderAffixChoices.length - 1) n++;
                    else if (n >= affixChoices.length - 1) m++;
                    else {
                        if ((n == m) || (m - n == 1)) n++;
                        else if (n - m == 1) { m++; n--; }
                    }
                }
                if (betterOption.type == null && affixChoices.length > 0) {
                    // Get highest success rate for the fodder ability (avoid SAF if possible)
                    let bestChoiceFound = this.getBestChoiceFor(fodderAffixChoices, true);
                    betterOption.successRate = bestChoiceFound ? bestChoiceFound.transferRate : 0;
                    betterOption.type = 'noOverlap';
                }

                goodOptions.push(goodOption);
                betterOptions.push(betterOption);
            }

            affixOptionsList.push(betterOptions);

            goodOptions.forEach((goodOption, optionIdx) => {
                fodderAffixOptionsList[optionIdx].push(goodOption);
            });
        });

        // Search for a best choice among the better choices first
        // (choices involving overlap between abilities)
        let listIdxDone = [];
        let optionsIdxDone = [];
        while (affixOptionsList.length > listIdxDone.length) {
            let bestListIdx = -1;
            let bestOptionIdx = -1;
            let maxRate = 0;
            let bestOption = null;
            let bestLastResortListIdx = -1;
            let bestLastResort = null;
            affixOptionsList.forEach((affixOptions, listIdx) => {
                if (listIdxDone.includes(listIdx)) return;
                affixOptions.forEach((affixOption, optionIdx) => {
                    if (optionsIdxDone.includes(optionIdx)) return;
                    switch (affixOption.type) {
                        // If best option is from fodder ability and choice for ability given,
                        // set success to the success of the choice since it needs to be that
                        // choice in order to make use of the benefits that come with it
                        case 'fodderAffixMatchesAffixChoice':
                            if (!bestOption || affixOption.successRate > maxRate) {
                                bestListIdx = listIdx;
                                bestOptionIdx = bestOption;
                                maxRate = affixOption.successRate;
                                bestOption = affixOption;
                            }
                            break;
                        // If best option is from fodder choice and choice for ability given,
                        // set success to compound success of the choices since both need
                        // to be selected in order to gain th benefit
                        case 'fodderChoiceMatchesAffixChoice':
                            if (!bestOption || (affixOption.successRate
                                * affixOption.affixSuccessRate > maxRate)) {
                                bestListIdx = listIdx;
                                bestOptionIdx = bestOption;
                                maxRate = affixOption.successRate * affixOption.affixSuccessRate;
                                bestOption = affixOption;
                            }
                            break;
                        // If no benefit can be gained, setup a last resort option just in case
                        // Such option is the best non-SAF, non-Add Ability choice for the ability
                        case 'noOverlap':
                            if (!bestLastResort || affixOption.successRate > bestLastResort.successRate) {
                                bestLastResortListIdx = optionIdx;
                                bestLastResort = affixOption;
                            }
                            break;
                    }
                });
            });

            // After picking the best choice possible, calculate the overall success
            // and overlap count in adding the abilities given to the fodder
            if (bestOption) {
                switch (bestOption.type) {
                    case 'fodderAffixMatchesAffixChoice':
                        newItem.totalOverlaps++;
                        // Only one multiplication since only one choice picked
                        newItem.compoundRate *= bestOption.successRate;
                        newItem.compoundRate /= 100;
                        break;
                    case 'fodderChoiceMatchesAffixChoice':
                        newItem.totalOverlaps++;
                        // Two multipl. since two choices picked
                        newItem.compoundRate *= bestOption.successRate;
                        newItem.compoundRate *= bestOption.affixSuccessRate;
                        newItem.compoundRate /= 10000;
                        optionsIdxDone.push(bestOptionIdx);
                        break;
                }
                listIdxDone.push(bestListIdx);
            }
            // If no best choice could be found, go with the last resort
            else if (bestLastResort) {
                // Only one multiplication since only one choice picked
                newItem.compoundRate *= bestLastResort.successRate;
                newItem.compoundRate /= 100;
                listIdxDone.push(bestLastResortListIdx);
            }
            else break;
        }

        // Then search for the best among the good choices
        while (fodderAffixOptionsList.length > optionsIdxDone.length) {
            let bestListIdx = -1;
            let bestOptionIdx = -1;
            let maxRate = 0;
            let bestOption = null;
            let bestLastResortOptionIdx = -1;
            let bestLastResort = null;
            fodderAffixOptionsList.forEach((fodderAffixOptions, optionsIdx) => {
                if (optionsIdxDone.includes(optionsIdx)) return;
                fodderAffixOptions.forEach((affixOption, optionIdx) => {
                    switch (affixOption.type) {
                        case 'affixMatchesFodderChoice':
                            if (!bestOption || affixOption.successRate > bestOption.successRate) {
                                bestOptionIdx = optionIdx;
                                bestOption = affixOption;
                            }
                            break;
                        case 'noOverlap':
                            if (!bestLastResort || affixOption.successRate > bestLastResort.successRate) {
                                bestLastResortOptionIdx = optionIdx;
                                bestLastResort = affixOption;
                            }
                            break;
                    }
                });
            });
            // After picking the best choice possible, calculate the overall success
            // and overlap count in adding the abilities given to the fodder
            if (bestOption) {
                newItem.totalOverlaps++;
                // Only one multiplication since only one choice picked
                newItem.compoundRate *= bestOption.successRate;
                newItem.compoundRate /= 100;
                optionsIdxDone.push(bestOptionIdx);
            }
            // If no best choice could be found, go with the last resort
            else if (bestLastResort) {
                // Only one multiplication since only one choice picked
                newItem.compoundRate *= bestLastResort.successRate;
                newItem.compoundRate /= 100;
                optionsIdxDone.push(bestLastResortOptionIdx);
            }
            else break;
        }

        // Make sure that an optimal success rate and overlap was chosen for every ability
        fodderAffixOptionsList.forEach((fodderAffixOptions, optionsIdx) => {
            if (optionsIdxDone.includes(optionsIdx)) return;
            let bestOptionIdx = -1;
            let bestOption = null;
            fodderAffixOptions.forEach((affixOption, optionIdx) => {
                if (affixOption.type != 'noOverlap') return;
                if (!bestOption || affixOption.successRate > bestOption.successRate) {
                    bestOptionIdx = optionIdx;
                    bestOption = affixOption;
                }
            });
            if (bestOption) {
                if (bestOption.type == 'affixMatchesFodderChoice')
                    newItem.totalOverlaps++;
                newItem.compoundRate *= bestOption.successRate;
                newItem.compoundRate /= 100;
                optionsIdxDone.push(bestOptionIdx);
            }
        });

        return newItem;
    }

    getPossiblePlacements(affix, page, pageStartIdx, targetNumSlots) {
        let placements = {
            overlaps: [],
            nooverlaps: [],
            compoundRates: []
        }
        for (var j = pageStartIdx; j < page.fodders.length; j++) {
            let placement = this.getPlacement(affix, page.fodders[j], targetNumSlots);
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

    testExcludePattern(affixA, affixB, testExceptionPairing) {
        if (!this.data || !this.data.excludePattern || !affixA
            || !affixB || !affixA.code || !affixB.code
            || !this.data.excludePattern.select) return true;

        // If not an exception pair
        if (!this.isExceptionPair(affixA, affixB, testExceptionPairing)) {
            // Check for conflict when one or both abilities are receptors
            if (RECEPTOR_REGEX.test(affixA.code)
                || RECEPTOR_REGEX.test(affixB.code)) return true;
            // Check for conflict when one or both are non-transferable but not receptor
            // such as Temptation and Another History
            if (this.affixDB[affixA.code].choices.length == 0
                && !RECEPTOR_REGEX.test(affixB.code)) return true;
            if (this.affixDB[affixB.code].choices.length == 0
                && !RECEPTOR_REGEX.test(affixA.code)) return true;
        }

        let codeA = affixA.code;
        let codeB = affixB.code;
        let patterns = this.data.excludePattern.select;
        for (var i = 0; i < patterns.length; i++) {
            if (!Array.isArray(patterns[i])) patterns[i] = [patterns[i]];
            let checkA = false;
            let checkB = false;
            for (var j = 0; j < patterns[i].length; j++) {
                if (patterns[i][j].endsWith(':regex')) {
                    let testRegex = new RegExp(patterns[i][j].slice(0, patterns[i][j].length - 6))
                    if (testRegex.test(codeA)) checkA = true;
                    if (testRegex.test(codeB)) checkB = true;
                    continue;
                }
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

    testSwap(fodderA, affixAIdx, fodderB, affixBIdx) {
        if (affixAIdx < 0 || !(fodderA instanceof Fodder) || affixAIdx >= fodderA.size()
            || affixBIdx < 0 || !(fodderB instanceof Fodder) || affixBIdx >= fodderB.size())
            return false;
        let affixA = fodderA.affixes[affixAIdx];
        let affixB = fodderB.affixes[affixBIdx];
        // Ignore meaningless swaps
        if (affixA.code == affixB.code
            || fodderA == fodderB
            || (affixA.code.startsWith('Z') && affixB.code.startsWith('Z'))) return false;
        let cloneA = fodderA.clone((a) => a != affixA && !a.code.startsWith('Z'));
        let cloneB = fodderB.clone((b) => b != affixB && !b.code.startsWith('Z'));
        let testA = this.getPlacement(affixA, cloneB, fodderB.size(), true /*pairing exception enabled*/);
        let testB = this.getPlacement(affixB, cloneA, fodderA.size(), true /*pairing exception enabled*/);
        return testA && testB;
    }

    getSwap(fodderA, affixAIdx, fodderB, affixBIdx) {
        if (affixAIdx < 0 || !(fodderA instanceof Fodder) || affixAIdx >= fodderA.size()
            || affixBIdx < 0 || !(fodderB instanceof Fodder) || affixBIdx >= fodderB.size())
            return false;
        let affixA = fodderA.affixes[affixAIdx];
        let affixB = fodderB.affixes[affixBIdx];
        // Ignore meaningless swaps
        if (affixA.code == affixB.code
            || fodderA == fodderB
            || (affixA.code.startsWith('Z') && affixB.code.startsWith('Z'))) return false;
        let cloneA = fodderA.clone((a) => a != affixA && !a.code.startsWith('Z'));
        let cloneB = fodderB.clone((b) => b != affixB && !b.code.startsWith('Z'));
        let testA = this.getPlacement(affixA, cloneB, fodderB.size(), true /*pairing exception enabled*/);
        let testB = this.getPlacement(affixB, cloneA, fodderA.size(), true /*pairing exception enabled*/);
        return {
            result: testA && testB,
            dataA: testA,
            dataB: testB
        }
    }

    isExceptionPair(affixA, affixB, isLenient = false) {
        if (!affixA || !affixB || !affixA.code || !affixB.code || !this.affixDB
            || !this.affixDB[affixA.code] || !this.affixDB[affixB.code]) return false;

        let isExcPair = false;
        let testCases = this.data.pairingExceptions.strict.slice(0);
        if (isLenient) testCases.push(...this.data.pairingExceptions.lenient.slice(0));
        for (var i = 0; i < testCases.length; i++) {
            let excPair = testCases[i];
            if (excPair.length < 2) continue;

            let hasAffixAPassedA = affixA.code.startsWith('Z') || excPair[0] == "" || affixA.code.startsWith(excPair[0]),
                hasAffixAPassedB = affixA.code.startsWith('Z') || excPair[1] == "" || affixA.code.startsWith(excPair[1]);
            let hasAffixBPassedA = affixB.code.startsWith('Z') || excPair[0] == "" || affixB.code.startsWith(excPair[0]),
                hasAffixBPassedB = affixB.code.startsWith('Z') || excPair[1] == "" || affixB.code.startsWith(excPair[1]);
            if ((hasAffixAPassedA && hasAffixBPassedB)
                || (hasAffixAPassedB && hasAffixBPassedA)) {
                isExcPair = true;
                break;
            }
        }
        return isExcPair;
    }

    refillJunk(fodder) {
        if (!fodder || !(fodder instanceof Fodder) || fodder.size() <= 0) return;
        let i = 0;
        let initialSize = fodder.size();
        while (i < fodder.size()) {
            let affix = fodder.affixes[i];
            if (affix && affix.code && this.junkCodes.includes(affix.code)) {
                fodder.affixes.splice(i, 1);
            }
            else i++;
        }
        let junkIdx = 0;
        while (fodder.size() < initialSize && junkIdx < this.junkCodes.length) {
            fodder.affixes.push(this.affixDB[this.junkCodes[junkIdx]].abilityRef);
            junkIdx++;
        }
    }

    removeRedundantFodders(page) {
        if (!page || !(page instanceof Page)) return;
        let junkIdxNeeded = {};
        if (page.connectedTo && page.connectedTo instanceof Fodder) {
            for (var i = 0; i < page.connectedTo.size(); i++) {
                let idx = this.junkCodes.indexOf(page.connectedTo.affixes[i].code);
                if (idx >= 0) (junkIdxNeeded[idx]) ? junkIdxNeeded[idx]++ : junkIdxNeeded[idx] = 1;
            }
        }
        let clonedFoddersArr = page.fodders.slice(0).sort((a, b) => {
            let numJunkInA = 0;
            for (var i = 0; i < a.size(); i++) {
                let idx = this.junkCodes.indexOf(a.affixes[i].code);
                if (idx < 0) numJunkInA++;
            }
            let numJunkInB = 0;
            for (var i = 0; i < b.size(); i++) {
                let idx = this.junkCodes.indexOf(b.affixes[i].code);
                if (idx < 0) numJunkInB++;
            }
            return numJunkInB - numJunkInA;
        });
        var i = 0;
        let canRemove = false;
        while (i < page.size() && page.size() > this.IDEAL_MIN_PAGE_SIZE) {
            let fodder = clonedFoddersArr[i];
            let hasOnlyJunk = fodder.specialAbilityFactor == null;
            for (var j = 0; j < fodder.size(); j++) {
                let affix = fodder.affixes[j];
                let idx = this.junkCodes.indexOf(affix.code);
                if (idx < 0) {
                    hasOnlyJunk = false;
                }
                else {
                    if (junkIdxNeeded[idx] > 0) {
                        junkIdxNeeded[idx]--;
                        if (junkIdxNeeded[idx] <= 0) delete junkIdxNeeded[idx];
                    }
                    else {
                        for (var key in junkIdxNeeded) {
                            if (junkIdxNeeded[key] > 0 && !fodder.affixes.includes(
                                this.affixDB[this.junkCodes[key]].abilityRef)) {
                                fodder.affixes[j] = this.affixDB[this.junkCodes[key]].abilityRef;
                                junkIdxNeeded[key]--;
                                if (junkIdxNeeded[key] <= 0) delete junkIdxNeeded[key];
                                break;
                            }
                        }
                    }
                }
            }
            if (hasOnlyJunk && canRemove) {
                page.fodders.splice(page.fodders.indexOf(clonedFoddersArr[i]), 1);
                clonedFoddersArr.splice(i, 1);
            }
            else i++;
            if (Object.keys(junkIdxNeeded).length <= 0) canRemove = true;
        }
    }

    doAffixesHavePossiblePlacement({ choices, targetNumSlots = (new Fodder()).CAPACITY, targetNumFodders = (new Page()).CAPACITY, isUsingTrainer = false }) {
        if (targetNumSlots <= 0 || targetNumFodders <= 0) return false;
        let numSpecialAbilityFactor = 0;
        let numAddAbilityItems = 0;
        for (var i = 0; i < choices.length; i++) {
            let choice = choices[i];
            if (!choice) continue;
            if (choice.isAbilityFactor) numSpecialAbilityFactor++;
            if (choice.isAddAbilityItem) numAddAbilityItems++;
        }
        if (numSpecialAbilityFactor > targetNumFodders
            || numAddAbilityItems > 1) {
            // Too many Special Ability Factors or Add Ability Items
            return false;
        }
        let affixes = this.getAffixInstancesInvolvedIn(choices);
        if (!affixes || !Array.isArray(affixes)) return false;
        let transferablesData = this.getTransferablesAndNonTransferables(affixes);
        let numDuplPerTransferable = transferablesData.numDuplPerTransferable;
        let numNontransferables = transferablesData.numNontransferables;
        let numTransferables = affixes.length - numNontransferables;
        // Disregard isUsingTrainer flag if already transfering Guidance Trainer
        if (affixes.includes(this.affixDB[this.trainerCode].abilityRef)) isUsingTrainer = false;
        // Account for exception pairing when checking limits
        for (var i = 0; i < transferablesData.nontransferables.length; i++) {
            let nonTransfA = transferablesData.nontransferables[i];
            let testSlots = 1;
            for (var j = 0; j != i && j < transferablesData.nontransferables.length; j++) {
                let nonTransfB = transferablesData.nontransferables[j];
                // For every two different non-transferables, if they are an exception pair
                // and there is space to put them together
                if (this.isExceptionPair(nonTransfA, nonTransfB)
                    && testSlots < targetNumSlots && numNontransferables > 0) {
                    // Decrease the number of fodders needed to fit the non-transferables
                    numNontransferables--;
                    testSlots++;
                }
            }
            for (var j = 0; j < transferablesData.transferables.length; j++) {
                let transfB = transferablesData.transferables[j];
                // For every pairing between non-transferable and transferable,
                // if they form a exception pair and there is space to fit them together
                if (this.isExceptionPair(nonTransfA, transfB)
                    && testSlots < targetNumSlots && numTransferables > 0) {
                    // Decrease number of spots needed to fit all abilities
                    numTransferables--;
                    testSlots++;
                }
            }
        }
        // Separate Nontransferables from Special Ability Factors
        if (numNontransferables + numSpecialAbilityFactor > targetNumFodders) {
            // Too many special affixes to fit
            return false;
        }
        // Check if there is enough slots to fit all transferable abilities
        if (numTransferables + (isUsingTrainer ? 1 : 0) > (targetNumFodders - numNontransferables) * targetNumSlots) {
            // Too many affixes to place in few places
            return false;
        }
        for (var codeA in numDuplPerTransferable) {
            let numConflicts = numDuplPerTransferable[codeA];
            for (var codeB in numDuplPerTransferable) {
                if (codeA == codeB) continue;
                let preffixCodeA = codeA.match(/^[A-Z]{2,}/)[0];
                if (!preffixCodeA) preffixCodeA = "-1";
                if (codeB.startsWith(preffixCodeA) || this.testExcludePattern({ code: codeA }, { code: codeB })) {
                    numConflicts += numDuplPerTransferable[codeB];
                }
            }
            if (numConflicts > targetNumFodders - numNontransferables) {
                // Too many conflicts to separate in the available fodders
                return false;
            }
        }
        return true;
    }

    getTransferablesAndNonTransferables(affixes) {
        let numDuplPerTransferable = {};
        let nontransferables = []
        let transferables = [];
        for (var i = 0; i < affixes.length; i++) {
            let affix = affixes[i];
            if (!affix.code) continue;
            // Count duplicates per affix
            if (this.affixDB[affix.code] && this.affixDB[affix.code].choices // Has choices
                && !this.isSpecialAbility(affix) // Is not an Add Ability
                && (this.affixDB[affix.code].choices.length <= 0 // Cannot be transferred
                    || (this.affixDB[affix.code].choices.length == 1 // Or can only be transferred as a Special Ability Factor
                        && this.affixDB[affix.code].choices[0].isAbilityFactor))) {
                nontransferables.push(affix);
            }
            else {
                transferables.push(affix);
                numDuplPerTransferable[affix.code] = (numDuplPerTransferable[affix.code] || 0) + 1;
            }
        }

        return {
            numNontransferables: nontransferables.length,
            hasNonTransferable: nontransferables.length != 0,
            numDuplPerTransferable: numDuplPerTransferable,
            nontransferables: nontransferables,
            transferables: transferables
        };
    }

    isSpecialAbility(affix) {
        if (!this.data || !this.data.optionList || !this.data.optionList.additional
            || !affix || !affix.name) return false;

        for (var key in this.data.optionList.additional) {
            let entry = this.data.optionList.additional[key];
            if (entry.name && entry.name == affix.name) return true;
        }
        return false;
    }

    numSpecialAbilitiesIn(affixes) {
        let num = 0;
        for (var i = 0; i < affixes.length; i++) {
            if (this.isSpecialAbility(affixes[i])) num++;
        }
        return num;
    }

    toURL(isForSimulator) {
        if (!this.pageTreeRoot) {
            if (isForSimulator) {
                return this.SIMULATOR_WEBSITE;
            }
            else {
                return '';
            }
        }
        if (isForSimulator && this.pageTreeRoot.size() > 0) { // Do not include goal in link
            return this.SIMULATOR_WEBSITE + '#!' + this.pageTreeRoot.children[0].toURL(isForSimulator);
        }
        else {
            return this.encodeURLParams(`${(this.boostWeekIdx > 0) ? `/bw=${this.boostWeekIdx}` : ``}` + this.pageTreeRoot.toURL());
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
            fodder.affixIndicesFromFactor = [];
            for (var i = 0; i < page.size(); i++) {
                let fodderInPage = page.fodders[i];
                if (fodderInPage.specialAbilityFactor
                    && fodder.affixes.includes(fodderInPage.specialAbilityFactor)) {
                    fodder.affixIndicesFromFactor.push(
                        fodder.affixes.indexOf(fodderInPage.specialAbilityFactor)
                    );
                }
            }
            return true;
        }
        return false;
    }

    getGoalAffixes() {
        if (this.pageTreeRoot && this.pageTreeRoot instanceof PageTreeNode
            && this.pageTreeRoot.page && this.pageTreeRoot.page.fodders
            && this.pageTreeRoot.page.fodders[0] && this.pageTreeRoot.page.fodders[0].affixes
            && Array.isArray(this.pageTreeRoot.page.fodders[0].affixes))
            return this.pageTreeRoot.page.fodders[0].affixes.slice(0);
        else return [];
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
                    // set flag true
                    let isMatch = true;
                    // Check if Add Ability
                    if (choice.isAddAbilityItem || affix.noEx) {
                        abilitySuccessRates[k] = Math.min(Math.max(choice.transferRate, minRate), maxRate);
                        if (affix.noEx) {
                            abilitySuccessRates.length++;
                            if (fodderSuccessRate < 0) fodderSuccessRate = (abilitySuccessRates[k] - minRate) / (maxRate - minRate);
                            else fodderSuccessRate *= (abilitySuccessRates[k] - minRate) / (maxRate - minRate);
                            break;
                        }
                    }
                    else {
                        // Check if affix in this fodder comes from some fodder with Special Ability Factor
                        if (!fodder.affixIndicesFromFactor.includes(k)) {
                            // If affix is not from factor, but choice is for factors, it is not a match
                            if (choice.isAbilityFactor) {
                                isMatch = false;
                            }
                            else {
                                // count occurrences of each ability in choice
                                let choiceCount = countOccurrences(choice.materials);
                                // count occurrences of each ability in all abilities in page
                                let abilityCount = countOccurrences(abilities);
                                // for each different occurence in choice
                                for (var code in choiceCount) {
                                    // if all bilities have less than count
                                    if (!abilityCount[code] || abilityCount[code] < choiceCount[code]) {
                                        // does not match, so set flag false and break
                                        isMatch = false;
                                        break;
                                    }
                                }
                            }
                        }
                        else {
                            // If affix is from factor, but choice is not for factors, it is not a match
                            if (!choice.isAbilityFactor) {
                                isMatch = false;
                            }
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
                            abilitySuccessRates[k] = Math.min(Math.max(Math.round(abilitySuccessRates[k] * sameGearFactor), minRate), maxRate);
                        }
                        if (fodder.rateBoostIdx >= 0 && fodder.rateBoostIdx < fodder.rateBoostOptions.length) {
                            abilitySuccessRates[k] = Math.min(Math.max(this.data.optionList.support[fodder.rateBoostIdx].fn(abilitySuccessRates[k]), minRate), maxRate);
                        }
                        if (fodder.potentialIdx >= 0 && fodder.potentialIdx < fodder.potentialOptions.length) {
                            abilitySuccessRates[k] = Math.min(Math.max(this.data.optionList.potential[fodder.potentialIdx].fn(abilitySuccessRates[k]), minRate), maxRate);
                        }
                        // Success rate up if main fodder (fodder0) has Guidance Trainer ability
                        if (pageConn.size() > 0 && pageConn.fodders[0].affixes.includes(this.affixDB[this.trainerCode].abilityRef)) {
                            abilitySuccessRates[k] = Math.min(Math.max(abilitySuccessRates[k] + 5, minRate), maxRate);
                        }
                        if (this.boostWeekIdx > 0) {
                            abilitySuccessRates[k] += this.boostWeekVals[this.boostWeekIdx];
                            abilitySuccessRates[k] = Math.min(Math.max(abilitySuccessRates[k], minRate), maxRate);
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
            let boostWeekIdx = pageData.match(/bw=[0-9]/);
            if (boostWeekIdx && boostWeekIdx[0]) {
                this.boostWeekIdx = parseInt(boostWeekIdx[0].match(/[0-9]/));
                continue;
            }
            let targetFodder = pageData.match(/r=(\*?[A-Z0-9]{4,}[.]?)*/g);
            if (!targetFodder || !targetFodder[0] || targetFodder == '') continue;
            let targetAffixes = targetFodder[0].match(/\*?[A-Z0-9]{4,}/g);
            if (!targetAffixes || targetAffixes.length <= 0) continue;
            let pageAllFodders = pageData.match(/(s=(\*?[A-Z0-9]{4,}[.]?)*)((&[0-9])=(\*?[A-Z0-9]{4,}[.]?)*)*/g);
            let pageFoddersAffixes = [];
            for (var j = 0; j < pageAllFodders.length; j++) {
                let pageOneFodder = pageAllFodders[j];
                if (!pageOneFodder || pageOneFodder <= 0) continue;
                let fodderAllAffixes = pageOneFodder.match(/(\*?[A-Z0-9]{4,}[.]?)+/g);
                if (!fodderAllAffixes || fodderAllAffixes <= 0) continue;
                for (var k = 0; k < fodderAllAffixes.length; k++) {
                    let fodderOneAffixes = fodderAllAffixes[k];
                    let pageFodderAffixes = fodderOneAffixes.match(/\*?[A-Z0-9]{4,}/g);
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
                let newPageFodderAffixes = [];
                for (var k = 0; k < pageFodderAffixes.length; k++) {
                    // If Special Ability Factor
                    if (pageFodderAffixes[k].startsWith('*')) {
                        if (pageFodderAffixes.specialAbilityFactor) continue;
                        let newCode = pageFodderAffixes[k].slice(1, pageFodderAffixes[k].length);
                        if (this.affixDB[newCode]) {
                            newPageFodderAffixes.specialAbilityFactor = this.affixDB[newCode].abilityRef;
                        }
                    }
                    else {
                        let theCode = handleLegacyAffixCodes(pageFodderAffixes[k]);
                        if (this.affixDB[theCode]) {
                            newPageFodderAffixes.push(this.affixDB[theCode].abilityRef);
                        }
                    }
                }
                pageFoddersAffixes[j] = newPageFodderAffixes;
            }
            for (var j = 0; j < targetAffixes.length; j++) {
                // If Special Ability Factor
                if (targetAffixes[j].startsWith('*')) {
                    targetAffixes[j] = targetAffixes[j].slice(1, targetAffixes[j].length);
                }
                let theCode = handleLegacyAffixCodes(targetAffixes[j]);
                if (this.affixDB[theCode]) {
                    targetAffixes[j] = this.affixDB[theCode].abilityRef;
                }
            }
            let affixIndicesFromFactor = [];
            for (var j = 0; j < pageFoddersAffixes.length; j++) {
                let fodderInPage = pageFoddersAffixes[j];
                if (fodderInPage.specialAbilityFactor
                    && targetAffixes.includes(fodderInPage.specialAbilityFactor)) {
                    affixIndicesFromFactor.push(
                        targetAffixes.indexOf(fodderInPage.specialAbilityFactor)
                    );
                }
            }
            pages.push({
                fodders: pageFoddersAffixes,
                target: targetAffixes,
                boosts: boosts,
                connections: connections,
                isConnected: false,
                connDist: connDist,
                fodderIdx: fodderIdx,
                affixIndicesFromFactor: affixIndicesFromFactor
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
                            if ((k - i) != pageB.connDist || j != pageB.fodderIdx)
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
        let newPageTreeRoot = createPageTree(goalPage);
        if (!newPageTreeRoot || !(newPageTreeRoot instanceof PageTreeNode)) return false;
        this.setGoal(goalPage.target);
        this.pageTreeRoot.page.fodders[0].affixIndicesFromFactor = goalPage.affixIndicesFromFactor;
        this.pageTreeRoot.page.fodders[0].connectTo(newPageTreeRoot.page);
        if (this.data && this.data.optionList && this.data.optionList.support) {
            for (var j = 0; j < goalPage.boosts.length; j++) {
                let boost = goalPage.boosts[j];
                for (var k = 0; k < this.data.optionList.support.length; k++) {
                    let supportItem = this.data.optionList.support[k];
                    if (supportItem.value == boost) {
                        this.pageTreeRoot.page.fodders[0].rateBoostIdx = k;
                        break;
                    }
                }
            }
        }
        if (this.data && this.data.optionList && this.data.optionList.additional) {
            for (var j = 0; j < goalPage.boosts.length; j++) {
                let boost = goalPage.boosts[j];
                for (var k = 0; k < this.data.optionList.additional.length; k++) {
                    let addAbilityItem = this.data.optionList.additional[k];
                    if (addAbilityItem.value == boost) {
                        this.pageTreeRoot.page.fodders[0].addAbilityItemInUse = {
                            transferRate: addAbilityItem.extend,
                            materials: [],
                            isAddAbilityItem: true,
                            name: addAbilityItem.id,
                            value: addAbilityItem.value
                        }
                        for (var m = this.data.abilityList.length - 1; m >= 0; m--) {
                            let ability = this.data.abilityList[m];
                            if (ability.name == addAbilityItem.name) {
                                this.pageTreeRoot.page.fodders[0].addAffixes(ability);
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
        if (this.data && this.data.optionList && this.data.optionList.potential) {
            for (var j = 0; j < goalPage.boosts.length; j++) {
                let boost = goalPage.boosts[j];
                for (var k = 0; k < this.data.optionList.potential.length; k++) {
                    let potential = this.data.optionList.potential[k];
                    if (potential.value == boost) {
                        this.pageTreeRoot.page.fodders[0].potentialIdx = k;
                        break;
                    }
                }
            }
        }
        for (var j = 0; j < goalPage.boosts.length; j++) {
            let boost = goalPage.boosts[j];
            if (boost == 'D01') this.pageTreeRoot.page.fodders[0].isSameGear = false;
            else if (boost == 'D02') this.pageTreeRoot.page.fodders[0].isSameGear = true;
        }
        this.pageTreeRoot.addPageTreeNodes(newPageTreeRoot);
        return true;

        function createPageTree(pageData) {
            // create pagetreenode
            let fodders = [];
            for (var i = 0; i < pageData.fodders.length; i++) {
                let newFodder = (new Fodder()).addAffixes(
                        pageData.fodders[i]
                    );
                if (pageData.fodders[i].specialAbilityFactor) {
                    newFodder.setSpecialAbilityFactor(pageData.fodders[i].specialAbilityFactor);
                }
                // Map indices 0,1,2,3,4,5 to 0,2,4,5,3,1 (even increasing, odd decreasing)
                // to display pages nicely
                let idx = -1;
                if (i < 3) idx = 2 * i;
                else idx = 11 - 2 * i;
                if (pageData.connections[idx]) {
                    newFodder.affixIndicesFromFactor = pageData.connections[idx].affixIndicesFromFactor;
                }
                fodders.push(newFodder);
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
                    if (childNode.page.connectedTo && childNode.page.connectedTo instanceof Fodder
                        && data && data.optionList && data.optionList.support) {
                        for (var j = 0; j < connection.boosts.length; j++) {
                            let boost = connection.boosts[j];
                            for (var k = 0; k < data.optionList.support.length; k++) {
                                let supportItem = data.optionList.support[k];
                                if (supportItem.value == boost) {
                                    childNode.page.connectedTo.rateBoostIdx = k;
                                    break;
                                }
                            }
                        }
                    }
                    if (childNode.page.connectedTo && childNode.page.connectedTo instanceof Fodder
                        && data && data.optionList && data.optionList.additional) {
                        for (var j = 0; j < connection.boosts.length; j++) {
                            let boost = connection.boosts[j];
                            for (var k = 0; k < data.optionList.additional.length; k++) {
                                let addAbilityItem = data.optionList.additional[k];
                                if (addAbilityItem.value == boost) {
                                    childNode.page.connectedTo.addAbilityItemInUse = {
                                        transferRate: addAbilityItem.extend,
                                        materials: [],
                                        isAddAbilityItem: true,
                                        name: addAbilityItem.id,
                                        value: addAbilityItem.value
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    if (childNode.page.connectedTo && childNode.page.connectedTo instanceof Fodder
                        && data && data.optionList && data.optionList.potential) {
                        for (var j = 0; j < connection.boosts.length; j++) {
                            let boost = connection.boosts[j];
                            for (var k = 0; k < data.optionList.potential.length; k++) {
                                let potential = data.optionList.potential[k];
                                if (potential.value == boost) {
                                    childNode.page.connectedTo.potentialIdx = k;
                                    break;
                                }
                            }
                        }
                    }
                    for (var j = 0; j < connection.boosts.length; j++) {
                        let boost = connection.boosts[j];
                        if (boost == 'D01') childNode.page.connectedTo.isSameGear = false;
                        else if (boost == 'D02') childNode.page.connectedTo.isSameGear = true;
                    }
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

        /**
         * Handles URLs containing outdated ability codes by swapping them
         * with the most up-to-date code. Limitation: if a new code uses a previosly outdate code.
         */
        function handleLegacyAffixCodes(legacyCode) {
            switch (legacyCode) {
                case "TK11": return "TK02"; // Legacy Elder Reverie Code
                case "TK21": return "TK03"; // Legacy Loser Reverie Code
                case "TK31": return "TK04"; // Legacy Apprezina Reverie Code
                case "TK41": return "TK05"; // Legacy Double Reverie Code
                case "VJ11": return "VJ02"; // Legacy Double Reverie Code
                default: return legacyCode; // If not legacy, keep the actual code
            }
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
        if (!root) return [];
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
            let isMatch = true;
            if (dataClass) {
                if (ref instanceof dataClass) {
                    if (properties) {
                        for (var key in properties) {
                            if (properties[key] === null || typeof properties[key] !== 'object') {
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

    getTreeDepth() {
        if (!this.pageTreeRoot) return 0;
        else return getDepthAt(this.pageTreeRoot);

        function getDepthAt(node) {
            if (!(node instanceof PageTreeNode)) return 0;
            let maxDepth = 0;
            for (var i = 0; i < node.size(); i++) {
                let childNode = node.children[i];
                let depthOfChild = getDepthAt(childNode);
                if (depthOfChild > maxDepth) maxDepth = depthOfChild;
            }
            return 1 + maxDepth;
        }
    }

    colorChoices(sets) {
        let overlapCodes = {};
        for (var i = 0; i < sets.length; i++) {
            let choices = sets[i];
            let codes = {};
            for (var j = 0; j < choices.length; j++) {
                let choice = choices[j];
                for (var k = 0; k < choice.materials.length; k++) {
                    let affix = choice.materials[k];
                    codes[affix.code] = 1;
                }
            }
            for (var code in codes) {
                (overlapCodes[code] !== undefined) ?
                    (overlapCodes[code]++) : (overlapCodes[code] = 0)
            }
        }
        let colorNum = 0;
        for (var code in overlapCodes) {
            if (overlapCodes[code] == undefined || overlapCodes[code] == 0) {
                delete overlapCodes[code];
            }
            else {
                overlapCodes[code] = {
                    colorNum: colorNum,
                    count: overlapCodes[code]
                };
                colorNum++;
            }
        }
        let colored = [];
        for (var i = 0; i < sets.length; i++) {
            let setA = sets[i];
            for (var j = 0; j < setA.length; j++) {
                let choiceA = setA[j];
                for (var k = 0; k < choiceA.materials.length; k++) {
                    let affix = choiceA.materials[k];
                    if (overlapCodes[affix.code] !== undefined && overlapCodes[affix.code].count > 0) {
                        if (colored[i] === undefined) colored[i] = [];
                        if (colored[i][j] === undefined) colored[i][j] = [];
                        colored[i][j][k] = overlapCodes[affix.code].colorNum;
                    }
                }
            }
        }
        return colored;
    }

    getToBuyList() {
        return ASSISTANT.query({
            dataClass: Fodder,
            properties: {
                connectedTo: null
            }
        });
    }

    getUsesFor(affix) {
        if (!affix || !affix.code || !this.affixDB) return [];
        let uses = [];
        for (var code in this.affixDB) {
            let test = this.affixDB[code];
            for (var i = 0; i < test.choices.length; i++) {
                let choice = test.choices[i];
                if (choice.materials.includes(affix)) {
                    uses.push({
                        makeAffix: test.abilityRef,
                        withChoice: choice
                    });
                }
            }
        }
        return uses;
    }

    setBoostWeekIdx(idx) {
        if (idx >= 0 && idx < this.boostWeekVals.length) {
            this.boostWeekIdx = idx;
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

    toString() {
        let info = `Node={ isGoal: ${this.isGoal}, page: `;
        if (this.page && this.page instanceof Page)
            info += this.page.toString();
        else info += `NoPage={this.page}`;
        info += `, children: [ `;
        for (var i = 0; i < this.size(); i++) {
            if (this.children[i] && this.children[i] instanceof PageTreeNode)
                info += `${this.children[i].toString()}, `;
            else info += `NotANode={this.children[i]}, `;
        }
        info += ` ]`;
        return info;
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
        if (elemType == 2 && elem === this) return [this];
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
                }
            }
            this.page.addPotentialOptions(options);
            for (var i = 0; i < this.size(); i++) {
                this.children[i].addPotentialOptions(options);
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
            url += ((i == 0) ? '/s=' : (i + '=')) + this.fodders[i].toURL(isForSimulator, false) + '&';
        }
        url += 'r=';
        if (this.connectedTo) {
            url += this.connectedTo.toURL(isForSimulator, true);
        }
        url += '&o=';
        let hasAddedRate = false;
        if (this.connectedTo && this.connectedTo.rateBoostOptions && this.connectedTo.rateBoostOptions[this.connectedTo.rateBoostIdx]
            && this.connectedTo.rateBoostOptions[this.connectedTo.rateBoostIdx].value) {
            url += this.connectedTo.rateBoostOptions[this.connectedTo.rateBoostIdx].value;
            hasAddedRate = true;
        }
        // Special Ability like elegant and grace
        let hasAddedSpecial = false;
        if (this.connectedTo && this.connectedTo instanceof Fodder && this.connectedTo.addAbilityItemInUse) {
            url += ((hasAddedRate) ? '.' : '') + this.connectedTo.addAbilityItemInUse.value;
            hasAddedSpecial = true;
        }
        let hasAddedPotential = false;
        if (this.connectedTo && this.connectedTo.potentialOptions && this.connectedTo.potentialOptions[this.connectedTo.potentialIdx]
            && this.connectedTo.potentialOptions[this.connectedTo.potentialIdx].value) {
            url += ((hasAddedRate || hasAddedSpecial) ? '.' : '') + this.connectedTo.potentialOptions[this.connectedTo.potentialIdx].value;
            hasAddedPotential = true;
        }
        if (this.connectedTo && this.connectedTo.isSameGear) {
            url += ((hasAddedRate || hasAddedSpecial || hasAddedPotential) ? '.' : '') + ((this.connectedTo.isSameGear) ? 'D02' : 'D01');
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

    toString(printOnlyHighLevel) {
        let info = `Page={ fodders: [ `;
        for (var i = 0; i < this.size(); i++) {
            if (this.fodders[i] && this.fodders[i] instanceof Fodder) info += `${this.fodders[i].toString(printOnlyHighLevel)}, `;
            else info += `NotAFodder={${this.fodders[i]}}, `;
        }
        info += `], successRate: ${this.successRate}, `;
        if (!printOnlyHighLevel && this.connectedTo) {
            info += `connectedTo: { `;
            if (this.connectedTo instanceof Fodder) info += this.connectedTo.toString(true);
            else info += `NotAFodder={${this.connectedTo}}`;
            info += ` }`;
        }
        info += ` }`;
        return info;
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
            try {
                let msg = `@Page.setSuccessRate => rate not set from ${this.successRate} to ${rate} /// this => ${this.toString()} /// pageTreeRoot => `;
                msg = (ASSISTANT.pageTreeRoot) ? ASSISTANT.pageTreeRoot.toString() : `root={${ASSISTANT.pageTreeRoot}}`;
                gaRequests.sendException(msg);
            } catch (e) { }
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
            for (var i = 0; i < this.size(); i++) {
                this.fodders[i].addPotentialOptions(options);
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
        this.affixIndicesFromFactor = [];
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
        this.isGoal = false;
        this.overallSuccessRate = -1;
        this.connectedTo = null;
        this.isSameGear = false;
        this.rateBoostIdx = 0;
        this.potentialIdx = 0;
        this.addAbilityItemInUse = null;
        this.specialAbilityFactor = null;
    }

    setGoal(bool) {
        if (typeof bool === 'boolean') this.isGoal = bool;
        return this;
    }

    toURL(isForSimulator, isForTarget) {
        let url = '';
        for (var i = 0; i < this.size(); i++) {
            // Use code for simulator correspondency if applicable
            let code = (isForSimulator && this.affixes[i].simCode !== undefined) ?
                this.affixes[i].simCode : this.affixes[i].code;
            url += ((isForTarget && this.affixIndicesFromFactor.includes(i)) ? '*' : '')
                + code + ((i < this.size() - 1) ? '.' : '');
        }
        if (!isForTarget && (this.specialAbilityFactor && this.specialAbilityFactor.code)) {
            // Use code for simulator correspondency if applicable
            let code = (isForSimulator && this.specialAbilityFactor.simCode !== undefined) ?
                this.specialAbilityFactor.simCode : this.specialAbilityFactor.code;
            url += ((this.size() > 0) ? '.' : '') + '*' + code;
        }
        return url;
    }

    size() {
        return this.affixes.length;
    }

    toString(printOnlyHighLevel) {
        let info = `Fodder={ affixes: [ `;
        for (var i = 0; i < this.size(); i++) {
            if (this.affixes[i] && this.affixes[i].code && this.affixes[i].name) info += `Affix="${this.affixes[i].name}", `;
            else info += `NotAnAffix="${this.affixes[i]}", `;
        }
        info += `], idcesFromFactor: [ `;
        for (var i = 0; i < this.affixIndicesFromFactor.length; i++) {
            info += `${this.affixIndicesFromFactor[i]}, `;
        }
        info += `], affixRates: [ `;
        for (var i = 0; i < this.affixSuccessRates.length; i++) {
            info += `${this.affixSuccessRates[i]}, `;
        }
        info += `], isGoal: ${this.isGoal}, overallRate: ${this.overallSuccessRate}, `;
        if (!printOnlyHighLevel && this.connectedTo) {
            info += `connectedTo={ `;
            if (this.connectedTo instanceof Page) info += this.connectedTo.toString(true);
            else info += `NotAPage={${this.connectedTo}}`;
            info += ` }`;
        }
        info += `, isSame: ${this.isSameGear}, rateIdx: ${this.rateBoostIdx}, potIdx: ${this.potentialIdx}, addAbility: `;
        if (this.addAbilityItemInUse && this.addAbilityItemInUse.name)
            info += `${this.addAbilityItemInUse.name}`;
        else info += `${this.addAbilityItemInUse}`;
        info += `, factor: `;
        if (this.specialAbilityFactor && this.specialAbilityFactor.code)
            info += `${this.specialAbilityFactor.code}`;
        else info += `${this.specialAbilityFactor}`;
        info += ` }`;
        return info;
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

    setAddAbilityInUse(addAbilities) {
        if (!addAbilities) return false;
        if (!Array.isArray(addAbilities)) addAbilities = [addAbilities];
        for (var i = 0; i < addAbilities.length; i++) {
            let addAbility = addAbilities[i];
            if (addAbility.isAddAbilityItem) {
                this.addAbilityItemInUse = addAbility;
                return true;
            }
        }
        return false;
    }

    setSpecialAbilityFactor(abilityFactor) {
        if (!abilityFactor || !abilityFactor.code) return false;
        this.specialAbilityFactor = abilityFactor;
        return true;
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
            try {
                let msg = `@Fodder.setSuccessRate => rate not set from ${this.successRate} to ${rate} /// this => ${this.toString()} /// pageTreeRoot => `;
                msg = (ASSISTANT.pageTreeRoot) ? ASSISTANT.pageTreeRoot.toString() : `root={${ASSISTANT.pageTreeRoot}}`;
                gaRequests.sendException(msg)
            } catch (e) { }
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

    hasNonTransferableAffixes() {
        for (var i = 0; i < this.affixes.length; i++) {
            if (ASSISTANT.affixDB[this.affixes[i].code].choices.length <= 0) return true;
        }
        return false;
    }

    clone(abilityFilterFunction) {
        let clone = (new Fodder());
        if (abilityFilterFunction && typeof abilityFilterFunction === 'function')
            clone.addAffixes(this.affixes.filter(abilityFilterFunction));
        else clone.addAffixes(this.affixes);
        clone.setSpecialAbilityFactor(this.specialAbilityFactor);
        return clone;
    }
}