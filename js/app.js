/**
 * PSO2 Affixing Assistant
 * 
 * @author malulleybovo (2018)
 */

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
            .addRateBoostOptions(['+5%', '+10%', '+20%', '+30%', '+40%', '+45%'])
            .addPotentialOptions(['+2%', '+5%', '+10%'])
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
    $('#startnew').click(() => VIEW_CONTROLLER.setAffixSelectionView(true));
});

$(window).resize(function () {
    VIEW_CONTROLLER.updateConnections();
})