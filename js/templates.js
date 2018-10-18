/**
 * HTML Templates
 * 
 * @author malulleybovo (2018)
 */

const PAGE_TREE_NODE_TEMPLATE = ({ pageTreeNode, level, offset }) => {
    let treeNodeTemplate = '<div class="mgrid"><div>';
    level = (typeof level === 'number') ? level : 0;
    offset = (typeof offset === 'number') ? offset : 0;
    let connectionOrder = [];
    // Get index of connected
    // Since the list of pages may be unordered,
    // the data-conn offset of each fodder may not be ordered
    let capacity = (new Page).CAPACITY;
    for (var i = 0; i < pageTreeNode.size(); i++) {
        let childPage = pageTreeNode.children[i].page;
        connectionOrder.push(-1);
        if (!childPage) continue;
        // Find the fodder connected to the i-th child page
        for (var j = 0; j < pageTreeNode.page.size(); j++) {
            let fodder = pageTreeNode.page.fodders[j];
            if (childPage.connectedTo instanceof Fodder
                && childPage.connectedTo === fodder) {
                connectionOrder[j] = (offset * capacity) + i;
                break;
            }
        }
    }
    if (pageTreeNode.page && (pageTreeNode.page instanceof Page)) {
        treeNodeTemplate += PAGE_TEMPLATE({
            page: pageTreeNode.page,
            isGoal: pageTreeNode.isGoal,
            rateBoostOptions: pageTreeNode.rateBoostOptions.map(a => a.id),
            potentialOptions: pageTreeNode.potentialOptions.map(a => a.id),
            level: level,
            offset: offset,
            fodderOffsets: connectionOrder
        });
    }
    treeNodeTemplate += '</div><div>';
    if (pageTreeNode.size() > 0) {
        for (var i = 0; i < pageTreeNode.size(); i++) {
            treeNodeTemplate += PAGE_TREE_NODE_TEMPLATE({
                pageTreeNode: pageTreeNode.children[i],
                level: (level + 1),
                offset: (offset * capacity) + i
            });
        }
    }
    treeNodeTemplate += '</div></div>';
    return treeNodeTemplate;
};

const PAGE_TEMPLATE = ({ page, isGoal, rateBoostOptions, potentialOptions, level, offset, fodderOffsets }) => {
    let capacity = (new Page).CAPACITY;
    let dataConn;
    // data-conn is a mapping of the page-fodder connections within a tree structure with a set max number of children per node
    // base = ((capacity^(level)) - 1) / (capacity - 1)
    // refers to the start index at every level of the tree (ie: 0 (goal only), 1, 7, 43, 259, 1555...)
    // offset refers to the offset index of the page within its level down the tree structure
    if (typeof level === 'number') dataConn =
        ((Math.pow(capacity, level) - 1) / (capacity - 1)) + offset;
    else dataConn = 0;
    let pageTempate = `<div ${(isGoal) ? `id="goal" ` : ``}class="page" ${(dataConn >= 0) ? `data-conn="` + dataConn + `"` : ``}><div>`;
    if (page && page instanceof Page) {
        let fodders = page.fodders;
        // Since fodders within the page may connect to pages one level further down the tree,
        // their data-conn need to use (level + 1).
        let fodderDataConnBase;
        if (typeof level === 'number') fodderDataConnBase =
            ((Math.pow(capacity, level + 1) - 1) / (capacity - 1));
        else fodderDataConnBase = 0;
        for (var i = 0; i < ((isGoal) ? 1 : fodders.length); i++) {
            pageTempate += FODDER_TEMPLATE({
                fodder: fodders[i],
                isGoal: isGoal,
                titleLabel: (isGoal) ? 'GOAL' : ('Fodder ' + i),
                produceLabel: (isGoal) ? 'CHANGE' : null,
                dataConn: (fodderOffsets[i] >= 0) ? fodderDataConnBase + fodderOffsets[i] : -1
            });
        }
        pageTempate += `</div>`;
        if (!isGoal) {
            pageTempate += `<div class="success-indicator">
                <span>Stage Success: </span>
                <span>${(page.successRate >= 0) ? page.successRate + `%` : `?`}</span>
            </div>`;
        }
        pageTempate += `<div class="boost-container">`
            + CHECKBOX_TEMPLATE({
                description: 'Same',
                isChecked: page.isSameGear
            })
            + DROPDOWN_TEMPLATE({
                options: rateBoostOptions,
                selected: (page.rateBoostIdx >= 0) ? page.rateBoostIdx : undefined
            })
            + DROPDOWN_TEMPLATE({
                options: potentialOptions,
                selected: (page.potentialIdx >= 0) ? page.potentialIdx : undefined
            });
    }
    pageTempate += `</div></div>`;
    return pageTempate;
};

