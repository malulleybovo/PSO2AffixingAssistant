/**
 * View Controller
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

const timeData = {
    chooseAffixStartTime: (new Date()).getTime(),
    chooseMethodStartTime: (new Date()).getTime(),
    formulaSheetStartTime: (new Date()).getTime(),
    shareLinkStartTime: (new Date()).getTime(),
    wishListStartTime: (new Date()).getTime(),
    reviewTweakStartTime: (new Date()).getTime()
};
const stringData = {
    affixingSrc: ''
}
var hasFaFailedLoading = false;

class ViewController {
    constructor(assistant) {
        // Immutable variables (properties can still change)
        this.NEWLY_PRODUCED_TIMEOUT_IN_MILLI = 3000;
        this.COLOR_PALETTE_SIZE = 25;
        this.URL_VER = 2;
        this.languages = ['glen','en','jp'];
        this.affixesSelected = [];
        this.choicesSelected = [];
        this.assistant = assistant;
        this.requestSafetyFlag = false;
        // Make functions immutable
        let funcs = Object.getOwnPropertyNames(ViewController.prototype);
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
        // Mutable variables
        this.langCode = this.languages[0];
        this.filters = lang.filters[this.langCode];
        this.shouldUpslot = true;
        this.shouldSpread = true;
        this.shouldUseTrainer = false;
        this.fodderInReview = null;
        this.pageInReview = null;
        this.transplantAddAbility = null;
        this.newlyProducedTimeout = null;
        this.affixTweakSelection = null;
        this.isIncludingFoddersIntrinsicFactor = false;
        this.choiceSelectionViewShouldClose = true;
        this.ratingsTime = { timeout: undefined };
    }

    setup() {
        $("#malulleybovo").text(lang.app.malulleybovo[this.langCode])
        $("#ver").text("v1.2.4")
        $("#editor").children().first().panzoom({
            which: 1,
            minScale: 0.1,
            maxScale: 2,
            onStart: () => $('#settingslist').blur(),
            onPan: () => {
                if (this.isPanning === undefined) { this.isPanning = false; } // Debounce panning
                else if (this.isPanning === false) { this.isPanning = true; }
            },
            onEnd: () => {
                setTimeout(() => {
                    if (this.isPanning === true || this.isPanning === false) { this.isPanning = undefined; }
                }, 1);
            },
            onChange: this.updateConnections
        });
        $("#editor").on('wheel', function (e) {
            e.preventDefault();
            var delta = e.delta || e.originalEvent.wheelDelta;
            var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
            $("#editor").children().first().panzoom('zoom', zoomOut, {
                increment: 0.1,
                animate: false,
                focal: e
            });
        });
        $('#panzoomreset').click({ viewcontroller: this }, function (e) {
            e.preventDefault();
            e.data.viewcontroller.centerViewAtNode('#goal');
            try {
                gaRequests.send('main', 'buttonClick', {
                    'View Type': 'Main View',
                    'Interface Type': 'Center At Goal Button',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        });
        $('#startnew').click(() => {
            VIEW_CONTROLLER.affixesSelected = VIEW_CONTROLLER.assistant.getGoalAffixes();
            VIEW_CONTROLLER.assistant.reset();
            stringData.affixingSrc = 'Setting Goal';
            VIEW_CONTROLLER.setAffixSelectionView(true, true);
        });
        $('#openwishlist').click(() => VIEW_CONTROLLER.openFodderWishList(true));
        $('#openformulasheet').click(() => VIEW_CONTROLLER.openFormulaSheet(true));
        $('#getlink').click(() => VIEW_CONTROLLER.getShortURLThenOpenLinkView());
        $('#langswitch').click(() => this.toggleLanguage());
        $('#themeswitch').click(() => {
            if ($('html').hasClass('theme--default')) {
                $('html').removeClass('theme--default').addClass('theme--bright');
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Switch Theme Button',
                        'Number Of Interfaces Used': 1,
                        'Theme Type': 'Bright Theme',
                        'Number of Themes Used': 1
                    });
                }
                catch (e) { }
            }
            else if($('html').hasClass('theme--bright')) {
                $('html').removeClass('theme--bright').addClass('theme--default');
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Switch Theme Button',
                        'Number Of Interfaces Used': 1,
                        'Theme Type': 'Default Theme',
                        'Number of Themes Used': 1
                    });
                }
                catch (e) { }
            }
        });
        $('div#reportbug').click(() => {
            try {
                gaRequests.send('main', 'buttonClick', {
                    'View Type': 'Main View',
                    'Interface Type': 'Report Bug Button',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        });
        hasFaFailedLoading = false;
        try {
            if (!$('i.fa-plus').css('font-family')
                .includes('Font Awesome')) {
                hasFaFailedLoading = true;
                let iconRefs = [
                    {
                        icon: 'fa-plus',
                        text: 'add'
                    },
                    {
                        icon: 'fa-shopping-bag',
                        text: 'bag'
                    },
                    {
                        icon: 'fa-book',
                        text: 'book'
                    },
                    {
                        icon: 'fa-external-link-alt',
                        text: 'link'
                    },
                    {
                        icon: 'fa-cog',
                        text: 'cfg'
                    },
                    {
                        icon: 'fa-language',
                        text: 'lang'
                    },
                    {
                        icon: 'fa-window-restore',
                        text: 'theme'
                    },
                    {
                        icon: 'fa-bug',
                        text: 'bug'
                    },
                    {
                        icon: 'fa-dot-circle',
                        text: 'focus'
                    }
                ];
                for (var i = 0; i < iconRefs.length; i++) {
                    $('i.' + iconRefs[i].icon).removeClass().append('<span>' + iconRefs[i].text + '</span>');
                }
            }
        }
        catch (e) {}
        this.updateMenuBarDescriptions();
    }

    setActiveFodder(e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (vc.isPanning) return;
        if (!(vc instanceof ViewController)) return;
        let found = vc.findFodderAndNodeByDOM(this);
        vc.assistant.setActiveFodder(found.fodder);
        vc.assistant.setActivePageTreeNode(found.pageTreeNode);
        vc.affixesSelected = found.fodder.affixes.slice(0);
        if (vc.assistant.pageTreeRoot == null || vc.assistant.pageTreeRoot == found.fodder) {
            stringData.affixingSrc = 'Reproducing Goal';
            try {
                gaRequests.send('main', 'buttonClick', {
                    'View Type': 'Main View',
                    'Interface Type': 'Reproduce Button',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        }
        else if (found.fodder instanceof Fodder) {
            if (found.fodder.connectedTo && found.fodder.connectedTo instanceof Page) {
                stringData.affixingSrc = 'Reproducing Intermediary Fodder';
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Reproduce Button',
                        'Number Of Interfaces Used': 1
                    });
                }
                catch (e) { }
            }
            else {
                stringData.affixingSrc = 'Producing Intermediary Fodder';
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Produce Button',
                        'Number Of Interfaces Used': 1
                    });
                }
                catch (e) { }
            }
        }
        vc.openChoicesSelectionView(true);
    }

    findFodderAndNodeByDOM(fodderElem) {
        let $elem = $(fodderElem);
        if (!$elem.hasClass('fodder')) $elem = $elem.parents('div.fodder');
        if ($elem.length <= 0 || !(this.assistant.pageTreeRoot instanceof PageTreeNode)) return;
        let indices = [];
        do {
            if ($elem.length > 0) indices.unshift($elem.index());
            $elem = $elem.parents('table.mgrid');
        } while ($elem.length > 0);
        indices.splice(0, 1);
        let curr = this.assistant.pageTreeRoot;
        for (var i = 0; i < indices.length - 1; i++) {
            curr = curr.children[indices[i]];
        }
        let fodder = curr.page.fodders[indices[indices.length - 1]];
        return {
            fodder: fodder,
            pageTreeNode: curr
        };
    }

    findPageAndNodeByDOM(fodderElem) {
        let $fodderElem = $(fodderElem);
        if (!$fodderElem.hasClass('fodder')) $fodderElem = $fodderElem.parents('div.fodder');
        let $elem = $(fodderElem);
        if (!$elem.hasClass('page')) $elem = $elem.parents('div.page');
        if ($fodderElem.length <= 0 || $elem.length <= 0 || !(this.assistant.pageTreeRoot instanceof PageTreeNode)) return;
        let indices = [];
        do {
            if ($elem.length > 0) indices.unshift($elem.index());
            $elem = $elem.parents('table.mgrid');
        } while ($elem.length > 0);
        indices.splice(0, 1);
        let curr = this.assistant.pageTreeRoot;
        for (var i = 0; i < indices.length - 1; i++) {
            curr = curr.children[indices[i]];
        }
        return {
            fodder: curr.page.fodders[$fodderElem.index()],
            pageTreeNode: curr
        };
    }

    findDOMByPage(page) {
        if (!page || !(page instanceof Page)
            || !(this.assistant.pageTreeRoot instanceof PageTreeNode)) return;
        let trackingRoute = this.assistant.pageTreeRoot.find(page);
        let $curr = $('.mgrid');
        if ($curr.length <= 0) return;
        for (var i = 0; i < trackingRoute.length; i++) {
            if (trackingRoute[i] instanceof Page && $curr.length > 0)
                $curr = $($curr.find('div.page')[0]);
            else if (trackingRoute[i] instanceof PageTreeNode && $curr.length > 0) {
                let pageTreeNode = trackingRoute[i];
                let next = trackingRoute[i + 1];
                if (next && next instanceof PageTreeNode) {
                    let indexOf = pageTreeNode.children.indexOf(next);
                    $curr = $($($curr[0]).find('td')[1]).children('.mgrid');
                    $curr = $($curr[indexOf]);
                }
            }
        }
        return $curr;

    }

    setFilters(filters) {
        if (filters && Array.isArray(filters)) {
            this.filters = filters.slice();
        }
        return this;
    }

    setAffixSelectionView(bool, shouldAnimate) {
        if (typeof bool !== 'boolean') return;
        this.closeAll({});
        let isVisible = $('div.affix-selection-container').length != 0;
        if (bool) {
            if (!isVisible) {
                $('body').append(
                    AFFIX_SELECTION_VIEW_TEMPLATE({
                        affixesSelected: this.affixesSelected,
                        categories: this.filters,
                        abilityList: Assistant.data.abilityList, // List of all transferable affixes
                        langCode: this.langCode
                    }));
                if (shouldAnimate) {
                    $('div.affix-selection-container').animate({}, 10, function () {
                        timeData.chooseAffixStartTime = (new Date()).getTime();
                        $('div.affix-selection-container').removeClass('hidden');
                        try {
                            gaRequests.send('main', 'buttonClick', {
                                'View Type': 'Main View',
                                'Interface Type': 'Set Goal Button',
                                'Number Of Interfaces Used': 1
                            });
                        }
                        catch (e) { }
                    });
                }
                else $('div.affix-selection-container').removeClass('hidden');
                $('div.affix-selection-container li > div').click({ viewcontroller: this }, this.selectAbility);
                $('div.affix-selection-container div.affix > i').click({ viewcontroller: this }, this.selectAbility);
                $('div.affix-selection-container div.filtersearchcontainer input[type=radio]').change(function () {
                    let filter = $(this).siblings().last().text();
                    if (lang.synonyms[VIEW_CONTROLLER.langCode]) {
                        for (var key in lang.synonyms[VIEW_CONTROLLER.langCode]) {
                            console.log(key);
                            if (lang.synonyms[VIEW_CONTROLLER.langCode][key]
                                && lang.synonyms[VIEW_CONTROLLER.langCode][key].includes(filter)) {
                                filter = `(${filter}|${key})`;
                            }
                        }
                    }
                    let regex = new RegExp(filter + '\\([\\+-]{1}[0-9]+\\)');
                    $(`div.affix-selection-container ul`).append($(`div.affix-selection-container li`).sort((a, b) => {
                        if ($(this).siblings().last().text() == 'All') {
                            return $(a).data('idx') - $(b).data('idx');
                        }
                        let statsA = $(a.firstChild).attr('title');
                        let matchesA = statsA.match(regex);
                        let statsB = $(b.firstChild).attr('title');
                        let matchesB = statsB.match(regex);
                        if (matchesA && matchesB) {
                            let valA = matchesA[0].match(/[0-9]+/)[0];
                            if (/\(-/.test(matchesA[0])) valA *= -1;
                            let valB = matchesB[0].match(/[0-9]+/)[0];
                            if (/\(-/.test(matchesB[0])) valB *= -1;
                            return valB - valA;
                        }
                        else if (matchesA) {
                            return -1;
                        }
                        else if (matchesB) {
                            return 1;
                        }
                    }))
                });
                $('div.affix-selection-container div.cancel-button').click({ viewcontroller: this }, function ({ data }) {
                    $('div.affix-selection-container').remove();
                    try {
                        gaRequests.send('affix', 'cancel', {
                            'View Type': 'Choose Affix View',
                            'Transaction Type': 'Cancel',
                            'Time Spent In View': ((new Date()).getTime() - timeData.chooseAffixStartTime) / 1000
                        });
                    }
                    catch (e) { }
                });
                $('div.affix-selection-container div.confirm-button.transplant-confirm-button').click({ viewcontroller: this }, function ({ data }) {
                    if ($('div.affix-selection-container div.confirm-button.transplant-confirm-button.disabled').length > 0) return;
                    try {
                        gaRequests.send('affix', 'confirm', {
                            'View Type': 'Choose Affix View',
                            'Transaction Type': 'Confirm Transplant',
                            'Time Spent In View': ((new Date()).getTime() - timeData.chooseAffixStartTime) / 1000
                        });
                    }
                    catch (e) { }
                    data.viewcontroller.openTransplantScreen(undefined, data.viewcontroller.affixesSelected, false, true);
                });
                $('div.affix-selection-container div.confirm-button.affix-confirm-button').click({ viewcontroller: this }, function ({ data }) {
                    if ($('div.affix-selection-container div.confirm-button.affix-confirm-button.disabled').length > 0) return;
                    try {
                        gaRequests.send('affix', 'confirm', {
                            'View Type': 'Choose Affix View',
                            'Transaction Type': 'Confirm Affix',
                            'Time Spent In View': ((new Date()).getTime() - timeData.chooseAffixStartTime) / 1000
                        });
                    }
                    catch (e) { }
                    data.viewcontroller.openChoicesSelectionView(false, true);
                });
                this.updateAffixSelectionView();
            }
        }
        else {
            if (isVisible) {
                $('div.affix-selection-container').remove();
            }
        }
        return this;
    }

    openChoicesSelectionView(shouldAnimate, shouldReturnToAffixSelection, shouldRetainChoices, e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if (vc.affixesSelected.length <= 0) return;
        vc.isIncludingFoddersIntrinsicFactor = false;
        this.closeAll({});
        let choices = vc.assistant.getChoicesForAffixes(vc.affixesSelected);
        if (!shouldRetainChoices) {
            vc.shouldUseTrainer = false;
            vc.choicesSelected.splice(0, vc.choicesSelected.length);
            for (var i = 0; i < vc.affixesSelected.length; i++) {
                if (!vc.affixesSelected[i] || !vc.affixesSelected[i].code) continue;
                if (choices[vc.affixesSelected[i].code]
                    && choices[vc.affixesSelected[i].code].length == 1)
                    vc.choicesSelected.push(choices[vc.affixesSelected[i].code][0]);
                else vc.choicesSelected.push(null);
            }
            if (vc.assistant.activeFodder && vc.assistant.activeFodder.specialAbilityFactor) {
                let factor = vc.assistant.activeFodder.specialAbilityFactor;
                vc.affixesSelected.push(factor);
                vc.isIncludingFoddersIntrinsicFactor = true;
                let factorChoices = Assistant.affixDB[factor.code].choices;
                for (var i = 0; i < factorChoices.length; i++) {
                    if (factorChoices[i].isAbilityFactor) {
                        choices[factor.code] = [factorChoices[i]];
                        if (choices[factor.code]
                            && choices[factor.code].length == 1)
                            vc.choicesSelected.push(choices[factor.code][0]);
                        else vc.choicesSelected.push(null);
                        break;
                    }
                }
            }
        }
        vc.choiceSelectionViewShouldClose = !shouldReturnToAffixSelection;
        $('body').append(
            CHOICE_SELECTION_VIEW_TEMPLATE({
                affixesSelected: vc.affixesSelected,
                choices: choices,
                shouldUpslot: vc.shouldUpslot,
                shouldSpread: vc.shouldSpread,
                shouldUseTrainer: vc.shouldUseTrainer,
                langCode: vc.langCode
            }));
        vc.updateChoiceSelectionView();
        if (shouldAnimate) {
            $('div.choice-selection-container').animate({}, 10, function () {
                timeData.chooseMethodStartTime = (new Date()).getTime();
                $('div.choice-selection-container').removeClass('hidden');
            });
        }
        else $('div.choice-selection-container').removeClass('hidden');
        $('div.choice-selection-container div.options > div.checkbox-container:first-child').click({ viewcontroller: vc }, vc.setShouldUpslot);
        $('div.choice-selection-container div.options > div.checkbox-container:nth-child(2)').click({ viewcontroller: vc }, vc.setShouldSpread);
        $('div.choice-selection-container div.options > div.checkbox-container:last-child').click({ viewcontroller: vc }, vc.setShouldUseTrainer);
        $('div.choice-selection-container li > div').click({ viewcontroller: vc }, vc.selectChoice);
        if (shouldReturnToAffixSelection) {
            $('div.choice-selection-container div.cancel-button').click(
                (e) => {
                    vc.setAffixSelectionView(true, false);
                    try {
                        gaRequests.send('method', 'cancel', {
                            'View Type': 'Choose Method of Making View',
                            'Transaction Type': 'Cancel',
                            'Time Spent In View': ((new Date()).getTime() - timeData.chooseMethodStartTime) / 1000
                        });
                    }
                    catch (e) { }
                });
        }
        else {
            $('div.choice-selection-container div.cancel-button').click(
                (e) => {
                    $('div.choice-selection-container').remove();
                    try {
                        gaRequests.send('method', 'cancel', {
                            'View Type': 'Choose Method of Making View',
                            'Transaction Type': 'Cancel',
                            'Time Spent In View': ((new Date()).getTime() - timeData.chooseMethodStartTime) / 1000
                        });
                    }
                    catch (e) { }
                });
        }
        $('div.choice-selection-container div.confirm-button').click({ viewcontroller: vc }, vc.produceFodderFromChoices);

        vc.colorizeOverlappingChoices(choices);
    }

    openReviewAndTweakScreen(shouldAnimate) {
        this.closeAll({});
        this.affixTweakSelection = null;
        $('body').append(
            REVIEW_TWEAK_VIEW_TEMPLATE({
                fodders: this.pageInReview.fodders,
                langCode: this.langCode
            }));
        if (shouldAnimate) {
            $('div.review-tweak-container').animate({}, 10, function () {
                timeData.reviewTweakStartTime = (new Date()).getTime();
                $('div.review-tweak-container').removeClass('hidden');
            });
        }
        else $('div.review-tweak-container').removeClass('hidden');
        this.updateReviewPanel();
        $('div.review-tweak-container div.cancel-button').click(
            (e) => {
                $('div.review-tweak-container').remove();
                this.openChoicesSelectionView(false, !this.choiceSelectionViewShouldClose, true);
                try {
                    gaRequests.send('tweak', 'cancel', {
                        'View Type': 'Review And Tweak View',
                        'Transaction Type': 'Cancel',
                        'Time Spent In View': ((new Date()).getTime() - timeData.reviewTweakStartTime) / 1000
                    });
                }
                catch (e) { }
            });
        $('div.review-tweak-container div.confirm-button').click(
            () => {
                $('div.review-tweak-container').remove();
                // If null, treat it as the root. Otherwise, treat it as a branch node
                if (!this.assistant.hasActivePageTreeNode()) {
                    if (this.assistant.validateAffixes(this.affixesSelected)) {
                        this.assistant.setGoal(this.affixesSelected);
                    }
                }
                this.assistant.activeFodder.setAddAbilityInUse(this.choicesSelected);
                // Add new page to the tree data structure
                // And connect the produced fodder to the new page
                this.assistant.updateConnection({
                    fodder: this.assistant.activeFodder,
                    page: this.pageInReview
                });
                // Remove any redundant fodders within (i.e.: containing only junk)
                this.assistant.removeRedundantFodders(this.pageInReview);
                // Update the UI to reflect the data changed
                this.updateURLParams();
                this.updateView();
                let $page = this.findDOMByPage(this.assistant.activePageTreeNode.page)
                this.centerViewAtNode($page);
                $page = this.findDOMByPage(this.pageInReview);
                spotlightIn($page);
                if (this.newlyProducedTimeout) clearTimeout(this.newlyProducedTimeout);
                this.newlyProducedTimeout = setTimeout(function () {
                    if (spotlight === $page) spotlightOut($page);
                }, this.NEWLY_PRODUCED_TIMEOUT_IN_MILLI);
                this.pageInReview = null;

                // Briefly ask if user would like to rate the new formula made
                setTimeout(() => { this.peekRateItView() }, 1000);

                try {
                    gaRequests.send('tweak', 'confirm', {
                        'View Type': 'Review And Tweak View',
                        'Transaction Type': 'Confirm',
                        'Time Spent In View': ((new Date()).getTime() - timeData.reviewTweakStartTime) / 1000,
                        'Affix Type (Upslot)': (this.shouldUpslot) ? 'Upslot' : 'Same Slot',
                        'Affix Type (Spread)': (this.shouldSpread) ? 'Spread' : 'Compact',
                        'Affix Origin': stringData.affixingSrc,
                        'Number Of Affix Requests': 1
                    });
                }
                catch (e) { }
            });
    }

    /**
     * Opens the screen for Special Ability Transplant.
     * @param {any} targetFodderDOM A reference to the Fodder DOM which will be the goal of the transplant.
     * @param {Array} affixesSelected The goal fodder abilities in case the DOM is not specified.
     * @param {Boolean} shouldAnimate Whether the view should animate when shown.
     */
    openTransplantScreen(targetFodderDOM, affixesSelected, shouldAnimate, popsToAffixSelection) {
        let target = undefined;
        if (affixesSelected !== undefined && affixesSelected !== null) {
            let fodder = (new Fodder()).addAffixes(affixesSelected).setGoal(true);
            target = {
                fodder: fodder,
                pageTreeNode: (new PageTreeNode(true)).setPage(
                    (new Page()).addFodders(fodder)
                )
            };
        } else {
            target = this.findFodderAndNodeByDOM(targetFodderDOM);
        }
        if (!target || !target.fodder || !target.pageTreeNode) return;
        let targetFodder = target.fodder;
        let targetNode = target.pageTreeNode;
        let page = this.assistant.buildTransplantPage(targetFodder, 0);
        if (!page) return;
        if (page.size() != 2 || page.fodders[0].affixes.filter(a => a.noEx !== true).length === 0) {
            this.openReportIssueScreen();
            return;
        }
        this.fodderInReview = targetFodder;
        this.pageInReview = page;
        this.transplantAddAbility = null;
        this.assistant.setActivePageTreeNode(targetNode);
        this.closeAll({});
        $('body').append(
            TRANSPLANT_VIEW_TEMPLATE({
                fodders: page.fodders,
                addAbilityChosen: this.transplantAddAbility,
                langCode: this.langCode
            }));
        if (shouldAnimate) {
            $('div.transplant-container').animate({}, 10, function () {
                timeData.reviewTweakStartTime = (new Date()).getTime();
                $('div.transplant-container').removeClass('hidden');
            });
        }
        else $('div.transplant-container').removeClass('hidden');
        this.updateTransplantPanel(0, popsToAffixSelection);
    }

    openFormulaSheet(shouldAnimate, e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        this.closeAll({});
        $('body').append(
            FORMULA_SHEET_VIEW_TEMPLATE({
                categories: [],
                abilityList: Assistant.data.abilityList, // List of all affixes
                langCode: VIEW_CONTROLLER.langCode
            }));
        if (shouldAnimate) {
            $('div.formula-sheet-container').animate({}, 10, function () {
                timeData.formulaSheetStartTime = (new Date()).getTime();
                $('div.formula-sheet-container').removeClass('hidden');
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Formula Sheet Button',
                        'Number Of Interfaces Used': 1
                    });
                }
                catch (e) { }
            });
        }
        else $('div.formula-sheet-container').removeClass('hidden');
        $('div.formula-sheet-container li > div').click({ viewcontroller: vc }, vc.updateFormulaSheetSearchResults);
        $('div.formula-sheet-container div.confirm-button').click(() => {
            $('div.formula-sheet-container').remove();
            try {
                gaRequests.send('formula', 'close', {
                    'View Type': 'Formula Sheet View',
                    'Transaction Type': 'Close',
                    'Time Spent In View': ((new Date()).getTime() - timeData.formulaSheetStartTime) / 1000
                });
            }
            catch (e) { }
        });
    }

    openGetLinkView({ shouldAnimate, e, shortLink }) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        this.closeAll({});
		$('body').append(
			LINK_TEMPLATE({
				link: decodeURI(window.location.href),
                linkToSim: vc.assistant.toURL(this.URL_VER, true),
				smallLink: shortLink,
				langCode: vc.langCode
		}));
        if (shouldAnimate) {
            $('div.link-container').animate({}, 10, function () {
                timeData.shareLinkStartTime = (new Date()).getTime();
                $('div.link-container').removeClass('hidden');
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Share Link Button',
                        'Number Of Interfaces Used': 1
                    });
                }
                catch (e) {  }
            });
        }
        else $('div.link-container').removeClass('hidden');
        // Copy Long Link Button Handler
        $('div.link-container div.copy-button:nth-child(3)').click(() => {
            let copyText = $('div.link-container input[type=text]:nth-child(2)')[0];
            if (!copyText) return;
            copyText.select();
            document.execCommand("copy");
            try {
                gaRequests.send('share', 'buttonClick', {
                    'View Type': 'Share Link View',
                    'Link Type': 'Link to Assistant',
                    'Number Of Links Used': 1
                });
            }
            catch (e) { }
        });
        // Copy Short Link Button Handler
        $('div.link-container div.copy-button:nth-child(5)').click(() => {
            let copyText = $('div.link-container input[type=text]:nth-child(4)')[0];
            if (!copyText) return;
            copyText.select();
            document.execCommand("copy");
            try {
                gaRequests.send('share', 'buttonClick', {
                    'View Type': 'Share Link View',
                    'Link Type': 'Link to Assistant',
                    'Number Of Links Used': 1
                });
            }
            catch (e) { }
        });
        $('div.link-container div.copy-button:nth-child(6)').find('a').click(() => {
            try {
                gaRequests.send('share', 'buttonClick', {
                    'View Type': 'Share Link View',
                    'Link Type': 'Link to Simulator',
                    'Number Of Links Used': 1
                });
            }
            catch (e) { }
        });
        $('div.link-container div.confirm-button').click(() => {
            $('div.link-container').remove();
            try {
                gaRequests.send('share', 'close', {
                    'View Type': 'Share Link View',
                    'Transaction Type': 'Close',
                    'Time Spent In View': ((new Date()).getTime() - timeData.shareLinkStartTime) / 1000
                });
            }
            catch (e) { }
        });
    }

    openReportIssueScreen() {
        $('div.report-issue-container').remove();
        $('body').append(
            REPORT_ISSUE_TEMPLATE({
                issuesLink: "https://github.com/malulleybovo/PSO2AffixingAssistant/issues",
                langCode: this.langCode
            }));
        $('div.report-issue-container').animate({}, 10, function () {
            $('div.report-issue-container').removeClass('hidden');
        });
        $('div.report-issue-container div.confirm-button').click(() => {
            $('div.report-issue-container').remove();
        });
    }

    /**
     * Closes all screens opened but the screen with a specific CSS class (if any).
     * @param {any} param0
     * @param {String} butScreenWithClass CSS class which by having it, the screen will not be closed.
     */
    closeAll({ butScreenWithClass }) {
        let className = butScreenWithClass;
        let classNames = [
            'affix-selection-container',
            'choice-selection-container',
            'review-tweak-container',
            'formula-sheet-container',
            'link-container',
            'wish-list-container'
        ]
        for (var i = 0; i < classNames.length; i++) {
            if (className != classNames[i] && $('div.' + classNames[i]).length != 0) {
                $('div.' + classNames[i]).remove();
            }
        }
    }

    getShortURLThenOpenLinkView() {
        if (this.requestSafetyFlag) return;
        this.requestSafetyFlag = true;
        let bitlyUrl = 'https://api-ssl.bitly.com/v3/shorten?'
            + 'access_token=85f88da122ee5904f211eea3714d900570b7cb1f&longUrl='
            + encodeURIComponent(window.location.href)
        let vc = this;
        $.ajax({
            type: "GET",
            url: bitlyUrl,
            success: function (res) {
                vc.requestSafetyFlag = false;
                let shortlink = (res.data && res.data.url) ?
                    res.data.url : null;
                vc.openGetLinkView({
                    shouldAnimate: true,
                    shortLink: shortlink
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                vc.requestSafetyFlag = false;
                vc.openGetLinkView({
                    shouldAnimate: true,
                    shortLink: null
                });
            }
        });
    }

    updateFromURL() {
        let urlParams = window.location.search;
        urlParams = urlParams.substring(1, urlParams.length);
        urlParams = decodeURIComponent(urlParams);
        // Check language choice within params
        if (/^(\/l=)?[a-z]{2}/.test(urlParams)) {
            // Extract '/l=..' of the start of the params and get language '..'
            let extraLen = urlParams.startsWith("/l=") ? 3 : 0;
            let loadedLang = urlParams.slice(extraLen, 2 + extraLen);
            // Remove language data from string for parsing
            urlParams = urlParams.slice(2 + extraLen);
            if (this.languages.includes(loadedLang)) {
                this.langCode = loadedLang;
            }
        }
        else this.langCode = this.languages[0];
        if (urlParams == '') {
            this.displayWelcomeScreen(true);
            this.assistant.pageTreeRoot = null;
            return;
        }
        else {
            this.displayWelcomeScreen(false);
        }
        let hasSuceeded = this.assistant.loadFromURLParams(urlParams);
        if (hasSuceeded) {
            let $container = $('#mastercontainer');
            let dimsBefore = {
                width: $container.outerWidth(),
                height: $container.outerHeight()
            }
            this.updateView();
            let newpos = {
                left: $container.panzoom('getMatrix')[4]
                    * $container.outerWidth() / dimsBefore.width,
                top: $container.panzoom('getMatrix')[5]
                    * $container.outerHeight() / dimsBefore.height
            }
            $container.panzoom('pan', newpos.left, newpos.top, {
                animate: false,
            });
            this.isPanning = undefined;
        }
    }

    updateView(e) {
        $("#malulleybovo").text(lang.app.malulleybovo[this.langCode])
        let vc = (this instanceof ViewController) ? this : (e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if (!vc.assistant || !vc.assistant.pageTreeRoot || !(vc.assistant.pageTreeRoot instanceof PageTreeNode)) return;
        vc.assistant.calcSuccessRates();
        vc.assistant.calcTransplantCost({});
        $('#mastercontainer').empty().append(PAGE_TREE_NODE_TEMPLATE({
            pageTreeNode: vc.assistant.pageTreeRoot,
            boostWeekOptions: Assistant.boostWeekVals,
            boostWeekIdx: vc.assistant.boostWeekIdx,
            langCode: vc.langCode
        }));
        vc.regenerateConnections();
        $('div.fodder').hover(spotlightIn, spotlightOut);
        $('div.produce-button:not(.disabled)').click({ viewcontroller: this }, this.setActiveFodder)
            .on('mousedown touchstart', function (e) {
            // Allow clickable elements within panzoom on mobile
            e.stopImmediatePropagation();
        });
        $('div.transplant-button:not(.disabled)').click({ viewcontroller: this }, function (e) {
            e.data.viewcontroller.openTransplantScreen(this, undefined, true);
        }).on('mousedown touchstart', function (e) {
            // Allow clickable elements within panzoom on mobile
            e.stopImmediatePropagation();
        });
        $('.boost-container input[type=checkbox]').change({ viewcontroller: this }, (e) => {
            // Prevents checkbox from trigger function IFF user is panning
            if (e.data.viewcontroller.isPanning) return;
            let $elem = $(e.currentTarget);
            for (var i = 0; i < $elem.length; i++) {
                let { fodder } = e.data.viewcontroller.findPageAndNodeByDOM($elem[i]);
                if (fodder) fodder.setSameGear($elem.prop('checked'));
            }
            e.data.viewcontroller.updateURLParams();
            e.data.viewcontroller.updateView();
            try {
                gaRequests.send('main', 'checkboxCheck', {
                    'View Type': 'Main View',
                    'Interface Type': 'Same Equipment Checkbox',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        });
        $('.checkmark').click((e) => {
            // Prevents checkbox from toggling IFF user is panning
            if (this.isPanning) e.preventDefault();
        });
        $('.checkbox-container').on('mousedown touchstart', function (e) {
            // Allow clickable elements within panzoom on mobile
            e.stopImmediatePropagation();
        });
        $('.boost-container.individual > div.dropdown-container:not(:last-child) select').change({ viewcontroller: this }, (e) => {
            let $elem = $(e.currentTarget);
            for (var i = 0; i < $elem.length; i++) {
                let index = $($elem[i]).find('option:selected').index();
                let { fodder } = e.data.viewcontroller.findPageAndNodeByDOM($elem[i]);
                if (fodder) fodder.setRateBoostIdx(index);
            }
            e.data.viewcontroller.updateURLParams();
            e.data.viewcontroller.updateView();
            try {
                gaRequests.send('main', 'dropdownChange', {
                    'View Type': 'Main View',
                    'Interface Type': 'Ability Rate Boost Dropdown',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        }).on('pointerdown mousedown touchstart', function (e) {
            // Allow clickable elements within panzoom on mobile
            e.stopImmediatePropagation();
        });
        $('.boost-container.individual > div.dropdown-container:last-child select').change({ viewcontroller: this }, (e) => {
            let $elem = $(e.currentTarget);
            for (var i = 0; i < $elem.length; i++) {
                let index = $($elem[i]).find('option:selected').index();
                let { fodder } = e.data.viewcontroller.findPageAndNodeByDOM($elem[i]);
                if (fodder) fodder.setPotentialIdx(index);
            }
            e.data.viewcontroller.updateURLParams();
            e.data.viewcontroller.updateView();
            try {
                gaRequests.send('main', 'dropdownChange', {
                    'View Type': 'Main View',
                    'Interface Type': 'Equipment Potential Dropdown',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        }).on('pointerdown mousedown touchstart', function (e) {
            // Allow clickable elements within panzoom on mobile
            e.stopImmediatePropagation();
        });
        $('.boost-container.global > div.dropdown-container:last-child select').change({ viewcontroller: this }, (e) => {
            let $elem = $(e.currentTarget);
            for (var i = 0; i < $elem.length; i++) {
                let index = $($elem[i]).find('option:selected').index();
                e.data.viewcontroller.assistant.setBoostWeekIdx(index);
            }
            e.data.viewcontroller.updateURLParams();
            e.data.viewcontroller.updateView();
            try {
                gaRequests.send('main', 'dropdownChange', {
                    'View Type': 'Main View',
                    'Interface Type': 'Boost Week Dropdown',
                    'Number Of Interfaces Used': 1
                });
            }
            catch (e) { }
        }).on('pointerdown mousedown touchstart', function (e) {
            // Allow clickable elements within panzoom on mobile
            e.stopImmediatePropagation();
        });
        vc.displayWelcomeScreen(false);
        return this;
    }

    displayWelcomeScreen(shouldOpen) {
        if (shouldOpen) {
            $("#malulleybovo").css('z-index', 1);
            $("#ver").css('z-index', 1);
            if ($('div.welcome').length > 0) return;
            if ($('#editor').length > 0) $(WELCOME_VIEW(this.langCode)).insertAfter($('#editor'));
            else $('body').prepend($(WELCOME_VIEW(this.langCode)));
        }
        else {
            $("#malulleybovo").css('z-index', 0);
            $("#ver").css('z-index', 0);
            $('div.welcome').remove();
        }
    }

    updateURLParams() {
        if (!this.assistant || !(this.assistant instanceof Assistant)) return;
        let oldURL = '?' + decodeURIComponent(window.location.search.substring(1, window.location.search.length));
        let newURL = `?${this.langCode != 'glen' ? this.langCode : ''}` + this.assistant.toURL(this.URL_VER);
        if (newURL == oldURL) return;
        window.history.pushState("test", "Title", newURL);
    }

    centerViewAtNode(selector) {
        let $node = $(selector);
        if ($node.length <= 0) return;
        let $container = $("#mastercontainer");
        if ($container.has($node).length <= 0) return;
        let zoomScale = $container.panzoom('getMatrix')[0];
        let toNodeCenter = {
            left: ($node.outerWidth() / 2) + (Math.round($node.offset().left - $container.offset().left) / zoomScale),
            top: ($node.outerHeight() / 2) + (Math.round($node.offset().top - $container.offset().top) / zoomScale)
        }
        let newpos = {
            left: ($(window).outerWidth() / 2) - toNodeCenter.left
            - (zoomScale - 1) * (toNodeCenter.left - ($container.outerWidth() / 2)),
            top: ($(window).outerHeight() / 2) - toNodeCenter.top
            - (zoomScale - 1) * (toNodeCenter.top - ($container.outerHeight() / 2))
        }
        $container.panzoom('pan', newpos.left, newpos.top, {
            animate: false,
        });
        this.isPanning = undefined;
        return this;
    }

    regenerateConnections() {
        let $connectables = $('div[data-conn]');
        // Remove all old connections
        $(`connection`).remove();
        // Generate new connections
        for (var i = 0; i < $connectables.length; i++) {
            let connectableA = $connectables[i];
            for (var j = 0; j < $connectables.length; j++) {
                let connectableB = $connectables[j];
                if (connectableA.dataset.conn == connectableB.dataset.conn
                    && $(connectableA).hasClass('fodder') && $(connectableB).hasClass('page')) {
                    $(connectableA).add(connectableB).connections();
                    $('connection:not([data-conn])').attr('data-conn', connectableA.dataset.conn);
                }
            }
        }
        $(`connection`).insertAfter('#editor');
        return this;
    }

    updateConnections() {
        $('div.page, div.fodder').connections('update');
    }

    selectAbility(e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if ($(this).hasClass('selected') || $(this).parent().hasClass('affix')) {
            let that = this;
            if ($(this).parent().hasClass('affix')) that = $(this).parent()[0];
            vc.affixesSelected.splice(
                vc.affixesSelected.indexOf(
                    Assistant.affixDB[$(that).attr('data-code')].abilityRef
                ), 1
            );
            if (!$(this).parent().hasClass('affix')) {
                try {
                    gaRequests.send('affix', 'select', {
                        'View Type': 'Choose Affix View',
                        'Selection Type': 'Deselecting',
                        'Selection Medium': ($('div.affix-selection-container input.searchbar').val() != '') ? 'Search Bar' : 'Manual',
                        'Number Of Abilities Selected': 1
                    });
                }
                catch (e) { }
            }
            else {
                try {
                    gaRequests.send('affix', 'select', {
                        'View Type': 'Choose Affix View',
                        'Selection Type': 'Deselecting',
                        'Selection Medium': 'Affixes Selected',
                        'Number Of Abilities Selected': 1
                    });
                }
                catch (e) { }
            }
        }
        else {
            let selAffix = Assistant.affixDB[$(this).attr('data-code')].abilityRef;
            let hadConflict = false;
            for (var i = 0; i < vc.affixesSelected.length; i++) {
                if (vc.assistant.isTransferableOnlyViaTransplant(vc.affixesSelected[i])) continue;
                if (vc.assistant.isTransferableOnlyViaTransplant(selAffix)) continue;
                if (vc.assistant.hasConflict(vc.affixesSelected[i], selAffix)) {
                    vc.affixesSelected[i] = selAffix;
                    hadConflict = true;
                    break;
                }
            }
            if (!hadConflict && vc.affixesSelected.length < 8) {
                vc.affixesSelected.push(Assistant.affixDB[$(this).attr('data-code')].abilityRef);
                try {
                    gaRequests.send('affix', 'select', {
                        'View Type': 'Choose Affix View',
                        'Selection Type': 'Selecting',
                        'Selection Medium': ($('div.affix-selection-container input.searchbar').val() != '') ? 'Search Bar' : 'Manual',
                        'Number Of Abilities Selected': 1
                    });
                }
                catch (e) { }
            }
        }
        vc.updateAffixSelectionView();
    }

    selectChoice(e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if ($(this).hasClass('option-disabled')) return;
        if ($(this).hasClass('selected')) {
            let $divDataCode = $(this).parents('div[data-code]');
            if ($divDataCode.length > 0) {
                let code = $divDataCode.data('code');
                let affix = Assistant.affixDB[code];
                if (affix && affix.abilityRef) {
                    let arrIdx = vc.affixesSelected.indexOf(affix.abilityRef);
                    if (arrIdx >= 0 && arrIdx < vc.affixesSelected.length
                        && vc.choicesSelected[arrIdx] !== undefined) {
                        vc.choicesSelected[arrIdx] = null;
                        try {
                            gaRequests.send('method', 'select', {
                                'View Type': 'Choose Method of Making View',
                                'Selection Type': 'Deselecting',
                                'Selection Medium': ($($('div.choice-selection-container input.searchbar')[arrIdx]).val() != '') ? 'Search Bar' : 'Manual',
                                'Number Of Abilities Selected': 1
                            });
                        }
                        catch (e) { }
                    }
                }
            }
        }
        else {
            let $divDataCode = $(this).parents('div[data-code]');
            if ($divDataCode.length > 0) {
                let code = $divDataCode.data('code');
                let affix = Assistant.affixDB[code];
                if (affix && affix.choices && Array.isArray(affix.choices)) {
                    let choices = affix.choices;
                    let choiceIdx = $(this).parent().index();
                    if (choiceIdx >= 0 && choiceIdx < choices.length) {
                        let choice = choices[choiceIdx];
                        let arrIdx = vc.affixesSelected.indexOf(affix.abilityRef);
                        if (arrIdx >= 0 && arrIdx < vc.affixesSelected.length
                            && vc.choicesSelected[arrIdx] !== undefined) {
                            vc.choicesSelected[arrIdx] = choice;
                            try {
                                gaRequests.send('method', 'select', {
                                    'View Type': 'Choose Method of Making View',
                                    'Selection Type': 'Selecting',
                                    'Selection Medium': ($($('div.choice-selection-container input.searchbar')[arrIdx]).val() != '') ? 'Search Bar' : 'Manual',
                                    'Number Of Abilities Selected': 1
                                });
                            }
                            catch (e) { }
                        }
                    }
                }
            }
        }
        vc.updateChoiceSelectionView();
    }

    handleTweak(e) {
        let vc = e.data.vc;
        if (!vc.pageInReview) return;
        let thisFodderIdx = $(this).closest('div[data-fodderidx]').data('fodderidx');
        let thisAffixIdx = $(this).index();
        let thisFodder = vc.pageInReview.fodders[thisFodderIdx];
        // If already selected one ability to swap
        if (vc.affixTweakSelection) {
            // If selected the same ability, start over
            if (!vc.affixTweakSelection.isFactor
                && thisFodderIdx == vc.affixTweakSelection.fodderIdx
                && thisAffixIdx == vc.affixTweakSelection.affixIdx) {
                vc.affixTweakSelection = null;
                $(`div.review-tweak-container div.swappable`).removeClass('selected');
                $(`div.review-tweak-container div.swappable`)
                    .removeClass('potential-target')
                    .removeClass('not-a-target');
                return;
            }
            if (vc.affixTweakSelection.isFactor) {
                if (!$(this).hasClass('blank-special-ability-factor')
                    && !$(this).hasClass('special-ability-factor')) return;
                let tempFactor = thisFodder.specialAbilityFactor;
                thisFodder.specialAbilityFactor =
                    vc.pageInReview.fodders[vc.affixTweakSelection.fodderIdx].specialAbilityFactor;
                vc.pageInReview.fodders[vc.affixTweakSelection.fodderIdx].specialAbilityFactor = tempFactor;
                vc.updateReviewPanel();
                return;
            }
            // If already selected two abilities to swap, check if they can be swapped
            let fodderSelected = vc.pageInReview.fodders[vc.affixTweakSelection.fodderIdx];
            if (vc.assistant.testSwap(thisFodder, thisAffixIdx,
                fodderSelected, vc.affixTweakSelection.affixIdx)) {
                // If they can, swap them
                let tempAbility = thisFodder.affixes[thisAffixIdx];
                thisFodder.affixes[thisAffixIdx] = fodderSelected.affixes[vc.affixTweakSelection.affixIdx];
                fodderSelected.affixes[vc.affixTweakSelection.affixIdx] = tempAbility;
                vc.assistant.refillJunk(thisFodder);
                vc.assistant.refillJunk(fodderSelected);
                vc.updateReviewPanel();
                $(`div.review-tweak-container div.swappable`).removeClass('selected');
                $(`div.review-tweak-container div.swappable`)
                    .removeClass('potential-target')
                    .removeClass('not-a-target');
            }
        }
        else { // If no ability has been selected to be swapped yet
            // Save the first selection
            $(this).addClass('selected');
            vc.affixTweakSelection = {
                fodderIdx: thisFodderIdx,
                affixIdx: thisAffixIdx,
                isFactor: $(this).hasClass('special-ability-factor')
                    || $(this).hasClass('blank-special-ability-factor')
            }
            $(`div.review-tweak-container div.swappable`)
                .removeClass('potential-target')
                .removeClass('not-a-target');
            // Check every ability in every other fodder for possible swap candidates
            for (var i = 0; i < vc.pageInReview.size(); i++) {
                let thatFodder = vc.pageInReview.fodders[i];
                let $swappables = $(`div.review-tweak-container div[data-fodderidx='${i}']`)
                    .find('div.swappable').not('.selected');
                if (vc.affixTweakSelection.isFactor) {
                    $swappables.not(`.blank-special-ability-factor`)
                        .not(`.special-ability-factor`)
                        .addClass('not-a-target');
                }
                else {
                    for (var j = 0; j < thatFodder.size(); j++) {
                        if ($swappables.length <= j) break;
                        if (vc.assistant.testSwap(thisFodder, thisAffixIdx, thatFodder, j)) {
                            $($swappables[j]).addClass('potential-target');
                        }
                        else {
                            $($swappables[j]).addClass('not-a-target');
                        }
                    }
                }
            }
            if ($(this).hasClass('blank-special-ability-factor')) {
                $(`div.review-tweak-container div.blank-special-ability-factor.swappable`)
                    .not(this).addClass('not-a-target');
                $(`div.review-tweak-container div.special-ability-factor.swappable`)
                    .not(this).addClass('potential-target');
            }
            else if ($(this).hasClass('special-ability-factor')) {
                $(`div.review-tweak-container div.special-ability-factor.swappable,div.review-tweak-container div.blank-special-ability-factor.swappable`)
                    .not(this).addClass('potential-target');
            }
            else {
                $(`div.review-tweak-container div.special-ability-factor.swappable,div.review-tweak-container div.blank-special-ability-factor.swappable`)
                    .not(this).addClass('not-a-target');
            }
        }
    }

    produceFodderFromChoices(e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if (vc.choicesSelected.includes(null)) return;
        try {
            let choices = vc.choicesSelected;
            let targetNumSlots = vc.affixesSelected.length - (vc.isIncludingFoddersIntrinsicFactor ? 1 : 0)
                - ((vc.shouldUpslot && vc.affixesSelected.length > 1) ? 1 : 0);
            let newPage = vc.assistant.buildPageWith(choices, targetNumSlots, vc.shouldSpread, vc.shouldUseTrainer);
            if (typeof newPage === 'string') {
                console.warn(
                    'Attempted to produce a new page with choices %o, but produced page was %o',
                    choices, newPage);
                throw false;
            }
            $('div.choice-selection-container').remove();
            vc.pageInReview = newPage;
            vc.openReviewAndTweakScreen();
        } catch (e) {
            vc.openReportIssueScreen();
        }
        try {
            gaRequests.send('method', 'confirm', {
                'View Type': 'Choose Method of Making View',
                'Transaction Type': 'Confirm',
                'Time Spent In View': ((new Date()).getTime() - timeData.chooseMethodStartTime) / 1000
            });
        }
        catch (e) { }
    }

    updateAffixSelectionView() {
        $(`div.affix-selection-container li > div`).removeClass('selected');
        let slots = $('div.affix-selection-container div.affix');
        let allStats = {};
        for (var i = 0; i < slots.length; i++) {
            if (this.affixesSelected[i]) {
                let name = (lang[this.affixesSelected[i].code] && lang[this.affixesSelected[i].code]['name_' + this.langCode]) ?
                    lang[this.affixesSelected[i].code]['name_' + this.langCode] : lang[this.affixesSelected[i].code]['name_en'];
                let effect = (lang[this.affixesSelected[i].code] && lang[this.affixesSelected[i].code]['effect_' + this.langCode]) ?
                    lang[this.affixesSelected[i].code]['effect_' + this.langCode] : lang[this.affixesSelected[i].code]['effect_en'];
                let rawStats = effect.replace(/(,<br>)|(, )/g, ', ');
                $(slots[i]).attr('title', rawStats)
                    .attr('data-code', this.affixesSelected[i].code)
                    .removeClass('empty')
                    .find('span').text(name);
                $(`div.affix-selection-container li > div[data-code="${this.affixesSelected[i].code}"]`)
                    .addClass('selected');
                let stats = rawStats.split(', ');
                if (stats.length == 1) stats = stats[0].split(',');
                for (var j = 0; j < stats.length; j++) {
                    let stat = stats[j];
                    if (/(.)*\([\+-][0-9]+\)/.test(stat)) {
                        stat = stat.split('(');
                        let key = stat[0];
                        let value = parseInt(stat[1].slice(0, stat[1].length - 1));
                        if (allStats[key]) {
                            allStats[key] += value;
                        }
                        else {
                            allStats[key] = value;
                        }
                    }
                    else {
                        allStats[stat] = '';
                    }
                }
            }
            else {
                $(slots[i]).attr('title', '')
                    .attr('data-code', '')
                    .addClass('empty')
                    .find('span').html('&nbsp;');
            }
        }
        //
        var transpOnlyAbilities = this.affixesSelected.filter(a => Assistant.affixDB[a.code] !== undefined
            && Assistant.affixDB[a.code].choices.length === 0)
        var warningMsg = ''
        if (transpOnlyAbilities.length > 0) {
            warningMsg = lang.app.warningMsg[this.langCode](transpOnlyAbilities
                .map(a => (lang[a.code] && lang[a.code]['name_' + this.langCode]) ?
                    lang[a.code]['name_' + this.langCode] : lang[a.code]['name_en']));
        }
        $('div.affix-selection-container .warning-msg').text(warningMsg);
        // Translate package type stats into their synonyms, like ALL-type stats
        for (var key in lang.synonyms[this.langCode]) {
            if (allStats[key]) {
                let val = lang.synonyms[this.langCode][key];
                for (var j = 0; j < val.length; j++) {
                    if (allStats[val[j]]) allStats[val[j]] += allStats[key];
                    else allStats[val[j]] = allStats[key];
                }
                delete allStats[key];
            }
        }
        allStats = Object.keys(allStats).map((key, idx) => {
            return { key: key, value: allStats[key] }
        });
        // Order stats by a determined sequence
        allStats.sort((a, b) => {
            let idxA = lang.statsDisplayOrder[this.langCode].indexOf(a.key);
            if (idxA < 0) return 1;
            let idxB = lang.statsDisplayOrder[this.langCode].indexOf(b.key);
            if (idxB < 0) return -1;
            return idxA - idxB;
        });
        let statsViewer = $(`div.affix-selection-container div.stats-viewer`);
        if (statsViewer.length > 0) {
            statsViewer.empty();
            for (var i = 0; i < allStats.length; i++) {
                let key = allStats[i].key;
                let value = allStats[i].value;
                if (value === undefined || value == null || value === 0) continue;
                if (value != "") value = ' (' + ((value >= 0) ? '+' : '') + value + ')';
                statsViewer.append(`<div class="stat">${key + value}</div>`);
            }
        }
        if (this.affixesSelected.length <= 0) {
            $(`div.affix-selection-container .confirm-button`).addClass('disabled');
        }
        else {
            $(`div.affix-selection-container .confirm-button`).removeClass('disabled');
            if (transpOnlyAbilities.length > 0) {
                $(`div.affix-selection-container .affix-confirm-button`).addClass('disabled');
            }
        }
        if (this.affixesSelected.filter(a => a.noEx !== true).length === 0) {
            $(`div.affix-selection-container .transplant-confirm-button`).addClass('disabled');
        }
        else {
            $(`div.affix-selection-container .transplant-confirm-button`).removeClass('disabled');
        }
    }

    updateChoiceSelectionView() {
        $(`div.choice-selection-container li > div`).removeClass('selected');
        $(`div.choice-selection-container div.affix`).removeClass('selected');
        for (var i = 0; i < this.affixesSelected.length; i++) {
            let choices = Assistant.affixDB[this.affixesSelected[i].code].choices;
            let choiceIdx = choices.indexOf(this.choicesSelected[i]);
            let optionsList = $(`div.choice-selection-container div[data-code=${this.affixesSelected[i].code}] li > div`);
            if (choiceIdx >= 0 && choiceIdx < optionsList.length) {
                $(optionsList[choiceIdx]).addClass('selected')
                    .parents('div[data-code]').find('div.affix').addClass('selected');
            }
            let searchResults = $(`div.choice-selection-container div.filtersearchcontainer`)[i];
            if (searchResults) {
                let upslottingFactor = (this.affixesSelected.length > 0) ?
                    Assistant.data.extraSlot[this.affixesSelected.length - 1].true / 100
                    : 1; // range 0~1
                for (var j = 0; j < choices.length; j++) {
                    let $option = $($(searchResults).find('li > div')[j]);
                    let $transferRate = $option.find('span.rate');
                    if ($transferRate.length > 0) {
                        $transferRate.text(Math.floor(((this.shouldUpslot ? upslottingFactor : 1)) * choices[j].transferRate));
                    }
                    if ($option.hasClass('selected')) continue;
                    if ($option.length > 0) {
                        $option.removeClass('option-disabled');
                        let testChoices = this.choicesSelected.slice(0);
                        testChoices[i] = choices[j];
                        if (!this.assistant.doAffixesHavePossiblePlacement({
                            choices: testChoices,
                            targetNumSlots: this.affixesSelected.length - ((this.affixesSelected.length > 1 && this.shouldUpslot) ? 1 : 0),
                            isUsingTrainer: this.shouldUseTrainer
                        }))
                            $option.addClass('option-disabled');
                    }
                }
            }
            let $trainerCheckbox = $('div.choice-selection-container div.options div.checkbox-container:last-child');
            $trainerCheckbox.removeClass('disabled');
            $trainerCheckbox.find('input[type=checkbox]').attr('disabled', false);
            if ($trainerCheckbox.length > 0 && !this.shouldUseTrainer
                && !this.assistant.doAffixesHavePossiblePlacement({
                    choices: this.choicesSelected,
                    targetNumSlots: this.affixesSelected.length - ((this.affixesSelected.length > 1 && this.shouldUpslot) ? 1 : 0),
                    isUsingTrainer: !this.shouldUseTrainer
                })) {
                    $trainerCheckbox.addClass('disabled');
                    $trainerCheckbox.find('input[type=checkbox]').attr('disabled', true);
            }
        }
        $(`div.choice-selection-container .confirm-button`).removeClass('disabled');
        if (this.choicesSelected.includes(null)) {
            $(`div.choice-selection-container .confirm-button`).addClass('disabled');
        }
    }

    updateReviewPanel() {
        this.affixTweakSelection = null;
        $(`div.review-tweak-container div.content`).empty().append(REVIEWING_PANEL({ fodders: this.pageInReview.fodders, langCode: this.langCode }));
        $('div.review-tweak-container div.swappable').click({ vc: this }, this.handleTweak);
    }

    /**
     * Updates the Special Ability Transplant screen.
     * @param {any} slotOffset Number of ability slots to increment/decrement
     * on the material fodder from the current state.
     * @param {any} popsToAffixSelection Whether it should return to affix
     * selection screen when user cancels.
     */
    updateTransplantPanel(slotOffset, popsToAffixSelection) {
        if (this.pageInReview === undefined || this.pageInReview == null || !(this.pageInReview instanceof Page)) {
            return;
        }
        if (this.fodderInReview === undefined || this.fodderInReview == null || !(this.fodderInReview instanceof Fodder)) {
            return;
        }
        let minSlot = undefined;
        for (var i in this.pageInReview.fodders) {
            if (minSlot === undefined || this.pageInReview.fodders[i].size() < minSlot) {
                minSlot = this.pageInReview.fodders[i].size();
            }
        }
        if (minSlot === undefined) {
            return;
        }
        let addAbilityIdx = this.fodderInReview.affixes.indexOf(this.addAbilityChosen);
        minSlot = minSlot + (typeof slotOffset === 'number' ? slotOffset : 0);
        let page = this.assistant.buildTransplantPage(this.fodderInReview, minSlot, addAbilityIdx);
        if (page === null) {
            return;
        }
        this.pageInReview = page;
        $(`div.transplant-container div.content`).empty().append(TRANSPLANT_PANEL({
            fodders: this.pageInReview.fodders,
            addAbilityChosen: this.addAbilityChosen,
            langCode: this.langCode
        }));
        let transplantChoices = this.assistant.getTransplantChoicesFor(this.fodderInReview, addAbilityIdx);
        if (transplantChoices !== null) {
            if (minSlot <= transplantChoices.materialAbilities.required.length || minSlot <= 1) {
                $('div.transplant-container div.button-decrease').addClass('disabled');
            } else {
                $('div.transplant-container div.button-decrease').removeClass('disabled');
            }
            if (minSlot >= this.fodderInReview.size()) {
                $('div.transplant-container div.button-increase').addClass('disabled');
            } else {
                $('div.transplant-container div.button-increase').removeClass('disabled');
            }
        }
        $('div.transplant-container').click(
            (e) => {
                $('div.transplant-container').remove();
                this.fodderInReview = null;
                this.pageInReview = null;
                this.addAbilityChosen = null;
                try {
                    gaRequests.send('transplant', 'cancel', {
                        'View Type': 'Ability Transplant',
                        'Transaction Type': 'Cancel',
                        'Time Spent In View': ((new Date()).getTime() - timeData.reviewTweakStartTime) / 1000
                    });
                }
                catch (e) { }
            });
        $('div.transplant-container div.cancel-button').click({ popsToAffixSelection: popsToAffixSelection },
            (e) => {
                $('div.transplant-container').remove();
                this.fodderInReview = null;
                this.pageInReview = null;
                this.addAbilityChosen = null;
                if (popsToAffixSelection) {
                    this.setAffixSelectionView(true, false);
                }
                try {
                    gaRequests.send('transplant', 'cancel', {
                        'View Type': 'Ability Transplant',
                        'Transaction Type': 'Cancel',
                        'Time Spent In View': ((new Date()).getTime() - timeData.reviewTweakStartTime) / 1000
                    });
                }
                catch (e) { }
            });
        $('div.transplant-container div.confirm-button').click(
            () => {
                $('div.transplant-container').remove();
                // If null, treat it as the root. Otherwise, treat it as a branch node
                if (!this.assistant.hasActivePageTreeNode()) {
                    if (this.assistant.validateAffixes(this.fodderInReview.affixes)) {
                        this.assistant.setGoal(this.fodderInReview.affixes);
                        this.assistant.activeFodder.setAddAbilityInUse(this.fodderInReview.addAbilityItemInUse);
                        this.fodderInReview = this.assistant.activeFodder;
                    }
                }
                // Add new page to the tree data structure
                // And connect the produced fodder to the new page
                this.assistant.updateConnection({
                    fodder: this.fodderInReview,
                    page: this.pageInReview
                });
                // Update the UI to reflect the data changed
                this.updateURLParams();
                this.updateView();
                let $page = this.findDOMByPage(this.assistant.activePageTreeNode.page)
                this.centerViewAtNode($page);
                $page = this.findDOMByPage(this.pageInReview);
                spotlightIn($page);
                if (this.newlyProducedTimeout) clearTimeout(this.newlyProducedTimeout);
                this.newlyProducedTimeout = setTimeout(function () {
                    if (spotlight === $page) spotlightOut($page);
                }, this.NEWLY_PRODUCED_TIMEOUT_IN_MILLI);
                this.fodderInReview = null;
                this.pageInReview = null;
                this.addAbilityChosen = null;
                // Briefly ask if user would like to rate the new formula made
                setTimeout(() => { this.peekRateItView() }, 1000);

                try {
                    gaRequests.send('transplant', 'confirm', {
                        'View Type': 'Ability Transplant',
                        'Transaction Type': 'Confirm',
                        'Time Spent In View': ((new Date()).getTime() - timeData.reviewTweakStartTime) / 1000,
                        'Number Of Affix Requests': 1
                    });
                }
                catch (e) { }
            });
        $('div.transplant-container div.button-decrease:not(.disabled)').click(() => {
            this.updateTransplantPanel(-1);
        });
        $('div.transplant-container div.button-increase:not(.disabled)').click(() => {
            this.updateTransplantPanel(1);
        });
        $('div.transplant-container div.transplant-add-ability-button').click(() => {
            // Select Button
            if ($('div.transplant-container div.transplant-add-ability-button').hasClass('select')) {
                // Move to Reset State
                if ($('div.transplant-container div.transplant-add-ability-button').hasClass('selecting')) {
                    $('div.transplant-container div.transplant-add-ability-button').removeClass('selecting');
                    $('div.transplant-container div.add-ability-choice.potential-target').removeClass('potential-target');
                    $('div.transplant-container div.affix:not(.transplant-add-ability):not(.add-ability-choice)').removeClass('not-a-target');
                    $('div.transplant-container div.transplant-add-ability-button').text(lang.app.selectButton[this.langCode]);
                } else { // Move to Selecting State
                    $('div.transplant-container div.transplant-add-ability-button').addClass('selecting');
                    $('div.transplant-container div.add-ability-choice:not(.potential-target)').addClass('potential-target');
                    $('div.transplant-container div.affix:not(.transplant-add-ability):not(.add-ability-choice)').addClass('not-a-target');
                    $('div.transplant-container div.transplant-add-ability-button').text(lang.app.cancelButton[this.langCode]);
                }
            } else { // Reset Button
                this.addAbilityChosen = null;
                this.updateTransplantPanel();
            }
        });
        $('div.transplant-container div.affix.add-ability-choice').click({ vc: this }, function (e) {
            if (!$(this).hasClass('potential-target') || !(e.data.vc instanceof ViewController)) {
                return;
            }
            let code = $(this).attr('data-code');
            if (code === undefined || code === null || typeof code !== 'string') {
                return;
            }
            if (Assistant.affixDB[code] === undefined || Assistant.affixDB[code] === null
                || Assistant.affixDB[code].abilityRef === undefined || Assistant.affixDB[code] === null) {
                return;
            }
            let ability = Assistant.affixDB[code].abilityRef;
            e.data.vc.addAbilityChosen = ability;
            e.data.vc.updateTransplantPanel();
        });
    }

    updateFormulaSheetSearchResults(e) {
        let vc = (this instanceof ViewController) ? this : (e && e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        let choices = vc.assistant.getChoicesForAffixes(
            Assistant.affixDB[$(this).attr('data-code')].abilityRef
        );
        let uses = vc.assistant.getUsesFor(
            Assistant.affixDB[$(this).attr('data-code')].abilityRef);
        if (!choices || !uses || !choices[$(this).attr('data-code')]) return;
        $(`div.formula-sheet-container li > div`).removeClass('selected');
        $(this).addClass('selected');
        let $ref = $('div.formula-sheet-container .search-results-container');
        $ref.nextUntil('div.title').remove();
        $(FILTER_SEARCH_TEMPLATE({
            categories: [],
            datalist: [lang.app.transplantTitle[vc.langCode], ...choices[$(this).attr('data-code')]],
            langCode: VIEW_CONTROLLER.langCode
        })).insertAfter($ref[0]);
        $(FILTER_SEARCH_TEMPLATE({
            categories: [],
            datalist: uses,
            langCode: VIEW_CONTROLLER.langCode
        })).insertAfter($ref[1]);
        try {
            gaRequests.send('formula', 'select', {
                'View Type': 'Formula Sheet View',
                'Selection Type': 'Selecting',
                'Selection Medium': ($($('div.formula-sheet-container input.searchbar')[0]).val() != '') ? 'Search Bar' : 'Manual',
                'Number Of Abilities Selected': 1
            });
        }
        catch (e) { }
    }

    setShouldUpslot(e) {
        let vc = (this instanceof ViewController) ? this : (e && e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        let $checkbox = $('div.choice-selection-container div.options div.checkbox-container:first-child input[type=checkbox]');
        vc.shouldUpslot = $checkbox.prop('checked');
        vc.updateChoiceSelectionView();
    }

    setShouldSpread(e) {
        let vc = (this instanceof ViewController) ? this : (e && e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        let $checkbox = $('div.choice-selection-container div.options div.checkbox-container:nth-child(2) input[type=checkbox]');
        vc.shouldSpread = $checkbox.prop('checked');
        vc.updateChoiceSelectionView();
    }

    setShouldUseTrainer(e) {
        let vc = (this instanceof ViewController) ? this : (e && e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        let $checkbox = $('div.choice-selection-container div.options div.checkbox-container:last-child input[type=checkbox]');
        if ($checkbox.hasClass('disabled')) return;
        vc.shouldUseTrainer = $checkbox.prop('checked');
        vc.updateChoiceSelectionView();
    }

    colorizeOverlappingChoices(choices) {
        let colors = this.assistant.colorChoices(Object.values(choices));
        if (Array.isArray(colors)) {
            let $sets = $('div.choice-selection-container div.content > div');
            for (var i = 0; i < $sets.length; i++) {
                if (colors[i] == undefined) continue;
                let $lis = $($sets[i]).find('li');
                for (var j = 0; j < $lis.length; j++) {
                    if (colors[i][j] == undefined) continue;
                    let $spans = $($lis[j]).find('span').not('.rate');
                    for (var k = 0; k < $spans.length; k++) {
                        if (colors[i][j][k] != undefined) {
                            $($spans[k]).addClass(`type${colors[i][j][k] % this.COLOR_PALETTE_SIZE}`);
                        }
                    }
                }
            }
        }
    }

    toggleLanguage() {
        let idx = this.languages.indexOf(this.langCode);
        if (idx >= 0) {
            this.langCode = this.languages[(idx + 1) % this.languages.length];
            this.filters = lang.filters[this.langCode];
            this.updateURLParams();
            this.updateView();
            this.updateMenuBarDescriptions();
            if ($('div.welcome h1').length > 0) $('div.welcome h1').text(lang.app.appTitle[this.langCode]);
            if ($('div.welcome p').length > 0) $('div.welcome p').text(lang.app.subHeader[this.langCode]);
            $("#malulleybovo").text(lang.app.malulleybovo[this.langCode])
        }
        return this;
    }

    updateMenuBarDescriptions() {
        $('#startnew').attr('title', lang.app.menuStartNewDescription[this.langCode]);
        $('#openwishlist').attr('title', lang.app.menuWishListDescription[this.langCode]);
        $('#openformulasheet').attr('title', lang.app.menuFormulaSheetDescription[this.langCode]);
        $('#getlink').attr('title', lang.app.menuShareDescription[this.langCode]);
        $('#langswitch').attr('title', lang.app.menuLanguageDescription[this.langCode]);
        $('#themeswitch').attr('title', lang.app.menuThemesDescription[this.langCode]);
        $('#panzoomreset').attr('title', lang.app.menuTargetDescription[this.langCode]);
        $('div#reportbug').attr('title', lang.app.menuBugDescription[this.langCode]);
    }

    openFodderWishList(shouldAnimate) {
        if (!this.assistant || !(this.assistant instanceof Assistant)) return;
        if ($('div.affix-selection-container').length != 0) {
            $('div.affix-selection-container').remove();
        }
        if ($('div.choice-selection-container').length != 0) {
            $('div.choice-selection-container').remove();
        }
        if ($('div.review-tweak-container').length != 0) {
            $('div.review-tweak-container').remove();
        }
        if ($('div.formula-sheet-container').length != 0) {
            $('div.formula-sheet-container').remove();
        }
        if ($('div.link-container').length != 0) {
            $('div.link-container').remove();
        }
        if ($('div.wish-list-container').length != 0) {
            $('div.wish-list-container').remove();
        }
        $('body').append(
            WISH_LIST_VIEW_TEMPLATE({
                fodderList: this.assistant.getToBuyList(),
                successRateItems: this.assistant.getExtraItemCart(),
                transplantCost: this.assistant.getTotalTransplantCost(),
                langCode: this.langCode
            }));
        if (shouldAnimate) {
            $('div.wish-list-container').animate({}, 10, function () {
                timeData.wishListStartTime = (new Date()).getTime();
                $('div.wish-list-container').removeClass('hidden');
                try {
                    gaRequests.send('main', 'buttonClick', {
                        'View Type': 'Main View',
                        'Interface Type': 'Wish List Button',
                        'Number Of Interfaces Used': 1
                    });
                }
                catch (e) { }
            });
        }
        else $('div.wish-list-container').removeClass('hidden');
        $('div.wish-list-container div.confirm-button').click(() => {
            $('div.wish-list-container').remove();
            try {
                gaRequests.send('wishlist', 'close', {
                    'View Type': 'Fodder Wish List',
                    'Transaction Type': 'Close',
                    'Time Spent In View': ((new Date()).getTime() - timeData.wishListStartTime) / 1000
                });
            }
            catch (e) { }
        });
    }

    peekRateItView() {
        let skipRatingTime = 15000; //15 seconds
        let ratingsTime = this.ratingsTime;
        let description = this.assistant.activeFodder.size() + "s "
            + this.assistant.activeFodder.affixes.map(a => a.name).join(', ');
        // If stars already showing, just extend the duration
        if ($('.rateit-container').length > 0) {
            $('.rateit-container label').unbind('click');
        }
        else {
            // Show rating stars to users in case they want to rate the assistant
            $('body').append(RATE_IT_STARS_TEMPLATE({ langCode: this.langCode }));
            $('.rateit-container').animate({}, 10, function () {
                $('.rateit-container').removeClass('hidden');
            });
        }
        $('.rateit-container label').bind('click', function () {
            $('.rateit-container label').unbind('click');
            let newRate = $(this).data('rate');
            try {
                gaRequests.send('main', 'buttonClick', {
                    'View Type': 'Main View',
                    'Rating Value': `${newRate} Star${newRate > 1 ? "s" : ""}`, // The value of the rating 1-5
                    'Rating Description': `${newRate} Star${newRate > 1 ? "s" : ""} in making: ${description}`,
                    'Ratings Given': 1 // Yet another rating given
                });
            }
            catch (e) { }
            $('.rateit-container').addClass('rated');
            removeRatingContainer(1000);
        });
        removeRatingContainer(skipRatingTime);

        // Removes the rating stars after a certain time
        function removeRatingContainer(delay) {
            if (ratingsTime.timeout !== undefined) clearTimeout(ratingsTime.timeout);
            if ($('.rateit-container').length == 0) return;
            ratingsTime.timeout = setTimeout(function () {
                ratingsTime.timeout = undefined;
                $('.rateit-container').addClass('hidden');
                setTimeout(() => $('.rateit-container').remove(), 500);
            }, delay);
        }
    }
}

var timeout;
var spotlight;
function spotlightIn(ev) {
    if (ev.currentTarget) ev = ev.currentTarget;
    if (timeout) clearTimeout(timeout);
    let connNum = $(ev).attr('data-conn');
    timeout = setTimeout(function () {
        if (connNum) {
            $('div[data-conn]').removeClass('spotlight');
            $('div.page, connection').removeClass('despotlight');
            let $t = $('div[data-conn=' + connNum + ']');
            $('div.page, connection:not([data-conn=' + connNum + '])').not($t).addClass('despotlight');
            $t.addClass('spotlight');
            spotlight = ev;
        }
    }, 500);
}

function spotlightOut(ev) {
    if (ev.currentTarget) ev = ev.currentTarget;
    if (timeout) clearTimeout(timeout);
    let connNum = $(ev).attr('data-conn');
    if (connNum) {
        let $t = $('div[data-conn=' + connNum + ']');
        $('div.page, connection:not([data-conn=' + connNum + '])').not($t).removeClass('despotlight');
        $t.removeClass('spotlight');
        spotlight = undefined;
    }
}
