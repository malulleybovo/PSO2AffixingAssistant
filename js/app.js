/**
 * PSO2 Affixing Assistant
 * 
 * @author malulleybovo (2018)
 */

const sessionStartTime = (new Date()).getTime();
const ASSISTANT = new Assistant(data);
const VIEW_CONTROLLER = (new ViewController(ASSISTANT));

// Remove the 'JavaScript Disabled' warning since it is running
// Must run before page is ready, otherwise it will briefly 
// show even if JS is enabled. And before load(), queries won't work
window.addEventListener("load", function (event) {
    document.getElementById('js-disabled').parentNode
        .removeChild(document.getElementById('js-disabled'));
    try {
        gaRequests.create();
        if (window && window.location) {
            gaRequests.send('main', 'entry', {
                'Session Type': (window.location.search == '') ?
                    'New Session' : 'Returning Session',
                'Number Of Sessions': 1
            });
        }
    }
    catch (e) { }
});

window.addEventListener("beforeunload", function (event) {
    try {
        let depth = ASSISTANT.getTreeDepth();
        gaRequests.send('main', 'entry', {
            'Time Spent In App': ((new Date()).getTime() - sessionStartTime) / 1000,
            'Number Of Levels Created': depth,
            'Tree Depth': depth.toString()
        });
    }
    catch (e) { }
});

$(document).ready(function () {
    //(new AffixDataParser()).printAbilityDB(abilityDB);
    VIEW_CONTROLLER.setup();
    VIEW_CONTROLLER.updateFromURL();
    VIEW_CONTROLLER.updateView();
    VIEW_CONTROLLER.centerViewAtNode('#goal');
});

$(window).resize(function () {
    VIEW_CONTROLLER.updateConnections();
})

$(window).bind('popstate',
    function (event) {
        VIEW_CONTROLLER.updateFromURL();
        try {
            gaRequests.send('main', 'entry', {
                'Number Of History States Popped': 1
            });
        }
        catch (e) { }
    });