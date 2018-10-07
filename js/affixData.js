let data = {
    lastModified: "2017-11-10 19:45:00(CET)",
    optionList: {
        support: [
            {
                id: "Nothing",
                name: "None",
                value: "A01",
                fn: function (a) {
                    return a
                }
            },
            {
                id: "Ability Success Rate +5%",
                name: "+5%",
                value: "A02",
                fn: function (a) {
                    return Math.min(a + 5, 100)
                }
            },
            {
                id: "Ability Success Rate +10%",
                name: "+10%",
                value: "A03",
                fn: function (a) {
                    return Math.min(a + 10, 100)
                }
            },
            {
                id: "Ability Success Rate +20%",
                name: "+20%",
                value: "A04",
                fn: function (a) {
                    return Math.min(a + 20, 100)
                }
            },
            {
                id: "Ability Success Rate +30%",
                name: "+30%",
                value: "A05",
                fn: function (a) {
                    return Math.min(a + 30, 100)
                }
            },
            {
                id: "Ability Success Rate +40%",
                name: "+40%",
                value: "A06",
                fn: function (a) {
                    return Math.min(a + 40, 100)
                }
            },
            {
                id: "Ability Success Rate +45%",
                name: "+45%",
                value: "A07",
                fn: function (a) {
                    return Math.min(a + 45, 100)
                }
            }
        ],
        additional: [
            {
                id: "Nothing",
                value: "B01"
            },
            {
                id: "Add Special Ability （HP）",
                name: "Stamina Boost",
                value: "B02",
                extend: 100,
                effect: "HP(+45)"
            },
            {
                id: "Add Special Ability （PP）",
                name: " Spirita Boost",
                value: "B03",
                extend: 100,
                effect: "PP(+5)"
            },
            {
                id: "Add Special Ability （S-ATK）",
                name: "Power Boost",
                value: "B04",
                extend: 100,
                effect: "S-ATK(+25)"
            },
            {
                id: "Add Special Ability （R-ATK）",
                name: "Shoot Boost",
                value: "B05",
                extend: 100,
                effect: "R-ATK(+25)"
            },
            {
                id: "Add Special Ability （T-ATK）",
                name: "Technique Boost",
                value: "B06",
                extend: 100,
                effect: "T-ATK(+25)"
            },
            {
                id: "Add Special Ability （Tenora）",
                name: "Tenora Boost",
                value: "B0a",
                extend: 100,
                effect: "S-ATK(+35)"
            },
            {
                id: "Add Special Ability （GRM）",
                name: "GRM Boost",
                value: "B0b",
                extend: 100,
                effect: "R-ATK(+35)"
            },
            {
                id: "Add Special Ability （Yohmei）",
                name: "Yohmei Boost",
                value: "B0c",
                extend: 100,
                effect: "T-ATK(+35)"
            },
            {
                id: "Add Special Ability （HP&PP）",
                name: "Noble Stamina",
                value: "B10",
                extend: 100,
                effect: "HP(+50),PP(+3)"
            },
            {
                id: "Add Special Ability （HP&PP/2）",
                name: "Elegant Stamina",
                value: "B14",
                extend: 100,
                effect: "HP(+70),PP(+4)"
            },
            {
                id: "Add Special Ability （HP&PP/3）",
                name: "Grace Stamina",
                value: "B51",
                extend: 100,
                effect: "HP(+80),PP(+5)"
            },
            {
                id: "Add Special Ability （S-ATK&PP）",
                name: "Noble Power",
                value: "B07",
                extend: 100,
                effect: "S-ATK(+30),PP(+3)"
            },
            {
                id: "Add Special Ability （S-ATK&PP/2）",
                name: "Elegant Power",
                value: "B11",
                extend: 100,
                effect: "S-ATK(+40),PP(+4)"
            },
            {
                id: "Add Special Ability （S-ATK&PP/3）",
                name: "Grace Power",
                value: "B52",
                extend: 100,
                effect: "S-ATK(+50),PP(+5)"
            },
            {
                id: "Add Special Ability （R-ATK&PP）",
                name: "Noble Shot",
                value: "B08",
                extend: 100,
                effect: "R-ATK(+30),PP(+3)"
            },
            {
                id: "Add Special Ability （R-ATK&PP/2）",
                name: "Elegant Shot",
                value: "B12",
                extend: 100,
                effect: "R-ATK(+40),PP(+4)"
            },
            {
                id: "Add Special Ability （R-ATK&PP/3）",
                name: "Grace Shot",
                value: "B53",
                extend: 100,
                effect: "R-ATK(+50),PP(+5)"
            },
            {
                id: "Add Special Ability （T-ATK&PP）",
                name: "Noble Technique",
                value: "B09",
                extend: 100,
                effect: "T-ATK(+30),PP(+3)"
            },
            {
                id: "Add Special Ability （T-ATK&PP/2）",
                name: "Elegant Technique",
                value: "B13",
                extend: 100,
                effect: "T-ATK(+40),PP(+4)"
            },
            {
                id: "Add Special Ability （T-ATK&PP/3）",
                name: "Grace Technique",
                value: "B54",
                extend: 100,
                effect: "T-ATK(+50),PP(+5)"
            },
            {
                id: "Add Special Ability （Offense Focus） ",
                name: "Offense Boost",
                value: "B20",
                extend: 100,
                effect: "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)"
            },
            {
                id: "Add Special Ability （Defense Focus）",
                name: "Defense Boost",
                value: "B21",
                extend: 100,
                effect: "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)"
            },
            {
                id: "Add Special Ability （Attack Inherit）",
                name: "Attack Receptor",
                value: "B30",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                id: "Add Special Ability （Defense Inherit）",
                name: "Guard  Receptor",
                value: "B31",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                id: "Add Special Ability （Photon Inherit）",
                name: "Photon Receptor",
                value: "B32",
                extend: 100,
                effect: "ALL(+5)"
            }
        ],
        potential: [
            {
                id: "Nothing",
                name: "Nothing",
                value: "C01",
                fn: function (a) {
                    return a
                }
            },
            {
                id: "Guidance of Life Lv1 (+2%)",
                name: "+2%",
                value: "C11",
                fn: function (a) {
                    return Math.min(a + 2,
                        100)
                }
            },
            {
                id: "Guidance of Life Lv2 (+5%)",
                name: "+6%",
                value: "C12",
                fn: function (a) {
                    return Math.min(a + 6,
                        100)
                }
            },
            {
                id: "Guidance of Life Lv3 (+10%)",
                name: "+10%",
                value: "C13",
                fn: function (a) {
                    return Math.min(a + 10,
                        100)
                }
            }
        ]
    },
    excludePattern: {
        addition: [
            "J",
            [
                "R",
                "S"
            ],
            [
                "TB",
                "TC",
                "TL"
            ],
            [
                "VA",
                "VC"
            ],
            [
                "VA",
                "VB"
            ],
            [
                "VB",
                "VC"
            ],
            [
                "TA",
                "UA",
                "UB"
            ],
            [
                "YA",
                "UC"
            ]
        ],
        select: [
            "J*",
            "R*",
            [
                "S*",
                "R*"
            ],
            [
                "TA*",
                "UA*",
                "UB*"
            ],
            [
                "TB*",
                "TC*",
                "TL*"
            ],
            [
                "VA*",
                "VC*"
            ],
            [
                "VA*",
                "VB*"
            ],
            [
                "VB*",
                "VC*"
            ],
            [
                "YA*",
                "UC*"
            ]
        ]
    },
    extendAbility: [
        {
            base: [
                "AA01",
                "AB01",
                "AC01"
            ],
            ref: "FA01",
            success: 80
        },
        {
            base: [
                "AA02",
                "AB02",
                "AC02"
            ],
            ref: "FA02",
            success: 70
        },
        {
            base: [
                "AA03",
                "AB03",
                "AC03"
            ],
            ref: "FA03",
            success: 60
        },
        {
            base: [
                "BA01",
                "BB01",
                "BC01"
            ],
            ref: "FA01",
            success: 80
        },
        {
            base: [
                "BA02",
                "BB02",
                "BC02"
            ],
            ref: "FA02",
            success: 70
        },
        {
            base: [
                "BA03",
                "BB03",
                "BC03"
            ],
            ref: "FA03",
            success: 60
        },
        {
            base: [
                "HA01",
                "HB01",
                "HC01"
            ],
            ref: "HZ01",
            success: 80
        },
        {
            base: [
                "HA02",
                "HB02",
                "HC02"
            ],
            ref: "HZ02",
            success: 70
        },
        {
            base: [
                "HA03",
                "HB03",
                "HC03"
            ],
            ref: "HZ03",
            success: 60
        },
        {
            base: [
                "HI01",
                "HJ01",
                "HK01"
            ],
            ref: "HZ01",
            success: 80
        },
        {
            base: [
                "HI02",
                "HJ02",
                "HK02"
            ],
            ref: "HZ02",
            success: 70
        },
        {
            base: [
                "HI03",
                "HJ03",
                "HK03"
            ],
            ref: "HZ03",
            success: 60
        },
        {
            base: [
                "HL01",
                "HM01",
                "HN01"
            ],
            ref: "HZ01",
            success: 80
        },
        {
            base: [
                "HL02",
                "HM02",
                "HN02"
            ],
            ref: "HZ02",
            success: 70
        },
        {
            base: [
                "HL03",
                "HM03",
                "HN03"
            ],
            ref: "HZ03",
            success: 60
        },
        {
            base: [
                "TD0F",
                "TD0F"
            ],
            ref: "TL01",
            success: 40
        },
        {
            base: [
                "TD0F",
                "TD0F",
                "TD0F"
            ],
            ref: "TL01",
            success: 60
        },
        {
            base: [
                "XA01",
                "R*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XA01",
                "SB*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XA01",
                "SH*"
            ],
            ref: "$$",
            success: 50
        },
        {
            base: [
                "XA01",
                "SA01"
            ],
            ref: "SA01",
            success: 10
        },
        {
            base: [
                "XB01",
                "UA*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XB01",
                "UB*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XD01",
                "YA*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XD01",
                "UC*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XE01",
                "YB*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XF01",
                "TG*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XF01",
                "TG31"
            ],
            ref: "TG31",
            success: 10
        },
        {
            base: [
                "RP55",
                "RC23",
                "ROC2",
                "RQ01",
                "RI22"
            ],
            ref: "VJ01",
            success: 10
        },
        {
            base: [
                "VJ01",
                "VJ01",
                "VJ01",
                "VJ01",
                "RZ01"
            ],
            ref: "SA01",
            success: 60
        },
        {
            base: [
                "TG02",
                "TG03",
                "TG04"
            ],
            ref: "VJ11",
            success: 10
        },
        {
            base: [
                "SB01",
                "SB02"
            ],
            ref: "SA11",
            success: 10
        },
        {
            base: [
                "SB01",
                "SB03"
            ],
            ref: "SA11",
            success: 10
        },
        {
            base: [
                "SB02",
                "SB03"
            ],
            ref: "SA11",
            success: 10
        },
        {
            base: [
                "XA01",
                "SA11"
            ],
            ref: "SA11",
            success: 100
        },
        {
            base: [
                "VJ11",
                "VJ11",
                "VJ11",
                "VJ11",
                "SA11"
            ],
            ref: "TG31",
            success: 60
        },
        {
            base: [
                "SB*",
                "RA11"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RA15"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RA21"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RA23"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RB22"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RC13"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RH21"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RH23"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RI23"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "RJ22"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "ROA2"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "ROC1"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "SB*",
                "ROE1"
            ],
            ref: [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            success: 70
        },
        {
            base: [
                "LP05",
                "LM05"
            ],
            ref: "LP06",
            success: 50
        },
        {
            base: [
                "LS05",
                "LM05"
            ],
            ref: "LS06",
            success: 50
        },
        {
            base: [
                "LT05",
                "LM05"
            ],
            ref: "LT06",
            success: 50
        },
        {
            base: [
                "LP05",
                "LA05"
            ],
            ref: "LP07",
            success: 50
        },
        {
            base: [
                "LS05",
                "LA05"
            ],
            ref: "LS07",
            success: 50
        },
        {
            base: [
                "LT05",
                "LA05"
            ],
            ref: "LT07",
            success: 50
        },
        {
            base: [
                "XI30",
                "AA05"
            ],
            ref: "AA05",
            success: 100
        },
        {
            base: [
                "XI30",
                "AB05"
            ],
            ref: "AB05",
            success: 100
        },
        {
            base: [
                "XI30",
                "AC05"
            ],
            ref: "AC05",
            success: 100
        },
        {
            base: [
                "XI30",
                "AD05"
            ],
            ref: "AD05",
            success: 100
        },
        {
            base: [
                "XI31",
                "BA05"
            ],
            ref: "BA05",
            success: 100
        },
        {
            base: [
                "XI31",
                "BB05"
            ],
            ref: "BB05",
            success: 100
        },
        {
            base: [
                "XI31",
                "BC05"
            ],
            ref: "BC05",
            success: 100
        },
        {
            base: [
                "XI32",
                "EA05"
            ],
            ref: "EA05",
            success: 100
        },
        {
            base: [
                "XI32",
                "EB05"
            ],
            ref: "EB05",
            success: 100
        }
    ],
    extraSlot: [
        {
            "false": 100,
            "true": 100
        },
        {
            "false": 85,
            "true": 90
        },
        {
            "false": 75,
            "true": 85
        },
        {
            "false": 60,
            "true": 70
        },
        {
            "false": 50,
            "true": 60
        },
        {
            "false": 45,
            "true": 55
        },
        {
            "false": 35,
            "true": 40
        },
        {
            "false": 30,
            "true": 30
        },
        {
            "false": 25,
            "true": 25
        }
    ],
    boostPoint: {
        photon: {
            create: {
                "2": [
                    0,
                    0,
                    0,
                    100,
                    70,
                    50
                ],
                "3": [
                    0,
                    0,
                    0,
                    100,
                    70,
                    50
                ]
            }
        },
        mutation1: {
            create: {
                "1": [
                    0,
                    0,
                    0,
                    30,
                    0,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    30,
                    0,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    40,
                    0,
                    0
                ]
            }
        },
        mutation2: {
            create: {
                "1": [
                    0,
                    0,
                    0,
                    40,
                    30,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    40,
                    30,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    50,
                    30,
                    0
                ]
            }
        },
        soul: {
            create: {
                "1": [
                    0,
                    0,
                    0,
                    20,
                    20,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    20,
                    20,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    30,
                    20,
                    0
                ],
                "4": [
                    0,
                    0,
                    0,
                    10,
                    10,
                    0
                ]
            },
            extend: {
                "1": [
                    0,
                    0,
                    0,
                    20,
                    0,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    20,
                    0,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    60,
                    0,
                    0
                ],
                "4": [
                    0,
                    0,
                    0,
                    10,
                    10,
                    0
                ],
                "6": [
                    20
                ],
                "7": [
                    10
                ]
            }
        },
        doom: {
            create: {
                "5": [
                    0,
                    0,
                    0,
                    20
                ]
            },
            extend: {
                "5": [
                    0,
                    0,
                    0,
                    20
                ]
            }
        },
        extreme: {
            extend: {
                "1": [
                    0,
                    0,
                    0,
                    0,
                    {
                        max: 80,
                        boost: 20
                    },
                    {
                        max: 60,
                        boost: 20
                    }
                ]
            }
        }
    },
    sameBonusBoost: [
        1,
        1.1,
        1.15
    ],
    abilityList: [
        {
            code: "AA01",
            gid: "A",
            name: "Power I",
            lvup: "AA02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "S-ATK(+10)"
        },
        {
            code: "AA02",
            gid: "A",
            name: "Power II",
            lvup: "AA03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "S-ATK(+20)"
        },
        {
            code: "AA03",
            gid: "A",
            name: "Power III",
            lvup: "AA04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "S-ATK(+30)"
        },
        {
            code: "AA04",
            gid: "A",
            name: "Power IV",
            lvup: "AA05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "S-ATK(+35)"
        },
        {
            code: "AA05",
            gid: "A",
            name: "Power V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "S-ATK(+40)"
        },
        {
            code: "AA06",
            gid: "A+++",
            name: "Power VI",
            status: 1,
            effect: "S-ATK(+45)"
        },
        {
            code: "AB01",
            gid: "A",
            name: "Shoot I",
            lvup: "AB02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "R-ATK(+10)"
        },
        {
            code: "AB02",
            gid: "A",
            name: "Shoot II",
            lvup: "AB03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "R-ATK(+20)"
        },
        {
            code: "AB03",
            gid: "A",
            name: "Shoot III",
            lvup: "AB04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "R-ATK(+30)"
        },
        {
            code: "AB04",
            gid: "A",
            name: "Shoot IV",
            lvup: "AB05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "R-ATK(+35)"
        },
        {
            code: "AB05",
            gid: "A",
            name: "Shoot V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "R-ATK(+40)"
        },
        {
            code: "AB06",
            gid: "A+++",
            name: "Shoot VI",
            status: 1,
            effect: "R-ATK(+45)"
        },
        {
            code: "AC01",
            gid: "A",
            name: "Technique I",
            lvup: "AC02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "T-ATK(+10)"
        },
        {
            code: "AC02",
            gid: "A",
            name: "Technique II",
            lvup: "AC03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "T-ATK(+20)"
        },
        {
            code: "AC03",
            gid: "A",
            name: "Technique III",
            lvup: "AC04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "T-ATK(+30)"
        },
        {
            code: "AC04",
            gid: "A",
            name: "Technique IV",
            lvup: "AC05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "T-ATK(+35)"
        },
        {
            code: "AC05",
            gid: "A",
            name: "Technique V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "T-ATK(+40)"
        },
        {
            code: "AC06",
            gid: "A+++",
            name: "Technique VI",
            status: 1,
            effect: "T-ATK(+45)"
        },
        {
            code: "AD01",
            gid: "A",
            name: "Arm I",
            lvup: "AD02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "DEX(+10)"
        },
        {
            code: "AD02",
            gid: "A",
            name: "Arm II",
            lvup: "AD03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "DEX(+20)"
        },
        {
            code: "AD03",
            gid: "A",
            name: "Arm III",
            lvup: "AD04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "DEX(+30)"
        },
        {
            code: "AD04",
            gid: "A",
            name: "Arm IV",
            lvup: "AD05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "DEX(+35)"
        },
        {
            code: "AD05",
            gid: "A",
            name: "Arm V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "DEX(+40)"
        },
        {
            code: "BA01",
            gid: "A",
            name: "Body I",
            lvup: "BA02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "S-DEF(+10)"
        },
        {
            code: "BA02",
            gid: "A",
            name: "Body II",
            lvup: "BA03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "S-DEF(+20)"
        },
        {
            code: "BA03",
            gid: "A",
            name: "Body III",
            lvup: "BA04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "S-DEF(+30)"
        },
        {
            code: "BA04",
            gid: "A",
            name: "Body IV",
            lvup: "BA05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "S-DEF(+35)"
        },
        {
            code: "BA05",
            gid: "A",
            name: "Body V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "S-DEF(+40)"
        },
        {
            code: "BB01",
            gid: "A",
            name: "React I",
            lvup: "BB02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "R-DEF(+10)"
        },
        {
            code: "BB02",
            gid: "A",
            name: "React II",
            lvup: "BB03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "R-DEF(+20)"
        },
        {
            code: "BB03",
            gid: "A",
            name: "React III",
            lvup: "BB04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "R-DEF(+30)"
        },
        {
            code: "BB04",
            gid: "A",
            name: "React IV",
            lvup: "BB05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "R-DEF(+35)"
        },
        {
            code: "BB05",
            gid: "A",
            name: "React V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "R-DEF(+40)"
        },
        {
            code: "BC01",
            gid: "A",
            name: "Mind I",
            lvup: "BC02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "T-DEF(+10)"
        },
        {
            code: "BC02",
            gid: "A",
            name: "Mind II",
            lvup: "BC03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "T-DEF(+20)"
        },
        {
            code: "BC03",
            gid: "A",
            name: "Mind III",
            lvup: "BC04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "T-DEF(+30)"
        },
        {
            code: "BC04",
            gid: "A",
            name: "Mind IV",
            lvup: "BC05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "T-DEF(+35)"
        },
        {
            code: "BC05",
            gid: "A",
            name: "Mind V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "T-DEF(+40)"
        },
        {
            code: "EA01",
            gid: "A",
            name: "Stamina I",
            lvup: "EA02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "HP(+20)"
        },
        {
            code: "EA02",
            gid: "A",
            name: "Stamina II",
            lvup: "EA03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "HP(+40)"
        },
        {
            code: "EA03",
            gid: "A",
            name: "Stamina III",
            lvup: "EA04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "HP(+50)"
        },
        {
            code: "EA04",
            gid: "A",
            name: "Stamina IV",
            lvup: "EA05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "HP(+60)"
        },
        {
            code: "EA05",
            gid: "A",
            name: "Stamina V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "HP(+70)"
        },
        {
            code: "EB01",
            gid: "A",
            name: "Spirita I",
            lvup: "EB02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "PP(+2)"
        },
        {
            code: "EB02",
            gid: "A",
            name: "Spirita II",
            lvup: "EB03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "PP(+3)"
        },
        {
            code: "EB03",
            gid: "A",
            name: "Spirita III",
            lvup: "EB04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "PP(+4)"
        },
        {
            code: "EB04",
            gid: "A",
            name: "Spirita IV",
            lvup: "EB05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "PP(+5)"
        },
        {
            code: "EB05",
            gid: "A",
            name: "Spirita V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "PP(+6)"
        },
        {
            code: "EB06",
            gid: "A+++",
            name: "Spirita VI",
            status: 1,
            effect: "PP(+7)"
        },
        {
            code: "FA01",
            gid: "A++",
            name: "Ability I",
            extend: [
                100,
                100,
                100
            ],
            status: 5,
            effect: "ALL(+5)"
        },
        {
            code: "FA02",
            gid: "A++",
            name: "Ability II",
            extend: [
                20,
                40,
                60
            ],
            status: 5,
            effect: "ALL(+10)"
        },
        {
            code: "FA03",
            gid: "A++",
            name: "Ability III",
            extend: [
                10,
                30,
                50
            ],
            status: 5,
            effect: "ALL(+15)"
        },
        {
            code: "FA04",
            gid: "A+++",
            name: "Ability IV",
            effect: "ALL(+20)"
        },
        {
            code: "HA01",
            gid: "B",
            name: "Blow Resist I",
            lvup: "HA02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "Strike Resist(+3)"
        },
        {
            code: "HA02",
            gid: "B",
            name: "Blow Resist II",
            lvup: "HA03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "Strike Resist(+4)"
        },
        {
            code: "HA03",
            gid: "B",
            name: "Blow Resist III",
            lvup: "HA04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "Strike Resist(+5)"
        },
        {
            code: "HA04",
            gid: "B",
            name: "Blow Resist IV",
            lvup: "HA05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "Strike Resist(+6)"
        },
        {
            code: "HA05",
            gid: "B",
            name: "Blow Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "Strike Resist(+7)"
        },
        {
            code: "HB01",
            gid: "B",
            name: "Shot Resist I",
            lvup: "HB02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "Range Resist(+3)"
        },
        {
            code: "HB02",
            gid: "B",
            name: "Shot Resist II",
            lvup: "HB03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "Range Resist(+4)"
        },
        {
            code: "HB03",
            gid: "B",
            name: "Shot Resist III",
            lvup: "HB04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "Range Resist(+5)"
        },
        {
            code: "HB04",
            gid: "B",
            name: "Shot Resist IV",
            lvup: "HB05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "Range Resist(+6)"
        },
        {
            code: "HB05",
            gid: "B",
            name: "Shot Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "Range Resist(+7)"
        },
        {
            code: "HC01",
            gid: "B",
            name: "Mind Resist I",
            lvup: "HC02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "Tech Resist(+3)"
        },
        {
            code: "HC02",
            gid: "B",
            name: "Mind Resist II",
            lvup: "HC03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 1,
            effect: "Tech Resist(+4)"
        },
        {
            code: "HC03",
            gid: "B",
            name: "Mind Resist III",
            lvup: "HC04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 1,
            effect: "Tech Resist(+5)"
        },
        {
            code: "HC04",
            gid: "B",
            name: "Mind Resist IV",
            lvup: "HC05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 1,
            effect: "Tech Resist(+6)"
        },
        {
            code: "HC05",
            gid: "B",
            name: "Mind Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 1,
            effect: "Tech Resist(+7)"
        },
        {
            code: "HI01",
            gid: "B",
            name: "Fire Resist I",
            lvup: "HI02",
            extend: [
                100,
                100,
                100
            ],
            status: 2,
            effect: "Flame Resist(+3)"
        },
        {
            code: "HI02",
            gid: "B",
            name: "Fire Resist II",
            lvup: "HI03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 2,
            effect: "Flame Resist(+4)"
        },
        {
            code: "HI03",
            gid: "B",
            name: "Fire Resist III",
            lvup: "HI04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 2,
            effect: "Flame Resist(+5)"
        },
        {
            code: "HI04",
            gid: "B",
            name: "Fire Resist IV",
            lvup: "HI05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 2,
            effect: "Flame Resist(+6)"
        },
        {
            code: "HI05",
            gid: "B",
            name: "Fire Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 2,
            effect: "Flame Resist(+7)"
        },
        {
            code: "HJ01",
            gid: "B",
            name: "Ice Resist I",
            lvup: "HJ02",
            extend: [
                100,
                100,
                100
            ],
            status: 2,
            effect: "Ice Resist(+3)"
        },
        {
            code: "HJ02",
            gid: "B",
            name: "Ice Resist II",
            lvup: "HJ03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 2,
            effect: "Ice Resist(+4)"
        },
        {
            code: "HJ03",
            gid: "B",
            name: "Ice Resist III",
            lvup: "HJ04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 2,
            effect: "Ice Resist(+5)"
        },
        {
            code: "HJ04",
            gid: "B",
            name: "Ice Resist IV",
            lvup: "HJ05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 2,
            effect: "Ice Resist(+6)"
        },
        {
            code: "HJ05",
            gid: "B",
            name: "Ice Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 2,
            effect: "Ice Resist(+7)"
        },
        {
            code: "HK01",
            gid: "B",
            name: "Shock Resist I",
            lvup: "HK02",
            extend: [
                100,
                100,
                100
            ],
            status: 2,
            effect: "Lightning Resist(+3)"
        },
        {
            code: "HK02",
            gid: "B",
            name: "Shock Resist II",
            lvup: "HK03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 2,
            effect: "Lightning Resist(+4)"
        },
        {
            code: "HK03",
            gid: "B",
            name: "Shock Resist III",
            lvup: "HK04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 2,
            effect: "Lightning Resist(+5)"
        },
        {
            code: "HK04",
            gid: "B",
            name: "Shock Resist IV",
            lvup: "HK05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 2,
            effect: "Lightning Resist(+6)"
        },
        {
            code: "HK05",
            gid: "B",
            name: "Shock Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 2,
            effect: "Lightning Resist(+7)"
        },
        {
            code: "HL01",
            gid: "B",
            name: "Wind Resist I",
            lvup: "HL02",
            extend: [
                100,
                100,
                100
            ],
            status: 2,
            effect: "Wind Resist(+3)"
        },
        {
            code: "HL02",
            gid: "B",
            name: "Wind Resist II",
            lvup: "HL03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 2,
            effect: "Wind Resist(+4)"
        },
        {
            code: "HL03",
            gid: "B",
            name: "Wind Resist III",
            lvup: "HL04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 2,
            effect: "Wind Resist(+5)"
        },
        {
            code: "HL04",
            gid: "B",
            name: "Wind Resist IV",
            lvup: "HL05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 2,
            effect: "Wind Resist(+6)"
        },
        {
            code: "HL05",
            gid: "B",
            name: "Wind Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 2,
            effect: "Wind Resist(+7)"
        },
        {
            code: "HM01",
            gid: "B",
            name: "Light Resist I",
            lvup: "HM02",
            extend: [
                100,
                100,
                100
            ],
            status: 2,
            effect: "Light Resist(+3)"
        },
        {
            code: "HM02",
            gid: "B",
            name: "Light Resist II",
            lvup: "HM03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 2,
            effect: "Light Resist(+4)"
        },
        {
            code: "HM03",
            gid: "B",
            name: "Light Resist III",
            lvup: "HM04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 2,
            effect: "Light Resist(+5)"
        },
        {
            code: "HM04",
            gid: "B",
            name: "Light Resist IV",
            lvup: "HM05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 2,
            effect: "Light Resist(+6)"
        },
        {
            code: "HM05",
            gid: "B",
            name: "Light Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 2,
            effect: "Light Resist(+7)"
        },
        {
            code: "HN01",
            gid: "B",
            name: "Gloom Resist I",
            lvup: "HN02",
            extend: [
                100,
                100,
                100
            ],
            status: 2,
            effect: "Dark Resist(+3)"
        },
        {
            code: "HN02",
            gid: "B",
            name: "Gloom Resist II",
            lvup: "HN03",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                60,
                80
            ],
            status: 2,
            effect: "Dark Resist(+4)"
        },
        {
            code: "HN03",
            gid: "B",
            name: "Gloom Resist III",
            lvup: "HN04",
            extend: [
                60,
                80,
                100
            ],
            generate: [
                30,
                50
            ],
            status: 2,
            effect: "Dark Resist(+5)"
        },
        {
            code: "HN04",
            gid: "B",
            name: "Gloom Resist IV",
            lvup: "HN05",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                20,
                40
            ],
            status: 2,
            effect: "Dark Resist(+6)"
        },
        {
            code: "HN05",
            gid: "B",
            name: "Gloom Resist V",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                10,
                30
            ],
            status: 2,
            effect: "Dark Resist(+7)"
        },
        {
            code: "HZ01",
            gid: "B",
            name: "All Resist I",
            extend: [
                30,
                50,
                70
            ],
            status: 2,
            effect: "All Resist(+1)"
        },
        {
            code: "HZ02",
            gid: "B",
            name: "All Resist II",
            extend: [
                20,
                40,
                60
            ],
            status: 2,
            effect: "All Resist(+2)"
        },
        {
            code: "HZ03",
            gid: "B",
            name: "All Resist III",
            extend: [
                10,
                30,
                50
            ],
            status: 2,
            effect: "All Resist(+3)"
        },
        {
            code: "HZ04",
            gid: "B",
            name: "All Resist IV",
            status: 2,
            effect: "All Resist(+4)"
        },
        {
            code: "HZ05",
            gid: "B",
            name: "All Resist V",
            status: 2,
            effect: "All Resist(+5)"
        },
        {
            code: "JA01",
            gid: "C",
            name: "Burn I",
            lvup: "JA02",
            extend: [
                60,
                80,
                100
            ],
            status: 3,
            effect: "Grants Burn Lv1"
        },
        {
            code: "JA02",
            gid: "C",
            name: "Burn II",
            lvup: "JA03",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                60,
                80
            ],
            status: 3,
            effect: "Grants Burn Lv2"
        },
        {
            code: "JA03",
            gid: "C",
            name: "Burn III",
            lvup: "JA04",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Burn Lv3"
        },
        {
            code: "JA04",
            gid: "C",
            name: "Burn IV",
            lvup: "JA05",
            extend: [
                20,
                30,
                50
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Burn Lv4"
        },
        {
            code: "JA05",
            gid: "C",
            name: "Burn V",
            extend: [
                10,
                20,
                40
            ],
            generate: [
                10,
                30
            ],
            status: 3,
            effect: "Grants Burn Lv5"
        },
        {
            code: "JB01",
            gid: "C",
            name: "Freeze I",
            lvup: "JB02",
            extend: [
                60,
                80,
                100
            ],
            status: 3,
            effect: "Grants Freeze Lv1"
        },
        {
            code: "JB02",
            gid: "C",
            name: "Freeze II",
            lvup: "JB03",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                60,
                80
            ],
            status: 3,
            effect: "Grants Freeze Lv2"
        },
        {
            code: "JB03",
            gid: "C",
            name: "Freeze III",
            lvup: "JB04",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Freeze Lv3"
        },
        {
            code: "JB04",
            gid: "C",
            name: "Freeze IV",
            lvup: "JB05",
            extend: [
                20,
                30,
                50
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Freeze Lv4"
        },
        {
            code: "JB05",
            gid: "C",
            name: "Freeze V",
            extend: [
                10,
                20,
                40
            ],
            generate: [
                10,
                30
            ],
            status: 3,
            effect: "Grants Freeze Lv5"
        },
        {
            code: "JC01",
            gid: "C",
            name: "Shock I",
            lvup: "JC02",
            extend: [
                60,
                80,
                100
            ],
            status: 3,
            effect: "Grants Shock Lv1"
        },
        {
            code: "JC02",
            gid: "C",
            name: "Shock II",
            lvup: "JC03",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                60,
                80
            ],
            status: 3,
            effect: "Grants Shock Lv2"
        },
        {
            code: "JC03",
            gid: "C",
            name: "Shock III",
            lvup: "JC04",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Shock Lv3"
        },
        {
            code: "JC04",
            gid: "C",
            name: "Shock IV",
            lvup: "JC05",
            extend: [
                20,
                30,
                50
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Shock Lv4"
        },
        {
            code: "JC05",
            gid: "C",
            name: "Shock V",
            extend: [
                10,
                20,
                40
            ],
            generate: [
                10,
                30
            ],
            status: 3,
            effect: "Grants Shock Lv5"
        },
        {
            code: "JD01",
            gid: "C",
            name: "Mirage I",
            lvup: "JD02",
            extend: [
                60,
                80,
                100
            ],
            status: 3,
            effect: "Grants Mirage Lv1"
        },
        {
            code: "JD02",
            gid: "C",
            name: "Mirage II",
            lvup: "JD03",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                60,
                80
            ],
            status: 3,
            effect: "Grants Mirage Lv2"
        },
        {
            code: "JD03",
            gid: "C",
            name: "Mirage III",
            lvup: "JD04",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Mirage Lv3"
        },
        {
            code: "JD04",
            gid: "C",
            name: "Mirage IV",
            lvup: "JD05",
            extend: [
                20,
                30,
                50
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Mirage Lv4"
        },
        {
            code: "JD05",
            gid: "C",
            name: "Mirage V",
            extend: [
                10,
                20,
                40
            ],
            generate: [
                10,
                30
            ],
            status: 3,
            effect: "Grants Mirage Lv5"
        },
        {
            code: "JE01",
            gid: "C",
            name: "Panic I",
            lvup: "JE02",
            extend: [
                60,
                80,
                100
            ],
            status: 3,
            effect: "Grants Panic Lv1"
        },
        {
            code: "JE02",
            gid: "C",
            name: "Panic II",
            lvup: "JE03",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                60,
                80
            ],
            status: 3,
            effect: "Grants Panic Lv2"
        },
        {
            code: "JE03",
            gid: "C",
            name: "Panic III",
            lvup: "JE04",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Panic Lv3"
        },
        {
            code: "JE04",
            gid: "C",
            name: "Panic IV",
            lvup: "JE05",
            extend: [
                20,
                30,
                50
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Panic Lv4"
        },
        {
            code: "JE05",
            gid: "C",
            name: "Panic V",
            extend: [
                10,
                20,
                40
            ],
            generate: [
                10,
                30
            ],
            status: 3,
            effect: "Grants Panic Lv5"
        },
        {
            code: "JF01",
            gid: "C",
            name: "Poison I",
            lvup: "JF02",
            extend: [
                60,
                80,
                100
            ],
            status: 3,
            effect: "Grants Poison Lv1"
        },
        {
            code: "JF02",
            gid: "C",
            name: "Poison II",
            lvup: "JF03",
            extend: [
                40,
                60,
                80
            ],
            generate: [
                60,
                80
            ],
            status: 3,
            effect: "Grants Poison Lv2"
        },
        {
            code: "JF03",
            gid: "C",
            name: "Poison III",
            lvup: "JF04",
            extend: [
                20,
                40,
                60
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Poison Lv3"
        },
        {
            code: "JF04",
            gid: "C",
            name: "Poison IV",
            lvup: "JF05",
            extend: [
                20,
                30,
                50
            ],
            generate: [
                20,
                40
            ],
            status: 3,
            effect: "Grants Poison Lv4"
        },
        {
            code: "JF05",
            gid: "C",
            name: "Poison V",
            extend: [
                10,
                20,
                40
            ],
            generate: [
                10,
                30
            ],
            status: 3,
            effect: "Grants Poison Lv5"
        },
        {
            code: "OA01",
            gid: "A++",
            name: "Mutation I",
            lvup: "OA02",
            extend: [
                0,
                50,
                80
            ],
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+10)"
        },
        {
            code: "OA02",
            gid: "A++",
            name: "Mutation II",
            extend: [
                0,
                50,
                80
            ],
            generate: [
                0,
                10,
                30,
                50
            ],
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+15)"
        },
        {
            code: "RA11",
            gid: "D",
            name: "Gunne Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EA"
            ],
            rel: "soul",
            effect: "S-ATK(+15),<br>HP(+45)",
            cls: "zi-soul"
        },
        {
            code: "RA15",
            gid: "D",
            name: "Zigmor Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "EB",
                "HC",
                "JF"
            ],
            rel: "soul",
            effect: "S-ATK(+15),<br>PP(+4)",
            cls: "zi-soul"
        },
        {
            code: "RA21",
            gid: "D",
            name: "Vol Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EA",
                "JA"
            ],
            rel: "soul",
            effect: "S-ATK(+30),<br>HP(+20)",
            cls: "zi-soul"
        },
        {
            code: "RA22",
            gid: "D",
            name: "Gwana Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "JF"
            ],
            rel: "soul",
            effect: "S-ATK(+30),<br>HP(+10),<br>PP(+2)"
        },
        {
            code: "RA23",
            gid: "D",
            name: "Quartz Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EB",
                "JE"
            ],
            rel: "soul",
            effect: "S-ATK(+30),<br>PP(+3)",
            cls: "zi-soul"
        },
        {
            code: "RA31",
            gid: "D",
            name: "Deadleon Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "S-ATK(+35),<br>DEX(+5),<br>HP(+30)"
        },
        {
            code: "RA32",
            gid: "D",
            name: "Leone Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "S-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "RA33",
            gid: "D",
            name: "Bayari Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "S-ATK(+35),<br>DEX(+5),<br>PP(+3)"
        },
        {
            code: "RB11",
            gid: "D",
            name: "Idetta Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "EA",
                "HA",
                "JB"
            ],
            rel: "soul",
            effect: "R-ATK(+15),<br>HP(+45)"
        },
        {
            code: "RB15",
            gid: "D",
            name: "Madu Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "EB"
            ],
            rel: "soul",
            effect: "R-ATK(+15),<br>PP(+4)"
        },
        {
            code: "RB21",
            gid: "D",
            name: "Ra\'nsa Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "EA",
                "HM"
            ],
            rel: "soul",
            effect: "R-ATK(+30),<br>HP(+20)"
        },
        {
            code: "RB22",
            gid: "D",
            name: "Fang Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "JC"
            ],
            rel: "soul",
            effect: "R-ATK(+30),<br>HP(+10),<br>PP(+2)",
            cls: "zi-soul"
        },
        {
            code: "RB23",
            gid: "D",
            name: "Mizer Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "EB",
                "HB"
            ],
            rel: "soul",
            effect: "R-ATK(+30),<br>PP(+3)"
        },
        {
            code: "RB31",
            gid: "D",
            name: "Leopard Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "R-ATK(+35),<br>DEX(+5),<br>HP(+30)"
        },
        {
            code: "RB32",
            gid: "D",
            name: "Siorg Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "R-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "RB33",
            gid: "D",
            name: "Greuzoras Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "R-ATK(+35),<br>DEX(+5),<br>PP(+3)"
        },
        {
            code: "RC11",
            gid: "D",
            name: "Jhadu Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EA"
            ],
            rel: "soul",
            effect: "T-ATK(+15),<br>HP(+45)"
        },
        {
            code: "RC13",
            gid: "D",
            name: "Nepto Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "EB",
                "HC"
            ],
            rel: "soul",
            effect: "T-ATK(+15),<br>PP(+4)",
            cls: "zi-soul"
        },
        {
            code: "RC21",
            gid: "D",
            name: "Ragne Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EA",
                "HN"
            ],
            rel: "soul",
            effect: "T-ATK(+30),<br>HP(+20)"
        },
        {
            code: "RC22",
            gid: "D",
            name: "Wolga Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "HK"
            ],
            rel: "soul",
            effect: "T-ATK(+30),<br>HP(+10),<br>PP(+2)"
        },
        {
            code: "RC23",
            gid: "D",
            name: "Elder Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EB"
            ],
            rel: "soul",
            effect: "T-ATK(+30),<br>PP(+3)"
        },
        {
            code: "RC31",
            gid: "D",
            name: "Diabo Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "T-ATK(+35),<br>DEX(+5),<br>HP(+30)"
        },
        {
            code: "RC32",
            gid: "D",
            name: "Duvals Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "T-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "RC33",
            gid: "D",
            name: "Guranz Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TA"
            ],
            rel: "soul",
            effect: "T-ATK(+35),<br>DEX(+5),<br>PP(+3)"
        },
        {
            code: "RE13",
            gid: "D",
            name: "Nyau Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD",
                "EB",
                "HA"
            ],
            rel: "soul",
            effect: "DEX(+15),<br>PP(+4)"
        },
        {
            code: "RE21",
            gid: "D",
            name: "Signo Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD",
                "EA",
                "JD"
            ],
            rel: "soul",
            effect: "DEX(+30),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "RE22",
            gid: "D",
            name: "Chrome Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD",
                "EA",
                "EB",
                "JE"
            ],
            rel: "soul",
            effect: "DEX(+30),<br>HP(+10),<br>PP(+3)"
        },
        {
            code: "RE23",
            gid: "D",
            name: "Rappy Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD",
                "EB",
                "HM"
            ],
            rel: "soul",
            effect: "DEX(+30),<br>PP(+4)"
        },
        {
            code: "RE51",
            gid: "D",
            name: "Sinow Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD",
                "EA",
                "JD"
            ],
            rel: "soul",
            effect: "S-ATK(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)"
        },
        {
            code: "RH21",
            gid: "D",
            name: "Snow Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EA",
                "HJ"
            ],
            rel: "soul",
            effect: "S-DEF(+30),<br>HP(+20),<br>PP(+1)",
            cls: "zi-soul"
        },
        {
            code: "RH22",
            gid: "D",
            name: "Rockbear Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "HA"
            ],
            rel: "soul",
            effect: "S-DEF(+30),<br>HP(+10),<br>PP(+3)"
        },
        {
            code: "RH23",
            gid: "D",
            name: "Ex Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EB",
                "HA"
            ],
            rel: "soul",
            effect: "S-DEF(+30),<br>PP(+4)",
            cls: "zi-soul"
        },
        {
            code: "RI21",
            gid: "D",
            name: "Malmo Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "EA",
                "JB"
            ],
            rel: "soul",
            effect: "R-DEF(+30),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "RI22",
            gid: "D",
            name: "Persona Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "JD"
            ],
            rel: "soul",
            effect: "R-DEF(+30),<br>HP(+10),<br>PP(+3)"
        },
        {
            code: "RI23",
            gid: "D",
            name: "Vardha Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "EB",
                "HL"
            ],
            rel: "soul",
            effect: "R-DEF(+30),<br>PP(+4)",
            cls: "zi-soul"
        },
        {
            code: "RJ21",
            gid: "D",
            name: "Cater Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EA",
                "HC",
                "HI"
            ],
            rel: "soul",
            effect: "T-DEF(+30),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "RJ22",
            gid: "D",
            name: "Shrayda Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "HC",
                "JA"
            ],
            rel: "soul",
            effect: "T-DEF(+30),<br>HP(+10),<br>PP(+3)",
            cls: "zi-soul"
        },
        {
            code: "RJ23",
            gid: "D",
            name: "Goron Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EB",
                "HB",
                "HC"
            ],
            rel: "soul",
            effect: "T-DEF(+30),<br>PP(+4)"
        },
        {
            code: "ROA1",
            gid: "D",
            name: "Org Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EA"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>HP(+10)"
        },
        {
            code: "ROA2",
            gid: "D",
            name: "Meduna Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "HJ"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>HP(+5),<br>PP(+1)",
            cls: "zi-soul"
        },
        {
            code: "ROA3",
            gid: "D",
            name: "Soma Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EB",
                "HI"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>PP(+2)"
        },
        {
            code: "ROC1",
            gid: "D",
            name: "Ringa Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EA",
                "HL"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
            cls: "zi-soul"
        },
        {
            code: "ROC2",
            gid: "D",
            name: "Loser Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "ROC3",
            gid: "D",
            name: "Malluda Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AC",
                "BC",
                "EB",
                "JF"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>T-ATK(+20),<br>PP(+2)"
        },
        {
            code: "ROE1",
            gid: "D",
            name: "Bal Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "EA",
                "JB"
            ],
            rel: "soul",
            effect: "R-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
            cls: "zi-soul"
        },
        {
            code: "ROE2",
            gid: "D",
            name: "Vibrace Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "HN"
            ],
            rel: "soul",
            effect: "R-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "ROE3",
            gid: "D",
            name: "Tagami Kazuchi Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AB",
                "BB",
                "EB",
                "JC"
            ],
            rel: "soul",
            effect: "R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)"
        },
        {
            code: "ROG5",
            gid: "D",
            name: "Lili Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "BA",
                "EA",
                "HK"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>S-DEF(+20),<br>HP(+20)"
        },
        {
            code: "RP05",
            gid: "D",
            name: "Cougar Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD"
            ],
            rel: "soul",
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)"
        },
        {
            code: "RP10",
            gid: "D",
            name: "Gryphon Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AA",
                "AB",
                "AC",
                "HZ"
            ],
            rel: "soul",
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)"
        },
        {
            code: "RP15",
            gid: "D",
            name: "Knight Gear Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "AD"
            ],
            rel: "soul",
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>PP(+4)"
        },
        {
            code: "RP22",
            gid: "D",
            name: "Izane Kazuchi Soul",
            extend: [
                0,
                50,
                80
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)"
        },
        {
            code: "RP25",
            gid: "D",
            name: "Anga Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TB"
            ],
            rel: "soul",
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+4)"
        },
        {
            code: "RP55",
            gid: "D",
            name: "Apprentice Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TC"
            ],
            rel: "soul",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40)"
        },
        {
            code: "RPA5",
            gid: "D",
            name: "Magatsu Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "EA",
                "EB"
            ],
            rel: "soul",
            effect: "S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+30),<br>PP(+3)"
        },
        {
            code: "RQ01",
            gid: "D",
            name: "Double Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "JA",
                "JB",
                "JC",
                "JD",
                "JE",
                "JF",
                "TC"
            ],
            rel: "soul",
            effect: "HP(+40),<br>PP(+3)"
        },
        {
            code: "RZ01",
            gid: "D",
            name: "Darkness Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TE"
            ],
            rel: "soul",
            effect: "ALL(+15),<br>HP(+15),<br>PP(+2)"
        },
        {
            code: "SA01",
            gid: "D",
            name: "Astral Soul",
            effect: "ALL(+35),<br>HP(+35),<br>PP(+5)"
        },
        {
            code: "SA11",
            gid: "D",
            name: "Ether Soul",
            extend: [
                0,
                50,
                80
            ],
            effect: "ALL(+15),<br>HP(+15),<br>PP(+2)"
        },
        {
            code: "SB01",
            gid: "D",
            name: "Toh\'oh Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TG02"
            ],
            rel: "soul",
            effect: "ALL(+10)",
            cls: "ef-soul"
        },
        {
            code: "SB02",
            gid: "D",
            name: "Full Vegas Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TG03"
            ],
            rel: "soul",
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15)",
            cls: "ef-soul"
        },
        {
            code: "SB03",
            gid: "D",
            name: "Escarde Soul",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "TG04"
            ],
            rel: "soul",
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>DEX(+20)",
            cls: "ef-soul"
        },
        {
            code: "SB04",
            gid: "D",
            name: "Fabula Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TK01",
                "TK11",
                "TK12",
                "TK13"
            ],
            rel: "soul",
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
            cls: "ef-soul"
        },
        {
            code: "SB05",
            gid: "D",
            name: "Historia Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TK01",
                "TK11",
                "TK12",
                "TK13"
            ],
            rel: "soul",
            effect: "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>PP(+2)",
            cls: "ef-soul"
        },
        {
            code: "SH10",
            gid: "D",
            name: "Act the Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "S-ATK(+35),<br>PP(+3)"
        },
        {
            code: "SH20",
            gid: "D",
            name: "Till the Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "R-ATK(+35),<br>PP(+3)"
        },
        {
            code: "SH30",
            gid: "D",
            name: "Magi the Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "T-ATK(+35),<br>PP(+3)"
        },
        {
            code: "SH40",
            gid: "D",
            name: "Ares the Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>HP(+35),<br>PP(+3)"
        },
        {
            code: "TA01",
            gid: "A++",
            name: "Stigma",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "DEX(+20),<br>PP(+5)"
        },
        {
            code: "TB01",
            gid: "A++",
            name: "Vinculum",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20)"
        },
        {
            code: "TC01",
            gid: "A++",
            name: "Modulator",
            extend: [
                0,
                30,
                80
            ],
            status: 7,
            effect: "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30)"
        },
        {
            code: "TL01",
            gid: "A++",
            name: "ARKS Max",
            extend: [
                0,
                30,
                50
            ],
            effect: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25)"
        },
        {
            code: "TK01",
            gid: "A++",
            name: "Omega Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "TK11",
            gid: "A++",
            name: "Elder Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+40),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(-2)"
        },
        {
            code: "TK12",
            gid: "A++",
            name: "Loser Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+40),<br>HP(-20)"
        },
        {
            code: "TK13",
            gid: "A++",
            name: "Apprezina Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+20),<br>R-ATK(+40),<br>T-ATK(+20),<br>HP(-10),<br>PP(-1)"
        },
        {
            code: "TG02",
            gid: "A++",
            name: "Yamato Factor",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+10),<br>R-ATK(+20),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "TG03",
            gid: "A++",
            name: "Mother Factor",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+20),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "TG04",
            gid: "A++",
            name: "Deus Factor",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+20),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)"
        },
        {
            code: "TG31",
            gid: "A++",
            name: "Ether Factor",
            effect: "ALL(+30),<br>HP(+10),<br>PP(+6)"
        },
        {
            code: "TE01",
            gid: "A++",
            name: "Returner I",
            lvup: "TE02",
            extend: [
                0,
                80,
                100
            ],
            status: 4,
            effect: "ALL(+3),<br>HP(+3),<br>PP(+1)"
        },
        {
            code: "TE02",
            gid: "A++",
            name: "Returner II",
            lvup: "TE03",
            extend: [
                0,
                70,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "ALL(+5),<br>HP(+5),<br>PP(+2)"
        },
        {
            code: "TE03",
            gid: "A++",
            name: "Returner III",
            lvup: "TE04",
            extend: [
                0,
                50,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "ALL(+10),<br>HP(+10),<br>PP(+3)"
        },
        {
            code: "TE04",
            gid: "A++",
            name: "Returner IV",
            lvup: "TE05",
            extend: [
                0,
                40,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "ALL(+15),<br>HP(+15),<br>PP(+4)"
        },
        {
            code: "TE05",
            gid: "A++",
            name: "Returner V",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                20
            ],
            status: 4,
            effect: "ALL(+30),<br>HP(+30),<br>PP(+5)"
        },
        {
            code: "TF01",
            gid: "A++",
            name: "Spirita Alpha",
            extend: [
                30,
                50,
                60,
                80,
                100
            ],
            effect: "DEX(+30),<br>PP(+3)"
        },
        {
            code: "TI01",
            gid: "A++",
            name: "Necky Smile",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>PP(+2)"
        },
        {
            code: "TH01",
            gid: "A++",
            name: "Doom Breaker",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "FA03"
            ],
            rel: "doom",
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>PP(+2)"
        },
        {
            code: "LP01",
            gid: "A+",
            name: "Lesser Power I",
            lvup: "LP02",
            extend: [
                0,
                80,
                100
            ],
            status: 4,
            effect: "S-ATK(+5)"
        },
        {
            code: "LP02",
            gid: "A+",
            name: "Lesser Power II",
            lvup: "LP03",
            extend: [
                0,
                70,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "S-ATK(+15)"
        },
        {
            code: "LP03",
            gid: "A+",
            name: "Lesser Power III",
            lvup: "LP04",
            extend: [
                0,
                50,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "S-ATK(+25)"
        },
        {
            code: "LP04",
            gid: "A+",
            name: "Lesser Power IV",
            lvup: "LP05",
            extend: [
                0,
                40,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "S-ATK(+30)"
        },
        {
            code: "LP05",
            gid: "A+",
            name: "Lesser Power V",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                20
            ],
            status: 4,
            effect: "S-ATK(+35)"
        },
        {
            code: "LS01",
            gid: "A+",
            name: "Lesser Shoot I",
            lvup: "LS02",
            extend: [
                0,
                80,
                100
            ],
            status: 4,
            effect: "R-ATK(+5)"
        },
        {
            code: "LS02",
            gid: "A+",
            name: "Lesser Shoot II",
            lvup: "LS03",
            extend: [
                0,
                70,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "R-ATK(+15)"
        },
        {
            code: "LS03",
            gid: "A+",
            name: "Lesser Shoot III",
            lvup: "LS04",
            extend: [
                0,
                50,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "R-ATK(+25)"
        },
        {
            code: "LS04",
            gid: "A+",
            name: "Lesser Shoot IV",
            lvup: "LS05",
            extend: [
                0,
                40,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "R-ATK(+30)"
        },
        {
            code: "LS05",
            gid: "A+",
            name: "Lesser Shoot V",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                20
            ],
            status: 4,
            effect: "R-ATK(+35)"
        },
        {
            code: "LT01",
            gid: "A+",
            name: "Lesser Technique I",
            lvup: "LT02",
            extend: [
                0,
                80,
                100
            ],
            status: 4,
            effect: "T-ATK(+5)"
        },
        {
            code: "LT02",
            gid: "A+",
            name: "Lesser Technique II",
            lvup: "LT03",
            extend: [
                0,
                70,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "T-ATK(+15)"
        },
        {
            code: "LT03",
            gid: "A+",
            name: "Lesser Technique III",
            lvup: "LT04",
            extend: [
                0,
                50,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "T-ATK(+25)"
        },
        {
            code: "LT04",
            gid: "A+",
            name: "Lesser Technique IV",
            lvup: "LT05",
            extend: [
                0,
                40,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "T-ATK(+30)"
        },
        {
            code: "LT05",
            gid: "A+",
            name: "Lesser Technique V",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                20
            ],
            status: 4,
            effect: "T-ATK(+35)"
        },
        {
            code: "LM01",
            gid: "A+",
            name: "Lesser Stamina I",
            lvup: "LM02",
            extend: [
                0,
                80,
                100
            ],
            status: 4,
            effect: "HP(+15)"
        },
        {
            code: "LM02",
            gid: "A+",
            name: "Lesser Stamina II",
            lvup: "LM03",
            extend: [
                0,
                70,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "HP(+35)"
        },
        {
            code: "LM03",
            gid: "A+",
            name: "Lesser Stamina III",
            lvup: "LM04",
            extend: [
                0,
                50,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "HP(+45)"
        },
        {
            code: "LM04",
            gid: "A+",
            name: "Lesser Stamina IV",
            lvup: "LM05",
            extend: [
                0,
                40,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "HP(+55)"
        },
        {
            code: "LM05",
            gid: "A+",
            name: "Lesser Stamina V",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                20
            ],
            status: 4,
            effect: "HP(+65)"
        },
        {
            code: "LA01",
            gid: "A+",
            name: "Lesser Spirita I",
            lvup: "LR02",
            extend: [
                0,
                80,
                100
            ],
            status: 4,
            effect: "PP(+1)"
        },
        {
            code: "LA02",
            gid: "A+",
            name: "Lesser Spirita II",
            lvup: "LR03",
            extend: [
                0,
                70,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "PP(+2)"
        },
        {
            code: "LA03",
            gid: "A+",
            name: "Lesser Spirita III",
            lvup: "LR04",
            extend: [
                0,
                50,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "PP(+3)"
        },
        {
            code: "LA04",
            gid: "A+",
            name: "Lesser Spirita IV",
            lvup: "LR05",
            extend: [
                0,
                40,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "PP(+4)"
        },
        {
            code: "LA05",
            gid: "A+",
            name: "Lesser Spirita V",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                20
            ],
            status: 4,
            effect: "PP(+5)"
        },
        {
            code: "LP06",
            gid: "A+",
            name: "EV Power HP",
            effect: "S-ATK(+35),<br>HP(+60)"
        },
        {
            code: "LP07",
            gid: "A+",
            name: "EV Power PP",
            effect: "S-ATK(+35),<br>PP(+4)"
        },
        {
            code: "LS06",
            gid: "A+",
            name: "EV Shoot HP",
            effect: "R-ATK(+35),<br>HP(+60)"
        },
        {
            code: "LS07",
            gid: "A+",
            name: "EV Shoot PP",
            effect: "R-ATK(+35),<br>PP(+4)"
        },
        {
            code: "LT06",
            gid: "A+",
            name: "EV Technique HP",
            effect: "T-ATK(+35),<br>HP(+60)"
        },
        {
            code: "LT07",
            gid: "A+",
            name: "EV Technique PP",
            effect: "T-ATK(+35),<br>PP(+4)"
        },
        {
            code: "TD01",
            gid: "D+",
            name: "Lovey Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+10),<br>DEX(+5),<br>HP(+10)"
        },
        {
            code: "TD02",
            gid: "D+",
            name: "Egg Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "R-ATK(+10),<br>DEX(+5),<br>HP(+10)"
        },
        {
            code: "TD03",
            gid: "D+",
            name: "Frog Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "T-ATK(+10),<br>DEX(+5),<br>HP(+10)"
        },
        {
            code: "TD04",
            gid: "D+",
            name: "Love Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+10),<br>DEX(+5),<br>PP(+2)"
        },
        {
            code: "TD05",
            gid: "D+",
            name: "Saint Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "R-ATK(+10),<br>DEX(+5),<br>PP(+2)"
        },
        {
            code: "TD06",
            gid: "D+",
            name: "Latan Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "T-ATK(+10),<br>DEX(+5),<br>PP(+2)"
        },
        {
            code: "TD07",
            gid: "D+",
            name: "Summer Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "T-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD08",
            gid: "D+",
            name: "Ceramo Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD09",
            gid: "D+",
            name: "Noiya Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "R-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD0A",
            gid: "D+",
            name: "Torokuro Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "DEX(+15),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD0B",
            gid: "D+",
            name: "Sakura Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-DEF(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD0C",
            gid: "D+",
            name: "Sonic Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+10),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD0D",
            gid: "D+",
            name: "Sansan Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>HP(+5),<br>PP(+1)"
        },
        {
            code: "TD0E",
            gid: "D+",
            name: "Luna Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "T-ATK(+10),<br>HP(+10),<br>PP(+1)"
        },
        {
            code: "TD0F",
            gid: "D+",
            name: "ARKS Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>DEX(+5),<br>PP(+5)"
        },
        {
            code: "UA01",
            gid: "A++",
            name: "Flict Arma",
            extend: [
                0,
                0,
                80
            ],
            effect: "S-ATK(+20),<br>PP(+3)"
        },
        {
            code: "UA11",
            gid: "A++",
            name: "Flict Tiro",
            extend: [
                0,
                0,
                80
            ],
            effect: "R-ATK(+20),<br>PP(+3)"
        },
        {
            code: "UA21",
            gid: "A++",
            name: "Flict Magia",
            extend: [
                0,
                0,
                80
            ],
            effect: "T-ATK(+20),<br>PP(+3)"
        },
        {
            code: "UB01",
            gid: "A++",
            name: "Alter Arma",
            extend: [
                0,
                0,
                80
            ],
            effect: "S-ATK(+20),<br>HP(+30)"
        },
        {
            code: "UB11",
            gid: "A++",
            name: "Alter Tiro",
            extend: [
                0,
                0,
                80
            ],
            effect: "R-ATK(+20),<br>HP(+30)"
        },
        {
            code: "UB21",
            gid: "A++",
            name: "Alter Magia",
            extend: [
                0,
                0,
                80
            ],
            effect: "T-ATK(+20),<br>HP(+30)"
        },
        {
            code: "UC01",
            gid: "A++",
            name: "Sentence Arma",
            effect: "S-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            code: "UC11",
            gid: "A++",
            name: "Sentence Tiro",
            effect: "R-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            code: "UC21",
            gid: "A++",
            name: "Sentence Magia",
            effect: "T-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            code: "UD01",
            gid: "A++",
            name: "Mark Joyo",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+50)"
        },
        {
            code: "UD11",
            gid: "A++",
            name: "Mark Couragena",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)"
        },
        {
            code: "UD21",
            gid: "A++",
            name: "Mark Angar",
            effect: "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)"
        },
        {
            code: "UD31",
            gid: "A++",
            name: "Mark Grif",
            effect: "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)"
        },
        {
            code: "YA01",
            gid: "A+++",
            name: "Sentence Power",
            effect: "S-ATK(+20),<br>PP(+4)"
        },
        {
            code: "YA11",
            gid: "A+++",
            name: "Sentence Shoot",
            effect: "R-ATK(+20),<br>PP(+4)"
        },
        {
            code: "YA21",
            gid: "A+++",
            name: "Sentence Tech",
            effect: "T-ATK(+20),<br>PP(+4)"
        },
        {
            code: "YA31",
            gid: "A+++",
            name: "Sentence Triple",
            effect: "S-ATK(+30),R-ATK(+30),T-ATK(+30)"
        },
        {
            code: "YB01",
            gid: "A+++",
            name: "Phrase Recovery",
            effect: "+5% PP Recovery Rate"
        },
        {
            code: "YB11",
            gid: "A+++",
            name: "Phrase Weak",
            effect: "+2% Elemental Weakness damage"
        },
        {
            code: "YB21",
            gid: "A+++",
            name: "Phrase Response",
            effect: "+5% ATK PP Recovery"
        },
        {
            code: "YB31",
            gid: "A+++",
            name: "Phrase Chase",
            effect: "+5% damage against enemies<BR>with Status Effects"
        },
        {
            code: "VA01",
            gid: "E",
            name: "Lucky Rise I",
            lvup: "VA02",
            extend: [
                0,
                75,
                100
            ],
            require: "XC01",
            effect: "Item Drop Rate +5%"
        },
        {
            code: "VA02",
            gid: "E",
            name: "Lucky Rise II",
            lvup: "VA03",
            extend: [
                0,
                50,
                75
            ],
            generate: [
                0,
                60
            ],
            require: "XC01",
            effect: "Item Drop Rate +7%"
        },
        {
            code: "VA03",
            gid: "E",
            name: "Lucky Rise III",
            extend: [
                0,
                30,
                50
            ],
            generate: [
                0,
                40
            ],
            require: "XC01",
            effect: "Item Drop Rate +10%"
        },
        {
            code: "VB01",
            gid: "E",
            name: "Meseta Fever I",
            lvup: "VB02",
            extend: [
                0,
                75,
                100
            ],
            require: "XC01",
            effect: "Meseta Drop Amount +5%"
        },
        {
            code: "VB02",
            gid: "E",
            name: "Meseta Fever II",
            lvup: "VB03",
            extend: [
                0,
                50,
                75
            ],
            generate: [
                0,
                60
            ],
            require: "XC01",
            effect: "Meseta Drop Amount +10%"
        },
        {
            code: "VB03",
            gid: "E",
            name: "Meseta Fever III",
            extend: [
                0,
                30,
                50
            ],
            generate: [
                0,
                40
            ],
            require: "XC01",
            effect: "Meseta Drop Amount +15%"
        },
        {
            code: "VC01",
            gid: "E",
            name: "EXP Boost I",
            lvup: "VC02",
            extend: [
                0,
                75,
                100
            ],
            require: "XC01",
            effect: "Experience Gain +5%"
        },
        {
            code: "VC02",
            gid: "E",
            name: "EXP Boost II",
            lvup: "VC03",
            extend: [
                0,
                50,
                75
            ],
            generate: [
                0,
                60
            ],
            require: "XC01",
            effect: "Experience Gain +7%"
        },
        {
            code: "VC03",
            gid: "E",
            name: "EXP Boost III",
            extend: [
                0,
                30,
                50
            ],
            generate: [
                0,
                40
            ],
            require: "XC01",
            effect: "Experience Gain +10%"
        },
        {
            code: "VD01",
            gid: "E",
            name: "Temptation",
            effect: "Item Drop Rate +10%"
        },
        {
            code: "VE01",
            gid: "E",
            name: "Another History",
            effect: "Experience Gain +10%"
        },
        {
            code: "VF01",
            gid: "E",
            name: "Fresh Sign",
            effect: "Boost EXP by 30% until Lv.30"
        },
        {
            code: "VH01",
            gid: "E",
            name: "Ultimate Buster",
            extend: [
                0,
                0,
                0,
                0,
                100
            ],
            effect: "Boost damage in Ultimate +10%"
        },
        {
            code: "VJ01",
            gid: "E",
            name: "Soul Catalyst",
            extend: [
                0,
                10,
                30
            ],
            effect: "HP(+10),<br>PP(+1)"
        },
        {
            code: "VJ11",
            gid: "E",
            name: "Factor Catalyst",
            extend: [
                0,
                10,
                30
            ],
            effect: "HP(+10),<br>PP(+1)"
        },
        {
            code: "VK01",
            gid: "E",
            name: "Emper Embrace",
            extend: [
                100,
                100,
                100
            ],
            effect: "Exp boost for New-Type grinding"
        },
        {
            code: "VK05",
            gid: "E",
            name: "NT Weapon Booster",
            extend: [
                100,
                100,
                100
            ],
            effect: "Exp boost for New-Type grinding"
        },
        {
            code: "WA01",
            gid: "E",
            name: "Photon Collect",
            effect: "Boosts status effect affix rate"
        },
        {
            code: "XA01",
            gid: "E",
            name: "Soul Receptor",
            effect: "Greatly increases Soul affix rate"
        },
        {
            code: "XB01",
            gid: "E",
            name: "Extreme Receptor",
            extup: [
                "AA",
                "AB",
                "AC",
                "BA",
                "BB",
                "BC",
                "EA",
                "EB"
            ],
            rel: "extreme",
            effect: "Greatly increases Flict, Alter affix rate<br>ALL(+10)"
        },
        {
            code: "XC01",
            gid: "E",
            name: "Gift Receptor",
            effect: "Allows transfer of Gift affixes"
        },
        {
            code: "XD01",
            gid: "E",
            name: "Sentence Receptor",
            effect: "Boosts transfer of Sentence affixes<br>ALL(+10)"
        },
        {
            code: "XE01",
            gid: "E",
            name: "Phrase Receptor",
            effect: "Boosts transfer of Phrase affixes<br>ALL(+10)"
        },
        {
            code: "XF01",
            gid: "E",
            name: "Factor Receptor",
            effect: "Boosts transfer of Factor affixes<br>ALL(+10)"
        },
        {
            code: "XI02",
            gid: "E",
            name: "Stamina Boost",
            effect: "HP(+45)"
        },
        {
            code: "XI03",
            gid: "E",
            name: "Spirita Boost",
            effect: "PP(+5)"
        },
        {
            code: "XI04",
            gid: "E",
            name: "Power Boost",
            effect: "S-ATK(+25)"
        },
        {
            code: "XI05",
            gid: "E",
            name: "Shoot Boost",
            effect: "R-ATK(+25)"
        },
        {
            code: "XI06",
            gid: "E",
            name: "Technique Boost",
            effect: "T-ATK(+25)"
        },
        {
            code: "XI0a",
            gid: "E",
            name: "Tenora Boost",
            effect: "S-ATK(+35)"
        },
        {
            code: "XI0b",
            gid: "E",
            name: "GRM Boost",
            effect: "R-ATK(+35)"
        },
        {
            code: "XI0c",
            gid: "E",
            name: "Yohmei Boost",
            effect: "T-ATK(+35)"
        },
        {
            code: "XI10",
            gid: "E",
            name: "Noble Stamina",
            effect: "HP(+50),PP(+3)"
        },
        {
            code: "XI14",
            gid: "E",
            name: "Elegant Stamina",
            effect: "HP(+70),PP(+4)"
        },
        {
            code: "XI51",
            gid: "E",
            name: "Grace Stamina",
            effect: "HP(+80),PP(+5)"
        },
        {
            code: "XI07",
            gid: "E",
            name: "Noble Power",
            effect: "S-ATK(+30),PP(+3)"
        },
        {
            code: "XI11",
            gid: "E",
            name: "Elegant Power",
            effect: "S-ATK(+40),PP(+4)"
        },
        {
            code: "XI52",
            gid: "E",
            name: "Grace Power",
            effect: "S-ATK(+50),PP(+5)"
        },
        {
            code: "XI08",
            gid: "E",
            name: "Noble Shot",
            effect: "R-ATK(+30),PP(+3)"
        },
        {
            code: "XI12",
            gid: "E",
            name: "Elegant Shot",
            effect: "R-ATK(+40),PP(+4)"
        },
        {
            code: "XI53",
            gid: "E",
            name: "Grace Shot",
            effect: "R-ATK(+50),PP(+5)"
        },
        {
            code: "XI09",
            gid: "E",
            name: "Noble Technique",
            effect: "T-ATK(+30),PP(+3)"
        },
        {
            code: "XI13",
            gid: "E",
            name: "Elegant Technique",
            effect: "T-ATK(+40),PP(+4)"
        },
        {
            code: "XI54",
            gid: "E",
            name: "Grace Technique",
            effect: "T-ATK(+50),PP(+5)"
        },
        {
            code: "XI20",
            gid: "E",
            name: "Offense Boost",
            effect: "S-ATK(+15)<br>R-ATK(+15)<br>T-ATK(+15)<br>DEX(+25)<br>PP(+1)"
        },
        {
            code: "XI21",
            gid: "E",
            name: "Defense Boost",
            effect: "S-DEF(+25)<br>R-DEF(+25)<br>T-DEF(+25)<br>HP(+55)<br>PP(+1)"
        },
        {
            code: "XI30",
            gid: "E",
            name: "Attack Receptor",
            effect: "Greatly increases affix rate of<br>Power, Shoot, Technique, Arm<br>ALL(+5)"
        },
        {
            code: "XI31",
            gid: "E",
            name: "Guard Receptor",
            effect: "Greatly increases affix rate of<br>Mind, Body, React<br>ALL(+5)"
        },
        {
            code: "XI32",
            gid: "E",
            name: "Photon Receptor",
            effect: "Greatly increases affix rate of<br>Stamina, Spirita<br>ALL(+5)"
        },
        {
            code: "ZA01",
            gid: "F",
            name: "Junk A",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZB01",
            gid: "F",
            name: "Junk B",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZC01",
            gid: "F",
            name: "Junk C",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZD01",
            gid: "F",
            name: "Junk D",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZE01",
            gid: "F",
            name: "Junk E",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZF01",
            gid: "F",
            name: "Junk F",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZG01",
            gid: "F",
            name: "Junk G",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZH01",
            gid: "F",
            name: "Junk H",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            code: "ZI01",
            gid: "F",
            name: "Junk I",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        }
    ]
};