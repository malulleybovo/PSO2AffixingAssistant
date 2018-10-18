let data = {
    lastModified: "2018-06-07 2:50:18(JST)",
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
            },
            {
                id: "Ability Success Rate +50%",
                name: "+45%",
                value: "A08",
                fn: function (a) {
                    return Math.min(a + 50,
                        100)
                }
            }
        ],
        additional: [
            {
                id: "Nothing",
                value: "B01"
            },
            {
                id: "Add Ability (HP)",
                name: "Stamina Boost",
                value: "B02",
                extend: 100,
                effect: "HP(+45)"
            },
            {
                id: "Add Ability (PP)",
                name: " Spirita Boost",
                value: "B03",
                extend: 100,
                effect: "PP(+5)"
            },
            {
                id: "Add Ability (S-ATK)",
                name: "Power Boost",
                value: "B04",
                extend: 100,
                effect: "S-ATK(+25)"
            },
            {
                id: "Add Ability (R-ATK)",
                name: "Shoot Boost",
                value: "B05",
                extend: 100,
                effect: "R-ATK(+25)"
            },
            {
                id: "Add Ability (T-ATK)",
                name: "Technique Boost",
                value: "B06",
                extend: 100,
                effect: "T-ATK(+25)"
            },
            {
                id: "Add Ability (Tenora)",
                name: "Tenora Boost",
                value: "B0a",
                extend: 100,
                effect: "S-ATK(+35)"
            },
            {
                id: "Add Ability (GRM)",
                name: "GRM Boost",
                value: "B0b",
                extend: 100,
                effect: "R-ATK(+35)"
            },
            {
                id: "Add Ability (Yohmei)",
                name: "Yohmei Boost",
                value: "B0c",
                extend: 100,
                effect: "T-ATK(+35)"
            },
            {
                id: "Add Ability (HP&PP)",
                name: "Noble Stamina",
                value: "B10",
                extend: 100,
                effect: "HP(+50),PP(+3)"
            },
            {
                id: "Add Ability (HP&PP/2)",
                name: "Elegant Stamina",
                value: "B14",
                extend: 100,
                effect: "HP(+70),PP(+4)"
            },
            {
                id: "Add Ability (HP&PP/3)",
                name: "Grace Stamina",
                value: "B18",
                extend: 100,
                effect: "HP(+80),PP(+5)"
            },
            {
                id: "Add Ability (S-ATK&PP)",
                name: "Noble Power",
                value: "B07",
                extend: 100,
                effect: "S-ATK(+30),PP(+3)"
            },
            {
                id: "Add Ability (S-ATK&PP/2)",
                name: "Elegant Power",
                value: "B11",
                extend: 100,
                effect: "S-ATK(+40),PP(+4)"
            },
            {
                id: "Add Ability (S-ATK&PP/3)",
                name: "Grace Power",
                value: "B15",
                extend: 100,
                effect: "S-ATK(+50),PP(+5)"
            },
            {
                id: "Add Ability (R-ATK&PP)",
                name: "Noble Shoot",
                value: "B08",
                extend: 100,
                effect: "R-ATK(+30),PP(+3)"
            },
            {
                id: "Add Ability (R-ATK&PP/2)",
                name: "Elegant Shoot",
                value: "B12",
                extend: 100,
                effect: "R-ATK(+40),PP(+4)"
            },
            {
                id: "Add Ability (R-ATK&PP/3)",
                name: "Grace Shoot",
                value: "B16",
                extend: 100,
                effect: "R-ATK(+50),PP(+5)"
            },
            {
                id: "Add Ability (T-ATK&PP)",
                name: "Noble Technique",
                value: "B09",
                extend: 100,
                effect: "T-ATK(+30),PP(+3)"
            },
            {
                id: "Add Ability (T-ATK&PP/2)",
                name: "Elegant Technique",
                value: "B13",
                extend: 100,
                effect: "T-ATK(+40),PP(+4)"
            },
            {
                id: "Add Ability (T-ATK&PP/3)",
                name: "Grace Technique",
                value: "B17",
                extend: 100,
                effect: "T-ATK(+50),PP(+5)"
            },
            {
                id: "Add Ability (Offense Focus) ",
                name: "Offense Boost",
                value: "B20",
                extend: 100,
                effect: "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)"
            },
            {
                id: "Add Ability (Defense Focus)",
                name: "Defense Boost",
                value: "B21",
                extend: 100,
                effect: "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)"
            },
            {
                id: "Add Ability (Attack Inherit)",
                name: "Attack Receptor",
                value: "B30",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                id: "Add Ability (Defense Inherit)",
                name: "Guard  Receptor",
                value: "B31",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                id: "Add Ability (Photon Inherit)",
                name: "Photon Receptor",
                value: "B32",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                id: "Add Ability (Mark Receptor)",
                name: "Mark Receptor",
                value: "XG01",
                extend: 100,
                effect: "ALL(+10)"
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
                name: "+5%",
                value: "C12",
                fn: function (a) {
                    return Math.min(a + 5,
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
                "TH01",
                "TH01",
                "TH01"
            ],
            ref: "TH02",
            success: 10
        },
        {
            base: [
                "TH01",
                "TH01",
                "TH01",
                "TH01"
            ],
            ref: "TH02",
            success: 30
        },
        {
            base: [
                "TH01",
                "TH01",
                "TH01",
                "TH01",
                "TH01"
            ],
            ref: "TH02",
            success: 50
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
                "XE01",
                "YB*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XF01",
                "TG0*"
            ],
            ref: "$$",
            success: 100
        },
        {
            base: [
                "XF01",
                "TG3*"
            ],
            ref: "$$",
            success: 10
        },
        {
            base: [
                "XG01",
                "UC*"
            ],
            ref: "$$",
            success: 100
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
                "LR05"
            ],
            ref: "LP07",
            success: 50
        },
        {
            base: [
                "LS05",
                "LR05"
            ],
            ref: "LS07",
            success: 50
        },
        {
            base: [
                "LT05",
                "LR05"
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
        },
        {
            base: [
                "SB04",
                "SB05",
                "TK01"
            ],
            ref: "TJ01",
            success: 10
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
        doom2: {
            create: {
                "5": [
                    0,
                    0,
                    0,
                    30
                ]
            },
            extend: {
                "5": [
                    0,
                    0,
                    0,
                    30
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
    boostdaySystem: {
        blow: [
            "Gunne Soul",
            "Zigmor Soul",
            "Vol Soul",
            "Gwana Soul",
            "Quartz Soul",
            "Act The Soul",
            "Deadlion Soul",
            "Leone Soul",
            "Bayari Soul",
            "Org Soul",
            "Meduna Soul",
            "Soma Soul",
            "Lilli Soul",
            "Lovey Fever",
            "Ceremo Fever",
            "Love Fever",
            "Sonic Fever",
            "Power Boost",
            "Tenora Boost",
            "Noble Power",
            "Elegant Power",
            "Alter Arma",
            "Flict Arma",
            "Sentence Power",
            "Deus Factor",
            "Power I",
            "Power II",
            "Power III",
            "Power IV",
            "Power V",
            "Power VI",
            "Sentence Arma",
            "Elder Reverie",
            "Grace Power",
            "Lesser Power I",
            "Lesser Power II",
            "Lesser Power III",
            "Lesser Power IV",
            "Lesser Power V",
            "EV Power HP",
            "EV Power PP"
        ],
        shot: [
            "Idetta Soul",
            "Madu Soul",
            "Ra'nsa Soul",
            "Fang Soul",
            "Mizer Soul",
            "Till The Soul",
            "Leopard Soul",
            "Siorg Soul",
            "Greuzoras Soul",
            "Bal Soul",
            "Vibrace Soul",
            "Tagami Kazuchi Soul",
            "Egg Fever",
            "Noiya Fever",
            "St. Fever",
            "Shoot Boost",
            "GRM Boost",
            "Noble Shoot",
            "Elegant Shoot",
            "Alter Tiro",
            "Flict Tiro",
            "Sentence Shoot",
            "Yamato Factor",
            "Shoot I",
            "Shoot II",
            "Shoot III",
            "Shoot IV",
            "Shoot V",
            "Shoot VI",
            "Sentence Tiro",
            "Grace Shoot",
            "Apprezina Reverie",
            "Lesser Shoot I",
            "Lesser Shoot II",
            "Lesser Shoot III",
            "Lesser Shoot IV",
            "Lesser Shoot V",
            "EV Shoot HP",
            "EV Shoot PP"
        ],
        mind: [
            "Jhadu Soul",
            "Nepto Soul",
            "Ragne Soul",
            "Wolga Soul",
            "Elder Soul",
            "Magi The Soul",
            "Diabo Soul",
            "Duvals Soul",
            "Guranz Soul",
            "Ringa Soul",
            "Loser Soul",
            "Malluda Soul",
            "Frog Fever",
            "Luna Fever",
            "Summer Fever",
            "Latan Fever",
            "Technique Boost",
            "Yohmei Boost",
            "Noble Technique",
            "Elegant Technique",
            "Alter Magia",
            "Flict Magia",
            "Sentence Tech",
            "Mother Factor",
            "Technique I",
            "Technique II",
            "Technique III",
            "Technique IV",
            "Technique V",
            "Technique VI",
            "Sentence Magia",
            "Grace Technique",
            "Loser Reverie",
            "Lesser Technique I",
            "Lesser Technique II",
            "Lesser Technique III",
            "Lesser Technique IV",
            "Lesser Technique V",
            "EV Technique HP",
            "EV Technique PP"
        ],
        hppp: [
            "Magatsu Soul",
            "Double Soul",
            "Stamina Boost",
            "Spirita Boost",
            "Noble Stamina",
            "Elegant Stamina",
            "Defense Boost",
            "Spirita Alpha",
            "Omega Reverie",
            "Fabula Soul",
            "Ares The Soul",
            "Stamina I",
            "Stamina II",
            "Stamina III",
            "Stamina IV",
            "Stamina V",
            "Spirita I",
            "Spirita II",
            "Spirita III",
            "Spirita IV",
            "Spirita V",
            "Stigma",
            "Historia Soul",
            "Grace Stamina",
            "Lesser Stamina I",
            "Lesser Stamina II",
            "Lesser Stamina III",
            "Lesser Stamina IV",
            "Lesser Stamina V",
            "Lesser Spirita I",
            "Lesser Spirita II",
            "Lesser Spirita III",
            "Lesser Spirita IV",
            "Lesser Spirita V",
            "Double Reverie"
        ],
        sp: [
            "Escarde Soul",
            "Full Vegas Soul",
            "Cougar Soul",
            "Gryphon Soul",
            "Knight Gear Soul",
            "Izane Kazuchi Soul",
            "Anga Soul",
            "Apprentice Soul",
            "Ether Soul",
            "Toh'oh Soul",
            "Darkness Soul",
            "Astral Soul",
            "Sansan Fever",
            "Offense Boost",
            "Attack Receptor",
            "Guard Receptor",
            "Photon Receptor",
            "Sentence Triple",
            "Phrase Chase",
            "Phrase Response",
            "Phrase Weak",
            "Phrase Recovery",
            "Ether Factor",
            "Vinculum",
            "Modulator",
            "Returner I",
            "Returner II",
            "Returner III",
            "Returner IV",
            "Returner V",
            "Ability I",
            "Ability II",
            "Ability III",
            "Ability IV",
            "Mutation I",
            "Mutation II",
            "Soul Catalyst",
            "Factor Catalyst",
            "Necky Smile",
            "Doom Break",
            "Extreceptor",
            "All Resist I",
            "All Resist II",
            "All Resist III",
            "Lucky Rise I",
            "Lucky Rise II",
            "Lucky Rise III",
            "EXP Boost I",
            "EXP Boost II",
            "EXP Boost III",
            "Meseta Fever I",
            "Meseta Fever II",
            "Meseta Fever III",
            "Another History",
            "Ultimate Buster",
            "ARKS Fever",
            "ARKS MAX",
            "Phrase Reduce",
            "Omega Buster",
            "Polytan Smile",
            "Phrase Decay",
            "Arkuma Smile"
        ]
    },
    abilityList: [
        {
            code: "AA01",
            gid: "AA",
            name: "Power I",
            lvup: "AA02",
            extend: [
                100,
                100,
                100
            ],
            status: 1,
            effect: "S-ATK(+10)",
            tooltip: "EXT"

        },
        {
            code: "AA02",
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "CB",
            name: "Power VI",
            status: 1,
            effect: "S-ATK(+45)"
        },
        {
            code: "AB01",
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "CB",
            name: "Shoot VI",
            status: 1,
            effect: "R-ATK(+45)"
        },
        {
            code: "AC01",
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "CB",
            name: "Technique VI",
            status: 1,
            effect: "T-ATK(+45)"
        },
        {
            code: "AD01",
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "AA",
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
            gid: "CB",
            name: "Spirita VI",
            status: 1,
            effect: "PP(+7)"
        },
        {
            code: "FA01",
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "CB",
            name: "Ability IV",
            effect: "ALL(+20)"
        },
        {
            code: "HA01",
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
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
            gid: "DA",
            name: "All Resist IV",
            status: 2,
            effect: "All Resist(+4)"
        },
        {
            code: "HZ05",
            gid: "DA",
            name: "All Resist V",
            status: 2,
            effect: "All Resist(+5)"
        },
        {
            code: "JA01",
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            gid: "DB",
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
            code: "LA01",
            gid: "L1",
            name: "S1:Offensive Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boosts damage by 2%.",
            noEx: true
        },
        {
            code: "LA02",
            gid: "L1",
            name: "S1:Photon Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "PP consumption is reduced by 7%.",
            noEx: true
        },
        {
            code: "LA03",
            gid: "L1",
            name: "S1:Wise Skill",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases critical rate by 15%.",
            noEx: true
        },
        {
            code: "LA04",
            gid: "L1",
            name: "S1:Skilled Brilliance",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boosts damage by 3% while PP<br>at is 40% or above.",
            noEx: true
        },
        {
            code: "LA05",
            gid: "L1",
            name: "S1:Double-Edged Sword",
            extend: [
                100,
                100,
                100
            ],
            effect: "Deal 4% more damage but take<br>8% more damage.",
            noEx: true
        },
        {
            code: "LA06",
            gid: "L1",
            name: "S1:Radiating Grace",
            extend: [
                100,
                100,
                100
            ],
            effect: "PP regeneration increases by 20%.",
            noEx: true
        },
        {
            code: "LA11",
            gid: "L1",
            name: "S1:Immediate Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Successive Just Attacks will<br>increase damage up to 3%.",
            noEx: true
        },
        {
            code: "LA12",
            gid: "L1",
            name: "S1:Red Petal Flash",
            extend: [
                100,
                100,
                100
            ],
            effect: "+3% Damage for 30 seconds after<br>inflicting 450,000 damage.",
            noEx: true
        },
        {
            code: "LA13",
            gid: "L1",
            name: "S1:Blue Ocean Flash",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover 4% HP every second for 30<br>seconds after taking 600 damage.",
            noEx: true
        },
        {
            code: "LA14",
            gid: "L1",
            name: "S1:White Snow Flash",
            extend: [
                100,
                100,
                100
            ],
            effect: "+20% PP Recovery on attacks for 30<br>seconds after using 150 PP.",
            noEx: true
        },
        {
            code: "LA15",
            gid: "L1",
            name: "S1:Yellow Moon Flash",
            extend: [
                100,
                100,
                100
            ],
            effect: "8% PP Consumption Reduction for 20<br>seconds upon Just Guarding.",
            noEx: true
        },
        {
            code: "LA16",
            gid: "L1",
            name: "S1:Green Leaf Flash",
            extend: [
                100,
                100,
                100
            ],
            effect: "Every 20 seconds, a barrier will<br>turn on/off. The barrier reduces<br>damage by 8% and prevents flinching.",
            noEx: true
        },
        {
            code: "LA17",
            gid: "L1",
            name: "S1:Black Shadow Flash",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery for 20<br>seconds after standing still<br>for 5 seconds.",
            noEx: true
        },
        {
            code: "LA18",
            gid: "L1",
            name: "S1:Brilliant Ruin",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recovery PP upon enemies being defeated near you.",
            noEx: true
        },
        {
            code: "LA21",
            gid: "L1",
            name: "S1:Skilled Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "+3% damage on Critical Hits.",
            noEx: true
        },
        {
            code: "LA22",
            gid: "L1",
            name: "S1:Radiant Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "+17% PP Recovery on attacks.",
            noEx: true
        },
        {
            code: "LA23",
            gid: "L1",
            name: "S1:Flowing Exhilaration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recovers 60% HP at set intervals.",
            noEx: true
        },
        {
            code: "LA24",
            gid: "L1",
            name: "S1:Guardian Armor",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduces damage taken by 7%.",
            noEx: true
        },
        {
            code: "LA25",
            gid: "L1",
            name: "S1:Vigor Enhancment",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boost self HP recovery by 40%.",
            noEx: true
        },
        {
            code: "LB01",
            gid: "L2",
            name: "S2:Sturdy Recovery",
            extend: [
                100,
                100,
                100
            ],
            effect: "Gives a fixed chance of<br>restoring HP equal to 1%<br>of damage dealt. (Max: 300)",
            noEx: true
        },
        {
            code: "LB02",
            gid: "L2",
            name: "S2:Photon Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "PP consumption is reduced by 10%.",
            noEx: true
        },
        {
            code: "LB03",
            gid: "L2",
            name: "S2:Wise Skill",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases critical rate by 12%.",
            noEx: true
        },
        {
            code: "LB04",
            gid: "L2",
            name: "S2:Radiant Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases attack PP recovery by 17%.",
            noEx: true
        },
        {
            code: "LB05",
            gid: "L2",
            name: "S2:Cursed Radiance",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recovers PP by 15% when taking damage.",
            noEx: true
        },
        {
            code: "LB06",
            gid: "L2",
            name: "S2:Guardian Armor",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduces damage taken by 7%.",
            noEx: true
        },
        {
            code: "LB07",
            gid: "L2",
            name: "S2:Flowing Exhilaration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover HP by 60% at<br>regular intervals.",
            noEx: true
        },
        {
            code: "LB08",
            gid: "L2",
            name: "S2:Immediate Profusion",
            extend: [
                100,
                100,
                100
            ],
            effect: "Raises damage by 3% when Just<br>Attacking different PAs or <br>Techniques.",
            noEx: true
        },
        {
            code: "LB09",
            gid: "L2",
            name: "S2:Spirited Response",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases PP regeneration rate<br>while sheathed.",
            noEx: true
        },
        {
            code: "LB0A",
            gid: "L2",
            name: "S2:Flowing Grace",
            extend: [
                100,
                100,
                100
            ],
            effect: "Regenerate 10 PP every 4 seconds.",
            noEx: true
        },
        {
            code: "LB11",
            gid: "L2",
            name: "S2:Nature's Skill",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Rate by 20%<br>when S1:Red Petal Flash, S1:Blue<br>Ocean Flash, or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LB12",
            gid: "L2",
            name: "S2:Nature's Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage by 3% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LB13",
            gid: "L2",
            name: "S2:Nature's Exhilaration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover 2% HP every second when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LB14",
            gid: "L2",
            name: "S2:Nature's Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease PP consumption by 12% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LB15",
            gid: "L2",
            name: "S2:Umbrageous Gleam",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery by 25% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LB16",
            gid: "L2",
            name: "S2:Umbrageous Guardian",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease damage taken by 12% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LB17",
            gid: "L2",
            name: "S2:Brilliant Ruin",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover PP when an enemy near you<br>is defeated.",
            noEx: true
        },
        {
            code: "LB18",
            gid: "L2",
            name: "S2:Radiating Grace",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases Automatic PP Recovery by 17%.",
            noEx: true
        },
        {
            code: "LB19",
            gid: "L2",
            name: "S2:Offensive Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage by 2%.",
            noEx: true
        },
        {
            code: "LB1A",
            gid: "L2",
            name: "S2:Skilled Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Damage by 3%.",
            noEx: true
        },
        {
            code: "LB1B",
            gid: "L2",
            name: "S2:Rupturing Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage against breakable parts by 3%.",
            noEx: true
        },
        {
            code: "LB1C",
            gid: "L2",
            name: "S2:Rupturing Excess",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase PP recovery rate by 35%<br>when attacking breakable parts.",
            noEx: true
        },
        {
            code: "LB1D",
            gid: "L2",
            name: "S2:Double-Edged Sword",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power by 3%<br>but take 6% more damage<br>when weapon is drawn.",
            noEx: true
        },
        {
            code: "LB1E",
            gid: "L2",
            name: "S2:Powering Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage dealt to bosses by 3%.",
            noEx: true
        },
        {
            code: "LB1F",
            gid: "L2",
            name: "S2:Phantasmal Radiance",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Active PP Recovery based<br>on the Photon Blast Gauge.",
            noEx: true
        },
        {
            code: "LB1G",
            gid: "L2",
            name: "S2:Phantasmal Gleam",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery based<br>on the Photon Blast Gauge.",
            noEx: true
        },
        {
            code: "LB1H",
            gid: "L2",
            name: "S2:Phantasmal Guardian",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce damage taken based<br>on the Photon Blast Guage.",
            noEx: true
        },
        {
            code: "LB1I",
            gid: "L2",
            name: "S2:Phanatical Advantage",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
            noEx: true
        },
        {
            code: "LB1J",
            gid: "L2",
            name: "S2:Violent Invigoration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
            noEx: true
        },
        {
            code: "LB1K",
            gid: "L2",
            name: "S2:Umbrageous Melody",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase power over time when<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.<br>Maxes at 5%",
            noEx: true
        },
        {
            code: "LB1L",
            gid: "L2",
            name: "S2:Nature's Reduction 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce PP consumption by 14%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LB1M",
            gid: "L2",
            name: "S2:Umbrageous Radiance 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Active PP Recovery by 28%<br>when S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LB1N",
            gid: "L2",
            name: "S2:Wise Skill 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Rate by 15%.",
            noEx: true
        },
        {
            code: "LB1O",
            gid: "L2",
            name: "S2:Skilled Strike 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Damage by 4%.",
            noEx: true
        },
        {
            code: "LB1P",
            gid: "L2",
            name: "S2:Radiant Strike 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Attack PP Recovery by 20%.",
            noEx: true
        },
        {
            code: "LB1Q",
            gid: "L2",
            name: "S2:Medicinal Wisdom",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boost PP recovery when a -mate item is used.<br>Effects varies per mate.",
            noEx: true
        },
        {
            code: "LC01",
            gid: "L3",
            name: "S3:Offensive Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage by 2%.",
            noEx: true
        },
        {
            code: "LC02",
            gid: "L3",
            name: "S3:Vital Will",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boosts damage by 3% while HP is 80% or more.",
            noEx: true
        },
        {
            code: "LC03",
            gid: "L3",
            name: "S3:Radiant Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Attack PP Recovery by 20%.",
            noEx: true
        },
        {
            code: "LC04",
            gid: "L3",
            name: "S3:Skilled Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Damage by 4%.",
            noEx: true
        },
        {
            code: "LC05",
            gid: "L3",
            name: "S3:Radiating Grace",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Automatic PP Recovery by 17%.",
            noEx: true
        },
        {
            code: "LC06",
            gid: "L3",
            name: "S3:Flowing Exhilaration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover 40% of your maximum HP at regular intervals.",
            noEx: true
        },
        {
            code: "LC11",
            gid: "L3",
            name: "S3:Umbrageous Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage by 3% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LC12",
            gid: "L3",
            name: "S3:Umbrageous Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease PP consumption by 14% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LC13",
            gid: "L3",
            name: "S3:Umbrageous Exhilaration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover 2% HP every second when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LC14",
            gid: "L3",
            name: "S3:Nature's Radiance",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery by 28% when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LC15",
            gid: "L3",
            name: "S3:Wise Skill",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Rate by 12%.",
            noEx: true
        },
        {
            code: "LC16",
            gid: "L3",
            name: "S3:Photon Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduces PP consumption by 10%.",
            noEx: true
        },
        {
            code: "LC17",
            gid: "L3",
            name: "S3:Guardian Armor",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduces damage taken by 7%.",
            noEx: true
        },
        {
            code: "LC18",
            gid: "L3",
            name: "S3:Nature's Guardian",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease damage taken by 10%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LC19",
            gid: "L3",
            name: "S3:Umbrageous Skill",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Rate by 20%<br>when S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or<br>S1:Black Shadow Flash are active.",
            noEx: true
        },
        {
            code: "LC1A",
            gid: "L3",
            name: "S3:Brilliant Ruin",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover PP when a enemy near you is defeated.",
            noEx: true
        },
        {
            code: "LC1B",
            gid: "L3",
            name: "S3:Cursed Radiance",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recovers PP by 15% when taking damage.",
            noEx: true
        },
        {
            code: "LC1C",
            gid: "L3",
            name: "S3:Violent Invigoration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
            noEx: true
        },
        {
            code: "LC1D",
            gid: "L3",
            name: "S3:Phantasmal Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce PP consumption based<br>on the Photon Blast Gauge",
            noEx: true
        },
        {
            code: "LC1E",
            gid: "L3",
            name: "S3:Phanatical Advantage",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
            noEx: true
        },
        {
            code: "LC1F",
            gid: "L3",
            name: "S3:Immediate Profusion",
            extend: [
                100,
                100,
                100
            ],
            effect: "Raises damage by 3%<br>when Just Attacking different PAs or Techniques.",
            noEx: true
        },
        {
            code: "LC1G",
            gid: "L3",
            name: "S3:Nature's Melody",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage over time when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LC1H",
            gid: "L3",
            name: "S3:Nature's Gleam 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery by 25%<br>when S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            code: "LC1I",
            gid: "L3",
            name: "S3:Flowing Grace",
            extend: [
                100,
                100,
                100
            ],
            effect: "Regenerate 7 PP every 4 seconds.",
            noEx: true
        },
        {
            code: "LC1J",
            gid: "L3",
            name: "S3:Flowing Exhilaration 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover 60% of your maximum HP<br>at regular intervals.",
            noEx: true
        },
        {
            code: "LC1K",
            gid: "L3",
            name: "S3:Radiating Grace 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Automatic PP Recovery by 20%.",
            noEx: true
        },
        {
            code: "LD07",
            gid: "L4",
            name: "S4:Marvelous Aegis",
            extend: [
                100,
                100,
                100
            ],
            effect: "Restores PP on a successful Just Guard.",
            noEx: true
        },
        {
            code: "LD08",
            gid: "L4",
            name: "S4:Steel Resolve",
            extend: [
                100,
                100,
                100
            ],
            effect: "Survive one fatal hit with 1 HP remaining.",
            noEx: true
        },
        {
            code: "LD09",
            gid: "L4",
            name: "S4:Radiant Response",
            extend: [
                100,
                100,
                100
            ],
            effect: "Raises PP efficiency based on maximum PP.",
            noEx: true
        },
        {
            code: "LD0A",
            gid: "L4",
            name: "S4:Opposing Skill",
            extend: [
                100,
                100,
                100
            ],
            effect: "During Brave Stance, frontal critical<br>rate is raised by 30%.",
            noEx: true
        },
        {
            code: "LD0B",
            gid: "L4",
            name: "S4:Scything Wind",
            extend: [
                100,
                100,
                100
            ],
            effect: "Extends Kamaitachi duration by 4 seconds.",
            noEx: true
        },
        {
            code: "LD0C",
            gid: "L4",
            name: "S4:Cunning Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "During Wise Stance, boosts frontal damage by 15%.",
            noEx: true
        },
        {
            code: "LD0D",
            gid: "L4",
            name: "S4:Vampiric Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Restores HP equal to 1% of damage dealt.<br>(Max: 30)",
            noEx: true
        },
        {
            code: "LD0E",
            gid: "L4",
            name: "S4:Steadfast Courage",
            extend: [
                100,
                100,
                100
            ],
            effect: "Become immune to knockback by standing still<br>for a certain time.",
            noEx: true
        },
        {
            code: "LD0F",
            gid: "L4",
            name: "S4:Lustrous Trap",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases PP recovery from Tactics Trap by<br>20%.",
            noEx: true
        },
        {
            code: "LD0G",
            gid: "L4",
            name: "S4:Dynamic Chain",
            extend: [
                100,
                100,
                100
            ],
            effect: "Become invincible for 5 seconds when activating<br>Chain Trigger.",
            noEx: true
        },
        {
            code: "LD0H",
            gid: "L4",
            name: "S4:Refined Providence",
            extend: [
                100,
                100,
                100
            ],
            effect: "Enhances Element Conversion.",
            noEx: true
        },
        {
            code: "LD0I",
            gid: "L4",
            name: "S4:Circuit Rotation",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduces recast time of Photon Flare by 20%.",
            noEx: true
        },
        {
            code: "LD0J",
            gid: "L4",
            name: "S4:Swift Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Enhances Wand's normal attacks.",
            noEx: true
        },
        {
            code: "LD0K",
            gid: "L4",
            name: "S4:Gear Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decreases rate that Gear gauge empties while<br>Katana Gear is active.",
            noEx: true
        },
        {
            code: "LD0L",
            gid: "L4",
            name: "S4:Rapid-fire Arrow",
            extend: [
                100,
                100,
                100
            ],
            effect: "Bullet Bow damage is boosted by 3% during<br>Rapid Shot.",
            noEx: true
        },
        {
            code: "LD0M",
            gid: "L4",
            name: "S4:Support Extension",
            extend: [
                100,
                100,
                100
            ],
            effect: "Extends the effect of Shifta and Deband to<br>last 120 seconds.",
            noEx: true
        },
        {
            code: "LD0N",
            gid: "L4",
            name: "S4:Genesis Ring",
            extend: [
                100,
                100,
                100
            ],
            effect: "Changes the weapon's element to match an equipped<br>Guard ring.",
            noEx: true
        },
        {
            code: "LD0O",
            gid: "L4",
            name: "S4:Heavenly Protection",
            extend: [
                100,
                100,
                100
            ],
            effect: "Bestow Natural PP Recovery and<br>increase PP recovery rate while Guarding.",
            noEx: true
        },
        {
            code: "LD0P",
            gid: "L4",
            name: "S4:Calming Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase the power of<br>Normal Attacks by 13%.",
            noEx: true
        },
        {
            code: "LD0Q",
            gid: "L4",
            name: "S4:Mysterious Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce Critical Hit Rate by 50% and<br>increase the power of Critical Hits by 6%.",
            noEx: true
        },
        {
            code: "LD0R",
            gid: "L4",
            name: "S4:Saint Shield",
            extend: [
                100,
                100,
                100
            ],
            effect: "Generates a barrier (-50% Damage Taken,<br>Negate Knockback) at regular intervals",
            noEx: true
        },
        {
            code: "OA01",
            gid: "AC",
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
            gid: "AC",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            effect: "T-ATK(+30),<br>PP(+3)",
            tooltip: "Used for: Soul Catalyst"
        },
        {
            code: "RC31",
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            effect: "R-DEF(+30),<br>HP(+10),<br>PP(+3)",
            tooltip: "Used for: Soul Catalyst"
        },
        {
            code: "RI23",
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            effect: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
            tooltip: "Used for: Soul Catalyst"
        },
        {
            code: "ROC3",
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            gid: "EA",
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
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40)",
            tooltip: "Used for: Soul Catalyst"
        },
        {
            code: "RPA5",
            gid: "EA",
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
            gid: "EA",
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
            effect: "HP(+40),<br>PP(+3)",
            tooltip: "Used for: Soul Catalyst"
        },
        {
            code: "RZ01",
            gid: "EA",
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
            effect: "ALL(+15),<br>HP(+15),<br>PP(+2)",
            tooltip: "Used for: Astral Soul"
        },
        {
            code: "SA01",
            gid: "EA",
            name: "Astral Soul",
            effect: "ALL(+35),<br>HP(+35),<br>PP(+5)",
            tooltip: "Made by: 4x Soul Catalyst + Darkness Soul"
        },
        {
            code: "SA11",
            gid: "EA",
            name: "Ether Soul",
            extend: [
                0,
                50,
                80
            ],
            effect: "ALL(+15),<br>HP(+15),<br>PP(+2)",
            tooltip: "Made by: 2 of the following: Escarde Soul, Toh\'oh Soul, Full Vegas Soul<br>Used for: Ether Factor"
        },
        {
            code: "SB01",
            gid: "EA",
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
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Ether Soul"
        },
        {
            code: "SB02",
            gid: "EA",
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
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Ether Soul"
        },
        {
            code: "SB03",
            gid: "EA",
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
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Ether Soul"
        },
        {
            code: "SB04",
            gid: "EA",
            name: "Fabula Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TK"
            ],
            rel: "soul",
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Omega Memoria"
        },
        {
            code: "SB05",
            gid: "EA",
            name: "Historia Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TK"
            ],
            rel: "soul",
            effect: "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>HP(+30),<br>PP(+2)",
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Omega Memoria"
        },
        {
            code: "SH10",
            gid: "EA",
            name: "Act The Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "S-ATK(+35),<br>PP(+3)",
            tooltip: "Made by: Earth/Omega Soul + Free Field Boss Soul"
        },
        {
            code: "SH20",
            gid: "EA",
            name: "Till The Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "R-ATK(+35),<br>PP(+3)",
            tooltip: "Made by: Earth/Omega Soul + Free Field Boss Soul"
        },
        {
            code: "SH30",
            gid: "EA",
            name: "Magi The Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "T-ATK(+35),<br>PP(+3)",
            tooltip: "Made by: Earth/Omega Soul + Free Field Boss Soul"
        },
        {
            code: "SH40",
            gid: "EA",
            name: "Ares The Soul",
            extend: [
                0,
                25,
                40
            ],
            effect: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>HP(+35),<br>PP(+3)",
            tooltip: "Made by: Earth/Omega Soul + Free Field Boss Soul"
        },
        {
            code: "TA01",
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
            name: "ARKS Max",
            extend: [
                0,
                30,
                50
            ],
            effect: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25)",
            tooltip: "Made by: 2/3x ARKS Fever"
        },
        {
            code: "TG02",
            gid: "AC",
            name: "Yamato Factor",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+10),<br>R-ATK(+20),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
            tooltip: "Used for: Factor Catalyst"
        },
        {
            code: "TG03",
            gid: "AC",
            name: "Mother Factor",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+20),<br>HP(+20),<br>PP(+1)",
            tooltip: "Used for: Factor Catalyst"
        },
        {
            code: "TG04",
            gid: "AC",
            name: "Deus Factor",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+20),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
            tooltip: "Used for: Factor Catalyst"
        },
        {
            code: "TG31",
            gid: "AC",
            name: "Ether Factor",
            effect: "ALL(+30),<br>HP(+10),<br>PP(+6)",
            tooltip: "Made by: 4x Factor Catalyst + Ether Soul"
        },
        {
            code: "TK01",
            gid: "AC",
            name: "Omega Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)",
            tooltip: "Used for: Omega Memoria"
        },
        {
            code: "TK11",
            gid: "AC",
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
            code: "TK21",
            gid: "AC",
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
            code: "TK31",
            gid: "AC",
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
            code: "TK41",
            gid: "AC",
            name: "Double Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(-20),<br>R-ATK(-20),<br>T-ATK(-20),<br>HP(+50),<br>PP(+5)"
        },
        {
            code: "TJ01",
            gid: "AC",
            name: "Omega Memoria",
            extend: [
                0,
                50,
                80
            ],
            effect: "ALL(+15),<br>HP(+15),<br>PP(+2)",
            tooltip: "Made by: Fabula Soul, Historia Soul, Omega Reverie"
        },
        {
            code: "TE01",
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
            name: "Doom Break",
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
            code: "TH02",
            gid: "AC",
            name: "Doom Break 2",
            extend: [
                0,
                50,
                80
            ],
            extup: [
                "FA03"
            ],
            rel: "doom2",
            effect: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>PP(+3)",
            tooltip: "Made by: 3-5x Doom Break"
        },
        {
            code: "LP01",
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            gid: "AB",
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
            code: "LR01",
            gid: "AB",
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
            code: "LR02",
            gid: "AB",
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
            code: "LR03",
            gid: "AB",
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
            code: "LR04",
            gid: "AB",
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
            code: "LR05",
            gid: "AB",
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
            gid: "AB",
            name: "EV Power HP",
            effect: "S-ATK(+35),<br>HP(+60)"
        },
        {
            code: "LP07",
            gid: "AB",
            name: "EV Power PP",
            effect: "S-ATK(+35),<br>PP(+4)"
        },
        {
            code: "LS06",
            gid: "AB",
            name: "EV Shoot HP",
            effect: "R-ATK(+35),<br>HP(+60)"
        },
        {
            code: "LS07",
            gid: "AB",
            name: "EV Shoot PP",
            effect: "R-ATK(+35),<br>PP(+4)"
        },
        {
            code: "LT06",
            gid: "AB",
            name: "EV Technique HP",
            effect: "T-ATK(+35),<br>HP(+60)"
        },
        {
            code: "LT07",
            gid: "AB",
            name: "EV Technique PP",
            effect: "T-ATK(+35),<br>PP(+4)"
        },
        {
            code: "TD01",
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
            name: "St. Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "R-ATK(+10),<br>DEX(+5),<br>PP(+2)"
        },
        {
            code: "TD06",
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
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
            gid: "EB",
            name: "ARKS Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>DEX(+5),<br>PP(+5)",
            tooltip: "Used for: ARKS Max"
        },
        {
            code: "UA01",
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
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
            gid: "AC",
            name: "Mark Joyo",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+5)"
        },
        {
            code: "UC11",
            gid: "AC",
            name: "Mark Couragena",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)"
        },
        {
            code: "UC21",
            gid: "AC",
            name: "Mark Angar",
            effect: "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)"
        },
        {
            code: "UC31",
            gid: "AC",
            name: "Mark Grif",
            effect: "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)"
        },
        {
            code: "YA01",
            gid: "AC",
            name: "Sentence Power",
            effect: "S-ATK(+20),<br>PP(+4)"
        },
        {
            code: "YA05",
            gid: "CB",
            name: "Sentence Arma",
            effect: "S-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            code: "YA11",
            gid: "AC",
            name: "Sentence Shoot",
            effect: "R-ATK(+20),<br>PP(+4)"
        },
        {
            code: "YA15",
            gid: "CB",
            name: "Sentence Tiro",
            effect: "R-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            code: "YA21",
            gid: "AC",
            name: "Sentence Tech",
            effect: "T-ATK(+20),<br>PP(+4)"
        },
        {
            code: "YA25",
            gid: "CB",
            name: "Sentence Magia",
            effect: "T-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            code: "YA31",
            gid: "CB",
            name: "Sentence Triple",
            effect: "S-ATK(+30),R-ATK(+30),T-ATK(+30)"
        },
        {
            code: "YB41",
            gid: "CB",
            name: "Phrase Reduce",
            effect: "PP consumption decreases by 4%."
        },
        {
            code: "YB51",
            gid: "CB",
            name: "Phrase Decay",
            effect: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%."
        },
        {
            code: "YB01",
            gid: "CB",
            name: "Phrase Recovery",
            effect: "+5% PP Recovery Rate"
        },
        {
            code: "YB11",
            gid: "CB",
            name: "Phrase Weak",
            effect: "+2% Elemental Weakness damage"
        },
        {
            code: "YB21",
            gid: "CB",
            name: "Phrase Response",
            effect: "+5% ATK PP Recovery"
        },
        {
            code: "YB31",
            gid: "CB",
            name: "Phrase Chase",
            effect: "+5% damage against enemies<BR>with Status Effects"
        },
        {
            code: "VA01",
            gid: "YA",
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
            gid: "YA",
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
            gid: "YA",
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
            gid: "YA",
            name: "Meseta Fever I",
            lvup: "VZ02",
            extend: [
                0,
                75,
                100
            ],
            require: "XC01",
            effect: "Meseta Drop Amount +5%"
        },
        {
            code: "VZ02",
            gid: "YA",
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
            gid: "YA",
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
            gid: "YA",
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
            gid: "YA",
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
            gid: "YA",
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
            gid: "YA",
            name: "Temptation",
            effect: "Item Drop Rate +10%"
        },
        {
            code: "VE01",
            gid: "YA",
            name: "Another History",
            effect: "Experience Gain +10%"
        },
        {
            code: "VF01",
            gid: "YA",
            name: "Fresh Sign",
            effect: "Boost EXP by 30% until Lv.30"
        },
        {
            code: "VH01",
            gid: "YA",
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
            code: "VH11",
            gid: "CB",
            name: "Omega Buster",
            effect: "Boosts damage against Demons by 3%."
        },
        {
            code: "VJ01",
            gid: "YA",
            name: "Soul Catalyst",
            extend: [
                0,
                10,
                30
            ],
            effect: "HP(+10),<br>PP(+1)",
            tooltip: "Made by: Elder Soul, Loser Soul, Apprentice Soul,<br>Double Soul, Persona Soul<br>Used for: Astral Soul"
        },
        {
            code: "VJ11",
            gid: "YA",
            name: "Factor Catalyst",
            extend: [
                0,
                10,
                30
            ],
            effect: "HP(+10),<br>PP(+1)",
            tooltip: "Made by: Deus Factor, Mother Factor, Yamato Factor<br>Used for: Ether Factor"
        },
        {
            code: "VK03",
            gid: "YA",
            name: "Polytan Smile",
            extend: [
                100,
                100,
                100
            ],
            effect: "Adds 25 EXP to NT weapon grinds."
        },
        {
            code: "VK04",
            gid: "YA",
            name: "Arkuma Smile",
            extend: [
                100,
                100,
                100
            ],
            effect: "Adds 25 EXP to NT weapon grinds."
        },
        {
            code: "VK01",
            gid: "YA",
            name: "Emper Embrace",
            extend: [
                100,
                100,
                100
            ],
            effect: "Adds 90 EXP to NT weapon grinds."
        },
        {
            code: "VK05",
            gid: "YA",
            name: "NT Weapon Booster",
            extend: [
                100,
                100,
                100
            ],
            effect: "Adds 800 EXP to NT weapon grinds."
        },
        {
            code: "WA01",
            gid: "GB",
            name: "Photon Collect",
            effect: "Boosts status effect affix rate"
        },
        {
            code: "XA01",
            gid: "GB",
            name: "Soul Receptor",
            effect: "Greatly increases Soul affix rate"
        },
        {
            code: "XB01",
            gid: "GB",
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
            gid: "GB",
            name: "Gift Receptor",
            effect: "Allows transfer of Gift affixes"
        },
        {
            code: "XD01",
            gid: "GB",
            name: "Sentence Receptor",
            effect: "Boosts transfer of Sentence affixes<br>ALL(+10)"
        },
        {
            code: "XE01",
            gid: "GB",
            name: "Phrase Receptor",
            effect: "Boosts transfer of Phrase affixes<br>ALL(+10)"
        },
        {
            code: "XF01",
            gid: "GB",
            name: "Factor Receptor",
            effect: "Boosts Factor-type ability transfer rates.<br>ALL(+10)"
        },
        {
            code: "XG01",
            gid: "GB",
            name: "Mark Receptor",
            effect: "Allows transfer Mark-type ability.<br>ALL(+10)"
        },
        {
            code: "XI30",
            gid: "GB",
            name: "Attack Receptor",
            effect: "Greatly increases affix rate of <br>Power, Shoot, Technique, Arm<br>ALL(+5)"
        },
        {
            code: "XI31",
            gid: "GB",
            name: "Guard Receptor",
            effect: "Greatly increases affix rate of <br>Mind, Body, React<br>ALL(+5)"
        },
        {
            code: "XI32",
            gid: "GB",
            name: "Photon Receptor",
            effect: "Greatly increases affix rate of <br>Stamina, Spirita<br>ALL(+5)"
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
            code: "ZA01",
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
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
            gid: "ZZ",
            name: "Junk I",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        }
    ]
}