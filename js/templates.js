/**
 * HTML Templates
 * 
 * @author malulleybovo (2018)
 */

const CONTAINER_TEMPLATE = ({ pages, successRates, abilitySuccessRateOptions, potentialOptions }) => {
    let container = '<div class="container">'
    if (Array.isArray(pages) && Array.isArray(successRates)
        && pages.length == successRates.length) {
        for (var i = 0; i < pages.length; i++) {
            let page = pages[i];
            let successRate = successRates[i];
            container += PAGE_TEMPLATE({
                successRates: successRate,
                fodders: page,
                abilitySuccessRateOptions: abilitySuccessRateOptions,
                potentialOptions: potentialOptions
            });
        }
    }
    container += '</div>';
    return container;
};

const PAGE_TEMPLATE = ({ successRates, fodders, abilitySuccessRateOptions, potentialOptions }) => {
    let page = `<div class="page" data-conn="1">`;
    if (Array.isArray(fodders) && successRates && successRates.fodders
        && Array.isArray(successRates.fodders) && fodders.length == successRates.fodders.length) {
        for (var i = 0; i < fodders.length; i++) {
            let fodder = fodders[i];
            page += FODDER_TEMPLATE({
                affixes: fodder,
                successRate: successRates.fodders[i]
            });
        }
    }
    page +=
        `<div class="success-indicator">
            <span>Success: </span>
            <span>${(successRates && successRates.page >= 0) ? successRates.page + `%` : `?`}</span>
        </div>
        <div class="boost-container">`
        + CHECKBOX_TEMPLATE({
            description: 'Same',
            isChecked: (successRates && successRates.same) ? successRates.same : false
        });
    if (Array.isArray(abilitySuccessRateOptions)) {
        page += DROPDOWN_TEMPLATE({
            options: abilitySuccessRateOptions,
            selected: (successRates && successRates.abilityRateSelected) ? successRates.abilityRateSelected : undefined
        });
    }
    if (Array.isArray(potentialOptions)) {
        page += DROPDOWN_TEMPLATE({
            options: potentialOptions,
            selected: (successRates && successRates.potentialSelected) ? successRates.potentialSelected : undefined
        });
    }
    page += `</div></div>`;
    return page;
};

const FODDER_TEMPLATE = ({ dataConnNum, affixes, successRate }) =>
    `<div class="fodder" ${(dataConnNum >= 0) ? `data-conn="` + dataConnNum + `"` : ``}>
            <div class="affixes">
                <div class="affix">${(Array.isArray(affixes) && affixes[0]) ? affixes[0].name : `&nbsp;`}</div >
                <div class="affix">${(Array.isArray(affixes) && affixes[1]) ? affixes[1].name : `&nbsp;`}</div>
                <div class="affix">${(Array.isArray(affixes) && affixes[2]) ? affixes[2].name : `&nbsp;`}</div>
                <div class="affix">${(Array.isArray(affixes) && affixes[3]) ? affixes[3].name : `&nbsp;`}</div>
                <div class="affix">${(Array.isArray(affixes) && affixes[4]) ? affixes[4].name : `&nbsp;`}</div>
                <div class="affix">${(Array.isArray(affixes) && affixes[5]) ? affixes[5].name : `&nbsp;`}</div>
                <div class="affix">${(Array.isArray(affixes) && affixes[6]) ? affixes[6].name : `&nbsp;`}</div>
                <div class="affix">${(Array.isArray(affixes) && affixes[7]) ? affixes[7].name : `&nbsp;`}</div>
            </div>
            <div class="divider"></div>
            <div class="produce-button">PRODUCE</div>
            <div class="success-indicator">
                <span>Success: </span>
            <span>${(successRate >= 0) ? successRate + `%` : `?`}</span>
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
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[0] && affixesSelected[0].name) ? affixesSelected[0].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[1] && affixesSelected[1].name) ? affixesSelected[1].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[2] && affixesSelected[2].name) ? affixesSelected[2].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[3] && affixesSelected[3].name) ? affixesSelected[3].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[4] && affixesSelected[4].name) ? affixesSelected[4].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[5] && affixesSelected[5].name) ? affixesSelected[5].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
                                <i class="fa fa-trash"></i>
                                <span>${(affixesSelected && affixesSelected[6] && affixesSelected[6].name) ? affixesSelected[6].name : `&nbsp;`}</span>
                            </div>
                            <div class="affix">
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