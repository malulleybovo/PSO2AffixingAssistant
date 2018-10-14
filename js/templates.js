/**
 * HTML Templates
 * 
 * @author malulleybovo (2018)
 */

const PAGE_TREE_NODE_TEMPLATE = ({ pageTreeNode, level, offset }) => {
    let treeNodeTemplate = '<div class="mgrid"><div>';
    offset = (typeof offset === 'number') ? offset : 0;
    let dataConnId;
    let capacity = (new Page).CAPACITY;
    if (typeof level === 'number') dataConnId =
        ((Math.pow(capacity, level + 1) - 1) / (capacity - 1)) + offset;
    else dataConnId = 0;
    let connectionOrder = [];
    // Get index of connected
    for (var i = 0; i < pageTreeNode.size(); i++) {
        let childPage = pageTreeNode.children[i].page;
        connectionOrder.push(-1);
        if (!childPage) continue;
        // Find the fodder connected to the i-th child page
        for (var j = 0; j < pageTreeNode.page.size(); j++) {
            let fodder = pageTreeNode.page.fodders[j];
            if (childPage.connectedTo instanceof Fodder
                && childPage.connectedTo === fodder) {
                connectionOrder[i] = (offset + j) * capacity;
            }
        }
    }
    if (pageTreeNode.page && (pageTreeNode.page instanceof Page)) {
        treeNodeTemplate += PAGE_TEMPLATE({
            page: pageTreeNode.page,
            isGoal: pageTreeNode.isGoal,
            dataConn: dataConnId,
            rateBoostOptions: pageTreeNode.rateBoostOptions,
            potentialOptions: pageTreeNode.potentialOptions,
            level: (typeof level === 'number') ? (level + 1) : 0,
            offsets: connectionOrder
        });
    }
    treeNodeTemplate += '</div><div>';
    if (pageTreeNode.size() > 0) {
        for (var i = 0; i < pageTreeNode.size(); i++) {
            treeNodeTemplate += PAGE_TREE_NODE_TEMPLATE({
                pageTreeNode: pageTreeNode.children[i],
                level: (typeof level === 'number') ? (level + 1) : 0,
                offset: (offset + i) * capacity
            });
        }
    }
    treeNodeTemplate += '</div></div>';
    return treeNodeTemplate;
};

