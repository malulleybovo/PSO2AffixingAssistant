/**
 * Assistant Test Suite
 * 
 * @version 0.8.0
 * @author malulleybovo (2019)
 */

class AssistantTestSuite {

    /**
     * Tests making 1 slot Power I.
     * Expects 1 Fodder with Power I.
     */
    static testBuildPageForChoices1() {
        // Initialize test case
        let assistant = new Assistant(data);
        let affixRef = Util.findAffixByName('power i');
        let choices = [
            affixRef.choices[0] // Power I
        ];
        // Execute task
        let ret = assistant.buildPageWith(
            choices, 1, true, false);
        // Test outcome
        let check1 = ret.size() == Page.CAPACITY;
        console.assert(check1, 'Expected Page with size of '
            + Page.CAPACITY);
        let check2 = ret.fodders && ret.fodders[0]
            && ret.fodders[0].size() == 1;
        console.assert(check2, 'Expected Fodder with only 1 ability');
        let check3 = ret.fodders
            && ret.fodders[0]
            && ret.fodders[0]
                .affixes[0].code == 'AA01';
        console.assert(check3, 'Expected 1 Fodder with Power I');
        if (!check1 || !check2 || !check3)
            console.log('%c+->> Test case return value: %O', 'color:#FF6347',
                ret.fodders.map(a => a.affixes));
        return check1 && check2 && check3;
    }

    /**
     * Tests making 2 slot Power III, Vol Soul without upslotting.
     * Expects 1 Fodder with Power III, Vol Soul;
     * 1 Fodder with Power III, Junk A; and
     * 1 Fodder with Soul Receptor, Junk A.
     */
    static testBuildPageForChoices2() {
        // Initialize test case
        let assistant = new Assistant(data);
        let affixRef = Util.findAffixByName('power iii', 'vol soul');
        let choices = [
            affixRef[0].choices[11], // 2 Power III, Vol Soul
            affixRef[1].choices[0] // Soul Receptor, Vol Soul
        ];
        // Execute task
        let ret = assistant.buildPageWith(
            choices, 2, true, false);
        // Test outcome
        let count1 = 0;
        let check2 = false;
        let check3 = false;
        ret.fodders.forEach(fodder => {
            if (Util.doesFodderContainAffixes(
                fodder, 'power iii', 'junk a'))
                count1++; // Count number of occurrences
            check2 = check2 || Util.doesFodderContainAffixes(
                fodder, 'vol soul', 'junk a');
            check3 = check3 || Util.doesFodderContainAffixes(
                fodder, 'soul receptor', 'junk a');
        });
        let check1 = count1 == 2;
        console.assert(check1, 'Expected 2 Fodder with Power III, Junk A');
        console.assert(check2, 'Expected 1 Fodder with Vol Soul, Junk A');
        console.assert(check3, 'Expected 1 Fodder with Soul Receptor, Junk A');
        if (!check1 || !check2 || !check3)
            console.log('%c+->> Test case return value: %O', 'color:#FF6347',
                ret.fodders.map(a => a.affixes));
        return check1 && check2 && check3;
    }

    /**
     * Tests making 3 slot Act the Soul, Persona Reverie,
     * Power III without upslotting.
     * Expects 1 Fodder with Power III, Vol Soul, Junk A;
     * 1 Fodder with Power III, Junk A, Junk B;
     * 1 Fodder with Historia Soul, Junk A, Junk B; and
     * 3 Fodders with Persona Reverie, Junk A, Junk B.
     */
    static testBuildPageWith3() {
        // Initialize test case
        let assistant = new Assistant(data);
        let affixRef = Util.findAffixByName('power iii', 'act the soul',
            'persona reverie');
        let choices = [
            affixRef[0].choices[11], // 2 Power III, Vol Soul
            affixRef[1].choices[51], // Historia Soul, Vol Soul
            affixRef[2].choices[0] // Historia Soul, 3 Persona Reverie
        ];
        // Execute task
        let ret = assistant.buildPageWith(
            choices, 3, true, false);
        // Test outcome
        let check1 = false;
        let check2 = false;
        let check3 = false;
        let check4 = false;
        let check5 = false;
        let count2 = 0;
        let count4 = 0;
        ret.fodders.forEach(fodder => {
            check1 = check1 || Util.doesFodderContainAffixes(
                fodder, 'vol soul', 'junk a', 'junk b');
            if (Util.doesFodderContainAffixes(
                fodder, 'power iii', 'junk a', 'junk b'))
                count2++; // count number of occurrences
            check3 = check3 || Util.doesFodderContainAffixes(
                fodder, 'historia soul', 'junk a', 'junk b');
            if (Util.doesFodderContainAffixes(
                fodder, 'persona reverie', 'junk a', 'junk b'))
                count4++; // count number of occurrences
            check5 = check5 || Util.doesFodderContainAffixes(
                fodder, 'persona reverie', 'power iii', 'junk a');
        });
        check2 = count2 == 1;
        check4 = count4 == 2;
        let hasPassed1 = (check1 && check2 && check3 && check4 && check5);
        if (!hasPassed1) {
            console.assert(check1, 'Expected 1 Fodder with Vol Soul, Junk A, Junk B');
            console.assert(check2, 'Expected 1 Fodder with Power III, Junk A, Junk B');
            console.assert(check3, 'Expected 1 Fodder with Historia Soul, Junk A, Junk B');
            console.assert(check4, 'Expected 2 Fodder with Persona Reverie, Junk A, Junk B');
            console.assert(check4, 'Expected 1 Fodder with Persona Reverie, Power III, Junk A');
            console.log('%c+->> Test case return value: %O', 'color:#FF6347',
                ret.fodders.map(a => a.affixes));
        }
        
        return hasPassed1;
    }

