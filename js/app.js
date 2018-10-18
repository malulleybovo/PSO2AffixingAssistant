/**
 * PSO2 Affixing Assistant
 * 
 * @author malulleybovo (2018)
 */

// Remove the 'JavaScript Disabled' warning since it is running
// Must run before page is ready, otherwise it will briefly 
// show even if JS is enabled. And before load(), queries won't work
window.addEventListener("load", function (event) {
    document.getElementById('js-disabled').parentNode
        .removeChild(document.getElementById('js-disabled'));
});

const ASSISTANT = new Assistant(data);
const VIEW_CONTROLLER = (new ViewController(ASSISTANT));

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
    });