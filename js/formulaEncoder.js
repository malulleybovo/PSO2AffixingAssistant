/**
 * Encodes and decodes the URL parameters of
 * any affixing formula.
 *
 * @author malulleybovo (2019)
 * @license GNU General Public License v3.0
 */

class FormulaEncoder {

    /**
     * The cipher bounds used in encoding/decoding.
     * Uses 64 cyphers so each unit contains 6 bits
     * of information, thus it uses 6 bit commands.
     */
    static get codes() {
        return {
            // Characters 0 to 9
            zero: "0".charCodeAt(0),
            nine: "9".charCodeAt(0),
            // Characters a to z
            a: "a".charCodeAt(0),
            z: "z".charCodeAt(0),
            // Characters A to Z
            A: "A".charCodeAt(0),
            Z: "Z".charCodeAt(0),
            // Additional characters to complete
            // a total of 64 cyphers (2^6)
            dot: ".".charCodeAt(0),
            unscore: "_".charCodeAt(0)
        }
    }

    /**
     * The bit masks for every data segment
     * in a 16 bit command generated from
     * Fodder, Page, or PageTreeNode data.
     * Definition:
     * - ctrl: command type
     * - cfgType: configuration type (ref configs)
     * - cfgData: value attributed to the config
     * - flag: flag type (ref flags below)
     * - ability: ability ref field
     * - rateBoost: index of success rate boost
     * - potBoost: index of potential boost
     * - same: whether same equip is set or not
     * - pageDist: distance from page with fodder
     *   made and the page that makes it
     * - fromFodder: index within page of fodder
     *   that is produced by the page at pageDist
     */
    static get masks() {
        return {
            ctrl:       0b1111000000000000,
            cfgType:    0b0000111100000000,
            cfgData:    0b0000000011111111,
            flag:       0b0000110000000000,
            ability:    0b0000001111111111,
            rateBoost:  0b0000000000001111,
            potBoost:   0b0000000011110000,
            same:       0b0000000100000000,
            pageDist:   0b0000000000111111,
            fromFodder: 0b0000111111000000
        }
    }

    /**
     * The controls (or commands) to indicate
     * what data is contained within a given
     * a 16 bit command and what structure
     * the command follows:
     * - cfgItem: configures the assistant
     *     - 0b 0000 cfgType cfgData
     * - newPage: creates a new page with
     *   one fodder containing one ability
     *     - 0b 1000 flag ability
     * - newFodder: adds a new fodder to
     *   the current page with a new ability
     *     - 0b 1001 flag ability
     * - currFodder: adds a new ability to
     *   the current fodder
     *     - 0b 1010 flag ability
     * - boostItem: sets the boosts used for
     *   making the current fodder
     *     - 0b 1100 flag 0 same potBoost rateBoost
     * - pageGoalDist: connects a fodder to
     *   a page that produces it
     *     - 0b 1101 fromFodder pageDist
     */
    static get ctrls() {
        return {
            cfgItem: 0b0000,
            newPage: 0b1000,
            newFodder: 0b1001,
            currFodder: 0b1010,
            boostItem: 0b1100,
            pageGoalDist: 0b1101,
        }
    }

    /**
     * The types of configuration data
     * used in the formula.
     * Definition:
     * - boostWeek: index of the boost week option
     */
    static get configs() {
        return {
            boostWeek: 0b0001
        }
    }

    /**
     * The type of flags used
     * in the formula.
     * Definition:
     * - madeFromSAF: indicates ability is made via SAF
     * - SAF: indicates ability is a Special Ability Factor
     * - addAbility: indicates ability is an Add Ability Item
     */
    static get flags() {
        return {
            madeFromSAF: 0b01,
            SAF: 0b10,
            addAbility: 0b01
        }
    }

    /**
     * Getter/Setter for the control portion of the command.
     * Used to specify what data is within the command and
     * what structure it follows.
     */
    static getCtrlBits(num) {
        return (num & FormulaEncoder.masks.ctrl) >> 12;
    }
    static setCtrlBits(num) {
        return (num << 12) & FormulaEncoder.masks.ctrl;
    }