const FODDER_TEMPLATE = ({ fodder, isGoal, titleLabel, dataConn, produceLabel }) =>
    `<div class="fodder" ${(dataConn >= 0) ? `data-conn="` + dataConn + `"` : ``}>
            <div class="title">${titleLabel}</div>
            <div class="affixes">
                <div class="affix">${(fodder && fodder.affixes[0]) ? fodder.affixes[0].name : `&nbsp;`}${(fodder.affixes[0]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[0]) ? ` : ${fodder.affixSuccessRates[0]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[1]) ? fodder.affixes[1].name : `&nbsp;`}${(fodder.affixes[1]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[1]) ? ` : ${fodder.affixSuccessRates[1]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[2]) ? fodder.affixes[2].name : `&nbsp;`}${(fodder.affixes[2]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[2]) ? ` : ${fodder.affixSuccessRates[2]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[3]) ? fodder.affixes[3].name : `&nbsp;`}${(fodder.affixes[3]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[3]) ? ` : ${fodder.affixSuccessRates[3]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[4]) ? fodder.affixes[4].name : `&nbsp;`}${(fodder.affixes[4]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[4]) ? ` : ${fodder.affixSuccessRates[4]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[5]) ? fodder.affixes[5].name : `&nbsp;`}${(fodder.affixes[5]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[5]) ? ` : ${fodder.affixSuccessRates[5]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[6]) ? fodder.affixes[6].name : `&nbsp;`}${(fodder.affixes[6]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[6]) ? ` : ${fodder.affixSuccessRates[6]}%` : `` : ``}</div>
                <div class="affix">${(fodder && fodder.affixes[7]) ? fodder.affixes[7].name : `&nbsp;`}${(fodder.affixes[7]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[7]) ? ` : ${fodder.affixSuccessRates[7]}%` : `` : ``}</div>
            </div>
            <div class="divider"></div>
            <div class="produce-button">${(produceLabel) ? produceLabel : ((dataConn >= 0) ? `REPRODUCE` : `PRODUCE`)}</div>
            <div class="success-indicator">
                <span>${(isGoal) ? `Goal` : `Fodder`} Success: </span>
            <span>${(fodder.overallSuccessRate >= 0) ? fodder.overallSuccessRate + `%` : `?`}</span>
            </div>
        </div>`;

const LINK_TEMPLATE = ({ link, linkToSim }) => {
    return `<div class="link-container hidden">
        <div>
            <div class="main-grid">
                <div class="title bold">Link to This Formula</div><div class="content">
    					<input type="text" value="${link}" onclick="this.setSelectionRange(0, this.value.length)" style="
    color: white;
    background: var(--paint-dark);
    padding: 0.5em;
    border: none;
    border-radius: 0.25em;
">
                    </div>
                <div>
                    <div>
                        <div class="copy-button"><a>Copy to Clipboard</a></div>
                        <div class="copy-button"><a  href="${linkToSim}" target="_blank">Open in Affix Simulator</a></div>
                        <div class="confirm-button">Close</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

const DROPDOWN_TEMPLATE = ({ options, selected }) => {
    let dropdown = `<div class="dropdown-container"><select>`;
    if (Array.isArray(options)) {
        if (typeof selected === 'number' && selected >= options.length)
            selected = 0;
        for (var i = 0; i < options.length; i++) {
            let isSelected = (typeof selected === 'number' && selected == i) || (selected == options[i]);
            dropdown += 
                `<option value="${options[i]}" ${(isSelected) ? `selected` : ``}>${options[i]}</option>`;
        }
    }
    dropdown += `</select></div>`;
    return dropdown;
};

const CHECKBOX_TEMPLATE = ({ description, isChecked }) => 
    `<div class="checkbox-container">
        <div class="checkbox-holder">
            <div>${(description) ? description : ``}</div>
            <label class="checkmark-holder">
                <input type="checkbox" ${(isChecked) ? `checked` : ``}>
                <span class="checkmark"></span>
            </label>
        </div>
    </div>`;

const FILTER_SEARCH_TEMPLATE = ({ categories, datalist, isGlobalSearch }) => {
    let filtersearch = `<div class="filtersearchcontainer">
        <script>
            filterSearch = function (input) {
                let filter = input.value.toUpperCase();
                let li = ${(isGlobalSearch) ? `$(".filtersearchcontainer li")` : `$(input).parent().find('li')`};
                for (var i = 0; i < li.length; i++) {
                    let div = li[i].getElementsByTagName("div")[0];
                    if (div.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            };
        </script>
        <div>`;
    if (Array.isArray(categories)) {
        for (var i = 0; i < categories.length; i++) {
            filtersearch += RADIO_BUTTON_TEMPLATE({
                isChecked: i == 0,
                description: categories[i]
            });
        }
    }
    filtersearch +=
        `</div>
        <input type="text" class="searchbar" onkeyup="filterSearch(this)" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32">
        <ul>`;
    if (Array.isArray(datalist)) {
        for (var i = 0; i < datalist.length; i++) {
            if (datalist[i].code) {
                filtersearch += `<li><div title="${datalist[i].effect.replace(/<br>/g, ' ')}" data-code="${datalist[i].code}">${datalist[i].name}</div></li>`;
            }
            else if (datalist[i].materials) {
                let choice = `${datalist[i].transferRate}% : ${datalist[i].materials.map((mat) => mat.name).join(", ")}`;
                filtersearch += `<li><div>${choice}</div></li>`;
            }
        }
    }
    filtersearch +=
        `</ul>
    </div>`;
    return filtersearch;
};

const RADIO_BUTTON_TEMPLATE = ({ id, isChecked, description }) =>
    `<label class="radiobutton-container">
        <input type="radio" name="${(id) ? id : `radio`}">
        <span class="checkmark" ${(isChecked) ? `checked` : ``}></span>
        <span>${(description) ? description : ``}</span>
    </label>`;

const SELECTION_MENU_TEMPLATE = ({ type, affixesSelected, categories, datalist, isGlobalSearch, shouldUpslot, shouldSpread }) => {
    let isAffixSelection = type == 'affixSelection';
    let isChoiceSelection = type == 'choiceSelection';
    let isFormulaSheet = type == 'formulaSheet';
    let layoutTemplate = `<div class="${(isAffixSelection) ? `affix-selection-container` : (isChoiceSelection) ? `choice-selection-container` : (isFormulaSheet) ? `formula-sheet-container` : ``} hidden">
        <div>
            <div class="main-grid">
                <div class="title bold">${(isAffixSelection) ? `Choose Abilities` : (isChoiceSelection) ? `Choose Method of Making` : (isFormulaSheet) ? `Affixing Formula Sheet` : ``}</div>${(isChoiceSelection) ?
                `<div class="options">
                    ${CHECKBOX_TEMPLATE({ description: `Affix By Upslotting`, isChecked: shouldUpslot })}
                    ${CHECKBOX_TEMPLATE({ description: `Use All Six Fodders`, isChecked: shouldSpread })}
                </div>` 
            : ``}<div class="content">`;
    if (isAffixSelection) {
        layoutTemplate += `<div>
                        <div class="title bold">Affixing Goal</div>
                        <div>`;
        for (var i = 0; i < (new Fodder).CAPACITY; i++) {
            layoutTemplate += `<div class="affix${(affixesSelected[i]) ? `` : ` empty`}"${(affixesSelected[i]) ? ` title="${affixesSelected[i].effect}"` : ``}${(affixesSelected[i]) ? ` data-code="${affixesSelected[i].code}"` : ``}>
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected[i]) ? `${affixesSelected[i].name}` : `&nbsp;`}</span>
                            </div>`;
        }
        layoutTemplate += `</div>
                        <div class="title bold">Stats</div>
                        <div class="stats-viewer">
                        </div>
                    </div>
                    <div>
                        <div class="title bold">Choices</div>
                        ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist, isGlobalSearch: isGlobalSearch })}
                    </div>`;
    }
    else if (isChoiceSelection) {
        if (affixesSelected && Array.isArray(affixesSelected)) {
            for (var i = 0; i < affixesSelected.length; i++) {
                if (!affixesSelected[i].code || datalist === undefined
                    || datalist[affixesSelected[i].code] === undefined) continue;
                layoutTemplate += `<div${(affixesSelected[i]) ? ` data-code="${affixesSelected[i].code}"` : ``}>
                        <div class="title bold">Affix ${i + 1}</div>
                        <div>
                            <div class="affix"${(affixesSelected[i]) ? ` title="${affixesSelected[i].effect}"` : ``}${(affixesSelected[i]) ? ` data-code="${affixesSelected[i].code}"` : ``}>
                                <span>${(affixesSelected[i]) ? `${affixesSelected[i].name}` : `&nbsp;`}</span>
                            </div>
                        </div>
                        <div class="title bold">Choices</div>
                        ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist[affixesSelected[i].code], isGlobalSearch: isGlobalSearch })}
                    </div>`;
            }
        }
    }
    else if (isFormulaSheet) {
        layoutTemplate += `<div>
                        <div class="title bold">Ability</div>
                        ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist, isGlobalSearch: isGlobalSearch })}
                    </div>
                    <div>
                        <div class="title bold">How To Make</div>
                        <div class="search-results-container"></div>
                    </div>`;
    }
    layoutTemplate += `</div>
                <div>
                    ${(isAffixSelection || isChoiceSelection) ? `<div>
                        <div onclick="${(isAffixSelection) ? `$('div.affix-selection-container').remove();` : ``}" class="cancel-button">Cancel</div>
                    </div>
                    ` : ``}<div>
                        <div class="confirm-button${(isAffixSelection || isChoiceSelection) ? ` disabled">Confirm`: `">Close`}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return layoutTemplate;
}

const AFFIX_SELECTION_VIEW_TEMPLATE = ({ affixesSelected, categories, abilityList, isGlobalSearch }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'affixSelection',
        affixesSelected: affixesSelected,
        categories: categories,
        datalist: abilityList,
        isGlobalSearch: isGlobalSearch
    });
};

const CHOICE_SELECTION_VIEW_TEMPLATE = ({ affixesSelected, choices, isGlobalSearch, shouldUpslot, shouldSpread }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'choiceSelection',
        affixesSelected: affixesSelected,
        datalist: choices,
        isGlobalSearch: isGlobalSearch,
        shouldUpslot: shouldUpslot,
        shouldSpread: shouldSpread
    });
};

const FORMULA_SHEET_VIEW_TEMPLATE = ({ categories, abilityList, isGlobalSearch }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'formulaSheet',
        categories: categories,
        datalist: abilityList,
        isGlobalSearch: isGlobalSearch
    });
};