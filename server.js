/**
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

const express = require("express");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const app = express();
let server = null;
let url = null;

rl.question(`Choose which environment to run on:
- Debug: press D
- Release: press R
`, function(input) {
    if (input === "R" || input === "r") {
        run(false);
    } else if (input === "D" || input === "d") {
        run(true);
    }
});

function run(debugMode) {
    app.get("/", (req, res) => {
        res.sendFile(debugMode ? 'index.debug.html' : 'index.html', { root: __dirname });
    });

    app.use(express.static(__dirname));

    server = app.listen(8080, () => {
        console.log(`Application running on ${debugMode ? "debug" : "release"} mode at: http://localhost:${server.address().port}`);
        requestOpenApplication(`http://localhost:${server.address().port}`);
    });
}

function requestOpenApplication(url) {
    rl.question(`Would you like to open the application in the default browser? (Y/N)\n`, function (input) {
        if (input === "Y" || input === "y") {
            var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
            require('child_process').exec(start + ' ' + url);
        } else if (input === "N" || input === "n") {
            return
        }
    });
}