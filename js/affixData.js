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

let data = {
    "optionList": {
        "support": [
            {
                "id": "Nothing",
                "name": "None",
                "value": "A01",
                "boost": 0,
                "simValue": "A01",
                "ref": 0,
                "jpId": "無し"
            },
            {
                "id": "Ability Success Rate +5%",
                "name": "+5%",
                "value": "A02",
                "boost": 5,
                "simValue": "A02",
                "ref": 1,
                "jpId": "能力追加成功率+5%"
            },
            {
                "id": "Ability Success Rate +10%",
                "name": "+10%",
                "value": "A03",
                "boost": 10,
                "simValue": "A03",
                "ref": 2,
                "jpId": "能力追加成功率+10%"
            },
            {
                "id": "Ability Success Rate +20%",
                "name": "+20%",
                "value": "A04",
                "boost": 20,
                "simValue": "A04",
                "ref": 3,
                "jpId": "能力追加成功率+20%"
            },
            {
                "id": "Ability Success Rate +30%",
                "name": "+30%",
                "value": "A05",
                "boost": 30,
                "simValue": "A05",
                "ref": 4,
                "jpId": "能力追加成功率+30%"
            },
            {
                "id": "Ability Success Rate +40%",
                "name": "+40%",
                "value": "A06",
                "boost": 40,
                "simValue": "A06",
                "ref": 5,
                "jpId": "能力追加成功率+40%"
            },
            {
                "id": "Ability Success Rate +45%",
                "name": "+45%",
                "value": "A07",
                "boost": 45,
                "simValue": "A07",
                "ref": 6,
                "jpId": "能力追加成功率+45%"
            },
            {
                "id": "Ability Success Rate +50%",
                "name": "+50%",
                "value": "A08",
                "boost": 50,
                "simValue": "A08",
                "ref": 7,
                "jpId": "能力追加成功率+50%"
            },
            {
                "id": "Ability Success Rate +55%",
                "name": "+55%",
                "value": "A09",
                "boost": 55,
                "simValue": "A09",
                "ref": 8,
                "jpId": "能力追加成功率+55%"
            },
            {
                "id": "Ability Success Rate +60%",
                "name": "+60%",
                "value": "A10",
                "boost": 60,
                "simValue": "A10",
                "ref": 9,
                "jpId": "能力追加成功率+60%"
            },
            {
                "id": "Ability Success Rate +65%",
                "name": "+65%",
                "value": "A11",
                "boost": 65,
                "simValue": "A11",
                "ref": 10,
                "jpId": "能力追加成功率+65%"
            }
        ],
        "additional": [
            {
                "id": "Nothing",
                "jpId": "無し",
                "value": "B01",
                "simId": "Nothing",
                "simValue": "B01"
            },
            {
                "ref": 48,
                "id": "Add Ability (Spirita VI)",
                "name": "Spirita VI",
                "jpId": "特殊能力(スピリタⅥ)",
                "jpName": "スピリタⅥ",
                "value": "B9Z",
                "extend": 100,
                "effect": "PP(+7)"
            },
            {
                "ref": 5,
                "id": "Add Ability (Power VI)",
                "name": "Power VI",
                "jpId": "特殊能力(パワーⅥ)",
                "jpName": "パワーⅥ",
                "value": "AA06",
                "extend": 100,
                "effect": "S-ATK(+45)",
                "simId": "Add Ability (Power VI)",
                "simValue": "AA06"
            },
            {
                "ref": 11,
                "id": "Add Ability (Shoot VI)",
                "name": "Shoot VI",
                "jpId": "特殊能力(シュートⅥ)",
                "jpName": "シュートⅥ",
                "value": "AB06",
                "extend": 100,
                "effect": "R-ATK(+45)",
                "simId": "Add Ability (Shoot VI)",
                "simValue": "AB06"
            },
            {
                "ref": 17,
                "id": "Add Ability (Technique VI)",
                "name": "Technique VI",
                "jpId": "特殊能力(テクニックⅥ)",
                "jpName": "テクニックⅥ",
                "value": "AC06",
                "extend": 100,
                "effect": "T-ATK(+45)",
                "simId": "Add Ability (Technique VI)",
                "simValue": "AC06"
            },
            {
                "ref": 52,
                "id": "Add Ability (Ability IV)",
                "name": "Ability IV",
                "jpId": "特殊能力(アビリティⅣ)",
                "jpName": "アビリティⅣ",
                "value": "FA04",
                "extend": 100,
                "effect": "ALL(+20)",
                "simId": "Add Ability (Ability IV)",
                "simValue": "FA04"
            },
            {
                "ref": 350,
                "id": "Add Ability (Omega M)",
                "name": "Omega Memoria",
                "jpId": "特殊能力(オメガM)",
                "jpName": "オメガ・メモリア",
                "value": "B45",
                "extend": 100,
                "effect": "ALL(+15),<br>HP(+15),<br>PP(+2)",
                "simId": "Add Ability (Omega M)",
                "simValue": "B45"
            },
            {
                "ref": 462,
                "id": "Add Ability (HP)",
                "name": "Stamina Boost",
                "jpId": "特殊能力追加(HP)",
                "jpName": "スタミナ・ブースト",
                "value": "B02",
                "extend": 100,
                "effect": "HP(+45)",
                "simId": "Add Ability (HP)",
                "simValue": "B02"
            },
            {
                "ref": 463,
                "id": "Add Ability (PP)",
                "name": "Spirita Boost",
                "jpId": "特殊能力追加(PP)",
                "jpName": "スピリタ・ブースト",
                "value": "B03",
                "extend": 100,
                "effect": "PP(+5)",
                "simId": "Add Ability (PP)",
                "simValue": "B03"
            },
            {
                "ref": 464,
                "id": "Add Ability (S-ATK)",
                "name": "Power Boost",
                "jpId": "特殊能力追加(打撃)",
                "jpName": "パワー・ブースト",
                "value": "B04",
                "extend": 100,
                "effect": "S-ATK(+25)",
                "simId": "Add Ability (S-ATK)",
                "simValue": "B04"
            },
            {
                "ref": 465,
                "id": "Add Ability (R-ATK)",
                "name": "Shoot Boost",
                "jpId": "特殊能力追加(射撃)",
                "jpName": "シュート・ブースト",
                "value": "B05",
                "extend": 100,
                "effect": "R-ATK(+25)",
                "simId": "Add Ability (R-ATK)",
                "simValue": "B05"
            },
            {
                "ref": 466,
                "id": "Add Ability (T-ATK)",
                "name": "Technique Boost",
                "jpId": "特殊能力追加(法撃)",
                "jpName": "テクニック・ブースト",
                "value": "B06",
                "extend": 100,
                "effect": "T-ATK(+25)",
                "simId": "Add Ability (T-ATK)",
                "simValue": "B06"
            },
            {
                "ref": 467,
                "id": "Add Ability (Tenora)",
                "name": "Tenora Boost",
                "jpId": "特殊能力追加(テノラ)",
                "jpName": "テノラ・ブースト",
                "value": "B8a",
                "extend": 100,
                "effect": "S-ATK(+35)",
                "simId": "Add Ability (Tenora)",
                "simValue": "B8a"
            },
            {
                "ref": 468,
                "id": "Add Ability (GRM)",
                "name": "GRM Boost",
                "jpId": "特殊能力追加(GRM)",
                "jpName": "GRM・ブースト",
                "value": "B8b",
                "extend": 100,
                "effect": "R-ATK(+35)",
                "simId": "Add Ability (GRM)",
                "simValue": "B8b"
            },
            {
                "ref": 469,
                "id": "Add Ability (Yohmei)",
                "name": "Yohmei Boost",
                "jpId": "特殊能力追加(ヨウメイ)",
                "jpName": "ヨウメイ・ブースト",
                "value": "B8c",
                "extend": 100,
                "effect": "T-ATK(+35)",
                "simId": "Add Ability (Yohmei)",
                "simValue": "B8c"
            },
            {
                "ref": 470,
                "id": "Add Ability (HP&PP)",
                "name": "Noble Stamina",
                "jpId": "特殊能力追加(HP&PP)",
                "jpName": "ノーブル・スタミナ",
                "value": "B9a",
                "extend": 100,
                "effect": "HP(+50),PP(+3)",
                "simId": "Add Ability (HP&PP)",
                "simValue": "B9a"
            },
            {
                "ref": 473,
                "id": "Add Ability (S-ATK&PP)",
                "name": "Noble Power",
                "jpId": "特殊能力追加(打撃&PP)",
                "jpName": "ノーブル・パワー",
                "value": "B11a",
                "extend": 100,
                "effect": "S-ATK(+30),PP(+3)",
                "simId": "Add Ability (S-ATK&PP)",
                "simValue": "B11a"
            },
            {
                "ref": 476,
                "id": "Add Ability (R-ATK&PP)",
                "name": "Noble Shoot",
                "jpId": "特殊能力追加(射撃&PP)",
                "jpName": "ノーブル・シュート",
                "value": "B12a",
                "extend": 100,
                "effect": "R-ATK(+30),PP(+3)",
                "simId": "Add Ability (R-ATK&PP)",
                "simValue": "B12a"
            },
            {
                "ref": 479,
                "id": "Add Ability (T-ATK&PP)",
                "name": "Noble Technique",
                "jpId": "特殊能力追加(法撃&PP)",
                "jpName": "ノーブル・テクニック",
                "value": "B13a",
                "extend": 100,
                "effect": "T-ATK(+30),PP(+3)",
                "simId": "Add Ability (T-ATK&PP)",
                "simValue": "B13a"
            },
            {
                "ref": 471,
                "id": "Add Ability (HP&PP/2)",
                "name": "Elegant Stamina",
                "jpId": "特殊能力(HP&PP/2)",
                "jpName": "エレガント・スタミナ",
                "value": "B9b",
                "extend": 100,
                "effect": "HP(+70),PP(+4)",
                "simId": "Add Ability (HP&PP/2)",
                "simValue": "B9b"
            },
            {
                "ref": 474,
                "id": "Add Ability (S-ATK&PP/2)",
                "name": "Elegant Power",
                "jpId": "特殊能力(打撃&PP/2)",
                "jpName": "エレガント・パワー",
                "value": "B11b",
                "extend": 100,
                "effect": "S-ATK(+40),PP(+4)",
                "simId": "Add Ability (S-ATK&PP/2)",
                "simValue": "B11b"
            },
            {
                "ref": 477,
                "id": "Add Ability (R-ATK&PP/2)",
                "name": "Elegant Shoot",
                "jpId": "特殊能力(射撃&PP/2)",
                "jpName": "エレガント・シュート",
                "value": "B12b",
                "extend": 100,
                "effect": "R-ATK(+40),PP(+4)",
                "simId": "Add Ability (R-ATK&PP/2)",
                "simValue": "B12b"
            },
            {
                "ref": 480,
                "id": "Add Ability (T-ATK&PP/2)",
                "name": "Elegant Technique",
                "jpId": "特殊能力(法撃&PP/2)",
                "jpName": "エレガント・テクニック",
                "value": "B13b",
                "extend": 100,
                "effect": "T-ATK(+40),PP(+4)",
                "simId": "Add Ability (T-ATK&PP/2)",
                "simValue": "B13b"
            },
            {
                "ref": 472,
                "id": "Add Ability (HP&PP/3)",
                "name": "Grace Stamina",
                "jpId": "特殊能力(HP&PP/3)",
                "jpName": "グレース・スタミナ",
                "value": "B9c",
                "extend": 100,
                "effect": "HP(+80),PP(+5)",
                "simId": "Add Ability (HP&PP/3)",
                "simValue": "B9c"
            },
            {
                "ref": 475,
                "id": "Add Ability (S-ATK&PP/3)",
                "name": "Grace Power",
                "jpId": "特殊能力(打撃&PP/3)",
                "jpName": "グレース・パワー",
                "value": "B11c",
                "extend": 100,
                "effect": "S-ATK(+50),PP(+5)",
                "simId": "Add Ability (S-ATK&PP/3)",
                "simValue": "B11c"
            },
            {
                "ref": 478,
                "id": "Add Ability (R-ATK&PP/3)",
                "name": "Grace Shoot",
                "jpId": "特殊能力(射撃&PP/3)",
                "jpName": "グレース・シュート",
                "value": "B12c",
                "extend": 100,
                "effect": "R-ATK(+50),PP(+5)",
                "simId": "Add Ability (R-ATK&PP/3)",
                "simValue": "B12c"
            },
            {
                "ref": 481,
                "id": "Add Ability (T-ATK&PP/3)",
                "name": "Grace Technique",
                "jpId": "特殊能力(法撃&PP/3)",
                "jpName": "グレース・テクニック",
                "value": "B13c",
                "extend": 100,
                "effect": "T-ATK(+50),PP(+5)",
                "simId": "Add Ability (T-ATK&PP/3)",
                "simValue": "B13c"
            },
            {
                "ref": 530,
                "id": "Add Ability (Grand HP)",
                "name": "Grand Stamina",
                "jpId": "特殊能力(グランドHP)",
                "jpName": "グランド・スタミナ",
                "value": "B9d",
                "extend": 100,
                "effect": "HP(+100),PP(+6)",
                "simId": "Add Ability (Grand HP)",
                "simValue": "B9d"
            },
            {
                "ref": 531,
                "id": "Add Ability (Grand PP)",
                "name": "Grand Spirita",
                "jpId": "特殊能力(グランドPP)",
                "jpName": "グランド・スピリタ",
                "value": "B10d",
                "extend": 100,
                "effect": "PP(+15)",
                "simId": "Add Ability (Grand PP)",
                "simValue": "B10d"
            },
            {
                "ref": 532,
                "id": "Add Ability (Grand P)",
                "name": "Grand Power",
                "jpId": "特殊能力(グランドP)",
                "jpName": "グランド・パワー",
                "value": "B11d",
                "extend": 100,
                "effect": "S-ATK(+60),HP(+20),PP(+5)",
                "simId": "Add Ability (Grand P)",
                "simValue": "B11d"
            },
            {
                "ref": 533,
                "id": "Add Ability (Grand S)",
                "name": "Grand Shoot",
                "jpId": "特殊能力(グランドS)",
                "jpName": "グランド・シュート",
                "value": "B12d",
                "extend": 100,
                "effect": "R-ATK(+60),HP(+20),PP(+5)",
                "simId": "Add Ability (Grand S)",
                "simValue": "B12d"
            },
            {
                "ref": 534,
                "id": "Add Ability (Grand T)",
                "name": "Grand Technique",
                "jpId": "特殊能力(グランドT)",
                "jpName": "グランド・テクニック",
                "value": "B13d",
                "extend": 100,
                "effect": "T-ATK(+60),HP(+20),PP(+5)",
                "simId": "Add Ability (Grand T)",
                "simValue": "B13d"
            },
            {
                "ref": 482,
                "id": "Add Ability (Offense Focus)",
                "name": "Offense Boost",
                "jpId": "特殊能力追加(攻撃総合)",
                "jpName": "オフェンス・ブースト",
                "value": "B20",
                "extend": 100,
                "effect": "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)",
                "simId": "Add Ability (Offense Focus)",
                "simValue": "B14a"
            },
            {
                "ref": 535,
                "id": "Add Ability (Offense Focus/2)",
                "name": "Attack Boost",
                "jpId": "特殊能力追加(攻撃総合/2)",
                "jpName": "アタック・ブースト",
                "value": "B14b",
                "extend": 100,
                "effect": "S-ATK(+25),R-ATK(+25),T-ATK(+25),DEX(+40),PP(+3)",
                "simId": "Add Ability (Offense Focus/2)",
                "simValue": "B14b"
            },
            {
                "ref": 483,
                "id": "Add Ability (Defense Focus)",
                "name": "Defense Boost",
                "jpId": "特殊能力追加(防御総合)",
                "jpName": "ディフェンス・ブースト",
                "value": "B15a",
                "extend": 100,
                "effect": "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)",
                "simId": "Add Ability (Defense Focus)",
                "simValue": "B15a"
            },
            {
                "ref": 536,
                "id": "Add Ability (Defense Focus/2)",
                "name": "Guard Boost",
                "jpId": "特殊能力追加(防御総合/2)",
                "jpName": "ガード・ブースト",
                "value": "B15b",
                "extend": 100,
                "effect": "S-DEF(+35),R-DEF(+35),T-DEF(+35),HP(+75),PP(+3)",
                "simId": "Add Ability (Defense Focus/2)",
                "simValue": "B15b"
            },
            {
                "ref": 325,
                "id": "Add Ability (Ether S)",
                "name": "Ether Soul",
                "jpId": "特殊能力(エーテルS)",
                "jpName": "エーテル・ソール",
                "value": "B43",
                "extend": 100,
                "effect": "ALL(+15),<br>HP(+15),<br>PP(+2)",
                "simId": "Add Ability (Ether S)",
                "simValue": "B43"
            },
            {
                "ref": 444,
                "id": "Add Ability (Factor C)",
                "name": "Factor Catalyst",
                "jpId": "特殊能力(ファクターC)",
                "jpName": "ファクター・カタリスト",
                "value": "B44",
                "extend": 100,
                "effect": "HP(+10),<br>PP(+1)",
                "simId": "Add Ability (Factor C)",
                "simValue": "B44"
            },
            {
                "ref": 445,
                "id": "Add Ability (Reverie C)",
                "name": "Reverie Catalyst",
                "jpId": "特殊能力(レヴリーC)",
                "jpName": "レヴリー・カタリスト",
                "value": "B46",
                "extend": 100,
                "effect": "HP(+10),<br>PP(+1)",
                "simId": "Add Ability (Reverie C)",
                "simValue": "B46"
            },
            {
                "ref": 412,
                "id": "Add Ability (Mark Joyo)",
                "name": "Mark Joyo",
                "jpId": "特殊能力(Ｍジョイオ)",
                "jpName": "マーク・ジョイオ",
                "value": "UC01",
                "extend": 100,
                "effect": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+50)",
                "simId": "Add Ability (Mark Joyo)",
                "simValue": "UC01"
            },
            {
                "ref": 413,
                "id": "Add Ability (Mark Couragena)",
                "name": "Mark Couragena",
                "jpId": "特殊能力(Ｍカレジナ)",
                "jpName": "マーク・カレジナ",
                "value": "UC11",
                "extend": 100,
                "effect": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)",
                "simId": "Add Ability (Mark Couragena)",
                "simValue": "UC11"
            },
            {
                "ref": 414,
                "id": "Add Ability (Mark Angar)",
                "name": "Mark Angar",
                "jpId": "特殊能力(Ｍアンガル)",
                "jpName": "マーク・アンガル",
                "value": "UC21",
                "extend": 100,
                "effect": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)",
                "simId": "Add Ability (Mark Angar)",
                "simValue": "UC21"
            },
            {
                "ref": 415,
                "id": "Add Ability (Mark Grif)",
                "name": "Mark Grif",
                "jpId": "特殊能力(Ｍグリフ)",
                "jpName": "マーク・グリフ",
                "value": "UC31",
                "extend": 100,
                "effect": "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)",
                "simId": "Add Ability (Mark Grif)",
                "simValue": "UC31"
            },
            {
                "ref": 459,
                "id": "Add Ability (Attack Inherit)",
                "name": "Attack Receptor",
                "jpId": "特殊能力(攻撃継承)",
                "jpName": "アタックレセプター",
                "value": "B30",
                "extend": 100,
                "effect": "Greatly increases affix rate of <br>Power, Shoot, Technique, Arm<br>ALL(+5)",
                "simId": "Add Ability (Attack Inherit)",
                "simValue": "B30"
            },
            {
                "ref": 460,
                "id": "Add Ability (Defense Inherit)",
                "name": "Guard Receptor",
                "jpId": "特殊能力(防御継承)",
                "jpName": "ガードレセプター",
                "value": "B31",
                "extend": 100,
                "effect": "Greatly increases affix rate of <br>Mind, Body, React<br>ALL(+5)",
                "simId": "Add Ability (Defense Inherit)",
                "simValue": "B31"
            },
            {
                "ref": 461,
                "id": "Add Ability (Photon Inherit)",
                "name": "Photon Receptor",
                "jpId": "特殊能力(心身継承)",
                "jpName": "フォトンレセプター",
                "value": "B32",
                "extend": 100,
                "effect": "Greatly increases affix rate of <br>Stamina, Spirita<br>ALL(+5)",
                "simId": "Add Ability (Photon Inherit)",
                "simValue": "B32"
            },
            {
                "ref": 458,
                "id": "Add Ability (Mark Receptor)",
                "name": "Mark Receptor",
                "jpId": "特殊能力(マーク継承)",
                "jpName": "マークレセプター",
                "value": "XG01",
                "extend": 100,
                "effect": "Allows transfer Mark-type ability.<br>ALL(+10)",
                "simId": "Add Ability (Mark Receptor)",
                "simValue": "XG01"
            },
            {
                "ref": 635,
                "id": "Add Ability (Divine Receptor)",
                "name": "Divine Receptor",
                "jpId": "特殊能力(ディバイン継承)",
                "jpName": "ディバインレセプター",
                "value": "XJ01",
                "extend": 100,
                "effect": "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
                "simId": "Add Ability (Divine Receptor)",
                "simValue": "XJ01"
            },
            {
                "ref": 636,
                "id": "Add Ability (Catalyst Receptor)",
                "name": "Catalyst Receptor",
                "jpId": "特殊能力(カタリスト継承)",
                "jpName": "カタリストレセプター",
                "value": "XH01",
                "extend": 100,
                "effect": "Boosts Catalyst-type ability.<br>ALL(+10)",
                "simId": "Add Ability (Catalyst Receptor)",
                "simValue": "XH01"
            },
            {
                "ref": 660,
                "id": "Add Ability (Exceed Receptor)",
                "name": "Exceed Receptor",
                "jpId": "特殊能力(イクシード継承)",
                "jpName": "イクシードレセプター",
                "value": "B9Z",
                "extend": 100,
                "effect": "Greatly increases affix rate of Exceed-type ability.<br>ALL(+10)"
            },
            {
                "ref": 140,
                "id": "S1 Add: Red Petal Flash",
                "name": "S1:Red Petal Flash",
                "jpId": "S1追加:花ノ赤閃",
                "jpName": "S1:花ノ赤閃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 141,
                "id": "S1 Add: Blue Ocean Flash",
                "name": "S1:Blue Ocean Flash",
                "jpId": "S1追加:海ノ青閃",
                "jpName": "S1:海ノ青閃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 142,
                "id": "S1 Add: White Snow Flash",
                "name": "S1:White Snow Flash",
                "jpId": "S1追加:雪ノ白閃",
                "jpName": "S1:雪ノ白閃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 143,
                "id": "S1 Add: Yellow Moon Flash",
                "name": "S1:Yellow Moon Flash",
                "jpId": "S1追加:月ノ黄閃",
                "jpName": "S1:月ノ黄閃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 144,
                "id": "S1 Add: Green Leaf Flash",
                "name": "S1:Green Leaf Flash",
                "jpId": "S1追加:葉ノ緑閃",
                "jpName": "S1:葉ノ緑閃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 145,
                "id": "S1 Add: Black Shadow Flash",
                "name": "S1:Black Shadow Flash",
                "jpId": "S1追加:影ノ黒閃",
                "jpName": "S1:影ノ黒閃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 135,
                "id": "S1 Add: Wise Skill",
                "name": "S1:Wise Skill",
                "jpId": "S1追加:妙技の巧",
                "jpName": "S1:妙技の巧",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 138,
                "id": "S1 Add: Radiating Grace",
                "name": "S1:Radiating Grace",
                "jpId": "S1追加:輝勢の恵",
                "jpName": "S1:輝勢の恵",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 136,
                "id": "S1 Add: Brilliant Intent",
                "name": "S1:Brilliant Intent",
                "jpId": "S1追加:輝充の志",
                "jpName": "S1:輝充の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 657,
                "id": "S1 Add: Brilliant Intent 2",
                "name": "S1:Brilliant Intent 2",
                "jpId": "S1追加:輝充の志2",
                "jpName": "S1:輝充の志2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 137,
                "id": "S1 Add: Double-Edged Sword",
                "name": "S1:Double-Edged Sword",
                "jpId": "S1追加:諸刃の撃",
                "jpName": "S1:諸刃の撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 147,
                "id": "S1 Add: Skilled Intent",
                "name": "S1:Skilled Intent",
                "jpId": "S1追加:妙撃の志",
                "jpName": "S1:妙撃の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 148,
                "id": "S1 Add: Radiant Strike",
                "name": "S1:Radiant Strike",
                "jpId": "S1追加:輝剰の撃",
                "jpName": "S1:輝剰の撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 149,
                "id": "S1 Add: Flowing Exhilaration",
                "name": "S1:Flowing Exhilaration",
                "jpId": "S1追加:時流活与",
                "jpName": "S1:時流活与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 150,
                "id": "S1 Add: Guardian Armor",
                "name": "S1:Guardian Armor",
                "jpId": "S1追加:守護の備",
                "jpName": "S1:守護の備",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 154,
                "id": "S1 Add: Powering Intent",
                "name": "S1:Powering Intent",
                "jpId": "S1追加:強闘の志",
                "jpName": "S1:強闘の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 155,
                "id": "S1 Add: Rupturing Excess",
                "name": "S1:Rupturing Excess",
                "jpId": "S1追加:裂砕の剰",
                "jpName": "S1:裂砕の剰",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 156,
                "id": "S1 Add: Spirited Response",
                "name": "S1:Spirited Response",
                "jpId": "S1追加:気輝応変",
                "jpName": "S1:気輝応変",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 157,
                "id": "S1 Add: Rupturing Intent",
                "name": "S1:Rupturing Intent",
                "jpId": "S1追加:裂砕の志",
                "jpName": "S1:裂砕の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 164,
                "id": "S1 Add: Augment Intent",
                "name": "S1:Augment Intent",
                "jpId": "S1追加:錬成の志",
                "jpName": "S1:錬成の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 686,
                "id": "S1 Add: Augment Intent 2",
                "name": "S1:Augment Intent 2",
                "jpId": "S1追加:錬成の志2",
                "jpName": "S1:錬成の志2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 161,
                "id": "S1 Add: Brilliant Ruin 2",
                "name": "S1:Brilliant Ruin 2",
                "jpId": "S1追加:滅域輝与2",
                "jpName": "S1:滅域輝与2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 160,
                "id": "S1 Add: Photon Reduction 2",
                "name": "S1:Photon Reduction 2",
                "jpId": "S1追加:光子縮減2",
                "jpName": "S1:光子縮減2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 162,
                "id": "S1 Add: Flowing Intent",
                "name": "S1:Flowing Intent",
                "jpId": "S1追加:時流の志",
                "jpName": "S1:時流の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 684,
                "id": "S1 Add: Flowing Grace",
                "name": "S1:Flowing Grace",
                "jpId": "S1追加:時流の恵",
                "jpName": "S1:時流の恵",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 163,
                "id": "S1 Add: Lethal Intent",
                "name": "S1:Lethal Intent",
                "jpId": "S1追加:死中の志",
                "jpName": "S1:死中の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 168,
                "id": "S1 Add: Reckless Strike",
                "name": "S1:Reckless Strike",
                "jpId": "S1追加:賭死の撃",
                "jpName": "S1:賭死の撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 169,
                "id": "S1 Add: Eclipsing Decay",
                "name": "S1:Eclipsing Decay",
                "jpId": "S1追加:失力の蝕",
                "jpName": "S1:失力の蝕",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 493,
                "id": "S1 Add: Photon Balance",
                "name": "S1:Photon Balance",
                "jpId": "S1追加:光子の秤",
                "jpName": "S1:光子の秤",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 666,
                "id": "S1 Add: Photon Balance 2",
                "name": "S1:Photon Balance 2",
                "jpId": "S1追加:光子の秤2",
                "jpName": "S1:光子の秤2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 522,
                "id": "S1 Add: Collaborator Liberator",
                "name": "S1:Collaborator Liberator",
                "jpId": "S1追加:戦友の加護",
                "jpName": "S1:戦友の加護",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 667,
                "id": "S1 Add: Collaborator Liberator 2",
                "name": "S1:Collaborator Liberator 2",
                "jpId": "S1追加:戦友の加護2",
                "jpName": "S1:戦友の加護2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 668,
                "id": "S1 Add: Offensive Intent 2",
                "name": "S1:Offensive Intent 2",
                "jpId": "S1追加:剛撃の志2",
                "jpName": "S1:剛撃の志2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 200,
                "id": "S2 Add: Nature's Reduction 2",
                "name": "S2:Nature's Reduction 2",
                "jpId": "S2追加:花海雪の縮減2",
                "jpName": "S2:花海雪の縮減2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 201,
                "id": "S2 Add: Umbrageous Radiance 2",
                "name": "S2:Umbrageous Radiance 2",
                "jpId": "S2追加:月葉影の輝剰2",
                "jpName": "S2:月葉影の輝剰2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 199,
                "id": "S2 Add: Umbrageous Melody",
                "name": "S2:Umbrageous Melody",
                "jpId": "S2追加:月葉影の歌",
                "jpName": "S2:月葉影の歌",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 669,
                "id": "S2 Add: Umbrageous Melody 2",
                "name": "S2:Umbrageous Melody 2",
                "jpId": "S2追加:月葉影の歌2",
                "jpName": "S2:月葉影の歌2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 621,
                "id": "S2 Add: Rainbow's Intent",
                "name": "S2:Rainbow's Intent",
                "jpId": "S2追加:六色の志",
                "jpName": "S2:六色の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 622,
                "id": "S2 Add: Rainbow's Exhilaration",
                "name": "S2:Rainbow's Exhilaration",
                "jpId": "S2追加:六色の活与",
                "jpName": "S2:六色の活与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 176,
                "id": "S2 Add: Flowing Exhilaration",
                "name": "S2:Flowing Exhilaration",
                "jpId": "S2追加:時流活与",
                "jpName": "S2:時流活与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 171,
                "id": "S2 Add: Photon Reduction",
                "name": "S2:Photon Reduction",
                "jpId": "S2追加:光子縮減",
                "jpName": "S2:光子縮減",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 670,
                "id": "S2 Add: Photon Reduction 3",
                "name": "S2:Photon Reduction 3",
                "jpId": "S2追加:光子縮減3",
                "jpName": "S2:光子縮減3",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 170,
                "id": "S2 Add: Sturdy Recovery",
                "name": "S2:Sturdy Recovery",
                "jpId": "S2追加:剛乱活与",
                "jpName": "S2:剛乱活与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 174,
                "id": "S2 Add: Cursed Radiance",
                "name": "S2:Cursed Radiance",
                "jpId": "S2追加:災転輝与",
                "jpName": "S2:災転輝与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 178,
                "id": "S2 Add: Spirited Response",
                "name": "S2:Spirited Response",
                "jpId": "S2追加:気輝応変",
                "jpName": "S2:気輝応変",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 179,
                "id": "S2 Add: Flowing Grace",
                "name": "S2:Flowing Grace",
                "jpId": "S2追加:時流の恵",
                "jpName": "S2:時流の恵",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 642,
                "id": "S2 Add: Brilliant Intent",
                "name": "S2:Brilliant Intent",
                "jpId": "S2追加:輝充の志",
                "jpName": "S2:輝充の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 191,
                "id": "S2 Add: Rupturing Excess",
                "name": "S2:Rupturing Excess",
                "jpId": "S2追加:裂砕の剰",
                "jpName": "S2:裂砕の剰",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 192,
                "id": "S2 Add: Double-Edged Sword",
                "name": "S2:Double-Edged Sword",
                "jpId": "S2追加:諸刃の撃",
                "jpName": "S2:諸刃の撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 207,
                "id": "S2 Add: Flaming Guard",
                "name": "S2:Flaming Guard",
                "jpId": "S2追加:火炎の備志",
                "jpName": "S2:火炎の備志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 208,
                "id": "S2 Add: Freezing Guard",
                "name": "S2:Freezing Guard",
                "jpId": "S2追加:氷雪の備志",
                "jpName": "S2:氷雪の備志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 494,
                "id": "S2 Add: Lightning Guard",
                "name": "S2:Lightning Guard",
                "jpId": "S2追加:轟雷の備志",
                "jpName": "S2:轟雷の備志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 495,
                "id": "S2 Add: Storm Guard",
                "name": "S2:Storm Guard",
                "jpId": "S2追加:暴風の備志",
                "jpName": "S2:暴風の備志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 523,
                "id": "S2 Add: Shining Guard",
                "name": "S2:Shining Guard",
                "jpId": "S2追加:光明の備志",
                "jpName": "S2:光明の備志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 537,
                "id": "S2 Add: Darkness Guard",
                "name": "S2:Darkness Guard",
                "jpId": "S2追加:暗闇の備志",
                "jpName": "S2:暗闇の備志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 202,
                "id": "S2 Add: Wise Skill 2",
                "name": "S2:Wise Skill 2",
                "jpId": "S2追加:妙技の巧2",
                "jpName": "S2:妙技の巧2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 203,
                "id": "S2 Add: Skilled Intent 2",
                "name": "S2:Skilled Intent 2",
                "jpId": "S2追加:妙撃の志2",
                "jpName": "S2:妙撃の志2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 204,
                "id": "S2 Add: Radiant Strike 2",
                "name": "S2:Radiant Strike 2",
                "jpId": "S2追加:輝剰の撃2",
                "jpName": "S2:輝剰の撃2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 209,
                "id": "S2 Add: Runner's High",
                "name": "S2:Runner's High",
                "jpId": "S2追加:走者高揚",
                "jpName": "S2:走者高揚",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 210,
                "id": "S2 Add: Skill Reduction",
                "name": "S2:Skill Reduction",
                "jpId": "S2追加:技巧縮減",
                "jpName": "S2:技巧縮減",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 497,
                "id": "S2 Add: Heavenly Keeper",
                "name": "S2:Heavenly Keeper",
                "jpId": "S2追加:保天輝地",
                "jpName": "S2:保天輝地",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 658,
                "id": "S2 Add: Heavenly Keeper 2",
                "name": "S2:Heavenly Keeper 2",
                "jpId": "S2追加:保天輝地2",
                "jpName": "S2:保天輝地2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 499,
                "id": "S2 Add: Flowing Armor",
                "name": "S2:Flowing Armor",
                "jpId": "S2追加:時流の護",
                "jpName": "S2:時流の護",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 671,
                "id": "S2 Add: Guardian Armor 2",
                "name": "S2:Guardian Armor 2",
                "jpId": "S2追加:守護の備2",
                "jpName": "S2:守護の備2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 672,
                "id": "S2 Add: Instant Reduction 2",
                "name": "S2:Instant Reduction 2",
                "jpId": "S2追加:瞬乱縮減2",
                "jpName": "S2:瞬乱縮減2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 673,
                "id": "S2 Add: Instant Purpose",
                "name": "S2:Instant Purpose",
                "jpId": "S2追加:瞬乱巧志",
                "jpName": "S2:瞬乱巧志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 674,
                "id": "S2 Add: Medicinal Wisdom 2",
                "name": "S2:Medicinal Wisdom 2",
                "jpId": "S2追加:服薬の恵2",
                "jpName": "S2:服薬の恵2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 233,
                "id": "S3 Add: Nature's Gleam 2",
                "name": "S3:Nature's Gleam 2",
                "jpId": "S3追加:花海雪の輝勢2",
                "jpName": "S3:花海雪の輝勢2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 232,
                "id": "S3 Add: Nature's Melody",
                "name": "S3:Nature's Melody",
                "jpId": "S3追加:花海雪の歌",
                "jpName": "S3:花海雪の歌",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 624,
                "id": "S3 Add: Nature's Melody 2",
                "name": "S3:Nature's Melody 2",
                "jpId": "S3追加:花海雪の歌2",
                "jpName": "S3:花海雪の歌2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 627,
                "id": "S3 Add: Rainbow's Radiance",
                "name": "S3:Rainbow's Radiance",
                "jpId": "S3追加:六色の輝剰",
                "jpName": "S3:六色の輝剰",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 628,
                "id": "S3 Add: Rainbow's Gleam",
                "name": "S3:Rainbow's Gleam",
                "jpId": "S3追加:六色の輝勢",
                "jpName": "S3:六色の輝勢",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 626,
                "id": "S3 Add: Rainbow's Reduction",
                "name": "S3:Rainbow's Reduction",
                "jpId": "S3追加:六色の縮減",
                "jpName": "S3:六色の縮減",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 213,
                "id": "S3 Add: Radiant Strike",
                "name": "S3:Radiant Strike",
                "jpId": "S3追加:輝剰の撃",
                "jpName": "S3:輝剰の撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 675,
                "id": "S3 Add: Radiant Strike 3",
                "name": "S3:Radiant Strike 3",
                "jpId": "S3追加:輝剰の撃3",
                "jpName": "S3:輝剰の撃3",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 214,
                "id": "S3 Add: Skilled Intent",
                "name": "S3:Skilled Intent",
                "jpId": "S3追加:妙撃の志",
                "jpName": "S3:妙撃の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 645,
                "id": "S3 Add: Splintering Intent",
                "name": "S3:Splintering Intent",
                "jpId": "S3追加:裂砕妙撃の志",
                "jpName": "S3:裂砕妙撃の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 211,
                "id": "S3 Add: Offensive Intent",
                "name": "S3:Offensive Intent",
                "jpId": "S3追加:剛撃の志",
                "jpName": "S3:剛撃の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 212,
                "id": "S3 Add: Vital Intent",
                "name": "S3:Vital Intent",
                "jpId": "S3追加:活実の志",
                "jpName": "S3:活実の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 676,
                "id": "S3 Add: Vital Intent 2",
                "name": "S3:Vital Intent 2",
                "jpId": "S3追加:活実の志2",
                "jpName": "S3:活実の志2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 659,
                "id": "S3 Add: Double-Edged Sword",
                "name": "S3:Double-Edged Sword",
                "jpId": "S3追加:諸刃の撃",
                "jpName": "S3:諸刃の撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 222,
                "id": "S3 Add: Photon Reduction",
                "name": "S3:Photon Reduction",
                "jpId": "S3追加:光子縮減",
                "jpName": "S3:光子縮減",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 226,
                "id": "S3 Add: Brilliant Ruin",
                "name": "S3:Brilliant Ruin",
                "jpId": "S3追加:滅域輝与",
                "jpName": "S3:滅域輝与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 227,
                "id": "S3 Add: Cursed Radiance",
                "name": "S3:Cursed Radiance",
                "jpId": "S3追加:災転輝与",
                "jpName": "S3:災転輝与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 236,
                "id": "S3 Add: Radiating Grace 2",
                "name": "S3:Radiating Grace 2",
                "jpId": "S3追加:輝勢の恵2",
                "jpName": "S3:輝勢の恵2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 235,
                "id": "S3 Add: Flowing Exhilaration 2",
                "name": "S3:Flowing Exhilaration 2",
                "jpId": "S3追加:時流活与2",
                "jpName": "S3:時流活与2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 234,
                "id": "S3 Add: Flowing Grace",
                "name": "S3:Flowing Grace",
                "jpId": "S3追加:時流の恵",
                "jpName": "S3:時流の恵",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 239,
                "id": "S3 Add: Calming Exhilaration",
                "name": "S3:Calming Exhilaration",
                "jpId": "S3追加:静心活与",
                "jpName": "S3:静心活与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 240,
                "id": "S3 Add: Fortifying Strike",
                "name": "S3:Fortifying Strike",
                "jpId": "S3追加:撃流の備",
                "jpName": "S3:撃流の備",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 241,
                "id": "S3 Add: Curtailed Strike",
                "name": "S3:Curtailed Strike",
                "jpId": "S3追加:撃流縮減",
                "jpName": "S3:撃流縮減",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 242,
                "id": "S3 Add: Wise Strike",
                "name": "S3:Wise Strike",
                "jpId": "S3追加:撃流の巧",
                "jpName": "S3:撃流の巧",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 498,
                "id": "S3 Add: Flowing Courage",
                "name": "S3:Flowing Courage",
                "jpId": "S3追加:時流の勇",
                "jpName": "S3:時流の勇",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 625,
                "id": "S3 Add: Powering Intent",
                "name": "S3:Powering Intent",
                "jpId": "S3追加:強闘の志",
                "jpName": "S3:強闘の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 644,
                "id": "S3 Add: Immediate Brilliance",
                "name": "S3:Immediate Brilliance",
                "jpId": "S3追加:瞬連の輝",
                "jpName": "S3:瞬連の輝",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 262,
                "id": "S4 Add: Skilled Balance",
                "name": "S4:Skilled Balance",
                "jpId": "S4追加:妙撃の秤",
                "jpName": "S4:妙撃の秤",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 260,
                "id": "S4 Add: Heavenly Protection",
                "name": "S4:Heavenly Protection",
                "jpId": "S4追加:天輝の守護",
                "jpName": "S4:天輝の守護",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 261,
                "id": "S4 Add: Calming Intent",
                "name": "S4:Calming Intent",
                "jpId": "S4追加:静心の志",
                "jpName": "S4:静心の志",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 263,
                "id": "S4 Add: Saint Shield",
                "name": "S4:Saint Shield",
                "jpId": "S4追加:聖者の盾",
                "jpName": "S4:聖者の盾",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 264,
                "id": "S4 Add: Harmonized Rainbow",
                "name": "S4:Harmonized Rainbow",
                "jpId": "S4追加:六色の輝秤",
                "jpName": "S4:六色の輝秤",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 524,
                "id": "S4 Add: Raising Pursuit",
                "name": "S4:Raising Pursuit",
                "jpId": "S4追加:累加追撃",
                "jpName": "S4:累加追撃",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 538,
                "id": "S4 Add: Pursuing Skill",
                "name": "S4:Pursuing Skill",
                "jpId": "S4追加:追蝕の巧",
                "jpName": "S4:追蝕の巧",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 539,
                "id": "S4 Add: Cursed Rainbow",
                "name": "S4:Cursed Rainbow",
                "jpId": "S4追加:六色の災転",
                "jpName": "S4:六色の災転",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 604,
                "id": "S4 Add: Colossal Radiance",
                "name": "S4:Colossal Radiance",
                "jpId": "S4追加:強闘輝与",
                "jpName": "S4:強闘輝与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 605,
                "id": "S4 Add: Evasion Training",
                "name": "S4:Evasion Training",
                "jpId": "S4追加:回避訓練",
                "jpName": "S4:回避訓練",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 606,
                "id": "S4 Add: Pursuing Radiance",
                "name": "S4:Pursuing Radiance",
                "jpId": "S4追加:追蝕輝剰",
                "jpName": "S4:追蝕輝剰",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 629,
                "id": "S4 Add: Shared Ruin",
                "name": "S4:Shared Ruin",
                "jpId": "S4追加:滅域分与",
                "jpName": "S4:滅域分与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 599,
                "id": "S5 Add: Anthesis Cultivation",
                "name": "S5:Anthesis Cultivation",
                "jpId": "S5追加:錬成萌花",
                "jpName": "S5:錬成萌花",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 630,
                "id": "S5 Add: Instant Invocation",
                "name": "S5:Instant Invocation",
                "jpId": "S5追加:瞬術略唱",
                "jpName": "S5:瞬術略唱",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 632,
                "id": "S5 Add: Tethered Eclipse",
                "name": "S5:Tethered Eclipse",
                "jpId": "S5追加:追蝕の縛",
                "jpName": "S5:追蝕の縛",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 631,
                "id": "S5 Add: Vigorous Response",
                "name": "S5:Vigorous Response",
                "jpId": "S5追加:活器応変",
                "jpName": "S5:活器応変",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 643,
                "id": "S5 Add: Angelic Respite",
                "name": "S5:Angelic Respite",
                "jpId": "S5追加:槍機天悠",
                "jpName": "S5:槍機天悠",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 646,
                "id": "S5 Add: Calming Expanse",
                "name": "S5:Calming Expanse",
                "jpId": "S5追加:静心拡域",
                "jpName": "S5:静心拡域",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 647,
                "id": "S5 Add: Area Support",
                "name": "S5:Area Support",
                "jpId": "S5追加:領域加勢",
                "jpName": "S5:領域加勢",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 677,
                "id": "S5 Add: Aegis Balance",
                "name": "S5:Aegis Balance",
                "jpId": "S5追加:堅守の秤",
                "jpName": "S5:堅守の秤",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 687,
                "id": "S5 Add: Parting Gift",
                "name": "S5:Parting Gift",
                "jpId": "S5追加:終撃応与",
                "jpName": "S5:終撃応与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 678,
                "id": "S5 Add: Swift Radiance",
                "name": "S5:Swift Radiance",
                "jpId": "S5追加:回避輝与",
                "jpName": "S5:回避輝与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 648,
                "id": "S5 Add: Calming Quartet",
                "name": "S5:Calming Quartet",
                "jpId": "S5追加:静心四連",
                "jpName": "S5:静心四連",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 679,
                "id": "S5 Add: Chained Radiance",
                "name": "S5:Chained Radiance",
                "jpId": "S5追加:連鎖輝与",
                "jpName": "S5:連鎖輝与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 560,
                "id": "S6 Add: Ironclad Illness",
                "name": "S6:Ironclad Illness",
                "jpId": "S6追加:癒蝕頑強",
                "jpName": "S6:癒蝕頑強",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 562,
                "id": "S6 Add: Guardian Armor",
                "name": "S6:Guardian Armor",
                "jpId": "S6追加:守護の備",
                "jpName": "S6:守護の備",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 557,
                "id": "S6 Add: Heroic Howl",
                "name": "S6:Heroic Howl",
                "jpId": "S6追加:英雄咆哮",
                "jpName": "S6:英雄咆哮",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 558,
                "id": "S6 Add: Soaring Ballet",
                "name": "S6:Soaring Ballet",
                "jpId": "S6追加:翔機天舞",
                "jpName": "S6:翔機天舞",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 559,
                "id": "S6 Add: Guardian's Essence",
                "name": "S6:Guardian's Essence",
                "jpId": "S6追加:機魂の守護",
                "jpName": "S6:機魂の守護",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 571,
                "id": "S6 Add: Evasion Whistle",
                "name": "S6:Evasion Whistle",
                "jpId": "S6追加:回避の口笛",
                "jpName": "S6:回避の口笛",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 607,
                "id": "S6 Add: Long Night Star",
                "name": "S6:Long Night Star",
                "jpId": "S6追加:長夜の明星",
                "jpName": "S6:長夜の明星",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 633,
                "id": "S6 Add: Overlimit",
                "name": "S6:Overlimit",
                "jpId": "S6追加:超限活器",
                "jpName": "S6:超限活器",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 649,
                "id": "S6 Add: Wondrous Encore",
                "name": "S6:Wondrous Encore",
                "jpId": "S6追加:奇跡再演",
                "jpName": "S6:奇跡再演",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 680,
                "id": "S6 Add: Raising Expanse",
                "name": "S6:Raising Expanse",
                "jpId": "S6追加:累加拡域",
                "jpName": "S6:累加拡域",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 681,
                "id": "S6 Add: Rainbow's Shield",
                "name": "S6:Rainbow's Shield",
                "jpId": "S6追加:六色の盾",
                "jpName": "S6:六色の盾",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 574,
                "id": "S7 Add: S-ATK Up",
                "name": "S7:S-ATK Up",
                "jpId": "S7追加:打撃上昇",
                "jpName": "S7:打撃上昇",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 575,
                "id": "S7 Add: R-ATK Up",
                "name": "S7:R-ATK Up",
                "jpId": "S7追加:射撃上昇",
                "jpName": "S7:射撃上昇",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 576,
                "id": "S7 Add: T-ATK Up",
                "name": "S7:T-ATK Up",
                "jpId": "S7追加:法撃上昇",
                "jpName": "S7:法撃上昇",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 573,
                "id": "S7 Add: Glowing Grace",
                "name": "S7:Glowing Grace",
                "jpId": "S7追加:輝静の恵",
                "jpName": "S7:輝静の恵",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 584,
                "id": "S7 Add: Zenith Impact",
                "name": "S7:Zenith Impact",
                "jpId": "S7追加:瞬撃の極",
                "jpName": "S7:瞬撃の極",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 600,
                "id": "S7 Add: Increased Efficiency",
                "name": "S7:Increased Efficiency",
                "jpId": "S7追加:薬効増大",
                "jpName": "S7:薬効増大",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 601,
                "id": "S7 Add: Mind Merge",
                "name": "S7:Mind Merge",
                "jpId": "S7追加:以心伝心",
                "jpName": "S7:以心伝心",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 634,
                "id": "S7 Add: Sentinel's Gift",
                "name": "S7:Sentinel's Gift",
                "jpId": "S7追加:法護の与",
                "jpName": "S7:法護の与",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 650,
                "id": "S7 Add: Descried Warrior",
                "name": "S7:Descried Warrior",
                "jpId": "S7追加:視敵無双",
                "jpName": "S7:視敵無双",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 682,
                "id": "S7 Add: Rainbow's Skill",
                "name": "S7:Rainbow's Skill",
                "jpId": "S7追加:六色の巧",
                "jpName": "S7:六色の巧",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 688,
                "id": "S7 Add: Amended Movement",
                "name": "S7:Amended Movement",
                "jpId": "S7追加:注技縮地",
                "jpName": "S7:注技縮地",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 590,
                "id": "S8 Add: HP Up",
                "name": "S8:HP Up",
                "jpId": "S8追加:活器上昇",
                "jpName": "S8:活器上昇",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 592,
                "id": "S8 Add: HP Up 2",
                "name": "S8:HP Up 2",
                "jpId": "S8追加:活器上昇2",
                "jpName": "S8:活器上昇2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 591,
                "id": "S8 Add: PP Up",
                "name": "S8:PP Up",
                "jpId": "S8追加:輝器上昇",
                "jpName": "S8:輝器上昇",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 593,
                "id": "S8 Add: PP Up 2",
                "name": "S8:PP Up 2",
                "jpId": "S8追加:輝器上昇2",
                "jpName": "S8:輝器上昇2",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 585,
                "id": "S8 Add: Sky Dance's Boon",
                "name": "S8:Sky Dance's Boon",
                "jpId": "S8追加:舞空の援",
                "jpName": "S8:舞空の援",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 586,
                "id": "S8 Add: Strong Potency",
                "name": "S8:Strong Potency",
                "jpId": "S8追加:服薬強身",
                "jpName": "S8:服薬強身",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 602,
                "id": "S8 Add: High-Minded",
                "name": "S8:High-Minded",
                "jpId": "S8追加:一念滞空",
                "jpName": "S8:一念滞空",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 683,
                "id": "S8 Add: Rainbow's Decay",
                "name": "S8:Rainbow's Decay",
                "jpId": "S8追加:六色の蝕",
                "jpName": "S8:六色の蝕",
                "value": "",
                "extend": 100,
                "effect": ""
            },
            {
                "ref": 416,
                "id": "Add Ability (Sentence P)",
                "simId": "Add Ability (Sentence P)",
                "name": "Sentence Power",
                "jpId": "特殊能力(センテンスP)",
                "jpName": "センテンス・パワー",
                "value": "B40",
                "simValue": "B40",
                "extend": 100,
                "effect": "S-ATK(+20),<br>PP(+4)"
            },
            {
                "ref": 418,
                "id": "Add Ability (Sentence S)",
                "simId": "Add Ability (Sentence S)",
                "name": "Sentence Shoot",
                "jpId": "特殊能力(センテンスS)",
                "jpName": "センテンス・シュート",
                "value": "B41",
                "simValue": "B41",
                "extend": 100,
                "effect": "R-ATK(+20),<br>PP(+4)"
            },
            {
                "ref": 420,
                "id": "Add Ability (Sentence T)",
                "simId": "Add Ability (Sentence T)",
                "name": "Sentence Tech",
                "jpId": "特殊能力(センテンスT)",
                "jpName": "センテンス・テクニック",
                "value": "B42",
                "simValue": "B42",
                "extend": 100,
                "effect": "T-ATK(+20),<br>PP(+4)"
            },
            {
                "ref": 349,
                "id": "Add Ability (Mana Reverie)",
                "simId": "Add Ability (Mana Reverie)",
                "name": "Mana Reverie",
                "jpId": "特殊能力(マナ・レヴリー)",
                "jpName": "マナ・レヴリー",
                "value": "TK10",
                "simValue": "TK10",
                "extend": 100,
                "effect": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>HP(+20),<br>PP(+4)"
            },
            {
                "ref": 342,
                "id": "Add Ability (Ether F)",
                "simId": "Add Ability (Ether F)",
                "name": "Ether Factor",
                "jpId": "特殊能力(エーテルF)",
                "jpName": "エーテル・ファクター",
                "value": "TG31",
                "simValue": "TG31",
                "extend": 100,
                "effect": "ALL(+30),<br>HP(+10),<br>PP(+6)"
            },
            {
                "ref": 324,
                "id": "Add Ability (Astral S)",
                "simId": "Add Ability (Astral S)",
                "name": "Astral Soul",
                "jpId": "特殊能力(アストラルS)",
                "jpName": "アストラル・ソール",
                "value": "SA01",
                "simValue": "SA01",
                "extend": 100,
                "effect": "ALL(+35),<br>HP(+35),<br>PP(+5)"
            },
            {
                "ref": 221,
                "id": "S3 Add: Wise Skill",
                "simId": "S3 Add: Wise Skill",
                "name": "S3:Wise Skill",
                "jpId": "S3追加:妙技の巧",
                "jpName": "S3:妙技の巧",
                "value": "",
                "simValue": "",
                "extend": 100,
                "effect": "Increase Critical Hit Rate by 12%."
            },
            {
                "ref": 237,
                "id": "S3 Add: Rupturing Intent",
                "simId": "S3 Add: Rupturing Intent",
                "name": "S3:Rupturing Intent",
                "jpId": "S3追加:裂砕の志",
                "jpName": "S3:裂砕の志",
                "value": "",
                "simValue": "",
                "extend": 100,
                "effect": "Increase damage against breakable parts by 4%."
            }
        ],
        "potential": [
            {
                "id": "Nothing",
                "name": "Nothing",
                "value": "C01",
                "boost": 0,
                "simValue": "C01",
                "ref": 0,
                "jpId": "無し"
            },
            {
                "id": "Guidance of Life Lv1 (+2%)",
                "name": "+2%",
                "value": "C11",
                "boost": 2,
                "simValue": "C11",
                "ref": 1,
                "jpId": "生命の導きLv1(+2%)"
            },
            {
                "id": "Guidance of Life Lv2 (+5%)",
                "name": "+5%",
                "value": "C12",
                "boost": 5,
                "simValue": "C12",
                "ref": 2,
                "jpId": "生命の導きLv2(+5%)"
            },
            {
                "id": "Guidance of Life Lv3 (+10%)",
                "name": "+10%",
                "value": "C13",
                "boost": 10,
                "simValue": "C13",
                "ref": 3,
                "jpId": "生命の導きLv3(+10%)"
            }
        ],
        "boostWeek": [
            0,
            5,
            10,
            15,
            20
        ]
    },
    "excludePattern": {
        "addition": [
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
                "XG",
                "XJ",
                "XH",
                "XI"
            ]
        ],
        "select": [
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
                "XG",
                "XJ",
                "XH",
                "XI"
            ]
        ]
    },
    "extendAbility": [
        {
            "base": [
                "XI31",
                "BA*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI31",
                "BB*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI31",
                "BC*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI32",
                "EA*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI32",
                "EB*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "AA01",
                "AB01",
                "AC01"
            ],
            "ref": "FA01",
            "success": 80
        },
        {
            "base": [
                "AA02",
                "AB02",
                "AC02"
            ],
            "ref": "FA02",
            "success": 70
        },
        {
            "base": [
                "AA03",
                "AB03",
                "AC03"
            ],
            "ref": "FA03",
            "success": 60
        },
        {
            "base": [
                "BA01",
                "BB01",
                "BC01"
            ],
            "ref": "FA01",
            "success": 80
        },
        {
            "base": [
                "BA02",
                "BB02",
                "BC02"
            ],
            "ref": "FA02",
            "success": 70
        },
        {
            "base": [
                "BA03",
                "BB03",
                "BC03"
            ],
            "ref": "FA03",
            "success": 60
        },
        {
            "base": [
                "HA01",
                "HB01",
                "HC01"
            ],
            "ref": "HZ01",
            "success": 80
        },
        {
            "base": [
                "HA02",
                "HB02",
                "HC02"
            ],
            "ref": "HZ02",
            "success": 70
        },
        {
            "base": [
                "HA03",
                "HB03",
                "HC03"
            ],
            "ref": "HZ03",
            "success": 60
        },
        {
            "base": [
                "HI01",
                "HJ01",
                "HK01"
            ],
            "ref": "HZ01",
            "success": 80
        },
        {
            "base": [
                "HI02",
                "HJ02",
                "HK02"
            ],
            "ref": "HZ02",
            "success": 70
        },
        {
            "base": [
                "HI03",
                "HJ03",
                "HK03"
            ],
            "ref": "HZ03",
            "success": 60
        },
        {
            "base": [
                "HL01",
                "HM01",
                "HN01"
            ],
            "ref": "HZ01",
            "success": 80
        },
        {
            "base": [
                "HL02",
                "HM02",
                "HN02"
            ],
            "ref": "HZ02",
            "success": 70
        },
        {
            "base": [
                "HL03",
                "HM03",
                "HN03"
            ],
            "ref": "HZ03",
            "success": 60
        },
        {
            "base": [
                "TD0F",
                "TD0F"
            ],
            "ref": "TL01",
            "success": 40
        },
        {
            "base": [
                "TD0F",
                "TD0F",
                "TD0F"
            ],
            "ref": "TL01",
            "success": 60
        },
        {
            "base": [
                "XA01",
                "R*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XA01",
                "SB*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XA01",
                "SI*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XA01",
                "SH*"
            ],
            "ref": "$$",
            "success": 50
        },
        {
            "base": [
                "XA01",
                "SA01"
            ],
            "ref": "SA01",
            "success": 10
        },
        {
            "base": [
                "XA01",
                "SA02"
            ],
            "ref": "SA02",
            "success": 10
        },
        {
            "base": [
                "XB01",
                "UA*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XB01",
                "UB*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XD01",
                "YA*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XE01",
                "YB*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XF01",
                "TG0*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XF01",
                "TG3*"
            ],
            "ref": "$$",
            "success": 10
        },
        {
            "base": [
                "XG01",
                "UC*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XJ01",
                "ID*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XK01",
                "IE*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XH01",
                "VJ*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "RP55",
                "RC23",
                "ROC2",
                "RQ01",
                "RI22"
            ],
            "ref": "VJ01",
            "success": 10
        },
        {
            "base": [
                "TK02",
                "TK03",
                "TK04",
                "TK05",
                "TK06"
            ],
            "ref": "VJ03",
            "success": 10
        },
        {
            "base": [
                "VJ01",
                "VJ01",
                "VJ01",
                "VJ01",
                "RZ01"
            ],
            "ref": "SA01",
            "success": 60
        },
        {
            "base": [
                "TN01",
                "TN02",
                "TN04",
                "TN05"
            ],
            "ref": "VJ04",
            "success": 10
        },
        {
            "base": [
                "TN02",
                "TN03",
                "TN04",
                "TN05"
            ],
            "ref": "VJ04",
            "success": 10
        },
        {
            "base": [
                "TN06",
                "TN07",
                "TN08",
                "TN09"
            ],
            "ref": "TN0A",
            "success": 10
        },
        {
            "base": [
                "VJ04",
                "VJ04",
                "VJ04",
                "VJ04",
                "TN0A"
            ],
            "ref": "TN11",
            "success": 60
        },
        {
            "base": [
                "SA01",
                "TG31",
                "TK10",
                "TN11"
            ],
            "ref": "SA02",
            "success": 10
        },
        {
            "base": [
                "TG02",
                "TG03",
                "TG04"
            ],
            "ref": "VJ02",
            "success": 10
        },
        {
            "base": [
                "SB01",
                "SB02"
            ],
            "ref": "SA11",
            "success": 10
        },
        {
            "base": [
                "SB01",
                "SB03"
            ],
            "ref": "SA11",
            "success": 10
        },
        {
            "base": [
                "SB02",
                "SB03"
            ],
            "ref": "SA11",
            "success": 10
        },
        {
            "base": [
                "XA01",
                "SA11"
            ],
            "ref": "SA11",
            "success": 100
        },
        {
            "base": [
                "VJ02",
                "VJ02",
                "VJ02",
                "VJ02",
                "SA11"
            ],
            "ref": "TG31",
            "success": 60
        },
        {
            "base": [
                "VJ03",
                "VJ03",
                "VJ03",
                "VJ03",
                "TJ01"
            ],
            "ref": "TK10",
            "success": 60
        },
        {
            "base": [
                "SB*",
                "RA11"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RA15"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RA21"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RA23"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RB22"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RC13"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RH21"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RH23"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RI23"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "RJ22"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "ROA2"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "ROC1"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SB*",
                "ROE1"
            ],
            "ref": [
                "SH10",
                "SH20",
                "SH30",
                "SH40"
            ],
            "success": 70
        },
        {
            "base": [
                "SI01",
                "RA11"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RA15"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RA21"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RA23"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RB22"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RC13"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RH21"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RH23"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RI23"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "RJ22"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "ROA2"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "ROC1"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI01",
                "ROE1"
            ],
            "ref": [
                "SH10"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RA11"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RA15"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RA21"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RA23"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RB22"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RC13"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RH21"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RH23"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RI23"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "RJ22"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "ROA2"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "ROC1"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI02",
                "ROE1"
            ],
            "ref": [
                "SH20"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RA11"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RA15"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RA21"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RA23"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RB22"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RC13"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RH21"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RH23"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RI23"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "RJ22"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "ROA2"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "ROC1"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI03",
                "ROE1"
            ],
            "ref": [
                "SH30"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RA11"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RA15"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RA21"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RA23"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RB22"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RC13"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RH21"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RH23"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RI23"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "RJ22"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "ROA2"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "ROC1"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "SI04",
                "ROE1"
            ],
            "ref": [
                "SH40"
            ],
            "success": 90
        },
        {
            "base": [
                "LP05",
                "LM05"
            ],
            "ref": "LP06",
            "success": 50
        },
        {
            "base": [
                "LS05",
                "LM05"
            ],
            "ref": "LS06",
            "success": 50
        },
        {
            "base": [
                "LT05",
                "LM05"
            ],
            "ref": "LT06",
            "success": 50
        },
        {
            "base": [
                "LP05",
                "LR05"
            ],
            "ref": "LP07",
            "success": 50
        },
        {
            "base": [
                "LS05",
                "LR05"
            ],
            "ref": "LS07",
            "success": 50
        },
        {
            "base": [
                "LT05",
                "LR05"
            ],
            "ref": "LT07",
            "success": 50
        },
        {
            "base": [
                "XI30",
                "AA*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI30",
                "AB*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI30",
                "AC*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XI30",
                "AD*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "SB04",
                "SB05",
                "TK01"
            ],
            "ref": "TJ01",
            "success": 10
        },
        {
            "base": [
                "XL01",
                "TK0*"
            ],
            "ref": "$$",
            "success": 100
        },
        {
            "base": [
                "XL01",
                "TK1*"
            ],
            "ref": "$$",
            "success": 10
        }
    ],
    "extraSlot": [
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
    "boostPoint": {
        "photon": {
            "create": {
                "2": [
                    0,
                    0,
                    0,
                    100,
                    70,
                    50,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    100,
                    70,
                    50,
                    0
                ]
            }
        },
        "mutation1": {
            "create": {
                "1": [
                    0,
                    0,
                    0,
                    30,
                    0,
                    0,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    30,
                    0,
                    0,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    40,
                    0,
                    0,
                    0
                ]
            }
        },
        "mutation2": {
            "create": {
                "1": [
                    0,
                    0,
                    0,
                    40,
                    30,
                    0,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    40,
                    30,
                    0,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    50,
                    30,
                    0,
                    0
                ]
            }
        },
        "soul": {
            "create": {
                "1": [
                    0,
                    0,
                    0,
                    20,
                    20,
                    0,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    20,
                    20,
                    0,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    30,
                    20,
                    0,
                    0
                ],
                "4": [
                    0,
                    0,
                    0,
                    10,
                    10,
                    0,
                    0
                ]
            },
            "extend": {
                "1": [
                    0,
                    0,
                    0,
                    20,
                    0,
                    0,
                    0
                ],
                "2": [
                    0,
                    0,
                    0,
                    20,
                    0,
                    0,
                    0
                ],
                "3": [
                    0,
                    0,
                    0,
                    60,
                    0,
                    0,
                    0
                ],
                "4": [
                    0,
                    0,
                    0,
                    10,
                    10,
                    0,
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
        "doom": {
            "create": {
                "5": [
                    0,
                    0,
                    0,
                    20
                ]
            },
            "extend": {
                "5": [
                    0,
                    0,
                    0,
                    20
                ]
            }
        },
        "doom2": {
            "create": {
                "5": [
                    0,
                    0,
                    0,
                    30
                ]
            },
            "extend": {
                "5": [
                    0,
                    0,
                    0,
                    30
                ]
            }
        },
        "extreme": {
            "extend": {
                "1": [
                    0,
                    0,
                    0,
                    0,
                    {
                        "max": 80,
                        "boost": 20
                    },
                    {
                        "max": 60,
                        "boost": 20
                    },
                    {
                        "max": 60,
                        "boost": 20
                    }
                ]
            }
        },
        "divinewill": {
            "extend": {
                "1": [
                    20
                ]
            }
        },
        "divineorder": {
            "extend": {
                "1": [
                    30
                ]
            }
        }
    },
    "sameBonusBoost": [
        1,
        1.1,
        1.15
    ],
    "pairingExceptions": {
        "strict": [
            [
                "XB01",
                "R"
            ],
            [
                "XA",
                "XC"
            ],
            [
                "XA",
                "XF"
            ],
            [
                "XC",
                "XF"
            ]
        ],
        "lenient": [
            [
                "XA",
                ""
            ],
            [
                "XF",
                ""
            ]
        ]
    },
    "abilityList": [
        {
            "name": "Ability I",
            "jpName": "アビリティⅠ",
            "effect": "ALL(+5)",
            "jpEffect": "ALL(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "FA01",
            "code": "FA01",
            "gid": "AD",
            "extend": [
                100
            ],
            "status": 5,
            "ref": 49
        },
        {
            "name": "Ability II",
            "jpName": "アビリティⅡ",
            "effect": "ALL(+10)",
            "jpEffect": "ALL(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "FA02",
            "code": "FA02",
            "gid": "AD",
            "extend": [
                20,
                40,
                60
            ],
            "status": 5,
            "ref": 50
        },
        {
            "name": "Ability III",
            "jpName": "アビリティⅢ",
            "effect": "ALL(+15)",
            "jpEffect": "ALL(+15)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "FA03",
            "code": "FA03",
            "gid": "AD",
            "extend": [
                10,
                30,
                50
            ],
            "status": 5,
            "ref": 51
        },
        {
            "name": "Ability IV",
            "jpName": "アビリティⅣ",
            "effect": "ALL(+20)",
            "jpEffect": "ALL(+20)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "FA04",
            "code": "FA04",
            "gid": "AD",
            "ref": 52
        },
        {
            "name": "Ability V",
            "jpName": "アビリティⅤ",
            "effect": "ALL(+30)",
            "jpEffect": "ALL(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "FA05",
            "code": "FA05",
            "gid": "AD",
            "ref": 603
        },
        {
            "name": "Absolute Glare",
            "jpName": "アブソリュート・グレア",
            "effect": "ALL(+40)<br>HP(+30)<br>PP(+3)",
            "jpEffect": "ALL(+40)<br>HP(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN11",
            "code": "TN11",
            "gid": "AC",
            "status": 1,
            "tooltip": "Made from: 4x Glare Catalyst + Photoner Glare<br>Used for: Guardian Soul",
            "ref": 655
        },
        {
            "name": "Act The Soul",
            "jpName": "アクト・ジ・ソール",
            "effect": "S-ATK(+35),<br>PP(+3)",
            "jpEffect": "打撃力(+35)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SH10",
            "code": "SH10",
            "gid": "EA",
            "extend": [
                0,
                25,
                40
            ],
            "tooltip": "Made from: Earth/Omega/Ex Act Soul + Free Field Boss Soul",
            "ref": 331
        },
        {
            "name": "All Resist I",
            "jpName": "オールレジストⅠ",
            "effect": "All Resist(+1)",
            "jpEffect": "全耐性(+1)<br>全軽減(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HZ01",
            "code": "HZ01",
            "gid": "DA",
            "extend": [
                30,
                50,
                70
            ],
            "status": 2,
            "ref": 98
        },
        {
            "name": "All Resist II",
            "jpName": "オールレジストⅡ",
            "effect": "All Resist(+2)",
            "jpEffect": "全耐性(+2)<br>全軽減(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HZ02",
            "code": "HZ02",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "status": 2,
            "ref": 99
        },
        {
            "name": "All Resist III",
            "jpName": "オールレジストⅢ",
            "effect": "All Resist(+3)",
            "jpEffect": "全耐性(+3)<br>全軽減(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HZ03",
            "code": "HZ03",
            "gid": "DA",
            "extend": [
                10,
                30,
                50
            ],
            "status": 2,
            "ref": 100
        },
        {
            "name": "All Resist IV",
            "jpName": "オールレジストⅣ",
            "effect": "All Resist(+4)",
            "jpEffect": "全耐性(+4)<br>全軽減(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HZ04",
            "code": "HZ04",
            "gid": "DA",
            "status": 2,
            "ref": 101
        },
        {
            "name": "All Resist V",
            "jpName": "オールレジストⅤ",
            "effect": "All Resist(+5)",
            "jpEffect": "全耐性(+5)<br>全軽減(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HZ05",
            "code": "HZ05",
            "gid": "DA",
            "status": 2,
            "ref": 102
        },
        {
            "name": "Alter Arma",
            "jpName": "アルター・アルマ",
            "effect": "S-ATK(+20),<br>HP(+30)",
            "jpEffect": "打撃力(+20)<br>HP(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UB01",
            "code": "UB01",
            "gid": "AC",
            "extend": [
                0,
                0,
                80
            ],
            "ref": 409
        },
        {
            "name": "Alter Magia",
            "jpName": "アルター・マギア",
            "effect": "T-ATK(+20),<br>HP(+30)",
            "jpEffect": "法撃力(+20)<br>HP(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UB21",
            "code": "UB21",
            "gid": "AC",
            "extend": [
                0,
                0,
                80
            ],
            "ref": 411
        },
        {
            "name": "Alter Tiro",
            "jpName": "アルター・ティロ",
            "effect": "R-ATK(+20),<br>HP(+30)",
            "jpEffect": "射撃力(+20)<br>HP(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UB11",
            "code": "UB11",
            "gid": "AC",
            "extend": [
                0,
                0,
                80
            ],
            "ref": 410
        },
        {
            "name": "Anga Soul",
            "jpName": "アンガ・ソール",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+4)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RP25",
            "code": "RP25",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TB"
            ],
            "rel": "soul",
            "ref": 319
        },
        {
            "name": "Ange Glare",
            "jpName": "アンジュール・グレア",
            "effect": "S-ATK(+30)<br>S-DEF(+40)<br>R-DEF(+20)<br>T-DEF(+20)",
            "jpEffect": "打撃力(+30)<br>打撃防御(+40)<br>射撃防御(+20)<br>法撃防御(+20)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN01",
            "code": "TN01",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Glare Catalyst (Can be replaced with Dominus Glare)",
            "ref": 509
        },
        {
            "name": "Another History",
            "jpName": "アナザーヒストリー",
            "effect": "Experience Gain +10%",
            "jpEffect": "取得する経験値が増加+10%",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VE01",
            "code": "VE01",
            "gid": "CC",
            "ref": 439
        },
        {
            "name": "Appregina Reverie",
            "jpName": "アプレジナ・レヴリー",
            "effect": "S-ATK(+20),<br>R-ATK(+40),<br>T-ATK(+20),<br>HP(-10),<br>PP(-1)",
            "jpEffect": "打撃力(+20)<br>射撃力(+40)<br>法撃力(+20)<br>HP(-10)<br>PP(-1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TK04",
            "code": "TK04",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Reverie Catalyst",
            "ref": 346
        },
        {
            "name": "Apprentice Soul",
            "jpName": "アプレンティス・ソール",
            "effect": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40)",
            "jpEffect": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RP55",
            "code": "RP55",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TC"
            ],
            "rel": "soul",
            "tooltip": "Used for: Soul Catalyst",
            "ref": 320
        },
        {
            "name": "Ares The Soul",
            "jpName": "アレス・ジ・ソール",
            "effect": "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>HP(+35),<br>PP(+3)",
            "jpEffect": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)<br>HP(+35)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SH40",
            "code": "SH40",
            "gid": "EA",
            "extend": [
                0,
                25,
                40
            ],
            "tooltip": "Made from: Earth/Omega/Ex Ares Soul + Free Field Boss Soul",
            "ref": 334
        },
        {
            "name": "ARKS Fever",
            "jpName": "アクス・フィーバー",
            "effect": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>DEX(+5),<br>PP(+5)",
            "jpEffect": "打撃力(+5)<br>射撃力(+5)<br>法撃力(+5)<br>技量(+5)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0F",
            "code": "TD0F",
            "gid": "EB",
            "extend": [
                100
            ],
            "tooltip": "Used for: ARKS Max",
            "ref": 405
        },
        {
            "name": "ARKS Max",
            "jpName": "アクス・MAX",
            "effect": "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25)",
            "jpEffect": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TL01",
            "code": "TL01",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "tooltip": "Made from: 2/3x ARKS Fever",
            "ref": 338
        },
        {
            "name": "Arkuma Smile",
            "jpName": "アークマ・スマイル",
            "effect": "Adds 25 EXP to NT weapon grinds.",
            "jpEffect": "新世武器強化時の経験値が増加する\n強化値",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VM01",
            "code": "VK04",
            "gid": "CC",
            "extend": [
                100
            ],
            "ref": 447
        },
        {
            "name": "Arm I",
            "jpName": "アームⅠ",
            "effect": "DEX(+10)",
            "jpEffect": "技量(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AD01",
            "code": "AD01",
            "gid": "AA",
            "lvup": "AD02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 18
        },
        {
            "name": "Arm II",
            "jpName": "アームⅡ",
            "effect": "DEX(+20)",
            "jpEffect": "技量(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AD02",
            "code": "AD02",
            "gid": "AA",
            "lvup": "AD03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 19
        },
        {
            "name": "Arm III",
            "jpName": "アームⅢ",
            "effect": "DEX(+30)",
            "jpEffect": "技量(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AD03",
            "code": "AD03",
            "gid": "AA",
            "lvup": "AD04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 20
        },
        {
            "name": "Arm IV",
            "jpName": "アームⅣ",
            "effect": "DEX(+35)",
            "jpEffect": "技量(+35)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AD04",
            "code": "AD04",
            "gid": "AA",
            "lvup": "AD05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 21
        },
        {
            "name": "Arm V",
            "jpName": "アームⅤ",
            "effect": "DEX(+40)",
            "jpEffect": "技量(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AD05",
            "code": "AD05",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 22
        },
        {
            "name": "Astral Soul",
            "jpName": "アストラル・ソール",
            "effect": "ALL(+35),<br>HP(+35),<br>PP(+5)",
            "jpEffect": "ALL(+35)<br>HP(+35)<br>PP(+5)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "SA01",
            "code": "SA01",
            "gid": "EA",
            "tooltip": "Made from: 4x Soul Catalyst + Darkness Soul<br>Used for: Guardian Soul",
            "ref": 324
        },
        {
            "name": "Attack Boost",
            "jpName": "アタック・ブースト",
            "effect": "S-ATK(+25),R-ATK(+25),T-ATK(+25),DEX(+40),PP(+3)",
            "jpEffect": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)<br>技量(+40)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 535,
            "code": "XI22"
        },
        {
            "name": "Attack Receptor",
            "jpName": "アタックレセプター",
            "effect": "Greatly increases affix rate of <br>Power, Shoot, Technique, Arm<br>ALL(+5)",
            "jpEffect": "攻撃力上昇特殊能力3種とアームの継承成功率を大幅に上昇\nALL(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XI30",
            "code": "XI30",
            "gid": "GB",
            "ref": 459
        },
        {
            "name": "Bal Soul",
            "jpName": "バル・ソール",
            "effect": "R-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
            "jpEffect": "射撃力(+20)<br>法撃力(+20)<br>HP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROE1",
            "code": "ROE1",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "EA",
                "JB"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 311
        },
        {
            "name": "Bayari Soul",
            "jpName": "ベーアリ・ソール",
            "effect": "S-ATK(+35),<br>DEX(+5),<br>PP(+3)",
            "jpEffect": "打撃力(+35)<br>技量(+5)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA33",
            "code": "RA33",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 274
        },
        {
            "name": "Blow Resist I",
            "jpName": "ブロウレジストⅠ",
            "effect": "Strike Resist(+3)",
            "jpEffect": "打撃軽減(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HA01",
            "code": "HA01",
            "gid": "DA",
            "lvup": "HA02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 53
        },
        {
            "name": "Blow Resist II",
            "jpName": "ブロウレジストⅡ",
            "effect": "Strike Resist(+4)",
            "jpEffect": "打撃軽減(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HA02",
            "code": "HA02",
            "gid": "DA",
            "lvup": "HA03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 54
        },
        {
            "name": "Blow Resist III",
            "jpName": "ブロウレジストⅢ",
            "effect": "Strike Resist(+5)",
            "jpEffect": "打撃軽減(+5)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HA03",
            "code": "HA03",
            "gid": "DA",
            "lvup": "HA04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 55
        },
        {
            "name": "Blow Resist IV",
            "jpName": "ブロウレジストⅣ",
            "effect": "Strike Resist(+6)",
            "jpEffect": "打撃軽減(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HA04",
            "code": "HA04",
            "gid": "DA",
            "lvup": "HA05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 56
        },
        {
            "name": "Blow Resist V",
            "jpName": "ブロウレジストⅤ",
            "effect": "Strike Resist(+7)",
            "jpEffect": "打撃軽減(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HA05",
            "code": "HA05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 57
        },
        {
            "name": "Body I",
            "jpName": "ボディⅠ",
            "effect": "S-DEF(+10)",
            "jpEffect": "打撃防御(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BA01",
            "code": "BA01",
            "gid": "AA",
            "lvup": "BA02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 23
        },
        {
            "name": "Body II",
            "jpName": "ボディⅡ",
            "effect": "S-DEF(+20)",
            "jpEffect": "打撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BA02",
            "code": "BA02",
            "gid": "AA",
            "lvup": "BA03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 24
        },
        {
            "name": "Body III",
            "jpName": "ボディⅢ",
            "effect": "S-DEF(+30)",
            "jpEffect": "打撃防御(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BA03",
            "code": "BA03",
            "gid": "AA",
            "lvup": "BA04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 25
        },
        {
            "name": "Body IV",
            "jpName": "ボディⅣ",
            "effect": "S-DEF(+35)",
            "jpEffect": "打撃防御(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BA04",
            "code": "BA04",
            "gid": "AA",
            "lvup": "BA05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 26
        },
        {
            "name": "Body V",
            "jpName": "ボディⅤ",
            "effect": "S-DEF(+40)",
            "jpEffect": "打撃防御(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BA05",
            "code": "BA05",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 27
        },
        {
            "name": "Burn I",
            "jpName": "バーンⅠ",
            "effect": "Grants Burn Lv1",
            "jpEffect": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv1を付与する(MHP1% × 10回)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JA01",
            "code": "JA01",
            "gid": "DB",
            "lvup": "JA02",
            "extend": [
                60,
                80,
                100
            ],
            "status": 3,
            "ref": 103
        },
        {
            "name": "Burn II",
            "jpName": "バーンⅡ",
            "effect": "Grants Burn Lv2",
            "jpEffect": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv2を付与する(MHP1.2% × 10回)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JA02",
            "code": "JA02",
            "gid": "DB",
            "lvup": "JA03",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                60,
                80
            ],
            "status": 3,
            "ref": 104
        },
        {
            "name": "Burn III",
            "jpName": "バーンⅢ",
            "effect": "Grants Burn Lv3",
            "jpEffect": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv3を付与する(MHP1.2% × 12回)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JA03",
            "code": "JA03",
            "gid": "DB",
            "lvup": "JA04",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 105
        },
        {
            "name": "Burn IV",
            "jpName": "バーンⅣ",
            "effect": "Grants Burn Lv4",
            "jpEffect": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv4を付与する(MHP1.4% × 12回)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JA04",
            "code": "JA04",
            "gid": "DB",
            "lvup": "JA05",
            "extend": [
                20,
                30,
                50
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 106
        },
        {
            "name": "Burn V",
            "jpName": "バーンⅤ",
            "effect": "Grants Burn Lv5",
            "jpEffect": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv5を付与する(MHP1.4% × 14回)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JA05",
            "code": "JA05",
            "gid": "DB",
            "extend": [
                10,
                20,
                40
            ],
            "generate": [
                10,
                30
            ],
            "status": 3,
            "ref": 107
        },
        {
            "name": "Catalyst Receptor",
            "jpName": "カタリストレセプター",
            "effect": "Boosts Catalyst-type ability.<br>ALL(+10)",
            "jpEffect": "カタリスト系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XH01",
            "code": "XH01",
            "gid": "GB",
            "ref": 636
        },
        {
            "name": "Cater Soul",
            "jpName": "キャタ・ソール",
            "effect": "T-DEF(+30),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "法撃防御(+30)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RJ21",
            "code": "RJ21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EA",
                "HC",
                "HI"
            ],
            "rel": "soul",
            "ref": 302
        },
        {
            "name": "Ceremo Fever",
            "jpName": "セレモ・フィーバー",
            "effect": "S-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃力(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD08",
            "code": "TD08",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 398
        },
        {
            "name": "Chrome Soul",
            "jpName": "クローム・ソール",
            "effect": "DEX(+30),<br>HP(+10),<br>PP(+3)",
            "jpEffect": "技量(+30)<br>HP(+10)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RE22",
            "code": "RE22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD",
                "EA",
                "EB",
                "JE"
            ],
            "rel": "soul",
            "ref": 293
        },
        {
            "name": "Cougar Soul",
            "jpName": "クーガー・ソール",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+15)<br>HP(+10)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RP05",
            "code": "RP05",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD"
            ],
            "rel": "soul",
            "ref": 315
        },
        {
            "name": "Crack I",
            "jpName": "クラックⅠ",
            "effect": "S-ATK(+3),<br>R-ATK(+3),<br>T-ATK(+3),<br>S-DEF(+5),<br>R-DEF(+5),<br>T-DEF(+5),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃力(+3)<br>射撃力(+3)<br>法撃力(+3)<br>打撃防御(+5)<br>射撃防御(+5)<br>法撃防御(+5)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TM01",
            "code": "TM01",
            "gid": "AD",
            "lvup": "TM02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 504
        },
        {
            "name": "Crack II",
            "jpName": "クラックⅡ",
            "effect": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>S-DEF(+10),<br>R-DEF(+10),<br>T-DEF(+10),<br>HP(+10),<br>PP(+1)",
            "jpEffect": "打撃力(+5)<br>射撃力(+5)<br>法撃力(+5)<br>打撃防御(+10)<br>射撃防御(+10)<br>法撃防御(+10)<br>HP(+10)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TM02",
            "code": "TM02",
            "gid": "AD",
            "lvup": "TM03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70,
                70
            ],
            "status": 4,
            "ref": 505
        },
        {
            "name": "Crack III",
            "jpName": "クラックⅢ",
            "effect": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+15),<br>PP(+1)",
            "jpEffect": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>打撃防御(+15)<br>射撃防御(+15)<br>法撃防御(+15)<br>HP(+15)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TM03",
            "code": "TM03",
            "gid": "AD",
            "lvup": "TM04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50,
                50
            ],
            "status": 4,
            "ref": 506
        },
        {
            "name": "Crack IV",
            "jpName": "クラックⅣ",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>S-DEF(+30),<br>R-DEF(+30),<br>T-DEF(+30),<br>HP(+30),<br>PP(+2)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>打撃防御(+30)<br>射撃防御(+30)<br>法撃防御(+30)<br>HP(+30)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TM04",
            "code": "TM04",
            "gid": "AD",
            "lvup": "TM05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 507
        },
        {
            "name": "Crack V",
            "jpName": "クラックⅤ",
            "effect": "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+50),<br>PP(+2)",
            "jpEffect": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)<br>打撃防御(+50)<br>射撃防御(+50)<br>法撃防御(+50)<br>HP(+50)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TM05",
            "code": "TM05",
            "gid": "AD",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 508
        },
        {
            "name": "Darkness Soul",
            "jpName": "ダークネス・ソール",
            "effect": "ALL(+15),<br>HP(+15),<br>PP(+2)",
            "jpEffect": "ALL(+15)<br>HP(+15)<br>PP(+2)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RZ01",
            "code": "RZ01",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TE"
            ],
            "rel": "soul",
            "tooltip": "Used for: Astral Soul",
            "ref": 323
        },
        {
            "name": "Deadleon Soul",
            "jpName": "デッドリオン・ソール",
            "effect": "S-ATK(+35),<br>DEX(+5),<br>HP(+30)",
            "jpEffect": "打撃力(+35)<br>技量(+5)<br>HP(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA31",
            "code": "RA31",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 272
        },
        {
            "name": "Defense Boost",
            "jpName": "ディフェンス・ブースト",
            "effect": "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)",
            "jpEffect": "打撃防御(+25)<br>射撃防御(+25)<br>法撃防御(+25)<br>HP(+55)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 483,
            "code": "XI21"
        },
        {
            "name": "Deus Factor",
            "jpName": "デウス・ファクター",
            "effect": "S-ATK(+20),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "打撃力(+20)<br>射撃力(+10)<br>法撃力(+10)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TG04",
            "code": "TG04",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Factor Catalyst",
            "ref": 341
        },
        {
            "name": "Diabo Soul",
            "jpName": "ディアボ・ソール",
            "effect": "T-ATK(+35),<br>DEX(+5),<br>HP(+30)",
            "jpEffect": "法撃力(+35)<br>技量(+5)<br>HP(+30)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC31",
            "code": "RC31",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 288
        },
        {
            "name": "Divine Order",
            "jpName": "ディバイン・オーダー",
            "effect": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>HP(+20),<br>PP(+10)",
            "jpEffect": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>HP(+20)<br>PP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ID02",
            "code": "ID02",
            "gid": "AC",
            "extup": [
                "TN0"
            ],
            "rel": "divineorder",
            "ref": 513
        },
        {
            "name": "Divine Receptor",
            "jpName": "ディバインレセプター",
            "effect": "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
            "jpEffect": "ディバイン系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XJ01",
            "code": "XJ01",
            "gid": "GB",
            "ref": 635
        },
        {
            "name": "Divine Will",
            "jpName": "ディバイン・ウィル",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+5)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ID01",
            "code": "ID01",
            "gid": "AC",
            "extup": [
                "TN0"
            ],
            "rel": "divinewill",
            "ref": 512
        },
        {
            "name": "Dominus Glare",
            "jpName": "ドゥミヌス・グレア",
            "effect": "T-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+40)",
            "jpEffect": "法撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN03",
            "code": "TN03",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Glare Catalyst (Can be replaced with Ange Glare)",
            "ref": 511
        },
        {
            "name": "Doom Break I",
            "jpName": "ドゥームブレイクⅠ",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>PP(+2)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>PP(+2)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TH01",
            "code": "TH01",
            "gid": "AD",
            "lvup": "TH02",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "FA03"
            ],
            "rel": "doom",
            "ref": 358
        },
        {
            "name": "Doom Break II",
            "jpName": "ドゥームブレイクⅡ",
            "effect": "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>PP(+3)",
            "jpEffect": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TH02",
            "code": "TH02",
            "gid": "AD",
            "lvup": "TH03",
            "extend": [
                0,
                50,
                80
            ],
            "generate": [
                0,
                10,
                30,
                50
            ],
            "extup": [
                "FA03"
            ],
            "rel": "doom2",
            "tooltip": "Made from: 3-5x Doom Break I",
            "ref": 359
        },
        {
            "name": "Doom Break III",
            "jpName": "ドゥームブレイクⅢ",
            "effect": "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>PP(+4)",
            "jpEffect": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)<br>PP(+4)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TH03",
            "code": "TH03",
            "gid": "AD",
            "extend": [
                0,
                50,
                80
            ],
            "generate": [
                0,
                10,
                30,
                50
            ],
            "extup": [
                "FA03"
            ],
            "rel": "doom2",
            "tooltip": "Made from: 3-5x Doom Break 3",
            "ref": 620
        },
        {
            "name": "Double Reverie",
            "jpName": "ダブル・レヴリー",
            "effect": "S-ATK(-20),<br>R-ATK(-20),<br>T-ATK(-20),<br>HP(+50),<br>PP(+5)",
            "jpEffect": "打撃力(-20)<br>射撃力(-20)<br>法撃力(-20)<br>HP(+50)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TK05",
            "code": "TK05",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Reverie Catalyst",
            "ref": 347
        },
        {
            "name": "Double Soul",
            "jpName": "ダブル・ソール",
            "effect": "HP(+40),<br>PP(+3)",
            "jpEffect": "HP(+40)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RQ01",
            "code": "RQ01",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "JA",
                "JB",
                "JC",
                "JD",
                "JE",
                "JF",
                "TC"
            ],
            "rel": "soul",
            "tooltip": "Used for: Soul Catalyst",
            "ref": 322
        },
        {
            "name": "Drago Fever",
            "jpName": "ドラグ・フィーバー",
            "effect": "DEX(+5),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "技量(+5)<br>射撃防御(+10)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0G",
            "code": "TD0G",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 665
        },
        {
            "name": "Duvals Soul",
            "jpName": "ドゥバルス・ソール",
            "effect": "T-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "法撃力(+35)<br>技量(+5)<br>HP(+20)<br>PP(+1)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC32",
            "code": "RC32",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 289
        },
        {
            "name": "Egg Fever",
            "jpName": "エグ・フィーバー",
            "effect": "R-ATK(+10),<br>DEX(+5),<br>HP(+10)",
            "jpEffect": "射撃力(+10)<br>技量(+5)<br>HP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD02",
            "code": "TD02",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 392
        },
        {
            "name": "Elder Reverie",
            "jpName": "エルダー・レヴリー",
            "effect": "S-ATK(+40),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(-2)",
            "jpEffect": "打撃力(+40)<br>射撃力(+20)<br>法撃力(+20)<br>PP(-2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TK02",
            "code": "TK02",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Reverie Catalyst",
            "ref": 344
        },
        {
            "name": "Elder Soul",
            "jpName": "エルダー・ソール",
            "effect": "T-ATK(+30),<br>PP(+3)",
            "jpEffect": "法撃力(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC23",
            "code": "RC23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EB"
            ],
            "rel": "soul",
            "tooltip": "Used for: Soul Catalyst",
            "ref": 287
        },
        {
            "name": "Elegant Power",
            "jpName": "エレガント・パワー",
            "effect": "S-ATK(+40),PP(+4)",
            "jpEffect": "打撃力(+40)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 474,
            "code": "XI11"
        },
        {
            "name": "Elegant Shoot",
            "jpName": "エレガント・シュート",
            "effect": "R-ATK(+40),PP(+4)",
            "jpEffect": "射撃力(+40)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 477,
            "code": "XI12"
        },
        {
            "name": "Elegant Stamina",
            "jpName": "エレガント・スタミナ",
            "effect": "HP(+70),PP(+4)",
            "jpEffect": "HP(+70)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 471,
            "code": "XI14"
        },
        {
            "name": "Elegant Technique",
            "jpName": "エレガント・テクニック",
            "effect": "T-ATK(+40),PP(+4)",
            "jpEffect": "法撃力(+40)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 480,
            "code": "XI13"
        },
        {
            "name": "Emper Embrace",
            "jpName": "エンペ・エンブレイス",
            "effect": "Adds 90 EXP to NT weapon grinds.",
            "jpEffect": "新世武器強化時の経験値が増加する+90",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VN01",
            "code": "VK01",
            "gid": "CC",
            "extend": [
                100
            ],
            "ref": 448
        },
        {
            "name": "Escarde Soul",
            "jpName": "エスカード・ソール",
            "effect": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>DEX(+20)",
            "jpEffect": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>技量(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SB03",
            "code": "SB03",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TG04"
            ],
            "rel": "soul",
            "cls": "ef-soul",
            "tooltip": "Used for: ___ The Soul, Ether Soul",
            "ref": 328
        },
        {
            "name": "Ether Factor",
            "jpName": "エーテル・ファクター",
            "effect": "ALL(+30),<br>HP(+10),<br>PP(+6)",
            "jpEffect": "ALL(+30)<br>HP(+10)<br>PP(+6)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "TG31",
            "code": "TG31",
            "gid": "AC",
            "tooltip": "Made from: 4x Factor Catalyst + Ether Soul<br>Used for: Guardian Soul",
            "ref": 342
        },
        {
            "name": "Ether Soul",
            "jpName": "エーテル・ソール",
            "effect": "ALL(+15),<br>HP(+15),<br>PP(+2)",
            "jpEffect": "ALL(+15)<br>HP(+15)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "SA11",
            "code": "SA11",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "tooltip": "Made from: 2 of the following: Escarde Soul, Toh'oh Soul, Full Vegas Soul<br>Used for: Ether Factor",
            "ref": 325
        },
        {
            "name": "EV Power HP",
            "jpName": "EV・パワーHP",
            "effect": "S-ATK(+35),<br>HP(+60)",
            "jpEffect": "打撃力(+35)<br>HP(+60)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP06",
            "code": "LP06",
            "gid": "AB",
            "tooltip": "Made from: Lesser Power V + Lesser Stamina V",
            "ref": 385
        },
        {
            "name": "EV Power PP",
            "jpName": "EV・パワーPP",
            "effect": "S-ATK(+35),<br>PP(+4)",
            "jpEffect": "打撃力(+35)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP07",
            "code": "LP07",
            "gid": "AB",
            "tooltip": "Made from: Lesser Power V + Lesser Spirita V",
            "ref": 386
        },
        {
            "name": "EV Shoot HP",
            "jpName": "EV・シュートHP",
            "effect": "R-ATK(+35),<br>HP(+60)",
            "jpEffect": "射撃力(+35)<br>HP(+60)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS06",
            "code": "LS06",
            "gid": "AB",
            "tooltip": "Made from: Lesser Shoot V + Lesser Stamina V",
            "ref": 387
        },
        {
            "name": "EV Shoot PP",
            "jpName": "EV・シュートPP",
            "effect": "R-ATK(+35),<br>PP(+4)",
            "jpEffect": "射撃力(+35)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS07",
            "code": "LS07",
            "gid": "AB",
            "tooltip": "Made from: Lesser Shoot V + Lesser Spirita V",
            "ref": 388
        },
        {
            "name": "EV Technique HP",
            "jpName": "EV・テクニックHP",
            "effect": "T-ATK(+35),<br>HP(+60)",
            "jpEffect": "法撃力(+35)<br>HP(+60)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT06",
            "code": "LT06",
            "gid": "AB",
            "tooltip": "Made from: Lesser Technique V + Lesser Stamina V",
            "ref": 389
        },
        {
            "name": "EV Technique PP",
            "jpName": "EV・テクニックPP",
            "effect": "T-ATK(+35),<br>PP(+4)",
            "jpEffect": "法撃力(+35)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT07",
            "code": "LT07",
            "gid": "AB",
            "tooltip": "Made from: Lesser Technique V + Lesser Spirita V",
            "ref": 390
        },
        {
            "name": "Ex Act Soul",
            "jpName": "イクスアクト・ソール",
            "effect": "S-ATK(+30),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+2)",
            "jpEffect": "打撃力(+30)<br>HP(+20)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SI01",
            "code": "SI01",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "tooltip": "Used for: Act The Soul",
            "ref": 500
        },
        {
            "name": "Ex Ares Soul",
            "jpName": "イクスアレス・ソール",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+50),<br>PP(+2)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>HP(+50)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SI04",
            "code": "SI04",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "tooltip": "Used for: Ares The Soul",
            "ref": 503
        },
        {
            "name": "Ex Magi Soul",
            "jpName": "イクスマギー・ソール",
            "effect": "T-ATK(+30),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+2)",
            "jpEffect": "法撃力(+30)<br>HP(+20)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SI03",
            "code": "SI03",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "tooltip": "Used for: Magi The Soul",
            "ref": 502
        },
        {
            "name": "Ex Soul",
            "jpName": "エクス・ソール",
            "effect": "S-DEF(+30),<br>PP(+4)",
            "jpEffect": "打撃防御(+30)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RH23",
            "code": "RH23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EB",
                "HA"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 298
        },
        {
            "name": "Ex Till Soul",
            "jpName": "イクスティル・ソール",
            "effect": "R-ATK(+30),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+2)",
            "jpEffect": "射撃力(+30)<br>HP(+20)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SI02",
            "code": "SI02",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "tooltip": "Used for: Till The Soul",
            "ref": 501
        },
        {
            "name": "Exceed Energy",
            "jpName": "イクシード・エナジー",
            "effect": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+20),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+5)",
            "jpEffect": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "IE01",
            "code": "IE01",
            "gid": "AC",
            "ref": 514
        },
        {
            "name": "Exceed Receptor",
            "jpName": "イクシードレセプター",
            "effect": "Greatly increases affix rate of Exceed-type ability.<br>ALL(+10)",
            "jpEffect": "イクシード系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XK01",
            "code": "XK01",
            "gid": "GB",
            "ref": 660
        },
        {
            "name": "Execour Glare",
            "jpName": "エクゼクル・グレア",
            "effect": "S-ATK(+20)<br>R-ATK(+20)<br>T-ATK(+20)<br>S-DEF(+50)<br>R-DEF(+50)<br>T-DEF(+50)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>打撃防御(+50)<br>射撃防御(+50)<br>法撃防御(+50)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN05",
            "code": "TN05",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Glare Catalyst",
            "ref": 637
        },
        {
            "name": "EXP Boost I",
            "jpName": "EXPブーストⅠ",
            "effect": "Experience Gain +5%",
            "jpEffect": "取得する経験値が増加+5%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VC01",
            "code": "VC01",
            "gid": "CC",
            "lvup": "VC02",
            "extend": [
                0,
                75,
                100
            ],
            "require": "XC01",
            "ref": 435
        },
        {
            "name": "EXP Boost II",
            "jpName": "EXPブーストⅡ",
            "effect": "Experience Gain +7%",
            "jpEffect": "取得する経験値が増加+7%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VC02",
            "code": "VC02",
            "gid": "CC",
            "lvup": "VC03",
            "extend": [
                0,
                50,
                75
            ],
            "generate": [
                0,
                60
            ],
            "require": "XC01",
            "ref": 436
        },
        {
            "name": "EXP Boost III",
            "jpName": "EXPブーストⅢ",
            "effect": "Experience Gain +10%",
            "jpEffect": "取得する経験値が増加+10%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VC03",
            "code": "VC03",
            "gid": "CC",
            "extend": [
                0,
                30,
                50
            ],
            "generate": [
                0,
                40
            ],
            "require": "XC01",
            "ref": 437
        },
        {
            "name": "Extreceptor",
            "jpName": "エクストレセプター",
            "effect": "Greatly increases Flict, Alter affix rate<br>ALL(+10)",
            "jpEffect": "アルター・フリクト系と特定の特殊能力継承率を大幅に上昇\nALL(+10)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XB01",
            "code": "XB01",
            "gid": "GB",
            "extup": [
                "AA",
                "AB",
                "AC",
                "BA",
                "BB",
                "BC",
                "EA",
                "EB"
            ],
            "rel": "extreme",
            "ref": 453
        },
        {
            "name": "Fabula Soul",
            "jpName": "ファーブラ・ソール",
            "effect": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
            "jpEffect": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>HP(+20)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SB04",
            "code": "SB04",
            "gid": "EA",
            "extend": [
                0,
                60,
                90
            ],
            "extup": [
                "TK0"
            ],
            "rel": "soul",
            "cls": "ef-soul",
            "tooltip": "Used for: ___ The Soul, Omega Memoria",
            "ref": 329
        },
        {
            "name": "Factor Catalyst",
            "jpName": "ファクター・カタリスト",
            "effect": "HP(+10),<br>PP(+1)",
            "jpEffect": "HP(+10)<br>PP(+1)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "VJ02",
            "code": "VJ02",
            "gid": "CA",
            "extend": [
                0,
                10,
                30
            ],
            "tooltip": "Made from: Deus Factor, Mother Factor, Yamato Factor<br>Used for: Ether Factor",
            "ref": 444
        },
        {
            "name": "Factor Receptor",
            "jpName": "ファクターレセプター",
            "effect": "Boosts Factor-type ability transfer rates.<br>ALL(+10)",
            "jpEffect": "ファクター系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XF01",
            "code": "XF01",
            "gid": "GB",
            "ref": 457
        },
        {
            "name": "Fang Soul",
            "jpName": "ファング・ソール",
            "effect": "R-ATK(+30),<br>HP(+10),<br>PP(+2)",
            "jpEffect": "射撃力(+30)<br>HP(+10)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB22",
            "code": "RB22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "JC"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 278
        },
        {
            "name": "Fire Resist I",
            "jpName": "フレイムレジストⅠ",
            "effect": "Flame Resist(+3)",
            "jpEffect": "炎耐性(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HI01",
            "code": "HI01",
            "gid": "DA",
            "lvup": "HI02",
            "extend": [
                100
            ],
            "status": 2,
            "ref": 68
        },
        {
            "name": "Fire Resist II",
            "jpName": "フレイムレジストⅡ",
            "effect": "Flame Resist(+4)",
            "jpEffect": "炎耐性(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HI02",
            "code": "HI02",
            "gid": "DA",
            "lvup": "HI03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 2,
            "ref": 69
        },
        {
            "name": "Fire Resist III",
            "jpName": "フレイムレジストⅢ",
            "effect": "Flame Resist(+5)",
            "jpEffect": "炎耐性(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HI03",
            "code": "HI03",
            "gid": "DA",
            "lvup": "HI04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 2,
            "ref": 70
        },
        {
            "name": "Fire Resist IV",
            "jpName": "フレイムレジストⅣ",
            "effect": "Flame Resist(+6)",
            "jpEffect": "炎耐性(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HI04",
            "code": "HI04",
            "gid": "DA",
            "lvup": "HI05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 2,
            "ref": 71
        },
        {
            "name": "Fire Resist V",
            "jpName": "フレイムレジストⅤ",
            "effect": "Flame Resist(+7)",
            "jpEffect": "炎耐性(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HI05",
            "code": "HI05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 2,
            "ref": 72
        },
        {
            "name": "Flict Arma",
            "jpName": "フリクト・アルマ",
            "effect": "S-ATK(+20),<br>PP(+3)",
            "jpEffect": "打撃力(+20)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UA01",
            "code": "UA01",
            "gid": "AC",
            "extend": [
                0,
                0,
                80
            ],
            "ref": 406
        },
        {
            "name": "Flict Magia",
            "jpName": "フリクト・マギア",
            "effect": "T-ATK(+20),<br>PP(+3)",
            "jpEffect": "法撃力(+20)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UA21",
            "code": "UA21",
            "gid": "AC",
            "extend": [
                0,
                0,
                80
            ],
            "ref": 408
        },
        {
            "name": "Flict Tiro",
            "jpName": "フリクト・ティロ",
            "effect": "R-ATK(+20),<br>PP(+3)",
            "jpEffect": "射撃力(+20)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UA11",
            "code": "UA11",
            "gid": "AC",
            "extend": [
                0,
                0,
                80
            ],
            "ref": 407
        },
        {
            "name": "Fordruss Glare",
            "jpName": "フォードルス・グレア",
            "effect": "S-DEF(+35)<br>R-DEF(+35)<br>T-DEF(+35)<br>HP(+40)<br>PP(+4)",
            "jpEffect": "打撃防御(+35)<br>射撃防御(+35)<br>法撃防御(+35)<br>HP(+40)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN04",
            "code": "TN04",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Glare Catalyst",
            "ref": 595
        },
        {
            "name": "Freeze I",
            "jpName": "フリーズⅠ",
            "effect": "Grants Freeze Lv1",
            "jpEffect": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv1を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JB01",
            "code": "JB01",
            "gid": "DB",
            "lvup": "JB02",
            "extend": [
                60,
                80,
                100
            ],
            "status": 3,
            "ref": 108
        },
        {
            "name": "Freeze II",
            "jpName": "フリーズⅡ",
            "effect": "Grants Freeze Lv2",
            "jpEffect": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv2を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JB02",
            "code": "JB02",
            "gid": "DB",
            "lvup": "JB03",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                60,
                80
            ],
            "status": 3,
            "ref": 109
        },
        {
            "name": "Freeze III",
            "jpName": "フリーズⅢ",
            "effect": "Grants Freeze Lv3",
            "jpEffect": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv3を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JB03",
            "code": "JB03",
            "gid": "DB",
            "lvup": "JB04",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 110
        },
        {
            "name": "Freeze IV",
            "jpName": "フリーズⅣ",
            "effect": "Grants Freeze Lv4",
            "jpEffect": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv4を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JB04",
            "code": "JB04",
            "gid": "DB",
            "lvup": "JB05",
            "extend": [
                20,
                30,
                50
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 111
        },
        {
            "name": "Freeze V",
            "jpName": "フリーズⅤ",
            "effect": "Grants Freeze Lv5",
            "jpEffect": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv5を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JB05",
            "code": "JB05",
            "gid": "DB",
            "extend": [
                10,
                20,
                40
            ],
            "generate": [
                10,
                30
            ],
            "status": 3,
            "ref": 112
        },
        {
            "name": "Fresh Sign",
            "jpName": "フレッシュ・サイン",
            "effect": "Boost EXP by 30% until Lv.30",
            "jpEffect": "Lv30に到達するまで取得する経験値が増加する+30%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VF01",
            "code": "VF01",
            "gid": "CC",
            "ref": 440
        },
        {
            "name": "Frog Fever",
            "jpName": "フログ・フィーバー",
            "effect": "T-ATK(+10),<br>DEX(+5),<br>HP(+10)",
            "jpEffect": "法撃力(+10)<br>技量(+5)<br>HP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD03",
            "code": "TD03",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 393
        },
        {
            "name": "Full Vegas Soul",
            "jpName": "フルベガス・ソール",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SB02",
            "code": "SB02",
            "gid": "EA",
            "extend": [
                0,
                60,
                90
            ],
            "extup": [
                "TG03"
            ],
            "rel": "soul",
            "cls": "ef-soul",
            "tooltip": "Used for: ___ The Soul, Ether Soul",
            "ref": 327
        },
        {
            "name": "Gift Receptor",
            "jpName": "ギフトレセプター",
            "effect": "Allows transfer of Gift affixes",
            "jpEffect": "ギフト系特殊能力の引き継ぎが可能になる\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XC01",
            "code": "XC01",
            "gid": "GB",
            "ref": 454
        },
        {
            "name": "Glare Catalyst",
            "jpName": "グレア・カタリスト",
            "effect": "HP(+10),<br>PP(+1)",
            "jpEffect": "HP(+10)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VJ04",
            "code": "VJ04",
            "gid": "CA",
            "tooltip": "Made from: Veluge Glare, Fordruss Glare, Execour Glare and (Ange Glare or Dominus Glare)<br>Used for: Absolute Glare",
            "ref": 656
        },
        {
            "name": "Gloom Resist I",
            "jpName": "グルームレジストⅠ",
            "effect": "Dark Resist(+3)",
            "jpEffect": "闇耐性(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HN01",
            "code": "HN01",
            "gid": "DA",
            "lvup": "HN02",
            "extend": [
                100
            ],
            "status": 2,
            "ref": 93
        },
        {
            "name": "Gloom Resist II",
            "jpName": "グルームレジストⅡ",
            "effect": "Dark Resist(+4)",
            "jpEffect": "闇耐性(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HN02",
            "code": "HN02",
            "gid": "DA",
            "lvup": "HN03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 2,
            "ref": 94
        },
        {
            "name": "Gloom Resist III",
            "jpName": "グルームレジストⅢ",
            "effect": "Dark Resist(+5)",
            "jpEffect": "闇耐性(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HN03",
            "code": "HN03",
            "gid": "DA",
            "lvup": "HN04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 2,
            "ref": 95
        },
        {
            "name": "Gloom Resist IV",
            "jpName": "グルームレジストⅣ",
            "effect": "Dark Resist(+6)",
            "jpEffect": "闇耐性(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HN04",
            "code": "HN04",
            "gid": "DA",
            "lvup": "HN05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 2,
            "ref": 96
        },
        {
            "name": "Gloom Resist V",
            "jpName": "グルームレジストⅤ",
            "effect": "Dark Resist(+7)",
            "jpEffect": "闇耐性(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HN05",
            "code": "HN05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 2,
            "ref": 97
        },
        {
            "name": "Goron Soul",
            "jpName": "ゴロン・ソール",
            "effect": "T-DEF(+30),<br>PP(+4)",
            "jpEffect": "法撃防御(+30)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RJ23",
            "code": "RJ23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EB",
                "HB",
                "HC"
            ],
            "rel": "soul",
            "ref": 304
        },
        {
            "name": "Grace Power",
            "jpName": "グレース・パワー",
            "effect": "S-ATK(+50),PP(+5)",
            "jpEffect": "打撃力(+50)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 475,
            "code": "XI52"
        },
        {
            "name": "Grace Shoot",
            "jpName": "グレース・シュート",
            "effect": "R-ATK(+50),PP(+5)",
            "jpEffect": "射撃力(+50)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 478,
            "code": "XI53"
        },
        {
            "name": "Grace Stamina",
            "jpName": "グレース・スタミナ",
            "effect": "HP(+80),PP(+5)",
            "jpEffect": "HP(+80)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 472,
            "code": "XI51"
        },
        {
            "name": "Grace Technique",
            "jpName": "グレース・テクニック",
            "effect": "T-ATK(+50),PP(+5)",
            "jpEffect": "法撃力(+50)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 481,
            "code": "XI54"
        },
        {
            "name": "Grand Power",
            "jpName": "グランド・パワー",
            "effect": "S-ATK(+60),HP(+20),PP(+5)",
            "jpEffect": "打撃力(+60)<br>HP(+20)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 532,
            "code": "XI62"
        },
        {
            "name": "Grand Shoot",
            "jpName": "グランド・シュート",
            "effect": "R-ATK(+60),HP(+20),PP(+5)",
            "jpEffect": "射撃力(+60)<br>HP(+20)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 533,
            "code": "XI63"
        },
        {
            "name": "Grand Spirita",
            "jpName": "グランド・スピリタ",
            "effect": "PP(+15)",
            "jpEffect": "PP(+15)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 531,
            "code": "XI60"
        },
        {
            "name": "Grand Stamina",
            "jpName": "グランド・スタミナ",
            "effect": "HP(+100),PP(+6)",
            "jpEffect": "HP(+100)<br>PP(+6)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 530,
            "code": "XI61"
        },
        {
            "name": "Grand Technique",
            "jpName": "グランド・テクニック",
            "effect": "T-ATK(+60),HP(+20),PP(+5)",
            "jpEffect": "法撃力(+60)<br>HP(+20)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 534,
            "code": "XI64"
        },
        {
            "name": "Greuzoras Soul",
            "jpName": "グリュゾラス・ソール",
            "effect": "R-ATK(+35),<br>DEX(+5),<br>PP(+3)",
            "jpEffect": "射撃力(+35)<br>技量(+5)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB33",
            "code": "RB33",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 282
        },
        {
            "name": "GRM Boost",
            "jpName": "GRM・ブースト",
            "effect": "R-ATK(+35)",
            "jpEffect": "射撃力(+35)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 468,
            "code": "XI0b"
        },
        {
            "name": "Gryphon Soul",
            "jpName": "グリフォン・ソール",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+15)<br>HP(+5)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RP10",
            "code": "RP10",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "AB",
                "AC",
                "HZ"
            ],
            "rel": "soul",
            "ref": 316
        },
        {
            "name": "Guard Boost",
            "jpName": "ガード・ブースト",
            "effect": "S-DEF(+35),R-DEF(+35),T-DEF(+35),HP(+75),PP(+3)",
            "jpEffect": "打撃防御(+35)<br>射撃防御(+35)<br>法撃防御(+35)<br>HP(+75)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 536,
            "code": "XI23"
        },
        {
            "name": "Guard Receptor",
            "jpName": "ガードレセプター",
            "effect": "Greatly increases affix rate of <br>Mind, Body, React<br>ALL(+5)",
            "jpEffect": "特殊能力ボディ、リアクト、マインドの継承成功率を大幅に上昇\nALL(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XI31",
            "code": "XI31",
            "gid": "GB",
            "ref": 460
        },
        {
            "name": "Guardian Soul",
            "jpName": "ガーディアン・ソール",
            "effect": "ALL(+70),<br>HP(+70),<br>PP(+7)",
            "jpEffect": "ALL(+70)<br>HP(+70)<br>PP(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SA02",
            "code": "SA02",
            "gid": "EA",
            "tooltip": "Made from: Astral Soul, Ether Factor, Mana Reverie, Absolute Glare",
            "ref": 651
        },
        {
            "name": "Guidance Trainer",
            "jpName": "錬成の導き",
            "effect": "Boosts Special Ability<br>transfer success rate onto this item<br>by 5%.",
            "jpEffect": "この装備品への特殊能力追加成功率が上昇する+5%",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VO01",
            "code": "VO01",
            "gid": "CC",
            "extend": [
                0,
                50,
                80
            ],
            "ref": 449
        },
        {
            "name": "Gunne Soul",
            "jpName": "グンネ・ソール",
            "effect": "S-ATK(+15),<br>HP(+45)",
            "jpEffect": "打撃力(+15)<br>HP(+45)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA11",
            "code": "RA11",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EA"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 267
        },
        {
            "name": "Guranz Soul",
            "jpName": "グランゾ・ソール",
            "effect": "T-ATK(+35),<br>DEX(+5),<br>PP(+3)",
            "jpEffect": "法撃力(+35)<br>技量(+5)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC33",
            "code": "RC33",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 290
        },
        {
            "name": "Gwana Soul",
            "jpName": "グワナ・ソール",
            "effect": "S-ATK(+30),<br>HP(+10),<br>PP(+2)",
            "jpEffect": "打撃力(+30)<br>HP(+10)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA22",
            "code": "RA22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "JF"
            ],
            "rel": "soul",
            "ref": 270
        },
        {
            "name": "Historia Soul",
            "jpName": "イストリア・ソール",
            "effect": "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>HP(+30),<br>PP(+2)",
            "jpEffect": "打撃防御(+25)<br>射撃防御(+25)<br>法撃防御(+25)<br>HP(+30)<br>PP(+2)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SB05",
            "code": "SB05",
            "gid": "EA",
            "extend": [
                0,
                60,
                90
            ],
            "extup": [
                "TK0"
            ],
            "rel": "soul",
            "cls": "ef-soul",
            "tooltip": "Used for: ___ The Soul, Omega Memoria",
            "ref": 330
        },
        {
            "name": "Ice Resist I",
            "jpName": "アイスレジストⅠ",
            "effect": "Ice Resist(+3)",
            "jpEffect": "氷耐性(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HJ01",
            "code": "HJ01",
            "gid": "DA",
            "lvup": "HJ02",
            "extend": [
                100
            ],
            "status": 2,
            "ref": 73
        },
        {
            "name": "Ice Resist II",
            "jpName": "アイスレジストⅡ",
            "effect": "Ice Resist(+4)",
            "jpEffect": "氷耐性(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HJ02",
            "code": "HJ02",
            "gid": "DA",
            "lvup": "HJ03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 2,
            "ref": 74
        },
        {
            "name": "Ice Resist III",
            "jpName": "アイスレジストⅢ",
            "effect": "Ice Resist(+5)",
            "jpEffect": "氷耐性(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HJ03",
            "code": "HJ03",
            "gid": "DA",
            "lvup": "HJ04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 2,
            "ref": 75
        },
        {
            "name": "Ice Resist IV",
            "jpName": "アイスレジストⅣ",
            "effect": "Ice Resist(+6)",
            "jpEffect": "氷耐性(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HJ04",
            "code": "HJ04",
            "gid": "DA",
            "lvup": "HJ05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 2,
            "ref": 76
        },
        {
            "name": "Ice Resist V",
            "jpName": "アイスレジストⅤ",
            "effect": "Ice Resist(+7)",
            "jpEffect": "氷耐性(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HJ05",
            "code": "HJ05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 2,
            "ref": 77
        },
        {
            "name": "Idetta Soul",
            "jpName": "イーデッタ・ソール",
            "effect": "R-ATK(+15),<br>HP(+45)",
            "jpEffect": "射撃力(+15)<br>HP(+45)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB11",
            "code": "RB11",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "EA",
                "HA",
                "JB"
            ],
            "rel": "soul",
            "ref": 275
        },
        {
            "name": "Izane Kazuchi Soul",
            "jpName": "イザネカヅチ・ソール",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RP22",
            "code": "RP22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "rel": "soul",
            "ref": 318
        },
        {
            "name": "Jhadu Soul",
            "jpName": "ジャドゥ・ソール",
            "effect": "T-ATK(+15),<br>HP(+45)",
            "jpEffect": "法撃力(+15)<br>HP(+45)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC11",
            "code": "RC11",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EA"
            ],
            "rel": "soul",
            "ref": 283
        },
        {
            "ref": 484,
            "code": "ZA01",
            "gid": "ZZ",
            "name": "Junk A",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZA01",
            "internalUse": true,
            "jpName": "ジャンクA",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 485,
            "code": "ZB01",
            "gid": "ZZ",
            "name": "Junk B",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZB01",
            "internalUse": true,
            "jpName": "ジャンクB",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 486,
            "code": "ZC01",
            "gid": "ZZ",
            "name": "Junk C",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZC01",
            "internalUse": true,
            "jpName": "ジャンクC",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 487,
            "code": "ZD01",
            "gid": "ZZ",
            "name": "Junk D",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZD01",
            "internalUse": true,
            "jpName": "ジャンクD",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 488,
            "code": "ZE01",
            "gid": "ZZ",
            "name": "Junk E",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZE01",
            "internalUse": true,
            "jpName": "ジャンクE",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 489,
            "code": "ZF01",
            "gid": "ZZ",
            "name": "Junk F",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZF01",
            "internalUse": true,
            "jpName": "ジャンクF",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 490,
            "code": "ZG01",
            "gid": "ZZ",
            "name": "Junk G",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZG01",
            "internalUse": true,
            "jpName": "ジャンクG",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 491,
            "code": "ZH01",
            "gid": "ZZ",
            "name": "Junk H",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZH01",
            "internalUse": true,
            "jpName": "ジャンクH",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "ref": 492,
            "code": "ZI01",
            "gid": "ZZ",
            "name": "Junk I",
            "extend": [
                100
            ],
            "effect": "100% affix junk",
            "simCode": "ZI01",
            "internalUse": true,
            "jpName": "ジャンクI",
            "jpEffect": "100％合成成功率のジャンク。"
        },
        {
            "name": "Knight Gear Soul",
            "jpName": "ナイトギア・ソール",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>PP(+4)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+15)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RP15",
            "code": "RP15",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD"
            ],
            "rel": "soul",
            "ref": 317
        },
        {
            "name": "Latan Fever",
            "jpName": "ラタン・フィーバー",
            "effect": "T-ATK(+10),<br>DEX(+5),<br>PP(+2)",
            "jpEffect": "法撃力(+10)<br>技量(+5)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD06",
            "code": "TD06",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 396
        },
        {
            "name": "Leone Soul",
            "jpName": "レオーネ・ソール",
            "effect": "S-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "打撃力(+35)<br>技量(+5)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA32",
            "code": "RA32",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 273
        },
        {
            "name": "Leopard Soul",
            "jpName": "レオパード・ソール",
            "effect": "R-ATK(+35),<br>DEX(+5),<br>HP(+30)",
            "jpEffect": "射撃力(+35)<br>技量(+5)<br>HP(+30)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB31",
            "code": "RB31",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 280
        },
        {
            "name": "Lesser Power I",
            "jpName": "レッサーパワーⅠ",
            "effect": "S-ATK(+5)",
            "jpEffect": "打撃力(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP01",
            "code": "LP01",
            "gid": "AB",
            "lvup": "LP02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 360
        },
        {
            "name": "Lesser Power II",
            "jpName": "レッサーパワーⅡ",
            "effect": "S-ATK(+15)",
            "jpEffect": "打撃力(+15)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP02",
            "code": "LP02",
            "gid": "AB",
            "lvup": "LP03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70,
                70
            ],
            "status": 4,
            "ref": 361
        },
        {
            "name": "Lesser Power III",
            "jpName": "レッサーパワーⅢ",
            "effect": "S-ATK(+25)",
            "jpEffect": "打撃力(+25)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP03",
            "code": "LP03",
            "gid": "AB",
            "lvup": "LP04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50,
                50
            ],
            "status": 4,
            "ref": 362
        },
        {
            "name": "Lesser Power IV",
            "jpName": "レッサーパワーⅣ",
            "effect": "S-ATK(+30)",
            "jpEffect": "打撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP04",
            "code": "LP04",
            "gid": "AB",
            "lvup": "LP05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 363
        },
        {
            "name": "Lesser Power V",
            "jpName": "レッサーパワーⅤ",
            "effect": "S-ATK(+35)",
            "jpEffect": "打撃力(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LP05",
            "code": "LP05",
            "gid": "AB",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 364
        },
        {
            "name": "Lesser Shoot I",
            "jpName": "レッサーシュートⅠ",
            "effect": "R-ATK(+5)",
            "jpEffect": "射撃力(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS01",
            "code": "LS01",
            "gid": "AB",
            "lvup": "LS02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 365
        },
        {
            "name": "Lesser Shoot II",
            "jpName": "レッサーシュートⅡ",
            "effect": "R-ATK(+15)",
            "jpEffect": "射撃力(+15)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS02",
            "code": "LS02",
            "gid": "AB",
            "lvup": "LS03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70
            ],
            "status": 4,
            "ref": 366
        },
        {
            "name": "Lesser Shoot III",
            "jpName": "レッサーシュートⅢ",
            "effect": "R-ATK(+25)",
            "jpEffect": "射撃力(+25)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS03",
            "code": "LS03",
            "gid": "AB",
            "lvup": "LS04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50
            ],
            "status": 4,
            "ref": 367
        },
        {
            "name": "Lesser Shoot IV",
            "jpName": "レッサーシュートⅣ",
            "effect": "R-ATK(+30)",
            "jpEffect": "射撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS04",
            "code": "LS04",
            "gid": "AB",
            "lvup": "LS05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 368
        },
        {
            "name": "Lesser Shoot V",
            "jpName": "レッサーシュートⅤ",
            "effect": "R-ATK(+35)",
            "jpEffect": "射撃力(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LS05",
            "code": "LS05",
            "gid": "AB",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 369
        },
        {
            "name": "Lesser Spirita I",
            "jpName": "レッサースピリタⅠ",
            "effect": "PP(+1)",
            "jpEffect": "PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LR01",
            "code": "LR01",
            "gid": "AB",
            "lvup": "LR02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 380
        },
        {
            "name": "Lesser Spirita II",
            "jpName": "レッサースピリタⅡ",
            "effect": "PP(+2)",
            "jpEffect": "PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LR02",
            "code": "LR02",
            "gid": "AB",
            "lvup": "LR03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70
            ],
            "status": 4,
            "ref": 381
        },
        {
            "name": "Lesser Spirita III",
            "jpName": "レッサースピリタⅢ",
            "effect": "PP(+3)",
            "jpEffect": "PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LR03",
            "code": "LR03",
            "gid": "AB",
            "lvup": "LR04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50
            ],
            "status": 4,
            "ref": 382
        },
        {
            "name": "Lesser Spirita IV",
            "jpName": "レッサースピリタⅣ",
            "effect": "PP(+4)",
            "jpEffect": "PP(+4)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LR04",
            "code": "LR04",
            "gid": "AB",
            "lvup": "LR05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 383
        },
        {
            "name": "Lesser Spirita V",
            "jpName": "レッサースピリタⅤ",
            "effect": "PP(+5)",
            "jpEffect": "PP(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LR05",
            "code": "LR05",
            "gid": "AB",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 384
        },
        {
            "name": "Lesser Stamina I",
            "jpName": "レッサースタミナⅠ",
            "effect": "HP(+15)",
            "jpEffect": "HP(+15)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LM01",
            "code": "LM01",
            "gid": "AB",
            "lvup": "LM02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 375
        },
        {
            "name": "Lesser Stamina II",
            "jpName": "レッサースタミナⅡ",
            "effect": "HP(+35)",
            "jpEffect": "HP(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LM02",
            "code": "LM02",
            "gid": "AB",
            "lvup": "LM03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70
            ],
            "status": 4,
            "ref": 376
        },
        {
            "name": "Lesser Stamina III",
            "jpName": "レッサースタミナⅢ",
            "effect": "HP(+45)",
            "jpEffect": "HP(+45)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LM03",
            "code": "LM03",
            "gid": "AB",
            "lvup": "LM04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50
            ],
            "status": 4,
            "ref": 377
        },
        {
            "name": "Lesser Stamina IV",
            "jpName": "レッサースタミナⅣ",
            "effect": "HP(+55)",
            "jpEffect": "HP(+55)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LM04",
            "code": "LM04",
            "gid": "AB",
            "lvup": "LM05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 378
        },
        {
            "name": "Lesser Stamina V",
            "jpName": "レッサースタミナⅤ",
            "effect": "HP(+65)",
            "jpEffect": "HP(+65)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LM05",
            "code": "LM05",
            "gid": "AB",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 379
        },
        {
            "name": "Lesser Technique I",
            "jpName": "レッサーテクニックⅠ",
            "effect": "T-ATK(+5)",
            "jpEffect": "法撃力(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT01",
            "code": "LT01",
            "gid": "AB",
            "lvup": "LT02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 370
        },
        {
            "name": "Lesser Technique II",
            "jpName": "レッサーテクニックⅡ",
            "effect": "T-ATK(+15)",
            "jpEffect": "法撃力(+15)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT02",
            "code": "LT02",
            "gid": "AB",
            "lvup": "LT03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70
            ],
            "status": 4,
            "ref": 371
        },
        {
            "name": "Lesser Technique III",
            "jpName": "レッサーテクニックⅢ",
            "effect": "T-ATK(+25)",
            "jpEffect": "法撃力(+25)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT03",
            "code": "LT03",
            "gid": "AB",
            "lvup": "LT04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50
            ],
            "status": 4,
            "ref": 372
        },
        {
            "name": "Lesser Technique IV",
            "jpName": "レッサーテクニックⅣ",
            "effect": "T-ATK(+30)",
            "jpEffect": "法撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT04",
            "code": "LT04",
            "gid": "AB",
            "lvup": "LT05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 373
        },
        {
            "name": "Lesser Technique V",
            "jpName": "レッサーテクニックⅤ",
            "effect": "T-ATK(+35)",
            "jpEffect": "法撃力(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "LT05",
            "code": "LT05",
            "gid": "AB",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 374
        },
        {
            "name": "Ligand Arma",
            "jpName": "リガンド・アルマ",
            "effect": "S-ATK(+40),<br>HP(+30),<br>PP(+3)",
            "jpEffect": "打撃力(+40)<br>HP(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UD01",
            "code": "UD01",
            "gid": "AC",
            "ref": 661
        },
        {
            "name": "Ligand Magia",
            "jpName": "リガンド・マギア",
            "effect": "T-ATK(+40),<br>HP(+30),<br>PP(+3)",
            "jpEffect": "法撃力(+40)<br>HP(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UD21",
            "code": "UD21",
            "gid": "AC",
            "ref": 663
        },
        {
            "name": "Ligand Tiro",
            "jpName": "リガンド・ティロ",
            "effect": "R-ATK(+40),<br>HP(+30),<br>PP(+3)",
            "jpEffect": "射撃力(+40)<br>HP(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "UD11",
            "code": "UD11",
            "gid": "AC",
            "ref": 662
        },
        {
            "name": "Light Resist I",
            "jpName": "ライトレジストⅠ",
            "effect": "Light Resist(+3)",
            "jpEffect": "光耐性(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HM01",
            "code": "HM01",
            "gid": "DA",
            "lvup": "HM02",
            "extend": [
                100
            ],
            "status": 2,
            "ref": 88
        },
        {
            "name": "Light Resist II",
            "jpName": "ライトレジストⅡ",
            "effect": "Light Resist(+4)",
            "jpEffect": "光耐性(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HM02",
            "code": "HM02",
            "gid": "DA",
            "lvup": "HM03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 2,
            "ref": 89
        },
        {
            "name": "Light Resist III",
            "jpName": "ライトレジストⅢ",
            "effect": "Light Resist(+5)",
            "jpEffect": "光耐性(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HM03",
            "code": "HM03",
            "gid": "DA",
            "lvup": "HM04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 2,
            "ref": 90
        },
        {
            "name": "Light Resist IV",
            "jpName": "ライトレジストⅣ",
            "effect": "Light Resist(+6)",
            "jpEffect": "光耐性(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HM04",
            "code": "HM04",
            "gid": "DA",
            "lvup": "HM05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 2,
            "ref": 91
        },
        {
            "name": "Light Resist V",
            "jpName": "ライトレジストⅤ",
            "effect": "Light Resist(+7)",
            "jpEffect": "光耐性(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HM05",
            "code": "HM05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 2,
            "ref": 92
        },
        {
            "name": "Lilli Soul",
            "jpName": "リーリー・ソール",
            "effect": "S-ATK(+20),<br>S-DEF(+20),<br>HP(+20)",
            "jpEffect": "打撃力(+20)<br>打撃防御(+20)<br>HP(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROG5",
            "code": "ROG5",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EA",
                "HK"
            ],
            "rel": "soul",
            "ref": 314
        },
        {
            "name": "Loser Reverie",
            "jpName": "ルーサー・レヴリー",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+40),<br>HP(-20)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+40)<br>HP(-20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TK03",
            "code": "TK03",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Reverie Catalyst",
            "ref": 345
        },
        {
            "name": "Loser Soul",
            "jpName": "ルーサー・ソール",
            "effect": "S-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃力(+20)<br>法撃力(+20)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROC2",
            "code": "ROC2",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC"
            ],
            "rel": "soul",
            "tooltip": "Used for: Soul Catalyst",
            "ref": 309
        },
        {
            "name": "Love Fever",
            "jpName": "ラブ・フィーバー",
            "effect": "S-ATK(+10),<br>DEX(+5),<br>PP(+2)",
            "jpEffect": "打撃力(+10)<br>技量(+5)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD04",
            "code": "TD04",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 394
        },
        {
            "name": "Lovey Fever",
            "jpName": "ラヴィ・フィーバー",
            "effect": "S-ATK(+10),<br>DEX(+5),<br>HP(+10)",
            "jpEffect": "打撃力(+10)<br>技量(+5)<br>HP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD01",
            "code": "TD01",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 391
        },
        {
            "name": "Lucky Rise I",
            "jpName": "ラッキーライズⅠ",
            "effect": "Item Drop Rate +5%",
            "jpEffect": "レアドロップ倍率が増加+5%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VA01",
            "code": "VA01",
            "gid": "CC",
            "lvup": "VA02",
            "extend": [
                0,
                75,
                100
            ],
            "require": "XC01",
            "ref": 429
        },
        {
            "name": "Lucky Rise II",
            "jpName": "ラッキーライズⅡ",
            "effect": "Item Drop Rate +7%",
            "jpEffect": "レアドロップ倍率が増加+7%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VA02",
            "code": "VA02",
            "gid": "CC",
            "lvup": "VA03",
            "extend": [
                0,
                50,
                75
            ],
            "generate": [
                0,
                60
            ],
            "require": "XC01",
            "ref": 430
        },
        {
            "name": "Lucky Rise III",
            "jpName": "ラッキーライズⅢ",
            "effect": "Item Drop Rate +10%",
            "jpEffect": "レアドロップ倍率が増加+10%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VA03",
            "code": "VA03",
            "gid": "CC",
            "extend": [
                0,
                30,
                50
            ],
            "generate": [
                0,
                40
            ],
            "require": "XC01",
            "ref": 431
        },
        {
            "name": "Luna Fever",
            "jpName": "ルーナ・フィーバー",
            "effect": "T-ATK(+10),<br>HP(+10),<br>PP(+1)",
            "jpEffect": "法撃力(+10)<br>HP(+10)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0E",
            "code": "TD0E",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 404
        },
        {
            "name": "Madu Soul",
            "jpName": "マドゥ・ソール",
            "effect": "R-ATK(+15),<br>PP(+4)",
            "jpEffect": "射撃力(+15)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB15",
            "code": "RB15",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "EB"
            ],
            "rel": "soul",
            "ref": 276
        },
        {
            "name": "Magatsu Soul",
            "jpName": "マガツ・ソール",
            "effect": "S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+30),<br>PP(+3)",
            "jpEffect": "打撃防御(+15)<br>射撃防御(+15)<br>法撃防御(+15)<br>HP(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RPA5",
            "code": "RPA5",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "EA",
                "EB"
            ],
            "rel": "soul",
            "ref": 321
        },
        {
            "name": "Magi The Soul",
            "jpName": "マギー・ジ・ソール",
            "effect": "T-ATK(+35),<br>PP(+3)",
            "jpEffect": "法撃力(+35)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SH30",
            "code": "SH30",
            "gid": "EA",
            "extend": [
                0,
                25,
                40
            ],
            "tooltip": "Made from: Earth/Omega/Ex Magi Soul + Free Field Boss Soul",
            "ref": 333
        },
        {
            "name": "Malluda Soul",
            "jpName": "マリューダ・ソール",
            "effect": "S-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
            "jpEffect": "打撃力(+20)<br>法撃力(+20)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROC3",
            "code": "ROC3",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EB",
                "JF"
            ],
            "rel": "soul",
            "ref": 310
        },
        {
            "name": "Malmo Soul",
            "jpName": "マルモ・ソール",
            "effect": "R-DEF(+30),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "射撃防御(+30)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RI21",
            "code": "RI21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "EA",
                "JB"
            ],
            "rel": "soul",
            "ref": 299
        },
        {
            "name": "Mana Reverie",
            "jpName": "マナ・レヴリー",
            "effect": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>HP(+20),<br>PP(+4)",
            "jpEffect": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>HP(+20)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "TK10",
            "code": "TK10",
            "gid": "AC",
            "status": 6,
            "tooltip": "Made from: Omega Memoria + 4x Reverie Catalyst<br>Used for: Guardian Soul",
            "ref": 349
        },
        {
            "name": "Mark Angar",
            "jpName": "マーク・アンガル",
            "effect": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)",
            "jpEffect": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>技量(+40)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "UC21",
            "code": "UC21",
            "gid": "AC",
            "ref": 414
        },
        {
            "name": "Mark Couragena",
            "jpName": "マーク・カレジナ",
            "effect": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)",
            "jpEffect": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "UC11",
            "code": "UC11",
            "gid": "AC",
            "ref": 413
        },
        {
            "name": "Mark Grif",
            "jpName": "マーク・グリフ",
            "effect": "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)",
            "jpEffect": "打撃防御(+50)<br>射撃防御(+50)<br>法撃防御(+50)<br>HP(+80)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "UC31",
            "code": "UC31",
            "gid": "AC",
            "ref": 415
        },
        {
            "name": "Mark Joyo",
            "jpName": "マーク・ジョイオ",
            "effect": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+50)",
            "jpEffect": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)<br>HP(+50)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "UC01",
            "code": "UC01",
            "gid": "AC",
            "ref": 412
        },
        {
            "name": "Mark Receptor",
            "jpName": "マークレセプター",
            "effect": "Allows transfer Mark-type ability.<br>ALL(+10)",
            "jpEffect": "マーク系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XG01",
            "code": "XG01",
            "gid": "GB",
            "ref": 458
        },
        {
            "name": "Meduna Soul",
            "jpName": "メデューナ・ソール",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROA2",
            "code": "ROA2",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "HJ"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 306
        },
        {
            "name": "Meseta Fever I",
            "jpName": "メセタフィーバーⅠ",
            "effect": "Meseta Drop Amount +5%",
            "jpEffect": "出現するメセタが増加+5%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VB01",
            "code": "VB01",
            "gid": "CC",
            "lvup": "VZ02",
            "extend": [
                0,
                75,
                100
            ],
            "require": "XC01",
            "ref": 432
        },
        {
            "name": "Meseta Fever II",
            "jpName": "メセタフィーバーⅡ",
            "effect": "Meseta Drop Amount +10%",
            "jpEffect": "出現するメセタが増加+10%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VZ02",
            "code": "VZ02",
            "gid": "CC",
            "lvup": "VB03",
            "extend": [
                0,
                50,
                75
            ],
            "generate": [
                0,
                60
            ],
            "require": "XC01",
            "ref": 433
        },
        {
            "name": "Meseta Fever III",
            "jpName": "メセタフィーバーⅢ",
            "effect": "Meseta Drop Amount +15%",
            "jpEffect": "出現するメセタが増加+15%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VB03",
            "code": "VB03",
            "gid": "CC",
            "extend": [
                0,
                30,
                50
            ],
            "generate": [
                0,
                40
            ],
            "require": "XC01",
            "ref": 434
        },
        {
            "name": "Mind I",
            "jpName": "マインドⅠ",
            "effect": "T-DEF(+10)",
            "jpEffect": "法撃防御(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BC01",
            "code": "BC01",
            "gid": "AA",
            "lvup": "BC02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 33
        },
        {
            "name": "Mind II",
            "jpName": "マインドⅡ",
            "effect": "T-DEF(+20)",
            "jpEffect": "法撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BC02",
            "code": "BC02",
            "gid": "AA",
            "lvup": "BC03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 34
        },
        {
            "name": "Mind III",
            "jpName": "マインドⅢ",
            "effect": "T-DEF(+30)",
            "jpEffect": "法撃防御(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BC03",
            "code": "BC03",
            "gid": "AA",
            "lvup": "BC04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 35
        },
        {
            "name": "Mind IV",
            "jpName": "マインドⅣ",
            "effect": "T-DEF(+35)",
            "jpEffect": "法撃防御(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BC04",
            "code": "BC04",
            "gid": "AA",
            "lvup": "BC05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 36
        },
        {
            "name": "Mind Resist I",
            "jpName": "マインドレジストⅠ",
            "effect": "Tech Resist(+3)",
            "jpEffect": "法撃軽減(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HC01",
            "code": "HC01",
            "gid": "DA",
            "lvup": "HC02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 63
        },
        {
            "name": "Mind Resist II",
            "jpName": "マインドレジストⅡ",
            "effect": "Tech Resist(+4)",
            "jpEffect": "法撃軽減(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HC02",
            "code": "HC02",
            "gid": "DA",
            "lvup": "HC03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 64
        },
        {
            "name": "Mind Resist III",
            "jpName": "マインドレジストⅢ",
            "effect": "Tech Resist(+5)",
            "jpEffect": "法撃軽減(+5)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HC03",
            "code": "HC03",
            "gid": "DA",
            "lvup": "HC04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 65
        },
        {
            "name": "Mind Resist IV",
            "jpName": "マインドレジストⅣ",
            "effect": "Tech Resist(+6)",
            "jpEffect": "法撃軽減(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HC04",
            "code": "HC04",
            "gid": "DA",
            "lvup": "HC05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 66
        },
        {
            "name": "Mind Resist V",
            "jpName": "マインドレジストⅤ",
            "effect": "Tech Resist(+7)",
            "jpEffect": "法撃軽減(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HC05",
            "code": "HC05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 67
        },
        {
            "name": "Mind V",
            "jpName": "マインドⅤ",
            "effect": "T-DEF(+40)",
            "jpEffect": "法撃防御(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BC05",
            "code": "BC05",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 37
        },
        {
            "name": "Mirage I",
            "jpName": "ミラージュⅠ",
            "effect": "Grants Mirage Lv1",
            "jpEffect": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv1を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JD01",
            "code": "JD01",
            "gid": "DB",
            "lvup": "JD02",
            "extend": [
                60,
                80,
                100
            ],
            "status": 3,
            "ref": 118
        },
        {
            "name": "Mirage II",
            "jpName": "ミラージュⅡ",
            "effect": "Grants Mirage Lv2",
            "jpEffect": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv2を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JD02",
            "code": "JD02",
            "gid": "DB",
            "lvup": "JD03",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                60,
                80
            ],
            "status": 3,
            "ref": 119
        },
        {
            "name": "Mirage III",
            "jpName": "ミラージュⅢ",
            "effect": "Grants Mirage Lv3",
            "jpEffect": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv3を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JD03",
            "code": "JD03",
            "gid": "DB",
            "lvup": "JD04",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 120
        },
        {
            "name": "Mirage IV",
            "jpName": "ミラージュⅣ",
            "effect": "Grants Mirage Lv4",
            "jpEffect": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv4を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JD04",
            "code": "JD04",
            "gid": "DB",
            "lvup": "JD05",
            "extend": [
                20,
                30,
                50
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 121
        },
        {
            "name": "Mirage V",
            "jpName": "ミラージュⅤ",
            "effect": "Grants Mirage Lv5",
            "jpEffect": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv5を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JD05",
            "code": "JD05",
            "gid": "DB",
            "extend": [
                10,
                20,
                40
            ],
            "generate": [
                10,
                30
            ],
            "status": 3,
            "ref": 122
        },
        {
            "name": "Mitra Glare",
            "jpName": "ミトラ・グレア",
            "effect": "S-ATK(+30)<br>R-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+20)<br>HP(+20)<br>PP(+2)",
            "jpEffect": "打撃力(+30)<br>射撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+2)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN06",
            "code": "TN06",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Photoner Glare",
            "ref": 638
        },
        {
            "name": "Mizer Soul",
            "jpName": "マイザー・ソール",
            "effect": "R-ATK(+30),<br>PP(+3)",
            "jpEffect": "射撃力(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB23",
            "code": "RB23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "EB",
                "HB"
            ],
            "rel": "soul",
            "ref": 279
        },
        {
            "name": "Modulator",
            "jpName": "モデュレイター",
            "effect": "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30)",
            "jpEffect": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TC01",
            "code": "TC01",
            "gid": "AC",
            "extend": [
                0,
                30,
                80
            ],
            "status": 7,
            "ref": 337
        },
        {
            "name": "Mother Factor",
            "jpName": "マザー・ファクター",
            "effect": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+20),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+20)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TG03",
            "code": "TG03",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Factor Catalyst",
            "ref": 340
        },
        {
            "name": "Mutation I",
            "jpName": "ミューテーションⅠ",
            "effect": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+10)",
            "jpEffect": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>HP(+10)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "OA01",
            "code": "OA01",
            "gid": "AD",
            "lvup": "OA02",
            "extend": [
                0,
                50,
                80
            ],
            "tooltip": "Mutation I - Boosts the synthesis rate of Stat III",
            "ref": 265
        },
        {
            "name": "Mutation II",
            "jpName": "ミューテーションⅡ",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+15)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>HP(+15)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "OA02",
            "code": "OA02",
            "gid": "AD",
            "extend": [
                0,
                50,
                80
            ],
            "generate": [
                0,
                10,
                30,
                50
            ],
            "tooltip": "Mutation I - Boosts the synthesis rate of Stat III/IV",
            "ref": 266
        },
        {
            "name": "Necky Smile",
            "jpName": "ネッキー・スマイル",
            "effect": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>PP(+2)",
            "jpEffect": "(記載なし)\n打撃力(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TI01",
            "code": "TI01",
            "gid": "AC",
            "extend": [
                100
            ],
            "ref": 357
        },
        {
            "name": "Nepto Soul",
            "jpName": "ネプト・ソール",
            "effect": "T-ATK(+15),<br>PP(+4)",
            "jpEffect": "法撃力(+15)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC13",
            "code": "RC13",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "EB",
                "HC"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 284
        },
        {
            "name": "Noble Power",
            "jpName": "ノーブル・パワー",
            "effect": "S-ATK(+30),PP(+3)",
            "jpEffect": "打撃力(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 473,
            "code": "XI07"
        },
        {
            "name": "Noble Shoot",
            "jpName": "ノーブル・シュート",
            "effect": "R-ATK(+30),PP(+3)",
            "jpEffect": "射撃力(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 476,
            "code": "XI08"
        },
        {
            "name": "Noble Stamina",
            "jpName": "ノーブル・スタミナ",
            "effect": "HP(+50),PP(+3)",
            "jpEffect": "HP(+50)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 470,
            "code": "XI10"
        },
        {
            "name": "Noble Technique",
            "jpName": "ノーブル・テクニック",
            "effect": "T-ATK(+30),PP(+3)",
            "jpEffect": "法撃力(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 479,
            "code": "XI09"
        },
        {
            "name": "Noiya Fever",
            "jpName": "ノイヤ・フィーバー",
            "effect": "R-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "射撃力(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD09",
            "code": "TD09",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 399
        },
        {
            "name": "NT Weapon Booster",
            "jpName": "NTウェポンブースト",
            "effect": "Adds 800 EXP to NT weapon grinds.",
            "jpEffect": "新世武器強化時の経験値が増加する+800",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VP01",
            "code": "VK05",
            "gid": "CC",
            "extend": [
                100
            ],
            "ref": 450
        },
        {
            "name": "Nyau Soul",
            "jpName": "ニャウ・ソール",
            "effect": "DEX(+15),<br>PP(+4)",
            "jpEffect": "技量(+15)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RE13",
            "code": "RE13",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD",
                "EB",
                "HA"
            ],
            "rel": "soul",
            "ref": 291
        },
        {
            "name": "Offense Boost",
            "jpName": "オフェンス・ブースト",
            "effect": "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+25)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 482,
            "code": "XI20"
        },
        {
            "name": "Omega Buster",
            "jpName": "オメガバスター",
            "effect": "Boosts damage against Demons by 3%.",
            "jpEffect": "魔物種に与えるダメージが3%上昇",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VH02",
            "code": "VH11",
            "gid": "CC",
            "ref": 442
        },
        {
            "name": "Omega Memoria",
            "jpName": "オメガ・メモリア",
            "effect": "ALL(+15),<br>HP(+15),<br>PP(+2)",
            "jpEffect": "ALL(+15)<br>HP(+15)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "TJ01",
            "code": "TJ01",
            "gid": "AC",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TK0"
            ],
            "rel": "soul",
            "tooltip": "Made from: Fabula Soul, Historia Soul, Omega Reverie<br> Used for: Mana Reverie",
            "ref": 350
        },
        {
            "name": "Omega Reverie",
            "jpName": "オメガ・レヴリー",
            "effect": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>HP(+20)<br>PP(+1)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TK01",
            "code": "TK01",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Omega Memoria",
            "ref": 343
        },
        {
            "name": "Org Soul",
            "jpName": "オルグ・ソール",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>HP(+10)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>HP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROA1",
            "code": "ROA1",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EA"
            ],
            "rel": "soul",
            "ref": 305
        },
        {
            "name": "Origin Glare",
            "jpName": "オリジン・グレア",
            "effect": "S-ATK(+30)<br>R-ATK(+30)<br>T-ATK(+30)<br>S-DEF(+10)<br>R-DEF(+10)<br>T-DEF(+10)<br>HP(+20)<br>PP(+2)",
            "jpEffect": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)<br>打撃防御(+10)<br>射撃防御(+10)<br>法撃防御(+10)<br>HP(+20)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN09",
            "code": "TN09",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Photoner Glare",
            "ref": 653
        },
        {
            "name": "Panic I",
            "jpName": "パニックⅠ",
            "effect": "Grants Panic Lv1",
            "jpEffect": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv1を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JE01",
            "code": "JE01",
            "gid": "DB",
            "lvup": "JE02",
            "extend": [
                60,
                80,
                100
            ],
            "status": 3,
            "ref": 123
        },
        {
            "name": "Panic II",
            "jpName": "パニックⅡ",
            "effect": "Grants Panic Lv2",
            "jpEffect": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv2を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JE02",
            "code": "JE02",
            "gid": "DB",
            "lvup": "JE03",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                60,
                80
            ],
            "status": 3,
            "ref": 124
        },
        {
            "name": "Panic III",
            "jpName": "パニックⅢ",
            "effect": "Grants Panic Lv3",
            "jpEffect": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv3を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JE03",
            "code": "JE03",
            "gid": "DB",
            "lvup": "JE04",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 125
        },
        {
            "name": "Panic IV",
            "jpName": "パニックⅣ",
            "effect": "Grants Panic Lv4",
            "jpEffect": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv4を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JE04",
            "code": "JE04",
            "gid": "DB",
            "lvup": "JE05",
            "extend": [
                20,
                30,
                50
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 126
        },
        {
            "name": "Panic V",
            "jpName": "パニックⅤ",
            "effect": "Grants Panic Lv5",
            "jpEffect": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv5を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JE05",
            "code": "JE05",
            "gid": "DB",
            "extend": [
                10,
                20,
                40
            ],
            "generate": [
                10,
                30
            ],
            "status": 3,
            "ref": 127
        },
        {
            "name": "Persona Reverie",
            "jpName": "ペルソナ・レヴリー",
            "effect": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>S-DEF(-20),<br>R-DEF(-20),<br>T-DEF(-20)",
            "jpEffect": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)<br>打撃防御(-20)<br>射撃防御(-20)<br>法撃防御(-20)<br>",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TK06",
            "code": "TK06",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Reverie Catalyst",
            "ref": 348
        },
        {
            "name": "Persona Soul",
            "jpName": "ペルソナ・ソール",
            "effect": "R-DEF(+30),<br>HP(+10),<br>PP(+3)",
            "jpEffect": "射撃防御(+30)<br>HP(+10)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RI22",
            "code": "RI22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "JD"
            ],
            "rel": "soul",
            "tooltip": "Used for: Soul Catalyst",
            "ref": 300
        },
        {
            "name": "Photon Collect",
            "jpName": "フォトンコレクト",
            "effect": "Boosts status effect affix rate",
            "jpEffect": "状態異常と属性耐性の合成確率を上昇させる",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "WA01",
            "code": "WA01",
            "gid": "GB",
            "ref": 451
        },
        {
            "name": "Photon Receptor",
            "jpName": "フォトンレセプター",
            "effect": "Greatly increases affix rate of <br>Stamina, Spirita<br>ALL(+5)",
            "jpEffect": "特殊能力スタミナ、スピリタの継承成功率を大幅に上昇\nALL(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "XI32",
            "code": "XI32",
            "gid": "GB",
            "ref": 461
        },
        {
            "name": "Photoner Glare",
            "jpName": "フォトナー・グレア",
            "effect": "ALL(+15)<br>HP(+15)<br>PP(+2)",
            "jpEffect": "ALL(+15)<br>HP(+15)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN0A",
            "code": "TN0A",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Made from: Mitra Glare, Varuna Glare, Shiva Glare, Origin Glare<br>Used for: Absolute Glare",
            "ref": 654
        },
        {
            "name": "Phrase Chase",
            "jpName": "フレイズ・チェイス",
            "effect": "+5% damage against enemies<BR>with Status Effects",
            "jpEffect": "状態異常のエネミーへの与ダメージが5%上昇",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YB31",
            "code": "YB31",
            "gid": "CC",
            "ref": 428
        },
        {
            "name": "Phrase Decay",
            "jpName": "フレイズ・ディケイ",
            "effect": "Boosts damage inflicted to enemies<br>affected by Jellen by 5%.",
            "jpEffect": "ジェルン状態のエネミーへの与ダメージが5%上昇",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YB51",
            "code": "YB51",
            "gid": "CC",
            "ref": 424
        },
        {
            "name": "Phrase Receptor",
            "jpName": "フレイズレセプター",
            "effect": "Boosts transfer of Phrase affixes<br>ALL(+10)",
            "jpEffect": "フレイズ系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XE01",
            "code": "XE01",
            "gid": "GB",
            "ref": 456
        },
        {
            "name": "Phrase Recovery",
            "jpName": "フレイズ・リカバリー",
            "effect": "+5% PP Recovery Rate",
            "jpEffect": "PPの自然回復速度が5%上昇",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YB01",
            "code": "YB01",
            "gid": "CC",
            "ref": 425
        },
        {
            "name": "Phrase Reduce",
            "jpName": "フレイズ・リデュース",
            "effect": "PP consumption decreases by 4%.",
            "jpEffect": "PPの消費量が4%減少する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YB41",
            "code": "YB41",
            "gid": "CC",
            "ref": 423
        },
        {
            "name": "Phrase Response",
            "jpName": "フレイズ・レスポンス",
            "effect": "+5% ATK PP Recovery",
            "jpEffect": "通常攻撃のPP回復量が5%上昇",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YB21",
            "code": "YB21",
            "gid": "CC",
            "ref": 427
        },
        {
            "name": "Phrase Weak",
            "jpName": "フレイズ・ウィーク",
            "effect": "+2% Elemental Weakness damage",
            "jpEffect": "弱点属性で攻撃した時、与ダメージが2%上昇",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YB11",
            "code": "YB11",
            "gid": "CC",
            "ref": 426
        },
        {
            "name": "Poison I",
            "jpName": "ポイズンⅠ",
            "effect": "Grants Poison Lv1",
            "jpEffect": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv1を付与する(MHP3% × 10回)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JF01",
            "code": "JF01",
            "gid": "DB",
            "lvup": "JF02",
            "extend": [
                60,
                80,
                100
            ],
            "status": 3,
            "ref": 128
        },
        {
            "name": "Poison II",
            "jpName": "ポイズンⅡ",
            "effect": "Grants Poison Lv2",
            "jpEffect": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv2を付与する(MHP3% × 12回)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JF02",
            "code": "JF02",
            "gid": "DB",
            "lvup": "JF03",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                60,
                80
            ],
            "status": 3,
            "ref": 129
        },
        {
            "name": "Poison III",
            "jpName": "ポイズンⅢ",
            "effect": "Grants Poison Lv3",
            "jpEffect": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv3を付与する(MHP4% × 10回)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JF03",
            "code": "JF03",
            "gid": "DB",
            "lvup": "JF04",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 130
        },
        {
            "name": "Poison IV",
            "jpName": "ポイズンⅣ",
            "effect": "Grants Poison Lv4",
            "jpEffect": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv4を付与する(MHP4% × 12回)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JF04",
            "code": "JF04",
            "gid": "DB",
            "lvup": "JF05",
            "extend": [
                20,
                30,
                50
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 131
        },
        {
            "name": "Poison V",
            "jpName": "ポイズンⅤ",
            "effect": "Grants Poison Lv5",
            "jpEffect": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv5を付与する(MHP5% × 10回)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JF05",
            "code": "JF05",
            "gid": "DB",
            "extend": [
                10,
                20,
                40
            ],
            "generate": [
                10,
                30
            ],
            "status": 3,
            "ref": 132
        },
        {
            "name": "Polytan Smile",
            "jpName": "ポリタン・スマイル",
            "effect": "Adds 25 EXP to NT weapon grinds.",
            "jpEffect": "新世武器強化時の経験値が増加する\n強化値",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VL01",
            "code": "VK03",
            "gid": "CC",
            "extend": [
                100
            ],
            "ref": 446
        },
        {
            "name": "Power Boost",
            "jpName": "パワー・ブースト",
            "effect": "S-ATK(+25)",
            "jpEffect": "打撃力(+25)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 464,
            "code": "XI04"
        },
        {
            "name": "Power I",
            "jpName": "パワーⅠ",
            "effect": "S-ATK(+10)",
            "jpEffect": "打撃力(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AA01",
            "code": "AA01",
            "gid": "AA",
            "lvup": "AA02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 0
        },
        {
            "name": "Power II",
            "jpName": "パワーⅡ",
            "effect": "S-ATK(+20)",
            "jpEffect": "打撃力(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AA02",
            "code": "AA02",
            "gid": "AA",
            "lvup": "AA03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 1
        },
        {
            "name": "Power III",
            "jpName": "パワーⅢ",
            "effect": "S-ATK(+30)",
            "jpEffect": "打撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AA03",
            "code": "AA03",
            "gid": "AA",
            "lvup": "AA04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 2
        },
        {
            "name": "Power IV",
            "jpName": "パワーⅣ",
            "effect": "S-ATK(+35)",
            "jpEffect": "打撃力(+35)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AA04",
            "code": "AA04",
            "gid": "AA",
            "lvup": "AA05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 3
        },
        {
            "name": "Power V",
            "jpName": "パワーⅤ",
            "effect": "S-ATK(+40)",
            "jpEffect": "打撃力(+40)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AA05",
            "code": "AA05",
            "gid": "AA",
            "lvup": "AA06",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 4
        },
        {
            "name": "Power VI",
            "jpName": "パワーⅥ",
            "effect": "S-ATK(+45)",
            "jpEffect": "打撃力(+45)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "AA06",
            "code": "AA06",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 5
        },
        {
            "name": "Quartz Soul",
            "jpName": "クォーツ・ソール",
            "effect": "S-ATK(+30),<br>PP(+3)",
            "jpEffect": "打撃力(+30)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA23",
            "code": "RA23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EB",
                "JE"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 271
        },
        {
            "name": "Ra'nsa Soul",
            "jpName": "ランサ・ソール",
            "effect": "R-ATK(+30),<br>HP(+20)",
            "jpEffect": "射撃力(+30)<br>HP(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB21",
            "code": "RB21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "EA",
                "HM"
            ],
            "rel": "soul",
            "ref": 277
        },
        {
            "name": "Ragne Soul",
            "jpName": "ラグネ・ソール",
            "effect": "T-ATK(+30),<br>HP(+20)",
            "jpEffect": "法撃力(+30)<br>HP(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC21",
            "code": "RC21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EA",
                "HN"
            ],
            "rel": "soul",
            "ref": 285
        },
        {
            "name": "Rappy Soul",
            "jpName": "ラッピー・ソール",
            "effect": "DEX(+30),<br>PP(+4)",
            "jpEffect": "技量(+30)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RE23",
            "code": "RE23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD",
                "EB",
                "HM"
            ],
            "rel": "soul",
            "ref": 294
        },
        {
            "name": "React I",
            "jpName": "リアクトⅠ",
            "effect": "R-DEF(+10)",
            "jpEffect": "射撃防御(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BB01",
            "code": "BB01",
            "gid": "AA",
            "lvup": "BB02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 28
        },
        {
            "name": "React II",
            "jpName": "リアクトⅡ",
            "effect": "R-DEF(+20)",
            "jpEffect": "射撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BB02",
            "code": "BB02",
            "gid": "AA",
            "lvup": "BB03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 29
        },
        {
            "name": "React III",
            "jpName": "リアクトⅢ",
            "effect": "R-DEF(+30)",
            "jpEffect": "射撃防御(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BB03",
            "code": "BB03",
            "gid": "AA",
            "lvup": "BB04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 30
        },
        {
            "name": "React IV",
            "jpName": "リアクトⅣ",
            "effect": "R-DEF(+35)",
            "jpEffect": "射撃防御(+35)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BB04",
            "code": "BB04",
            "gid": "AA",
            "lvup": "BB05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 31
        },
        {
            "name": "React V",
            "jpName": "リアクトⅤ",
            "effect": "R-DEF(+40)",
            "jpEffect": "射撃防御(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "BB05",
            "code": "BB05",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 32
        },
        {
            "name": "Returner I",
            "jpName": "リターナーⅠ",
            "effect": "ALL(+3),<br>HP(+3),<br>PP(+1)",
            "jpEffect": "ALL(+3)<br>HP(+3)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TE01",
            "code": "TE01",
            "gid": "AD",
            "lvup": "TE02",
            "extend": [
                0,
                80,
                100
            ],
            "status": 4,
            "ref": 351
        },
        {
            "name": "Returner II",
            "jpName": "リターナーⅡ",
            "effect": "ALL(+5),<br>HP(+5),<br>PP(+2)",
            "jpEffect": "ALL(+5)<br>HP(+5)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TE02",
            "code": "TE02",
            "gid": "AD",
            "lvup": "TE03",
            "extend": [
                0,
                70,
                100
            ],
            "generate": [
                70,
                70
            ],
            "status": 4,
            "ref": 352
        },
        {
            "name": "Returner III",
            "jpName": "リターナーⅢ",
            "effect": "ALL(+10),<br>HP(+10),<br>PP(+3)",
            "jpEffect": "ALL(+10)<br>HP(+10)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TE03",
            "code": "TE03",
            "gid": "AD",
            "lvup": "TE04",
            "extend": [
                0,
                50,
                100
            ],
            "generate": [
                50,
                50
            ],
            "status": 4,
            "ref": 353
        },
        {
            "name": "Returner IV",
            "jpName": "リターナーⅣ",
            "effect": "ALL(+15),<br>HP(+15),<br>PP(+4)",
            "jpEffect": "ALL(+15)<br>HP(+15)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TE04",
            "code": "TE04",
            "gid": "AD",
            "lvup": "TE05",
            "extend": [
                0,
                40,
                100
            ],
            "generate": [
                0,
                30
            ],
            "status": 4,
            "ref": 354
        },
        {
            "name": "Returner V",
            "jpName": "リターナーⅤ",
            "effect": "ALL(+30),<br>HP(+30),<br>PP(+5)",
            "jpEffect": "ALL(+30)<br>HP(+30)<br>PP(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TE05",
            "code": "TE05",
            "gid": "AD",
            "extend": [
                0,
                30,
                100
            ],
            "generate": [
                0,
                20
            ],
            "status": 4,
            "ref": 355
        },
        {
            "name": "Reverie Catalyst",
            "jpName": "レヴリー・カタリスト",
            "effect": "HP(+10),<br>PP(+1)",
            "jpEffect": "HP(+10)<br>PP(+1)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "VJ03",
            "code": "VJ03",
            "gid": "CA",
            "extend": [
                0,
                10,
                30
            ],
            "tooltip": "Made from: Elder Reverie, Loser Reverie, Appregina Reverie, Double Reverie, Persona Reverie<br>Used for: Mana Reverie",
            "ref": 445
        },
        {
            "name": "Reverie Receptor",
            "jpName": "レヴリーレセプター",
            "effect": "Boosts Reverie-type ability transfer rates.<br>ALL(+10)",
            "jpEffect": "レヴリー系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XL01",
            "code": "XL01",
            "gid": "GB",
            "ref": 685
        },
        {
            "name": "Ringa Soul",
            "jpName": "リンガ・ソール",
            "effect": "S-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
            "jpEffect": "打撃力(+20)<br>法撃力(+20)<br>HP(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROC1",
            "code": "ROC1",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "EA",
                "HL"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 308
        },
        {
            "name": "Ripper/Dark Weak",
            "jpName": "リーパー／闇弱点",
            "effect": "Boost damage against enemies weak to Dark.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "闇弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PF06",
            "code": "PF06",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 528
        },
        {
            "name": "Ripper/Fire Weak",
            "jpName": "リーパー／炎弱点",
            "effect": "Boost damage against enemies weak to Fire.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "炎弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PB02",
            "code": "PB02",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 516
        },
        {
            "name": "Ripper/Ice Weak",
            "jpName": "リーパー／氷弱点",
            "effect": "Boost damage against enemies weak to Ice.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "氷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PC03",
            "code": "PC03",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 525
        },
        {
            "name": "Ripper/Light Weak",
            "jpName": "リーパー／光弱点",
            "effect": "Boost damage against enemies weak to Light.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "光弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PE05",
            "code": "PE05",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 527
        },
        {
            "name": "Ripper/Ltn. Weak",
            "jpName": "リーパー／雷弱点",
            "effect": "Boost damage against enemies weak to Lightning.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "雷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PA01",
            "code": "PA01",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 515
        },
        {
            "name": "Ripper/Wind Weak",
            "jpName": "リーパー／風弱点",
            "effect": "Boost damage against enemies weak to Wind.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "風弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PD04",
            "code": "PD04",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 526
        },
        {
            "name": "Rockbear Soul",
            "jpName": "ロックベア・ソール",
            "effect": "S-DEF(+30),<br>HP(+10),<br>PP(+3)",
            "jpEffect": "打撃防御(+30)<br>HP(+10)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RH22",
            "code": "RH22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "HA"
            ],
            "rel": "soul",
            "ref": 297
        },
        {
            "ref": 519,
            "code": "LA99",
            "gid": "L",
            "name": "S1: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S1",
            "noEx": true,
            "simCode": "LA00",
            "internalUse": true,
            "jpName": "S1:ジャンク",
            "jpEffect": "任意のS1能力を表します。"
        },
        {
            "ref": 164,
            "code": "LA90",
            "gid": "L",
            "name": "S1:Augment Intent",
            "jpName": "S1:錬成の志",
            "extend": [
                100
            ],
            "effect": "Increase Power by 0.5% for each Special Ability attached to this weapon. Maxes at 4%.",
            "jpEffect": "特殊能力の付与数に応じて威力上昇。最大で4%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 686,
            "code": "LA9Z",
            "gid": "L",
            "name": "S1:Augment Intent 2",
            "jpName": "S1:錬成の志2",
            "extend": [
                100
            ],
            "effect": "Increase Power by 0.75% for each Special Ability attached to this weapon. Maxes at 6%.",
            "jpEffect": "特殊能力の付与数に応じて威力上昇。最大で6%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 145,
            "code": "LA17",
            "gid": "L",
            "name": "S1:Black Shadow Flash",
            "jpName": "S1:影ノ黒閃",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery for 20 seconds after standing still for 5 seconds.",
            "jpEffect": "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 141,
            "code": "LA13",
            "gid": "L",
            "name": "S1:Blue Ocean Flash",
            "jpName": "S1:海ノ青閃",
            "extend": [
                100
            ],
            "effect": "Recover 4% HP every second for 30 seconds after taking 600 damage.",
            "jpEffect": "被ダメージ600毎に30秒間、毎秒HPが4%回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 136,
            "code": "LA04",
            "gid": "L",
            "name": "S1:Brilliant Intent",
            "jpName": "S1:輝充の志",
            "extend": [
                100
            ],
            "effect": "Boosts damage by 3% while PP is at 40% or above.",
            "jpEffect": "PPが40%以上の時、与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 657,
            "code": "LA2T",
            "gid": "L",
            "name": "S1:Brilliant Intent 2",
            "jpName": "S1:輝充の志2",
            "extend": [
                100
            ],
            "effect": "Boosts damage by 5% while PP is at 40% or above.",
            "jpEffect": "PPが40%以上の時、与ダメージが5%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 146,
            "code": "LA18",
            "gid": "L",
            "name": "S1:Brilliant Ruin",
            "jpName": "S1:滅域輝与",
            "extend": [
                100
            ],
            "effect": "Recover 3 PP when an enemy near you is defeated.",
            "jpEffect": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 161,
            "code": "LA87",
            "gid": "L",
            "name": "S1:Brilliant Ruin 2",
            "jpName": "S1:滅域輝与2",
            "extend": [
                100
            ],
            "effect": "Recover 4 PP when an enemy near you is defeated.",
            "jpEffect": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 522,
            "code": "LA2Q",
            "gid": "L",
            "name": "S1:Collaborator Liberator",
            "jpName": "S1:戦友の加護",
            "extend": [
                100
            ],
            "effect": "If there are two or more party members, decrease PP consumption by 8% (2 Members),<br>+10% Critical Hit Rate (3 Members), and increase Power by 3% (4 Members).<br>Bonuses only work on self.",
            "jpEffect": "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 667,
            "code": "LA97",
            "gid": "L",
            "name": "S1:Collaborator Liberator 2",
            "jpName": "S1:戦友の加護2",
            "extend": [
                100
            ],
            "effect": "If there are two or more party members, decrease PP consumption by 10% (2 Members),<br>+?% Critical Hit Rate (3 Members), and increase Power by 4% (4 Members).<br>Bonuses only work on self.",
            "jpEffect": "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 137,
            "code": "LA05",
            "gid": "L",
            "name": "S1:Double-Edged Sword",
            "jpName": "S1:諸刃の撃",
            "extend": [
                100
            ],
            "effect": "Increase Power by 4% but take 8% more damage when weapon is drawn.",
            "jpEffect": "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 169,
            "code": "LA95",
            "gid": "L",
            "name": "S1:Eclipsing Decay",
            "jpName": "S1:失力の蝕",
            "extend": [
                100
            ],
            "effect": "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
            "jpEffect": "命中時に25％の確率でジェルンを付与。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 149,
            "code": "LA23",
            "gid": "L",
            "name": "S1:Flowing Exhilaration",
            "jpName": "S1:時流活与",
            "extend": [
                100
            ],
            "effect": "Recover 40% of your maximum HP every 40s.",
            "jpEffect": "一定時間ごとにHPを40%回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 684,
            "code": "LA77",
            "gid": "L",
            "name": "S1:Flowing Grace",
            "jpName": "S1:時流の恵",
            "extend": [
                100
            ],
            "effect": "Regenerate 10 PP every 4 seconds.",
            "jpEffect": "4秒ごとにPPを10回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 162,
            "code": "LA88",
            "gid": "L",
            "name": "S1:Flowing Intent",
            "jpName": "S1:時流の志",
            "extend": [
                100
            ],
            "effect": "Increase power every second. Maxes at 4% (30s to MAX).",
            "jpEffect": "1秒毎に与ダメージが上昇。最大で4%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 144,
            "code": "LA16",
            "gid": "L",
            "name": "S1:Green Leaf Flash",
            "jpName": "S1:葉ノ緑閃",
            "extend": [
                100
            ],
            "effect": "A barrier that decreases damage taken by 8% and negates<br>knockback appears and disappears every 20 seconds.",
            "jpEffect": "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 150,
            "code": "LA24",
            "gid": "L",
            "name": "S1:Guardian Armor",
            "jpName": "S1:守護の備",
            "extend": [
                100
            ],
            "effect": "Reduces damage taken by 7%.",
            "jpEffect": "被ダメージを7%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 139,
            "code": "LA11",
            "gid": "L",
            "name": "S1:Immediate Intent",
            "jpName": "S1:瞬連の志",
            "extend": [
                100
            ],
            "effect": "Increase damage when performing successive Just Attacks (3% MAX).",
            "jpEffect": "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 163,
            "code": "LA89",
            "gid": "L",
            "name": "S1:Lethal Intent",
            "jpName": "S1:死中の志",
            "extend": [
                100
            ],
            "effect": "Reduce HP by 5% every 20 seconds and increase Power by 4%.",
            "jpEffect": "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 133,
            "code": "LA01",
            "gid": "L",
            "name": "S1:Offensive Intent",
            "jpName": "S1:剛撃の志",
            "extend": [
                100
            ],
            "effect": "Increase damage by 2%.",
            "jpEffect": "与ダメージが2%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 668,
            "code": "LA96",
            "gid": "L",
            "name": "S1:Offensive Intent 2",
            "jpName": "S1:剛撃の志2",
            "extend": [
                100
            ],
            "effect": "Increase damage by 4%.",
            "jpEffect": "与ダメージが4%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 153,
            "code": "LA79",
            "simCode": "LA2D",
            "gid": "L1",
            "name": "S1:Phanatical Advantage",
            "extend": [
                100,
                100,
                100
            ],
            "effect": "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
            "noEx": true,
            "jpName": "S1:狂幻の利",
            "jpEffect": "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
        },
        {
            "ref": 159,
            "code": "LA85",
            "gid": "L",
            "name": "S1:Phantasmal Intent",
            "jpName": "S1:幻精の志",
            "extend": [
                100
            ],
            "effect": "Increase Power based on the Photon Blast Gauge. Maxes at 3%.",
            "jpEffect": "フォトンブラストゲージに応じて威力が上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 493,
            "code": "LA2P",
            "gid": "L",
            "name": "S1:Photon Balance",
            "jpName": "S1:光子の秤",
            "extend": [
                100
            ],
            "effect": "Increase PP Consumption by 8% but increase PA/Technique damage by 4%.",
            "jpEffect": "PP消費量が8％増加する代わりにPAとテクニックの威力が4％上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 666,
            "code": "LA98",
            "gid": "L",
            "name": "S1:Photon Balance 2",
            "jpName": "S1:光子の秤2",
            "extend": [
                100
            ],
            "effect": "Increase PP Consumption by 4% but increase PA/Technique damage by 6%.",
            "jpEffect": "PP消費量が4％増加する代わりにPAとテクニックの威力が6％上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 134,
            "code": "LA02",
            "gid": "L",
            "name": "S1:Photon Reduction",
            "jpName": "S1:光子縮減",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 7%.",
            "jpEffect": "PP消費量を7%軽減。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 160,
            "code": "LA86",
            "gid": "L",
            "name": "S1:Photon Reduction 2",
            "jpName": "S1:光子縮減2",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 10%.",
            "jpEffect": "PP消費量を10%軽減。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 154,
            "code": "LA80",
            "gid": "L",
            "name": "S1:Powering Intent",
            "jpName": "S1:強闘の志",
            "extend": [
                100
            ],
            "effect": "Increase damage dealt to bosses by 4%.",
            "jpEffect": "強敵への与ダメージが4%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 148,
            "code": "LA22",
            "gid": "L",
            "name": "S1:Radiant Strike",
            "jpName": "S1:輝剰の撃",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 17%.",
            "jpEffect": "攻撃時のPP回復量が17%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 138,
            "code": "LA06",
            "gid": "L",
            "name": "S1:Radiating Grace",
            "jpName": "S1:輝勢の恵",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 20%.",
            "jpEffect": "PPの自然回復速度が20%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 614,
            "code": "LA2R",
            "gid": "L",
            "name": "S1:Radiating Grace 2",
            "jpName": "S1:輝勢の恵2",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 23%.",
            "jpEffect": "PPの自然回復速度が23%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 168,
            "code": "LA94",
            "gid": "L",
            "name": "S1:Reckless Strike",
            "jpName": "S1:賭死の撃",
            "extend": [
                100
            ],
            "effect": "Increase Power every three times you are attacked.<br>(1% on 3rd Hits, 3% on 6th hits, 10% on 9th hits)<br>Upon being attacked a tenth time, release<br>an explosion that reduces your HP to 1 and damages all nearby targets.",
            "jpEffect": "被ダメージ回数に応じて3段階の威力上昇。最大段階の被ダメージ時 周囲ダメージが発生し自身のHPが1になる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 140,
            "code": "LA12",
            "gid": "L",
            "name": "S1:Red Petal Flash",
            "jpName": "S1:花ノ赤閃",
            "extend": [
                100
            ],
            "effect": "Increase damage by 3% for 30 seconds after inflicting 450,000 damage.",
            "jpEffect": "与ダメージ450,000毎に30秒間、3%威力上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 155,
            "code": "LA81",
            "gid": "L",
            "name": "S1:Rupturing Excess",
            "jpName": "S1:裂砕の剰",
            "extend": [
                100
            ],
            "effect": "Increase PP recovery rate by 40% when attacking breakable parts.",
            "jpEffect": "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 157,
            "code": "LA83",
            "gid": "L",
            "name": "S1:Rupturing Intent",
            "jpName": "S1:裂砕の志",
            "extend": [
                100
            ],
            "effect": "Increase damage against breakable parts by 4%.",
            "jpEffect": "破壊可能な部位を攻撃した際、威力が4%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 166,
            "code": "LA92",
            "gid": "L",
            "name": "S1:Shoot Boost",
            "jpName": "S1:射撃増幅",
            "extend": [
                100
            ],
            "effect": "Increase Power by 1% for every 60 R-ATK affixed to this weapon.<br>Increase Power by an additional 2% if at least<br>200 R-ATK is affixed to this weapon.",
            "jpEffect": "特殊能力の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 147,
            "code": "LA21",
            "gid": "L",
            "name": "S1:Skilled Intent",
            "jpName": "S1:妙撃の志",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Damage by 3%.",
            "jpEffect": "クリティカル時の与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 156,
            "code": "LA82",
            "gid": "L",
            "name": "S1:Spirited Response",
            "jpName": "S1:気輝応変",
            "extend": [
                100
            ],
            "effect": "Increases PP regeneration rate by 80% while sheathed.<br>Reduce PP regeneration rate by 100% while unsheathed.",
            "jpEffect": "納刀・抜刀を行う事でPP回復速度が変化。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 165,
            "code": "LA91",
            "gid": "L",
            "name": "S1:Strike Boost",
            "jpName": "S1:打撃増幅",
            "extend": [
                100
            ],
            "effect": "Increase Power by 1% for every 60 S-ATK affixed to this weapon.<br>Increase Power by an additional 2% if at least<br>200 S-ATK is affixed to this weapon.",
            "jpEffect": "特殊能力の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 158,
            "code": "LA84",
            "gid": "L",
            "name": "S1:Sturdy Intent",
            "jpName": "S1:依属の志",
            "extend": [
                100
            ],
            "effect": "Increase damage by 4% if your weapon's element or<br>equipped Guard Ring match the enemy's elemental weakness.",
            "jpEffect": "ガード系リングまたは武器属性が弱点属性と一致時、4%威力上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 167,
            "code": "LA93",
            "gid": "L",
            "name": "S1:Tech Boost",
            "jpName": "S1:法撃増幅",
            "extend": [
                100
            ],
            "effect": "Increase Power by 1% for every 60 T-ATK affixed to this weapon.<br>Increase Power by an additional 2% if at least<br>200 T-ATK is affixed to this weapon.",
            "jpEffect": "特殊能力の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 151,
            "code": "LA25",
            "gid": "L",
            "name": "S1:Vigor Enhancement",
            "jpName": "S1:活剰増進",
            "extend": [
                100
            ],
            "effect": "Increase HP recovered from self-healing effects by 40%.",
            "jpEffect": "自身のHP回復量が40%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 142,
            "code": "LA14",
            "gid": "L",
            "name": "S1:White Snow Flash",
            "jpName": "S1:雪ノ白閃",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 20% for 30 seconds after using 150 PP.",
            "jpEffect": "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 135,
            "code": "LA03",
            "gid": "L",
            "name": "S1:Wise Skill",
            "jpName": "S1:妙技の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 15%.",
            "jpEffect": "クリティカル率が15%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 613,
            "code": "LA2S",
            "gid": "L",
            "name": "S1:Wise Skill 2",
            "jpName": "S1:妙技の巧2",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 18%.",
            "jpEffect": "クリティカル率が18%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 143,
            "code": "LA15",
            "gid": "L",
            "name": "S1:Yellow Moon Flash",
            "jpName": "S1:月ノ黄閃",
            "extend": [
                100
            ],
            "effect": "Decrease PP consumption by 8% for 20 seconds after performing a Just Guard.",
            "jpEffect": "ジャストガード成功時に20秒間、PP消費量を8%軽減。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LA00"
        },
        {
            "ref": 520,
            "code": "LB99",
            "gid": "L",
            "name": "S2: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S2",
            "noEx": true,
            "simCode": "LB00",
            "internalUse": true,
            "jpName": "S2:ジャンク",
            "jpEffect": "任意のS2能力を表します。"
        },
        {
            "ref": 496,
            "code": "LB1Z",
            "gid": "L",
            "name": "S2:Aegis Gift",
            "jpName": "S2:瞬護の与",
            "extend": [
                100
            ],
            "effect": "Successfully performing a Just Guard while below 25% HP recovers 50% HP and 30% PP.",
            "jpEffect": "HP25%以下でジャストガード成功時HP50%PP30%回復。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 642,
            "code": "LB98",
            "gid": "L",
            "name": "S2:Brilliant Intent",
            "jpName": "S2:輝充の志",
            "extend": [
                100
            ],
            "effect": "Boosts damage by 3% while PP is at 40% or above.",
            "jpEffect": "PPが40%以上の時、与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 186,
            "code": "LB17",
            "gid": "L",
            "name": "S2:Brilliant Ruin",
            "jpName": "S2:滅域輝与",
            "extend": [
                100
            ],
            "effect": "Recover 3 PP when an enemy near you is defeated.",
            "jpEffect": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 174,
            "code": "LB05",
            "gid": "L",
            "name": "S2:Cursed Radiance",
            "jpName": "S2:災転輝与",
            "extend": [
                100
            ],
            "effect": "Recovers PP by 15% when taking damage.",
            "jpEffect": "ダメージを受けた際にPPを15%回復する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 537,
            "code": "LB2E",
            "gid": "L",
            "name": "S2:Darkness Guard",
            "jpName": "S2:暗闇の備志",
            "extend": [
                100
            ],
            "effect": "Increase Dark Attribute and Poison Resistance (30). Increase damage by 3% against enemies weak to Poison.",
            "jpEffect": "闇耐性、ポイズン耐性が上昇。敵の弱点属性が闇属性の時、威力上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 192,
            "code": "LB1D",
            "gid": "L",
            "name": "S2:Double-Edged Sword",
            "jpName": "S2:諸刃の撃",
            "extend": [
                100
            ],
            "effect": "Increase Power by 3% but take 6% more damage when weapon is drawn.",
            "jpEffect": "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 207,
            "code": "LB90",
            "gid": "L",
            "name": "S2:Flaming Guard",
            "jpName": "S2:火炎の備志",
            "extend": [
                100
            ],
            "effect": "Increase Fire Attribute and Burn Resistance (30). Increase damage by 3% against enemies weak to Fire.",
            "jpEffect": "炎耐性、バーン耐性が上昇。敵の弱点属性が炎属性の時、威力上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 499,
            "code": "LB2C",
            "gid": "L",
            "name": "S2:Flowing Armor",
            "jpName": "S2:時流の護",
            "extend": [
                100
            ],
            "effect": "Cast Deband on yourself at regular intervals (14s cooldown after doing 1 tick of Deband).",
            "jpEffect": "一定間隔で自身にデバンドを発動する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 176,
            "code": "LB07",
            "gid": "L",
            "name": "S2:Flowing Exhilaration",
            "jpName": "S2:時流活与",
            "extend": [
                100
            ],
            "effect": "Recover 60% of your maximum HP every 40s.",
            "jpEffect": "一定時間ごとにHPを60%回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 616,
            "code": "LB2G",
            "gid": "L",
            "name": "S2:Flowing Exhilaration 2",
            "jpName": "S2:時流活与2",
            "extend": [
                100
            ],
            "effect": "Recover 75% of your maximum HP every 40s.",
            "jpEffect": "一定時間ごとにHPを75%回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 179,
            "code": "LB0A",
            "gid": "L",
            "name": "S2:Flowing Grace",
            "jpName": "S2:時流の恵",
            "extend": [
                100
            ],
            "effect": "Regenerate 10 PP every 4 seconds.",
            "jpEffect": "4秒ごとにPPを10回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 208,
            "code": "LB91",
            "gid": "L",
            "name": "S2:Freezing Guard",
            "jpName": "S2:氷雪の備志",
            "extend": [
                100
            ],
            "effect": "Increase Ice Attribute and Freeze Resistance (30). Increase damage by 3% against enemies weak to Ice.",
            "jpEffect": "氷耐性、フリーズ耐性が上昇。敵の弱点属性が氷属性の時、威力上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 175,
            "code": "LB06",
            "gid": "L",
            "name": "S2:Guardian Armor",
            "jpName": "S2:守護の備",
            "extend": [
                100
            ],
            "effect": "Reduces damage taken by 7%.",
            "jpEffect": "被ダメージを7%軽減。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 671,
            "code": "LB95",
            "gid": "L",
            "name": "S2:Guardian Armor 2",
            "jpName": "S2:守護の備2",
            "extend": [
                100
            ],
            "effect": "Reduces damage taken by 10%.",
            "jpEffect": "被ダメージを10%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 497,
            "code": "LB2A",
            "gid": "L",
            "name": "S2:Heavenly Keeper",
            "jpName": "S2:保天輝地",
            "extend": [
                100
            ],
            "effect": "Reduce PP Consumption by 8% while airborne. Increase Natural PP Recovery and Active PP Recovery by 20% while on the ground.",
            "jpEffect": "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 658,
            "code": "LB97",
            "gid": "L",
            "name": "S2:Heavenly Keeper 2",
            "jpName": "S2:保天輝地2",
            "extend": [
                100
            ],
            "effect": "Reduce PP Consumption by 15% while airborne. Increase Natural PP Recovery by 25% and increase Active PP Recovery by 35% while on the ground.",
            "jpEffect": "空中時では、PP消費量が15％軽減。地上時では自然PP回復量が25％かつ地上での攻撃時ではPP回復量が35％上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 177,
            "code": "LB08",
            "gid": "L",
            "name": "S2:Immediate Profusion",
            "jpName": "S2:瞬撃繚乱",
            "extend": [
                100
            ],
            "effect": "Raises damage by 3% when Just Attacking different PAs or Techniques.",
            "jpEffect": "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 673,
            "code": "LB88",
            "gid": "L",
            "name": "S2:Instant Purpose",
            "jpName": "S2:瞬乱巧志",
            "extend": [
                100
            ],
            "effect": "Boosts critical hit damage by 2% and increases crit rate by 15% when Just Attacking different PAs and Techniques.",
            "jpEffect": "別のPAやテクニックをジャストアタックするとクリティカル威力2%クリティカル率15%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 206,
            "code": "LB89",
            "gid": "L",
            "name": "S2:Instant Reduction",
            "jpName": "S2:瞬乱縮減",
            "extend": [
                100
            ],
            "effect": "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
            "jpEffect": "別のPAやテクニックをジャストアタックするとPP消費量を12%軽減。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 672,
            "code": "LB94",
            "gid": "L",
            "name": "S2:Instant Reduction 2",
            "jpName": "S2:瞬乱縮減2",
            "extend": [
                100
            ],
            "effect": "Reduces PP consumption by 20% when Just Attacking different PAs or Techniques.",
            "jpEffect": "別のPAやテクニックをジャストアタックするとPP消費量を20%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 494,
            "code": "LB1W",
            "gid": "L",
            "name": "S2:Lightning Guard",
            "jpName": "S2:轟雷の備志",
            "extend": [
                100
            ],
            "effect": "Increase Lightning Attribute and Shock Resistance (30). Increase damage by 3% against enemies weak to Lightning.",
            "jpEffect": "雷耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 205,
            "code": "LB1Q",
            "gid": "L",
            "name": "S2:Medicinal Wisdom",
            "jpName": "S2:服薬の恵",
            "extend": [
                100
            ],
            "effect": "Restore PP upon consuming a Mate-type item (Automate OK). Effect varies based on the item consumed (10/30/60 PP for Mono/Di/Trimate).",
            "jpEffect": "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 674,
            "code": "LB87",
            "gid": "L",
            "name": "S2:Medicinal Wisdom 2",
            "jpName": "S2:服薬の恵2",
            "extend": [
                100
            ],
            "effect": "Restore PP upon consuming a Mate-type item (Automate OK). Effect varies based on the item consumed (30/50/80 PP for Mono/Di/Trimate).",
            "jpEffect": "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 182,
            "code": "LB13",
            "gid": "L",
            "name": "S2:Nature's Exhilaration",
            "jpName": "S2:花海雪の活与",
            "extend": [
                100
            ],
            "effect": "Recover 2% HP every second when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 181,
            "code": "LB12",
            "gid": "L",
            "name": "S2:Nature's Intent",
            "jpName": "S2:花海雪の志",
            "extend": [
                100
            ],
            "effect": "Increase damage by 3% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 183,
            "code": "LB14",
            "gid": "L",
            "name": "S2:Nature's Reduction",
            "jpName": "S2:花海雪の縮減",
            "extend": [
                100
            ],
            "effect": "Decrease PP consumption by 12% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 200,
            "code": "LB1L",
            "gid": "L",
            "name": "S2:Nature's Reduction 2",
            "jpName": "S2:花海雪の縮減2",
            "extend": [
                100
            ],
            "effect": "Decrease PP consumption by 14% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 180,
            "code": "LB11",
            "gid": "L",
            "name": "S2:Nature's Skill",
            "jpName": "S2:花海雪の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 20% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 188,
            "code": "LB19",
            "gid": "L",
            "name": "S2:Offensive Intent",
            "jpName": "S2:剛撃の志",
            "extend": [
                100
            ],
            "effect": "Increase damage by 2%.",
            "jpEffect": "与ダメージが2%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 197,
            "code": "LB1I",
            "gid": "L2",
            "name": "S2:Phanatical Advantage",
            "extend": [
                100,
                100,
                100
            ],
            "effect": "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
            "noEx": true,
            "jpName": "S2:狂幻の利",
            "jpEffect": "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
        },
        {
            "ref": 195,
            "code": "LB1G",
            "gid": "L",
            "name": "S2:Phantasmal Gleam",
            "jpName": "S2:幻精輝勢",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery based on the Photon Blast Gauge. Maxes at 23%.",
            "jpEffect": "フォトンブラストゲージに応じてPP自然回復量が上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 196,
            "code": "LB1H",
            "gid": "L",
            "name": "S2:Phantasmal Guardian",
            "jpName": "S2:幻精の備",
            "extend": [
                100
            ],
            "effect": "Reduce damage taken based on the Photon Blast Gauge. Maxes at 9%.",
            "jpEffect": "フォトンブラストゲージに応じて被ダメージ量が減少する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 194,
            "code": "LB1F",
            "gid": "L",
            "name": "S2:Phantasmal Radiance",
            "jpName": "S2:幻精輝剰",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery based on the Photon Blast Gauge. Maxes at 25%.",
            "jpEffect": "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 171,
            "code": "LB02",
            "gid": "L",
            "name": "S2:Photon Reduction",
            "jpName": "S2:光子縮減",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 10%.",
            "jpEffect": "PP消費量を10%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 615,
            "code": "LB2F",
            "gid": "L",
            "name": "S2:Photon Reduction 2",
            "jpName": "S2:光子縮減2",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 13%.",
            "jpEffect": "PP消費量を13%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 670,
            "code": "LB96",
            "gid": "L",
            "name": "S2:Photon Reduction 3",
            "jpName": "S2:光子縮減3",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 15%.",
            "jpEffect": "PP消費量を15%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 193,
            "code": "LB1E",
            "gid": "L",
            "name": "S2:Powering Intent",
            "jpName": "S2:強闘の志",
            "extend": [
                100
            ],
            "effect": "Increase damage dealt to bosses by 3%.",
            "jpEffect": "強敵への与ダメージが3%上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 173,
            "code": "LB04",
            "gid": "L",
            "name": "S2:Radiant Strike",
            "jpName": "S2:輝剰の撃",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 17%.",
            "jpEffect": "攻撃時のPP回復量が17%上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 204,
            "code": "LB1P",
            "gid": "L",
            "name": "S2:Radiant Strike 2",
            "jpName": "S2:輝剰の撃2",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 20%.",
            "jpEffect": "攻撃時のPP回復量が20%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 187,
            "code": "LB18",
            "gid": "L",
            "name": "S2:Radiating Grace",
            "jpName": "S2:輝勢の恵",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 17%.",
            "jpEffect": "PPの自然回復速度が17%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 622,
            "code": "LB2J",
            "gid": "L",
            "name": "S2:Rainbow's Exhilaration",
            "jpName": "S2:六色の活与",
            "extend": [
                100
            ],
            "effect": "Recover 3% HP at regular intervals while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 621,
            "code": "LB2I",
            "gid": "L",
            "name": "S2:Rainbow's Intent",
            "jpName": "S2:六色の志",
            "extend": [
                100
            ],
            "effect": "Increase Power by 5% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 209,
            "code": "LB92",
            "gid": "L",
            "name": "S2:Runner's High",
            "jpName": "S2:走者高揚",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
            "jpEffect": "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 191,
            "code": "LB1C",
            "gid": "L",
            "name": "S2:Rupturing Excess",
            "jpName": "S2:裂砕の剰",
            "extend": [
                100
            ],
            "effect": "Increase PP recovery rate by 35% when attacking breakable parts.",
            "jpEffect": "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 190,
            "code": "LB1B",
            "gid": "L",
            "name": "S2:Rupturing Intent",
            "jpName": "S2:裂砕の志",
            "extend": [
                100
            ],
            "effect": "Increase damage against breakable parts by 3%.",
            "jpEffect": "破壊可能な部位を攻撃した際、威力が3%上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 523,
            "code": "LB2D",
            "gid": "L",
            "name": "S2:Shining Guard",
            "jpName": "S2:光明の備志",
            "extend": [
                100
            ],
            "effect": "Increase Light Attribute and Panic Resistance (30). Increase damage by 3% against enemies weak to Light.",
            "jpEffect": "光耐性、パニック耐性が上昇。敵の弱点属性が光属性の時、威力上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 210,
            "code": "LB93",
            "gid": "L",
            "name": "S2:Skill Reduction",
            "jpName": "S2:技巧縮減",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 5% for 30 seconds upon hitting with a PA/Technique. Has a 33% chance to reduce PP consumption by 30% instead. Triggers 35s Recast upon activation.",
            "jpEffect": "フォトンアーツまたはテクニック命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 189,
            "code": "LB1A",
            "gid": "L",
            "name": "S2:Skilled Intent",
            "jpName": "S2:妙撃の志",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Damage by 3%.",
            "jpEffect": "クリティカル時の与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 203,
            "code": "LB1O",
            "gid": "L",
            "name": "S2:Skilled Intent 2",
            "jpName": "S2:妙撃の志2",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Damage by 4%.",
            "jpEffect": "クリティカル時の与ダメージが4%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 178,
            "code": "LB09",
            "gid": "L",
            "name": "S2:Spirited Response",
            "jpName": "S2:気輝応変",
            "extend": [
                100
            ],
            "effect": "Increases PP regeneration rate by 100% while sheathed. Reduce PP regeneration rate by 100% while unsheathed.",
            "jpEffect": "納刀・抜刀を行う事でPP回復速度が変化。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 495,
            "code": "LB1Y",
            "gid": "L",
            "name": "S2:Storm Guard",
            "jpName": "S2:暴風の備志",
            "extend": [
                100
            ],
            "effect": "Increase Wind Attribute and Mirage Resistance (30). Increase damage by 3% against enemies weak to Wind.",
            "jpEffect": "風耐性、ミラージュ耐性が上昇。敵の弱点属性が風属性の時、威力上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 170,
            "code": "LB01",
            "gid": "L",
            "name": "S2:Sturdy Recovery",
            "jpName": "S2:剛乱活与",
            "extend": [
                100
            ],
            "effect": "When attacking, has a 10% chance to restore HP equal to 1% of damage dealt. (Max: 300)",
            "jpEffect": "一定確率で与ダメージの1%をHPとして吸収。(上限300)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 184,
            "code": "LB15",
            "gid": "L",
            "name": "S2:Umbrageous Gleam",
            "jpName": "S2:月葉影の輝勢",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 185,
            "code": "LB16",
            "gid": "L",
            "name": "S2:Umbrageous Guardian",
            "jpName": "S2:月葉影の備",
            "extend": [
                100
            ],
            "effect": "Decrease damage taken by 12% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 199,
            "code": "LB1K",
            "gid": "L",
            "name": "S2:Umbrageous Melody",
            "jpName": "S2:月葉影の歌",
            "extend": [
                100
            ],
            "effect": "Increase power over time when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active. Maxes at 5% (37.5s to MAX).",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 669,
            "code": "LB2K",
            "gid": "L",
            "name": "S2:Umbrageous Melody 2",
            "jpName": "S2:月葉影の歌2",
            "extend": [
                100
            ],
            "effect": "Increase power over time while S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or S1:Black Shadow Flash are active. Maxes at 7%.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で7%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 617,
            "code": "LB1R",
            "gid": "L",
            "name": "S2:Umbrageous Radiance",
            "jpName": "S2:月葉影の輝剰",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 201,
            "code": "LB1M",
            "gid": "L",
            "name": "S2:Umbrageous Radiance 2",
            "jpName": "S2:月葉影の輝剰2",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 28% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 172,
            "code": "LB03",
            "gid": "L",
            "name": "S2:Wise Skill",
            "jpName": "S2:妙技の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 12%.",
            "jpEffect": "クリティカル率が12%上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 202,
            "code": "LB1N",
            "gid": "L",
            "name": "S2:Wise Skill 2",
            "jpName": "S2:妙技の巧2",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 15%.",
            "jpEffect": "クリティカル率が15%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LB00"
        },
        {
            "ref": 521,
            "code": "LC99",
            "gid": "L",
            "name": "S3: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S3",
            "noEx": true,
            "simCode": "LC00",
            "internalUse": true,
            "jpName": "S3:ジャンク",
            "jpEffect": "任意のS3能力を表します。"
        },
        {
            "ref": 226,
            "code": "LC1A",
            "gid": "L",
            "name": "S3:Brilliant Ruin",
            "jpName": "S3:滅域輝与",
            "extend": [
                100
            ],
            "effect": "Recover 3 PP when an enemy near you is defeated.",
            "jpEffect": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 239,
            "code": "LC90",
            "gid": "L",
            "name": "S3:Calming Exhilaration",
            "jpName": "S3:静心活与",
            "extend": [
                100
            ],
            "effect": "Recover 70 HP when you hit with a normal attack. Has a 1.2~1.3s cooldown between uses.",
            "jpEffect": "通常攻撃が命中した時HPが70回復。発動後リキャスト発生。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 227,
            "code": "LC1B",
            "gid": "L",
            "name": "S3:Cursed Radiance",
            "jpName": "S3:災転輝与",
            "extend": [
                100
            ],
            "effect": "Recovers PP by 15% when taking damage.",
            "jpEffect": "ダメージを受けた際にPPを15%回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 241,
            "code": "LC92",
            "gid": "L",
            "name": "S3:Curtailed Strike",
            "jpName": "S3:撃流縮減",
            "extend": [
                100
            ],
            "effect": "Decrease PP consumption by 1% for every 300,000 damage dealt. Maxes at 15%.",
            "jpEffect": "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 659,
            "code": "LC1Q",
            "gid": "L",
            "name": "S3:Double-Edged Sword",
            "jpName": "S3:諸刃の撃",
            "extend": [
                100
            ],
            "effect": "Deal 4% more damage but take 8% more damage when weapon is drawn.",
            "jpEffect": "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 498,
            "code": "LC2B",
            "gid": "L",
            "name": "S3:Flowing Courage",
            "jpName": "S3:時流の勇",
            "extend": [
                100
            ],
            "effect": "Cast Shifta on yourself at regular intervals (14s cooldown after doing 1 tick of Shifta).",
            "jpEffect": "一定間隔で自身にシフタを発動する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 216,
            "code": "LC06",
            "gid": "L",
            "name": "S3:Flowing Exhilaration",
            "jpName": "S3:時流活与",
            "extend": [
                100
            ],
            "effect": "Recover 40% of your maximum HP every 40s.",
            "jpEffect": "一定時間ごとにHPを40%回復する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 235,
            "code": "LC1J",
            "gid": "L",
            "name": "S3:Flowing Exhilaration 2",
            "jpName": "S3:時流活与2",
            "extend": [
                100
            ],
            "effect": "Recover 60% of your maximum HP every 40s.",
            "jpEffect": "一定時間ごとにHPを60%回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 234,
            "code": "LC1I",
            "gid": "L",
            "name": "S3:Flowing Grace",
            "jpName": "S3:時流の恵",
            "extend": [
                100
            ],
            "effect": "Regenerate 7 PP every 4 seconds.",
            "jpEffect": "4秒ごとにPPを7回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 240,
            "code": "LC91",
            "gid": "L",
            "name": "S3:Fortifying Strike",
            "jpName": "S3:撃流の備",
            "extend": [
                100
            ],
            "effect": "Decrease damage taken by 1% for<br>every 300,000 damage dealt. Maxes at 15%.",
            "jpEffect": "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 623,
            "code": "LC1S",
            "gid": "L",
            "name": "S3:Furious Inspiration",
            "jpName": "S3:猛威の奮激",
            "extend": [
                100
            ],
            "effect": "Increase Power (+4%) and Critical Hit Rate (+5%). Enhance PP efficiency <br>(10% Natural PP recovery, 15% Active PP recovery, -5% PP Consumption). <br>Effect resets when damage is taken. (180s Cooldown)",
            "jpEffect": "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 223,
            "code": "LC17",
            "gid": "L",
            "name": "S3:Guardian Armor",
            "jpName": "S3:守護の備",
            "extend": [
                100
            ],
            "effect": "Reduces damage taken by 7%.",
            "jpEffect": "被ダメージを7%軽減。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 644,
            "code": "LC1Y",
            "gid": "L",
            "name": "S3:Immediate Brilliance",
            "jpName": "S3:瞬連の輝",
            "extend": [
                100
            ],
            "effect": "Successful JA hits boost your PP recovery amount by 3%. Cannot exceed 45%. Does not end when you miss a JA.",
            "jpEffect": "JA攻撃が命中する度PP回復性能が3%上昇。最大で45%まで上昇。JA失敗時に消失しない。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 231,
            "code": "LC1F",
            "gid": "L",
            "name": "S3:Immediate Profusion",
            "jpName": "S3:瞬撃繚乱",
            "extend": [
                100
            ],
            "effect": "Raises damage by 3% when Just Attacking different PAs or Techniques.",
            "jpEffect": "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 238,
            "code": "LC89",
            "gid": "L",
            "name": "S3:Nature's Gleam",
            "jpName": "S3:花海雪の輝勢",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 233,
            "code": "LC1H",
            "gid": "L",
            "name": "S3:Nature's Gleam 2",
            "jpName": "S3:花海雪の輝勢2",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 25% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 224,
            "code": "LC18",
            "gid": "L",
            "name": "S3:Nature's Guardian",
            "jpName": "S3:花海雪の備",
            "extend": [
                100
            ],
            "effect": "Decrease damage taken by 10% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 232,
            "code": "LC1G",
            "gid": "L",
            "name": "S3:Nature's Melody",
            "jpName": "S3:花海雪の歌",
            "extend": [
                100
            ],
            "effect": "Increase damage over time when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active. Maxes at 5%= (37.5s to MAX).",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 624,
            "code": "LC1U",
            "gid": "L",
            "name": "S3:Nature's Melody 2",
            "jpName": "S3:花海雪の歌2",
            "extend": [
                100
            ],
            "effect": "Increase Power over time while S1:Red Petal Flash,<br>S1:Blue Ocean Flash, or S1:White Snow Flash are active. Maxes at 7%.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 220,
            "code": "LC14",
            "gid": "L",
            "name": "S3:Nature's Radiance",
            "jpName": "S3:花海雪の輝剰",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 28% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
            "jpEffect": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 211,
            "code": "LC01",
            "gid": "L",
            "name": "S3:Offensive Intent",
            "jpName": "S3:剛撃の志",
            "extend": [
                100
            ],
            "effect": "Increase damage by 2%.",
            "jpEffect": "与ダメージが2%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 230,
            "code": "LC1E",
            "gid": "L3",
            "name": "S3:Phanatical Advantage",
            "extend": [
                100,
                100,
                100
            ],
            "effect": "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
            "noEx": true,
            "jpName": "S3:狂幻の利",
            "jpEffect": "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。"
        },
        {
            "ref": 229,
            "code": "LC1D",
            "gid": "L",
            "name": "S3:Phantasmal Reduction",
            "jpName": "S3:幻精縮減",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption based on the Photon Blast Gauge. Maxes at 12%.",
            "jpEffect": "フォトンブラストゲージに応じてPP消費量が減少する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 222,
            "code": "LC16",
            "gid": "L",
            "name": "S3:Photon Reduction",
            "jpName": "S3:光子縮減",
            "extend": [
                100
            ],
            "effect": "PP consumption is reduced by 7%.",
            "jpEffect": "PP消費量を7%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 625,
            "code": "LC98",
            "gid": "L",
            "name": "S3:Powering Intent",
            "jpName": "S3:強闘の志",
            "extend": [
                100
            ],
            "effect": "Increase damage dealt to bosses by 4%.",
            "jpEffect": "強敵への与ダメージが4%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 213,
            "code": "LC03",
            "gid": "L",
            "name": "S3:Radiant Strike",
            "jpName": "S3:輝剰の撃",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 20%.",
            "jpEffect": "攻撃時のPP回復量が20%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 618,
            "code": "LC1P",
            "gid": "L",
            "name": "S3:Radiant Strike 2",
            "jpName": "S3:輝剰の撃2",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 23%.",
            "jpEffect": "攻撃時のPP回復量が23%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 675,
            "code": "LC97",
            "gid": "L",
            "name": "S3:Radiant Strike 3",
            "jpName": "S3:輝剰の撃3",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 35%.",
            "jpEffect": "攻撃時のPP回復量が35%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 215,
            "code": "LC05",
            "gid": "L",
            "name": "S3:Radiating Grace",
            "jpName": "S3:輝勢の恵",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 17%.",
            "jpEffect": "PPの自然回復速度が17%上昇する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 236,
            "code": "LC1K",
            "gid": "L",
            "name": "S3:Radiating Grace 2",
            "jpName": "S3:輝勢の恵2",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 20%.",
            "jpEffect": "PPの自然回復速度が20%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 628,
            "code": "LC1X",
            "gid": "L",
            "name": "S3:Rainbow's Gleam",
            "jpName": "S3:六色の輝勢",
            "extend": [
                100
            ],
            "effect": "Increase Natural PP Recovery by 40% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 627,
            "code": "LC1W",
            "gid": "L",
            "name": "S3:Rainbow's Radiance",
            "jpName": "S3:六色の輝剰",
            "extend": [
                100
            ],
            "effect": "Increase Active PP Recovery by 45% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 626,
            "code": "LC1V",
            "gid": "L",
            "name": "S3:Rainbow's Reduction",
            "jpName": "S3:六色の縮減",
            "extend": [
                100
            ],
            "effect": "Reduce PP consumption by 20% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 237,
            "code": "LC88",
            "gid": "L",
            "name": "S3:Rupturing Intent",
            "jpName": "S3:裂砕の志",
            "extend": [
                100
            ],
            "effect": "Increase damage against breakable parts by 4%.",
            "jpEffect": "破壊可能な部位を攻撃した際、威力が4%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 214,
            "code": "LC04",
            "gid": "L",
            "name": "S3:Skilled Intent",
            "jpName": "S3:妙撃の志",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Damage by 4%.",
            "jpEffect": "クリティカル時の与ダメージが4%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 619,
            "code": "LC1O",
            "gid": "L",
            "name": "S3:Skilled Intent 2",
            "jpName": "S3:妙撃の志2",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Damage by 5%.",
            "jpEffect": "クリティカル時の与ダメージが5%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 645,
            "code": "LC1Z",
            "gid": "L",
            "name": "S3:Splintering Intent",
            "jpName": "S3:裂砕妙撃の志",
            "extend": [
                100
            ],
            "effect": "Increase Power by 9% when attacking a breakable part with a Critical Hit.",
            "jpEffect": "破壊可能部位への攻撃でクリティカル発動時に威力が9%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 219,
            "code": "LC13",
            "gid": "L",
            "name": "S3:Umbrageous Exhilaration",
            "jpName": "S3:月葉影の活与",
            "extend": [
                100
            ],
            "effect": "Recover 2% HP every second when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 217,
            "code": "LC11",
            "gid": "L",
            "name": "S3:Umbrageous Intent",
            "jpName": "S3:月葉影の志",
            "extend": [
                100
            ],
            "effect": "Increase damage by 3% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 218,
            "code": "LC12",
            "gid": "L",
            "name": "S3:Umbrageous Reduction",
            "jpName": "S3:月葉影の縮減",
            "extend": [
                100
            ],
            "effect": "Decrease PP consumption by 14% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 225,
            "code": "LC19",
            "gid": "L",
            "name": "S3:Umbrageous Skill",
            "jpName": "S3:月葉影の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 20% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 212,
            "code": "LC02",
            "gid": "L",
            "name": "S3:Vital Intent",
            "jpName": "S3:活実の志",
            "extend": [
                100
            ],
            "effect": "Boosts damage by 3% while HP is 80% or more.",
            "jpEffect": "HPが80%以上の時、与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 676,
            "code": "LC96",
            "gid": "L",
            "name": "S3:Vital Intent 2",
            "jpName": "S3:活実の志2",
            "extend": [
                100
            ],
            "effect": "Boosts damage by 5% while HP is 80% or more.",
            "jpEffect": "HPが80%以上の時、与ダメージが5%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 221,
            "code": "LC15",
            "gid": "L",
            "name": "S3:Wise Skill",
            "jpName": "S3:妙技の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 12%.",
            "jpEffect": "クリティカル率が12%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 242,
            "code": "LC93",
            "gid": "L",
            "name": "S3:Wise Strike",
            "jpName": "S3:撃流の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 2% for every 300,000 damage dealt. Maxes at 30%.",
            "jpEffect": "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LC00"
        },
        {
            "ref": 594,
            "code": "LD99",
            "gid": "L",
            "name": "S4: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S4",
            "noEx": true,
            "simCode": "LD00",
            "internalUse": true,
            "jpName": "S4:ジャンク",
            "jpEffect": "任意のS4能力を表します。"
        },
        {
            "ref": 261,
            "code": "LD0P",
            "gid": "L",
            "name": "S4:Calming Intent",
            "jpName": "S4:静心の志",
            "extend": [
                100
            ],
            "effect": "Increase the power of Normal Attacks by 13%.",
            "jpEffect": "通常攻撃の威力が13%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 254,
            "code": "LD0I",
            "gid": "L",
            "name": "S4:Circuit Rotation",
            "jpName": "S4:回路輪転",
            "extend": [
                100
            ],
            "effect": "Decrease the Recast Time of Photon Flare by 20%.",
            "jpEffect": "フォトンフレアのリキャスト時間を20%軽減する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 604,
            "code": "LD0W",
            "gid": "L",
            "name": "S4:Colossal Radiance",
            "jpName": "S4:強闘輝与",
            "extend": [
                100
            ],
            "effect": "Recovers 40 PP every 10 seconds when there is a boss nearby.",
            "jpEffect": "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 248,
            "code": "LD0C",
            "gid": "L",
            "name": "S4:Cunning Strike",
            "jpName": "S4:賢勇両撃",
            "extend": [
                100
            ],
            "effect": "While in Wise Stance, increase frontal attack damage by 15%.",
            "jpEffect": "ワイズスタンス中、正面からの与ダメージが15%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 539,
            "code": "LD0V",
            "gid": "L",
            "name": "S4:Cursed Rainbow",
            "jpName": "S4:六色の災転",
            "extend": [
                100
            ],
            "effect": "Recover 500 HP upon taking 500 HP or more in damage while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 252,
            "code": "LD0G",
            "gid": "L",
            "name": "S4:Dynamic Chain",
            "jpName": "S4:鎖動強身",
            "extend": [
                100
            ],
            "effect": "When Chain Trigger is activated, gain invincibility for 5 seconds.",
            "jpEffect": "チェイントリガー発動時、5秒間無敵になる。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 605,
            "code": "LD0X",
            "gid": "L",
            "name": "S4:Evasion Training",
            "jpName": "S4:回避訓練",
            "extend": [
                100
            ],
            "effect": "Perform an evasive maneuver when the two circles overlap to gain<br>\"Successful Dodge (Counter)\" status. If you do not evade, recover 5% HP.",
            "jpEffect": "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを5%回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 256,
            "code": "LD0K",
            "gid": "L",
            "name": "S4:Gear Reduction",
            "jpName": "S4:刃機放縮",
            "extend": [
                100
            ],
            "effect": "Decrease rate of Gear Gauge depletion while Katana Gear is active. (Around 20%)",
            "jpEffect": "カタナギア解放中、ギアゲージの減少速度が低下する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 259,
            "code": "LD0N",
            "gid": "L",
            "name": "S4:Genesis Ring",
            "jpName": "S4:変素応輪",
            "extend": [
                100
            ],
            "effect": "The active Element of the Weapon changes to that of the currently equipped \"Guard\" Skill Ring.",
            "jpEffect": "装備しているガード系リングに応じて武器属性が変化する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 264,
            "code": "LD0S",
            "gid": "L",
            "name": "S4:Harmonized Rainbow",
            "jpName": "S4:六色の輝秤",
            "extend": [
                100
            ],
            "effect": "Decrease Natural PP Recovery by 30% but decrease<br>PP consumption by 30% when S1:Red Petal Flash,<br>S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 260,
            "code": "LD0O",
            "gid": "L",
            "name": "S4:Heavenly Protection",
            "jpName": "S4:天輝の守護",
            "extend": [
                100
            ],
            "effect": "Bestow Natural PP Recovery and increase PP recovery rate by 300% while Guarding.",
            "jpEffect": "ガード中PPが自然回復しPP回復速度が上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 251,
            "code": "LD0F",
            "gid": "L",
            "name": "S4:Lustrous Trap",
            "jpName": "S4:輝剰の罠",
            "extend": [
                100
            ],
            "effect": "Increase PP regenerated by Tactics Trap by 20%.",
            "jpEffect": "タクティクストラップのPP回復量が20%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 243,
            "code": "LD07",
            "gid": "L",
            "name": "S4:Marvelous Aegis",
            "jpName": "S4:瞬護輝与",
            "extend": [
                100
            ],
            "effect": "Recover 10 PP when successfully performing a Just Guard.",
            "jpEffect": "ジャストガード成功時、PPを回復する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 246,
            "code": "LD0A",
            "gid": "L",
            "name": "S4:Opposing Skill",
            "jpName": "S4:正対の巧",
            "extend": [
                100
            ],
            "effect": "During Brave Stance, frontal Critical Rate is raised by 30%.",
            "jpEffect": "ブレイブスタンス中、正面へのクリティカル率が30%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 606,
            "code": "LD0Y",
            "gid": "L",
            "name": "S4:Pursuing Radiance",
            "jpName": "S4:追蝕輝剰",
            "extend": [
                100
            ],
            "effect": "Increases active PP recovery by 60% when attacking an enemy affected<br>by a Status Effect, Jellen, or Weak Bullet.",
            "jpEffect": "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 538,
            "code": "LD0U",
            "gid": "L",
            "name": "S4:Pursuing Skill",
            "jpName": "S4:追蝕の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 50% when attacking an enemy<br>affected by Weak Bullet, Jellen, or a Status Effect.",
            "jpEffect": "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 245,
            "code": "LD09",
            "gid": "L",
            "name": "S4:Radiant Response",
            "jpName": "S4:輝器応変",
            "extend": [
                100
            ],
            "effect": "Improve Natural PP Recovery, Active PP Recovery, and reduce PP consumption<br>based on maximum PP. Maxes at 30%. ((Player's Total PP - 120)x0.1(%) of<br>Natural and Active PP Regen, and PP consumption reduction)",
            "jpEffect": "最大PPに応じて攻撃時PP回復量、PP自然回復量、PP消費軽減効果が最大で30%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 524,
            "code": "LD0T",
            "gid": "L",
            "name": "S4:Raising Pursuit",
            "jpName": "S4:累加追撃",
            "extend": [
                100
            ],
            "effect": "Upon hitting with a PA/Technique, track 30% of damage dealt within the next<br>four seconds, and add additional damage to the next<br>PA/Technique based on the damage dealt. (250,000 Max Damage) (10s Cooldown)",
            "jpEffect": "PA・テクニックの命中後4秒間の与ダメージ量に応じて、次に命中したPA・テクニックに追加ダメージが発生。(上限25万、リキャスト10秒)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 257,
            "code": "LD0L",
            "gid": "L",
            "name": "S4:Rapid-fire Arrow",
            "jpName": "S4:迅弓の撃",
            "extend": [
                100
            ],
            "effect": "When in Rapid Shoot, increase damage by 3% when equipped with a Bullet Bow.",
            "jpEffect": "ラピッドシュート中、バレットボウ装備時に与ダメージが3%上昇。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 253,
            "code": "LD0H",
            "gid": "L",
            "name": "S4:Refined Providence",
            "jpName": "S4:摂理洗練",
            "extend": [
                100
            ],
            "effect": "Increase the potency of Element Conversion.<br>(+5% on Different weapon's attribute)",
            "jpEffect": "エレメントコンバージョンが強化される。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 263,
            "code": "LD0R",
            "gid": "L",
            "name": "S4:Saint Shield",
            "jpName": "S4:聖者の盾",
            "extend": [
                100
            ],
            "effect": "Generates a barrier (-60% Damage Taken,<br>Negate Knockback) at regular intervals (every 45s).",
            "jpEffect": "一定間隔で被ダメージを60%軽減するバリアを展開。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 247,
            "code": "LD0B",
            "gid": "L",
            "name": "S4:Scything Wind",
            "jpName": "S4:鎌風重吹",
            "extend": [
                100
            ],
            "effect": "Increase Kamaitachi duration by 4 seconds.",
            "jpEffect": "カマイタチの持続時間が4秒延長される。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 629,
            "code": "LD0Z",
            "gid": "L",
            "name": "S4:Shared Ruin",
            "jpName": "S4:滅域分与",
            "extend": [
                100
            ],
            "effect": "You and your party recover HP and PP when an enemy dies within range.",
            "jpEffect": "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 262,
            "code": "LD0Q",
            "gid": "L",
            "name": "S4:Skilled Balance",
            "jpName": "S4:妙撃の秤",
            "extend": [
                100
            ],
            "effect": "Reduce Critical Hit Rate by 50% and increase Critical Hit Damage by 6%.",
            "jpEffect": "クリティカル率を50%低下し、クリティカルの威力が6%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 250,
            "code": "LD0E",
            "gid": "L",
            "name": "S4:Steadfast Courage",
            "jpName": "S4:静の胆力",
            "extend": [
                100
            ],
            "effect": "Become immune to knockback by standing still for 1s.",
            "jpEffect": "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 244,
            "code": "LD08",
            "gid": "L",
            "name": "S4:Steel Resolve",
            "jpName": "S4:鋼の決意",
            "extend": [
                100
            ],
            "effect": "Survive one fatal hit with 1 HP remaining. Does not activate if HP is at 1. Activates once per Quest.",
            "jpEffect": "致命傷を受けても一度限りだが必ずHPが1残る。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 258,
            "code": "LD0M",
            "gid": "L",
            "name": "S4:Support Extension",
            "jpName": "S4:支援限長",
            "extend": [
                100
            ],
            "effect": "The maximum duration of Shifta and Deband becomes 120 seconds.",
            "jpEffect": "シフタ・デバンドの効果時間上限を120秒に延長する。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 249,
            "code": "LD0D",
            "gid": "L",
            "name": "S4:Vampiric Strike",
            "jpName": "S4:奪命の撃",
            "extend": [
                100
            ],
            "effect": "Restore HP equal to 1% of Damage dealt (30 HP MAX).",
            "jpEffect": "攻撃時に与ダメージの1%をHPとして吸収。(上限30)",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 255,
            "code": "LD0J",
            "gid": "L",
            "name": "S4:Wand Clobber",
            "jpName": "S4:短杖強打",
            "extend": [
                100
            ],
            "effect": "Increase the performance of Wand Normal Attacks. (Attack Speed 1.1x, all hitstop negated)",
            "jpEffect": "ウォンドの通常攻撃性能が強化される。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LD00"
        },
        {
            "ref": 608,
            "code": "LE99",
            "gid": "L",
            "name": "S5: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S5",
            "noEx": true,
            "simCode": "LE00",
            "internalUse": true,
            "jpName": "S5:ジャンク",
            "jpEffect": "任意のS5能力を表します。"
        },
        {
            "ref": 677,
            "code": "LE96",
            "gid": "L",
            "name": "S5:Aegis Balance",
            "jpName": "S5:堅守の秤",
            "extend": [
                100
            ],
            "effect": "Increase Power by 4%. Reduce damage taken by 25% but consume 20 PP when taking damage. Force only.",
            "jpEffect": "威力が4%上昇。被ダメージ時PPを20消費してダメージを25%軽減する。フォース限定。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 643,
            "code": "LE97",
            "gid": "L",
            "name": "S5:Angelic Respite",
            "jpName": "S5:槍機天悠",
            "extend": [
                100
            ],
            "effect": "When the Gear Gauge is maxed, Partizan Gear will not be consumed while airborne. Increase Power by 2%. Partizan only.",
            "jpEffect": "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 599,
            "code": "LE0I",
            "gid": "L",
            "name": "S5:Anthesis Cultivation",
            "jpName": "S5:錬成萌花",
            "extend": [
                100
            ],
            "effect": "Doubles the effects of Special Abilities (Atk, Def, Dex, HP, PP bonuses only)",
            "jpEffect": "特殊能力のステータス変化を2倍にする。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 647,
            "code": "LE0Q",
            "gid": "L",
            "name": "S5:Area Support",
            "jpName": "S5:領域加勢",
            "extend": [
                100
            ],
            "effect": "Gain additional bonus effects to Critical Field and EPPR Field when either are active.<br>",
            "jpEffect": "クリティカルフィールドとエレメンタルPPリストレイトFの効果が有効時、フィールドごとに追加効果が発生する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 551,
            "code": "LE0C",
            "gid": "L",
            "name": "S5:Auxiliary Arrow",
            "jpName": "S5:追射剛矢",
            "extend": [
                100
            ],
            "effect": "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds<br>after successfully dodging an attack with Step. Bullet Bow only.",
            "jpEffect": "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 550,
            "code": "LE0B",
            "gid": "L",
            "name": "S5:Bright Escape",
            "jpName": "S5:巧避輝与",
            "extend": [
                100
            ],
            "effect": "Successfully evade an attack with Hero Step or Stylish Roll to restore PP (Restore 30PP on successful evasion, then restore 10PP every 3 seconds). Effect is negated if damage is taken. Twin Machineguns only.",
            "jpEffect": "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 552,
            "code": "LE0D",
            "gid": "L",
            "name": "S5:Calming Bullet",
            "jpName": "S5:静心杖弾",
            "extend": [
                100
            ],
            "effect": "Enhance the performance of Normal Attacks (1.35x Attack Speed) and increase the damage of Rod Shoot by 100%. Rod only.",
            "jpEffect": "通常攻撃性能が強化されロッドシュートの威力が100%上昇する。長杖限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 646,
            "code": "LE0P",
            "gid": "L",
            "name": "S5:Calming Expanse",
            "jpName": "S5:静心拡域",
            "extend": [
                100
            ],
            "effect": "Add an extra attack to Normal Attacks that has a chance to inflict Stun. Increase Power by 2%. Assault Rifles only.<br>",
            "jpEffect": "通常攻撃に範囲攻撃が追加され確率でスタン付与。威力2%上昇。長銃限定。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 648,
            "code": "LE0O",
            "gid": "L",
            "name": "S5:Calming Quartet",
            "jpName": "S5:静心四連",
            "extend": [
                100
            ],
            "effect": "Decrease the Power of Normal Attacks by 67%, but change Normal Attack into four homing shells. Launcher only.",
            "jpEffect": "通常攻撃の威力が67%低下する代わりに攻撃が4発に変化。大砲限定。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 554,
            "code": "LE0F",
            "gid": "L",
            "name": "S5:Calming Shockwave",
            "jpName": "S5:静心衝杖",
            "extend": [
                100
            ],
            "effect": "Generates a wave attack on the third Normal Attack. Negates hitstop. Increase Power by 2%. Wand only.",
            "jpEffect": "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 679,
            "code": "LE0N",
            "gid": "L",
            "name": "S5:Chained Radiance",
            "jpName": "S5:連鎖輝与",
            "extend": [
                100
            ],
            "effect": "On Chain Trigger activation, recover PP and increase Power by 3% for 60 seconds. Twin Machineguns only.",
            "jpEffect": "チェイントリガー開始時PPが回復し、60秒間威力3%上昇。双機銃限定。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 545,
            "code": "LE06",
            "gid": "L",
            "name": "S5:Evasive Meteor",
            "jpName": "S5:巧避巨拳",
            "extend": [
                100
            ],
            "effect": "Successfully evade an attack with Sway to summon a giant fist. Increase Power by 2%. Knuckles only.",
            "jpEffect": "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 544,
            "code": "LE05",
            "gid": "L",
            "name": "S5:Evasive Mirage",
            "jpName": "S5:巧避連撃",
            "extend": [
                100
            ],
            "effect": "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying. Increase Power by 2%. Double Saber only.",
            "jpEffect": "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 548,
            "code": "LE09",
            "gid": "L",
            "name": "S5:Fiery End",
            "jpName": "S5:烈終焉弾",
            "extend": [
                100
            ],
            "effect": "Enhance the performance of End Attract (increase damage by 5%, PP cost reduced to 1) with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Assault Rifle only.",
            "jpEffect": "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 549,
            "code": "LE0A",
            "gid": "L",
            "name": "S5:Fiery Zero",
            "jpName": "S5:烈零射砲",
            "extend": [
                100
            ],
            "effect": "Enhance the performance of Zero Distance (increase damage by 150%, PP cost reduced to 1) with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Launcher only.",
            "jpEffect": "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 546,
            "code": "LE07",
            "gid": "L",
            "name": "S5:Hangeki Edge",
            "jpName": "S5:反撃鋭刃",
            "extend": [
                100
            ],
            "effect": "Increase the damage of Counter Edge by 15% and Dodge Counter Bullet by 10%. Generate Braver Gear Gauge when successfully performing<br>Katana Counter. Increase Power by 2%. Katana only.",
            "jpEffect": "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが上昇。威力2%上昇。抜剣限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 630,
            "code": "LE98",
            "gid": "L",
            "name": "S5:Instant Invocation",
            "jpName": "S5:瞬術略唱",
            "extend": [
                100
            ],
            "effect": "Technique damage is decreased by 40%, but using the same element Technique with a JA substantially decreases charge time (-100%).",
            "jpEffect": "テクニックの与ダメージが常時40%減少するがテクニック使用後に同属性テクニックJAでチャージ時間大幅短縮。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 556,
            "code": "LE0H",
            "gid": "L",
            "name": "S5:Mysterious Purpose",
            "jpName": "S5:妙の巧志",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
            "jpEffect": "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 687,
            "code": "LE9Z",
            "gid": "L",
            "name": "S5:Parting Gift",
            "jpName": "S5:終撃応与",
            "extend": [
                100
            ],
            "effect": "Regenerate HP/PP when sheathing your weapon based on the amount of damage dealt when unsheathed (Max 700,000 damage, 60% HP, 100 PP). Increase Power by 2%.",
            "jpEffect": "抜刀時のダメージ量に応じて、納刀時にHPとPPを回復。威力2%上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 540,
            "code": "LE01",
            "gid": "L",
            "name": "S5:Release Parry",
            "jpName": "S5:瞬護解放",
            "extend": [
                100
            ],
            "effect": "Performance changes when Just Guarding with a Weapon Action. Sword only.",
            "jpEffect": "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 555,
            "code": "LE0G",
            "gid": "L",
            "name": "S5:Rhythmic Pursuer",
            "jpName": "S5:追災律動",
            "extend": [
                100
            ],
            "effect": "Boost the potency of Elemental Burst by 30% and automatically<br>activate Elemental Burst when using a PA derivative. Jet Boots only.",
            "jpEffect": "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 542,
            "code": "LE03",
            "gid": "L",
            "name": "S5:Rushing Bolt",
            "jpName": "S5:瞬駆突貫",
            "extend": [
                100
            ],
            "effect": "Inflict damage (300% Power) while running. Unleash a shockwave attack (1000% Power) when you stop running. Increase Power by 2%. Partizan only.",
            "jpEffect": "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 543,
            "code": "LE04",
            "gid": "L",
            "name": "S5:Shining Cyclone",
            "jpName": "S5:輝境の旋",
            "extend": [
                100
            ],
            "effect": "PP recovery and consumption changes when your PP falls below 50% of maximum. Twin Daggers only.",
            "jpEffect": "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 553,
            "code": "LE0E",
            "gid": "L",
            "name": "S5:Speedy Support",
            "jpName": "S5:急速補助",
            "extend": [
                100
            ],
            "effect": "Shorten the charge time of Support Techniques. The power of Zondeel is reduced (-34%). Talis only.",
            "jpEffect": "補助テクニックのチャージ時間を短縮。ゾンディールの威力減少。導具限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 678,
            "code": "LE0R",
            "gid": "L",
            "name": "S5:Swift Radiance",
            "jpName": "S5:回避輝与",
            "extend": [
                100
            ],
            "effect": "Stop Natural PP Regeneration. Increase Active PP Recovery by 50% and restore 100 PP upon successfully evading an attack with Sway or Step. Increase Power by 2%. Knuckles only.",
            "jpEffect": "PP自然回復が停止。攻撃時PP回復量が50%上昇、回避成功時PPが100回復。威力2%上昇。鋼拳限定。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 632,
            "code": "LE0K",
            "gid": "L",
            "name": "S5:Tethered Eclipse",
            "jpName": "S5:追蝕の縛",
            "extend": [
                100
            ],
            "effect": "Boosts damage by 3% against enemies inflicted with a status effect. Grant a 40% chance to inflict Bind against enemies inflicted with a status effect.",
            "jpEffect": "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 547,
            "code": "LE08",
            "gid": "L",
            "name": "S5:Thundering Pursuit",
            "jpName": "S5:雷光追撃",
            "extend": [
                100
            ],
            "effect": "When using a PA, lightning-charged Photon Blades are generated. (Power: 200%). Dual Blades only.",
            "jpEffect": "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 541,
            "code": "LE02",
            "gid": "L",
            "name": "S5:Unrivaled Parry",
            "jpName": "S5:瞬護無双",
            "extend": [
                100
            ],
            "effect": "Consume no Gear for 15s after performing a Just Guard. Increase Power by 2%. Wired Lance only.",
            "jpEffect": "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。",
            "noEx": true,
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 631,
            "code": "LE0J",
            "gid": "L",
            "name": "S5:Vigorous Response",
            "jpName": "S5:活器応変",
            "extend": [
                100
            ],
            "effect": "Grants a bonus when your Max HP is at 1,000. Gain additional bonuses every 500 Max HP past 1000, up to 3000 HP.<br>",
            "jpEffect": "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LE00"
        },
        {
            "ref": 609,
            "code": "LF99",
            "gid": "L",
            "name": "S6: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S6",
            "noEx": true,
            "simCode": "LF00",
            "internalUse": true,
            "jpName": "S6:ジャンク",
            "jpEffect": "任意のS6能力を表します。"
        },
        {
            "ref": 570,
            "code": "LF0N",
            "gid": "L",
            "name": "S6:Angelic Wings",
            "jpName": "S6:翔天の翼",
            "extend": [
                100
            ],
            "effect": "Increases Jump Power.",
            "jpEffect": "ジャンプ力が上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 572,
            "code": "LF0Q",
            "gid": "L",
            "name": "S6:Battle Readiness",
            "jpName": "S6:修羅の備",
            "extend": [
                100
            ],
            "effect": "When your HP is at 50% or lower, damage taken is reduced by 40%. Resets after a brief cooldown.",
            "jpEffect": "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 568,
            "code": "LF0L",
            "gid": "L",
            "name": "S6:Brilliant Ruin",
            "jpName": "S6:滅域輝与",
            "extend": [
                100
            ],
            "effect": "Recover 5 PP when an enemy near you is defeated.",
            "jpEffect": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 571,
            "code": "LF0P",
            "gid": "L",
            "name": "S6:Evasion Whistle",
            "jpName": "S6:回避の口笛",
            "extend": [
                100
            ],
            "effect": "Dodging will cause your Pet to return back to you.",
            "jpEffect": "回避行動に合わせてペットが戻ってくる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 562,
            "code": "LF0F",
            "gid": "L",
            "name": "S6:Guardian Armor",
            "jpName": "S6:守護の備",
            "extend": [
                100
            ],
            "effect": "Reduces damage taken by 7%.",
            "jpEffect": "被ダメージを7%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 559,
            "code": "LF0C",
            "gid": "L",
            "name": "S6:Guardian's Essence",
            "jpName": "S6:機魂の守護",
            "extend": [
                100
            ],
            "effect": "Hunter Weapon Gear and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\".",
            "jpEffect": "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 557,
            "code": "LF0A",
            "gid": "L",
            "name": "S6:Heroic Howl",
            "jpName": "S6:英雄咆哮",
            "extend": [
                100
            ],
            "effect": "Enhances the effect of Hero Boost's damage bonus accumulation rate. Does not work with the \"Heroic Victory\" potential.",
            "jpEffect": "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 566,
            "code": "LF0J",
            "gid": "L",
            "name": "S6:HP Up",
            "jpName": "S6:活器上昇",
            "extend": [
                100
            ],
            "effect": "HP(+40)",
            "jpEffect": "HP(+40)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 560,
            "code": "LF0D",
            "gid": "L",
            "name": "S6:Ironclad Illness",
            "jpName": "S6:癒蝕頑強",
            "extend": [
                100
            ],
            "effect": "Become massive for 60 seconds after becoming affected by a status effect.",
            "jpEffect": "状態異常になってから60秒間、頑強になる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 607,
            "code": "LF0O",
            "gid": "L",
            "name": "S6:Long Night Star",
            "jpName": "S6:長夜の明星",
            "extend": [
                100
            ],
            "effect": "Reduce Etoile Boost's decay per second by 50%.",
            "jpEffect": "エトワールブーストの秒間軽減減少率を50％緩和する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 633,
            "code": "LF0S",
            "gid": "L",
            "name": "S6:Overlimit",
            "jpName": "S6:超限活器",
            "extend": [
                100
            ],
            "effect": "Increases maximum HP by 50% while Limit Break is active.",
            "jpEffect": "リミットブレイク発動中最大HPが50%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 567,
            "code": "LF0K",
            "gid": "L",
            "name": "S6:PP Up",
            "jpName": "S6:輝器上昇",
            "extend": [
                100
            ],
            "effect": "PP(+4)",
            "jpEffect": "PP(+4)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 564,
            "code": "LF0H",
            "gid": "L",
            "name": "S6:R-ATK Up",
            "jpName": "S6:射撃上昇",
            "extend": [
                100
            ],
            "effect": "R-ATK(+30)",
            "jpEffect": "射撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 681,
            "code": "LF97",
            "gid": "L",
            "name": "S6:Rainbow's Shield",
            "jpName": "S6:六色の盾",
            "extend": [
                100
            ],
            "effect": "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Grants a chance (~20%) to drastically reduce<br>damage taken. (Reduced to 1 damage).",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中、一定確率で被ダメージを大幅に軽減する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 680,
            "code": "LF98",
            "gid": "L",
            "name": "S6:Raising Expanse",
            "jpName": "S6:累加拡域",
            "extend": [
                100
            ],
            "effect": "Alters the range of Raising Pursuit's bonus attack damage. (15m AoE, not nullified on part break, not treated as an attack from behind)",
            "jpEffect": "累加追撃による追加ダメージが範囲攻撃に変化する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 569,
            "code": "LF0M",
            "gid": "L",
            "name": "S6:Readying Guard",
            "jpName": "S6:守護乱備",
            "extend": [
                100
            ],
            "effect": "Gain a 10% chance to reduce damage taken by 70%.",
            "jpEffect": "10％の確率で被ダメージを70％軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 563,
            "code": "LF0G",
            "gid": "L",
            "name": "S6:S-ATK Up",
            "jpName": "S6:打撃上昇",
            "extend": [
                100
            ],
            "effect": "S-ATK(+30)",
            "jpEffect": "打撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 558,
            "code": "LF0B",
            "gid": "L",
            "name": "S6:Soaring Ballet",
            "jpName": "S6:翔機天舞",
            "extend": [
                100
            ],
            "effect": "Bouncer Weapon Gear fills while airborne. No effect if using weapon with \"Angelic Guidance\".",
            "jpEffect": "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 565,
            "code": "LF0I",
            "gid": "L",
            "name": "S6:T-ATK Up",
            "jpName": "S6:法撃上昇",
            "extend": [
                100
            ],
            "effect": "T-ATK(+30)",
            "jpEffect": "法撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 561,
            "code": "LF0E",
            "gid": "L",
            "name": "S6:Wise Skill",
            "jpName": "S6:妙技の巧",
            "extend": [
                100
            ],
            "effect": "Increase Critical Hit Rate by 15%.",
            "jpEffect": "クリティカル率が15％上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 649,
            "code": "LF0T",
            "gid": "L",
            "name": "S6:Wondrous Encore",
            "jpName": "S6:奇跡再演",
            "extend": [
                100
            ],
            "effect": "Reduce Hate Generation while Showtime is active. If the user is attacked while Showtime is active, reduce damage taken and retain One More Time once per Showtime.",
            "jpEffect": "ショウタイム発動時のヘイト上昇率が軽減し、一度だけ被ダメージを軽減してワンモアタイムの発動条件を維持する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LF00"
        },
        {
            "ref": 610,
            "code": "LG99",
            "gid": "L",
            "name": "S7: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S7",
            "noEx": true,
            "simCode": "LG00",
            "internalUse": true,
            "jpName": "S7:ジャンク",
            "jpEffect": "任意のS7能力を表します。"
        },
        {
            "ref": 688,
            "code": "LG9Z",
            "gid": "L",
            "name": "S7:Amended Movement",
            "jpName": "S7:注技縮地",
            "extend": [
                100
            ],
            "effect": "Boosts movement speed while charging PAs.",
            "jpEffect": "PAチャージ中の移動速度を上昇。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 582,
            "code": "LG0J",
            "gid": "L",
            "name": "S7:Attack Up",
            "jpName": "S7:攻撃上昇",
            "extend": [
                100
            ],
            "effect": "ATK(+25)",
            "jpEffect": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 583,
            "code": "LG0K",
            "gid": "L",
            "name": "S7:Attack Up 2",
            "jpName": "S7:攻撃上昇2",
            "extend": [
                100
            ],
            "effect": "ATK(+45)",
            "jpEffect": "打撃力(+45)<br>射撃力(+45)<br>法撃力(+45)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 650,
            "code": "LG0P",
            "gid": "L",
            "name": "S7:Descried Warrior",
            "jpName": "S7:視敵無双",
            "extend": [
                100
            ],
            "effect": "Increase Power by 1%. Reduce damage taken from enemies targeting you by 15%.",
            "jpEffect": "自身を狙う敵に対して威力1%上昇し被ダメージ15%軽減。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 573,
            "code": "LG0A",
            "gid": "L",
            "name": "S7:Glowing Grace",
            "jpName": "S7:輝静の恵",
            "extend": [
                100
            ],
            "effect": "Recovers 4 PP per second when standing still for longer than 1 second.",
            "jpEffect": "1秒間静止状態が続いた時、ppが1秒ごとに4回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 577,
            "code": "LG0E",
            "gid": "L",
            "name": "S7:HP Up",
            "jpName": "S7:活器上昇",
            "extend": [
                100
            ],
            "effect": "HP(+40)",
            "jpEffect": "HP(+40)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 600,
            "code": "LG0M",
            "gid": "L",
            "name": "S7:Increased Efficiency",
            "jpName": "S7:薬効増大",
            "extend": [
                100
            ],
            "effect": "Boost the effect of recovery items by 30%.",
            "jpEffect": "回復アイテムの効果を30%上昇させる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 601,
            "code": "LG0N",
            "gid": "L",
            "name": "S7:Mind Merge",
            "jpName": "S7:以心伝心",
            "extend": [
                100
            ],
            "effect": "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\".",
            "jpEffect": "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 578,
            "code": "LG0F",
            "gid": "L",
            "name": "S7:PP Up",
            "jpName": "S7:輝器上昇",
            "extend": [
                100
            ],
            "effect": "PP(+4)",
            "jpEffect": "PP(+4)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 575,
            "code": "LG0C",
            "gid": "L",
            "name": "S7:R-ATK Up",
            "jpName": "S7:射撃上昇",
            "extend": [
                100
            ],
            "effect": "R-ATK(+30)",
            "jpEffect": "射撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 580,
            "code": "LG0H",
            "gid": "L",
            "name": "S7:R-ATK Up 2",
            "jpName": "S7:射撃上昇2",
            "extend": [
                100
            ],
            "effect": "R-ATK(+50)",
            "jpEffect": "射撃力(+50)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 682,
            "code": "LG98",
            "gid": "L",
            "name": "S7:Rainbow's Skill",
            "jpName": "S7:六色の巧",
            "extend": [
                100
            ],
            "effect": "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Increases critical hit rate. (30%)",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中、クリティカル率が30%上昇する。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 574,
            "code": "LG0B",
            "gid": "L",
            "name": "S7:S-ATK Up",
            "jpName": "S7:打撃上昇",
            "extend": [
                100
            ],
            "effect": "S-ATK(+30)",
            "jpEffect": "打撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 579,
            "code": "LG0G",
            "gid": "L",
            "name": "S7:S-ATK Up 2",
            "jpName": "S7:打撃上昇2",
            "extend": [
                100
            ],
            "effect": "S-ATK(+50)",
            "jpEffect": "打撃力(+50)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 634,
            "code": "LG0O",
            "gid": "L",
            "name": "S7:Sentinel's Gift",
            "jpName": "S7:法護の与",
            "extend": [
                100
            ],
            "effect": "Upon a successful Tech Charge Parry, recover 5% HP and 10 PP.",
            "jpEffect": "テックCパリング成功時HPを5%回復しPPを10回復。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 576,
            "code": "LG0D",
            "gid": "L",
            "name": "S7:T-ATK Up",
            "jpName": "S7:法撃上昇",
            "extend": [
                100
            ],
            "effect": "T-ATK(+30)",
            "jpEffect": "法撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 581,
            "code": "LG0I",
            "gid": "L",
            "name": "S7:T-ATK Up 2",
            "jpName": "S7:法撃上昇2",
            "extend": [
                100
            ],
            "effect": "T-ATK(+50)",
            "jpEffect": "法撃力(+50)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 584,
            "code": "LG0L",
            "gid": "L",
            "name": "S7:Zenith Impact",
            "jpName": "S7:瞬撃の極",
            "extend": [
                100
            ],
            "effect": "Gain a 10% chance to stun the enemy<br>with a Just Attack.",
            "jpEffect": "ジャストアタック時に10%の確率で対象をスタンさせる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LG00"
        },
        {
            "ref": 611,
            "code": "LH99",
            "gid": "L",
            "name": "S8: Placeholder",
            "extend": [
                100
            ],
            "effect": "Placeholder - S8",
            "noEx": true,
            "simCode": "LH00",
            "internalUse": true,
            "jpName": "S8:ジャンク",
            "jpEffect": "任意のS8能力を表します。"
        },
        {
            "ref": 602,
            "code": "LH0J",
            "gid": "L",
            "name": "S8:High-Minded",
            "jpName": "S8:一念滞空",
            "extend": [
                100
            ],
            "effect": "Reduce falling speed while charging a<br>Technique in mid-air.",
            "jpEffect": "空中でテクニックをチャージ中に落下速度が遅くなる。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 590,
            "code": "LH0F",
            "gid": "L",
            "name": "S8:HP Up",
            "jpName": "S8:活器上昇",
            "extend": [
                100
            ],
            "effect": "HP(+40)",
            "jpEffect": "HP(+40)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 592,
            "code": "LH0H",
            "gid": "L",
            "name": "S8:HP Up 2",
            "jpName": "S8:活器上昇2",
            "extend": [
                100
            ],
            "effect": "HP(+60)",
            "jpEffect": "HP(+60)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 591,
            "code": "LH0G",
            "gid": "L",
            "name": "S8:PP Up",
            "jpName": "S8:輝器上昇",
            "extend": [
                100
            ],
            "effect": "PP(+4)",
            "jpEffect": "PP(+4)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 593,
            "code": "LH0I",
            "gid": "L",
            "name": "S8:PP Up 2",
            "jpName": "S8:輝器上昇2",
            "extend": [
                100
            ],
            "effect": "PP(+6)",
            "jpEffect": "PP(+6)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 588,
            "code": "LH0D",
            "gid": "L",
            "name": "S8:R-ATK Up",
            "jpName": "S8:射撃上昇",
            "extend": [
                100
            ],
            "effect": "R-ATK(+30)",
            "jpEffect": "射撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 683,
            "code": "LH98",
            "gid": "L",
            "name": "S8:Rainbow's Decay",
            "jpName": "S8:六色の蝕",
            "extend": [
                100
            ],
            "effect": "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Makes attacks inflict random status effects.",
            "jpEffect": "花・海・葉・月・雪・影のいずれかが発動中、攻撃時にランダムな状態異常にする。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 587,
            "code": "LH0C",
            "gid": "L",
            "name": "S8:S-ATK Up",
            "jpName": "S8:打撃上昇",
            "extend": [
                100
            ],
            "effect": "S-ATK(+30)",
            "jpEffect": "打撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 585,
            "code": "LH0A",
            "gid": "L",
            "name": "S8:Sky Dance's Boon",
            "jpName": "S8:舞空の援",
            "extend": [
                100
            ],
            "effect": "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds.",
            "jpEffect": "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 586,
            "code": "LH0B",
            "gid": "L",
            "name": "S8:Strong Potency",
            "jpName": "S8:服薬強身",
            "extend": [
                100
            ],
            "effect": "Makes you temporarily invincible while<br>drinking a -mate item.",
            "jpEffect": "自身でメイト系アイテム使用時、一定時間無敵。",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "ref": 589,
            "code": "LH0E",
            "gid": "L",
            "name": "S8:T-ATK Up",
            "jpName": "S8:法撃上昇",
            "extend": [
                100
            ],
            "effect": "T-ATK(+30)",
            "jpEffect": "法撃力(+30)",
            "noEx": true,
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": true,
            "simCode": "LH00"
        },
        {
            "name": "Sakura Fever",
            "jpName": "サクラ・フィーバー",
            "effect": "S-DEF(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃防御(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0B",
            "code": "TD0B",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 401
        },
        {
            "name": "Sansan Fever",
            "jpName": "サンサン・フィーバー",
            "effect": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃力(+5)<br>射撃力(+5)<br>法撃力(+5)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0D",
            "code": "TD0D",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 403
        },
        {
            "name": "Sentence Arma",
            "jpName": "センテンス・アルマ",
            "effect": "S-ATK(+20),<br>HP(+20),<br>PP(+3)",
            "jpEffect": "打撃力(+20)<br>HP(+20)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YA05",
            "code": "YA05",
            "gid": "AC",
            "ref": 417
        },
        {
            "name": "Sentence Magia",
            "jpName": "センテンス・マギア",
            "effect": "T-ATK(+20),<br>HP(+20),<br>PP(+3)",
            "jpEffect": "法撃力(+20)<br>HP(+20)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YA25",
            "code": "YA25",
            "gid": "AC",
            "ref": 421
        },
        {
            "name": "Sentence Power",
            "jpName": "センテンス・パワー",
            "effect": "S-ATK(+20),<br>PP(+4)",
            "jpEffect": "打撃力(+20)<br>PP(+4)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "YA01",
            "code": "YA01",
            "gid": "AC",
            "ref": 416
        },
        {
            "name": "Sentence Receptor",
            "jpName": "センテンスレセプター",
            "effect": "Boosts transfer of Sentence affixes<br>ALL(+10)",
            "jpEffect": "センテンス系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XD01",
            "code": "XD01",
            "gid": "GB",
            "ref": 455
        },
        {
            "name": "Sentence Shoot",
            "jpName": "センテンス・シュート",
            "effect": "R-ATK(+20),<br>PP(+4)",
            "jpEffect": "射撃力(+20)<br>PP(+4)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "YA11",
            "code": "YA11",
            "gid": "AC",
            "ref": 418
        },
        {
            "name": "Sentence Tech",
            "jpName": "センテンス・テクニック",
            "effect": "T-ATK(+20),<br>PP(+4)",
            "jpEffect": "法撃力(+20)<br>PP(+4)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "YA21",
            "code": "YA21",
            "gid": "AC",
            "ref": 420
        },
        {
            "name": "Sentence Tiro",
            "jpName": "センテンス・ティロ",
            "effect": "R-ATK(+20),<br>HP(+20),<br>PP(+3)",
            "jpEffect": "射撃力(+20)<br>HP(+20)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YA15",
            "code": "YA15",
            "gid": "AC",
            "ref": 419
        },
        {
            "name": "Sentence Triple",
            "jpName": "センテンス・トリプル",
            "effect": "S-ATK(+30)<br>,R-ATK(+30)<br>,T-ATK(+30)",
            "jpEffect": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "YA31",
            "code": "YA31",
            "gid": "AC",
            "ref": 422
        },
        {
            "name": "Shiva Glare",
            "jpName": "シバ・グレア",
            "effect": "R-ATK(+30)<br>T-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+20)<br>HP(+20)<br>PP(+2)",
            "jpEffect": "射撃力(+30)<br>法撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+2)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN08",
            "code": "TN08",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Photoner Glare",
            "ref": 652
        },
        {
            "name": "Shock I",
            "jpName": "ショックⅠ",
            "effect": "Grants Shock Lv1",
            "jpEffect": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv1を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JC01",
            "code": "JC01",
            "gid": "DB",
            "lvup": "JC02",
            "extend": [
                60,
                80,
                100
            ],
            "status": 3,
            "ref": 113
        },
        {
            "name": "Shock II",
            "jpName": "ショックⅡ",
            "effect": "Grants Shock Lv2",
            "jpEffect": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv2を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JC02",
            "code": "JC02",
            "gid": "DB",
            "lvup": "JC03",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                60,
                80
            ],
            "status": 3,
            "ref": 114
        },
        {
            "name": "Shock III",
            "jpName": "ショックⅢ",
            "effect": "Grants Shock Lv3",
            "jpEffect": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv3を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JC03",
            "code": "JC03",
            "gid": "DB",
            "lvup": "JC04",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 115
        },
        {
            "name": "Shock IV",
            "jpName": "ショックⅣ",
            "effect": "Grants Shock Lv4",
            "jpEffect": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv4を付与する",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JC04",
            "code": "JC04",
            "gid": "DB",
            "lvup": "JC05",
            "extend": [
                20,
                30,
                50
            ],
            "generate": [
                20,
                40
            ],
            "status": 3,
            "ref": 116
        },
        {
            "name": "Shock Resist I",
            "jpName": "ショックレジストⅠ",
            "effect": "Lightning Resist(+3)",
            "jpEffect": "雷耐性(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HK01",
            "code": "HK01",
            "gid": "DA",
            "lvup": "HK02",
            "extend": [
                100
            ],
            "status": 2,
            "ref": 78
        },
        {
            "name": "Shock Resist II",
            "jpName": "ショックレジストⅡ",
            "effect": "Lightning Resist(+4)",
            "jpEffect": "雷耐性(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HK02",
            "code": "HK02",
            "gid": "DA",
            "lvup": "HK03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 2,
            "ref": 79
        },
        {
            "name": "Shock Resist III",
            "jpName": "ショックレジストⅢ",
            "effect": "Lightning Resist(+5)",
            "jpEffect": "雷耐性(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HK03",
            "code": "HK03",
            "gid": "DA",
            "lvup": "HK04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 2,
            "ref": 80
        },
        {
            "name": "Shock Resist IV",
            "jpName": "ショックレジストⅣ",
            "effect": "Lightning Resist(+6)",
            "jpEffect": "雷耐性(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HK04",
            "code": "HK04",
            "gid": "DA",
            "lvup": "HK05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 2,
            "ref": 81
        },
        {
            "name": "Shock Resist V",
            "jpName": "ショックレジストⅤ",
            "effect": "Lightning Resist(+7)",
            "jpEffect": "雷耐性(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HK05",
            "code": "HK05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 2,
            "ref": 82
        },
        {
            "name": "Shock V",
            "jpName": "ショックⅤ",
            "effect": "Grants Shock Lv5",
            "jpEffect": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv5を付与する",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "JC05",
            "code": "JC05",
            "gid": "DB",
            "extend": [
                10,
                20,
                40
            ],
            "generate": [
                10,
                30
            ],
            "status": 3,
            "ref": 117
        },
        {
            "name": "Shoot Boost",
            "jpName": "シュート・ブースト",
            "effect": "R-ATK(+25)",
            "jpEffect": "射撃力(+25)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 465,
            "code": "XI05"
        },
        {
            "name": "Shoot I",
            "jpName": "シュートⅠ",
            "effect": "R-ATK(+10)",
            "jpEffect": "射撃力(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AB01",
            "code": "AB01",
            "gid": "AA",
            "lvup": "AB02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 6
        },
        {
            "name": "Shoot II",
            "jpName": "シュートⅡ",
            "effect": "R-ATK(+20)",
            "jpEffect": "射撃力(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AB02",
            "code": "AB02",
            "gid": "AA",
            "lvup": "AB03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 7
        },
        {
            "name": "Shoot III",
            "jpName": "シュートⅢ",
            "effect": "R-ATK(+30)",
            "jpEffect": "射撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AB03",
            "code": "AB03",
            "gid": "AA",
            "lvup": "AB04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 8
        },
        {
            "name": "Shoot IV",
            "jpName": "シュートⅣ",
            "effect": "R-ATK(+35)",
            "jpEffect": "射撃力(+35)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AB04",
            "code": "AB04",
            "gid": "AA",
            "lvup": "AB05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 9
        },
        {
            "name": "Shoot V",
            "jpName": "シュートⅤ",
            "effect": "R-ATK(+40)",
            "jpEffect": "射撃力(+40)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AB05",
            "code": "AB05",
            "gid": "AA",
            "lvup": "AB06",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 10
        },
        {
            "name": "Shoot VI",
            "jpName": "シュートⅥ",
            "effect": "R-ATK(+45)",
            "jpEffect": "射撃力(+45)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "AB06",
            "code": "AB06",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 11
        },
        {
            "name": "Shot Resist I",
            "jpName": "ショットレジストⅠ",
            "effect": "Range Resist(+3)",
            "jpEffect": "射撃軽減(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HB01",
            "code": "HB01",
            "gid": "DA",
            "lvup": "HB02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 58
        },
        {
            "name": "Shot Resist II",
            "jpName": "ショットレジストⅡ",
            "effect": "Range Resist(+4)",
            "jpEffect": "射撃軽減(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HB02",
            "code": "HB02",
            "gid": "DA",
            "lvup": "HB03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 59
        },
        {
            "name": "Shot Resist III",
            "jpName": "ショットレジストⅢ",
            "effect": "Range Resist(+5)",
            "jpEffect": "射撃軽減(+5)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HB03",
            "code": "HB03",
            "gid": "DA",
            "lvup": "HB04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 60
        },
        {
            "name": "Shot Resist IV",
            "jpName": "ショットレジストⅣ",
            "effect": "Range Resist(+6)",
            "jpEffect": "射撃軽減(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HB04",
            "code": "HB04",
            "gid": "DA",
            "lvup": "HB05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 61
        },
        {
            "name": "Shot Resist V",
            "jpName": "ショットレジストⅤ",
            "effect": "Range Resist(+7)",
            "jpEffect": "射撃軽減(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HB05",
            "code": "HB05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 62
        },
        {
            "name": "Shrayda Soul",
            "jpName": "シュレイダ・ソール",
            "effect": "T-DEF(+30),<br>HP(+10),<br>PP(+3)",
            "jpEffect": "法撃防御(+30)<br>HP(+10)<br>PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RJ22",
            "code": "RJ22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "HC",
                "JA"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 303
        },
        {
            "name": "Signo Soul",
            "jpName": "シグノ・ソール",
            "effect": "DEX(+30),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "技量(+30)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RE21",
            "code": "RE21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD",
                "EA",
                "JD"
            ],
            "rel": "soul",
            "ref": 292
        },
        {
            "name": "Sinow Soul",
            "jpName": "シノワ・ソール",
            "effect": "S-ATK(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)",
            "jpEffect": "打撃力(+5)<br>技量(+30)<br>HP(+25)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RE51",
            "code": "RE51",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AD",
                "EA",
                "JD"
            ],
            "rel": "soul",
            "ref": 295
        },
        {
            "name": "Siorg Soul",
            "jpName": "ジオーグ・ソール",
            "effect": "R-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "射撃力(+35)<br>技量(+5)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RB32",
            "code": "RB32",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "TA"
            ],
            "rel": "soul",
            "ref": 281
        },
        {
            "name": "Slayer/Armor Type",
            "jpName": "スレイヤー／機甲種",
            "effect": "Boost damage against Lillipa Mechs.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PH11",
            "code": "VQ01",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 517
        },
        {
            "name": "Slayer/Beast Type",
            "jpName": "スレイヤー／原生種",
            "effect": "Boost damage against Naberius Natives.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "原生種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PI12",
            "code": "VQ02",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 518
        },
        {
            "name": "Slayer/Darkers",
            "jpName": "スレイヤー／ダーカー",
            "effect": "Boost damage against Darkers.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "ダーカー種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PM16",
            "code": "PM16",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 598
        },
        {
            "name": "Slayer/Dragonkin",
            "jpName": "スレイヤー／龍族種",
            "effect": "Boost damage against Dragonkin.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "龍族種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PN17",
            "code": "PN17",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 640
        },
        {
            "name": "Slayer/Kuronite Type",
            "jpName": "スレイヤー／黒の民",
            "effect": "Boost damage against Kuronites.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "黒の民のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PK14",
            "code": "PK14",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 596
        },
        {
            "name": "Slayer/Luminmech",
            "jpName": "スレイヤー／閃機種",
            "effect": "Boost damage against Luminmech.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "閃機種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PO18",
            "code": "PO18",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 641
        },
        {
            "name": "Slayer/Ocean Type",
            "jpName": "スレイヤー／海王種",
            "effect": "Boost damage against Wopal Oceanids.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "海王種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PJ13",
            "code": "PJ13",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 529
        },
        {
            "name": "Slayer/Phantoms Type",
            "jpName": "スレイヤー／幻創種",
            "effect": "Boost damage against Phantoms.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
            "jpEffect": "幻創種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "PL15",
            "code": "PL15",
            "gid": "EC",
            "extend": [
                0,
                10,
                20
            ],
            "ref": 597
        },
        {
            "name": "Snow Soul",
            "jpName": "スノウ・ソール",
            "effect": "S-DEF(+30),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "打撃防御(+30)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RH21",
            "code": "RH21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EA",
                "HJ"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 296
        },
        {
            "name": "Soma Soul",
            "jpName": "ソーマ・ソール",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>PP(+2)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROA3",
            "code": "ROA3",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EB",
                "HI"
            ],
            "rel": "soul",
            "ref": 307
        },
        {
            "name": "Sonic Fever",
            "jpName": "ソニック・フィーバー",
            "effect": "S-ATK(+10),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "打撃力(+10)<br>射撃防御(+10)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0C",
            "code": "TD0C",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 402
        },
        {
            "name": "Soul Catalyst",
            "jpName": "ソール・カタリスト",
            "effect": "HP(+10),<br>PP(+1)",
            "jpEffect": "HP(+10)<br>PP(+1)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VJ01",
            "code": "VJ01",
            "gid": "CA",
            "extend": [
                0,
                10,
                30
            ],
            "tooltip": "Made from: Elder Soul, Loser Soul, Apprentice Soul,<br>Double Soul, Persona Soul<br>Used for: Astral Soul",
            "ref": 443
        },
        {
            "name": "Soul Receptor",
            "jpName": "ソールレセプター",
            "effect": "Greatly increases Soul affix rate",
            "jpEffect": "ソール系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "XA01",
            "code": "XA01",
            "gid": "GB",
            "ref": 452
        },
        {
            "name": "Spirita Alpha",
            "jpName": "スピリタ・アルファ",
            "effect": "DEX(+30),<br>PP(+3)",
            "jpEffect": "技量(+30)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TF01",
            "code": "TF01",
            "gid": "AC",
            "extend": [
                30,
                50,
                60,
                80,
                100
            ],
            "ref": 356
        },
        {
            "name": "Spirita Boost",
            "jpName": "スピリタ・ブースト",
            "effect": "PP(+5)",
            "jpEffect": "PP(+5)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 463,
            "code": "XI03"
        },
        {
            "name": "Spirita I",
            "jpName": "スピリタⅠ",
            "effect": "PP(+2)",
            "jpEffect": "PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EB01",
            "code": "EB01",
            "gid": "AA",
            "lvup": "EB02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 43
        },
        {
            "name": "Spirita II",
            "jpName": "スピリタⅡ",
            "effect": "PP(+3)",
            "jpEffect": "PP(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EB02",
            "code": "EB02",
            "gid": "AA",
            "lvup": "EB03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 44
        },
        {
            "name": "Spirita III",
            "jpName": "スピリタⅢ",
            "effect": "PP(+4)",
            "jpEffect": "PP(+4)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EB03",
            "code": "EB03",
            "gid": "AA",
            "lvup": "EB04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 45
        },
        {
            "name": "Spirita IV",
            "jpName": "スピリタⅣ",
            "effect": "PP(+5)",
            "jpEffect": "PP(+5)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EB04",
            "code": "EB04",
            "gid": "AA",
            "lvup": "EB05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 46
        },
        {
            "name": "Spirita V",
            "jpName": "スピリタⅤ",
            "effect": "PP(+6)",
            "jpEffect": "PP(+6)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EB05",
            "code": "EB05",
            "gid": "AA",
            "lvup": "EB06",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 47
        },
        {
            "name": "Spirita VI",
            "jpName": "スピリタⅥ",
            "effect": "PP(+7)",
            "jpEffect": "PP(+7)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "EB06",
            "code": "EB06",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 48
        },
        {
            "name": "St. Fever",
            "jpName": "セント・フィーバー",
            "effect": "R-ATK(+10),<br>DEX(+5),<br>PP(+2)",
            "jpEffect": "射撃力(+10)<br>技量(+5)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD05",
            "code": "TD05",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 395
        },
        {
            "name": "Stamina Boost",
            "jpName": "スタミナ・ブースト",
            "effect": "HP(+45)",
            "jpEffect": "HP(+45)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 462,
            "code": "XI02"
        },
        {
            "name": "Stamina I",
            "jpName": "スタミナⅠ",
            "effect": "HP(+20)",
            "jpEffect": "HP(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EA01",
            "code": "EA01",
            "gid": "AA",
            "lvup": "EA02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 38
        },
        {
            "name": "Stamina II",
            "jpName": "スタミナⅡ",
            "effect": "HP(+40)",
            "jpEffect": "HP(+40)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EA02",
            "code": "EA02",
            "gid": "AA",
            "lvup": "EA03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 39
        },
        {
            "name": "Stamina III",
            "jpName": "スタミナⅢ",
            "effect": "HP(+50)",
            "jpEffect": "HP(+50)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EA03",
            "code": "EA03",
            "gid": "AA",
            "lvup": "EA04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 40
        },
        {
            "name": "Stamina IV",
            "jpName": "スタミナⅣ",
            "effect": "HP(+60)",
            "jpEffect": "HP(+60)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EA04",
            "code": "EA04",
            "gid": "AA",
            "lvup": "EA05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 41
        },
        {
            "name": "Stamina V",
            "jpName": "スタミナⅤ",
            "effect": "HP(+70)",
            "jpEffect": "HP(+70)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EA05",
            "code": "EA05",
            "gid": "AA",
            "lvup": "EA06",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 42
        },
        {
            "name": "Stamina VI",
            "jpName": "スタミナⅥ",
            "effect": "HP(+80)",
            "jpEffect": "HP(+80)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "EA06",
            "code": "EA06",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 612
        },
        {
            "name": "Stigma",
            "jpName": "スティグマ",
            "effect": "DEX(+20),<br>PP(+5)",
            "jpEffect": "技量(+20)<br>PP(+5)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TA01",
            "code": "TA01",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "ref": 335
        },
        {
            "name": "Summer Fever",
            "jpName": "サマー・フィーバー",
            "effect": "T-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "法撃力(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD07",
            "code": "TD07",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 397
        },
        {
            "name": "Tagami Kazuchi Soul",
            "jpName": "タガミカヅチ・ソール",
            "effect": "R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
            "jpEffect": "射撃力(+20)<br>法撃力(+20)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROE3",
            "code": "ROE3",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "EB",
                "JC"
            ],
            "rel": "soul",
            "ref": 313
        },
        {
            "name": "Technique Boost",
            "jpName": "テクニック・ブースト",
            "effect": "T-ATK(+25)",
            "jpEffect": "法撃力(+25)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 466,
            "code": "XI06"
        },
        {
            "name": "Technique I",
            "jpName": "テクニックⅠ",
            "effect": "T-ATK(+10)",
            "jpEffect": "法撃力(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AC01",
            "code": "AC01",
            "gid": "AA",
            "lvup": "AC02",
            "extend": [
                100
            ],
            "status": 1,
            "ref": 12
        },
        {
            "name": "Technique II",
            "jpName": "テクニックⅡ",
            "effect": "T-ATK(+20)",
            "jpEffect": "法撃力(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AC02",
            "code": "AC02",
            "gid": "AA",
            "lvup": "AC03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 1,
            "ref": 13
        },
        {
            "name": "Technique III",
            "jpName": "テクニックⅢ",
            "effect": "T-ATK(+30)",
            "jpEffect": "法撃力(+30)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AC03",
            "code": "AC03",
            "gid": "AA",
            "lvup": "AC04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 1,
            "ref": 14
        },
        {
            "name": "Technique IV",
            "jpName": "テクニックⅣ",
            "effect": "T-ATK(+35)",
            "jpEffect": "法撃力(+35)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AC04",
            "code": "AC04",
            "gid": "AA",
            "lvup": "AC05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 1,
            "ref": 15
        },
        {
            "name": "Technique V",
            "jpName": "テクニックⅤ",
            "effect": "T-ATK(+40)",
            "jpEffect": "法撃力(+40)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "AC05",
            "code": "AC05",
            "gid": "AA",
            "lvup": "AC06",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 16
        },
        {
            "name": "Technique VI",
            "jpName": "テクニックⅥ",
            "effect": "T-ATK(+45)",
            "jpEffect": "法撃力(+45)",
            "hasSAF": true,
            "hasAddItem": true,
            "isSSA": false,
            "simCode": "AC06",
            "code": "AC06",
            "gid": "AA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 1,
            "ref": 17
        },
        {
            "name": "Temptation",
            "jpName": "テンプテーション",
            "effect": "Item Drop Rate +10%",
            "jpEffect": "レアドロップ倍率が増加+10%",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VD01",
            "code": "VD01",
            "gid": "CC",
            "ref": 438
        },
        {
            "name": "Tenora Boost",
            "jpName": "テノラ・ブースト",
            "effect": "S-ATK(+35)",
            "jpEffect": "打撃力(+35)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 467,
            "code": "XI0a"
        },
        {
            "name": "Till The Soul",
            "jpName": "ティル・ジ・ソール",
            "effect": "R-ATK(+35),<br>PP(+3)",
            "jpEffect": "射撃力(+35)<br>PP(+3)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SH20",
            "code": "SH20",
            "gid": "EA",
            "extend": [
                0,
                25,
                40
            ],
            "tooltip": "Made from: Earth/Omega/Ex Till Soul + Free Field Boss Soul",
            "ref": 332
        },
        {
            "name": "Toh'oh Soul",
            "jpName": "トウオウ・ソール",
            "effect": "ALL(+10)",
            "jpEffect": "ALL(+10)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "SB01",
            "code": "SB01",
            "gid": "EA",
            "extend": [
                0,
                60,
                90
            ],
            "extup": [
                "TG02"
            ],
            "rel": "soul",
            "cls": "ef-soul",
            "tooltip": "Used for: ___ The Soul, Ether Soul",
            "ref": 326
        },
        {
            "name": "Torokuro Fever",
            "jpName": "トロクロ・フィーバー",
            "effect": "DEX(+15),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "技量(+15)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0A",
            "code": "TD0A",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 400
        },
        {
            "name": "Turkey Fever",
            "jpName": "タッキ・フィーバー",
            "effect": "DEX(+5),<br>T-DEF(+10),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "技量(+5)<br>法撃防御(+10)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TD0H",
            "code": "TD0H",
            "gid": "EB",
            "extend": [
                100
            ],
            "ref": 664
        },
        {
            "name": "Ultimate Buster",
            "jpName": "アルティメットバスター",
            "effect": "Boost damage in Ultimate +10%",
            "jpEffect": "世壊種に与えるダメージが10%上昇",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "VH01",
            "code": "VH01",
            "gid": "CC",
            "extend": [
                0,
                0,
                0,
                0,
                100
            ],
            "ref": 441
        },
        {
            "name": "Vardha Soul",
            "jpName": "ヴァーダー・ソール",
            "effect": "R-DEF(+30),<br>PP(+4)",
            "jpEffect": "射撃防御(+30)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RI23",
            "code": "RI23",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "EB",
                "HL"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 301
        },
        {
            "name": "Varuna Glare",
            "jpName": "ヴァルナ・グレア",
            "effect": "S-ATK(+30)<br>T-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+20)<br>HP(+20)<br>PP(+2)",
            "jpEffect": "打撃力(+30)<br>法撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+2)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN07",
            "code": "TN07",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Photoner Glare",
            "ref": 639
        },
        {
            "name": "Veluge Glare",
            "jpName": "ベルージュ・グレア",
            "effect": "R-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+40)<br>T-DEF(+20)",
            "jpEffect": "射撃力(+30)<br>打撃防御(+20)<br>射撃防御(+40)<br>法撃防御(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TN02",
            "code": "TN02",
            "gid": "AC",
            "extend": [
                30,
                50
            ],
            "status": 1,
            "tooltip": "Used for: Glare Catalyst",
            "ref": 510
        },
        {
            "name": "Vibrace Soul",
            "jpName": "ビブラス・ソール",
            "effect": "R-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
            "jpEffect": "射撃力(+20)<br>法撃力(+20)<br>HP(+5)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "ROE2",
            "code": "ROE2",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AB",
                "BB",
                "HN"
            ],
            "rel": "soul",
            "ref": 312
        },
        {
            "name": "Vinculum",
            "jpName": "ウィンクルム",
            "effect": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20)",
            "jpEffect": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)",
            "hasSAF": true,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TB01",
            "code": "TB01",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "ref": 336
        },
        {
            "name": "Vol Soul",
            "jpName": "ヴォル・ソール",
            "effect": "S-ATK(+30),<br>HP(+20)",
            "jpEffect": "打撃力(+30)<br>HP(+20)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA21",
            "code": "RA21",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "BA",
                "EA",
                "JA"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 269
        },
        {
            "name": "Wind Resist I",
            "jpName": "ウィンドレジストⅠ",
            "effect": "Wind Resist(+3)",
            "jpEffect": "風耐性(+3)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HL01",
            "code": "HL01",
            "gid": "DA",
            "lvup": "HL02",
            "extend": [
                100
            ],
            "status": 2,
            "ref": 83
        },
        {
            "name": "Wind Resist II",
            "jpName": "ウィンドレジストⅡ",
            "effect": "Wind Resist(+4)",
            "jpEffect": "風耐性(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HL02",
            "code": "HL02",
            "gid": "DA",
            "lvup": "HL03",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                60,
                80
            ],
            "status": 2,
            "ref": 84
        },
        {
            "name": "Wind Resist III",
            "jpName": "ウィンドレジストⅢ",
            "effect": "Wind Resist(+5)",
            "jpEffect": "風耐性(+5)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HL03",
            "code": "HL03",
            "gid": "DA",
            "lvup": "HL04",
            "extend": [
                60,
                80,
                100
            ],
            "generate": [
                30,
                50
            ],
            "status": 2,
            "ref": 85
        },
        {
            "name": "Wind Resist IV",
            "jpName": "ウィンドレジストⅣ",
            "effect": "Wind Resist(+6)",
            "jpEffect": "風耐性(+6)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HL04",
            "code": "HL04",
            "gid": "DA",
            "lvup": "HL05",
            "extend": [
                40,
                60,
                80
            ],
            "generate": [
                20,
                40
            ],
            "status": 2,
            "ref": 86
        },
        {
            "name": "Wind Resist V",
            "jpName": "ウィンドレジストⅤ",
            "effect": "Wind Resist(+7)",
            "jpEffect": "風耐性(+7)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "HL05",
            "code": "HL05",
            "gid": "DA",
            "extend": [
                20,
                40,
                60
            ],
            "generate": [
                10,
                30
            ],
            "status": 2,
            "ref": 87
        },
        {
            "name": "Wolga Soul",
            "jpName": "ウォルガ・ソール",
            "effect": "T-ATK(+30),<br>HP(+10),<br>PP(+2)",
            "jpEffect": "法撃力(+30)<br>HP(+10)<br>PP(+2)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RC22",
            "code": "RC22",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AC",
                "BC",
                "HK"
            ],
            "rel": "soul",
            "ref": 286
        },
        {
            "name": "Yamato Factor",
            "jpName": "ヤマト・ファクター",
            "effect": "S-ATK(+10),<br>R-ATK(+20),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
            "jpEffect": "打撃力(+10)<br>射撃力(+20)<br>法撃力(+10)<br>HP(+20)<br>PP(+1)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "TG02",
            "code": "TG02",
            "gid": "AC",
            "extend": [
                0,
                30,
                50
            ],
            "status": 6,
            "tooltip": "Used for: Factor Catalyst",
            "ref": 339
        },
        {
            "name": "Yohmei Boost",
            "jpName": "ヨウメイ・ブースト",
            "effect": "T-ATK(+35)",
            "jpEffect": "法撃力(+35)",
            "hasSAF": false,
            "hasAddItem": true,
            "isSSA": false,
            "ref": 469,
            "code": "XI0c"
        },
        {
            "name": "Zigmor Soul",
            "jpName": "ジグモル・ソール",
            "effect": "S-ATK(+15),<br>PP(+4)",
            "jpEffect": "打撃力(+15)<br>PP(+4)",
            "hasSAF": false,
            "hasAddItem": false,
            "isSSA": false,
            "simCode": "RA15",
            "code": "RA15",
            "gid": "EA",
            "extend": [
                0,
                50,
                80
            ],
            "extup": [
                "AA",
                "EB",
                "HC",
                "JF"
            ],
            "rel": "soul",
            "cls": "zi-soul",
            "tooltip": "Used for: ___ the Soul",
            "ref": 268
        }
    ],
    "abilityFactor": [
        {
            "name": "Stamina III",
            "jpName": "スタミナⅢ"
        },
        {
            "name": "Stamina IV",
            "jpName": "スタミナⅣ"
        },
        {
            "name": "Stamina V",
            "jpName": "スタミナⅤ"
        },
        {
            "name": "Stamina VI",
            "jpName": "スタミナⅥ"
        },
        {
            "name": "Spirita III",
            "jpName": "スピリタⅢ"
        },
        {
            "name": "Spirita IV",
            "jpName": "スピリタⅣ"
        },
        {
            "name": "Spirita V",
            "jpName": "スピリタⅤ"
        },
        {
            "name": "Spirita VI",
            "jpName": "スピリタⅥ"
        },
        {
            "name": "Power III",
            "jpName": "パワーⅢ"
        },
        {
            "name": "Power IV",
            "jpName": "パワーⅣ"
        },
        {
            "name": "Power V",
            "jpName": "パワーⅤ"
        },
        {
            "name": "Power VI",
            "jpName": "パワーⅥ"
        },
        {
            "name": "Shoot III",
            "jpName": "シュートⅢ"
        },
        {
            "name": "Shoot IV",
            "jpName": "シュートⅣ"
        },
        {
            "name": "Shoot V",
            "jpName": "シュートⅤ"
        },
        {
            "name": "Shoot VI",
            "jpName": "シュートⅥ"
        },
        {
            "name": "Technique III",
            "jpName": "テクニックⅢ"
        },
        {
            "name": "Technique IV",
            "jpName": "テクニックⅣ"
        },
        {
            "name": "Technique V",
            "jpName": "テクニックⅤ"
        },
        {
            "name": "Technique VI",
            "jpName": "テクニックⅥ"
        },
        {
            "name": "Arm III",
            "jpName": "アームⅢ"
        },
        {
            "name": "Arm IV",
            "jpName": "アームⅣ"
        },
        {
            "name": "Body III",
            "jpName": "ボディⅢ"
        },
        {
            "name": "React III",
            "jpName": "リアクトⅢ"
        },
        {
            "name": "Mind III",
            "jpName": "マインドⅢ"
        },
        {
            "name": "Blow Resist III",
            "jpName": "ブロウレジストⅢ"
        },
        {
            "name": "Shot Resist III",
            "jpName": "ショットレジストⅢ"
        },
        {
            "name": "Mind Resist III",
            "jpName": "マインドレジストⅢ"
        },
        {
            "name": "All Resist III",
            "jpName": "オールレジストⅢ"
        },
        {
            "name": "Ability III",
            "jpName": "アビリティⅢ"
        },
        {
            "name": "Ability IV",
            "jpName": "アビリティⅣ"
        },
        {
            "name": "Ability V",
            "jpName": "アビリティⅤ"
        },
        {
            "name": "Mutation I",
            "jpName": "ミューテーションⅠ"
        },
        {
            "name": "Mutation II",
            "jpName": "ミューテーションⅡ"
        },
        {
            "name": "Spirita Alpha",
            "jpName": "スピリタ・アルファ"
        },
        {
            "name": "Stigma",
            "jpName": "スティグマ"
        },
        {
            "name": "Doom Break I",
            "jpName": "ドゥームブレイクⅠ"
        },
        {
            "name": "Doom Break II",
            "jpName": "ドゥームブレイクⅡ"
        },
        {
            "name": "Doom Break III",
            "jpName": "ドゥームブレイクⅢ"
        },
        {
            "name": "Vinculum",
            "jpName": "ウィンクルム"
        },
        {
            "name": "Modulator",
            "jpName": "モデュレイター"
        },
        {
            "name": "Lesser Stamina IV",
            "jpName": "レッサースタミナⅣ"
        },
        {
            "name": "Lesser Spirita IV",
            "jpName": "レッサースピリタⅣ"
        },
        {
            "name": "Lesser Power IV",
            "jpName": "レッサーパワーⅣ"
        },
        {
            "name": "Lesser Shoot IV",
            "jpName": "レッサーシュートⅣ"
        },
        {
            "name": "Lesser Technique IV",
            "jpName": "レッサーテクニックⅣ"
        },
        {
            "name": "Burn III",
            "jpName": "バーンⅢ"
        },
        {
            "name": "Burn V",
            "jpName": "バーンⅤ"
        },
        {
            "name": "Freeze III",
            "jpName": "フリーズⅢ"
        },
        {
            "name": "Freeze V",
            "jpName": "フリーズⅤ"
        },
        {
            "name": "Shock III",
            "jpName": "ショックⅢ"
        },
        {
            "name": "Shock V",
            "jpName": "ショックⅤ"
        },
        {
            "name": "Mirage III",
            "jpName": "ミラージュⅢ"
        },
        {
            "name": "Mirage V",
            "jpName": "ミラージュⅤ"
        },
        {
            "name": "Panic III",
            "jpName": "パニックⅢ"
        },
        {
            "name": "Panic V",
            "jpName": "パニックⅤ"
        },
        {
            "name": "Poison III",
            "jpName": "ポイズンⅢ"
        },
        {
            "name": "Poison V",
            "jpName": "ポイズンⅤ"
        },
        {
            "name": "Deadleon Soul",
            "jpName": "デッドリオン・ソール"
        },
        {
            "name": "Greuzoras Soul",
            "jpName": "グリュゾラス・ソール"
        },
        {
            "name": "Duvals Soul",
            "jpName": "ドゥバルス・ソール"
        },
        {
            "name": "Darkness Soul",
            "jpName": "ダークネス・ソール"
        },
        {
            "name": "Astral Soul",
            "jpName": "アストラル・ソール"
        },
        {
            "name": "Act The Soul",
            "jpName": "アクト・ジ・ソール"
        },
        {
            "name": "Till The Soul",
            "jpName": "ティル・ジ・ソール"
        },
        {
            "name": "Magi The Soul",
            "jpName": "マギー・ジ・ソール"
        },
        {
            "name": "Persona Reverie",
            "jpName": "ペルソナ・レヴリー"
        },
        {
            "name": "Execour Glare",
            "jpName": "エクゼクル・グレア"
        },
        {
            "name": "Soul Catalyst",
            "jpName": "ソール・カタリスト"
        },
        {
            "name": "Factor Catalyst",
            "jpName": "ファクター・カタリスト"
        },
        {
            "name": "Reverie Catalyst",
            "jpName": "レヴリー・カタリスト"
        },
        {
            "name": "Alter Arma",
            "jpName": "アルター・アルマ"
        },
        {
            "name": "Alter Tiro",
            "jpName": "アルター・ティロ"
        },
        {
            "name": "Alter Magia",
            "jpName": "アルター・マギア"
        },
        {
            "name": "Flict Arma",
            "jpName": "フリクト・アルマ"
        },
        {
            "name": "Flict Tiro",
            "jpName": "フリクト・ティロ"
        },
        {
            "name": "Flict Magia",
            "jpName": "フリクト・マギア"
        },
        {
            "name": "Sentence Power",
            "jpName": "センテンス・パワー"
        },
        {
            "name": "Sentence Shoot",
            "jpName": "センテンス・シュート"
        },
        {
            "name": "Sentence Tech",
            "jpName": "センテンス・テクニック"
        },
        {
            "name": "Sentence Arma",
            "jpName": "センテンス・アルマ"
        },
        {
            "name": "Sentence Tiro",
            "jpName": "センテンス・ティロ"
        },
        {
            "name": "Sentence Magia",
            "jpName": "センテンス・マギア"
        },
        {
            "name": "Sentence Triple",
            "jpName": "センテンス・トリプル"
        },
        {
            "name": "Phrase Recovery",
            "jpName": "フレイズ・リカバリー"
        },
        {
            "name": "Phrase Weak",
            "jpName": "フレイズ・ウィーク"
        },
        {
            "name": "Phrase Response",
            "jpName": "フレイズ・レスポンス"
        },
        {
            "name": "Phrase Chase",
            "jpName": "フレイズ・チェイス"
        },
        {
            "name": "Phrase Reduce",
            "jpName": "フレイズ・リデュース"
        },
        {
            "name": "Phrase Decay",
            "jpName": "フレイズ・ディケイ"
        },
        {
            "name": "Omega Buster",
            "jpName": "オメガバスター"
        },
        {
            "name": "Another History",
            "jpName": "アナザーヒストリー"
        },
        {
            "name": "Guidance Trainer",
            "jpName": "錬成の導き"
        },
        {
            "name": "Soul Receptor",
            "jpName": "ソールレセプター"
        },
        {
            "name": "Extreceptor",
            "jpName": "エクストレセプター"
        },
        {
            "name": "Factor Receptor",
            "jpName": "ファクターレセプター"
        },
        {
            "name": "Ether Factor",
            "jpName": "エーテル・ファクター"
        },
        {
            "name": "Varuna Glare",
            "jpName": "ヴァルナ・グレア"
        },
        {
            "name": "Mitra Glare",
            "jpName": "ミトラ・グレア"
        },
        {
            "name": "Shiva Glare",
            "jpName": "シバ・グレア"
        },
        {
            "name": "Fabula Soul",
            "jpName": "ファーブラ・ソール"
        },
        {
            "name": "Historia Soul",
            "jpName": "イストリア・ソール"
        },
        {
            "name": "Omega Reverie",
            "jpName": "オメガ・レヴリー"
        },
        {
            "name": "Ange Glare",
            "jpName": "アンジュール・グレア"
        },
        {
            "name": "S1:Red Petal Flash",
            "jpName": "S1:花ノ赤閃"
        },
        {
            "name": "S1:Yellow Moon Flash",
            "jpName": "S1:月ノ黄閃"
        },
        {
            "name": "S1:Green Leaf Flash",
            "jpName": "S1:葉ノ緑閃"
        },
        {
            "name": "S1:Immediate Intent",
            "jpName": "S1:瞬連の志"
        },
        {
            "name": "S1:Rupturing Excess",
            "jpName": "S1:裂砕の剰"
        },
        {
            "name": "S1:Brilliant Ruin",
            "jpName": "S1:滅域輝与"
        },
        {
            "name": "S1:Photon Reduction",
            "jpName": "S1:光子縮減"
        },
        {
            "name": "S1:Photon Reduction 2",
            "jpName": "S1:光子縮減2"
        },
        {
            "name": "S1:Collaborator Liberator",
            "jpName": "S1:戦友の加護"
        },
        {
            "name": "S1:Offensive Intent",
            "jpName": "S1:剛撃の志"
        },
        {
            "name": "S1:Sturdy Intent",
            "jpName": "S1:依属の志"
        },
        {
            "name": "S1:Phantasmal Intent",
            "jpName": "S1:幻精の志"
        },
        {
            "name": "S1:Strike Boost",
            "jpName": "S1:打撃増幅"
        },
        {
            "name": "S1:Shoot Boost",
            "jpName": "S1:射撃増幅"
        },
        {
            "name": "S1:Tech Boost",
            "jpName": "S1:法撃増幅"
        },
        {
            "name": "S2:Cursed Radiance",
            "jpName": "S2:災転輝与"
        },
        {
            "name": "S2:Lightning Guard",
            "jpName": "S2:轟雷の備志"
        },
        {
            "name": "S2:Storm Guard",
            "jpName": "S2:暴風の備志"
        },
        {
            "name": "S2:Shining Guard",
            "jpName": "S2:光明の備志"
        },
        {
            "name": "S2:Darkness Guard",
            "jpName": "S2:暗闇の備志"
        },
        {
            "name": "S2:Wise Skill",
            "jpName": "S2:妙技の巧"
        },
        {
            "name": "S2:Skilled Intent",
            "jpName": "S2:妙撃の志"
        },
        {
            "name": "S2:Radiant Strike",
            "jpName": "S2:輝剰の撃"
        },
        {
            "name": "S2:Skill Reduction",
            "jpName": "S2:技巧縮減"
        },
        {
            "name": "S2:Guardian Armor",
            "jpName": "S2:守護の備"
        },
        {
            "name": "S2:Rupturing Intent",
            "jpName": "S2:裂砕の志"
        },
        {
            "name": "S2:Instant Reduction",
            "jpName": "S2:瞬乱縮減"
        },
        {
            "name": "S2:Medicinal Wisdom",
            "jpName": "S2:服薬の恵"
        },
        {
            "name": "S2:Phantasmal Guardian",
            "jpName": "S2:幻精の備"
        },
        {
            "name": "S2:Phantasmal Radiance",
            "jpName": "S2:幻精輝剰"
        },
        {
            "name": "S2:Phantasmal Gleam",
            "jpName": "S2:幻精輝勢"
        },
        {
            "name": "S2:Powering Intent",
            "jpName": "S2:強闘の志"
        },
        {
            "name": "S2:Aegis Gift",
            "jpName": "S2:瞬護の与"
        },
        {
            "name": "S3:Skilled Intent 2",
            "jpName": "S3:妙撃の志2"
        },
        {
            "name": "S3:Vital Intent",
            "jpName": "S3:活実の志"
        },
        {
            "name": "S3:Brilliant Ruin",
            "jpName": "S3:滅域輝与"
        },
        {
            "name": "S3:Radiating Grace",
            "jpName": "S3:輝勢の恵"
        },
        {
            "name": "S3:Flowing Exhilaration",
            "jpName": "S3:時流活与"
        },
        {
            "name": "S3:Calming Exhilaration",
            "jpName": "S3:静心活与"
        },
        {
            "name": "S3:Fortifying Strike",
            "jpName": "S3:撃流の備"
        },
        {
            "name": "S3:Guardian Armor",
            "jpName": "S3:守護の備"
        },
        {
            "name": "S3:Furious Inspiration",
            "jpName": "S3:猛威の奮激"
        },
        {
            "name": "S3:Immediate Profusion",
            "jpName": "S3:瞬撃繚乱"
        },
        {
            "name": "S3:Phantasmal Reduction",
            "jpName": "S3:幻精縮減"
        },
        {
            "name": "S4:Marvelous Aegis",
            "jpName": "S4:瞬護輝与"
        },
        {
            "name": "S4:Steel Resolve",
            "jpName": "S4:鋼の決意"
        },
        {
            "name": "S4:Radiant Response",
            "jpName": "S4:輝器応変"
        },
        {
            "name": "S4:Opposing Skill",
            "jpName": "S4:正対の巧"
        },
        {
            "name": "S4:Scything Wind",
            "jpName": "S4:鎌風重吹"
        },
        {
            "name": "S4:Cunning Strike",
            "jpName": "S4:賢勇両撃"
        },
        {
            "name": "S4:Vampiric Strike",
            "jpName": "S4:奪命の撃"
        },
        {
            "name": "S4:Gear Reduction",
            "jpName": "S4:刃機放縮"
        },
        {
            "name": "S4:Genesis Ring",
            "jpName": "S4:変素応輪"
        },
        {
            "name": "S4:Steadfast Courage",
            "jpName": "S4:静の胆力"
        },
        {
            "name": "S4:Lustrous Trap",
            "jpName": "S4:輝剰の罠"
        },
        {
            "name": "S4:Dynamic Chain",
            "jpName": "S4:鎖動強身"
        },
        {
            "name": "S4:Rapid-fire Arrow",
            "jpName": "S4:迅弓の撃"
        },
        {
            "name": "S4:Refined Providence",
            "jpName": "S4:摂理洗練"
        },
        {
            "name": "S4:Circuit Rotation",
            "jpName": "S4:回路輪転"
        },
        {
            "name": "S4:Wand Clobber",
            "jpName": "S4:短杖強打"
        },
        {
            "name": "S4:Support Extension",
            "jpName": "S4:支援限長"
        },
        {
            "name": "S5:Release Parry",
            "jpName": "S5:瞬護解放"
        },
        {
            "name": "S5:Unrivaled Parry",
            "jpName": "S5:瞬護無双"
        },
        {
            "name": "S5:Rushing Bolt",
            "jpName": "S5:瞬駆突貫"
        },
        {
            "name": "S5:Shining Cyclone",
            "jpName": "S5:輝境の旋"
        },
        {
            "name": "S5:Evasive Mirage",
            "jpName": "S5:巧避連撃"
        },
        {
            "name": "S5:Evasive Meteor",
            "jpName": "S5:巧避巨拳"
        },
        {
            "name": "S5:Mysterious Purpose",
            "jpName": "S5:妙の巧志"
        },
        {
            "name": "S5:Hangeki Edge",
            "jpName": "S5:反撃鋭刃"
        },
        {
            "name": "S5:Thundering Pursuit",
            "jpName": "S5:雷光追撃"
        },
        {
            "name": "S5:Fiery End",
            "jpName": "S5:烈終焉弾"
        },
        {
            "name": "S5:Fiery Zero",
            "jpName": "S5:烈零射砲"
        },
        {
            "name": "S5:Bright Escape",
            "jpName": "S5:巧避輝与"
        },
        {
            "name": "S5:Auxiliary Arrow",
            "jpName": "S5:追射剛矢"
        },
        {
            "name": "S5:Calming Bullet",
            "jpName": "S5:静心杖弾"
        },
        {
            "name": "S5:Speedy Support",
            "jpName": "S5:急速補助"
        },
        {
            "name": "S5:Calming Shockwave",
            "jpName": "S5:静心衝杖"
        },
        {
            "name": "S5:Rhythmic Pursuer",
            "jpName": "S5:追災律動"
        }
    ]
}

var module = module || undefined
if (module && module.exports) {
    module.exports.data = data
}
