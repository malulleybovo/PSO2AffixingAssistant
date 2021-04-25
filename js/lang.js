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

const lang = Object.freeze({
    "FA01": {
        "name_en": "Ability I",
        "name_jp": "アビリティⅠ",
        "name_glen": "Mastery I",
        "effect_en": "ALL(+5)",
        "effect_jp": "ALL(+5)",
        "effect_glen": "ALL(+5)"
    },
    "FA02": {
        "name_en": "Ability II",
        "name_jp": "アビリティⅡ",
        "name_glen": "Mastery II",
        "effect_en": "ALL(+10)",
        "effect_jp": "ALL(+10)",
        "effect_glen": "ALL(+10)"
    },
    "FA03": {
        "name_en": "Ability III",
        "name_jp": "アビリティⅢ",
        "name_glen": "Mastery III",
        "effect_en": "ALL(+15)",
        "effect_jp": "ALL(+15)",
        "effect_glen": "ALL(+15)"
    },
    "FA04": {
        "name_en": "Ability IV",
        "name_jp": "アビリティⅣ",
        "name_glen": "Mastery IV",
        "effect_en": "ALL(+20)",
        "effect_jp": "ALL(+20)",
        "effect_glen": "ALL(+20)"
    },
    "FA05": {
        "name_en": "Ability V",
        "name_jp": "アビリティⅤ",
        "name_glen": "Mastery V",
        "effect_en": "ALL(+30)",
        "effect_jp": "ALL(+30)",
        "effect_glen": "ALL(+30)"
    },
    "TN11": {
        "name_en": "Absolute Glare",
        "name_jp": "アブソリュート・グレア",
        "name_glen": "Absolute Glare",
        "effect_en": "ALL(+40)<br>HP(+30)<br>PP(+3)",
        "effect_jp": "ALL(+40)<br>HP(+30)<br>PP(+3)",
        "effect_glen": "ALL(+40)<br>HP(+30)<br>PP(+3)"
    },
    "SH10": {
        "name_en": "Act The Soul",
        "name_jp": "アクト・ジ・ソール",
        "name_glen": "Acto Di Soul",
        "effect_en": "S-ATK(+35),<br>PP(+3)",
        "effect_jp": "打撃力(+35)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+35),<br>PP(+3)"
    },
    "HZ01": {
        "name_en": "All Resist I",
        "name_jp": "オールレジストⅠ",
        "name_glen": "Sovereign Ward I",
        "effect_en": "All Resist(+1)",
        "effect_jp": "全耐性(+1)<br>全軽減(+1)",
        "effect_glen": "Sovereign Ward(+1)"
    },
    "HZ02": {
        "name_en": "All Resist II",
        "name_jp": "オールレジストⅡ",
        "name_glen": "Sovereign Ward II",
        "effect_en": "All Resist(+2)",
        "effect_jp": "全耐性(+2)<br>全軽減(+2)",
        "effect_glen": "Sovereign Ward(+2)"
    },
    "HZ03": {
        "name_en": "All Resist III",
        "name_jp": "オールレジストⅢ",
        "name_glen": "Sovereign Ward III",
        "effect_en": "All Resist(+3)",
        "effect_jp": "全耐性(+3)<br>全軽減(+3)",
        "effect_glen": "Sovereign Ward(+3)"
    },
    "HZ04": {
        "name_en": "All Resist IV",
        "name_jp": "オールレジストⅣ",
        "name_glen": "Sovereign Ward IV",
        "effect_en": "All Resist(+4)",
        "effect_jp": "全耐性(+4)<br>全軽減(+4)",
        "effect_glen": "Sovereign Ward(+4)"
    },
    "HZ05": {
        "name_en": "All Resist V",
        "name_jp": "オールレジストⅤ",
        "name_glen": "Sovereign Ward V",
        "effect_en": "All Resist(+5)",
        "effect_jp": "全耐性(+5)<br>全軽減(+5)",
        "effect_glen": "Sovereign Ward(+5)"
    },
    "UB01": {
        "name_en": "Alter Arma",
        "name_jp": "アルター・アルマ",
        "name_glen": "Alter Arma",
        "effect_en": "S-ATK(+20),<br>HP(+30)",
        "effect_jp": "打撃力(+20)<br>HP(+30)",
        "effect_glen": "MEL Pwr(+20),<br>HP(+30)"
    },
    "UB21": {
        "name_en": "Alter Magia",
        "name_jp": "アルター・マギア",
        "name_glen": "Alter Magia",
        "effect_en": "T-ATK(+20),<br>HP(+30)",
        "effect_jp": "法撃力(+20)<br>HP(+30)",
        "effect_glen": "TEC Pwr(+20),<br>HP(+30)"
    },
    "UB11": {
        "name_en": "Alter Tiro",
        "name_jp": "アルター・ティロ",
        "name_glen": "Alter Tyro",
        "effect_en": "R-ATK(+20),<br>HP(+30)",
        "effect_jp": "射撃力(+20)<br>HP(+30)",
        "effect_glen": "RNG Pwr(+20),<br>HP(+30)"
    },
    "RP25": {
        "name_en": "Anga Soul",
        "name_jp": "アンガ・ソール",
        "name_glen": "Anga Soul",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+4)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+4)"
    },
    "TN01": {
        "name_en": "Ange Glare",
        "name_jp": "アンジュール・グレア",
        "name_glen": "Angele Glare",
        "effect_en": "S-ATK(+30)<br>S-DEF(+40)<br>R-DEF(+20)<br>T-DEF(+20)",
        "effect_jp": "打撃力(+30)<br>打撃防御(+40)<br>射撃防御(+20)<br>法撃防御(+20)",
        "effect_glen": "MEL Pwr(+30)<br>MEL Def(+40)<br>RNG Def(+20)<br>TEC Def(+20)"
    },
    "VE01": {
        "name_en": "Another History",
        "name_jp": "アナザーヒストリー",
        "name_glen": "Alternate History",
        "effect_en": "Experience Gain +10%",
        "effect_jp": "取得する経験値が増加+10%",
        "effect_glen": "Experience Gain +10%"
    },
    "TK04": {
        "name_en": "Appregina Reverie",
        "name_jp": "アプレジナ・レヴリー",
        "name_glen": "Appregina Reverie",
        "effect_en": "S-ATK(+20),<br>R-ATK(+40),<br>T-ATK(+20),<br>HP(-10),<br>PP(-1)",
        "effect_jp": "打撃力(+20)<br>射撃力(+40)<br>法撃力(+20)<br>HP(-10)<br>PP(-1)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+40),<br>TEC Pwr(+20),<br>HP(-10),<br>PP(-1)"
    },
    "RP55": {
        "name_en": "Apprentice Soul",
        "name_jp": "アプレンティス・ソール",
        "name_glen": "Apprentice Soul",
        "effect_en": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40)",
        "effect_jp": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)",
        "effect_glen": "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40)"
    },
    "SH40": {
        "name_en": "Ares The Soul",
        "name_jp": "アレス・ジ・ソール",
        "name_glen": "Alles Di Soul",
        "effect_en": "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>HP(+35),<br>PP(+3)",
        "effect_jp": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)<br>HP(+35)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>HP(+35),<br>PP(+3)"
    },
    "TD0F": {
        "name_en": "ARKS Fever",
        "name_jp": "アクス・フィーバー",
        "name_glen": "ARKS Fever",
        "effect_en": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>DEX(+5),<br>PP(+5)",
        "effect_jp": "打撃力(+5)<br>射撃力(+5)<br>法撃力(+5)<br>技量(+5)<br>PP(+5)",
        "effect_glen": "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>DEX(+5),<br>PP(+5)"
    },
    "TL01": {
        "name_en": "ARKS Max",
        "name_jp": "アクス・MAX",
        "name_glen": "ARKS MAX",
        "effect_en": "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25)",
        "effect_jp": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)",
        "effect_glen": "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25)"
    },
    "VK04": {
        "name_en": "Arkuma Smile",
        "name_jp": "アークマ・スマイル",
        "name_glen": "*Arkuma Smile",
        "effect_en": "Adds 25 EXP to NT weapon grinds.",
        "effect_jp": "新世武器強化時の経験値が増加する\n強化値",
        "effect_glen": "Adds 25 EXP to NT weapon grinds."
    },
    "AD01": {
        "name_en": "Arm I",
        "name_jp": "アームⅠ",
        "name_glen": "Deftness I",
        "effect_en": "DEX(+10)",
        "effect_jp": "技量(+10)",
        "effect_glen": "DEX(+10)"
    },
    "AD02": {
        "name_en": "Arm II",
        "name_jp": "アームⅡ",
        "name_glen": "Deftness II",
        "effect_en": "DEX(+20)",
        "effect_jp": "技量(+20)",
        "effect_glen": "DEX(+20)"
    },
    "AD03": {
        "name_en": "Arm III",
        "name_jp": "アームⅢ",
        "name_glen": "Deftness III",
        "effect_en": "DEX(+30)",
        "effect_jp": "技量(+30)",
        "effect_glen": "DEX(+30)"
    },
    "AD04": {
        "name_en": "Arm IV",
        "name_jp": "アームⅣ",
        "name_glen": "Deftness IV",
        "effect_en": "DEX(+35)",
        "effect_jp": "技量(+35)",
        "effect_glen": "DEX(+35)"
    },
    "AD05": {
        "name_en": "Arm V",
        "name_jp": "アームⅤ",
        "name_glen": "Deftness V",
        "effect_en": "DEX(+40)",
        "effect_jp": "技量(+40)",
        "effect_glen": "DEX(+40)"
    },
    "SA01": {
        "name_en": "Astral Soul",
        "name_jp": "アストラル・ソール",
        "name_glen": "Astral Soul",
        "effect_en": "ALL(+35),<br>HP(+35),<br>PP(+5)",
        "effect_jp": "ALL(+35)<br>HP(+35)<br>PP(+5)",
        "effect_glen": "ALL(+35),<br>HP(+35),<br>PP(+5)"
    },
    "XI22": {
        "name_en": "Attack Boost",
        "name_jp": "アタック・ブースト",
        "name_glen": "Attack Boost",
        "effect_en": "S-ATK(+25),R-ATK(+25),T-ATK(+25),DEX(+40),PP(+3)",
        "effect_jp": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)<br>技量(+40)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25),DEX(+40),PP(+3)"
    },
    "XI30": {
        "name_en": "Attack Receptor",
        "name_jp": "アタックレセプター",
        "name_glen": "Attack Receptor",
        "effect_en": "Greatly increases affix rate of <br>Power, Shoot, Technique, Arm<br>ALL(+5)",
        "effect_jp": "攻撃力上昇特殊能力3種とアームの継承成功率を大幅に上昇\nALL(+5)",
        "effect_glen": "Greatly increases the Transfer rate of<br>Attack-type Augments and Deftness.<br>ALL(+5)"
    },
    "ROE1": {
        "name_en": "Bal Soul",
        "name_jp": "バル・ソール",
        "name_glen": "Bar Soul",
        "effect_en": "R-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
        "effect_jp": "射撃力(+20)<br>法撃力(+20)<br>HP(+10)",
        "effect_glen": "RNG Pwr(+20),<br>TEC Pwr(+20),<br>HP(+10)"
    },
    "RA33": {
        "name_en": "Bayari Soul",
        "name_jp": "ベーアリ・ソール",
        "name_glen": "Beari Soul",
        "effect_en": "S-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        "effect_jp": "打撃力(+35)<br>技量(+5)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+35),<br>DEX(+5),<br>PP(+3)"
    },
    "HA01": {
        "name_en": "Blow Resist I",
        "name_jp": "ブロウレジストⅠ",
        "name_glen": "Impact Ward I",
        "effect_en": "Strike Resist(+3)",
        "effect_jp": "打撃軽減(+3)",
        "effect_glen": "Melee Resist(+3)"
    },
    "HA02": {
        "name_en": "Blow Resist II",
        "name_jp": "ブロウレジストⅡ",
        "name_glen": "Impact Ward II",
        "effect_en": "Strike Resist(+4)",
        "effect_jp": "打撃軽減(+4)",
        "effect_glen": "Melee Resist(+4)"
    },
    "HA03": {
        "name_en": "Blow Resist III",
        "name_jp": "ブロウレジストⅢ",
        "name_glen": "Impact Ward III",
        "effect_en": "Strike Resist(+5)",
        "effect_jp": "打撃軽減(+5)",
        "effect_glen": "Melee Resist(+5)"
    },
    "HA04": {
        "name_en": "Blow Resist IV",
        "name_jp": "ブロウレジストⅣ",
        "name_glen": "Impact Ward IV",
        "effect_en": "Strike Resist(+6)",
        "effect_jp": "打撃軽減(+6)",
        "effect_glen": "Melee Resist(+6)"
    },
    "HA05": {
        "name_en": "Blow Resist V",
        "name_jp": "ブロウレジストⅤ",
        "name_glen": "Impact Ward V",
        "effect_en": "Strike Resist(+7)",
        "effect_jp": "打撃軽減(+7)",
        "effect_glen": "Melee Resist(+7)"
    },
    "BA01": {
        "name_en": "Body I",
        "name_jp": "ボディⅠ",
        "name_glen": "Toughness I",
        "effect_en": "S-DEF(+10)",
        "effect_jp": "打撃防御(+10)",
        "effect_glen": "MEL Def(+10)"
    },
    "BA02": {
        "name_en": "Body II",
        "name_jp": "ボディⅡ",
        "name_glen": "Toughness II",
        "effect_en": "S-DEF(+20)",
        "effect_jp": "打撃防御(+20)",
        "effect_glen": "MEL Def(+20)"
    },
    "BA03": {
        "name_en": "Body III",
        "name_jp": "ボディⅢ",
        "name_glen": "Toughness III",
        "effect_en": "S-DEF(+30)",
        "effect_jp": "打撃防御(+30)",
        "effect_glen": "MEL Def(+30)"
    },
    "BA04": {
        "name_en": "Body IV",
        "name_jp": "ボディⅣ",
        "name_glen": "Toughness IV",
        "effect_en": "S-DEF(+35)",
        "effect_jp": "打撃防御(+35)",
        "effect_glen": "MEL Def(+35)"
    },
    "BA05": {
        "name_en": "Body V",
        "name_jp": "ボディⅤ",
        "name_glen": "Toughness V",
        "effect_en": "S-DEF(+40)",
        "effect_jp": "打撃防御(+40)",
        "effect_glen": "MEL Def(+40)"
    },
    "JA01": {
        "name_en": "Burn I",
        "name_jp": "バーンⅠ",
        "name_glen": "Burn I",
        "effect_en": "Grants Burn Lv1",
        "effect_jp": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv1を付与する(MHP1% × 10回)",
        "effect_glen": "Grants Burn Lv1"
    },
    "JA02": {
        "name_en": "Burn II",
        "name_jp": "バーンⅡ",
        "name_glen": "Burn II",
        "effect_en": "Grants Burn Lv2",
        "effect_jp": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv2を付与する(MHP1.2% × 10回)",
        "effect_glen": "Grants Burn Lv2"
    },
    "JA03": {
        "name_en": "Burn III",
        "name_jp": "バーンⅢ",
        "name_glen": "Burn III",
        "effect_en": "Grants Burn Lv3",
        "effect_jp": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv3を付与する(MHP1.2% × 12回)",
        "effect_glen": "Grants Burn Lv3"
    },
    "JA04": {
        "name_en": "Burn IV",
        "name_jp": "バーンⅣ",
        "name_glen": "Burn IV",
        "effect_en": "Grants Burn Lv4",
        "effect_jp": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv4を付与する(MHP1.4% × 12回)",
        "effect_glen": "Grants Burn Lv4"
    },
    "JA05": {
        "name_en": "Burn V",
        "name_jp": "バーンⅤ",
        "name_glen": "Burn V",
        "effect_en": "Grants Burn Lv5",
        "effect_jp": "合成&継承率UP:ヴォル、シュレイダ、ダブル\nバーンLv5を付与する(MHP1.4% × 14回)",
        "effect_glen": "Grants Burn Lv5"
    },
    "XH01": {
        "name_en": "Catalyst Receptor",
        "name_jp": "カタリストレセプター",
        "name_glen": "*Catalyst Receptor",
        "effect_en": "Boosts Catalyst-type ability.<br>ALL(+10)",
        "effect_jp": "カタリスト系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Boosts Catalyst-type ability.<br>ALL(+10)"
    },
    "RJ21": {
        "name_en": "Cater Soul",
        "name_jp": "キャタ・ソール",
        "name_glen": "Catre Soul",
        "effect_en": "T-DEF(+30),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "法撃防御(+30)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "TEC Def(+30),<br>HP(+20),<br>PP(+1)"
    },
    "TD08": {
        "name_en": "Ceremo Fever",
        "name_jp": "セレモ・フィーバー",
        "name_glen": "Ceremo Fever",
        "effect_en": "S-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃力(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "RE22": {
        "name_en": "Chrome Soul",
        "name_jp": "クローム・ソール",
        "name_glen": "Chrome Soul",
        "effect_en": "DEX(+30),<br>HP(+10),<br>PP(+3)",
        "effect_jp": "技量(+30)<br>HP(+10)<br>PP(+3)",
        "effect_glen": "DEX(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RP05": {
        "name_en": "Cougar Soul",
        "name_jp": "クーガー・ソール",
        "name_glen": "*Cougar Soul",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+15)<br>HP(+10)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)"
    },
    "TM01": {
        "name_en": "Crack I",
        "name_jp": "クラックⅠ",
        "name_glen": "Crack I",
        "effect_en": "S-ATK(+3),<br>R-ATK(+3),<br>T-ATK(+3),<br>S-DEF(+5),<br>R-DEF(+5),<br>T-DEF(+5),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃力(+3)<br>射撃力(+3)<br>法撃力(+3)<br>打撃防御(+5)<br>射撃防御(+5)<br>法撃防御(+5)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+3),<br>RNG Pwr(+3),<br>TEC Pwr(+3),<br>MEL Def(+5),<br>RNG Def(+5),<br>TEC Def(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TM02": {
        "name_en": "Crack II",
        "name_jp": "クラックⅡ",
        "name_glen": "Crack II",
        "effect_en": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>S-DEF(+10),<br>R-DEF(+10),<br>T-DEF(+10),<br>HP(+10),<br>PP(+1)",
        "effect_jp": "打撃力(+5)<br>射撃力(+5)<br>法撃力(+5)<br>打撃防御(+10)<br>射撃防御(+10)<br>法撃防御(+10)<br>HP(+10)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>MEL Def(+10),<br>RNG Def(+10),<br>TEC Def(+10),<br>HP(+10),<br>PP(+1)"
    },
    "TM03": {
        "name_en": "Crack III",
        "name_jp": "クラックⅢ",
        "name_glen": "Crack III",
        "effect_en": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+15),<br>PP(+1)",
        "effect_jp": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>打撃防御(+15)<br>射撃防御(+15)<br>法撃防御(+15)<br>HP(+15)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>MEL Def(+15),<br>RNG Def(+15),<br>TEC Def(+15),<br>HP(+15),<br>PP(+1)"
    },
    "TM04": {
        "name_en": "Crack IV",
        "name_jp": "クラックⅣ",
        "name_glen": "Crack IV",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>S-DEF(+30),<br>R-DEF(+30),<br>T-DEF(+30),<br>HP(+30),<br>PP(+2)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>打撃防御(+30)<br>射撃防御(+30)<br>法撃防御(+30)<br>HP(+30)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>MEL Def(+30),<br>RNG Def(+30),<br>TEC Def(+30),<br>HP(+30),<br>PP(+2)"
    },
    "TM05": {
        "name_en": "Crack V",
        "name_jp": "クラックⅤ",
        "name_glen": "Crack V",
        "effect_en": "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+50),<br>PP(+2)",
        "effect_jp": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)<br>打撃防御(+50)<br>射撃防御(+50)<br>法撃防御(+50)<br>HP(+50)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30),<br>MEL Def(+50),<br>RNG Def(+50),<br>TEC Def(+50),<br>HP(+50),<br>PP(+2)"
    },
    "RZ01": {
        "name_en": "Darkness Soul",
        "name_jp": "ダークネス・ソール",
        "name_glen": "Soul of Darkness",
        "effect_en": "ALL(+15),<br>HP(+15),<br>PP(+2)",
        "effect_jp": "ALL(+15)<br>HP(+15)<br>PP(+2)",
        "effect_glen": "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "RA31": {
        "name_en": "Deadleon Soul",
        "name_jp": "デッドリオン・ソール",
        "name_glen": "Deadlion Soul",
        "effect_en": "S-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        "effect_jp": "打撃力(+35)<br>技量(+5)<br>HP(+30)",
        "effect_glen": "MEL Pwr(+35),<br>DEX(+5),<br>HP(+30)"
    },
    "XI21": {
        "name_en": "Defense Boost",
        "name_jp": "ディフェンス・ブースト",
        "name_glen": "Enhanced Defense",
        "effect_en": "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)",
        "effect_jp": "打撃防御(+25)<br>射撃防御(+25)<br>法撃防御(+25)<br>HP(+55)<br>PP(+1)",
        "effect_glen": "MEL Def(+25),RNG Def(+25),TEC Def(+25),HP(+55),PP(+1)"
    },
    "TG04": {
        "name_en": "Deus Factor",
        "name_jp": "デウス・ファクター",
        "name_glen": "Deus Factor",
        "effect_en": "S-ATK(+20),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "打撃力(+20)<br>射撃力(+10)<br>法撃力(+10)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20),<br>PP(+1)"
    },
    "RC31": {
        "name_en": "Diabo Soul",
        "name_jp": "ディアボ・ソール",
        "name_glen": "Diabo Soul",
        "effect_en": "T-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        "effect_jp": "法撃力(+35)<br>技量(+5)<br>HP(+30)",
        "effect_glen": "TEC Pwr(+35),<br>DEX(+5),<br>HP(+30)"
    },
    "ID02": {
        "name_en": "Divine Order",
        "name_jp": "ディバイン・オーダー",
        "name_glen": "Divine Order",
        "effect_en": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>HP(+20),<br>PP(+10)",
        "effect_jp": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>HP(+20)<br>PP(+10)",
        "effect_glen": "MEL Pwr(+50),<br>RNG Pwr(+50),<br>TEC Pwr(+50),<br>HP(+20),<br>PP(+10)"
    },
    "XJ01": {
        "name_en": "Divine Receptor",
        "name_jp": "ディバインレセプター",
        "name_glen": "Divine Receptor",
        "effect_en": "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
        "effect_jp": "ディバイン系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases the Transfer rate of Divine-type Augments.<br>ALL(+10)"
    },
    "ID01": {
        "name_en": "Divine Will",
        "name_jp": "ディバイン・ウィル",
        "name_glen": "Divine Will",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+5)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>PP(+5)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+5)"
    },
    "TN03": {
        "name_en": "Dominus Glare",
        "name_jp": "ドゥミヌス・グレア",
        "name_glen": "Duminus Glare",
        "effect_en": "T-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+40)",
        "effect_jp": "法撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+40)",
        "effect_glen": "TEC Pwr(+30)<br>MEL Def(+20)<br>RNG Def(+20)<br>TEC Def(+40)"
    },
    "TH01": {
        "name_en": "Doom Break I",
        "name_jp": "ドゥームブレイクⅠ",
        "name_glen": "Doom Break I",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>PP(+2)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>PP(+2)"
    },
    "TH02": {
        "name_en": "Doom Break II",
        "name_jp": "ドゥームブレイクⅡ",
        "name_glen": "Doom Break II",
        "effect_en": "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>PP(+3)",
        "effect_jp": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>PP(+3)"
    },
    "TH03": {
        "name_en": "Doom Break III",
        "name_jp": "ドゥームブレイクⅢ",
        "name_glen": "Doom Break III",
        "effect_en": "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>PP(+4)",
        "effect_jp": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30),<br>PP(+4)"
    },
    "TK05": {
        "name_en": "Double Reverie",
        "name_jp": "ダブル・レヴリー",
        "name_glen": "Gemini Reverie",
        "effect_en": "S-ATK(-20),<br>R-ATK(-20),<br>T-ATK(-20),<br>HP(+50),<br>PP(+5)",
        "effect_jp": "打撃力(-20)<br>射撃力(-20)<br>法撃力(-20)<br>HP(+50)<br>PP(+5)",
        "effect_glen": "MEL Pwr(-20),<br>RNG Pwr(-20),<br>TEC Pwr(-20),<br>HP(+50),<br>PP(+5)"
    },
    "RQ01": {
        "name_en": "Double Soul",
        "name_jp": "ダブル・ソール",
        "name_glen": "Gemini Soul",
        "effect_en": "HP(+40),<br>PP(+3)",
        "effect_jp": "HP(+40)<br>PP(+3)",
        "effect_glen": "HP(+40),<br>PP(+3)"
    },
    "TD0G": {
        "name_en": "Drago Fever",
        "name_jp": "ドラグ・フィーバー",
        "name_glen": "Dragon Fever",
        "effect_en": "DEX(+5),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "技量(+5)<br>射撃防御(+10)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "DEX(+5),<br>RNG Def(+10),<br>HP(+5),<br>PP(+1)"
    },
    "RC32": {
        "name_en": "Duvals Soul",
        "name_jp": "ドゥバルス・ソール",
        "name_glen": "Deubarz Soul",
        "effect_en": "T-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "法撃力(+35)<br>技量(+5)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "TEC Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
    },
    "TD02": {
        "name_en": "Egg Fever",
        "name_jp": "エグ・フィーバー",
        "name_glen": "Egg Fever",
        "effect_en": "R-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        "effect_jp": "射撃力(+10)<br>技量(+5)<br>HP(+10)",
        "effect_glen": "RNG Pwr(+10),<br>DEX(+5),<br>HP(+10)"
    },
    "TK02": {
        "name_en": "Elder Reverie",
        "name_jp": "エルダー・レヴリー",
        "name_glen": "Elder Reverie",
        "effect_en": "S-ATK(+40),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(-2)",
        "effect_jp": "打撃力(+40)<br>射撃力(+20)<br>法撃力(+20)<br>PP(-2)",
        "effect_glen": "MEL Pwr(+40),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(-2)"
    },
    "RC23": {
        "name_en": "Elder Soul",
        "name_jp": "エルダー・ソール",
        "name_glen": "Elder Soul",
        "effect_en": "T-ATK(+30),<br>PP(+3)",
        "effect_jp": "法撃力(+30)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+30),<br>PP(+3)"
    },
    "XI11": {
        "name_en": "Elegant Power",
        "name_jp": "エレガント・パワー",
        "name_glen": "Elegant Might",
        "effect_en": "S-ATK(+40),PP(+4)",
        "effect_jp": "打撃力(+40)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+40),PP(+4)"
    },
    "XI12": {
        "name_en": "Elegant Shoot",
        "name_jp": "エレガント・シュート",
        "name_glen": "Elegant Precision",
        "effect_en": "R-ATK(+40),PP(+4)",
        "effect_jp": "射撃力(+40)<br>PP(+4)",
        "effect_glen": "RNG Pwr(+40),PP(+4)"
    },
    "XI14": {
        "name_en": "Elegant Stamina",
        "name_jp": "エレガント・スタミナ",
        "name_glen": "Elegant Stamina",
        "effect_en": "HP(+70),PP(+4)",
        "effect_jp": "HP(+70)<br>PP(+4)",
        "effect_glen": "HP(+70),PP(+4)"
    },
    "XI13": {
        "name_en": "Elegant Technique",
        "name_jp": "エレガント・テクニック",
        "name_glen": "Elegant Casting",
        "effect_en": "T-ATK(+40),PP(+4)",
        "effect_jp": "法撃力(+40)<br>PP(+4)",
        "effect_glen": "TEC Pwr(+40),PP(+4)"
    },
    "VK01": {
        "name_en": "Emper Embrace",
        "name_jp": "エンペ・エンブレイス",
        "name_glen": "Empy Embrace",
        "effect_en": "Adds 90 EXP to NT weapon grinds.",
        "effect_jp": "新世武器強化時の経験値が増加する+90",
        "effect_glen": "Adds 90 EXP to NT weapon grinds."
    },
    "SB03": {
        "name_en": "Escarde Soul",
        "name_jp": "エスカード・ソール",
        "name_glen": "Escarde Soul",
        "effect_en": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>DEX(+20)",
        "effect_jp": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>技量(+20)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>DEX(+20)"
    },
    "TG31": {
        "name_en": "Ether Factor",
        "name_jp": "エーテル・ファクター",
        "name_glen": "Aether Factor",
        "effect_en": "ALL(+30),<br>HP(+10),<br>PP(+6)",
        "effect_jp": "ALL(+30)<br>HP(+10)<br>PP(+6)",
        "effect_glen": "ALL(+30),<br>HP(+10),<br>PP(+6)"
    },
    "SA11": {
        "name_en": "Ether Soul",
        "name_jp": "エーテル・ソール",
        "name_glen": "Aether Soul",
        "effect_en": "ALL(+15),<br>HP(+15),<br>PP(+2)",
        "effect_jp": "ALL(+15)<br>HP(+15)<br>PP(+2)",
        "effect_glen": "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "LP06": {
        "name_en": "EV Power HP",
        "name_jp": "EV・パワーHP",
        "name_glen": "EV Might HP",
        "effect_en": "S-ATK(+35),<br>HP(+60)",
        "effect_jp": "打撃力(+35)<br>HP(+60)",
        "effect_glen": "MEL Pwr(+35),<br>HP(+60)"
    },
    "LP07": {
        "name_en": "EV Power PP",
        "name_jp": "EV・パワーPP",
        "name_glen": "EV Might PP",
        "effect_en": "S-ATK(+35),<br>PP(+4)",
        "effect_jp": "打撃力(+35)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+35),<br>PP(+4)"
    },
    "LS06": {
        "name_en": "EV Shoot HP",
        "name_jp": "EV・シュートHP",
        "name_glen": "EV Precision HP",
        "effect_en": "R-ATK(+35),<br>HP(+60)",
        "effect_jp": "射撃力(+35)<br>HP(+60)",
        "effect_glen": "RNG Pwr(+35),<br>HP(+60)"
    },
    "LS07": {
        "name_en": "EV Shoot PP",
        "name_jp": "EV・シュートPP",
        "name_glen": "EV Precision PP",
        "effect_en": "R-ATK(+35),<br>PP(+4)",
        "effect_jp": "射撃力(+35)<br>PP(+4)",
        "effect_glen": "RNG Pwr(+35),<br>PP(+4)"
    },
    "LT06": {
        "name_en": "EV Technique HP",
        "name_jp": "EV・テクニックHP",
        "name_glen": "EV Casting HP",
        "effect_en": "T-ATK(+35),<br>HP(+60)",
        "effect_jp": "法撃力(+35)<br>HP(+60)",
        "effect_glen": "TEC Pwr(+35),<br>HP(+60)"
    },
    "LT07": {
        "name_en": "EV Technique PP",
        "name_jp": "EV・テクニックPP",
        "name_glen": "EV Casting PP",
        "effect_en": "T-ATK(+35),<br>PP(+4)",
        "effect_jp": "法撃力(+35)<br>PP(+4)",
        "effect_glen": "TEC Pwr(+35),<br>PP(+4)"
    },
    "SI01": {
        "name_en": "Ex Act Soul",
        "name_jp": "イクスアクト・ソール",
        "name_glen": "EX Acto Soul",
        "effect_en": "S-ATK(+30),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+2)",
        "effect_jp": "打撃力(+30)<br>HP(+20)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
        "effect_glen": "MEL Pwr(+30),<br>MEL Def(+20),<br>RNG Def(+20),<br>TEC Def(+20),<br>HP(+20),<br>PP(+2)"
    },
    "SI04": {
        "name_en": "Ex Ares Soul",
        "name_jp": "イクスアレス・ソール",
        "name_glen": "EX Alles Soul",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+50),<br>PP(+2)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>HP(+50)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>MEL Def(+20),<br>RNG Def(+20),<br>TEC Def(+20),<br>HP(+50),<br>PP(+2)"
    },
    "SI03": {
        "name_en": "Ex Magi Soul",
        "name_jp": "イクスマギー・ソール",
        "name_glen": "EX Magi Soul",
        "effect_en": "T-ATK(+30),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+2)",
        "effect_jp": "法撃力(+30)<br>HP(+20)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
        "effect_glen": "TEC Pwr(+30),<br>MEL Def(+20),<br>RNG Def(+20),<br>TEC Def(+20),<br>HP(+20),<br>PP(+2)"
    },
    "RH23": {
        "name_en": "Ex Soul",
        "name_jp": "エクス・ソール",
        "name_glen": "X Soul",
        "effect_en": "S-DEF(+30),<br>PP(+4)",
        "effect_jp": "打撃防御(+30)<br>PP(+4)",
        "effect_glen": "MEL Def(+30),<br>PP(+4)"
    },
    "SI02": {
        "name_en": "Ex Till Soul",
        "name_jp": "イクスティル・ソール",
        "name_glen": "EX Tir Soul",
        "effect_en": "R-ATK(+30),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+2)",
        "effect_jp": "射撃力(+30)<br>HP(+20)<br>PP(+2)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)",
        "effect_glen": "RNG Pwr(+30),<br>MEL Def(+20),<br>RNG Def(+20),<br>TEC Def(+20),<br>HP(+20),<br>PP(+2)"
    },
    "IE01": {
        "name_en": "Exceed Energy",
        "name_jp": "イクシード・エナジー",
        "name_glen": "Exceed Energy",
        "effect_en": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+20),<br>S-DEF(+20),<br>R-DEF(+20),<br>T-DEF(+20),<br>HP(+20),<br>PP(+5)",
        "effect_jp": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+5)",
        "effect_glen": "MEL Pwr(+50),<br>RNG Pwr(+50),<br>TEC Pwr(+50),<br>DEX(+20),<br>MEL Def(+20),<br>RNG Def(+20),<br>TEC Def(+20),<br>HP(+20),<br>PP(+5)"
    },
    "XK01": {
        "name_en": "Exceed Receptor",
        "name_jp": "イクシードレセプター",
        "name_glen": "Exceed Receptor",
        "effect_en": "Greatly increases affix rate of Exceed-type ability.<br>ALL(+10)",
        "effect_jp": "イクシード系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases the Transfer rate of Exceed Energy.<br>ALL(+10)"
    },
    "TN05": {
        "name_en": "Execour Glare",
        "name_jp": "エクゼクル・グレア",
        "name_glen": "Exegul Glare",
        "effect_en": "S-ATK(+20)<br>R-ATK(+20)<br>T-ATK(+20)<br>S-DEF(+50)<br>R-DEF(+50)<br>T-DEF(+50)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>打撃防御(+50)<br>射撃防御(+50)<br>法撃防御(+50)",
        "effect_glen": "MEL Pwr(+20)<br>RNG Pwr(+20)<br>TEC Pwr(+20)<br>MEL Def(+50)<br>RNG Def(+50)<br>TEC Def(+50)"
    },
    "VC01": {
        "name_en": "EXP Boost I",
        "name_jp": "EXPブーストⅠ",
        "name_glen": "Increased EXP I",
        "effect_en": "Experience Gain +5%",
        "effect_jp": "取得する経験値が増加+5%",
        "effect_glen": "Experience Gain +5%"
    },
    "VC02": {
        "name_en": "EXP Boost II",
        "name_jp": "EXPブーストⅡ",
        "name_glen": "Increased EXP II",
        "effect_en": "Experience Gain +7%",
        "effect_jp": "取得する経験値が増加+7%",
        "effect_glen": "Experience Gain +7%"
    },
    "VC03": {
        "name_en": "EXP Boost III",
        "name_jp": "EXPブーストⅢ",
        "name_glen": "Increased EXP III",
        "effect_en": "Experience Gain +10%",
        "effect_jp": "取得する経験値が増加+10%",
        "effect_glen": "Experience Gain +10%"
    },
    "XB01": {
        "name_en": "Extreceptor",
        "name_jp": "エクストレセプター",
        "name_glen": "Extreme Receptor",
        "effect_en": "Greatly increases Flict, Alter affix rate<br>ALL(+10)",
        "effect_jp": "アルター・フリクト系と特定の特殊能力継承率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases transfer rate for Alter- and Flict-type Augments.<br>ALL(+10)"
    },
    "SB04": {
        "name_en": "Fabula Soul",
        "name_jp": "ファーブラ・ソール",
        "name_glen": "Fabula Soul",
        "effect_en": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
        "effect_jp": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>HP(+20)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20)"
    },
    "VJ02": {
        "name_en": "Factor Catalyst",
        "name_jp": "ファクター・カタリスト",
        "name_glen": "Factor Catalyst",
        "effect_en": "HP(+10),<br>PP(+1)",
        "effect_jp": "HP(+10)<br>PP(+1)",
        "effect_glen": "HP(+10),<br>PP(+1)"
    },
    "XF01": {
        "name_en": "Factor Receptor",
        "name_jp": "ファクターレセプター",
        "name_glen": "Factor Receptor",
        "effect_en": "Boosts Factor-type ability transfer rates.<br>ALL(+10)",
        "effect_jp": "ファクター系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases Factor-type Augment transfer success rate.<br>ALL(+10)"
    },
    "RB22": {
        "name_en": "Fang Soul",
        "name_jp": "ファング・ソール",
        "name_glen": "Fang Soul",
        "effect_en": "R-ATK(+30),<br>HP(+10),<br>PP(+2)",
        "effect_jp": "射撃力(+30)<br>HP(+10)<br>PP(+2)",
        "effect_glen": "RNG Pwr(+30),<br>HP(+10),<br>PP(+2)"
    },
    "HI01": {
        "name_en": "Fire Resist I",
        "name_jp": "フレイムレジストⅠ",
        "name_glen": "Wildfire Ward I",
        "effect_en": "Flame Resist(+3)",
        "effect_jp": "炎耐性(+3)",
        "effect_glen": "Fire Resist (+3)"
    },
    "HI02": {
        "name_en": "Fire Resist II",
        "name_jp": "フレイムレジストⅡ",
        "name_glen": "Wildfire Ward II",
        "effect_en": "Flame Resist(+4)",
        "effect_jp": "炎耐性(+4)",
        "effect_glen": "Fire Resist (+4)"
    },
    "HI03": {
        "name_en": "Fire Resist III",
        "name_jp": "フレイムレジストⅢ",
        "name_glen": "Wildfire Ward III",
        "effect_en": "Flame Resist(+5)",
        "effect_jp": "炎耐性(+5)",
        "effect_glen": "Fire Resist(+5)"
    },
    "HI04": {
        "name_en": "Fire Resist IV",
        "name_jp": "フレイムレジストⅣ",
        "name_glen": "Wildfire Ward IV",
        "effect_en": "Flame Resist(+6)",
        "effect_jp": "炎耐性(+6)",
        "effect_glen": "Fire Resist(+6)"
    },
    "HI05": {
        "name_en": "Fire Resist V",
        "name_jp": "フレイムレジストⅤ",
        "name_glen": "Wildfire Ward V",
        "effect_en": "Flame Resist(+7)",
        "effect_jp": "炎耐性(+7)",
        "effect_glen": "Fire Resist(+7)"
    },
    "UA01": {
        "name_en": "Flict Arma",
        "name_jp": "フリクト・アルマ",
        "name_glen": "Flict Arma",
        "effect_en": "S-ATK(+20),<br>PP(+3)",
        "effect_jp": "打撃力(+20)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+20),<br>PP(+3)"
    },
    "UA21": {
        "name_en": "Flict Magia",
        "name_jp": "フリクト・マギア",
        "name_glen": "Flict Magia",
        "effect_en": "T-ATK(+20),<br>PP(+3)",
        "effect_jp": "法撃力(+20)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+20),<br>PP(+3)"
    },
    "UA11": {
        "name_en": "Flict Tiro",
        "name_jp": "フリクト・ティロ",
        "name_glen": "Flict Tyro",
        "effect_en": "R-ATK(+20),<br>PP(+3)",
        "effect_jp": "射撃力(+20)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+20),<br>PP(+3)"
    },
    "TN04": {
        "name_en": "Fordruss Glare",
        "name_jp": "フォードルス・グレア",
        "name_glen": "Fodrus Glare",
        "effect_en": "S-DEF(+35)<br>R-DEF(+35)<br>T-DEF(+35)<br>HP(+40)<br>PP(+4)",
        "effect_jp": "打撃防御(+35)<br>射撃防御(+35)<br>法撃防御(+35)<br>HP(+40)<br>PP(+4)",
        "effect_glen": "MEL Def(+35)<br>RNG Def(+35)<br>TEC Def(+35)<br>HP(+40)<br>PP(+4)"
    },
    "JB01": {
        "name_en": "Freeze I",
        "name_jp": "フリーズⅠ",
        "name_glen": "Freeze I",
        "effect_en": "Grants Freeze Lv1",
        "effect_jp": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv1を付与する",
        "effect_glen": "Grants Freeze Lv1"
    },
    "JB02": {
        "name_en": "Freeze II",
        "name_jp": "フリーズⅡ",
        "name_glen": "Freeze II",
        "effect_en": "Grants Freeze Lv2",
        "effect_jp": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv2を付与する",
        "effect_glen": "Grants Freeze Lv2"
    },
    "JB03": {
        "name_en": "Freeze III",
        "name_jp": "フリーズⅢ",
        "name_glen": "Freeze III",
        "effect_en": "Grants Freeze Lv3",
        "effect_jp": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv3を付与する",
        "effect_glen": "Grants Freeze Lv3"
    },
    "JB04": {
        "name_en": "Freeze IV",
        "name_jp": "フリーズⅣ",
        "name_glen": "Freeze IV",
        "effect_en": "Grants Freeze Lv4",
        "effect_jp": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv4を付与する",
        "effect_glen": "Grants Freeze Lv4"
    },
    "JB05": {
        "name_en": "Freeze V",
        "name_jp": "フリーズⅤ",
        "name_glen": "Freeze V",
        "effect_en": "Grants Freeze Lv5",
        "effect_jp": "合成&継承率UP:イーデッタ、マルモ、バル、ダブル\nフリーズLv5を付与する",
        "effect_glen": "Grants Freeze Lv5"
    },
    "VF01": {
        "name_en": "Fresh Sign",
        "name_jp": "フレッシュ・サイン",
        "name_glen": "Fresh Sign",
        "effect_en": "Boost EXP by 30% until Lv.30",
        "effect_jp": "Lv30に到達するまで取得する経験値が増加する+30%",
        "effect_glen": "Boost EXP by 30% until Lv.30"
    },
    "TD03": {
        "name_en": "Frog Fever",
        "name_jp": "フログ・フィーバー",
        "name_glen": "Froggy Fever",
        "effect_en": "T-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        "effect_jp": "法撃力(+10)<br>技量(+5)<br>HP(+10)",
        "effect_glen": "TEC Pwr(+10),<br>DEX(+5),<br>HP(+10)"
    },
    "SB02": {
        "name_en": "Full Vegas Soul",
        "name_jp": "フルベガス・ソール",
        "name_glen": "Fullvegas Soul",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15)"
    },
    "XC01": {
        "name_en": "Gift Receptor",
        "name_jp": "ギフトレセプター",
        "name_glen": "Gift Receptor",
        "effect_en": "Allows transfer of Gift affixes",
        "effect_jp": "ギフト系特殊能力の引き継ぎが可能になる\nALL(+10)",
        "effect_glen": "Enables inheritance of Gift-type Augments."
    },
    "VJ04": {
        "name_en": "Glare Catalyst",
        "name_jp": "グレア・カタリスト",
        "name_glen": "Glare Catalyst",
        "effect_en": "HP(+10),<br>PP(+1)",
        "effect_jp": "HP(+10)<br>PP(+1)",
        "effect_glen": "HP(+10),<br>PP(+1)"
    },
    "HN01": {
        "name_en": "Gloom Resist I",
        "name_jp": "グルームレジストⅠ",
        "name_glen": "Umbral Ward I",
        "effect_en": "Dark Resist(+3)",
        "effect_jp": "闇耐性(+3)",
        "effect_glen": "Dark Resist(+3)"
    },
    "HN02": {
        "name_en": "Gloom Resist II",
        "name_jp": "グルームレジストⅡ",
        "name_glen": "Umbral Ward II",
        "effect_en": "Dark Resist(+4)",
        "effect_jp": "闇耐性(+4)",
        "effect_glen": "Dark Resist(+4)"
    },
    "HN03": {
        "name_en": "Gloom Resist III",
        "name_jp": "グルームレジストⅢ",
        "name_glen": "Umbral Ward III",
        "effect_en": "Dark Resist(+5)",
        "effect_jp": "闇耐性(+5)",
        "effect_glen": "Dark Resist(+5)"
    },
    "HN04": {
        "name_en": "Gloom Resist IV",
        "name_jp": "グルームレジストⅣ",
        "name_glen": "Umbral Ward IV",
        "effect_en": "Dark Resist(+6)",
        "effect_jp": "闇耐性(+6)",
        "effect_glen": "Dark Resist(+6)"
    },
    "HN05": {
        "name_en": "Gloom Resist V",
        "name_jp": "グルームレジストⅤ",
        "name_glen": "Umbral Ward V",
        "effect_en": "Dark Resist(+7)",
        "effect_jp": "闇耐性(+7)",
        "effect_glen": "Dark Resist(+7)"
    },
    "RJ23": {
        "name_en": "Goron Soul",
        "name_jp": "ゴロン・ソール",
        "name_glen": "Goron Soul",
        "effect_en": "T-DEF(+30),<br>PP(+4)",
        "effect_jp": "法撃防御(+30)<br>PP(+4)",
        "effect_glen": "TEC Def(+30),<br>PP(+4)"
    },
    "XI52": {
        "name_en": "Grace Power",
        "name_jp": "グレース・パワー",
        "name_glen": "Graceful Might",
        "effect_en": "S-ATK(+50),PP(+5)",
        "effect_jp": "打撃力(+50)<br>PP(+5)",
        "effect_glen": "MEL Pwr(+50),PP(+5)"
    },
    "XI53": {
        "name_en": "Grace Shoot",
        "name_jp": "グレース・シュート",
        "name_glen": "Graceful Precision",
        "effect_en": "R-ATK(+50),PP(+5)",
        "effect_jp": "射撃力(+50)<br>PP(+5)",
        "effect_glen": "RNG Pwr(+50),PP(+5)"
    },
    "XI51": {
        "name_en": "Grace Stamina",
        "name_jp": "グレース・スタミナ",
        "name_glen": "Graceful Stamina",
        "effect_en": "HP(+80),PP(+5)",
        "effect_jp": "HP(+80)<br>PP(+5)",
        "effect_glen": "HP(+80),PP(+5)"
    },
    "XI54": {
        "name_en": "Grace Technique",
        "name_jp": "グレース・テクニック",
        "name_glen": "Graceful Casting",
        "effect_en": "T-ATK(+50),PP(+5)",
        "effect_jp": "法撃力(+50)<br>PP(+5)",
        "effect_glen": "TEC Pwr(+50),PP(+5)"
    },
    "XI62": {
        "name_en": "Grand Power",
        "name_jp": "グランド・パワー",
        "name_glen": "Grand Might",
        "effect_en": "S-ATK(+60),HP(+20),PP(+5)",
        "effect_jp": "打撃力(+60)<br>HP(+20)<br>PP(+5)",
        "effect_glen": "MEL Pwr(+60),HP(+20),PP(+5)"
    },
    "XI63": {
        "name_en": "Grand Shoot",
        "name_jp": "グランド・シュート",
        "name_glen": "Grand Precision",
        "effect_en": "R-ATK(+60),HP(+20),PP(+5)",
        "effect_jp": "射撃力(+60)<br>HP(+20)<br>PP(+5)",
        "effect_glen": "RNG Pwr(+60),HP(+20),PP(+5)"
    },
    "XI60": {
        "name_en": "Grand Spirita",
        "name_jp": "グランド・スピリタ",
        "name_glen": "Grand Spirit",
        "effect_en": "PP(+15)",
        "effect_jp": "PP(+15)",
        "effect_glen": "PP(+15)"
    },
    "XI61": {
        "name_en": "Grand Stamina",
        "name_jp": "グランド・スタミナ",
        "name_glen": "Grand Stamina",
        "effect_en": "HP(+100),PP(+6)",
        "effect_jp": "HP(+100)<br>PP(+6)",
        "effect_glen": "HP(+100),PP(+6)"
    },
    "XI64": {
        "name_en": "Grand Technique",
        "name_jp": "グランド・テクニック",
        "name_glen": "Grand Casting",
        "effect_en": "T-ATK(+60),HP(+20),PP(+5)",
        "effect_jp": "法撃力(+60)<br>HP(+20)<br>PP(+5)",
        "effect_glen": "TEC Pwr(+60),HP(+20),PP(+5)"
    },
    "RB33": {
        "name_en": "Greuzoras Soul",
        "name_jp": "グリュゾラス・ソール",
        "name_glen": "Gryzorus Soul",
        "effect_en": "R-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        "effect_jp": "射撃力(+35)<br>技量(+5)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+35),<br>DEX(+5),<br>PP(+3)"
    },
    "XI0b": {
        "name_en": "GRM Boost",
        "name_jp": "GRM・ブースト",
        "name_glen": "*GRM Boost",
        "effect_en": "R-ATK(+35)",
        "effect_jp": "射撃力(+35)",
        "effect_glen": "RNG Pwr(+35)"
    },
    "RP10": {
        "name_en": "Gryphon Soul",
        "name_jp": "グリフォン・ソール",
        "name_glen": "Gryphon Soul",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+15)<br>HP(+5)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)"
    },
    "XI23": {
        "name_en": "Guard Boost",
        "name_jp": "ガード・ブースト",
        "name_glen": "Guard Boost",
        "effect_en": "S-DEF(+35),R-DEF(+35),T-DEF(+35),HP(+75),PP(+3)",
        "effect_jp": "打撃防御(+35)<br>射撃防御(+35)<br>法撃防御(+35)<br>HP(+75)<br>PP(+3)",
        "effect_glen": "MEL Def(+35),RNG Def(+35),TEC Def(+35),HP(+75),PP(+3)"
    },
    "XI31": {
        "name_en": "Guard Receptor",
        "name_jp": "ガードレセプター",
        "name_glen": "Guard Receptor",
        "effect_en": "Greatly increases affix rate of <br>Mind, Body, React<br>ALL(+5)",
        "effect_jp": "特殊能力ボディ、リアクト、マインドの継承成功率を大幅に上昇\nALL(+5)",
        "effect_glen": "Greatly increases the Transfer rate of<br>Toughness, Reflex, and Genius.<br>ALL(+5)"
    },
    "SA02": {
        "name_en": "Guardian Soul",
        "name_jp": "ガーディアン・ソール",
        "name_glen": "Guardian Soul",
        "effect_en": "ALL(+70),<br>HP(+70),<br>PP(+7)",
        "effect_jp": "ALL(+70)<br>HP(+70)<br>PP(+7)",
        "effect_glen": "ALL(+70),<br>HP(+70),<br>PP(+7)"
    },
    "VO01": {
        "name_en": "Guidance Trainer",
        "name_jp": "錬成の導き",
        "name_glen": "Augment Guidance",
        "effect_en": "Boosts Special Ability<br>transfer success rate onto this item<br>by 5%.",
        "effect_jp": "この装備品への特殊能力追加成功率が上昇する+5%",
        "effect_glen": "Boosts Special Ability<br>transfer success rate onto this item<br>by 5%."
    },
    "RA11": {
        "name_en": "Gunne Soul",
        "name_jp": "グンネ・ソール",
        "name_glen": "Gunne Soul",
        "effect_en": "S-ATK(+15),<br>HP(+45)",
        "effect_jp": "打撃力(+15)<br>HP(+45)",
        "effect_glen": "MEL Pwr(+15),<br>HP(+45)"
    },
    "RC33": {
        "name_en": "Guranz Soul",
        "name_jp": "グランゾ・ソール",
        "name_glen": "Granz Soul",
        "effect_en": "T-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        "effect_jp": "法撃力(+35)<br>技量(+5)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+35),<br>DEX(+5),<br>PP(+3)"
    },
    "RA22": {
        "name_en": "Gwana Soul",
        "name_jp": "グワナ・ソール",
        "name_glen": "Gwana Soul",
        "effect_en": "S-ATK(+30),<br>HP(+10),<br>PP(+2)",
        "effect_jp": "打撃力(+30)<br>HP(+10)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+30),<br>HP(+10),<br>PP(+2)"
    },
    "SB05": {
        "name_en": "Historia Soul",
        "name_jp": "イストリア・ソール",
        "name_glen": "Historia Soul",
        "effect_en": "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>HP(+30),<br>PP(+2)",
        "effect_jp": "打撃防御(+25)<br>射撃防御(+25)<br>法撃防御(+25)<br>HP(+30)<br>PP(+2)",
        "effect_glen": "MEL Def(+25),<br>RNG Def(+25),<br>TEC Def(+25),<br>HP(+30),<br>PP(+2)"
    },
    "HJ01": {
        "name_en": "Ice Resist I",
        "name_jp": "アイスレジストⅠ",
        "name_glen": "Frost Ward I",
        "effect_en": "Ice Resist(+3)",
        "effect_jp": "氷耐性(+3)",
        "effect_glen": "Ice Resist(+3)"
    },
    "HJ02": {
        "name_en": "Ice Resist II",
        "name_jp": "アイスレジストⅡ",
        "name_glen": "Frost Ward II",
        "effect_en": "Ice Resist(+4)",
        "effect_jp": "氷耐性(+4)",
        "effect_glen": "Ice Resist(+4)"
    },
    "HJ03": {
        "name_en": "Ice Resist III",
        "name_jp": "アイスレジストⅢ",
        "name_glen": "Frost Ward III",
        "effect_en": "Ice Resist(+5)",
        "effect_jp": "氷耐性(+5)",
        "effect_glen": "Ice Resist(+5)"
    },
    "HJ04": {
        "name_en": "Ice Resist IV",
        "name_jp": "アイスレジストⅣ",
        "name_glen": "Frost Ward IV",
        "effect_en": "Ice Resist(+6)",
        "effect_jp": "氷耐性(+6)",
        "effect_glen": "Ice Resist(+6)"
    },
    "HJ05": {
        "name_en": "Ice Resist V",
        "name_jp": "アイスレジストⅤ",
        "name_glen": "Frost Ward V",
        "effect_en": "Ice Resist(+7)",
        "effect_jp": "氷耐性(+7)",
        "effect_glen": "Ice Resist(+7)"
    },
    "RB11": {
        "name_en": "Idetta Soul",
        "name_jp": "イーデッタ・ソール",
        "name_glen": "Idihta Soul",
        "effect_en": "R-ATK(+15),<br>HP(+45)",
        "effect_jp": "射撃力(+15)<br>HP(+45)",
        "effect_glen": "RNG Pwr(+15),<br>HP(+45)"
    },
    "RP22": {
        "name_en": "Izane Kazuchi Soul",
        "name_jp": "イザネカヅチ・ソール",
        "name_glen": "Izanekazuchi Soul",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)"
    },
    "RC11": {
        "name_en": "Jhadu Soul",
        "name_jp": "ジャドゥ・ソール",
        "name_glen": "Jadeu Soul",
        "effect_en": "T-ATK(+15),<br>HP(+45)",
        "effect_jp": "法撃力(+15)<br>HP(+45)",
        "effect_glen": "TEC Pwr(+15),<br>HP(+45)"
    },
    "ZA01": {
        "name_en": "Junk A",
        "name_jp": "ジャンクA",
        "name_glen": "Junk A",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZB01": {
        "name_en": "Junk B",
        "name_jp": "ジャンクB",
        "name_glen": "Junk B",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZC01": {
        "name_en": "Junk C",
        "name_jp": "ジャンクC",
        "name_glen": "Junk C",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZD01": {
        "name_en": "Junk D",
        "name_jp": "ジャンクD",
        "name_glen": "Junk D",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZE01": {
        "name_en": "Junk E",
        "name_jp": "ジャンクE",
        "name_glen": "Junk E",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZF01": {
        "name_en": "Junk F",
        "name_jp": "ジャンクF",
        "name_glen": "Junk F",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZG01": {
        "name_en": "Junk G",
        "name_jp": "ジャンクG",
        "name_glen": "Junk G",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZH01": {
        "name_en": "Junk H",
        "name_jp": "ジャンクH",
        "name_glen": "Junk H",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "ZI01": {
        "name_en": "Junk I",
        "name_jp": "ジャンクI",
        "name_glen": "Junk I",
        "effect_en": "100% affix junk",
        "effect_jp": "100％合成成功率のジャンク。",
        "effect_glen": "100% affix junk"
    },
    "RP15": {
        "name_en": "Knight Gear Soul",
        "name_jp": "ナイトギア・ソール",
        "name_glen": "Knight Gear Soul",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>PP(+4)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+15)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>PP(+4)"
    },
    "TD06": {
        "name_en": "Latan Fever",
        "name_jp": "ラタン・フィーバー",
        "name_glen": "Lantern Fever",
        "effect_en": "T-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        "effect_jp": "法撃力(+10)<br>技量(+5)<br>PP(+2)",
        "effect_glen": "TEC Pwr(+10),<br>DEX(+5),<br>PP(+2)"
    },
    "RA32": {
        "name_en": "Leone Soul",
        "name_jp": "レオーネ・ソール",
        "name_glen": "Leone Soul",
        "effect_en": "S-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "打撃力(+35)<br>技量(+5)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RB31": {
        "name_en": "Leopard Soul",
        "name_jp": "レオパード・ソール",
        "name_glen": "Leopod Soul",
        "effect_en": "R-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        "effect_jp": "射撃力(+35)<br>技量(+5)<br>HP(+30)",
        "effect_glen": "RNG Pwr(+35),<br>DEX(+5),<br>HP(+30)"
    },
    "LP01": {
        "name_en": "Lesser Power I",
        "name_jp": "レッサーパワーⅠ",
        "name_glen": "Lesser Might I",
        "effect_en": "S-ATK(+5)",
        "effect_jp": "打撃力(+5)",
        "effect_glen": "MEL Pwr(+5)"
    },
    "LP02": {
        "name_en": "Lesser Power II",
        "name_jp": "レッサーパワーⅡ",
        "name_glen": "Lesser Might II",
        "effect_en": "S-ATK(+15)",
        "effect_jp": "打撃力(+15)",
        "effect_glen": "MEL Pwr(+15)"
    },
    "LP03": {
        "name_en": "Lesser Power III",
        "name_jp": "レッサーパワーⅢ",
        "name_glen": "Lesser Might III",
        "effect_en": "S-ATK(+25)",
        "effect_jp": "打撃力(+25)",
        "effect_glen": "MEL Pwr(+25)"
    },
    "LP04": {
        "name_en": "Lesser Power IV",
        "name_jp": "レッサーパワーⅣ",
        "name_glen": "Lesser Might IV",
        "effect_en": "S-ATK(+30)",
        "effect_jp": "打撃力(+30)",
        "effect_glen": "MEL Pwr(+30)"
    },
    "LP05": {
        "name_en": "Lesser Power V",
        "name_jp": "レッサーパワーⅤ",
        "name_glen": "Lesser Might V",
        "effect_en": "S-ATK(+35)",
        "effect_jp": "打撃力(+35)",
        "effect_glen": "MEL Pwr(+35)"
    },
    "LS01": {
        "name_en": "Lesser Shoot I",
        "name_jp": "レッサーシュートⅠ",
        "name_glen": "Lesser Precision I",
        "effect_en": "R-ATK(+5)",
        "effect_jp": "射撃力(+5)",
        "effect_glen": "RNG Pwr(+5)"
    },
    "LS02": {
        "name_en": "Lesser Shoot II",
        "name_jp": "レッサーシュートⅡ",
        "name_glen": "Lesser Precision II",
        "effect_en": "R-ATK(+15)",
        "effect_jp": "射撃力(+15)",
        "effect_glen": "RNG Pwr(+15)"
    },
    "LS03": {
        "name_en": "Lesser Shoot III",
        "name_jp": "レッサーシュートⅢ",
        "name_glen": "Lesser Precision III",
        "effect_en": "R-ATK(+25)",
        "effect_jp": "射撃力(+25)",
        "effect_glen": "RNG Pwr(+25)"
    },
    "LS04": {
        "name_en": "Lesser Shoot IV",
        "name_jp": "レッサーシュートⅣ",
        "name_glen": "Lesser Precision IV",
        "effect_en": "R-ATK(+30)",
        "effect_jp": "射撃力(+30)",
        "effect_glen": "RNG Pwr(+30)"
    },
    "LS05": {
        "name_en": "Lesser Shoot V",
        "name_jp": "レッサーシュートⅤ",
        "name_glen": "Lesser Precision V",
        "effect_en": "R-ATK(+35)",
        "effect_jp": "射撃力(+35)",
        "effect_glen": "RNG Pwr(+35)"
    },
    "LR01": {
        "name_en": "Lesser Spirita I",
        "name_jp": "レッサースピリタⅠ",
        "name_glen": "Lesser Spirit I",
        "effect_en": "PP(+1)",
        "effect_jp": "PP(+1)",
        "effect_glen": "PP(+1)"
    },
    "LR02": {
        "name_en": "Lesser Spirita II",
        "name_jp": "レッサースピリタⅡ",
        "name_glen": "Lesser Spirit II",
        "effect_en": "PP(+2)",
        "effect_jp": "PP(+2)",
        "effect_glen": "PP(+2)"
    },
    "LR03": {
        "name_en": "Lesser Spirita III",
        "name_jp": "レッサースピリタⅢ",
        "name_glen": "Lesser Spirit III",
        "effect_en": "PP(+3)",
        "effect_jp": "PP(+3)",
        "effect_glen": "PP(+3)"
    },
    "LR04": {
        "name_en": "Lesser Spirita IV",
        "name_jp": "レッサースピリタⅣ",
        "name_glen": "Lesser Spirit IV",
        "effect_en": "PP(+4)",
        "effect_jp": "PP(+4)",
        "effect_glen": "PP(+4)"
    },
    "LR05": {
        "name_en": "Lesser Spirita V",
        "name_jp": "レッサースピリタⅤ",
        "name_glen": "Lesser Spirit V",
        "effect_en": "PP(+5)",
        "effect_jp": "PP(+5)",
        "effect_glen": "PP(+5)"
    },
    "LM01": {
        "name_en": "Lesser Stamina I",
        "name_jp": "レッサースタミナⅠ",
        "name_glen": "Lesser Stamina I",
        "effect_en": "HP(+15)",
        "effect_jp": "HP(+15)",
        "effect_glen": "HP(+15)"
    },
    "LM02": {
        "name_en": "Lesser Stamina II",
        "name_jp": "レッサースタミナⅡ",
        "name_glen": "Lesser Stamina II",
        "effect_en": "HP(+35)",
        "effect_jp": "HP(+35)",
        "effect_glen": "HP(+35)"
    },
    "LM03": {
        "name_en": "Lesser Stamina III",
        "name_jp": "レッサースタミナⅢ",
        "name_glen": "Lesser Stamina III",
        "effect_en": "HP(+45)",
        "effect_jp": "HP(+45)",
        "effect_glen": "HP(+45)"
    },
    "LM04": {
        "name_en": "Lesser Stamina IV",
        "name_jp": "レッサースタミナⅣ",
        "name_glen": "Lesser Stamina IV",
        "effect_en": "HP(+55)",
        "effect_jp": "HP(+55)",
        "effect_glen": "HP(+55)"
    },
    "LM05": {
        "name_en": "Lesser Stamina V",
        "name_jp": "レッサースタミナⅤ",
        "name_glen": "Lesser Stamina V",
        "effect_en": "HP(+65)",
        "effect_jp": "HP(+65)",
        "effect_glen": "HP(+65)"
    },
    "LT01": {
        "name_en": "Lesser Technique I",
        "name_jp": "レッサーテクニックⅠ",
        "name_glen": "Lesser Casting I",
        "effect_en": "T-ATK(+5)",
        "effect_jp": "法撃力(+5)",
        "effect_glen": "TEC Pwr(+5)"
    },
    "LT02": {
        "name_en": "Lesser Technique II",
        "name_jp": "レッサーテクニックⅡ",
        "name_glen": "Lesser Casting II",
        "effect_en": "T-ATK(+15)",
        "effect_jp": "法撃力(+15)",
        "effect_glen": "TEC Pwr(+15)"
    },
    "LT03": {
        "name_en": "Lesser Technique III",
        "name_jp": "レッサーテクニックⅢ",
        "name_glen": "Lesser Casting III",
        "effect_en": "T-ATK(+25)",
        "effect_jp": "法撃力(+25)",
        "effect_glen": "TEC Pwr(+25)"
    },
    "LT04": {
        "name_en": "Lesser Technique IV",
        "name_jp": "レッサーテクニックⅣ",
        "name_glen": "Lesser Casting IV",
        "effect_en": "T-ATK(+30)",
        "effect_jp": "法撃力(+30)",
        "effect_glen": "TEC Pwr(+30)"
    },
    "LT05": {
        "name_en": "Lesser Technique V",
        "name_jp": "レッサーテクニックⅤ",
        "name_glen": "Lesser Casting V",
        "effect_en": "T-ATK(+35)",
        "effect_jp": "法撃力(+35)",
        "effect_glen": "TEC Pwr(+35)"
    },
    "UD01": {
        "name_en": "Ligand Arma",
        "name_jp": "リガンド・アルマ",
        "name_glen": "Ligand Alma",
        "effect_en": "S-ATK(+40),<br>HP(+30),<br>PP(+3)",
        "effect_jp": "打撃力(+40)<br>HP(+30)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+40),<br>HP(+30),<br>PP(+3)"
    },
    "UD21": {
        "name_en": "Ligand Magia",
        "name_jp": "リガンド・マギア",
        "name_glen": "Ligand Magia",
        "effect_en": "T-ATK(+40),<br>HP(+30),<br>PP(+3)",
        "effect_jp": "法撃力(+40)<br>HP(+30)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+40),<br>HP(+30),<br>PP(+3)"
    },
    "UD11": {
        "name_en": "Ligand Tiro",
        "name_jp": "リガンド・ティロ",
        "name_glen": "Ligand Tyro",
        "effect_en": "R-ATK(+40),<br>HP(+30),<br>PP(+3)",
        "effect_jp": "射撃力(+40)<br>HP(+30)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+40),<br>HP(+30),<br>PP(+3)"
    },
    "HM01": {
        "name_en": "Light Resist I",
        "name_jp": "ライトレジストⅠ",
        "name_glen": "Radiant Ward I",
        "effect_en": "Light Resist(+3)",
        "effect_jp": "光耐性(+3)",
        "effect_glen": "Light Resist(+3)"
    },
    "HM02": {
        "name_en": "Light Resist II",
        "name_jp": "ライトレジストⅡ",
        "name_glen": "Radiant Ward II",
        "effect_en": "Light Resist(+4)",
        "effect_jp": "光耐性(+4)",
        "effect_glen": "Light Resist(+4)"
    },
    "HM03": {
        "name_en": "Light Resist III",
        "name_jp": "ライトレジストⅢ",
        "name_glen": "Radiant Ward III",
        "effect_en": "Light Resist(+5)",
        "effect_jp": "光耐性(+5)",
        "effect_glen": "Light Resist(+5)"
    },
    "HM04": {
        "name_en": "Light Resist IV",
        "name_jp": "ライトレジストⅣ",
        "name_glen": "Radiant Ward IV",
        "effect_en": "Light Resist(+6)",
        "effect_jp": "光耐性(+6)",
        "effect_glen": "Light Resist(+6)"
    },
    "HM05": {
        "name_en": "Light Resist V",
        "name_jp": "ライトレジストⅤ",
        "name_glen": "Radiant Ward V",
        "effect_en": "Light Resist(+7)",
        "effect_jp": "光耐性(+7)",
        "effect_glen": "Light Resist(+7)"
    },
    "ROG5": {
        "name_en": "Lilli Soul",
        "name_jp": "リーリー・ソール",
        "name_glen": "Lilli Soul",
        "effect_en": "S-ATK(+20),<br>S-DEF(+20),<br>HP(+20)",
        "effect_jp": "打撃力(+20)<br>打撃防御(+20)<br>HP(+20)",
        "effect_glen": "MEL Pwr(+20),<br>MEL Def(+20),<br>HP(+20)"
    },
    "TK03": {
        "name_en": "Loser Reverie",
        "name_jp": "ルーサー・レヴリー",
        "name_glen": "Luther Reverie",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+40),<br>HP(-20)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+40)<br>HP(-20)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+40),<br>HP(-20)"
    },
    "ROC2": {
        "name_en": "Loser Soul",
        "name_jp": "ルーサー・ソール",
        "name_glen": "Luther Soul",
        "effect_en": "S-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃力(+20)<br>法撃力(+20)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+20),<br>TEC Pwr(+20),<br>HP(+5),<br>PP(+1)"
    },
    "TD04": {
        "name_en": "Love Fever",
        "name_jp": "ラブ・フィーバー",
        "name_glen": "Love Fever",
        "effect_en": "S-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        "effect_jp": "打撃力(+10)<br>技量(+5)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+10),<br>DEX(+5),<br>PP(+2)"
    },
    "TD01": {
        "name_en": "Lovey Fever",
        "name_jp": "ラヴィ・フィーバー",
        "name_glen": "Love Fever",
        "effect_en": "S-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        "effect_jp": "打撃力(+10)<br>技量(+5)<br>HP(+10)",
        "effect_glen": "MEL Pwr(+10),<br>DEX(+5),<br>HP(+10)"
    },
    "VA01": {
        "name_en": "Lucky Rise I",
        "name_jp": "ラッキーライズⅠ",
        "name_glen": "Lucky Charm I",
        "effect_en": "Item Drop Rate +5%",
        "effect_jp": "レアドロップ倍率が増加+5%",
        "effect_glen": "Item Drop Rate +5%"
    },
    "VA02": {
        "name_en": "Lucky Rise II",
        "name_jp": "ラッキーライズⅡ",
        "name_glen": "Lucky Charm II",
        "effect_en": "Item Drop Rate +7%",
        "effect_jp": "レアドロップ倍率が増加+7%",
        "effect_glen": "Item Drop Rate +7%"
    },
    "VA03": {
        "name_en": "Lucky Rise III",
        "name_jp": "ラッキーライズⅢ",
        "name_glen": "Lucky Charm III",
        "effect_en": "Item Drop Rate +10%",
        "effect_jp": "レアドロップ倍率が増加+10%",
        "effect_glen": "Item Drop Rate +10%"
    },
    "TD0E": {
        "name_en": "Luna Fever",
        "name_jp": "ルーナ・フィーバー",
        "name_glen": "Luna Fever",
        "effect_en": "T-ATK(+10),<br>HP(+10),<br>PP(+1)",
        "effect_jp": "法撃力(+10)<br>HP(+10)<br>PP(+1)",
        "effect_glen": "TEC Pwr(+10),<br>HP(+10),<br>PP(+1)"
    },
    "RB15": {
        "name_en": "Madu Soul",
        "name_jp": "マドゥ・ソール",
        "name_glen": "Madu Soul",
        "effect_en": "R-ATK(+15),<br>PP(+4)",
        "effect_jp": "射撃力(+15)<br>PP(+4)",
        "effect_glen": "RNG Pwr(+15),<br>PP(+4)"
    },
    "RPA5": {
        "name_en": "Magatsu Soul",
        "name_jp": "マガツ・ソール",
        "name_glen": "Magatsu Soul",
        "effect_en": "S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+30),<br>PP(+3)",
        "effect_jp": "打撃防御(+15)<br>射撃防御(+15)<br>法撃防御(+15)<br>HP(+30)<br>PP(+3)",
        "effect_glen": "MEL Def(+15),<br>RNG Def(+15),<br>TEC Def(+15),<br>HP(+30),<br>PP(+3)"
    },
    "SH30": {
        "name_en": "Magi The Soul",
        "name_jp": "マギー・ジ・ソール",
        "name_glen": "Magi Di Soul",
        "effect_en": "T-ATK(+35),<br>PP(+3)",
        "effect_jp": "法撃力(+35)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+35),<br>PP(+3)"
    },
    "ROC3": {
        "name_en": "Malluda Soul",
        "name_jp": "マリューダ・ソール",
        "name_glen": "Maryuda Soul",
        "effect_en": "S-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        "effect_jp": "打撃力(+20)<br>法撃力(+20)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)"
    },
    "RI21": {
        "name_en": "Malmo Soul",
        "name_jp": "マルモ・ソール",
        "name_glen": "Marmoth Soul",
        "effect_en": "R-DEF(+30),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "射撃防御(+30)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "RNG Def(+30),<br>HP(+20),<br>PP(+1)"
    },
    "TK10": {
        "name_en": "Mana Reverie",
        "name_jp": "マナ・レヴリー",
        "name_glen": "Mana Reverie",
        "effect_en": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>HP(+20),<br>PP(+4)",
        "effect_jp": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>HP(+20)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+50),<br>RNG Pwr(+50),<br>TEC Pwr(+50),<br>HP(+20),<br>PP(+4)"
    },
    "UC21": {
        "name_en": "Mark Angar",
        "name_jp": "マーク・アンガル",
        "name_glen": "Mark Anger",
        "effect_en": "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)",
        "effect_jp": "打撃力(+50)<br>射撃力(+50)<br>法撃力(+50)<br>技量(+40)",
        "effect_glen": "MEL Pwr(+50),<br>RNG Pwr(+50),<br>TEC Pwr(+50),<br>DEX(+40)"
    },
    "UC11": {
        "name_en": "Mark Couragena",
        "name_jp": "マーク・カレジナ",
        "name_glen": "Mark Courage",
        "effect_en": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)",
        "effect_jp": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)<br>PP(+5)",
        "effect_glen": "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>PP(+5)"
    },
    "UC31": {
        "name_en": "Mark Grif",
        "name_jp": "マーク・グリフ",
        "name_glen": "Mark Grief",
        "effect_en": "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)",
        "effect_jp": "打撃防御(+50)<br>射撃防御(+50)<br>法撃防御(+50)<br>HP(+80)",
        "effect_glen": "MEL Def(+50),<br>RNG Def(+50),<br>TEC Def(+50),<br>HP(+80)"
    },
    "UC01": {
        "name_en": "Mark Joyo",
        "name_jp": "マーク・ジョイオ",
        "name_glen": "Mark Joy",
        "effect_en": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+50)",
        "effect_jp": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)<br>HP(+50)",
        "effect_glen": "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>HP(+50)"
    },
    "XG01": {
        "name_en": "Mark Receptor",
        "name_jp": "マークレセプター",
        "name_glen": "Mark Receptor",
        "effect_en": "Allows transfer Mark-type ability.<br>ALL(+10)",
        "effect_jp": "マーク系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Allows transfer Mark-type ability.<br>ALL(+10)"
    },
    "ROA2": {
        "name_en": "Meduna Soul",
        "name_jp": "メデューナ・ソール",
        "name_glen": "Meduna Soul",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>HP(+5),<br>PP(+1)"
    },
    "VB01": {
        "name_en": "Meseta Fever I",
        "name_jp": "メセタフィーバーⅠ",
        "name_glen": "Meseta Fever I",
        "effect_en": "Meseta Drop Amount +5%",
        "effect_jp": "出現するメセタが増加+5%",
        "effect_glen": "Meseta Drop Amount +5%"
    },
    "VZ02": {
        "name_en": "Meseta Fever II",
        "name_jp": "メセタフィーバーⅡ",
        "name_glen": "Meseta Fever II",
        "effect_en": "Meseta Drop Amount +10%",
        "effect_jp": "出現するメセタが増加+10%",
        "effect_glen": "Meseta Drop Amount +10%"
    },
    "VB03": {
        "name_en": "Meseta Fever III",
        "name_jp": "メセタフィーバーⅢ",
        "name_glen": "Meseta Fever III",
        "effect_en": "Meseta Drop Amount +15%",
        "effect_jp": "出現するメセタが増加+15%",
        "effect_glen": "Meseta Drop Amount +15%"
    },
    "BC01": {
        "name_en": "Mind I",
        "name_jp": "マインドⅠ",
        "name_glen": "Genius I",
        "effect_en": "T-DEF(+10)",
        "effect_jp": "法撃防御(+10)",
        "effect_glen": "TEC Def(+10)"
    },
    "BC02": {
        "name_en": "Mind II",
        "name_jp": "マインドⅡ",
        "name_glen": "Genius II",
        "effect_en": "T-DEF(+20)",
        "effect_jp": "法撃防御(+20)",
        "effect_glen": "TEC Def(+20)"
    },
    "BC03": {
        "name_en": "Mind III",
        "name_jp": "マインドⅢ",
        "name_glen": "Genius III",
        "effect_en": "T-DEF(+30)",
        "effect_jp": "法撃防御(+30)",
        "effect_glen": "TEC Def(+30)"
    },
    "BC04": {
        "name_en": "Mind IV",
        "name_jp": "マインドⅣ",
        "name_glen": "Genius IV",
        "effect_en": "T-DEF(+35)",
        "effect_jp": "法撃防御(+35)",
        "effect_glen": "TEC Def(+35)"
    },
    "HC01": {
        "name_en": "Mind Resist I",
        "name_jp": "マインドレジストⅠ",
        "name_glen": "Technique Ward I",
        "effect_en": "Tech Resist(+3)",
        "effect_jp": "法撃軽減(+3)",
        "effect_glen": "Tech Resist(+3)"
    },
    "HC02": {
        "name_en": "Mind Resist II",
        "name_jp": "マインドレジストⅡ",
        "name_glen": "Technique Ward II",
        "effect_en": "Tech Resist(+4)",
        "effect_jp": "法撃軽減(+4)",
        "effect_glen": "Tech Resist(+4)"
    },
    "HC03": {
        "name_en": "Mind Resist III",
        "name_jp": "マインドレジストⅢ",
        "name_glen": "Technique Ward III",
        "effect_en": "Tech Resist(+5)",
        "effect_jp": "法撃軽減(+5)",
        "effect_glen": "Tech Resist(+5)"
    },
    "HC04": {
        "name_en": "Mind Resist IV",
        "name_jp": "マインドレジストⅣ",
        "name_glen": "Technique Ward IV",
        "effect_en": "Tech Resist(+6)",
        "effect_jp": "法撃軽減(+6)",
        "effect_glen": "Tech Resist(+6)"
    },
    "HC05": {
        "name_en": "Mind Resist V",
        "name_jp": "マインドレジストⅤ",
        "name_glen": "Technique Ward V",
        "effect_en": "Tech Resist(+7)",
        "effect_jp": "法撃軽減(+7)",
        "effect_glen": "Tech Resist(+7)"
    },
    "BC05": {
        "name_en": "Mind V",
        "name_jp": "マインドⅤ",
        "name_glen": "Genius V",
        "effect_en": "T-DEF(+40)",
        "effect_jp": "法撃防御(+40)",
        "effect_glen": "TEC Def(+40)"
    },
    "JD01": {
        "name_en": "Mirage I",
        "name_jp": "ミラージュⅠ",
        "name_glen": "Blind I",
        "effect_en": "Grants Mirage Lv1",
        "effect_jp": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv1を付与する",
        "effect_glen": "Grants Blind Lv1"
    },
    "JD02": {
        "name_en": "Mirage II",
        "name_jp": "ミラージュⅡ",
        "name_glen": "Blind II",
        "effect_en": "Grants Mirage Lv2",
        "effect_jp": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv2を付与する",
        "effect_glen": "Grants Blind Lv2"
    },
    "JD03": {
        "name_en": "Mirage III",
        "name_jp": "ミラージュⅢ",
        "name_glen": "Blind III",
        "effect_en": "Grants Mirage Lv3",
        "effect_jp": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv3を付与する",
        "effect_glen": "Grants Blind Lv3"
    },
    "JD04": {
        "name_en": "Mirage IV",
        "name_jp": "ミラージュⅣ",
        "name_glen": "Blind IV",
        "effect_en": "Grants Mirage Lv4",
        "effect_jp": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv4を付与する",
        "effect_glen": "Grants Blind Lv4"
    },
    "JD05": {
        "name_en": "Mirage V",
        "name_jp": "ミラージュⅤ",
        "name_glen": "Blind V",
        "effect_en": "Grants Mirage Lv5",
        "effect_jp": "合成&継承率UP:シグノ、シノワ、ペルソナ、ダブル\nミラージュLv5を付与する",
        "effect_glen": "Grants Blind Lv5"
    },
    "TN06": {
        "name_en": "Mitra Glare",
        "name_jp": "ミトラ・グレア",
        "name_glen": "Mitra Glare",
        "effect_en": "S-ATK(+30)<br>R-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+20)<br>HP(+20)<br>PP(+2)",
        "effect_jp": "打撃力(+30)<br>射撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+30)<br>RNG Pwr(+30)<br>MEL Def(+20)<br>RNG Def(+20)<br>TEC Def(+20)<br>HP(+20)<br>PP(+2)"
    },
    "RB23": {
        "name_en": "Mizer Soul",
        "name_jp": "マイザー・ソール",
        "name_glen": "Mizer Soul",
        "effect_en": "R-ATK(+30),<br>PP(+3)",
        "effect_jp": "射撃力(+30)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+30),<br>PP(+3)"
    },
    "TC01": {
        "name_en": "Modulator",
        "name_jp": "モデュレイター",
        "name_glen": "Modulator",
        "effect_en": "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30)",
        "effect_jp": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)",
        "effect_glen": "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30)"
    },
    "TG03": {
        "name_en": "Mother Factor",
        "name_jp": "マザー・ファクター",
        "name_glen": "Mother Factor",
        "effect_en": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+20),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+20)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+20),<br>HP(+20),<br>PP(+1)"
    },
    "OA01": {
        "name_en": "Mutation I",
        "name_jp": "ミューテーションⅠ",
        "name_glen": "Mutation I",
        "effect_en": "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+10)",
        "effect_jp": "打撃力(+10)<br>射撃力(+10)<br>法撃力(+10)<br>HP(+10)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+10)"
    },
    "OA02": {
        "name_en": "Mutation II",
        "name_jp": "ミューテーションⅡ",
        "name_glen": "Mutation II",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+15)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>HP(+15)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+15)"
    },
    "TI01": {
        "name_en": "Necky Smile",
        "name_jp": "ネッキー・スマイル",
        "name_glen": "*Necky Smile",
        "effect_en": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>PP(+2)",
        "effect_jp": "(記載なし)\n打撃力(+5)",
        "effect_glen": "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>PP(+2)"
    },
    "RC13": {
        "name_en": "Nepto Soul",
        "name_jp": "ネプト・ソール",
        "name_glen": "Nept Soul",
        "effect_en": "T-ATK(+15),<br>PP(+4)",
        "effect_jp": "法撃力(+15)<br>PP(+4)",
        "effect_glen": "TEC Pwr(+15),<br>PP(+4)"
    },
    "XI07": {
        "name_en": "Noble Power",
        "name_jp": "ノーブル・パワー",
        "name_glen": "Noble Might",
        "effect_en": "S-ATK(+30),PP(+3)",
        "effect_jp": "打撃力(+30)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+30),PP(+3)"
    },
    "XI08": {
        "name_en": "Noble Shoot",
        "name_jp": "ノーブル・シュート",
        "name_glen": "Noble Precision",
        "effect_en": "R-ATK(+30),PP(+3)",
        "effect_jp": "射撃力(+30)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+30),PP(+3)"
    },
    "XI10": {
        "name_en": "Noble Stamina",
        "name_jp": "ノーブル・スタミナ",
        "name_glen": "Noble Stamina",
        "effect_en": "HP(+50),PP(+3)",
        "effect_jp": "HP(+50)<br>PP(+3)",
        "effect_glen": "HP(+50),PP(+3)"
    },
    "XI09": {
        "name_en": "Noble Technique",
        "name_jp": "ノーブル・テクニック",
        "name_glen": "Noble Casting",
        "effect_en": "T-ATK(+30),PP(+3)",
        "effect_jp": "法撃力(+30)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+30),PP(+3)"
    },
    "TD09": {
        "name_en": "Noiya Fever",
        "name_jp": "ノイヤ・フィーバー",
        "name_glen": "Noiya Fever",
        "effect_en": "R-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "射撃力(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "RNG Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "VK05": {
        "name_en": "NT Weapon Booster",
        "name_jp": "NTウェポンブースト",
        "name_glen": "Weapon Boost",
        "effect_en": "Adds 800 EXP to NT weapon grinds.",
        "effect_jp": "新世武器強化時の経験値が増加する+800",
        "effect_glen": "Adds 800 EXP to NT weapon grinds."
    },
    "RE13": {
        "name_en": "Nyau Soul",
        "name_jp": "ニャウ・ソール",
        "name_glen": "Nyau Soul",
        "effect_en": "DEX(+15),<br>PP(+4)",
        "effect_jp": "技量(+15)<br>PP(+4)",
        "effect_glen": "DEX(+15),<br>PP(+4)"
    },
    "XI20": {
        "name_en": "Offense Boost",
        "name_jp": "オフェンス・ブースト",
        "name_glen": "Enhanced Offense",
        "effect_en": "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>技量(+25)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+15),RNG Pwr(+15),TEC Pwr(+15),DEX(+25),PP(+1)"
    },
    "VH11": {
        "name_en": "Omega Buster",
        "name_jp": "オメガバスター",
        "name_glen": "Omega Buster",
        "effect_en": "Boosts damage against Demons by 3%.",
        "effect_jp": "魔物種に与えるダメージが3%上昇",
        "effect_glen": "Boosts damage against Demons by 3%."
    },
    "TJ01": {
        "name_en": "Omega Memoria",
        "name_jp": "オメガ・メモリア",
        "name_glen": "Omega Memoria",
        "effect_en": "ALL(+15),<br>HP(+15),<br>PP(+2)",
        "effect_jp": "ALL(+15)<br>HP(+15)<br>PP(+2)",
        "effect_glen": "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "TK01": {
        "name_en": "Omega Reverie",
        "name_jp": "オメガ・レヴリー",
        "name_glen": "Omega Reverie",
        "effect_en": "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "打撃力(+15)<br>射撃力(+15)<br>法撃力(+15)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+20),<br>PP(+1)"
    },
    "ROA1": {
        "name_en": "Org Soul",
        "name_jp": "オルグ・ソール",
        "name_glen": "Org Soul",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>HP(+10)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>HP(+10)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>HP(+10)"
    },
    "TN09": {
        "name_en": "Origin Glare",
        "name_jp": "オリジン・グレア",
        "name_glen": "Origin Glare",
        "effect_en": "S-ATK(+30)<br>R-ATK(+30)<br>T-ATK(+30)<br>S-DEF(+10)<br>R-DEF(+10)<br>T-DEF(+10)<br>HP(+20)<br>PP(+2)",
        "effect_jp": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)<br>打撃防御(+10)<br>射撃防御(+10)<br>法撃防御(+10)<br>HP(+20)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+30)<br>RNG Pwr(+30)<br>TEC Pwr(+30)<br>MEL Def(+10)<br>RNG Def(+10)<br>TEC Def(+10)<br>HP(+20)<br>PP(+2)"
    },
    "JE01": {
        "name_en": "Panic I",
        "name_jp": "パニックⅠ",
        "name_glen": "Panic I",
        "effect_en": "Grants Panic Lv1",
        "effect_jp": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv1を付与する",
        "effect_glen": "Grants Panic Lv1"
    },
    "JE02": {
        "name_en": "Panic II",
        "name_jp": "パニックⅡ",
        "name_glen": "Panic II",
        "effect_en": "Grants Panic Lv2",
        "effect_jp": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv2を付与する",
        "effect_glen": "Grants Panic Lv2"
    },
    "JE03": {
        "name_en": "Panic III",
        "name_jp": "パニックⅢ",
        "name_glen": "Panic III",
        "effect_en": "Grants Panic Lv3",
        "effect_jp": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv3を付与する",
        "effect_glen": "Grants Panic Lv3"
    },
    "JE04": {
        "name_en": "Panic IV",
        "name_jp": "パニックⅣ",
        "name_glen": "Panic IV",
        "effect_en": "Grants Panic Lv4",
        "effect_jp": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv4を付与する",
        "effect_glen": "Grants Panic Lv4"
    },
    "JE05": {
        "name_en": "Panic V",
        "name_jp": "パニックⅤ",
        "name_glen": "Panic V",
        "effect_en": "Grants Panic Lv5",
        "effect_jp": "合成&継承率UP:クォーツ、クローム、ダブル\nパニックLv5を付与する",
        "effect_glen": "Grants Panic Lv5"
    },
    "TK06": {
        "name_en": "Persona Reverie",
        "name_jp": "ペルソナ・レヴリー",
        "name_glen": "Persona Reverie",
        "effect_en": "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>S-DEF(-20),<br>R-DEF(-20),<br>T-DEF(-20)",
        "effect_jp": "打撃力(+40)<br>射撃力(+40)<br>法撃力(+40)<br>打撃防御(-20)<br>射撃防御(-20)<br>法撃防御(-20)<br>",
        "effect_glen": "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>MEL Def(-20),<br>RNG Def(-20),<br>TEC Def(-20)"
    },
    "RI22": {
        "name_en": "Persona Soul",
        "name_jp": "ペルソナ・ソール",
        "name_glen": "Persona Soul",
        "effect_en": "R-DEF(+30),<br>HP(+10),<br>PP(+3)",
        "effect_jp": "射撃防御(+30)<br>HP(+10)<br>PP(+3)",
        "effect_glen": "RNG Def(+30),<br>HP(+10),<br>PP(+3)"
    },
    "WA01": {
        "name_en": "Photon Collect",
        "name_jp": "フォトンコレクト",
        "name_glen": "*Photon Collection",
        "effect_en": "Boosts status effect affix rate",
        "effect_jp": "状態異常と属性耐性の合成確率を上昇させる",
        "effect_glen": "Boosts status effect affix rate"
    },
    "XI32": {
        "name_en": "Photon Receptor",
        "name_jp": "フォトンレセプター",
        "name_glen": "Photon Receptor",
        "effect_en": "Greatly increases affix rate of <br>Stamina, Spirita<br>ALL(+5)",
        "effect_jp": "特殊能力スタミナ、スピリタの継承成功率を大幅に上昇\nALL(+5)",
        "effect_glen": "Greatly increases the Transfer rate of<br>Stamina and Spirit.<br>ALL(+5)"
    },
    "TN0A": {
        "name_en": "Photoner Glare",
        "name_jp": "フォトナー・グレア",
        "name_glen": "Photoner Glare",
        "effect_en": "ALL(+15)<br>HP(+15)<br>PP(+2)",
        "effect_jp": "ALL(+15)<br>HP(+15)<br>PP(+2)",
        "effect_glen": "ALL(+15)<br>HP(+15)<br>PP(+2)"
    },
    "YB31": {
        "name_en": "Phrase Chase",
        "name_jp": "フレイズ・チェイス",
        "name_glen": "Phrase Chase",
        "effect_en": "+5% damage against enemies<BR>with Status Effects",
        "effect_jp": "状態異常のエネミーへの与ダメージが5%上昇",
        "effect_glen": "+5% damage against enemies<BR>with Status Effects"
    },
    "YB51": {
        "name_en": "Phrase Decay",
        "name_jp": "フレイズ・ディケイ",
        "name_glen": "Phrase Decay",
        "effect_en": "Boosts damage inflicted to enemies<br>affected by Jellen by 5%.",
        "effect_jp": "ジェルン状態のエネミーへの与ダメージが5%上昇",
        "effect_glen": "Boosts damage inflicted to enemies<br>affected by Jellen by 5%."
    },
    "XE01": {
        "name_en": "Phrase Receptor",
        "name_jp": "フレイズレセプター",
        "name_glen": "Phrase Receptor",
        "effect_en": "Boosts transfer of Phrase affixes<br>ALL(+10)",
        "effect_jp": "フレイズ系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases the Transfer rate of Phrase-type Augments.<br>ALL(+10)"
    },
    "YB01": {
        "name_en": "Phrase Recovery",
        "name_jp": "フレイズ・リカバリー",
        "name_glen": "Phrase Recovery",
        "effect_en": "+5% PP Recovery Rate",
        "effect_jp": "PPの自然回復速度が5%上昇",
        "effect_glen": "+5% PP Recovery Rate"
    },
    "YB41": {
        "name_en": "Phrase Reduce",
        "name_jp": "フレイズ・リデュース",
        "name_glen": "Phrase Reduce",
        "effect_en": "PP consumption decreases by 4%.",
        "effect_jp": "PPの消費量が4%減少する",
        "effect_glen": "PP consumption decreases by 4%."
    },
    "YB21": {
        "name_en": "Phrase Response",
        "name_jp": "フレイズ・レスポンス",
        "name_glen": "Phrase Response",
        "effect_en": "+5% ATK PP Recovery",
        "effect_jp": "通常攻撃のPP回復量が5%上昇",
        "effect_glen": "+5% ATK PP Recovery"
    },
    "YB11": {
        "name_en": "Phrase Weak",
        "name_jp": "フレイズ・ウィーク",
        "name_glen": "Phrase Weak",
        "effect_en": "+2% Elemental Weakness damage",
        "effect_jp": "弱点属性で攻撃した時、与ダメージが2%上昇",
        "effect_glen": "+2% Elemental Weakness damage"
    },
    "JF01": {
        "name_en": "Poison I",
        "name_jp": "ポイズンⅠ",
        "name_glen": "Poison I",
        "effect_en": "Grants Poison Lv1",
        "effect_jp": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv1を付与する(MHP3% × 10回)",
        "effect_glen": "Grants Poison Lv1"
    },
    "JF02": {
        "name_en": "Poison II",
        "name_jp": "ポイズンⅡ",
        "name_glen": "Poison II",
        "effect_en": "Grants Poison Lv2",
        "effect_jp": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv2を付与する(MHP3% × 12回)",
        "effect_glen": "Grants Poison Lv2"
    },
    "JF03": {
        "name_en": "Poison III",
        "name_jp": "ポイズンⅢ",
        "name_glen": "Poison III",
        "effect_en": "Grants Poison Lv3",
        "effect_jp": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv3を付与する(MHP4% × 10回)",
        "effect_glen": "Grants Poison Lv3"
    },
    "JF04": {
        "name_en": "Poison IV",
        "name_jp": "ポイズンⅣ",
        "name_glen": "Poison IV",
        "effect_en": "Grants Poison Lv4",
        "effect_jp": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv4を付与する(MHP4% × 12回)",
        "effect_glen": "Grants Poison Lv4"
    },
    "JF05": {
        "name_en": "Poison V",
        "name_jp": "ポイズンⅤ",
        "name_glen": "Poison V",
        "effect_en": "Grants Poison Lv5",
        "effect_jp": "合成&継承率UP:ジグモル、グワナ、マリューダ、ダブル\nポイズンLv5を付与する(MHP5% × 10回)",
        "effect_glen": "Grants Poison Lv5"
    },
    "VK03": {
        "name_en": "Polytan Smile",
        "name_jp": "ポリタン・スマイル",
        "name_glen": "*Polytan Smile",
        "effect_en": "Adds 25 EXP to NT weapon grinds.",
        "effect_jp": "新世武器強化時の経験値が増加する\n強化値",
        "effect_glen": "Adds 25 EXP to NT weapon grinds."
    },
    "XI04": {
        "name_en": "Power Boost",
        "name_jp": "パワー・ブースト",
        "name_glen": "Might Boost",
        "effect_en": "S-ATK(+25)",
        "effect_jp": "打撃力(+25)",
        "effect_glen": "MEL Pwr(+25)"
    },
    "AA01": {
        "name_en": "Power I",
        "name_jp": "パワーⅠ",
        "name_glen": "Might I",
        "effect_en": "S-ATK(+10)",
        "effect_jp": "打撃力(+10)",
        "effect_glen": "MEL Pwr(+10)"
    },
    "AA02": {
        "name_en": "Power II",
        "name_jp": "パワーⅡ",
        "name_glen": "Might II",
        "effect_en": "S-ATK(+20)",
        "effect_jp": "打撃力(+20)",
        "effect_glen": "MEL Pwr(+20)"
    },
    "AA03": {
        "name_en": "Power III",
        "name_jp": "パワーⅢ",
        "name_glen": "Might III",
        "effect_en": "S-ATK(+30)",
        "effect_jp": "打撃力(+30)",
        "effect_glen": "MEL Pwr(+30)"
    },
    "AA04": {
        "name_en": "Power IV",
        "name_jp": "パワーⅣ",
        "name_glen": "Might IV",
        "effect_en": "S-ATK(+35)",
        "effect_jp": "打撃力(+35)",
        "effect_glen": "MEL Pwr(+35)"
    },
    "AA05": {
        "name_en": "Power V",
        "name_jp": "パワーⅤ",
        "name_glen": "Might V",
        "effect_en": "S-ATK(+40)",
        "effect_jp": "打撃力(+40)",
        "effect_glen": "MEL Pwr(+40)"
    },
    "AA06": {
        "name_en": "Power VI",
        "name_jp": "パワーⅥ",
        "name_glen": "Might VI",
        "effect_en": "S-ATK(+45)",
        "effect_jp": "打撃力(+45)",
        "effect_glen": "MEL Pwr(+45)"
    },
    "RA23": {
        "name_en": "Quartz Soul",
        "name_jp": "クォーツ・ソール",
        "name_glen": "Quartz Soul",
        "effect_en": "S-ATK(+30),<br>PP(+3)",
        "effect_jp": "打撃力(+30)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+30),<br>PP(+3)"
    },
    "RB21": {
        "name_en": "Ra'nsa Soul",
        "name_jp": "ランサ・ソール",
        "name_glen": "Ransa Soul",
        "effect_en": "R-ATK(+30),<br>HP(+20)",
        "effect_jp": "射撃力(+30)<br>HP(+20)",
        "effect_glen": "RNG Pwr(+30),<br>HP(+20)"
    },
    "RC21": {
        "name_en": "Ragne Soul",
        "name_jp": "ラグネ・ソール",
        "name_glen": "Ragne Soul",
        "effect_en": "T-ATK(+30),<br>HP(+20)",
        "effect_jp": "法撃力(+30)<br>HP(+20)",
        "effect_glen": "TEC Pwr(+30),<br>HP(+20)"
    },
    "RE23": {
        "name_en": "Rappy Soul",
        "name_jp": "ラッピー・ソール",
        "name_glen": "Rappy Soul",
        "effect_en": "DEX(+30),<br>PP(+4)",
        "effect_jp": "技量(+30)<br>PP(+4)",
        "effect_glen": "DEX(+30),<br>PP(+4)"
    },
    "BB01": {
        "name_en": "React I",
        "name_jp": "リアクトⅠ",
        "name_glen": "Reflex I",
        "effect_en": "R-DEF(+10)",
        "effect_jp": "射撃防御(+10)",
        "effect_glen": "RNG Def(+10)"
    },
    "BB02": {
        "name_en": "React II",
        "name_jp": "リアクトⅡ",
        "name_glen": "Reflex II",
        "effect_en": "R-DEF(+20)",
        "effect_jp": "射撃防御(+20)",
        "effect_glen": "RNG Def(+20)"
    },
    "BB03": {
        "name_en": "React III",
        "name_jp": "リアクトⅢ",
        "name_glen": "Reflex III",
        "effect_en": "R-DEF(+30)",
        "effect_jp": "射撃防御(+30)",
        "effect_glen": "RNG Def(+30)"
    },
    "BB04": {
        "name_en": "React IV",
        "name_jp": "リアクトⅣ",
        "name_glen": "Reflex IV",
        "effect_en": "R-DEF(+35)",
        "effect_jp": "射撃防御(+35)",
        "effect_glen": "RNG Def(+35)"
    },
    "BB05": {
        "name_en": "React V",
        "name_jp": "リアクトⅤ",
        "name_glen": "Reflex V",
        "effect_en": "R-DEF(+40)",
        "effect_jp": "射撃防御(+40)",
        "effect_glen": "RNG Def(+40)"
    },
    "TE01": {
        "name_en": "Returner I",
        "name_jp": "リターナーⅠ",
        "name_glen": "Veteran's Resolve I",
        "effect_en": "ALL(+3),<br>HP(+3),<br>PP(+1)",
        "effect_jp": "ALL(+3)<br>HP(+3)<br>PP(+1)",
        "effect_glen": "ALL(+3),<br>HP(+3),<br>PP(+1)"
    },
    "TE02": {
        "name_en": "Returner II",
        "name_jp": "リターナーⅡ",
        "name_glen": "Veteran's Resolve II",
        "effect_en": "ALL(+5),<br>HP(+5),<br>PP(+2)",
        "effect_jp": "ALL(+5)<br>HP(+5)<br>PP(+2)",
        "effect_glen": "ALL(+5),<br>HP(+5),<br>PP(+2)"
    },
    "TE03": {
        "name_en": "Returner III",
        "name_jp": "リターナーⅢ",
        "name_glen": "Veteran's Resolve III",
        "effect_en": "ALL(+10),<br>HP(+10),<br>PP(+3)",
        "effect_jp": "ALL(+10)<br>HP(+10)<br>PP(+3)",
        "effect_glen": "ALL(+10),<br>HP(+10),<br>PP(+3)"
    },
    "TE04": {
        "name_en": "Returner IV",
        "name_jp": "リターナーⅣ",
        "name_glen": "Veteran's Resolve IV",
        "effect_en": "ALL(+15),<br>HP(+15),<br>PP(+4)",
        "effect_jp": "ALL(+15)<br>HP(+15)<br>PP(+4)",
        "effect_glen": "ALL(+15),<br>HP(+15),<br>PP(+4)"
    },
    "TE05": {
        "name_en": "Returner V",
        "name_jp": "リターナーⅤ",
        "name_glen": "Veteran's Resolve V",
        "effect_en": "ALL(+30),<br>HP(+30),<br>PP(+5)",
        "effect_jp": "ALL(+30)<br>HP(+30)<br>PP(+5)",
        "effect_glen": "ALL(+30),<br>HP(+30),<br>PP(+5)"
    },
    "VJ03": {
        "name_en": "Reverie Catalyst",
        "name_jp": "レヴリー・カタリスト",
        "name_glen": "Reverie Catalyst",
        "effect_en": "HP(+10),<br>PP(+1)",
        "effect_jp": "HP(+10)<br>PP(+1)",
        "effect_glen": "HP(+10),<br>PP(+1)"
    },
    "XL01": {
        "name_en": "Reverie Receptor",
        "name_jp": "レヴリーレセプター",
        "name_glen": "Reverie Receptor",
        "effect_en": "Boosts Reverie-type ability transfer rates.<br>ALL(+10)",
        "effect_jp": "レヴリー系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Boosts Reverie-type ability transfer rates.<br>ALL(+10)"
    },
    "ROC1": {
        "name_en": "Ringa Soul",
        "name_jp": "リンガ・ソール",
        "name_glen": "Ringa Soul",
        "effect_en": "S-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
        "effect_jp": "打撃力(+20)<br>法撃力(+20)<br>HP(+10)",
        "effect_glen": "MEL Pwr(+20),<br>TEC Pwr(+20),<br>HP(+10)"
    },
    "PF06": {
        "name_en": "Ripper/Dark Weak",
        "name_jp": "リーパー／闇弱点",
        "name_glen": "Reaper: Weak to Dark",
        "effect_en": "Boost damage against enemies weak to Dark.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "闇弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against enemies weak to Dark.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PB02": {
        "name_en": "Ripper/Fire Weak",
        "name_jp": "リーパー／炎弱点",
        "name_glen": "Reaper: Weak to Fire",
        "effect_en": "Boost damage against enemies weak to Fire.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "炎弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against enemies weak to Fire.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PC03": {
        "name_en": "Ripper/Ice Weak",
        "name_jp": "リーパー／氷弱点",
        "name_glen": "Reaper: Weak to Ice",
        "effect_en": "Boost damage against enemies weak to Ice.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "氷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against enemies weak to Ice.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PE05": {
        "name_en": "Ripper/Light Weak",
        "name_jp": "リーパー／光弱点",
        "name_glen": "Reaper: Weak to Light",
        "effect_en": "Boost damage against enemies weak to Light.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "光弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against enemies weak to Light.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PA01": {
        "name_en": "Ripper/Ltn. Weak",
        "name_jp": "リーパー／雷弱点",
        "name_glen": "Reaper: Weak to Lightning",
        "effect_en": "Boost damage against enemies weak to Lightning.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "雷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against enemies weak to Lightning.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PD04": {
        "name_en": "Ripper/Wind Weak",
        "name_jp": "リーパー／風弱点",
        "name_glen": "Reaper: Weak to Wind",
        "effect_en": "Boost damage against enemies weak to Wind.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "風弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against enemies weak to Wind.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "RH22": {
        "name_en": "Rockbear Soul",
        "name_jp": "ロックベア・ソール",
        "name_glen": "Rockbear Soul",
        "effect_en": "S-DEF(+30),<br>HP(+10),<br>PP(+3)",
        "effect_jp": "打撃防御(+30)<br>HP(+10)<br>PP(+3)",
        "effect_glen": "MEL Def(+30),<br>HP(+10),<br>PP(+3)"
    },
    "LA99": {
        "name_en": "S1: Placeholder",
        "name_jp": "S1:ジャンク",
        "name_glen": "S1:Placeholder",
        "effect_en": "Placeholder - S1",
        "effect_jp": "任意のS1能力を表します。",
        "effect_glen": "Represents any S1 ability."
    },
    "LA90": {
        "name_en": "S1:Augment Intent",
        "name_jp": "S1:錬成の志",
        "name_glen": "S1:Augment Will",
        "effect_en": "Increase Power by 0.5% for each Special Ability attached to this weapon. Maxes at 4%.",
        "effect_jp": "特殊能力の付与数に応じて威力上昇。最大で4%。",
        "effect_glen": "Increases attack power by 0.5% for every augment affixed to this weapon.<br>Maxes at 4% for 8 augments."
    },
    "LA9Z": {
        "name_en": "S1:Augment Intent 2",
        "name_jp": "S1:錬成の志2",
        "name_glen": "S1:Augment Will 2",
        "effect_en": "Increase Power by 0.75% for each Special Ability attached to this weapon. Maxes at 6%.",
        "effect_jp": "特殊能力の付与数に応じて威力上昇。最大で6%。",
        "effect_glen": "Placeholder - S1"
    },
    "LA17": {
        "name_en": "S1:Black Shadow Flash",
        "name_jp": "S1:影ノ黒閃",
        "name_glen": "S1:Shadowgleam",
        "effect_en": "Increase Natural PP Recovery for 20 seconds after standing still for 5 seconds.",
        "effect_jp": "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。",
        "effect_glen": "Increases natural PP recovery for 20 seconds after standing still for 5 seconds."
    },
    "LA13": {
        "name_en": "S1:Blue Ocean Flash",
        "name_jp": "S1:海ノ青閃",
        "name_glen": "S1:Seagleam",
        "effect_en": "Recover 4% HP every second for 30 seconds after taking 600 damage.",
        "effect_jp": "被ダメージ600毎に30秒間、毎秒HPが4%回復。",
        "effect_glen": "Recover 4% max HP every second for 30 seconds after taking 600 damage. "
    },
    "LA04": {
        "name_en": "S1:Brilliant Intent",
        "name_jp": "S1:輝充の志",
        "name_glen": "S1:Photonic Will",
        "effect_en": "Boosts damage by 3% while PP is at 40% or above.",
        "effect_jp": "PPが40%以上の時、与ダメージが3%上昇。",
        "effect_glen": "Increases attack power by 3% while PP is at or above 40%."
    },
    "LA2T": {
        "name_en": "S1:Brilliant Intent 2",
        "name_jp": "S1:輝充の志2",
        "name_glen": "S1:Photonic Will 2",
        "effect_en": "Boosts damage by 5% while PP is at 40% or above.",
        "effect_jp": "PPが40%以上の時、与ダメージが5%上昇。",
        "effect_glen": "Increases attack power by 5% while PP is at or above 40%."
    },
    "LA18": {
        "name_en": "S1:Brilliant Ruin",
        "name_jp": "S1:滅域輝与",
        "name_glen": "S1:Lucent Domain",
        "effect_en": "Recover 3 PP when an enemy near you is defeated.",
        "effect_jp": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        "effect_glen": "Recovers 3 PP when a nearby enemy is defeated."
    },
    "LA87": {
        "name_en": "S1:Brilliant Ruin 2",
        "name_jp": "S1:滅域輝与2",
        "name_glen": "S1:Lucent Domain 2",
        "effect_en": "Recover 4 PP when an enemy near you is defeated.",
        "effect_jp": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        "effect_glen": "Recovers 4 PP when a nearby enemy is defeated."
    },
    "LA2Q": {
        "name_en": "S1:Collaborator Liberator",
        "name_jp": "S1:戦友の加護",
        "name_glen": "S1:Comrade's Blessing",
        "effect_en": "If there are two or more party members, decrease PP consumption by 8% (2 Members),<br>+10% Critical Hit Rate (3 Members), and increase Power by 3% (4 Members).<br>Bonuses only work on self.",
        "effect_jp": "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
        "effect_glen": "Provides bonuses based on the number of party members.<br>2 Members: PP consumption -8%<br>3 Members: +10% critical hit rate<br>4 Members: Attack power +3% Bonuses only apply to yourself."
    },
    "LA97": {
        "name_en": "S1:Collaborator Liberator 2",
        "name_jp": "S1:戦友の加護2",
        "name_glen": "S1:Comrade's Blessing 2",
        "effect_en": "If there are two or more party members, decrease PP consumption by 10% (2 Members),<br>+?% Critical Hit Rate (3 Members), and increase Power by 4% (4 Members).<br>Bonuses only work on self.",
        "effect_jp": "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
        "effect_glen": "Provides bonuses based on the number of party members.<br>2 Members: PP consumption -10%<br>3 Members: +?% critical hit rate<br>4 Members: Attack power +4% Bonuses only apply to yourself."
    },
    "LA05": {
        "name_en": "S1:Double-Edged Sword",
        "name_jp": "S1:諸刃の撃",
        "name_glen": "S1:Two-edged Strike",
        "effect_en": "Increase Power by 4% but take 8% more damage when weapon is drawn.",
        "effect_jp": "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
        "effect_glen": "Increases attack power by 4% but take 8% more damage when your weapon is drawn."
    },
    "LA95": {
        "name_en": "S1:Eclipsing Decay",
        "name_jp": "S1:失力の蝕",
        "name_glen": "S1:Crippling Erode",
        "effect_en": "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
        "effect_jp": "命中時に25％の確率でジェルンを付与。",
        "effect_glen": "Attacking an enemy grants a 25% chance to inflict a target with the Jellen status effect."
    },
    "LA23": {
        "name_en": "S1:Flowing Exhilaration",
        "name_jp": "S1:時流活与",
        "name_glen": "S1:Timeflow Vitality",
        "effect_en": "Recover 40% of your maximum HP every 40s.",
        "effect_jp": "一定時間ごとにHPを40%回復する。",
        "effect_glen": "Restores 40% of your maximum HP every 40 seconds."
    },
    "LA77": {
        "name_en": "S1:Flowing Grace",
        "name_jp": "S1:時流の恵",
        "name_glen": "S1:Timeflow Grace",
        "effect_en": "Regenerate 10 PP every 4 seconds.",
        "effect_jp": "4秒ごとにPPを10回復する。",
        "effect_glen": "Regenerate 10 PP every 4 seconds."
    },
    "LA88": {
        "name_en": "S1:Flowing Intent",
        "name_jp": "S1:時流の志",
        "name_glen": "S1:Timeflow Will",
        "effect_en": "Increase power every second. Maxes at 4% (30s to MAX).",
        "effect_jp": "1秒毎に与ダメージが上昇。最大で4%。",
        "effect_glen": "Increases attack power every second to a maximum of 4% after 30 seconds. "
    },
    "LA16": {
        "name_en": "S1:Green Leaf Flash",
        "name_jp": "S1:葉ノ緑閃",
        "name_glen": "S1:Leafgleam",
        "effect_en": "A barrier that decreases damage taken by 8% and negates<br>knockback appears and disappears every 20 seconds.",
        "effect_jp": "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。",
        "effect_glen": "Creates a barrier that reduces damage taken by 8% and nullifies knockback.<br>The barrier will appear and disappear in 20 second intervals. "
    },
    "LA24": {
        "name_en": "S1:Guardian Armor",
        "name_jp": "S1:守護の備",
        "name_glen": "S1:Guardian Shield",
        "effect_en": "Reduces damage taken by 7%.",
        "effect_jp": "被ダメージを7%軽減。",
        "effect_glen": "Reduces damage taken by 7%."
    },
    "LA11": {
        "name_en": "S1:Immediate Intent",
        "name_jp": "S1:瞬連の志",
        "name_glen": "S1:Perfectchain Will",
        "effect_en": "Increase damage when performing successive Just Attacks (3% MAX).",
        "effect_jp": "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。",
        "effect_glen": "Increases damage by 2% when performing successive Perfect Attack normal attacks.<br>Maxes at 3%."
    },
    "LA89": {
        "name_en": "S1:Lethal Intent",
        "name_jp": "S1:死中の志",
        "name_glen": "S1:Will of the Dying",
        "effect_en": "Reduce HP by 5% every 20 seconds and increase Power by 4%.",
        "effect_jp": "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。",
        "effect_glen": "Reduce HP by 5% every 20 seconds and increase Might by 4%."
    },
    "LA01": {
        "name_en": "S1:Offensive Intent",
        "name_jp": "S1:剛撃の志",
        "name_glen": "S1:Aggressive Will",
        "effect_en": "Increase damage by 2%.",
        "effect_jp": "与ダメージが2%上昇。",
        "effect_glen": "Increases attack power by 2%."
    },
    "LA96": {
        "name_en": "S1:Offensive Intent 2",
        "name_jp": "S1:剛撃の志2",
        "name_glen": "S1:Aggressive Will 2",
        "effect_en": "Increase damage by 4%.",
        "effect_jp": "与ダメージが4%上昇。",
        "effect_glen": "Increases attack power by 4%."
    },
    "LA79": {
        "name_en": "S1:Phanatical Advantage",
        "name_jp": "S1:狂幻の利",
        "name_glen": "*S1:Phanatical Advantage",
        "effect_en": "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        "effect_jp": "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        "effect_glen": "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms."
    },
    "LA85": {
        "name_en": "S1:Phantasmal Intent",
        "name_jp": "S1:幻精の志",
        "name_glen": "S1:Spectre's Will",
        "effect_en": "Increase Power based on the Photon Blast Gauge. Maxes at 3%.",
        "effect_jp": "フォトンブラストゲージに応じて威力が上昇する。",
        "effect_glen": "Increases attack power based on the Photon Gauge.<br>Maxes out at 3%."
    },
    "LA2P": {
        "name_en": "S1:Photon Balance",
        "name_jp": "S1:光子の秤",
        "name_glen": "S1:Photon Balance",
        "effect_en": "Increase PP Consumption by 8% but increase PA/Technique damage by 4%.",
        "effect_jp": "PP消費量が8％増加する代わりにPAとテクニックの威力が4％上昇する。",
        "effect_glen": "Increases pp consumption by 8% in exchange for 4% more damage on PAs and Techniques."
    },
    "LA98": {
        "name_en": "S1:Photon Balance 2",
        "name_jp": "S1:光子の秤2",
        "name_glen": "S1:Photon Balance 2",
        "effect_en": "Increase PP Consumption by 4% but increase PA/Technique damage by 6%.",
        "effect_jp": "PP消費量が4％増加する代わりにPAとテクニックの威力が6％上昇する。",
        "effect_glen": "Increases pp consumption by 4% in exchange for 6% more damage on PAs and Techniques."
    },
    "LA02": {
        "name_en": "S1:Photon Reduction",
        "name_jp": "S1:光子縮減",
        "name_glen": "S1:Photon Descent",
        "effect_en": "Reduce PP consumption by 7%.",
        "effect_jp": "PP消費量を7%軽減。",
        "effect_glen": "Reduces PP consumption by 7%."
    },
    "LA86": {
        "name_en": "S1:Photon Reduction 2",
        "name_jp": "S1:光子縮減2",
        "name_glen": "S1:Photon Descent 2",
        "effect_en": "Reduce PP consumption by 10%.",
        "effect_jp": "PP消費量を10%軽減。",
        "effect_glen": "Reduce PP consumption by 10%."
    },
    "LA80": {
        "name_en": "S1:Powering Intent",
        "name_jp": "S1:強闘の志",
        "name_glen": "S1:Goliathslayer's Will",
        "effect_en": "Increase damage dealt to bosses by 4%.",
        "effect_jp": "強敵への与ダメージが4%上昇する。",
        "effect_glen": "Increase damage dealt to bosses by 4%."
    },
    "LA22": {
        "name_en": "S1:Radiant Strike",
        "name_jp": "S1:輝剰の撃",
        "name_glen": "S1:Lustrous Strike",
        "effect_en": "Increase Active PP Recovery by 17%.",
        "effect_jp": "攻撃時のPP回復量が17%上昇する。",
        "effect_glen": "Increases active PP recovery by 17%."
    },
    "LA06": {
        "name_en": "S1:Radiating Grace",
        "name_jp": "S1:輝勢の恵",
        "name_glen": "S1:Luminous Grace",
        "effect_en": "Increase Natural PP Recovery by 20%.",
        "effect_jp": "PPの自然回復速度が20%上昇する。",
        "effect_glen": "Increases natural PP recovery by 20%."
    },
    "LA2R": {
        "name_en": "S1:Radiating Grace 2",
        "name_jp": "S1:輝勢の恵2",
        "name_glen": "S1:Luminous Grace 2",
        "effect_en": "Increase Natural PP Recovery by 23%.",
        "effect_jp": "PPの自然回復速度が23%上昇する。",
        "effect_glen": "Increases natural PP recovery by 23%."
    },
    "LA94": {
        "name_en": "S1:Reckless Strike",
        "name_jp": "S1:賭死の撃",
        "name_glen": "S1:Dance with Death",
        "effect_en": "Increase Power every three times you are attacked.<br>(1% on 3rd Hits, 3% on 6th hits, 10% on 9th hits)<br>Upon being attacked a tenth time, release<br>an explosion that reduces your HP to 1 and damages all nearby targets.",
        "effect_jp": "被ダメージ回数に応じて3段階の威力上昇。最大段階の被ダメージ時 周囲ダメージが発生し自身のHPが1になる。",
        "effect_glen": "Increase Attack Power every three times you are hit.<br>Upon receiving a 10th hit an explosion will be released that reduces your HP to 1<br>damages all nearby targets and resets the effect of this skill"
    },
    "LA12": {
        "name_en": "S1:Red Petal Flash",
        "name_jp": "S1:花ノ赤閃",
        "name_glen": "S1:Petalgleam",
        "effect_en": "Increase damage by 3% for 30 seconds after inflicting 450,000 damage.",
        "effect_jp": "与ダメージ450,000毎に30秒間、3%威力上昇。",
        "effect_glen": "Increases power by 3% for 30 seconds after inflicting 450000 damage."
    },
    "LA81": {
        "name_en": "S1:Rupturing Excess",
        "name_jp": "S1:裂砕の剰",
        "name_glen": "S1:Lustrous Partbreaker",
        "effect_en": "Increase PP recovery rate by 40% when attacking breakable parts.",
        "effect_jp": "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。",
        "effect_glen": "Increases active PP recovery by 40% when attacking breakable parts."
    },
    "LA83": {
        "name_en": "S1:Rupturing Intent",
        "name_jp": "S1:裂砕の志",
        "name_glen": "S1:Partbreaker's Will",
        "effect_en": "Increase damage against breakable parts by 4%.",
        "effect_jp": "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        "effect_glen": "Increase damage against breakable parts by 4%."
    },
    "LA92": {
        "name_en": "S1:Shoot Boost",
        "name_jp": "S1:射撃増幅",
        "name_glen": "S1:Ranged Amp",
        "effect_en": "Increase Power by 1% for every 60 R-ATK affixed to this weapon.<br>Increase Power by an additional 2% if at least<br>200 R-ATK is affixed to this weapon.",
        "effect_jp": "特殊能力の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        "effect_glen": "Increase RNG by 1% for every 60 RNG Pwr affixed to this weapon. Increase RNG by an additional 2% if at least 200 RNG Pwr is affixed to this weapon."
    },
    "LA21": {
        "name_en": "S1:Skilled Intent",
        "name_jp": "S1:妙撃の志",
        "name_glen": "S1:Precision Will",
        "effect_en": "Increase Critical Hit Damage by 3%.",
        "effect_jp": "クリティカル時の与ダメージが3%上昇。",
        "effect_glen": "Increases critical hit damage by 3%."
    },
    "LA82": {
        "name_en": "S1:Spirited Response",
        "name_jp": "S1:気輝応変",
        "name_glen": "S1:Luminous Adaptation",
        "effect_en": "Increases PP regeneration rate by 80% while sheathed.<br>Reduce PP regeneration rate by 100% while unsheathed.",
        "effect_jp": "納刀・抜刀を行う事でPP回復速度が変化。",
        "effect_glen": "Natural PP regeneration rate increased by 80% while weapon is sheathed."
    },
    "LA91": {
        "name_en": "S1:Strike Boost",
        "name_jp": "S1:打撃増幅",
        "name_glen": "S1:Melee Amp",
        "effect_en": "Increase Power by 1% for every 60 S-ATK affixed to this weapon.<br>Increase Power by an additional 2% if at least<br>200 S-ATK is affixed to this weapon.",
        "effect_jp": "特殊能力の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        "effect_glen": "Increase MEL by 1% for every 60 MEL Pwr affixed to this weapon. Increase MEL by an additional 2% if at least 200 MEL Pwr is affixed to this weapon."
    },
    "LA84": {
        "name_en": "S1:Sturdy Intent",
        "name_jp": "S1:依属の志",
        "name_glen": "S1:Elementalist's Will",
        "effect_en": "Increase damage by 4% if your weapon's element or<br>equipped Guard Ring match the enemy's elemental weakness.",
        "effect_jp": "ガード系リングまたは武器属性が弱点属性と一致時、4%威力上昇。",
        "effect_glen": "Increases damage by 4% when your equipped Guard-type Ring or Weapon Element matches the enemy's Elemental Weakness."
    },
    "LA93": {
        "name_en": "S1:Tech Boost",
        "name_jp": "S1:法撃増幅",
        "name_glen": "S1:Technique Amp",
        "effect_en": "Increase Power by 1% for every 60 T-ATK affixed to this weapon.<br>Increase Power by an additional 2% if at least<br>200 T-ATK is affixed to this weapon.",
        "effect_jp": "特殊能力の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        "effect_glen": "Increase TEC by 1% for every 60 TEC Pwr affixed to this weapon. Increase TEC by an additional 2% if at least 200 TEC Pwr is affixed to this weapon."
    },
    "LA25": {
        "name_en": "S1:Vigor Enhancement",
        "name_jp": "S1:活剰増進",
        "name_glen": "S1:Augmented Lifeboon",
        "effect_en": "Increase HP recovered from self-healing effects by 40%.",
        "effect_jp": "自身のHP回復量が40%上昇する。",
        "effect_glen": "Increases HP recovered from self-healing by 40%."
    },
    "LA14": {
        "name_en": "S1:White Snow Flash",
        "name_jp": "S1:雪ノ白閃",
        "name_glen": "S1:Snowgleam",
        "effect_en": "Increase Active PP Recovery by 20% for 30 seconds after using 150 PP.",
        "effect_jp": "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。",
        "effect_glen": "Increases Active PP Recovery by 20% for 30 seconds after using 150 PP."
    },
    "LA03": {
        "name_en": "S1:Wise Skill",
        "name_jp": "S1:妙技の巧",
        "name_glen": "S1:Skillful Adept",
        "effect_en": "Increase Critical Hit Rate by 15%.",
        "effect_jp": "クリティカル率が15%上昇する。",
        "effect_glen": "Increases critical hit rate by 15%."
    },
    "LA2S": {
        "name_en": "S1:Wise Skill 2",
        "name_jp": "S1:妙技の巧2",
        "name_glen": "S1:Skillful Adept 2",
        "effect_en": "Increase Critical Hit Rate by 18%.",
        "effect_jp": "クリティカル率が18%上昇する。",
        "effect_glen": "Increases critical hit rate by 18%."
    },
    "LA15": {
        "name_en": "S1:Yellow Moon Flash",
        "name_jp": "S1:月ノ黄閃",
        "name_glen": "S1:Moongleam",
        "effect_en": "Decrease PP consumption by 8% for 20 seconds after performing a Just Guard.",
        "effect_jp": "ジャストガード成功時に20秒間、PP消費量を8%軽減。",
        "effect_glen": "Reduces PP consumption by 8% for 20 seconds after performing a Perfect Guard."
    },
    "LB99": {
        "name_en": "S2: Placeholder",
        "name_jp": "S2:ジャンク",
        "name_glen": "S2:Placeholder",
        "effect_en": "Placeholder - S2",
        "effect_jp": "任意のS2能力を表します。",
        "effect_glen": "Represents any S2 ability."
    },
    "LB1Z": {
        "name_en": "S2:Aegis Gift",
        "name_jp": "S2:瞬護の与",
        "name_glen": "S2:Flashguard Boon",
        "effect_en": "Successfully performing a Just Guard while below 25% HP recovers 50% HP and 30% PP.",
        "effect_jp": "HP25%以下でジャストガード成功時HP50%PP30%回復。",
        "effect_glen": "Successfully performing a Perfect Guard while below 25% HP recovers 50% HP and 30% PP."
    },
    "LB98": {
        "name_en": "S2:Brilliant Intent",
        "name_jp": "S2:輝充の志",
        "name_glen": "S2:Photonic Will",
        "effect_en": "Boosts damage by 3% while PP is at 40% or above.",
        "effect_jp": "PPが40%以上の時、与ダメージが3%上昇。",
        "effect_glen": "Increases attack power by 3% while PP is at or above 40%."
    },
    "LB17": {
        "name_en": "S2:Brilliant Ruin",
        "name_jp": "S2:滅域輝与",
        "name_glen": "S2:Lucent Domain",
        "effect_en": "Recover 3 PP when an enemy near you is defeated.",
        "effect_jp": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        "effect_glen": "Recover 4 PP when a nearby enemy is defeated."
    },
    "LB05": {
        "name_en": "S2:Cursed Radiance",
        "name_jp": "S2:災転輝与",
        "name_glen": "S2:Lucent Adversity",
        "effect_en": "Recovers PP by 15% when taking damage.",
        "effect_jp": "ダメージを受けた際にPPを15%回復する。",
        "effect_glen": "Recovers 15% of your max PP when you take damage."
    },
    "LB2E": {
        "name_en": "S2:Darkness Guard",
        "name_jp": "S2:暗闇の備志",
        "name_glen": "S2:One with the Dark",
        "effect_en": "Increase Dark Attribute and Poison Resistance (30). Increase damage by 3% against enemies weak to Poison.",
        "effect_jp": "闇耐性、ポイズン耐性が上昇。敵の弱点属性が闇属性の時、威力上昇。",
        "effect_glen": "Increases dark resistance and poison resistance by 30%.<br>Increases damage by 3% against enemies weak to dark."
    },
    "LB1D": {
        "name_en": "S2:Double-Edged Sword",
        "name_jp": "S2:諸刃の撃",
        "name_glen": "S2:Two-edged Strike",
        "effect_en": "Increase Power by 3% but take 6% more damage when weapon is drawn.",
        "effect_jp": "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。",
        "effect_glen": "Increases attack power by 3% but take 6% more damage when your weapon is drawn."
    },
    "LB90": {
        "name_en": "S2:Flaming Guard",
        "name_jp": "S2:火炎の備志",
        "name_glen": "S2:One with the Flame",
        "effect_en": "Increase Fire Attribute and Burn Resistance (30). Increase damage by 3% against enemies weak to Fire.",
        "effect_jp": "炎耐性、バーン耐性が上昇。敵の弱点属性が炎属性の時、威力上昇。",
        "effect_glen": "Increases fire resistance and burn resistance by 30%.<br>Increase damage by 3% against enemies weak to fire."
    },
    "LB2C": {
        "name_en": "S2:Flowing Armor",
        "name_jp": "S2:時流の護",
        "name_glen": "S2:Timeflow Armor",
        "effect_en": "Cast Deband on yourself at regular intervals (14s cooldown after doing 1 tick of Deband).",
        "effect_jp": "一定間隔で自身にデバンドを発動する。",
        "effect_glen": "Deband is automatically cast every 14 seconds."
    },
    "LB07": {
        "name_en": "S2:Flowing Exhilaration",
        "name_jp": "S2:時流活与",
        "name_glen": "S2:Timeflow Vitality",
        "effect_en": "Recover 60% of your maximum HP every 40s.",
        "effect_jp": "一定時間ごとにHPを60%回復する。",
        "effect_glen": "Restores 60% of your maximum HP every 40 seconds."
    },
    "LB2G": {
        "name_en": "S2:Flowing Exhilaration 2",
        "name_jp": "S2:時流活与2",
        "name_glen": "S2:Timeflow Vitality 2",
        "effect_en": "Recover 75% of your maximum HP every 40s.",
        "effect_jp": "一定時間ごとにHPを75%回復する。",
        "effect_glen": "Restores 75% of your maximum HP every 40 seconds."
    },
    "LB0A": {
        "name_en": "S2:Flowing Grace",
        "name_jp": "S2:時流の恵",
        "name_glen": "S2:Timeflow Grace",
        "effect_en": "Regenerate 10 PP every 4 seconds.",
        "effect_jp": "4秒ごとにPPを10回復する。",
        "effect_glen": "Regenerate 10 PP every 4 seconds."
    },
    "LB91": {
        "name_en": "S2:Freezing Guard",
        "name_jp": "S2:氷雪の備志",
        "name_glen": "S2:One with the Tundra",
        "effect_en": "Increase Ice Attribute and Freeze Resistance (30). Increase damage by 3% against enemies weak to Ice.",
        "effect_jp": "氷耐性、フリーズ耐性が上昇。敵の弱点属性が氷属性の時、威力上昇。",
        "effect_glen": "Increases ice resistance and freeze resistance by 30%.<br>Increases damage by 3% against enemies weak to ice."
    },
    "LB06": {
        "name_en": "S2:Guardian Armor",
        "name_jp": "S2:守護の備",
        "name_glen": "S2:Guardian Shield",
        "effect_en": "Reduces damage taken by 7%.",
        "effect_jp": "被ダメージを7%軽減。",
        "effect_glen": "Reduces damage taken by 7%."
    },
    "LB95": {
        "name_en": "S2:Guardian Armor 2",
        "name_jp": "S2:守護の備2",
        "name_glen": "S2:Guardian Shield 2",
        "effect_en": "Reduces damage taken by 10%.",
        "effect_jp": "被ダメージを10%軽減。",
        "effect_glen": "Reduces damage taken by 10%."
    },
    "LB2A": {
        "name_en": "S2:Heavenly Keeper",
        "name_jp": "S2:保天輝地",
        "name_glen": "S2:Sky-Earth Lucency",
        "effect_en": "Reduce PP Consumption by 8% while airborne. Increase Natural PP Recovery and Active PP Recovery by 20% while on the ground.",
        "effect_jp": "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。",
        "effect_glen": "Reduces PP consumption by 8% while airborne.<br>Increases natural PP and active PP recovery by 20% while on the ground."
    },
    "LB97": {
        "name_en": "S2:Heavenly Keeper 2",
        "name_jp": "S2:保天輝地2",
        "name_glen": "S2:Sky-Earth Lucency 2",
        "effect_en": "Reduce PP Consumption by 15% while airborne. Increase Natural PP Recovery by 25% and increase Active PP Recovery by 35% while on the ground.",
        "effect_jp": "空中時では、PP消費量が15％軽減。地上時では自然PP回復量が25％かつ地上での攻撃時ではPP回復量が35％上昇。",
        "effect_glen": "Reduces PP consumption by 15% while airborne.<br>Increases natural PP and active PP recovery by 35% while on the ground."
    },
    "LB08": {
        "name_en": "S2:Immediate Profusion",
        "name_jp": "S2:瞬撃繚乱",
        "name_glen": "S2:Dynamo Dance",
        "effect_en": "Raises damage by 3% when Just Attacking different PAs or Techniques.",
        "effect_jp": "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        "effect_glen": "Increases damage by 3% when linking together PAs or Techniques with Perfect Attacks."
    },
    "LB88": {
        "name_en": "S2:Instant Purpose",
        "name_jp": "S2:瞬乱巧志",
        "name_glen": "S2:Perfect Adept Will",
        "effect_en": "Boosts critical hit damage by 2% and increases crit rate by 15% when Just Attacking different PAs and Techniques.",
        "effect_jp": "別のPAやテクニックをジャストアタックするとクリティカル威力2%クリティカル率15%上昇。",
        "effect_glen": "Increases Critical Hit Rate by 15% and Critical Hit Power by 2% when consecutively chaining different PAs or Techniques with Perfect Attacks."
    },
    "LB89": {
        "name_en": "S2:Instant Reduction",
        "name_jp": "S2:瞬乱縮減",
        "name_glen": "S2:Perfect Descent",
        "effect_en": "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
        "effect_jp": "別のPAやテクニックをジャストアタックするとPP消費量を12%軽減。",
        "effect_glen": "Reduces PP consumption by 12% when consecutively chaining different PAs or Techniques with Perfect Attacks."
    },
    "LB94": {
        "name_en": "S2:Instant Reduction 2",
        "name_jp": "S2:瞬乱縮減2",
        "name_glen": "S2:Perfect Descent 2",
        "effect_en": "Reduces PP consumption by 20% when Just Attacking different PAs or Techniques.",
        "effect_jp": "別のPAやテクニックをジャストアタックするとPP消費量を20%軽減。",
        "effect_glen": "Reduces PP consumption by 20% when consecutively chaining different PAs or Techniques with Perfect Attacks."
    },
    "LB1W": {
        "name_en": "S2:Lightning Guard",
        "name_jp": "S2:轟雷の備志",
        "name_glen": "S2:One with the Thunder",
        "effect_en": "Increase Lightning Attribute and Shock Resistance (30). Increase damage by 3% against enemies weak to Lightning.",
        "effect_jp": "雷耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        "effect_glen": "Increases lightning resistance and shock resistance by 30%.<br>Increases damage by 3% against enemies weak to lightning."
    },
    "LB1Q": {
        "name_en": "S2:Medicinal Wisdom",
        "name_jp": "S2:服薬の恵",
        "name_glen": "S2:Medical Grace",
        "effect_en": "Restore PP upon consuming a Mate-type item (Automate OK). Effect varies based on the item consumed (10/30/60 PP for Mono/Di/Trimate).",
        "effect_jp": "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
        "effect_glen": "Restores varying amounts of PP upon consuming a -mate item. Amount restored is 20 for Monomate<br>40 for Dimate<br>60 for Trimate.<br>Works with Automate."
    },
    "LB87": {
        "name_en": "S2:Medicinal Wisdom 2",
        "name_jp": "S2:服薬の恵2",
        "name_glen": "*S2:Medical Grace 2",
        "effect_en": "Restore PP upon consuming a Mate-type item (Automate OK). Effect varies based on the item consumed (30/50/80 PP for Mono/Di/Trimate).",
        "effect_jp": "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
        "effect_glen": "Restores varying amounts of PP upon consuming a -mate item. Amount restored is X for Monomate<br>Y for Dimate<br>Z for Trimate.<br>Works with Automate."
    },
    "LB13": {
        "name_en": "S2:Nature's Exhilaration",
        "name_jp": "S2:花海雪の活与",
        "name_glen": "S2:Petalsea Vitality",
        "effect_en": "Recover 2% HP every second when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>recover 2% of max HP every second."
    },
    "LB12": {
        "name_en": "S2:Nature's Intent",
        "name_jp": "S2:花海雪の志",
        "name_glen": "S2:Will of the Petalsea",
        "effect_en": "Increase damage by 3% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>attack power is increased by 3%."
    },
    "LB14": {
        "name_en": "S2:Nature's Reduction",
        "name_jp": "S2:花海雪の縮減",
        "name_glen": "S2:Petalsea Descent",
        "effect_en": "Decrease PP consumption by 12% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>PP consumption is reduced by 12%."
    },
    "LB1L": {
        "name_en": "S2:Nature's Reduction 2",
        "name_jp": "S2:花海雪の縮減2",
        "name_glen": "S2:Petalsea Descent 2",
        "effect_en": "Decrease PP consumption by 14% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>PP consumption is reduced by 14%."
    },
    "LB11": {
        "name_en": "S2:Nature's Skill",
        "name_jp": "S2:花海雪の巧",
        "name_glen": "S2:Petalsea Adept",
        "effect_en": "Increase Critical Hit Rate by 20% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>critical hit rate is increased by 20%."
    },
    "LB19": {
        "name_en": "S2:Offensive Intent",
        "name_jp": "S2:剛撃の志",
        "name_glen": "S2:Aggressive Will",
        "effect_en": "Increase damage by 2%.",
        "effect_jp": "与ダメージが2%上昇。",
        "effect_glen": "Increases attack power by 2%."
    },
    "LB1I": {
        "name_en": "S2:Phanatical Advantage",
        "name_jp": "S2:狂幻の利",
        "name_glen": "*S2:Phanatical Advantage",
        "effect_en": "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        "effect_jp": "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        "effect_glen": "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms."
    },
    "LB1G": {
        "name_en": "S2:Phantasmal Gleam",
        "name_jp": "S2:幻精輝勢",
        "name_glen": "S2:Spectre Apparition",
        "effect_en": "Increase Natural PP Recovery based on the Photon Blast Gauge. Maxes at 23%.",
        "effect_jp": "フォトンブラストゲージに応じてPP自然回復量が上昇する。",
        "effect_glen": "Increases natural PP recovery based on the Photon Blast Gauge.<br>Maxes at 23%."
    },
    "LB1H": {
        "name_en": "S2:Phantasmal Guardian",
        "name_jp": "S2:幻精の備",
        "name_glen": "S2:Spectre Shield",
        "effect_en": "Reduce damage taken based on the Photon Blast Gauge. Maxes at 9%.",
        "effect_jp": "フォトンブラストゲージに応じて被ダメージ量が減少する。",
        "effect_glen": "Reduces damage taken based on the Photon Blast Gauge.<br>Maxes at 9%."
    },
    "LB1F": {
        "name_en": "S2:Phantasmal Radiance",
        "name_jp": "S2:幻精輝剰",
        "name_glen": "S2:Lustrous Spectre",
        "effect_en": "Increase Active PP Recovery based on the Photon Blast Gauge. Maxes at 25%.",
        "effect_jp": "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。",
        "effect_glen": "Increases active PP recovery based on the Photon Blast Gauge.<br>Maxes at 25%."
    },
    "LB02": {
        "name_en": "S2:Photon Reduction",
        "name_jp": "S2:光子縮減",
        "name_glen": "S2:Photon Descent",
        "effect_en": "Reduce PP consumption by 10%.",
        "effect_jp": "PP消費量を10%軽減。",
        "effect_glen": "Reduces PP consumption by 10%."
    },
    "LB2F": {
        "name_en": "S2:Photon Reduction 2",
        "name_jp": "S2:光子縮減2",
        "name_glen": "S2:Photon Descent 2",
        "effect_en": "Reduce PP consumption by 13%.",
        "effect_jp": "PP消費量を13%軽減。",
        "effect_glen": "Reduces PP consumption by 13%."
    },
    "LB96": {
        "name_en": "S2:Photon Reduction 3",
        "name_jp": "S2:光子縮減3",
        "name_glen": "S2:Photon Descent 3",
        "effect_en": "Reduce PP consumption by 15%.",
        "effect_jp": "PP消費量を15%軽減。",
        "effect_glen": "Reduce PP consumption by 15%."
    },
    "LB1E": {
        "name_en": "S2:Powering Intent",
        "name_jp": "S2:強闘の志",
        "name_glen": "S2:Goliathslayer's Will",
        "effect_en": "Increase damage dealt to bosses by 3%.",
        "effect_jp": "強敵への与ダメージが3%上昇する。",
        "effect_glen": "Increase damage dealt to bosses by 3%."
    },
    "LB04": {
        "name_en": "S2:Radiant Strike",
        "name_jp": "S2:輝剰の撃",
        "name_glen": "S2:Lustrous Strike",
        "effect_en": "Increase Active PP Recovery by 17%.",
        "effect_jp": "攻撃時のPP回復量が17%上昇する。",
        "effect_glen": "Increases active PP recovery by 17%."
    },
    "LB1P": {
        "name_en": "S2:Radiant Strike 2",
        "name_jp": "S2:輝剰の撃2",
        "name_glen": "S2:Lustrous Strike 2",
        "effect_en": "Increase Active PP Recovery by 20%.",
        "effect_jp": "攻撃時のPP回復量が20%上昇する。",
        "effect_glen": "Increase active PP Recovery by 20%."
    },
    "LB18": {
        "name_en": "S2:Radiating Grace",
        "name_jp": "S2:輝勢の恵",
        "name_glen": "S2:Luminous Grace",
        "effect_en": "Increase Natural PP Recovery by 17%.",
        "effect_jp": "PPの自然回復速度が17%上昇する。",
        "effect_glen": "Increases natural PP recovery by 17%."
    },
    "LB2J": {
        "name_en": "S2:Rainbow's Exhilaration",
        "name_jp": "S2:六色の活与",
        "name_glen": "S2:Rainbow Vitality",
        "effect_en": "Recover 3% HP at regular intervals while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>recover 3% max HP every second."
    },
    "LB2I": {
        "name_en": "S2:Rainbow's Intent",
        "name_jp": "S2:六色の志",
        "name_glen": "S2:Rainbow Will",
        "effect_en": "Increase Power by 5% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>attack power is increased by 5%.<br>35 second cooldown upon activation."
    },
    "LB92": {
        "name_en": "S2:Runner's High",
        "name_jp": "S2:走者高揚",
        "name_glen": "S2:Runner's High",
        "effect_en": "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
        "effect_jp": "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。",
        "effect_glen": "Increases natural PP recovery by 100% and restores 15% of max HP for every 5 seconds you are running."
    },
    "LB1C": {
        "name_en": "S2:Rupturing Excess",
        "name_jp": "S2:裂砕の剰",
        "name_glen": "S2:Lustrous Partbreaker",
        "effect_en": "Increase PP recovery rate by 35% when attacking breakable parts.",
        "effect_jp": "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。",
        "effect_glen": "Increases active PP recovery by 35% when attacking breakable parts."
    },
    "LB1B": {
        "name_en": "S2:Rupturing Intent",
        "name_jp": "S2:裂砕の志",
        "name_glen": "S2:Partbreaker's Will",
        "effect_en": "Increase damage against breakable parts by 3%.",
        "effect_jp": "破壊可能な部位を攻撃した際、威力が3%上昇する。",
        "effect_glen": "Increase damage against breakable parts by 3%."
    },
    "LB2D": {
        "name_en": "S2:Shining Guard",
        "name_jp": "S2:光明の備志",
        "name_glen": "S2:One with the Light",
        "effect_en": "Increase Light Attribute and Panic Resistance (30). Increase damage by 3% against enemies weak to Light.",
        "effect_jp": "光耐性、パニック耐性が上昇。敵の弱点属性が光属性の時、威力上昇。",
        "effect_glen": "Increases light resistance and panic resistance by 30%.<br>Increase damage by 3% against enemies weak to light."
    },
    "LB93": {
        "name_en": "S2:Skill Reduction",
        "name_jp": "S2:技巧縮減",
        "name_glen": "S2:Prowess in Descent",
        "effect_en": "Reduce PP consumption by 5% for 30 seconds upon hitting with a PA/Technique. Has a 33% chance to reduce PP consumption by 30% instead. Triggers 35s Recast upon activation.",
        "effect_jp": "フォトンアーツまたはテクニック命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。",
        "effect_glen": "Reduces PP consumption by 5% for 30 seconds upon landing a PA or Technique.<br>Has a 33% chance to reduce PP consumption by 30% instead.35 second cooldown upon activation."
    },
    "LB1A": {
        "name_en": "S2:Skilled Intent",
        "name_jp": "S2:妙撃の志",
        "name_glen": "S2:Precision Will",
        "effect_en": "Increase Critical Hit Damage by 3%.",
        "effect_jp": "クリティカル時の与ダメージが3%上昇。",
        "effect_glen": "Increase Critical Hit Damage by 3%."
    },
    "LB1O": {
        "name_en": "S2:Skilled Intent 2",
        "name_jp": "S2:妙撃の志2",
        "name_glen": "S2:Precision Will 2",
        "effect_en": "Increase Critical Hit Damage by 4%.",
        "effect_jp": "クリティカル時の与ダメージが4%上昇。",
        "effect_glen": "Increase Critical Hit Damage by 4%."
    },
    "LB09": {
        "name_en": "S2:Spirited Response",
        "name_jp": "S2:気輝応変",
        "name_glen": "S2:Luminous Adaptation",
        "effect_en": "Increases PP regeneration rate by 100% while sheathed. Reduce PP regeneration rate by 100% while unsheathed.",
        "effect_jp": "納刀・抜刀を行う事でPP回復速度が変化。",
        "effect_glen": "Natural PP regeneration rate increased by 100% while weapon is sheathed."
    },
    "LB1Y": {
        "name_en": "S2:Storm Guard",
        "name_jp": "S2:暴風の備志",
        "name_glen": "S2:One with the Storm",
        "effect_en": "Increase Wind Attribute and Mirage Resistance (30). Increase damage by 3% against enemies weak to Wind.",
        "effect_jp": "風耐性、ミラージュ耐性が上昇。敵の弱点属性が風属性の時、威力上昇。",
        "effect_glen": "Increases wind resistance and blind resistance by 30%.<br>Increases damage by 3% against enemies weak to wind."
    },
    "LB01": {
        "name_en": "S2:Sturdy Recovery",
        "name_jp": "S2:剛乱活与",
        "name_glen": "S2:Tumultuous Vitality",
        "effect_en": "When attacking, has a 10% chance to restore HP equal to 1% of damage dealt. (Max: 300)",
        "effect_jp": "一定確率で与ダメージの1%をHPとして吸収。(上限300)",
        "effect_glen": "Grants a 10% chance to restore HP equal to 1% of damage dealt.<br>Maximum amount of HP restored is 300."
    },
    "LB15": {
        "name_en": "S2:Umbrageous Gleam",
        "name_jp": "S2:月葉影の輝勢",
        "name_glen": "S2:Luminous Moonleaf",
        "effect_en": "Increase Natural PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>natural PP recovery is increased by 25%."
    },
    "LB16": {
        "name_en": "S2:Umbrageous Guardian",
        "name_jp": "S2:月葉影の備",
        "name_glen": "S2:Moonleaf Shield",
        "effect_en": "Decrease damage taken by 12% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>damage taken is reduced by 12%."
    },
    "LB1K": {
        "name_en": "S2:Umbrageous Melody",
        "name_jp": "S2:月葉影の歌",
        "name_glen": "S2:Moonleaf Song",
        "effect_en": "Increase power over time when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active. Maxes at 5% (37.5s to MAX).",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active the damage increases every second.<br>Maxes out at 5% after 37.5 seconds."
    },
    "LB2K": {
        "name_en": "S2:Umbrageous Melody 2",
        "name_jp": "S2:月葉影の歌2",
        "name_glen": "S2:Moonleaf Song 2",
        "effect_en": "Increase power over time while S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or S1:Black Shadow Flash are active. Maxes at 7%.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で7%。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active the damage increases every second.<br>Maxes out at 7% after 37.5 seconds."
    },
    "LB1R": {
        "name_en": "S2:Umbrageous Radiance",
        "name_jp": "S2:月葉影の輝剰",
        "name_glen": "S2:Lustrous Moonleaf",
        "effect_en": "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>active PP recovery is increased by 25%."
    },
    "LB1M": {
        "name_en": "S2:Umbrageous Radiance 2",
        "name_jp": "S2:月葉影の輝剰2",
        "name_glen": "S2:Lustrous Moonleaf 2",
        "effect_en": "Increase Active PP Recovery by 28% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>active PP recovery is increased by 28%."
    },
    "LB03": {
        "name_en": "S2:Wise Skill",
        "name_jp": "S2:妙技の巧",
        "name_glen": "S2:Skillful Adept",
        "effect_en": "Increase Critical Hit Rate by 12%.",
        "effect_jp": "クリティカル率が12%上昇する。",
        "effect_glen": "Increases critical hit rate by 12%."
    },
    "LB1N": {
        "name_en": "S2:Wise Skill 2",
        "name_jp": "S2:妙技の巧2",
        "name_glen": "S2:Skillful Adept 2",
        "effect_en": "Increase Critical Hit Rate by 15%.",
        "effect_jp": "クリティカル率が15%上昇する。",
        "effect_glen": "Increase Critical Hit Rate by 15%."
    },
    "LC99": {
        "name_en": "S3: Placeholder",
        "name_jp": "S3:ジャンク",
        "name_glen": "S3:Placeholder",
        "effect_en": "Placeholder - S3",
        "effect_jp": "任意のS3能力を表します。",
        "effect_glen": "Represents any S3 ability."
    },
    "LC1A": {
        "name_en": "S3:Brilliant Ruin",
        "name_jp": "S3:滅域輝与",
        "name_glen": "S3:Lucent Domain",
        "effect_en": "Recover 3 PP when an enemy near you is defeated.",
        "effect_jp": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        "effect_glen": "Recover 3 PP when a nearby enemy is defeated."
    },
    "LC90": {
        "name_en": "S3:Calming Exhilaration",
        "name_jp": "S3:静心活与",
        "name_glen": "S3:Steadfast Vitality",
        "effect_en": "Recover 70 HP when you hit with a normal attack. Has a 1.2~1.3s cooldown between uses.",
        "effect_jp": "通常攻撃が命中した時HPが70回復。発動後リキャスト発生。",
        "effect_glen": "Recover 70 HP when you hit with a Normal Attack. Has a 1.2~1.3s cooldown between uses."
    },
    "LC1B": {
        "name_en": "S3:Cursed Radiance",
        "name_jp": "S3:災転輝与",
        "name_glen": "S3:Lucent Adversity",
        "effect_en": "Recovers PP by 15% when taking damage.",
        "effect_jp": "ダメージを受けた際にPPを15%回復する。",
        "effect_glen": "Recovers 15% of your max PP when you take damage."
    },
    "LC92": {
        "name_en": "S3:Curtailed Strike",
        "name_jp": "S3:撃流縮減",
        "name_glen": "S3:Strikeflow Descent",
        "effect_en": "Decrease PP consumption by 1% for every 300,000 damage dealt. Maxes at 15%.",
        "effect_jp": "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）",
        "effect_glen": "Reduces PP consumption by 1% for every 300000 damage dealt.<br>Maxes at 15%."
    },
    "LC1Q": {
        "name_en": "S3:Double-Edged Sword",
        "name_jp": "S3:諸刃の撃",
        "name_glen": "S3:Two-edged Strike",
        "effect_en": "Deal 4% more damage but take 8% more damage when weapon is drawn.",
        "effect_jp": "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
        "effect_glen": "Increases attack power by 4% but take 8% more damage when your weapon is drawn."
    },
    "LC2B": {
        "name_en": "S3:Flowing Courage",
        "name_jp": "S3:時流の勇",
        "name_glen": "S3:Timeflow Mettle",
        "effect_en": "Cast Shifta on yourself at regular intervals (14s cooldown after doing 1 tick of Shifta).",
        "effect_jp": "一定間隔で自身にシフタを発動する。",
        "effect_glen": "Shifta is automatically cast every 14 seconds."
    },
    "LC06": {
        "name_en": "S3:Flowing Exhilaration",
        "name_jp": "S3:時流活与",
        "name_glen": "S3:Timeflow Vitality",
        "effect_en": "Recover 40% of your maximum HP every 40s.",
        "effect_jp": "一定時間ごとにHPを40%回復する。",
        "effect_glen": "Restores 40% of your maximum HP every 40 seconds."
    },
    "LC1J": {
        "name_en": "S3:Flowing Exhilaration 2",
        "name_jp": "S3:時流活与2",
        "name_glen": "S3:Timeflow Vitality 2",
        "effect_en": "Recover 60% of your maximum HP every 40s.",
        "effect_jp": "一定時間ごとにHPを60%回復する。",
        "effect_glen": "Restores 60% of your maximum HP every 40 seconds."
    },
    "LC1I": {
        "name_en": "S3:Flowing Grace",
        "name_jp": "S3:時流の恵",
        "name_glen": "S3:Timeflow Grace",
        "effect_en": "Regenerate 7 PP every 4 seconds.",
        "effect_jp": "4秒ごとにPPを7回復する。",
        "effect_glen": "Regenerate 7 PP every 4 seconds."
    },
    "LC91": {
        "name_en": "S3:Fortifying Strike",
        "name_jp": "S3:撃流の備",
        "name_glen": "S3:Strikeflow Shield",
        "effect_en": "Decrease damage taken by 1% for<br>every 300,000 damage dealt. Maxes at 15%.",
        "effect_jp": "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）",
        "effect_glen": "Reduces damage taken by 1% for every 300000 damage dealt.<br>Maxes at 15%."
    },
    "LC1S": {
        "name_en": "S3:Furious Inspiration",
        "name_jp": "S3:猛威の奮激",
        "name_glen": "S3:Persistent Fury",
        "effect_en": "Increase Power (+4%) and Critical Hit Rate (+5%). Enhance PP efficiency <br>(10% Natural PP recovery, 15% Active PP recovery, -5% PP Consumption). <br>Effect resets when damage is taken. (180s Cooldown)",
        "effect_jp": "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。",
        "effect_glen": "Increases attack power by 4% and critical hit rate by 5%.<br>Enhances PP efficiency as follows:<br>PP recovery +10%<br>Active PP recovery +15%<br>PP consumption -5%.<br>Effects will be lost when damage is taken (180s cooldown)."
    },
    "LC17": {
        "name_en": "S3:Guardian Armor",
        "name_jp": "S3:守護の備",
        "name_glen": "S3:Guardian Shield",
        "effect_en": "Reduces damage taken by 7%.",
        "effect_jp": "被ダメージを7%軽減。",
        "effect_glen": "Reduces damage taken by 7%."
    },
    "LC1Y": {
        "name_en": "S3:Immediate Brilliance",
        "name_jp": "S3:瞬連の輝",
        "name_glen": "*S3:Immediate Brilliance",
        "effect_en": "Successful JA hits boost your PP recovery amount by 3%. Cannot exceed 45%. Does not end when you miss a JA.",
        "effect_jp": "JA攻撃が命中する度PP回復性能が3%上昇。最大で45%まで上昇。JA失敗時に消失しない。",
        "effect_glen": "Successful JA hits<br>boosts your PP<br>recovery amount by<br>3%. Cannot exceed<br>30%. Non-JA hits<br>are excluded."
    },
    "LC1F": {
        "name_en": "S3:Immediate Profusion",
        "name_jp": "S3:瞬撃繚乱",
        "name_glen": "S3:Dynamo Dance",
        "effect_en": "Raises damage by 3% when Just Attacking different PAs or Techniques.",
        "effect_jp": "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        "effect_glen": "Increases damage by 3% when linking together PAs or Techniques with Perfect Attacks."
    },
    "LC89": {
        "name_en": "S3:Nature's Gleam",
        "name_jp": "S3:花海雪の輝勢",
        "name_glen": "S3:Luminous Petalsea",
        "effect_en": "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>natural PP recovery is increased by 23%."
    },
    "LC1H": {
        "name_en": "S3:Nature's Gleam 2",
        "name_jp": "S3:花海雪の輝勢2",
        "name_glen": "S3:Petalsea Lucentrush 2",
        "effect_en": "Increase Natural PP Recovery by 25% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>natural PP recovery is increased by 25%."
    },
    "LC18": {
        "name_en": "S3:Nature's Guardian",
        "name_jp": "S3:花海雪の備",
        "name_glen": "S3:Petalsea Shield",
        "effect_en": "Decrease damage taken by 10% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>damage taken is reduced by 10%."
    },
    "LC1G": {
        "name_en": "S3:Nature's Melody",
        "name_jp": "S3:花海雪の歌",
        "name_glen": "S3:Petalsea Song",
        "effect_en": "Increase damage over time when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active. Maxes at 5%= (37.5s to MAX).",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>attack power increases every second.<br>Maxes out at 5% after 37.5 seconds."
    },
    "LC1U": {
        "name_en": "S3:Nature's Melody 2",
        "name_jp": "S3:花海雪の歌2",
        "name_glen": "S3:Petalsea Song 2",
        "effect_en": "Increase Power over time while S1:Red Petal Flash,<br>S1:Blue Ocean Flash, or S1:White Snow Flash are active. Maxes at 7%.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>attack power increases every second.<br>Maxes out at 7% after 15 seconds."
    },
    "LC14": {
        "name_en": "S3:Nature's Radiance",
        "name_jp": "S3:花海雪の輝剰",
        "name_glen": "S3:Luminous Petalsea",
        "effect_en": "Increase Active PP Recovery by 28% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        "effect_jp": "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。",
        "effect_glen": "While Petalgleam/Seagleam or Snowgleam are active<br>natural PP recovery is increased by 23%."
    },
    "LC01": {
        "name_en": "S3:Offensive Intent",
        "name_jp": "S3:剛撃の志",
        "name_glen": "S3:Aggressive Will",
        "effect_en": "Increase damage by 2%.",
        "effect_jp": "与ダメージが2%上昇。",
        "effect_glen": "Increases attack power by 2%."
    },
    "LC1E": {
        "name_en": "S3:Phanatical Advantage",
        "name_jp": "S3:狂幻の利",
        "name_glen": "*S3:Phanatical Advantage",
        "effect_en": "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        "effect_jp": "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        "effect_glen": "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms."
    },
    "LC1D": {
        "name_en": "S3:Phantasmal Reduction",
        "name_jp": "S3:幻精縮減",
        "name_glen": "S3:Spectre's Descent",
        "effect_en": "Reduce PP consumption based on the Photon Blast Gauge. Maxes at 12%.",
        "effect_jp": "フォトンブラストゲージに応じてPP消費量が減少する。",
        "effect_glen": "Reduce PP consumption based on the Photon Blast Gauge.<br>4% at 0-3 bars, 8% at 4-7 bars, 12% when fully charged."
    },
    "LC16": {
        "name_en": "S3:Photon Reduction",
        "name_jp": "S3:光子縮減",
        "name_glen": "S3:Photon Descent",
        "effect_en": "PP consumption is reduced by 7%.",
        "effect_jp": "PP消費量を7%軽減。",
        "effect_glen": "Reduces PP consumption by 7%."
    },
    "LC98": {
        "name_en": "S3:Powering Intent",
        "name_jp": "S3:強闘の志",
        "name_glen": "S3:Goliathslayer's Will",
        "effect_en": "Increase damage dealt to bosses by 4%.",
        "effect_jp": "強敵への与ダメージが4%上昇する。",
        "effect_glen": "Increase damage dealt to bosses by 4%."
    },
    "LC03": {
        "name_en": "S3:Radiant Strike",
        "name_jp": "S3:輝剰の撃",
        "name_glen": "S3:Lustrous Strike",
        "effect_en": "Increase Active PP Recovery by 20%.",
        "effect_jp": "攻撃時のPP回復量が20%上昇する。",
        "effect_glen": "Increases active PP recovery by 20%."
    },
    "LC1P": {
        "name_en": "S3:Radiant Strike 2",
        "name_jp": "S3:輝剰の撃2",
        "name_glen": "S3:Lustrous Strike 2",
        "effect_en": "Increase Active PP Recovery by 23%.",
        "effect_jp": "攻撃時のPP回復量が23%上昇する。",
        "effect_glen": "Increase active PP Recovery by 23%."
    },
    "LC97": {
        "name_en": "S3:Radiant Strike 3",
        "name_jp": "S3:輝剰の撃3",
        "name_glen": "S3:Lustrous Strike 3",
        "effect_en": "Increase Active PP Recovery by 35%.",
        "effect_jp": "攻撃時のPP回復量が35%上昇する。",
        "effect_glen": "Increase Active PP Recovery by 35%."
    },
    "LC05": {
        "name_en": "S3:Radiating Grace",
        "name_jp": "S3:輝勢の恵",
        "name_glen": "S3:Luminous Grace",
        "effect_en": "Increase Natural PP Recovery by 17%.",
        "effect_jp": "PPの自然回復速度が17%上昇する。",
        "effect_glen": "Increases natural PP recovery by 17%."
    },
    "LC1K": {
        "name_en": "S3:Radiating Grace 2",
        "name_jp": "S3:輝勢の恵2",
        "name_glen": "S3:Luminous Grace 2",
        "effect_en": "Increase Natural PP Recovery by 20%.",
        "effect_jp": "PPの自然回復速度が20%上昇する。",
        "effect_glen": "Increases natural PP recovery by 20%."
    },
    "LC1X": {
        "name_en": "S3:Rainbow's Gleam",
        "name_jp": "S3:六色の輝勢",
        "name_glen": "S3:Luminous Rainbow",
        "effect_en": "Increase Natural PP Recovery by 40% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>natural PP recovery is increased by 40%."
    },
    "LC1W": {
        "name_en": "S3:Rainbow's Radiance",
        "name_jp": "S3:六色の輝剰",
        "name_glen": "S3:Lustrous Rainbow",
        "effect_en": "Increase Active PP Recovery by 45% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>active PP recovery is increased by 45%."
    },
    "LC1V": {
        "name_en": "S3:Rainbow's Reduction",
        "name_jp": "S3:六色の縮減",
        "name_glen": "S3:Rainbow Descent",
        "effect_en": "Reduce PP consumption by 20% while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>PP consumption is reduce by 20%."
    },
    "LC88": {
        "name_en": "S3:Rupturing Intent",
        "name_jp": "S3:裂砕の志",
        "name_glen": "S3:Partbreaker's Will",
        "effect_en": "Increase damage against breakable parts by 4%.",
        "effect_jp": "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        "effect_glen": "Increase damage against breakable parts by 4%."
    },
    "LC04": {
        "name_en": "S3:Skilled Intent",
        "name_jp": "S3:妙撃の志",
        "name_glen": "S3:Precision Will",
        "effect_en": "Increase Critical Hit Damage by 4%.",
        "effect_jp": "クリティカル時の与ダメージが4%上昇。",
        "effect_glen": "Increase Critical Hit Damage by 4%."
    },
    "LC1O": {
        "name_en": "S3:Skilled Intent 2",
        "name_jp": "S3:妙撃の志2",
        "name_glen": "S3:Precision Will 2",
        "effect_en": "Increase Critical Hit Damage by 5%.",
        "effect_jp": "クリティカル時の与ダメージが5%上昇。",
        "effect_glen": "Increase Critical Hit Damage by 5%."
    },
    "LC1Z": {
        "name_en": "S3:Splintering Intent",
        "name_jp": "S3:裂砕妙撃の志",
        "name_glen": "*S3:Prcsn Prtbrkr's Will",
        "effect_en": "Increase Power by 9% when attacking a breakable part with a Critical Hit.",
        "effect_jp": "破壊可能部位への攻撃でクリティカル発動時に威力が9%上昇。",
        "effect_glen": "Upon landing a<br>Critical Hit on a<br>breakable part,<br>your power is<br>boosted by 9%."
    },
    "LC13": {
        "name_en": "S3:Umbrageous Exhilaration",
        "name_jp": "S3:月葉影の活与",
        "name_glen": "S3:Moonleaf Vitality",
        "effect_en": "Recover 2% HP every second when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>recover 2% of max HP every second."
    },
    "LC11": {
        "name_en": "S3:Umbrageous Intent",
        "name_jp": "S3:月葉影の志",
        "name_glen": "S3:Will of the Moonleaf",
        "effect_en": "Increase damage by 3% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>attack power is increased by 3%."
    },
    "LC12": {
        "name_en": "S3:Umbrageous Reduction",
        "name_jp": "S3:月葉影の縮減",
        "name_glen": "S3:Moonleaf Descent",
        "effect_en": "Decrease PP consumption by 14% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>PP consumption is reduced by 14%."
    },
    "LC19": {
        "name_en": "S3:Umbrageous Skill",
        "name_jp": "S3:月葉影の巧",
        "name_glen": "S3:Moonleaf Adept",
        "effect_en": "Increase Critical Hit Rate by 20% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。",
        "effect_glen": "While Moongleam/Leafgleam or Shadowgleam are active<br>critical hit rate is increased by 20%."
    },
    "LC02": {
        "name_en": "S3:Vital Intent",
        "name_jp": "S3:活実の志",
        "name_glen": "S3:Axiom Will",
        "effect_en": "Boosts damage by 3% while HP is 80% or more.",
        "effect_jp": "HPが80%以上の時、与ダメージが3%上昇。",
        "effect_glen": "Increases attack power by 3% while HP is above 80%."
    },
    "LC96": {
        "name_en": "S3:Vital Intent 2",
        "name_jp": "S3:活実の志2",
        "name_glen": "S3:Axiom Will 2",
        "effect_en": "Boosts damage by 5% while HP is 80% or more.",
        "effect_jp": "HPが80%以上の時、与ダメージが5%上昇。",
        "effect_glen": "Increases attack power by 5% while HP is above 80%."
    },
    "LC15": {
        "name_en": "S3:Wise Skill",
        "name_jp": "S3:妙技の巧",
        "name_glen": "S3:Skillful Adept",
        "effect_en": "Increase Critical Hit Rate by 12%.",
        "effect_jp": "クリティカル率が12%上昇する。",
        "effect_glen": "Increase Critical Hit Rate by 12%."
    },
    "LC93": {
        "name_en": "S3:Wise Strike",
        "name_jp": "S3:撃流の巧",
        "name_glen": "S3:Strikeflow Adept",
        "effect_en": "Increase Critical Hit Rate by 2% for every 300,000 damage dealt. Maxes at 30%.",
        "effect_jp": "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）",
        "effect_glen": "Increases critical hit rate by 2% for every 300000 damage dealt.<br>Maxes at 30%."
    },
    "LD99": {
        "name_en": "S4: Placeholder",
        "name_jp": "S4:ジャンク",
        "name_glen": "S4:Placeholder",
        "effect_en": "Placeholder - S4",
        "effect_jp": "任意のS4能力を表します。",
        "effect_glen": "Represents any S4 ability."
    },
    "LD0P": {
        "name_en": "S4:Calming Intent",
        "name_jp": "S4:静心の志",
        "name_glen": "S4:Steadfast Will",
        "effect_en": "Increase the power of Normal Attacks by 13%.",
        "effect_jp": "通常攻撃の威力が13%上昇。",
        "effect_glen": "Increases Normal Attack power by 13%"
    },
    "LD0I": {
        "name_en": "S4:Circuit Rotation",
        "name_jp": "S4:回路輪転",
        "name_glen": "S4:Sustained Cycle",
        "effect_en": "Decrease the Recast Time of Photon Flare by 20%.",
        "effect_jp": "フォトンフレアのリキャスト時間を20%軽減する。",
        "effect_glen": "Reduces recast time of Photon Flare by 20%."
    },
    "LD0W": {
        "name_en": "S4:Colossal Radiance",
        "name_jp": "S4:強闘輝与",
        "name_glen": "S4:Goliathslayer Lucent",
        "effect_en": "Recovers 40 PP every 10 seconds when there is a boss nearby.",
        "effect_jp": "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。",
        "effect_glen": "Recovers 40 PP every 10 seconds when there is a boss nearby."
    },
    "LD0C": {
        "name_en": "S4:Cunning Strike",
        "name_jp": "S4:賢勇両撃",
        "name_glen": "S4:Hammer of the Wise",
        "effect_en": "While in Wise Stance, increase frontal attack damage by 15%.",
        "effect_jp": "ワイズスタンス中、正面からの与ダメージが15%上昇。",
        "effect_glen": "Critical hit rate of frontal attacks is increased by 15% while Wise Stance is active. "
    },
    "LD0V": {
        "name_en": "S4:Cursed Rainbow",
        "name_jp": "S4:六色の災転",
        "name_glen": "S4:Rainbow Adversity",
        "effect_en": "Recover 500 HP upon taking 500 HP or more in damage while<br>S1:Red Petal Flash, S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br> recover 500 HP when you take 500 or more damage."
    },
    "LD0G": {
        "name_en": "S4:Dynamic Chain",
        "name_jp": "S4:鎖動強身",
        "name_glen": "S4:Mighty Chain",
        "effect_en": "When Chain Trigger is activated, gain invincibility for 5 seconds.",
        "effect_jp": "チェイントリガー発動時、5秒間無敵になる。",
        "effect_glen": "Gain invincibility for 5 seconds when Chain Trigger is activated. "
    },
    "LD0X": {
        "name_en": "S4:Evasion Training",
        "name_jp": "S4:回避訓練",
        "name_glen": "S4:Dodge Training",
        "effect_en": "Perform an evasive maneuver when the two circles overlap to gain<br>\"Successful Dodge (Counter)\" status. If you do not evade, recover 5% HP.",
        "effect_jp": "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを5%回復する。",
        "effect_glen": "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status. If you do not evade, recover 5% HP."
    },
    "LD0K": {
        "name_en": "S4:Gear Reduction",
        "name_jp": "S4:刃機放縮",
        "name_glen": "S4:Prolonged Blade",
        "effect_en": "Decrease rate of Gear Gauge depletion while Katana Gear is active. (Around 20%)",
        "effect_jp": "カタナギア解放中、ギアゲージの減少速度が低下する。",
        "effect_glen": "Reduces the depletion of the Focus Gauge while Katana Focus is active."
    },
    "LD0N": {
        "name_en": "S4:Genesis Ring",
        "name_jp": "S4:変素応輪",
        "name_glen": "S4:Transmutation Circle",
        "effect_en": "The active Element of the Weapon changes to that of the currently equipped \"Guard\" Skill Ring.",
        "effect_jp": "装備しているガード系リングに応じて武器属性が変化する。",
        "effect_glen": "Changes the weapon element to match the currently equipped elemental defense ring.<br>Has no effect if an elemental ring is not equipped."
    },
    "LD0S": {
        "name_en": "S4:Harmonized Rainbow",
        "name_jp": "S4:六色の輝秤",
        "name_glen": "S4:Rainbow Balance",
        "effect_en": "Decrease Natural PP Recovery by 30% but decrease<br>PP consumption by 30% when S1:Red Petal Flash,<br>S1:Blue Ocean Flash, S1:White Snow Flash,<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>natural pp recovery and PP consumption are both reduced by 30%."
    },
    "LD0O": {
        "name_en": "S4:Heavenly Protection",
        "name_jp": "S4:天輝の守護",
        "name_glen": "S4:Luminous Protection",
        "effect_en": "Bestow Natural PP Recovery and increase PP recovery rate by 300% while Guarding.",
        "effect_jp": "ガード中PPが自然回復しPP回復速度が上昇。",
        "effect_glen": "Bestow Natural PP Recovery and increase PP recovery rate by 300% while Guarding."
    },
    "LD0F": {
        "name_en": "S4:Lustrous Trap",
        "name_jp": "S4:輝剰の罠",
        "name_glen": "S4:Lustrous Trap",
        "effect_en": "Increase PP regenerated by Tactics Trap by 20%.",
        "effect_jp": "タクティクストラップのPP回復量が20%上昇。",
        "effect_glen": "Inreases PP restored by Tactical Trap by 20%."
    },
    "LD07": {
        "name_en": "S4:Marvelous Aegis",
        "name_jp": "S4:瞬護輝与",
        "name_glen": "S4:Flashguard Lucent",
        "effect_en": "Recover 10 PP when successfully performing a Just Guard.",
        "effect_jp": "ジャストガード成功時、PPを回復する。",
        "effect_glen": "Recover 10 PP when performing a Perfect Guard."
    },
    "LD0A": {
        "name_en": "S4:Opposing Skill",
        "name_jp": "S4:正対の巧",
        "name_glen": "S4:Frontal Adept",
        "effect_en": "During Brave Stance, frontal Critical Rate is raised by 30%.",
        "effect_jp": "ブレイブスタンス中、正面へのクリティカル率が30%上昇。",
        "effect_glen": "Critical hit rate of frontal attacks is increased by 30% while Valiant Stance is active."
    },
    "LD0Y": {
        "name_en": "S4:Pursuing Radiance",
        "name_jp": "S4:追蝕輝剰",
        "name_glen": "S4:Lustrous Amplify",
        "effect_en": "Increases active PP recovery by 60% when attacking an enemy affected<br>by a Status Effect, Jellen, or Weak Bullet.",
        "effect_jp": "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。",
        "effect_glen": "Increases PP recovery amount by 60% when attacking enemies afflicted by a status ailment, Jellen, or Blight Rounds."
    },
    "LD0U": {
        "name_en": "S4:Pursuing Skill",
        "name_jp": "S4:追蝕の巧",
        "name_glen": "S4:Amplified Adept",
        "effect_en": "Increase Critical Hit Rate by 50% when attacking an enemy<br>affected by Weak Bullet, Jellen, or a Status Effect.",
        "effect_jp": "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。",
        "effect_glen": "Critical hit rate increased by 50% when attacking an enemy affected by any status effect including Jellen and Blight Ronunds."
    },
    "LD09": {
        "name_en": "S4:Radiant Response",
        "name_jp": "S4:輝器応変",
        "name_glen": "S4:Photon V Adaptation",
        "effect_en": "Improve Natural PP Recovery, Active PP Recovery, and reduce PP consumption<br>based on maximum PP. Maxes at 30%. ((Player's Total PP - 120)x0.1(%) of<br>Natural and Active PP Regen, and PP consumption reduction)",
        "effect_jp": "最大PPに応じて攻撃時PP回復量、PP自然回復量、PP消費軽減効果が最大で30%上昇。",
        "effect_glen": "Improves natural and active PP recovery and reduces PP consumption based on your maximum PP."
    },
    "LD0T": {
        "name_en": "S4:Raising Pursuit",
        "name_jp": "S4:累加追撃",
        "name_glen": "S4:Escalating Pursuit",
        "effect_en": "Upon hitting with a PA/Technique, track 30% of damage dealt within the next<br>four seconds, and add additional damage to the next<br>PA/Technique based on the damage dealt. (250,000 Max Damage) (10s Cooldown)",
        "effect_jp": "PA・テクニックの命中後4秒間の与ダメージ量に応じて、次に命中したPA・テクニックに追加ダメージが発生。(上限25万、リキャスト10秒)",
        "effect_glen": "Upon hitting with a PA/Technique, track 30% of damage dealt within the next four seconds, and add additional damage to the next PA/Technique based on the damage dealt."
    },
    "LD0L": {
        "name_en": "S4:Rapid-fire Arrow",
        "name_jp": "S4:迅弓の撃",
        "name_glen": "S4:Swift Arrows Strike",
        "effect_en": "When in Rapid Shoot, increase damage by 3% when equipped with a Bullet Bow.",
        "effect_jp": "ラピッドシュート中、バレットボウ装備時に与ダメージが3%上昇。",
        "effect_glen": "Increases the damage of all attacks done with a Bow by 3% when Rapid Fire is active."
    },
    "LD0H": {
        "name_en": "S4:Refined Providence",
        "name_jp": "S4:摂理洗練",
        "name_glen": "S4:Refined Providence",
        "effect_en": "Increase the potency of Element Conversion.<br>(+5% on Different weapon's attribute)",
        "effect_jp": "エレメントコンバージョンが強化される。",
        "effect_glen": "Increases the potency of Element Conversion by 5% for non-matching weapon elements."
    },
    "LD0R": {
        "name_en": "S4:Saint Shield",
        "name_jp": "S4:聖者の盾",
        "name_glen": "S4:Saintly Shield",
        "effect_en": "Generates a barrier (-60% Damage Taken,<br>Negate Knockback) at regular intervals (every 45s).",
        "effect_jp": "一定間隔で被ダメージを60%軽減するバリアを展開。",
        "effect_glen": "Deploys a barrier that reduces damage taken by 60% at regular intervals."
    },
    "LD0B": {
        "name_en": "S4:Scything Wind",
        "name_jp": "S4:鎌風重吹",
        "name_glen": "S4:Second Whirlwind",
        "effect_en": "Increase Kamaitachi duration by 4 seconds.",
        "effect_jp": "カマイタチの持続時間が4秒延長される。",
        "effect_glen": "Increases the duration of Double Saber's wind flourish by 4 seconds."
    },
    "LD0Z": {
        "name_en": "S4:Shared Ruin",
        "name_jp": "S4:滅域分与",
        "name_glen": "S4:Nullzone Bestowal",
        "effect_en": "You and your party recover HP and PP when an enemy dies within range.",
        "effect_jp": "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。",
        "effect_glen": "You and all party members recover HP and PP when a nearby enemy or boss dies."
    },
    "LD0Q": {
        "name_en": "S4:Skilled Balance",
        "name_jp": "S4:妙撃の秤",
        "name_glen": "S4:Precise Balance",
        "effect_en": "Reduce Critical Hit Rate by 50% and increase Critical Hit Damage by 6%.",
        "effect_jp": "クリティカル率を50%低下し、クリティカルの威力が6%上昇。",
        "effect_glen": "Reduces critical hit rate by 50% and increases critical hit damage by 6%."
    },
    "LD0E": {
        "name_en": "S4:Steadfast Courage",
        "name_jp": "S4:静の胆力",
        "name_glen": "S4:Mettle of the Rested",
        "effect_en": "Become immune to knockback by standing still for 1s.",
        "effect_jp": "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。",
        "effect_glen": "Gain knockback immunity after standing still for 1 second."
    },
    "LD08": {
        "name_en": "S4:Steel Resolve",
        "name_jp": "S4:鋼の決意",
        "name_glen": "S4:Steely Determination",
        "effect_en": "Survive one fatal hit with 1 HP remaining. Does not activate if HP is at 1. Activates once per Quest.",
        "effect_jp": "致命傷を受けても一度限りだが必ずHPが1残る。",
        "effect_glen": "Survives one fatal hit with 1 HP. Does not work if HP is already at 1.<br>Activates once per quest."
    },
    "LD0M": {
        "name_en": "S4:Support Extension",
        "name_jp": "S4:支援限長",
        "name_glen": "S4:Support Amplification",
        "effect_en": "The maximum duration of Shifta and Deband becomes 120 seconds.",
        "effect_jp": "シフタ・デバンドの効果時間上限を120秒に延長する。",
        "effect_glen": "Shifta and Deband's maximum duration becomes 120 seconds."
    },
    "LD0D": {
        "name_en": "S4:Vampiric Strike",
        "name_jp": "S4:奪命の撃",
        "name_glen": "S4:Lifesteal Strike ",
        "effect_en": "Restore HP equal to 1% of Damage dealt (30 HP MAX).",
        "effect_jp": "攻撃時に与ダメージの1%をHPとして吸収。(上限30)",
        "effect_glen": "Restores HP equal to 1% of damage dealt (30 HP Max)."
    },
    "LD0J": {
        "name_en": "S4:Wand Clobber",
        "name_jp": "S4:短杖強打",
        "name_glen": "S4:Wand Impact",
        "effect_en": "Increase the performance of Wand Normal Attacks. (Attack Speed 1.1x, all hitstop negated)",
        "effect_jp": "ウォンドの通常攻撃性能が強化される。",
        "effect_glen": "Increases Wand normal attack speed by 1.1x and negates hitstop."
    },
    "LE99": {
        "name_en": "S5: Placeholder",
        "name_jp": "S5:ジャンク",
        "name_glen": "S5:Placeholder",
        "effect_en": "Placeholder - S5",
        "effect_jp": "任意のS5能力を表します。",
        "effect_glen": "Represents any S5 ability."
    },
    "LE96": {
        "name_en": "S5:Aegis Balance",
        "name_jp": "S5:堅守の秤",
        "name_glen": "S5:Defensive Balance",
        "effect_en": "Increase Power by 4%. Reduce damage taken by 25% but consume 20 PP when taking damage. Force only.",
        "effect_jp": "威力が4%上昇。被ダメージ時PPを20消費してダメージを25%軽減する。フォース限定。",
        "effect_glen": "Increases potency by 4%. Reduces damage taken by 25% but you lose 20 PP every time you take damage.<br>Force only."
    },
    "LE97": {
        "name_en": "S5:Angelic Respite",
        "name_jp": "S5:槍機天悠",
        "name_glen": "S5:Lance of Eternity",
        "effect_en": "When the Gear Gauge is maxed, Partizan Gear will not be consumed while airborne. Increase Power by 2%. Partizan only.",
        "effect_jp": "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。",
        "effect_glen": "Increases Power by 2%.<br>When Focus Gauge is maxed, Partisan Focus Gauge will not be consumed while airborne.Partisan only."
    },
    "LE0I": {
        "name_en": "S5:Anthesis Cultivation",
        "name_jp": "S5:錬成萌花",
        "name_glen": "S5:Augment Bloom",
        "effect_en": "Doubles the effects of Special Abilities (Atk, Def, Dex, HP, PP bonuses only)",
        "effect_jp": "特殊能力のステータス変化を2倍にする。",
        "effect_glen": "Doubles the effects of <br>attack <br>defense <br>dexterity <br>HP and PP augments on this weapon."
    },
    "LE0Q": {
        "name_en": "S5:Area Support",
        "name_jp": "S5:領域加勢",
        "name_glen": "S5:Provincial Provision",
        "effect_en": "Gain additional bonus effects to Critical Field and EPPR Field when either are active.<br>",
        "effect_jp": "クリティカルフィールドとエレメンタルPPリストレイトFの効果が有効時、フィールドごとに追加効果が発生する。",
        "effect_glen": "Grants bonus effects to Critical Field and Elemental PP Restorate (EPPR) Field when either are active"
    },
    "LE0C": {
        "name_en": "S5:Auxiliary Arrow",
        "name_jp": "S5:追射剛矢",
        "name_glen": "S5:Homing Bolt",
        "effect_en": "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds<br>after successfully dodging an attack with Step. Bullet Bow only.",
        "effect_jp": "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。",
        "effect_glen": "All Bow PAs except for Banishing Arrow will produce a Chaser Arrow upon hitting an enemy.<br>Successfully evading an attack will boost Chaser Arrow's power by 100% for 15 seconds.<br>Bow only."
    },
    "LE0B": {
        "name_en": "S5:Bright Escape",
        "name_jp": "S5:巧避輝与",
        "name_glen": "S5:Elusive Lucent",
        "effect_en": "Successfully evade an attack with Hero Step or Stylish Roll to restore PP (Restore 30PP on successful evasion, then restore 10PP every 3 seconds). Effect is negated if damage is taken. Twin Machineguns only.",
        "effect_jp": "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。",
        "effect_glen": "Successfully evading an attack with Hero Step or Stylish Roll restores an initial 30 PP and an additional 10 PP every 3 seconds afterwards.<br>The effect is lost upon taking damage.<br>Twin Machineguns only."
    },
    "LE0D": {
        "name_en": "S5:Calming Bullet",
        "name_jp": "S5:静心杖弾",
        "name_glen": "S5:Steadfast Shaft",
        "effect_en": "Enhance the performance of Normal Attacks (1.35x Attack Speed) and increase the damage of Rod Shoot by 100%. Rod only.",
        "effect_jp": "通常攻撃性能が強化されロッドシュートの威力が100%上昇する。長杖限定。",
        "effect_glen": "Increases the attack speed of Rod normal attacks by 1.38x<br>negates hitstop and increases the damage of Photon Bullet by 100%.<br>Rod only."
    },
    "LE0P": {
        "name_en": "S5:Calming Expanse",
        "name_jp": "S5:静心拡域",
        "name_glen": "S5:Steadfast Expanse",
        "effect_en": "Add an extra attack to Normal Attacks that has a chance to inflict Stun. Increase Power by 2%. Assault Rifles only.<br>",
        "effect_jp": "通常攻撃に範囲攻撃が追加され確率でスタン付与。威力2%上昇。長銃限定。",
        "effect_glen": "Increases power by 2%.<br>Adds an extra attack to normal attacks that has a chance to stun enemies.<br>Assault Rifles only."
    },
    "LE0O": {
        "name_en": "S5:Calming Quartet",
        "name_jp": "S5:静心四連",
        "name_glen": "S5:Steadfast Quadrate",
        "effect_en": "Decrease the Power of Normal Attacks by 67%, but change Normal Attack into four homing shells. Launcher only.",
        "effect_jp": "通常攻撃の威力が67%低下する代わりに攻撃が4発に変化。大砲限定。",
        "effect_glen": "Changes normal attack into 4 homing shells but decreases the potency of normal attacks by 67%.<br>Launchers only."
    },
    "LE0F": {
        "name_en": "S5:Calming Shockwave",
        "name_jp": "S5:静心衝杖",
        "name_glen": "S5:Steadfast Harpoon",
        "effect_en": "Generates a wave attack on the third Normal Attack. Negates hitstop. Increase Power by 2%. Wand only.",
        "effect_jp": "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。",
        "effect_glen": "Increases power by 2% and negates hitstop.<br>Every 3rd hit of a normal attack combo will generate a shockwave.<br>Wand only."
    },
    "LE0N": {
        "name_en": "S5:Chained Radiance",
        "name_jp": "S5:連鎖輝与",
        "name_glen": "S5:Chain Lucent",
        "effect_en": "On Chain Trigger activation, recover PP and increase Power by 3% for 60 seconds. Twin Machineguns only.",
        "effect_jp": "チェイントリガー開始時PPが回復し、60秒間威力3%上昇。双機銃限定。",
        "effect_glen": "On Chain Trigger activation, recover PP and increase Potency by 3% for 60 seconds.<br>Twin Machineguns only."
    },
    "LE06": {
        "name_en": "S5:Evasive Meteor",
        "name_jp": "S5:巧避巨拳",
        "name_glen": "S5:Elusive Smash",
        "effect_en": "Successfully evade an attack with Sway to summon a giant fist. Increase Power by 2%. Knuckles only.",
        "effect_jp": "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。",
        "effect_glen": "Increases attack power by 2%.<br>Upon successfully evading an attack with Sway, unleash a counterattack with a large Meteor Fist.<br>Knuckles only."
    },
    "LE05": {
        "name_en": "S5:Evasive Mirage",
        "name_jp": "S5:巧避連撃",
        "name_glen": "S5:Elusive Combo",
        "effect_en": "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying. Increase Power by 2%. Double Saber only.",
        "effect_jp": "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。",
        "effect_glen": "Increases attack power by 2%.<br>Upon successfully executing a Double Saber Wind Parry<br>Gear Gauge is set to maximum and unleash a counterattack with Scissor Slash.<br>Double Saber only."
    },
    "LE09": {
        "name_en": "S5:Fiery End",
        "name_jp": "S5:烈終焉弾",
        "name_glen": "S5:Fatal Round",
        "effect_en": "Enhance the performance of End Attract (increase damage by 5%, PP cost reduced to 1) with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Assault Rifle only.",
        "effect_jp": "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。",
        "effect_glen": "Increases attack power by 2%.<br>Increases Positron Blast's damage by 150% and reduces its cost to 1 PP.<br>Has a 60 second cooldown.Cooldown resets upon successfully evading an attack with Dive Roll.<br>Assault Rifle only."
    },
    "LE0A": {
        "name_en": "S5:Fiery Zero",
        "name_jp": "S5:烈零射砲",
        "name_glen": "S5:Obliterating Blast",
        "effect_en": "Enhance the performance of Zero Distance (increase damage by 150%, PP cost reduced to 1) with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Launcher only.",
        "effect_jp": "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。",
        "effect_glen": "Increases attack power by 2%.<br>Increases Contact Blast's damage by 5% and reduces its cost to 1 PP.<br>Has a 60 second cooldown.Cooldown resets upon successfully evading an attack with Dive Roll.<br>Launcher only."
    },
    "LE07": {
        "name_en": "S5:Hangeki Edge",
        "name_jp": "S5:反撃鋭刃",
        "name_glen": "S5:Counter Blade",
        "effect_en": "Increase the damage of Counter Edge by 15% and Dodge Counter Bullet by 10%. Generate Braver Gear Gauge when successfully performing<br>Katana Counter. Increase Power by 2%. Katana only.",
        "effect_jp": "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが上昇。威力2%上昇。抜剣限定。",
        "effect_glen": "Increases attack power by 2%.Increases the damage dealt with Braver's Counter Edge by 15% and Phantom's Dodge Counter Bullet by 10%.<br>Generates Braver Gear Gauge when you successfully counter an attack.<br>Katana only."
    },
    "LE98": {
        "name_en": "S5:Instant Invocation",
        "name_jp": "S5:瞬術略唱",
        "name_glen": "S5:Sleight Incantation",
        "effect_en": "Technique damage is decreased by 40%, but using the same element Technique with a JA substantially decreases charge time (-100%).",
        "effect_jp": "テクニックの与ダメージが常時40%減少するがテクニック使用後に同属性テクニックJAでチャージ時間大幅短縮。",
        "effect_glen": "Reduces technique damage by 40%.<br>Same element techniques that are chained together with a Perfect Attack will have instant charge times."
    },
    "LE0H": {
        "name_en": "S5:Mysterious Purpose",
        "name_jp": "S5:妙の巧志",
        "name_glen": "S5:Skillful Adept Will",
        "effect_en": "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
        "effect_jp": "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)",
        "effect_glen": "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX)."
    },
    "LE9Z": {
        "name_en": "S5:Parting Gift",
        "name_jp": "S5:終撃応与",
        "name_glen": "S5:Finishing Blow",
        "effect_en": "Regenerate HP/PP when sheathing your weapon based on the amount of damage dealt when unsheathed (Max 700,000 damage, 60% HP, 100 PP). Increase Power by 2%.",
        "effect_jp": "抜刀時のダメージ量に応じて、納刀時にHPとPPを回復。威力2%上昇。",
        "effect_glen": "Placeholder - S5"
    },
    "LE01": {
        "name_en": "S5:Release Parry",
        "name_jp": "S5:瞬護解放",
        "name_glen": "S5:Flashguard Unleashed",
        "effect_en": "Performance changes when Just Guarding with a Weapon Action. Sword only.",
        "effect_jp": "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。",
        "effect_glen": "The benefits of this SGA chages after a successful perfect guard and revert to base benefits once gear gauge is depelted.<br>Sword only."
    },
    "LE0G": {
        "name_en": "S5:Rhythmic Pursuer",
        "name_jp": "S5:追災律動",
        "name_glen": "S5:Cataclysmic Rhythm",
        "effect_en": "Boost the potency of Elemental Burst by 30% and automatically<br>activate Elemental Burst when using a PA derivative. Jet Boots only.",
        "effect_jp": "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。",
        "effect_glen": "Increases Elemental Burst potency by 30%.<br>Automatically activates Elemental Burst upon using Jet Boots Variant Attacks.<br>Jet Boots only."
    },
    "LE03": {
        "name_en": "S5:Rushing Bolt",
        "name_jp": "S5:瞬駆突貫",
        "name_glen": "S5:Furious Charge",
        "effect_en": "Inflict damage (300% Power) while running. Unleash a shockwave attack (1000% Power) when you stop running. Increase Power by 2%. Partizan only.",
        "effect_jp": "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。",
        "effect_glen": "Increases power by 2%.<br>Inflict 300% attack power as damage while running.<br>Unleash a 1000% attack power shockwave when you stop running.<br>Partisan only."
    },
    "LE04": {
        "name_en": "S5:Shining Cyclone",
        "name_jp": "S5:輝境の旋",
        "name_glen": "S5:Brilliant Vortex",
        "effect_en": "PP recovery and consumption changes when your PP falls below 50% of maximum. Twin Daggers only.",
        "effect_jp": "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。",
        "effect_glen": "Reduces natural PP recovery to 0 while PP is above 50%.<br>Reduces PP consumption by 30% and increases natural PP recovery by 100% while PP is below 50%.<br>Twin Daggers only."
    },
    "LE0E": {
        "name_en": "S5:Speedy Support",
        "name_jp": "S5:急速補助",
        "name_glen": "S5:Rapid Support",
        "effect_en": "Shorten the charge time of Support Techniques. The power of Zondeel is reduced (-34%). Talis only.",
        "effect_jp": "補助テクニックのチャージ時間を短縮。ゾンディールの威力減少。導具限定。",
        "effect_glen": "All support techniques have instant charge time.<br>The power of Zondeel is reduced by 34%.<br>Talis only."
    },
    "LE0R": {
        "name_en": "S5:Swift Radiance",
        "name_jp": "S5:回避輝与",
        "name_glen": "S5:Dodge Lucent",
        "effect_en": "Stop Natural PP Regeneration. Increase Active PP Recovery by 50% and restore 100 PP upon successfully evading an attack with Sway or Step. Increase Power by 2%. Knuckles only.",
        "effect_jp": "PP自然回復が停止。攻撃時PP回復量が50%上昇、回避成功時PPが100回復。威力2%上昇。鋼拳限定。",
        "effect_glen": "Stop Natural PP Regeneration. Increase Active PP Recovery by 50% and restore 100 PP upon successfully evading an attack with a dodge<br>Increase Potency by 2%.<br>Knuckles only."
    },
    "LE0K": {
        "name_en": "S5:Tethered Eclipse",
        "name_jp": "S5:追蝕の縛",
        "name_glen": "S5:Amplified Restraint",
        "effect_en": "Boosts damage by 3% against enemies inflicted with a status effect. Grant a 40% chance to inflict Bind against enemies inflicted with a status effect.",
        "effect_jp": "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。",
        "effect_glen": "Deal 3% more damage against enemies inflicted with a status effect.<br>40% chance to inflict bind on enemies inflicted with a status effect."
    },
    "LE08": {
        "name_en": "S5:Thundering Pursuit",
        "name_jp": "S5:雷光追撃",
        "name_glen": "S5:Lightning Pursuit",
        "effect_en": "When using a PA, lightning-charged Photon Blades are generated. (Power: 200%). Dual Blades only.",
        "effect_jp": "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。",
        "effect_glen": "Using PAs will cause blades of lightning equal to 200% attack power to assault the enemy.<br>Soaring Blades only."
    },
    "LE02": {
        "name_en": "S5:Unrivaled Parry",
        "name_jp": "S5:瞬護無双",
        "name_glen": "S5:Flashguard Peerless",
        "effect_en": "Consume no Gear for 15s after performing a Just Guard. Increase Power by 2%. Wired Lance only.",
        "effect_jp": "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。",
        "effect_glen": "Increases attack power by 2%.<br>Upon successfully executing a Perfect Guard<br>Gear is no longer consumed for 15 seconds.<br>Wired Lance only."
    },
    "LE0J": {
        "name_en": "S5:Vigorous Response",
        "name_jp": "S5:活器応変",
        "name_glen": "S5:Life V Adapation",
        "effect_en": "Grants a bonus when your Max HP is at 1,000. Gain additional bonuses every 500 Max HP past 1000, up to 3000 HP.<br>",
        "effect_jp": "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000",
        "effect_glen": "Grants bonuses when your max HP is at 1000 and every 500 max HP afterwards up to 3000 HP"
    },
    "LF99": {
        "name_en": "S6: Placeholder",
        "name_jp": "S6:ジャンク",
        "name_glen": "S6:Placeholder",
        "effect_en": "Placeholder - S6",
        "effect_jp": "任意のS6能力を表します。",
        "effect_glen": "Represents any S6 ability."
    },
    "LF0N": {
        "name_en": "S6:Angelic Wings",
        "name_jp": "S6:翔天の翼",
        "name_glen": "S6:Soaring Wings",
        "effect_en": "Increases Jump Power.",
        "effect_jp": "ジャンプ力が上昇する。",
        "effect_glen": "Increases jump height"
    },
    "LF0Q": {
        "name_en": "S6:Battle Readiness",
        "name_jp": "S6:修羅の備",
        "name_glen": "S6:Shield of Carnage",
        "effect_en": "When your HP is at 50% or lower, damage taken is reduced by 40%. Resets after a brief cooldown.",
        "effect_jp": "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。",
        "effect_glen": "Reduces damage taken by 40% for 3 seconds when your HP is 50% or lower.<br>30 second cooldown."
    },
    "LF0L": {
        "name_en": "S6:Brilliant Ruin",
        "name_jp": "S6:滅域輝与",
        "name_glen": "S6:Lucent Domain",
        "effect_en": "Recover 5 PP when an enemy near you is defeated.",
        "effect_jp": "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        "effect_glen": "Recover 5 PP when an enemy near you is defeated."
    },
    "LF0P": {
        "name_en": "S6:Evasion Whistle",
        "name_jp": "S6:回避の口笛",
        "name_glen": "S6:Dodging Whistle",
        "effect_en": "Dodging will cause your Pet to return back to you.",
        "effect_jp": "回避行動に合わせてペットが戻ってくる。",
        "effect_glen": "Evading will cause your pet to return back to you."
    },
    "LF0F": {
        "name_en": "S6:Guardian Armor",
        "name_jp": "S6:守護の備",
        "name_glen": "S6:Guardian Shield",
        "effect_en": "Reduces damage taken by 7%.",
        "effect_jp": "被ダメージを7%軽減。",
        "effect_glen": "Reduces damage taken by 7%."
    },
    "LF0C": {
        "name_en": "S6:Guardian's Essence",
        "name_jp": "S6:機魂の守護",
        "name_glen": "S6:Soul Protection",
        "effect_en": "Hunter Weapon Gear and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\".",
        "effect_jp": "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。",
        "effect_glen": "Hunter Weapon Gear and Katana Gear fills while Guarding.<br>Does not work if using a weapon with the \"Galeblade\" potential."
    },
    "LF0A": {
        "name_en": "S6:Heroic Howl",
        "name_jp": "S6:英雄咆哮",
        "name_glen": "S6:Heroic Howl",
        "effect_en": "Enhances the effect of Hero Boost's damage bonus accumulation rate. Does not work with the \"Heroic Victory\" potential.",
        "effect_jp": "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。",
        "effect_glen": "Increases the bonus damage accumulation rate of Hero's \"Heroic Boost\" by roughly 40%.<br>Does not work if using a weapon with the 'Heroic Anthem' potential."
    },
    "LF0J": {
        "name_en": "S6:HP Up",
        "name_jp": "S6:活器上昇",
        "name_glen": "S6:Fortified Life Vessel",
        "effect_en": "HP(+40)",
        "effect_jp": "HP(+40)",
        "effect_glen": "HP(+40)"
    },
    "LF0D": {
        "name_en": "S6:Ironclad Illness",
        "name_jp": "S6:癒蝕頑強",
        "name_glen": "S6:Tenacious Healscourge",
        "effect_en": "Become massive for 60 seconds after becoming affected by a status effect.",
        "effect_jp": "状態異常になってから60秒間、頑強になる。",
        "effect_glen": "Grants Super Armor for 60 seconds after being inflicted with a status ailment."
    },
    "LF0O": {
        "name_en": "S6:Long Night Star",
        "name_jp": "S6:長夜の明星",
        "name_glen": "S6:Evernight Star",
        "effect_en": "Reduce Etoile Boost's decay per second by 50%.",
        "effect_jp": "エトワールブーストの秒間軽減減少率を50％緩和する。",
        "effect_glen": "Reduce Etoile Boost's decay per second by 50%."
    },
    "LF0S": {
        "name_en": "S6:Overlimit",
        "name_jp": "S6:超限活器",
        "name_glen": "S6:Overflowing Life V",
        "effect_en": "Increases maximum HP by 50% while Limit Break is active.",
        "effect_jp": "リミットブレイク発動中最大HPが50%上昇する。",
        "effect_glen": "Increases maximum HP by 50% while Overload is active."
    },
    "LF0K": {
        "name_en": "S6:PP Up",
        "name_jp": "S6:輝器上昇",
        "name_glen": "S6:Fortified Photon V",
        "effect_en": "PP(+4)",
        "effect_jp": "PP(+4)",
        "effect_glen": "PP(+4)"
    },
    "LF0H": {
        "name_en": "S6:R-ATK Up",
        "name_jp": "S6:射撃上昇",
        "name_glen": "S6:Fortified Ranged",
        "effect_en": "R-ATK(+30)",
        "effect_jp": "射撃力(+30)",
        "effect_glen": "RNG Pwr(+30)"
    },
    "LF97": {
        "name_en": "S6:Rainbow's Shield",
        "name_jp": "S6:六色の盾",
        "name_glen": "S6:Rainbow Shield",
        "effect_en": "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Grants a chance (~20%) to drastically reduce<br>damage taken. (Reduced to 1 damage).",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中、一定確率で被ダメージを大幅に軽減する。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam is active: Grants a chance (~20%) to drastically reduce damage taken. (Reduced to 1 damage)."
    },
    "LF98": {
        "name_en": "S6:Raising Expanse",
        "name_jp": "S6:累加拡域",
        "name_glen": "S6:Escalating Expanse",
        "effect_en": "Alters the range of Raising Pursuit's bonus attack damage. (15m AoE, not nullified on part break, not treated as an attack from behind)",
        "effect_jp": "累加追撃による追加ダメージが範囲攻撃に変化する。",
        "effect_glen": "Alters the range of Escalating Pursuit's bonus attack damage. 15m AoE | not nullified on Part Break | not treated as an attack from behind"
    },
    "LF0M": {
        "name_en": "S6:Readying Guard",
        "name_jp": "S6:守護乱備",
        "name_glen": "S6:Shield of the Sentinel",
        "effect_en": "Gain a 10% chance to reduce damage taken by 70%.",
        "effect_jp": "10％の確率で被ダメージを70％軽減。",
        "effect_glen": "Gain a 10% chance to reduce damage taken by 70%."
    },
    "LF0G": {
        "name_en": "S6:S-ATK Up",
        "name_jp": "S6:打撃上昇",
        "name_glen": "S6:Fortified Melee",
        "effect_en": "S-ATK(+30)",
        "effect_jp": "打撃力(+30)",
        "effect_glen": "MEL Pwr(+30)"
    },
    "LF0B": {
        "name_en": "S6:Soaring Ballet",
        "name_jp": "S6:翔機天舞",
        "name_glen": "S6:Soaring Heavendance",
        "effect_en": "Bouncer Weapon Gear fills while airborne. No effect if using weapon with \"Angelic Guidance\".",
        "effect_jp": "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。",
        "effect_glen": "Bouncer Weapon Gear fills while airborne.<br>Does not work if using a weapon with the \"Sacred Bird Guidance\" potential."
    },
    "LF0I": {
        "name_en": "S6:T-ATK Up",
        "name_jp": "S6:法撃上昇",
        "name_glen": "S6:Fortified Technique",
        "effect_en": "T-ATK(+30)",
        "effect_jp": "法撃力(+30)",
        "effect_glen": "TEC Pwr(+30)"
    },
    "LF0E": {
        "name_en": "S6:Wise Skill",
        "name_jp": "S6:妙技の巧",
        "name_glen": "S6:Skillful Adept",
        "effect_en": "Increase Critical Hit Rate by 15%.",
        "effect_jp": "クリティカル率が15％上昇する。",
        "effect_glen": "Increases your critical hit rate by 15%."
    },
    "LF0T": {
        "name_en": "S6:Wondrous Encore",
        "name_jp": "S6:奇跡再演",
        "name_glen": "S6:Miraculous Encore",
        "effect_en": "Reduce Hate Generation while Showtime is active. If the user is attacked while Showtime is active, reduce damage taken and retain One More Time once per Showtime.",
        "effect_jp": "ショウタイム発動時のヘイト上昇率が軽減し、一度だけ被ダメージを軽減してワンモアタイムの発動条件を維持する。",
        "effect_glen": "Reduces aggro generation while Showtime is active.<br>If the user is attacked while Showtime is active, reduce the damage taken and retain One More Time once per Showtime."
    },
    "LG99": {
        "name_en": "S7: Placeholder",
        "name_jp": "S7:ジャンク",
        "name_glen": "S7:Placeholder",
        "effect_en": "Placeholder - S7",
        "effect_jp": "任意のS7能力を表します。",
        "effect_glen": "Represents any S7 ability."
    },
    "LG9Z": {
        "name_en": "S7:Amended Movement",
        "name_jp": "S7:注技縮地",
        "name_glen": "S7:Concentrated Suidi",
        "effect_en": "Boosts movement speed while charging PAs.",
        "effect_jp": "PAチャージ中の移動速度を上昇。",
        "effect_glen": "Placeholder - S7"
    },
    "LG0J": {
        "name_en": "S7:Attack Up",
        "name_jp": "S7:攻撃上昇",
        "name_glen": "S7:Fortified Attack",
        "effect_en": "ATK(+25)",
        "effect_jp": "打撃力(+25)<br>射撃力(+25)<br>法撃力(+25)",
        "effect_glen": "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25)"
    },
    "LG0K": {
        "name_en": "S7:Attack Up 2",
        "name_jp": "S7:攻撃上昇2",
        "name_glen": "S7:Fortified Attack 2",
        "effect_en": "ATK(+45)",
        "effect_jp": "打撃力(+45)<br>射撃力(+45)<br>法撃力(+45)",
        "effect_glen": "MEL Pwr(+45),RNG Pwr(+45),TEC Pwr(+45)"
    },
    "LG0P": {
        "name_en": "S7:Descried Warrior",
        "name_jp": "S7:視敵無双",
        "name_glen": "S7:Targeted Aggression",
        "effect_en": "Increase Power by 1%. Reduce damage taken from enemies targeting you by 15%.",
        "effect_jp": "自身を狙う敵に対して威力1%上昇し被ダメージ15%軽減。",
        "effect_glen": "Increase Power by 1% and reduces damage taken by 15% from enemies targeting you."
    },
    "LG0A": {
        "name_en": "S7:Glowing Grace",
        "name_jp": "S7:輝静の恵",
        "name_glen": "S7:Still Grace",
        "effect_en": "Recovers 4 PP per second when standing still for longer than 1 second.",
        "effect_jp": "1秒間静止状態が続いた時、ppが1秒ごとに4回復。",
        "effect_glen": "Recover 4 PP per second while standing still for more than 1 second."
    },
    "LG0E": {
        "name_en": "S7:HP Up",
        "name_jp": "S7:活器上昇",
        "name_glen": "S7:Fortified Life Vessel",
        "effect_en": "HP(+40)",
        "effect_jp": "HP(+40)",
        "effect_glen": "HP(+40)"
    },
    "LG0M": {
        "name_en": "S7:Increased Efficiency",
        "name_jp": "S7:薬効増大",
        "name_glen": "S7:Medicinal Potentiation",
        "effect_en": "Boost the effect of recovery items by 30%.",
        "effect_jp": "回復アイテムの効果を30%上昇させる。",
        "effect_glen": "Boosts the effect of recovery items by 30%."
    },
    "LG0N": {
        "name_en": "S7:Mind Merge",
        "name_jp": "S7:以心伝心",
        "name_glen": "S7:Empathic Communion",
        "effect_en": "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\".",
        "effect_jp": "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。",
        "effect_glen": "Automatically answers any pet sympathy requests while Alter Ego is active.<br>Does not work if using a weapon with the \"Sinister Stare\" potential."
    },
    "LG0F": {
        "name_en": "S7:PP Up",
        "name_jp": "S7:輝器上昇",
        "name_glen": "S7:Fortified Photon V",
        "effect_en": "PP(+4)",
        "effect_jp": "PP(+4)",
        "effect_glen": "PP(+4)"
    },
    "LG0C": {
        "name_en": "S7:R-ATK Up",
        "name_jp": "S7:射撃上昇",
        "name_glen": "S7:Fortified Ranged",
        "effect_en": "R-ATK(+30)",
        "effect_jp": "射撃力(+30)",
        "effect_glen": "RNG Pwr(+30)"
    },
    "LG0H": {
        "name_en": "S7:R-ATK Up 2",
        "name_jp": "S7:射撃上昇2",
        "name_glen": "S7:Fortified Ranged 2",
        "effect_en": "R-ATK(+50)",
        "effect_jp": "射撃力(+50)",
        "effect_glen": "RNG Pwr(+50)"
    },
    "LG98": {
        "name_en": "S7:Rainbow's Skill",
        "name_jp": "S7:六色の巧",
        "name_glen": "S7:Rainbow Adept",
        "effect_en": "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Increases critical hit rate. (30%)",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中、クリティカル率が30%上昇する。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam is active: Increases critical hit rate. (30%)"
    },
    "LG0B": {
        "name_en": "S7:S-ATK Up",
        "name_jp": "S7:打撃上昇",
        "name_glen": "S7:Fortified Melee",
        "effect_en": "S-ATK(+30)",
        "effect_jp": "打撃力(+30)",
        "effect_glen": "MEL Pwr(+30)"
    },
    "LG0G": {
        "name_en": "S7:S-ATK Up 2",
        "name_jp": "S7:打撃上昇2",
        "name_glen": "S7:Fortified Melee 2",
        "effect_en": "S-ATK(+50)",
        "effect_jp": "打撃力(+50)",
        "effect_glen": "MEL Pwr(+50)"
    },
    "LG0O": {
        "name_en": "S7:Sentinel's Gift",
        "name_jp": "S7:法護の与",
        "name_glen": "S7:Dharma Boon",
        "effect_en": "Upon a successful Tech Charge Parry, recover 5% HP and 10 PP.",
        "effect_jp": "テックCパリング成功時HPを5%回復しPPを10回復。",
        "effect_glen": "Recovers 5% of HP and 10 PP upon successful Technique Charge Parry."
    },
    "LG0D": {
        "name_en": "S7:T-ATK Up",
        "name_jp": "S7:法撃上昇",
        "name_glen": "S7:Fortified Technique",
        "effect_en": "T-ATK(+30)",
        "effect_jp": "法撃力(+30)",
        "effect_glen": "TEC Pwr(+30)"
    },
    "LG0I": {
        "name_en": "S7:T-ATK Up 2",
        "name_jp": "S7:法撃上昇2",
        "name_glen": "S7:Fortified Technique 2",
        "effect_en": "T-ATK(+50)",
        "effect_jp": "法撃力(+50)",
        "effect_glen": "TEC Pwr(+50)"
    },
    "LG0L": {
        "name_en": "S7:Zenith Impact",
        "name_jp": "S7:瞬撃の極",
        "name_glen": "S7:Supreme Perfection",
        "effect_en": "Gain a 10% chance to stun the enemy<br>with a Just Attack.",
        "effect_jp": "ジャストアタック時に10%の確率で対象をスタンさせる。",
        "effect_glen": "Gain a 10% chance to stun enemies with Perfect Attacks."
    },
    "LH99": {
        "name_en": "S8: Placeholder",
        "name_jp": "S8:ジャンク",
        "name_glen": "S8:Placeholder",
        "effect_en": "Placeholder - S8",
        "effect_jp": "任意のS8能力を表します。",
        "effect_glen": "Represents any S8 ability."
    },
    "LH0J": {
        "name_en": "S8:High-Minded",
        "name_jp": "S8:一念滞空",
        "name_glen": "S8:Resolute Flight",
        "effect_en": "Reduce falling speed while charging a<br>Technique in mid-air.",
        "effect_jp": "空中でテクニックをチャージ中に落下速度が遅くなる。",
        "effect_glen": "Reduces falling speed when charging a Technique in mid-air."
    },
    "LH0F": {
        "name_en": "S8:HP Up",
        "name_jp": "S8:活器上昇",
        "name_glen": "S8:Fortified Life Vessel",
        "effect_en": "HP(+40)",
        "effect_jp": "HP(+40)",
        "effect_glen": "HP(+40)"
    },
    "LH0H": {
        "name_en": "S8:HP Up 2",
        "name_jp": "S8:活器上昇2",
        "name_glen": "S8:Fortified Life Vessel 2",
        "effect_en": "HP(+60)",
        "effect_jp": "HP(+60)",
        "effect_glen": "HP(+60)"
    },
    "LH0G": {
        "name_en": "S8:PP Up",
        "name_jp": "S8:輝器上昇",
        "name_glen": "S8:Fortified Photon V",
        "effect_en": "PP(+4)",
        "effect_jp": "PP(+4)",
        "effect_glen": "PP(+4)"
    },
    "LH0I": {
        "name_en": "S8:PP Up 2",
        "name_jp": "S8:輝器上昇2",
        "name_glen": "S8:Fortified Photon V 2",
        "effect_en": "PP(+6)",
        "effect_jp": "PP(+6)",
        "effect_glen": "PP(+6)"
    },
    "LH0D": {
        "name_en": "S8:R-ATK Up",
        "name_jp": "S8:射撃上昇",
        "name_glen": "S8:Fortified Ranged",
        "effect_en": "R-ATK(+30)",
        "effect_jp": "射撃力(+30)",
        "effect_glen": "RNG Pwr(+30)"
    },
    "LH98": {
        "name_en": "S8:Rainbow's Decay",
        "name_jp": "S8:六色の蝕",
        "name_glen": "S8:Rainbow Erode",
        "effect_en": "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Makes attacks inflict random status effects.",
        "effect_jp": "花・海・葉・月・雪・影のいずれかが発動中、攻撃時にランダムな状態異常にする。",
        "effect_glen": "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam is active: Makes attacks inflict random Status Ailments."
    },
    "LH0C": {
        "name_en": "S8:S-ATK Up",
        "name_jp": "S8:打撃上昇",
        "name_glen": "S8:Fortified Melee",
        "effect_en": "S-ATK(+30)",
        "effect_jp": "打撃力(+30)",
        "effect_glen": "MEL Pwr(+30)"
    },
    "LH0A": {
        "name_en": "S8:Sky Dance's Boon",
        "name_jp": "S8:舞空の援",
        "name_glen": "S8:Skydance Support",
        "effect_en": "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds.",
        "effect_jp": "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。",
        "effect_glen": "Activates Shifta and Deband after staying in the air for 2 seconds, and then every 10 seconds afterwards."
    },
    "LH0B": {
        "name_en": "S8:Strong Potency",
        "name_jp": "S8:服薬強身",
        "name_glen": "S8:Mighty Medication",
        "effect_en": "Makes you temporarily invincible while<br>drinking a -mate item.",
        "effect_jp": "自身でメイト系アイテム使用時、一定時間無敵。",
        "effect_glen": "Makes you temporarily invincible while drinking a -mate item."
    },
    "LH0E": {
        "name_en": "S8:T-ATK Up",
        "name_jp": "S8:法撃上昇",
        "name_glen": "S8:Fortified Technique",
        "effect_en": "T-ATK(+30)",
        "effect_jp": "法撃力(+30)",
        "effect_glen": "TEC Pwr(+30)"
    },
    "TD0B": {
        "name_en": "Sakura Fever",
        "name_jp": "サクラ・フィーバー",
        "name_glen": "Sakura Fever",
        "effect_en": "S-DEF(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃防御(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Def(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0D": {
        "name_en": "Sansan Fever",
        "name_jp": "サンサン・フィーバー",
        "name_glen": "Sumsum Fever",
        "effect_en": "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃力(+5)<br>射撃力(+5)<br>法撃力(+5)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>HP(+5),<br>PP(+1)"
    },
    "YA05": {
        "name_en": "Sentence Arma",
        "name_jp": "センテンス・アルマ",
        "name_glen": "Sentence Arma",
        "effect_en": "S-ATK(+20),<br>HP(+20),<br>PP(+3)",
        "effect_jp": "打撃力(+20)<br>HP(+20)<br>PP(+3)",
        "effect_glen": "MEL Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA25": {
        "name_en": "Sentence Magia",
        "name_jp": "センテンス・マギア",
        "name_glen": "Sentence Magia",
        "effect_en": "T-ATK(+20),<br>HP(+20),<br>PP(+3)",
        "effect_jp": "法撃力(+20)<br>HP(+20)<br>PP(+3)",
        "effect_glen": "TEC Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA01": {
        "name_en": "Sentence Power",
        "name_jp": "センテンス・パワー",
        "name_glen": "Sentence Might",
        "effect_en": "S-ATK(+20),<br>PP(+4)",
        "effect_jp": "打撃力(+20)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+20),<br>PP(+4)"
    },
    "XD01": {
        "name_en": "Sentence Receptor",
        "name_jp": "センテンスレセプター",
        "name_glen": "Sentence Receptor",
        "effect_en": "Boosts transfer of Sentence affixes<br>ALL(+10)",
        "effect_jp": "センテンス系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases the Transfer rate of Sentence-type Augments.<br>ALL(+10)"
    },
    "YA11": {
        "name_en": "Sentence Shoot",
        "name_jp": "センテンス・シュート",
        "name_glen": "Sentence Precision",
        "effect_en": "R-ATK(+20),<br>PP(+4)",
        "effect_jp": "射撃力(+20)<br>PP(+4)",
        "effect_glen": "RNG Pwr(+20),<br>PP(+4)"
    },
    "YA21": {
        "name_en": "Sentence Tech",
        "name_jp": "センテンス・テクニック",
        "name_glen": "Sentence Casting",
        "effect_en": "T-ATK(+20),<br>PP(+4)",
        "effect_jp": "法撃力(+20)<br>PP(+4)",
        "effect_glen": "TEC Pwr(+20),<br>PP(+4)"
    },
    "YA15": {
        "name_en": "Sentence Tiro",
        "name_jp": "センテンス・ティロ",
        "name_glen": "Sentence Tyro",
        "effect_en": "R-ATK(+20),<br>HP(+20),<br>PP(+3)",
        "effect_jp": "射撃力(+20)<br>HP(+20)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA31": {
        "name_en": "Sentence Triple",
        "name_jp": "センテンス・トリプル",
        "name_glen": "Sentence Triple",
        "effect_en": "S-ATK(+30)<br>,R-ATK(+30)<br>,T-ATK(+30)",
        "effect_jp": "打撃力(+30)<br>射撃力(+30)<br>法撃力(+30)",
        "effect_glen": "MEL Pwr(+30),RNG Pwr(+30),TEC Pwr(+30)"
    },
    "TN08": {
        "name_en": "Shiva Glare",
        "name_jp": "シバ・グレア",
        "name_glen": "Shiva Glare",
        "effect_en": "R-ATK(+30)<br>T-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+20)<br>HP(+20)<br>PP(+2)",
        "effect_jp": "射撃力(+30)<br>法撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+2)",
        "effect_glen": "RNG Pwr(+30)<br>TEC Pwr(+30)<br>MEL Def(+20)<br>RNG Def(+20)<br>TEC Def(+20)<br>HP(+20)<br>PP(+2)"
    },
    "JC01": {
        "name_en": "Shock I",
        "name_jp": "ショックⅠ",
        "name_glen": "Shock I",
        "effect_en": "Grants Shock Lv1",
        "effect_jp": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv1を付与する",
        "effect_glen": "Grants Shock Lv1"
    },
    "JC02": {
        "name_en": "Shock II",
        "name_jp": "ショックⅡ",
        "name_glen": "Shock II",
        "effect_en": "Grants Shock Lv2",
        "effect_jp": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv2を付与する",
        "effect_glen": "Grants Shock Lv2"
    },
    "JC03": {
        "name_en": "Shock III",
        "name_jp": "ショックⅢ",
        "name_glen": "Shock III",
        "effect_en": "Grants Shock Lv3",
        "effect_jp": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv3を付与する",
        "effect_glen": "Grants Shock Lv3"
    },
    "JC04": {
        "name_en": "Shock IV",
        "name_jp": "ショックⅣ",
        "name_glen": "Shock IV",
        "effect_en": "Grants Shock Lv4",
        "effect_jp": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv4を付与する",
        "effect_glen": "Grants Shock Lv4"
    },
    "HK01": {
        "name_en": "Shock Resist I",
        "name_jp": "ショックレジストⅠ",
        "name_glen": "Lightning Ward I",
        "effect_en": "Lightning Resist(+3)",
        "effect_jp": "雷耐性(+3)",
        "effect_glen": "Lightning Resist(+3)"
    },
    "HK02": {
        "name_en": "Shock Resist II",
        "name_jp": "ショックレジストⅡ",
        "name_glen": "Lightning Ward II",
        "effect_en": "Lightning Resist(+4)",
        "effect_jp": "雷耐性(+4)",
        "effect_glen": "Lightning Resist(+4)"
    },
    "HK03": {
        "name_en": "Shock Resist III",
        "name_jp": "ショックレジストⅢ",
        "name_glen": "Lightning Ward III",
        "effect_en": "Lightning Resist(+5)",
        "effect_jp": "雷耐性(+5)",
        "effect_glen": "Lightning Resist(+5)"
    },
    "HK04": {
        "name_en": "Shock Resist IV",
        "name_jp": "ショックレジストⅣ",
        "name_glen": "Lightning Ward IV",
        "effect_en": "Lightning Resist(+6)",
        "effect_jp": "雷耐性(+6)",
        "effect_glen": "Lightning Resist(+6)"
    },
    "HK05": {
        "name_en": "Shock Resist V",
        "name_jp": "ショックレジストⅤ",
        "name_glen": "Lightning Ward V",
        "effect_en": "Lightning Resist(+7)",
        "effect_jp": "雷耐性(+7)",
        "effect_glen": "Lightning Resist(+7)"
    },
    "JC05": {
        "name_en": "Shock V",
        "name_jp": "ショックⅤ",
        "name_glen": "Shock V",
        "effect_en": "Grants Shock Lv5",
        "effect_jp": "合成&継承率UP:ファング、タガミカヅチ、ダブル\nショックLv5を付与する",
        "effect_glen": "Grants Shock Lv5"
    },
    "XI05": {
        "name_en": "Shoot Boost",
        "name_jp": "シュート・ブースト",
        "name_glen": "Precision Boost",
        "effect_en": "R-ATK(+25)",
        "effect_jp": "射撃力(+25)",
        "effect_glen": "RNG Pwr(+25)"
    },
    "AB01": {
        "name_en": "Shoot I",
        "name_jp": "シュートⅠ",
        "name_glen": "Precision I",
        "effect_en": "R-ATK(+10)",
        "effect_jp": "射撃力(+10)",
        "effect_glen": "RNG Pwr(+10)"
    },
    "AB02": {
        "name_en": "Shoot II",
        "name_jp": "シュートⅡ",
        "name_glen": "Precision II",
        "effect_en": "R-ATK(+20)",
        "effect_jp": "射撃力(+20)",
        "effect_glen": "RNG Pwr(+20)"
    },
    "AB03": {
        "name_en": "Shoot III",
        "name_jp": "シュートⅢ",
        "name_glen": "Precision III",
        "effect_en": "R-ATK(+30)",
        "effect_jp": "射撃力(+30)",
        "effect_glen": "RNG Pwr(+30)"
    },
    "AB04": {
        "name_en": "Shoot IV",
        "name_jp": "シュートⅣ",
        "name_glen": "Precision IV",
        "effect_en": "R-ATK(+35)",
        "effect_jp": "射撃力(+35)",
        "effect_glen": "RNG Pwr(+35)"
    },
    "AB05": {
        "name_en": "Shoot V",
        "name_jp": "シュートⅤ",
        "name_glen": "Precision V",
        "effect_en": "R-ATK(+40)",
        "effect_jp": "射撃力(+40)",
        "effect_glen": "RNG Pwr(+40)"
    },
    "AB06": {
        "name_en": "Shoot VI",
        "name_jp": "シュートⅥ",
        "name_glen": "Precision VI",
        "effect_en": "R-ATK(+45)",
        "effect_jp": "射撃力(+45)",
        "effect_glen": "RNG Pwr(+45)"
    },
    "HB01": {
        "name_en": "Shot Resist I",
        "name_jp": "ショットレジストⅠ",
        "name_glen": "Projectile Ward I",
        "effect_en": "Range Resist(+3)",
        "effect_jp": "射撃軽減(+3)",
        "effect_glen": "Ranged Resist(+3)"
    },
    "HB02": {
        "name_en": "Shot Resist II",
        "name_jp": "ショットレジストⅡ",
        "name_glen": "Projectile Ward II",
        "effect_en": "Range Resist(+4)",
        "effect_jp": "射撃軽減(+4)",
        "effect_glen": "Ranged Resist(+4)"
    },
    "HB03": {
        "name_en": "Shot Resist III",
        "name_jp": "ショットレジストⅢ",
        "name_glen": "Projectile Ward III",
        "effect_en": "Range Resist(+5)",
        "effect_jp": "射撃軽減(+5)",
        "effect_glen": "Ranged Resist(+5)"
    },
    "HB04": {
        "name_en": "Shot Resist IV",
        "name_jp": "ショットレジストⅣ",
        "name_glen": "Projectile Ward IV",
        "effect_en": "Range Resist(+6)",
        "effect_jp": "射撃軽減(+6)",
        "effect_glen": "Ranged Resist(+6)"
    },
    "HB05": {
        "name_en": "Shot Resist V",
        "name_jp": "ショットレジストⅤ",
        "name_glen": "Projectile Ward V",
        "effect_en": "Range Resist(+7)",
        "effect_jp": "射撃軽減(+7)",
        "effect_glen": "Ranged Resist(+7)"
    },
    "RJ22": {
        "name_en": "Shrayda Soul",
        "name_jp": "シュレイダ・ソール",
        "name_glen": "Shraider Soul",
        "effect_en": "T-DEF(+30),<br>HP(+10),<br>PP(+3)",
        "effect_jp": "法撃防御(+30)<br>HP(+10)<br>PP(+3)",
        "effect_glen": "TEC Def(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RE21": {
        "name_en": "Signo Soul",
        "name_jp": "シグノ・ソール",
        "name_glen": "Signo Soul",
        "effect_en": "DEX(+30),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "技量(+30)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "DEX(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RE51": {
        "name_en": "Sinow Soul",
        "name_jp": "シノワ・ソール",
        "name_glen": "Sinow Soul",
        "effect_en": "S-ATK(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)",
        "effect_jp": "打撃力(+5)<br>技量(+30)<br>HP(+25)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)"
    },
    "RB32": {
        "name_en": "Siorg Soul",
        "name_jp": "ジオーグ・ソール",
        "name_glen": "Siogr Soul",
        "effect_en": "R-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "射撃力(+35)<br>技量(+5)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "RNG Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
    },
    "VQ01": {
        "name_en": "Slayer/Armor Type",
        "name_jp": "スレイヤー／機甲種",
        "name_glen": "Slayer: Automata",
        "effect_en": "Boost damage against Lillipa Mechs.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Lillipa Mechs.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "VQ02": {
        "name_en": "Slayer/Beast Type",
        "name_jp": "スレイヤー／原生種",
        "name_glen": "Slayer: Sylvant",
        "effect_en": "Boost damage against Naberius Natives.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "原生種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Naberius Natives.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PM16": {
        "name_en": "Slayer/Darkers",
        "name_jp": "スレイヤー／ダーカー",
        "name_glen": "Slayer: Falspawn",
        "effect_en": "Boost damage against Darkers.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "ダーカー種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Darkers.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PN17": {
        "name_en": "Slayer/Dragonkin",
        "name_jp": "スレイヤー／龍族種",
        "name_glen": "Slayer: Draconian",
        "effect_en": "Boost damage against Dragonkin.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "龍族種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Dragonkin.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PK14": {
        "name_en": "Slayer/Kuronite Type",
        "name_jp": "スレイヤー／黒の民",
        "name_glen": "Slayer: Nightfaller",
        "effect_en": "Boost damage against Kuronites.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "黒の民のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Kuronites.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PO18": {
        "name_en": "Slayer/Luminmech",
        "name_jp": "スレイヤー／閃機種",
        "name_glen": "Slayer: Luminmech",
        "effect_en": "Boost damage against Luminmech.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "閃機種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Luminmech.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PJ13": {
        "name_en": "Slayer/Ocean Type",
        "name_jp": "スレイヤー／海王種",
        "name_glen": "Slayer: Oceanid",
        "effect_en": "Boost damage against Wopal Oceanids.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "海王種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Wopal Oceanids.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "PL15": {
        "name_en": "Slayer/Phantoms Type",
        "name_jp": "スレイヤー／幻創種",
        "name_glen": "Slayer: Phantasm",
        "effect_en": "Boost damage against Phantoms.<br>Effect is reduced<br>as the Weapon<br>Rarity increases.",
        "effect_jp": "幻創種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        "effect_glen": "Boost damage against Phantoms.<br>Effect is reduced<br>as the Weapon<br>Rarity increases."
    },
    "RH21": {
        "name_en": "Snow Soul",
        "name_jp": "スノウ・ソール",
        "name_glen": "Snow Soul",
        "effect_en": "S-DEF(+30),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "打撃防御(+30)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "MEL Def(+30),<br>HP(+20),<br>PP(+1)"
    },
    "ROA3": {
        "name_en": "Soma Soul",
        "name_jp": "ソーマ・ソール",
        "name_glen": "Soma Soul",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>PP(+2)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>PP(+2)"
    },
    "TD0C": {
        "name_en": "Sonic Fever",
        "name_jp": "ソニック・フィーバー",
        "name_glen": "Sonic Fever",
        "effect_en": "S-ATK(+10),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "打撃力(+10)<br>射撃防御(+10)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Def(+10),<br>HP(+5),<br>PP(+1)"
    },
    "VJ01": {
        "name_en": "Soul Catalyst",
        "name_jp": "ソール・カタリスト",
        "name_glen": "Soul Catalyst",
        "effect_en": "HP(+10),<br>PP(+1)",
        "effect_jp": "HP(+10)<br>PP(+1)",
        "effect_glen": "HP(+10),<br>PP(+1)"
    },
    "XA01": {
        "name_en": "Soul Receptor",
        "name_jp": "ソールレセプター",
        "name_glen": "Soul Receptor",
        "effect_en": "Greatly increases Soul affix rate",
        "effect_jp": "ソール系特殊能力の継承成功率を大幅に上昇\nALL(+10)",
        "effect_glen": "Greatly increases Soul-type Augment transfer success rate."
    },
    "TF01": {
        "name_en": "Spirita Alpha",
        "name_jp": "スピリタ・アルファ",
        "name_glen": "Spirit Alpha",
        "effect_en": "DEX(+30),<br>PP(+3)",
        "effect_jp": "技量(+30)<br>PP(+3)",
        "effect_glen": "DEX(+30),<br>PP(+3)"
    },
    "XI03": {
        "name_en": "Spirita Boost",
        "name_jp": "スピリタ・ブースト",
        "name_glen": "Spirit Boost",
        "effect_en": "PP(+5)",
        "effect_jp": "PP(+5)",
        "effect_glen": "PP(+5)"
    },
    "EB01": {
        "name_en": "Spirita I",
        "name_jp": "スピリタⅠ",
        "name_glen": "Spirit I",
        "effect_en": "PP(+2)",
        "effect_jp": "PP(+2)",
        "effect_glen": "PP(+2)"
    },
    "EB02": {
        "name_en": "Spirita II",
        "name_jp": "スピリタⅡ",
        "name_glen": "Spirit II",
        "effect_en": "PP(+3)",
        "effect_jp": "PP(+3)",
        "effect_glen": "PP(+3)"
    },
    "EB03": {
        "name_en": "Spirita III",
        "name_jp": "スピリタⅢ",
        "name_glen": "Spirit III",
        "effect_en": "PP(+4)",
        "effect_jp": "PP(+4)",
        "effect_glen": "PP(+4)"
    },
    "EB04": {
        "name_en": "Spirita IV",
        "name_jp": "スピリタⅣ",
        "name_glen": "Spirit IV",
        "effect_en": "PP(+5)",
        "effect_jp": "PP(+5)",
        "effect_glen": "PP(+5)"
    },
    "EB05": {
        "name_en": "Spirita V",
        "name_jp": "スピリタⅤ",
        "name_glen": "Spirit V",
        "effect_en": "PP(+6)",
        "effect_jp": "PP(+6)",
        "effect_glen": "PP(+6)"
    },
    "EB06": {
        "name_en": "Spirita VI",
        "name_jp": "スピリタⅥ",
        "name_glen": "Spirit VI",
        "effect_en": "PP(+7)",
        "effect_jp": "PP(+7)",
        "effect_glen": "PP(+7)"
    },
    "TD05": {
        "name_en": "St. Fever",
        "name_jp": "セント・フィーバー",
        "name_glen": "Santa Fever",
        "effect_en": "R-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        "effect_jp": "射撃力(+10)<br>技量(+5)<br>PP(+2)",
        "effect_glen": "RNG Pwr(+10),<br>DEX(+5),<br>PP(+2)"
    },
    "XI02": {
        "name_en": "Stamina Boost",
        "name_jp": "スタミナ・ブースト",
        "name_glen": "Stamina Boost",
        "effect_en": "HP(+45)",
        "effect_jp": "HP(+45)",
        "effect_glen": "HP(+45)"
    },
    "EA01": {
        "name_en": "Stamina I",
        "name_jp": "スタミナⅠ",
        "name_glen": "Stamina I",
        "effect_en": "HP(+20)",
        "effect_jp": "HP(+20)",
        "effect_glen": "HP(+20)"
    },
    "EA02": {
        "name_en": "Stamina II",
        "name_jp": "スタミナⅡ",
        "name_glen": "Stamina II",
        "effect_en": "HP(+40)",
        "effect_jp": "HP(+40)",
        "effect_glen": "HP(+40)"
    },
    "EA03": {
        "name_en": "Stamina III",
        "name_jp": "スタミナⅢ",
        "name_glen": "Stamina III",
        "effect_en": "HP(+50)",
        "effect_jp": "HP(+50)",
        "effect_glen": "HP(+50)"
    },
    "EA04": {
        "name_en": "Stamina IV",
        "name_jp": "スタミナⅣ",
        "name_glen": "Stamina IV",
        "effect_en": "HP(+60)",
        "effect_jp": "HP(+60)",
        "effect_glen": "HP(+60)"
    },
    "EA05": {
        "name_en": "Stamina V",
        "name_jp": "スタミナⅤ",
        "name_glen": "Stamina V",
        "effect_en": "HP(+70)",
        "effect_jp": "HP(+70)",
        "effect_glen": "HP(+70)"
    },
    "EA06": {
        "name_en": "Stamina VI",
        "name_jp": "スタミナⅥ",
        "name_glen": "Stamina VI",
        "effect_en": "HP(+80)",
        "effect_jp": "HP(+80)",
        "effect_glen": "HP(+80)"
    },
    "TA01": {
        "name_en": "Stigma",
        "name_jp": "スティグマ",
        "name_glen": "Stigma",
        "effect_en": "DEX(+20),<br>PP(+5)",
        "effect_jp": "技量(+20)<br>PP(+5)",
        "effect_glen": "DEX(+20),<br>PP(+5)"
    },
    "TD07": {
        "name_en": "Summer Fever",
        "name_jp": "サマー・フィーバー",
        "name_glen": "Summer Fever",
        "effect_en": "T-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "法撃力(+10)<br>技量(+5)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "TEC Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "ROE3": {
        "name_en": "Tagami Kazuchi Soul",
        "name_jp": "タガミカヅチ・ソール",
        "name_glen": "Tagamikazuchi Soul",
        "effect_en": "R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        "effect_jp": "射撃力(+20)<br>法撃力(+20)<br>PP(+2)",
        "effect_glen": "RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)"
    },
    "XI06": {
        "name_en": "Technique Boost",
        "name_jp": "テクニック・ブースト",
        "name_glen": "Casting Boost",
        "effect_en": "T-ATK(+25)",
        "effect_jp": "法撃力(+25)",
        "effect_glen": "TEC Pwr(+25)"
    },
    "AC01": {
        "name_en": "Technique I",
        "name_jp": "テクニックⅠ",
        "name_glen": "Casting I",
        "effect_en": "T-ATK(+10)",
        "effect_jp": "法撃力(+10)",
        "effect_glen": "TEC Pwr(+10)"
    },
    "AC02": {
        "name_en": "Technique II",
        "name_jp": "テクニックⅡ",
        "name_glen": "Casting II",
        "effect_en": "T-ATK(+20)",
        "effect_jp": "法撃力(+20)",
        "effect_glen": "TEC Pwr(+20)"
    },
    "AC03": {
        "name_en": "Technique III",
        "name_jp": "テクニックⅢ",
        "name_glen": "Casting III",
        "effect_en": "T-ATK(+30)",
        "effect_jp": "法撃力(+30)",
        "effect_glen": "TEC Pwr(+30)"
    },
    "AC04": {
        "name_en": "Technique IV",
        "name_jp": "テクニックⅣ",
        "name_glen": "Casting IV",
        "effect_en": "T-ATK(+35)",
        "effect_jp": "法撃力(+35)",
        "effect_glen": "TEC Pwr(+35)"
    },
    "AC05": {
        "name_en": "Technique V",
        "name_jp": "テクニックⅤ",
        "name_glen": "Casting V",
        "effect_en": "T-ATK(+40)",
        "effect_jp": "法撃力(+40)",
        "effect_glen": "TEC Pwr(+40)"
    },
    "AC06": {
        "name_en": "Technique VI",
        "name_jp": "テクニックⅥ",
        "name_glen": "Casting VI",
        "effect_en": "T-ATK(+45)",
        "effect_jp": "法撃力(+45)",
        "effect_glen": "TEC Pwr(+45)"
    },
    "VD01": {
        "name_en": "Temptation",
        "name_jp": "テンプテーション",
        "name_glen": "Temptation",
        "effect_en": "Item Drop Rate +10%",
        "effect_jp": "レアドロップ倍率が増加+10%",
        "effect_glen": "Item Drop Rate +10%"
    },
    "XI0a": {
        "name_en": "Tenora Boost",
        "name_jp": "テノラ・ブースト",
        "name_glen": "*Tenora Boost",
        "effect_en": "S-ATK(+35)",
        "effect_jp": "打撃力(+35)",
        "effect_glen": "MEL Pwr(+35)"
    },
    "SH20": {
        "name_en": "Till The Soul",
        "name_jp": "ティル・ジ・ソール",
        "name_glen": "Tir Di Soul",
        "effect_en": "R-ATK(+35),<br>PP(+3)",
        "effect_jp": "射撃力(+35)<br>PP(+3)",
        "effect_glen": "RNG Pwr(+35),<br>PP(+3)"
    },
    "SB01": {
        "name_en": "Toh'oh Soul",
        "name_jp": "トウオウ・ソール",
        "name_glen": "Eastern Soul",
        "effect_en": "ALL(+10)",
        "effect_jp": "ALL(+10)",
        "effect_glen": "ALL(+10)"
    },
    "TD0A": {
        "name_en": "Torokuro Fever",
        "name_jp": "トロクロ・フィーバー",
        "name_glen": "*Torokuro Fever",
        "effect_en": "DEX(+15),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "技量(+15)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "DEX(+15),<br>HP(+5),<br>PP(+1)"
    },
    "TD0H": {
        "name_en": "Turkey Fever",
        "name_jp": "タッキ・フィーバー",
        "name_glen": "Turkey Fever",
        "effect_en": "DEX(+5),<br>T-DEF(+10),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "技量(+5)<br>法撃防御(+10)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "DEX(+5),<br>TEC Def(+10),<br>HP(+5),<br>PP(+1)"
    },
    "VH01": {
        "name_en": "Ultimate Buster",
        "name_jp": "アルティメットバスター",
        "name_glen": "Ultimate Buster",
        "effect_en": "Boost damage in Ultimate +10%",
        "effect_jp": "世壊種に与えるダメージが10%上昇",
        "effect_glen": "Boost damage in Ultimate +10%"
    },
    "RI23": {
        "name_en": "Vardha Soul",
        "name_jp": "ヴァーダー・ソール",
        "name_glen": "Varder Soul",
        "effect_en": "R-DEF(+30),<br>PP(+4)",
        "effect_jp": "射撃防御(+30)<br>PP(+4)",
        "effect_glen": "RNG Def(+30),<br>PP(+4)"
    },
    "TN07": {
        "name_en": "Varuna Glare",
        "name_jp": "ヴァルナ・グレア",
        "name_glen": "Varuna Glare",
        "effect_en": "S-ATK(+30)<br>T-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+20)<br>T-DEF(+20)<br>HP(+20)<br>PP(+2)",
        "effect_jp": "打撃力(+30)<br>法撃力(+30)<br>打撃防御(+20)<br>射撃防御(+20)<br>法撃防御(+20)<br>HP(+20)<br>PP(+2)",
        "effect_glen": "MEL Pwr(+30)<br>TEC Pwr(+30)<br>MEL Def(+20)<br>RNG Def(+20)<br>TEC Def(+20)<br>HP(+20)<br>PP(+2)"
    },
    "TN02": {
        "name_en": "Veluge Glare",
        "name_jp": "ベルージュ・グレア",
        "name_glen": "Berouge Glare",
        "effect_en": "R-ATK(+30)<br>S-DEF(+20)<br>R-DEF(+40)<br>T-DEF(+20)",
        "effect_jp": "射撃力(+30)<br>打撃防御(+20)<br>射撃防御(+40)<br>法撃防御(+20)",
        "effect_glen": "RNG Pwr(+30)<br>MEL Def(+20)<br>RNG Def(+40)<br>TEC Def(+20)"
    },
    "ROE2": {
        "name_en": "Vibrace Soul",
        "name_jp": "ビブラス・ソール",
        "name_glen": "Vibras Soul",
        "effect_en": "R-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
        "effect_jp": "射撃力(+20)<br>法撃力(+20)<br>HP(+5)<br>PP(+1)",
        "effect_glen": "RNG Pwr(+20),<br>TEC Pwr(+20),<br>HP(+5),<br>PP(+1)"
    },
    "TB01": {
        "name_en": "Vinculum",
        "name_jp": "ウィンクルム",
        "name_glen": "Vinculum",
        "effect_en": "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20)",
        "effect_jp": "打撃力(+20)<br>射撃力(+20)<br>法撃力(+20)",
        "effect_glen": "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20)"
    },
    "RA21": {
        "name_en": "Vol Soul",
        "name_jp": "ヴォル・ソール",
        "name_glen": "Vol Soul",
        "effect_en": "S-ATK(+30),<br>HP(+20)",
        "effect_jp": "打撃力(+30)<br>HP(+20)",
        "effect_glen": "MEL Pwr(+30),<br>HP(+20)"
    },
    "HL01": {
        "name_en": "Wind Resist I",
        "name_jp": "ウィンドレジストⅠ",
        "name_glen": "Gale Ward I",
        "effect_en": "Wind Resist(+3)",
        "effect_jp": "風耐性(+3)",
        "effect_glen": "Wind Resist(+3)"
    },
    "HL02": {
        "name_en": "Wind Resist II",
        "name_jp": "ウィンドレジストⅡ",
        "name_glen": "Gale Ward II",
        "effect_en": "Wind Resist(+4)",
        "effect_jp": "風耐性(+4)",
        "effect_glen": "Wind Resist(+4)"
    },
    "HL03": {
        "name_en": "Wind Resist III",
        "name_jp": "ウィンドレジストⅢ",
        "name_glen": "Gale Ward III",
        "effect_en": "Wind Resist(+5)",
        "effect_jp": "風耐性(+5)",
        "effect_glen": "Wind Resist(+5)"
    },
    "HL04": {
        "name_en": "Wind Resist IV",
        "name_jp": "ウィンドレジストⅣ",
        "name_glen": "Gale Ward IV",
        "effect_en": "Wind Resist(+6)",
        "effect_jp": "風耐性(+6)",
        "effect_glen": "Wind Resist(+6)"
    },
    "HL05": {
        "name_en": "Wind Resist V",
        "name_jp": "ウィンドレジストⅤ",
        "name_glen": "Gale Ward V",
        "effect_en": "Wind Resist(+7)",
        "effect_jp": "風耐性(+7)",
        "effect_glen": "Wind Resist(+7)"
    },
    "RC22": {
        "name_en": "Wolga Soul",
        "name_jp": "ウォルガ・ソール",
        "name_glen": "Wolga Soul",
        "effect_en": "T-ATK(+30),<br>HP(+10),<br>PP(+2)",
        "effect_jp": "法撃力(+30)<br>HP(+10)<br>PP(+2)",
        "effect_glen": "TEC Pwr(+30),<br>HP(+10),<br>PP(+2)"
    },
    "TG02": {
        "name_en": "Yamato Factor",
        "name_jp": "ヤマト・ファクター",
        "name_glen": "Yamato Factor",
        "effect_en": "S-ATK(+10),<br>R-ATK(+20),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
        "effect_jp": "打撃力(+10)<br>射撃力(+20)<br>法撃力(+10)<br>HP(+20)<br>PP(+1)",
        "effect_glen": "MEL Pwr(+10),<br>RNG Pwr(+20),<br>TEC Pwr(+10),<br>HP(+20),<br>PP(+1)"
    },
    "XI0c": {
        "name_en": "Yohmei Boost",
        "name_jp": "ヨウメイ・ブースト",
        "name_glen": "*Yohmei Boost",
        "effect_en": "T-ATK(+35)",
        "effect_jp": "法撃力(+35)",
        "effect_glen": "TEC Pwr(+35)"
    },
    "RA15": {
        "name_en": "Zigmor Soul",
        "name_jp": "ジグモル・ソール",
        "name_glen": "Jigmol Soul",
        "effect_en": "S-ATK(+15),<br>PP(+4)",
        "effect_jp": "打撃力(+15)<br>PP(+4)",
        "effect_glen": "MEL Pwr(+15),<br>PP(+4)"
    },
    "support": {
        "Nothing": {
            "en": "Nothing",
            "jp": "無し",
            "glen": "Nothing"
        },
        "Ability Success Rate +5%": {
            "en": "Ability Success Rate +5%",
            "jp": "能力追加成功率+5%",
            "glen": "Augmentation Aid +5%"
        },
        "Ability Success Rate +10%": {
            "en": "Ability Success Rate +10%",
            "jp": "能力追加成功率+10%",
            "glen": "Augmentation Aid +10%"
        },
        "Ability Success Rate +20%": {
            "en": "Ability Success Rate +20%",
            "jp": "能力追加成功率+20%",
            "glen": "Augmentation Aid +20%"
        },
        "Ability Success Rate +30%": {
            "en": "Ability Success Rate +30%",
            "jp": "能力追加成功率+30%",
            "glen": "Augmentation Aid +30%"
        },
        "Ability Success Rate +40%": {
            "en": "Ability Success Rate +40%",
            "jp": "能力追加成功率+40%",
            "glen": "Augmentation Aid +40%"
        },
        "Ability Success Rate +45%": {
            "en": "Ability Success Rate +45%",
            "jp": "能力追加成功率+45%",
            "glen": "Augmentation Aid +45%"
        },
        "Ability Success Rate +50%": {
            "en": "Ability Success Rate +50%",
            "jp": "能力追加成功率+50%",
            "glen": "Augmentation Aid +50%"
        },
        "Ability Success Rate +55%": {
            "en": "Ability Success Rate +55%",
            "jp": "能力追加成功率+55%",
            "glen": "Augmentation Aid +55%"
        },
        "Ability Success Rate +60%": {
            "en": "Ability Success Rate +60%",
            "jp": "能力追加成功率+60%",
            "glen": "Augmentation Aid +60%"
        },
        "Ability Success Rate +65%": {
            "en": "Ability Success Rate +65%",
            "jp": "能力追加成功率+65%",
            "glen": "Augmentation Aid +65%"
        }
    },
    "additional": {
        "Nothing": {
            "en": "Nothing",
            "jp": "無し",
            "glen": "Nothing"
        },
        "Add Ability (Spirita VI)": {
            "en": "Add Ability (Spirita VI)",
            "jp": "特殊能力(スピリタⅥ)",
            "glen": "Affix Augment (Spirit VI)"
        },
        "Add Ability (Power VI)": {
            "en": "Add Ability (Power VI)",
            "jp": "特殊能力(パワーⅥ)",
            "glen": "Affix Augment (Might VI)"
        },
        "Add Ability (Shoot VI)": {
            "en": "Add Ability (Shoot VI)",
            "jp": "特殊能力(シュートⅥ)",
            "glen": "Affix Augment (Precision VI)"
        },
        "Add Ability (Technique VI)": {
            "en": "Add Ability (Technique VI)",
            "jp": "特殊能力(テクニックⅥ)",
            "glen": "Affix Augment (Casting VI)"
        },
        "Add Ability (Ability IV)": {
            "en": "Add Ability (Ability IV)",
            "jp": "特殊能力(アビリティⅣ)",
            "glen": "Affix Augment (Mastery IV)"
        },
        "Add Ability (Omega M)": {
            "en": "Add Ability (Omega M)",
            "jp": "特殊能力(オメガM)",
            "glen": "Augment R (Omega M)"
        },
        "Add Ability (HP)": {
            "en": "Add Ability (HP)",
            "jp": "特殊能力追加(HP)",
            "glen": "Affix Augment (HP)"
        },
        "Add Ability (PP)": {
            "en": "Add Ability (PP)",
            "jp": "特殊能力追加(PP)",
            "glen": "Affix Augment (PP)"
        },
        "Add Ability (S-ATK)": {
            "en": "Add Ability (S-ATK)",
            "jp": "特殊能力追加(打撃)",
            "glen": "Affix Augment (Melee)"
        },
        "Add Ability (R-ATK)": {
            "en": "Add Ability (R-ATK)",
            "jp": "特殊能力追加(射撃)",
            "glen": "Affix Augment (Ranged)"
        },
        "Add Ability (T-ATK)": {
            "en": "Add Ability (T-ATK)",
            "jp": "特殊能力追加(法撃)",
            "glen": "Affix Augment (Casting)"
        },
        "Add Ability (Tenora)": {
            "en": "Add Ability (Tenora)",
            "jp": "特殊能力追加(テノラ)",
            "glen": "Affix Augment (Tenora)"
        },
        "Add Ability (GRM)": {
            "en": "Add Ability (GRM)",
            "jp": "特殊能力追加(GRM)",
            "glen": "Affix Augment (GRM)"
        },
        "Add Ability (Yohmei)": {
            "en": "Add Ability (Yohmei)",
            "jp": "特殊能力追加(ヨウメイ)",
            "glen": "Affix Augment (Yohmei)"
        },
        "Add Ability (HP&PP)": {
            "en": "Add Ability (HP&PP)",
            "jp": "特殊能力追加(HP&PP)",
            "glen": "Affix Augment (HP & PP)"
        },
        "Add Ability (S-ATK&PP)": {
            "en": "Add Ability (S-ATK&PP)",
            "jp": "特殊能力追加(打撃&PP)",
            "glen": "Affix Augment (Melee & PP)"
        },
        "Add Ability (R-ATK&PP)": {
            "en": "Add Ability (R-ATK&PP)",
            "jp": "特殊能力追加(射撃&PP)",
            "glen": "Affix Augment (Ranged & PP)"
        },
        "Add Ability (T-ATK&PP)": {
            "en": "Add Ability (T-ATK&PP)",
            "jp": "特殊能力追加(法撃&PP)",
            "glen": "Affix Augment (Technique & PP)"
        },
        "Add Ability (HP&PP/2)": {
            "en": "Add Ability (HP&PP/2)",
            "jp": "特殊能力(HP&PP/2)",
            "glen": "Augment (HP & PP/2)"
        },
        "Add Ability (S-ATK&PP/2)": {
            "en": "Add Ability (S-ATK&PP/2)",
            "jp": "特殊能力(打撃&PP/2)",
            "glen": "Augment (Melee & PP/2)"
        },
        "Add Ability (R-ATK&PP/2)": {
            "en": "Add Ability (R-ATK&PP/2)",
            "jp": "特殊能力(射撃&PP/2)",
            "glen": "Augment (Ranged & PP/2)"
        },
        "Add Ability (T-ATK&PP/2)": {
            "en": "Add Ability (T-ATK&PP/2)",
            "jp": "特殊能力(法撃&PP/2)",
            "glen": "Augment (Technique & PP/2)"
        },
        "Add Ability (HP&PP/3)": {
            "en": "Add Ability (HP&PP/3)",
            "jp": "特殊能力(HP&PP/3)",
            "glen": "Augment (HP & PP/3)"
        },
        "Add Ability (S-ATK&PP/3)": {
            "en": "Add Ability (S-ATK&PP/3)",
            "jp": "特殊能力(打撃&PP/3)",
            "glen": "Augment (Melee & PP/3)"
        },
        "Add Ability (R-ATK&PP/3)": {
            "en": "Add Ability (R-ATK&PP/3)",
            "jp": "特殊能力(射撃&PP/3)",
            "glen": "Augment (Ranged & PP/3)"
        },
        "Add Ability (T-ATK&PP/3)": {
            "en": "Add Ability (T-ATK&PP/3)",
            "jp": "特殊能力(法撃&PP/3)",
            "glen": "Augment (Technique & PP/3)"
        },
        "Add Ability (Grand HP)": {
            "en": "Add Ability (Grand HP)",
            "jp": "特殊能力(グランドHP)",
            "glen": "Augment (Grand Stamina)"
        },
        "Add Ability (Grand PP)": {
            "en": "Add Ability (Grand PP)",
            "jp": "特殊能力(グランドPP)",
            "glen": "Augment (Grand Spirit)"
        },
        "Add Ability (Grand P)": {
            "en": "Add Ability (Grand P)",
            "jp": "特殊能力(グランドP)",
            "glen": "Augment (Grand Might)"
        },
        "Add Ability (Grand S)": {
            "en": "Add Ability (Grand S)",
            "jp": "特殊能力(グランドS)",
            "glen": "Augment (Grand Precision)"
        },
        "Add Ability (Grand T)": {
            "en": "Add Ability (Grand T)",
            "jp": "特殊能力(グランドT)",
            "glen": "Augment (Grand Casting)"
        },
        "Add Ability (Offense Focus)": {
            "en": "Add Ability (Offense Focus)",
            "jp": "特殊能力追加(攻撃総合)",
            "glen": "Affix Augment (General Attack) "
        },
        "Add Ability (Offense Focus/2)": {
            "en": "Add Ability (Offense Focus/2)",
            "jp": "特殊能力追加(攻撃総合/2)",
            "glen": "Affix Augment (General Attack/2) "
        },
        "Add Ability (Defense Focus)": {
            "en": "Add Ability (Defense Focus)",
            "jp": "特殊能力追加(防御総合)",
            "glen": "Affix Augment (General Defense)"
        },
        "Add Ability (Defense Focus/2)": {
            "en": "Add Ability (Defense Focus/2)",
            "jp": "特殊能力追加(防御総合/2)",
            "glen": "Affix Augment (General Defense/2)"
        },
        "Add Ability (Ether S)": {
            "en": "Add Ability (Ether S)",
            "jp": "特殊能力(エーテルS)",
            "glen": "Augment R (Aether S)"
        },
        "Add Ability (Factor C)": {
            "en": "Add Ability (Factor C)",
            "jp": "特殊能力(ファクターC)",
            "glen": "Augment R (Factor C)"
        },
        "Add Ability (Reverie C)": {
            "en": "Add Ability (Reverie C)",
            "jp": "特殊能力(レヴリーC)",
            "glen": "Augment R (Reverie C)"
        },
        "Add Ability (Mark Joyo)": {
            "en": "Add Ability (Mark Joyo)",
            "jp": "特殊能力(Ｍジョイオ)",
            "glen": "Augment (Mark Joy)"
        },
        "Add Ability (Mark Couragena)": {
            "en": "Add Ability (Mark Couragena)",
            "jp": "特殊能力(Ｍカレジナ)",
            "glen": "Augment (Mark Courage)"
        },
        "Add Ability (Mark Angar)": {
            "en": "Add Ability (Mark Angar)",
            "jp": "特殊能力(Ｍアンガル)",
            "glen": "Augment (Mark Anger)"
        },
        "Add Ability (Mark Grif)": {
            "en": "Add Ability (Mark Grif)",
            "jp": "特殊能力(Ｍグリフ)",
            "glen": "Augment (Mark Grief)"
        },
        "Add Ability (Attack Inherit)": {
            "en": "Add Ability (Attack Inherit)",
            "jp": "特殊能力(攻撃継承)",
            "glen": "Affix Augment (Attack Succession)"
        },
        "Add Ability (Defense Inherit)": {
            "en": "Add Ability (Defense Inherit)",
            "jp": "特殊能力(防御継承)",
            "glen": "Affix Augment (Defense Succession)"
        },
        "Add Ability (Photon Inherit)": {
            "en": "Add Ability (Photon Inherit)",
            "jp": "特殊能力(心身継承)",
            "glen": "Affix Augment (Mind/Body Succession)"
        },
        "Add Ability (Mark Receptor)": {
            "en": "Add Ability (Mark Receptor)",
            "jp": "特殊能力(マーク継承)",
            "glen": "Augment (Mark Succession)"
        },
        "Add Ability (Divine Receptor)": {
            "en": "Add Ability (Divine Receptor)",
            "jp": "特殊能力(ディバイン継承)",
            "glen": "Augment (Divine Succession)"
        },
        "Add Ability (Catalyst Receptor)": {
            "en": "Add Ability (Catalyst Receptor)",
            "jp": "特殊能力(カタリスト継承)",
            "glen": "Augment (Catalyst Succession)"
        },
        "Add Ability (Exceed Receptor)": {
            "en": "Add Ability (Exceed Receptor)",
            "jp": "特殊能力(イクシード継承)",
            "glen": "Affix Augment (Exceed Receptor)"
        },
        "S1 Add: Red Petal Flash": {
            "en": "S1 Add: Red Petal Flash",
            "jp": "S1追加:花ノ赤閃",
            "glen": "S1 Add: Petalgleam"
        },
        "S1 Add: Blue Ocean Flash": {
            "en": "S1 Add: Blue Ocean Flash",
            "jp": "S1追加:海ノ青閃",
            "glen": "S1 Add: Seagleam"
        },
        "S1 Add: White Snow Flash": {
            "en": "S1 Add: White Snow Flash",
            "jp": "S1追加:雪ノ白閃",
            "glen": "S1 Add: Snowgleam"
        },
        "S1 Add: Yellow Moon Flash": {
            "en": "S1 Add: Yellow Moon Flash",
            "jp": "S1追加:月ノ黄閃",
            "glen": "S1 Add: Moongleam"
        },
        "S1 Add: Green Leaf Flash": {
            "en": "S1 Add: Green Leaf Flash",
            "jp": "S1追加:葉ノ緑閃",
            "glen": "S1 Add: Leafgleam"
        },
        "S1 Add: Black Shadow Flash": {
            "en": "S1 Add: Black Shadow Flash",
            "jp": "S1追加:影ノ黒閃",
            "glen": "S1 Add: Shadowgleam"
        },
        "S1 Add: Wise Skill": {
            "en": "S1 Add: Wise Skill",
            "jp": "S1追加:妙技の巧",
            "glen": "S1 Add: Skillful Adept"
        },
        "S1 Add: Radiating Grace": {
            "en": "S1 Add: Radiating Grace",
            "jp": "S1追加:輝勢の恵",
            "glen": "S1 Add: Luminous Grace"
        },
        "S1 Add: Brilliant Intent": {
            "en": "S1 Add: Brilliant Intent",
            "jp": "S1追加:輝充の志",
            "glen": "S1 Add: Photonic Will"
        },
        "S1 Add: Brilliant Intent 2": {
            "en": "S1 Add: Brilliant Intent 2",
            "jp": "S1追加:輝充の志2",
            "glen": "S1 Add: Photonic Will 2"
        },
        "S1 Add: Double-Edged Sword": {
            "en": "S1 Add: Double-Edged Sword",
            "jp": "S1追加:諸刃の撃",
            "glen": "S1 Add: Two-edged Strike"
        },
        "S1 Add: Skilled Intent": {
            "en": "S1 Add: Skilled Intent",
            "jp": "S1追加:妙撃の志",
            "glen": "S1 Add: Precision Will"
        },
        "S1 Add: Radiant Strike": {
            "en": "S1 Add: Radiant Strike",
            "jp": "S1追加:輝剰の撃",
            "glen": "S1 Add: Lustrous Strike"
        },
        "S1 Add: Flowing Exhilaration": {
            "en": "S1 Add: Flowing Exhilaration",
            "jp": "S1追加:時流活与",
            "glen": "S1 Add: Timeflow Vitality"
        },
        "S1 Add: Guardian Armor": {
            "en": "S1 Add: Guardian Armor",
            "jp": "S1追加:守護の備",
            "glen": "S1 Add: Guardian Shield"
        },
        "S1 Add: Powering Intent": {
            "en": "S1 Add: Powering Intent",
            "jp": "S1追加:強闘の志",
            "glen": "S1 Add: Goliathslayer's Will"
        },
        "S1 Add: Rupturing Excess": {
            "en": "S1 Add: Rupturing Excess",
            "jp": "S1追加:裂砕の剰",
            "glen": "S1 Add: Lustrous Partbreaker"
        },
        "S1 Add: Spirited Response": {
            "en": "S1 Add: Spirited Response",
            "jp": "S1追加:気輝応変",
            "glen": "S1 Add: Luminous Adaptation"
        },
        "S1 Add: Rupturing Intent": {
            "en": "S1 Add: Rupturing Intent",
            "jp": "S1追加:裂砕の志",
            "glen": "S1 Add: Partbreaker's Will"
        },
        "S1 Add: Augment Intent": {
            "en": "S1 Add: Augment Intent",
            "jp": "S1追加:錬成の志",
            "glen": "S1 Add: Augment Will"
        },
        "S1 Add: Augment Intent 2": {
            "en": "S1 Add: Augment Intent 2",
            "jp": "S1追加:錬成の志2",
            "glen": "S1 Add: Augment Will 2"
        },
        "S1 Add: Brilliant Ruin 2": {
            "en": "S1 Add: Brilliant Ruin 2",
            "jp": "S1追加:滅域輝与2",
            "glen": "S1 Add: Lucent Domain 2"
        },
        "S1 Add: Photon Reduction 2": {
            "en": "S1 Add: Photon Reduction 2",
            "jp": "S1追加:光子縮減2",
            "glen": "S1 Add: Photon Descent 2"
        },
        "S1 Add: Flowing Intent": {
            "en": "S1 Add: Flowing Intent",
            "jp": "S1追加:時流の志",
            "glen": "S1 Add: Timeflow Will"
        },
        "S1 Add: Flowing Grace": {
            "en": "S1 Add: Flowing Grace",
            "jp": "S1追加:時流の恵",
            "glen": "S1 Add: Timeflow Grace"
        },
        "S1 Add: Lethal Intent": {
            "en": "S1 Add: Lethal Intent",
            "jp": "S1追加:死中の志",
            "glen": "S1 Add: Will of the Dying"
        },
        "S1 Add: Reckless Strike": {
            "en": "S1 Add: Reckless Strike",
            "jp": "S1追加:賭死の撃",
            "glen": "S1 Add: Dance with Death"
        },
        "S1 Add: Eclipsing Decay": {
            "en": "S1 Add: Eclipsing Decay",
            "jp": "S1追加:失力の蝕",
            "glen": "S1 Add: Crippling Erode"
        },
        "S1 Add: Photon Balance": {
            "en": "S1 Add: Photon Balance",
            "jp": "S1追加:光子の秤",
            "glen": "S1 Add: Photon Balance"
        },
        "S1 Add: Photon Balance 2": {
            "en": "S1 Add: Photon Balance 2",
            "jp": "S1追加:光子の秤2",
            "glen": "S1 Add: Photon Balance 2"
        },
        "S1 Add: Collaborator Liberator": {
            "en": "S1 Add: Collaborator Liberator",
            "jp": "S1追加:戦友の加護",
            "glen": "S1 Add: Comrade's Blessing"
        },
        "S1 Add: Collaborator Liberator 2": {
            "en": "S1 Add: Collaborator Liberator 2",
            "jp": "S1追加:戦友の加護2",
            "glen": "S1 Add: Comrade's Blessing 2"
        },
        "S1 Add: Offensive Intent 2": {
            "en": "S1 Add: Offensive Intent 2",
            "jp": "S1追加:剛撃の志2",
            "glen": "S1 Add: Aggressive Will 2"
        },
        "S2 Add: Nature's Reduction 2": {
            "en": "S2 Add: Nature's Reduction 2",
            "jp": "S2追加:花海雪の縮減2",
            "glen": "S2 Add: Petalsea Descent 2"
        },
        "S2 Add: Umbrageous Radiance 2": {
            "en": "S2 Add: Umbrageous Radiance 2",
            "jp": "S2追加:月葉影の輝剰2",
            "glen": "S2 Add: Lustrous Moonleaf 2"
        },
        "S2 Add: Umbrageous Melody": {
            "en": "S2 Add: Umbrageous Melody",
            "jp": "S2追加:月葉影の歌",
            "glen": "S2 Add: Moonleaf Song"
        },
        "S2 Add: Umbrageous Melody 2": {
            "en": "S2 Add: Umbrageous Melody 2",
            "jp": "S2追加:月葉影の歌2",
            "glen": "S2 Add: Moonleaf Song 2"
        },
        "S2 Add: Rainbow's Intent": {
            "en": "S2 Add: Rainbow's Intent",
            "jp": "S2追加:六色の志",
            "glen": "S2 Add: Rainbow Will"
        },
        "S2 Add: Rainbow's Exhilaration": {
            "en": "S2 Add: Rainbow's Exhilaration",
            "jp": "S2追加:六色の活与",
            "glen": "S2 Add: Rainbow Vitality"
        },
        "S2 Add: Flowing Exhilaration": {
            "en": "S2 Add: Flowing Exhilaration",
            "jp": "S2追加:時流活与",
            "glen": "S2 Add: Timeflow Vitality"
        },
        "S2 Add: Photon Reduction": {
            "en": "S2 Add: Photon Reduction",
            "jp": "S2追加:光子縮減",
            "glen": "S2 Add: Photon Descent"
        },
        "S2 Add: Photon Reduction 3": {
            "en": "S2 Add: Photon Reduction 3",
            "jp": "S2追加:光子縮減3",
            "glen": "S2 Add: Photon Descent 3"
        },
        "S2 Add: Sturdy Recovery": {
            "en": "S2 Add: Sturdy Recovery",
            "jp": "S2追加:剛乱活与",
            "glen": "S2 Add: Tumultuous Vitality"
        },
        "S2 Add: Cursed Radiance": {
            "en": "S2 Add: Cursed Radiance",
            "jp": "S2追加:災転輝与",
            "glen": "S2 Add: Lucent Adversity"
        },
        "S2 Add: Spirited Response": {
            "en": "S2 Add: Spirited Response",
            "jp": "S2追加:気輝応変",
            "glen": "S2 Add: Luminous Adaptation"
        },
        "S2 Add: Flowing Grace": {
            "en": "S2 Add: Flowing Grace",
            "jp": "S2追加:時流の恵",
            "glen": "S2 Add: Timeflow Grace"
        },
        "S2 Add: Brilliant Intent": {
            "en": "S2 Add: Brilliant Intent",
            "jp": "S2追加:輝充の志",
            "glen": "S2 Add: Photonic Will"
        },
        "S2 Add: Rupturing Excess": {
            "en": "S2 Add: Rupturing Excess",
            "jp": "S2追加:裂砕の剰",
            "glen": "S2 Add: Lustrous Partbreaker"
        },
        "S2 Add: Double-Edged Sword": {
            "en": "S2 Add: Double-Edged Sword",
            "jp": "S2追加:諸刃の撃",
            "glen": "S2 Add: Two-edged Strike"
        },
        "S2 Add: Flaming Guard": {
            "en": "S2 Add: Flaming Guard",
            "jp": "S2追加:火炎の備志",
            "glen": "S2 Add: One with the Flame"
        },
        "S2 Add: Freezing Guard": {
            "en": "S2 Add: Freezing Guard",
            "jp": "S2追加:氷雪の備志",
            "glen": "S2 Add: One with the Tundra"
        },
        "S2 Add: Lightning Guard": {
            "en": "S2 Add: Lightning Guard",
            "jp": "S2追加:轟雷の備志",
            "glen": "S2 Add: One with the Thunder"
        },
        "S2 Add: Storm Guard": {
            "en": "S2 Add: Storm Guard",
            "jp": "S2追加:暴風の備志",
            "glen": "S2 Add: One with the Storm"
        },
        "S2 Add: Shining Guard": {
            "en": "S2 Add: Shining Guard",
            "jp": "S2追加:光明の備志",
            "glen": "S2 Add: One with the Light"
        },
        "S2 Add: Darkness Guard": {
            "en": "S2 Add: Darkness Guard",
            "jp": "S2追加:暗闇の備志",
            "glen": "S2 Add: One with the Dark"
        },
        "S2 Add: Wise Skill 2": {
            "en": "S2 Add: Wise Skill 2",
            "jp": "S2追加:妙技の巧2",
            "glen": "S2 Add: Skillful Adept 2"
        },
        "S2 Add: Skilled Intent 2": {
            "en": "S2 Add: Skilled Intent 2",
            "jp": "S2追加:妙撃の志2",
            "glen": "S2 Add: Precision Will 2"
        },
        "S2 Add: Radiant Strike 2": {
            "en": "S2 Add: Radiant Strike 2",
            "jp": "S2追加:輝剰の撃2",
            "glen": "S2 Add: Lustrous Strike 2"
        },
        "S2 Add: Runner's High": {
            "en": "S2 Add: Runner's High",
            "jp": "S2追加:走者高揚",
            "glen": "S2 Add: Runner's High"
        },
        "S2 Add: Skill Reduction": {
            "en": "S2 Add: Skill Reduction",
            "jp": "S2追加:技巧縮減",
            "glen": "S2 Add: Prowess in Descent"
        },
        "S2 Add: Heavenly Keeper": {
            "en": "S2 Add: Heavenly Keeper",
            "jp": "S2追加:保天輝地",
            "glen": "S2 Add: Sky-Earth Lucency"
        },
        "S2 Add: Heavenly Keeper 2": {
            "en": "S2 Add: Heavenly Keeper 2",
            "jp": "S2追加:保天輝地2",
            "glen": "S2 Add: Sky-Earth Lucency 2"
        },
        "S2 Add: Flowing Armor": {
            "en": "S2 Add: Flowing Armor",
            "jp": "S2追加:時流の護",
            "glen": "S2 Add: Timeflow Armor"
        },
        "S2 Add: Guardian Armor 2": {
            "en": "S2 Add: Guardian Armor 2",
            "jp": "S2追加:守護の備2",
            "glen": "S2 Add: Guardian Shield 2"
        },
        "S2 Add: Instant Reduction 2": {
            "en": "S2 Add: Instant Reduction 2",
            "jp": "S2追加:瞬乱縮減2",
            "glen": "S2 Add: Perfect Descent 2"
        },
        "S2 Add: Instant Purpose": {
            "en": "S2 Add: Instant Purpose",
            "jp": "S2追加:瞬乱巧志",
            "glen": "S2 Add: Perfect Adept Will"
        },
        "S2 Add: Medicinal Wisdom 2": {
            "en": "S2 Add: Medicinal Wisdom 2",
            "jp": "S2追加:服薬の恵2",
            "glen": "*S2 Add: Medical Grace 2"
        },
        "S3 Add: Nature's Gleam 2": {
            "en": "S3 Add: Nature's Gleam 2",
            "jp": "S3追加:花海雪の輝勢2",
            "glen": "S3 Add: Petalsea Lucentrush 2"
        },
        "S3 Add: Nature's Melody": {
            "en": "S3 Add: Nature's Melody",
            "jp": "S3追加:花海雪の歌",
            "glen": "S3 Add: Petalsea Song"
        },
        "S3 Add: Nature's Melody 2": {
            "en": "S3 Add: Nature's Melody 2",
            "jp": "S3追加:花海雪の歌2",
            "glen": "S3 Add: Petalsea Song 2"
        },
        "S3 Add: Rainbow's Radiance": {
            "en": "S3 Add: Rainbow's Radiance",
            "jp": "S3追加:六色の輝剰",
            "glen": "S3 Add: Lustrous Rainbow"
        },
        "S3 Add: Rainbow's Gleam": {
            "en": "S3 Add: Rainbow's Gleam",
            "jp": "S3追加:六色の輝勢",
            "glen": "S3 Add: Luminous Rainbow"
        },
        "S3 Add: Rainbow's Reduction": {
            "en": "S3 Add: Rainbow's Reduction",
            "jp": "S3追加:六色の縮減",
            "glen": "S3 Add: Rainbow Descent"
        },
        "S3 Add: Radiant Strike": {
            "en": "S3 Add: Radiant Strike",
            "jp": "S3追加:輝剰の撃",
            "glen": "S3 Add: Lustrous Strike"
        },
        "S3 Add: Radiant Strike 3": {
            "en": "S3 Add: Radiant Strike 3",
            "jp": "S3追加:輝剰の撃3",
            "glen": "S3 Add: Lustrous Strike 3"
        },
        "S3 Add: Skilled Intent": {
            "en": "S3 Add: Skilled Intent",
            "jp": "S3追加:妙撃の志",
            "glen": "S3 Add: Precision Will"
        },
        "S3 Add: Splintering Intent": {
            "en": "S3 Add: Splintering Intent",
            "jp": "S3追加:裂砕妙撃の志",
            "glen": "S3 Add: Prcsn Prtbrkr's Will"
        },
        "S3 Add: Offensive Intent": {
            "en": "S3 Add: Offensive Intent",
            "jp": "S3追加:剛撃の志",
            "glen": "S3 Add: Aggressive Will"
        },
        "S3 Add: Vital Intent": {
            "en": "S3 Add: Vital Intent",
            "jp": "S3追加:活実の志",
            "glen": "S3 Add: Axiom Will"
        },
        "S3 Add: Vital Intent 2": {
            "en": "S3 Add: Vital Intent 2",
            "jp": "S3追加:活実の志2",
            "glen": "S3 Add: Axiom Will 2"
        },
        "S3 Add: Double-Edged Sword": {
            "en": "S3 Add: Double-Edged Sword",
            "jp": "S3追加:諸刃の撃",
            "glen": "S3 Add: Two-edged Strike"
        },
        "S3 Add: Photon Reduction": {
            "en": "S3 Add: Photon Reduction",
            "jp": "S3追加:光子縮減",
            "glen": "S3 Add: Photon Descent"
        },
        "S3 Add: Brilliant Ruin": {
            "en": "S3 Add: Brilliant Ruin",
            "jp": "S3追加:滅域輝与",
            "glen": "S3 Add: Lucent Domain"
        },
        "S3 Add: Cursed Radiance": {
            "en": "S3 Add: Cursed Radiance",
            "jp": "S3追加:災転輝与",
            "glen": "S3 Add: Lucent Adversity"
        },
        "S3 Add: Radiating Grace 2": {
            "en": "S3 Add: Radiating Grace 2",
            "jp": "S3追加:輝勢の恵2",
            "glen": "S3 Add: Luminous Grace 2"
        },
        "S3 Add: Flowing Exhilaration 2": {
            "en": "S3 Add: Flowing Exhilaration 2",
            "jp": "S3追加:時流活与2",
            "glen": "S3 Add: Timeflow Vitality 2"
        },
        "S3 Add: Flowing Grace": {
            "en": "S3 Add: Flowing Grace",
            "jp": "S3追加:時流の恵",
            "glen": "S3 Add: Timeflow Grace"
        },
        "S3 Add: Calming Exhilaration": {
            "en": "S3 Add: Calming Exhilaration",
            "jp": "S3追加:静心活与",
            "glen": "S3 Add: Steadfast Vitality"
        },
        "S3 Add: Fortifying Strike": {
            "en": "S3 Add: Fortifying Strike",
            "jp": "S3追加:撃流の備",
            "glen": "S3 Add: Strikeflow Shield"
        },
        "S3 Add: Curtailed Strike": {
            "en": "S3 Add: Curtailed Strike",
            "jp": "S3追加:撃流縮減",
            "glen": "S3 Add: Strikeflow Descent"
        },
        "S3 Add: Wise Strike": {
            "en": "S3 Add: Wise Strike",
            "jp": "S3追加:撃流の巧",
            "glen": "S3 Add: Strikeflow Adept"
        },
        "S3 Add: Flowing Courage": {
            "en": "S3 Add: Flowing Courage",
            "jp": "S3追加:時流の勇",
            "glen": "S3 Add: Timeflow Mettle"
        },
        "S3 Add: Powering Intent": {
            "en": "S3 Add: Powering Intent",
            "jp": "S3追加:強闘の志",
            "glen": "S3 Add: Goliathslayer's Will"
        },
        "S3 Add: Immediate Brilliance": {
            "en": "S3 Add: Immediate Brilliance",
            "jp": "S3追加:瞬連の輝",
            "glen": "*S3 Add: Immediate Brilliance"
        },
        "S4 Add: Skilled Balance": {
            "en": "S4 Add: Skilled Balance",
            "jp": "S4追加:妙撃の秤",
            "glen": "S4 Add: Precise Balance"
        },
        "S4 Add: Heavenly Protection": {
            "en": "S4 Add: Heavenly Protection",
            "jp": "S4追加:天輝の守護",
            "glen": "S4 Add: Heavenly Protection"
        },
        "S4 Add: Calming Intent": {
            "en": "S4 Add: Calming Intent",
            "jp": "S4追加:静心の志",
            "glen": "S4 Add: Calming Intent"
        },
        "S4 Add: Saint Shield": {
            "en": "S4 Add: Saint Shield",
            "jp": "S4追加:聖者の盾",
            "glen": "S4 Add: Saintly Shield"
        },
        "S4 Add: Harmonized Rainbow": {
            "en": "S4 Add: Harmonized Rainbow",
            "jp": "S4追加:六色の輝秤",
            "glen": "S4 Add: Rainbow Lucentbalance"
        },
        "S4 Add: Raising Pursuit": {
            "en": "S4 Add: Raising Pursuit",
            "jp": "S4追加:累加追撃",
            "glen": "S4 Add: Escalating Pursuit"
        },
        "S4 Add: Pursuing Skill": {
            "en": "S4 Add: Pursuing Skill",
            "jp": "S4追加:追蝕の巧",
            "glen": "S4 Add: Amplified Adept"
        },
        "S4 Add: Cursed Rainbow": {
            "en": "S4 Add: Cursed Rainbow",
            "jp": "S4追加:六色の災転",
            "glen": "S4 Add: Rainbow Adversity"
        },
        "S4 Add: Colossal Radiance": {
            "en": "S4 Add: Colossal Radiance",
            "jp": "S4追加:強闘輝与",
            "glen": "S4 Add: Goliathslayer Lucent"
        },
        "S4 Add: Evasion Training": {
            "en": "S4 Add: Evasion Training",
            "jp": "S4追加:回避訓練",
            "glen": "S4 Add: Dodge Training"
        },
        "S4 Add: Pursuing Radiance": {
            "en": "S4 Add: Pursuing Radiance",
            "jp": "S4追加:追蝕輝剰",
            "glen": "S4 Add: Lustrous Amplify"
        },
        "S4 Add: Shared Ruin": {
            "en": "S4 Add: Shared Ruin",
            "jp": "S4追加:滅域分与",
            "glen": "S4 Add: Nullzone Bestowal"
        },
        "S5 Add: Anthesis Cultivation": {
            "en": "S5 Add: Anthesis Cultivation",
            "jp": "S5追加:錬成萌花",
            "glen": "S5 Add: Augment Bloom"
        },
        "S5 Add: Instant Invocation": {
            "en": "S5 Add: Instant Invocation",
            "jp": "S5追加:瞬術略唱",
            "glen": "S5 Add: Sleight Incantation"
        },
        "S5 Add: Tethered Eclipse": {
            "en": "S5 Add: Tethered Eclipse",
            "jp": "S5追加:追蝕の縛",
            "glen": "S5 Add: Amplified Restraint"
        },
        "S5 Add: Vigorous Response": {
            "en": "S5 Add: Vigorous Response",
            "jp": "S5追加:活器応変",
            "glen": "S5 Add: Life V Adapation"
        },
        "S5 Add: Angelic Respite": {
            "en": "S5 Add: Angelic Respite",
            "jp": "S5追加:槍機天悠",
            "glen": "S5 Add: Lance of Eternity"
        },
        "S5 Add: Calming Expanse": {
            "en": "S5 Add: Calming Expanse",
            "jp": "S5追加:静心拡域",
            "glen": "S5 Add: Steadfast Expanse"
        },
        "S5 Add: Area Support": {
            "en": "S5 Add: Area Support",
            "jp": "S5追加:領域加勢",
            "glen": "S5 Add: Provincial Provision"
        },
        "S5 Add: Aegis Balance": {
            "en": "S5 Add: Aegis Balance",
            "jp": "S5追加:堅守の秤",
            "glen": "S5 Add: Defensive Balance"
        },
        "S5 Add: Parting Gift": {
            "en": "S5 Add: Parting Gift",
            "jp": "S5追加:終撃応与",
            "glen": "S5 Add: Finishing Blow"
        },
        "S5 Add: Swift Radiance": {
            "en": "S5 Add: Swift Radiance",
            "jp": "S5追加:回避輝与",
            "glen": "S5 Add: Dodge Lucent"
        },
        "S5 Add: Calming Quartet": {
            "en": "S5 Add: Calming Quartet",
            "jp": "S5追加:静心四連",
            "glen": "S5 Add: Steadfast Quadrate"
        },
        "S5 Add: Chained Radiance": {
            "en": "S5 Add: Chained Radiance",
            "jp": "S5追加:連鎖輝与",
            "glen": "S5 Add: Chain Lucent"
        },
        "S6 Add: Ironclad Illness": {
            "en": "S6 Add: Ironclad Illness",
            "jp": "S6追加:癒蝕頑強",
            "glen": "S6 Add: Ironclad Illness"
        },
        "S6 Add: Guardian Armor": {
            "en": "S6 Add: Guardian Armor",
            "jp": "S6追加:守護の備",
            "glen": "S6 Add: Guardian Shield"
        },
        "S6 Add: Heroic Howl": {
            "en": "S6 Add: Heroic Howl",
            "jp": "S6追加:英雄咆哮",
            "glen": "S6 Add: Heroic Howl"
        },
        "S6 Add: Soaring Ballet": {
            "en": "S6 Add: Soaring Ballet",
            "jp": "S6追加:翔機天舞",
            "glen": "S6 Add: Soaring Heavendance"
        },
        "S6 Add: Guardian's Essence": {
            "en": "S6 Add: Guardian's Essence",
            "jp": "S6追加:機魂の守護",
            "glen": "S6 Add: Soul Protection"
        },
        "S6 Add: Evasion Whistle": {
            "en": "S6 Add: Evasion Whistle",
            "jp": "S6追加:回避の口笛",
            "glen": "S6 Add: Dodging Whistle"
        },
        "S6 Add: Long Night Star": {
            "en": "S6 Add: Long Night Star",
            "jp": "S6追加:長夜の明星",
            "glen": "S6 Add: Long Night Star"
        },
        "S6 Add: Overlimit": {
            "en": "S6 Add: Overlimit",
            "jp": "S6追加:超限活器",
            "glen": "S6 Add: Overflowing Life V"
        },
        "S6 Add: Wondrous Encore": {
            "en": "S6 Add: Wondrous Encore",
            "jp": "S6追加:奇跡再演",
            "glen": "S6 Add: Miraculous Encore"
        },
        "S6 Add: Raising Expanse": {
            "en": "S6 Add: Raising Expanse",
            "jp": "S6追加:累加拡域",
            "glen": "S6 Add: Escalating Expanse"
        },
        "S6 Add: Rainbow's Shield": {
            "en": "S6 Add: Rainbow's Shield",
            "jp": "S6追加:六色の盾",
            "glen": "S6 Add: Rainbow Shield"
        },
        "S7 Add: S-ATK Up": {
            "en": "S7 Add: S-ATK Up",
            "jp": "S7追加:打撃上昇",
            "glen": "S7 Add: Fortified Melee"
        },
        "S7 Add: R-ATK Up": {
            "en": "S7 Add: R-ATK Up",
            "jp": "S7追加:射撃上昇",
            "glen": "S7 Add: Fortified Ranged"
        },
        "S7 Add: T-ATK Up": {
            "en": "S7 Add: T-ATK Up",
            "jp": "S7追加:法撃上昇",
            "glen": "S7 Add: Fortified Technique"
        },
        "S7 Add: Glowing Grace": {
            "en": "S7 Add: Glowing Grace",
            "jp": "S7追加:輝静の恵",
            "glen": "S7 Add: Still Grace"
        },
        "S7 Add: Zenith Impact": {
            "en": "S7 Add: Zenith Impact",
            "jp": "S7追加:瞬撃の極",
            "glen": "S7 Add: Supreme Perfection"
        },
        "S7 Add: Increased Efficiency": {
            "en": "S7 Add: Increased Efficiency",
            "jp": "S7追加:薬効増大",
            "glen": "S7 Add: Medicinal Potentiation"
        },
        "S7 Add: Mind Merge": {
            "en": "S7 Add: Mind Merge",
            "jp": "S7追加:以心伝心",
            "glen": "S7 Add: Empathic Communion"
        },
        "S7 Add: Sentinel's Gift": {
            "en": "S7 Add: Sentinel's Gift",
            "jp": "S7追加:法護の与",
            "glen": "S7 Add: Dharma Boon"
        },
        "S7 Add: Descried Warrior": {
            "en": "S7 Add: Descried Warrior",
            "jp": "S7追加:視敵無双",
            "glen": "S7 Add: Targeted Aggression"
        },
        "S7 Add: Rainbow's Skill": {
            "en": "S7 Add: Rainbow's Skill",
            "jp": "S7追加:六色の巧",
            "glen": "S7 Add: Rainbow Adept"
        },
        "S7 Add: Amended Movement": {
            "en": "S7 Add: Amended Movement",
            "jp": "S7追加:注技縮地",
            "glen": "S7 Add: Concentrated Suidi"
        },
        "S8 Add: HP Up": {
            "en": "S8 Add: HP Up",
            "jp": "S8追加:活器上昇",
            "glen": "S8 Add: Fortified Life Vessel"
        },
        "S8 Add: HP Up 2": {
            "en": "S8 Add: HP Up 2",
            "jp": "S8追加:活器上昇2",
            "glen": "S8 Add: Fortified Life Vessel 2"
        },
        "S8 Add: PP Up": {
            "en": "S8 Add: PP Up",
            "jp": "S8追加:輝器上昇",
            "glen": "S8 Add: Fortified Photon V"
        },
        "S8 Add: PP Up 2": {
            "en": "S8 Add: PP Up 2",
            "jp": "S8追加:輝器上昇2",
            "glen": "S8 Add: Fortified Photon V 2"
        },
        "S8 Add: Sky Dance's Boon": {
            "en": "S8 Add: Sky Dance's Boon",
            "jp": "S8追加:舞空の援",
            "glen": "S8 Add: Skydance Support"
        },
        "S8 Add: Strong Potency": {
            "en": "S8 Add: Strong Potency",
            "jp": "S8追加:服薬強身",
            "glen": "S8 Add: Mighty Medication"
        },
        "S8 Add: High-Minded": {
            "en": "S8 Add: High-Minded",
            "jp": "S8追加:一念滞空",
            "glen": "S8 Add: Resolute Flight"
        },
        "S8 Add: Rainbow's Decay": {
            "en": "S8 Add: Rainbow's Decay",
            "jp": "S8追加:六色の蝕",
            "glen": "S8 Add: Rainbow Erode"
        },
        "Add Ability (Sentence P)": {
            "en": "Add Ability (Sentence P)",
            "jp": "特殊能力(センテンスP)",
            "glen": "Augment R (Sentence P)"
        },
        "Add Ability (Sentence S)": {
            "en": "Add Ability (Sentence S)",
            "jp": "特殊能力(センテンスS)",
            "glen": "Augment R (Sentence S)"
        },
        "Add Ability (Sentence T)": {
            "en": "Add Ability (Sentence T)",
            "jp": "特殊能力(センテンスT)",
            "glen": "Augment R (Sentence T)"
        },
        "Add Ability (Mana Reverie)": {
            "en": "Add Ability (Mana Reverie)",
            "jp": "特殊能力(マナ・レヴリー)",
            "glen": "Augment (Mana Reverie)"
        },
        "Add Ability (Ether F)": {
            "en": "Add Ability (Ether F)",
            "jp": "特殊能力(エーテルF)",
            "glen": "Augment (Aether F)"
        },
        "Add Ability (Astral S)": {
            "en": "Add Ability (Astral S)",
            "jp": "特殊能力(アストラルS)",
            "glen": "Augment (Astral S)"
        },
        "S3 Add: Wise Skill": {
            "en": "S3 Add: Wise Skill",
            "jp": "S3追加:妙技の巧",
            "glen": "S3 Add: Skillful Adept"
        },
        "S3 Add: Rupturing Intent": {
            "en": "S3 Add: Rupturing Intent",
            "jp": "S3追加:裂砕の志",
            "glen": "S3 Add: Partbreaker's Will"
        }
    },
    "potential": {
        "Nothing": {
            "en": "Nothing",
            "jp": "無し",
            "glen": "Nothing"
        },
        "Guidance of Life Lv1 (+2%)": {
            "en": "Guidance of Life Lv1 (+2%)",
            "jp": "生命の導きLv1(+2%)",
            "glen": "Guidance of Life Lv1 (+2%)"
        },
        "Guidance of Life Lv2 (+5%)": {
            "en": "Guidance of Life Lv2 (+5%)",
            "jp": "生命の導きLv2(+5%)",
            "glen": "Guidance of Life Lv2 (+5%)"
        },
        "Guidance of Life Lv3 (+10%)": {
            "en": "Guidance of Life Lv3 (+10%)",
            "jp": "生命の導きLv3(+10%)",
            "glen": "Guidance of Life Lv3 (+10%)"
        }
    },
    "app": {
        "appTitle": {
            "en": "PSO2 JP Affixing Assistant",
            "jp": "PSO2合成アシスタント",
            "glen": "PSO2 Global Affixing Assistant"
        },
        "subHeader": {
            "en": "How it works:",
            "jp": "使い方：",
            "glen": "How it works:"
        },
        "goalFodderTitle": {
            "en": "GOAL",
            "jp": "ゴール",
            "glen": "GOAL"
        },
        "mainFodderTitle": {
            "en": "Main Fodder",
            "jp": "主装備",
            "glen": "Main Fodder"
        },
        "fodderTitle": {
            "en": "Fodder",
            "jp": "装備",
            "glen": "Fodder"
        },
        "materialTitle": {
            "en": "Material Fodder",
            "jp": "材料装備",
            "glen": "Material Fodder"
        },
        "affixLabel": {
            "en": "AFFIX IT",
            "jp": "合成",
            "glen": "AFFIX IT"
        },
        "reAffixLabel": {
            "en": "RE-AFFIX IT",
            "jp": "再合成",
            "glen": "RE-AFFIX IT"
        },
        "cannotAffixLabel": {
            "en": "CANNOT AFFIX",
            "jp": "塞がり",
            "glen": "CANNOT AFFIX"
        },
        "transplantLabel": {
            "en": "TRANSPLANT IT",
            "jp": "移植",
            "glen": "TRANSFER IT"
        },
        "reTransplantLabel": {
            "en": "RE-TRANSPLANT IT",
            "jp": "再移植",
            "glen": "RE-TRANSFER IT"
        },
        "cannotTransplantLabel": {
            "en": "CANNOT TRANSPLANT",
            "jp": "移植不可能",
            "glen": "CANNOT TRANSFER"
        },
        "stageSuccessLabel": {
            "en": "Stage Success",
            "jp": "ステージの成功",
            "glen": "Stage Success"
        },
        "abilitySuccessSpanTitle": {
            "en": "{0}% chance of transfering this ability",
            "jp": "この能力を{0}％の確率で譲渡する",
            "glen": "{0}% chance of transfering this augment"
        },
        "stageTransplantCostLabel": {
            "en": "Stage Transplant Cost",
            "jp": "ステージ移植費用",
            "glen": "Stage Transfer Cost"
        },
        "fodderTransplantCostLabel": {
            "en": "Transplant Cost",
            "jp": "移植費用",
            "glen": "Transfer Cost"
        },
        "factorLabel": {
            "en": "Special Ability Factor",
            "jp": "特殊能力因子",
            "glen": "Augment Factor"
        },
        "fodderSuccessDivTitle": {
            "en": "Success in making this equipment",
            "jp": "この機器の製造に成功",
            "glen": "Success in making this equipment"
        },
        "goalLabel": {
            "en": "Goal",
            "jp": "ゴール",
            "glen": "Goal"
        },
        "fodderLabel": {
            "en": "Fodder",
            "jp": "装備",
            "glen": "Fodder"
        },
        "fodderSuccessLabel": {
            "en": "Success",
            "jp": "成功率",
            "glen": "Success"
        },
        "sameEquipLabel": {
            "en": "Same Equipment",
            "jp": "同じ機器",
            "glen": "Same Equipment"
        },
        "sameEquipDescription": {
            "en": "Is fodder made with identical equipment?",
            "jp": "それは同じ装置で作られていますか？",
            "glen": "Is fodder made with identical equipment?"
        },
        "rateBoostDescription": {
            "en": "Is fodder using Affix Boost Item?",
            "jp": "合成ブーストアイテムが使用されていますか？",
            "glen": "Is fodder using Affix Boost Item?"
        },
        "potDescription": {
            "en": "Does equipment have potential that boosts affixing?",
            "jp": "装置は合成を促進する 潜在能力を持っていますか？",
            "glen": "Does equipment have potential that boosts affixing?"
        },
        "boostWeekOption": {
            "en": "+{0}% Boost Week",
            "jp": "+{0}%ブーストウィーク",
            "glen": "+{0}% Boost Week"
        },
        "boostWeekDescription": {
            "en": "Additional affixing boost from boost week",
            "jp": "ブースト週間からの追加の固定ブースト",
            "glen": "Additional affixing boost from boost week"
        },
        "rateStarsRequest": {
            "en": "Rate the New Formula?",
            "jp": "新しい式を評価しますか？",
            "glen": "Rate the New Formula?"
        },
        "rateStarsRated": {
            "en": "Thank You!",
            "jp": "ありがとう！",
            "glen": "Thank You!"
        },
        "rateStars1AltText": {
            "en": "Terrible",
            "jp": "ひどい",
            "glen": "Terrible"
        },
        "rateStars2AltText": {
            "en": "Bad",
            "jp": "悪い",
            "glen": "Bad"
        },
        "rateStars4AltText": {
            "en": "Great",
            "jp": "良い",
            "glen": "Great"
        },
        "rateStars5AltText": {
            "en": "Incredible",
            "jp": "すごい",
            "glen": "Incredible"
        },
        "shareFormulaTitle": {
            "en": "Link to This Formula",
            "jp": "この数式へのリンク",
            "glen": "Link to This Formula"
        },
        "shareFormulaButton": {
            "en": "Copy to Clipboard (Long)",
            "jp": "クリップボードにコピー(長いです)",
            "glen": "Copy to Clipboard (Long)"
        },
        "shareFormulaButtonShort": {
            "en": "Copy to Clipboard (Short)",
            "jp": "クリップボードにコピー(ショート)",
            "glen": "Copy to Clipboard (Short)"
        },
        "openInSimButton": {
            "en": "Open in Affix Simulator",
            "jp": "合成シミュレータで開く",
            "glen": "Open in Affix Simulator"
        },
        "closeButton": {
            "en": "Close",
            "jp": "閉じる",
            "glen": "Close"
        },
        "filterSearchPlaceholder": {
            "en": "Search affixes..",
            "jp": "能力を検索する。。",
            "glen": "Search affixes.."
        },
        "filterSearchTitle": {
            "en": "Type in an ability name",
            "jp": "能力名を入力して",
            "glen": "Type in an ability name"
        },
        "excludeSearchPlaceholder": {
            "en": "Exclude affixes (,)",
            "jp": "能力を除外（、）",
            "glen": "Exclude affixes (,)"
        },
        "excludeSearchTitle": {
            "en": "Type in ability names to exclude separated by comma",
            "jp": "除外する能力名をコンマで区切って入力します",
            "glen": "Type in ability names to exclude separated by comma"
        },
        "excludeSearchBtn": {
            "en": "Toggle to exclude results",
            "jp": "結果を除外するトグル",
            "glen": "Toggle to exclude results"
        },
        "chooseAffixTitle": {
            "en": "Choose Abilities",
            "jp": "能力を選ぶ",
            "glen": "Choose Abilities"
        },
        "chooseMethodTitle": {
            "en": "Choose Method of Making",
            "jp": "作り方を選ぶ",
            "glen": "Choose Method of Making"
        },
        "reviewTweakTitle": {
            "en": "Review and Tweak",
            "jp": "レビューと微調整",
            "glen": "Review and Tweak"
        },
        "reviewTweakTooltip1": {
            "en": "Select abilities to change places",
            "jp": "場所を変更する能力を選択する",
            "glen": "Select abilities to change places"
        },
        "reviewTweakTooltip2": {
            "en": "And press confirm when ready",
            "jp": "準備ができたら確定を押してください",
            "glen": "And press confirm when ready"
        },
        "transplantTitle": {
            "en": "Special Ability Transplant",
            "jp": "特殊能力移植",
            "glen": "Augment Transfer"
        },
        "transplantTooltip": {
            "en": "<strong>WARNING</strong>: The formula below will cause the Material Fodder to lose some ability slots.",
            "jp": "<strong>警告</strong>: 以下の式では、マテリアルフォダーが一部の能力スロットを失います。",
            "glen": "<strong>WARNING</strong>: The formula below will cause the Material Fodder to lose some ability slots."
        },
        "transplantOptionsLabel": {
            "en": "Transplant Options:",
            "jp": "移植オプション",
            "glen": "Transfer Options:"
        },
        "transplantMaterialSlotLabel": {
            "en": "Material Slot",
            "jp": "材料のスロット数",
            "glen": "Material Slot"
        },
        "transplantAddAbilityItemLabel": {
            "en": "Add Ability Item",
            "jp": "特殊能力追加",
            "glen": "Add Mastery Item"
        },
        "selectButton": {
            "en": "Select",
            "jp": "選択する",
            "glen": "Select"
        },
        "cancelButton": {
            "en": "Cancel",
            "jp": "取消",
            "glen": "Cancel"
        },
        "resetButton": {
            "en": "Reset",
            "jp": "リセット",
            "glen": "Reset"
        },
        "affixingTitle": {
            "en": "Affixing",
            "jp": "合成",
            "glen": "Affixing"
        },
        "reportIssueTitle": {
            "en": "Uh oh...",
            "jp": "ええとああ。。。",
            "glen": "Uh oh..."
        },
        "reportIssueDescription": {
            "en": "Something went wrong while building this affixing formula. Would you like to report this problem?",
            "jp": "この式を作成中に何かがうまくいかなかった。この問題を報告しますか？",
            "glen": "Something went wrong while building this affixing formula. Would you like to report this problem?"
        },
        "reportIssueButtonLabel": {
            "en": "Open GitHub Issues Page",
            "jp": "GitHubの問題ページを開く",
            "glen": "Open GitHub Issues Page"
        },
        "formulaSheetTitle": {
            "en": "Affixing Formula Sheet",
            "jp": "合成フォーミュラシート",
            "glen": "Affixing Formula Sheet"
        },
        "affixUse": {
            "en": "{0}% Making {1} with: {2}",
            "jp": "{0}%と一緒に{1}を作る: {2}",
            "glen": "{0}% Making {1} with: {2}"
        },
        "wishListTitle": {
            "en": "Materials Needed",
            "jp": "必要な材料",
            "glen": "Materials Needed"
        },
        "wishListItemDivider": {
            "en": ", ",
            "jp": "、",
            "glen": ", "
        },
        "anyJunkTitle": {
            "en": "Any Junk",
            "jp": "ジャンク",
            "glen": "Any Junk"
        },
        "wishListFactorDescription": {
            "en": " (Special Ability Factor: {0})",
            "jp": "（特殊能力因子：{0}）",
            "glen": " (Augment Factor: {0})"
        },
        "wishListAbilityItem": {
            "en": "{0}s Fodder: {1}",
            "jp": "{0}スロット装備：{1}",
            "glen": "{0}s Fodder: {1}"
        },
        "wishListAbilityDescription": {
            "en": "({0}x) ",
            "jp": "（{0}倍）",
            "glen": "({0}x) "
        },
        "wishListTransplantCostDescrMulti": {
            "en": "es",
            "jp": "",
            "glen": "es"
        },
        "wishListTransplantCostDescr": {
            "en": "{0} Special Ability Transplant Pass",
            "jp": "{0}特殊能力移植パス",
            "glen": "{0} Augment Transfer Pass"
        },
        "upslottingLabel": {
            "en": "Affix By Upslotting",
            "jp": "増加カウントによる合成",
            "glen": "Affix By Upslotting"
        },
        "upslottingDescription": {
            "en": "Using equipment with less slots to make gear with more slots",
            "jp": "より少ないスロットの装置を使用して、より多くのスロットを備えたギアを作る",
            "glen": "Using equipment with less slots to make gear with more slots"
        },
        "spreadLabel": {
            "en": "Use All Six Fodders",
            "jp": "6つの合成スロットをすべて使用する",
            "glen": "Use All Six Fodders"
        },
        "spreadDescription": {
            "en": "Makes it cheaper to produce the intermediary equipment",
            "jp": "仲介機器を生産するのが安くなる",
            "glen": "Makes it cheaper to produce the intermediary equipment"
        },
        "trainerLabel": {
            "en": "Guidance Trainer +5%",
            "jp": "錬成の導き",
            "glen": "Augment Guidance +5%"
        },
        "trainerDescription": {
            "en": "Increases affixing success rate by 5% (it must be in the main fodder)",
            "jp": "特殊能力の成功率を5％上昇させる(それは主装備の中にある必要があります)",
            "glen": "Increases affixing success rate by 5% (it must be in the main fodder)"
        },
        "affixingSelectionTitle": {
            "en": "Affixing Goal",
            "jp": "合成目標",
            "glen": "Affixing Goal"
        },
        "statsViewerTitle": {
            "en": "Stats",
            "jp": "状態",
            "glen": "Stats"
        },
        "affixChoices": {
            "en": "Choices",
            "jp": "選択肢",
            "glen": "Choices"
        },
        "affixChoiceLabel": {
            "en": "Affix",
            "jp": "合成",
            "glen": "Affix"
        },
        "abilityListTitle": {
            "en": "Ability",
            "jp": "能力",
            "glen": "Ability"
        },
        "abilityFormulasTitle": {
            "en": "How To Make",
            "jp": "作成方法",
            "glen": "How To Make"
        },
        "abilityFormulaUsesTitle": {
            "en": "Used To Make",
            "jp": "合成に使用",
            "glen": "Used To Make"
        },
        "warningMsg": {
            "en": "WARNING! The following abilities can only be transferred via Special Ability Transplant: ",
            "jp": "警告！以下の能力は、特殊能力移植でのみ譲渡できます:",
            "glen": "WARNING! The following augments can only be transferred via Augment Transfers: "
        },
        "transplantButton": {
            "en": "Transplant",
            "jp": "移植",
            "glen": "Transfer"
        },
        "affixButton": {
            "en": "Affix",
            "jp": "合成",
            "glen": "Affix"
        },
        "confirmButton": {
            "en": "Confirm",
            "jp": "確認",
            "glen": "Confirm"
        },
        "menuStartNewDescription": {
            "en": "Check or change the affixing goal",
            "jp": "合成目標を確定または変更する",
            "glen": "Check or change the affixing goal"
        },
        "menuWishListDescription": {
            "en": "View fodders needed",
            "jp": "必要な装備を見る",
            "glen": "View fodders needed"
        },
        "menuFormulaSheetDescription": {
            "en": "View affixing formula sheet",
            "jp": "合成式の表示",
            "glen": "View affixing formula sheet"
        },
        "menuShareDescription": {
            "en": "Share the link to this affixing formula",
            "jp": "この合成式へのリンクを共有する",
            "glen": "Share the link to this affixing formula"
        },
        "menuLanguageDescription": {
            "en": "Switch languase (japanese/日本語)",
            "jp": "スイッチランゲージ（英語/English）",
            "glen": "Switch languase (japanese/日本語)"
        },
        "menuThemesDescription": {
            "en": "Change application theme",
            "jp": "アプリケーションのテーマを変更する",
            "glen": "Change application theme"
        },
        "menuTargetDescription": {
            "en": "Display affixing goal",
            "jp": "合成目標を表示する",
            "glen": "Display affixing goal"
        },
        "menuBugDescription": {
            "en": "Report a problem",
            "jp": "問題を報告",
            "glen": "Report a problem"
        },
        "malulleybovo": {
            "en": "by malulleybovo",
            "jp": "malulleybovoから",
            "glen": "by malulleybovo - Global translation by Ice Winter and Cor Vous"
        }
    },
    "filters": {
        "en": [
            "All",
            "S-ATK",
            "R-ATK",
            "T-ATK",
            "PP",
            "HP",
            "DEX"
        ],
        "jp": [
            "全",
            "打撃力",
            "射撃力",
            "法撃力",
            "PP",
            "HP",
            "技量"
        ],
        "glen": [
            "All",
            "MEL Pwr",
            "RNG Pwr",
            "TEC Pwr",
            "PP",
            "HP",
            "DEX"
        ]
    },
    "statsDisplayOrder": {
        "en": [
            "S-ATK",
            "R-ATK",
            "T-ATK",
            "PP",
            "HP",
            "DEX",
            "S-DEF",
            "R-DEF",
            "T-DEF"
        ],
        "jp": [
            "打撃力",
            "射撃力",
            "法撃力",
            "PP",
            "HP",
            "技量",
            "打撃防御",
            "射撃防御",
            "法撃防御"
        ],
        "glen": [
            "MEL Pwr",
            "RNG Pwr",
            "TEC Pwr",
            "PP",
            "HP",
            "DEX",
            "MEL Def",
            "RNG Def",
            "TEC Def"
        ]
    },
    "synonyms": {
        "en": {
            "ALL": [
                "S-ATK",
                "R-ATK",
                "T-ATK",
                "DEX",
                "S-DEF",
                "R-DEF",
                "T-DEF"
            ],
            "All Resist": [
                "Flame Resist",
                "Ice Resist",
                "Lightning Resist",
                "Wind Resist",
                "Light Resist",
                "Dark Resist"
            ],
            "ATK": [
                "S-ATK",
                "R-ATK",
                "T-ATK"
            ]
        },
        "jp": {
            "ALL": [
                "打撃力",
                "射撃力",
                "法撃力",
                "技量",
                "打撃防御",
                "射撃防御",
                "法撃防御"
            ],
            "All Resist": [
                "炎耐性",
                "氷耐性",
                "雷耐性",
                "風耐性",
                "光耐性",
                "闇耐性"
            ]
        },
        "glen": {
            "ALL": [
                "MEL Pwr",
                "RNG Pwr",
                "TEC Pwr",
                "DEX",
                "MEL Def",
                "RNG Def",
                "TEC Def"
            ],
            "Sovereign Ward": [
                "Fire Resist",
                "Ice Resist",
                "Lightning Resist",
                "Wind Resist",
                "Light Resist",
                "Dark Resist"
            ]
        }
    }
});

var module = module || undefined
if (module && module.exports) {
    module.exports.lang = lang
}
