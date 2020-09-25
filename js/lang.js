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
    "app": {
        appTitle: {
            en: "PSO2 Affixing Assistant(Fan Translations)",
            jp: "PSO2合成アシスタント",
            glen: "PSO2 Affixing Assistant(Global Translations)"
        },
        subHeader: {
            en: "How it works:",
            jp: "使い方：",
            glen: "How it works:"
        },
        goalFodderTitle: {
            en: "GOAL",
            jp: "ゴール",
            glen: "GOAL"
        },
        mainFodderTitle: {
            en: "Main Fodder",
            jp: "主装備",
            glen: "Main Fodder"
        },
        fodderTitle: {
            en: "Fodder",
            jp: "装備",
            glen: "Fodder"
        },
        materialTitle: {
            en: "Material Fodder",
            jp: "材料装備",
            glen: "Material Fodder"
        },
        affixLabel: {
            en: "AFFIX IT",
            jp: "合成",
            glen: "AFFIX IT"
        },
        reAffixLabel: {
            en: "RE-AFFIX IT",
            jp: "再合成",
            glen: "RE-AFFIX IT"
        },
        cannotAffixLabel: {
            en: "CANNOT AFFIX",
            jp: "塞がり",
            glen: "CANNOT AFFIX"
        },
        transplantLabel: {
            en: "TRANSPLANT IT",
            jp: "移植",
            glen: "TRANSFER IT"
        },
        reTransplantLabel: {
            en: "RE-TRANSPLANT IT",
            jp: "再移植",
            glen: "RE-TRANSFER IT"
        },
        cannotTransplantLabel: {
            en: "CANNOT TRANSPLANT",
            jp: "移植不可能",
            glen: "CANNOT TRANSFER"
        },
        stageSuccessLabel: {
            en: "Stage Success",
            jp: "ステージの成功",
            glen: "Stage Success"
        },
        abilitySuccessSpanTitle: {
            en: (rate) => `${rate}% chance of transfering this ability`,
            jp: (rate) => `この能力を${rate}％の確率で譲渡する`,
            glen: (rate) => `${rate}% chance of transfering this augment`
        },
        stageTransplantCostLabel: {
            en: "Stage Transplant Cost",
            jp: "ステージ移植費用",
            glen: "Stage Transfer Cost"
        },
        fodderTransplantCostLabel: {
            en: "Transplant Cost",
            jp: "移植費用",
            glen: "Transfer Cost"
        },
        factorLabel: {
            en: "Special Ability Factor",
            jp: "特殊能力因子",
            glen: "Augment Factor"
        },
        fodderSuccessDivTitle: {
            en: "Success in making this equipment",
            jp: "この機器の製造に成功",
            glen: "Success in making this equipment"
        },
        goalLabel: {
            en: "Goal",
            jp: "ゴール",
            glen: "Goal"
        },
        fodderLabel: {
            en: "Fodder",
            jp: "装備",
            glen: "Fodder"
        },
        fodderSuccessLabel: {
            en: "Success",
            jp: "成功率",
            glen: "Success"
        },
        sameEquipLabel: {
            en: "Same Equipment",
            jp: "同じ機器",
            glen: "Same Equipment"
        },
        sameEquipDescription: {
            en: "Is fodder made with identical equipment?",
            jp: "それは同じ装置で作られていますか？",
            glen: "Is fodder made with identical equipment?"
        },
        rateBoostDescription: {
            en: "Is fodder using Affix Boost Item?",
            jp: "合成ブーストアイテムが使用されていますか？",
            glen: "Is fodder using Affix Boost Item?"
        },
        potDescription: {
            en: "Does equipment have potential that boosts affixing?",
            jp: "装置は合成を促進する 潜在能力を持っていますか？",
            glen: "Does equipment have potential that boosts affixing?"
        },
        boostWeekOption: {
            en: (option) => `+${option}% Boost Week`,
            jp: (option) => `+${option}%ブーストウィーク`,
            glen: (option) => `+${option}% Boost Week`
        },
        boostWeekDescription: {
            en: "Additional affixing boost from boost week",
            jp: "ブースト週間からの追加の固定ブースト",
            glen: "Additional affixing boost from boost week"
        },
        rateStarsRequest: {
            en: "Rate the New Formula?",
            jp: "新しい式を評価しますか？",
            glen: "Rate the New Formula?"
        },
        rateStarsRated: {
            en: "Thank You!",
            jp: "ありがとう！",
            glen: "Thank You!"
        },
        rateStars1AltText: {
            en: "Terrible",
            jp: "ひどい",
            glen: "Terrible"
        },
        rateStars2AltText: {
            en: "Bad",
            jp: "悪い",
            glen: "Bad"
        },
        rateStars4AltText: {
            en: "Great",
            jp: "良い",
            glen: "Great"
        },
        rateStars5AltText: {
            en: "Incredible",
            jp: "すごい",
            glen: "Incredible"
        },
        shareFormulaTitle: {
            en: "Link to This Formula",
            jp: "この数式へのリンク",
            glen: "Link to This Formula"
        },
        shareFormulaButton: {
            en: "Copy to Clipboard (Long)",
            jp: "クリップボードにコピー(長いです)",
            glen: "Copy to Clipboard (Long)"
        },
        shareFormulaButtonShort: {
            en: "Copy to Clipboard (Short)",
            jp: "クリップボードにコピー(ショート)",
            glen: "Copy to Clipboard (Short)"
        },
        openInSimButton: {
            en: "Open in Affix Simulator",
            jp: "合成シミュレータで開く",
            glen: "Open in Affix Simulator"
        },
        closeButton: {
            en: "Close",
            jp: "閉じる",
            glen: "Close"
        },
        filterSearchPlaceholder: {
            en: "Search affixes..",
            jp: "能力を検索する。。",
            glen: "Search affixes.."
        },
        filterSearchTitle: {
            en: "Type in an ability name",
            jp: "能力名を入力して",
            glen: "Type in an ability name"
        },
        excludeSearchPlaceholder: {
            en: "Exclude affixes (,)",
            jp: "能力を除外（、）",
            glen: "Exclude affixes (,)"
        },
        excludeSearchTitle: {
            en: "Type in ability names to exclude separated by comma",
            jp: "除外する能力名をコンマで区切って入力します",
            glen: "Type in ability names to exclude separated by comma"
        },
        excludeSearchBtn: {
            en: "Toggle to exclude results",
            jp: "結果を除外するトグル",
            glen: "Toggle to exclude results"
        },
        chooseAffixTitle: {
            en: "Choose Abilities",
            jp: "能力を選ぶ",
            glen: "Choose Abilities"
        },
        chooseMethodTitle: {
            en: "Choose Method of Making",
            jp: "作り方を選ぶ",
            glen: "Choose Method of Making"
        },
        reviewTweakTitle: {
            en: "Review and Tweak",
            jp: "レビューと微調整",
            glen: "Review and Tweak"
        },
        reviewTweakTooltip1: {
            en: "Select abilities to change places",
            jp: "場所を変更する能力を選択する",
            glen: "Select abilities to change places"
        },
        reviewTweakTooltip2: {
            en: "And press confirm when ready",
            jp: "準備ができたら確定を押してください",
            glen: "And press confirm when ready"
        },
        transplantTitle: {
            en: "Special Ability Transplant",
            jp: "特殊能力移植",
            glen: "Augment Transfer"
        },
        transplantTooltip: {
            en: "<strong>WARNING</strong>: The formula below will cause the Material Fodder to lose some ability slots.",
            jp: "<strong>警告</strong>: 以下の式では、マテリアルフォダーが一部の能力スロットを失います。",
            glen: "<strong>WARNING</strong>: The formula below will cause the Material Fodder to lose some ability slots."
        },
        transplantOptionsLabel: {
            en: "Transplant Options:",
            jp: "移植オプション",
            glen: "Transfer Options:"
        },
        transplantMaterialSlotLabel: {
            en: "Material Slot",
            jp: "材料のスロット数",
            glen: "Material Slot"
        },
        transplantAddAbilityItemLabel: {
            en: "Add Ability Item",
            jp: "特殊能力追加",
            glen: "Add Mastery Item"
        },
        selectButton: {
            en: "Select",
            jp: "選択する",
            glen: "Select"
        },
        cancelButton: {
            en: "Cancel",
            jp: "キャンセル",
            glen: "Cancel"
        },
        resetButton: {
            en: "Reset",
            jp: "リセット",
            glen: "Reset"
        },
        affixingTitle: {
            en: "Affixing",
            jp: "合成",
            glen: "Affixing"
        },
        reportIssueTitle: {
            en: "Uh oh...",
            jp: "ええとああ。。。",
            glen: "Uh oh..."
        },
        reportIssueDescription: {
            en: "Something went wrong while building this affixing formula. Would you like to report this problem?",
            jp: "この式を作成中に何かがうまくいかなかった。この問題を報告しますか？",
            glen: "Something went wrong while building this affixing formula. Would you like to report this problem?"
        },
        reportIssueButtonLabel: {
            en: "Open GitHub Issues Page",
            jp: "GitHubの問題ページを開く",
            glen: "Open GitHub Issues Page"
        },
        formulaSheetTitle: {
            en: "Affixing Formula Sheet",
            jp: "合成フォーミュラシート",
            glen: "Affixing Formula Sheet"
        },
        affixUse: {
            en: (successRate, affixName, choicesString) => `${successRate}% Making ${affixName} with: ${choicesString}`,
            jp: (successRate, affixName, choicesString) => `${successRate}%と一緒に${affixName}を作る: ${choicesString}`,
            glen: (successRate, affixName, choicesString) => `${successRate}% Making ${affixName} with: ${choicesString}`
        },
        wishListTitle: {
            en: "Materials Needed",
            jp: "必要な材料",
            glen: "Materials Needed"
        },
        wishListItemDivider: {
            en: ', ',
            jp: '、',
            glen: ','
        },
        wishListFactorDescription: {
            en: (name) => ` (Special Ability Factor: ${name})`,
            jp: (name) => `（特殊能力因子：${name}）`,
            glen: (name) => ` (Augment Factor: ${name})`
        },
        wishListAbilityItem: {
            en: (fodder) => `${fodder.size()}s Fodder: ${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `Any Junk` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_en).sort().join(lang.app.wishListItemDivider.en)}`,
            jp: (fodder) => `${fodder.size()}スロット装備：${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `ジャンク` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_jp).sort().join(lang.app.wishListItemDivider.jp)}`,
            glen: (fodder) => `${fodder.size()}s Fodder: ${fodder.affixes.filter(a => !a.code.startsWith('Z')).length == 0 ? `Any Junk` : fodder.affixes.filter(a => !a.code.startsWith('Z'))
                .map(a => lang[a.code].name_en).sort().join(lang.app.wishListItemDivider.en)}`
        },
        wishListAbilityDescription: {
            en: (amount, description) => `${(amount > 1) ? `(${amount}x) ` : ``}${description}`,
            jp: (amount, description) => `${(amount > 1) ? `（${amount}倍）` : ``}${description}`,
            glen: (amount, description) => `${(amount > 1) ? `(${amount}x) ` : ``}${description}`
        },
        wishListTransplantCostDescr: {
            en: (count) => `${count} Special Ability Transplant Pass${count > 1 ? `es` : ``}`,
            jp: (count) => `${count}特殊能力移植パス`,
            glen: (count) => `${count} Augment Transfer Pass${count > 1 ? `es` : ``}`
        },
        upslottingLabel: {
            en: "Affix By Upslotting",
            jp: "増加カウントによる合成",
            glen: "Affix By Upslotting"
        },
        upslottingDescription: {
            en: "Using equipment with less slots to make gear with more slots",
            jp: "より少ないスロットの装置を使用して、より多くのスロットを備えたギアを作る",
            glen: "Using equipment with less slots to make gear with more slots"
        },
        spreadLabel: {
            en: "Use All Six Fodders",
            jp: "6つの合成スロットをすべて使用する",
            glen: "Use All Six Fodders"
        },
        spreadDescription: {
            en: "Makes it cheaper to produce the intermediary equipment",
            jp: "仲介機器を生産するのが安くなる",
            glen: "Makes it cheaper to produce the intermediary equipment"
        },
        trainerLabel: {
            en: "Guidance Trainer +5%",
            jp: "錬成の導き",
            glen: "Guidance Trainer +5%"
        },
        trainerDescription: {
            en: "Increases affixing success rate by 5% (it must be in the main fodder)",
            jp: "特殊能力の成功率を5％上昇させる(それは主装備の中にある必要があります)",
            glen: "Increases affixing success rate by 5% (it must be in the main fodder)"
        },
        affixingSelectionTitle: {
            en: "Affixing Goal",
            jp: "合成目標",
            glen: "Affixing Goal"
        },
        statsViewerTitle: {
            en: "Stats",
            jp: "状態",
            glen: "Stats"
        },
        affixChoices: {
            en: "Choices",
            jp: "選択肢",
            glen: "Choices"
        },
        affixChoiceLabel: {
            en: "Affix",
            jp: "合成",
            glen: "Affix"
        },
        abilityListTitle: {
            en: "Ability",
            jp: "能力",
            glen: "Ability"
        },
        abilityFormulasTitle: {
            en: "How To Make",
            jp: "作成方法",
            glen: "How To Make"
        },
        abilityFormulaUsesTitle: {
            en: "Used To Make",
            jp: "合成に使用",
            glen: "Used To Make"
        },
        warningMsg: {
            en: abilities => `WARNING! The following abilities can only be transferred via Special Ability Transplant: ${abilities.reduce((a, b, c) => a + (c === 0 ? '' : ', ') + b )}`,
            jp: abilities => `警告！以下の能力は、特殊能力移植でのみ譲渡できます:${abilities.reduce((a, b, c) => a + (c === 0 ? '' : '、') + b)}`,
            glen: abilities => `WARNING! The following augments can only be transferred via Augment Transfers: ${abilities.reduce((a, b, c) => a + (c === 0 ? '' : ', ') + b )}`
        },
        cancelButton: {
            en: "Cancel",
            jp: "取消",
            glen: "Cancel"
        },
        transplantButton: {
            en: "Transplant",
            jp: "移植",
            glen: "Transfer"
        },
        affixButton: {
            en: "Affix",
            jp: "合成",
            glen: "Affix"
        },
        confirmButton: {
            en: "Confirm",
            jp: "確認",
            glen: "Confirm"
        },
        menuStartNewDescription: {
            en: "Check or change the affixing goal",
            jp: "合成目標を確定または変更する",
            glen: "Check or change the affixing goal"
        },
        menuWishListDescription: {
            en: "View fodders needed",
            jp: "必要な装備を見る",
            glen: "View fodders needed"
        },
        menuFormulaSheetDescription: {
            en: "View affixing formula sheet",
            jp: "合成式の表示",
            glen: "View affixing formula sheet"
        },
        menuShareDescription: {
            en: "Share the link to this affixing formula",
            jp: "この合成式へのリンクを共有する",
            glen: "Share the link to this affixing formula"
        },
        menuLanguageDescription: {
            en: "Switch languase (japanese/日本語)",
            jp: "スイッチランゲージ（英語/English）",
            glen: "Switch languase (japanese/日本語)"
        },
        menuThemesDescription: {
            en: "Change application theme",
            jp: "アプリケーションのテーマを変更する",
            glen: "Change application theme"
        },
        menuTargetDescription: {
            en: "Display affixing goal",
            jp: "合成目標を表示する",
            glen: "Display affixing goal"
        },
        menuBugDescription: {
            en: "Report a problem",
            jp: "問題を報告",
            glen: "Report a problem"
        },
        malulleybovo: {
            en: "by malulleybovo",
            jp: "malulleybovoから",
            glen: "by malulleybovo - Converted to Global by Ice Winter and Cor Vous"
        }
    },
    "filters": {
        glen: ["All", "MEL Pwr", "RNG Pwr", "TEC Pwr", "PP", "HP", "DEX"],
        en: ["All", "S-ATK", "R-ATK", "T-ATK", "PP", "HP", "DEX"],
        jp: ["全", "打撃力", "射撃力", "法撃力", "PP", "HP", "技量"]
    },
    "statsDisplayOrder": {
        glen: ["MEL Pwr", "RNG Pwr", "TEC Pwr", "PP", "HP", "DEX", "MEL Def", "RNG Def", "TEC Def"], // Others follow after
        en: ["S-ATK", "R-ATK", "T-ATK", "PP", "HP", "DEX", "S-DEF", "R-DEF", "T-DEF"], // Others follow after
        jp: ["打撃力", "射撃力", "法撃力", "PP", "HP", "技量", "打撃防御", "射撃防御", "法撃防御"] // Others follow after
    },
    "synonyms": {
        en: {
            "ALL": ["S-ATK", "R-ATK", "T-ATK", "DEX", "S-DEF", "R-DEF", "T-DEF"],
            "All Resist": ["Flame Resist", "Ice Resist", "Lightning Resist", "Wind Resist", "Light Resist", "Dark Resist"]
        },
        jp: {
            "ALL": ["打撃力", "射撃力", "法撃力", "技量", "打撃防御", "射撃防御", "法撃防御"],
            "All Resist": ["炎耐性", "氷耐性", "雷耐性", "風耐性", "光耐性", "闇耐性"]
        },
        glen: {
            "ALL": ["MEL Pwr", "RNG Pwr", "TEC Pwr", "DEX", "MEL Def", "RNG Def", "TEC Def"],
            "All Resist": ["Fire Resist", "Ice Resist", "Lightning Resist", "Wind Resist", "Light Resist", "Dark Resist"]
        }
    },
    "support": {
        "Nothing": {
            en: "Nothing",
            jp: "無し",
            glen: "Nothing"
        },
        "Ability Success Rate +5%": {
            en: "Ability Success Rate +5%",
            jp: "能力追加成功率+5%",
            glen: "Augmentation Aid +5%"
        },
        "Ability Success Rate +10%": {
            en: "Ability Success Rate +10%",
            jp: "能力追加成功率+10%",
            glen: "Augmentation Aid +10%"
        },
        "Ability Success Rate +20%": {
            en: "Ability Success Rate +20%",
            jp: "能力追加成功率+20%",
            glen: "Augmentation Aid +20%"
        },
        "Ability Success Rate +30%": {
            en: "Ability Success Rate +30%",
            jp: "能力追加成功率+30%",
            glen: "Augmentation Aid +30%"
        },
        "Ability Success Rate +40%": {
            en: "Ability Success Rate +40%",
            jp: "能力追加成功率+40%",
            glen: "Augmentation Aid +40%"
        },
        "Ability Success Rate +45%": {
            en: "Ability Success Rate +45%",
            jp: "能力追加成功率+45%",
            glen: "Augmentation Aid +45%"
        },
        "Ability Success Rate +50%": {
            en: "Ability Success Rate +50%",
            jp: "能力追加成功率+50%",
            glen: "Augmentation Aid +50%"
        },
        "Ability Success Rate +55%": {
            en: "Ability Success Rate +55%",
            jp: "能力追加成功率+55%",
            glen: "Augmentation Aid +55%"
        },
        "Ability Success Rate +60%": {
            en: "Ability Success Rate +60%",
            jp: "能力追加成功率+60%",
            glen: "Augmentation Aid +60%"
        }
    },
    "additional": {
        "Nothing": {
            en: "Nothing",
            jp: "無し",
            glen: "Nothing"
        },
        "Add Ability (HP)": {
            en: "Add Ability (HP)",
            jp: "特殊能力追加(HP)",
            glen:"Affix Augment (HP)"
        },
        "Add Ability (PP)": {
            en: "Add Ability (PP)",
            jp: "特殊能力追加(PP)",
            glen:"Affix Augment (PP)"
        },
        "Add Ability (S-ATK)": {
            en: "Add Ability (S-ATK)",
            jp: "特殊能力追加(打撃)",
            glen:"Affix Augment (Melee)"
        },
        "Add Ability (R-ATK)": {
            en: "Add Ability (R-ATK)",
            jp: "特殊能力追加(射撃)",
            glen:"Affix Augment (Range)"
        },
        "Add Ability (T-ATK)": {
            en: "Add Ability (T-ATK)",
            jp: "特殊能力追加(法撃)",
            glen:"Affix Augment (Technique)"
        },
        "Add Ability (Tenora)": {
            en: "Add Ability (Tenora)",
            jp: "特殊能力追加(テノラ)",
            glen:"*Affix Augment (Tenora)"
        },
        "Add Ability (GRM)": {
            en: "Add Ability (GRM)",
            jp: "特殊能力追加(GRM)",
            glen:"*Affix Augment (GRM)"
        },
        "Add Ability (Yohmei)": {
            en: "Add Ability (Yohmei)",
            jp: "特殊能力追加(ヨウメイ)",
            glen:"*Affix Augment (Yohmei)"
        },
        "Add Ability (HP&PP)": {
            en: "Add Ability (HP&PP)",
            jp: "特殊能力追加(HP&PP)",
            glen:"Affix Augment (HP & PP)"
        },
        "Add Ability (HP&PP/2)": {
            en: "Add Ability (HP&PP/2)",
            jp: "特殊能力(HP&PP/2)",
            glen:"Affix Augment (HP & PP/2)"
        },
        "Add Ability (HP&PP/3)": {
            en: "Add Ability (HP&PP/3)",
            jp: "特殊能力(HP&PP/3)",
            glen:"Affix Augment (HP & PP/3)"
        },
        "Add Ability (Grand HP)": {
            en: "Add Ability (Grand HP)",
            jp: "特殊能力(グランドHP)",
            glen:"*Affix Augment (Grand HP)"
        },
        "Add Ability (S-ATK&PP)": {
            en: "Add Ability (S-ATK&PP)",
            jp: "特殊能力追加(打撃&PP)",
            glen:"Affix Augment (Melee & PP)"
        },
        "Add Ability (S-ATK&PP/2)": {
            en: "Add Ability (S-ATK&PP/2)",
            jp: "特殊能力(打撃&PP/2)",
            glen:"Affix Augment (Melee & PP/2)"
        },
        "Add Ability (S-ATK&PP/3)": {
            en: "Add Ability (S-ATK&PP/3)",
            jp: "特殊能力(打撃&PP/3)",
            glen:"Affix Augment (Melee & PP/3)"
        },
        "Add Ability (Grand P)": {
            en: "Add Ability (Grand P)",
            jp: "特殊能力(グランドP)",
            glen:"*Affix Augment (Grand P)"
        },
        "Add Ability (R-ATK&PP)": {
            en: "Add Ability (R-ATK&PP)",
            jp: "特殊能力追加(射撃&PP)",
            glen:"Affix Augment (Range & PP)"
        },
        "Add Ability (R-ATK&PP/2)": {
            en: "Add Ability (R-ATK&PP/2)",
            jp: "特殊能力(射撃&PP/2)",
            glen:"Affix Augment (Range & PP/2)"
        },
        "Add Ability (R-ATK&PP/3)": {
            en: "Add Ability (R-ATK&PP/3)",
            jp: "特殊能力(射撃&PP/3)",
            glen:"Affix Augment (Range & PP/3)"
        },
        "Add Ability (Grand S)": {
            en: "Add Ability (Grand S)",
            jp: "特殊能力(グランドS)",
            glen:"*Affix Augment (Grand S)"
        },
        "Add Ability (T-ATK&PP)": {
            en: "Add Ability (T-ATK&PP)",
            jp: "特殊能力追加(法撃&PP)",
            glen:"Affix Augment (Technique & PP)"
        },
        "Add Ability (T-ATK&PP/2)": {
            en: "Add Ability (T-ATK&PP/2)",
            jp: "特殊能力(法撃&PP/2)",
            glen:"Affix Augment (Technique & PP/2)"
        },
        "Add Ability (T-ATK&PP/3)": {
            en: "Add Ability (T-ATK&PP/3)",
            jp: "特殊能力(法撃&PP/3)",
            glen:"Affix Augment (Technique & PP/3)"
        },
        "Add Ability (Grand T)": {
            en: "Add Ability (Grand T)",
            jp: "特殊能力(グランドT)",
            glen:"*Affix Augment (Grand T)"
        },
        "Add Ability (Grand PP)": {
            en: "Add Ability (Grand PP)",
            jp: "特殊能力(グランドPP)",
            glen:"*Affix Augment (Grand PP)"
        },
        "Add Ability (Offense Focus)": {
            en: "Add Ability (Offense Focus)",
            jp: "特殊能力追加(攻撃総合)",
            glen:"Affix Augment (General Attack)"
        },
        "Add Ability (Offense Focus/2)": {
            en: "Add Ability (Offense Focus/2)",
            jp: "特殊能力追加(攻撃総合/2)",
            glen:"Affix Augment (General Attack/2)"
        },
        "Add Ability (Defense Focus)": {
            en: "Add Ability (Defense Focus)",
            jp: "特殊能力追加(防御総合)",
            glen:"Affix Augment (General Defense)"
        },
        "Add Ability (Defense Focus/2)": {
            en: "Add Ability (Defense Focus/2)",
            jp: "特殊能力追加(防御総合/2)",
            glen:"Affix Augment (General Defense/2)"
        },
        "Add Ability (Attack Inherit)": {
            en: "Add Ability (Attack Inherit)",
            jp: "特殊能力追加(攻撃継承)",
            glen:"Affix Augment (Attack Succession)"
        },
        "Add Ability (Defense Inherit)": {
            en: "Add Ability (Defense Inherit)",
            jp: "特殊能力追加(防御継承)",
            glen:"Affix Augment (Defense Succession)"
        },
        "Add Ability (Photon Inherit)": {
            en: "Add Ability (Photon Inherit)",
            jp: "特殊能力追加(心身継承)",
            glen:"Affix Augment (Mind/Body Succession)"
        },
        "Add Ability (Mark Receptor)": {
            en: "Add Ability (Mark Receptor)",
            jp: "特殊能力追加(マークレセプター)",
            glen:"*Affix Augment (Mark Receptor)"
        },
        "Add Ability (Divine Receptor)": {
            en: "Add Ability (Divine Receptor)",
            jp: "特殊能力追加(ディバインレセプター)",
            glen:"*Affix Augment (Divine Receptor)"
        },
        "Add Ability (Catalyst Receptor)": {
            en: "Add Ability (Catalyst Receptor)",
            jp: "特殊能力追加(カタリストレセプター)",
            glen:"*Affix Augment (Catalyst Receptor)"
        },
        "Add Ability (Sentence P)": {
            en: "Add Ability (Sentence P)",
            jp: "特殊能力(センテンスP)",
            glen:"*Affix Augment (Sentence P)"
        },
        "Add Ability (Sentence S)": {
            en: "Add Ability (Sentence S)",
            jp: "特殊能力(センテンスS)",
            glen:"*Affix Augment (Sentence S)"
        },
        "Add Ability (Sentence T)": {
            en: "Add Ability (Sentence T)",
            jp: "特殊能力(センテンスT)",
            glen:"*Affix Augment (Sentence T)"
        },
        "Add Ability (Power VI)": {
            en: "Add Ability (Power VI)",
            jp: "特殊能力(パワーⅥ)",
            glen:"*Affix Augment (Might VI)"
        },
        "Add Ability (Shoot VI)": {
            en: "Add Ability (Shoot VI)",
            jp: "特殊能力(シュートⅥ)",
            glen:"*Affix Augment (Precision VI)"
        },
        "Add Ability (Technique VI)": {
            en: "Add Ability (Technique VI)",
            jp: "特殊能力(テクニックⅥ)",
            glen:"*Affix Augment (Casting VI)"
        },
        "Add Ability (Ability IV)": {
            en: "Add Ability (Ability IV)",
            jp: "特殊能力(アビリティⅣ)",
            glen:"*Affix Augment (Mastery IV)"
        },
        "Add Ability (Mark Joyo)": {
            en: "Add Ability (Mark Joyo)",
            jp: "特殊能力(マーク・ジョイオ)",
            glen:"*Affix Augment (Mark Joy)"
        },
        "Add Ability (Mark Couragena)": {
            en: "Add Ability (Mark Couragena)",
            jp: "特殊能力(マーク・カレジナ)",
            glen:"*Affix Augment (Mark Courage)"
        },
        "Add Ability (Mark Angar)": {
            en: "Add Ability (Mark Angar)",
            jp: "特殊能力(マーク・アンガル)",
            glen:"*Affix Augment (Mark Anger)"
        },
        "Add Ability (Mark Grif)": {
            en: "Add Ability (Mark Grif)",
            jp: "特殊能力(マーク・グリフ)",
            glen:"*Affix Augment (Mark Grief)"
        },
        "S1 Add: Photon Reduction 2": {
            en: "S1 Add: Photon Reduction 2",
            jp: "S1追加:光子縮減2",
            glen: "*S1 Add: Photon Reduction 2"
        },
        "S1 Add: Brilliant Ruin 2": {
            en: "S1 Add: Brilliant Ruin 2",
            jp: "S1追加:滅域輝与2",
            glen: "*S1 Add: Brilliant Ruin 2"
        },
        "S1 Add: Flowing Intent": {
            en: "S1 Add: Flowing Intent",
            jp: "S1追加:時流の志",
            glen: "*S1 Add: Flowing Intent"
        },
        "S1 Add: Lethal Intent": {
            en: "S1 Add: Lethal Intent",
            jp: "S1追加:死中の志",
            glen: "*S1 Add: Lethal Intent"
        },
        "S1 Add: Reckless Strike": {
            en: "S1 Add: Reckless Strike",
            jp: "S1追加:賭死の撃",
            glen: "*S1 Add: Reckless Strike"
        },
        "S1 Add: Eclipsing Decay": {
            en: "S1 Add: Eclipsing Decay",
            jp: "S1追加:失力の蝕",
            glen: "*S1 Add: Eclipsing Decay"
        },
        "S1 Add: Augment Intent": {
            en: "S1 Add: Augment Intent",
            jp: "S1追加:錬成の志",
            glen: "*S1 Add: Augment Intent"
        },
        "S1 Add: Photon Balance": {
            en: "S1 Add: Photon Balance",
            jp: "S1追加:光子の秤",
            glen: "*S1 Add: Photon Balance"
        },
        "S1 Add: Collaborator Liberator": {
            en: "S1 Add: Collaborator Liberator",
            jp: "S1追加:戦友の加護",
            glen: "*S1 Add: Collaborator Liberator"
        },
        "S1 Add: Wise Skill": {
            en: "S1 Add: Wise Skill",
            jp: "S1追加:妙技の巧",
            glen: "*S1 Add: Wise Skill"
        },
        "S1 Add: Radiating Grace": {
            en: "S1 Add: Radiating Grace",
            jp: "S1追加:輝勢の恵",
            glen: "*S1 Add: Radiating Grace"
        },
        "S1 Add: Skilled Brilliance": {
            en: "S1 Add: Skilled Brilliance",
            jp: "S1追加:輝充の志",
            glen: "*S1 Add: Skilled Brilliance"
        },
        "S1 Add: Red Petal Flash": {
            en: "S1 Add: Red Petal Flash",
            jp: "S1追加:花ノ赤閃",
            glen: "*S1 Add: Red Petal Flash"
        },
        "S1 Add: Blue Ocean Flash": {
            en: "S1 Add: Blue Ocean Flash",
            jp: "S1追加:海ノ青閃",
            glen: "*S1 Add: Blue Ocean Flash"
        },
        "S1 Add: White Snow Flash": {
            en: "S1 Add: White Snow Flash",
            jp: "S1追加:雪ノ白閃",
            glen: "*S1 Add: White Snow Flash"
        },
        "S1 Add: Yellow Moon Flash": {
            en: "S1 Add: Yellow Moon Flash",
            jp: "S1追加:月ノ黄閃",
            glen: "*S1 Add: Yellow Moon Flash"
        },
        "S1 Add: Green Leaf Flash": {
            en: "S1 Add: Green Leaf Flash",
            jp: "S1追加:葉ノ緑閃",
            glen: "*S1 Add: Green Leaf Flash"
        },
        "S1 Add: Black Shadow Flash": {
            en: "S1 Add: Black Shadow Flash",
            jp: "S1追加:影ノ黒閃",
            glen: "*S1 Add: Black Shadow Flash"
        },
        "S1 Add: Skilled Strike": {
            en: "S1 Add: Skilled Strike",
            jp: "S1追加:妙撃の志",
            glen: "*S1 Add: Skilled Strike"
        },
        "S1 Add: Flowing Exhilaration": {
            en: "S1 Add: Flowing Exhilaration",
            jp: "S1追加:時流活与",
            glen: "*S1 Add: Flowing Exhilaration"
        },
        "S1 Add: Guardian Armor": {
            en: "S1 Add: Guardian Armor",
            jp: "S1追加:守護の備",
            glen: "*S1 Add: Guardian Deftnessor"
        },
        "S1 Add: Rupturing Excess": {
            en: "S1 Add: Rupturing Excess",
            jp: "S1追加:裂砕の剰",
            glen: "*S1 Add: Rupturing Excess"
        },
        "S1 Add: Spirited Response": {
            en: "S1 Add: Spirited Response",
            jp: "S1追加:気輝応変",
            glen: "*S1 Add: Spirited Response"
        },
        "S1 Add: Rupturing Intent": {
            en: "S1 Add: Rupturing Intent",
            jp: "S1追加:裂砕の志",
            glen: "*S1 Add: Rupturing Intent"
        },
        "S1 Add: Double-Edged Sword": {
            en: "S1 Add: Double-Edged Sword",
            jp: "S1追加:諸刃の撃",
            glen: "*S1 Add: Double-Edged Sword"
        },
        "S1 Add: Radiant Strike": {
            en: "S1 Add: Radiant Strike",
            jp: "S1追加:輝剰の撃",
            glen: "*S1 Add: Radiant Strike"
        },
        "S2 Add: Umbrageous Melody": {
            en: "S2 Add: Umbrageous Melody",
            jp: "S2追加:月葉影の歌",
            glen: "*S2 Add: Umbrageous Melody"
        },
        "S2 Add: Nature's Reduction 2": {
            en: "S2 Add: Nature's Reduction 2",
            jp: "S2追加:花海雪の縮減2",
            glen: "*S2 Add: Nature's Reduction 2"
        },
        "S2 Add: Umbrageous Radiance 2": {
            en: "S2 Add: Umbrageous Radiance 2",
            jp: "S2追加:月葉影の輝剰2",
            glen: "*S2 Add: Umbrageous Radiance 2"
        },
        "S2 Add: Wise Skill 2": {
            en: "S2 Add: Wise Skill 2",
            jp: "S2追加:妙技の巧2",
            glen: "*S2 Add: Wise Skill 2"
        },
        "S2 Add: Skilled Strike 2": {
            en: "S2 Add: Skilled Strike 2",
            jp: "S2追加:妙撃の志2",
            glen: "*S2 Add: Skilled Strike 2"
        },
        "S2 Add: Radiant Strike 2": {
            en: "S2 Add: Radiant Strike 2",
            jp: "S2追加:輝剰の撃2",
            glen: "*S2 Add: Radiant Strike 2"
        },
        "S2 Add: Runner's High": {
            en: "S2 Add: Runner's High",
            jp: "S2追加:走者高揚",
            glen: "*S2 Add: Runner's High"
        },
        "S2 Add: Skill Reduction": {
            en: "S2 Add: Skill Reduction",
            jp: "S2追加:技巧縮減",
            glen: "*S2 Add: Skill Reduction"
        },
        "S2 Add: Heavenly Keeper": {
            en: "S2 Add: Heavenly Keeper",
            jp: "S2追加:保天輝地",
            glen: "*S2 Add: Heavenly Keeper"
        },
        "S2 Add: Flowing Armor": {
            en: "S2 Add: Flowing Armor",
            jp: "S2追加:時流の護",
            glen: "*S2 Add: Flowing Deftnessor"
        },
        "S2 Add: Flowing Exhilaration": {
            en: "S2 Add: Flowing Exhilaration",
            jp: "S2追加:時流活与",
            glen: "*S2 Add: Flowing Exhilaration"
        },
        "S2 Add: Photon Reduction": {
            en: "S2 Add: Photon Reduction",
            jp: "S2追加:光子縮減",
            glen: "*S2 Add: Photon Reduction"
        },
        "S2 Add: Sturdy Recovery": {
            en: "S2 Add: Sturdy Recovery",
            jp: "S2追加:剛乱活与",
            glen: "*S2 Add: Sturdy Recovery"
        },
        "S2 Add: Cursed Radiance": {
            en: "S2 Add: Cursed Radiance",
            jp: "S2追加:災転輝与",
            glen: "*S2 Add: Cursed Radiance"
        },
        "S2 Add: Flowing Grace": {
            en: "S2 Add: Flowing Grace",
            jp: "S2追加:時流の恵",
            glen: "*S2 Add: Flowing Grace"
        },
        "S2 Add: Rupturing Excess": {
            en: "S2 Add: Rupturing Excess",
            jp: "S2追加:裂砕の剰",
            glen: "*S2 Add: Rupturing Excess"
        },
        "S2 Add: Double-Edged Sword": {
            en: "S2 Add: Double-Edged Sword",
            jp: "S2追加:諸刃の撃",
            glen: "*S2 Add: Double-Edged Sword"
        },
        "S2 Add: Rainbow's Intent": {
            en: "S2 Add: Rainbow's Intent",
            jp: "S2追加:六色の志",
            glen: "*S2 Add: Rainbow's Intent"
        },
        "S2 Add: Rainbow's Exhilaration": {
            en: "S2 Add: Rainbow's Exhilaration",
            jp: "S2追加:六色の活与",
            glen: "*S2 Add: Rainbow's Exhilaration"
        },
        "S2 Add: Skilled Brilliance": {
            en: "S2 Add: Skilled Brilliance",
            jp: "S2追加:輝充の志",
            glen: "*S2 Add: Skilled Brilliance"
        },
        "S3 Add: Nature's Melody": {
            en: "S3 Add: Nature's Melody",
            jp: "S3追加:花海雪の歌",
            glen: "*S3 Add: Nature's Melody"
        },
        "S3 Add: Nature's Gleam 2": {
            en: "S3 Add: Nature's Gleam 2",
            jp: "S3追加:花海雪の輝勢2",
            glen: "*S3 Add: Nature's Gleam 2"
        },
        "S3 Add: Flowing Grace": {
            en: "S3 Add: Flowing Grace",
            jp: "S3追加:時流の恵",
            glen: "*S3 Add: Flowing Grace"
        },
        "S3 Add: Flowing Exhilaration 2": {
            en: "S3 Add: Flowing Exhilaration 2",
            jp: "S3追加:時流活与2",
            glen: "*S3 Add: Flowing Exhilaration 2"
        },
        "S3 Add: Radiating Grace 2": {
            en: "S3 Add: Radiating Grace 2",
            jp: "S3追加:輝勢の恵2",
            glen: "*S3 Add: Radiating Grace 2"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:撃流の備",
            glen: "*S3 Add: Calming Exhilaration"
        },
        "S3 Add: Curtailed Strike": {
            en: "S3 Add: Curtailed Strike",
            jp: "S3追加:撃流縮減",
            glen: "*S3 Add: Curtailed Strike"
        },
        "S3 Add: Wise Strike": {
            en: "S3 Add: Wise Strike",
            jp: "S3追加:撃流の巧",
            glen: "*S3 Add: Wise Strike"
        },
        "S3 Add: Flowing Courage": {
            en: "S3 Add: Flowing Courage",
            jp: "S3追加:時流の勇",
            glen: "*S3 Add: Flowing Courage"
        },
        "S3 Add: Fortifying Strike": {
            en: "S3 Add: Fortifying Strike",
            jp: "S3追加:撃流の備",
            glen: "*S3 Add: Fortifying Strike"
        },
        "S3 Add: Radiant Strike": {
            en: "S3 Add: Radiant Strike",
            jp: "S3追加:輝剰の撃",
            glen: "*S3 Add: Radiant Strike"
        },
        "S3 Add: Skilled Strike": {
            en: "S3 Add: Skilled Strike",
            jp: "S3追加:妙撃の志",
            glen: "*S3 Add: Skilled Strike"
        },
        "S3 Add: Offensive Intent": {
            en: "S3 Add: Offensive Intent",
            jp: "S3追加:剛撃の志",
            glen: "*S3 Add: Offensive Intent"
        },
        "S3 Add: Vital Intent": {
            en: "S3 Add: Vital Intent",
            jp: "S3追加:活実の志",
            glen: "*S3 Add: Vital Intent"
        },
        "S3 Add: Wise Skill": {
            en: "S3 Add: Wise Skill",
            jp: "S3追加:妙技の巧",
            glen: "*S3 Add: Wise Skill"
        },
        "S3 Add: Rupturing Intent": {
            en: "S3 Add: Rupturing Intent",
            jp: "S3追加:裂砕の志",
            glen: "*S3 Add: Rupturing Intent"
        },
        "S3 Add: Brilliant Ruin": {
            en: "S3 Add: Brilliant Ruin",
            jp: "S3追加:滅域輝与",
            glen: "*S3 Add: Brilliant Ruin"
        },
        "S3 Add: Cursed Radiance": {
            en: "S3 Add: Cursed Radiance",
            jp: "S3追加:災転輝与",
            glen: "*S3 Add: Cursed Radiance"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:静心活与",
            glen: "*S3 Add: Calming Exhilaration"
        },
        "S3 Add: Powering Intent": {
            en: "S3 Add: Powering Intent",
            jp: "S3追加:強闘の志",
            glen: "*S3 Add: Mighting Intent"
        },
        "S3 Add: Rainbow's Reduction": {
            en: "S3 Add: Rainbow's Reduction",
            jp: "S3追加:六色の縮減",
            glen: "*S3 Add: Rainbow's Reduction"
        },
        "S3 Add: Rainbow's Radiance": {
            en: "S3 Add: Rainbow's Radiance",
            jp: "S3追加:六色の輝剰",
            glen: "*S3 Add: Rainbow's Radiance"
        },
        "S3 Add: Rainbow's Gleam": {
            en: "S3 Add: Rainbow's Gleam",
            jp: "S3追加:六色の輝勢",
            glen: "*S3 Add: Rainbow's Gleam"
        },
        "S3 Add: Nature's Melody 2": {
            en: "S3 Add: Nature's Melody 2",
            jp: "S3追加:花海雪の歌2",
            glen: "*S3 Add: Nature's Melody 2"
        },
        "S4 Add: Heavenly Protection": {
            en: "S4 Add: Heavenly Protection",
            jp: "S4追加:天輝の守護",
            glen: "*S4 Add: Heavenly Protection"
        },
        "S4 Add: Calming Intent": {
            en: "S4 Add: Calming Intent",
            jp: "S4追加:静心の志",
            glen: "*S4 Add: Calming Intent"
        },
        "S4 Add: Mysterious Strike": {
            en: "S4 Add: Mysterious Strike",
            jp: "S4追加:妙撃の秤",
            glen: "*S4 Add: Mysterious Strike"
        },
        "S4 Add: Saint Shield": {
            en: "S4 Add: Saint Shield",
            jp: "S4追加:聖者の盾",
            glen: "*S4 Add: Saint Shield"
        },
        "S4 Add: Harmonized Rainbow": {
            en: "S4 Add: Harmonized Rainbow",
            jp: "S4追加:六色の輝秤",
            glen: "*S4 Add: Harmonized Rainbow"
        },
        "S4 Add: Raising Pursuit": {
            en: "S4 Add: Raising Pursuit",
            jp: "S4追加:累加追撃",
            glen: "*S4 Add: Raising Pursuit"
        },
        "S4 Add: Pursuing Eclipse": {
            en: "S4 Add: Pursuing Eclipse",
            jp: "S4追加:追蝕の巧",
            glen: "*S4 Add: Pursuing Eclipse"
        },
        "S4 Add: Cursed Rainbow": {
            en: "S4 Add: Cursed Rainbow",
            jp: "S4追加:六色の災転",
            glen: "*S4 Add: Cursed Rainbow"
        },
        "S4 Add: Colossal Radiance": {
            en: "S4 Add: Colossal Radiance",
            jp: "S4追加:強闘輝与",
            glen: "*S4 Add: Colossal Radiance"
        },
        "S4 Add: Evasion Training": {
            en: "S4 Add: Evasion Training",
            jp: "S4追加:回避訓練",
            glen: "*S4 Add: Evasion Training"
        },
        "S4 Add: Radiant Eclipse": {
            en: "S4 Add: Radiant Eclipse",
            jp: "S4追加:追蝕輝剰",
            glen: "*S4 Add: Radiant Eclipse"
        },
        "S4 Add: Shared Ruin": {
            en: "S4 Add: Shared Ruin",
            jp: "S4追加:滅域分与",
            glen: "*S4 Add: Shared Ruin"
        },
        "S5 Add: Anthesis Cultivation": {
            en: "S5 Add: Anthesis Cultivation",
            jp: "S5追加:錬成萌花",
            glen: "*S5 Add: Anthesis Cultivation"
        },
        "S5 Add: Instant Invocation": {
            en: "S5 Add: Instant Invocation",
            jp: "S5追加:瞬術略唱",
            glen: "*S5 Add: Instant Invocation"
        },
        "S5 Add: Tethered Eclipse": {
            en: "S5 Add: Tethered Eclipse",
            jp: "S5追加:追蝕の縛",
            glen: "*S5 Add: Tethered Eclipse"
        },
        "S5 Add: Vigorous Response": {
            en: "S5 Add: Vigorous Response",
            jp: "S5追加:活器応変",
            glen: "*S5 Add: Vigorous Response"
        },
        "S5 Add: Angelic Respite": {
            en: "S5 Add: Angelic Respite",
            jp: "S5追加:槍機天悠",
            glen: "*S5 Add: Angelic Respite"
        },
        "S6 Add: Ironclad Illness": {
            en: "S6 Add: Ironclad Illness",
            jp: "S6追加:癒蝕頑強",
            glen: "*S6 Add: Ironclad Illness"
        },
        "S6 Add: Guardian Armor": {
            en: "S6 Add: Guardian Armor",
            jp: "S6追加:守護の備",
            glen: "*S6 Add: Guardian Deftnessor"
        },
        "S6 Add: Heroic Howl": {
            en: "S6 Add: Heroic Howl",
            jp: "S6追加:英雄咆哮",
            glen: "*S6 Add: Heroic Howl"
        },
        "S6 Add: Soaring Ballet": {
            en: "S6 Add: Soaring Ballet",
            jp: "S6追加:翔機天舞",
            glen: "*S6 Add: Soaring Ballet"
        },
        "S6 Add: Guardian's Essence": {
            en: "S6 Add: Guardian's Essence",
            jp: "S6追加:機魂の守護",
            glen: "*S6 Add: Guardian's Essence"
        },
        "S6 Add: Evasion Whistle": {
            en: "S6 Add: Evasion Whistle",
            jp: "S6追加:回避の口笛",
            glen: "*S6 Add: Evasion Whistle"
        },
        "S6 Add: Long Night Star": {
            en: "S6 Add: Long Night Star",
            jp: "S6追加:長夜の明星",
            glen: "*S6 Add: Long Night Star"
        },
        "S6 Add: Overlimit": {
            en: "S6 Add: Overlimit",
            jp: "S6追加:超限活器",
            glen: "*S6 Add: Overlimit"
        },
        "S7 Add: S-ATK Up": {
            en: "S7 Add: S-ATK Up",
            jp: "S7追加:打撃上昇",
            glen: "*S7 Add: MEL Pwr Up"
        },
        "S7 Add: R-ATK Up": {
            en: "S7 Add: R-ATK Up",
            jp: "S7追加:射撃上昇",
            glen: "*S7 Add: RNG Pwr Up"
        },
        "S7 Add: T-ATK Up": {
            en: "S7 Add: T-ATK Up",
            jp: "S7追加:法撃上昇",
            glen: "*S7 Add: TEC Pwr Up"
        },
        "S7 Add: Zenith Impact": {
            en: "S7 Add: Zenith Impact",
            jp: "S7追加:瞬撃の極",
            glen: "*S7 Add: Zenith Impact"
        },
        "S7 Add: Increased Efficiency": {
            en: "S7 Add: Increased Efficiency",
            jp: "S7追加:薬効増大",
            glen: "*S7 Add: Increased Efficiency"
        },
        "S7 Add: Mind Merge": {
            en: "S7 Add: Mind Merge",
            jp: "S7追加:以心伝心",
            glen: "*S7 Add: Genius Merge"
        },
        "S7 Add: Sentinel's Gift": {
            en: "S7 Add: Sentinel's Gift",
            jp: "S7追加:法護の与",
            glen: "*S7 Add: Sentinel's Gift"
        },
        "S7 Add: Glowing Grace": {
            en: "S7 Add: Glowing Grace",
            jp: "S7追加:輝静の恵",
            glen: "*S7 Add: Glowing Grace"
        },
        "S8 Add: HP Up": {
            en: "S8 Add: HP Up",
            jp: "S8追加:活器上昇",
            glen: "*S8 Add: HP Up"
        },
        "S8 Add: PP Up": {
            en: "S8 Add: PP Up",
            jp: "S8追加:輝器上昇",
            glen: "*S8 Add: PP Up"
        },
        "S8 Add: Strong Potency": {
            en: "S8 Add: Strong Potency",
            jp: "S8追加:服薬強身",
            glen: "*S8 Add: Strong Potency"
        },
        "S8 Add: High-Minded": {
            en: "S8 Add: High-Minded",
            jp: "S8追加:一念滞空",
            glen: "*S8 Add: High-Geniused"
        },
        "S8 Add: HP Up 2": {
            en: "S8 Add: HP Up 2",
            jp: "S8追加:活器上昇2",
            glen: "*S8 Add: HP Up 2"
        },
        "S8 Add: Sky Dance's Boon": {
            en: "S8 Add: Sky Dance's Boon",
            jp: "S8追加:舞空の援",
            glen: "*S8 Add: Sky Dance's Boon"
        }
    },
    "potential": {
        "Nothing": {
            en: "Nothing",
            jp: "無し",
            glen: "Nothing"
        },
        "Guidance of Life Lv1 (+2%)": {
            en: "Guidance of Life Lv1 (+2%)",
            jp: "生命の導きLv1(+2%)",
            glen: "Life\'s Guidance Lv1 (+2%)"
        },
        "Guidance of Life Lv2 (+5%)": {
            en: "Guidance of Life Lv2 (+5%)",
            jp: "生命の導きLv2(+5%)",
            glen: "Life\'s Guidance Lv2 (+5%)"
        },
        "Guidance of Life Lv3 (+10%)": {
            en: "Guidance of Life Lv3 (+10%)",
            jp: "生命の導きLv3(+10%)",
            glen: "Life\'s Guidance Lv3 (+10%)"
        }
    },
    "AA01": {
        name_en: "Power I",
        name_jp: "パワーⅠ",
        name_glen: "Might I",
        effect_en: "S-ATK(+10)",
        effect_jp: "打撃力(+10)",
        effect_glen: "MEL Pwr(+10)"
    },
    "AA02": {
        name_en: "Power II",
        name_jp: "パワーⅡ",
        name_glen: "Might II",
        effect_en: "S-ATK(+20)",
        effect_jp: "打撃力(+20)",
        effect_glen: "MEL Pwr(+20)"
    },
    "AA03": {
        name_en: "Power III",
        name_jp: "パワーⅢ",
        name_glen: "Might III",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "AA04": {
        name_en: "Power IV",
        name_jp: "パワーⅣ",
        name_glen: "Might IV",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_glen: "MEL Pwr(+35)"
    },
    "AA05": {
        name_en: "Power V",
        name_jp: "パワーⅤ",
        name_glen: "Might V",
        effect_en: "S-ATK(+40)",
        effect_jp: "打撃力(+40)",
        effect_glen: "MEL Pwr(+40)"
    },
    "AA06": {
        name_en: "Power VI",
        name_jp: "パワーⅥ",
        name_glen: "Might VI",
        effect_en: "S-ATK(+45)",
        effect_jp: "打撃力(+45)",
        effect_glen: "MEL Pwr(+45)"
    },
    "AB01": {
        name_en: "Shoot I",
        name_jp: "シュートⅠ",
        name_glen: "Precision I",
        effect_en: "R-ATK(+10)",
        effect_jp: "射撃力(+10)",
        effect_glen: "RNG Pwr(+10)"
    },
    "AB02": {
        name_en: "Shoot II",
        name_jp: "シュートⅡ",
        name_glen: "Precision II",
        effect_en: "R-ATK(+20)",
        effect_jp: "射撃力(+20)",
        effect_glen: "RNG Pwr(+20)"
    },
    "AB03": {
        name_en: "Shoot III",
        name_jp: "シュートⅢ",
        name_glen: "Precision III",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "AB04": {
        name_en: "Shoot IV",
        name_jp: "シュートⅣ",
        name_glen: "Precision IV",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_glen: "RNG Pwr(+35)"
    },
    "AB05": {
        name_en: "Shoot V",
        name_jp: "シュートⅤ",
        name_glen: "Precision V",
        effect_en: "R-ATK(+40)",
        effect_jp: "射撃力(+40)",
        effect_glen: "RNG Pwr(+40)"
    },
    "AB06": {
        name_en: "Shoot VI",
        name_jp: "シュートⅥ",
        name_glen: "Precision VI",
        effect_en: "R-ATK(+45)",
        effect_jp: "射撃力(+45)",
        effect_glen: "RNG Pwr(+45)"
    },
    "AC01": {
        name_en: "Technique I",
        name_jp: "テクニックⅠ",
        name_glen: "Casting I",
        effect_en: "T-ATK(+10)",
        effect_jp: "法撃力(+10)",
        effect_glen: "TEC Pwr(+10)"
    },
    "AC02": {
        name_en: "Technique II",
        name_jp: "テクニックⅡ",
        name_glen: "Casting II",
        effect_en: "T-ATK(+20)",
        effect_jp: "法撃力(+20)",
        effect_glen: "TEC Pwr(+20)"
    },
    "AC03": {
        name_en: "Technique III",
        name_jp: "テクニックⅢ",
        name_glen: "Casting III",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "AC04": {
        name_en: "Technique IV",
        name_jp: "テクニックⅣ",
        name_glen: "Casting IV",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_glen: "TEC Pwr(+35)"
    },
    "AC05": {
        name_en: "Technique V",
        name_jp: "テクニックⅤ",
        name_glen: "Casting V",
        effect_en: "T-ATK(+40)",
        effect_jp: "法撃力(+40)",
        effect_glen: "TEC Pwr(+40)"
    },
    "AC06": {
        name_en: "Technique VI",
        name_jp: "テクニックⅥ",
        name_glen: "Casting VI",
        effect_en: "T-ATK(+45)",
        effect_jp: "法撃力(+45)",
        effect_glen: "TEC Pwr(+45)"
    },
    "AD01": {
        name_en: "Arm I",
        name_jp: "アームⅠ",
        name_glen: "Deftness I",
        effect_en: "DEX(+10)",
        effect_jp: "技量(+10)",
        effect_glen: "DEX(+10)"
    },
    "AD02": {
        name_en: "Arm II",
        name_jp: "アームⅡ",
        name_glen: "Deftness II",
        effect_en: "DEX(+20)",
        effect_jp: "技量(+20)",
        effect_glen: "DEX(+20)"
    },
    "AD03": {
        name_en: "Arm III",
        name_jp: "アームⅢ",
        name_glen: "Deftness III",
        effect_en: "DEX(+30)",
        effect_jp: "技量(+30)",
        effect_glen: "DEX(+30)"
    },
    "AD04": {
        name_en: "Arm IV",
        name_jp: "アームⅣ",
        name_glen: "Deftness IV",
        effect_en: "DEX(+35)",
        effect_jp: "技量(+35)",
        effect_glen: "DEX(+35)"
    },
    "AD05": {
        name_en: "Arm V",
        name_jp: "アームⅤ",
        name_glen: "Deftness V",
        effect_en: "DEX(+40)",
        effect_jp: "技量(+40)",
        effect_glen: "DEX(+40)"
    },
    "BA01": {
        name_en: "Body I",
        name_jp: "ボディⅠ",
        name_glen: "Toughness I",
        effect_en: "S-DEF(+10)",
        effect_jp: "打撃防御(+10)",
        effect_glen: "MEL Def(+10)"
    },
    "BA02": {
        name_en: "Body II",
        name_jp: "ボディⅡ",
        name_glen: "Toughness II",
        effect_en: "S-DEF(+20)",
        effect_jp: "打撃防御(+20)",
        effect_glen: "MEL Def(+20)"
    },
    "BA03": {
        name_en: "Body III",
        name_jp: "ボディⅢ",
        name_glen: "Toughness III",
        effect_en: "S-DEF(+30)",
        effect_jp: "打撃防御(+30)",
        effect_glen: "MEL Def(+30)"
    },
    "BA04": {
        name_en: "Body IV",
        name_jp: "ボディⅣ",
        name_glen: "Toughness IV",
        effect_en: "S-DEF(+35)",
        effect_jp: "打撃防御(+35)",
        effect_glen: "MEL Def(+35)"
    },
    "BA05": {
        name_en: "Body V",
        name_jp: "ボディⅤ",
        name_glen: "Toughness V",
        effect_en: "S-DEF(+40)",
        effect_jp: "打撃防御(+40)",
        effect_glen: "MEL Def(+40)"
    },
    "BB01": {
        name_en: "React I",
        name_jp: "リアクトⅠ",
        name_glen: "Reflex I",
        effect_en: "R-DEF(+10)",
        effect_jp: "射撃防御(+10)",
        effect_glen: "RNG Def(+10)"
    },
    "BB02": {
        name_en: "React II",
        name_jp: "リアクトⅡ",
        name_glen: "Reflex II",
        effect_en: "R-DEF(+20)",
        effect_jp: "射撃防御(+20)",
        effect_glen: "RNG Def(+20)"
    },
    "BB03": {
        name_en: "React III",
        name_jp: "リアクトⅢ",
        name_glen: "Reflex III",
        effect_en: "R-DEF(+30)",
        effect_jp: "射撃防御(+30)",
        effect_glen: "RNG Def(+30)"
    },
    "BB04": {
        name_en: "React IV",
        name_jp: "リアクトⅣ",
        name_glen: "Reflex IV",
        effect_en: "R-DEF(+35)",
        effect_jp: "射撃防御(+35)",
        effect_glen: "RNG Def(+35)"
    },
    "BB05": {
        name_en: "React V",
        name_jp: "リアクトⅤ",
        name_glen: "Reflex V",
        effect_en: "R-DEF(+40)",
        effect_jp: "射撃防御(+40)",
        effect_glen: "RNG Def(+40)"
    },
    "BC01": {
        name_en: "Mind I",
        name_jp: "マインドⅠ",
        name_glen: "Genius I",
        effect_en: "T-DEF(+10)",
        effect_jp: "法撃防御(+10)",
        effect_glen: "TEC Def(+10)"
    },
    "BC02": {
        name_en: "Mind II",
        name_jp: "マインドⅡ",
        name_glen: "Genius II",
        effect_en: "T-DEF(+20)",
        effect_jp: "法撃防御(+20)",
        effect_glen: "TEC Def(+20)"
    },
    "BC03": {
        name_en: "Mind III",
        name_jp: "マインドⅢ",
        name_glen: "Genius III",
        effect_en: "T-DEF(+30)",
        effect_jp: "法撃防御(+30)",
        effect_glen: "TEC Def(+30)"
    },
    "BC04": {
        name_en: "Mind IV",
        name_jp: "マインドⅣ",
        name_glen: "Genius IV",
        effect_en: "T-DEF(+35)",
        effect_jp: "法撃防御(+35)",
        effect_glen: "TEC Def(+35)"
    },
    "BC05": {
        name_en: "Mind V",
        name_jp: "マインドⅤ",
        name_glen: "Genius V",
        effect_en: "T-DEF(+40)",
        effect_jp: "法撃防御(+40)",
        effect_glen: "TEC Def(+40)"
    },
    "EA01": {
        name_en: "Stamina I",
        name_jp: "スタミナⅠ",
        name_glen: "Stamina I",
        effect_en: "HP(+20)",
        effect_jp: "HP(+20)",
        effect_glen: "HP(+20)"
    },
    "EA02": {
        name_en: "Stamina II",
        name_jp: "スタミナⅡ",
        name_glen: "Stamina II",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "EA03": {
        name_en: "Stamina III",
        name_jp: "スタミナⅢ",
        name_glen: "Stamina III",
        effect_en: "HP(+50)",
        effect_jp: "HP(+50)",
        effect_glen: "HP(+50)"
    },
    "EA04": {
        name_en: "Stamina IV",
        name_jp: "スタミナⅣ",
        name_glen: "Stamina IV",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)",
        effect_glen: "HP(+60)"
    },
    "EA05": {
        name_en: "Stamina V",
        name_jp: "スタミナⅤ",
        name_glen: "Stamina V",
        effect_en: "HP(+70)",
        effect_jp: "HP(+70)",
        effect_glen: "HP(+70)"
    },
    "EA06": {
        name_en: "Stamina VI",
        name_jp: "スタミナⅤI",
        name_glen: "Stamina VI",
        effect_en: "HP(+70)",
        effect_jp: "HP(+70)",
        effect_glen: "HP(+70)"
    },
    "EB01": {
        name_en: "Spirita I",
        name_jp: "スピリタⅠ",
        name_glen: "Spirit I",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)",
        effect_glen: "PP(+2)"
    },
    "EB02": {
        name_en: "Spirita II",
        name_jp: "スピリタⅡ",
        name_glen: "Spirit II",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)",
        effect_glen: "PP(+3)"
    },
    "EB03": {
        name_en: "Spirita III",
        name_jp: "スピリタⅢ",
        name_glen: "Spirit III",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "EB04": {
        name_en: "Spirita IV",
        name_jp: "スピリタⅣ",
        name_glen: "Spirit IV",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_glen: "PP(+5)"
    },
    "EB05": {
        name_en: "Spirita V",
        name_jp: "スピリタⅤ",
        name_glen: "Spirit V",
        effect_en: "PP(+6)",
        effect_jp: "PP(+6)",
        effect_glen: "PP(+6)"
    },
    "EB06": {
        name_en: "Spirita VI",
        name_jp: "スピリタⅥ",
        name_glen: "Spirit VI",
        effect_en: "PP(+7)",
        effect_jp: "PP(+7)",
        effect_glen: "PP(+7)"
    },
    "FA01": {
        name_en: "Ability I",
        name_jp: "アビリティⅠ",
        name_glen: "Mastery I",
        effect_en: "ALL(+5)",
        effect_jp: "ALL(+5)",
        effect_glen: "ALL(+5)"
    },
    "FA02": {
        name_en: "Ability II",
        name_jp: "アビリティⅡ",
        name_glen: "Mastery II",
        effect_en: "ALL(+10)",
        effect_jp: "ALL(+10)",
        effect_glen: "ALL(+10)"
    },
    "FA03": {
        name_en: "Ability III",
        name_jp: "アビリティⅢ",
        name_glen: "Mastery III",
        effect_en: "ALL(+15)",
        effect_jp: "ALL(+15)",
        effect_glen: "ALL(+15)"
    },
    "FA04": {
        name_en: "Ability IV",
        name_jp: "アビリティⅣ",
        name_glen: "Mastery IV",
        effect_en: "ALL(+20)",
        effect_jp: "ALL(+20)",
        effect_glen: "ALL(+20)"
    },
    "FA05": {
        name_en: "Ability V",
        name_jp: "アビリティⅤ",
        name_glen: "Mastery V",
        effect_en: "ALL(+25)",
        effect_jp: "ALL(+25)",
        effect_glen: "ALL(+25)"
    },
    "HA01": {
        name_en: "Blow Resist I",
        name_jp: "ブロウレジストⅠ",
        name_glen: "Impact Ward I",
        effect_en: "Strike Resist(+3)",
        effect_jp: "打撃耐性(+3)",
        effect_glen: "MEL Resist(+3)"
    },
    "HA02": {
        name_en: "Blow Resist II",
        name_jp: "ブロウレジストⅡ",
        name_glen: "Impact Ward II",
        effect_en: "Strike Resist(+4)",
        effect_jp: "打撃耐性(+4)",
        effect_glen: "MEL Resist(+4)"
    },
    "HA03": {
        name_en: "Blow Resist III",
        name_jp: "ブロウレジストⅢ",
        name_glen: "Impact Ward III",
        effect_en: "Strike Resist(+5)",
        effect_jp: "打撃耐性(+5)",
        effect_glen: "MEL Resist(+5)"
    },
    "HA04": {
        name_en: "Blow Resist IV",
        name_jp: "ブロウレジストⅣ",
        name_glen: "Impact Ward IV",
        effect_en: "Strike Resist(+6)",
        effect_jp: "打撃耐性(+6)",
        effect_glen: "MEL Resist(+6)"
    },
    "HA05": {
        name_en: "Blow Resist V",
        name_jp: "ブロウレジストⅤ",
        name_glen: "Impact Ward V",
        effect_en: "Strike Resist(+7)",
        effect_jp: "打撃耐性(+7)",
        effect_glen: "MEL Resist(+7)"
    },
    "HB01": {
        name_en: "Shoot Resist I",
        name_jp: "ショットレジストⅠ",
        name_glen: "Projectile Ward I",
        effect_en: "Range Resist(+3)",
        effect_jp: "射撃耐性(+3)",
        effect_glen: "RNG Resist(+3)"
    },
    "HB02": {
        name_en: "Shoot Resist II",
        name_jp: "ショットレジストⅡ",
        name_glen: "Projectile Ward II",
        effect_en: "Range Resist(+4)",
        effect_jp: "射撃耐性(+4)",
        effect_glen: "RNG Resist(+4)"
    },
    "HB03": {
        name_en: "Shoot Resist III",
        name_jp: "ショットレジストⅢ",
        name_glen: "Projectile Ward III",
        effect_en: "Range Resist(+5)",
        effect_jp: "射撃耐性(+5)",
        effect_glen: "RNG Resist(+5)"
    },
    "HB04": {
        name_en: "Shoot Resist IV",
        name_jp: "ショットレジストⅣ",
        name_glen: "Projectile Ward IV",
        effect_en: "Range Resist(+6)",
        effect_jp: "射撃耐性(+6)",
        effect_glen: "RNG Resist(+6)"
    },
    "HB05": {
        name_en: "Shoot Resist V",
        name_jp: "ショットレジストⅤ",
        name_glen: "Projectile Ward V",
        effect_en: "Range Resist(+7)",
        effect_jp: "射撃耐性(+7)",
        effect_glen: "RNG Resist(+7)"
    },
    "HC01": {
        name_en: "Mind Resist I",
        name_jp: "マインドレジストⅠ",
        name_glen: "Technique Ward I",
        effect_en: "Tech Resist(+3)",
        effect_jp: "法撃耐性(+3)",
        effect_glen: "TEC Resist(+3)"
    },
    "HC02": {
        name_en: "Mind Resist II",
        name_jp: "マインドレジストⅡ",
        name_glen: "Technique Ward II",
        effect_en: "Tech Resist(+4)",
        effect_jp: "法撃耐性(+4)",
        effect_glen: "TEC Resist(+4)"
    },
    "HC03": {
        name_en: "Mind Resist III",
        name_jp: "マインドレジストⅢ",
        name_glen: "Technique Ward III",
        effect_en: "Tech Resist(+5)",
        effect_jp: "法撃耐性(+5)",
        effect_glen: "TEC Resist(+5)"
    },
    "HC04": {
        name_en: "Mind Resist IV",
        name_jp: "マインドレジストⅣ",
        name_glen: "Technique Ward IV",
        effect_en: "Tech Resist(+6)",
        effect_jp: "法撃耐性(+6)",
        effect_glen: "TEC Resist(+6)"
    },
    "HC05": {
        name_en: "Mind Resist V",
        name_jp: "マインドレジストⅤ",
        name_glen: "Technique Ward V",
        effect_en: "Tech Resist(+7)",
        effect_jp: "法撃耐性(+7)",
        effect_glen: "TEC Resist(+7)"
    },
    "HI01": {
        name_en: "Fire Resist I",
        name_jp: "フレイムレジストⅠ",
        name_glen: "Fire Resist I",
        effect_en: "Flame Resist(+3)",
        effect_jp: "炎耐性(+3)",
        effect_glen: "Fire Resist(+3)"
    },
    "HI02": {
        name_en: "Fire Resist II",
        name_jp: "フレイムレジストⅡ",
        name_glen: "Fire Resist II",
        effect_en: "Flame Resist(+4)",
        effect_jp: "炎耐性(+4)",
        effect_glen: "Fire Resist(+4)"
    },
    "HI03": {
        name_en: "Fire Resist III",
        name_jp: "フレイムレジストⅢ",
        name_glen: "Fire Resist III",
        effect_en: "Flame Resist(+5)",
        effect_jp: "炎耐性(+5)",
        effect_glen: "Fire Resist(+5)"
    },
    "HI04": {
        name_en: "Fire Resist IV",
        name_jp: "フレイムレジストⅣ",
        name_glen: "Fire Resist IV",
        effect_en: "Flame Resist(+6)",
        effect_jp: "炎耐性(+6)",
        effect_glen: "Fire Resist(+6)"
    },
    "HI05": {
        name_en: "Fire Resist V",
        name_jp: "フレイムレジストⅤ",
        name_glen: "Fire Resist V",
        effect_en: "Flame Resist(+7)",
        effect_jp: "炎耐性(+7)",
        effect_glen: "Fire Resist(+7)"
    },
    "HJ01": {
        name_en: "Ice Resist I",
        name_jp: "アイスレジストⅠ",
        name_glen: "Ice Resist I",
        effect_en: "Ice Resist(+3)",
        effect_jp: "氷耐性(+3)",
        effect_glen: "Ice Resist(+3)"
    },
    "HJ02": {
        name_en: "Ice Resist II",
        name_jp: "アイスレジストⅡ",
        name_glen: "Ice Resist II",
        effect_en: "Ice Resist(+4)",
        effect_jp: "氷耐性(+4)",
        effect_glen: "Ice Resist(+4)"
    },
    "HJ03": {
        name_en: "Ice Resist III",
        name_jp: "アイスレジストⅢ",
        name_glen: "Ice Resist III",
        effect_en: "Ice Resist(+5)",
        effect_jp: "氷耐性(+5)",
        effect_glen: "Ice Resist(+5)"
    },
    "HJ04": {
        name_en: "Ice Resist IV",
        name_jp: "アイスレジストⅣ",
        name_glen: "Ice Resist IV",
        effect_en: "Ice Resist(+6)",
        effect_jp: "氷耐性(+6)",
        effect_glen: "Ice Resist(+6)"
    },
    "HJ05": {
        name_en: "Ice Resist V",
        name_jp: "アイスレジストⅤ",
        name_glen: "Ice Resist V",
        effect_en: "Ice Resist(+7)",
        effect_jp: "氷耐性(+7)",
        effect_glen: "Ice Resist(+7)"
    },
    "HK01": {
        name_en: "Shock Resist I",
        name_jp: "ショックレジストⅠ",
        name_glen: "Lightning Ward I",
        effect_en: "Lightning Resist(+3)",
        effect_jp: "雷耐性(+3)",
        effect_glen: "Lightning Resist(+3)"
    },
    "HK02": {
        name_en: "Shock Resist II",
        name_jp: "ショックレジストⅡ",
        name_glen: "Lightning Ward II",
        effect_en: "Lightning Resist(+4)",
        effect_jp: "雷耐性(+4)",
        effect_glen: "Lightning Resist(+4)"
    },
    "HK03": {
        name_en: "Shock Resist III",
        name_jp: "ショックレジストⅢ",
        name_glen: "Lightning Ward III",
        effect_en: "Lightning Resist(+5)",
        effect_jp: "雷耐性(+5)",
        effect_glen: "Lightning Resist(+5)"
    },
    "HK04": {
        name_en: "Shock Resist IV",
        name_jp: "ショックレジストⅣ",
        name_glen: "Lightning Ward IV",
        effect_en: "Lightning Resist(+6)",
        effect_jp: "雷耐性(+6)",
        effect_glen: "Lightning Resist(+6)"
    },
    "HK05": {
        name_en: "Shock Resist V",
        name_jp: "ショックレジストⅤ",
        name_glen: "Lightning Ward V",
        effect_en: "Lightning Resist(+7)",
        effect_jp: "雷耐性(+7)",
        effect_glen: "Lightning Resist(+7)"
    },
    "HL01": {
        name_en: "Wind Resist I",
        name_jp: "ウィンドレジストⅠ",
        name_glen: "Gale Ward I",
        effect_en: "Wind Resist(+3)",
        effect_jp: "風耐性(+3)",
        effect_glen: "Wind Resist(+3)"
    },
    "HL02": {
        name_en: "Wind Resist II",
        name_jp: "ウィンドレジストⅡ",
        name_glen: "Gale Ward II",
        effect_en: "Wind Resist(+4)",
        effect_jp: "風耐性(+4)",
        effect_glen: "Wind Resist(+4)"
    },
    "HL03": {
        name_en: "Wind Resist III",
        name_jp: "ウィンドレジストⅢ",
        name_glen: "Gale Ward III",
        effect_en: "Wind Resist(+5)",
        effect_jp: "風耐性(+5)",
        effect_glen: "Wind Resist(+5)"
    },
    "HL04": {
        name_en: "Wind Resist IV",
        name_jp: "ウィンドレジストⅣ",
        name_glen: "Gale Ward IV",
        effect_en: "Wind Resist(+6)",
        effect_jp: "風耐性(+6)",
        effect_glen: "Wind Resist(+6)"
    },
    "HL05": {
        name_en: "Wind Resist V",
        name_jp: "ウィンドレジストⅤ",
        name_glen: "Gale Ward V",
        effect_en: "Wind Resist(+7)",
        effect_jp: "風耐性(+7)",
        effect_glen: "Wind Resist(+7)"
    },
    "HM01": {
        name_en: "Light Resist I",
        name_jp: "ライトレジストⅠ",
        name_glen: "Light Resist I",
        effect_en: "Light Resist(+3)",
        effect_jp: "光耐性(+3)",
        effect_glen: "Light Resist(+3)"
    },
    "HM02": {
        name_en: "Light Resist II",
        name_jp: "ライトレジストⅡ",
        name_glen: "Light Resist II",
        effect_en: "Light Resist(+4)",
        effect_jp: "光耐性(+4)",
        effect_glen: "Light Resist(+4)"
    },
    "HM03": {
        name_en: "Light Resist III",
        name_jp: "ライトレジストⅢ",
        name_glen: "Light Resist III",
        effect_en: "Light Resist(+5)",
        effect_jp: "光耐性(+5)",
        effect_glen: "Light Resist(+5)"
    },
    "HM04": {
        name_en: "Light Resist IV",
        name_jp: "ライトレジストⅣ",
        name_glen: "Light Resist IV",
        effect_en: "Light Resist(+6)",
        effect_jp: "光耐性(+6)",
        effect_glen: "Light Resist(+6)"
    },
    "HM05": {
        name_en: "Light Resist V",
        name_jp: "ライトレジストⅤ",
        name_glen: "Light Resist V",
        effect_en: "Light Resist(+7)",
        effect_jp: "光耐性(+7)",
        effect_glen: "Light Resist(+7)"
    },
    "HN01": {
        name_en: "Gloom Resist I",
        name_jp: "グルームレジストⅠ",
        name_glen: "Umbral Ward I",
        effect_en: "Dark Resist(+3)",
        effect_jp: "闇耐性(+3)",
        effect_glen: "Dark Resist(+3)"
    },
    "HN02": {
        name_en: "Gloom Resist II",
        name_jp: "グルームレジストⅡ",
        name_glen: "Umbral Ward II",
        effect_en: "Dark Resist(+4)",
        effect_jp: "闇耐性(+4)",
        effect_glen: "Dark Resist(+4)"
    },
    "HN03": {
        name_en: "Gloom Resist III",
        name_jp: "グルームレジストⅢ",
        name_glen: "Umbral Ward III",
        effect_en: "Dark Resist(+5)",
        effect_jp: "闇耐性(+5)",
        effect_glen: "Dark Resist(+5)"
    },
    "HN04": {
        name_en: "Gloom Resist IV",
        name_jp: "グルームレジストⅣ",
        name_glen: "Umbral Ward IV",
        effect_en: "Dark Resist(+6)",
        effect_jp: "闇耐性(+6)",
        effect_glen: "Dark Resist(+6)"
    },
    "HN05": {
        name_en: "Gloom Resist V",
        name_jp: "グルームレジストⅤ",
        name_glen: "Umbral Ward V",
        effect_en: "Dark Resist(+7)",
        effect_jp: "闇耐性(+7)",
        effect_glen: "Dark Resist(+7)"
    },
    "HZ01": {
        name_en: "All Resist I",
        name_jp: "オールレジストⅠ",
        name_glen: "Soverign Ward I",
        effect_en: "All Resist(+1)",
        effect_jp: "全耐性(+1)",
        effect_glen: "All Resist(+1)"
    },
    "HZ02": {
        name_en: "All Resist II",
        name_jp: "オールレジストⅡ",
        name_glen: "Soverign Ward II",
        effect_en: "All Resist(+2)",
        effect_jp: "全耐性(+2)",
        effect_glen: "All Resist(+2)"
    },
    "HZ03": {
        name_en: "All Resist III",
        name_jp: "オールレジストⅢ",
        name_glen: "Soverign Ward III",
        effect_en: "All Resist(+3)",
        effect_jp: "全耐性(+3)",
        effect_glen: "All Resist(+3)"
    },
    "HZ04": {
        name_en: "All Resist IV",
        name_jp: "オールレジストⅣ",
        name_glen: "Soverign Ward IV",
        effect_en: "All Resist(+4)",
        effect_jp: "全耐性(+4)",
        effect_glen: "All Resist(+4)"
    },
    "HZ05": {
        name_en: "All Resist V",
        name_jp: "オールレジストⅤ",
        name_glen: "Soverign Ward V",
        effect_en: "All Resist(+5)",
        effect_jp: "全耐性(+5)",
        effect_glen: "All Resist(+5)"
    },
    "JA01": {
        name_en: "Burn I",
        name_jp: "バーンⅠ",
        name_glen: "Burn I",
        effect_en: "Grants Burn Lv1",
        effect_jp: "バーンLv1付与",
        effect_glen: "Inflicts Burn Level 1"
    },
    "JA02": {
        name_en: "Burn II",
        name_jp: "バーンⅡ",
        name_glen: "Burn II",
        effect_en: "Grants Burn Lv2",
        effect_jp: "バーンLv2付与",
        effect_glen: "Inflicts Burn Level 2"
    },
    "JA03": {
        name_en: "Burn III",
        name_jp: "バーンⅢ",
        name_glen: "Burn III",
        effect_en: "Grants Burn Lv3",
        effect_jp: "バーンLv3付与",
        effect_glen: "Inflicts Burn Level 3"
    },
    "JA04": {
        name_en: "Burn IV",
        name_jp: "バーンⅣ",
        name_glen: "Burn IV",
        effect_en: "Grants Burn Lv4",
        effect_jp: "バーンLv4付与",
        effect_glen: "Inflicts Burn Level 4"
    },
    "JA05": {
        name_en: "Burn V",
        name_jp: "バーンⅤ",
        name_glen: "Burn V",
        effect_en: "Grants Burn Lv5",
        effect_jp: "バーンLv5付与",
        effect_glen: "Inflicts Burn Level 5"
    },
    "JB01": {
        name_en: "Freeze I",
        name_jp: "フリーズⅠ",
        name_glen: "Freeze I",
        effect_en: "Grants Freeze Lv1",
        effect_jp: "フリーズLv1付与",
        effect_glen: "Inflicts Freeze Level 1"
    },
    "JB02": {
        name_en: "Freeze II",
        name_jp: "フリーズⅡ",
        name_glen: "Freeze II",
        effect_en: "Grants Freeze Lv2",
        effect_jp: "フリーズLv2付与",
        effect_glen: "Inflicts Freeze Level 2"
    },
    "JB03": {
        name_en: "Freeze III",
        name_jp: "フリーズⅢ",
        name_glen: "Freeze III",
        effect_en: "Grants Freeze Lv3",
        effect_jp: "フリーズLv3付与",
        effect_glen: "Inflicts Freeze Level 3"
    },
    "JB04": {
        name_en: "Freeze IV",
        name_jp: "フリーズⅣ",
        name_glen: "Freeze IV",
        effect_en: "Grants Freeze Lv4",
        effect_jp: "フリーズLv4付与",
        effect_glen: "Inflicts Freeze Level 4"
    },
    "JB05": {
        name_en: "Freeze V",
        name_jp: "フリーズⅤ",
        name_glen: "Freeze V",
        effect_en: "Grants Freeze Lv5",
        effect_jp: "フリーズLv5付与",
        effect_glen: "Inflicts Freeze Level 5"
    },
    "JC01": {
        name_en: "Shock I",
        name_jp: "ショックⅠ",
        name_glen: "Shock I",
        effect_en: "Grants Shock Lv1",
        effect_jp: "ショックLv1付与",
        effect_glen: "Inflicts Shock Level 1"
    },
    "JC02": {
        name_en: "Shock II",
        name_jp: "ショックⅡ",
        name_glen: "Shock II",
        effect_en: "Grants Shock Lv2",
        effect_jp: "ショックLv2付与",
        effect_glen: "Inflicts Shock Level 2"
    },
    "JC03": {
        name_en: "Shock III",
        name_jp: "ショックⅢ",
        name_glen: "Shock III",
        effect_en: "Grants Shock Lv3",
        effect_jp: "ショックLv3付与",
        effect_glen: "Inflicts Shock Level 3"
    },
    "JC04": {
        name_en: "Shock IV",
        name_jp: "ショックⅣ",
        name_glen: "Shock IV",
        effect_en: "Grants Shock Lv4",
        effect_jp: "ショックLv4付与",
        effect_glen: "Inflicts Shock Level 4"
    },
    "JC05": {
        name_en: "Shock V",
        name_jp: "ショックⅤ",
        name_glen: "Shock V",
        effect_en: "Grants Shock Lv5",
        effect_jp: "ショックLv5付与",
        effect_glen: "Inflicts Shock Level 5"
    },
    "JD01": {
        name_en: "Mirage I",
        name_jp: "ミラージュⅠ",
        name_glen: "Blind I",
        effect_en: "Grants Mirage Lv1",
        effect_jp: "ミラージュLv1付与",
        effect_glen: "Inflicts Blind Level 1"
    },
    "JD02": {
        name_en: "Mirage II",
        name_jp: "ミラージュⅡ",
        name_glen: "Blind II",
        effect_en: "Grants Mirage Lv2",
        effect_jp: "ミラージュLv2付与",
        effect_glen: "Inflicts Blind Level 2"
    },
    "JD03": {
        name_en: "Mirage III",
        name_jp: "ミラージュⅢ",
        name_glen: "Blind III",
        effect_en: "Grants Mirage Lv3",
        effect_jp: "ミラージュLv3付与",
        effect_glen: "Inflicts Blind Level 3"
    },
    "JD04": {
        name_en: "Mirage IV",
        name_jp: "ミラージュⅣ",
        name_glen: "Blind IV",
        effect_en: "Grants Mirage Lv4",
        effect_jp: "ミラージュLv4付与",
        effect_glen: "Inflicts Blind Level 4"
    },
    "JD05": {
        name_en: "Mirage V",
        name_jp: "ミラージュⅤ",
        name_glen: "Blind V",
        effect_en: "Grants Mirage Lv5",
        effect_jp: "ミラージュLv5付与",
        effect_glen: "Inflicts Blind Level 5"
    },
    "JE01": {
        name_en: "Panic I",
        name_jp: "パニックⅠ",
        name_glen: "Panic I",
        effect_en: "Grants Panic Lv1",
        effect_jp: "パニックLv1付与",
        effect_glen: "Inflicts Panic Level 1"
    },
    "JE02": {
        name_en: "Panic II",
        name_jp: "パニックⅡ",
        name_glen: "Panic II",
        effect_en: "Grants Panic Lv2",
        effect_jp: "パニックLv2付与",
        effect_glen: "Inflicts Panic Level 2"
    },
    "JE03": {
        name_en: "Panic III",
        name_jp: "パニックⅢ",
        name_glen: "Panic III",
        effect_en: "Grants Panic Lv3",
        effect_jp: "パニックLv3付与",
        effect_glen: "Inflicts Panic Level 3"
    },
    "JE04": {
        name_en: "Panic IV",
        name_jp: "パニックⅣ",
        name_glen: "Panic IV",
        effect_en: "Grants Panic Lv4",
        effect_jp: "パニックLv4付与",
        effect_glen: "Inflicts Panic Level 4"
    },
    "JE05": {
        name_en: "Panic V",
        name_jp: "パニックⅤ",
        name_glen: "Panic V",
        effect_en: "Grants Panic Lv5",
        effect_jp: "パニックLv5付与",
        effect_glen: "Inflicts Panic Level 5"
    },
    "JF01": {
        name_en: "Poison I",
        name_jp: "ポイズンⅠ",
        name_glen: "Poison I",
        effect_en: "Grants Poison Lv1",
        effect_jp: "ポイズンLv1付与",
        effect_glen: "Inflicts Poison Level 1"
    },
    "JF02": {
        name_en: "Poison II",
        name_jp: "ポイズンⅡ",
        name_glen: "Poison II",
        effect_en: "Grants Poison Lv2",
        effect_jp: "ポイズンLv2付与",
        effect_glen: "Inflicts Poison Level 2"
    },
    "JF03": {
        name_en: "Poison III",
        name_jp: "ポイズンⅢ",
        name_glen: "Poison III",
        effect_en: "Grants Poison Lv3",
        effect_jp: "ポイズンLv3付与",
        effect_glen: "Inflicts Poison Level 3"
    },
    "JF04": {
        name_en: "Poison IV",
        name_jp: "ポイズンⅣ",
        name_glen: "Poison IV",
        effect_en: "Grants Poison Lv4",
        effect_jp: "ポイズンLv4付与",
        effect_glen: "Inflicts Poison Level 4"
    },
    "JF05": {
        name_en: "Poison V",
        name_jp: "ポイズンⅤ",
        name_glen: "Poison V",
        effect_en: "Grants Poison Lv5",
        effect_jp: "ポイズンLv5付与",
        effect_glen: "Inflicts Poison Level 5"
    },
    "LA01": {
        name_en: "S1:Offensive Intent",
        name_jp: "S1:剛撃の志",
        name_glen: "*S1:Offensive Intent",
        effect_en: "Boosts damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_glen: "Boosts damage by 2%."
    },
    "LA02": {
        name_en: "S1:Photon Reduction",
        name_jp: "S1:光子縮減",
        name_glen: "*S1:Photon Reduction",
        effect_en: "PP consumption is reduced by 7%.",
        effect_jp: "PP消費量を7%軽減。",
        effect_glen: "PP consumption is reduced by 7%."
    },
    "LA03": {
        name_en: "S1:Wise Skill",
        name_jp: "S1:妙技の巧",
        name_glen: "*S1:Wise Skill",
        effect_en: "Increases critical rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。",
        effect_glen: "Increases critical rate by 15%."
    },
    "LA2S": {
        name_en: "S1:Wise Skill 2",
        name_jp: "S1:妙技の巧2",
        name_glen: "*S1:Wise Skill 2",
        effect_en: "Increases critical rate by 18%.",
        effect_jp: "クリティカル率が18%上昇する。",
        effect_glen: "Increases critical rate by 18%."
    },
    "LA04": {
        name_en: "S1:Skilled Brilliance",
        name_jp: "S1:輝充の志",
        name_glen: "*S1:Skilled Brilliance",
        effect_en: "Boosts damage by 3% while PP<br>at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。",
        effect_glen: "Boosts damage by 3% while PP<br>at is 40% or above."
    },
    "LA05": {
        name_en: "S1:Double-Edged Sword",
        name_jp: "S1:諸刃の撃",
        name_glen: "*S1:Double-Edged Sword",
        effect_en: "Deal 4% more damage but take<br>8% more damage.",
        effect_jp: "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
        effect_glen: "Deal 4% more damage but take<br>8% more damage."
    },
    "LA06": {
        name_en: "S1:Radiating Grace",
        name_jp: "S1:輝勢の恵",
        name_glen: "*S1:Radiating Grace",
        effect_en: "PP regeneration increases by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。",
        effect_glen: "PP regeneration increases by 20%."
    },
    "LA2R": {
        name_en: "S1:Radiating Grace 2",
        name_jp: "S1:輝勢の恵2",
        name_glen: "*S1:Radiating Grace 2",
        effect_en: "PP regeneration increases by 23%.",
        effect_jp: "PPの自然回復速度が23%上昇する。",
        effect_glen: "PP regeneration increases by 23%."
    },
    "LA11": {
        name_en: "S1:Immediate Intent",
        name_jp: "S1:瞬連の志",
        name_glen: "*S1:Immediate Intent",
        effect_en: "Successive Just Attacks will<br>increase damage up to 3%.",
        effect_jp: "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。",
        effect_glen: "Successive Just Attacks will<br>increase damage up to 3%."
    },
    "LA12": {
        name_en: "S1:Red Petal Flash",
        name_jp: "S1:花ノ赤閃",
        name_glen: "*S1:Red Petal Flash",
        effect_en: "+3% Damage for 30 seconds after<br>inflicting 450,000 damage.",
        effect_jp: "与ダメージ450,000毎に30秒間、3%威力上昇。",
        effect_glen: "+3% Damage for 30 seconds after<br>inflicting 450,000 damage."
    },
    "LA13": {
        name_en: "S1:Blue Ocean Flash",
        name_jp: "S1:海ノ青閃",
        name_glen: "*S1:Blue Ocean Flash",
        effect_en: "Recover 4% HP every second for 30<br>seconds after taking 600 damage.",
        effect_jp: "被ダメージ600毎に30秒間、毎秒HPが4%回復。",
        effect_glen: "Recover 4% HP every second for 30<br>seconds after taking 600 damage."
    },
    "LA14": {
        name_en: "S1:White Snow Flash",
        name_jp: "S1:雪ノ白閃",
        name_glen: "*S1:White Snow Flash",
        effect_en: "+20% PP Recovery on attacks for 30<br>seconds after using 150 PP.",
        effect_jp: "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。",
        effect_glen: "+20% PP Recovery on attacks for 30<br>seconds after using 150 PP."
    },
    "LA15": {
        name_en: "S1:Yellow Moon Flash",
        name_jp: "S1:月ノ黄閃",
        name_glen: "*S1:Yellow Moon Flash",
        effect_en: "8% PP Consumption Reduction for 20<br>seconds upon Just Guarding.",
        effect_jp: "ジャストガード成功時に20秒間、PP消費量を8%軽減。",
        effect_glen: "8% PP Consumption Reduction for 20<br>seconds upon Just Guarding."
    },
    "LA16": {
        name_en: "S1:Green Leaf Flash",
        name_jp: "S1:葉ノ緑閃",
        name_glen: "*S1:Green Leaf Flash",
        effect_en: "Every 20 seconds, a barrier will<br>turn on/off. The barrier reduces<br>damage by 8% and prevents flinching.",
        effect_jp: "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。",
        effect_glen: "Every 20 seconds, a barrier will<br>turn on/off. The barrier reduces<br>damage by 8% and prevents flinching."
    },
    "LA17": {
        name_en: "S1:Black Shadow Flash",
        name_jp: "S1:影ノ黒閃",
        name_glen: "*S1:Black Shadow Flash",
        effect_en: "Increase Natural PP Recovery for 20<br>seconds after standing still<br>for 5 seconds.",
        effect_jp: "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。",
        effect_glen: "Increase Natural PP Recovery for 20<br>seconds after standing still<br>for 5 seconds."
    },
    "LA18": {
        name_en: "S1:Brilliant Ruin",
        name_jp: "S1:滅域輝与",
        name_glen: "*S1:Brilliant Ruin",
        effect_en: "Recovery PP upon enemies being defeated near you.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recovery PP upon enemies being defeated near you."
    },
    "LA21": {
        name_en: "S1:Skilled Strike",
        name_jp: "S1:妙撃の志",
        name_glen: "*S1:Skilled Strike",
        effect_en: "+3% damage on Critical Hits.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。",
        effect_glen: "+3% damage on Critical Hits."
    },
    "LA22": {
        name_en: "S1:Radiant Strike",
        name_jp: "S1:輝剰の撃",
        name_glen: "*S1:Radiant Strike",
        effect_en: "+17% PP Recovery on attacks.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。",
        effect_glen: "+17% PP Recovery on attacks."
    },
    "LA23": {
        name_en: "S1:Flowing Exhilaration",
        name_jp: "S1:時流活与",
        name_glen: "*S1:Flowing Exhilaration",
        effect_en: "Recovers 60% HP at set intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。",
        effect_glen: "Recovers 60% HP at set intervals."
    },
    "LA24": {
        name_en: "S1:Guardian Armor",
        name_jp: "S1:守護の備",
        name_glen: "*S1:Guardian Deftnessor",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LA25": {
        name_en: "S1:Vigor Enhancement",
        name_jp: "S1:活剰増進",
        name_glen: "*S1:Vigor Enhancement",
        effect_en: "Boost self HP recovery by 40%.",
        effect_jp: "自身のHP回復量が40％上昇する",
        effect_glen: "Boost self HP recovery by 40%."
    },
    "LA78": {
        name_en: "S1:Violent Invigoration",
        name_jp: "S1:猛威の奮激",
        name_glen: "*S1:Violent Invigoration",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。",
        effect_glen: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken."
    },
    "LA79": {
        name_en: "S1:Phanatical Advantage",
        name_jp: "S1:狂幻の利",
        name_glen: "*S1:Phanatical Advantage",
        effect_en: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        effect_glen: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms."
    },
    "LA80": {
        name_en: "S1:Powering Intent",
        name_jp: "S1:強闘の志",
        name_glen: "*S1:Mighting Intent",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが4%上昇する。",
        effect_glen: "Increase damage dealt to bosses by 4%."
    },
    "LA81": {
        name_en: "S1:Rupturing Excess",
        name_jp: "S1:裂砕の剰",
        name_glen: "*S1:Rupturing Excess",
        effect_en: "Increase PP recovery rate by 40% when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。",
        effect_glen: "Increase PP recovery rate by 40% when attacking breakable parts."
    },
    "LA82": {
        name_en: "S1:Spirited Response",
        name_jp: "S1:気輝応変",
        name_glen: "*S1:Spirited Response",
        effect_en: "Increases PP regeneration rate (+80%) while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。",
        effect_glen: "Increases PP regeneration rate (+80%) while sheathed."
    },
    "LA83": {
        name_en: "S1:Rupturing Intent",
        name_jp: "S1:裂砕の志",
        name_glen: "*S1:Rupturing Intent",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        effect_glen: "Increase damage against breakable parts by 4%."
    },
    "LA84": {
        name_en: "S1:Sturdy Intent",
        name_jp: "S1:依属の志",
        name_glen: "*S1:Sturdy Intent",
        effect_en: "Increase damage by 4% if your weapon's element or equipped Guard Ring match the enemy's elemental weakness.",
        effect_jp: "ガード系リングまたは武器属性が弱点属性と一致時、4%威力上昇。",
        effect_glen: "Increase damage by 4% if your weapon's element or equipped Guard Ring match the enemy's elemental weakness."
    },
    "LA85": {
        name_en: "S1:Phantasmal Intent",
        name_jp: "S1:幻精の志",
        name_glen: "*S1:Phantasmal Intent",
        effect_en: "Increase Power based on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて威力が上昇する。",
        effect_glen: "Increase Might based on the Photon Blast Gauge."
    },
    "LA86": {
        name_en: "S1:Photon Reduction 2",
        name_jp: "S1:光子縮減2",
        name_glen: "*S1:Photon Reduction 2",
        effect_en: "Reduce PP consumption by 10%.",
        effect_jp: "PP消費量を10%軽減。",
        effect_glen: "Reduce PP consumption by 10%."
    },
    "LA87": {
        name_en: "S1:Brilliant Ruin 2",
        name_jp: "S1:滅域輝与2",
        name_glen: "*S1:Brilliant Ruin 2",
        effect_en: "Recover PP when an enemy near you is defeated. (+4 PP)",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover PP when an enemy near you is defeated. (+4 PP)"
    },
    "LA88": {
        name_en: "S1:Flowing Intent",
        name_jp: "S1:時流の志",
        name_glen: "*S1:Flowing Intent",
        effect_en: "Increase power every second. Maxes at 4% (30s to MAX).",
        effect_jp: "1秒毎に与ダメージが上昇。最大で4%。",
        effect_glen: "Increase power every second. Maxes at 4% (30s to MAX)."
    },
    "LA89": {
        name_en: "S1:Lethal Intent",
        name_jp: "S1:死中の志",
        name_glen: "*S1:Lethal Intent",
        effect_en: "Reduce HP by 5% every 20 seconds and increase Power by 4%.",
        effect_jp: "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。",
        effect_glen: "Reduce HP by 5% every 20 seconds and increase Might by 4%."
    },
    "LA90": {
        name_en: "S1:Augment Intent",
        name_jp: "S1:錬成の志",
        name_glen: "*S1:Augment Intent",
        effect_en: "Increase Power based on the number of Special Abilities attached to this weapon. Maxes at 4%.",
        effect_jp: "特殊能力の付与数に応じて威力上昇。最大で4%。",
        effect_glen: "Increase Might based on the number of Special Abilities attached to this weapon. Maxes at 4%."
    },
    "LA91": {
        name_en: "S1:Strike Boost",
        name_jp: "S1:打撃増幅",
        name_glen: "*S1:Strike Boost",
        effect_en: "Increase Power by 1% for every 60 S-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 S-ATK is affixed to this weapon.",
        effect_jp: "特殊能力の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_glen: "Increase Might by 1% for every 60 MEL Pwr affixed to this weapon. Increase Might by an additional 2% if at least 200 MEL Pwr is affixed to this weapon."
    },
    "LA92": {
        name_en: "S1:Shoot Boost",
        name_jp: "S1:射撃増幅",
        name_glen: "*S1:Precision Boost",
        effect_en: "Increase Power by 1% for every 60 R-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 R-ATK is affixed to this weapon.",
        effect_jp: "特殊能力の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_glen: "Increase Might by 1% for every 60 RNG Pwr affixed to this weapon. Increase Might by an additional 2% if at least 200 RNG Pwr is affixed to this weapon."
    },
    "LA93": {
        name_en: "S1:Tech Boost",
        name_jp: "S1:法撃増幅",
        name_glen: "*S1:Tech Boost",
        effect_en: "Increase Power by 1% for every 60 T-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 T-ATK is affixed to this weapon.",
        effect_jp: "特殊能力の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_glen: "Increase Might by 1% for every 60 TEC Pwr affixed to this weapon. Increase Might by an additional 2% if at least 200 TEC Pwr is affixed to this weapon."
    },
    "LA94": {
        name_en: "S1:Reckless Strike",
        name_jp: "S1:賭死の撃",
        name_glen: "*S1:Reckless Strike",
        effect_en: "Increase Power every three times you are attacked. Upon being attacked a tenth time, release an explosion that incapacitates you and damages all nearby targets.",
        effect_jp: "被ダメージの回数に応じて威力上昇。最大段階時の被ダメージで自身が戦闘不能になり周囲に与ダメージ。",
        effect_glen: "Increase Might every three times you are attacked. Upon being attacked a tenth time, release an explosion that incapacitates you and damages all nearby targets."
    },
    "LA95": {
        name_en: "S1:Eclipsing Decay",
        name_jp: "S1:失力の蝕",
        name_glen: "*S1:Eclipsing Decay",
        effect_en: "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
        effect_jp: "命中時に25％の確率でジェルンを付与。",
        effect_glen: "Grant a 25% chance to inflict the Jellen status when attacking an enemy."
    },
    "LA2P": {
        name_en: "S1:Photon Balance",
        name_jp: "S1:光子の秤",
        name_glen: "*S1:Photon Balance",
        effect_en: "Increases PP consumption by 8%, but boosts PA and Tech damage by 4%.",
        effect_jp: "PP消費量が8％増加する代わりにPAとテクニックの威力が4％上昇する。",
        effect_glen: "Increases PP consumption by 8%, but boosts PA and Tech damage by 4%."
    },
    "LA2Q": {
        name_en: "S1:Collaborator Liberator",
        name_jp: "S1:戦友の加護",
        name_glen: "*S1:Collaborator Liberator",
        effect_en: "Reduces PP consumption, boosts critical rate and boosts power based on the number of people in your party (min. 2).",
        effect_jp: "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
        effect_glen: "Reduces PP consumption, boosts critical rate and boosts power based on the number of people in your party (min. 2)."
    },
    "LB01": {
        name_en: "S2:Sturdy Recovery",
        name_jp: "S2:剛乱活与",
        name_glen: "*S2:Sturdy Recovery",
        effect_en: "Gives a fixed chance of<br>restoring HP equal to 1%<br>of damage dealt. (Max: 300)",
        effect_jp: "一定確率で与ダメージの1%をHPとして吸収。(上限300)",
        effect_glen: "Gives a fixed chance of<br>restoring HP equal to 1%<br>of damage dealt. (Max: 300)"
    },
    "LB02": {
        name_en: "S2:Photon Reduction",
        name_jp: "S2:光子縮減",
        name_glen: "*S2:Photon Reduction",
        effect_en: "PP consumption is reduced by 10%.",
        effect_jp: "PP消費量を10%軽減。",
        effect_glen: "PP consumption is reduced by 10%."
    },
    "LB2F": {
        name_en: "S2:Photon Reduction 2",
        name_jp: "S2:光子縮減2",
        name_glen: "*S2:Photon Reduction 2",
        effect_en: "PP consumption is reduced by 13%.",
        effect_jp: "PP消費量を13%軽減。",
        effect_glen: "PP consumption is reduced by 13%."
    },
    "LB03": {
        name_en: "S2:Wise Skill",
        name_jp: "S2:妙技の巧",
        name_glen: "*S2:Wise Skill",
        effect_en: "Increases critical rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。",
        effect_glen: "Increases critical rate by 12%."
    },
    "LB04": {
        name_en: "S2:Radiant Strike",
        name_jp: "S2:輝剰の撃",
        name_glen: "*S2:Radiant Strike",
        effect_en: "Increases attack PP recovery by 17%.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。",
        effect_glen: "Increases attack PP recovery by 17%."
    },
    "LB05": {
        name_en: "S2:Cursed Radiance",
        name_jp: "S2:災転輝与",
        name_glen: "*S2:Cursed Radiance",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。",
        effect_glen: "Recovers PP by 15% when taking damage."
    },
    "LB06": {
        name_en: "S2:Guardian Armor",
        name_jp: "S2:守護の備",
        name_glen: "*S2:Guardian Deftnessor",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LB07": {
        name_en: "S2:Flowing Exhilaration",
        name_jp: "S2:時流活与",
        name_glen: "*S2:Flowing Exhilaration",
        effect_en: "Recover HP by 60% at<br>regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。",
        effect_glen: "Recover HP by 60% at<br>regular intervals."
    },
    "LB2G": {
        name_en: "S2:Flowing Exhilaration 2",
        name_jp: "S2:時流活与2",
        name_glen: "*S2:Flowing Exhilaration 2",
        effect_en: "Recover 75% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを75%回復する。",
        effect_glen: "Recover 75% of your maximum HP at regular intervals."
    },
    "LB08": {
        name_en: "S2:Immediate Profusion",
        name_jp: "S2:瞬撃繚乱",
        name_glen: "*S2:Immediate Profusion",
        effect_en: "Raises damage by 3% when Just<br>Attacking different PAs or <br>Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        effect_glen: "Raises damage by 3% when Just<br>Attacking different PAs or <br>Techniques."
    },
    "LB09": {
        name_en: "S2:Spirited Response",
        name_jp: "S2:気輝応変",
        name_glen: "*S2:Spirited Response",
        effect_en: "Increases PP regeneration rate<br>while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。",
        effect_glen: "Increases PP regeneration rate<br>while sheathed."
    },
    "LB0A": {
        name_en: "S2:Flowing Grace",
        name_jp: "S2:時流の恵",
        name_glen: "*S2:Flowing Grace",
        effect_en: "Regenerate 10 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを10回復する。",
        effect_glen: "Regenerate 10 PP every 4 seconds."
    },
    "LB11": {
        name_en: "S2:Nature's Skill",
        name_jp: "S2:花海雪の巧",
        name_glen: "*S2:Nature's Skill",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Red Petal Flash, S1:Blue<br>Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。",
        effect_glen: "Increase Critical Hit Rate by 20%<br>when S1:Red Petal Flash, S1:Blue<br>Ocean Flash, or S1:White Snow Flash are active."
    },
    "LB12": {
        name_en: "S2:Nature's Intent",
        name_jp: "S2:花海雪の志",
        name_glen: "*S2:Nature's Intent",
        effect_en: "Increase damage by 3% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。",
        effect_glen: "Increase damage by 3% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LB13": {
        name_en: "S2:Nature's Exhilaration",
        name_jp: "S2:花海雪の活与",
        name_glen: "*S2:Nature's Exhilaration",
        effect_en: "Recover 2% HP every second when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。",
        effect_glen: "Recover 2% HP every second when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LB14": {
        name_en: "S2:Nature's Reduction",
        name_jp: "S2:花海雪の縮減",
        name_glen: "*S2:Nature's Reduction",
        effect_en: "Decrease PP consumption by 12% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。",
        effect_glen: "Decrease PP consumption by 12% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LB15": {
        name_en: "S2:Umbrageous Gleam",
        name_jp: "S2:月葉影の輝勢",
        name_glen: "*S2:Umbrageous Gleam",
        effect_en: "Increase Natural PP Recovery by 25% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。",
        effect_glen: "Increase Natural PP Recovery by 25% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active."
    },
    "LB16": {
        name_en: "S2:Umbrageous Guardian",
        name_jp: "S2:月葉影の備",
        name_glen: "*S2:Umbrageous Guardian",
        effect_en: "Decrease damage taken by 12% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。",
        effect_glen: "Decrease damage taken by 12% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active."
    },
    "LB17": {
        name_en: "S2:Brilliant Ruin",
        name_jp: "S2:滅域輝与",
        name_glen: "*S2:Brilliant Ruin",
        effect_en: "Recover PP when an enemy near you<br>is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover PP when an enemy near you<br>is defeated."
    },
    "LB18": {
        name_en: "S2:Radiating Grace",
        name_jp: "S2:輝勢の恵",
        name_glen: "*S2:Radiating Grace",
        effect_en: "Increases Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。",
        effect_glen: "Increases Automatic PP Recovery by 17%."
    },
    "LB19": {
        name_en: "S2:Offensive Intent",
        name_jp: "S2:剛撃の志",
        name_glen: "*S2:Offensive Intent",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_glen: "Increase damage by 2%."
    },
    "LB1A": {
        name_en: "S2:Skilled Strike",
        name_jp: "S2:妙撃の志",
        name_glen: "S2:Precision Will",
        effect_en: "Increase Critical Hit Damage by 3%.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。",
        effect_glen: "Increase Critical Hit Damage by 3%."
    },
    "LB1B": {
        name_en: "S2:Rupturing Intent",
        name_jp: "S2:裂砕の志",
        name_glen: "*S2:Rupturing Intent",
        effect_en: "Increase damage against breakable parts by 3%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が3%上昇する。",
        effect_glen: "Increase damage against breakable parts by 3%."
    },
    "LB1C": {
        name_en: "S2:Rupturing Excess",
        name_jp: "S2:裂砕の剰",
        name_glen: "*S2:Rupturing Excess",
        effect_en: "Increase PP recovery rate by 35%<br>when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。",
        effect_glen: "Increase PP recovery rate by 35%<br>when attacking breakable parts."
    },
    "LB1D": {
        name_en: "S2:Double-Edged Sword",
        name_jp: "S2:諸刃の撃",
        name_glen: "*S2:Double-Edged Sword",
        effect_en: "Increase Power by 3%<br>but take 6% more damage<br>when weapon is drawn.",
        effect_jp: "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。",
        effect_glen: "Increase Might by 3%<br>but take 6% more damage<br>when weapon is drawn."
    },
    "LB1E": {
        name_en: "S2:Powering Intent",
        name_jp: "S2:強闘の志",
        name_glen: "S2:Goliathslayer's Resolve",
        effect_en: "Increase damage dealt to bosses by 3%.",
        effect_jp: "強敵への与ダメージが3%上昇する。",
        effect_glen: "Increase damage dealt to bosses by 3%."
    },
    "LB1F": {
        name_en: "S2:Phantasmal Radiance",
        name_jp: "S2:幻精輝剰",
        name_glen: "*S2:Phantasmal Radiance",
        effect_en: "Increase Active PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。",
        effect_glen: "Increase Active PP Recovery based<br>on the Photon Blast Gauge."
    },
    "LB1G": {
        name_en: "S2:Phantasmal Gleam",
        name_jp: "S2:幻精輝勢",
        name_glen: "*S2:Phantasmal Gleam",
        effect_en: "Increase Natural PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じてPP自然回復量が上昇する。",
        effect_glen: "Increase Natural PP Recovery based<br>on the Photon Blast Gauge."
    },
    "LB1H": {
        name_en: "S2:Phantasmal Guardian",
        name_jp: "S2:幻精の備",
        name_glen: "*S2:Phantasmal Guardian",
        effect_en: "Reduce damage taken based<br>on the Photon Blast Guage.",
        effect_jp: "フォトンブラストゲージに応じて被ダメージ量が減少する。",
        effect_glen: "Reduce damage taken based<br>on the Photon Blast Guage."
    },
    "LB1I": {
        name_en: "S2:Phanatical Advantage",
        name_jp: "S2:狂幻の利",
        name_glen: "*S2:Phanatical Advantage",
        effect_en: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        effect_glen: "Increase power by 5%<br>and reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms."
    },
    "LB1J": {
        name_en: "S2:Violent Invigoration",
        name_jp: "S2:猛威の奮激",
        name_glen: "*S2:Violent Invigoration",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。",
        effect_glen: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken."
    },
    "LB1K": {
        name_en: "S2:Umbrageous Melody",
        name_jp: "S2:月葉影の歌",
        name_glen: "*S2:Umbrageous Melody",
        effect_en: "Increase power over time when<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.<br>Maxes at 5%",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。",
        effect_glen: "Increase power over time when<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.<br>Maxes at 5%"
    },
    "LB1L": {
        name_en: "S2:Nature's Reduction 2",
        name_jp: "S2:花海雪の縮減2",
        name_glen: "*S2:Nature's Reduction 2",
        effect_en: "Reduce PP consumption by 14%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。",
        effect_glen: "Reduce PP consumption by 14%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LB1R": {
        name_en: "S2:Umbrageous Radiance",
        name_jp: "S2:月葉影の輝剰",
        name_glen: "*S2:Umbrageous Radiance",
        effect_en: "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。",
        effect_glen: "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active."
    },
    "LB1M": {
        name_en: "S2:Umbrageous Radiance 2",
        name_jp: "S2:月葉影の輝剰2",
        name_glen: "*S2:Umbrageous Radiance 2",
        effect_en: "Increase Active PP Recovery by 28%<br>when S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。",
        effect_glen: "Increase Active PP Recovery by 28%<br>when S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active."
    },
    "LB1N": {
        name_en: "S2:Wise Skill 2",
        name_jp: "S2:妙技の巧2",
        name_glen: "*S2:Wise Skill 2",
        effect_en: "Increase Critical Hit Rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。",
        effect_glen: "Increase Critical Hit Rate by 15%."
    },
    "LB1O": {
        name_en: "S2:Skilled Strike 2",
        name_jp: "S2:妙撃の志2",
        name_glen: "*S2:Skilled Strike 2",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。",
        effect_glen: "Increase Critical Hit Damage by 4%."
    },
    "LB1P": {
        name_en: "S2:Radiant Strike 2",
        name_jp: "S2:輝剰の撃2",
        name_glen: "*S2:Radiant Strike 2",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。",
        effect_glen: "Increase Attack PP Recovery by 20%."
    },
    "LB1Q": {
        name_en: "S2:Medicinal Wisdom",
        name_jp: "S2:服薬の恵",
        name_glen: "*S2:Medicinal Wisdom",
        effect_en: "Boost PP recovery when a -mate item is used.<br>Effects varies per mate.",
        effect_jp: "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
        effect_glen: "Boost PP recovery when a -mate item is used.<br>Effects varies per mate."
    },
    "LB89": {
        name_en: "S2:Instant Reduction",
        name_jp: "S2:瞬乱縮減",
        name_glen: "*S2:Instant Reduction",
        effect_en: "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックするとPP消費量を12%軽減。",
        effect_glen: "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques."
    },
    "LB90": {
        name_en: "S2:Flaming Guard",
        name_jp: "S2:火炎の備志",
        name_glen: "*S2:Flaming Guard",
        effect_en: "Increase Fire Attribute and Burn Resistance. Increase damage against enemies weak to Fire.",
        effect_jp: "炎属性、バーン耐性が上昇。敵の弱点属性が炎属性の時、威力上昇",
        effect_glen: "Increase Fire Attribute and Burn Resistance. Increase damage against enemies weak to Fire."
    },
    "LB91": {
        name_en: "S2:Freezing Guard",
        name_jp: "S2:氷雪の備志",
        name_glen: "*S2:Freezing Guard",
        effect_en: "Increase Ice Attribute and Freeze Resistance. Increase damage against enemies weak to Ice.",
        effect_jp: "氷属性、フリーズ耐性が上昇。敵の弱点属性が氷属性の時、威力上昇",
        effect_glen: "Increase Ice Attribute and Freeze Resistance. Increase damage against enemies weak to Ice."
    },
    "LB92": {
        name_en: "S2:Runner's High",
        name_jp: "S2:走者高揚",
        name_glen: "*S2:Runner's High",
        effect_en: "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
        effect_jp: "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。",
        effect_glen: "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running."
    },
    "LB93": {
        name_en: "S2:Skill Reduction",
        name_jp: "S2:技巧縮減",
        name_glen: "*S2:Skill Reduction",
        effect_en: "Reduce PP consumption for 30 seconds upon hitting with a PA/Technique. Has a low chance to grant amplified effects. Triggers Recast upon activation.",
        effect_jp: "フォトンアーツまたはテクニック命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。",
        effect_glen: "Reduce PP consumption for 30 seconds upon hitting with a PA/Technique. Has a low chance to grant amplified effects. Triggers Recast upon activation."
    },
    "LB1W": {
        name_en: "S2:Lightning Guard",
        name_jp: "S2:轟雷の備志",
        name_glen: "*S2:Lightning Guard",
        effect_en: "Increases your Lightning attribute and Shock resistance. Boosts power against enemies that are weak to Lightning.",
        effect_jp: "雷耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        effect_glen: "Increases your Lightning attribute and Shock resistance. Boosts power against enemies that are weak to Lightning."
    },
    "LB1Y": {
        name_en: "S2:Storm Guard",
        name_jp: "S2:暴風の備志",
        name_glen: "*S2:Storm Guard",
        effect_en: "Increases your Wind attribute and Shock resistance. Boosts power against enemies that are weak to Wind.",
        effect_jp: "風耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        effect_glen: "Increases your Wind attribute and Shock resistance. Boosts power against enemies that are weak to Wind."
    },
    "LB1Z": {
        name_en: "S2:Aegis Gift",
        name_jp: "S2:瞬護の与",
        name_glen: "*S2:Aegis Gift",
        effect_en: "When you Just Guard at less than 25% HP, recovers HP by 50% and PP by 30%.",
        effect_jp: "HPを25％未満にすると、HPが50％、PPが30％回復します。",
        effect_glen: "When you Just Guard at less than 25% HP, recovers HP by 50% and PP by 30%."
    },
    "LB2A": {
        name_en: "S2:Heavenly Keeper",
        name_jp: "S2:保天輝地",
        name_glen: "*S2:Heavenly Keeper",
        effect_en: "In the air, reduces PP consumption by 8%. On the ground, boosts PP regeneration and attack PP recovery by 20%.",
        effect_jp: "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。",
        effect_glen: "In the air, reduces PP consumption by 8%. On the ground, boosts PP regeneration and attack PP recovery by 20%."
    },
    "LB2C": {
        name_en: "S2:Flowing Armor",
        name_jp: "S2:時流の護",
        name_glen: "*S2:Flowing Deftnessor",
        effect_en: "Automatically casts Deband at regular intervals.",
        effect_jp: "一定間隔で自身にデバンドを発動する。",
        effect_glen: "Automatically casts Deband at regular intervals."
    },
    "LB2D": {
        name_en: "S2:Shining Guard",
        name_jp: "S2:光明の備志",
        name_glen: "*S2:Shining Guard",
        effect_en: "Increase Light Attribute and Panic Resistance. Increase damage against enemies weak to Light.",
        effect_jp: "光耐性、パニック耐性が上昇。敵の弱点属性が光属性の時、威力上昇。",
        effect_glen: "Increase Light Attribute and Panic Resistance. Increase damage against enemies weak to Light."
    },
    "LB2E": {
        name_en: "S2:Darkness Guard",
        name_jp: "S2:暗闇の備志",
        name_glen: "*S2:Darkness Guard",
        effect_en: "Increases your Dark attribute and Poison resistance. Boosts power against enemies that are weak to Dark.",
        effect_jp: "闇耐性、ポイズン耐性が上昇。敵の弱点属性が闇属性の時、威力上昇。",
        effect_glen: "Increases your Dark attribute and Poison resistance. Boosts power against enemies that are weak to Dark."
    },
    "LB2I": {
        name_en: "S2:Rainbow's Intent",
        name_jp: "S2:六色の志",
        name_glen: "*S2:Rainbow's Intent",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts damage by 5%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。",
        effect_glen: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts damage by 5%."
    },
    "LB2J": {
        name_en: "S2:Rainbow's Exhilaration",
        name_jp: "S2:六色の活与",
        name_glen: "*S2:Rainbow's Exhilaration",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Recovers 3% of your<br>HP every second.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。",
        effect_glen: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Recovers 3% of your<br>HP every second."
    },
    "LB98": {
        name_en: "S2:Skilled Brilliance",
        name_jp: "S2:輝充の志",
        name_glen: "*S2:Skilled Brilliance",
        effect_en: "Boosts damage by 3% while PP at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。",
        effect_glen: "Boosts damage by 3% while PP at is 40% or above."
    },
    "LC01": {
        name_en: "S3:Offensive Intent",
        name_jp: "S3:剛撃の志",
        name_glen: "*S3:Offensive Intent",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_glen: "Increase damage by 2%."
    },
    "LC02": {
        name_en: "S3:Vital Intent",
        name_jp: "S3:活実の志",
        name_glen: "*S3:Vital Intent",
        effect_en: "Boosts damage by 3% while HP is 80% or more.",
        effect_jp: "HPが80%以上の時、与ダメージが3%上昇。",
        effect_glen: "Boosts damage by 3% while HP is 80% or more."
    },
    "LC03": {
        name_en: "S3:Radiant Strike",
        name_jp: "S3:輝剰の撃",
        name_glen: "*S3:Radiant Strike",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。",
        effect_glen: "Increase Attack PP Recovery by 20%."
    },
    "LC1P": {
        name_en: "S3:Radiant Strike 2",
        name_jp: "S3:輝剰の撃2",
        name_glen: "*S3:Radiant Strike 2",
        effect_en: "Increase Attack PP Recovery by 23%.",
        effect_jp: "攻撃時のPP回復量が23%上昇する。",
        effect_glen: "Increase Attack PP Recovery by 23%."
    },
    "LC04": {
        name_en: "S3:Skilled Strike",
        name_jp: "S3:妙撃の志",
        name_glen: "*S3:Skilled Strike",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。",
        effect_glen: "Increase Critical Hit Damage by 4%."
    },
    "LC1O": {
        name_en: "S3:Skilled Strike 2",
        name_jp: "S3:妙撃の志2",
        name_glen: "*S3:Skilled Strike 2",
        effect_en: "Increase Critical Hit Damage by 5%.",
        effect_jp: "クリティカル時の与ダメージが5%上昇。",
        effect_glen: "Increase Critical Hit Damage by 5%."
    },
    "LC05": {
        name_en: "S3:Radiating Grace",
        name_jp: "S3:輝勢の恵",
        name_glen: "*S3:Radiating Grace",
        effect_en: "Increase Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。",
        effect_glen: "Increase Automatic PP Recovery by 17%."
    },
    "LC06": {
        name_en: "S3:Flowing Exhilaration",
        name_jp: "S3:時流活与",
        name_glen: "*S3:Flowing Exhilaration",
        effect_en: "Recover 40% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。",
        effect_glen: "Recover 40% of your maximum HP at regular intervals."
    },
    "LC11": {
        name_en: "S3:Umbrageous Intent",
        name_jp: "S3:月葉影の志",
        name_glen: "*S3:Umbrageous Intent",
        effect_en: "Increase damage by 3% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。",
        effect_glen: "Increase damage by 3% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active."
    },
    "LC12": {
        name_en: "S3:Umbrageous Reduction",
        name_jp: "S3:月葉影の縮減",
        name_glen: "*S3:Umbrageous Reduction",
        effect_en: "Decrease PP consumption by 14% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。",
        effect_glen: "Decrease PP consumption by 14% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active."
    },
    "LC13": {
        name_en: "S3:Umbrageous Exhilaration",
        name_jp: "S3:月葉影の活与",
        name_glen: "*S3:Umbrageous Exhilaration",
        effect_en: "Recover 2% HP every second when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。",
        effect_glen: "Recover 2% HP every second when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active."
    },
    "LC14": {
        name_en: "S3:Nature's Radiance",
        name_jp: "S3:花海雪の輝剰",
        name_glen: "*S3:Nature's Radiance",
        effect_en: "Increase Natural PP Recovery by 28% when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。",
        effect_glen: "Increase Natural PP Recovery by 28% when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LC15": {
        name_en: "S3:Wise Skill",
        name_jp: "S3:妙技の巧",
        name_glen: "*S3:Wise Skill",
        effect_en: "Increase Critical Hit Rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。",
        effect_glen: "Increase Critical Hit Rate by 12%."
    },
    "LC16": {
        name_en: "S3:Photon Reduction",
        name_jp: "S3:光子縮減",
        name_glen: "*S3:Photon Reduction",
        effect_en: "Reduces PP consumption by 10%.",
        effect_jp: "PP消費量を7%軽減。",
        effect_glen: "Reduces PP consumption by 10%."
    },
    "LC17": {
        name_en: "S3:Guardian Armor",
        name_jp: "S3:守護の備",
        name_glen: "S3:Guardian Gear",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LC18": {
        name_en: "S3:Nature's Guardian",
        name_jp: "S3:花海雪の備",
        name_glen: "*S3:Nature's Guardian",
        effect_en: "Decrease damage taken by 10%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。",
        effect_glen: "Decrease damage taken by 10%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LC19": {
        name_en: "S3:Umbrageous Skill",
        name_jp: "S3:月葉影の巧",
        name_glen: "*S3:Umbrageous Skill",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or<br>S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。",
        effect_glen: "Increase Critical Hit Rate by 20%<br>when S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or<br>S1:Black Shadow Flash are active."
    },
    "LC1A": {
        name_en: "S3:Brilliant Ruin",
        name_jp: "S3:滅域輝与",
        name_glen: "*S3:Brilliant Ruin",
        effect_en: "Recover PP when a enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover PP when a enemy near you is defeated."
    },
    "LC1B": {
        name_en: "S3:Cursed Radiance",
        name_jp: "S3:災転輝与",
        name_glen: "*S3:Cursed Radiance",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。",
        effect_glen: "Recovers PP by 15% when taking damage."
    },
    "LC1C": {
        name_en: "S3:Violent Invigoration",
        name_jp: "S3:猛威の奮激",
        name_glen: "*S3:Violent Invigoration",
        effect_en: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken.",
        effect_jp: "威力とＰＰ回復性能が 上昇。ＰＰ消費量軽減。 被ダメージで消失。",
        effect_glen: "Increase damage and PP recovery.<br>Reduce PP consumption.<br>Effect resets when damage is taken."
    },
    "LC1D": {
        name_en: "S3:Phantasmal Reduction",
        name_jp: "S3:幻精縮減",
        name_glen: "*S3:Phantasmal Reduction",
        effect_en: "Reduce PP consumption based<br>on the Photon Blast Gauge",
        effect_jp: "フォトンブラストゲージに応じてPP消費量が減少する。",
        effect_glen: "Reduce PP consumption based<br>on the Photon Blast Gauge"
    },
    "LC1E": {
        name_en: "S3:Phanatical Advantage",
        name_jp: "S3:狂幻の利",
        name_glen: "*S3:Phanatical Advantage",
        effect_en: "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms.",
        effect_jp: "「狂想と幻創」にて 威力が5％上昇し 被ダメージが12％減少。",
        effect_glen: "Increase power by 5% and<br>reduce damage taken by 12%<br>in the Quest Solo Training: Phanatical Phantoms."
    },
    "LC1F": {
        name_en: "S3:Immediate Profusion",
        name_jp: "S3:瞬撃繚乱",
        name_glen: "*S3:Immediate Profusion",
        effect_en: "Raises damage by 3%<br>when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        effect_glen: "Raises damage by 3%<br>when Just Attacking different PAs or Techniques."
    },
    "LC1G": {
        name_en: "S3:Nature's Melody",
        name_jp: "S3:花海雪の歌",
        name_glen: "*S3:Nature's Melody",
        effect_en: "Increase damage over time when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。",
        effect_glen: "Increase damage over time when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LC1H": {
        name_en: "S3:Nature's Gleam 2",
        name_jp: "S3:花海雪の輝勢2",
        name_glen: "*S3:Nature's Gleam 2",
        effect_en: "Increase Natural PP Recovery by 25%<br>when S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。",
        effect_glen: "Increase Natural PP Recovery by 25%<br>when S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active."
    },
    "LC1I": {
        name_en: "S3:Flowing Grace",
        name_jp: "S3:時流の恵",
        name_glen: "*S3:Flowing Grace",
        effect_en: "Regenerate 7 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを7回復する。",
        effect_glen: "Regenerate 7 PP every 4 seconds."
    },
    "LC1J": {
        name_en: "S3:Flowing Exhilaration 2",
        name_jp: "S3:時流活与2",
        name_glen: "*S3:Flowing Exhilaration 2",
        effect_en: "Recover 60% of your maximum HP<br>at regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。",
        effect_glen: "Recover 60% of your maximum HP<br>at regular intervals."
    },
    "LC1K": {
        name_en: "S3:Radiating Grace 2",
        name_jp: "S3:輝勢の恵2",
        name_glen: "*S3:Radiating Grace 2",
        effect_en: "Increase Automatic PP Recovery by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。",
        effect_glen: "Increase Automatic PP Recovery by 20%."
    },
    "LC88": {
        name_en: "S3:Rupturing Intent",
        name_jp: "S3:裂砕の志",
        name_glen: "*S3:Rupturing Intent",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        effect_glen: "Increase damage against breakable parts by 4%."
    },
    "LC89": {
        name_en: "S3:Nature's Gleam",
        name_jp: "S3:花海雪の輝勢",
        name_glen: "*S3:Nature's Gleam",
        effect_en: "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。",
        effect_glen: "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active."
    },
    "LC90": {
        name_en: "S3:Calming Exhilaration",
        name_jp: "S3:静心活与",
        name_glen: "*S3:Calming Exhilaration",
        effect_en: "Recover 70 HP when you hit with a normal attack. Has a cooldown between uses.",
        effect_jp: "通常攻撃が命中した時HPが70回復。発動後リキャスト発生。",
        effect_glen: "Recover 70 HP when you hit with a normal attack. Has a cooldown between uses."
    },
    "LC91": {
        name_en: "S3:Fortifying Strike",
        name_jp: "S3:撃流の備",
        name_glen: "*S3:Fortifying Strike",
        effect_en: "Decrease damage taken by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）",
        effect_glen: "Decrease damage taken by 1% for every 300, 000 damage dealt. Maxes at 15%."
    },
    "LC92": {
        name_en: "S3:Curtailed Strike",
        name_jp: "S3:撃流縮減",
        name_glen: "*S3:Curtailed Strike",
        effect_en: "Decrease PP consumption by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）",
        effect_glen: "Decrease PP consumption by 1% for every 300, 000 damage dealt. Maxes at 15%."
    },
    "LC93": {
        name_en: "S3:Wise Strike",
        name_jp: "S3:撃流の巧",
        name_glen: "*S3:Wise Strike",
        effect_en: "Increase Critical Hit Rate by 2% for every 300, 000 damage dealt. Maxes at 30%.",
        effect_jp: "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）",
        effect_glen: "Increase Critical Hit Rate by 2% for every 300, 000 damage dealt. Maxes at 30%."
    },
    "LC2B": {
        name_en: "S3:Flowing Courage",
        name_jp: "S3:時流の勇",
        name_glen: "*S3:Flowing Courage",
        effect_en: "Automatically casts Shifta at regular intervals.",
        effect_jp: "一定間隔で自身にシフタを発動する。",
        effect_glen: "Automatically casts Shifta at regular intervals."
    },
    "LC1S": {
        name_en: "S3:Furious Inspiration",
        name_jp: "S3:猛威の奮激",
        name_glen: "*S3:Furious Inspiration",
        effect_en: "Boosts power and<br>critical hit rate.<br>Improves PP efficiency.<br>This effect disappears<br>on taking damage, then<br>is restored after a set<br>time.",
        effect_jp: "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。",
        effect_glen: "Boosts power and<br>critical hit rate.<br>Improves PP efficiency.<br>This effect disappears<br>on taking damage, then<br>is restored after a set<br>time."
    },
    "LC1U": {
        name_en: "S3:Nature's Melody 2",
        name_jp: "S3:花海雪の歌2",
        name_glen: "*S3:Nature's Melody 2",
        effect_en: "While Red Petal Flash,<br>Blue Ocean Flash or<br>White Snow Flash is<br>active:<br>Boosts damage by up<br>to 7% over time.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。",
        effect_glen: "While Red Petal Flash,<br>Blue Ocean Flash or<br>White Snow Flash is<br>active:<br>Boosts damage by up<br>to 7% over time."
    },
    "LC98": {
        name_en: "S3:Powering Intent",
        name_jp: "S3:強闘の志",
        name_glen: "*S3:Mighting Intent",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが3%上昇する。",
        effect_glen: "Increase damage dealt to bosses by 4%."
    },
    "LC1V": {
        name_en: "S3:Rainbow's Reduction",
        name_jp: "S3:六色の縮減",
        name_glen: "*S3:Rainbow's Reduction",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Reduces your PP<br>consumption by 20%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。",
        effect_glen: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Reduces your PP<br>consumption by 20%."
    },
    "LC1W": {
        name_en: "S3:Rainbow's Radiance",
        name_jp: "S3:六色の輝剰",
        name_glen: "*S3:Rainbow's Radiance",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts attack PP<br>recovery by 45%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。",
        effect_glen: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts attack PP<br>recovery by 45%."
    },
    "LC1X": {
        name_en: "S3:Rainbow's Gleam",
        name_jp: "S3:六色の輝勢",
        name_glen: "*S3:Rainbow's Gleam",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts PP regeneration<br>by 40%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。",
        effect_glen: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts PP regeneration<br>by 40%."
    },
    "LD07": {
        name_en: "S4:Marvelous Aegis",
        name_jp: "S4:瞬護輝与",
        name_glen: "*S4:Marvelous Aegis",
        effect_en: "Restores PP on a successful Just Guard.",
        effect_jp: "ジャストガード成功時、PPを回復する。",
        effect_glen: "Restores PP on a successful Just Guard."
    },
    "LD08": {
        name_en: "S4:Steel Resolve",
        name_jp: "S4:鋼の決意",
        name_glen: "*S4:Steel Resolve",
        effect_en: "Survive one fatal hit with 1 HP remaining.",
        effect_jp: "致命傷を受けても一度限りだが必ずHPが1残る。",
        effect_glen: "Survive one fatal hit with 1 HP remaining."
    },
    "LD09": {
        name_en: "S4:Radiant Response",
        name_jp: "S4:輝器応変",
        name_glen: "*S4:Radiant Response",
        effect_en: "Raises PP efficiency based on maximum PP.",
        effect_jp: "最大PPに応じてPP効率が向上する。",
        effect_glen: "Raises PP efficiency based on maximum PP."
    },
    "LD0A": {
        name_en: "S4:Opposing Skill",
        name_jp: "S4:正対の巧",
        name_glen: "*S4:Opposing Skill",
        effect_en: "During Brave Stance, frontal critical<br>rate is raised by 30%.",
        effect_jp: "ブレイブスタンス中、正面へのクリティカル率が30%上昇。",
        effect_glen: "During Brave Stance, frontal critical<br>rate is raised by 30%."
    },
    "LD0B": {
        name_en: "S4:Scything Wind",
        name_jp: "S4:鎌風重吹",
        name_glen: "*S4:Scything Wind",
        effect_en: "Extends Kamaitachi duration by 4 seconds.",
        effect_jp: "カマイタチの持続時間が4秒延長される。",
        effect_glen: "Extends Kamaitachi duration by 4 seconds."
    },
    "LD0C": {
        name_en: "S4:Cunning Strike",
        name_jp: "S4:賢勇両撃",
        name_glen: "*S4:Cunning Strike",
        effect_en: "During Wise Stance, boosts frontal damage by 15%.",
        effect_jp: "ワイズスタンス中、正面からの与ダメージが15%上昇。",
        effect_glen: "During Wise Stance, boosts frontal damage by 15%."
    },
    "LD0D": {
        name_en: "S4:Vampiric Strike",
        name_jp: "S4:奪命の撃",
        name_glen: "*S4:Vampiric Strike",
        effect_en: "Restores HP equal to 1% of damage dealt.<br>(Max: 30)",
        effect_jp: "攻撃時に与ダメージの1%をHPとして吸収。(上限30)",
        effect_glen: "Restores HP equal to 1% of damage dealt.<br>(Max: 30)"
    },
    "LD0E": {
        name_en: "S4:Steadfast Courage",
        name_jp: "S4:静の胆力",
        name_glen: "*S4:Steadfast Courage",
        effect_en: "Become immune to knockback by standing still<br>for a certain time.",
        effect_jp: "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。",
        effect_glen: "Become immune to knockback by standing still<br>for a certain time."
    },
    "LD0F": {
        name_en: "S4:Lustrous Trap",
        name_jp: "S4:輝剰の罠",
        name_glen: "*S4:Lustrous Trap",
        effect_en: "Increases PP recovery from Tactics Trap by<br>20%.",
        effect_jp: "タクティクストラップのPP回復量が20%上昇。",
        effect_glen: "Increases PP recovery from Tactics Trap by<br>20%."
    },
    "LD0G": {
        name_en: "S4:Dynamic Chain",
        name_jp: "S4:鎖動強身",
        name_glen: "*S4:Dynamic Chain",
        effect_en: "Become invincible for 5 seconds when activating<br>Chain Trigger.",
        effect_jp: "チェイントリガー発動時、5秒間無敵になる。",
        effect_glen: "Become invincible for 5 seconds when activating<br>Chain Trigger."
    },
    "LD0H": {
        name_en: "S4:Refined Providence",
        name_jp: "S4:摂理洗練",
        name_glen: "*S4:Refined Providence",
        effect_en: "Enhances Element Conversion.",
        effect_jp: "エレメントコンバージョンが強化される。",
        effect_glen: "Enhances Element Conversion."
    },
    "LD0I": {
        name_en: "S4:Circuit Rotation",
        name_jp: "S4:回路輪転",
        name_glen: "*S4:Circuit Rotation",
        effect_en: "Reduces recast time of Photon Flare by 20%.",
        effect_jp: "フォトンフレアのリキャスト時間を20%軽減する。",
        effect_glen: "Reduces recast time of Photon Flare by 20%."
    },
    "LD0J": {
        name_en: "S4:Wand Clobber",
        name_jp: "S4:短杖強打",
        name_glen: "*S4:Wand Clobber",
        effect_en: "Enhances Wand's normal attacks.",
        effect_jp: "ウォンドの通常攻撃性能が強化される。",
        effect_glen: "Enhances Wand's normal attacks."
    },
    "LD0K": {
        name_en: "S4:Gear Reduction",
        name_jp: "S4:刃機放縮",
        name_glen: "*S4:Gear Reduction",
        effect_en: "Decreases rate that Gear gauge empties while<br>Katana Gear is active.",
        effect_jp: "カタナギア解放中、ギアゲージの減少速度が低下する。",
        effect_glen: "Decreases rate that Gear gauge empties while<br>Katana Gear is active."
    },
    "LD0L": {
        name_en: "S4:Rapid-fire Arrow",
        name_jp: "S4:迅弓の撃",
        name_glen: "*S4:Rapid-fire Arrow",
        effect_en: "Bullet Bow damage is boosted by 3% during<br>Rapid Shoot.",
        effect_jp: "ラピッドシュート中、バレットボウ装備時に与ダメージが3%上昇。",
        effect_glen: "Bullet Bow damage is boosted by 3% during<br>Rapid Precision."
    },
    "LD0M": {
        name_en: "S4:Support Extension",
        name_jp: "S4:支援限長",
        name_glen: "*S4:Support Extension",
        effect_en: "Extends the effect of Shifta and Deband to<br>last 120 seconds.",
        effect_jp: "シフタ・デバンドの効果時間上限を120秒に延長する。",
        effect_glen: "Extends the effect of Shifta and Deband to<br>last 120 seconds."
    },
    "LD0N": {
        name_en: "S4:Genesis Ring",
        name_jp: "S4:変素応輪",
        name_glen: "*S4:Genesis Ring",
        effect_en: "Changes the weapon's element to match an equipped<br>Guard ring.",
        effect_jp: "装備しているガード系リングに応じて武器属性が変化する。",
        effect_glen: "Changes the weapon's element to match an equipped<br>Guard ring."
    },
    "LD0O": {
        name_en: "S4:Heavenly Protection",
        name_jp: "S4:天輝の守護",
        name_glen: "*S4:Heavenly Protection",
        effect_en: "Bestow Natural PP Recovery and<br>increase PP recovery rate while Guarding.",
        effect_jp: "ガード中PPが自然回復しPP回復速度が上昇。",
        effect_glen: "Bestow Natural PP Recovery and<br>increase PP recovery rate while Guarding."
    },
    "LD0P": {
        name_en: "S4:Calming Intent",
        name_jp: "S4:静心の志",
        name_glen: "*S4:Calming Intent",
        effect_en: "Increase the power of<br>Normal Attacks by 13%.",
        effect_jp: "通常攻撃の威力が13%上昇。",
        effect_glen: "Increase the power of<br>Normal Attacks by 13%."
    },
    "LD0Q": {
        name_en: "S4:Mysterious Strike",
        name_jp: "S4:妙撃の秤",
        name_glen: "*S4:Mysterious Strike",
        effect_en: "Reduce Critical Hit Rate by 50% and<br>increase the power of Critical Hits by 6%.",
        effect_jp: "クリティカル率を50%低下し、クリティカルの威力が6%上昇。",
        effect_glen: "Reduce Critical Hit Rate by 50% and<br>increase the power of Critical Hits by 6%."
    },
    "LD0R": {
        name_en: "S4:Saint Shield",
        name_jp: "S4:聖者の盾",
        name_glen: "*S4:Saint Shield",
        effect_en: "Generates a barrier (-50% Damage Taken,<br>Negate Knockback) at regular intervals",
        effect_jp: "一定間隔で被ダメージを軽減するバリアを展開。",
        effect_glen: "Generates a barrier (-50% Damage Taken,<br>Negate Knockback) at regular intervals"
    },
    "LD0S": {
        name_en: "S4:Harmonized Rainbow",
        name_jp: "S4:六色の輝秤",
        name_glen: "*S4:Harmonized Rainbow",
        effect_en: "Decrease Natural PP Recovery but decrease PP consumption when S1:Red Petal / Blue Ocean / White Snow / Yellow Moon / Green Leaf / Black Shadow Flash are active.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。",
        effect_glen: "Decrease Natural PP Recovery but decrease PP consumption when S1:Red Petal / Blue Ocean / White Snow / Yellow Moon / Green Leaf / Black Shadow Flash are active."
    },
    "LD0T": {
        name_en: "S4:Raising Pursuit",
        name_jp: "S4:累加追撃",
        name_glen: "*S4:Raising Pursuit",
        effect_en: "When you hit with a PA/Tech, boosts damage of the next PA/Tech based on the damage you deal in the next 4 seconds.",
        effect_jp: "PA・テクニックの命中後4秒間の与ダメージ量に応じて、次に命中したPA・テクニックに追加ダメージが発生。(上限25万、リキャスト10秒)",
        effect_glen: "When you hit with a PA/Tech, boosts damage of the next PA/Tech based on the damage you deal in the next 4 seconds."
    },
    "LD0U": {
        name_en: "S4:Pursuing Eclipse",
        name_jp: "S4:追蝕の巧",
        name_glen: "*S4:Pursuing Eclipse",
        effect_en: "Boosts critical hit rate by 50% against enemies affected by Jellen, Weak Bullet or a status effect.",
        effect_jp: "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。",
        effect_glen: "Boosts critical hit rate by 50% against enemies affected by Jellen, Weak Bullet or a status effect."
    },
    "LD0V": {
        name_en: "S4:Cursed Rainbow",
        name_jp: "S4:六色の災転",
        name_glen: "*S4:Cursed Rainbow",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Recovers 500 HP each time you take 500 or more damage at once.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。",
        effect_glen: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Recovers 500 HP each time you take 500 or more damage at once."
    },
    "LD0W": {
        name_en: "S4:Colossal Radiance",
        name_jp: "S4:強闘輝与",
        name_glen: "*S4:Colossal Radiance",
        effect_en: "Recovers 40 PP every 10 seconds when there is a boss nearby.",
        effect_jp: "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。",
        effect_glen: "Recovers 40 PP every 10 seconds when there is a boss nearby."
    },
    "LD0X": {
        name_en: "S4:Evasion Training",
        name_jp: "S4:回避訓練",
        name_glen: "*S4:Evasion Training",
        effect_en: "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status.If you do not evade, recover 5% HP.",
        effect_jp: "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを５％回復する。",
        effect_glen: "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status.If you do not evade, recover 5% HP."
    },
    "LD0Y": {
        name_en: "S4:Radiant Eclipse",
        name_jp: "S4:追蝕輝剰",
        name_glen: "*S4:Radiant Eclipse",
        effect_en: "Increases active PP recovery by 60% when attacking an enemy affectedw by a Status Effect, Jellen, or Weak Bullet.",
        effect_jp: "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。",
        effect_glen: "Increases active PP recovery by 60% when attacking an enemy affectedw by a Status Effect, Jellen, or Weak Bullet."
    },
    "LD0Z": {
        name_en: "S4:Shared Ruin",
        name_jp: "S4:滅域分与",
        name_glen: "*S4:Shared Ruin",
        effect_en: "You and your party<br>recover HP and PP<br>when an enemy dies<br>within range.",
        effect_jp: "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。",
        effect_glen: "You and your party<br>recover HP and PP<br>when an enemy dies<br>within range."
    },
    "LE01": {
        name_en: "S5:Release Parry",
        name_jp: "S5:瞬護解放",
        name_glen: "*S5:Release Parry",
        effect_en: "Performance changes when Just Guarding with a Weapon Action. Sword only.",
        effect_jp: "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。",
        effect_glen: "Performance changes when Just Guarding with a Weapon Action. Sword only."
    },
    "LE02": {
        name_en: "S5:Unrivaled Parry",
        name_jp: "S5:瞬護無双",
        name_glen: "*S5:Unrivaled Parry",
        effect_en: "Consume no Gear for 15s after performing a Just Guard. Increase Power by 2%. Wired Lance only.",
        effect_jp: "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。",
        effect_glen: "Consume no Gear for 15s after performing a Just Guard. Increase Might by 2%. Wired Lance only."
    },
    "LE03": {
        name_en: "S5:Rushing Bolt",
        name_jp: "S5:瞬駆突貫",
        name_glen: "*S5:Rushing Bolt",
        effect_en: "Inflict damage while running. Unleash a shockwave attack when you stop running. Increase Power by 2%. Partizan only.",
        effect_jp: "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。",
        effect_glen: "Inflict damage while running. Unleash a shockwave attack when you stop running. Increase Might by 2%. Partizan only."
    },
    "LE04": {
        name_en: "S5:Shining Cyclone",
        name_jp: "S5:輝境の旋",
        name_glen: "*S5:Shining Cyclone",
        effect_en: "PP recovery and consumption changes when your maximum PP falls below 50%. Twin Daggers only.",
        effect_jp: "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。",
        effect_glen: "PP recovery and consumption changes when your maximum PP falls below 50%. Twin Daggers only."
    },
    "LE05": {
        name_en: "S5:Evasive Barrage",
        name_jp: "S5:巧避連撃",
        name_glen: "*S5:Evasive Barrage",
        effect_en: "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying.Increase Power by 2%. Double Saber only.",
        effect_jp: "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。",
        effect_glen: "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying.Increase Might by 2%. Double Saber only."
    },
    "LE06": {
        name_en: "S5:Evasive Meteor",
        name_jp: "S5:巧避巨拳",
        name_glen: "*S5:Evasive Meteor",
        effect_en: "Successfully evade an attack with Sway to summon a giant fist. Increase Power by 2%. Knuckles only.",
        effect_jp: "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。",
        effect_glen: "Successfully evade an attack with Sway to summon a giant fist. Increase Might by 2%. Knuckles only."
    },
    "LE07": {
        name_en: "S5:Hangeki Edge",
        name_jp: "S5:反撃鋭刃",
        name_glen: "*S5:Hangeki Edge",
        effect_en: "Increase the damage of Counter by 15%. Restore Braver Gear Gauge to its maximum value when you successfully perform Katana Counter.Increase Power by 2%. Katana only.",
        effect_jp: "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが最大まで上昇。威力2%上昇。抜剣限定。",
        effect_glen: "Increase the damage of Counter by 15%. Restore Braver Gear Gauge to its maximum value when you successfully perform Katana Counter.Increase Might by 2%. Katana only."
    },
    "LE08": {
        name_en: "S5:Thundering Pursuit",
        name_jp: "S5:雷光追撃",
        name_glen: "*S5:Thundering Pursuit",
        effect_en: "When using a PA, lightning-charged Photon Blades are generated. (Power: ?%). Dual Blades only.",
        effect_jp: "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。",
        effect_glen: "When using a PA, lightning-charged Photon Blades are generated. (Might: ?%). Dual Blades only."
    },
    "LE09": {
        name_en: "S5:Fiery End",
        name_jp: "S5:烈終焉弾",
        name_glen: "*S5:Fiery End",
        effect_en: "Enhance the performance of End Attract with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Assault Rifle only.",
        effect_jp: "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。",
        effect_glen: "Enhance the performance of End Attract with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Might by 2%. Assault Rifle only."
    },
    "LE0A": {
        name_en: "S5:Fiery Zero",
        name_jp: "S5:烈零射砲",
        name_glen: "*S5:Fiery Zero",
        effect_en: "Enhance the performance of Zero Distance with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Launcher only.",
        effect_jp: "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。",
        effect_glen: "Enhance the performance of Zero Distance with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Might by 2%. Launcher only."
    },
    "LE0B": {
        name_en: "S5:Bright Escape",
        name_jp: "S5:巧避輝与",
        name_glen: "*S5:Bright Escape",
        effect_en: "Successfully evade an attack with Hero Step or Stylish Roll to restore PP. Effect is negated if damage is taken.Twin Machineguns only.",
        effect_jp: "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。",
        effect_glen: "Successfully evade an attack with Hero Step or Stylish Roll to restore PP. Effect is negated if damage is taken.Twin Machineguns only."
    },
    "LE0C": {
        name_en: "S5:Auxiliary Arrow",
        name_jp: "S5:追射剛矢",
        name_glen: "*S5:Auxiliary Arrow",
        effect_en: "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds after successfully dodging an attack with Step.Bullet Bow only.",
        effect_jp: "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。",
        effect_glen: "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds after successfully dodging an attack with Step.Bullet Bow only."
    },
    "LE0D": {
        name_en: "S5:Calming Bullet",
        name_jp: "S5:静心杖弾",
        name_glen: "*S5:Calming Bullet",
        effect_en: "Enhance the performance of Normal Attacks and increase the damage of Rod Shoot by 100%. Rod only.",
        effect_jp: "通常攻撃性能が強化されロッドシュートの威力が100%上昇する。長杖限定。",
        effect_glen: "Enhance the performance of Normal Attacks and increase the damage of Rod Precision by 100%. Rod only."
    },
    "LE0E": {
        name_en: "S5:Speedy Support",
        name_jp: "S5:急速補助",
        name_glen: "*S5:Speedy Support",
        effect_en: "Shorten the charge time of Support Techniques. The power of Zondeel is reduced. Talis only.",
        effect_jp: "補助テクニックのチャージ時間を短縮。ゾンディールの威力減少。導具限定。",
        effect_glen: "Shorten the charge time of Support Techniques. The power of Zondeel is reduced. Talis only."
    },
    "LE0F": {
        name_en: "S5:Calming Shockwave",
        name_jp: "S5:静心衝杖",
        name_glen: "*S5:Calming Shockwave",
        effect_en: "Generates a wave attack on the third Normal Attack. Increase Power by 2%. Wand only.",
        effect_jp: "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。",
        effect_glen: "Generates a wave attack on the third Normal Attack. Increase Might by 2%. Wand only."
    },
    "LE0G": {
        name_en: "S5:Rhythmic Pursuer",
        name_jp: "S5:追災律動",
        name_glen: "*S5:Rhythmic Pursuer",
        effect_en: "Boost the potency of Elemental Burst by 30% and automatically activate Elemental Burst when using a Photon Art.Jet Boots only.",
        effect_jp: "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。",
        effect_glen: "Boost the potency of Elemental Burst by 30% and automatically activate Elemental Burst when using a Photon Art.Jet Boots only."
    },
    "LE0H": {
        name_en: "S5:Mysterious Intent",
        name_jp: "S5:妙の巧志",
        name_glen: "*S5:Mysterious Intent",
        effect_en: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
        effect_jp: "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)",
        effect_glen: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX)."
    },
    "LE0I": {
        name_en: "S5:Anthesis Cultivation",
        name_jp: "S5:錬成萌花",
        name_glen: "*S5:Anthesis Cultivation",
        effect_en: "Doubles the effects of Special Abilities.",
        effect_jp: "特殊能力のステータス変化を2倍にする。",
        effect_glen: "Doubles the effects of Special Abilities."
    },
    "LE98": {
        name_en: "S5:Instant Invocation",
        name_jp: "S5:錬成萌花",
        name_glen: "*S5:Instant Invocation",
        effect_en: "Technique damage is<br>decreased by 40%, but<br>using the same<br>Technique with a JA<br>substantially<br>decreases charge<br>time.",
        effect_jp: "テクニックの与ダメージが常時40%減少するがテクニック使用後に同属性テクニックJAでチャージ時間大幅短縮。",
        effect_glen: "Technique damage is<br>decreased by 40%, but<br>using the same<br>Technique with a JA<br>substantially<br>decreases charge<br>time."
    },
    "LE0J": {
        name_en: "S5:Vigorous Response",
        name_jp: "S5:錬成萌花",
        name_glen: "*S5:Vigorous Response",
        effect_en: "Grants a bonus when<br>your max HP is at<br>1000. Gain additional<br>bonuses per 500 max<br>HP over. Maximum<br>bonuses are reached<br>when max HP is at<br>3000.",
        effect_jp: "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000",
        effect_glen: "Grants a bonus when<br>your max HP is at<br>1000. Gain additional<br>bonuses per 500 max<br>HP over. Maximum<br>bonuses are reached<br>when max HP is at<br>3000."
    },
    "LE0K": {
        name_en: "S5:Tethered Eclipse",
        name_jp: "S5:錬成萌花",
        name_glen: "*S5:Tethered Eclipse",
        effect_en: "Boosts damage by 3%<br>against enemies<br>inflicted with a<br>status effect. Also<br>gives a chance to<br>inflict Bind by 40%.",
        effect_jp: "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。",
        effect_glen: "Boosts damage by 3%<br>against enemies<br>inflicted with a<br>status effect. Also<br>gives a chance to<br>inflict Bind by 40%."
    },
    "LE97": {
        name_en: "S5:Angelic Respite",
        name_jp: "S5:槍機天悠",
        name_glen: "*S5:Angelic Respite",
        effect_en: "At maximum gear, no gear is consumed while airborne. Increase Power by 2%. Partizan only.",
        effect_jp: "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。",
        effect_glen: "At maximum gear, no gear is consumed while airborne. Increase Might by 2%. Partizan only."
    },
    "LF0A": {
        name_en: "S6:Heroic Howl",
        name_jp: "S6:英雄咆哮",
        name_glen: "*S6:Heroic Howl",
        effect_en: "Enhances Hero Boost. Increases the rate that Hero Boosts's damage boost increases. No effect if using weapon with \"Heroic Victory\".",
        effect_jp: "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。",
        effect_glen: "Enhances Hero Boost. Increases the rate that Hero Boosts's damage boost increases. No effect if using weapon with \"Heroic Victory\"."
    },
    "LF0B": {
        name_en: "S6:Soaring Ballet",
        name_jp: "S6:翔機天舞",
        name_glen: "*S6:Soaring Ballet",
        effect_en: "Bouncer weapon Gear fills while standing still. No effect if using weapon with \"Angelic Guidance\".",
        effect_jp: "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。",
        effect_glen: "Bouncer weapon Gear fills while standing still. No effect if using weapon with \"Angelic Guidance\"."
    },
    "LF0C": {
        name_en: "S6:Guardian's Essence",
        name_jp: "S6:機魂の守護",
        name_glen: "*S6:Guardian's Essence",
        effect_en: "Hunter weapon and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\".",
        effect_jp: "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。",
        effect_glen: "Hunter weapon and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\"."
    },
    "LF0D": {
        name_en: "S6:Ironclad Illness",
        name_jp: "S6:癒蝕頑強",
        name_glen: "*S6:Ironclad Illness",
        effect_en: "Become massive for 60 seconds after becoming affected by a status.",
        effect_jp: "状態異常になってから60秒間、頑強になる。",
        effect_glen: "Become massive for 60 seconds after becoming affected by a status."
    },
    "LF0E": {
        name_en: "S6:Wise Skill",
        name_jp: "S6:妙技の巧",
        name_glen: "*S6:Wise Skill",
        effect_en: "Increases your critical hit rate by 15%.",
        effect_jp: "クリティカル率が15％上昇する。",
        effect_glen: "Increases your critical hit rate by 15%."
    },
    "LF0F": {
        name_en: "S6:Guardian Armor",
        name_jp: "S6:守護の備",
        name_glen: "*S6:Guardian Deftnessor",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LF0G": {
        name_en: "S6:S-ATK Up",
        name_jp: "S6:打撃上昇",
        name_glen: "*S6:MEL Pwr Up",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LF0H": {
        name_en: "S6:R-ATK Up",
        name_jp: "S6:射撃上昇",
        name_glen: "*S6:RNG Pwr Up",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LF0I": {
        name_en: "S6:T-ATK Up",
        name_jp: "S6:法撃上昇",
        name_glen: "*S6:TEC Pwr Up",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LF0J": {
        name_en: "S6:HP Up",
        name_jp: "S6:活器上昇",
        name_glen: "*S6:HP Up",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "LF0K": {
        name_en: "S6:PP Up",
        name_jp: "S6:輝器上昇",
        name_glen: "*S6:PP Up",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LF0L": {
        name_en: "S6:Brilliant Ruin",
        name_jp: "S6:滅域輝与",
        name_glen: "*S6:Brilliant Ruin",
        effect_en: "Recover 5 PP when an enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover 5 PP when an enemy near you is defeated."
    },
    "LF0M": {
        name_en: "S6:Readying Guard",
        name_jp: "S6:守護乱備",
        name_glen: "*S6:Readying Guard",
        effect_en: "Gain a 10% chance to reduce damage by 70%.",
        effect_jp: "10％の確率で被ダメージを70％軽減。",
        effect_glen: "Gain a 10% chance to reduce damage by 70%."
    },
    "LF0N": {
        name_en: "S6:Angelic Wings",
        name_jp: "S6:翔天の翼",
        name_glen: "*S6:Angelic Wings",
        effect_en: "Increases Jump Power.",
        effect_jp: "ジャンプ力が上昇する。",
        effect_glen: "Increases Jump Might."
    },
    "LF0O": {
        name_en: "S6:Long Night Star",
        name_jp: "S6:長夜の明星",
        name_glen: "*S6:Long Night Star",
        effect_en: "Reduce Etoile Boost's decay per second by 50%.",
        effect_jp: "エトワールブーストの秒間軽減減少率を50％緩和する。",
        effect_glen: "Reduce Etoile Boost's decay per second by 50%."
    },
    "LF0P": {
        name_en: "S6:Evasion Whistle",
        name_jp: "S6:回避の口笛",
        name_glen: "*S6:Evasion Whistle",
        effect_en: "Dodging will cause your pet to return back to you.",
        effect_jp: "回避行動に合わせてペットが戻ってくる。",
        effect_glen: "Dodging will cause your pet to return back to you."
    },
    "LF0Q": {
        name_en: "S6:Battle Readiness",
        name_jp: "S6:修羅の備",
        name_glen: "*S6:Battle Readiness",
        effect_en: "When your HP is at 50% or lower, damage is reduced by 40%. Resets after a brief cooldown.",
        effect_jp: "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。",
        effect_glen: "When your HP is at 50% or lower, damage is reduced by 40%. Resets after a brief cooldown."
    },
    "LF0S": {
        name_en: "S6:Overlimit",
        name_jp: "S6:超限活器",
        name_glen: "*S6:Overlimit",
        effect_en: "Boosts maximum HP by<br>50% while Limit Break<br>is active.",
        effect_jp: "リミットブレイク発動中最大HPが50%上昇する。",
        effect_glen: "Boosts maximum HP by<br>50% while Limit Break<br>is active."
    },
    "LG0A": {
        name_en: "S7:Glowing Grace",
        name_jp: "S7:輝静の恵",
        name_glen: "*S7:Glowing Grace",
        effect_en: "Recovers 4 PP per second when standing still for longer than 1 second.",
        effect_jp: "1秒間静止状態が続いた時、ppが1秒ごとに4回復。",
        effect_glen: "Recovers 4 PP per second when standing still for longer than 1 second."
    },
    "LG0B": {
        name_en: "S7:S-ATK Up",
        name_jp: "S7:打撃上昇",
        name_glen: "*S7:MEL Pwr Up",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LG0C": {
        name_en: "S7:R-ATK Up",
        name_jp: "S7:射撃上昇",
        name_glen: "*S7:RNG Pwr Up",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LG0D": {
        name_en: "S7:T-ATK Up",
        name_jp: "S7:法撃上昇",
        name_glen: "*S7:TEC Pwr Up",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LG0E": {
        name_en: "S7:HP Up",
        name_jp: "S7:活器上昇",
        name_glen: "*S7:HP Up",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "LG0F": {
        name_en: "S7:PP Up",
        name_jp: "S7:輝器上昇",
        name_glen: "*S7:PP Up",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LG0G": {
        name_en: "S7:S-Atk Up 2",
        name_jp: "S7:打撃上昇2",
        name_glen: "*S7:S-Atk Up 2",
        effect_en: "S-ATK(+50)",
        effect_jp: "打撃力(+50)",
        effect_glen: "MEL Pwr(+50)"
    },
    "LG0H": {
        name_en: "S7:R-ATK Up 2",
        name_jp: "S7:射撃上昇2",
        name_glen: "*S7:RNG Pwr Up 2",
        effect_en: "R-ATK(+50)",
        effect_jp: "射撃力(+50)",
        effect_glen: "RNG Pwr(+50)"
    },
    "LG0I": {
        name_en: "S7:T-ATK Up 2",
        name_jp: "S7:法撃上昇2",
        name_glen: "*S7:TEC Pwr Up 2",
        effect_en: "T-ATK(+50)",
        effect_jp: "法撃力(+50)",
        effect_glen: "TEC Pwr(+50)"
    },
    "LG0J": {
        name_en: "S7:Attack Up",
        name_jp: "S7:攻撃上昇",
        name_glen: "*S7:Attack Up",
        effect_en: "S-ATK(+25),R-ATK(+25),T-ATK(+25)",
        effect_jp: "打撃力(+25),射撃力(+25),法撃力(+25)",
        effect_glen: "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25)"
    },
    "LG0K": {
        name_en: "S7:Attack Up 2",
        name_jp: "S7:攻撃上昇2",
        name_glen: "*S7:Attack Up 2",
        effect_en: "S-ATK(+45),R-ATK(+45),T-ATK(+45)",
        effect_jp: "打撃力(+45),射撃力(+45),法撃力(+45)",
        effect_glen: "MEL Pwr(+45),RNG Pwr(+45),TEC Pwr(+45)"
    },
    "LG0L": {
        name_en: "S7:Zenith Impact",
        name_jp: "S7:瞬撃の極",
        name_glen: "*S7:Zenith Impact",
        effect_en: "Gain a 10% chance to stun the enemy with a Just Attack.",
        effect_jp: "ジャストアタック時に10%の確率で対象をスタンさせる。",
        effect_glen: "Gain a 10% chance to stun the enemy with a Just Attack."
    },
    "LG0M": {
        name_en: "S7:Increased Efficiency",
        name_jp: "S7:薬効増大",
        name_glen: "*S7:Increased Efficiency",
        effect_en: "Boost the effect of recovery items by 30%.",
        effect_jp: "回復アイテムの効果を30％上昇させる。",
        effect_glen: "Boost the effect of recovery items by 30%."
    },
    "LG0N": {
        name_en: "S7:Mind Merge",
        name_jp: "S7:以心伝心",
        name_glen: "*S7:Genius Merge",
        effect_en: "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\".",
        effect_jp: "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。",
        effect_glen: "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\"."
    },
    "LG0O": {
        name_en: "S7:Sentinel's Gift",
        name_jp: "S7:法護の与",
        name_glen: "*S7:Sentinel's Gift",
        effect_en: "Upon a successful<br>Tech Charge Parry,<br>recover 5% HP and 10 PP.",
        effect_jp: "テックCパリング成功時HPを5%回復しPPを10回復。",
        effect_glen: "Upon a successful<br>Tech Charge Parry,<br>recover 5% HP and 10 PP."
    },
    "LH0A": {
        name_en: "S8:Sky Dance's Boon",
        name_jp: "S8:舞空の援",
        name_glen: "*S8:Sky Dance's Boon",
        effect_en: "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds.",
        effect_jp: "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。",
        effect_glen: "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds."
    },
    "LH0B": {
        name_en: "S8:Strong Potency",
        name_jp: "S8:服薬強身",
        name_glen: "*S8:Strong Potency",
        effect_en: "Makes you temporarily invincible after drinking a -mate item.",
        effect_jp: "自身でメイト系アイテム使用時、一定時間無敵。",
        effect_glen: "Makes you temporarily invincible after drinking a -mate item."
    },
    "LH0C": {
        name_en: "S8:S-ATK Up",
        name_jp: "S8:打撃上昇",
        name_glen: "*S8:MEL Pwr Up",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LH0D": {
        name_en: "S8:R-ATK Up",
        name_jp: "S8:射撃上昇",
        name_glen: "*S8:RNG Pwr Up",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LH0E": {
        name_en: "S8:T-ATK Up",
        name_jp: "S8:法撃上昇",
        name_glen: "*S8:TEC Pwr Up",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LH0F": {
        name_en: "S8:HP Up",
        name_jp: "S8:活器上昇",
        name_glen: "*S8:HP Up",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "LH0G": {
        name_en: "S8:PP Up",
        name_jp: "S8:輝器上昇",
        name_glen: "*S8:PP Up",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LH0H": {
        name_en: "S8:HP Up 2",
        name_jp: "S8:活器上昇2",
        name_glen: "*S8:HP Up 2",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)",
        effect_glen: "HP(+60)"
    },
    "LH0I": {
        name_en: "S8:PP Up 2",
        name_jp: "S8:輝器上昇2",
        name_glen: "*S8:PP Up 2",
        effect_en: "PP(+6)",
        effect_jp: "PP(+6)",
        effect_glen: "PP(+6)"
    },
    "LH0J": {
        name_en: "S8:High-Minded",
        name_jp: "S8:一念滞空",
        name_glen: "*S8:High-Geniused",
        effect_en: "Reduce falling speed while charging a Technique in mid-air.",
        effect_jp: "空中でテクニックをチャージ中に落下速度が遅くなる。",
        effect_glen: "Reduce falling speed while charging a Technique in mid-air."
    },
    "OA01": {
        name_en: "Mutation I",
        name_jp: "ミューテーションⅠ",
        name_glen: "Mutation I",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+10)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>,法撃力(+10)<br>HP(+10)",
        effect_glen: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+10)"
    },
    "OA02": {
        name_en: "Mutation II",
        name_jp: "ミューテーションⅡ",
        name_glen: "Mutation II",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+15)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>,法撃力(+15)<br>HP(+15)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+15)"
    },
    "RA11": {
        name_en: "Gunne Soul",
        name_jp: "グンネ・ソール",
        name_glen: "Gunne Soul",
        effect_en: "S-ATK(+15),<br>HP(+45)",
        effect_jp: "打撃力(+15),<br>HP(+45)",
        effect_glen: "MEL Pwr(+15),<br>HP(+45)"
    },
    "RA15": {
        name_en: "Zigmor Soul",
        name_jp: "ジグモル・ソール",
        name_glen: "Jigmol Soul",
        effect_en: "S-ATK(+15),<br>PP(+4)",
        effect_jp: "打撃力(+15),<br>PP(+4)",
        effect_glen: "MEL Pwr(+15),<br>PP(+4)"
    },
    "RA21": {
        name_en: "Vol Soul",
        name_jp: "ヴォル・ソール",
        name_glen: "Vol Soul",
        effect_en: "S-ATK(+30),<br>HP(+20)",
        effect_jp: "打撃力(+30),<br>HP(+20)",
        effect_glen: "MEL Pwr(+30),<br>HP(+20)"
    },
    "RA22": {
        name_en: "Gwana Soul",
        name_jp: "グワナ・ソール",
        name_glen: "Gwana Soul",
        effect_en: "S-ATK(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "打撃力(+30),<br>HP(+10),<br>PP(+2)",
        effect_glen: "MEL Pwr(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RA23": {
        name_en: "Quartz Soul",
        name_jp: "クォーツ・ソール",
        name_glen: "Quartz Soul",
        effect_en: "S-ATK(+30),<br>PP(+3)",
        effect_jp: "打撃力(+30),<br>PP(+3)",
        effect_glen: "MEL Pwr(+30),<br>PP(+3)"
    },
    "RA31": {
        name_en: "Deadleon Soul",
        name_jp: "デッドリオン・ソール",
        name_glen: "Deadlion Soul",
        effect_en: "S-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>HP(+30)",
        effect_glen: "MEL Pwr(+35),<br>DEX(+5),<br>HP(+30)"
    },
    "RA32": {
        name_en: "Leone Soul",
        name_jp: "レオーネ・ソール",
        name_glen: "Leone Soul",
        effect_en: "S-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RA33": {
        name_en: "Bayari Soul",
        name_jp: "ベーアリ・ソール",
        name_glen: "Beari Soul",
        effect_en: "S-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "打撃力(+35),<br>技量(+5),<br>PP(+3)",
        effect_glen: "MEL Pwr(+35),<br>DEX(+5),<br>PP(+3)"
    },
    "RB11": {
        name_en: "Idetta Soul",
        name_jp: "イーデッタ・ソール",
        name_glen: "Idihta Soul",
        effect_en: "R-ATK(+15),<br>HP(+45)",
        effect_jp: "射撃力(+15),<br>HP(+45)",
        effect_glen: "RNG Pwr(+15),<br>HP(+45)"
    },
    "RB15": {
        name_en: "Madu Soul",
        name_jp: "マドゥ・ソール",
        name_glen: "Madu Soul",
        effect_en: "R-ATK(+15),<br>PP(+4)",
        effect_jp: "射撃力(+15),<br>PP(+4)",
        effect_glen: "RNG Pwr(+15),<br>PP(+4)"
    },
    "RB21": {
        name_en: "Ra\'nsa Soul",
        name_jp: "ランサ・ソール",
        name_glen: "Ransa Soul",
        effect_en: "R-ATK(+30),<br>HP(+20)",
        effect_jp: "射撃力(+30),<br>HP(+20)",
        effect_glen: "RNG Pwr(+30),<br>HP(+20)"
    },
    "RB22": {
        name_en: "Fang Soul",
        name_jp: "ファング・ソール",
        name_glen: "Fang Soul",
        effect_en: "R-ATK(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "射撃力(+30),<br>HP(+10),<br>PP(+2)",
        effect_glen: "RNG Pwr(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RB23": {
        name_en: "Mizer Soul",
        name_jp: "マイザー・ソール",
        name_glen: "Mizer Soul",
        effect_en: "R-ATK(+30),<br>PP(+3)",
        effect_jp: "射撃力(+30),<br>PP(+3)",
        effect_glen: "RNG Pwr(+30),<br>PP(+3)"
    },
    "RB31": {
        name_en: "Leopard Soul",
        name_jp: "レオパード・ソール",
        name_glen: "Leopod Soul",
        effect_en: "R-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>HP(+30)",
        effect_glen: "RNG Pwr(+35),<br>DEX(+5),<br>HP(+30)"
    },
    "RB32": {
        name_en: "Siorg Soul",
        name_jp: "ジオーグ・ソール",
        name_glen: "Siogr Soul",
        effect_en: "R-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)",
        effect_glen: "RNG Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RB33": {
        name_en: "Greuzoras Soul",
        name_jp: "グリュゾラス・ソール",
        name_glen: "Greuzoras Soul",
        effect_en: "R-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "射撃力(+35),<br>技量(+5),<br>PP(+3)",
        effect_glen: "RNG Pwr(+35),<br>DEX(+5),<br>PP(+3)"
    },
    "RC11": {
        name_en: "Jhadu Soul",
        name_jp: "ジャドゥ・ソール",
        name_glen: "Jadeu Soul",
        effect_en: "T-ATK(+15),<br>HP(+45)",
        effect_jp: "法撃力(+15),<br>HP(+45)",
        effect_glen: "TEC Pwr(+15),<br>HP(+45)"
    },
    "RC13": {
        name_en: "Nepto Soul",
        name_jp: "ネプト・ソール",
        name_glen: "Nept Soul",
        effect_en: "T-ATK(+15),<br>PP(+4)",
        effect_jp: "法撃力(+15),<br>PP(+4)",
        effect_glen: "TEC Pwr(+15),<br>PP(+4)"
    },
    "RC21": {
        name_en: "Ragne Soul",
        name_jp: "ラグネ・ソール",
        name_glen: "Ragne Soul",
        effect_en: "T-ATK(+30),<br>HP(+20)",
        effect_jp: "法撃力(+30),<br>HP(+20)",
        effect_glen: "TEC Pwr(+30),<br>HP(+20)"
    },
    "RC22": {
        name_en: "Wolga Soul",
        name_jp: "ウォルガ・ソール",
        name_glen: "Wolga Soul",
        effect_en: "T-ATK(+30),<br>HP(+10),<br>PP(+2)",
        effect_jp: "法撃力(+30),<br>HP(+10),<br>PP(+2)",
        effect_glen: "TEC Pwr(+30),<br>HP(+10),<br>PP(+2)"
    },
    "RC23": {
        name_en: "Elder Soul",
        name_jp: "エルダー・ソール",
        name_glen: "Elder Soul",
        effect_en: "T-ATK(+30),<br>PP(+3)",
        effect_jp: "法撃力(+30),<br>PP(+3)",
        effect_glen: "TEC Pwr(+30),<br>PP(+3)"
    },
    "RC31": {
        name_en: "Diabo Soul",
        name_jp: "ディアボ・ソール",
        name_glen: "Diabo Soul",
        effect_en: "T-ATK(+35),<br>DEX(+5),<br>HP(+30)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>HP(+30)",
        effect_glen: "TEC Pwr(+35),<br>DEX(+5),<br>HP(+30)"
    },
    "RC32": {
        name_en: "Duvals Soul",
        name_jp: "ドゥバルス・ソール",
        name_glen: "Duvals Soul",
        effect_en: "T-ATK(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>HP(+20),<br>PP(+1)",
        effect_glen: "TEC Pwr(+35),<br>DEX(+5),<br>HP(+20),<br>PP(+1)"
    },
    "RC33": {
        name_en: "Guranz Soul",
        name_jp: "グランゾ・ソール",
        name_glen: "Granz Soul",
        effect_en: "T-ATK(+35),<br>DEX(+5),<br>PP(+3)",
        effect_jp: "法撃力(+35),<br>技量(+5),<br>PP(+3)",
        effect_glen: "TEC Pwr(+35),<br>DEX(+5),<br>PP(+3)"
    },
    "RE13": {
        name_en: "Nyau Soul",
        name_jp: "ニャウ・ソール",
        name_glen: "Nyau Soul",
        effect_en: "DEX(+15),<br>PP(+4)",
        effect_jp: "技量(+15),<br>PP(+4)",
        effect_glen: "DEX(+15),<br>PP(+4)"
    },
    "RE21": {
        name_en: "Signo Soul",
        name_jp: "シグノ・ソール",
        name_glen: "Signo Soul",
        effect_en: "DEX(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "技量(+30),<br>HP(+20),<br>PP(+1)",
        effect_glen: "DEX(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RE22": {
        name_en: "Chrome Soul",
        name_jp: "クローム・ソール",
        name_glen: "Chrome Soul",
        effect_en: "DEX(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "技量(+30),<br>HP(+10),<br>PP(+3)",
        effect_glen: "DEX(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RE23": {
        name_en: "Rappy Soul",
        name_jp: "ラッピー・ソール",
        name_glen: "Rappy Soul",
        effect_en: "DEX(+30),<br>PP(+4)",
        effect_jp: "技量(+30),<br>PP(+4)",
        effect_glen: "DEX(+30),<br>PP(+4)"
    },
    "RE51": {
        name_en: "Sinow Soul",
        name_jp: "シノワ・ソール",
        name_glen: "Sinow Soul",
        effect_en: "S-ATK(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)",
        effect_jp: "打撃力(+5),<br>技量(+30),<br>HP(+25)<br>PP(+2)",
        effect_glen: "MEL Pwr(+5),<br>DEX(+30),<br>HP(+25)<br>PP(+2)"
    },
    "RH21": {
        name_en: "Snow Soul",
        name_jp: "スノウ・ソール",
        name_glen: "Snow Soul",
        effect_en: "S-DEF(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃防御(+30),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Def(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RH22": {
        name_en: "Rockbear Soul",
        name_jp: "ロックベア・ソール",
        name_glen: "Rockbear Soul",
        effect_en: "S-DEF(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "打撃防御(+30),<br>HP(+10),<br>PP(+3)",
        effect_glen: "MEL Def(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RH23": {
        name_en: "Ex Soul",
        name_jp: "エクス・ソール",
        name_glen: "X Soul",
        effect_en: "S-DEF(+30),<br>PP(+4)",
        effect_jp: "打撃防御(+30),<br>PP(+4)",
        effect_glen: "MEL Def(+30),<br>PP(+4)"
    },
    "RI21": {
        name_en: "Malmo Soul",
        name_jp: "マルモ・ソール",
        name_glen: "Marmoth Soul",
        effect_en: "R-DEF(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "射撃防御(+30),<br>HP(+20),<br>PP(+1)",
        effect_glen: "RNG Def(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RI22": {
        name_en: "Persona Soul",
        name_jp: "ペルソナ・ソール",
        name_glen: "Persona Soul",
        effect_en: "R-DEF(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "射撃防御(+30),<br>HP(+10),<br>PP(+3)",
        effect_glen: "RNG Def(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RI23": {
        name_en: "Vardha Soul",
        name_jp: "ヴァーダー・ソール",
        name_glen: "Varder Soul",
        effect_en: "R-DEF(+30),<br>PP(+4)",
        effect_jp: "射撃防御(+30),<br>PP(+4)",
        effect_glen: "RNG Def(+30),<br>PP(+4)"
    },
    "RJ21": {
        name_en: "Cater Soul",
        name_jp: "キャタ・ソール",
        name_glen: "Catre Soul",
        effect_en: "T-DEF(+30),<br>HP(+20),<br>PP(+1)",
        effect_jp: "法撃防御(+30),<br>HP(+20),<br>PP(+1)",
        effect_glen: "TEC Def(+30),<br>HP(+20),<br>PP(+1)"
    },
    "RJ22": {
        name_en: "Shrayda Soul",
        name_jp: "シュレイダ・ソール",
        name_glen: "Shraider Soul",
        effect_en: "T-DEF(+30),<br>HP(+10),<br>PP(+3)",
        effect_jp: "法撃防御(+30),<br>HP(+10),<br>PP(+3)",
        effect_glen: "TEC Def(+30),<br>HP(+10),<br>PP(+3)"
    },
    "RJ23": {
        name_en: "Goron Soul",
        name_jp: "ゴロン・ソール",
        name_glen: "Goron Soul",
        effect_en: "T-DEF(+30),<br>PP(+4)",
        effect_jp: "法撃防御(+30),<br>PP(+4)",
        effect_glen: "TEC Def(+30),<br>PP(+4)"
    },
    "ROA1": {
        name_en: "Org Soul",
        name_jp: "オルグ・ソール",
        name_glen: "Org Soul",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>HP(+10)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>HP(+10)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>HP(+10)"
    },
    "ROA2": {
        name_en: "Meduna Soul",
        name_jp: "メデューナ・ソール",
        name_glen: "Meduna Soul",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROA3": {
        name_en: "Soma Soul",
        name_jp: "ソーマ・ソール",
        name_glen: "Soma Soul",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>PP(+2)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>PP(+2)"
    },
    "ROC1": {
        name_en: "Ringa Soul",
        name_jp: "リンガ・ソール",
        name_glen: "Ringa Soul",
        effect_en: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>HP(+10)",
        effect_glen: "MEL Pwr(+20),<br>TEC Pwr(+20),<br>HP(+10)"
    },
    "ROC2": {
        name_en: "Loser Soul",
        name_jp: "ルーサー・ソール",
        name_glen: "Luther Soul",
        effect_en: "S-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+20),<br>TEC Pwr(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROC3": {
        name_en: "Malluda Soul",
        name_jp: "マリューダ・ソール",
        name_glen: "Malluda Soul",
        effect_en: "S-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>法撃力(+20),<br>PP(+2)",
        effect_glen: "MEL Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)"
    },
    "ROE1": {
        name_en: "Bal Soul",
        name_jp: "バル・ソール",
        name_glen: "Bar Soul",
        effect_en: "R-ATK(+20),<br>T-ATK(+20),<br>HP(+10)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>HP(+10)",
        effect_glen: "RNG Pwr(+20),<br>TEC Pwr(+20),<br>HP(+10)"
    },
    "ROE2": {
        name_en: "Vibrace Soul",
        name_jp: "ビブラス・ソール",
        name_glen: "Vibras Soul",
        effect_en: "R-ATK(+20),<br>T-ATK(+20),<br>HP(+5),<br>PP(+1)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>HP(+5),<br>PP(+1)",
        effect_glen: "RNG Pwr(+20),<br>TEC Pwr(+20),<br>HP(+5),<br>PP(+1)"
    },
    "ROE3": {
        name_en: "Tagami Kazuchi Soul",
        name_jp: "タガミカヅチ・ソール",
        name_glen: "Tagamikazuchi Soul",
        effect_en: "R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        effect_jp: "射撃力(+20),<br>法撃力(+20),<br>PP(+2)",
        effect_glen: "RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)"
    },
    "ROG5": {
        name_en: "Lili Soul",
        name_jp: "リーリー・ソール",
        name_glen: "Lili Soul",
        effect_en: "S-ATK(+20),<br>S-DEF(+20),<br>HP(+20)",
        effect_jp: "打撃力(+20),<br打撃防御(+20),<br>HP(+20)",
        effect_glen: "MEL Pwr(+20),<br>MEL Def(+20),<br>HP(+20)"
    },
    "RP05": {
        name_en: "Cougar Soul",
        name_jp: "クーガー・ソール",
        name_glen: "*Cougar Soul",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>技量(+15),<br>HP(+10),<br>PP(+2)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>HP(+10),<br>PP(+2)"
    },
    "RP10": {
        name_en: "Gryphon Soul",
        name_jp: "グリフォン・ソール",
        name_glen: "Gryphon Soul",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>技量(+15),<br>HP(+5),<br>PP(+3)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>HP(+5),<br>PP(+3)"
    },
    "RP15": {
        name_en: "Knight Gear Soul",
        name_jp: "ナイトギア・ソール",
        name_glen: "*Knight Gear Soul",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>DEX(+15),<br>PP(+4)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>技量(+15),<br>PP(+4)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>DEX(+15),<br>PP(+4)"
    },
    "RP22": {
        name_en: "Izane Kazuchi Soul",
        name_jp: "イザネカヅチ・ソール",
        name_glen: "*Izane Kazuchi Soul",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+2)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+20),<br>PP(+2)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+2)"
    },
    "RP25": {
        name_en: "Anga Soul",
        name_jp: "アンガ・ソール",
        name_glen: "Anga Soul",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(+4)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+20),<br>PP(+4)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(+4)"
    },
    "RP55": {
        name_en: "Apprentice Soul",
        name_jp: "アプレンティス・ソール",
        name_glen: "Apprentice Soul",
        effect_en: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40)",
        effect_jp: "打撃力(+40),<br>射撃力(+40),<br>法撃力(+40)",
        effect_glen: "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40)"
    },
    "RPA5": {
        name_en: "Magatsu Soul",
        name_jp: "マガツ・ソール",
        name_glen: "Magatsu Soul",
        effect_en: "S-DEF(+15),<br>R-DEF(+15),<br>T-DEF(+15),<br>HP(+30),<br>PP(+3)",
        effect_jp: "打撃防御(+15),<br>射撃防御(+15),<br>法撃防御(+15),<br>HP(+30),<br>PP(+3)",
        effect_glen: "MEL Def(+15),<br>RNG Def(+15),<br>TEC Def(+15),<br>HP(+30),<br>PP(+3)"
    },
    "RQ01": {
        name_en: "Double Soul",
        name_jp: "ダブル・ソール",
        name_glen: "Gemini Soul",
        effect_en: "HP(+40),<br>PP(+3)",
        effect_jp: "HP(+40),<br>PP(+3)",
        effect_glen: "HP(+40),<br>PP(+3)"
    },
    "RZ01": {
        name_en: "Darkness Soul",
        name_jp: "ダークネス・ソール",
        name_glen: "Soul of Darkness",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_glen: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "SA01": {
        name_en: "Astral Soul",
        name_jp: "アストラル・ソール",
        name_glen: "Astral Soul",
        effect_en: "ALL(+35),<br>HP(+35),<br>PP(+5)",
        effect_jp: "ALL(+35),<br>HP(+35),<br>PP(+5)",
        effect_glen: "ALL(+35),<br>HP(+35),<br>PP(+5)"
    },
    "SA11": {
        name_en: "Ether Soul",
        name_jp: "エーテル・ソール",
        name_glen: "Aether Soul",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_glen: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "SB01": {
        name_en: "Toh\'oh Soul",
        name_jp: "トウオウ・ソール",
        name_glen: "Eastern Soul",
        effect_en: "ALL(+10)",
        effect_jp: "ALL(+10)",
        effect_glen: "ALL(+10)"
    },
    "SB02": {
        name_en: "Full Vegas Soul",
        name_jp: "フルベガス・ソール",
        name_glen: "Fullvegas Soul",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15)"
    },
    "SB03": {
        name_en: "Escarde Soul",
        name_jp: "エスカード・ソール",
        name_glen: "Escarde Soul",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>DEX(+20)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+10),<br>技量(+20)",
        effect_glen: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>DEX(+20)"
    },
    "SB04": {
        name_en: "Fabula Soul",
        name_jp: "ファーブラ・ソール",
        name_glen: "*Fabula Soul",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+10),<br>HP(+20)",
        effect_glen: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20)"
    },
    "SB05": {
        name_en: "Historia Soul",
        name_jp: "イストリア・ソール",
        name_glen: "*Historia Soul",
        effect_en: "S-DEF(+25),<br>R-DEF(+25),<br>T-DEF(+25),<br>HP(+30),<br>PP(+2)",
        effect_jp: "打撃防御(+25),<br>射撃防御(+25),<br>法撃防御(+25),<br>HP(+30),<br>PP(+2)",
        effect_glen: "MEL Def(+25),<br>RNG Def(+25),<br>TEC Def(+25),<br>HP(+30),<br>PP(+2)"
    },
    "SH10": {
        name_en: "Act The Soul",
        name_jp: "アクト・ジ・ソール",
        name_glen: "Acto Di Soul",
        effect_en: "S-ATK(+35),<br>PP(+3)",
        effect_jp: "打撃力(+35),<br>PP(+3)",
        effect_glen: "MEL Pwr(+35),<br>PP(+3)"
    },
    "SH20": {
        name_en: "Till The Soul",
        name_jp: "ティル・ジ・ソール",
        name_glen: "Tir Di Soul",
        effect_en: "R-ATK(+35),<br>PP(+3)",
        effect_jp: "射撃力(+35),<br>PP(+3)",
        effect_glen: "RNG Pwr(+35),<br>PP(+3)"
    },
    "SH30": {
        name_en: "Magi The Soul",
        name_jp: "マギー・ジ・ソール",
        name_glen: "Magia Di Soul",
        effect_en: "T-ATK(+35),<br>PP(+3)",
        effect_jp: "法撃力(+35),<br>PP(+3)",
        effect_glen: "TEC Pwr(+35),<br>PP(+3)"
    },
    "SH40": {
        name_en: "Ares The Soul",
        name_jp: "アレス・ジ・ソール",
        name_glen: "Alles Di Soul",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>HP(+35),<br>PP(+3)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25),<br>HP(+35),<br>PP(+3)",
        effect_glen: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>HP(+35),<br>PP(+3)"
    },
    "SI01": {
        name_en: "Ex Act Soul",
        name_jp: "イクスアクト・ソール",
        name_glen: "*Ex Act Soul",
        effect_en: "S-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "MEL Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "SI02": {
        name_en: "Ex Till Soul",
        name_jp: "イクスティル・ソール",
        name_glen: "*Ex Till Soul",
        effect_en: "R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "射撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "RNG Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "SI03": {
        name_en: "Ex Magi Soul",
        name_jp: "イクスマギー・ソール",
        name_glen: "*Ex Magi Soul",
        effect_en: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "SI04": {
        name_en: "Ex Ares Soul",
        name_jp: "イクスアレス・ソール",
        name_glen: "*Ex Ares Soul",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+50), PP(+2)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+50),PP(+2)",
        effect_glen: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+50), PP(+2)"
    },
    "TA01": {
        name_en: "Stigma",
        name_jp: "スティグマ",
        name_glen: "Stigma",
        effect_en: "DEX(+20),<br>PP(+5)",
        effect_jp: "技量(+20),<br>PP(+5)",
        effect_glen: "DEX(+20),<br>PP(+5)"
    },
    "TB01": {
        name_en: "Vinculum",
        name_jp: "ウィンクルム",
        name_glen: "Vinculum",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+20)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+20)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+20)"
    },
    "TC01": {
        name_en: "Modulator",
        name_jp: "モデュレイター",
        name_glen: "Modulator",
        effect_en: "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30)",
        effect_jp: "打撃力(+30),<br>射撃力(+30),<br>法撃力(+30)",
        effect_glen: "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30)"
    },
    "TL01": {
        name_en: "ARKS Max",
        name_jp: "アクス・ＭＡＸ",
        name_glen: "ARKS Max",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25)",
        effect_glen: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25)"
    },
    "TG02": {
        name_en: "Yamato Factor",
        name_jp: "ヤマト・ファクター",
        name_glen: "Yamato Factor",
        effect_en: "S-ATK(+10),<br>R-ATK(+20),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃力(+20),<br>法撃力(+10),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Pwr(+10),<br>RNG Pwr(+20),<br>TEC Pwr(+10),<br>HP(+20),<br>PP(+1)"
    },
    "TG03": {
        name_en: "Mother Factor",
        name_jp: "マザー・ファクター",
        name_glen: "Mother Factor",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+20),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+20),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+20),<br>HP(+20),<br>PP(+1)"
    },
    "TG04": {
        name_en: "Deus Factor",
        name_jp: "デウス・ファクター",
        name_glen: "Deus Factor",
        effect_en: "S-ATK(+20),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+20),<br>射撃力(+10),<br>法撃力(+10),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20),<br>PP(+1)"
    },
    "TG31": {
        name_en: "Ether Factor",
        name_jp: "エーテル・ファクター",
        name_glen: "Aether Factor",
        effect_en: "ALL(+30),<br>HP(+10),<br>PP(+6)",
        effect_jp: "ALL(+30),<br>HP(+10),<br>PP(+6)",
        effect_glen: "ALL(+30),<br>HP(+10),<br>PP(+6)"
    },
    "TK01": {
        name_en: "Omega Reverie",
        name_jp: "オメガ・レヴリー",
        name_glen: "*Omega Reverie",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+20),<br>PP(+1)"
    },
    "TK02": {
        name_en: "Elder Reverie",
        name_jp: "エルダー・レヴリー",
        name_glen: "*Elder Reverie",
        effect_en: "S-ATK(+40),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(-2)",
        effect_jp: "打撃力(+40),<br>射撃力(+20),<br>法撃力(+20),<br>PP(-2)",
        effect_glen: "MEL Pwr(+40),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(-2)"
    },
    "TK03": {
        name_en: "Loser Reverie",
        name_jp: "ルーサー・レヴリー",
        name_glen: "*Luther Reverie",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+40),<br>HP(-20)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+40),<br>HP(-20)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+40),<br>HP(-20)"
    },
    "TK04": {
        name_en: "Apprezina Reverie",
        name_jp: "アプレジナ・レヴリー",
        name_glen: "*Apprentice Reverie",
        effect_en: "S-ATK(+20),<br>R-ATK(+40),<br>T-ATK(+20),<br>HP(-10),<br>PP(-1)",
        effect_jp: "打撃力(+20),<br>射撃力(+40),<br>法撃力(+20),<br>HP(-10),<br>PP(-1)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+40),<br>TEC Pwr(+20),<br>HP(-10),<br>PP(-1)"
    },
    "TK05": {
        name_en: "Double Reverie",
        name_jp: "ダブル・レヴリー",
        name_glen: "*Gemini Reverie",
        effect_en: "S-ATK(-20),<br>R-ATK(-20),<br>T-ATK(-20),<br>HP(+50),<br>PP(+5)",
        effect_jp: "打撃力(-20),<br>射撃力(-20),<br>法撃力(-20),<br>HP(+50),<br>PP(+5)",
        effect_glen: "MEL Pwr(-20),<br>RNG Pwr(-20),<br>TEC Pwr(-20),<br>HP(+50),<br>PP(+5)"
    },
    "TK06": {
        name_en: "Persona Reverie",
        name_jp: "ペルソナ・レヴリー",
        name_glen: "*Persona Reverie",
        effect_en: "S-ATK(+40),R-ATK(+40),T-ATK(+40),S-DEF(-20),R-DEF(-20),T-DEF(-20)",
        effect_jp: "打撃力(+40),射撃力(+40),法撃力(+40),打撃防御(-20),射撃防御(-20),法撃防御(-20)",
        effect_glen: "MEL Pwr(+40),RNG Pwr(+40),TEC Pwr(+40),MEL Def(-20),RNG Def(-20),TEC Def(-20)"
    },
    "TK10": {
        name_en: "Mana Reverie",
        name_jp: "マナ・レヴリー",
        name_glen: "*Mana Reverie",
        effect_en: "S-ATK(+50),R-ATK(+50),T-ATK(+50),HP(+20),PP(+4)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+4)",
        effect_glen: "MEL Pwr(+50),RNG Pwr(+50),TEC Pwr(+50),HP(+20),PP(+4)"
    },
    "TJ01": {
        name_en: "Omega Memoria",
        name_jp: "オメガ・メモリア",
        name_glen: "*Omega Memoria",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+2)",
        effect_glen: "ALL(+15),<br>HP(+15),<br>PP(+2)"
    },
    "TE01": {
        name_en: "Returner I",
        name_jp: "リターナーⅠ",
        name_glen: "Veteran's Resolve I",
        effect_en: "ALL(+3),<br>HP(+3),<br>PP(+1)",
        effect_jp: "ALL(+3),<br>HP(+3),<br>PP(+1)",
        effect_glen: "ALL(+3),<br>HP(+3),<br>PP(+1)"
    },
    "TE02": {
        name_en: "Returner II",
        name_jp: "リターナーⅡ",
        name_glen: "Veteran's Resolve II",
        effect_en: "ALL(+5),<br>HP(+5),<br>PP(+2)",
        effect_jp: "ALL(+5),<br>HP(+5),<br>PP(+2)",
        effect_glen: "ALL(+5),<br>HP(+5),<br>PP(+2)"
    },
    "TE03": {
        name_en: "Returner III",
        name_jp: "リターナーⅢ",
        name_glen: "Veteran's Resolve III",
        effect_en: "ALL(+10),<br>HP(+10),<br>PP(+3)",
        effect_jp: "ALL(+10),<br>HP(+10),<br>PP(+3)",
        effect_glen: "ALL(+10),<br>HP(+10),<br>PP(+3)"
    },
    "TE04": {
        name_en: "Returner IV",
        name_jp: "リターナーⅣ",
        name_glen: "Veteran's Resolve IV",
        effect_en: "ALL(+15),<br>HP(+15),<br>PP(+4)",
        effect_jp: "ALL(+15),<br>HP(+15),<br>PP(+4)",
        effect_glen: "ALL(+15),<br>HP(+15),<br>PP(+4)"
    },
    "TE05": {
        name_en: "Returner V",
        name_jp: "リターナーⅤ",
        name_glen: "Veteran's Resolve V",
        effect_en: "ALL(+30),<br>HP(+30),<br>PP(+5)",
        effect_jp: "ALL(+30),<br>HP(+30),<br>PP(+5)",
        effect_glen: "ALL(+30),<br>HP(+30),<br>PP(+5)"
    },
    "TM01": {
        name_en: "Crack I",
        name_jp: "クラックI",
        name_glen: "*Crack I",
        effect_en: "S-ATK(+3), R-ATK(+3), T-ATK(+3), S-DEF(+5), R-DEF(+5), T-DEF(+5), HP(+5), PP(+1)",
        effect_jp: "打撃力(+3),射撃力(+3),法撃力(+3),打撃防御(+5),射撃防御(+5),法撃防御(+5),HP(+5),PP(+1)",
        effect_glen: "MEL Pwr(+3), RNG Pwr(+3), TEC Pwr(+3), MEL Def(+5), RNG Def(+5), TEC Def(+5), HP(+5), PP(+1)"
    },
    "TM02": {
        name_en: "Crack II",
        name_jp: "クラックII",
        name_glen: "*Crack II",
        effect_en: "S-ATK(+5), R-ATK(+5), T-ATK(+5), S-DEF(+10), R-DEF(+10), T-DEF(+10), HP(+10), PP(+1)",
        effect_jp: "打撃力(+5),射撃力(+5),法撃力(+5),打撃防御(+10),射撃防御(+10),法撃防御(+10),HP(+10),PP(+1)",
        effect_glen: "MEL Pwr(+5), RNG Pwr(+5), TEC Pwr(+5), MEL Def(+10), RNG Def(+10), TEC Def(+10), HP(+10), PP(+1)"
    },
    "TM03": {
        name_en: "Crack III",
        name_jp: "クラックIII",
        name_glen: "*Crack III",
        effect_en: "S-ATK(+10), R-ATK(+10), T-ATK(+10), S-DEF(+15), R-DEF(+15), T-DEF(+15), HP(+15), PP(+1)",
        effect_jp: "打撃力(+10),射撃力(+10),法撃力(+10),打撃防御(+15),射撃防御(+15),法撃防御(+15),HP(+15),PP(+1)",
        effect_glen: "MEL Pwr(+10), RNG Pwr(+10), TEC Pwr(+10), MEL Def(+15), RNG Def(+15), TEC Def(+15), HP(+15), PP(+1)"
    },
    "TM04": {
        name_en: "Crack IV",
        name_jp: "クラックIV",
        name_glen: "*Crack IV",
        effect_en: "S-ATK(+15), R-ATK(+15), T-ATK(+15), S-DEF(+30), R-DEF(+30), T-DEF(+30), HP(+30), PP(+2)",
        effect_jp: "打撃力(+15),射撃力(+15),法撃力(+15),打撃防御(+30),射撃防御(+30),法撃防御(+30),HP(+30),PP(+2)",
        effect_glen: "MEL Pwr(+15), RNG Pwr(+15), TEC Pwr(+15), MEL Def(+30), RNG Def(+30), TEC Def(+30), HP(+30), PP(+2)"
    },
    "TM05": {
        name_en: "Crack V",
        name_jp: "クラックV",
        name_glen: "*Crack V",
        effect_en: "S-ATK(+30), R-ATK(+30), T-ATK(+30), S-DEF(+50), R-DEF(+50), T-DEF(+50), HP(+50), PP(+2)",
        effect_jp: "打撃力(+30),射撃力(+30),法撃力(+30),打撃防御(+50),射撃防御(+50),法撃防御(+50),HP(+50),PP(+2)",
        effect_glen: "MEL Pwr(+30), RNG Pwr(+30), TEC Pwr(+30), MEL Def(+50), RNG Def(+50), TEC Def(+50), HP(+50), PP(+2)"
    },
    "TN01": {
        name_en: "Ange Glare",
        name_jp: "アンジュール・グレア",
        name_glen: "*Ange Glare",
        effect_en: "S-ATK(+30), S-DEF(+40), R-DEF(+20), T-DEF(+20)",
        effect_jp: "打撃力(+30),打撃防御(+40),射撃防御(+20),法撃防御(+20)",
        effect_glen: "MEL Pwr(+30), MEL Def(+40), RNG Def(+20), TEC Def(+20)"
    },
    "TN02": {
        name_en: "Veluge Glare",
        name_jp: "べルージュ・グレア",
        name_glen: "*Veluge Glare",
        effect_en: "R-ATK(+30), S-DEF(+20), R-DEF(+40), T-DEF(+20)",
        effect_jp: "射撃力(+30),打撃防御(+20),射撃防御(+40),法撃防御(+20)",
        effect_glen: "RNG Pwr(+30), MEL Def(+20), RNG Def(+40), TEC Def(+20)"
    },
    "TN03": {
        name_en: "Dominus Glare",
        name_jp: "ドゥミヌス・グレア",
        name_glen: "*Dominus Glare",
        effect_en: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+40)",
        effect_jp: "法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+40)",
        effect_glen: "TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+40)"
    },
    "TN04": {
        name_en: "Fordruss Glare",
        name_jp: "フォードルス・グレア",
        name_glen: "*Fordruss Glare",
        effect_en: "S-DEF(+35), R-DEF(+35), T-DEF(+35), HP(+40), PP(+4)",
        effect_jp: "打撃防御(+35),射撃防御(+35),法撃防御(+35),HP(+40),PP(+4)",
        effect_glen: "MEL Def(+35), RNG Def(+35), TEC Def(+35), HP(+40), PP(+4)"
    },
    "TN05": {
        name_en: "Execour Glare",
        name_jp: "エクゼクル・グレア",
        name_glen: "*Execour Glare",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+50), R-DEF(+50), T-DEF(+50)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),打撃防御(+50),射撃防御(+50),法撃防御(+50)",
        effect_glen: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), MEL Def(+50), RNG Def(+50), TEC Def(+50)"
    },
    "TN06": {
        name_en: "Mitra Glare",
        name_jp: "ミトラ・グレア",
        name_glen: "*Mitra Glare",
        effect_en: "S-ATK(+30), R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),射撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "MEL Pwr(+30), RNG Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "TN07": {
        name_en: "Varuna Glare",
        name_jp: "ヴァルナ・グレア",
        name_glen: "*Varuna Glare",
        effect_en: "S-ATK(+30), T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "MEL Pwr(+30), TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "TF01": {
        name_en: "Spirita Alpha",
        name_jp: "スピリタ・アルファ",
        name_glen: "Spirit Alpha",
        effect_en: "DEX(+30),<br>PP(+3)",
        effect_jp: "技量(+30),<br>PP(+3)",
        effect_glen: "DEX(+30),<br>PP(+3)"
    },
    "TI01": {
        name_en: "Necky Smile",
        name_jp: "ネッキー・スマイル",
        name_glen: "*Necky Smile",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>PP(+2)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>PP(+2)",
        effect_glen: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>PP(+2)"
    },
    "TH01": {
        name_en: "Doom Break",
        name_jp: "ドゥームブレイクⅠ",
        name_glen: "Doom Break I",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>PP(+2)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>PP(+2)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>PP(+2)"
    },
    "TH02": {
        name_en: "Doom Break 2",
        name_jp: "ドゥームブレイクⅡ",
        name_glen: "Doom Break II",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>PP(+3)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25),<br>PP(+3)",
        effect_glen: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>PP(+3)"
    },
    "TH03": {
        name_en: "Doom Break 3",
        name_jp: "ドゥームブレイクⅢ",
        name_glen: "Doom Break III",
        effect_en: "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>PP(+4)",
        effect_jp: "打撃力(+30),<br>射撃力(+30),<br>法撃力(+30),<br>PP(+4)",
        effect_glen: "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30),<br>PP(+4)"
    },
    "LP01": {
        name_en: "Lesser Power I",
        name_jp: "レッサー・パワーⅠ",
        name_glen: "*Lesser Might I",
        effect_en: "S-ATK(+5)",
        effect_jp: "打撃力(+5)",
        effect_glen: "MEL Pwr(+5)"
    },
    "LP02": {
        name_en: "Lesser Power II",
        name_jp: "レッサー・パワーⅡ",
        name_glen: "*Lesser Might II",
        effect_en: "S-ATK(+15)",
        effect_jp: "打撃力(+15)",
        effect_glen: "MEL Pwr(+15)"
    },
    "LP03": {
        name_en: "Lesser Power III",
        name_jp: "レッサー・パワーⅢ",
        name_glen: "*Lesser Might III",
        effect_en: "S-ATK(+25)",
        effect_jp: "打撃力(+25)",
        effect_glen: "MEL Pwr(+25)"
    },
    "LP04": {
        name_en: "Lesser Power IV",
        name_jp: "レッサー・パワーⅣ",
        name_glen: "*Lesser Might IV",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LP05": {
        name_en: "Lesser Power V",
        name_jp: "レッサー・パワーⅤ",
        name_glen: "*Lesser Might V",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_glen: "MEL Pwr(+35)"
    },
    "LS01": {
        name_en: "Lesser Shoot I",
        name_jp: "レッサー・シュートⅠ",
        name_glen: "*Lesser Precision I",
        effect_en: "R-ATK(+5)",
        effect_jp: "射撃力(+5)",
        effect_glen: "RNG Pwr(+5)"
    },
    "LS02": {
        name_en: "Lesser Shoot II",
        name_jp: "レッサー・シュートⅡ",
        name_glen: "*Lesser Precision II",
        effect_en: "R-ATK(+15)",
        effect_jp: "射撃力(+15)",
        effect_glen: "RNG Pwr(+15)"
    },
    "LS03": {
        name_en: "Lesser Shoot III",
        name_jp: "レッサー・シュートⅢ",
        name_glen: "*Lesser Precision III",
        effect_en: "R-ATK(+25)",
        effect_jp: "射撃力(+25)",
        effect_glen: "RNG Pwr(+25)"
    },
    "LS04": {
        name_en: "Lesser Shoot IV",
        name_jp: "レッサー・シュートⅣ",
        name_glen: "*Lesser Precision IV",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LS05": {
        name_en: "Lesser Shoot V",
        name_jp: "レッサー・シュートⅤ",
        name_glen: "*Lesser Precision V",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_glen: "RNG Pwr(+35)"
    },
    "LT01": {
        name_en: "Lesser Technique I",
        name_jp: "レッサー・テクニックⅠ",
        name_glen: "*Lesser Casting I",
        effect_en: "T-ATK(+5)",
        effect_jp: "法撃力(+5)",
        effect_glen: "TEC Pwr(+5)"
    },
    "LT02": {
        name_en: "Lesser Technique II",
        name_jp: "レッサー・テクニックⅡ",
        name_glen: "*Lesser Casting II",
        effect_en: "T-ATK(+15)",
        effect_jp: "法撃力(+15)",
        effect_glen: "TEC Pwr(+15)"
    },
    "LT03": {
        name_en: "Lesser Technique III",
        name_jp: "レッサー・テクニックⅢ",
        name_glen: "*Lesser Casting III",
        effect_en: "T-ATK(+25)",
        effect_jp: "法撃力(+25)",
        effect_glen: "TEC Pwr(+25)"
    },
    "LT04": {
        name_en: "Lesser Technique IV",
        name_jp: "レッサー・テクニックⅣ",
        name_glen: "*Lesser Casting IV",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LT05": {
        name_en: "Lesser Technique V",
        name_jp: "レッサー・テクニックⅤ",
        name_glen: "*Lesser Casting V",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_glen: "TEC Pwr(+35)"
    },
    "LM01": {
        name_en: "Lesser Stamina I",
        name_jp: "レッサー・スタミナⅠ",
        name_glen: "*Lesser Stamina I",
        effect_en: "HP(+15)",
        effect_jp: "HP(+15)",
        effect_glen: "HP(+15)"
    },
    "LM02": {
        name_en: "Lesser Stamina II",
        name_jp: "レッサー・スタミナⅡ",
        name_glen: "*Lesser Stamina II",
        effect_en: "HP(+35)",
        effect_jp: "HP(+35)",
        effect_glen: "HP(+35)"
    },
    "LM03": {
        name_en: "Lesser Stamina III",
        name_jp: "レッサー・スタミナⅢ",
        name_glen: "*Lesser Stamina III",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)",
        effect_glen: "HP(+45)"
    },
    "LM04": {
        name_en: "Lesser Stamina IV",
        name_jp: "レッサー・スタミナⅣ",
        name_glen: "*Lesser Stamina IV",
        effect_en: "HP(+55)",
        effect_jp: "HP(+55)",
        effect_glen: "HP(+55)"
    },
    "LM05": {
        name_en: "Lesser Stamina V",
        name_jp: "レッサー・スタミナⅤ",
        name_glen: "*Lesser Stamina V",
        effect_en: "HP(+65)",
        effect_jp: "HP(+65)",
        effect_glen: "HP(+65)"
    },
    "LR01": {
        name_en: "Lesser Spirita I",
        name_jp: "レッサー・スピリタⅠ",
        name_glen: "*Lesser Spirit I",
        effect_en: "PP(+1)",
        effect_jp: "PP(+1)",
        effect_glen: "PP(+1)"
    },
    "LR02": {
        name_en: "Lesser Spirita II",
        name_jp: "レッサー・スピリタⅡ",
        name_glen: "*Lesser Spirit II",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)",
        effect_glen: "PP(+2)"
    },
    "LR03": {
        name_en: "Lesser Spirita III",
        name_jp: "レッサー・スピリタⅢ",
        name_glen: "*Lesser Spirit III",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)",
        effect_glen: "PP(+3)"
    },
    "LR04": {
        name_en: "Lesser Spirita IV",
        name_jp: "レッサー・スピリタⅣ",
        name_glen: "*Lesser Spirit IV",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LR05": {
        name_en: "Lesser Spirita V",
        name_jp: "レッサー・スピリタⅤ",
        name_glen: "*Lesser Spirit V",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_glen: "PP(+5)"
    },
    "LP06": {
        name_en: "EV Power HP",
        name_jp: "EV・パワーHP",
        name_glen: "*EV Might HP",
        effect_en: "S-ATK(+35),<br>HP(+60)",
        effect_jp: "打撃力(+35),<br>HP(+60)",
        effect_glen: "MEL Pwr(+35),<br>HP(+60)"
    },
    "LP07": {
        name_en: "EV Power PP",
        name_jp: "EV・パワーPP",
        name_glen: "*EV Might PP",
        effect_en: "S-ATK(+35),<br>PP(+4)",
        effect_jp: "打撃力(+35),<br>PP(+4)",
        effect_glen: "MEL Pwr(+35),<br>PP(+4)"
    },
    "LS06": {
        name_en: "EV Shoot HP",
        name_jp: "EV・シュートHP",
        name_glen: "*EV Precision HP",
        effect_en: "R-ATK(+35),<br>HP(+60)",
        effect_jp: "射撃力(+35),<br>HP(+60)",
        effect_glen: "RNG Pwr(+35),<br>HP(+60)"
    },
    "LS07": {
        name_en: "EV Shoot PP",
        name_jp: "EV・シュートPP",
        name_glen: "*EV Precision PP",
        effect_en: "R-ATK(+35),<br>PP(+4)",
        effect_jp: "射撃力(+35),<br>PP(+4)",
        effect_glen: "RNG Pwr(+35),<br>PP(+4)"
    },
    "LT06": {
        name_en: "EV Technique HP",
        name_jp: "EV・テクニックHP",
        name_glen: "*EV Casting HP",
        effect_en: "T-ATK(+35),<br>HP(+60)",
        effect_jp: "法撃力(+35),<br>HP(+60)",
        effect_glen: "TEC Pwr(+35),<br>HP(+60)"
    },
    "LT07": {
        name_en: "EV Technique PP",
        name_jp: "EV・テクニックPP",
        name_glen: "*EV Casting PP",
        effect_en: "T-ATK(+35),<br>PP(+4)",
        effect_jp: "法撃力(+35),<br>PP(+4)",
        effect_glen: "TEC Pwr(+35),<br>PP(+4)"
    },
    "TD01": {
        name_en: "Lovey Fever",
        name_jp: "ラヴィ・フィーバー",
        name_glen: "Lovey Fever",
        effect_en: "S-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>HP(+10)",
        effect_glen: "MEL Pwr(+10),<br>DEX(+5),<br>HP(+10)"
    },
    "TD02": {
        name_en: "Egg Fever",
        name_jp: "エグ・フィーバー",
        name_glen: "Egg Fever",
        effect_en: "R-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>HP(+10)",
        effect_glen: "RNG Pwr(+10),<br>DEX(+5),<br>HP(+10)"
    },
    "TD03": {
        name_en: "Frog Fever",
        name_jp: "フログ・フィーバー",
        name_glen: "Froggy Fever",
        effect_en: "T-ATK(+10),<br>DEX(+5),<br>HP(+10)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>HP(+10)",
        effect_glen: "TEC Pwr(+10),<br>DEX(+5),<br>HP(+10)"
    },
    "TD04": {
        name_en: "Love Fever",
        name_jp: "ラブ・フィーバー",
        name_glen: "*Love Fever",
        effect_en: "S-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>PP(+2)",
        effect_glen: "MEL Pwr(+10),<br>DEX(+5),<br>PP(+2)"
    },
    "TD05": {
        name_en: "St. Fever",
        name_jp: "セント・フィーバー",
        name_glen: "Santa Fever",
        effect_en: "R-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>PP(+2)",
        effect_glen: "RNG Pwr(+10),<br>DEX(+5),<br>PP(+2)"
    },
    "TD06": {
        name_en: "Latan Fever",
        name_jp: "ラタン・フィーバー",
        name_glen: "Rattan Fever",
        effect_en: "T-ATK(+10),<br>DEX(+5),<br>PP(+2)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>PP(+2)",
        effect_glen: "TEC Pwr(+10),<br>DEX(+5),<br>PP(+2)"
    },
    "TD07": {
        name_en: "Summer Fever",
        name_jp: "サマー・フィーバー",
        name_glen: "Summer Fever",
        effect_en: "T-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "法撃力(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)",
        effect_glen: "TEC Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD08": {
        name_en: "Ceremo Fever",
        name_jp: "セレモ・フィーバー",
        name_glen: "Ceremo Fever",
        effect_en: "S-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD09": {
        name_en: "Noiya Fever",
        name_jp: "ノイヤ・フィーバー",
        name_glen: "*Noiya Fever",
        effect_en: "R-ATK(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "射撃力(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1",
        effect_glen: "RNG Pwr(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0A": {
        name_en: "Torokuro Fever",
        name_jp: "トロクロ・フィーバー",
        name_glen: "*Torokuro Fever",
        effect_en: "DEX(+15),<br>HP(+5),<br>PP(+1)",
        effect_jp: "技量(+15),<br>HP(+5),<br>PP(+1)",
        effect_glen: "DEX(+15),<br>HP(+5),<br>PP(+1)"
    },
    "TD0B": {
        name_en: "Sakura Fever",
        name_jp: "サクラ・フィーバー",
        name_glen: "*Sakura Fever",
        effect_en: "S-DEF(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃防御(+10),<br>技量(+5),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Def(+10),<br>DEX(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0C": {
        name_en: "Sonic Fever",
        name_jp: "ソニック・フィーバー",
        name_glen: "*Sonic Fever",
        effect_en: "S-ATK(+10),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃防御(+10),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+10),<br>RNG Def(+10),<br>HP(+5),<br>PP(+1)"
    },
    "TD0D": {
        name_en: "Sansan Fever",
        name_jp: "サンサン・フィーバー",
        name_glen: "*Sansan Fever",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0E": {
        name_en: "Luna Fever",
        name_jp: "ルーナ・フィーバー",
        name_glen: "*Luna Fever",
        effect_en: "T-ATK(+10),<br>HP(+10),<br>PP(+1)",
        effect_jp: "法撃力(+10),<br>HP(+10),<br>PP(+1)",
        effect_glen: "TEC Pwr(+10),<br>HP(+10),<br>PP(+1)"
    },
    "TD0F": {
        name_en: "ARKS Fever",
        name_jp: "アクス・フィーバー",
        name_glen: "ARKS Fever",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>DEX(+5),<br>PP(+5)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>技量(+5),<br>PP(+5)",
        effect_glen: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>DEX(+5),<br>PP(+5)"
    },
    "UA01": {
        name_en: "Flict Arma",
        name_jp: "フリクト・アルマ",
        name_glen: "Flict Arma",
        effect_en: "S-ATK(+20),<br>PP(+3)",
        effect_jp: "打撃力(+20),<br>PP(+3)",
        effect_glen: "MEL Pwr(+20),<br>PP(+3)"
    },
    "UA11": {
        name_en: "Flict Tiro",
        name_jp: "フリクト・ティロ",
        name_glen: "Flict Tyro",
        effect_en: "R-ATK(+20),<br>PP(+3)",
        effect_jp: "射撃力(+20),<br>PP(+3)",
        effect_glen: "RNG Pwr(+20),<br>PP(+3)"
    },
    "UA21": {
        name_en: "Flict Magia",
        name_jp: "フリクト・マギア",
        name_glen: "Flict Magia",
        effect_en: "T-ATK(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>PP(+3)",
        effect_glen: "TEC Pwr(+20),<br>PP(+3)"
    },
    "UB01": {
        name_en: "Alter Arma",
        name_jp: "アルター・アルマ",
        name_glen: "Alter Arma",
        effect_en: "S-ATK(+20),<br>HP(+30)",
        effect_jp: "打撃力(+20),<br>HP(+30)",
        effect_glen: "MEL Pwr(+20),<br>HP(+30)"
    },
    "UB11": {
        name_en: "Alter Tiro",
        name_jp: "アルター・ティロ",
        name_glen: "Alter Tyro",
        effect_en: "R-ATK(+20),<br>HP(+30)",
        effect_jp: "射撃力(+20),<br>HP(+30)",
        effect_glen: "RNG Pwr(+20),<br>HP(+30)"
    },
    "UB21": {
        name_en: "Alter Magia",
        name_jp: "アルター・マギア",
        name_glen: "Alter Magia",
        effect_en: "T-ATK(+20),<br>HP(+30)",
        effect_jp: "法撃力(+20),<br>HP(+30)",
        effect_glen: "TEC Pwr(+20),<br>HP(+30)"
    },
    "UC01": {
        name_en: "Mark Joyo",
        name_jp: "マーク・ジョイオ",
        name_glen: "Mark Joy",
        effect_en: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>HP(+50)",
        effect_jp: "打撃力(+40),<br>射撃力(+40),<br>法撃力(+40),<br>HP(+50)",
        effect_glen: "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>HP(+50)"
    },
    "UC11": {
        name_en: "Mark Couragena",
        name_jp: "マーク・カレジナ",
        name_glen: "Mark Courage",
        effect_en: "S-ATK(+40),<br>R-ATK(+40),<br>T-ATK(+40),<br>PP(+5)",
        effect_jp: "打撃力(+40),<br>射撃力(+40),<br>法撃力(+40),<br>PP(+5)",
        effect_glen: "MEL Pwr(+40),<br>RNG Pwr(+40),<br>TEC Pwr(+40),<br>PP(+5)"
    },
    "UC21": {
        name_en: "Mark Angar",
        name_jp: "マーク・アンガル",
        name_glen: "Mark Anger",
        effect_en: "S-ATK(+50),<br>R-ATK(+50),<br>T-ATK(+50),<br>DEX(+40)",
        effect_jp: "打撃力(+50),<br>射撃力(+50),<br>法撃力(+50),<br>技量(+40)",
        effect_glen: "MEL Pwr(+50),<br>RNG Pwr(+50),<br>TEC Pwr(+50),<br>DEX(+40)"
    },
    "UC31": {
        name_en: "Mark Grif",
        name_jp: "マーク・グリフ",
        name_glen: "Mark Grief",
        effect_en: "S-DEF(+50),<br>R-DEF(+50),<br>T-DEF(+50),<br>HP(+80)",
        effect_jp: "打撃防御(+50),<br>射撃防御(+50),<br>法撃防御(+50),<br>HP(+80)",
        effect_glen: "MEL Def(+50),<br>RNG Def(+50),<br>TEC Def(+50),<br>HP(+80)"
    },
    "ID01": {
        name_en: "Divine Will",
        name_jp: "ディバインウィル",
        name_glen: "*Divine Will",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), PP(+5)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),PP(+5)",
        effect_glen: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), PP(+5)"
    },
    "ID02": {
        name_en: "Divine Order",
        name_jp: "ディバイン・オーダー",
        name_glen: "*Divine Order",
        effect_en: "S-ATK(+50), R-ATK(+50), T-ATK(+50), HP(+20), PP(+10)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+10)",
        effect_glen: "MEL Pwr(+50), RNG Pwr(+50), TEC Pwr(+50), HP(+20), PP(+10)"
    },
    "IE01": {
        name_en: "Exceed Energy",
        name_jp: "イクシード・エナジー",
        name_glen: "*Exceed Energy",
        effect_en: "S-ATK(+50), R-ATK(+50), T-ATK(+50), DEX(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+5)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),技量(+20),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+5)",
        effect_glen: "MEL Pwr(+50), RNG Pwr(+50), TEC Pwr(+50), DEX(+20), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+5)"
    },
    "YA01": {
        name_en: "Sentence Power",
        name_jp: "センテンス・パワー",
        name_glen: "Sentence Might",
        effect_en: "S-ATK(+20),<br>PP(+4)",
        effect_jp: "打撃力(+20),<br>PP(+4)",
        effect_glen: "MEL Pwr(+20),<br>PP(+4)"
    },
    "YA05": {
        name_en: "Sentence Arma",
        name_jp: "センテンス・アルマ",
        name_glen: "Sentence Deftness",
        effect_en: "S-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "打撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_glen: "MEL Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA11": {
        name_en: "Sentence Shoot",
        name_jp: "センテンス・シュート",
        name_glen: "Sentence Precision",
        effect_en: "R-ATK(+20),<br>PP(+4)",
        effect_jp: "射撃力(+20),<br>PP(+4)",
        effect_glen: "RNG Pwr(+20),<br>PP(+4)"
    },
    "YA15": {
        name_en: "Sentence Tiro",
        name_jp: "センテンス・ティロ",
        name_glen: "Sentence Tiro",
        effect_en: "R-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "射撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_glen: "RNG Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA21": {
        name_en: "Sentence Tech",
        name_jp: "センテンス・テクニック",
        name_glen: "Sentence Casting",
        effect_en: "T-ATK(+20),<br>PP(+4)",
        effect_jp: "法撃力(+20),<br>PP(+4)",
        effect_glen: "TEC Pwr(+20),<br>PP(+4)"
    },
    "YA25": {
        name_en: "Sentence Magia",
        name_jp: "センテンス・マギア",
        name_glen: "*Sentence Magia",
        effect_en: "T-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_glen: "TEC Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA31": {
        name_en: "Sentence Triple",
        name_jp: "センテンス・テクニック",
        name_glen: "Sentence Triple",
        effect_en: "S-ATK(+30),R-ATK(+30),T-ATK(+30)",
        effect_jp: "打撃力(+30),射撃力(+30),法撃力(+30)",
        effect_glen: "MEL Pwr(+30),RNG Pwr(+30),TEC Pwr(+30)"
    },
    "YB41": {
        name_en: "Phrase Reduce",
        name_jp: "フレイズ・リデュース",
        name_glen: "*Phrase Reduce",
        effect_en: "PP consumption decreases by 4%.",
        effect_jp: "PP消費量-4%。",
        effect_glen: "PP consumption decreases by 4%."
    },
    "YB51": {
        name_en: "Phrase Decay",
        name_jp: "フレイズ・ディケイ",
        name_glen: "*Phrase Decay",
        effect_en: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%.",
        effect_jp: "ジェルン状態の敵への威力+5%。",
        effect_glen: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%."
    },
    "YB01": {
        name_en: "Phrase Recovery",
        name_jp: "フレイズ・レスポンス",
        name_glen: "*Phrase Recovery",
        effect_en: "+5% PP Recovery Rate.",
        effect_jp: "攻撃時PP回復+5%。",
        effect_glen: "+5% PP Recovery Rate."
    },
    "YB11": {
        name_en: "Phrase Weak",
        name_jp: "フレイズ・ウィーク",
        name_glen: "Phrase Weak",
        effect_en: "+2% Elemental Weakness damage.",
        effect_jp: "弱点属性威力+2%。",
        effect_glen: "+2% Elemental Weakness damage."
    },
    "YB21": {
        name_en: "Phrase Response",
        name_jp: "フレイズ・レスポンス",
        name_glen: "*Phrase Response",
        effect_en: "+5% ATK PP Recovery.",
        effect_jp: "攻撃時PP回復+5%。",
        effect_glen: "+5% ATK PP Recovery."
    },
    "YB31": {
        name_en: "Phrase Chase",
        name_jp: "フレイズ・チェイス",
        name_glen: "Phrase Chase",
        effect_en: "+5% damage against enemies with Status Effects.",
        effect_jp: "状態異常の敵への威力+5%。",
        effect_glen: "+5% damage against enemies with Status Effects."
    },
    "VA01": {
        name_en: "Lucky Rise I",
        name_jp: "ラッキーライズⅠ",
        name_glen: "Lucky Charm I",
        effect_en: "Item Drop Rate +5%.",
        effect_jp: "レアドロップ倍率が増加を5％。",
        effect_glen: "Rare drop multiplier increases +5%."
    },
    "VA02": {
        name_en: "Lucky Rise II",
        name_jp: "ラッキーライズⅡ",
        name_glen: "Lucky Charm II",
        effect_en: "Item Drop Rate +7%.",
        effect_jp: "レアドロップ倍率が増加を7％。",
        effect_glen: "Rare drop multiplier increases +7%."
    },
    "VA03": {
        name_en: "Lucky Rise III",
        name_jp: "ラッキーライズⅢ",
        name_glen: "Lucky Charm III",
        effect_en: "Item Drop Rate +10%.",
        effect_jp: "レアドロップ倍率が増加を10％。",
        effect_glen: "Rare drop multiplier increases +10%."
    },
    "VB01": {
        name_en: "Meseta Fever I",
        name_jp: "メセタフィーバーⅠ",
        name_glen: "Meseta Fever I",
        effect_en: "Meseta Drop Amount +5%.",
        effect_jp: "メセタドロップ率が5％増加。",
        effect_glen: "Meseta drops increase +5%."
    },
    "VZ02": {
        name_en: "Meseta Fever II",
        name_jp: "メセタフィーバーⅡ",
        name_glen: "Meseta Fever II",
        effect_en: "Meseta Drop Amount +10%.",
        effect_jp: "メセタドロップ率が10％増加。",
        effect_glen: "Meseta drops increase +10%."
    },
    "VB03": {
        name_en: "Meseta Fever III",
        name_jp: "メセタフィーバーⅢ",
        name_glen: "Meseta Fever III",
        effect_en: "Meseta Drop Amount +15%.",
        effect_jp: "メセタドロップ率が15％増加。",
        effect_glen: "Meseta drops increase +15%."
    },
    "VC01": {
        name_en: "EXP Boost I",
        name_jp: "ＥＸＰブーストⅠ",
        name_glen: "EXP Boost I",
        effect_en: "Experience Gain +5%.",
        effect_jp: "取得する経験値が増加を5％。",
        effect_glen: "Earned EXP increases 5%."
    },
    "VC02": {
        name_en: "EXP Boost II",
        name_jp: "ＥＸＰブーストⅡ",
        name_glen: "EXP Boost II",
        effect_en: "Experience Gain +7%.",
        effect_jp: "取得する経験値が増加を7％。",
        effect_glen: "Earned EXP increases 7%."
    },
    "VC03": {
        name_en: "EXP Boost III",
        name_jp: "ＥＸＰブーストⅢ",
        name_glen: "EXP Boost III",
        effect_en: "Experience Gain +10%.",
        effect_jp: "取得する経験値が増加を10％。",
        effect_glen: "Earned EXP increases 10%."
    },
    "VD01": {
        name_en: "Temptation",
        name_jp: "テンプテーション",
        name_glen: "Temptation",
        effect_en: "Item Drop Rate +10%.",
        effect_jp: "レアドロップ倍率が増加を10％。",
        effect_glen: "Rare drop multiplier increases +10%."
    },
    "VE01": {
        name_en: "Another History",
        name_jp: "アナザーヒストリー",
        name_glen: "Alternate History",
        effect_en: "Experience Gain +10%.",
        effect_jp: "取得する経験値が増加を10％。",
        effect_glen: "Earned EXP increases 10%."
    },
    "VF01": {
        name_en: "Fresh Sign",
        name_jp: "フレッシュ・サイン",
        name_glen: "Fresh Sign",
        effect_en: "Boost EXP by 30% until Lv30.",
        effect_jp: "Lv30に到達するまで取得する経験値が増加するを30％。",
        effect_glen: "Earned EXP increases 30% when under level 30."
    },
    "VH01": {
        name_en: "Ultimate Buster",
        name_jp: "アルティメットバスター",
        name_glen: "Ultimate Buster",
        effect_en: "Boost damage in Ultimate +10%.",
        effect_jp: "世壊種エネミーに与えるダメージが10%上昇。",
        effect_glen: "Damage to Tainted increases 10%.No effect for 13* Weapons"
    },
    "VH11": {
        name_en: "Omega Buster",
        name_jp: "オメガバスター",
        name_glen: "*Omega Buster",
        effect_en: "Boosts damage against Demons by 3%.",
        effect_jp: "魔物へのダメージは10％増加する。",
        effect_glen: "Boosts damage against Demons by 3%."
    },
    "PA01": {
        name_en: "Ripper/Ltn. Weak",
        name_jp: "リーパー／雷弱点",
        name_glen: "*Ripper/Ltn. Weak",
        effect_en: "Boost damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "雷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases."
    },
    "PB02": {
        name_en: "Ripper/Fire Weak",
        name_jp: "リーパー／火弱点",
        name_glen: "*Ripper/Fire Weak",
        effect_en: "Boost damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "火弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases."
    },
    "PC03": {
        name_en: "Ripper/Ice Weak",
        name_jp: "リーパー／氷弱点",
        name_glen: "*Ripper/Ice Weak",
        effect_en: "Boost damage against enemies weak to Ice. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "氷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Ice. Effect is reduced as the Weapon Rarity increases."
    },
    "PD04": {
        name_en: "Ripper/Wind Weak",
        name_jp: "リーパー／風弱点",
        name_glen: "*Ripper/Wind Weak",
        effect_en: "Boost damage against enemies weak to Wind. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "風弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Wind. Effect is reduced as the Weapon Rarity increases."
    },
    "PE05": {
        name_en: "Ripper/Light Weak",
        name_jp: "リーパー／光弱点",
        name_glen: "*Ripper/Light Weak",
        effect_en: "Boost damage against enemies weak to Light. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "光弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Light. Effect is reduced as the Weapon Rarity increases."
    },
    "PF06": {
        name_en: "Ripper/Dark Weak",
        name_jp: "リーパー／闇弱点",
        name_glen: "*Ripper/Dark Weak",
        effect_en: "Boost damage against enemies weak to Dark. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "闇弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Dark. Effect is reduced as the Weapon Rarity increases."
    },
    "VQ01": {
        name_en: "Slayer/Armor Type",
        name_jp: "スレイヤー／機甲種",
        name_glen: "*Slayer/Deftnessor Type",
        effect_en: "Boost damage against Lillipa Mechs. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Lillipa Mechs. Effect is reduced as the Weapon Rarity increases."
    },
    "VQ02": {
        name_en: "Slayer/Beast Type",
        name_jp: "スレイヤー／野獣種",
        name_glen: "*Slayer/Beast Type",
        effect_en: "Boost damage against Naberius Natives. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "野獣種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Naberius Natives. Effect is reduced as the Weapon Rarity increases."
    },
    "PJ13": {
        name_en: "Slayer/Ocean Type",
        name_jp: "スレイヤー／海王種",
        name_glen: "*Slayer/Ocean Type",
        effect_en: "Boost damage against Oceanids. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "海王種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Oceanids. Effect is reduced as the Weapon Rarity increases."
    },
    "PK14": {
        name_en: "Slayer/Kuronite Type",
        name_jp: "スレイヤー／黒の民",
        name_glen: "*Slayer/Kuronite Type",
        effect_en: "Boost damage against Kuronites. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "黒の民のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Kuronites. Effect is reduced as the Weapon Rarity increases."
    },
    "PL15": {
        name_en: "Slayer/Phantoms Type",
        name_jp: "スレイヤー／幻創種",
        name_glen: "*Slayer/Phantoms Type",
        effect_en: "Boost damage against Phantoms. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "幻創種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Phantoms. Effect is reduced as the Weapon Rarity increases."
    },
    "PM16": {
        name_en: "Slayer/Darkers",
        name_jp: "スレイヤー／ダーカー",
        name_glen: "*Slayer/Darkers",
        effect_en: "Boost damage against Darkers. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "ダーカー種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Darkers. Effect is reduced as the Weapon Rarity increases."
    },
    "PN17": {
        name_en: "Slayer/Dragonkin",
        name_jp: "スレイヤー／龍族種",
        name_glen: "*Slayer/Dragonkin",
        effect_en: "Boost damage against Dragonkin. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "龍族種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Dragonkin. Effect is reduced as the Weapon Rarity increases."
    },
    "PO18": {
        name_en: "Slayer/Luminmech",
        name_jp: "スレイヤー／閃機種",
        name_glen: "*Slayer/Luminmech",
        effect_en: "Boost damage against Luminmech. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "閃機種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Luminmech. Effect is reduced as the Weapon Rarity increases."
    },
    "VJ01": {
        name_en: "Soul Catalyst",
        name_jp: "ソール・カタリスト",
        name_glen: "Soul Catalyst",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_glen: "HP(+10),<br>PP(+1)"
    },
    "VJ02": {
        name_en: "Factor Catalyst",
        name_jp: "ファクター・カタリスト",
        name_glen: "Factor Catalyst",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_glen: "HP(+10),<br>PP(+1)"
    },
    "VJ03": {
        name_en: "Reverie Catalyst",
        name_jp: "レヴリー・カタリスト",
        name_glen: "*Reverie Catalyst",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_glen: "HP(+10),<br>PP(+1)"
    },
    "VK03": {
        name_en: "Polytan Smile",
        name_jp: "ポリタン・スマイル",
        name_glen: "*Polytan Smile",
        effect_en: "Adds 25 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が25増加する。",
        effect_glen: "Weapon Enhancement EXP +25."
    },
    "VK04": {
        name_en: "Arkuma Smile",
        name_jp: "アークマ・スマイル",
        name_glen: "*Arkuma Smile",
        effect_en: "Adds 25 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が25増加する。",
        effect_glen: "Weapon Enhancement EXP +25."
    },
    "VK01": {
        name_en: "Emper Embrace",
        name_jp: "エンぺ・エンブレイス",
        name_glen: "Empy Embrace",
        effect_en: "Adds 90 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が90増加する。",
        effect_glen: "Weapon Enhancement EXP +90."
    },
    "VO01": {
        name_en: "Guidance Trainer",
        name_jp: "錬成の導き",
        name_glen: "*Guidance Trainer",
        effect_en: "Increase Special Ability Addition success rate by 5%.",
        effect_jp: "特殊能力の成功率を5％上昇させる。",
        effect_glen: "Increase Augment Addition success rate by 5%."
    },
    "VK05": {
        name_en: "NT Weapon Booster",
        name_jp: "ＮＴウェポンブースト",
        name_glen: "*Weapon Booster",
        effect_en: "Adds 800 EXP to NT weapon grinds.",
        effect_jp: "新世武器強化時の経験値が800増加する。",
        effect_glen: "Weapon Enhancement EXP +800."
    },
    "WA01": {
        name_en: "Photon Collect",
        name_jp: "フォトンコレクト",
        name_glen: "*Photon Collection",
        effect_en: "Boosts status effect affix rate.",
        effect_jp: "状態異常系特殊能力のランクアップ時に成功率を上昇させる。",
        effect_glen: "Boosts status effect affix rate."
    },
    "XA01": {
        name_en: "Soul Receptor",
        name_jp: "ソールレセプター",
        name_glen: "Soul Receptor",
        effect_en: "Greatly increases Soul affix rate.",
        effect_jp: "ソール系特殊能力の合成成功率を大幅に上昇。",
        effect_glen: "Greatly increases Soul affix rate."
    },
    "XB01": {
        name_en: "Extreceptor",
        name_jp: "エクストレセプター",
        name_glen: "*Extreceptor",
        effect_en: "Greatly increases Flict and Alter affix rate.<br>ALL(+10)",
        effect_jp: "アルター・フリクト系と特定の特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Greatly increases Flict and Alter affix rate.<br>ALL(+10)"
    },
    "XC01": {
        name_en: "Gift Receptor",
        name_jp: "ギフトレセプター",
        name_glen: "*Gift Receptor",
        effect_en: "Allows transfer of Lucky Rise, EXP Boost, and Meseta Fever.",
        effect_jp: "ギフト系特殊能力の引き継ぎが可能になる",
        effect_glen: "Allows transfer of Lucky Charm, EXP Boost, and Meseta Fever."
    },
    "XD01": {
        name_en: "Sentence Receptor",
        name_jp: "センテンスレセプター",
        name_glen: "*Sentence Receptor",
        effect_en: "Boosts transfer of Sentence affixes.<br>ALL(+10)",
        effect_jp: "センテンス系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Boosts transfer of Sentence affixes.<br>ALL(+10)"
    },
    "XE01": {
        name_en: "Phrase Receptor",
        name_jp: "フレイズレセプター",
        name_glen: "*Phrase Receptor",
        effect_en: "Boosts transfer of Phrase affixes.<br>ALL(+10)",
        effect_jp: "フレイズ系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Boosts transfer of Phrase affixes.<br>ALL(+10)"
    },
    "XF01": {
        name_en: "Factor Receptor",
        name_jp: "ファクターレセプター",
        name_glen: "*Factor Receptor",
        effect_en: "Boosts Factor-type ability transfer rates.<br>ALL(+10)",
        effect_jp: "ファクター系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Boosts Factor-type ability transfer rates.<br>ALL(+10)"
    },
    "XG01": {
        name_en: "Mark Receptor",
        name_jp: "マークレセプター",
        name_glen: "*Mark Receptor",
        effect_en: "Allows transfer Mark-type ability.<br>ALL(+10)",
        effect_jp: "マーク系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Allows transfer Mark-type ability.<br>ALL(+10)"
    },
    "XJ01": {
        name_en: "Divine Receptor",
        name_jp: "ディバインレセプター",
        name_glen: "*Divine Receptor",
        effect_en: "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
        effect_jp: "ディバイン系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)"
    },
    "XH01": {
        name_en: "Catalyst Receptor",
        name_jp: "カタリストレセプター",
        name_glen: "*Catalyst Receptor",
        effect_en: "Greatly increases affix rate of Catalyst-type ability.<br>ALL(+10)",
        effect_jp: "カタリスト系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Greatly increases affix rate of Catalyst-type ability.<br>ALL(+10)"
    },
    "XI30": {
        name_en: "Attack Receptor",
        name_jp: "アタックレセプター",
        name_glen: "Attack Receptor",
        effect_en: "Greatly increases affix rate of Power, Shoot, Technique, and Arm.<br>ALL(+5)",
        effect_jp: "パワー・シュート・テクニック系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)",
        effect_glen: "Greatly increases success rate for 3 types of attack-increasing Augment/Deftness transfers.<br>ALL(+5)"
    },
    "XI31": {
        name_en: "Guard Receptor",
        name_jp: "ガードレセプター",
        name_glen: "Guard Receptor",
        effect_en: "Greatly increases affix rate of Mind, Body, and React.<br>ALL(+5)",
        effect_jp: "マインド・ボディ・リアクト系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)",
        effect_glen: "Greatly increases success rate for Toughness, Reflex, and Genius Augment transfers.<br>ALL(+5)"
    },
    "XI32": {
        name_en: "Photon Receptor",
        name_jp: "フォトンレセプター",
        name_glen: "Photon Receptor",
        effect_en: "Greatly increases affix rate of Stamina and Spirita.<br>ALL(+5)",
        effect_jp: "スタミナ・スピリタ系特殊能力の合成成功率を大幅に上昇。<br>ALL(+5)",
        effect_glen: "Greatly increases succes rate for Stamina and Spirit Augment Transfers.<br>ALL(+5)"
    },
    "XI02": {
        name_en: "Stamina Boost",
        name_jp: "スタミナ・ブースト",
        name_glen: "Stamina Boost",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)",
        effect_glen: "HP(+45)"
    },
    "XI03": {
        name_en: "Spirita Boost",
        name_jp: "スピリタ・ブースト",
        name_glen: "Spirit Boost",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_glen: "PP(+5)"
    },
    "XI04": {
        name_en: "Power Boost",
        name_jp: "パワー・ブースト",
        name_glen: "Might Boost",
        effect_en: "S-ATK(+25)",
        effect_jp: "打撃力(+25)",
        effect_glen: "MEL Pwr(+25)"
    },
    "XI05": {
        name_en: "Shoot Boost",
        name_jp: "シュート・ブースト",
        name_glen: "Precision Boost",
        effect_en: "R-ATK(+25)",
        effect_jp: "射撃力(+25)",
        effect_glen: "RNG Pwr(+25)"
    },
    "XI06": {
        name_en: "Technique Boost",
        name_jp: "テクニック・ブースト",
        name_glen: "Casting Boost",
        effect_en: "T-ATK(+25)",
        effect_jp: "法撃力(+25)",
        effect_glen: "TEC Pwr(+25)"
    },
    "XI0a": {
        name_en: "Tenora Boost",
        name_jp: "テノラ・ブースト",
        name_glen: "*Tenora Boost",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_glen: "MEL Pwr(+35)"
    },
    "XI0b": {
        name_en: "GRM Boost",
        name_jp: "ＧＲＭ・ブースト",
        name_glen: "*GRM Boost",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_glen: "RNG Pwr(+35)"
    },
    "XI0c": {
        name_en: "Yohmei Boost",
        name_jp: "ヨウメイ・ブースト",
        name_glen: "*Yohmei Boost",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_glen: "TEC Pwr(+35)"
    },
    "XI10": {
        name_en: "Noble Stamina",
        name_jp: "ノーブル・スタミナ",
        name_glen: "Noble Stamina",
        effect_en: "HP(+50),PP(+3)",
        effect_jp: "HP(+50),PP(+3)",
        effect_glen: "HP(+50),PP(+3)"
    },
    "XI14": {
        name_en: "Elegant Stamina",
        name_jp: "エレガント・スタミナ",
        name_glen: "Elegant Stamina",
        effect_en: "HP(+70),PP(+4)",
        effect_jp: "HP(+70),PP(+4)",
        effect_glen: "HP(+70),PP(+4)"
    },
    "XI51": {
        name_en: "Grace Stamina",
        name_jp: "グレース・スタミナ",
        name_glen: "Graceful Stamina",
        effect_en: "HP(+80),PP(+5)",
        effect_jp: "HP(+80),PP(+5)",
        effect_glen: "HP(+80),PP(+5)"
    },
    "XI61": {
        name_en: "Grand Stamina",
        name_jp: "グランド・スタミナ",
        name_glen: "*Grand Stamina",
        effect_en: "HP(+100),PP(+6)",
        effect_jp: "HP(+100),PP(+6)",
        effect_glen: "HP(+100),PP(+6)"
    },
    "XI07": {
        name_en: "Noble Power",
        name_jp: "ノーブル・パワー",
        name_glen: "Noble Might",
        effect_en: "S-ATK(+30),PP(+3)",
        effect_jp: "打撃力(+30),PP(+3)",
        effect_glen: "MEL Pwr(+30),PP(+3)"
    },
    "XI11": {
        name_en: "Elegant Power",
        name_jp: "エレガント・パワー",
        name_glen: "Elegant Might",
        effect_en: "S-ATK(+40),PP(+4)",
        effect_jp: "打撃力(+40),PP(+4)",
        effect_glen: "MEL Pwr(+40),PP(+4)"
    },
    "XI52": {
        name_en: "Grace Power",
        name_jp: "グレース・パワー",
        name_glen: "Graceful Might",
        effect_en: "S-ATK(+50),PP(+5)",
        effect_jp: "打撃力(+50),PP(+5)",
        effect_glen: "MEL Pwr(+50),PP(+5)"
    },
    "XI62": {
        name_en: "Grand Power",
        name_jp: "グランド・パワー",
        name_glen: "*Grand Might",
        effect_en: "S-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "打撃力(+60),HP(+20),PP(+5)",
        effect_glen: "MEL Pwr(+60),HP(+20),PP(+5)"
    },
    "XI08": {
        name_en: "Noble Shoot",
        name_jp: "ノーブル・シュート",
        name_glen: "Noble Precision",
        effect_en: "R-ATK(+30),PP(+3)",
        effect_jp: "射撃力(+30),PP(+3)",
        effect_glen: "RNG Pwr(+30),PP(+3)"
    },
    "XI12": {
        name_en: "Elegant Shoot",
        name_jp: "エレガント・シュート",
        name_glen: "Elegant Precision",
        effect_en: "R-ATK(+40),PP(+4)",
        effect_jp: "射撃力(+40),PP(+4)",
        effect_glen: "RNG Pwr(+40),PP(+4)"
    },
    "XI53": {
        name_en: "Grace Shoot",
        name_jp: "グレース・シュート",
        name_glen: "Graceful Precision",
        effect_en: "R-ATK(+50),PP(+5)",
        effect_jp: "射撃力(+50),PP(+5)",
        effect_glen: "RNG Pwr(+50),PP(+5)"
    },
    "XI63": {
        name_en: "Grand Shoot",
        name_jp: "グランド・シュート",
        name_glen: "*Grand Precision",
        effect_en: "R-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "射撃力(+60),HP(+20),PP(+5)",
        effect_glen: "RNG Pwr(+60),HP(+20),PP(+5)"
    },
    "XI09": {
        name_en: "Noble Technique",
        name_jp: "ノーブル・テクニック",
        name_glen: "Noble Casting",
        effect_en: "T-ATK(+30),PP(+3)",
        effect_jp: "法撃力(+30),PP(+3)",
        effect_glen: "TEC Pwr(+30),PP(+3)"
    },
    "XI13": {
        name_en: "Elegant Technique",
        name_jp: "エレガント・テクニック",
        name_glen: "Elegant Casting",
        effect_en: "T-ATK(+40),PP(+4)",
        effect_jp: "法撃力(+40),PP(+4)",
        effect_glen: "TEC Pwr(+40),PP(+4)"
    },
    "XI54": {
        name_en: "Grace Technique",
        name_jp: "グレース・テクニック",
        name_glen: "Graceful Casting",
        effect_en: "T-ATK(+50),PP(+5)",
        effect_jp: "法撃力(+50),PP(+5)",
        effect_glen: "TEC Pwr(+50),PP(+5)"
    },
    "XI64": {
        name_en: "Grand Technique",
        name_jp: "グランド・テクニック",
        name_glen: "*Grand Casting",
        effect_en: "T-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "法撃力(+50),HP(+20),PP(+5)",
        effect_glen: "TEC Pwr(+60),HP(+20),PP(+5)"
    },
    "XI60": {
        name_en: "Grace Spirita",
        name_jp: "グランド・スピリタ",
        name_glen: "Graceful Spirit",
        effect_en: "PP(+15)",
        effect_jp: "PP(+15)",
        effect_glen: "PP(+15)"
    },
    "XI20": {
        name_en: "Offense Boost",
        name_jp: "オフェンス・ブースト",
        name_glen: "Enhance Offense",
        effect_en: "S-ATK(+15),R-ATK(+15),T-ATK(+15),DEX(+25),PP(+1)",
        effect_jp: "打撃力(+15),射撃力(+15),法撃力(+15),技量(+25),PP(+1)",
        effect_glen: "MEL Pwr(+15),RNG Pwr(+15),TEC Pwr(+15),DEX(+25),PP(+1)"
    },
    "XI22": {
        name_en: "Attack Boost",
        name_jp: "アタックブースト",
        name_glen: "Attack Boost",
        effect_en: "S-ATK(+25),R-ATK(+25),T-ATK(+25),DEX(+40),PP(+3)",
        effect_jp: "打撃力(+25),射撃力(+25),法撃力(+25),技量(+40),PP(+3)",
        effect_glen: "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25),DEX(+40),PP(+3)"
    },
    "XI21": {
        name_en: "Defense Boost",
        name_jp: "ディフェンス・ブースト",
        name_glen: "Enhanced Defense",
        effect_en: "S-DEF(+25),R-DEF(+25),T-DEF(+25),HP(+55),PP(+1)",
        effect_jp: "打撃防御(+25),射撃防御(+25),法撃防御(+25),HP(+55),PP(+1)",
        effect_glen: "MEL Def(+25),RNG Def(+25),TEC Def(+25),HP(+55),PP(+1)"
    },
    "XI23": {
        name_en: "Guard Boost",
        name_jp: "ガードブースト",
        name_glen: "*Guard Boost",
        effect_en: "S-DEF(+35),R-DEF(+35),T-DEF(+35),HP(+75),PP(+3)",
        effect_jp: "打撃防御(+35),射撃防御(+35),法撃防御(+35),HP(+75),PP(+3)",
        effect_glen: "MEL Def(+35),RNG Def(+35),TEC Def(+35),HP(+75),PP(+3)"
    },
    "ZA01": {
        name_en: "Junk A",
        name_jp: "ジャンクA",
        name_glen: "Junk A",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZB01": {
        name_en: "Junk B",
        name_jp: "ジャンクB",
        name_glen: "Junk B",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZC01": {
        name_en: "Junk C",
        name_jp: "ジャンクC",
        name_glen: "Junk C",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZD01": {
        name_en: "Junk D",
        name_jp: "ジャンクD",
        name_glen: "Junk D",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZE01": {
        name_en: "Junk E",
        name_jp: "ジャンクE",
        name_glen: "Junk E",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZF01": {
        name_en: "Junk F",
        name_jp: "ジャンクF",
        name_glen: "Junk F",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZG01": {
        name_en: "Junk G",
        name_jp: "ジャンクG",
        name_glen: "Junk G",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZH01": {
        name_en: "Junk H",
        name_jp: "ジャンクH",
        name_glen: "Junk H",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "ZI01": {
        name_en: "Junk I",
        name_jp: "ジャンクI",
        name_glen: "Junk I",
        effect_en: "100% affix junk",
        effect_jp: "100％合成成功率のジャンク。",
        effect_glen: "100% affix junk"
    },
    "LA99": {
        name_en: "S1:Junk",
        name_jp: "S1:ジャンク",
        name_glen: "S1:Junk",
        effect_en: "Represents any S1 ability.",
        effect_jp: "任意のS1能力を表します。",
        effect_glen: "Represents any S1 ability."
    },
    "LB99": {
        name_en: "S2:Junk",
        name_jp: "S2:ジャンク",
        name_glen: "S2:Junk",
        effect_en: "Represents any S2 ability.",
        effect_jp: "任意のS2能力を表します。",
        effect_glen: "Represents any S2 ability."
    },
    "LC99": {
        name_en: "S3:Junk",
        name_jp: "S3:ジャンク",
        name_glen: "S3:Junk",
        effect_en: "Represents any S3 ability.",
        effect_jp: "任意のS3能力を表します。",
        effect_glen: "Represents any S3 ability."
    },
    "LD99": {
        name_en: "S4:Junk",
        name_jp: "S4:ジャンク",
        name_glen: "S4:Junk",
        effect_en: "Represents any S4 ability.",
        effect_jp: "任意のS4能力を表します。",
        effect_glen: "Represents any S4 ability."
    },
    "LE99": {
        name_en: "S5:Junk",
        name_jp: "S5:ジャンク",
        name_glen: "S5:Junk",
        effect_en: "Represents any S5 ability.",
        effect_jp: "任意のS5能力を表します。",
        effect_glen: "Represents any S5 ability."
    },
    "LF99": {
        name_en: "S6:Junk",
        name_jp: "S6:ジャンク",
        name_glen: "S6:Junk",
        effect_en: "Represents any S6 ability.",
        effect_jp: "任意のS6能力を表します。",
        effect_glen: "Represents any S6 ability."
    },
    "LG99": {
        name_en: "S7:Junk",
        name_jp: "S7:ジャンク",
        name_glen: "S7:Junk",
        effect_en: "Represents any S7 ability.",
        effect_jp: "任意のS7能力を表します。",
        effect_glen: "Represents any S7 ability."
    },
    "LH99": {
        name_en: "S8:Junk",
        name_jp: "S8:ジャンク",
        name_glen: "S8:Junk",
        effect_en: "Represents any S8 ability.",
        effect_jp: "任意のS8能力を表します。",
        effect_glen: "Represents any S8 ability."
    }
});

var module = module || undefined
if (module && module.exports) {
    module.exports.lang = lang
}