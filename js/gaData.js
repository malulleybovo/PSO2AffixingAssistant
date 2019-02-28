const gaLabels = Object.freeze({
    'Number Of Sessions': 'metric1',
    'Session Type': 'dimension1',
    'Time Spent In App': 'metric2',
    'Time Spent In View': 'metric3',
    'View Type': 'dimension2',
    'Transaction Type': 'dimension3',
    'Number Of Affix Requests': 'metric4',
    'Affix Type (Upslot)': 'dimension4',
    'Affix Type (Spread)': 'dimension5',
    'Affix Origin': 'dimension6',
    'Number Of Abilities Selected': 'metric5',
    'Selection Type': 'dimension7',
    'Selection Medium': 'dimension8',
    'Number Of Links Used': 'metric6',
    'Link Type': 'dimension9',
    'Number Of Interfaces Used': 'metric7',
    'Interface Type': 'dimension10',
    'Number Of History States Popped': 'metric8',
    'Number Of Levels Created': 'metric9',
    'Tree Depth': 'dimension11',
    'Number of Themes Used': 'metric10',
    'Theme Type': 'dimension12',
    'Ratings Given': 'metric11',
    'Rating Value': 'dimension13',
    'Rating Description': 'dimension14'
});

const gaEvts = Object.freeze({
    locations: {
        main: 'Main View',
        affix: 'Choose Affix View',
        method: 'Choose Method View',
        share: 'Share Link View',
        formula: 'Formula Sheet View',
        wishlist: 'Fodder Wish List'
    },
    actions: {
        confirm: 'Confirm',
        cancel: 'Cancel',
        close: 'Close',
        select: 'Select',
        buttonClick: 'Button Click',
        dropdownChange: 'Dropdown Change',
        checkboxCheck: 'Checkbox Check',
        entry: 'Entry'
    }
});

const gaRequests = Object.freeze({
    create: function () {
        try {
            if (ga && typeof ga === 'function')
                ga('create', 'UA-127916812-1', 'auto');
        } catch (e) { }
    },
    send: function (location, action, rawData) {
        try {
            if (ga && typeof ga === 'function' && gaEvts.locations[location] && gaEvts.actions[action]) {
                let data = {};
                let hasContent = false;
                if (rawData && typeof rawData === 'object') {
                    for (var key in rawData) {
                        let value = rawData[key];
                        if (key && value && gaLabels[key]) {
                            let dimensionOrMetric = gaLabels[key];
                            if (dimensionOrMetric.startsWith('dimension') && typeof value !== 'string') continue;
                            if (dimensionOrMetric.startsWith('metric') && typeof value !== 'number') continue;
                            data[gaLabels[key]] = value;
                            hasContent = true;
                        }
                    }
                }
                if (hasContent) {
                    ga('send', 'event', gaEvts.locations[location], gaEvts.actions[action], data);
                }
                else {
                    ga('send', 'event', gaEvts.locations[location], gaEvts.actions[action]);
                }
            }
        } catch (e) { }
    },
    sendException: function (errMsg, isFatal) {
        try {
            if (ga && typeof ga === 'function' && gaEvts.locations[location] && gaEvts.actions[action]) {
                ga('send', 'exception', {
                    'exDescription': errMsg,
                    'exFatal': (isFatal) ? true : false
                });
            }
        } catch (e) { }
    }
});