    /**
     * Getter/Setter for the config type portion of the command.
     */
    static getCfgTypeBits(num) {
        return (num & FormulaEncoder.masks.cfgType) >> 8;
    }
    static setCfgTypeBits(num) {
        return (num << 8) & FormulaEncoder.masks.cfgType;
    }

    /**
     * Getter/Setter for the config data portion of the command.
     */
    static getCfgDataBits(num) {
        return num & FormulaEncoder.masks.cfgData;
    }
    static setCfgDataBits(num) {
        return num & FormulaEncoder.masks.cfgData;
    }

    /**
     * Getter/Setter for the flag portion of the command.
     */
    static getFlagBits(num) {
        return (num & FormulaEncoder.masks.flag) >> 10;
    }
    static setFlagBits(num) {
        return (num << 10) & FormulaEncoder.masks.flag;
    }

    /**
     * Getter/Setter for the ability portion of the command.
     */
    static getAbilityBits(num) {
        return num & FormulaEncoder.masks.ability;
    }
    static setAbilityBits(num) {
        return num & FormulaEncoder.masks.ability;
    }

    /**
     * Getter/Setter for the rate boost portion of the command.
     */
    static getRateBoostBits(num) {
        return num & FormulaEncoder.masks.rateBoost;
    }
    static setRateBoostBits(num) {
        return num & FormulaEncoder.masks.rateBoost;
    }

    /**
     * Getter/Setter for the potential boost portion of the command.
     */
    static getPotBoostBits(num) {
        return (num & FormulaEncoder.masks.potBoost) >> 4;
    }
    static setPotBoostBits(num) {
        return (num << 4) & FormulaEncoder.masks.potBoost;
    }

    /**
     * Getter/Setter for the same equip portion of the command.
     */
    static getSameBit(num) {
        return (num & FormulaEncoder.masks.same);
    }
    static setSameBit(num) {
        return (num << 8) & FormulaEncoder.masks.same;
    }

    /**
     * Getter/Setter for the fodder index of a fodder-page distance command.
     */
    static getFromFodderBits(num) {
        return (num & FormulaEncoder.masks.fromFodder) >> 6;
    }
    static setFromFodderBits(num) {
        return (num << 6) & FormulaEncoder.masks.fromFodder;
    }

    /**
     * Getter/Setter for the page distance of a fodder-page distance command.
     */
    static getPageDistBits(num) {
        return num & FormulaEncoder.masks.pageDist;
    }
    static setPageDistBits(num) {
        return num & FormulaEncoder.masks.pageDist;
    }

