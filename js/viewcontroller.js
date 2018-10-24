/**
 * View Controller
 *
 * @author malulleybovo (2018)
 */

const timeData = {
    chooseAffixStartTime: (new Date()).getTime(),
    chooseMethodStartTime: (new Date()).getTime(),
    formulaSheetStartTime: (new Date()).getTime(),
    shareLinkStartTime: (new Date()).getTime()
};
const stringData = {
    affixingSrc: ''
}

class ViewController {
    constructor(assistant) {
        // Immutable variables (properties can still change)
        this.NEWLY_PRODUCED_TIMEOUT_IN_MILLI = 3000;
        this.filters = [];
        this.affixesSelected = [];
        this.choicesSelected = [];
        this.assistant = assistant;
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
        this.shouldUpslot = true;
        this.shouldSpread = true;
        this.newlyProducedTimeout = null;
        this.isIncludingFoddersIntrinsicFactor = false;
    }

    setup() {
        $("#editor").children().first().panzoom({
            which: 3,
            minScale: 0.1,
            maxScale: 2,
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
        $('#openformulasheet').click(() => VIEW_CONTROLLER.openFormulaSheet(true));
        $('#getlink').click(() => VIEW_CONTROLLER.openGetLinkView(true));
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
    }

    setActiveFodder(e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
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
            $elem = $elem.parents('div.mgrid');
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
            $elem = $elem.parents('div.mgrid');
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
                    $curr = $($curr[0]).children().last().children('.mgrid');
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
        if ($('div.choice-selection-container').length != 0) {
            $('div.choice-selection-container').remove();
        }
        if ($('div.formula-sheet-container').length != 0) {
            $('div.formula-sheet-container').remove();
        }
        if ($('div.link-container').length != 0) {
            $('div.link-container').remove();
        }
        let isVisible = $('div.affix-selection-container').length != 0;
        if (bool) {
            if (!isVisible) {
                $('body').append(
                    AFFIX_SELECTION_VIEW_TEMPLATE({
                        affixesSelected: this.affixesSelected,
                        categories: this.filters,
                        abilityList: this.assistant.data.abilityList // List of all affixes
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
                $('div.affix-selection-container div.cancel-button').click({ viewcontroller: this }, function ({ data }) {
                    $('div.affix-selection-container').remove();
                    try {
                        gaRequests.send('affix', 'cancel', {
                            'View Type': 'Choose Affix View',
                            'Transaction Type': 'Cancel',
                            'Time Spent In View': (new Date()).getTime() - timeData.chooseAffixStartTime
                        });
                    }
                    catch (e) { }
                });
                $('div.affix-selection-container div.confirm-button').click({ viewcontroller: this }, function ({ data }) {
                    if ($('div.affix-selection-container div.confirm-button.disabled').length > 0) return;
                    try {
                        gaRequests.send('affix', 'confirm', {
                            'View Type': 'Choose Affix View',
                            'Transaction Type': 'Confirm',
                            'Time Spent In View': (new Date()).getTime() - timeData.chooseAffixStartTime
                        });
                    }
                    catch (e) { }
                    data.viewcontroller.openChoicesSelectionView(false);
                    $('div.choice-selection-container div.cancel-button').click({ viewcontroller: data.viewcontroller },
                        ({ data }) => {
                            data.viewcontroller.setAffixSelectionView(true, false);
                            try {
                                gaRequests.send('method', 'cancel', {
                                    'View Type': 'Choose Method of Making View',
                                    'Transaction Type': 'Cancel',
                                    'Time Spent In View': (new Date()).getTime() - timeData.chooseMethodStartTime
                                });
                            }
                            catch (e) { }
                        });
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

    openChoicesSelectionView(shouldAnimate, e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if (vc.affixesSelected.length <= 0) return;
        vc.isIncludingFoddersIntrinsicFactor = false;
        if ($('div.affix-selection-container').length != 0) {
            $('div.affix-selection-container').remove();
        }
        if ($('div.choice-selection-container').length != 0) {
            $('div.choice-selection-container').remove();
        }
        if ($('div.formula-sheet-container').length != 0) {
            $('div.formula-sheet-container').remove();
        }
        if ($('div.link-container').length != 0) {
            $('div.link-container').remove();
        }
        let choices = vc.assistant.getChoicesForAffixes(vc.affixesSelected);
        vc.choicesSelected.splice(0, vc.choicesSelected.length);
        for (var i = 0; i < vc.affixesSelected.length; i++) {
            vc.choicesSelected.push(null);
        }
        if (vc.assistant.activeFodder && vc.assistant.activeFodder.specialAbilityFactor) {
            let factor = vc.assistant.activeFodder.specialAbilityFactor;
            vc.affixesSelected.push(factor);
            vc.isIncludingFoddersIntrinsicFactor = true;
            let factorChoices = vc.assistant.affixDB[factor.code].choices;
            for (var i = 0; i < factorChoices.length; i++) {
                if (factorChoices[i].isAbilityFactor) {
                    choices[factor.code] = [factorChoices[i]];
                    vc.choicesSelected.push(null);
                    break;
                }
            }
        }
        $('body').append(
            CHOICE_SELECTION_VIEW_TEMPLATE({
                affixesSelected: vc.affixesSelected,
                choices: choices,
                shouldUpslot: vc.shouldUpslot,
                shouldSpread: vc.shouldSpread
            }));
        if (shouldAnimate) {
            $('div.choice-selection-container').animate({}, 10, function () {
                timeData.chooseMethodStartTime = (new Date()).getTime();
                $('div.choice-selection-container').removeClass('hidden');
            });
        }
        else $('div.choice-selection-container').removeClass('hidden');
        $('div.choice-selection-container div.options > div.checkbox-container:first-child').click({ viewcontroller: vc }, vc.setShouldUpslot);
        $('div.choice-selection-container div.options > div.checkbox-container:last-child').click({ viewcontroller: vc }, vc.setShouldSpread);
        $('div.choice-selection-container li > div').click({ viewcontroller: vc }, vc.selectChoice);
        $('div.choice-selection-container div.cancel-button').click(
            (e) => {
                $('div.choice-selection-container').remove();
                try {
                    gaRequests.send('method', 'cancel', {
                        'View Type': 'Choose Method of Making View',
                        'Transaction Type': 'Cancel',
                        'Time Spent In View': (new Date()).getTime() - timeData.chooseMethodStartTime
                    });
                }
                catch (e) { }
            });
        $('div.choice-selection-container div.confirm-button').click({ viewcontroller: vc }, vc.produceFodderFromChoices);
    }

    openFormulaSheet(shouldAnimate, e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if ($('div.affix-selection-container').length != 0) {
            $('div.affix-selection-container').remove();
        }
        if ($('div.choice-selection-container').length != 0) {
            $('div.choice-selection-container').remove();
        }
        if ($('div.formula-sheet-container').length != 0) {
            $('div.formula-sheet-container').remove();
        }
        if ($('div.link-container').length != 0) {
            $('div.link-container').remove();
        }
        $('body').append(
            FORMULA_SHEET_VIEW_TEMPLATE({
                categories: VIEW_CONTROLLER.filters,
                abilityList: ASSISTANT.data.abilityList // List of all affixes
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
                    'Time Spent In View': (new Date()).getTime() - timeData.formulaSheetStartTime
                });
            }
            catch (e) { }
        });
    }

    openGetLinkView(shouldAnimate, e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if ($('div.affix-selection-container').length != 0) {
            $('div.affix-selection-container').remove();
        }
        if ($('div.choice-selection-container').length != 0) {
            $('div.choice-selection-container').remove();
        }
        if ($('div.formula-sheet-container').length != 0) {
            $('div.formula-sheet-container').remove();
        }
        if ($('div.link-container').length != 0) {
            $('div.link-container').remove();
        }
        $('body').append(
            LINK_TEMPLATE({
                link: decodeURI(window.location.href),
                linkToSim: vc.assistant.toURL(true)
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
                catch (e) { }
            });
        }
        else $('div.link-container').removeClass('hidden');
        $('div.link-container div.copy-button:first-child').click(() => {
            let copyText = $('div.link-container input[type=text]')[0];
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
        $($('div.link-container div.copy-button')[1]).find('a').click(() => {
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
                    'Time Spent In View': (new Date()).getTime() - timeData.shareLinkStartTime
                });
            }
            catch (e) { }
        });
    }

    updateFromURL() {
        let urlParams = window.location.search;
        if (urlParams == '') {
            this.displayWelcomeScreen(true);
            return;
        }
        else {
            this.displayWelcomeScreen(false);
        }
        urlParams = urlParams.substring(1, urlParams.length);
        urlParams = decodeURIComponent(urlParams);
        urlParams = VIEW_CONTROLLER.assistant.decodeURLParams(urlParams);
        if (!this.assistant || !(this.assistant instanceof Assistant)) return;
        let hasSuceeded = this.assistant.loadFromURLParams(urlParams);
        if (hasSuceeded) this.updateView();
    }

    updateView(e) {
        let vc = (this instanceof ViewController) ? this : (e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if (!vc.assistant || !vc.assistant.pageTreeRoot || !(vc.assistant.pageTreeRoot instanceof PageTreeNode)) return;
        vc.assistant.calcSuccessRates();
        $('#mastercontainer').empty().append(PAGE_TREE_NODE_TEMPLATE({
            pageTreeNode: vc.assistant.pageTreeRoot
        }));
        vc.regenerateConnections();
        $('div.fodder').hover(spotlightIn, spotlightOut);
        $('div.produce-button:not(.disabled)').click({ viewcontroller: this }, this.setActiveFodder);
        $('.boost-container input[type=checkbox]').change({ viewcontroller: this }, (e) => {
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
        $('.boost-container > div.dropdown-container:not(:last-child) select').change({ viewcontroller: this }, (e) => {
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
        });
        $('.boost-container > div.dropdown-container:last-child select').change({ viewcontroller: this }, (e) => {
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
        });
        vc.displayWelcomeScreen(false);
        return this;
    }

    displayWelcomeScreen(shouldOpen) {
        if (shouldOpen) {
            if ($('div.welcome').length > 0) return;
            if ($('#editor').length > 0) $(WELCOME_VIEW()).insertAfter($('#editor'));
            else $('body').prepend($(WELCOME_VIEW()));
        }
        else {
            $('div.welcome').remove();
        }
    }

    updateURLParams() {
        if (!this.assistant || !(this.assistant instanceof Assistant)) return;
        let oldURL = '?' + decodeURIComponent(window.location.search.substring(1, window.location.search.length));
        let newURL = this.assistant.toURL();
        if (newURL == oldURL) return;
        window.history.pushState("test", "Title", newURL);
    }

    centerViewAtNode(selector) {
        let $node = $(selector);
        if ($node.length <= 0) return;
        let pos = $node.position();
        let $container = $("#editor").children().first();
        let zoomScale = $container.panzoom('getMatrix')[0];
        let toNodeCenter = {
            left: ($node.outerWidth() / 2) + (Math.round(pos.left) / zoomScale),
            top: ($node.outerHeight() / 2) + (Math.round(pos.top) / zoomScale)
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
                    vc.assistant.affixDB[$(that).attr('data-code')].abilityRef
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
            let selAffix = vc.assistant.affixDB[$(this).attr('data-code')].abilityRef;
            let hadConflict = false;
            for (var i = 0; i < vc.affixesSelected.length; i++) {
                if (vc.assistant.hasConflict(vc.affixesSelected[i], selAffix)) {
                    vc.affixesSelected[i] = selAffix;
                    hadConflict = true;
                    break;
                }
            }
            if (!hadConflict && vc.affixesSelected.length < 8) {
                vc.affixesSelected.push(vc.assistant.affixDB[$(this).attr('data-code')].abilityRef);
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
                let affix = vc.assistant.affixDB[code];
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
                let affix = vc.assistant.affixDB[code];
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

    produceFodderFromChoices(e) {
        let vc = (this instanceof ViewController) ? this :
            (e.data && e.data.viewcontroller) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        if (vc.choicesSelected.includes(null)) return;
        let choices = vc.choicesSelected;
        let targetNumSlots = vc.affixesSelected.length - (vc.isIncludingFoddersIntrinsicFactor ? 1 : 0)
            - ((vc.shouldUpslot && vc.affixesSelected.length > 1) ? 1 : 0);
        let newPage = vc.assistant.buildPageForChoices(choices, vc.shouldSpread, targetNumSlots);
        if (!newPage) {
            console.warn(
                'Attempted to produce a new page with choices %o, but produced page was %o',
                choices, newPage);
            return;
        }
        // If null, treat it as the root. Otherwise, treat it as a branch node
        if (!vc.assistant.hasActivePageTreeNode()) {
            if (vc.assistant.validateAffixes(vc.affixesSelected)) {
                vc.assistant.setGoal(vc.affixesSelected);
            }
        }
        vc.assistant.activeFodder.setAddAbilityInUse(choices);
        // Add new page to the tree data structure
        // And connect the produced fodder to the new page
        vc.assistant.updateConnection({
            fodder: vc.assistant.activeFodder,
            page: newPage
        });
        // Update the UI to reflect the data changed
        vc.updateURLParams();
        vc.updateView();
        let $page = vc.findDOMByPage(vc.assistant.activePageTreeNode.page)
        vc.centerViewAtNode($page);
        $page = vc.findDOMByPage(newPage);
        spotlightIn($page);
        if (vc.newlyProducedTimeout) clearTimeout(vc.newlyProducedTimeout);
        vc.newlyProducedTimeout = setTimeout(function () {
            if (spotlight === $page) spotlightOut($page);
        }, vc.NEWLY_PRODUCED_TIMEOUT_IN_MILLI);
        $('div.choice-selection-container').remove();
        try {
            gaRequests.send('method', 'confirm', {
                'View Type': 'Choose Method of Making View',
                'Transaction Type': 'Confirm',
                'Time Spent In View': (new Date()).getTime() - timeData.chooseMethodStartTime,
                'Affix Type (Upslot)': (vc.shouldUpslot) ? 'Upslot' : 'Same Slot',
                'Affix Type (Spread)': (vc.shouldSpread) ? 'Spread' : 'Compact',
                'Affix Origin': stringData.affixingSrc,
                'Number Of Affix Requests': 1
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
                $(slots[i]).attr('title', this.affixesSelected[i].effect.replace(/<br>/g, ' '))
                    .attr('data-code', this.affixesSelected[i].code)
                    .removeClass('empty')
                    .find('span').text(this.affixesSelected[i].name);
                $(`div.affix-selection-container li > div[data-code="${this.affixesSelected[i].code}"]`)
                    .addClass('selected');
                let stats = this.affixesSelected[i].effect.split('<br>');
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
        if (allStats['ALL']) {
            if (allStats['S-ATK']) allStats['S-ATK'] += allStats['ALL'];
            else allStats['S-ATK'] = allStats['ALL'];
            if (allStats['R-ATK']) allStats['R-ATK'] += allStats['ALL'];
            else allStats['R-ATK'] = allStats['ALL'];
            if (allStats['T-ATK']) allStats['T-ATK'] += allStats['ALL'];
            else allStats['T-ATK'] = allStats['ALL'];
            if (allStats['S-DEF']) allStats['S-DEF'] += allStats['ALL'];
            else allStats['S-DEF'] = allStats['ALL'];
            if (allStats['R-DEF']) allStats['R-DEF'] += allStats['ALL'];
            else allStats['R-DEF'] = allStats['ALL'];
            if (allStats['T-DEF']) allStats['T-DEF'] += allStats['ALL'];
            else allStats['T-DEF'] = allStats['ALL'];
            if (allStats['DEX']) allStats['DEX'] += allStats['ALL'];
            else allStats['DEX'] = allStats['ALL'];
            delete allStats['ALL'];
        }
        let statsViewer = $(`div.affix-selection-container div.stats-viewer`);
        if (statsViewer.length > 0) {
            statsViewer.empty();
            for (var key in allStats) {
                let value = allStats[key];
                if (value != '') value = ' (' + ((value >= 0) ? '+' : '') + value + ')';
                statsViewer.append(`<div class="stat">${key + value}</div>`);
            }
        }
        if (this.affixesSelected.length <= 0
            || (this.affixesSelected.length == 1 && this.assistant.isSpecialAbility(this.affixesSelected[0]))) {
            $(`div.affix-selection-container .confirm-button`).addClass('disabled');
        }
        else {
            $(`div.affix-selection-container .confirm-button`).removeClass('disabled');
        }
    }

    updateChoiceSelectionView() {
        $(`div.choice-selection-container li > div`).removeClass('selected');
        $(`div.choice-selection-container div.affix`).removeClass('selected');
        for (var i = 0; i < this.affixesSelected.length; i++) {
            let choices = this.assistant.affixDB[this.affixesSelected[i].code].choices;
            let choiceIdx = choices.indexOf(this.choicesSelected[i]);
            let optionsList = $(`div.choice-selection-container div[data-code=${this.affixesSelected[i].code}] li > div`);
            if (choiceIdx >= 0 && choiceIdx < optionsList.length) {
                $(optionsList[choiceIdx]).addClass('selected')
                    .parents('div[data-code]').find('div.affix').addClass('selected');
            }
            let searchResults = $(`div.choice-selection-container div.filtersearchcontainer`)[i];
            if (searchResults) {
                for (var j = 0; j < choices.length; j++) {
                    let $option = $($(searchResults).find('li > div')[j]);
                    if ($option.hasClass('selected')) continue;
                    if ($option.length > 0) {
                        $option.removeClass('option-disabled');
                        let testChoices = this.choicesSelected.slice(0);
                        testChoices[i] = choices[j];
                        if (!this.assistant.doAffixesHavePossiblePlacement({
                            choices: testChoices,
                            targetNumSlots: this.affixesSelected.length - ((this.affixesSelected.length > 1 && this.shouldUpslot) ? 1 : 0)
                        }))
                            $option.addClass('option-disabled');
                    }
                }
            }
        }
        $(`div.choice-selection-container .confirm-button`).removeClass('disabled');
        if (this.choicesSelected.includes(null)) {
            $(`div.choice-selection-container .confirm-button`).addClass('disabled');
        }
    }

    updateFormulaSheetSearchResults(e) {
        let vc = (this instanceof ViewController) ? this : (e && e.data) ? e.data.viewcontroller : undefined;
        if (!(vc instanceof ViewController)) return;
        let choices = vc.assistant.getChoicesForAffixes(
            vc.assistant.affixDB[$(this).attr('data-code')].abilityRef
        );
        if (!choices || !choices[$(this).attr('data-code')]) return;
        $(`div.formula-sheet-container li > div`).removeClass('selected');
        $(this).addClass('selected');
        let $ref = $('div.formula-sheet-container .search-results-container');
        $ref.nextAll().remove();
        $(FILTER_SEARCH_TEMPLATE({
            categories: VIEW_CONTROLLER.filters,
            datalist: choices[$(this).attr('data-code')]
        })).insertAfter($ref);
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
        let $checkbox = $('div.choice-selection-container div.options div.checkbox-container:last-child input[type=checkbox]');
        vc.shouldSpread = $checkbox.prop('checked');
        vc.updateChoiceSelectionView();
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