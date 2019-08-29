let data = {
    optionList: {
        // List of items that increase success rate
        support: [
            {
                ref: 0,
                id: "Nothing",
                name: "None",
                value: "A01",
                fn: function (a) {
                    return a
                }
            },
            {
                ref: 1,
                id: "Ability Success Rate +5%",
                name: "+5%",
                value: "A02",
                fn: function (a) {
                    return Math.min(a + 5, 100)
                }
            },
            {
                ref: 2,
                id: "Ability Success Rate +10%",
                name: "+10%",
                value: "A03",
                fn: function (a) {
                    return Math.min(a + 10, 100)
                }
            },
            {
                ref: 3,
                id: "Ability Success Rate +20%",
                name: "+20%",
                value: "A04",
                fn: function (a) {
                    return Math.min(a + 20, 100)
                }
            },
            {
                ref: 4,
                id: "Ability Success Rate +30%",
                name: "+30%",
                value: "A05",
                fn: function (a) {
                    return Math.min(a + 30, 100)
                }
            },
            {
                ref: 5,
                id: "Ability Success Rate +40%",
                name: "+40%",
                value: "A06",
                fn: function (a) {
                    return Math.min(a + 40, 100)
                }
            },
            {
                ref: 6,
                id: "Ability Success Rate +45%",
                name: "+45%",
                value: "A07",
                fn: function (a) {
                    return Math.min(a + 45, 100)
                }
            },
            {
                ref: 7,
                id: "Ability Success Rate +50%",
                name: "+50%",
                value: "A08",
                fn: function (a) {
                    return Math.min(a + 50,
                        100)
                }
            }
        ],
        // List of Add Abilities
        additional: [
            {
                id: "Nothing",
                value: "B01"
            },
            {
                ref: 462,
                id: "Add Ability (HP)",
                name: "Stamina Boost",
                value: "B02",
                extend: 100,
                effect: "HP(+45)"
            },
            {
                ref: 463,
                id: "Add Ability (PP)",
                name: "Spirita Boost",
                value: "B03",
                extend: 100,
                effect: "PP(+5)"
            },
            {
                ref: 464,
                id: "Add Ability (S-ATK)",
                name: "Power Boost",
                value: "B04",
                extend: 100,
                effect: "S-ATK(+25)"
            },
            {
                ref: 465,
                id: "Add Ability (R-ATK)",
                name: "Shoot Boost",
                value: "B05",
                extend: 100,
                effect: "R-ATK(+25)"
            },
            {
                ref: 466,
                id: "Add Ability (T-ATK)",
                name: "Technique Boost",
                value: "B06",
                extend: 100,
                effect: "T-ATK(+25)"
            },
            {
                ref: 467,
                id: "Add Ability (Tenora)",
                name: "Tenora Boost",
                value: "B0a",
                extend: 100,
                effect: "S-ATK(+35)"
            },
            {
                ref: 468,
                id: "Add Ability (GRM)",
                name: "GRM Boost",
                value: "B0b",
                extend: 100,
                effect: "R-ATK(+35)"
            },
            {
                ref: 469,
                id: "Add Ability (Yohmei)",
                name: "Yohmei Boost",
                value: "B0c",
                extend: 100,
                effect: "T-ATK(+35)"
            },
            {
                ref: 470,
                id: "Add Ability (HP&PP)",
                name: "Noble Stamina",
                value: "B10",
                extend: 100,
                effect: "HP(+50),PP(+3)"
            },
            {
                ref: 471,
                id: "Add Ability (HP&PP/2)",
                name: "Elegant Stamina",
                value: "B14",
                extend: 100,
                effect: "HP(+70),PP(+4)"
            },
            {
                ref: 472,
                id: "Add Ability (HP&PP/3)",
                name: "Grace Stamina",
                value: "B18",
                extend: 100,
                effect: "HP(+80),PP(+5)"
            },
            {
                ref: 473,
                id: "Add Ability (S-ATK&PP)",
                name: "Noble Power",
                value: "B07",
                extend: 100,
                effect: "S-ATK(+30),PP(+3)"
            },
            {
                ref: 474,
                id: "Add Ability (S-ATK&PP/2)",
                name: "Elegant Power",
                value: "B11",
                extend: 100,
                effect: "S-ATK(+40),PP(+4)"
            },
            {
                ref: 475,
                id: "Add Ability (S-ATK&PP/3)",
                name: "Grace Power",
                value: "B15",
                extend: 100,
                effect: "S-ATK(+50),PP(+5)"
            },
            {
                ref: 476,
                id: "Add Ability (R-ATK&PP)",
                name: "Noble Shoot",
                value: "B08",
                extend: 100,
                effect: "R-ATK(+30),PP(+3)"
            },
            {
                ref: 477,
                id: "Add Ability (R-ATK&PP/2)",
                name: "Elegant Shoot",
                value: "B12",
                extend: 100,
                effect: "R-ATK(+40),PP(+4)"
            },
            {
                ref: 478,
                id: "Add Ability (R-ATK&PP/3)",
                name: "Grace Shoot",
                value: "B16",
                extend: 100,
                effect: "R-ATK(+50),PP(+5)"
            },
            {
                ref: 479,
                id: "Add Ability (T-ATK&PP)",
                name: "Noble Technique",
                value: "B09",
                extend: 100,
                effect: "T-ATK(+30),PP(+3)"
            },
            {
                ref: 480,
                id: "Add Ability (T-ATK&PP/2)",
                name: "Elegant Technique",
                value: "B13",
                extend: 100,
                effect: "T-ATK(+40),PP(+4)"
            },
            {
                ref: 481,
                id: "Add Ability (T-ATK&PP/3)",
                name: "Grace Technique",
                value: "B17",
                extend: 100,
                effect: "T-ATK(+50),PP(+5)"
            },
            {
                ref: 482,
                id: "Add Ability (Offense Focus)",
                name: "Offense Boost",
                value: "B20",
                extend: 100,
                effect: "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)"
            },
            {
                ref: 483,
                id: "Add Ability (Defense Focus)",
                name: "Defense Boost",
                value: "B21",
                extend: 100,
                effect: "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)"
            },
            {
                ref: 459,
                id: "Add Ability (Attack Inherit)",
                name: "Attack Receptor",
                value: "B30",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                ref: 460,
                id: "Add Ability (Defense Inherit)",
                name: "Guard Receptor",
                value: "B31",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                ref: 461,
                id: "Add Ability (Photon Inherit)",
                name: "Photon Receptor",
                value: "B32",
                extend: 100,
                effect: "ALL(+5)"
            },
            {
                ref: 458,
                id: "Add Ability (Mark Receptor)",
                name: "Mark Receptor",
                value: "XG01",
                extend: 100,
                effect: "ALL(+10)"
            },
            {
                ref: 160,
                id: "S1 Add: Photon Reduction 2",
                name: "S1:Photon Reduction 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 161,
                id: "S1 Add: Brilliant Ruin 2",
                name: "S1:Brilliant Ruin 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 162,
                id: "S1 Add: Flowing Intent",
                name: "S1:Flowing Intent",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 163,
                id: "S1 Add: Lethal Intent",
                name: "S1:Lethal Intent",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 168,
                id: "S1 Add: Reckless Strike",
                name: "S1:Reckless Strike",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 169,
                id: "S1 Add: Eclipsing Decay",
                name: "S1:Eclipsing Decay",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 164,
                id: "S1 Add: Augment Intent",
                name: "S1:Augment Intent",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 493,
                id: "S1 Add: Photon Balance",
                name: "S1:Photon Balance",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 199,
                id: "S2 Add: Umbrageous Melody",
                name: "S2:Umbrageous Melody",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 200,
                id: "S2 Add: Nature's Reduction 2",
                name: "S2:Nature's Reduction 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 201,
                id: "S2 Add: Umbrageous Radiance 2",
                name: "S2:Umbrageous Radiance 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 202,
                id: "S2 Add: Wise Skill 2",
                name: "S2:Wise Skill 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 203,
                id: "S2 Add: Skilled Strike 2",
                name: "S2:Skilled Strike 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 204,
                id: "S2 Add: Radiant Strike 2",
                name: "S2:Radiant Strike 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 209,
                id: "S2 Add: Runner's High",
                name: "S2:Runner's High",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 210,
                id: "S2 Add: Skill Reduction",
                name: "S2:Skill Reduction",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 497,
                id: "S2 Add: Heavenly Keeper",
                name: "S2:Heavenly Keeper",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 499,
                id: "S2 Add: Flowing Armor",
                name: "S2:Flowing Armor",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 232,
                id: "S3 Add: Nature's Melody",
                name: "S3:Nature's Melody",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 233,
                id: "S3 Add: Nature's Gleam 2",
                name: "S3:Nature's Gleam 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 234,
                id: "S3 Add: Flowing Grace",
                name: "S3:Flowing Grace",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 235,
                id: "S3 Add: Flowing Exhilaration 2",
                name: "S3:Flowing Exhilaration 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 236,
                id: "S3 Add: Radiating Grace 2",
                name: "S3:Radiating Grace 2",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 239,
                id: "S3 Add: Calming Exhilaration",
                name: "S3:Calming Exhilaration",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 240,
                id: "S3 Add: Fortifying Strike",
                name: "S3:Fortifying Strike",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 241,
                id: "S3 Add: Curtailed Strike",
                name: "S3:Curtailed Strike",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 242,
                id: "S3 Add: Wise Strike",
                name: "S3:Wise Strike",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 498,
                id: "S3 Add: Flowing Courage",
                name: "S3:Flowing Courage",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 260,
                id: "S4 Add: Heavenly Protection",
                name: "S4:Heavenly Protection",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 261,
                id: "S4 Add: Calming Intent",
                name: "S4:Calming Intent",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 262,
                id: "S4 Add: Mysterious Strike",
                name: "S4:Mysterious Strike",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 263,
                id: "S4 Add: Saint Shield",
                name: "S4:Saint Shield",
                value: "",
                extend: 100,
                effect: ""
            },
            {
                ref: 264,
                id: "S4 Add: Colored Spectrum",
                name: "S4:Colored Spectrum",
                value: "",
                extend: 100,
                effect: ""
            }
        ],
        // List of weapon potentials
        potential: [
            {
                ref: 0,
                id: "Nothing",
                name: "Nothing",
                value: "C01",
                fn: function (a) {
                    return a
                }
            },
            {
                ref: 1,
                id: "Guidance of Life Lv1 (+2%)",
                name: "+2%",
                value: "C11",
                fn: function (a) {
                    return Math.min(a + 2,
                        100)
                }
            },
            {
                ref: 2,
                id: "Guidance of Life Lv2 (+5%)",
                name: "+5%",
                value: "C12",
                fn: function (a) {
                    return Math.min(a + 5,
                        100)
                }
            },
            {
                ref: 3,
                id: "Guidance of Life Lv3 (+10%)",
                name: "+10%",
                value: "C13",
                fn: function (a) {
                    return Math.min(a + 10,
                        100)
                }
            }
        ],
        // List of boost week additional success rate (in %)
        boostWeek: [0, 5, 10, 15]
    },
    // Sets of abilities that cannot be put together in a fodder
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
                "XG", // Mark Receptor
                "XI" // With other Add Abilities
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
                "XG", // Mark Receptor
                "XI" // With other Add Abilities
            ]
        ]
    },
    // Sets of abilities that together can produce another ability
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
                "SI*"
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
                "TK02",
                "TK03",
                "TK04",
                "TK05",
                "TK06"
            ],
            ref: "VJ03",
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
            ref: "VJ02",
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
                "VJ02",
                "VJ02",
                "VJ02",
                "VJ02",
                "SA11"
            ],
            ref: "TG31",
            success: 60
        },
		{
            base: [
                "VJ03",
                "VJ03",
                "VJ03",
                "VJ03",
                "TJ01"
            ],
            ref: "TK10",
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
                "SI01",
                "RA11"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RA15"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RA21"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RA23"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RB22"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RC13"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RH21"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RH23"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RI23"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "RJ22"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "ROA2"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "ROC1"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI01",
                "ROE1"
            ],
            ref: [
                "SH10"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RA11"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RA15"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RA21"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RA23"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RB22"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RC13"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RH21"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RH23"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RI23"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "RJ22"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "ROA2"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "ROC1"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI02",
                "ROE1"
            ],
            ref: [
                "SH20"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RA11"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RA15"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RA21"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RA23"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RB22"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RC13"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RH21"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RH23"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RI23"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "RJ22"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "ROA2"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "ROC1"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI03",
                "ROE1"
            ],
            ref: [
                "SH30"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RA11"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RA15"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RA21"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RA23"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RB22"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RC13"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RH21"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RH23"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RI23"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "RJ22"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "ROA2"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "ROC1"
            ],
            ref: [
                "SH40"
            ],
            success: 90
        },
        {
            base: [
                "SI04",
                "ROE1"
            ],
            ref: [
                "SH40"
            ],
            success: 90
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
    // Overall success rate multiplier per slot count (from 1 to maximum)
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
    // Special abilities that increase success rate of certain abilities
    // Increase in success rate depends on the type specified below.
    // Complex logic in affixDataParser
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
        },
        divinewill: {
            extend: {
                "1": [
                    20
                ]
            }
        },
        divineorder: {
            extend: {
                "1": [
                    30
                ]
            }
        }
    },
    // Overall multiplier for when using the same equip as fodder during affixing
    sameBonusBoost: [
        1, // Using only main fodder (impossible)
        1.1, // Using 1 fodder + main fodder
        1.15 // Using 2+ fodders + main fodder
    ],
    // Currently unused: List of abilities boosted by the boostday system
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
            "Doom Break I",
			"Doom Break II",
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
    // Sets of abilities that are exceptions to the excludePattern rules described above
    pairingExceptions: {
        strict: [ // Always checked
            [ // Extreme Receptor + Any Soul
                "XB01",
                "R"
            ],
            [ // Soul Receptor + Gift Receptor
                "XA",
                "XC"
            ],
            [ // Soul Receptor + Factor Receptor
                "XA",
                "XF"
            ],
            [ // Gift Receptor + Factor Receptor
                "XC",
                "XF"
            ]
        ],
        lenient: [ // Only checked if explicitly told to (used for tweaks)
            [ // Soul Receptor + Anything (due to Special Ability Factor)
                "XA",
                ""
            ],
            [ // Factor Receptor + Anything (due to Special Ability Factor)
                "XF",
                ""
            ]
        ]
    },
    // List of all available abilities
    // Requirements:
    // - ref: unique ID, new abilities MUST have a ref different from all others
    // - code: code for compatibility with PSO2 Affixing Simulator
    // Specific to certain abilities:
    // - lvup: code of the upgrade of this ability
    // - extend: success rates to transfer the ability based on the number of abilities used
    // - generate: success rates to upgrade to this ability based on the number of abilities used
    // - noEx: used for SSAs, sets success rate to always 100%
    // - status: used for calculating specific bonus from boostPoint described above (such as mutation)
    // - rel: used for calculating specific bonus from boostPoint described above (such as soul)
    // - extup: ability codes that can benefit from bonus of boostPoint described above (such as soul)
    abilityList: [
        {
            ref: 0,
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
            ref: 1,
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
            ref: 2,
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
            ref: 3,
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
            ref: 4,
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
            ref: 5,
            code: "AA06",
            gid: "CB",
            name: "Power VI",
            status: 1,
            effect: "S-ATK(+45)"
        },
        {
            ref: 6,
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
            ref: 7,
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
            ref: 8,
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
            ref: 9,
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
            ref: 10,
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
            ref: 11,
            code: "AB06",
            gid: "CB",
            name: "Shoot VI",
            status: 1,
            effect: "R-ATK(+45)"
        },
        {
            ref: 12,
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
            ref: 13,
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
            ref: 14,
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
            ref: 15,
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
            ref: 16,
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
            ref: 17,
            code: "AC06",
            gid: "CB",
            name: "Technique VI",
            status: 1,
            effect: "T-ATK(+45)"
        },
        {
            ref: 18,
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
            ref: 19,
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
            ref: 20,
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
            ref: 21,
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
            ref: 22,
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
            ref: 23,
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
            ref: 24,
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
            ref: 25,
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
            ref: 26,
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
            ref: 27,
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
            ref: 28,
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
            ref: 29,
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
            ref: 30,
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
            ref: 31,
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
            ref: 32,
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
            ref: 33,
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
            ref: 34,
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
            ref: 35,
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
            ref: 36,
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
            ref: 37,
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
            ref: 38,
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
            ref: 39,
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
            ref: 40,
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
            ref: 41,
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
            ref: 42,
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
            ref: 43,
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
            ref: 44,
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
            ref: 45,
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
            ref: 46,
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
            ref: 47,
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
            ref: 48,
            code: "EB06",
            gid: "CB",
            name: "Spirita VI",
            status: 1,
            effect: "PP(+7)"
        },
        {
            ref: 49,
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
            ref: 50,
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
            ref: 51,
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
            ref: 52,
            code: "FA04",
            gid: "CB",
            name: "Ability IV",
            effect: "ALL(+20)"
        },
        {
            ref: 53,
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
            ref: 54,
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
            ref: 55,
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
            ref: 56,
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
            ref: 57,
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
            ref: 58,
            code: "HB01",
            gid: "DA",
            name: "Shoot Resist I",
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
            ref: 59,
            code: "HB02",
            gid: "DA",
            name: "Shoot Resist II",
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
            ref: 60,
            code: "HB03",
            gid: "DA",
            name: "Shoot Resist III",
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
            ref: 61,
            code: "HB04",
            gid: "DA",
            name: "Shoot Resist IV",
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
            ref: 62,
            code: "HB05",
            gid: "DA",
            name: "Shoot Resist V",
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
            ref: 63,
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
            ref: 64,
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
            ref: 65,
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
            ref: 66,
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
            ref: 67,
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
            ref: 68,
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
            ref: 69,
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
            ref: 70,
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
            ref: 71,
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
            ref: 72,
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
            ref: 73,
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
            ref: 74,
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
            ref: 75,
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
            ref: 76,
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
            ref: 77,
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
            ref: 78,
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
            ref: 79,
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
            ref: 80,
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
            ref: 81,
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
            ref: 82,
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
            ref: 83,
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
            ref: 84,
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
            ref: 85,
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
            ref: 86,
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
            ref: 87,
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
            ref: 88,
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
            ref: 89,
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
            ref: 90,
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
            ref: 91,
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
            ref: 92,
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
            ref: 93,
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
            ref: 94,
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
            ref: 95,
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
            ref: 96,
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
            ref: 97,
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
            ref: 98,
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
            ref: 99,
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
            ref: 100,
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
            ref: 101,
            code: "HZ04",
            gid: "DA",
            name: "All Resist IV",
            status: 2,
            effect: "All Resist(+4)"
        },
        {
            ref: 102,
            code: "HZ05",
            gid: "DA",
            name: "All Resist V",
            status: 2,
            effect: "All Resist(+5)"
        },
        {
            ref: 103,
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
            ref: 104,
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
            ref: 105,
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
            ref: 106,
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
            ref: 107,
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
            ref: 108,
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
            ref: 109,
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
            ref: 110,
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
            ref: 111,
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
            ref: 112,
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
            ref: 113,
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
            ref: 114,
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
            ref: 115,
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
            ref: 116,
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
            ref: 117,
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
            ref: 118,
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
            ref: 119,
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
            ref: 120,
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
            ref: 121,
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
            ref: 122,
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
            ref: 123,
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
            ref: 124,
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
            ref: 125,
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
            ref: 126,
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
            ref: 127,
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
            ref: 128,
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
            ref: 129,
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
            ref: 130,
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
            ref: 131,
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
            ref: 132,
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
            ref: 133,
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
            ref: 134,
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
            ref: 135,
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
            ref: 136,
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
            ref: 137,
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
            ref: 138,
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
            ref: 139,
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
            ref: 140,
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
            ref: 141,
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
            ref: 142,
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
            ref: 143,
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
            ref: 144,
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
            ref: 145,
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
            ref: 146,
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
            ref: 147,
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
            ref: 148,
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
            ref: 149,
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
            ref: 150,
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
            ref: 151,
            code: "LA25",
            gid: "L1",
            name: "S1:Vigor Enhancement",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boost self HP recovery by 40%.",
            noEx: true
        },
        {
            ref: 152,
            code: "LA78",
            simCode: "LA2C",
            gid: "L1",
            name: "S1:Violent Invigoration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
            noEx: true
        },
        {
            ref: 153,
            code: "LA79",
            simCode: "LA2D",
            gid: "L1",
            name: "S1:Phanatical Advantage",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
            noEx: true
        },
        {
            ref: 154,
            code: "LA80",
            simCode: "LA27",
            gid: "L1",
            name: "S1:Powering Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage dealt to bosses by 4%.",
            noEx: true
        },
        {
            ref: 155,
            code: "LA81",
            simCode: "LA29",
            gid: "L1",
            name: "S1:Rupturing Excess",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase PP recovery rate by 40% when attacking breakable parts.",
            noEx: true
        },
        {
            ref: 156,
            code: "LA82",
            simCode: "LA26",
            gid: "L1",
            name: "S1:Spirited Response",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases PP regeneration rate (+80%) while sheathed.",
            noEx: true
        },
        {
            ref: 157,
            code: "LA83",
            simCode: "LA28",
            gid: "L1",
            name: "S1:Rupturing Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage against breakable parts by 4%.",
            noEx: true
        },
        {
            ref: 158,
            code: "LA84",
            simCode: "LA2B",
            gid: "L1",
            name: "S1:Sturdy Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage by 4% if your weapon's element or equipped Guard Ring match the enemy's elemental weakness.",
            noEx: true
        },
        {
            ref: 159,
            code: "LA85",
            simCode: "LA2A",
            gid: "L1",
            name: "S1:Phantasmal Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power based on the Photon Blast Gauge.",
            noEx: true
        },
        {
            ref: 160,
            code: "LA86",
            simCode: "LA2E",
            gid: "L1",
            name: "S1:Photon Reduction 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce PP consumption by 10%.",
            noEx: true
        },
        {
            ref: 161,
            code: "LA87",
            simCode: "LA2G",
            gid: "L1",
            name: "S1:Brilliant Ruin 2",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover PP when an enemy near you is defeated. (+4 PP)",
            noEx: true
        },
        {
            ref: 162,
            code: "LA88",
            simCode: "LA2I",
            gid: "L1",
            name: "S1:Flowing Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase power every second. Maxes at 4% (30s to MAX).",
            noEx: true
        },
        {
            ref: 163,
            code: "LA89",
            simCode: "LA2H",
            gid: "L1",
            name: "S1:Lethal Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce HP by 5% every 20 seconds and increase Power by 4%.",
            noEx: true
        },
        {
            ref: 164,
            code: "LA90",
            simCode: "LA2N",
            gid: "L1",
            name: "S1:Augment Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power based on the number of Special Abilities attached to this weapon. Maxes at 4%.",
            noEx: true
        },
        {
            ref: 165,
            code: "LA91",
            simCode: "LA2J",
            gid: "L1",
            name: "S1:Strike Boost",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power by 1% for every 60 S-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 S-ATK is affixed to this weapon.",
            noEx: true
        },
        {
            ref: 166,
            code: "LA92",
            simCode: "LA2K",
            gid: "L1",
            name: "S1:Shoot Boost",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power by 1% for every 60 R-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 R-ATK is affixed to this weapon.",
            noEx: true
        },
        {
            ref: 167,
            code: "LA93",
            simCode: "LA2L",
            gid: "L1",
            name: "S1:Tech Boost",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power by 1% for every 60 T-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 T-ATK is affixed to this weapon.",
            noEx: true
        },
        {
            ref: 168,
            code: "LA94",
            simCode: "LA2M",
            gid: "L1",
            name: "S1:Reckless Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Power every three times you are attacked. Upon being attacked a tenth time, release an explosion that incapacitates you and damages all nearby targets.",
            noEx: true
        },
        {
            ref: 169,
            code: "LA95",
            simCode: "LA2O",
            gid: "L1",
            name: "S1:Eclipsing Decay",
            extend: [
                100,
                100,
                100
            ],
            effect: "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
            noEx: true
        },
        {
            ref: 493,
            code: "LA2P",
            gid: "L1",
            name: "S1:Photon Balance",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases PP consumption by 8%, but boosts PA and Tech damage by 4%.",
            noEx: true
        },
        {
            ref: 170,
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
            ref: 171,
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
            ref: 172,
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
            ref: 173,
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
            ref: 174,
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
            ref: 175,
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
            ref: 176,
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
            ref: 177,
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
            ref: 178,
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
            ref: 179,
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
            ref: 180,
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
            ref: 181,
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
            ref: 182,
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
            ref: 183,
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
            ref: 184,
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
            ref: 185,
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
            ref: 186,
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
            ref: 187,
            code: "LB18",
            simCode: "LB1T",
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
            ref: 188,
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
            ref: 189,
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
            ref: 190,
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
            ref: 191,
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
            ref: 192,
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
            ref: 193,
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
            ref: 194,
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
            ref: 195,
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
            ref: 196,
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
            ref: 197,
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
            ref: 198,
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
            ref: 199,
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
            ref: 200,
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
            ref: 201,
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
            ref: 202,
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
            ref: 203,
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
            ref: 204,
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
            ref: 205,
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
            ref: 206,
            code: "LB89",
            simCode: "LB1S",
            gid: "L2",
            name: "S2:Instant Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
            noEx: true
        },
        {
            ref: 207,
            code: "LB90",
            simCode: "LB1V",
            gid: "L2",
            name: "S2:Flaming Guard",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Fire Attribute and Burn Resistance. Increase damage against enemies weak to Fire.",
            noEx: true
        },
        {
            ref: 208,
            code: "LB91",
            // simCode: "LB1V", // Currently the same as S2:Flaming Guard. This was wrong on the PSO2 Simulator site when this was updated here.
            gid: "L2",
            name: "S2:Freezing Guard",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Ice Attribute and Freeze Resistance. Increase damage against enemies weak to Ice.",
            noEx: true
        },
        {
            ref: 209,
            code: "LB92",
            simCode: "LB1U",
            gid: "L2",
            name: "S2:Runner's High",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
            noEx: true
        },
        {
            ref: 210,
            code: "LB93",
            simCode: "LB1X",
            gid: "L2",
            name: "S2:Skill Reduction",
            extend: [
                100,
                100,
                100
            ],
            effect: "Reduce PP consumption for 30 seconds upon hitting with a PA/Technique. Has a low chance to grant amplified effects. Triggers Recast upon activation.",
            noEx: true
        },
        {
            ref: 494,
            code: "LB1W",
            gid: "L2",
            name: "S2:Lightning Guard",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases your Lightning attribute and Shock resistance. Boosts power against enemies that are weak to Lightning.",
            noEx: true
        },
        {
            ref: 495,
            code: "LB1Y",
            gid: "L2",
            name: "S2:Storm Guard",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increases your Wind attribute and Shock resistance. Boosts power against enemies that are weak to Wind.",
            noEx: true
        },
        {
            ref: 496,
            code: "LB1Z",
            gid: "L2",
            name: "S2:Aegis Gift",
            extend: [
                100,
                100,
                100
            ],
            effect: "When you Just Guard at less than 25% HP, recovers HP by 50% and PP by 30%.",
            noEx: true
        },
        {
            ref: 497,
            code: "LB2A",
            gid: "L2",
            name: "S2:Heavenly Keeper",
            extend: [
                100,
                100,
                100
            ],
            effect: "In the air, reduces PP consumption by 8%. On the ground, boosts PP regeneration and attack PP recovery by 20%.",
            noEx: true
        },
        {
            ref: 499,
            code: "LB2C",
            gid: "L2",
            name: "S2:Flowing Armor",
            extend: [
                100,
                100,
                100
            ],
            effect: "Automatically casts Deband at regular intervals.",
            noEx: true
        },
        {
            ref: 211,
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
            ref: 212,
            code: "LC02",
            gid: "L3",
            name: "S3:Vital Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Boosts damage by 3% while HP is 80% or more.",
            noEx: true
        },
        {
            ref: 213,
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
            ref: 214,
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
            ref: 215,
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
            ref: 216,
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
            ref: 217,
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
            ref: 218,
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
            ref: 219,
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
            ref: 220,
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
            ref: 221,
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
            ref: 222,
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
            ref: 223,
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
            ref: 224,
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
            ref: 225,
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
            ref: 226,
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
            ref: 227,
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
            ref: 228,
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
            ref: 229,
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
            ref: 230,
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
            ref: 231,
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
            ref: 232,
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
            ref: 233,
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
            ref: 234,
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
            ref: 235,
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
            ref: 236,
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
            ref: 237,
            code: "LC88",
            // simCode: "LC1I", // Currently the same as S2:Flaming Guard. This was wrong on the PSO2 Simulator site when this was updated here.
            gid: "L3",
            name: "S3:Rupturing Intent",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase damage against breakable parts by 4%.",
            noEx: true
        },
        {
            ref: 238,
            code: "LC89",
            // simCode: "LC1H", // Currently the same as S2:Flaming Guard. This was wrong on the PSO2 Simulator site when this was updated here.
            gid: "L3",
            name: "S3:Nature's Gleam",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            noEx: true
        },
        {
            ref: 239,
            code: "LC90",
            // simCode: "LC1J", // Currently the same as S2:Flaming Guard. This was wrong on the PSO2 Simulator site when this was updated here.
            gid: "L3",
            name: "S3:Calming Exhilaration",
            extend: [
                100,
                100,
                100
            ],
            effect: "Recover 70 HP when you hit with a normal attack. Has a cooldown between uses.",
            noEx: true
        },
        {
            ref: 240,
            code: "LC91",
            // simCode: "LC1K", // Currently the same as S2:Flaming Guard. This was wrong on the PSO2 Simulator site when this was updated here.
            gid: "L3",
            name: "S3:Fortifying Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease damage taken by 1% for every 300, 000 damage dealt. Maxes at 15%.",
            noEx: true
        },
        {
            ref: 241,
            code: "LC92",
            simCode: "LC1L",
            gid: "L3",
            name: "S3:Curtailed Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease PP consumption by 1% for every 300, 000 damage dealt. Maxes at 15%.",
            noEx: true
        },
        {
            ref: 242,
            code: "LC93",
            simCode: "LC1M",
            gid: "L3",
            name: "S3:Wise Strike",
            extend: [
                100,
                100,
                100
            ],
            effect: "Increase Critical Hit Rate by 2% for every 300, 000 damage dealt. Maxes at 30%.",
            noEx: true
        },
        {
            ref: 498,
            code: "LC2B",
            simCode: "LB2B",
            gid: "L3",
            name: "S3:Flowing Courage",
            extend: [
                100,
                100,
                100
            ],
            effect: "Automatically casts Shifta at regular intervals.",
            noEx: true
        },
        {
            ref: 243,
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
            ref: 244,
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
            ref: 245,
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
            ref: 246,
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
            ref: 247,
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
            ref: 248,
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
            ref: 249,
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
            ref: 250,
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
            ref: 251,
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
            ref: 252,
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
            ref: 253,
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
            ref: 254,
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
            ref: 255,
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
            ref: 256,
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
            ref: 257,
            code: "LD0L",
            gid: "L4",
            name: "S4:Rapid-fire Arrow",
            extend: [
                100,
                100,
                100
            ],
            effect: "Bullet Bow damage is boosted by 3% during<br>Rapid Shoot.",
            noEx: true
        },
        {
            ref: 258,
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
            ref: 259,
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
            ref: 260,
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
            ref: 261,
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
            ref: 262,
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
            ref: 263,
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
            ref: 264,
            code: "LD0S",
            gid: "L4",
            name: "S4:Colored Spectrum",
            extend: [
                100,
                100,
                100
            ],
            effect: "Decrease Natural PP Recovery but decrease PP consumption when S1:Red Petal / Blue Ocean / White Snow / Yellow Moon / Green Leaf / Black Shadow Flash are active.",
            noEx: true
        },
        {
            ref: 265,
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
            ref: 266,
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
            ref: 267,
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
            ref: 268,
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
            ref: 269,
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
            ref: 270,
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
            ref: 271,
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
            ref: 272,
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
            ref: 273,
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
            ref: 274,
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
            ref: 275,
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
            ref: 276,
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
            ref: 277,
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
            ref: 278,
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
            ref: 279,
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
            ref: 280,
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
            ref: 281,
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
            ref: 282,
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
            ref: 283,
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
            ref: 284,
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
            ref: 285,
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
            ref: 286,
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
            ref: 287,
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
            ref: 288,
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
            ref: 289,
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
            ref: 290,
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
            ref: 291,
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
            ref: 292,
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
            ref: 293,
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
            ref: 294,
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
            ref: 295,
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
            ref: 296,
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
            ref: 297,
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
            ref: 298,
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
            ref: 299,
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
            ref: 300,
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
            ref: 301,
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
            ref: 302,
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
            ref: 303,
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
            ref: 304,
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
            ref: 305,
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
            ref: 306,
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
            ref: 307,
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
            ref: 308,
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
            ref: 309,
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
            ref: 310,
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
            ref: 311,
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
            ref: 312,
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
            ref: 313,
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
            ref: 314,
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
            ref: 315,
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
            ref: 316,
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
            ref: 317,
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
            ref: 318,
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
            ref: 319,
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
            ref: 320,
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
            ref: 321,
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
            ref: 322,
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
            ref: 323,
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
            ref: 324,
            code: "SA01",
            gid: "EA",
            name: "Astral Soul",
            effect: "ALL(+35),<br>HP(+35),<br>PP(+5)",
            tooltip: "Made by: 4x Soul Catalyst + Darkness Soul"
        },
        {
            ref: 325,
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
            ref: 326,
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
            ref: 327,
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
            ref: 328,
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
            ref: 329,
            code: "SB04",
            gid: "EA",
            name: "Fabula Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TK0"
            ],
            rel: "soul",
            effect: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Omega Memoria"
        },
        {
            ref: 330,
            code: "SB05",
            gid: "EA",
            name: "Historia Soul",
            extend: [
                0,
                60,
                90
            ],
            extup: [
                "TK0"
            ],
            rel: "soul",
            effect: "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>HP(+30),<br>PP(+2)",
            cls: "ef-soul",
            tooltip: "Used for: ___ The Soul, Omega Memoria"
        },
        {
            ref: 331,
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
            ref: 332,
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
            ref: 333,
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
            ref: 334,
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
            ref: 500,
            code: "SI01",
            gid: "EA",
            name: "Ex Act Soul",
            extend: [
                0,
                50,
                80
            ],
            effect: "S-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
            tooltip: "Used for: Act The Soul"
        },
        {
            ref: 501,
            code: "SI02",
            gid: "EA",
            name: "Ex Till Soul",
            extend: [
                0,
                50,
                80
            ],
            effect: "R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
            tooltip: "Used for: Till The Soul"
        },
        {
            ref: 502,
            code: "SI03",
            gid: "EA",
            name: "Ex Magi Soul",
            extend: [
                0,
                50,
                80
            ],
            effect: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
            tooltip: "Used for: Magi The Soul"
        },
        {
            ref: 503,
            code: "SI04",
            gid: "EA",
            name: "Ex Ares Soul",
            extend: [
                0,
                50,
                80
            ],
            effect: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+50), PP(+2)",
            tooltip: "Used for: Ares The Soul"
        },
        {
            ref: 335,
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
            ref: 336,
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
            ref: 337,
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
            ref: 338,
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
            ref: 339,
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
            ref: 340,
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
            ref: 341,
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
            ref: 342,
            code: "TG31",
            gid: "AC",
            name: "Ether Factor",
            effect: "ALL(+30),<br>HP(+10),<br>PP(+6)",
            tooltip: "Made by: 4x Factor Catalyst + Ether Soul"
        },
        {
            ref: 343,
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
            ref: 344,
            code: "TK02",
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
            ref: 345,
            code: "TK03",
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
            ref: 346,
            code: "TK04",
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
            ref: 347,
            code: "TK05",
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
            ref: 348,
            code: "TK06",
            gid: "AC",
            name: "Persona Reverie",
            extend: [
                0,
                30,
                50
            ],
            status: 6,
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>S-DEF(-20),<br>R-DEF(-20),<br>T-DEF(-20)",
            tooltip: "Used for: Reverie Catalyst"
        },
        {
            ref: 349,
            code: "TK10",
            gid: "AC",
            name: "Mana Reverie",
            status: 6,
            effect: "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>HP(+20),<br>PP(+4)",
            tooltip: "Made by: Omega Memoria + 4x Reverie Catalyst"
        },
        {
            ref: 350,
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
            ref: 351,
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
            ref: 352,
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
            ref: 353,
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
            ref: 354,
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
            ref: 355,
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
            ref: 504,
            code: "TM01",
            gid: "AC",
            name: "Crack I",
            lvup: "TM02",
            extend: [
                0,
                30,
                100
            ],
            status: 4,
            effect: "S-ATK(+3), R-ATK(+3), T-ATK(+3), S-DEF(+5), R-DEF(+5), T-DEF(+5), HP(+5), PP(+1)"
        },
        {
            ref: 505,
            code: "TM02",
            gid: "AC",
            name: "Crack II",
            lvup: "TM03",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                70,
                70
            ],
            status: 4,
            effect: "S-ATK(+5), R-ATK(+5), T-ATK(+5), S-DEF(+10), R-DEF(+10), T-DEF(+10), HP(+10), PP(+1)"
        },
        {
            ref: 506,
            code: "TM03",
            gid: "AC",
            name: "Crack III",
            lvup: "TM04",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                50,
                50
            ],
            status: 4,
            effect: "S-ATK(+10), R-ATK(+10), T-ATK(+10), S-DEF(+15), R-DEF(+15), T-DEF(+15), HP(+15), PP(+1)"
        },
        {
            ref: 507,
            code: "TM04",
            gid: "AC",
            name: "Crack IV",
            lvup: "TM05",
            extend: [
                0,
                30,
                100
            ],
            generate: [
                0,
                30
            ],
            status: 4,
            effect: "S-ATK(+15), R-ATK(+15), T-ATK(+15), S-DEF(+30), R-DEF(+30), T-DEF(+30), HP(+30), PP(+2)"
        },
        {
            ref: 508,
            code: "TM05",
            gid: "AC",
            name: "Crack V",
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
            effect: "S-ATK(+30), R-ATK(+30), T-ATK(+30), S-DEF(+50), R-DEF(+50), T-DEF(+50), HP(+50), PP(+2)"
        },
        {
            ref: 509,
            code: "TN01",
            gid: "AC",
            name: "Ange Glare",
            extend: [
                30,
                50,
                50
            ],
            status: 1,
            effect: "S-ATK(+30), S-DEF(+40), R-DEF(+20), T-DEF(+20)"
        },
        {
            ref: 510,
            code: "TN02",
            gid: "AC",
            name: "Veluge Glare",
            extend: [
                30,
                50,
                50
            ],
            status: 1,
            effect: "R-ATK(+30), S-DEF(+20), R-DEF(+40), T-DEF(+20)"
        },
        {
            ref: 511,
            code: "TN03",
            gid: "AC",
            name: "Dominus Glare",
            extend: [
                30,
                50,
                50
            ],
            status: 1,
            effect: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+40)"
        },
        {
            ref: 356,
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
            ref: 357,
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
            ref: 358,
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
            ref: 359,
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
            ref: 360,
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
            ref: 361,
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
            ref: 362,
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
            ref: 363,
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
            ref: 364,
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
            ref: 365,
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
            ref: 366,
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
            ref: 367,
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
            ref: 368,
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
            ref: 369,
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
            ref: 370,
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
            ref: 371,
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
            ref: 372,
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
            ref: 373,
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
            ref: 374,
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
            ref: 375,
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
            ref: 376,
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
            ref: 377,
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
            ref: 378,
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
            ref: 379,
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
            ref: 380,
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
            ref: 381,
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
            ref: 382,
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
            ref: 383,
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
            ref: 384,
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
            ref: 385,
            code: "LP06",
            gid: "AB",
            name: "EV Power HP",
            effect: "S-ATK(+35),<br>HP(+60)"
        },
        {
            ref: 386,
            code: "LP07",
            gid: "AB",
            name: "EV Power PP",
            effect: "S-ATK(+35),<br>PP(+4)"
        },
        {
            ref: 387,
            code: "LS06",
            gid: "AB",
            name: "EV Shoot HP",
            effect: "R-ATK(+35),<br>HP(+60)"
        },
        {
            ref: 388,
            code: "LS07",
            gid: "AB",
            name: "EV Shoot PP",
            effect: "R-ATK(+35),<br>PP(+4)"
        },
        {
            ref: 389,
            code: "LT06",
            gid: "AB",
            name: "EV Technique HP",
            effect: "T-ATK(+35),<br>HP(+60)"
        },
        {
            ref: 390,
            code: "LT07",
            gid: "AB",
            name: "EV Technique PP",
            effect: "T-ATK(+35),<br>PP(+4)"
        },
        {
            ref: 391,
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
            ref: 392,
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
            ref: 393,
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
            ref: 394,
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
            ref: 395,
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
            ref: 396,
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
            ref: 397,
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
            ref: 398,
            code: "TD08",
            gid: "EB",
            name: "Ceremo Fever",
            extend: [
                100,
                100,
                100
            ],
            effect: "S-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
        },
        {
            ref: 399,
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
            ref: 400,
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
            ref: 401,
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
            ref: 402,
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
            ref: 403,
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
            ref: 404,
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
            ref: 405,
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
            ref: 406,
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
            ref: 407,
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
            ref: 408,
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
            ref: 409,
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
            ref: 410,
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
            ref: 411,
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
            ref: 412,
            code: "UC01",
            gid: "AC",
            name: "Mark Joyo",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+5)"
        },
        {
            ref: 413,
            code: "UC11",
            gid: "AC",
            name: "Mark Couragena",
            effect: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)"
        },
        {
            ref: 414,
            code: "UC21",
            gid: "AC",
            name: "Mark Angar",
            effect: "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)"
        },
        {
            ref: 415,
            code: "UC31",
            gid: "AC",
            name: "Mark Grif",
            effect: "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)"
        },
        {
            ref: 512,
            code: "ID01",
            gid: "AC",
            name: "Divine Will",
            extup: [
                "TN0"
            ],
            rel: "divinewill",
            effect: "S-ATK(+20), R-ATK(+20), T-ATK(+20), PP(+5)"
        },
        {
            ref: 513,
            code: "ID02",
            gid: "AC",
            name: "Divine Order",
            extup: [
                "TN0"
            ],
            rel: "divineorder",
            effect: "S-ATK(+50), R-ATK(+50), T-ATK(+50), HP(+20), PP(+10)"
        },
        {
            ref: 514,
            code: "IE01",
            gid: "AC",
            name: "Exceed Energy",
            effect: "S-ATK(+50), R-ATK(+50), T-ATK(+50), DEX(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+5)"
        },
        {
            ref: 416,
            code: "YA01",
            gid: "AC",
            name: "Sentence Power",
            effect: "S-ATK(+20),<br>PP(+4)"
        },
        {
            ref: 417,
            code: "YA05",
            gid: "CB",
            name: "Sentence Arma",
            effect: "S-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            ref: 418,
            code: "YA11",
            gid: "AC",
            name: "Sentence Shoot",
            effect: "R-ATK(+20),<br>PP(+4)"
        },
        {
            ref: 419,
            code: "YA15",
            gid: "CB",
            name: "Sentence Tiro",
            effect: "R-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            ref: 420,
            code: "YA21",
            gid: "AC",
            name: "Sentence Tech",
            effect: "T-ATK(+20),<br>PP(+4)"
        },
        {
            ref: 421,
            code: "YA25",
            gid: "CB",
            name: "Sentence Magia",
            effect: "T-ATK(+20),<br>HP(+20),<br>PP(+3)"
        },
        {
            ref: 422,
            code: "YA31",
            gid: "CB",
            name: "Sentence Triple",
            effect: "S-ATK(+30),R-ATK(+30),T-ATK(+30)"
        },
        {
            ref: 423,
            code: "YB41",
            gid: "CB",
            name: "Phrase Reduce",
            effect: "PP consumption decreases by 4%."
        },
        {
            ref: 424,
            code: "YB51",
            gid: "CB",
            name: "Phrase Decay",
            effect: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%."
        },
        {
            ref: 425,
            code: "YB01",
            gid: "CB",
            name: "Phrase Recovery",
            effect: "+5% PP Recovery Rate"
        },
        {
            ref: 426,
            code: "YB11",
            gid: "CB",
            name: "Phrase Weak",
            effect: "+2% Elemental Weakness damage"
        },
        {
            ref: 427,
            code: "YB21",
            gid: "CB",
            name: "Phrase Response",
            effect: "+5% ATK PP Recovery"
        },
        {
            ref: 428,
            code: "YB31",
            gid: "CB",
            name: "Phrase Chase",
            effect: "+5% damage against enemies<BR>with Status Effects"
        },
        {
            ref: 429,
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
            ref: 430,
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
            ref: 431,
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
            ref: 432,
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
            ref: 433,
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
            ref: 434,
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
            ref: 435,
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
            ref: 436,
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
            ref: 437,
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
            ref: 438,
            code: "VD01",
            gid: "YA",
            name: "Temptation",
            effect: "Item Drop Rate +10%"
        },
        {
            ref: 439,
            code: "VE01",
            gid: "YA",
            name: "Another History",
            effect: "Experience Gain +10%"
        },
        {
            ref: 440,
            code: "VF01",
            gid: "YA",
            name: "Fresh Sign",
            effect: "Boost EXP by 30% until Lv.30"
        },
        {
            ref: 441,
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
            ref: 442,
            code: "VH11",
            simCode: "VH02",
            gid: "CB",
            name: "Omega Buster",
            effect: "Boosts damage against Demons by 3%."
        },
        {
            ref: 515,
            code: "VI01",
            gid: "YA",
            name: "Ripper/Ltn. Weak",
            extend: [
                0,
                10,
                20
            ],
            effect: "Boost damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases."
        },
        {
            ref: 516,
            code: "VI02",
            gid: "YA",
            name: "Ripper/Fire Weak",
            extend: [
                0,
                10,
                20
            ],
            effect: "Boost damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases."
        },
        {
            ref: 517,
            code: "VQ01",
            gid: "YA",
            name: "Slayer/Armor Type",
            extend: [
                0,
                10,
                20
            ],
            effect: "Boost damage against Lillipa Mechs. Effect is reduced as the Weapon Rarity increases."
        },
        {
            ref: 518,
            code: "VQ02",
            gid: "YA",
            name: "Slayer/Beast Type",
            extend: [
                0,
                10,
                20
            ],
            effect: "Boost damage against Naberius Natives. Effect is reduced as the Weapon Rarity increases."
        },
        {
            ref: 443,
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
            ref: 444,
            code: "VJ02",
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
            ref: 445,
            code: "VJ03",
            gid: "YA",
            name: "Reverie Catalyst",
            extend: [
                0,
                10,
                30
            ],
            effect: "HP(+10),<br>PP(+1)",
            tooltip: "Made by: Elder Reverie, Loser Reverie, Apprezina Reverie, Double Reverie, Persona Reverie<br>Used for: Mana Reverie"
        },
        {
            ref: 446,
            code: "VK03",
            simCode: "VL01",
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
            ref: 447,
            code: "VK04",
            simCode: "VM01",
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
            ref: 448,
            code: "VK01",
            simCode: "VN01",
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
            ref: 449,
            code: "VO01",
            gid: "YA",
            name: "Guidance Trainer",
            extend: [
                0,
                50,
                80
            ],
            effect: "Boosts Special Ability<br>transfer success rate onto this item by 5%."
        },
        {
            ref: 450,
            code: "VK05",
            simCode: "VP01",
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
            ref: 451,
            code: "WA01",
            gid: "GB",
            name: "Photon Collect",
            effect: "Boosts status effect affix rate"
        },
        {
            ref: 452,
            code: "XA01",
            gid: "GB",
            name: "Soul Receptor",
            effect: "Greatly increases Soul affix rate"
        },
        {
            ref: 453,
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
            ref: 454,
            code: "XC01",
            gid: "GB",
            name: "Gift Receptor",
            effect: "Allows transfer of Gift affixes"
        },
        {
            ref: 455,
            code: "XD01",
            gid: "GB",
            name: "Sentence Receptor",
            effect: "Boosts transfer of Sentence affixes<br>ALL(+10)"
        },
        {
            ref: 456,
            code: "XE01",
            gid: "GB",
            name: "Phrase Receptor",
            effect: "Boosts transfer of Phrase affixes<br>ALL(+10)"
        },
        {
            ref: 457,
            code: "XF01",
            gid: "GB",
            name: "Factor Receptor",
            effect: "Boosts Factor-type ability transfer rates.<br>ALL(+10)"
        },
        {
            ref: 458,
            code: "XG01",
            gid: "GB",
            name: "Mark Receptor",
            effect: "Allows transfer Mark-type ability.<br>ALL(+10)"
        },
        {
            ref: 459,
            code: "XI30",
            gid: "GB",
            name: "Attack Receptor",
            effect: "Greatly increases affix rate of <br>Power, Shoot, Technique, Arm<br>ALL(+5)"
        },
        {
            ref: 460,
            code: "XI31",
            gid: "GB",
            name: "Guard Receptor",
            effect: "Greatly increases affix rate of <br>Mind, Body, React<br>ALL(+5)"
        },
        {
            ref: 461,
            code: "XI32",
            gid: "GB",
            name: "Photon Receptor",
            effect: "Greatly increases affix rate of <br>Stamina, Spirita<br>ALL(+5)"
        },
        {
            ref: 462,
            code: "XI02",
            gid: "E",
            name: "Stamina Boost",
            effect: "HP(+45)"
        },
        {
            ref: 463,
            code: "XI03",
            gid: "E",
            name: "Spirita Boost",
            effect: "PP(+5)"
        },
        {
            ref: 464,
            code: "XI04",
            gid: "E",
            name: "Power Boost",
            effect: "S-ATK(+25)"
        },
        {
            ref: 465,
            code: "XI05",
            gid: "E",
            name: "Shoot Boost",
            effect: "R-ATK(+25)"
        },
        {
            ref: 466,
            code: "XI06",
            gid: "E",
            name: "Technique Boost",
            effect: "T-ATK(+25)"
        },
        {
            ref: 467,
            code: "XI0a",
            gid: "E",
            name: "Tenora Boost",
            effect: "S-ATK(+35)"
        },
        {
            ref: 468,
            code: "XI0b",
            gid: "E",
            name: "GRM Boost",
            effect: "R-ATK(+35)"
        },
        {
            ref: 469,
            code: "XI0c",
            gid: "E",
            name: "Yohmei Boost",
            effect: "T-ATK(+35)"
        },
        {
            ref: 470,
            code: "XI10",
            gid: "E",
            name: "Noble Stamina",
            effect: "HP(+50),PP(+3)"
        },
        {
            ref: 471,
            code: "XI14",
            gid: "E",
            name: "Elegant Stamina",
            effect: "HP(+70),PP(+4)"
        },
        {
            ref: 472,
            code: "XI51",
            gid: "E",
            name: "Grace Stamina",
            effect: "HP(+80),PP(+5)"
        },
        {
            ref: 473,
            code: "XI07",
            gid: "E",
            name: "Noble Power",
            effect: "S-ATK(+30),PP(+3)"
        },
        {
            ref: 474,
            code: "XI11",
            gid: "E",
            name: "Elegant Power",
            effect: "S-ATK(+40),PP(+4)"
        },
        {
            ref: 475,
            code: "XI52",
            gid: "E",
            name: "Grace Power",
            effect: "S-ATK(+50),PP(+5)"
        },
        {
            ref: 476,
            code: "XI08",
            gid: "E",
            name: "Noble Shoot",
            effect: "R-ATK(+30),PP(+3)"
        },
        {
            ref: 477,
            code: "XI12",
            gid: "E",
            name: "Elegant Shoot",
            effect: "R-ATK(+40),PP(+4)"
        },
        {
            ref: 478,
            code: "XI53",
            gid: "E",
            name: "Grace Shoot",
            effect: "R-ATK(+50),PP(+5)"
        },
        {
            ref: 479,
            code: "XI09",
            gid: "E",
            name: "Noble Technique",
            effect: "T-ATK(+30),PP(+3)"
        },
        {
            ref: 480,
            code: "XI13",
            gid: "E",
            name: "Elegant Technique",
            effect: "T-ATK(+40),PP(+4)"
        },
        {
            ref: 481,
            code: "XI54",
            gid: "E",
            name: "Grace Technique",
            effect: "T-ATK(+50),PP(+5)"
        },
        {
            ref: 482,
            code: "XI20",
            gid: "E",
            name: "Offense Boost",
            effect: "S-ATK(+15)<br>R-ATK(+15)<br>T-ATK(+15)<br>DEX(+25)<br>PP(+1)"
        },
        {
            ref: 483,
            code: "XI21",
            gid: "E",
            name: "Defense Boost",
            effect: "S-DEF(+25)<br>R-DEF(+25)<br>T-DEF(+25)<br>HP(+55)<br>PP(+1)"
        },
        {
            ref: 484,
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
            ref: 485,
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
            ref: 486,
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
            ref: 487,
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
            ref: 488,
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
            ref: 489,
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
            ref: 490,
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
            ref: 491,
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
            ref: 492,
            code: "ZI01",
            gid: "ZZ",
            name: "Junk I",
            extend: [
                100,
                100,
                100
            ],
            effect: "100% affix junk"
        },
        {
            ref: 519,
            code: "LA99",
            gid: "L1",
            name: "S1:Junk",
            extend: [
                100,
                100,
                100
            ],
            effect: "Generic S1 junk.",
            noEx: true
        },
        {
            ref: 520,
            code: "LB99",
            gid: "L2",
            name: "S2:Junk",
            extend: [
                100,
                100,
                100
            ],
            effect: "Generic S2 junk.",
            noEx: true
        },
        {
            ref: 521,
            code: "LC99",
            gid: "L3",
            name: "S3:Junk",
            extend: [
                100,
                100,
                100
            ],
            effect: "Generic S3 junk.",
            noEx: true
        },
        {
            ref: 519,
            code: "LD99",
            gid: "L4",
            name: "S4:Junk",
            extend: [
                100,
                100,
                100
            ],
            effect: "Generic S4 junk.",
            noEx: true
        }
    ],
    // List of available Special Ability Factors (SAFs)
    abilityFactor: [
        { name: `Power III`, jpName: `パワーⅢ` },
        { name: `Power IV`, jpName: `パワーⅣ` },
        { name: `Power V`, jpName: `パワーⅤ` },
        { name: `Power VI`, jpName: `パワーVI` },
        { name: `Shoot III`, jpName: `シュートⅢ` },
        { name: `Shoot IV`, jpName: `シュートⅣ` },
        { name: `Shoot V`, jpName: `シュートⅤ` },
        { name: `Shoot VI`, jpName: `シュートⅥ` },
        { name: `Technique III`, jpName: `テクニックⅢ` },
        { name: `Technique IV`, jpName: `テクニックⅣ` },
        { name: `Technique V`, jpName: `テクニックⅤ` },
        { name: `Technique VI`, jpName: `テクニックⅥ` },
        { name: `Arm III`, jpName: `アームⅢ` },
        { name: `Arm IV`, jpName: `アームⅣ` },
        { name: `Body III`, jpName: `ボディⅢ` },
        { name: `React III`, jpName: `リアクトⅢ` },
        { name: `Mind III`, jpName: `マインドⅢ` },
        { name: `Ability III`, jpName: `アビリティⅢ` },
        { name: `Ability IV`, jpName: `アビリティⅣ` },
        { name: `Stamina III`, jpName: `スタミナⅢ` },
        { name: `Stamina IV`, jpName: `スタミナⅣ` },
        { name: `Stamina V`, jpName: `スタミナⅤ` },
        { name: `Spirita III`, jpName: `スピリタⅢ` },
        { name: `Spirita IV`, jpName: `スピリタⅣ` },
        { name: `Spirita V`, jpName: `スピリタⅤ` },
        { name: `Spirita VI`, jpName: `スピリタⅥ` },
        { name: `Modulator`, jpName: `モデュレイター` },
        { name: `Mutation I`, jpName: `ミューテーションⅠ` },
        { name: `Mutation II`, jpName: `ミューテーションⅡ` },
        { name: `Vinculum`, jpName: `ウィンクルム` },
        { name: `Stigma`, jpName: `スティグマ` },
        { name: `Alter Arma`, jpName: `アルター・アルマ` },
        { name: `Alter Tiro`, jpName: `アルター・ティロ` },
        { name: `Alter Magia`, jpName: `アルター・マギア` },
        { name: `Flict Arma`, jpName: `フリクト・アルマ` },
        { name: `Flict Tiro`, jpName: `フリクト・ティロ` },
        { name: `Flict Magia`, jpName: `フリクト・マギア` },
        { name: `Doom Break`, jpName: `ドゥームブレイク` },
        { name: `Doom Break 2`, jpName: `ドゥームブレイクII` },
        { name: `Spirita Alpha`, jpName: `スピリタ・アルファ` },
        { name: `Sentence Power`, jpName: `センテンス・パワー` },
        { name: `Sentence Shoot`, jpName: `センテンス・シュート` },
        { name: `Sentence Tech`, jpName: `センテンス・テクニック` },
        { name: `Sentence Triple`, jpName: `センテンス・トリプル` },
        { name: `Sentence Arma`, jpName: `センテンス・アルマ` },
        { name: `Sentence Tiro`, jpName: `センテンス・ティロ` },
        { name: `Sentence Magia`, jpName: `センテンス・マギア` },
        { name: `Blow Resist III`, jpName: `ブロウレジストⅢ` },
        { name: `Shot Resist III`, jpName: `ショットレジストⅢ` },
        { name: `Mind Resist III`, jpName: `マインドレジストⅢ` },
        { name: `All Resist III`, jpName: `オルレジストⅢ` },
        { name: `Burn III`, jpName: `バーンⅢ` },
        { name: `Burn V`, jpName: `バーンⅤ` },
        { name: `Freeze III`, jpName: `フリーズⅢ` },
        { name: `Freeze V`, jpName: `フリーズⅤ` },
        { name: `Shock III`, jpName: `ショックⅢ` },
        { name: `Shock V`, jpName: `ショックⅤ` },
        { name: `Mirage III`, jpName: `ミラージュⅢ` },
        { name: `Mirage V`, jpName: `ミラージュⅤ` },
        { name: `Poison III`, jpName: `ポイズンⅢ` },
        { name: `Poison V`, jpName: `ポイズンⅤ` },
        { name: `Panic III`, jpName: `パニックⅢ` },
        { name: `Panic V`, jpName: `パニックⅤ` },
        { name: `Darkness Soul`, jpName: `ダークネス・ソール` },
        { name: `Deadleon Soul`, jpName: `デッドリオン・ソール` },
        { name: `Greuzoras Soul`, jpName: `グリュゾラス・ソール` },
        { name: `Duvals Soul`, jpName: `ドゥバルス・ソール` },
        { name: `Astral Soul`, jpName: `アストラル・ソール` },
        { name: `Act The Soul`, jpName: `アクト・ジ・ソール` },
        { name: `Till The Soul`, jpName: `ティル・ジ・ソール` },
        { name: `Magi The Soul`, jpName: `マギー・ジ・ソール` },
        { name: `Persona Reverie`, jpName: `ペルソナ・レヴリー` },
        { name: `Reverie Catalyst`, jpName: `レヴリー・カタリスト` },
        { name: `S1:Photon Reduction`, jpName: `S1:光子縮減` },
        { name: `S1:Offensive Intent`, jpName: `S1:剛撃の志` },
        { name: `S1:Brilliant Ruin`, jpName: `S1:滅域輝与` },
        { name: `S1:Sturdy Intent`, jpName: `S1:依属の志` },
        { name: `S1:Phantasmal Intent`, jpName: `S1:幻精の志` },
        { name: `S1:Strike Boost`, jpName: `S1:打撃増幅` },
        { name: `S1:Shoot Boost`, jpName: `S1:射撃増幅` },
        { name: `S1:Tech Boost`, jpName: `S1:法撃増幅` },
        { name: `S2:Wise Skill`, jpName: `S2:妙技の巧` },
        { name: `S2:Radiant Strike`, jpName: `S2:輝剰の撃` },
        { name: `S2:Guardian Armor`, jpName: `S2:守護の備` },
        { name: `S2:Skilled Strike`, jpName: `S2:妙撃の志` },
        { name: `S2:Rupturing Intent`, jpName: `S2:裂砕の志` },
        { name: `S2:Powering Intent`, jpName: `S2:強闘の志` },
        { name: `S2:Instant Reduction`, jpName: `S2:瞬乱縮減` },
        { name: `S2:Medicinal Wisdom`, jpName: `S2:服薬の恵` },
        { name: `S2:Phantasmal Radiance`, jpName: `S2:幻精輝剰` },
        { name: `S2:Phantasmal Gleam`, jpName: `S2:幻精輝勢` },
        { name: `S2:Phantasmal Guardian`, jpName: `S2:幻精の備` },
        { name: `S3:Flowing Exhilaration`, jpName: `S3:時流活与` },
        { name: `S3:Radiating Grace`, jpName: `S3:輝勢の恵` },
        { name: `S3:Guardian Armor`, jpName: `S3:守護の備` },
        { name: `S3:Violent Invigoration`, jpName: `S3:猛威の奮激` },
        { name: `S3:Phantasmal Reduction`, jpName: `S3:幻精縮減` },
        { name: `S3:Immediate Profusion`, jpName: `S3:瞬撃繚乱` },
        { name: `S4:Marvelous Aegis`, jpName: `S4:瞬護輝与` },
        { name: `S4:Steel Resolve`, jpName: `S4:鋼の決意` },
        { name: `S4:Radiant Response`, jpName: `S4:輝器応変` },
        { name: `S4:Opposing Skill`, jpName: `S4:正対の巧` },
        { name: `S4:Scything Wind`, jpName: `S4:鎌風重吹` },
        { name: `S4:Cunning Strike`, jpName: `S4:賢勇両撃` },
        { name: `S4:Vampiric Strike`, jpName: `S4:奪命の撃` },
        { name: `S4:Gear Reduction`, jpName: `S4:刃機放縮` },
        { name: `S4:Genesis Ring`, jpName: `S4:変素応輪` },
        { name: `S4:Steadfast Courage`, jpName: `S4:静の胆力` },
        { name: `S4:Lustrous Trap`, jpName: `S4:輝剰の罠` },
        { name: `S4:Dynamic Chain`, jpName: `S4:鎖動強身` },
        { name: `S4:Rapid-fire Arrow`, jpName: `S4:迅弓の撃` },
        { name: `S4:Refined Providence`, jpName: `S4:摂理洗練` },
        { name: `S4:Circuit Rotation`, jpName: `S4:回路輪転` },
        { name: `S4:Swift Strike`, jpName: `S4:短杖強打` },
        { name: `S4:Support Extension`, jpName: `S4:支援限長` },
        { name: `Omega Buster`, jpName: `オメガバスター` },
        { name: `Soul Receptor`, jpName: `ソールレセプター` },
        { name: `Extreceptor`, jpName: `エクストレセプター` },
        { name: `Factor Receptor`, jpName: `ファクターレセプター` },
        { name: `Another History`, jpName: `アナザーヒストリー` },
        { name: `Phrase Weak`, jpName: `フレイズ・ウィーク` },
        { name: `Phrase Response`, jpName: `フレイズ・レスポンス` },
        { name: `Phrase Recovery`, jpName: `フレイズ・レスポンス` },
        { name: `Phrase Chase`, jpName: `フレイズ・チェイス` },
        { name: `Phrase Reduce`, jpName: `フレイズ・リデュース` },
        { name: `Phrase Decay`, jpName: `フレイズ・ディケイ` }
    ]
}