const PAGE_TEMPLATE = ({ page, isGoal, dataConn, rateBoostOptions, potentialOptions, level, offsets }) => {
    let pageTempate = `<div ${(isGoal) ? `id="goal" ` : ``}class="page" ${(dataConn >= 0) ? `data-conn="` + dataConn + `"` : ``}><div>`;
    if (page && page instanceof Page) {
        let fodders = page.fodders;
        let dataConnIdBase;
        let capacity = (new Page).CAPACITY;
        if (typeof level === 'number') dataConnIdBase =
            ((Math.pow(capacity, level + 1) - 1) / (capacity - 1));
        else dataConnIdBase = 0;
        for (var i = 0; i < ((isGoal) ? 1 : fodders.length); i++) {
            pageTempate += FODDER_TEMPLATE({
                fodder: fodders[i],
                titleLabel: (isGoal) ? 'GOAL' : ('Fodder ' + i),
                produceLabel: (isGoal) ? 'CHANGE' : 'PRODUCE',
                dataConn: dataConnIdBase + offsets[i]
            });
        }
        pageTempate += `</div>`;
        if (!isGoal) {
            pageTempate += `<div class="success-indicator">
                <span>Success: </span>
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

const FODDER_TEMPLATE = ({ fodder, titleLabel, dataConn, produceLabel }) =>
    `<div class="fodder" ${(dataConn >= 0) ? `data-conn="` + dataConn + `"` : ``}>
            <div class="title">${titleLabel}</div>
            <div class="affixes">
                <div class="affix">${(fodder && fodder.affixes[0]) ? fodder.affixes[0].name : `&nbsp;`}</div >
                <div class="affix">${(fodder && fodder.affixes[1]) ? fodder.affixes[1].name : `&nbsp;`}</div>
                <div class="affix">${(fodder && fodder.affixes[2]) ? fodder.affixes[2].name : `&nbsp;`}</div>
                <div class="affix">${(fodder && fodder.affixes[3]) ? fodder.affixes[3].name : `&nbsp;`}</div>
                <div class="affix">${(fodder && fodder.affixes[4]) ? fodder.affixes[4].name : `&nbsp;`}</div>
                <div class="affix">${(fodder && fodder.affixes[5]) ? fodder.affixes[5].name : `&nbsp;`}</div>
                <div class="affix">${(fodder && fodder.affixes[6]) ? fodder.affixes[6].name : `&nbsp;`}</div>
                <div class="affix">${(fodder && fodder.affixes[7]) ? fodder.affixes[7].name : `&nbsp;`}</div>
            </div>
            <div class="divider"></div>
            <div class="produce-button">${(produceLabel) ? produceLabel : `PRODUCE`}</div>
            <div class="success-indicator">
                <span>Success: </span>
            <span>${(fodder.successRate >= 0) ? fodder.successRate + `%` : `?`}</span>
            </div>
        </div>`;

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

const AFFIX_SELECTION_MENU_TEMPLATE = ({ affixesSelected, categories, datalist }) => {
    let affixselectionmenu =
        `<div class="affix-selection-container hidden">
            <div>
                <table>
                    <tr>
                        <td>
                            <div class="title bold">Affixing Goal</div>
                            <div style="margin-bottom: 1em;">`;
    for (var i = 0; i < 8; i++) {
        let isEmpty = affixesSelected && affixesSelected[i] && affixesSelected[i].name;
        let name = `&nbsp;`;
        let effect = ``;
        let code = ``;
        if (affixesSelected && affixesSelected[i]) {
            name = affixesSelected[i].name;
            effect = ` title="${affixesSelected[i].effect}"`;
            code = ` data-code="${affixesSelected[i].code}"`;
        }
        affixselectionmenu += `<div class="affix ${isEmpty ? `` : `empty`}"${effect}${code}>
                                <i class="fa fa-trash"></i>
                                <span>${name}</span>
                            </div>`;
    }
    affixselectionmenu += `</div>
                            <div class="title bold">Stats</div>
                            <div class="stats-viewer">
                            </div>
                        </td>
                        <td>
                            <div class="title bold">Ability Search</div>
                            ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist })}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div onclick="$('div.affix-selection-container').remove();">Cancel</div>
                        </td>
                        <td>
                            <div>Confirm</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>`;
    return affixselectionmenu;
};

const FILTER_SEARCH_TEMPLATE = ({ categories, datalist }) => {
    let filtersearch = `<div class="filtersearchcontainer">
        <script>
            filterSearch = function () {
                let input = $(".filtersearchcontainer > input.searchbar")[0];
                let filter = input.value.toUpperCase();
                let li = $(".filtersearchcontainer li");
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
        <input type="text" class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32">
        <ul>`;
    if (Array.isArray(datalist)) {
        for (var i = 0; i < datalist.length; i++) {
            filtersearch += `<li><div title="${datalist[i].effect.replace(/<br>/g, ' ')}" data-code="${datalist[i].code}">${datalist[i].name}</div></li>`;
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

const CHOICE_SELECTION_MENU_TEMPLATE = ({ id, isChecked, description }) =>
    `<div class="affix-selection-container">
        <div style="padding: 1em 2em;">
            <div style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] auto [row2-end row3-start] max-content [row2-end];height: 100%;">
                <div class="title bold" style="grid-row: row1-start;">Choose Method of Making</div>
                <div class="content" style="overflow-x: auto;grid-column-gap: 1em;padding: 0.5em 0em;grid-row: row2-start;display: grid;overflow-y: hidden;grid-template-columns: [col1-start] min-content [col2-start] min-content [col3-start] min-content [col4-start] min-content [col5-start] min-content [col6-start] min-content;grid-template-rows: 100%;margin: 0.5em 0em;">
                    <div style="display: grid;height: 100%;grid-column: col1-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col2-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col3-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col4-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col5-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col6-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style="grid-row: row3-start;display: grid;grid-template-areas: 'col1 col2 col3';">
                    <div>
                        <div onclick="$('div.affix-selection-container').remove();" style="text-align: center;background-color: var(--paint-dark);border-radius: 0.25em 0em 0em 0.25em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1.5px solid var(--border-color);text-align: center;font-size: 16px;font-weight: bold;padding: 0.35em 0em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">Cancel</div>
                    </div>
                    <div style="grid-column: span 2;">
                        <div style="background-color: var(--alter-paint);border-radius: 0em 0.25em 0.25em 0em;border: 1.5px solid var(--border-color);text-align: center;font-size: 16px;font-weight: bold;padding: 0.35em 0em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">Confirm</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`

const NEW_AFFIX_SELECTION_MENU_TEMPLATE = ({ id, isChecked, description }) =>
    `<div class="affix-selection-container" style="/*! display: none; */">
        <div style="padding: 1em 2em;">
            <div style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] auto [row2-end row3-start] max-content [row2-end];height: 100%;">
                <div class="title bold" style="grid-row: row1-start;">Choose Abilities</div>
                <div class="content" style="overflow-x: auto;grid-column-gap: 1em;padding: 0.5em 0em;grid-row: row2-start;display: grid;overflow-y: hidden;grid-template-columns: [col1-start] 33% [col2-start] auto [col3-start];grid-template-rows: 100%;margin: 0.5em 0em;">
                    <div style="display: grid;height: 100%;grid-column: col1-start;grid-template-rows: [row1-start] 5.5% [row1-end row2-start] min-content [row2-end row3-start] 5.5% [row3-end row4-start] min-content [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affixing Goal</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Stats</div>
                        <div class="stats-viewer" style="grid-row: row4-start;">
                            <div class="stat">S-ATK (+65)</div>
                            <div class="stat">R-ATK (+70)</div>
                            <div class="stat">T-ATK (+65)</div>
                            <div class="stat">DEX (+45)</div>
                            <div class="stat">HP (+70)</div>
                            <div class="stat">PP (+40)</div>
                            <div class="stat">S-DEF (+35)</div>
                            <div class="stat">R-DEF (+35)</div>
                            <div class="stat">T-DEF (+35)</div>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col2-start;grid-template-rows: [row1-start] 5.5% [row2-start] 80.5%;overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row2-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start; height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style="grid-row: row3-start;display: grid;grid-template-areas: 'col1 col2 col3';">
                    <div>
                        <div onclick="$('div.affix-selection-container').remove();" style="text-align: center;background-color: var(--paint-dark);border-radius: 0.25em 0em 0em 0.25em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1.5px solid var(--border-color);text-align: center;font-size: 16px;font-weight: bold;padding: 0.35em 0em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">Cancel</div>
                    </div>
                    <div style="grid-column: span 2;">
                        <div style="background-color: var(--alter-paint);border-radius: 0em 0.25em 0.25em 0em;border: 1.5px solid var(--border-color);text-align: center;font-size: 16px;font-weight: bold;padding: 0.35em 0em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">Confirm</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const NEW_LAYOUT = (i) => `<div class="affix-selection-container">
        <div style="padding: 1em 2em;">
            <div style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] auto [row2-end row3-start] max-content [row2-end];height: 100%;">
                <div class="title bold" style="grid-row: row1-start;">${(i == 0) ? `Choose Abilities` : `Choose Method of Making`}</div>
                <div class="content" style="overflow-x: auto;grid-column-gap: 1em;padding: 0.5em 0em;grid-row: row2-start;display: grid;overflow-y: hidden;grid-template-columns: ${(i == 0) ? `[col1-start] 33% [col2-start] auto [col3-start];grid-template-rows: 100%;` : `[col1-start] min-content [col2-start] min-content [col3-start] min-content [col4-start] min-content [col5-start] min-content [col6-start] min-content;`} margin: 0.5em 0em;">
                    <div style="display: grid;height: 100%;grid-column: col1-start;grid-template-rows: ${(i == 0) ? `[row1-start] 5.5% [row1-end row2-start] min-content [row2-end row3-start] 5.5% [row3-end row4-start] min-content [row4-end];` : `[row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];`}overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">${(i == 0) ? `Affixing Goal` : `Affix`}</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">  
                            ${(i == 0) ? `<div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>&nbsp;</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Stats</div>
                        <div class="stats-viewer" style="grid-row: row4-start;">
                            <div class="stat">S-ATK (+65)</div>
                            <div class="stat">R-ATK (+70)</div>
                            <div class="stat">T-ATK (+65)</div>
                            <div class="stat">DEX (+45)</div>
                            <div class="stat">HP (+70)</div>
                            <div class="stat">PP (+40)</div>
                            <div class="stat">S-DEF (+35)</div>
                            <div class="stat">R-DEF (+35)</div>
                            <div class="stat">T-DEF (+35)</div>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col2-start;grid-template-rows: [row1-start] 5.5% [row2-start] 80.5%;overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row2-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start; height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>`
                            :
                            `<div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col2-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col3-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col4-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col5-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>
                    <div style="display: grid;height: 100%;grid-column: col6-start;grid-template-rows: [row1-start] 5% [row1-end row2-start] 10% [row2-end row3-start] 5% [row3-end row4-start] 80% [row4-end];overflow: auto;">
                        <div class="title bold" style="grid-row: row1-start;overflow: hidden;">Affix</div>
                        <div style="margin-bottom: 1em;grid-row: row2-start;">
                            <div class="affix empty" title="" data-code="">
                                <i class="fa fa-trash"></i>
                                <span>AffixA</span>
                            </div>
                        </div>
                        <div class="title bold" style="grid-row: row3-start;overflow: hidden;">Choices</div>
                        <div class="filtersearchcontainer" style="display: grid;grid-template-rows: [row1-start] max-content [row1-end row2-start] max-content [row2-end row3-start] auto [row3-end];grid-row: row4-start;">
                            <script>
                                filterSearch = function () {
                                    let input = $(".filtersearchcontainer > input.searchbar")[0];
                                    let filter = input.value.toUpperCase();
                                    let li = $(".filtersearchcontainer li");
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
                            <div style="grid-row: row1-start;"></div>
                            <input class="searchbar" onkeyup="filterSearch()" placeholder="Search for affixes.." title="Type in an affix name" maxlength="32" style="grid-row: row2-start;" type="text">
                            <ul style="grid-row: row3-start;height: unset;">
                                <li><div title="S-ATK(+10)" data-code="AA01">Elder Reverie, Elder Reverie, Elder Reverie, Fabula Soul</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                                <li style=""><div title="S-ATK(+10)" data-code="AA01">Power I</div></li>
                            </ul>
                        </div>
                    </div>`}
                </div>
                <div style="grid-row: row3-start;display: grid;grid-template-areas: 'col1 col2 col3';">
                    <div>
                        <div onclick="$('div.affix-selection-container').remove();" style="text-align: center;background-color: var(--paint-dark);border-radius: 0.25em 0em 0em 0.25em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1.5px solid var(--border-color);text-align: center;font-size: 16px;font-weight: bold;padding: 0.35em 0em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">Cancel</div>
                    </div>
                    <div style="grid-column: span 2;">
                        <div style="background-color: var(--alter-paint);border-radius: 0em 0.25em 0.25em 0em;border: 1.5px solid var(--border-color);text-align: center;font-size: 16px;font-weight: bold;padding: 0.35em 0em;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">Confirm</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`