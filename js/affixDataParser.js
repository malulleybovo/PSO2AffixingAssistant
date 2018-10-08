/**
 * Affix Data Parser
 * 
 * @author malulleybovo (2018)
 */

function parseAffixData(data) {
    if (typeof data !== 'object') return null;
    let abilityMap = {};
    // LOAD ABILITIES
    if (data.abilityList) {
        for (i = 0; i < data.abilityList.length; i++) {
            let thisAbility = data.abilityList[i];
            if (abilityMap[thisAbility.code]) {

            }
            else {
                abilityMap[thisAbility.code] = {
                    abilityRef: thisAbility,
                    choices: []
                };
            }
        }
    }
    // EXTENDS
    if (data.abilityList) {
        for (i = 0; i < data.abilityList.length; i++) {
            let thisAbility = data.abilityList[i];
            if (!thisAbility.extend) continue;
            let reachedMax = false;
            for (j = 0; j < thisAbility.extend.length; j++) {
                if (abilityMap[thisAbility.code]) {
                    if (thisAbility.extend[j] == 0) continue;
                    let newChoice = {
                        type: reachedMax ? 3 : 0,
                        transferRate: thisAbility.extend[j],
                        materials: []
                    }
                    if (thisAbility.require && abilityMap[thisAbility.require]) {
                        newChoice.materials.push(abilityMap[thisAbility.require].abilityRef);
                    }
                    for (k = 0; k <= j; k++) {
                        newChoice.materials.push(thisAbility);
                    }
                    abilityMap[thisAbility.code].choices.push(newChoice);
                    if (thisAbility.extend[j] >= 100) reachedMax = true;
                }
                else {

                }
            }
        }
    }
    // GENERATES
    if (data.abilityList) {
        for (i = 0; i < data.abilityList.length; i++) {
            let thisAbility = data.abilityList[i];
            if (!thisAbility.generate) continue;
            let srcAbility = data.abilityList[i - 1];
            let reachedMax = false;
            for (j = 0; j < thisAbility.generate.length; j++) {
                if (abilityMap[thisAbility.code]) {
                    if (thisAbility.generate[j] <= 0) continue;
                    let newChoice = {
                        type: reachedMax ? 3 : 1,
                        transferRate: thisAbility.generate[j],
                        materials: []
                    }
                    if (thisAbility.require && abilityMap[thisAbility.require]) {
                        newChoice.materials.push(abilityMap[thisAbility.require].abilityRef);
                    }
                    for (k = 0; k < j + 2; k++) {
                        newChoice.materials.push(srcAbility);
                    }
                    abilityMap[thisAbility.code].choices.push(newChoice);

                    // PHOTON COLLECT BOOST
                    if (j == 0 && data.boostPoint && data.boostPoint.photon && data.boostPoint.photon.create) {
                        for (statusString in data.boostPoint.photon.create) {
                            if (thisAbility.status == parseInt(statusString)) {
                                let index = parseInt(thisAbility.code[thisAbility.code.length - 1]);
                                let additionalRate = data.boostPoint.photon.create[thisAbility.status][index];
                                if (additionalRate <= 0) continue;
                                let additionalChoice = {
                                    type: 2,
                                    transferRate: additionalRate,
                                    materials: [abilityMap["WA01"].abilityRef].concat(newChoice.materials)
                                }
                                abilityMap[thisAbility.code].choices.push(additionalChoice);
                            }
                        }
                    }
                    // MUTATION I BOOST
                    if (data.boostPoint && data.boostPoint.mutation1 && data.boostPoint.mutation1.create) {
                        for (statusString in data.boostPoint.mutation1.create) {
                            if (thisAbility.status == parseInt(statusString)) {
                                let index = parseInt(thisAbility.code[thisAbility.code.length - 1]);
                                let additionalRate = data.boostPoint.mutation1.create[thisAbility.status][index];
                                if (additionalRate <= 0) continue;
                                let additionalChoice = {
                                    type: 2,
                                    transferRate: Math.min(100, newChoice.transferRate + additionalRate),
                                    materials: [abilityMap["OA01"].abilityRef].concat(newChoice.materials)
                                }
                                abilityMap[thisAbility.code].choices.push(additionalChoice);
                            }
                        }
                    }
                    // MUTATION II BOOST
                    if (data.boostPoint && data.boostPoint.mutation2 && data.boostPoint.mutation2.create) {
                        for (statusString in data.boostPoint.mutation2.create) {
                            if (thisAbility.status == parseInt(statusString)) {
                                let index = parseInt(thisAbility.code[thisAbility.code.length - 1]);
                                let additionalRate = data.boostPoint.mutation2.create[thisAbility.status][index];
                                if (additionalRate <= 0) continue;
                                let additionalChoice = {
                                    type: 2,
                                    transferRate: Math.min(100, newChoice.transferRate + additionalRate),
                                    materials: [abilityMap["OA02"].abilityRef].concat(newChoice.materials)
                                }
                                abilityMap[thisAbility.code].choices.push(additionalChoice);
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
        for (i = 0; i < data.extendAbility.length; i++) {
            let extAbility = data.extendAbility[i];
            if (extAbility.ref && extAbility.success && extAbility.base) {
                let refs = [];
                if (Array.isArray(extAbility.ref)) {
                    refs = extAbility.ref;
                }
                else if (typeof extAbility.ref == "string" && (extAbility.ref == "$$" || abilityMap[extAbility.ref])) {
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
                            for (abilityName in abilityMap) {
                                if (abilityName.startsWith(regex)) {
                                    abilityArr.push(abilityMap[abilityName].abilityRef);
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
                        else if (abilityMap[extAbility.base[m]]) {
                            possibleMaterials.push([abilityMap[extAbility.base[m]].abilityRef]);
                            if (numChoices == 0) numChoices = 1;
                        }
                        else {

                        }
                    }
                    let allChoicesOfMaterials = allPossibleCases(possibleMaterials);
                    for (var n = 0; n < allChoicesOfMaterials.length; n++) {
                        let newChoice = {
                            transferRate: extAbility.success,
                            materials: allChoicesOfMaterials[n]
                        }
                        if (abilityCode == "$$") {
                            let code = allChoicesOfMaterials[n][allChoicesOfMaterials[n].length - 1].code;
                            if (code == "TG31" && newChoice.transferRate == 100) continue; // Ignore exception for Factor Receptor + Ether Factor at 100%
                            if (abilityMap[code]) {
                                abilityMap[code].choices.push(newChoice);
                            }
                            else {

                            }
                        }
                        else {
                            abilityMap[abilityCode].choices.push(newChoice);
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
        for (i = 0; i < data.abilityList.length; i++) {
            let thisAbility = data.abilityList[i];
            if (thisAbility.rel && thisAbility.extup && data.boostPoint && data.boostPoint[thisAbility.rel]) {
                for (var code in abilityMap) {
                    for (var k = 0; k < thisAbility.extup.length; k++) {
                        if (code.startsWith(thisAbility.extup[k])) {
                            for (var m = 0; m < abilityMap[code].choices.length; m++) {
                                let thisChoice = abilityMap[code].choices[m];
                                switch (thisChoice.type) {
                                    case 0:
                                        if (data.boostPoint[thisAbility.rel].extend
                                            && data.boostPoint[thisAbility.rel].extend.hasOwnProperty(abilityMap[code].abilityRef.status)) {
                                            let index = parseInt(code[thisAbility.code.length - 1]);
                                            if (index >= data.boostPoint[thisAbility.rel].extend[abilityMap[code].abilityRef.status].length) {
                                                index = 0;
                                            }
                                            let additionalRate = data.boostPoint[thisAbility.rel].extend[abilityMap[code].abilityRef.status][index];
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
                                            abilityMap[code].choices.push(additionalChoice);
                                        }
                                        break;
                                    case 1:
                                        if (data.boostPoint[thisAbility.rel].create
                                            && data.boostPoint[thisAbility.rel].create.hasOwnProperty(abilityMap[code].abilityRef.status)) {
                                            let index = parseInt(code[thisAbility.code.length - 1]);
                                            if (index >= data.boostPoint[thisAbility.rel].create[abilityMap[code].abilityRef.status].length) {
                                                index = 0;
                                            }
                                            let additionalRate = data.boostPoint[thisAbility.rel].create[abilityMap[code].abilityRef.status][index];
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
                                            abilityMap[code].choices.push(additionalChoice);
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
    // SORT CHOICES BY TRANSFER RATE
    for (code in abilityMap) {
        let thisAbility = abilityMap[code];
        thisAbility.choices.sort(function (a, b) {
            if (a.transferRate <= b.transferRate)
                return 1;
            if (a.transferRate > b.transferRate)
                return -1;
            return 0;
        });
    }
    // REMOVE REDUNDANT CHOICES
    for (code in abilityMap) {
        let thisAbility = abilityMap[code];
        thisAbility.choices = thisAbility.choices.filter(function (choice) {
            return choice.type != 3;
        });
    }

    return abilityMap;

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

function printAbilityMap(abilityMap) {
    // PRNT ALL CHOICES
    let out = "";
    for (var abilityName in abilityMap) {
        if (!abilityMap[abilityName]) continue;
        out += "<h4>" + abilityMap[abilityName].abilityRef.name + "</h4>";
        for (i = 0; i < abilityMap[abilityName].choices.length; i++) {
            out += "<li> rate: " + abilityMap[abilityName].choices[i].transferRate + ", materials: ";
            for (j = 0; j < abilityMap[abilityName].choices[i].materials.length; j++) {
                out += abilityMap[abilityName].choices[i].materials[j].name + ", ";
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