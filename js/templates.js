/**
 * HTML Templates
 *
 * @author malulleybovo (since 2018)
 * @license GNU General Public License v3.0
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2018  Arthur Malulley B. de O.
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

const WELCOME_VIEW = (langCode) => `<div class="welcome">
        <div>
            <div>
                <div class="content">
                    <div>
                        <h1>${lang.app.appTitle[langCode]}</h1>
                    </div>
                    <p>${lang.app.subHeader[langCode]}</p>
                    <div>
                        <img src="css/res/howItWorks.png">
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const PAGE_TREE_NODE_TEMPLATE = ({ pageTreeNode, level, offset, boostWeekOptions, boostWeekIdx, langCode }) => {
    let treeNodeTemplate = '<table class="mgrid"><tr><td>';
    level = (typeof level === 'number') ? level : 0;
    offset = (typeof offset === 'number') ? offset : 0;
    let connectionOrder = [];
    // Get index of connected
    // Since the list of pages may be unordered,
    // the data-conn offset of each fodder may not be ordered
    let capacity = Page.CAPACITY;
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
        let rateOpts = [];
        for (var i = 0; i < Assistant.rateBoostOptions.length; i++) {
            let opt = Assistant.rateBoostOptions[i];
            if (opt) opt = lang['support'][opt.id];
            if (opt) opt = opt[langCode];
            if (opt) rateOpts.push(opt);
        }
        let potOpts = [];
        for (var i = 0; i < Assistant.potentialOptions.length; i++) {
            let opt = Assistant.potentialOptions[i];
            if (opt) opt = lang['potential'][opt.id];
            if (opt) opt = opt[langCode];
            if (opt) potOpts.push(opt);
        }
        treeNodeTemplate += PAGE_TEMPLATE({
            page: pageTreeNode.page,
            isGoal: pageTreeNode.isGoal,
            rateBoostOptions: rateOpts,
            potentialOptions: potOpts,
            boostWeekOptions: boostWeekOptions,
            boostWeekIdx: boostWeekIdx,
            level: level,
            offset: offset,
            fodderOffsets: connectionOrder,
            langCode: langCode
        });
    }
    treeNodeTemplate += '</td><td>';
    if (pageTreeNode.size() > 0) {
        for (var i = 0; i < pageTreeNode.size(); i++) {
            treeNodeTemplate += PAGE_TREE_NODE_TEMPLATE({
                pageTreeNode: pageTreeNode.children[i],
                level: (level + 1),
                offset: (offset * capacity) + i,
                boostWeekOptions: boostWeekOptions,
                boostWeekIdx: boostWeekIdx,
                langCode: langCode
            });
        }
    }
    treeNodeTemplate += '</td></tr></table>';
    return treeNodeTemplate;
};

const PAGE_TEMPLATE = ({ page, isGoal, rateBoostOptions, potentialOptions, boostWeekOptions, boostWeekIdx, level, offset, fodderOffsets, langCode }) => {
    let capacity = Page.CAPACITY;
    let dataConn;
    // data-conn is a mapping of the page-fodder connections within a tree structure with a set max number of children per node
    // base = ((capacity^(level)) - 1) / (capacity - 1)
    // refers to the start index at every level of the tree (ie: 0 (goal only), 1, 7, 43, 259, 1555...)
    // offset refers to the offset index of the page within its level down the tree structure
    if (typeof level === 'number') dataConn =
        ((Math.pow(capacity, level) - 1) / (capacity - 1)) + offset;
    else dataConn = 0;
    let pageTempate = `<div ${(isGoal) ? `id="goal" ` : ``}class="page ${page.transplantable === true ? ` transplant` : ``}" ${(dataConn >= 0) ? `data-conn="` + dataConn + `"` : ``}><div>`;
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
                titleLabel: (isGoal) ? lang.app.goalFodderTitle[langCode] : i == 0 ? lang.app.mainFodderTitle[langCode] :
                    page.transplantable === true ? lang.app.materialTitle[langCode] : (lang.app.fodderTitle[langCode] + ' ' + i),
                produceLabel: null,
                dataConn: (fodderOffsets[i] >= 0) ? fodderDataConnBase + fodderOffsets[i] : -1,
                isSameGear: page.fodders[i].isSameGear,
                rateBoostOptions: rateBoostOptions,
                rateBoostIdx: page.fodders[i].rateBoostIdx,
                potentialOptions: potentialOptions,
                potentialIdx: page.fodders[i].potentialIdx,
                boostWeekOptions: boostWeekOptions,
                boostWeekIdx: boostWeekIdx,
                langCode: langCode
            });
        }
        pageTempate += `</div>`;
        if (!isGoal) {
            pageTempate += `<div class="success-indicator">
                <span>${page.transplantable === true ? lang.app.stageTransplantCostLabel[langCode] : lang.app.stageSuccessLabel[langCode]}: </span>
                <span>${page.transplantable === true ? (page.transplantCost >= 0 ? page.transplantCost : `?`) : (page.successRate >= 0) ? page.successRate + `%` : `?`
        }</span >
            </div>`;
        }
    }
    pageTempate += `</div>`;
    return pageTempate;
};

const FODDER_TEMPLATE = ({ fodder, isGoal, titleLabel, dataConn, produceLabel, isSameGear, rateBoostOptions, rateBoostIdx, potentialOptions, potentialIdx, boostWeekOptions, boostWeekIdx, langCode }) =>
    `<div class="fodder" ${(dataConn >= 0) ? `data-conn="` + dataConn + `"` : ``}>
            <div class="title">${titleLabel}</div>
            <div class="affixes">
                <div class="affix${(fodder && fodder.affixes[0] && fodder.affixes[0].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[0] && lang[fodder.affixes[0].code] && lang[fodder.affixes[0].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[0].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[0] && lang[fodder.affixes[0].code]) ? lang[fodder.affixes[0].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[0]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[0]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[0])}">${fodder.affixSuccessRates[0]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[1] && fodder.affixes[1].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[1] && lang[fodder.affixes[1].code] && lang[fodder.affixes[1].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[1].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[1] && lang[fodder.affixes[1].code]) ? lang[fodder.affixes[1].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[1]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[1]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[1])}">${fodder.affixSuccessRates[1]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[2] && fodder.affixes[2].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[2] && lang[fodder.affixes[2].code] && lang[fodder.affixes[2].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[2].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[2] && lang[fodder.affixes[2].code]) ? lang[fodder.affixes[2].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[2]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[2]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[2])}">${fodder.affixSuccessRates[2]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[3] && fodder.affixes[3].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[3] && lang[fodder.affixes[3].code] && lang[fodder.affixes[3].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[3].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[3] && lang[fodder.affixes[3].code]) ? lang[fodder.affixes[3].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[3]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[3]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[3])}">${fodder.affixSuccessRates[3]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[4] && fodder.affixes[4].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[4] && lang[fodder.affixes[4].code] && lang[fodder.affixes[4].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[4].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[4] && lang[fodder.affixes[4].code]) ? lang[fodder.affixes[4].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[4]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[4]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[4])}">${fodder.affixSuccessRates[4]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[5] && fodder.affixes[5].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[5] && lang[fodder.affixes[5].code] && lang[fodder.affixes[5].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[5].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[5] && lang[fodder.affixes[5].code]) ? lang[fodder.affixes[5].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[5]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[5]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[5])}">${fodder.affixSuccessRates[5]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[6] && fodder.affixes[6].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[6] && lang[fodder.affixes[6].code] && lang[fodder.affixes[6].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[6].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[6] && lang[fodder.affixes[6].code]) ? lang[fodder.affixes[6].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[6]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[6]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[6])}">${fodder.affixSuccessRates[6]}%</span>` : `` : ``}</div>
                <div class="affix${(fodder && fodder.affixes[7] && fodder.affixes[7].noEx) ? ` ssa` : ``}"${(fodder && fodder.affixes[7] && lang[fodder.affixes[7].code] && lang[fodder.affixes[7].code]['effect_' + langCode]) ? ` title="${lang[fodder.affixes[7].code]['effect_' + langCode].replace(/,<br>/g, ', ').replace(/<br>/g, ' : ')}"` : ``}>${(fodder && fodder.affixes[7] && lang[fodder.affixes[7].code]) ? lang[fodder.affixes[7].code]['name_' + langCode] : `&nbsp;`}${(fodder.affixes[7]) ? (fodder.affixSuccessRates && fodder.affixSuccessRates[7]) ? ` : <span title="${lang.app.abilitySuccessSpanTitle[langCode](fodder.affixSuccessRates[7])}">${fodder.affixSuccessRates[7]}%</span>` : `` : ``}</div>
            </div>
            <div class="divider"></div>
            ${((fodder && fodder.specialAbilityFactor) ? `<div class="affix special-ability-factor">${lang.app.factorLabel[langCode]}<br>(${lang[fodder.specialAbilityFactor.code]['name_' + langCode]})</div><div class="divider"></div>` : ``)}
            <div class="produce-button${((fodder.hasNonTransferableAffixes()) ? ` disabled">${lang.app.cannotAffixLabel[langCode]}` : `">${(produceLabel) ? produceLabel : ((dataConn >= 0 && fodder.connectedTo && fodder.connectedTo.transplantable !== true) ? lang.app.reAffixLabel[langCode] : lang.app.affixLabel[langCode])}`)}</div>
            <div class="transplant-button${(fodder.affixes.filter(a => a.noEx !== true) === 0 ? ` disabled` : ``)}">${(fodder.affixes.filter(a => a.noEx !== true) === 0 ? lang.app.cannotTransplantLabel[langCode] : (dataConn >= 0 && fodder.connectedTo && fodder.connectedTo.transplantable === true) ? lang.app.reTransplantLabel[langCode] : lang.app.transplantLabel[langCode])}</div>
            ${(fodder.overallSuccessRate >= 0 || (fodder.connectedTo && fodder.connectedTo.transplantable === true && fodder.connectedTo.transplantCost >= 0)) ? `<div class="success-indicator" title="${lang.app.fodderSuccessDivTitle[langCode]}">
                <div>${
                (fodder.connectedTo && fodder.connectedTo.transplantable === true) ? lang.app.transplantTitle[langCode] : lang.app.affixingTitle[langCode]
                }</div>
                <span>${(fodder.connectedTo && fodder.connectedTo.transplantable === true) ? lang.app.fodderTransplantCostLabel[langCode] : ((isGoal) ? lang.app.goalLabel[langCode] : lang.app.fodderLabel[langCode]) + ' ' + lang.app.fodderSuccessLabel[langCode]}: </span>
            <span>${(fodder.connectedTo && fodder.connectedTo.transplantable === true) ? (fodder.connectedTo.transplantCost >= 0 ? fodder.connectedTo.transplantCost : '?') : (fodder.overallSuccessRate + `%`)}</span></div>` : ``}
            ${(fodder.affixSuccessRates.length > 0 && fodder.connectedTo && fodder.connectedTo.transplantable !== true) ?
            `<div class="boost-container individual" >
                ${CHECKBOX_TEMPLATE({
                    label: lang.app.sameEquipLabel[langCode],
                    description: lang.app.sameEquipDescription[langCode],
                    isChecked: isSameGear
                })
                + DROPDOWN_TEMPLATE({
                    type: 0,
                    options: rateBoostOptions,
                    selected: (rateBoostIdx >= 0) ? rateBoostIdx : undefined,
                    description: lang.app.rateBoostDescription[langCode]
                })
                + DROPDOWN_TEMPLATE({
                    type: 1,
                    options: potentialOptions,
                    selected: (potentialIdx >= 0) ? potentialIdx : undefined,
                    description: lang.app.potDescription[langCode]
                })}
            </div>` : ``}
            ${((fodder && fodder.addAbilityItemInUse
                && lang['additional'][fodder.addAbilityItemInUse.name]
                && lang['additional'][fodder.addAbilityItemInUse.name][langCode]) ?
                `<div class="affix add-ability">${lang['additional'][fodder.addAbilityItemInUse.name][langCode]}</div>` : ``)}${
            (isGoal) ?
            `<div class="divider"></div><div class="boost-container global" >`
            + DROPDOWN_TEMPLATE({
                type: 2,
                options: boostWeekOptions.map(lang.app.boostWeekOption[langCode]),
                selected: boostWeekIdx,
                description: lang.app.boostWeekDescription[langCode]
                }) + `</div>` : ''}
        </div>`;

const LINK_TEMPLATE = ({ link, linkToSim, smallLink, langCode }) => {
    return `<div class="link-container hidden" onclick="$(this).remove();">
        <div onclick="event.stopPropagation();">
            <div class="main-grid">
                <div class="title bold">${lang.app.shareFormulaTitle[langCode]}</div>
                <input type="text" value="${link}" onfocus="this.setSelectionRange(0, this.value.length)">
                <div class="copy-button"><a>${lang.app.shareFormulaButton[langCode]}</a></div>
                ${ smallLink ?
                `<input type="text" value="${smallLink}" onfocus="this.setSelectionRange(0, this.value.length)">
                <div class="copy-button"><a>${lang.app.shareFormulaButtonShort[langCode]}</a></div>`
                : ``}
                <div class="copy-button"><a  href="${linkToSim}" target="_blank">${lang.app.openInSimButton[langCode]}</a></div>
                <div class="confirm-button">${lang.app.closeButton[langCode]}</div>
            </div>
        </div>
    </div>`;
}

const DROPDOWN_TEMPLATE = ({ type, options, selected, description }) => {
    let dropdown = `<div class="dropdown-container${(type == 0) ? ` success-rate` : ((type == 1) ? ` equipment-potential` : ``)}"`;
    if (description) dropdown += ` title="${description}"`;
    dropdown += `><select>`;
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

const CHECKBOX_TEMPLATE = ({ label, description, isChecked }) =>
    `<div class="checkbox-container">
        <div class="checkbox-holder">
            <div${(description) ? ` title ="${description}"` : ``}>${(label) ? label : ``}</div>
            <label class="checkmark-holder">
                <input type="checkbox" ${(isChecked) ? `checked` : ``}>
                <span class="checkmark"></span>
            </label>
        </div>
    </div>`;

const FILTER_SEARCH_TEMPLATE = ({ categories, datalist, isGlobalSearch, langCode }) => {
    let filtersearch = `<div class="filtersearchcontainer">
        <script>
            toggleExcludeSearchbar = function(btn) {
                var $excludeSearchbar = ${(isGlobalSearch) ? `$('.filtersearchcontainer .exclude-search-container')` : `$(btn).siblings('.filtersearchcontainer .exclude-search-container')`};
                if (!$excludeSearchbar && !$excludeSearchbar[0]) return;
                if ($excludeSearchbar.css('height') == '0px') $excludeSearchbar.css('height', '100%');
                else {
                    $excludeSearchbar.css('height', '0');
                    $excludeSearchbar.find('.searchbar').val("");
                    excludeSearch($excludeSearchbar.find('.searchbar')[0]);
                }
            };
            filterSearch = function(input) {
                let filter = input.value.toUpperCase();
                let $searchContainer = ${(isGlobalSearch) ? `$(".filtersearchcontainer")` : `$(input).closest('.filtersearchcontainer')`};
                if (!$searchContainer || !$searchContainer[0]) return;
                $searchContainer[0].searchTerm = filter;
                updateSearch($searchContainer);
            };
            excludeSearch = function(input) {
                let filter = input.value.toUpperCase();
                let $searchContainer = ${(isGlobalSearch) ? `$(".filtersearchcontainer")` : `$(input).closest('.filtersearchcontainer')`};
                if (filter == undefined || filter == null || !$searchContainer || !$searchContainer[0]) return;
                var terms = filter.split(",");
                if (!terms) return;
                var regEx = terms.map(s => s.trim()).filter(s => s && s.length > 0).join("|");
                if (!regEx || regEx.length <= 0) $searchContainer[0].excludeTerm = undefined;
                else $searchContainer[0].excludeTerm = new RegExp(".*" + regEx + ".*");
                updateSearch($searchContainer);
            };
            updateSearch = function($searchContainer) {
                let li = $searchContainer.find('li');
                if (!li) return;
                var searchTerm = $searchContainer[0].searchTerm;
                var excludeTerm = $searchContainer[0].excludeTerm;
                for (var i = 0; i < li.length; i++) {
                    let div = li[i].getElementsByTagName("div")[0];
                    var text = div.innerHTML.toUpperCase().replace(${/<\/?SPAN( CLASS=".*")?>/g}, "");
                    var searchCheck = !(searchTerm && searchTerm.length > 0 && text.indexOf(searchTerm) < 0);
                    var excludeCheck = !(excludeTerm && excludeTerm.test(text));
                    if (searchCheck && excludeCheck) {
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
        <div class="searchbar-wrapper">
            <input type="text" class="searchbar" onkeyup="filterSearch(this)" onfocus="this.setSelectionRange(0, this.value.length)" placeholder="${lang.app.filterSearchPlaceholder[langCode]}" title="${lang.app.filterSearchTitle[langCode]}" maxlength="32">
            <div class="exclude-search-container">
                <input type="text" class="searchbar exclude-search" onkeyup="excludeSearch(this)" onfocus="this.setSelectionRange(0, this.value.length)" placeholder="${lang.app.excludeSearchPlaceholder[langCode]}" title="${lang.app.excludeSearchTitle[langCode]}" maxlength="32">
            </div>
            <div class="exclude-search-btn" onclick="toggleExcludeSearchbar(this)">
                <i class="fa fa-filter" title="${lang.app.excludeSearchBtn[langCode]}"></i>
            </div>
        </div>
        <ul>`;
    if (Array.isArray(datalist)) {
        for (var i = 0; i < datalist.length; i++) {
            if (datalist[i].code && lang[datalist[i].code]) {
                filtersearch += `<li data-idx="${i}"><div title="${lang[datalist[i].code]['effect_' + langCode].replace(/<br>/g, ' ')}" data-code="${datalist[i].code}"  class="${lang[datalist[i].code]['name_' + langCode].charAt(0) == '*' ? 'unavailable' : ''}">${lang[datalist[i].code]['name_' + langCode]}</div></li>`;
            }
            else if (datalist[i].isAddAbilityItem && lang['additional'][datalist[i].name]) {
                let choice = `<span${(!datalist[i].isSSA) ?
                    ` class="rate"` : ``}>${datalist[i].transferRate}</span>% : ${lang['additional'][datalist[i].name][langCode]}`;
                filtersearch += `<li data-idx="${i}"><div>${choice}</div></li>`;
            }
            else if (datalist[i].isAbilityFactor) {
                let choice = `<span${(!datalist[i].abilityRef.noEx) ?
                    ` class="rate"` : ``}>${datalist[i].transferRate}</span>% : ${lang.app.factorLabel[langCode]}`;
                filtersearch += `<li data-idx="${i}"><div>${choice}</div></li>`;
            }
            else if (datalist[i].materials) {
                let choice = `<span${(datalist[i].materials[0] && !datalist[i].materials[0].noEx) ?
                    ` class="rate"` : ``}>${datalist[i].transferRate}</span>% : `;
                for (var j = 0; j < datalist[i].materials.length; j++) {
                    if (datalist[i].materials[j] == undefined || !lang[datalist[i].materials[j].code]) continue;
                    choice += `<span>${lang[datalist[i].materials[j].code]['name_' + langCode]}</span>`;
                    if (j < datalist[i].materials.length - 1) choice += ', ';
                }
                filtersearch += `<li data-idx="${i}"><div>${choice}</div></li>`;
            }
            else if (datalist[i].makeAffix && datalist[i].withChoice) {
                let materials = '';
                for (var j = 0; j < datalist[i].withChoice.materials.length; j++) {
                    if (datalist[i].withChoice.materials[j] == undefined
                        || !lang[datalist[i].withChoice.materials[j].code]) continue;
                    materials += `${lang[datalist[i].withChoice.materials[j].code]['name_' + langCode]}`;
                    if (j < datalist[i].withChoice.materials.length - 1) materials += ', ';
                }
                filtersearch += `<li data-idx="${i}"><div>${
                    lang.app.affixUse[langCode](datalist[i].withChoice.transferRate,
                        lang[datalist[i].makeAffix.code]['name_' + langCode], materials
                    )}</div></li>`;
            }
            else if (typeof datalist[i] === 'string') {
                filtersearch += `<li data-idx="${i}"><div>${datalist[i]}</div></li>`;
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

const REVIEWING_PANEL = ({ fodders, langCode }) => {
    panel = `<div><div>${lang.app.reviewTweakTooltip1[langCode]}</div><div>${lang.app.reviewTweakTooltip2[langCode]}</div></div>`;
    let hasFactor = false;
    for (var i = 0; i < fodders.length; i++) {
        if (fodders[i].specialAbilityFactor && fodders[i].specialAbilityFactor.code) {
            hasFactor = true;
            break;
        }
    }
    for (var i = 0; i < fodders.length; i++) {
        let fodderInReview = fodders[i];
        panel += `<div data-fodderidx="${i}"><div class="title bold">${i == 0 ? lang.app.mainFodderTitle[langCode] : (lang.app.fodderTitle[langCode] + ' ' + i)}</div><div>`;
        for (var j = 0; j < fodderInReview.size(); j++) {
            let affix = fodderInReview.affixes[j];
            if (!affix.code) continue;
            panel += `<div class="affix swappable"${(affix) ? ` title="${lang[affix.code]['effect_' + langCode]}"` : ``}${(affix) ? ` data-code="${affix.code}"` : ``}>
                                <span>${(affix && affix.code && lang[affix.code] && lang[affix.code]['name_' + langCode]) ? `${lang[affix.code]['name_' + langCode]}` : `&nbsp;`}</span>
                            </div>`;
        }
        panel += `</div>`;
        if (hasFactor) panel += `<div class="divider"></div><div data-fodderidx="${i}" class="affix swappable${((fodderInReview && fodderInReview.specialAbilityFactor) ? ` special-ability-factor">${lang.app.factorLabel[langCode]}<br>(${lang[fodderInReview.specialAbilityFactor.code]['name_' + langCode]})` : ` blank-special-ability-factor">&nbsp;<br>&nbsp;`)}</div>`;
        panel += `</div>`;
    }
    return panel;
};

const TRANSPLANT_PANEL = ({ fodders, addAbilityChosen, langCode }) => {
    panel = `<div><div>${lang.app.transplantTooltip[langCode]}</div></div>`;
    let hasFactor = false;
    for (var i = 0; i < fodders.length; i++) {
        if (fodders[i].specialAbilityFactor && fodders[i].specialAbilityFactor.code) {
            hasFactor = true;
            break;
        }
    }
    let numSsas = 0;
    let addAbilityChoices = [];
    for (var i = 0; i < fodders.length; i++) {
        let fodderInReview = fodders[i];
        if (i === 0) {
            numSsas = fodderInReview.affixes.filter(a => a.noEx === true).length;
        }
        panel += `<div data-fodderidx="${i}"><div class="title bold">${i == 0 ? lang.app.mainFodderTitle[langCode] : (lang.app.materialTitle[langCode])}</div><div>`;
        for (var j = 0; j < fodderInReview.size(); j++) {
            let affix = fodderInReview.affixes[j];
            if (!affix.code) continue;
            let isAddAbilityChoice = false;
            if (affix.code && Assistant.affixDB[affix.code] && Assistant.affixDB[affix.code].choices
                && Assistant.affixDB[affix.code].choices.filter(a => a.isAddAbilityItem === true).length > 0) {
                isAddAbilityChoice = true;
                addAbilityChoices.push(affix);
            }
            panel += `<div class="affix${isAddAbilityChoice ? ' add-ability-choice' : ''}"${(affix) ? ` title="${lang[affix.code]['effect_' + langCode]}"` : ``}${(affix) ? ` data-code="${affix.code}"` : ``}>
                                <span>${(affix && affix.code && lang[affix.code] && lang[affix.code]['name_' + langCode]) ? `${lang[affix.code]['name_' + langCode]}` : `&nbsp;`}</span>
                            </div>`;
        }
        panel += `</div>`;
        if (hasFactor) panel += `<div class="divider"></div><div data-fodderidx="${i}" class="affix swappable${((fodderInReview && fodderInReview.specialAbilityFactor) ? ` special-ability-factor">${lang.app.factorLabel[langCode]}<br>(${lang[fodderInReview.specialAbilityFactor.code]['name_' + langCode]})` : ` blank-special-ability-factor">&nbsp;<br>&nbsp;`)}</div>`;
        panel += `</div>`;
    }
    if (numSsas > 0 || addAbilityChosen || addAbilityChoices.length > 0) {
        panel += `<div style="display: block;"><div>${lang.app.transplantOptionsLabel[langCode]}</div></div>`;
    }
    if (numSsas > 0) {
        panel += `<div class="transplant-slot-regulator">
                <div class="button-decrease"><i class="fa fa-minus"></i></div>
                <div>${lang.app.transplantMaterialSlotLabel[langCode]}</div>
                <div class="button-increase"><i class="fa fa-plus"></i></div>
            </div>`;
    }
    if (addAbilityChosen || addAbilityChoices.length > 0) {
        if (addAbilityChosen !== undefined && addAbilityChosen !== null
            && addAbilityChosen.ref !== undefined && addAbilityChosen.ref !== null
            && addAbilityChosen.code !== undefined && addAbilityChosen.code !== null
            && Assistant.data.optionList.additional.filter(a => a.ref === addAbilityChosen.ref).length > 0) {
            panel += `<div>
                <div>${lang.app.transplantAddAbilityItemLabel[langCode]}</div>
                <div class="affix transplant-add-ability">
                    <span>${lang.additional[Assistant.data.optionList.additional.filter(a => a.ref === addAbilityChosen.ref)[0].id][langCode]}</span>
                </div>
                <div class="transplant-add-ability-button">${lang.app.resetButton[langCode]}</div>
            </div>`;
        } else {
            panel += `<div>
                <div>${lang.app.transplantAddAbilityItemLabel[langCode]}</div>
                <div class="transplant-add-ability-button select">${lang.app.selectButton[langCode]}</div>
            </div>`;
        }
    }
    return panel;
};

const SELECTION_MENU_TEMPLATE = ({ type, affixesSelected, categories, datalist, addAbilityChosen, transplantCost, isGlobalSearch, shouldUpslot, shouldSpread, shouldUseTrainer, langCode }) => {
    let isAffixSelection = type == 'affixSelection';
    let isChoiceSelection = type == 'choiceSelection';
    let isReviewTweak = type == 'reviewTweak';
    let isTransplantPanel = type == 'transplant';
    let isFormulaSheet = type == 'formulaSheet';
    let isWishList = type == 'wishList';
    let layoutTemplate = `<div class="${(isAffixSelection) ? `affix-selection-container` :
                                        (isChoiceSelection) ? `choice-selection-container` :
                                        (isReviewTweak) ? `review-tweak-container` :
                                        (isTransplantPanel) ? `transplant-container` :
                                        (isFormulaSheet) ? `formula-sheet-container` :
                                        (isWishList) ? `wish-list-container` : ``} hidden" onclick="${isTransplantPanel ? '' : '$(this).remove();'}">
        <div onclick="event.stopPropagation();">
            <div class="main-grid">
                <div class="title bold">${(isAffixSelection) ? lang.app.chooseAffixTitle[langCode] :
                                          (isChoiceSelection) ? lang.app.chooseMethodTitle[langCode] :
                                          (isReviewTweak) ? lang.app.reviewTweakTitle[langCode] :
                                          (isTransplantPanel) ? lang.app.transplantTitle[langCode] :
                                          (isFormulaSheet) ? lang.app.formulaSheetTitle[langCode] :
                                          (isWishList) ? lang.app.wishListTitle[langCode] : ``}</div>${(isChoiceSelection) ?
                `<div class="options">${(affixesSelected.length > 1) ? `
                    ${CHECKBOX_TEMPLATE({ label: lang.app.upslottingLabel[langCode], description: lang.app.upslottingDescription[langCode], isChecked: shouldUpslot })}` : ``}
                    ${CHECKBOX_TEMPLATE({ label: lang.app.spreadLabel[langCode], description: lang.app.spreadDescription[langCode], isChecked: shouldSpread })}
                    ${CHECKBOX_TEMPLATE({ label: lang.app.trainerLabel[langCode], description: lang.app.trainerDescription[langCode], isChecked: shouldUseTrainer })}
                </div>`
            : ``}<div class="content">`;
    if (isAffixSelection) {
        layoutTemplate += `<div><div>
                        <div class="title bold">${lang.app.affixingSelectionTitle[langCode]}</div>
                        <div class="selection-container">`;
        for (var i = 0; i < Fodder.CAPACITY; i++) {
            layoutTemplate += `<div class="affix${(affixesSelected[i]) ? `` : ` empty`}"${(affixesSelected[i]) ? ` title="${lang[affixesSelected[i].code]['effect_' + langCode]}"` : ``}${(affixesSelected[i]) ? ` data-code="${affixesSelected[i].code}"` : ``}>
                                <i class="fa fa-trash">${hasFaFailedLoading ? 'remove' : ''}</i>
                                <span>${(affixesSelected[i] && affixesSelected[i].code && lang[affixesSelected[i].code] && lang[affixesSelected[i].code]['name_' + langCode]) ? `${lang[affixesSelected[i].code]['name_' + langCode]}` : `&nbsp;`}</span>
                            </div>`;
        }
        layoutTemplate += `</div>
                        <div class="title bold">${lang.app.statsViewerTitle[langCode]}</div>
                        <div class="stats-viewer">
                        </div>
                    </div>
                    <div>
                        <div class="title bold">${lang.app.affixChoices[langCode]}</div>
                        ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist, isGlobalSearch: isGlobalSearch, langCode: langCode })}
                    </div></div>`;
    }
    else if (isChoiceSelection) {
        if (affixesSelected && Array.isArray(affixesSelected)) {
            for (var i = 0; i < affixesSelected.length; i++) {
                if (!affixesSelected[i].code || datalist === undefined
                    || datalist[affixesSelected[i].code] === undefined) continue;
                layoutTemplate += `<div${(affixesSelected[i]) ? ` data-code="${affixesSelected[i].code}"` : ``}>
                        <div class="title bold">${lang.app.affixChoiceLabel[langCode]} ${i + 1}</div>
                        <div>
                            <div class="affix"${(affixesSelected[i]) ? ` title="${lang[affixesSelected[i].code]['effect_' + langCode]}"` : ``}${(affixesSelected[i]) ? ` data-code="${affixesSelected[i].code}"` : ``}>
                                <span>${(affixesSelected[i] && affixesSelected[i].code && lang[affixesSelected[i].code] && lang[affixesSelected[i].code]['name_' + langCode]) ? `${lang[affixesSelected[i].code]['name_' + langCode]}` : `&nbsp;`}</span>
                            </div>
                        </div>
                        <div class="title bold">${lang.app.affixChoices[langCode]}</div>
                        ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist[affixesSelected[i].code], isGlobalSearch: isGlobalSearch, langCode: langCode })}
                    </div>`;
            }
        }
    }
    else if (isReviewTweak) {
        layoutTemplate += REVIEWING_PANEL({ fodders: datalist, langCode: langCode });
    }
    else if (isTransplantPanel) {
        layoutTemplate += TRANSPLANT_PANEL({ fodders: datalist, addAbilityChosen: addAbilityChosen, langCode: langCode });
    }
    else if (isFormulaSheet) {
        layoutTemplate += `<div>
                        <div class="title bold">${lang.app.abilityListTitle[langCode]}</div>
                        ${FILTER_SEARCH_TEMPLATE({ categories: categories, datalist: datalist, isGlobalSearch: isGlobalSearch, langCode: langCode })}
                    </div>
                    <div>
                        <div class="title bold">${lang.app.abilityFormulasTitle[langCode]}</div>
                        <div class="search-results-container"></div>
                        <div class="title bold">${lang.app.abilityFormulaUsesTitle[langCode]}</div>
                        <div class="search-results-container"></div>
                    </div>`;
    }
    else if (isWishList) {
        layoutTemplate += WISH_LIST_TEMPLATE({
            fodderList: datalist,
            transplantCost: transplantCost,
            langCode: langCode
        });
    }
    layoutTemplate += `</div>${isAffixSelection ?
                `<div class="warning-msg"></div>` : ``}
                <div>
                    ${(isAffixSelection || isChoiceSelection || isReviewTweak || isTransplantPanel) ?
                    `<div class="cancel-button">${lang.app.cancelButton[langCode]}</div>` : ``}
                    ${(isAffixSelection) ? `<div class="confirm-button transplant-confirm-button">${lang.app.transplantButton[langCode]}</div>` : ``}
                    <div class="confirm-button${(isAffixSelection) ? ` affix-confirm-button` : ``}${
                        (isAffixSelection) ? ` disabled">${lang.app.affixButton[langCode]}` :
                        (isChoiceSelection) ? ` disabled">${lang.app.confirmButton[langCode]}` :
                        (isReviewTweak) ? `">${lang.app.confirmButton[langCode]}` :
                        (isTransplantPanel) ? ` transplant-confirm-button">${lang.app.confirmButton[langCode]}` :
                        `">${lang.app.closeButton[langCode]}`}</div>
                </div>
            </div>
        </div>
    </div>`;
    return layoutTemplate;
}

const AFFIX_SELECTION_VIEW_TEMPLATE = ({ affixesSelected, categories, abilityList, isGlobalSearch, langCode }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'affixSelection',
        affixesSelected: affixesSelected,
        categories: categories,
        datalist: abilityList,
        isGlobalSearch: isGlobalSearch,
        langCode: langCode
    });
};

const CHOICE_SELECTION_VIEW_TEMPLATE = ({ affixesSelected, choices, isGlobalSearch, shouldUpslot, shouldSpread, shouldUseTrainer, langCode }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'choiceSelection',
        affixesSelected: affixesSelected,
        datalist: choices,
        isGlobalSearch: isGlobalSearch,
        shouldUpslot: shouldUpslot,
        shouldSpread: shouldSpread,
        shouldUseTrainer: shouldUseTrainer,
        langCode: langCode
    });
};

const REVIEW_TWEAK_VIEW_TEMPLATE = ({ fodders, langCode }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'reviewTweak',
        datalist: fodders,
        langCode: langCode
    });
};

const TRANSPLANT_VIEW_TEMPLATE = ({ fodders, addAbilityChosen, langCode }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'transplant',
        datalist: fodders,
        addAbilityChosen: addAbilityChosen,
        langCode: langCode
    });
};

const FORMULA_SHEET_VIEW_TEMPLATE = ({ categories, abilityList, isGlobalSearch, langCode }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'formulaSheet',
        categories: categories,
        datalist: abilityList,
        isGlobalSearch: isGlobalSearch,
        langCode: langCode
    });
};

const WISH_LIST_VIEW_TEMPLATE = ({ fodderList, transplantCost, langCode }) => {
    return SELECTION_MENU_TEMPLATE({
        type: 'wishList',
        datalist: fodderList,
        transplantCost: transplantCost,
        langCode: langCode
    });
};

const WISH_LIST_TEMPLATE = ({ fodderList, transplantCost, langCode }) => {
    if (!fodderList || !Array.isArray(fodderList)) return '';
    let affixLists = [];
    let counts = [];
    if (transplantCost > 0) {
        affixLists.push(lang.app.wishListTransplantCostDescr[langCode](transplantCost));
    }
    for (var i = 0; i < fodderList.length; i++) {
        if (!fodderList[i] || !(fodderList[i] instanceof Fodder)
            || fodderList[i].size() <= 0) continue;
        let currList = lang.app.wishListAbilityItem[langCode](fodderList[i]);
        if (fodderList[i].specialAbilityFactor && fodderList[i].specialAbilityFactor.code) {
            currList += lang.app.wishListFactorDescription[langCode](lang[fodderList[i].specialAbilityFactor.code]['name_' + langCode]);
        }
        let testIdx = affixLists.indexOf(currList);
        if (testIdx >= 0) counts[testIdx]++;
        else {
            affixLists.push(currList);
            counts.push(1);
        }
    }
    for (var i = 0; i < affixLists.length; i++) {
        affixLists[i] = lang.app.wishListAbilityDescription[langCode](counts[i], affixLists[i]);
    }
    return FILTER_SEARCH_TEMPLATE({
        datalist: affixLists,
        langCode: langCode
    });
}

const RATE_IT_STARS_TEMPLATE = ({ langCode }) =>
    `<div class="rateit-container hidden">
        <div class="after">${lang.app.rateStarsRated[langCode]}</div>
        <div class="before">${lang.app.rateStarsRequest[langCode]}</div>
        <fieldset class="rating${hasFaFailedLoading ? ' noFa' : ''}">
            <input type="radio" id="star5" name="rating" value="5"><label class="full" for="star5" data-rate="5" title="${lang.app.rateStars5AltText[langCode]}">${hasFaFailedLoading ? '-5' : ''}</label>
            <input type="radio" id="star4" name="rating" value="4"><label class="full" for="star4" data-rate="4" title="${lang.app.rateStars4AltText[langCode]}">${hasFaFailedLoading ? '-4-' : ''}</label>
            <input type="radio" id="star3" name="rating" value="3"><label class="full" for="star3" data-rate="3" title="OK">${hasFaFailedLoading ? '-3-' : ''}</label>
            <input type="radio" id="star2" name="rating" value="2"><label class="full" for="star2" data-rate="2" title="${lang.app.rateStars2AltText[langCode]}">${hasFaFailedLoading ? '-2-' : ''}</label>
            <input type="radio" id="star1" name="rating" value="1"><label class="full" for="star1" data-rate="1" title="${lang.app.rateStars1AltText[langCode]}">${hasFaFailedLoading ? '1-' : ''}</label>
        </fieldset>
    </div>`;

const REPORT_ISSUE_TEMPLATE = ({ issuesLink, langCode }) =>
    `<div class="report-issue-container hidden" onclick="$(this).remove();">
        <div onclick="event.stopPropagation();">
            <div class="main-grid">
                <div class="message-container bold">
                    <div class="icon-container">
                        <div>
                            <i class="fa fa-bug">${hasFaFailedLoading ? '?' : ''}</i>
                        </div>
                    </div>
                    <div>
                        <h2>${lang.app.reportIssueTitle[langCode]}</h2>
                        <h4>${lang.app.reportIssueDescription[langCode]}</h4>
                    </div>
                </div>
                <div class="redirect-button"><a href="${issuesLink}" target="_blank">${lang.app.reportIssueButtonLabel[langCode]}</a></div>
                <div class="confirm-button">${lang.app.closeButton[langCode]}</div>
            </div>
        </div>
    </div>`;
