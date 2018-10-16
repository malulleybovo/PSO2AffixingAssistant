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
    let structure = {
        node: (new PageTreeNode(true)).setPage(
            (new Page()).addFodders(
                (new Fodder()).addAffixes([
                    ASSISTANT.affixDB['AA05'].abilityRef,
                    ASSISTANT.affixDB['AC04'].abilityRef,
                    ASSISTANT.affixDB['TK11'].abilityRef
                ])
            )
        )
            .addRateBoostOptions(ASSISTANT.getRateBoostOptions())
            .addPotentialOptions(ASSISTANT.getPotentialOptions())
            .addPageTreeNodes(
            (new PageTreeNode()).setPage(
                (new Page()).addFodders([
                    (new Fodder()).addAffixes([
                        ASSISTANT.affixDB['AA05'].abilityRef,
                        ASSISTANT.affixDB['AC04'].abilityRef,
                        ASSISTANT.affixDB['TK11'].abilityRef
                    ]),
                    (new Fodder()).addAffixes([
                        ASSISTANT.affixDB['AA05'].abilityRef,
                        ASSISTANT.affixDB['AC04'].abilityRef,
                        ASSISTANT.affixDB['TK11'].abilityRef
                    ]),
                    (new Fodder()).addAffixes([
                        ASSISTANT.affixDB['AA05'].abilityRef,
                        ASSISTANT.affixDB['AC04'].abilityRef,
                        ASSISTANT.affixDB['TK11'].abilityRef
                    ]),
                    (new Fodder()).addAffixes([
                        ASSISTANT.affixDB['AA05'].abilityRef,
                        ASSISTANT.affixDB['AC04'].abilityRef,
                        ASSISTANT.affixDB['TK11'].abilityRef
                    ]),
                    (new Fodder()).addAffixes([
                        ASSISTANT.affixDB['AA05'].abilityRef,
                        ASSISTANT.affixDB['AC04'].abilityRef,
                        ASSISTANT.affixDB['TK11'].abilityRef
                    ]),
                    (new Fodder()).addAffixes([
                        ASSISTANT.affixDB['AA05'].abilityRef,
                        ASSISTANT.affixDB['AC04'].abilityRef,
                        ASSISTANT.affixDB['TK11'].abilityRef
                    ]),
                ])
            )
                .addPageTreeNodes([
                    (new PageTreeNode()).setPage(
                        (new Page()).addFodders([
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ]),
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ]),
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ]),
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ]),
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ]),
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ]),
                        ])
                    ),
                    (new PageTreeNode()).setPage(
                        (new Page()).addFodders(
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ])
                        ).setSameGear(true)
                    ),
                    (new PageTreeNode()).setPage(
                        (new Page()).addFodders(
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ])
                        ).setPotentialIdx(2)
                    ),
                    (new PageTreeNode()).setPage(
                        (new Page()).addFodders(
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ])
                        ).setRateBoostIdx(4)
                    ),
                    (new PageTreeNode()).setPage(
                        (new Page()).addFodders(
                            (new Fodder()).addAffixes([
                                ASSISTANT.affixDB['AA05'].abilityRef,
                                ASSISTANT.affixDB['AC04'].abilityRef,
                                ASSISTANT.affixDB['TK11'].abilityRef
                            ])
                        )
                    )
                ]).connectFodderAtToPageAt(0, 0)
                .connectFodderAtToPageAt(1, 1)
                .connectFodderAtToPageAt(2, 3)
                .connectFodderAtToPageAt(3, 2)
                .connectFodderAtToPageAt(4, 4)
                .connectFodderAtToPageAt(5, 5) // Failure on this one is correct
            ).connectFodderAtToPageAt(0, 0)
    }
    VIEW_CONTROLLER.assistant.pageTreeRoot = structure.node;
    VIEW_CONTROLLER.updateView();
    VIEW_CONTROLLER.centerViewAtNode('#goal');
});

$(window).resize(function () {
    VIEW_CONTROLLER.updateConnections();
})