/**
 * HTML Templates
 * 
 * @author malulleybovo (2018)
 */

const CONTAINER_TEMPLATE = ({ container, isGoal }) => {
    let containerTemplate = '<div class="container">'
    if (container && container instanceof Container) {
        let pages = container.pages;
        for (var i = 0; i < ((isGoal) ? 1 : pages.length); i++) {
            containerTemplate += PAGE_TEMPLATE({
                page: pages[i],
                isGoal: isGoal
            });
        }
    }
    containerTemplate += '</div>';
    return containerTemplate;
};

const PAGE_TEMPLATE = ({ page, isGoal }) => {
    let pageTempate = `<div ${(isGoal) ? `id="goal" ` : ``}class="page" data-conn="">`;
    if (page && page instanceof Page) {
        let fodders = page.fodders;
        for (var i = 0; i < ((isGoal) ? 1 : fodders.length); i++) {
            pageTempate += FODDER_TEMPLATE({
                fodder: fodders[i],
                id: (isGoal) ? 'GOAL' : ('Fodder ' + i)
            });
        }
        pageTempate +=
            `<div class="success-indicator">
            <span>Success: </span>
            <span>${(page.successRate >= 0) ? page.successRate + `%` : `?`}</span>
        </div>
        <div class="boost-container">`
            + CHECKBOX_TEMPLATE({
                description: 'Same',
                isChecked: page.isSameGear
            });
        pageTempate += DROPDOWN_TEMPLATE({
            options: page.rateBoostOptions,
            selected: (page.rateBoostIdx >= 0) ? page.rateBoostIdx : undefined
        });
        pageTempate += DROPDOWN_TEMPLATE({
            options: page.potentialOptions,
            selected: (page.potentialIdx >= 0) ? page.potentialIdx : undefined
        });
    }
    pageTempate += `</div></div>`;
    return pageTempate;
};

const FODDER_TEMPLATE = ({ fodder, id }) =>
    `<div class="fodder" ${(false) ? `data-conn="` + 0 + `"` : ``}>
            <div class="title">${id}</div>
            <div class="affixes">
                <div class="affix">${(fodder.affixes[0]) ? fodder.affixes[0].name : `&nbsp;`}</div >
                <div class="affix">${(fodder.affixes[1]) ? fodder.affixes[1].name : `&nbsp;`}</div>
                <div class="affix">${(fodder.affixes[2]) ? fodder.affixes[2].name : `&nbsp;`}</div>
                <div class="affix">${(fodder.affixes[3]) ? fodder.affixes[3].name : `&nbsp;`}</div>
                <div class="affix">${(fodder.affixes[4]) ? fodder.affixes[4].name : `&nbsp;`}</div>
                <div class="affix">${(fodder.affixes[5]) ? fodder.affixes[5].name : `&nbsp;`}</div>
                <div class="affix">${(fodder.affixes[6]) ? fodder.affixes[6].name : `&nbsp;`}</div>
                <div class="affix">${(fodder.affixes[7]) ? fodder.affixes[7].name : `&nbsp;`}</div>
            </div>
            <div class="divider"></div>
            <div class="produce-button">PRODUCE</div>
            <div class="success-indicator">
                <span>Success: </span>
            <span>${(fodder.successRate >= 0) ? fodder.successRate + `%` : `?`}</span>
            </div>
        </div>`;

const DROPDOWN_TEMPLATE = ({ options, selected }) => {
    let dropdown = `<div class="dropdown-container"><select>`;
    if (Array.isArray(options)) {
        for (var i = 0; i < options.length; i++) {
            let isSelected = (selected == options[i]);
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
        `<div class="affix-selection-container">
            <div>
                <table>
                    <tr>
                        <td>
                            <div class="title bold">Affixing Goal</div>
                            <div style="margin-bottom: 1em;">
                            <div class="affix ${(affixesSelected && affixesSelected[0] && affixesSelected[0].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[0] && affixesSelected[0].name) ? affixesSelected[0].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[1] && affixesSelected[1].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[1] && affixesSelected[1].name) ? affixesSelected[1].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[2] && affixesSelected[2].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[2] && affixesSelected[2].name) ? affixesSelected[2].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[3] && affixesSelected[3].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[3] && affixesSelected[3].name) ? affixesSelected[3].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[4] && affixesSelected[4].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[4] && affixesSelected[4].name) ? affixesSelected[4].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[5] && affixesSelected[5].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[5] && affixesSelected[5].name) ? affixesSelected[5].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[6] && affixesSelected[6].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[6] && affixesSelected[6].name) ? affixesSelected[6].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix ${(affixesSelected && affixesSelected[7] && affixesSelected[7].name) ? `` : `empty`}">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[7] && affixesSelected[7].name) ? affixesSelected[7].name : `&nbsp;`}</span>
                            </div>
                        </div>
                            <div class="title bold">Stats</div>
                            <div>
                                <div class="stat">S-ATK (+100)</div>
                                <div class="stat">PP (+10)</div>
                                <div class="stat">DEX (+30)</div>
                                <div class="stat">S-DEF (+5)</div>
                                <div class="stat">HP (+50)</div>
                            </div>
                        </td>
                        <td>
                            <div class="title bold">Affix Search</div>
                            ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist })}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>Cancel</div>
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
            filtersearch += `<li><div>${datalist[i].name}</div></li>`;
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