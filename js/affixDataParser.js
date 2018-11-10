/**
 * Affix Data Parser
 * 
 * @author malulleybovo (2018)
 * @license GNU General Public License v3.0
 */

class AffixDataParser {
    constructor() {
        // Make functions immutable
        let funcs = Object.getOwnPropertyNames(AffixDataParser.prototype);
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
    }

    parse(data) {
        if (typeof data !== 'object') return null;
        let abilityDB = {};
        // LOAD ABILITIES
        if (data.abilityList) {
            for (var i = 0; i < data.abilityList.length; i++) {
                let thisAbility = data.abilityList[i];
                if (abilityDB[thisAbility.code]) {

                }
                else {
                    abilityDB[thisAbility.code] = {
                        abilityRef: thisAbility,
                        choices: []
                    };
                }
            }
        }
        // EXTENDS
        if (data.abilityList) {
            for (var i = 0; i < data.abilityList.length; i++) {
                let thisAbility = data.abilityList[i];
                if (!thisAbility.extend) continue;
                let reachedMax = false;
                for (j = 0; j < thisAbility.extend.length; j++) {
                    if (abilityDB[thisAbility.code]) {
                        if (thisAbility.extend[j] == 0) continue;
                        let newChoice = {
                            type: reachedMax ? 3 : 0,
                            transferRate: thisAbility.extend[j],
                            materials: []
                        }
                        if (thisAbility.require && abilityDB[thisAbility.require]) {
                            newChoice.materials.push(abilityDB[thisAbility.require].abilityRef);
                        }
                        for (k = 0; k <= j; k++) {
                            newChoice.materials.push(thisAbility);
                        }
                        abilityDB[thisAbility.code].choices.push(newChoice);
                        if (thisAbility.extend[j] >= 100) reachedMax = true;
                    }
                    else {

                    }
                }
            }
        }
        // GENERATES
        if (data.abilityList) {
            for (var i = 0; i < data.abilityList.length; i++) {
                let thisAbility = data.abilityList[i];
                if (!thisAbility.generate) continue;
                let srcAbility = data.abilityList[i - 1];
                let reachedMax = false;
                for (var j = 0; j < thisAbility.generate.length; j++) {
                    if (abilityDB[thisAbility.code]) {
                        if (thisAbility.generate[j] <= 0) continue;
                        let newChoice = {
                            type: reachedMax ? 3 : 1,
                            transferRate: thisAbility.generate[j],
                            materials: []
                        }
                        if (thisAbility.require && abilityDB[thisAbility.require]) {
                            newChoice.materials.push(abilityDB[thisAbility.require].abilityRef);
                        }
                        for (var k = 0; k < j + 2; k++) {
                            newChoice.materials.push(srcAbility);
                        }
                        abilityDB[thisAbility.code].choices.push(newChoice);

                        // PHOTON COLLECT BOOST
                        if (j == 0 && data.boostPoint && data.boostPoint.photon && data.boostPoint.photon.create) {
                            for (var statusString in data.boostPoint.photon.create) {
                                if (thisAbility.status == parseInt(statusString)) {
                                    let index = parseInt(thisAbility.code[thisAbility.code.length - 1]);
                                    let additionalRate = data.boostPoint.photon.create[thisAbility.status][index];
                                    if (additionalRate <= 0) continue;
                                    let additionalChoice = {
                                        type: 2,
                                        transferRate: additionalRate,
                                        materials: [abilityDB["WA01"].abilityRef].concat(newChoice.materials)
                                    }
                                    abilityDB[thisAbility.code].choices.push(additionalChoice);
                                }
                            }
                        }
                        // MUTATION I BOOST
                        if (data.boostPoint && data.boostPoint.mutation1 && data.boostPoint.mutation1.create) {
                            for (var statusString in data.boostPoint.mutation1.create) {
                                if (thisAbility.status == parseInt(statusString)) {
                                    let index = parseInt(thisAbility.code[thisAbility.code.length - 1]);
                                    let additionalRate = data.boostPoint.mutation1.create[thisAbility.status][index];
                                    if (additionalRate <= 0) continue;
                                    let additionalChoice = {
                                        type: 2,
                                        transferRate: Math.min(100, newChoice.transferRate + additionalRate),
                                        materials: [abilityDB["OA01"].abilityRef].concat(newChoice.materials)
                                    }
                                    abilityDB[thisAbility.code].choices.push(additionalChoice);
                                }
                            }
                        }
                        // MUTATION II BOOST
                        if (data.boostPoint && data.boostPoint.mutation2 && data.boostPoint.mutation2.create) {
                            for (var statusString in data.boostPoint.mutation2.create) {
                                if (thisAbility.status == parseInt(statusString)) {
                                    let index = parseInt(thisAbility.code[thisAbility.code.length - 1]);
                                    let additionalRate = data.boostPoint.mutation2.create[thisAbility.status][index];
                                    if (additionalRate <= 0) continue;
                                    let additionalChoice = {
                                        type: 2,
                                        transferRate: Math.min(100, newChoice.transferRate + additionalRate),
                                        materials: [abilityDB["OA02"].abilityRef].concat(newChoice.materials)
                                    }
                                    abilityDB[thisAbility.code].choices.push(additionalChoice);
                                }
                            }
                        }
                        if (j < thisAbility.generate.length && thisAbility.generate[j + 1] <= thisAbility.generate[j]) reachedMax = true;
                    }
                    else {

                    }
                }
            }
        }
        // EXTEND ABILITY
        if (data.extendAbility) {
            for (var i = 0; i < data.extendAbility.length; i++) {
                let extAbility = data.extendAbility[i];
                if (extAbility.ref && extAbility.success && extAbility.base) {
                    let refs = [];
                    if (Array.isArray(extAbility.ref)) {
                        refs = extAbility.ref;
                    }
                    else if (typeof extAbility.ref == "string" && (extAbility.ref == "$$" || abilityDB[extAbility.ref])) {
                        refs.push(extAbility.ref);
                    }
                    for (var j = 0; j < refs.length; j++) {
                        let abilityCode = refs[j];
                        let possibleMaterials = [];
                        let numChoices = 0;
                        for (var m = 0; m < extAbility.base.length; m++) {
                            if (extAbility.base[m].endsWith("*")) {
                                let abilityArr = [];
                                let regex = extAbility.base[m].slice(0, extAbility.base[m].length - 1);
                                for (var abilityName in abilityDB) {
                                    if (abilityName.startsWith(regex)) {
                                        abilityArr.push(abilityDB[abilityName].abilityRef);
                                    }
                                }
                                if (abilityArr.length > 0) {
                                    possibleMaterials.push(abilityArr);
                                    if (numChoices == 0) numChoices = abilityArr.length;
                                    else numChoices *= abilityArr.length;
                                }
                                else {

                                }
                            }
                            else if (abilityDB[extAbility.base[m]]) {
                                possibleMaterials.push([abilityDB[extAbility.base[m]].abilityRef]);
                                if (numChoices == 0) numChoices = 1;
                            }
                            else {

                            }
                        }
                        let allChoicesOfMaterials = allPossibleCases(possibleMaterials);
                        for (var n = 0; n < allChoicesOfMaterials.length; n++) {
                            let newChoice = {
                                transferRate: extAbility.success,
                                materials: allChoicesOfMaterials[n],
                                type: 0
                            }
                            if (abilityCode == "$$") {
                                let code = allChoicesOfMaterials[n][allChoicesOfMaterials[n].length - 1].code;
                                if (code == "TG31" && newChoice.transferRate == 100) continue; // Ignore exception for Factor Receptor + Ether Factor at 100%
                                if (abilityDB[code]) {
                                    abilityDB[code].choices.push(newChoice);
                                }
                                else {

                                }
                            }
                            else {
                                abilityDB[abilityCode].choices.push(newChoice);
                            }
                        }
                    }
                }
                else {

                }
            }
        }
        // BONUS FROM SOUL, DOOM, AND EXTREME RECEPTOR
        if (data.abilityList) {
            for (var i = 0; i < data.abilityList.length; i++) {
                let thisAbility = data.abilityList[i];
                if (thisAbility.rel && thisAbility.extup && data.boostPoint && data.boostPoint[thisAbility.rel]) {
                    for (var code in abilityDB) {
                        for (var k = 0; k < thisAbility.extup.length; k++) {
                            if (code.startsWith(thisAbility.extup[k])) {
                                for (var m = 0; m < abilityDB[code].choices.length; m++) {
                                    let thisChoice = abilityDB[code].choices[m];
                                    switch (thisChoice.type) {
                                        case 0: // From extends
                                            if (data.boostPoint[thisAbility.rel].extend
                                                && data.boostPoint[thisAbility.rel].extend.hasOwnProperty(abilityDB[code].abilityRef.status)) {
                                                let index = parseInt(code[thisAbility.code.length - 1]);
                                                if (index >= data.boostPoint[thisAbility.rel].extend[abilityDB[code].abilityRef.status].length) {
                                                    index = 0;
                                                }
                                                let additionalRate = data.boostPoint[thisAbility.rel].extend[abilityDB[code].abilityRef.status][index];
                                                let max = 100;
                                                if (typeof additionalRate === 'object' && additionalRate.max && additionalRate.boost) {
                                                    max = additionalRate.max;
                                                    additionalRate = additionalRate.boost;
                                                }
                                                if (thisChoice.transferRate >= max) continue;
                                                if (additionalRate <= 0) continue;
                                                let additionalChoice = {
                                                    transferRate: Math.min(max, thisChoice.transferRate + additionalRate),
                                                    materials: [thisAbility].concat(thisChoice.materials)
                                                }
                                                abilityDB[code].choices.push(additionalChoice);
                                            }
                                            break;
                                        case 1: // From generates
                                            if (data.boostPoint[thisAbility.rel].create
                                                && data.boostPoint[thisAbility.rel].create.hasOwnProperty(abilityDB[code].abilityRef.status)) {
                                                let index = parseInt(code[thisAbility.code.length - 1]);
                                                if (index >= data.boostPoint[thisAbility.rel].create[abilityDB[code].abilityRef.status].length) {
                                                    index = 0;
                                                }
                                                let additionalRate = data.boostPoint[thisAbility.rel].create[abilityDB[code].abilityRef.status][index];
                                                let max = 100;
                                                if (typeof additionalRate === 'object' && additionalRate.max && additionalRate.boost) {
                                                    max = additionalRate.max;
                                                    additionalRate = additionalRate.boost;
                                                }
                                                if (thisChoice.transferRate >= max) continue;
                                                if (additionalRate <= 0) continue;
                                                let additionalChoice = {
                                                    transferRate: Math.min(max, thisChoice.transferRate + additionalRate),
                                                    materials: [thisAbility].concat(thisChoice.materials)
                                                }
                                                abilityDB[code].choices.push(additionalChoice);
                                            }
                                            break;
                                    }

                                }
                            }
                        }
                    }
                }
            }
        }
        if (data.abilityList && data.optionList && data.optionList.additional) {
            for (var i = 0; i < data.optionList.additional.length; i++) {
                let additionalChoice = data.optionList.additional[i];
                if (!additionalChoice.name || !additionalChoice.id
                    || !additionalChoice.value || !additionalChoice.extend
                    || !additionalChoice.effect) continue;
                for (var j = data.abilityList.length; j >= 0; j--) {
                    if (data.abilityList[j] && data.abilityList[j].name == additionalChoice.name) {
                        if (abilityDB[data.abilityList[j].code]) {
                            abilityDB[data.abilityList[j].code].choices.push({
                                transferRate: additionalChoice.extend,
                                materials: [],
                                isAddAbilityItem: true,
                                name: additionalChoice.id,
                                value: additionalChoice.value
                            });
                        }
                        break;
                    }
                }
            }
        }
        if (data.abilityList && data.abilityFactor && Array.isArray(data.abilityFactor)) {
            for (var i = 0; i < data.abilityFactor.length; i++) {
                let factorChoice = data.abilityFactor[i];
                if (!factorChoice.name) continue;
                for (var j = data.abilityList.length; j >= 0; j--) {
                    if (data.abilityList[j] && data.abilityList[j].name == factorChoice.name) {
                        if (abilityDB[data.abilityList[j].code]) {
                            abilityDB[data.abilityList[j].code].choices.push({
                                transferRate: 100,
                                materials: [],
                                isAbilityFactor: true,
                                abilityRef: abilityDB[data.abilityList[j].code].abilityRef
                            });
                        }
                        break;
                    }
                }
            }
        }
        // SORT CHOICES BY TRANSFER RATE
        for (code in abilityDB) {
            let thisAbility = abilityDB[code];
            thisAbility.choices.sort(function (a, b) {
                let judgement = 0;
                if (a.transferRate < b.transferRate)
                    judgement++;
                if (a.transferRate > b.transferRate)
                    judgement--;
                if (judgement == 0) {
                    if (a.materials.length > b.materials.length)
                        judgement++;
                    else judgement--;
                }
                return judgement;
            });
        }
        // REMOVE REDUNDANT CHOICES
        for (code in abilityDB) {
            let thisAbility = abilityDB[code];
            thisAbility.choices = thisAbility.choices.filter(function (choice) {
                return choice.type != 3;
            });
        }

        return abilityDB;

        function allPossibleCases(arr) {
            if (arr.length === 0) {
                return [];
            }
            else if (arr.length === 1) {
                var result = [];
                for (var i = 0; i < arr[0].length; i++) {
                    result.push([arr[0][i]]);
                }
                return result;
            }
            else {
                var result = [];
                var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
                for (var c in allCasesOfRest) {
                    for (var i = 0; i < arr[0].length; i++) {
                        result.push([arr[0][i]].concat(allCasesOfRest[c]));
                    }
                }
                return result;
            }

        }
    }

    printAbilityDB(abilityDB) {
        // PRNT ALL CHOICES
        let out = "";
        for (var abilityName in abilityDB) {
            if (!abilityDB[abilityName]) continue;
            out += "<h4>" + abilityDB[abilityName].abilityRef.name + "</h4>";
            for (var i = 0; i < abilityDB[abilityName].choices.length; i++) {
                out += "<li> rate: " + abilityDB[abilityName].choices[i].transferRate + ", materials: ";
                for (var j = 0; j < abilityDB[abilityName].choices[i].materials.length; j++) {
                    out += abilityDB[abilityName].choices[i].materials[j].name + ", ";
                }
                out += "</li>"
            }
        }
        var output = $(
            `<p style="position:absolute; overflow:scroll; width:100%; height:100%;
            background-color:black; z-index:999999; margin:0; padding:1em;">`);
        var done = $('<button style="position:fixed; right:0; margin:1em; padding:1em;">X</button>');
        output[0].innerHTML = out;
        output.prepend(done);
        done.click(function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
        document.body.appendChild(output[0]);
        console.log(out);
    }
}