    /**
     * Encodes a given page tree into a string containing
     * the useful data in the entire tree.
     *
     * @param {PageTreeNode} pageTreeRoot the root of the tree to encode
     * @returns {String} the encoded data from the tree
     */
    static encode(pageTreeRoot) {
        if (!(pageTreeRoot instanceof PageTreeNode))
            return "";
        let codes16bit = getPageNodeCodes(pageTreeRoot);
        let codes = toCodes6bit(codes16bit);
        let url = "";
        let code0 = FormulaEncoder.codes.zero;
        let codea = FormulaEncoder.codes.a;
        let codeA = FormulaEncoder.codes.A;
        for (var i = 0; i < codes.length; i++) {
            let code = codes[i];
            if (code == 0) {
                url += "."
            }
            else if (code == 1) {
                url += "_";
            }
            else if (code >= 2 && code <= 11) {
                url += String.fromCharCode(code0 + code - 2);
            }
            else if (code >= 12 && code <= 37) {
                url += String.fromCharCode(codea + code - 12);
            }
            else if (code >= 38 && code <= 63) {
                url += String.fromCharCode(codeA + code - 38);
            }
            else continue;
        }
        return url;

        /**
         * Turns an array of 16 bit commands into
         * an array of 6 bit encoded values.
         *
         * @param {Array.<number>} codes16bit 16 bit commands
         * @returns {Array.<number>} 6 bit encoded values
         */
        function toCodes6bit(codes16bit) {
            // Parse commands into bytes to make things easier
            let bytes = [];
            for (var i = 0; i < codes16bit.length; i++) {
                bytes.push((codes16bit[i] >> 8) & 0b11111111);
                bytes.push(codes16bit[i] & 0b11111111);
            }
            // Ensure multiple of 3
            while (bytes.length % 3 != 0) {
                bytes.push(0);
            }
            let codes = [];
            // Every 3 bytes compose four 6 bit codes
            for (var i = 0; i + 2 < bytes.length; i += 3) {
                codes.push((bytes[i] >> 2) & 0b111111);
                codes.push(((bytes[i] & 0b11) << 4)
                    | ((bytes[i + 1] >> 4) & 0b1111));
                codes.push(((bytes[i + 1] & 0b1111) << 2)
                    | ((bytes[i + 2] >> 6) & 0b11));
                codes.push(bytes[i + 2] & 0b111111);
            }
            return codes;
        }

        /**
         * Gets the array of 16 bit commands
         * that describe the entire tree given.
         *
         * @param {PageTreeNode} pageTreeRoot root of the tree
         * @returns {Array.<number>} 16 bit commands
         */
        function getPageNodeCodes(pageTreeRoot) {
            let codes16bit = [];
            let queue = [];
            let curr;
            queue.push({
                node: pageTreeRoot,
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
                    let codesInPage = getPageCodes(node.page);
                    codes16bit = codes16bit.concat(codesInPage);

                    // Custom fodder-page connection identifying data
                    if (queue[i].connDist >= 0 && queue[i].fodderIdx >= 0) {
                        codes16bit.push(
                            FormulaEncoder.setCtrlBits(FormulaEncoder.ctrls.pageGoalDist)
                            | FormulaEncoder.setFromFodderBits(queue[i].fodderIdx)
                            | FormulaEncoder.setPageDistBits(queue[i].connDist));
                    }
                }
            }

            return codes16bit;
        }

        /**
         * Gets the array of 16 bit commands
         * that describe the page given.
         *
         * @param {Page} page page to extract codes from
         * @returns {Array.<number>} 16 bit commands
         */
        function getPageCodes(page) {
            let codes16bit = [];
            // Get commands for every fodder in page
            for (var i = 0; i < page.size(); i++) {
                let fodderCodes = getFodderCodes(page.fodders[i]);
                // Set first command in page as a newPage command
                if (i == 0 && fodderCodes.length > 0) {
                    fodderCodes[0] = fodderCodes[0] & ~FormulaEncoder.masks.ctrl;
                    fodderCodes[0] = fodderCodes[0]
                        | FormulaEncoder.setCtrlBits(FormulaEncoder.ctrls.newPage);
                }
                codes16bit = codes16bit.concat(fodderCodes);
            }
            // Get boost command for the page
            let configBits = FormulaEncoder.setCtrlBits(FormulaEncoder.ctrls.boostItem);
            let dataBits = 0;
            if (page.connectedTo
                && Assistant.rateBoostOptions && page.connectedTo.rateBoostIdx > 0
                && Assistant.rateBoostOptions[page.connectedTo.rateBoostIdx]
                && Assistant.rateBoostOptions[page.connectedTo.rateBoostIdx].ref) {

                dataBits = dataBits | FormulaEncoder.setRateBoostBits(
                    Assistant.rateBoostOptions[page.connectedTo.rateBoostIdx].ref);
            }
            if (page.connectedTo
                && Assistant.potentialOptions && page.connectedTo.potentialIdx > 0
                && Assistant.potentialOptions[page.connectedTo.potentialIdx]
                && Assistant.potentialOptions[page.connectedTo.potentialIdx].ref) {

                dataBits = dataBits | FormulaEncoder.setPotBoostBits(
                    Assistant.potentialOptions[page.connectedTo.potentialIdx].ref);
            }
            if (page.connectedTo && page.connectedTo.isSameGear) {
                dataBits = dataBits | FormulaEncoder.setSameBit(1);
            }
            if (dataBits != 0) codes16bit.push(configBits | dataBits);
            // Special Ability like elegant and grace
            // Get command for add ability item in fodder produced by the page
            if (page.connectedTo
                && page.connectedTo instanceof Fodder
                && page.connectedTo.addAbilityItemInUse) {
                codes16bit.push(configBits
                    | FormulaEncoder.setFlagBits(FormulaEncoder.flags.addAbility)
                    | FormulaEncoder.setAbilityBits(page.connectedTo.addAbilityItemInUse.ref));
            }
            return codes16bit;
        }

        /**
         * Gets the array of 16 bit commands
         * that describe the fodder given.
         *
         * @param {Fodder} fodder fodder to extract codes from
         * @returns {Array.<number>} 16 bit commands
         */
        function getFodderCodes(fodder) {
            let codes16bit = [];
            // Get commands for all abilities in fodder
            for (var i = 0; i < fodder.size(); i++) {
                let configBits = (i == 0) ?
                    FormulaEncoder.ctrls.newFodder
                    : FormulaEncoder.ctrls.currFodder;
                // Check if the ability is made from SAF or is SAF
                let flagBits = (fodder.connectedTo != null
                    && fodder.affixIndicesFromFactor.includes(i)) ?
                    FormulaEncoder.flags.madeFromSAF : 0;
                codes16bit.push(FormulaEncoder.setCtrlBits(configBits)
                    | FormulaEncoder.setFlagBits(flagBits)
                    | FormulaEncoder.setAbilityBits(fodder.affixes[i].ref));
            }
            if (fodder.specialAbilityFactor && fodder.specialAbilityFactor.code) {
                codes16bit.push(FormulaEncoder.setCtrlBits(FormulaEncoder.ctrls.currFodder)
                    | FormulaEncoder.setFlagBits(FormulaEncoder.flags.SAF)
                    | FormulaEncoder.setAbilityBits(fodder.specialAbilityFactor.ref));
            }
            return codes16bit;
        }
    }

