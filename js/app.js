/**
 * PSO2 Affixing Assistant
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

const sessionType = (window.location.search == '') ?
    'New Session' : 'Returning Session';
const sessionStartTime = (new Date()).getTime();
const ASSISTANT = new Assistant();
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
                'Session Type': sessionType,
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
            'Number Of Levels Created': 1,
            'Tree Depth': depth.toString()
        });
    }
    catch (e) { }
});

$(document).ready(function () {
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
                'Session Type': sessionType,
                'Number Of History States Popped': 1
            });
        }
        catch (e) { }
    });