    /**
     * Tests making 3 slot Act the Soul, Persona Reverie,
     * Power III without upslotting.
     * Expects 1 Fodder with Power III, Vol Soul, Junk A;
     * 1 Fodder with Power III, Junk A, Junk B;
     * 1 Fodder with Historia Soul, Junk A, Junk B; and
     * 3 Fodders with Persona Reverie, Junk A, Junk B.
     */
    static testBuildPageWith4() {
        // Initialize test case
        let assistant = new Assistant(data);
        let affixRef = Util.findAffixByName('act the soul', 'power iii',
            'persona reverie', 'ability iii');
        let choices = [
            affixRef.filter(a => a.abilityRef.name == 'Power III')[0]
                .choices[11], // 2 Power III, Vol Soul
            affixRef.filter(a => a.abilityRef.name == 'Act The Soul')[0]
                .choices[51], // Historia Soul, Vol Soul
            affixRef.filter(a => a.abilityRef.name == 'Persona Reverie')[0]
                .choices[0], // Historia Soul, 3 Persona Reverie
            affixRef.filter(a => a.abilityRef.name == 'Ability III')[0]
                .choices[9] // Power III, Tech III, Shoot III
        ];
        // Execute task
        let ret = assistant.buildPageWith(
            choices, 3, true, false);
        // Test outcome
        let check1 = false;
        let check2 = false;
        let check3 = false;
        let check4 = false;
        let check5 = false;
        let count2 = 0;
        ret.fodders.forEach(fodder => {
            check1 = check1 || Util.doesFodderContainAffixes(
                fodder, 'historia soul', 'junk a', 'junk b');
            if (Util.doesFodderContainAffixes(
                fodder, 'persona reverie', 'power iii', 'junk a'))
                count2++; // count number of occurrences
            check3 = check3 || Util.doesFodderContainAffixes(
                fodder, 'vol soul', 'junk a', 'junk b');
            check4 = check4 || Util.doesFodderContainAffixes(
                fodder, 'persona reverie', 'shoot iii', 'junk a');
            check5 = check5 || Util.doesFodderContainAffixes(
                fodder, 'technique iii', 'junk a', 'junk b');
        });
        check2 = count2 == 2;
        let hasPassed1 = (check1 && check2 && check3 && check4 && check5);
        if (!hasPassed1) {
            console.assert(check1, 'Expected 1 Fodder with Historia Soul, Junk A, Junk B');
            console.assert(check2, 'Expected 2 Fodder with Persona Reverie, Power III, Junk A');
            console.assert(check3, 'Expected 1 Fodder with Vol Soul, Junk A, Junk B');
            console.assert(check4, 'Expected 2 Fodder with Persona Reverie, Shoot III, Junk A');
            console.assert(check5, 'Expected 1 Fodder with Tech III, Junk A, Junk B');
            console.log('%c+->> Test case return value: %O', 'color:#FF6347',
                ret.fodders.map(a => a.affixes));
        }
        return hasPassed1;
    }
    
    // Exhaustive test, for every combination of abilities (1s->8s), check if any fail 
    // (doesnt return page) and log the failures
    // Warning: this function takes an enormous amount of processing effort and time
    // so avoid using it.
    // Note: to force stop execution of this function, pause execution of JavaScript, 
    // type in console "TestMaager.forceStop = true" and resume JavaScript execution
    static exhaustBuildPageWith() {
        // Initialize test case
        let assistant = new Assistant(data);
        let affixes = Object.values(Assistant.affixDB);
        for (var numSlot = 8; numSlot <= 8; numSlot++) {
            if (TestManager.forceStop) break;
            let hasPassed = testAllFormulas(affixes, numSlot);
            if (!hasPassed) return false;
            else console.log('Passed all formulas with ' + numSlot + ' ability slots');
        }
        return true;

        function testAllFormulas(allAffixes, slotNum, affixes = [], currSlotNum = 0) {
            for (var i = allAffixes.length - 10; i >= 0; i--) {
                if (TestManager.forceStop) break;
                if (assistant.getPlacement(allAffixes[i].abilityRef,
                    (new Fodder()).addAffixes(affixes.map(a => a.abilityRef)),
                    slotNum).compoundRate <= 0) {
                    continue;
                }
                affixes.push(allAffixes[i]);
                if (currSlotNum + 1 < slotNum) {
                    let hasPassed = testAllFormulas(allAffixes, slotNum, affixes, currSlotNum + 1);
                    if (!hasPassed) return false;
                }
                else {
                    let hasPassed = testAllChoicePermutations(affixes, slotNum);
                    if (!hasPassed) {
                        console.log('Failed ' + affixes.map(a => a.abilityRef.name).join(', '));
                        return false;
                    }
                }
                affixes.pop();
            }
            return true;
        }

        function testAllChoicePermutations(affixes, slotNum, currSlotNum = 0, choices = []) {
            for (var i = 0; i < affixes[currSlotNum].choices.length; i++) {
                if (TestManager.forceStop) break;
                choices.push(affixes[currSlotNum].choices[i]);
                if (currSlotNum + 1 < slotNum) {
                    return testAllChoicePermutations(affixes, slotNum, currSlotNum + 1, choices);
                }
                else {
                    let check = assistant.doAffixesHavePossiblePlacement({
                        choices: choices,
                        targetNumSlots: slotNum
                    });
                    if (!check) continue;
                    let ret = assistant.buildPageWith(
                        choices, numSlot, true, false);
                    if (typeof ret === 'string') {
                        console.error(ret);
                        console.log(choices.map(a => a.materials));
                        return false;
                    }
                }
                choices.pop();
            }
            return true;
        }

    }
}