    /**
     * Decodes an encoded string containing the useful data
     * of an affixing formula into a Page tree.
     *
     * @param {String} str the encoded string
     * @typedef {Object} DecodedData
     * @property {number} bwIdx boost week index
     * @property {PageTreeNode} root the root of the tree decoded
     * @returns {DecodedData} the root of the tree decoded
     */
    static decode(str) {
        let decodedData = {
            bwIdx: 0,
            root: null
        };
        let codes6bit = []
        // Get 6 bit codes
        for (var i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code == FormulaEncoder.codes.dot) {
                code = 0;
            }
            else if (code == FormulaEncoder.codes.unscore) {
                code = 1;
            }
            else if (code >= FormulaEncoder.codes.zero
                && code <= FormulaEncoder.codes.nine) {
                code = 2 + code - FormulaEncoder.codes.zero;
            }
            else if (code >= FormulaEncoder.codes.a
                && code <= FormulaEncoder.codes.z) {
                code = 2 + FormulaEncoder.codes.nine - FormulaEncoder.codes.zero
                    + 1 + code - FormulaEncoder.codes.a;
            }
            else if (code >= FormulaEncoder.codes.A
                && code <= FormulaEncoder.codes.Z) {
                code = 2 + FormulaEncoder.codes.nine - FormulaEncoder.codes.zero
                    + 1 + FormulaEncoder.codes.z - FormulaEncoder.codes.a
                    + 1 + code - FormulaEncoder.codes.A;
            }
            else continue;
            codes6bit.push(code);
        }
        // Get 16 bit commands
        let codes16bit = toCodes16bit(codes6bit);

