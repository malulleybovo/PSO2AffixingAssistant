/**
 * PSO2 Affixing Assistant
 * 
 * @author malulleybovo (2018)
 */

let abilityMap = parseAffixData(data);


$(document).ready(function () {
    $('div.container').width(4200);
    setTimeout(function () {
        let $main = $('div.page:first');
        $('#editor').scrollLeft($main.offset().left - ($(window).width() - $main.width()) / 2);
        $('div[data-conn=1]').connections();
        $('connection:not([data-conn])').attr('data-conn', 1);
        $('div[data-conn=2]').connections();
        $('connection:not([data-conn])').attr('data-conn', 2);
        $('div[data-conn=3]').connections();
        $('connection:not([data-conn])').attr('data-conn', 3);
    }, 1);
    $('div.fodder').hover(spotlightIn, spotlightOut);
    $("#mastercontainer").panzoom({
        which: 3,
        minScale: 0.5,
        maxScale: 2,
        $zoomRange: $("#zoomcontroller"),
        onChange: function (e, panzoom, transform) {
            $('div.page, div.fodder').connections('update');
        }
    });
    $('#panzoomreset').click(function () {
        $("#mastercontainer").panzoom('reset', { animate: false });
    })
    printAbilityMap(abilityMap);
});

$(window).resize(function () {
    $('div.page, div.fodder').connections('update');
})

var timeout;
function spotlightIn(ev) {
    if (timeout) clearTimeout(timeout);
    let connNum = $(ev.currentTarget).attr('data-conn');
    timeout = setTimeout(function () {
        if (connNum) {
            let $t = $('div[data-conn=' + connNum + ']');
            $('div.page').not($t).addClass('spotlight');
            $('div.fodder').not($t.children()).not($(ev.currentTarget)).addClass('spotlight');
            $('connection:not([data-conn=' + connNum + '])').addClass('spotlight');
        }
    }, 500);
}

function spotlightOut(ev) {
    if (timeout) clearTimeout(timeout);
    let connNum = $(ev.currentTarget).attr('data-conn');
    if (connNum) {
        let $t = $('div[data-conn=' + connNum + ']');
        $('div.page').not($t).removeClass('spotlight');
        $('div.fodder').not($t.children()).not($(ev.currentTarget)).removeClass('spotlight');
        $('connection:not([data-conn=' + connNum + '])').removeClass('spotlight');
    }
}