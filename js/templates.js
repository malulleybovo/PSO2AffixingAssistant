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

const AFFIX_SELECTION_MENU = ({ }) => {

};