        let pageNodes = [];
        let currPageNode = null;
        let currPage = null;
        let currFodder = null;
        let connections = [];
        let boostsPerPage = [];
        for (var i = 0; i < codes16bit.length; i++) {
            let code = codes16bit[i];
            let ctrlBits = FormulaEncoder.getCtrlBits(code);

            let isConfigItem = ctrlBits == FormulaEncoder.ctrls.cfgItem;
            // Parse config items
            if (isConfigItem) {
                let configType = FormulaEncoder.getCfgTypeBits(code);
                if (configType == FormulaEncoder.configs.boostWeek) {
                    let boostWeekIdx = FormulaEncoder.getCfgDataBits(code);
                    decodedData.bwIdx = boostWeekIdx;
                }
                continue;
            }

            let isNewPage = ctrlBits == FormulaEncoder.ctrls.newPage;
            let isNewFodder = ctrlBits == FormulaEncoder.ctrls.newFodder;
            let isCurrFodder = ctrlBits == FormulaEncoder.ctrls.currFodder;
            let isBoostItem = ctrlBits == FormulaEncoder.ctrls.boostItem;
            let isPageGoalDist = ctrlBits == FormulaEncoder.ctrls.pageGoalDist;

            let flag = FormulaEncoder.getFlagBits(code);
            let isMadeFromSAF = flag == FormulaEncoder.flags.madeFromSAF;
            let isSAF = flag == FormulaEncoder.flags.SAF;
            let isAddAbility = flag == FormulaEncoder.flags.addAbility;
            let abilityId = FormulaEncoder.getAbilityBits(code);
            // Parse new pages
            if (isNewPage && Assistant.affixDB[
                Assistant.relCodes[abilityId]]) {
                currPage = new Page();
                currPageNode = (new PageTreeNode(pageNodes.length == 0))
                    .setPage(currPage);
                currFodder = (new Fodder()).setGoal(pageNodes.length == 0);
                let affix = Assistant.affixDB[
                    Assistant.relCodes[abilityId]].abilityRef;
                if (isMadeFromSAF)
                    currFodder.affixIndicesFromFactor
                        .push(currFodder.size());
                if (isSAF) {
                    currFodder.setSpecialAbilityFactor(affix);
                }
                else {
                    currFodder.addAffixes(affix);
                }
                currPage.addFodders(currFodder);
                pageNodes.push(currPageNode);
            }
            // Parse new fodders
            else if (isNewFodder && Assistant.affixDB[
                Assistant.relCodes[abilityId]]) {
                currFodder = new Fodder();
                let affix = Assistant.affixDB[
                    Assistant.relCodes[abilityId]].abilityRef;
                if (isMadeFromSAF)
                    currFodder.affixIndicesFromFactor
                        .push(currFodder.size());
                if (isSAF) {
                    currFodder.setSpecialAbilityFactor(affix);
                }
                else {
                    currFodder.addAffixes(affix);
                }
                currPage.addFodders(currFodder);
            }
            // Parse new abilities
            else if (isCurrFodder && Assistant.affixDB[
                Assistant.relCodes[abilityId]]) {
                let affix = Assistant.affixDB[
                    Assistant.relCodes[abilityId]].abilityRef;
                if (isMadeFromSAF)
                    currFodder.affixIndicesFromFactor
                        .push(currFodder.size());
                if (isSAF) {
                    currFodder.setSpecialAbilityFactor(affix);
                }
                else {
                    currFodder.addAffixes(affix);
                }
            }
            // Parse boost item
            else if (isBoostItem) {
                if (isAddAbility) { // Add ability
                    let addOption = Assistant.data.optionList.additional
                        .filter(a => a.ref == abilityId)[0];
                    if (addOption) {
                        boostsPerPage.push({
                            forPage: currPage,
                            type: 'add',
                            boost: Assistant.data.optionList.additional
                                .indexOf(addOption)
                        });
                    }
                }
                else { // Success rate, potential, and same equip
                    let rateBoost = FormulaEncoder.getRateBoostBits(code);
                    if (rateBoost != 0) {
                        let rateOption = Assistant.data.optionList.support
                            .filter(a => a.ref == rateBoost)[0];
                        if (rateOption) {
                            boostsPerPage.push({
                                forPage: currPage,
                                type: 'rate',
                                val: Assistant.data.optionList.support
                                    .indexOf(rateOption)
                            });
                        }
                    }
                    let potBoost = FormulaEncoder.getPotBoostBits(code);
                    if (potBoost != 0) {
                        let potOption = Assistant.data.optionList.potential
                            .filter(a => a.ref == potBoost)[0];
                        if (potOption) {
                            boostsPerPage.push({
                                forPage: currPage,
                                type: 'pot',
                                val: Assistant.data.optionList.potential
                                    .indexOf(potOption)
                            });
                        }
                    }
                    let isSame = FormulaEncoder.getSameBit(code) != 0;
                    if (isSame) {
                        boostsPerPage.push({
                            forPage: currPage,
                            type: 'same',
                            val: isSame
                        });
                    }
                }
            }
            // Parse fodder-page distances
            else if (isPageGoalDist) {
                let fromFodderNum = FormulaEncoder.getFromFodderBits(code);
                let pageDist = FormulaEncoder.getPageDistBits(code);
                connections.push({
                    toPageNode: currPageNode,
                    fromFodderNum: fromFodderNum,
                    fromPageNum: pageNodes.length - 1 - pageDist
                });
            }
        }
        // Connect pages to the fodders they make
        for (var i = 0; i < connections.length; i++) {
            let conn = connections[i];
            if (conn.toPageNode && conn.toPageNode.page
                && pageNodes[conn.fromPageNum] && pageNodes[conn.fromPageNum].page
                && pageNodes[conn.fromPageNum].page.fodders[conn.fromFodderNum]) {
                pageNodes[conn.fromPageNum].page.fodders[conn.fromFodderNum]
                    .connectTo(conn.toPageNode.page);
                pageNodes[conn.fromPageNum].addPageTreeNodes(conn.toPageNode);
            }
        }
        // Add the boosts to the respective pages
        for (var i = 0; i < boostsPerPage.length; i++) {
            if (!boostsPerPage[i].forPage
                || !boostsPerPage[i].forPage.connectedTo) {
                continue;
            }
            let fodder = boostsPerPage[i].forPage.connectedTo;
            switch (boostsPerPage[i].type) {
                case 'add':
                    fodder.addAbilityItemInUse = boostsPerPage[i].val;
                    break;
                case 'rate':
                    fodder.rateBoostIdx = boostsPerPage[i].val;
                    break;
                case 'pot':
                    fodder.potentialIdx = boostsPerPage[i].val;
                    break;
                case 'same':
                    fodder.isSameGear = boostsPerPage[i].val;
                    break;
            }
        }
        decodedData.root = pageNodes[0] ? pageNodes[0] : null;
        return decodedData;

