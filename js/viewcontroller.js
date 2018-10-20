/**
 * View Controller
 *
 * @author malulleybovo (2018)
 */

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
        });
        $('#startnew').click(() => {
            VIEW_CONTROLLER.affixesSelected = VIEW_CONTROLLER.assistant.getGoalAffixes();
            VIEW_CONTROLLER.assistant.reset();
            VIEW_CONTROLLER.setAffixSelectionView(true, true);
        });
        $('#openformulasheet').click(() => VIEW_CONTROLLER.openFormulaSheet(true));
        $('#getlink').click(() => VIEW_CONTROLLER.openGetLinkView(true));
        $('#themeswitch').click(() => {
            if ($('html').hasClass('theme--default')) {
                $('html').removeClass('theme--default').addClass('theme--bright');
            }
            else if($('html').hasClass('theme--bright')) {
                $('html').removeClass('theme--bright').addClass('theme--default');
            }
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
                        $('div.affix-selection-container').removeClass('hidden');
                    });
                }
                else $('div.affix-selection-container').removeClass('hidden');
                $('div.affix-selection-container li > div').click({ viewcontroller: this }, this.selectAbility);
                $('div.affix-selection-container div.affix > i').click({ viewcontroller: this }, this.selectAbility);
                $('div.affix-selection-container div.confirm-button').click({ viewcontroller: this }, function ({ data }) {
                    data.viewcontroller.openChoicesSelectionView(false);
                    $('div.choice-selection-container div.cancel-button').click({ viewcontroller: data.viewcontroller },
                        ({ data }) => { data.viewcontroller.setAffixSelectionView(true, false); });
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
        $('body').append(
            CHOICE_SELECTION_VIEW_TEMPLATE({
                affixesSelected: vc.affixesSelected,
                choices: choices,
                shouldUpslot: vc.shouldUpslot,
                shouldSpread: vc.shouldSpread
            }));
        if (shouldAnimate) {
            $('div.choice-selection-container').animate({}, 10, function () {
                $('div.choice-selection-container').removeClass('hidden');
            });
        }
        else $('div.choice-selection-container').removeClass('hidden');
        $('div.choice-selection-container div.options > div.checkbox-container:first-child').click({ viewcontroller: vc }, vc.setShouldUpslot);
        $('div.choice-selection-container div.options > div.checkbox-container:last-child').click({ viewcontroller: vc }, vc.setShouldSpread);
        $('div.choice-selection-container li > div').click({ viewcontroller: vc }, vc.selectChoice);
        $('div.choice-selection-container div.cancel-button').click(
            (e) => { $('div.choice-selection-container').remove(); });
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
                $('div.formula-sheet-container').removeClass('hidden');
            });
        }
        else $('div.formula-sheet-container').removeClass('hidden');
        $('div.formula-sheet-container li > div').click({ viewcontroller: vc }, vc.updateFormulaSheetSearchResults);
        $('div.formula-sheet-container div.confirm-button').click(() => {
            $('div.formula-sheet-container').remove();
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
                $('div.link-container').removeClass('hidden');
            });
        }
        else $('div.link-container').removeClass('hidden');
        $('div.link-container div.copy-button:first-child').click(() => {
            let copyText = $('div.link-container input[type=text]')[0];
            if (!copyText) return;
            copyText.select();
            document.execCommand("copy");
        });
        $('div.link-container div.confirm-button').click(() => {
            $('div.link-container').remove();
        });
    }

    updateFromURL() {
        let urlParams = window.location.search;
        if (urlParams == '') return;
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
        $('div.produce-button').click({ viewcontroller: this }, this.setActiveFodder);
        $('.boost-container input[type=checkbox]').change({ viewcontroller: this }, (e) => {
            let $elem = $(e.currentTarget);
            for (var i = 0; i < $elem.length; i++) {
                let { fodder } = e.data.viewcontroller.findPageAndNodeByDOM($elem[i]);
                if (fodder) fodder.setSameGear($elem.prop('checked'));
            }
            e.data.viewcontroller.updateURLParams();
            e.data.viewcontroller.updateView();
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
        });
        return this;
    }

    updateURLParams() {
        if (!this.assistant || !(this.assistant instanceof Assistant)) return;
        let oldURL = decodeURIComponent(window.location.search.substring(1, window.location.search));
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
        let targetNumSlots = vc.affixesSelected.length - ((vc.shouldUpslot) ? 1 : 0);
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
        spotlightIn($page);
        if (vc.newlyProducedTimeout) clearTimeout(vc.newlyProducedTimeout);
        vc.newlyProducedTimeout = setTimeout(function () {
            if (spotlight === $page) spotlightOut($page);
        }, vc.NEWLY_PRODUCED_TIMEOUT_IN_MILLI);
        $('div.choice-selection-container').remove();
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
            if (allStats['HP']) allStats['HP'] += allStats['ALL'];
            else allStats['HP'] = allStats['ALL'];
            if (allStats['PP']) allStats['PP'] += allStats['ALL'];
            else allStats['PP'] = allStats['ALL'];
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
        if (this.affixesSelected.length <= 0) {
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
                            targetNumSlots: this.affixesSelected.length - (this.shouldUpslot ? 1 : 0)
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