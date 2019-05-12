/**
 * Test Utils
 * 
 * @version 0.8.0
 * @author malulleybovo (2019)
 */

class Util {

    /**
     * Returns a list of abilities found with the given names.
     * If only one name is given, returns the ability object.
     * 
     * @param {Array.<String>} names The ability names given
     * @returns {Array} The abilities found
     */
    static findAffixByName(...names) {
        if (!Assistant.affixDB) return null;

        names = names.filter(a => typeof a == 'string')
            .map(a => a.toUpperCase());
        let ret = Object.values(Assistant.affixDB).slice(0)
            .filter(a => a && a.abilityRef && names.includes(
                a.abilityRef.name.toUpperCase()));
        return ret.length == 1 ? ret[0] : ret;
    }

    /**
     * Returns a list of abilities found with the given codes.
     * If only one code is given, returns the ability object.
     * 
     * @param {Array.<String>} codes The ability codes given
     * @returns {Array} The abilities found
     */
    static findAffixByCode(...codes) {
        codes = codes.filter(a => typeof a == 'string')
            .map(a => a.toUpperCase());
        var ret = Object.values(Assistant.affixDB).slice(0)
            .filter(a => a && a.abilityRef && codes.includes(
                a.abilityRef.code.toUpperCase()));
        return ret.length == 1 ? ret[0] : ret;
    }

    static doesFodderContainAffixes(fodder, ...names) {
        let affixes = Util.findAffixByName(
            names[0], names[1], names[2], names[3],
            names[4], names[5], names[6], names[7]);
        if (!affixes[0]) affixes = [affixes];
        let doesContain = true;
        affixes.forEach(affix => {
            if (!fodder.affixes.includes(affix.abilityRef))
                doesContain = false;
        });
        return doesContain;
    }

}