        /**
         * Turns an array of 6 bit encoded values into
         * an array of 16 bit commands.
         *
         * @param {Array.<number>} codes6bit 6 bit encoded values
         * @returns {Array.<number>} 16 commands
         */
        function toCodes16bit(codes6bit) {
            let byteArr = [];
            let curr3Bytes = 0;
            let j = 0;
            for (var i = 0; i < codes6bit.length; i++) {
                curr3Bytes = (curr3Bytes << 6) | codes6bit[i];
                j++;
                if (j % 4 == 0) {
                    let byte2 = (curr3Bytes & 255);
                    curr3Bytes = curr3Bytes >> 8;
                    let byte1 = (curr3Bytes & 255);
                    curr3Bytes = curr3Bytes >> 8;
                    let byte0 = (curr3Bytes & 255);
                    byteArr.push(byte0);
                    byteArr.push(byte1);
                    byteArr.push(byte2);
                    curr3Bytes = 0;
                    j = 0;
                }
            }
            // Removes all null codes
            //byteArr = byteArr.filter(a => a != 0);
            // Ensures byte array has a multiple of 2 bytes
            if (byteArr.length % 2 != 0) byteArr.push(0);
            let codes16bit = [];
            for (var i = 0; i + 1 < byteArr.length; i += 2) {
                codes16bit.push((byteArr[i] << 8) | byteArr[i + 1]);
            }
            return codes16bit;
        }
    }
}
