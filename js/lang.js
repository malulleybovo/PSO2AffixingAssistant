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
            glen: "Augment Guidance +5%"
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
        },
		"Ability Success Rate +65%": {
            en: "Ability Success Rate +65%",
            jp: "能力追加成功率+65%",
            glen: "Augmentation Aid +65%"
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
            glen:"Augment (Grand Stamina)"
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
            glen:"Augment (Grand Might)"
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
            glen:"Augment (Grand Precision)"
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
            glen:"Augment (Grand Casting)"
        },
        "Add Ability (Grand PP)": {
            en: "Add Ability (Grand PP)",
            jp: "特殊能力(グランドPP)",
            glen:"Augment (Grand Spirit)"
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
            glen:"Augment (Mark Succession)"
        },
        "Add Ability (Divine Receptor)": {
            en: "Add Ability (Divine Receptor)",
            jp: "特殊能力追加(ディバインレセプター)",
            glen:"Augment (Divine Succession)"
        },
        "Add Ability (Catalyst Receptor)": {
            en: "Add Ability (Catalyst Receptor)",
            jp: "特殊能力追加(カタリストレセプター)",
            glen:"*Affix Augment (Catalyst Receptor)"
        },
        "Add Ability (Sentence P)": {
            en: "Add Ability (Sentence P)",
            jp: "特殊能力(センテンスP)",
            glen:"*Affix Augment (Sentence Might)"
        },
        "Add Ability (Sentence S)": {
            en: "Add Ability (Sentence S)",
            jp: "特殊能力(センテンスS)",
            glen:"*Affix Augment (Sentence Precision)"
        },
        "Add Ability (Sentence T)": {
            en: "Add Ability (Sentence T)",
            jp: "特殊能力(センテンスT)",
            glen:"*Affix Augment (Sentence Casting)"
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
		"Add Ability (Ether S)": {
            en: "Add Ability (Ether S)",
            jp: "特殊能力(エーテルS)",
			glen:"*Affix Augment (Aether Soul)"
        },
        'Add Ability (Factor C)': {
            en: "Add Ability (Factor C)",
            jp: "特殊能力(ファクターC)",
			glen:"*Affix Augment (Factor Catalyst)"
        },
        "Add Ability (Omega M)": {
            en: "Add Ability (Omega M)",
            jp: "特殊能力(オメガM)",
			glen:"*Affix Augment (Omega Memoria)"
        },
        "Add Ability (Reverie C)": {
            en: "Add Ability (Reverie C)",
            jp: "特殊能力(レヴリーC)",
			glen:"*Affix Augment (Reverie Catalyst)"
        },
        "Add Ability (Mana Reverie)": {
            en: "Add Ability (Mana Reverie)",
            jp: "特殊能力(マナレヴリー)",
			glen:"*Affix Augment (Mana Reverie)"
        },
        "Add Ability (Ether F)": {
            en: "Add Ability (Ether F)",
            jp: "特殊能力(エーテルF)",
			glen:"*Affix Augment (Aether Factor)"
        },
        "Add Ability (Astral S)": {
            en: "Add Ability (Astral S)",
            jp: "特殊能力(アストラルS)",
			glen:"*Affix Augment (Astral Soul)"
        },
        "S1 Add: Photon Reduction 2": {
            en: "S1 Add: Photon Reduction 2",
            jp: "S1追加:光子縮減2",
            glen: "S1 Add: Photon Descent 2"
        },
        "S1 Add: Brilliant Ruin 2": {
            en: "S1 Add: Brilliant Ruin 2",
            jp: "S1追加:滅域輝与2",
            glen: "S1 Add: Lucent Domain 2"
        },
        "S1 Add: Flowing Intent": {
            en: "S1 Add: Flowing Intent",
            jp: "S1追加:時流の志",
            glen: "S1 Add: Timeflow Will"
        },
        "S1 Add: Lethal Intent": {
            en: "S1 Add: Lethal Intent",
            jp: "S1追加:死中の志",
            glen: "S1 Add: Will of the Dying"
        },
        "S1 Add: Reckless Strike": {
            en: "S1 Add: Reckless Strike",
            jp: "S1追加:賭死の撃",
            glen: "S1 Add: Dance with Death"
        },
        "S1 Add: Eclipsing Decay": {
            en: "S1 Add: Eclipsing Decay",
            jp: "S1追加:失力の蝕",
            glen: "S1 Add: Crippling Erode"
        },
        "S1 Add: Augment Intent": {
            en: "S1 Add: Augment Intent",
            jp: "S1追加:錬成の志",
            glen: "S1 Add: Augment Will"
        },
        "S1 Add: Photon Balance": {
            en: "S1 Add: Photon Balance",
            jp: "S1追加:光子の秤",
            glen: "S1 Add: Photon Balance"
        },
        "S1 Add: Collaborator Liberator": {
            en: "S1 Add: Collaborator Liberator",
            jp: "S1追加:戦友の加護",
            glen: "S1 Add: Comrade\'s Blessing"
        },
        "S1 Add: Wise Skill": {
            en: "S1 Add: Wise Skill",
            jp: "S1追加:妙技の巧",
            glen: "S1 Add: Skillful Adept"
        },
        "S1 Add: Radiating Grace": {
            en: "S1 Add: Radiating Grace",
            jp: "S1追加:輝勢の恵",
            glen: "S1 Add: Luminous Grace"
        },
        "S1 Add: Brilliant Intent": {
            en: "S1 Add: Brilliant Intent",
            jp: "S1追加:輝充の志",
            glen: "S1 Add: Photonic Will"
        },
        "S1 Add: Red Petal Flash": {
            en: "S1 Add: Red Petal Flash",
            jp: "S1追加:花ノ赤閃",
            glen: "S1 Add: Petalgleam"
        },
        "S1 Add: Blue Ocean Flash": {
            en: "S1 Add: Blue Ocean Flash",
            jp: "S1追加:海ノ青閃",
            glen: "S1 Add: Seagleam"
        },
        "S1 Add: White Snow Flash": {
            en: "S1 Add: White Snow Flash",
            jp: "S1追加:雪ノ白閃",
            glen: "S1 Add: Snowgleam"
        },
        "S1 Add: Yellow Moon Flash": {
            en: "S1 Add: Yellow Moon Flash",
            jp: "S1追加:月ノ黄閃",
            glen: "S1 Add: Moongleam"
        },
        "S1 Add: Green Leaf Flash": {
            en: "S1 Add: Green Leaf Flash",
            jp: "S1追加:葉ノ緑閃",
            glen: "S1 Add: Leafgleam"
        },
        "S1 Add: Black Shadow Flash": {
            en: "S1 Add: Black Shadow Flash",
            jp: "S1追加:影ノ黒閃",
            glen: "S1 Add: Shadowgleam"
        },
        "S1 Add: Skilled Intent": {
            en: "S1 Add: Skilled Intent",
            jp: "S1追加:妙撃の志",
            glen: "S1 Add: Precision Will"
        },
        "S1 Add: Flowing Exhilaration": {
            en: "S1 Add: Flowing Exhilaration",
            jp: "S1追加:時流活与",
            glen: "S1 Add: Timeflow Vitality"
        },
        "S1 Add: Guardian Armor": {
            en: "S1 Add: Guardian Armor",
            jp: "S1追加:守護の備",
            glen: "S1 Add: Guardian Shield"
        },
        "S1 Add: Rupturing Excess": {
            en: "S1 Add: Rupturing Excess",
            jp: "S1追加:裂砕の剰",
            glen: "S1 Add: Lustrous Partbreaker"
        },
        "S1 Add: Spirited Response": {
            en: "S1 Add: Spirited Response",
            jp: "S1追加:気輝応変",
            glen: "S1 Add: Luminous Adaptation"
        },
        "S1 Add: Rupturing Intent": {
            en: "S1 Add: Rupturing Intent",
            jp: "S1追加:裂砕の志",
            glen: "S1 Add: Partbreaker\'s Will"
        },
        "S1 Add: Double-Edged Sword": {
            en: "S1 Add: Double-Edged Sword",
            jp: "S1追加:諸刃の撃",
            glen: "S1 Add: Two-edged Strike"
        },
        "S1 Add: Radiant Strike": {
            en: "S1 Add: Radiant Strike",
            jp: "S1追加:輝剰の撃",
            glen: "S1 Add: Lustrous Strike"
        },
		"S1 Add: Brilliant Intent 2": {
            en: "S1 Add: Brilliant Intent 2",
            jp: "S1追加:輝充の志2",
			glen: "*S1 Add: Photonic Will 2"
        },
        "S1 Add: Powering Intent": {
            en: "S1 Add: Powering Intent",
            jp: "S1追加:強闘の志",
			glen: "S1 Add: Goliathslayer\'s Will"
        },
		"S1 Add: Photon Balance 2": {
            en: "S1 Add: Photon Balance 2",
            jp: "S1追加:光子の秤2",
			glen: "*S1 Add: Photon Balance 2"
        },
        "S1 Add: Collaborator Liberator 2": {
            en: "S1 Add: Collaborator Liberator 2",
            jp: "S1追加:戦友の加護2",
			glen: "*S1 Add: Comrade\'s Blessing 2"
        },
        "S1 Add: Offensive Intent 2": {
            en: "S1 Add: Offensive Intent 2",
            jp: "S1追加:剛撃の志2",
			glen: "*S1 Add: Aggressive Will 2"
        },
        "S1 Add: Flowing Grace": {
            en: "S1 Add: Flowing Grace",
            jp: "S1追加:時流の恵",
			glen: "*S1 Add: Timeflow Grace"
        },
        "S2 Add: Umbrageous Melody": {
            en: "S2 Add: Umbrageous Melody",
            jp: "S2追加:月葉影の歌",
            glen: "*S2 Add: Moonleaf Song"
        },
        "S2 Add: Nature's Reduction 2": {
            en: "S2 Add: Nature's Reduction 2",
            jp: "S2追加:花海雪の縮減2",
            glen: "S2 Add: Petalsea Descent 2"
        },
        "S2 Add: Umbrageous Radiance 2": {
            en: "S2 Add: Umbrageous Radiance 2",
            jp: "S2追加:月葉影の輝剰2",
            glen: "S2 Add: Lustrous Moonleaf 2"
        },
        "S2 Add: Wise Skill 2": {
            en: "S2 Add: Wise Skill 2",
            jp: "S2追加:妙技の巧2",
            glen: "S2 Add: Skillful Adept 2"
        },
        "S2 Add: Skilled Intent 2": {
            en: "S2 Add: Skilled Intent 2",
            jp: "S2追加:妙撃の志2",
            glen: "S2 Add: Precision Will 2"
        },
        "S2 Add: Radiant Strike 2": {
            en: "S2 Add: Radiant Strike 2",
            jp: "S2追加:輝剰の撃2",
            glen: "S2 Add: Lustrous Strike 2"
        },
        "S2 Add: Runner's High": {
            en: "S2 Add: Runner's High",
            jp: "S2追加:走者高揚",
            glen: "S2 Add: Runner\'s High"
        },
        "S2 Add: Skill Reduction": {
            en: "S2 Add: Skill Reduction",
            jp: "S2追加:技巧縮減",
            glen: "S2 Add: Prowess in Descent"
        },
        "S2 Add: Heavenly Keeper": {
            en: "S2 Add: Heavenly Keeper",
            jp: "S2追加:保天輝地",
            glen: "S2 Add: Sky-Earth Lucency"
        },
        "S2 Add: Flowing Armor": {
            en: "S2 Add: Flowing Armor",
            jp: "S2追加:時流の護",
            glen: "S2 Add: Timeflow Armor"
        },
        "S2 Add: Flowing Exhilaration": {
            en: "S2 Add: Flowing Exhilaration",
            jp: "S2追加:時流活与",
            glen: "S2 Add: Timeflow Vitality"
        },
        "S2 Add: Photon Reduction": {
            en: "S2 Add: Photon Reduction",
            jp: "S2追加:光子縮減",
            glen: "S2 Add: Photon Descent"
        },
        "S2 Add: Sturdy Recovery": {
            en: "S2 Add: Sturdy Recovery",
            jp: "S2追加:剛乱活与",
            glen: "S2 Add: Tumultuous Vitality"
        },
        "S2 Add: Cursed Radiance": {
            en: "S2 Add: Cursed Radiance",
            jp: "S2追加:災転輝与",
            glen: "S2 Add: Lucent Adversity"
        },
        "S2 Add: Flowing Grace": {
            en: "S2 Add: Flowing Grace",
            jp: "S2追加:時流の恵",
            glen: "*S2 Add: Timeflow Grace"
        },
        "S2 Add: Rupturing Excess": {
            en: "S2 Add: Rupturing Excess",
            jp: "S2追加:裂砕の剰",
            glen: "S2 Add: Lustrous Partbreaker"
        },
        "S2 Add: Double-Edged Sword": {
            en: "S2 Add: Double-Edged Sword",
            jp: "S2追加:諸刃の撃",
            glen: "S2 Add: Two-edged Strike"
        },
        "S2 Add: Rainbow's Intent": {
            en: "S2 Add: Rainbow's Intent",
            jp: "S2追加:六色の志",
            glen: "S2 Add: Rainbow Will"
        },
        "S2 Add: Rainbow's Exhilaration": {
            en: "S2 Add: Rainbow's Exhilaration",
            jp: "S2追加:六色の活与",
            glen: "S2 Add: Rainbow Vitality"
        },
        "S2 Add: Brilliant Intent": {
            en: "S2 Add: Brilliant Intent",
            jp: "S2追加:輝充の志",
            glen: "S2 Add: Photonic Will"
        },
		"S2 Add: Spirited Response": {
            en: "S2 Add: Spirited Response",
            jp: "S2追加:気輝応変",
			glen: "*S2 Add: Spirited Response"
        },
        "S2 Add: Flaming Guard": {
            en: "S2 Add: Flaming Guard",
            jp: "S2追加:火炎の備志",
			glen: "*S2 Add: Flaming Guard"
        },
        "S2 Add: Freezing Guard": {
            en: "S2 Add: Freezing Guard",
            jp: "S2追加:氷雪の備志",
			glen: "*S2 Add: Freezing Guard"
        },
        "S2 Add: Lightning Guard": {
            en: "S2 Add: Lightning Guard",
            jp: "S2追加:轟雷の備志",
			glen: "*S2 Add: Lightning Guard"
        },
        "S2 Add: Storm Guard": {
            en: "S2 Add: Storm Guard",
            jp: "S2追加:暴風の備志",
			glen: "*S2 Add: Storm Guard"
        },
        "S2 Add: Shining Guard": {
            en: "S2 Add: Shining Guard",
            jp: "S2追加:光明の備志",
			glen: "*S2 Add: Shining Guard"
        },
        "S2 Add: Darkness Guard": {
            en: "S2 Add: Darkness Guard",
            jp: "S2追加:暗闇の備志",
			glen: "*S2 Add: Darkness Guard"
        },
        "S2 Add: Heavenly Keeper 2": {
            en: "S2 Add: Heavenly Keeper 2",
            jp: "S2追加:保天輝地2",
			glen: "*S2 Add: Sky-Earth Lucency 2"
        },
        "S2 Add: Umbrageous Melody 2": {
            en: "S2 Add: Umbrageous Melody 2",
            jp: "S2追加:月葉影の歌2",
			glen: "*S2 Add: Moonleaf Song 2"
        },
        "S2 Add: Photon Reduction 3": {
            en: "S2 Add: Photon Reduction 3",
            jp: "S2追加:光子縮減3",
			glen: "*S2 Add: Photon Descent 3"
        },
        "S2 Add: Guardian Armor 2": {
            en: "S2 Add: Guardian Armor 2",
            jp: "S2追加:守護の備2",
			glen: "*S2 Add: Guardian Shield 2"
        },
        "S2 Add: Instant Reduction 2": {
            en: "S2 Add: Instant Reduction 2",
            jp: "S2追加:瞬乱縮減2",
			glen: "*S2 Add: Perfect Descent 2"
        },
        "S2 Add: Instant Purpose": {
            en: "S2 Add: Instant Purpose",
            jp: "S2追加:瞬乱巧志",
			glen: "*S2 Add: Instant Purpose"
        },
        "S2 Add: Medicinal Wisdom 2": {
            en: "S2 Add: Medicinal Wisdom 2",
            jp: "S2追加:服薬の恵2",
			glen: "*S2 Add: Medical Grace 2"
        },
        "S3 Add: Nature's Melody": {
            en: "S3 Add: Nature's Melody",
            jp: "S3追加:花海雪の歌",
            glen: "S3 Add: Petalsea Song"
        },
        "S3 Add: Nature's Gleam 2": {
            en: "S3 Add: Nature's Gleam 2",
            jp: "S3追加:花海雪の輝勢2",
            glen: "*S3 Add: Petalsea Lucentrush 2"
        },
        "S3 Add: Flowing Grace": {
            en: "S3 Add: Flowing Grace",
            jp: "S3追加:時流の恵",
            glen: "S3 Add: Timeflow Grace"
        },
        "S3 Add: Flowing Exhilaration 2": {
            en: "S3 Add: Flowing Exhilaration 2",
            jp: "S3追加:時流活与2",
            glen: "S3 Add: Timeflow Vitality 2"
        },
        "S3 Add: Radiating Grace 2": {
            en: "S3 Add: Radiating Grace 2",
            jp: "S3追加:輝勢の恵2",
            glen: "S3 Add: Luminous Grace 2"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:撃流の備",
            glen: "*S3 Add: Calming Exhilaration"
        },
        "S3 Add: Curtailed Strike": {
            en: "S3 Add: Curtailed Strike",
            jp: "S3追加:撃流縮減",
            glen: "S3 Add: Strikeflow Descent"
        },
        "S3 Add: Wise Strike": {
            en: "S3 Add: Wise Strike",
            jp: "S3追加:撃流の巧",
            glen: "S3 Add: Strikeflow Adept"
        },
        "S3 Add: Flowing Courage": {
            en: "S3 Add: Flowing Courage",
            jp: "S3追加:時流の勇",
            glen: "S3 Add: Timeflow Mettle"
        },
        "S3 Add: Fortifying Strike": {
            en: "S3 Add: Fortifying Strike",
            jp: "S3追加:撃流の備",
            glen: "S3 Add: Strikeflow Shield"
        },
        "S3 Add: Radiant Strike": {
            en: "S3 Add: Radiant Strike",
            jp: "S3追加:輝剰の撃",
            glen: "S3 Add: Lustrous Strike"
        },
        "S3 Add: Skilled Intent": {
            en: "S3 Add: Skilled Intent",
            jp: "S3追加:妙撃の志",
            glen: "S3 Add: Precision Will"
        },
        "S3 Add: Offensive Intent": {
            en: "S3 Add: Offensive Intent",
            jp: "S3追加:剛撃の志",
            glen: "S3 Add: Aggressive Will"
        },
        "S3 Add: Vital Intent": {
            en: "S3 Add: Vital Intent",
            jp: "S3追加:活実の志",
            glen: "S3 Add: Axiom Will"
        },
        "S3 Add: Wise Skill": {
            en: "S3 Add: Wise Skill",
            jp: "S3追加:妙技の巧",
            glen: "S3 Add: Skillful Adept"
        },
        "S3 Add: Rupturing Intent": {
            en: "S3 Add: Rupturing Intent",
            jp: "S3追加:裂砕の志",
            glen: "*S3 Add: Partbreaker\'s Will"
        },
        "S3 Add: Brilliant Ruin": {
            en: "S3 Add: Brilliant Ruin",
            jp: "S3追加:滅域輝与",
            glen: "S3 Add: Lucent Domain"
        },
        "S3 Add: Cursed Radiance": {
            en: "S3 Add: Cursed Radiance",
            jp: "S3追加:災転輝与",
            glen: "S3 Add: Lucent Adversity"
        },
        "S3 Add: Calming Exhilaration": {
            en: "S3 Add: Calming Exhilaration",
            jp: "S3追加:静心活与",
            glen: "*S3 Add: Calming Exhilaration"
        },
        "S3 Add: Powering Intent": {
            en: "S3 Add: Powering Intent",
            jp: "S3追加:強闘の志",
            glen: "*S3 Add: Goliathslayer\'s Will"
        },
        "S3 Add: Rainbow's Reduction": {
            en: "S3 Add: Rainbow's Reduction",
            jp: "S3追加:六色の縮減",
            glen: "*S3 Add: Rainbow's Reduction"
        },
        "S3 Add: Rainbow's Radiance": {
            en: "S3 Add: Rainbow's Radiance",
            jp: "S3追加:六色の輝剰",
            glen: "S3 Add: Lustrous Rainbow"
        },
        "S3 Add: Rainbow's Gleam": {
            en: "S3 Add: Rainbow's Gleam",
            jp: "S3追加:六色の輝勢",
            glen: "S3 Add: Luminous Rainbow"
        },
        "S3 Add: Nature's Melody 2": {
            en: "S3 Add: Nature's Melody 2",
            jp: "S3追加:花海雪の歌2",
            glen: "S3 Add: Petalsea Song 2"
        },
		"S3 Add: Puncturing Intent": {
            en: "S3 Add: Puncturing Intent",
            jp: "S3追加:裂砕妙撃の志",
			glen: "*S3 Add: Puncturing Intent"
        },
        "S3 Add: Double-Edged Sword": {
            en: "S3 Add: Double-Edged Sword",
            jp: "S3追加:諸刃の撃",
			glen: "*S3 Add: Two-edged Strike"
        },
        "S3 Add: Photon Reduction": {
            en: "S3 Add: Photon Reduction",
            jp: "S3追加:光子縮減",
			glen: "*S3 Add: Photon Descent"
        },
        "S3 Add: Immediate Brilliance": {
            en: "S3 Add: Immediate Brilliance",
            jp: "S3追加:瞬連の輝",
			glen: "*S3 Add: Immediate Brilliance"
        },
        "S3 Add: Radiant Strike 3": {
            en: "S3 Add: Radiant Strike 3",
            jp: "S3追加:輝剰の撃3",
			glen: "*S3 Add: Lustrous Strike 3"
        },
        "S3 Add: Vital Intent 2": {
            en: "S3 Add: Vital Intent 2",
            jp: "S3追加:活実の志2",
			glen: "*S3 Add: Axiom Will 2"
        },
        "S4 Add: Heavenly Protection": {
            en: "S4 Add: Heavenly Protection",
            jp: "S4追加:天輝の守護",
            glen: "S4 Add: Heavenly Protection"
        },
        "S4 Add: Calming Intent": {
            en: "S4 Add: Calming Intent",
            jp: "S4追加:静心の志",
            glen: "S4 Add: Calming Intent"
        },
        "S4 Add: Skilled Balance": {
            en: "S4 Add: Skilled Balance",
            jp: "S4追加:妙撃の秤",
            glen: "S4 Add: Precise Balance"
        },
        "S4 Add: Saint Shield": {
            en: "S4 Add: Saint Shield",
            jp: "S4追加:聖者の盾",
            glen: "*S4 Add: Saint Shield"
        },
        "S4 Add: Harmonized Rainbow": {
            en: "S4 Add: Harmonized Rainbow",
            jp: "S4追加:六色の輝秤",
            glen: "S4 Add: Rainbow Lucentbalance"
        },
        "S4 Add: Raising Pursuit": {
            en: "S4 Add: Raising Pursuit",
            jp: "S4追加:累加追撃",
            glen: "S4 Add: Escalating Pursuit"
        },
        "S4 Add: Pursuing Eclipse": {
            en: "S4 Add: Pursuing Eclipse",
            jp: "S4追加:追蝕の巧",
            glen: "S4 Add: Amplified Adept"
        },
        "S4 Add: Cursed Rainbow": {
            en: "S4 Add: Cursed Rainbow",
            jp: "S4追加:六色の災転",
            glen: "S4 Add: Rainbow Adversity"
        },
        "S4 Add: Colossal Radiance": {
            en: "S4 Add: Colossal Radiance",
            jp: "S4追加:強闘輝与",
            glen: "S4 Add: Goliathslayer Lucent"
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
            glen: "S4 Add: Nullzone Bestowal"
        },
        "S5 Add: Anthesis Cultivation": {
            en: "S5 Add: Anthesis Cultivation",
            jp: "S5追加:錬成萌花",
            glen: "S5 Add: Augment Bloom"
        },
        "S5 Add: Instant Invocation": {
            en: "S5 Add: Instant Invocation",
            jp: "S5追加:瞬術略唱",
            glen: "*S5 Add: Instant Invocation"
        },
        "S5 Add: Tethered Eclipse": {
            en: "S5 Add: Tethered Eclipse",
            jp: "S5追加:追蝕の縛",
            glen: "S5 Add: Amplified Restraint"
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
		"S5 Add: Calming Expanse": {
            en: "S5 Add: Calming Expanse",
            jp: "S5追加:静心拡域",
			glen: "*S5 Add: Calming Expanse"
        },
        "S5 Add: Area Support": {
            en: "S5 Add: Area Support",
            jp: "S5追加:領域加勢",
			glen: "*S5 Add: Area Support"
        },
        "S5 Add: Aegis Balance": {
            en: "S5 Add: Aegis Balance",
            jp: "S5追加:堅守の秤",
			glen: "*S5 Add: Aegis Balance"
        },
        "S5 Add: Swift Radiance": {
            en: "S5 Add: Swift Radiance",
            jp: "S5追加:回避輝与",
			glen: "*S5 Add: Swift Radiance"
        },
        "S5 Add: Calming Quartet": {
            en: "S5 Add: Calming Quartet",
            jp: "S5追加:静心四連",
			glen: "*S5 Add: Calming Quartet"
        },
        "S5 Add: Chained Radiance": {
            en: "S5 Add: Chained Radiance",
            jp: "S5追加:連鎖輝与",
			glen: "*S5 Add: Chained Radiance"
        },
        "S6 Add: Ironclad Illness": {
            en: "S6 Add: Ironclad Illness",
            jp: "S6追加:癒蝕頑強",
            glen: "S6 Add: Ironclad Illness"
        },
        "S6 Add: Guardian Armor": {
            en: "S6 Add: Guardian Armor",
            jp: "S6追加:守護の備",
            glen: "S6 Add: Guardian Shield"
        },
        "S6 Add: Heroic Howl": {
            en: "S6 Add: Heroic Howl",
            jp: "S6追加:英雄咆哮",
            glen: "S6 Add: Heroic Howl"
        },
        "S6 Add: Soaring Ballet": {
            en: "S6 Add: Soaring Ballet",
            jp: "S6追加:翔機天舞",
            glen: "*S6 Add: Soaring Heavendance"
        },
        "S6 Add: Guardian's Essence": {
            en: "S6 Add: Guardian's Essence",
            jp: "S6追加:機魂の守護",
            glen: "*S6 Add: Soul Protection"
        },
        "S6 Add: Evasion Whistle": {
            en: "S6 Add: Evasion Whistle",
            jp: "S6追加:回避の口笛",
            glen: "*S6 Add: Dodging Whistle"
        },
        "S6 Add: Long Night Star": {
            en: "S6 Add: Long Night Star",
            jp: "S6追加:長夜の明星",
            glen: "S6 Add: Long Night Star"
        },
        "S6 Add: Overlimit": {
            en: "S6 Add: Overlimit",
            jp: "S6追加:超限活器",
            glen: "*S6 Add: Overflowing Life V"
        },
        "S6 Add: Wondrous Encore": {
            en: "S6 Add: Wondrous Encore",
            jp: "S6追加:奇跡再演",
			glen: "S6 Add: Miraculous Encore"
        },
		"S6 Add: Raising Expanse": {
            en: "S6 Add: Raising Expanse",
            jp: "S6追加:累加拡域",
			glen: "*S6 Add: Raising Expanse"
        },
        "S6 Add: Rainbow's Shield": {
            en: "S6 Add: Rainbow's Shield",
            jp: "S6追加:六色の盾",
			glen: "*S6 Add: Rainbow's Shield"
        },
        "S7 Add: S-ATK Up": {
            en: "S7 Add: S-ATK Up",
            jp: "S7追加:打撃上昇",
            glen: "S7 Add: Fortified Melee"
        },
        "S7 Add: R-ATK Up": {
            en: "S7 Add: R-ATK Up",
            jp: "S7追加:射撃上昇",
            glen: "S7 Add: Fortified Ranged"
        },
        "S7 Add: T-ATK Up": {
            en: "S7 Add: T-ATK Up",
            jp: "S7追加:法撃上昇",
            glen: "S7 Add: Fortified Technique"
        },
        "S7 Add: Zenith Impact": {
            en: "S7 Add: Zenith Impact",
            jp: "S7追加:瞬撃の極",
            glen: "S7 Add: Supreme Perfection"
        },
        "S7 Add: Increased Efficiency": {
            en: "S7 Add: Increased Efficiency",
            jp: "S7追加:薬効増大",
            glen: "S7 Add: Medicinal Potentiation"
        },
        "S7 Add: Mind Merge": {
            en: "S7 Add: Mind Merge",
            jp: "S7追加:以心伝心",
            glen: "S7 Add: Empathic Communion"
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
		"S7 Add: Descried Warrior": {
            en: "S7 Add: Descried Warrior",
            jp: "S7追加:視敵無双",
			glen: "*S7 Add: Descried Warrior"
        },
        "S7 Add: Rainbow's Skill": {
            en: "S7 Add: Rainbow's Skill",
            jp: "S7追加:六色の巧",
			glen: "S7 Add: Rainbow's Skill"
        },
        "S8 Add: HP Up": {
            en: "S8 Add: HP Up",
            jp: "S8追加:活器上昇",
            glen: "S8 Add: Fortified Life Vessel"
        },
        "S8 Add: PP Up": {
            en: "S8 Add: PP Up",
            jp: "S8追加:輝器上昇",
            glen: "S8 Add: Fortified Photon V"
        },
        "S8 Add: Strong Potency": {
            en: "S8 Add: Strong Potency",
            jp: "S8追加:服薬強身",
            glen: "S8 Add: Mighty Medication"
        },
        "S8 Add: High-Minded": {
            en: "S8 Add: High-Minded",
            jp: "S8追加:一念滞空",
            glen: "*S8 Add: High-Geniused"
        },
        "S8 Add: HP Up 2": {
            en: "S8 Add: HP Up 2",
            jp: "S8追加:活器上昇2",
            glen: "S8 Add: Fortified Life Vessel 2"
        },
        "S8 Add: Sky Dance's Boon": {
            en: "S8 Add: Sky Dance's Boon",
            jp: "S8追加:舞空の援",
            glen: "S8 Add: Skydance Support"
        },
		"S8 Add: PP Up 2": {
            en: "S8 Add: PP Up 2",
            jp: "S8追加:輝器上昇2",
			glen: "*S8 Add: PP Up 2"
        },
        "S8 Add: Rainbow's Decay": {
            en: "S8 Add: Rainbow's Decay",
            jp: "S8追加:六色の蝕",
			glen: "*S8 Add: Rainbow's Decay"
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
        effect_en: "HP(+80)",
        effect_jp: "HP(+80)",
        effect_glen: "HP(+80)"
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
        effect_en: "ALL(+30)",
        effect_jp: "ALL(+30)",
        effect_glen: "ALL(+30)"
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
        name_en: "Shot Resist I",
        name_jp: "ショットレジストⅠ",
        name_glen: "Projectile Ward I",
        effect_en: "Range Resist(+3)",
        effect_jp: "射撃耐性(+3)",
        effect_glen: "RNG Resist(+3)"
    },
    "HB02": {
        name_en: "Shot Resist II",
        name_jp: "ショットレジストⅡ",
        name_glen: "Projectile Ward II",
        effect_en: "Range Resist(+4)",
        effect_jp: "射撃耐性(+4)",
        effect_glen: "RNG Resist(+4)"
    },
    "HB03": {
        name_en: "Shot Resist III",
        name_jp: "ショットレジストⅢ",
        name_glen: "Projectile Ward III",
        effect_en: "Range Resist(+5)",
        effect_jp: "射撃耐性(+5)",
        effect_glen: "RNG Resist(+5)"
    },
    "HB04": {
        name_en: "Shot Resist IV",
        name_jp: "ショットレジストⅣ",
        name_glen: "Projectile Ward IV",
        effect_en: "Range Resist(+6)",
        effect_jp: "射撃耐性(+6)",
        effect_glen: "RNG Resist(+6)"
    },
    "HB05": {
        name_en: "Shot Resist V",
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
        name_glen: "Sovereign Ward I",
        effect_en: "All Resist(+1)",
        effect_jp: "全耐性(+1)",
        effect_glen: "All Resist(+1)"
    },
    "HZ02": {
        name_en: "All Resist II",
        name_jp: "オールレジストⅡ",
        name_glen: "Sovereign Ward II",
        effect_en: "All Resist(+2)",
        effect_jp: "全耐性(+2)",
        effect_glen: "All Resist(+2)"
    },
    "HZ03": {
        name_en: "All Resist III",
        name_jp: "オールレジストⅢ",
        name_glen: "Sovereign Ward III",
        effect_en: "All Resist(+3)",
        effect_jp: "全耐性(+3)",
        effect_glen: "All Resist(+3)"
    },
    "HZ04": {
        name_en: "All Resist IV",
        name_jp: "オールレジストⅣ",
        name_glen: "Sovereign Ward IV",
        effect_en: "All Resist(+4)",
        effect_jp: "全耐性(+4)",
        effect_glen: "All Resist(+4)"
    },
    "HZ05": {
        name_en: "All Resist V",
        name_jp: "オールレジストⅤ",
        name_glen: "Sovereign Ward V",
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
        name_glen: "S1:Aggressive Will",
        effect_en: "Boosts damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_glen: "Increases attack power by 2%."
    },
    "LA02": {
        name_en: "S1:Photon Reduction",
        name_jp: "S1:光子縮減",
        name_glen: "S1:Photon Descent",
        effect_en: "PP consumption is reduced by 7%.",
        effect_jp: "PP消費量を7%軽減。",
        effect_glen: "Reduces PP consumption by 7%."
    },
    "LA03": {
        name_en: "S1:Wise Skill",
        name_jp: "S1:妙技の巧",
        name_glen: "S1:Skillful Adept",
        effect_en: "Increases critical rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。",
        effect_glen: "Increases critical hit rate by 15%."
    },
    "LA2S": {
        name_en: "S1:Wise Skill 2",
        name_jp: "S1:妙技の巧2",
        name_glen: "S1:Skillful Adept 2",
        effect_en: "Increases critical rate by 18%.",
        effect_jp: "クリティカル率が18%上昇する。",
        effect_glen: "Increases critical hit rate by 18%."
    },
    "LA04": {
        name_en: "S1:Brilliant Intent",
        name_jp: "S1:輝充の志",
        name_glen: "S1:Photonic Will",
        effect_en: "Boosts damage by 3% while PP<br>at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。",
        effect_glen: "Increases attack power by 3% while PP is at or above 40%."
    },
    "LA05": {
        name_en: "S1:Double-Edged Sword",
        name_jp: "S1:諸刃の撃",
        name_glen: "S1:Two-edged Strike",
        effect_en: "Deal 4% more damage but take<br>8% more damage.",
        effect_jp: "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
        effect_glen: "Increases attack power by 4% but take 8% more damage when your weapon is drawn."
    },
    "LA06": {
        name_en: "S1:Radiating Grace",
        name_jp: "S1:輝勢の恵",
        name_glen: "S1:Luminous Grace",
        effect_en: "PP regeneration increases by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。",
        effect_glen: "Increases natural PP recovery by 20%."
    },
    "LA2R": {
        name_en: "S1:Radiating Grace 2",
        name_jp: "S1:輝勢の恵2",
        name_glen: "S1:Luminous Grace 2",
        effect_en: "PP regeneration increases by 23%.",
        effect_jp: "PPの自然回復速度が23%上昇する。",
        effect_glen: "Increases natural PP recovery by 23%."
    },
    "LA11": {
        name_en: "S1:Immediate Intent",
        name_jp: "S1:瞬連の志",
        name_glen: "S1:Perfectchain Will",
        effect_en: "Successive Just Attacks will<br>increase damage up to 3%.",
        effect_jp: "連続でジャストアタックに成功すると、最大で3%まで与ダメージが上昇。",
        effect_glen: "Increases damage by 2% when performing successive Perfect Attack normal attacks.<br>Maxes at 3%."
    },
    "LA12": {
        name_en: "S1:Red Petal Flash",
        name_jp: "S1:花ノ赤閃",
        name_glen: "S1:Petalgleam",
        effect_en: "+3% Damage for 30 seconds after<br>inflicting 450,000 damage.",
        effect_jp: "与ダメージ450,000毎に30秒間、3%威力上昇。",
        effect_glen: "Increases power by 3% for 30 seconds after inflicting 450000 damage."
    },
    "LA13": {
        name_en: "S1:Blue Ocean Flash",
        name_jp: "S1:海ノ青閃",
        name_glen: "S1:Seagleam",
        effect_en: "Recover 4% HP every second for 30<br>seconds after taking 600 damage.",
        effect_jp: "被ダメージ600毎に30秒間、毎秒HPが4%回復。",
        effect_glen: "Recover 4% max HP every second for 30 seconds after taking 600 damage. "
    },
    "LA14": {
        name_en: "S1:White Snow Flash",
        name_jp: "S1:雪ノ白閃",
        name_glen: "S1:Snowgleam",
        effect_en: "+20% PP Recovery on attacks for 30<br>seconds after using 150 PP.",
        effect_jp: "発動時PP消費量150毎に30秒間、攻撃時のPP回復量が20%上昇。",
        effect_glen: "Increases Active PP Recovery by 20% for 30 seconds after using 150 PP."
    },
    "LA15": {
        name_en: "S1:Yellow Moon Flash",
        name_jp: "S1:月ノ黄閃",
        name_glen: "S1:Moongleam",
        effect_en: "8% PP Consumption Reduction for 20<br>seconds upon Just Guarding.",
        effect_jp: "ジャストガード成功時に20秒間、PP消費量を8%軽減。",
        effect_glen: "Reduces PP consumption by 8% for 20 seconds after performing a Perfect Guard."
    },
    "LA16": {
        name_en: "S1:Green Leaf Flash",
        name_jp: "S1:葉ノ緑閃",
        name_glen: "S1:Leafgleam",
        effect_en: "Every 20 seconds, a barrier will<br>turn on/off. The barrier reduces<br>damage by 8% and prevents flinching.",
        effect_jp: "被ダメージを8%軽減し怯まなくなるバリアが20秒間隔で発生・消滅。",
        effect_glen: "Creates a barrier that reduces damage taken by 8% and nullifies knockback.<br>The barrier will appear and disappear in 20 second intervals. "
    },
    "LA17": {
        name_en: "S1:Black Shadow Flash",
        name_jp: "S1:影ノ黒閃",
        name_glen: "S1:Shadowgleam",
        effect_en: "Increase Natural PP Recovery for 20<br>seconds after standing still<br>for 5 seconds.",
        effect_jp: "5秒間静止する毎に20秒間、PPの自然回復量が20%上昇。",
        effect_glen: "Increases natural PP recovery for 20 seconds after standing still for 5 seconds."
    },
    "LA18": {
        name_en: "S1:Brilliant Ruin",
        name_jp: "S1:滅域輝与",
        name_glen: "S1:Lucent Domain",
        effect_en: "Recovery PP upon enemies being defeated near you.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recovers 3 PP when a nearby enemy is defeated."
    },
    "LA21": {
        name_en: "S1:Skilled Intent",
        name_jp: "S1:妙撃の志",
        name_glen: "S1:Precision Will",
        effect_en: "+3% damage on Critical Hits.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。",
        effect_glen: "Increases critical hit damage by 3%."
    },
    "LA22": {
        name_en: "S1:Radiant Strike",
        name_jp: "S1:輝剰の撃",
        name_glen: "S1:Lustrous Strike",
        effect_en: "+17% PP Recovery on attacks.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。",
        effect_glen: "Increases active PP recovery by 17%."
    },
    "LA23": {
        name_en: "S1:Flowing Exhilaration",
        name_jp: "S1:時流活与",
        name_glen: "S1:Timeflow Vitality",
        effect_en: "Recovers 60% HP at set intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。",
        effect_glen: "Restores 40% of your maximum HP every 40 seconds."
    },
    "LA24": {
        name_en: "S1:Guardian Armor",
        name_jp: "S1:守護の備",
        name_glen: "S1:Guardian Shield",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LA25": {
        name_en: "S1:Vigor Enhancement",
        name_jp: "S1:活剰増進",
        name_glen: "S1:Augmented Lifeboon",
        effect_en: "Boost self HP recovery by 40%.",
        effect_jp: "自身のHP回復量が40％上昇する",
        effect_glen: "Increases HP recovered from self-healing by 40%."
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
        name_glen: "S1:Goliathslayer\'s Will",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが4%上昇する。",
        effect_glen: "Increase damage dealt to bosses by 4%."
    },
    "LA81": {
        name_en: "S1:Rupturing Excess",
        name_jp: "S1:裂砕の剰",
        name_glen: "S1:Lustrous Partbreaker",
        effect_en: "Increase PP recovery rate by 40% when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が40%上昇。",
        effect_glen: "Increases active PP recovery by 40% when attacking breakable parts."
    },
    "LA82": {
        name_en: "S1:Spirited Response",
        name_jp: "S1:気輝応変",
        name_glen: "S1:Luminous Adaptation",
        effect_en: "Increases PP regeneration rate (+80%) while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。",
        effect_glen: "Natural PP regeneration rate increased by 80% while weapon is sheathed."
    },
    "LA83": {
        name_en: "S1:Rupturing Intent",
        name_jp: "S1:裂砕の志",
        name_glen: "S1:Partbreaker\'s Will",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        effect_glen: "Increase damage against breakable parts by 4%."
    },
    "LA84": {
        name_en: "S1:Sturdy Intent",
        name_jp: "S1:依属の志",
        name_glen: "S1:Elementalist's Will",
        effect_en: "Increase damage by 4% if your weapon's element or equipped Guard Ring match the enemy's elemental weakness.",
        effect_jp: "ガード系リングまたは武器属性が弱点属性と一致時、4%威力上昇。",
        effect_glen: "Increases damage by 4% when your equipped Guard-type Ring or Weapon Element matches the enemy's Elemental Weakness."
    },
    "LA85": {
        name_en: "S1:Phantasmal Intent",
        name_jp: "S1:幻精の志",
        name_glen: "S1:Spectre\'s Will",
        effect_en: "Increase Power based on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて威力が上昇する。",
        effect_glen: "Increases attack power based on the Photon Gauge.<br>Maxes out at 3%."
    },
    "LA86": {
        name_en: "S1:Photon Reduction 2",
        name_jp: "S1:光子縮減2",
        name_glen: "S1:Photon Descent 2",
        effect_en: "Reduce PP consumption by 10%.",
        effect_jp: "PP消費量を10%軽減。",
        effect_glen: "Reduce PP consumption by 10%."
    },
    "LA87": {
        name_en: "S1:Brilliant Ruin 2",
        name_jp: "S1:滅域輝与2",
        name_glen: "S1:Lucent Domain 2",
        effect_en: "Recover PP when an enemy near you is defeated. (+4 PP)",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recovers 4 PP when a nearby enemy is defeated."
    },
    "LA88": {
        name_en: "S1:Flowing Intent",
        name_jp: "S1:時流の志",
        name_glen: "S1:Timeflow Will",
        effect_en: "Increase power every second. Maxes at 4% (30s to MAX).",
        effect_jp: "1秒毎に与ダメージが上昇。最大で4%。",
        effect_glen: "Increases attack power every second to a maximum of 4% after 30 seconds. "
    },
    "LA89": {
        name_en: "S1:Lethal Intent",
        name_jp: "S1:死中の志",
        name_glen: "S1:Will of the Dying",
        effect_en: "Reduce HP by 5% every 20 seconds and increase Power by 4%.",
        effect_jp: "20秒毎に最大HPの5%ダメージを負う代わりに威力が4%上昇する。",
        effect_glen: "Reduce HP by 5% every 20 seconds and increase Might by 4%."
    },
    "LA90": {
        name_en: "S1:Augment Intent",
        name_jp: "S1:錬成の志",
        name_glen: "S1:Augment Will",
        effect_en: "Increase Power based on the number of Special Abilities attached to this weapon. Maxes at 4%.",
        effect_jp: "特殊能力の付与数に応じて威力上昇。最大で4%。",
        effect_glen: "Increases attack power by 0.5% for every augment affixed to this weapon.<br>Maxes at 4% for 8 augments."
    },
    "LA91": {
        name_en: "S1:Strike Boost",
        name_jp: "S1:打撃増幅",
        name_glen: "S1:Melee Amp",
        effect_en: "Increase Power by 1% for every 60 S-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 S-ATK is affixed to this weapon.",
        effect_jp: "特殊能力の追加打撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_glen: "Increase MEL by 1% for every 60 MEL Pwr affixed to this weapon. Increase MEL by an additional 2% if at least 200 MEL Pwr is affixed to this weapon."
    },
    "LA92": {
        name_en: "S1:Shoot Boost",
        name_jp: "S1:射撃増幅",
        name_glen: "S1:Ranged Amp",
        effect_en: "Increase Power by 1% for every 60 R-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 R-ATK is affixed to this weapon.",
        effect_jp: "特殊能力の追加射撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_glen: "Increase RNG by 1% for every 60 RNG Pwr affixed to this weapon. Increase RNG by an additional 2% if at least 200 RNG Pwr is affixed to this weapon."
    },
    "LA93": {
        name_en: "S1:Tech Boost",
        name_jp: "S1:法撃増幅",
        name_glen: "S1:Technique Amp",
        effect_en: "Increase Power by 1% for every 60 T-ATK affixed to this weapon. Increase Power by an additional 2% if at least 200 T-ATK is affixed to this weapon.",
        effect_jp: "特殊能力の追加法撃能力60毎に、威力1%上昇し200以上でさらに2%上昇。",
        effect_glen: "Increase TEC by 1% for every 60 TEC Pwr affixed to this weapon. Increase TEC by an additional 2% if at least 200 TEC Pwr is affixed to this weapon."
    },
    "LA94": {
        name_en: "S1:Reckless Strike",
        name_jp: "S1:賭死の撃",
        name_glen: "S1:Dance with Death",
        effect_en: "Increase Power every three times you are attacked. Upon being attacked a tenth time, release an explosion that incapacitates you and damages all nearby targets.",
        effect_jp: "被ダメージの回数に応じて威力上昇。最大段階時の被ダメージで自身が戦闘不能になり周囲に与ダメージ。",
        effect_glen: "Increase Attack Power every three times you are hit.<br>Upon receiving a 10th hit an explosion will be released that reduces your HP to 1<br>damages all nearby targets and resets the effect of this skill"
    },
    "LA95": {
        name_en: "S1:Eclipsing Decay",
        name_jp: "S1:失力の蝕",
        name_glen: "S1:Crippling Erode",
        effect_en: "Grant a 25% chance to inflict the Jellen status when attacking an enemy.",
        effect_jp: "命中時に25％の確率でジェルンを付与。",
        effect_glen: "Attacking an enemy grants a 25% chance to inflict a target with the Jellen status effect."
    },
    "LA2P": {
        name_en: "S1:Photon Balance",
        name_jp: "S1:光子の秤",
        name_glen: "S1:Photon Balance",
        effect_en: "Increases PP consumption by 8%, but boosts PA and Tech damage by 4%.",
        effect_jp: "PP消費量が8％増加する代わりにPAとテクニックの威力が4％上昇する。",
        effect_glen: "Increases pp consumption by 8% in exchange for 4% more damage on PAs and Techniques."
    },
    "LA2Q": {
        name_en: "S1:Collaborator Liberator",
        name_jp: "S1:戦友の加護",
        name_glen: "S1:Comrade\'s Blessing",
        effect_en: "Reduces PP consumption, boosts critical rate and boosts power based on the number of people in your party (min. 2).",
        effect_jp: "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
        effect_glen: "Provides bonuses based on the number of party members.<br>2 Members: PP consumption -8%<br>3 Members: +10% critical hit rate<br>4 Members: Attack power +3% Bonuses only apply to yourself."
    },
	"LA2T": {
        name_en: "S1:Brilliant Intent 2",
        name_jp: "S1:輝充の志2",
		name_glen: "*S1:Photonic Will 2",
        effect_en: "Boosts damage by 5% while PP at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが5%上昇。",
		effect_glen: "Boosts damage by 5% while PP at is 40% or above."
    },
    "LA98": {
        name_en: "S1:Photon Balance 2",
        name_jp: "S1:光子の秤2",
		name_glen: "*S1:Photon Balance 2",
        effect_en: "Increase PP Consumption by 4% but increase PA/Technique damage by 6%.",
        effect_jp: "PP消費量が4％増加する代わりにPAとテクニックの威力が6％上昇する。",
		effect_glen: "Increases pp consumption by 4% in exchange for 6% more damage on PAs and Techniques."
    },
    "LA97": {
        name_en: "S1:Collaborator Liberator 2",
        name_jp: "S1:戦友の加護2",
		name_glen: "*S1:Comrade\'s Blessing 2",
        effect_en: "If there are two or more party members, decrease PP consumption by 10% (2 Members), +?% Critical Hit Rate (3 Members), and increase Power by 4% (4 Members). Bonuses only work on self.",
        effect_jp: "パーティ人数が2人以上の場合、人数に応じて、PP消費軽減、クリティカル率上昇、威力上昇効果が発動。",
		effect_glen: "Provides bonuses based on the number of party members.<br>2 Members: PP consumption -10%<br>3 Members: +?% critical hit rate<br>4 Members: Attack power +4% Bonuses only apply to yourself."
    },
    "LA96": {
        name_en: "S1:Offensive Intent 2",
        name_jp: "S1:剛撃の志2",
		name_glen: "*S1:Aggressive Will 2",
        effect_en: "Increase damage by 4%.",
        effect_jp: "与ダメージが4%上昇。",
		effect_glen: "Increases attack power by 4%."
    },
    "LA77": {
        name_en: "S1:Flowing Grace",
        name_jp: "S1:時流の恵",
		name_glen: "*S1:Timeflow Grace",
        effect_en: "Regenerate 10 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを10回復する。",
		effect_glen: "Regenerate 10 PP every 4 seconds."
    },
    "LB01": {
        name_en: "S2:Sturdy Recovery",
        name_jp: "S2:剛乱活与",
        name_glen: "S2:Tumultuous Vitality",
        effect_en: "Gives a fixed chance of<br>restoring HP equal to 1%<br>of damage dealt. (Max: 300)",
        effect_jp: "一定確率で与ダメージの1%をHPとして吸収。(上限300)",
        effect_glen: "Grants a 10% chance to restore HP equal to 1% of damage dealt.<br>Maximum amount of HP restored is 300."
    },
    "LB02": {
        name_en: "S2:Photon Reduction",
        name_jp: "S2:光子縮減",
        name_glen: "S2:Photon Descent",
        effect_en: "PP consumption is reduced by 10%.",
        effect_jp: "PP消費量を10%軽減。",
        effect_glen: "Reduces PP consumption by 10%."
    },
    "LB2F": {
        name_en: "S2:Photon Reduction 2",
        name_jp: "S2:光子縮減2",
        name_glen: "S2:Photon Descent 2",
        effect_en: "PP consumption is reduced by 13%.",
        effect_jp: "PP消費量を13%軽減。",
        effect_glen: "Reduces PP consumption by 13%."
    },
    "LB03": {
        name_en: "S2:Wise Skill",
        name_jp: "S2:妙技の巧",
        name_glen: "S2:Skillful Adept",
        effect_en: "Increases critical rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。",
        effect_glen: "Increases critical hit rate by 12%."
    },
    "LB04": {
        name_en: "S2:Radiant Strike",
        name_jp: "S2:輝剰の撃",
        name_glen: "S2:Lustrous Strike",
        effect_en: "Increases attack PP recovery by 17%.",
        effect_jp: "攻撃時のPP回復量が17%上昇する。",
        effect_glen: "Increases active PP recovery by 17%."
    },
    "LB05": {
        name_en: "S2:Cursed Radiance",
        name_jp: "S2:災転輝与",
        name_glen: "S2:Lucent Adversity",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。",
        effect_glen: "Recovers 15% of your max PP when you take damage."
    },
    "LB06": {
        name_en: "S2:Guardian Armor",
        name_jp: "S2:守護の備",
        name_glen: "S2:Guardian Shield",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LB07": {
        name_en: "S2:Flowing Exhilaration",
        name_jp: "S2:時流活与",
        name_glen: "S2:Timeflow Vitality",
        effect_en: "Recover HP by 60% at<br>regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。",
        effect_glen: "Restores 60% of your maximum HP every 40 seconds."
    },
    "LB2G": {
        name_en: "S2:Flowing Exhilaration 2",
        name_jp: "S2:時流活与2",
        name_glen: "S2:Timeflow Vitality 2",
        effect_en: "Recover 75% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを75%回復する。",
        effect_glen: "Restores 75% of your maximum HP every 40 seconds."
    },
    "LB08": {
        name_en: "S2:Immediate Profusion",
        name_jp: "S2:瞬撃繚乱",
        name_glen: "S2:Dynamo Dance",
        effect_en: "Raises damage by 3% when Just<br>Attacking different PAs or <br>Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        effect_glen: "Increases damage by 3% when linking together PAs or Techniques with Perfect Attacks."
    },
    "LB09": {
        name_en: "S2:Spirited Response",
        name_jp: "S2:気輝応変",
        name_glen: "S2:Luminous Adaptation",
        effect_en: "Increases PP regeneration rate<br>while sheathed.",
        effect_jp: "納刀・抜刀を行う事でPP回復速度が変化。",
        effect_glen: "Natural PP regeneration rate increased by 100% while weapon is sheathed."
    },
    "LB0A": {
        name_en: "S2:Flowing Grace",
        name_jp: "S2:時流の恵",
        name_glen: "S2:Timeflow Grace",
        effect_en: "Regenerate 10 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを10回復する。",
        effect_glen: "Regenerate 10 PP every 4 seconds."
    },
    "LB11": {
        name_en: "S2:Nature's Skill",
        name_jp: "S2:花海雪の巧",
        name_glen: "S2:Petalsea Adept",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Red Petal Flash, S1:Blue<br>Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、クリティカル率20%上昇。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>critical hit rate is increased by 20%."
    },
    "LB12": {
        name_en: "S2:Nature's Intent",
        name_jp: "S2:花海雪の志",
        name_glen: "S2:Will of the Petalsea",
        effect_en: "Increase damage by 3% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、与ダメージが3%上昇。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>attack power is increased by 3%."
    },
    "LB13": {
        name_en: "S2:Nature's Exhilaration",
        name_jp: "S2:花海雪の活与",
        name_glen: "S2:Petalsea Vitality",
        effect_en: "Recover 2% HP every second when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒HPが2%回復。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>recover 2% of max HP every second."
    },
    "LB14": {
        name_en: "S2:Nature's Reduction",
        name_jp: "S2:花海雪の縮減",
        name_glen: "S2:Petalsea Descent",
        effect_en: "Decrease PP consumption by 12% when S1:Red<br>Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を12%軽減。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>PP consumption is reduced by 12%."
    },
    "LB15": {
        name_en: "S2:Umbrageous Gleam",
        name_jp: "S2:月葉影の輝勢",
        name_glen: "S2:Luminous Moonleaf",
        effect_en: "Increase Natural PP Recovery by 25% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP自然回復量25%上昇。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>natural PP recovery is increased by 25%."
    },
    "LB16": {
        name_en: "S2:Umbrageous Guardian",
        name_jp: "S2:月葉影の備",
        name_glen: "S2:Moonleaf Shield",
        effect_en: "Decrease damage taken by 12% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、被ダメージを12%軽減。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>damage taken is reduced by 12%."
    },
    "LB17": {
        name_en: "S2:Brilliant Ruin",
        name_jp: "S2:滅域輝与",
        name_glen: "S2:Lucent Domain",
        effect_en: "Recover PP when an enemy near you<br>is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover 4 PP when a nearby enemy is defeated."
    },
    "LB18": {
        name_en: "S2:Radiating Grace",
        name_jp: "S2:輝勢の恵",
        name_glen: "S2:Luminous Grace",
        effect_en: "Increases Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。",
        effect_glen: "Increases natural PP recovery by 17%."
    },
    "LB19": {
        name_en: "S2:Offensive Intent",
        name_jp: "S2:剛撃の志",
        name_glen: "S2:Aggressive Will",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_glen: "Increases attack power by 2%."
    },
    "LB1A": {
        name_en: "S2:Skilled Intent",
        name_jp: "S2:妙撃の志",
        name_glen: "S2:Precision Will",
        effect_en: "Increase Critical Hit Damage by 3%.",
        effect_jp: "クリティカル時の与ダメージが3%上昇。",
        effect_glen: "Increase Critical Hit Damage by 3%."
    },
    "LB1B": {
        name_en: "S2:Rupturing Intent",
        name_jp: "S2:裂砕の志",
        name_glen: "S2:Partbreaker\'s Will",
        effect_en: "Increase damage against breakable parts by 3%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が3%上昇する。",
        effect_glen: "Increase damage against breakable parts by 3%."
    },
    "LB1C": {
        name_en: "S2:Rupturing Excess",
        name_jp: "S2:裂砕の剰",
        name_glen: "S2:Lustrous Partbreaker",
        effect_en: "Increase PP recovery rate by 35%<br>when attacking breakable parts.",
        effect_jp: "破壊可能な部位を攻撃した際、攻撃時PP回復量が35%上昇。",
        effect_glen: "Increases active PP recovery by 35% when attacking breakable parts."
    },
    "LB1D": {
        name_en: "S2:Double-Edged Sword",
        name_jp: "S2:諸刃の撃",
        name_glen: "S2:Two-edged Strike",
        effect_en: "Increase Power by 3%<br>but take 6% more damage<br>when weapon is drawn.",
        effect_jp: "与ダメージが3%上昇し、抜刀時のみ被ダメージが6%増える。",
        effect_glen: "Increases attack power by 3% but take 6% more damage when your weapon is drawn."
    },
    "LB1E": {
        name_en: "S2:Powering Intent",
        name_jp: "S2:強闘の志",
        name_glen: "S2:Goliathslayer\'s Will",
        effect_en: "Increase damage dealt to bosses by 3%.",
        effect_jp: "強敵への与ダメージが3%上昇する。",
        effect_glen: "Increase damage dealt to bosses by 3%."
    },
    "LB1F": {
        name_en: "S2:Phantasmal Radiance",
        name_jp: "S2:幻精輝剰",
        name_glen: "S2:Lustrous Spectre",
        effect_en: "Increase Active PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じて攻撃時PP回復量が上昇する。",
        effect_glen: "Increases active PP recovery based on the Photon Blast Gauge.<br>Maxes at 25%."
    },
    "LB1G": {
        name_en: "S2:Phantasmal Gleam",
        name_jp: "S2:幻精輝勢",
        name_glen: "S2:Spectre Apparition",
        effect_en: "Increase Natural PP Recovery based<br>on the Photon Blast Gauge.",
        effect_jp: "フォトンブラストゲージに応じてPP自然回復量が上昇する。",
        effect_glen: "Increases natural PP recovery based on the Photon Blast Gauge.<br>Maxes at 23%."
    },
    "LB1H": {
        name_en: "S2:Phantasmal Guardian",
        name_jp: "S2:幻精の備",
        name_glen: "S2:Spectre Shield",
        effect_en: "Reduce damage taken based<br>on the Photon Blast Guage.",
        effect_jp: "フォトンブラストゲージに応じて被ダメージ量が減少する。",
        effect_glen: "Reduces damage taken based on the Photon Blast Gauge.<br>Maxes at 9%."
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
        name_glen: "S2:Moonleaf Song",
        effect_en: "Increase power over time when<br>S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.<br>Maxes at 5%",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で5%。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>attack power increases every second.<br>Maxes out at 5% after 37.5 seconds."
    },
    "LB1L": {
        name_en: "S2:Nature's Reduction 2",
        name_jp: "S2:花海雪の縮減2",
        name_glen: "S2:Petalsea Descent 2",
        effect_en: "Reduce PP consumption by 14%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP消費量を14%軽減。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>PP consumption is reduced by 14%."
    },
    "LB1R": {
        name_en: "S2:Umbrageous Radiance",
        name_jp: "S2:月葉影の輝剰",
        name_glen: "S2:Lustrous Moonleaf",
        effect_en: "Increase Active PP Recovery by 25% when S1:Yellow Moon Flash, S1:Green Leaf Flash, or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が25%上昇。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>active PP recovery is increased by 25%."
    },
    "LB1M": {
        name_en: "S2:Umbrageous Radiance 2",
        name_jp: "S2:月葉影の輝剰2",
        name_glen: "S2:Lustrous Moonleaf 2",
        effect_en: "Increase Active PP Recovery by 28%<br>when S1:Yellow Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、攻撃時PP回復量が28%上昇。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>active PP recovery is increased by 28%."
    },
    "LB1N": {
        name_en: "S2:Wise Skill 2",
        name_jp: "S2:妙技の巧2",
        name_glen: "S2:Skillful Adept 2",
        effect_en: "Increase Critical Hit Rate by 15%.",
        effect_jp: "クリティカル率が15%上昇する。",
        effect_glen: "Increase Critical Hit Rate by 15%."
    },
    "LB1O": {
        name_en: "S2:Skilled Intent 2",
        name_jp: "S2:妙撃の志2",
        name_glen: "S2:Precision Will 2",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。",
        effect_glen: "Increase Critical Hit Damage by 4%."
    },
    "LB1P": {
        name_en: "S2:Radiant Strike 2",
        name_jp: "S2:輝剰の撃2",
        name_glen: "S2:Lustrous Strike 2",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。",
        effect_glen: "Increase active PP Recovery by 20%."
    },
    "LB1Q": {
        name_en: "S2:Medicinal Wisdom",
        name_jp: "S2:服薬の恵",
        name_glen: "S2:Medical Grace",
        effect_en: "Boost PP recovery when a -mate item is used.<br>Effects varies per mate.",
        effect_jp: "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
        effect_glen: "Restores varying amounts of PP upon consuming a -mate item. Amount restored is 20 for Monomate<br>40 for Dimate<br>60 for Trimate.<br>Works with Automate."
    },
    "LB89": {
        name_en: "S2:Instant Reduction",
        name_jp: "S2:瞬乱縮減",
        name_glen: "S2:Perfect Descent",
        effect_en: "Reduces PP consumption by 12% when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックするとPP消費量を12%軽減。",
        effect_glen: "Reduces PP consumption by 12% when consecutively chaining different PAs or Techniques with Perfect Attacks."
    },
    "LB90": {
        name_en: "S2:Flaming Guard",
        name_jp: "S2:火炎の備志",
        name_glen: "S2:One with the Flame",
        effect_en: "Increase Fire Attribute and Burn Resistance. Increase damage against enemies weak to Fire.",
        effect_jp: "炎属性、バーン耐性が上昇。敵の弱点属性が炎属性の時、威力上昇",
        effect_glen: "Increases fire resistance and burn resistance by 30%.<br>Increase damage by 3% against enemies weak to fire."
    },
    "LB91": {
        name_en: "S2:Freezing Guard",
        name_jp: "S2:氷雪の備志",
        name_glen: "S2:One with the Tundra",
        effect_en: "Increase Ice Attribute and Freeze Resistance. Increase damage against enemies weak to Ice.",
        effect_jp: "氷属性、フリーズ耐性が上昇。敵の弱点属性が氷属性の時、威力上昇",
        effect_glen: "Increases ice resistance and freeze resistance by 30%.<br>Increases damage by 3% against enemies weak to ice."
    },
    "LB92": {
        name_en: "S2:Runner's High",
        name_jp: "S2:走者高揚",
        name_glen: "S2:Runner\'s High",
        effect_en: "Increase Natural PP Recovery by 100% and restore 15% HP every 5 seconds when running.",
        effect_jp: "ダッシュ状態時PP自然回復量が100%上昇しHPが5秒ごとに回復。",
        effect_glen: "Increases natural PP recovery by 100% and restores 15% of max HP for every 5 seconds you are running."
    },
    "LB93": {
        name_en: "S2:Skill Reduction",
        name_jp: "S2:技巧縮減",
        name_glen: "S2:Prowess in Descent",
        effect_en: "Reduce PP consumption for 30 seconds upon hitting with a PA/Technique. Has a low chance to grant amplified effects. Triggers Recast upon activation.",
        effect_jp: "フォトンアーツまたはテクニック命中後30秒間、PPの消費量を軽減。また、まれに大きく軽減することがある。効果発動後にリキャストが発生。",
        effect_glen: "Reduces PP consumption by 5% for 30 seconds upon landing a PA or Technique.<br>Has a 33% chance to reduce PP consumption by 30% instead.35 second cooldown upon activation."
    },
    "LB1W": {
        name_en: "S2:Lightning Guard",
        name_jp: "S2:轟雷の備志",
        name_glen: "S2:One with the Thunder",
        effect_en: "Increases your Lightning attribute and Shock resistance. Boosts power against enemies that are weak to Lightning.",
        effect_jp: "雷耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        effect_glen: "Increases lightning resistance and shock resistance by 30%.<br>Increases damage by 3% against enemies weak to lightning."
    },
    "LB1Y": {
        name_en: "S2:Storm Guard",
        name_jp: "S2:暴風の備志",
        name_glen: "S2:One with the Storm",
        effect_en: "Increases your Wind attribute and Shock resistance. Boosts power against enemies that are weak to Wind.",
        effect_jp: "風耐性、ショック耐性が上昇。敵の弱点属性が雷属性の時、威力上昇。",
        effect_glen: "Increases wind resistance and blind resistance by 30%.<br>Increases damage by 3% against enemies weak to wind."
    },
    "LB1Z": {
        name_en: "S2:Aegis Gift",
        name_jp: "S2:瞬護の与",
        name_glen: "S2:Flashguard Boon",
        effect_en: "When you Just Guard at less than 25% HP, recovers HP by 50% and PP by 30%.",
        effect_jp: "HPを25％未満にすると、HPが50％、PPが30％回復します。",
        effect_glen: "Successfully performing a Perfect Guard while below 25% HP recovers 50% HP and 30% PP."
    },
    "LB2A": {
        name_en: "S2:Heavenly Keeper",
        name_jp: "S2:保天輝地",
        name_glen: "S2:Sky-Earth Lucency",
        effect_en: "In the air, reduces PP consumption by 8%. On the ground, boosts PP regeneration and attack PP recovery by 20%.",
        effect_jp: "空中時では、PP消費量が8％軽減。地上時では自然PP回復量が20％かつ地上での攻撃時ではPP回復量が20％上昇。",
        effect_glen: "Reduces PP consumption by 8% while airborne.<br>Increases natural PP and active PP recovery by 20% while on the ground."
    },
    "LB2C": {
        name_en: "S2:Flowing Armor",
        name_jp: "S2:時流の護",
        name_glen: "S2:Timeflow Armor",
        effect_en: "Automatically casts Deband at regular intervals.",
        effect_jp: "一定間隔で自身にデバンドを発動する。",
        effect_glen: "Deband is automatically cast every 14 seconds."
    },
    "LB2D": {
        name_en: "S2:Shining Guard",
        name_jp: "S2:光明の備志",
        name_glen: "S2:One with the Light",
        effect_en: "Increase Light Attribute and Panic Resistance. Increase damage against enemies weak to Light.",
        effect_jp: "光耐性、パニック耐性が上昇。敵の弱点属性が光属性の時、威力上昇。",
        effect_glen: "Increases light resistance and panic resistance by 30%.<br>Increase damage by 3% against enemies weak to light."
    },
    "LB2E": {
        name_en: "S2:Darkness Guard",
        name_jp: "S2:暗闇の備志",
        name_glen: "S2:One with the Dark",
        effect_en: "Increases your Dark attribute and Poison resistance. Boosts power against enemies that are weak to Dark.",
        effect_jp: "闇耐性、ポイズン耐性が上昇。敵の弱点属性が闇属性の時、威力上昇。",
        effect_glen: "Increases dark resistance and poison resistance by 30%.<br>Increases damage by 3% against enemies weak to dark."
    },
    "LB2I": {
        name_en: "S2:Rainbow's Intent",
        name_jp: "S2:六色の志",
        name_glen: "S2:Rainbow Will",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts damage by 5%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中与ダメージが5%上昇。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>attack power is increased by 5%.<br>35 second cooldown upon activation."
    },
    "LB2J": {
        name_en: "S2:Rainbow's Exhilaration",
        name_jp: "S2:六色の活与",
        name_glen: "S2:Rainbow Vitality",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Recovers 3% of your<br>HP every second.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中毎秒HPが3%回復。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>recover 3% max HP every second."
    },
    "LB98": {
        name_en: "S2:Brilliant Intent",
        name_jp: "S2:輝充の志",
        name_glen: "S2:Photonic Will",
        effect_en: "Boosts damage by 3% while PP at is 40% or above.",
        effect_jp: "PPが40%以上の時、与ダメージが3%上昇。",
        effect_glen: "Increases attack power by 3% while PP is at or above 40%."
    },
	"LB97": {
        name_en: "S2:Heavenly Keeper 2",
        name_jp: "S2:保天輝地2",
		name_glen: "*S2:Sky-Earth Lucency 2",
        effect_en: "In the air, reduces PP consumption by 15%. On the ground, boosts PP regeneration and attack PP recovery by 35%.",
        effect_jp: "空中時では、PP消費量が15％軽減。地上時では自然PP回復量が25％かつ地上での攻撃時ではPP回復量が35％上昇。",
		effect_glen: "Reduces PP consumption by 15% while airborne.<br>Increases natural PP and active PP recovery by 35% while on the ground."
    },
    "LB2K": {
        name_en: "S2:Umbrageous Melody 2",
        name_jp: "S2:月葉影の歌2",
		name_glen: "*S2:Moonleaf Song 2",
        effect_en: "Increase power over time while S1:Yellow Moon Flash, S1: Green Leaf Flash, or S1:Black Shadow Flash are active. Maxes at 7%.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒威力が上昇。最大で7%。",
		effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>attack power increases every second.<br>Maxes out at 7% after X seconds."
    },
    "LB96": {
        name_en: "S2:Photon Reduction 3",
        name_jp: "S2:光子縮減3",
		name_glen: "*S2:Photon Descent 3",
        effect_en: "Reduce PP consumption by 15%.",
        effect_jp: "PP消費量を15%軽減。",
		effect_glen: "Reduce PP consumption by 15%."
    },
    "LB95": {
        name_en: "S2:Guardian Armor 2",
        name_jp: "S2:守護の備2",
		name_glen: "*S2:Guardian Shield 2",
        effect_en: "Reduces damage taken by 10%.",
        effect_jp: "被ダメージを10%軽減。",
		effect_glen: "Reduces damage taken by 10%."
    },
    "LB94": {
        name_en: "S2:Instant Reduction 2",
        name_jp: "S2:瞬乱縮減2",
		name_glen: "*S2:Perfect Descent 2",
        effect_en: "Reduces PP consumption by 20% when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックするとPP消費量を20%軽減。",
		effect_glen: "Reduces PP consumption by 20% when Just Attacking different PAs or Techniques."
    },
    "LB88": {
        name_en: "S2:Instant Purpose",
        name_jp: "S2:瞬乱巧志",
		name_glen: "*S2:Instant Purpose",
        effect_en: "Boosts critical hit damage by 2% and increases crit rate by 15% when Just Attacking different PAs and Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックするとクリティカル威力2%クリティカル率15%上昇。",
		effect_glen: "Boosts critical hit damage by 2% and increases crit rate by 15% when Just Attacking different PAs and Techniques."
    },
    "LB87": {
        name_en: "S2:Medicinal Wisdom 2",
        name_jp: "S2:服薬の恵2",
		name_glen: "*S2:Medical Grace 2",
        effect_en: "Restore PP upon consuming a Mate-type item (Automate OK). Effect varies based on the item consumed.",
        effect_jp: "メイト系アイテム使用時さらにPPが回復する。効果量は種類で変わる。",
		effect_glen: "Restores varying amounts of PP upon consuming a -mate item. Amount restored is X for Monomate<br>Y for Dimate<br>Z for Trimate.<br>Works with Automate."
    },
    "LC01": {
        name_en: "S3:Offensive Intent",
        name_jp: "S3:剛撃の志",
        name_glen: "S3:Aggressive Will",
        effect_en: "Increase damage by 2%.",
        effect_jp: "与ダメージが2%上昇。",
        effect_glen: "Increases attack power by 2%."
    },
    "LC02": {
        name_en: "S3:Vital Intent",
        name_jp: "S3:活実の志",
        name_glen: "S3:Axiom Will",
        effect_en: "Boosts damage by 3% while HP is 80% or more.",
        effect_jp: "HPが80%以上の時、与ダメージが3%上昇。",
        effect_glen: "Increases attack power by 3% while HP is above 80%."
    },
    "LC03": {
        name_en: "S3:Radiant Strike",
        name_jp: "S3:輝剰の撃",
        name_glen: "S3:Lustrous Strike",
        effect_en: "Increase Attack PP Recovery by 20%.",
        effect_jp: "攻撃時のPP回復量が20%上昇する。",
        effect_glen: "Increases active PP recovery by 20%."
    },
    "LC1P": {
        name_en: "S3:Radiant Strike 2",
        name_jp: "S3:輝剰の撃2",
        name_glen: "S3:Lustrous Strike 2",
        effect_en: "Increase Attack PP Recovery by 23%.",
        effect_jp: "攻撃時のPP回復量が23%上昇する。",
        effect_glen: "Increase active PP Recovery by 23%."
    },
    "LC04": {
        name_en: "S3:Skilled Intent",
        name_jp: "S3:妙撃の志",
        name_glen: "S3:Precision Will",
        effect_en: "Increase Critical Hit Damage by 4%.",
        effect_jp: "クリティカル時の与ダメージが4%上昇。",
        effect_glen: "Increase Critical Hit Damage by 4%."
    },
    "LC1O": {
        name_en: "S3:Skilled Intent 2",
        name_jp: "S3:妙撃の志2",
        name_glen: "S3:Precision Will 2",
        effect_en: "Increase Critical Hit Damage by 5%.",
        effect_jp: "クリティカル時の与ダメージが5%上昇。",
        effect_glen: "Increase Critical Hit Damage by 5%."
    },
    "LC05": {
        name_en: "S3:Radiating Grace",
        name_jp: "S3:輝勢の恵",
        name_glen: "S3:Luminous Grace",
        effect_en: "Increase Automatic PP Recovery by 17%.",
        effect_jp: "PPの自然回復速度が17%上昇する。",
        effect_glen: "Increases natural PP recovery by 17%."
    },
    "LC06": {
        name_en: "S3:Flowing Exhilaration",
        name_jp: "S3:時流活与",
        name_glen: "S3:Timeflow Vitality",
        effect_en: "Recover 40% of your maximum HP at regular intervals.",
        effect_jp: "一定時間ごとにHPを40%回復する。",
        effect_glen: "Restores 40% of your maximum HP every 40 seconds."
    },
    "LC11": {
        name_en: "S3:Umbrageous Intent",
        name_jp: "S3:月葉影の志",
        name_glen: "S3:Will of the Moonleaf",
        effect_en: "Increase damage by 3% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、与ダメージが3%上昇。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>attack power is increased by 3%."
    },
    "LC12": {
        name_en: "S3:Umbrageous Reduction",
        name_jp: "S3:月葉影の縮減",
        name_glen: "S3:Moonleaf Descent",
        effect_en: "Decrease PP consumption by 14% when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、PP消費量を14%軽減。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>PP consumption is reduced by 14%."
    },
    "LC13": {
        name_en: "S3:Umbrageous Exhilaration",
        name_jp: "S3:月葉影の活与",
        name_glen: "S3:Moonleaf Vitality",
        effect_en: "Recover 2% HP every second when S1:Yellow<br>Moon Flash, S1:Green Leaf Flash,<br>or S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、毎秒HPが2%回復。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>recover 2% of max HP every second."
    },
    "LC14": {
        name_en: "S3:Nature's Radiance",
        name_jp: "S3:花海雪の輝剰",
        name_glen: "S3:Luminous Petalsea",
        effect_en: "Increase Natural PP Recovery by 28% when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、攻撃時PP回復量が28%上昇。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>natural PP recovery is increased by 23%."
    },
    "LC15": {
        name_en: "S3:Wise Skill",
        name_jp: "S3:妙技の巧",
        name_glen: "S3:Skillful Adept",
        effect_en: "Increase Critical Hit Rate by 12%.",
        effect_jp: "クリティカル率が12%上昇する。",
        effect_glen: "Increase Critical Hit Rate by 12%."
    },
    "LC16": {
        name_en: "S3:Photon Reduction",
        name_jp: "S3:光子縮減",
        name_glen: "S3:Photon Descent",
        effect_en: "Reduces PP consumption by 10%.",
        effect_jp: "PP消費量を7%軽減。",
        effect_glen: "Reduces PP consumption by 7%."
    },
    "LC17": {
        name_en: "S3:Guardian Armor",
        name_jp: "S3:守護の備",
        name_glen: "S3:Guardian Shield",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LC18": {
        name_en: "S3:Nature's Guardian",
        name_jp: "S3:花海雪の備",
        name_glen: "S3:Petalsea Shield",
        effect_en: "Decrease damage taken by 10%<br>when S1:Red Petal Flash,<br>S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、被ダメージを10%軽減。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>damage taken is reduced by 10%."
    },
    "LC19": {
        name_en: "S3:Umbrageous Skill",
        name_jp: "S3:月葉影の巧",
        name_glen: "S3:Moonleaf Adept",
        effect_en: "Increase Critical Hit Rate by 20%<br>when S1:Yellow Moon Flash,<br>S1:Green Leaf Flash, or<br>S1:Black Shadow Flash are active.",
        effect_jp: "月ノ黄閃・葉ノ緑閃・影ノ黒閃が発動中、クリティカル率20%上昇。",
        effect_glen: "While Moongleam/Leafgleam or Shadowgleam are active<br>critical hit rate is increased by 20%."
    },
    "LC1A": {
        name_en: "S3:Brilliant Ruin",
        name_jp: "S3:滅域輝与",
        name_glen: "S3:Lucent Domain",
        effect_en: "Recover PP when a enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover 3 PP when a nearby enemy is defeated."
    },
    "LC1B": {
        name_en: "S3:Cursed Radiance",
        name_jp: "S3:災転輝与",
        name_glen: "S3:Lucent Adversity",
        effect_en: "Recovers PP by 15% when taking damage.",
        effect_jp: "ダメージを受けた際にPPを15%回復する。",
        effect_glen: "Recovers 15% of your max PP when you take damage."
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
        name_glen: "S3:Spectre's Descent",
        effect_en: "Reduce PP consumption based<br>on the Photon Blast Gauge",
        effect_jp: "フォトンブラストゲージに応じてPP消費量が減少する。",
        effect_glen: "Reduce PP consumption based on the Photon Blast Gauge.<br>4% at 0-3 bars, 8% at 4-7 bars, 12% when fully charged."
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
        name_glen: "S3:Dynamo Dance",
        effect_en: "Raises damage by 3%<br>when Just Attacking different PAs or Techniques.",
        effect_jp: "別のPAやテクニックをジャストアタックすると与ダメージが3%上昇。",
        effect_glen: "Increases damage by 3% when linking together PAs or Techniques with Perfect Attacks."
    },
    "LC1G": {
        name_en: "S3:Nature's Melody",
        name_jp: "S3:花海雪の歌",
        name_glen: "S3:Petalsea Song",
        effect_en: "Increase damage over time when<br>S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で5%。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>attack power increases every second.<br>Maxes out at 5% after 37.5 seconds."
    },
    "LC1H": {
        name_en: "S3:Nature's Gleam 2",
        name_jp: "S3:花海雪の輝勢2",
        name_glen: "S3:Petalsea Lucentrush 2",
        effect_en: "Increase Natural PP Recovery by 25%<br>when S1:Red Petal Flash, S1:Blue Ocean Flash,<br>or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量25%上昇。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>natural PP recovery is increased by 25%."
    },
    "LC1I": {
        name_en: "S3:Flowing Grace",
        name_jp: "S3:時流の恵",
        name_glen: "S3:Timeflow Grace",
        effect_en: "Regenerate 7 PP every 4 seconds.",
        effect_jp: "4秒ごとにPPを7回復する。",
        effect_glen: "Regenerate 7 PP every 4 seconds."
    },
    "LC1J": {
        name_en: "S3:Flowing Exhilaration 2",
        name_jp: "S3:時流活与2",
        name_glen: "S3:Timeflow Vitality 2",
        effect_en: "Recover 60% of your maximum HP<br>at regular intervals.",
        effect_jp: "一定時間ごとにHPを60%回復する。",
        effect_glen: "Restores 60% of your maximum HP every 40 seconds."
    },
    "LC1K": {
        name_en: "S3:Radiating Grace 2",
        name_jp: "S3:輝勢の恵2",
        name_glen: "S3:Luminous Grace 2",
        effect_en: "Increase Automatic PP Recovery by 20%.",
        effect_jp: "PPの自然回復速度が20%上昇する。",
        effect_glen: "Increases natural PP recovery by 20%."
    },
    "LC88": {
        name_en: "S3:Rupturing Intent",
        name_jp: "S3:裂砕の志",
        name_glen: "S3:Partbreaker\'s Will",
        effect_en: "Increase damage against breakable parts by 4%.",
        effect_jp: "破壊可能な部位を攻撃した際、威力が4%上昇する。",
        effect_glen: "Increase damage against breakable parts by 4%."
    },
    "LC89": {
        name_en: "S3:Nature's Gleam",
        name_jp: "S3:花海雪の輝勢",
        name_glen: "S3:Luminous Petalsea",
        effect_en: "Increase Natural PP Recovery by 23% when S1:Red Petal Flash, S1:Blue Ocean Flash, or S1:White Snow Flash are active.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、PP自然回復量23%上昇。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>natural PP recovery is increased by 23%."
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
        name_glen: "S3:Strikeflow Shield",
        effect_en: "Decrease damage taken by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとに被ダメージが1%軽減。（最大15%まで）",
        effect_glen: "Reduces damage taken by 1% for every 300000 damage dealt.<br>Maxes at 15%."
    },
    "LC92": {
        name_en: "S3:Curtailed Strike",
        name_jp: "S3:撃流縮減",
        name_glen: "S3:Strikeflow Descent",
        effect_en: "Decrease PP consumption by 1% for every 300, 000 damage dealt. Maxes at 15%.",
        effect_jp: "与ダメージ300000ごとにPP消費量が1%軽減。（最大15%まで）",
        effect_glen: "Reduces PP consumption by 1% for every 300000 damage dealt.<br>Maxes at 15%."
    },
    "LC93": {
        name_en: "S3:Wise Strike",
        name_jp: "S3:撃流の巧",
        name_glen: "S3:Strikeflow Adept",
        effect_en: "Increase Critical Hit Rate by 2% for every 300, 000 damage dealt. Maxes at 30%.",
        effect_jp: "与ダメージ300000ごとにクリティカル率が2%上昇。（最大30%まで）",
        effect_glen: "Increases critical hit rate by 2% for every 300000 damage dealt.<br>Maxes at 30%."
    },
    "LC2B": {
        name_en: "S3:Flowing Courage",
        name_jp: "S3:時流の勇",
        name_glen: "S3:Timeflow Mettle",
        effect_en: "Automatically casts Shifta at regular intervals.",
        effect_jp: "一定間隔で自身にシフタを発動する。",
        effect_glen: "Shifta is automatically cast every 14 seconds."
    },
    "LC1S": {
        name_en: "S3:Furious Inspiration",
        name_jp: "S3:猛威の奮激",
        name_glen: "S3:Persistent Fury",
        effect_en: "Boosts power and<br>critical hit rate.<br>Improves PP efficiency.<br>This effect disappears<br>on taking damage, then<br>is restored after a set<br>time.",
        effect_jp: "威力とクリティカル率が上昇。PP効率が向上。被ダメージで消失。一定時間で効果が復活。",
        effect_glen: "Increases attack power by 4% and critical hit rate by 5%.<br>Enhances PP efficiency as follows:<br>PP recovery +10%<br>Active PP recovery +15%<br>PP consumption -5%.<br>Effects will be lost when damage is taken (180s cooldown)."
    },
    "LC1U": {
        name_en: "S3:Nature's Melody 2",
        name_jp: "S3:花海雪の歌2",
        name_glen: "S3:Petalsea Song 2",
        effect_en: "While Red Petal Flash,<br>Blue Ocean Flash or<br>White Snow Flash is<br>active:<br>Boosts damage by up<br>to 7% over time.",
        effect_jp: "花ノ赤閃・海ノ青閃・雪ノ白閃が発動中、毎秒威力が上昇。最大で7%。",
        effect_glen: "While Petalgleam/Seagleam or Snowgleam are active<br>attack power increases every second.<br>Maxes out at 7% after 15 seconds."
    },
    "LC98": {
        name_en: "S3:Powering Intent",
        name_jp: "S3:強闘の志",
        name_glen: "*S3:Goliathslayer\'s Will",
        effect_en: "Increase damage dealt to bosses by 4%.",
        effect_jp: "強敵への与ダメージが3%上昇する。",
        effect_glen: "Increase damage dealt to bosses by 4%."
    },
    "LC1V": {
        name_en: "S3:Rainbow's Reduction",
        name_jp: "S3:六色の縮減",
        name_glen: "S3:Rainbow Descent",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Reduces your PP<br>consumption by 20%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP消費量を20%軽減。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>PP consumption is reduce by 20%."
    },
    "LC1W": {
        name_en: "S3:Rainbow's Radiance",
        name_jp: "S3:六色の輝剰",
        name_glen: "S3:Lustrous Rainbow",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts attack PP<br>recovery by 45%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中攻撃時PP回復量が45%上昇。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>active PP recovery is increased by 45%."
    },
    "LC1X": {
        name_en: "S3:Rainbow's Gleam",
        name_jp: "S3:六色の輝勢",
        name_glen: "S3:Luminous Rainbow",
        effect_en: "While Petal, Ocean,<br>Leaf, Moon, Snow or<br>Shadow Flash is active:<br>Boosts PP regeneration<br>by 40%.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中PP自然回復量40%上昇。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>natural PP recovery is increased by 40%."
    },
    "LC1Y": {
        name_en: "S3:Immediate Brilliance",
        name_jp: "S3:瞬連の輝",
		name_glen: "*S3:Immediate Brilliance",
        effect_en: "Successful JA hits<br>boosts your PP<br>recovery amount by<br>3%. Cannot exceed<br>30%. Non-JA hits<br>are excluded.",
        effect_jp: "JA攻撃が命中する度PP回復性能が3%上昇。最大で45%まで上昇。",
		effect_glen: "Successful JA hits<br>boosts your PP<br>recovery amount by<br>3%. Cannot exceed<br>30%. Non-JA hits<br>are excluded."
    },
    "LC1Z": {
        name_en: "S3:Puncturing Intent",
        name_jp: "S3:裂砕妙撃の志",
		name_glen: "*S3:Puncturing Intent",
        effect_en: "Upon landing a<br>Critical Hit on a<br>breakable part,<br>your power is<br>boosted by 9%.",
        effect_jp: "破壊可能部位への攻撃でクリティカル発動時に威力が9%上昇。",
		effect_glen: "Upon landing a<br>Critical Hit on a<br>breakable part,<br>your power is<br>boosted by 9%."
    },
    "LC1Q": {
        name_en: "S3:Double-Edged Sword",
        name_jp: "S3:諸刃の撃",
		name_glen: "S3:Two-edged Strike",
        effect_en: "Deal 4% more damage but take 8% more damage when weapon is drawn.",
        effect_jp: "与ダメージが4%上昇し、抜刀時のみ被ダメージが8%増える。",
		effect_glen: "Increases attack power by 4% but take 8% more damage when your weapon is drawn."
    },
	"LC97": {
        name_en: "S3:Radiant Strike 3",
        name_jp: "S3:輝剰の撃3",
		name_glen: "*S3:Lustrous Strike 3",
        effect_en: "Increase Active PP Recovery by 35%.",
        effect_jp: "攻撃時のPP回復量が35%上昇する",
		effect_glen: "Increase Active PP Recovery by 35%."
    },
    "LC96": {
        name_en: "S3:Vital Intent 2",
        name_jp: "S3:活実の志2",
		name_glen: "*S3:Axiom Will 2",
        effect_en: "Boosts damage by 5% while HP is 80% or more.",
        effect_jp: "HPが80%以上の時、与ダメージが5%上昇。",
		effect_glen: "Increases attack power by 5% while HP is above 80%."
    },
    "LD07": {
        name_en: "S4:Marvelous Aegis",
        name_jp: "S4:瞬護輝与",
        name_glen: "S4:Flashguard Lucent",
        effect_en: "Restores PP on a successful Just Guard.",
        effect_jp: "ジャストガード成功時、PPを回復する。",
        effect_glen: "Recover 10 PP when performing a Perfect Guard."
    },
    "LD08": {
        name_en: "S4:Steel Resolve",
        name_jp: "S4:鋼の決意",
        name_glen: "S4:Steely Determination",
        effect_en: "Survive one fatal hit with 1 HP remaining.",
        effect_jp: "致命傷を受けても一度限りだが必ずHPが1残る。",
        effect_glen: "Survives one fatal hit with 1 HP. Does not work if HP is already at 1.<br>Activates once per quest."
    },
    "LD09": {
        name_en: "S4:Radiant Response",
        name_jp: "S4:輝器応変",
        name_glen: "S4:Photon V Adaptation",
        effect_en: "Raises PP efficiency based on maximum PP.",
        effect_jp: "最大PPに応じてPP効率が向上する。",
        effect_glen: "Improves natural and active PP recovery and reduces PP consumption based on your maximum PP."
    },
    "LD0A": {
        name_en: "S4:Opposing Skill",
        name_jp: "S4:正対の巧",
        name_glen: "S4:Frontal Adept",
        effect_en: "During Brave Stance, frontal critical<br>rate is raised by 30%.",
        effect_jp: "ブレイブスタンス中、正面へのクリティカル率が30%上昇。",
        effect_glen: "Critical hit rate of frontal attacks is increased by 30% while Valiant Stance is active."
    },
    "LD0B": {
        name_en: "S4:Scything Wind",
        name_jp: "S4:鎌風重吹",
        name_glen: "S4:Second Whirlwind",
        effect_en: "Extends Kamaitachi duration by 4 seconds.",
        effect_jp: "カマイタチの持続時間が4秒延長される。",
        effect_glen: "Increases the duration of Double Saber's wind flourish by 4 seconds."
    },
    "LD0C": {
        name_en: "S4:Cunning Strike",
        name_jp: "S4:賢勇両撃",
        name_glen: "S4:Hammer of the Wise",
        effect_en: "During Wise Stance, boosts frontal damage by 15%.",
        effect_jp: "ワイズスタンス中、正面からの与ダメージが15%上昇。",
        effect_glen: "Critical hit rate of frontal attacks is increased by 15% while Wise Stance is active. "
    },
    "LD0D": {
        name_en: "S4:Vampiric Strike",
        name_jp: "S4:奪命の撃",
        name_glen: "S4:Lifesteal Strike ",
        effect_en: "Restores HP equal to 1% of damage dealt.<br>(Max: 30)",
        effect_jp: "攻撃時に与ダメージの1%をHPとして吸収。(上限30)",
        effect_glen: "Restores HP equal to 1% of damage dealt (30 HP Max)."
    },
    "LD0E": {
        name_en: "S4:Steadfast Courage",
        name_jp: "S4:静の胆力",
        name_glen: "S4:Mettle of the Rested",
        effect_en: "Become immune to knockback by standing still<br>for a certain time.",
        effect_jp: "一定時間、静止状態が続いた時、打ち上げや吹き飛ばしを防ぐ。",
        effect_glen: "Gain knockback immunity after standing still for 1 second."
    },
    "LD0F": {
        name_en: "S4:Lustrous Trap",
        name_jp: "S4:輝剰の罠",
        name_glen: "S4:Lustrous Trap",
        effect_en: "Increases PP recovery from Tactics Trap by<br>20%.",
        effect_jp: "タクティクストラップのPP回復量が20%上昇。",
        effect_glen: "Inreases PP restored by Tactical Trap by 20%."
    },
    "LD0G": {
        name_en: "S4:Dynamic Chain",
        name_jp: "S4:鎖動強身",
        name_glen: "S4:Mighty Chain",
        effect_en: "Become invincible for 5 seconds when activating<br>Chain Trigger.",
        effect_jp: "チェイントリガー発動時、5秒間無敵になる。",
        effect_glen: "Gain invincibility for 5 seconds when Chain Trigger is activated. "
    },
    "LD0H": {
        name_en: "S4:Refined Providence",
        name_jp: "S4:摂理洗練",
        name_glen: "S4:Refined Providence",
        effect_en: "Enhances Element Conversion.",
        effect_jp: "エレメントコンバージョンが強化される。",
        effect_glen: "Increases the potency of Element Conversion by 5% for non-matching weapon elements."
    },
    "LD0I": {
        name_en: "S4:Circuit Rotation",
        name_jp: "S4:回路輪転",
        name_glen: "S4:Sustained Cycle",
        effect_en: "Reduces recast time of Photon Flare by 20%.",
        effect_jp: "フォトンフレアのリキャスト時間を20%軽減する。",
        effect_glen: "Reduces recast time of Photon Flare by 20%."
    },
    "LD0J": {
        name_en: "S4:Wand Clobber",
        name_jp: "S4:短杖強打",
        name_glen: "S4:Wand Impact",
        effect_en: "Enhances Wand's normal attacks.",
        effect_jp: "ウォンドの通常攻撃性能が強化される。",
        effect_glen: "Increases Wand normal attack speed by 1.1x and negates hitstop."
    },
    "LD0K": {
        name_en: "S4:Gear Reduction",
        name_jp: "S4:刃機放縮",
        name_glen: "S4:Prolonged Blade",
        effect_en: "Decreases rate that Gear gauge empties while<br>Katana Gear is active.",
        effect_jp: "カタナギア解放中、ギアゲージの減少速度が低下する。",
        effect_glen: "Reduces the depletion of the Focus Gauge while Katana Focus is active."
    },
    "LD0L": {
        name_en: "S4:Rapid-fire Arrow",
        name_jp: "S4:迅弓の撃",
        name_glen: "S4:Swift Arrows Strike",
        effect_en: "Bullet Bow damage is boosted by 3% during<br>Rapid Shoot.",
        effect_jp: "ラピッドシュート中、バレットボウ装備時に与ダメージが3%上昇。",
        effect_glen: "Increases the damage of all attacks done with a Bow by 3% when Rapid Fire is active."
    },
    "LD0M": {
        name_en: "S4:Support Extension",
        name_jp: "S4:支援限長",
        name_glen: "S4:Support Amplification",
        effect_en: "Extends the effect of Shifta and Deband to<br>last 120 seconds.",
        effect_jp: "シフタ・デバンドの効果時間上限を120秒に延長する。",
        effect_glen: "Shifta and Deband's maximum duration becomes 120 seconds."
    },
    "LD0N": {
        name_en: "S4:Genesis Ring",
        name_jp: "S4:変素応輪",
        name_glen: "S4:Transmutation Circle",
        effect_en: "Changes the weapon's element to match an equipped<br>Guard ring.",
        effect_jp: "装備しているガード系リングに応じて武器属性が変化する。",
        effect_glen: "Changes the weapon element to match the currently equipped elemental defense ring.<br>Has no effect if an elemental ring is not equipped."
    },
    "LD0O": {
        name_en: "S4:Heavenly Protection",
        name_jp: "S4:天輝の守護",
        name_glen: "S4:Luminous Protection",
        effect_en: "Bestow Natural PP Recovery and<br>increase PP recovery rate while Guarding.",
        effect_jp: "ガード中PPが自然回復しPP回復速度が上昇。",
        effect_glen: "Bestow Natural PP Recovery and increase PP recovery rate by 300% while Guarding."
    },
    "LD0P": {
        name_en: "S4:Calming Intent",
        name_jp: "S4:静心の志",
        name_glen: "S4:Steadfast Will",
        effect_en: "Increase the power of<br>Normal Attacks by 13%.",
        effect_jp: "通常攻撃の威力が13%上昇。",
        effect_glen: "Increases Normal Attack power by 13%"
    },
    "LD0Q": {
        name_en: "S4:Skilled Balance",
        name_jp: "S4:妙撃の秤",
        name_glen: "S4:Precise Balance",
        effect_en: "Reduce Critical Hit Rate by 50% and<br>increase the power of Critical Hits by 6%.",
        effect_jp: "クリティカル率を50%低下し、クリティカルの威力が6%上昇。",
        effect_glen: "Reduces critical hit rate by 50% and increases critical hit damage by 6%."
    },
    "LD0R": {
        name_en: "S4:Saint Shield",
        name_jp: "S4:聖者の盾",
        name_glen: "S4:Saintly Shield",
        effect_en: "Generates a barrier (-50% Damage Taken,<br>Negate Knockback) at regular intervals",
        effect_jp: "一定間隔で被ダメージを軽減するバリアを展開。",
        effect_glen: "Deploys a barrier that reduces damage taken by 60% at regular intervals."
    },
    "LD0S": {
        name_en: "S4:Harmonized Rainbow",
        name_jp: "S4:六色の輝秤",
        name_glen: "S4:Rainbow Balance",
        effect_en: "Decrease Natural PP Recovery but decrease PP consumption when S1:Red Petal / Blue Ocean / White Snow / Yellow Moon / Green Leaf / Black Shadow Flash are active.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、PP自然回復は減少するがPP消費量は低下する。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br>natural pp recovery and PP consumption are both reduced by 30%."
    },
    "LD0T": {
        name_en: "S4:Raising Pursuit",
        name_jp: "S4:累加追撃",
        name_glen: "S4:Escalating Pursuit",
        effect_en: "When you hit with a PA/Tech, boosts damage of the next PA/Tech based on the damage you deal in the next 4 seconds.",
        effect_jp: "PA・テクニックの命中後4秒間の与ダメージ量に応じて、次に命中したPA・テクニックに追加ダメージが発生。(上限25万、リキャスト10秒)",
        effect_glen: "Upon hitting with a PA/Technique, track 30% of damage dealt within the next four seconds, and add additional damage to the next PA/Technique based on the damage dealt."
    },
    "LD0U": {
        name_en: "S4:Pursuing Eclipse",
        name_jp: "S4:追蝕の巧",
        name_glen: "S4:Amplified Adept",
        effect_en: "Boosts critical hit rate by 50% against enemies affected by Jellen, Weak Bullet or a status effect.",
        effect_jp: "状態異常、ジェルン、ウィークバレットが発動中のエネミーへのクリティカル率が50％上昇する。",
        effect_glen: "Critical hit rate increased by 50% when attacking an enemy affected by any status effect including Jellen and Blight Ronunds."
    },
    "LD0V": {
        name_en: "S4:Cursed Rainbow",
        name_jp: "S4:六色の災転",
        name_glen: "S4:Rainbow Adversity",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Recovers 500 HP each time you take 500 or more damage at once.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中一度に500以上のダメージを受けるとHPが500回復する。",
        effect_glen: "While Petalgleam/Seagleam/Snowgleam/Moongleam/Leafgleam or Shadowgleam are active<br> recover 500 HP when you take 500 or more damage."
    },
    "LD0W": {
        name_en: "S4:Colossal Radiance",
        name_jp: "S4:強闘輝与",
        name_glen: "S4:Goliathslayer Lucent",
        effect_en: "Recovers 40 PP every 10 seconds when there is a boss nearby.",
        effect_jp: "一定の範囲内に強敵が居る場合10秒ごとにPPが40回復。",
        effect_glen: "Recovers 40 PP every 10 seconds when there is a boss nearby."
    },
    "LD0X": {
        name_en: "S4:Evasion Training",
        name_jp: "S4:回避訓練",
        name_glen: "S4:Dodge Training",
        effect_en: "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status.If you do not evade, recover 5% HP.",
        effect_jp: "二つの円が重なる際に回避すると「回避成功」状態となる。回避しなかった場合はHPを５％回復する。",
        effect_glen: "Perform an evasive maneuver when the two circles overlap to gain \"Successful Dodge (Counter)\" status. If you do not evade, recover 5% HP."
    },
    "LD0Y": {
        name_en: "S4:Radiant Eclipse",
        name_jp: "S4:追蝕輝剰",
        name_glen: "*S4:Radiant Eclipse",
        effect_en: "Increases active PP recovery by 60% when attacking an enemy affectedw by a Status Effect, Jellen, or Weak Bullet.",
        effect_jp: "状態異常、ジェルン、ウィークバレット効果が発生中のエネミー攻撃時、PP回復量が60%上昇。",
        effect_glen: "Increases active PP recovery by 60% when attacking an enemy affectedw by a Status Effect<br>Jellen or Weak Bullet."
    },
    "LD0Z": {
        name_en: "S4:Shared Ruin",
        name_jp: "S4:滅域分与",
        name_glen: "S4:Nullzone Bestowal",
        effect_en: "You and your party<br>recover HP and PP<br>when an enemy dies<br>within range.",
        effect_jp: "一定の範囲内でエネミーが死亡した時PTメンバーと自身のHPとPPを回復。",
        effect_glen: "You and all party members recover HP and PP when a nearby enemy or boss dies."
    },
    "LE01": {
        name_en: "S5:Release Parry",
        name_jp: "S5:瞬護解放",
        name_glen: "S5:Flashguard Unleashed",
        effect_en: "Performance changes when Just Guarding with a Weapon Action. Sword only.",
        effect_jp: "武器アクションによるジャストガードで性能が変化する。大剣のみ有効。",
        effect_glen: "The benefits of this SGA chages after a successful perfect guard and revert to base benefits once gear gauge is depelted.<br>Sword only."
    },
    "LE02": {
        name_en: "S5:Unrivaled Parry",
        name_jp: "S5:瞬護無双",
        name_glen: "S5:Flashguard Peerless",
        effect_en: "Consume no Gear for 15s after performing a Just Guard. Increase Power by 2%. Wired Lance only.",
        effect_jp: "ジャストガード成功時15秒間ギア消費なし。威力2%上昇。自在槍限定。",
        effect_glen: "Increases attack power by 2%.<br>Upon successfully executing a Perfect Guard<br>Gear is no longer consumed for 15 seconds.<br>Wired Lance only."
    },
    "LE03": {
        name_en: "S5:Rushing Bolt",
        name_jp: "S5:瞬駆突貫",
        name_glen: "S5:Furious Charge",
        effect_en: "Inflict damage while running. Unleash a shockwave attack when you stop running. Increase Power by 2%. Partizan only.",
        effect_jp: "ダッシュ状態時接触した敵にダメージ。ダッシュの停止時衝撃波が発生。威力2%上昇。長槍限定。",
        effect_glen: "Increases power by 2%.<br>Inflict 300% attack power as damage while running.<br>Unleash a 1000% attack power shockwave when you stop running.<br>Partisan only."
    },
    "LE04": {
        name_en: "S5:Shining Cyclone",
        name_jp: "S5:輝境の旋",
        name_glen: "S5:Brilliant Vortex",
        effect_en: "PP recovery and consumption changes when your maximum PP falls below 50%. Twin Daggers only.",
        effect_jp: "PP50%を境にPPの消費量と回復速度が変化。双小剣限定。",
        effect_glen: "Reduces natural PP recovery to 0 while PP is above 50%.<br>Reduces PP consumption by 30% and increases natural PP recovery by 100% while PP is below 50%.<br>Twin Daggers only."
    },
    "LE05": {
        name_en: "S5:Evasive Barrage",
        name_jp: "S5:巧避連撃",
        name_glen: "S5:Elusive Combo",
        effect_en: "Boost Gear Gauge and unleash a counterattack upon successfully blocking an attack with DS Wind Parrying.Increase Power by 2%. Double Saber only.",
        effect_jp: "DSウィンドパリング成功時、ギアが上昇し強力な連撃で切り刻む。威力上昇2%。両剣限定。",
        effect_glen: "Increases attack power by 2%.<br>Upon successfully executing a Double Saber Wind Parry<br>Gear Gauge is set to maximum and unleash a counterattack with Scissor Slash.<br>Double Saber only."
    },
    "LE06": {
        name_en: "S5:Evasive Meteor",
        name_jp: "S5:巧避巨拳",
        name_glen: "S5:Elusive Smash",
        effect_en: "Successfully evade an attack with Sway to summon a giant fist. Increase Power by 2%. Knuckles only.",
        effect_jp: "スウェーで回避成功時特大の拳を落とす。威力2%上昇。鋼拳限定。",
        effect_glen: "Increases attack power by 2%.<br>Upon successfully evading an attack with Sway, unleash a counterattack with a large Meteor Fist.<br>Knuckles only."
    },
    "LE07": {
        name_en: "S5:Hangeki Edge",
        name_jp: "S5:反撃鋭刃",
        name_glen: "S5:Counter Blade",
        effect_en: "Increase the damage of Counter by 15%. Restore Braver Gear Gauge to its maximum value when you successfully perform Katana Counter.Increase Power by 2%. Katana only.",
        effect_jp: "カウンター威力が上昇。ブレイバーでのカウンター成功時ギアが最大まで上昇。威力2%上昇。抜剣限定。",
        effect_glen: "Increases attack power by 2%.Increases the damage dealt with Braver's Counter Edge by 15% and Phantom's Dodge Counter Bullet by 10%.<br>Generates Braver Gear Gauge when you successfully counter an attack.<br>Katana only."
    },
    "LE08": {
        name_en: "S5:Thundering Pursuit",
        name_jp: "S5:雷光追撃",
        name_glen: "S5:Lightning Pursuit",
        effect_en: "When using a PA, lightning-charged Photon Blades are generated. (Power: ?%). Dual Blades only.",
        effect_jp: "PAを使用すると雷光を纏ったフォトンの追撃が発生。飛翔剣限定。",
        effect_glen: "Using PAs will cause blades of lightning equal to 200% attack power to assault the enemy.<br>Soaring Blades only."
    },
    "LE09": {
        name_en: "S5:Fiery End",
        name_jp: "S5:烈終焉弾",
        name_glen: "S5:Fatal Round",
        effect_en: "Enhance the performance of End Attract with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Assault Rifle only.",
        effect_jp: "エンドアトラクト強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。長銃限定。",
        effect_glen: "Increases attack power by 2%.<br>Increases Positron Blast's damage by 150% and reduces its cost to 1 PP.<br>Has a 60 second cooldown.Cooldown resets upon successfully evading an attack with Dive Roll.<br>Assault Rifle only."
    },
    "LE0A": {
        name_en: "S5:Fiery Zero",
        name_jp: "S5:烈零射砲",
        name_glen: "S5:Obliterating Blast",
        effect_en: "Enhance the performance of Zero Distance with a one minute Recast. Recast resets upon successfully evading an attack with Dive Roll. Increase Power by 2%. Launcher only.",
        effect_jp: "ゼロディスタンス強化と同時にリキャスト発生。ダイブロール回避成功時リキャスト時間短縮。威力2%上昇。大砲限定。",
        effect_glen: "Increases attack power by 2%.<br>Increases Contact Blast's damage by 5% and reduces its cost to 1 PP.<br>Has a 60 second cooldown.Cooldown resets upon successfully evading an attack with Dive Roll.<br>Launcher only."
    },
    "LE0B": {
        name_en: "S5:Bright Escape",
        name_jp: "S5:巧避輝与",
        name_glen: "S5:Elusive Lucent",
        effect_en: "Successfully evade an attack with Hero Step or Stylish Roll to restore PP. Effect is negated if damage is taken.Twin Machineguns only.",
        effect_jp: "SロールかHrステップで回避成功時PP回復効果。被ダメージで効果消失。双機銃限定。",
        effect_glen: "Successfully evading an attack with Hero Step or Stylish Roll restores an initial 30 PP and an additional 10 PP every 3 seconds afterwards.<br>The effect is lost upon taking damage.<br>Twin Machineguns only."
    },
    "LE0C": {
        name_en: "S5:Auxiliary Arrow",
        name_jp: "S5:追射剛矢",
        name_glen: "S5:Homing Bolt",
        effect_en: "Produces a Chase Arrow when a PA (except Banish Arrow) hits an enemy. Boosts the power of this ability's Chase Arrow for 15 seconds after successfully dodging an attack with Step.Bullet Bow only.",
        effect_jp: "バニッシュアロウ以外のPA命中時、追撃が発生。ステップ回避成功後にPA命中後15秒間追撃が強化。強弓限定。",
        effect_glen: "All Bow PAs except for Banishing Arrow will produce a Chaser Arrow upon hitting an enemy.<br>Successfully evading an attack will boost Chaser Arrow's power by 100% for 15 seconds.<br>Bow only."
    },
    "LE0D": {
        name_en: "S5:Calming Bullet",
        name_jp: "S5:静心杖弾",
        name_glen: "S5:Steadfast Shaft",
        effect_en: "Enhance the performance of Normal Attacks and increase the damage of Rod Shoot by 100%. Rod only.",
        effect_jp: "通常攻撃性能が強化されロッドシュートの威力が100%上昇する。長杖限定。",
        effect_glen: "Increases the attack speed of Rod normal attacks by 1.38x<br>negates hitstop and increases the damage of Photon Bullet by 100%.<br>Rod only."
    },
    "LE0E": {
        name_en: "S5:Speedy Support",
        name_jp: "S5:急速補助",
        name_glen: "S5:Rapid Support",
        effect_en: "Shorten the charge time of Support Techniques. The power of Zondeel is reduced. Talis only.",
        effect_jp: "補助テクニックのチャージ時間を短縮。ゾンディールの威力減少。導具限定。",
        effect_glen: "All support techniques have instant charge time.<br>The power of Zondeel is reduced by 34%.<br>Talis only."
    },
    "LE0F": {
        name_en: "S5:Calming Shockwave",
        name_jp: "S5:静心衝杖",
        name_glen: "S5:Steadfast Harpoon",
        effect_en: "Generates a wave attack on the third Normal Attack. Increase Power by 2%. Wand only.",
        effect_jp: "通常攻撃の3段目に衝撃波が発生。威力が2%上昇。短杖限定。",
        effect_glen: "Increases power by 2% and negates hitstop.<br>Every 3rd hit of a normal attack combo will generate a shockwave.<br>Wand only."
    },
    "LE0G": {
        name_en: "S5:Rhythmic Pursuer",
        name_jp: "S5:追災律動",
        name_glen: "S5:Cataclysmic Rhythm",
        effect_en: "Boost the potency of Elemental Burst by 30% and automatically activate Elemental Burst when using a Photon Art.Jet Boots only.",
        effect_jp: "エレメンタルバーストの威力が30%上昇しPA派生攻撃時自動的に発動する。魔装脚限定。",
        effect_glen: "Increases Elemental Burst potency by 30%.<br>Automatically activates Elemental Burst upon using Jet Boots Variant Attacks.<br>Jet Boots only."
    },
    "LE0H": {
        name_en: "S5:Mysterious Intent",
        name_jp: "S5:妙の巧志",
        name_glen: "S5:Skillful Adept Will ",
        effect_en: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
        effect_jp: "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)",
        effect_glen: "Increases critical hit rate by 20%. Critical hits will deal an additional 2% damage and recover 1% of the damage dealt as HP (30 max)."
    },
    "LE0I": {
        name_en: "S5:Anthesis Cultivation",
        name_jp: "S5:錬成萌花",
        name_glen: "S5:Augment Bloom",
        effect_en: "Doubles the effects of Special Abilities.",
        effect_jp: "特殊能力のステータス変化を2倍にする。",
        effect_glen: "Doubles the effects of <br>attack <br>defense <br>dexterity <br>HP and PP augments on this weapon."
    },
    "LE98": {
        name_en: "S5:Instant Invocation",
        name_jp: "S5:錬成萌花",
        name_glen: "S5:Sleight Incantation ",
        effect_en: "Technique damage is<br>decreased by 40%, but<br>using the same<br>Technique with a JA<br>substantially<br>decreases charge<br>time.",
        effect_jp: "テクニックの与ダメージが常時40%減少するがテクニック使用後に同属性テクニックJAでチャージ時間大幅短縮。",
        effect_glen: "Reduces technique damage by 40%.<br>Same element techniques that are chained together with a Perfect Attack will have instant charge times."
    },
    "LE0J": {
        name_en: "S5:Vigorous Response",
        name_jp: "S5:錬成萌花",
        name_glen: "S5:Life V Adapation",
        effect_en: "Grants a bonus when<br>your max HP is at<br>1000. Gain additional<br>bonuses per 500 max<br>HP over. Maximum<br>bonuses are reached<br>when max HP is at<br>3000.",
        effect_jp: "最大HP1000から追加効果が発動しHPが500増加ごとに追加効果が発生する。追加効果最大値3000",
        effect_glen: "Grants bonuses when your max HP is at 1000 and every 500 max HP afterwards up to 3000 HP"
    },
    "LE0K": {
        name_en: "S5:Tethered Eclipse",
        name_jp: "S5:錬成萌花",
        name_glen: "S5:Amplified Restraint",
        effect_en: "Boosts damage by 3%<br>against enemies<br>inflicted with a<br>status effect. Also<br>gives a chance to<br>inflict Bind by 40%.",
        effect_jp: "状態異常中のエネミーに対して威力が3%上昇し40%の確率でバインド状態にする。",
        effect_glen: "Deal 3% more damage against enemies inflicted with a status effect.<br>40% chance to inflict bind on enemies inflicted with a status effect."
    },
    "LE97": {
        name_en: "S5:Angelic Respite",
        name_jp: "S5:槍機天悠",
        name_glen: "S5:Lance of Eternity",
        effect_en: "At maximum gear, no gear is consumed while airborne. Increase Power by 2%. Partizan only.",
        effect_jp: "ギア最大時、空中ではギアを消費しなくなる。威力2%上昇。長槍限定。",
        effect_glen: "Increases Power by 2%.<br>When Focus Gauge is maxed, Partisan Focus Gauge will not be consumed while airborne.Partisan only."
    },
	"LE0H": {
        name_en: "S5:Mysterious Purpose",
        name_jp: "S5:妙の巧志",
		name_glen: "S5:Skillful Adept Will",
        effect_en: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX).",
        effect_jp: "クリティカル率が20%上昇。発生時に威力2%上昇、与ダメージの1%をHP回復(上限30)",
		effect_glen: "Increase Critical Hit Rate by 20%. On a Critical Hit, deal an additional 2% damage and recover 1% of damage dealt as HP (30 MAX)."
    },
    "LE0P": {
        name_en: "S5:Calming Expanse",
        name_jp: "S5:静心拡域",
		name_glen: "*S5:Calming Expanse",
        effect_en: "Adds an extra wide-area<br>attack and a chance to<br>stun to normal attacks.<br>Assault Rifles only.",
        effect_jp: "通常攻撃に範囲攻撃が追加され確率でスタン付与。威力2%上昇。長銃限定。",
		effect_glen: "Adds an extra wide-area<br>attack and a chance to<br>stun to normal attacks.<br>Assault Rifles only."
    },
    "LE0Q": {
        name_en: "S5:Area Support",
        name_jp: "S5:領域加勢",
		name_glen: "*S5:Area Support",
        effect_en: "Gain additional bonus<br>effects to Critical<br>Field and EPPR when<br>either are active.",
        effect_jp: "クリティカルフィールドとエレメンタルPPリストレイトFの効果が有効時、フィールドごとに追加効果が発生する。",
		effect_glen: "Gain additional bonus<br>effects to Critical<br>Field and EPPR when<br>either are active."
    },
    "LE0O": {
        name_en: "S5:Calming Quartet",
        name_jp: "S5:静心四連",
		name_glen: "*S5:Calming Quartet",
        effect_en: "Reduces the power of<br>normal attacks by 67%,<br>but makes each normal<br>attack fire 4 shots.<br>Launchers only.",
        effect_jp: "通常攻撃の威力が67％低下する代わりに攻撃が4発に変化。",
		effect_glen: "Reduces the power of<br>normal attacks by 67%,<br>but makes each normal<br>attack fire 4 shots.<br>Launchers only."
    },
    "LE96": {
        name_en: "S5:Aegis Balance",
        name_jp: "S5:堅守の秤",
		name_glen: "*S5:Aegis Balance",
        effect_en: "Increase Power by 4%. Reduce damage taken by 25% but consume 20 PP when taking damage. Force only.",
        effect_jp: "威力が4%上昇。被ダメージ時PPを20消費してダメージを25%軽減する。フォース限定。",
		effect_glen: "Increase Power by 4%. Reduce damage taken by 25% but consume 20 PP when taking damage. Force only."
    },
    "LE0R": {
        name_en: "S5:Swift Radiance",
        name_jp: "S5:回避輝与",
		name_glen: "*S5:Swift Radiance",
        effect_en: "Stop Natural PP Regeneration. Increase Active PP Recovery by 50% and restore 100 PP upon successfully evading an attack with Sway or Step. Increase Power by 2%. Knuckles only.",
        effect_jp: "PP自然回復が停止。攻撃時PP回復量が50%上昇、回避成功時PPが100回復。威力2%上昇。鋼拳限定。",
		effect_glen: "Stop Natural PP Regeneration. Increase Active PP Recovery by 50% and restore 100 PP upon successfully evading an attack with Sway or Step. Increase Power by 2%. Knuckles only."
    },
    "LE0N": {
        name_en: "S5:Chained Radiance",
        name_jp: "S5:連鎖輝与",
		name_glen: "*S5:Chained Radiance",
        effect_en: "On Chain Trigger activation, recover PP and increase Power by 3% for 60 seconds. Twin Machineguns only.",
        effect_jp: "チェイントリガー開始時PPが回復し、60秒間威力3%上昇。双機銃限定",
		effect_glen: "On Chain Trigger activation, recover PP and increase Power by 3% for 60 seconds. Twin Machineguns only."
    },
    "LF0A": {
        name_en: "S6:Heroic Howl",
        name_jp: "S6:英雄咆哮",
        name_glen: "S6:Heroic Howl",
        effect_en: "Enhances Hero Boost. Increases the rate that Hero Boosts's damage boost increases. No effect if using weapon with \"Heroic Victory\".",
        effect_jp: "ヒーローブースト強化。威力増加速度が上昇。「英雄の凱歌」が優先され併用不可。",
        effect_glen: "Increases the bonus damage accumulation rate of Hero's \"Heroic Boost\" by roughly 40%.<br>Does not work if using a weapon with the 'Heroic Anthem' potential."
    },
    "LF0B": {
        name_en: "S6:Soaring Ballet",
        name_jp: "S6:翔機天舞",
        name_glen: "S6:Soaring Heavendance",
        effect_en: "Bouncer weapon Gear fills while standing still. No effect if using weapon with \"Angelic Guidance\".",
        effect_jp: "バウンサー武器のギアが滞空状態時に上昇。「聖鳥の導き」が優先され併用不可。",
        effect_glen: "Bouncer Weapon Gear fills while airborne.<br>Does not work if using a weapon with the \"Sacred Bird Guidance\" potential."
    },
    "LF0C": {
        name_en: "S6:Guardian's Essence",
        name_jp: "S6:機魂の守護",
        name_glen: "S6:Soul Protection",
        effect_en: "Hunter weapon and Katana Gear fills while Guarding. No effect if using weapon with \"Zephyr's Edge\".",
        effect_jp: "ハンター武器・カタナのギアがガード中に上昇。「風視の太刀」が優先され併用不可。",
        effect_glen: "Hunter Weapon Gear and Katana Gear fills while Guarding.<br>Does not work if using a weapon with the \"Galeblade\" potential."
    },
    "LF0D": {
        name_en: "S6:Ironclad Illness",
        name_jp: "S6:癒蝕頑強",
        name_glen: "S6:Tenacious Healscourge",
        effect_en: "Become massive for 60 seconds after becoming affected by a status.",
        effect_jp: "状態異常になってから60秒間、頑強になる。",
        effect_glen: "Grants Super Armor for 60 seconds after being inflicted with a status ailment."
    },
    "LF0E": {
        name_en: "S6:Wise Skill",
        name_jp: "S6:妙技の巧",
        name_glen: "S6:Skillful Adept",
        effect_en: "Increases your critical hit rate by 15%.",
        effect_jp: "クリティカル率が15％上昇する。",
        effect_glen: "Increases your critical hit rate by 15%."
    },
    "LF0F": {
        name_en: "S6:Guardian Armor",
        name_jp: "S6:守護の備",
        name_glen: "S6:Guardian Shield",
        effect_en: "Reduces damage taken by 7%.",
        effect_jp: "被ダメージを7%軽減。",
        effect_glen: "Reduces damage taken by 7%."
    },
    "LF0G": {
        name_en: "S6:S-ATK Up",
        name_jp: "S6:打撃上昇",
        name_glen: "S6:Fortified Melee",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LF0H": {
        name_en: "S6:R-ATK Up",
        name_jp: "S6:射撃上昇",
        name_glen: "S6:Fortified Ranged",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LF0I": {
        name_en: "S6:T-ATK Up",
        name_jp: "S6:法撃上昇",
        name_glen: "S6:Fortified Technique",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LF0J": {
        name_en: "S6:HP Up",
        name_jp: "S6:活器上昇",
        name_glen: "S6:Fortified Life Vessel",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "LF0K": {
        name_en: "S6:PP Up",
        name_jp: "S6:輝器上昇",
        name_glen: "S6:Fortified Photon V",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LF0L": {
        name_en: "S6:Brilliant Ruin",
        name_jp: "S6:滅域輝与",
        name_glen: "S6:Lucent Domain",
        effect_en: "Recover 5 PP when an enemy near you is defeated.",
        effect_jp: "一定の範囲内でエネミーが死亡した時、PPが回復する。",
        effect_glen: "Recover 5 PP when an enemy near you is defeated."
    },
    "LF0M": {
        name_en: "S6:Readying Guard",
        name_jp: "S6:守護乱備",
        name_glen: "S6:Shield of the Sentinel",
        effect_en: "Gain a 10% chance to reduce damage by 70%.",
        effect_jp: "10％の確率で被ダメージを70％軽減。",
        effect_glen: "Gain a 10% chance to reduce damage taken by 70%."
    },
    "LF0N": {
        name_en: "S6:Angelic Wings",
        name_jp: "S6:翔天の翼",
        name_glen: "S6:Soaring Wings",
        effect_en: "Increases Jump Power.",
        effect_jp: "ジャンプ力が上昇する。",
        effect_glen: "Increases jump height"
    },
    "LF0O": {
        name_en: "S6:Long Night Star",
        name_jp: "S6:長夜の明星",
        name_glen: "S6:Evernight Star",
        effect_en: "Reduce Etoile Boost's decay per second by 50%.",
        effect_jp: "エトワールブーストの秒間軽減減少率を50％緩和する。",
        effect_glen: "Reduce Etoile Boost's decay per second by 50%."
    },
    "LF0P": {
        name_en: "S6:Evasion Whistle",
        name_jp: "S6:回避の口笛",
        name_glen: "S6:Dodging Whistle",
        effect_en: "Dodging will cause your pet to return back to you.",
        effect_jp: "回避行動に合わせてペットが戻ってくる。",
        effect_glen: "Evading will cause your pet to return back to you."
    },
    "LF0Q": {
        name_en: "S6:Battle Readiness",
        name_jp: "S6:修羅の備",
        name_glen: "S6:Shield of Carnage",
        effect_en: "When your HP is at 50% or lower, damage is reduced by 40%. Resets after a brief cooldown.",
        effect_jp: "HPが50％以下の時3秒間、被ダメージを40％軽減する。発動後リキャスト発生。",
        effect_glen: "Reduces damage taken by 40% for 3 seconds when your HP is 50% or lower.<br>30 second cooldown."
    },
    "LF0S": {
        name_en: "S6:Overlimit",
        name_jp: "S6:超限活器",
        name_glen: "S6:Overflowing Life V",
        effect_en: "Boosts maximum HP by<br>50% while Limit Break<br>is active.",
        effect_jp: "リミットブレイク発動中最大HPが50%上昇する。",
        effect_glen: "Increases maximum HP by 50% while Overload is active."
    },
    "LF0T": {
        name_en: "S6:Wondrous Encore",
        name_jp: "S6:奇跡再演",
		name_glen: "S6:Miraculous Encore",
        effect_en: "Reduces Showtime's<br>hate increase. Once per<br>activation, reduces<br>damage taken and<br>maintains One More Time.",
        effect_jp: "ショウタイム発動時のヘイト上昇率が軽減し、一度だけ被ダメージを軽減してワンモアタイムの発動条件を維持する。",
		effect_glen: "Reduces aggro generation while Showtime is active.<br>If the user is attacked while Showtime is active, reduce the damage taken and retain One More Time once per Showtime."
    },
    "LF98": {
        name_en: "S6:Raising Expanse",
        name_jp: "S6:累加拡域",
		name_glen: "*S6:Raising Expanse",
        effect_en: "Alters the range of Raising Pursuit's bonus attack damage. (15m AoE, not nullified on part break, not treated as an attack from behind)",
        effect_jp: "累加追撃による追加ダメージが範囲攻撃に変化する。",
		effect_glen: "Alters the range of Raising Pursuit's bonus attack damage. (15m AoE, not nullified on part break, not treated as an attack from behind)"
    },
    "LF97": {
        name_en: "S6:Rainbow's Shield",
        name_jp: "S6:六色の盾",
		name_glen: "*S6:Rainbow's Shield",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Grants a chance (~20%) to drastically reduce damage taken. (Reduced to 1 damage).",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、一定確率で被ダメージを大幅に軽減する。",
		effect_glen: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Grants a chance (~20%) to drastically reduce damage taken. (Reduced to 1 damage)."
    },
    "LG0A": {
        name_en: "S7:Glowing Grace",
        name_jp: "S7:輝静の恵",
        name_glen: "S7:Still Grace",
        effect_en: "Recovers 4 PP per second when standing still for longer than 1 second.",
        effect_jp: "1秒間静止状態が続いた時、ppが1秒ごとに4回復。",
        effect_glen: "Recover 4 PP per second while standing still for more than 1 second."
    },
    "LG0B": {
        name_en: "S7:S-ATK Up",
        name_jp: "S7:打撃上昇",
        name_glen: "S7:Fortified Melee",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LG0C": {
        name_en: "S7:R-ATK Up",
        name_jp: "S7:射撃上昇",
        name_glen: "S7:Fortified Ranged",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LG0D": {
        name_en: "S7:T-ATK Up",
        name_jp: "S7:法撃上昇",
        name_glen: "S7:Fortified Technique",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LG0E": {
        name_en: "S7:HP Up",
        name_jp: "S7:活器上昇",
        name_glen: "*S7:Fortified Life Vessel",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "LG0F": {
        name_en: "S7:PP Up",
        name_jp: "S7:輝器上昇",
        name_glen: "S7:Fortified Photon V",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LG0G": {
        name_en: "S7:S-Atk Up 2",
        name_jp: "S7:打撃上昇2",
        name_glen: "S7:Fortified Melee 2",
        effect_en: "S-ATK(+50)",
        effect_jp: "打撃力(+50)",
        effect_glen: "MEL Pwr(+50)"
    },
    "LG0H": {
        name_en: "S7:R-ATK Up 2",
        name_jp: "S7:射撃上昇2",
        name_glen: "S7:Fortified Ranged 2",
        effect_en: "R-ATK(+50)",
        effect_jp: "射撃力(+50)",
        effect_glen: "RNG Pwr(+50)"
    },
    "LG0I": {
        name_en: "S7:T-ATK Up 2",
        name_jp: "S7:法撃上昇2",
        name_glen: "S7:Fortified Technique 2",
        effect_en: "T-ATK(+50)",
        effect_jp: "法撃力(+50)",
        effect_glen: "TEC Pwr(+50)"
    },
    "LG0J": {
        name_en: "S7:Attack Up",
        name_jp: "S7:攻撃上昇",
        name_glen: "S7:Fortified Attack",
        effect_en: "S-ATK(+25),R-ATK(+25),T-ATK(+25)",
        effect_jp: "打撃力(+25),射撃力(+25),法撃力(+25)",
        effect_glen: "MEL Pwr(+25),RNG Pwr(+25),TEC Pwr(+25)"
    },
    "LG0K": {
        name_en: "S7:Attack Up 2",
        name_jp: "S7:攻撃上昇2",
        name_glen: "S7:Fortified Attack 2",
        effect_en: "S-ATK(+45),R-ATK(+45),T-ATK(+45)",
        effect_jp: "打撃力(+45),射撃力(+45),法撃力(+45)",
        effect_glen: "MEL Pwr(+45),RNG Pwr(+45),TEC Pwr(+45)"
    },
    "LG0L": {
        name_en: "S7:Zenith Impact",
        name_jp: "S7:瞬撃の極",
        name_glen: "S7:Supreme Perfection",
        effect_en: "Gain a 10% chance to stun the enemy with a Just Attack.",
        effect_jp: "ジャストアタック時に10%の確率で対象をスタンさせる。",
        effect_glen: "Gain a 10% chance to stun enemies with Perfect Attacks."
    },
    "LG0M": {
        name_en: "S7:Increased Efficiency",
        name_jp: "S7:薬効増大",
        name_glen: "S7:Medicinal Potentiation",
        effect_en: "Boost the effect of recovery items by 30%.",
        effect_jp: "回復アイテムの効果を30％上昇させる。",
        effect_glen: "Boosts the effect of recovery items by 30%."
    },
    "LG0N": {
        name_en: "S7:Mind Merge",
        name_jp: "S7:以心伝心",
        name_glen: "S7:Empathic Communion",
        effect_en: "Automatically answers Sympathy requests during Alter Ego. No effect if using weapon with \"Glance of Darkness\".",
        effect_jp: "アルターエゴ発動中ペットシンパシーの要求に自動支援を行う。「闇の一瞥」が優先され併用不可。",
        effect_glen: "Automatically answers any pet sympathy requests while Alter Ego is active.<br>Does not work if using a weapon with the \"Sinister Stare\" potential."
    },
    "LG0O": {
        name_en: "S7:Sentinel's Gift",
        name_jp: "S7:法護の与",
        name_glen: "*S7:Sentinel's Gift",
        effect_en: "Upon a successful<br>Tech Charge Parry,<br>recover 5% HP and 10 PP.",
        effect_jp: "テックCパリング成功時HPを5%回復しPPを10回復。",
        effect_glen: "Upon a successful<br>Tech Charge Parry,<br>recover 5% HP and 10 PP."
    },
    "LG0P": {
        name_en: "S7:Descried Warrior",
        name_jp: "S7:視敵無双",
		name_glen: "*S7:Descried Warrior",
        effect_en: "Boosts damage by 1%<br>& reduces damage<br>taken by enemies<br>targeting you by<br>15%.",
        effect_jp: "自身を狙う敵に対して威力1%上昇し被ダメージ15%軽減。",
		effect_glen: "Boosts damage by 1%<br>& reduces damage<br>taken by enemies<br>targeting you by<br>15%."
    },
    "LG98": {
        name_en: "S7:Rainbow's Skill",
        name_jp: "S7:六色の巧",
		name_glen: "*S7:Rainbow's Skill",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Increases critical hit rate. (30%)",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、クリティカル率が30%上昇する。",
		effect_glen: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Increases critical hit rate. (30%)"
    },
    "LH0A": {
        name_en: "S8:Sky Dance's Boon",
        name_jp: "S8:舞空の援",
        name_glen: "S8:Skydance Support",
        effect_en: "Activates Shifta and Deband every 10 seconds when you stay in the air for longer than 2 seconds.",
        effect_jp: "2秒間、滞空状態が続くと、10秒間ごとにシフタ、デバンド発動。",
        effect_glen: "Activates Shifta and Deband after staying in the air for 2 seconds, and then every 10 seconds afterwards."
    },
    "LH0B": {
        name_en: "S8:Strong Potency",
        name_jp: "S8:服薬強身",
        name_glen: "S8:Mighty Medication",
        effect_en: "Makes you temporarily invincible after drinking a -mate item.",
        effect_jp: "自身でメイト系アイテム使用時、一定時間無敵。",
        effect_glen: "Makes you temporarily invincible while drinking a -mate item."
    },
    "LH0C": {
        name_en: "S8:S-ATK Up",
        name_jp: "S8:打撃上昇",
        name_glen: "S8:Fortified Melee",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LH0D": {
        name_en: "S8:R-ATK Up",
        name_jp: "S8:射撃上昇",
        name_glen: "S8:Fortified Ranged",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LH0E": {
        name_en: "S8:T-ATK Up",
        name_jp: "S8:法撃上昇",
        name_glen: "S8:Fortified Technique",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LH0F": {
        name_en: "S8:HP Up",
        name_jp: "S8:活器上昇",
        name_glen: "S8:Fortified Life Vessel",
        effect_en: "HP(+40)",
        effect_jp: "HP(+40)",
        effect_glen: "HP(+40)"
    },
    "LH0G": {
        name_en: "S8:PP Up",
        name_jp: "S8:輝器上昇",
        name_glen: "S8:Fortified Photon V",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LH0H": {
        name_en: "S8:HP Up 2",
        name_jp: "S8:活器上昇2",
        name_glen: "S8:Fortified Life Vessel 2",
        effect_en: "HP(+60)",
        effect_jp: "HP(+60)",
        effect_glen: "HP(+60)"
    },
    "LH0I": {
        name_en: "S8:PP Up 2",
        name_jp: "S8:輝器上昇2",
        name_glen: "S8:Fortified Photon V 2",
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
    "LH98": {
        name_en: "S8:Rainbow's Decay",
        name_jp: "S8:六色の蝕",
		name_glen: "*S8:Rainbow's Decay",
        effect_en: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Makes attacks inflict random status effects.",
        effect_jp: "花・海・葉・月・雪・影のいずれかが発動中、攻撃時にランダムな状態異常にする。",
		effect_glen: "While Petal, Ocean, Leaf, Moon, Snow or Shadow Flash is active: Makes attacks inflict random status effects."
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
        name_glen: "Gryzorus Soul",
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
        name_glen: "Deubarz Soul",
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
        name_glen: "Izanekazuchi Soul",
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
        name_glen: "Fabula Soul",
        effect_en: "S-ATK(+10),<br>R-ATK(+10),<br>T-ATK(+10),<br>HP(+20)",
        effect_jp: "打撃力(+10),<br>射撃力(+10),<br>法撃力(+10),<br>HP(+20)",
        effect_glen: "MEL Pwr(+10),<br>RNG Pwr(+10),<br>TEC Pwr(+10),<br>HP(+20)"
    },
    "SB05": {
        name_en: "Historia Soul",
        name_jp: "イストリア・ソール",
        name_glen: "Historia Soul",
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
        name_glen: "Magi Di Soul",
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
        name_glen: "Ex Acto Soul",
        effect_en: "S-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "MEL Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "SI02": {
        name_en: "Ex Till Soul",
        name_jp: "イクスティル・ソール",
        name_glen: "Ex Tir Soul",
        effect_en: "R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "射撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "RNG Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "SI03": {
        name_en: "Ex Magi Soul",
        name_jp: "イクスマギー・ソール",
        name_glen: "Ex Magi Soul",
        effect_en: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "SI04": {
        name_en: "Ex Ares Soul",
        name_jp: "イクスアレス・ソール",
        name_glen: "Ex Alles Soul",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+50), PP(+2)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+50),PP(+2)",
        effect_glen: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+50), PP(+2)"
    },
	"SA02": {
        name_en: "Guardian Soul",
        name_jp: "ガーディアン・ソール",
		name_glen: "*Guardian Soul",
        effect_en: "ALL(+70),<br>HP(+70),<br>PP(+7)",
        effect_jp: "ALL(+70),<br>HP(+70),<br>PP(+7)",
		effect_glen: "ALL(+70),<br>HP(+70),<br>PP(+7)"
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
        name_glen: "Omega Reverie",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>HP(+20),<br>PP(+1)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>HP(+20),<br>PP(+1)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>HP(+20),<br>PP(+1)"
    },
    "TK02": {
        name_en: "Elder Reverie",
        name_jp: "エルダー・レヴリー",
        name_glen: "Elder Reverie",
        effect_en: "S-ATK(+40),<br>R-ATK(+20),<br>T-ATK(+20),<br>PP(-2)",
        effect_jp: "打撃力(+40),<br>射撃力(+20),<br>法撃力(+20),<br>PP(-2)",
        effect_glen: "MEL Pwr(+40),<br>RNG Pwr(+20),<br>TEC Pwr(+20),<br>PP(-2)"
    },
    "TK03": {
        name_en: "Loser Reverie",
        name_jp: "ルーサー・レヴリー",
        name_glen: "Luther Reverie",
        effect_en: "S-ATK(+20),<br>R-ATK(+20),<br>T-ATK(+40),<br>HP(-20)",
        effect_jp: "打撃力(+20),<br>射撃力(+20),<br>法撃力(+40),<br>HP(-20)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+20),<br>TEC Pwr(+40),<br>HP(-20)"
    },
    "TK04": {
        name_en: "Appregina Reverie",
        name_jp: "アプレジナ・レヴリー",
        name_glen: "Appregina Reverie",
        effect_en: "S-ATK(+20),<br>R-ATK(+40),<br>T-ATK(+20),<br>HP(-10),<br>PP(-1)",
        effect_jp: "打撃力(+20),<br>射撃力(+40),<br>法撃力(+20),<br>HP(-10),<br>PP(-1)",
        effect_glen: "MEL Pwr(+20),<br>RNG Pwr(+40),<br>TEC Pwr(+20),<br>HP(-10),<br>PP(-1)"
    },
    "TK05": {
        name_en: "Double Reverie",
        name_jp: "ダブル・レヴリー",
        name_glen: "Gemini Reverie",
        effect_en: "S-ATK(-20),<br>R-ATK(-20),<br>T-ATK(-20),<br>HP(+50),<br>PP(+5)",
        effect_jp: "打撃力(-20),<br>射撃力(-20),<br>法撃力(-20),<br>HP(+50),<br>PP(+5)",
        effect_glen: "MEL Pwr(-20),<br>RNG Pwr(-20),<br>TEC Pwr(-20),<br>HP(+50),<br>PP(+5)"
    },
    "TK06": {
        name_en: "Persona Reverie",
        name_jp: "ペルソナ・レヴリー",
        name_glen: "Persona Reverie",
        effect_en: "S-ATK(+40),R-ATK(+40),T-ATK(+40),S-DEF(-20),R-DEF(-20),T-DEF(-20)",
        effect_jp: "打撃力(+40),射撃力(+40),法撃力(+40),打撃防御(-20),射撃防御(-20),法撃防御(-20)",
        effect_glen: "MEL Pwr(+40),RNG Pwr(+40),TEC Pwr(+40),MEL Def(-20),RNG Def(-20),TEC Def(-20)"
    },
    "TK10": {
        name_en: "Mana Reverie",
        name_jp: "マナ・レヴリー",
        name_glen: "Mana Reverie",
        effect_en: "S-ATK(+50),R-ATK(+50),T-ATK(+50),HP(+20),PP(+4)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+4)",
        effect_glen: "MEL Pwr(+50),RNG Pwr(+50),TEC Pwr(+50),HP(+20),PP(+4)"
    },
    "TJ01": {
        name_en: "Omega Memoria",
        name_jp: "オメガ・メモリア",
        name_glen: "Omega Memoria",
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
        name_glen: "Crack I",
        effect_en: "S-ATK(+3), R-ATK(+3), T-ATK(+3), S-DEF(+5), R-DEF(+5), T-DEF(+5), HP(+5), PP(+1)",
        effect_jp: "打撃力(+3),射撃力(+3),法撃力(+3),打撃防御(+5),射撃防御(+5),法撃防御(+5),HP(+5),PP(+1)",
        effect_glen: "MEL Pwr(+3), RNG Pwr(+3), TEC Pwr(+3), MEL Def(+5), RNG Def(+5), TEC Def(+5), HP(+5), PP(+1)"
    },
    "TM02": {
        name_en: "Crack II",
        name_jp: "クラックII",
        name_glen: "Crack II",
        effect_en: "S-ATK(+5), R-ATK(+5), T-ATK(+5), S-DEF(+10), R-DEF(+10), T-DEF(+10), HP(+10), PP(+1)",
        effect_jp: "打撃力(+5),射撃力(+5),法撃力(+5),打撃防御(+10),射撃防御(+10),法撃防御(+10),HP(+10),PP(+1)",
        effect_glen: "MEL Pwr(+5), RNG Pwr(+5), TEC Pwr(+5), MEL Def(+10), RNG Def(+10), TEC Def(+10), HP(+10), PP(+1)"
    },
    "TM03": {
        name_en: "Crack III",
        name_jp: "クラックIII",
        name_glen: "Crack III",
        effect_en: "S-ATK(+10), R-ATK(+10), T-ATK(+10), S-DEF(+15), R-DEF(+15), T-DEF(+15), HP(+15), PP(+1)",
        effect_jp: "打撃力(+10),射撃力(+10),法撃力(+10),打撃防御(+15),射撃防御(+15),法撃防御(+15),HP(+15),PP(+1)",
        effect_glen: "MEL Pwr(+10), RNG Pwr(+10), TEC Pwr(+10), MEL Def(+15), RNG Def(+15), TEC Def(+15), HP(+15), PP(+1)"
    },
    "TM04": {
        name_en: "Crack IV",
        name_jp: "クラックIV",
        name_glen: "Crack IV",
        effect_en: "S-ATK(+15), R-ATK(+15), T-ATK(+15), S-DEF(+30), R-DEF(+30), T-DEF(+30), HP(+30), PP(+2)",
        effect_jp: "打撃力(+15),射撃力(+15),法撃力(+15),打撃防御(+30),射撃防御(+30),法撃防御(+30),HP(+30),PP(+2)",
        effect_glen: "MEL Pwr(+15), RNG Pwr(+15), TEC Pwr(+15), MEL Def(+30), RNG Def(+30), TEC Def(+30), HP(+30), PP(+2)"
    },
    "TM05": {
        name_en: "Crack V",
        name_jp: "クラックV",
        name_glen: "Crack V",
        effect_en: "S-ATK(+30), R-ATK(+30), T-ATK(+30), S-DEF(+50), R-DEF(+50), T-DEF(+50), HP(+50), PP(+2)",
        effect_jp: "打撃力(+30),射撃力(+30),法撃力(+30),打撃防御(+50),射撃防御(+50),法撃防御(+50),HP(+50),PP(+2)",
        effect_glen: "MEL Pwr(+30), RNG Pwr(+30), TEC Pwr(+30), MEL Def(+50), RNG Def(+50), TEC Def(+50), HP(+50), PP(+2)"
    },
    "TN01": {
        name_en: "Ange Glare",
        name_jp: "アンジュール・グレア",
        name_glen: "Angele Glare",
        effect_en: "S-ATK(+30), S-DEF(+40), R-DEF(+20), T-DEF(+20)",
        effect_jp: "打撃力(+30),打撃防御(+40),射撃防御(+20),法撃防御(+20)",
        effect_glen: "MEL Pwr(+30), MEL Def(+40), RNG Def(+20), TEC Def(+20)"
    },
    "TN02": {
        name_en: "Veluge Glare",
        name_jp: "べルージュ・グレア",
        name_glen: "Berouge Glare",
        effect_en: "R-ATK(+30), S-DEF(+20), R-DEF(+40), T-DEF(+20)",
        effect_jp: "射撃力(+30),打撃防御(+20),射撃防御(+40),法撃防御(+20)",
        effect_glen: "RNG Pwr(+30), MEL Def(+20), RNG Def(+40), TEC Def(+20)"
    },
    "TN03": {
        name_en: "Dominus Glare",
        name_jp: "ドゥミヌス・グレア",
        name_glen: "Duminus Glare",
        effect_en: "T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+40)",
        effect_jp: "法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+40)",
        effect_glen: "TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+40)"
    },
    "TN04": {
        name_en: "Fordruss Glare",
        name_jp: "フォードルス・グレア",
        name_glen: "Fodrus Glare",
        effect_en: "S-DEF(+35), R-DEF(+35), T-DEF(+35), HP(+40), PP(+4)",
        effect_jp: "打撃防御(+35),射撃防御(+35),法撃防御(+35),HP(+40),PP(+4)",
        effect_glen: "MEL Def(+35), RNG Def(+35), TEC Def(+35), HP(+40), PP(+4)"
    },
    "TN05": {
        name_en: "Execour Glare",
        name_jp: "エクゼクル・グレア",
        name_glen: "Exegul Glare",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), S-DEF(+50), R-DEF(+50), T-DEF(+50)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),打撃防御(+50),射撃防御(+50),法撃防御(+50)",
        effect_glen: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), MEL Def(+50), RNG Def(+50), TEC Def(+50)"
    },
    "TN06": {
        name_en: "Mitra Glare",
        name_jp: "ミトラ・グレア",
        name_glen: "Mitra Glare",
        effect_en: "S-ATK(+30), R-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),射撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "MEL Pwr(+30), RNG Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "TN07": {
        name_en: "Varuna Glare",
        name_jp: "ヴァルナ・グレア",
        name_glen: "Varuna Glare",
        effect_en: "S-ATK(+30), T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30),法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
        effect_glen: "MEL Pwr(+30), TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "TN08": {
        name_en: "Shiva Glare",
        name_jp: "シバ・グレア",
		name_glen: "*Shiva Glare",
        effect_en: "R-ATK(+30), T-ATK(+30), S-DEF(+20), R-DEF(+20), T-DEF(+20), HP(+20), PP(+2)",
        effect_jp: "射撃力(+30),法撃力(+30),打撃防御(+20),射撃防御(+20),法撃防御(+20),HP(+20),PP(+2)",
		effect_glen: "RNG Pwr(+30), TEC Pwr(+30), MEL Def(+20), RNG Def(+20), TEC Def(+20), HP(+20), PP(+2)"
    },
    "TN09": {
        name_en: "Origin Glare",
        name_jp: "オリジン・グレア",
		name_glen: "*Origin Glare",
        effect_en: "S-ATK(+30), R-ATK(+30), T-ATK(+30), S-DEF(+10), R-DEF(+10), T-DEF(+10), HP(+20), PP(+2)",
        effect_jp: "打撃力(+30), 射撃力(+30), 法撃力(+30), 打撃防御(+10), 射撃防御(+10), 法撃防御(+10), HP(+20), PP(+2)",
		effect_glen: "MEL Pwr(+30), RNG Pwr(+30), TEC Pwr(+30), MEL Def(+10), RNG Def(+10), TEC Def(+10), HP(+20), PP(+2)"
    },
    "TN0A": {
        name_en: "Photoner Glare",
        name_jp: "フォトナー・グレア",
		name_glen: "*Photoner Glare",
        effect_en: "ALL(+15), HP(+15), PP(+2)",
        effect_jp: "ALL(+15), HP(+15), PP(+2)",
		effect_glen: "ALL(+15), HP(+15), PP(+2)"
    },
    "TN11": {
        name_en: "Absolute Glare",
        name_jp: "アブソリュート・グレア",
		name_glen: "*Absolute Glare",
        effect_en: "ALL(+40), HP(+30), PP(+3)",
        effect_jp: "ALL(+40), HP(+30), PP(+3)",
		effect_glen: "ALL(+40), HP(+30), PP(+3)"
    },
	"UD01": {
        name_en: "Ligand Arma",
        name_jp: "リガンド・アルマ",
		name_glen: "*Ligand Arma",
        effect_en: "S-ATK(+40),<br>HP(+30),<br>PP(+3)",
        effect_jp: "打撃力(+40), HP(+30), PP(+3)",
		effect_glen: "MEL Pwr(+40),<br>HP(+30),<br>PP(+3)"
    },
    "UD11": {
        name_en: "Ligand Tiro",
        name_jp: "リガンド・ティロ",
		name_glen: "*Ligand Tiro",
        effect_en: "R-ATK(+40),<br>HP(+30),<br>PP(+3)",
        effect_jp: "射撃力(+40),<br>HP(+30),<br>PP(+3)",
		effect_glen: "RNG Pwr(+40),<br>HP(+30),<br>PP(+3)"
    },
    "UD21": {
        name_en: "Ligand Magia",
        name_jp: "リガンド・マギア",
		name_glen: "*Ligand Magia",
        effect_en: "T-ATK(+40),<br>HP(+30),<br>PP(+3)",
        effect_jp: "法撃力(+40),<br>HP(+30),<br>PP(+3)",
		effect_glen: "TEC Pwr(+40),<br>HP(+30),<br>PP(+3)"
    },
    "TD0H": {
        name_en: "Turkey Fever",
        name_jp: "リガンド・マギア",
		name_glen: "Turkey Fever",
        effect_en: "DEX(+5),<br>T-DEF(+10),<br>HP(+5),<br>PP(+1)",
        effect_jp: "技量(+5),<br>法撃防御(+10),<br>HP(+5),<br>PP(+1)",
		effect_glen: "DEX(+5),<br>TEC Def(+10),<br>HP(+5),<br>PP(+1)"
    },
    "TD0G": {
        name_en: "Drago Fever",
        name_jp: "リガンド・マギア",
		name_glen: "Dragon Fever",
        effect_en: "DEX(+5),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
        effect_jp: "技量(+5),<br>射撃防御(+10),<br>HP(+5),<br>PP(+1)",
		effect_glen: "DEX(+5),<br>RNG Def(+10),<br>HP(+5),<br>PP(+1)"
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
        name_en: "Doom Break I",
        name_jp: "ドゥームブレイクⅠ",
        name_glen: "Doom Break I",
        effect_en: "S-ATK(+15),<br>R-ATK(+15),<br>T-ATK(+15),<br>PP(+2)",
        effect_jp: "打撃力(+15),<br>射撃力(+15),<br>法撃力(+15),<br>PP(+2)",
        effect_glen: "MEL Pwr(+15),<br>RNG Pwr(+15),<br>TEC Pwr(+15),<br>PP(+2)"
    },
    "TH02": {
        name_en: "Doom Break II",
        name_jp: "ドゥームブレイクⅡ",
        name_glen: "Doom Break II",
        effect_en: "S-ATK(+25),<br>R-ATK(+25),<br>T-ATK(+25),<br>PP(+3)",
        effect_jp: "打撃力(+25),<br>射撃力(+25),<br>法撃力(+25),<br>PP(+3)",
        effect_glen: "MEL Pwr(+25),<br>RNG Pwr(+25),<br>TEC Pwr(+25),<br>PP(+3)"
    },
    "TH03": {
        name_en: "Doom Break III",
        name_jp: "ドゥームブレイクⅢ",
        name_glen: "Doom Break III",
        effect_en: "S-ATK(+30),<br>R-ATK(+30),<br>T-ATK(+30),<br>PP(+4)",
        effect_jp: "打撃力(+30),<br>射撃力(+30),<br>法撃力(+30),<br>PP(+4)",
        effect_glen: "MEL Pwr(+30),<br>RNG Pwr(+30),<br>TEC Pwr(+30),<br>PP(+4)"
    },
    "LP01": {
        name_en: "Lesser Power I",
        name_jp: "レッサー・パワーⅠ",
        name_glen: "Lesser Might I",
        effect_en: "S-ATK(+5)",
        effect_jp: "打撃力(+5)",
        effect_glen: "MEL Pwr(+5)"
    },
    "LP02": {
        name_en: "Lesser Power II",
        name_jp: "レッサー・パワーⅡ",
        name_glen: "Lesser Might II",
        effect_en: "S-ATK(+15)",
        effect_jp: "打撃力(+15)",
        effect_glen: "MEL Pwr(+15)"
    },
    "LP03": {
        name_en: "Lesser Power III",
        name_jp: "レッサー・パワーⅢ",
        name_glen: "Lesser Might III",
        effect_en: "S-ATK(+25)",
        effect_jp: "打撃力(+25)",
        effect_glen: "MEL Pwr(+25)"
    },
    "LP04": {
        name_en: "Lesser Power IV",
        name_jp: "レッサー・パワーⅣ",
        name_glen: "Lesser Might IV",
        effect_en: "S-ATK(+30)",
        effect_jp: "打撃力(+30)",
        effect_glen: "MEL Pwr(+30)"
    },
    "LP05": {
        name_en: "Lesser Power V",
        name_jp: "レッサー・パワーⅤ",
        name_glen: "Lesser Might V",
        effect_en: "S-ATK(+35)",
        effect_jp: "打撃力(+35)",
        effect_glen: "MEL Pwr(+35)"
    },
    "LS01": {
        name_en: "Lesser Shoot I",
        name_jp: "レッサー・シュートⅠ",
        name_glen: "Lesser Precision I",
        effect_en: "R-ATK(+5)",
        effect_jp: "射撃力(+5)",
        effect_glen: "RNG Pwr(+5)"
    },
    "LS02": {
        name_en: "Lesser Shoot II",
        name_jp: "レッサー・シュートⅡ",
        name_glen: "Lesser Precision II",
        effect_en: "R-ATK(+15)",
        effect_jp: "射撃力(+15)",
        effect_glen: "RNG Pwr(+15)"
    },
    "LS03": {
        name_en: "Lesser Shoot III",
        name_jp: "レッサー・シュートⅢ",
        name_glen: "Lesser Precision III",
        effect_en: "R-ATK(+25)",
        effect_jp: "射撃力(+25)",
        effect_glen: "RNG Pwr(+25)"
    },
    "LS04": {
        name_en: "Lesser Shoot IV",
        name_jp: "レッサー・シュートⅣ",
        name_glen: "Lesser Precision IV",
        effect_en: "R-ATK(+30)",
        effect_jp: "射撃力(+30)",
        effect_glen: "RNG Pwr(+30)"
    },
    "LS05": {
        name_en: "Lesser Shoot V",
        name_jp: "レッサー・シュートⅤ",
        name_glen: "Lesser Precision V",
        effect_en: "R-ATK(+35)",
        effect_jp: "射撃力(+35)",
        effect_glen: "RNG Pwr(+35)"
    },
    "LT01": {
        name_en: "Lesser Technique I",
        name_jp: "レッサー・テクニックⅠ",
        name_glen: "Lesser Casting I",
        effect_en: "T-ATK(+5)",
        effect_jp: "法撃力(+5)",
        effect_glen: "TEC Pwr(+5)"
    },
    "LT02": {
        name_en: "Lesser Technique II",
        name_jp: "レッサー・テクニックⅡ",
        name_glen: "Lesser Casting II",
        effect_en: "T-ATK(+15)",
        effect_jp: "法撃力(+15)",
        effect_glen: "TEC Pwr(+15)"
    },
    "LT03": {
        name_en: "Lesser Technique III",
        name_jp: "レッサー・テクニックⅢ",
        name_glen: "Lesser Casting III",
        effect_en: "T-ATK(+25)",
        effect_jp: "法撃力(+25)",
        effect_glen: "TEC Pwr(+25)"
    },
    "LT04": {
        name_en: "Lesser Technique IV",
        name_jp: "レッサー・テクニックⅣ",
        name_glen: "Lesser Casting IV",
        effect_en: "T-ATK(+30)",
        effect_jp: "法撃力(+30)",
        effect_glen: "TEC Pwr(+30)"
    },
    "LT05": {
        name_en: "Lesser Technique V",
        name_jp: "レッサー・テクニックⅤ",
        name_glen: "Lesser Casting V",
        effect_en: "T-ATK(+35)",
        effect_jp: "法撃力(+35)",
        effect_glen: "TEC Pwr(+35)"
    },
    "LM01": {
        name_en: "Lesser Stamina I",
        name_jp: "レッサー・スタミナⅠ",
        name_glen: "Lesser Stamina I",
        effect_en: "HP(+15)",
        effect_jp: "HP(+15)",
        effect_glen: "HP(+15)"
    },
    "LM02": {
        name_en: "Lesser Stamina II",
        name_jp: "レッサー・スタミナⅡ",
        name_glen: "Lesser Stamina II",
        effect_en: "HP(+35)",
        effect_jp: "HP(+35)",
        effect_glen: "HP(+35)"
    },
    "LM03": {
        name_en: "Lesser Stamina III",
        name_jp: "レッサー・スタミナⅢ",
        name_glen: "Lesser Stamina III",
        effect_en: "HP(+45)",
        effect_jp: "HP(+45)",
        effect_glen: "HP(+45)"
    },
    "LM04": {
        name_en: "Lesser Stamina IV",
        name_jp: "レッサー・スタミナⅣ",
        name_glen: "Lesser Stamina IV",
        effect_en: "HP(+55)",
        effect_jp: "HP(+55)",
        effect_glen: "HP(+55)"
    },
    "LM05": {
        name_en: "Lesser Stamina V",
        name_jp: "レッサー・スタミナⅤ",
        name_glen: "Lesser Stamina V",
        effect_en: "HP(+65)",
        effect_jp: "HP(+65)",
        effect_glen: "HP(+65)"
    },
    "LR01": {
        name_en: "Lesser Spirita I",
        name_jp: "レッサー・スピリタⅠ",
        name_glen: "Lesser Spirit I",
        effect_en: "PP(+1)",
        effect_jp: "PP(+1)",
        effect_glen: "PP(+1)"
    },
    "LR02": {
        name_en: "Lesser Spirita II",
        name_jp: "レッサー・スピリタⅡ",
        name_glen: "Lesser Spirit II",
        effect_en: "PP(+2)",
        effect_jp: "PP(+2)",
        effect_glen: "PP(+2)"
    },
    "LR03": {
        name_en: "Lesser Spirita III",
        name_jp: "レッサー・スピリタⅢ",
        name_glen: "Lesser Spirit III",
        effect_en: "PP(+3)",
        effect_jp: "PP(+3)",
        effect_glen: "PP(+3)"
    },
    "LR04": {
        name_en: "Lesser Spirita IV",
        name_jp: "レッサー・スピリタⅣ",
        name_glen: "Lesser Spirit IV",
        effect_en: "PP(+4)",
        effect_jp: "PP(+4)",
        effect_glen: "PP(+4)"
    },
    "LR05": {
        name_en: "Lesser Spirita V",
        name_jp: "レッサー・スピリタⅤ",
        name_glen: "Lesser Spirit V",
        effect_en: "PP(+5)",
        effect_jp: "PP(+5)",
        effect_glen: "PP(+5)"
    },
    "LP06": {
        name_en: "EV Power HP",
        name_jp: "EV・パワーHP",
        name_glen: "EV Might HP",
        effect_en: "S-ATK(+35),<br>HP(+60)",
        effect_jp: "打撃力(+35),<br>HP(+60)",
        effect_glen: "MEL Pwr(+35),<br>HP(+60)"
    },
    "LP07": {
        name_en: "EV Power PP",
        name_jp: "EV・パワーPP",
        name_glen: "EV Might PP",
        effect_en: "S-ATK(+35),<br>PP(+4)",
        effect_jp: "打撃力(+35),<br>PP(+4)",
        effect_glen: "MEL Pwr(+35),<br>PP(+4)"
    },
    "LS06": {
        name_en: "EV Shoot HP",
        name_jp: "EV・シュートHP",
        name_glen: "EV Precision HP",
        effect_en: "R-ATK(+35),<br>HP(+60)",
        effect_jp: "射撃力(+35),<br>HP(+60)",
        effect_glen: "RNG Pwr(+35),<br>HP(+60)"
    },
    "LS07": {
        name_en: "EV Shoot PP",
        name_jp: "EV・シュートPP",
        name_glen: "EV Precision PP",
        effect_en: "R-ATK(+35),<br>PP(+4)",
        effect_jp: "射撃力(+35),<br>PP(+4)",
        effect_glen: "RNG Pwr(+35),<br>PP(+4)"
    },
    "LT06": {
        name_en: "EV Technique HP",
        name_jp: "EV・テクニックHP",
        name_glen: "EV Casting HP",
        effect_en: "T-ATK(+35),<br>HP(+60)",
        effect_jp: "法撃力(+35),<br>HP(+60)",
        effect_glen: "TEC Pwr(+35),<br>HP(+60)"
    },
    "LT07": {
        name_en: "EV Technique PP",
        name_jp: "EV・テクニックPP",
        name_glen: "EV Casting PP",
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
        name_glen: "Love Fever",
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
        name_glen: "Lantern Fever",
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
        name_glen: "Noiya Fever",
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
        name_glen: "Sonic Fever",
        effect_en: "S-ATK(+10),<br>R-DEF(+10),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+10),<br>射撃防御(+10),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+10),<br>RNG Def(+10),<br>HP(+5),<br>PP(+1)"
    },
    "TD0D": {
        name_en: "Sansan Fever",
        name_jp: "サンサン・フィーバー",
        name_glen: "Sumsum Fever",
        effect_en: "S-ATK(+5),<br>R-ATK(+5),<br>T-ATK(+5),<br>HP(+5),<br>PP(+1)",
        effect_jp: "打撃力(+5),<br>射撃力(+5),<br>法撃力(+5),<br>HP(+5),<br>PP(+1)",
        effect_glen: "MEL Pwr(+5),<br>RNG Pwr(+5),<br>TEC Pwr(+5),<br>HP(+5),<br>PP(+1)"
    },
    "TD0E": {
        name_en: "Luna Fever",
        name_jp: "ルーナ・フィーバー",
        name_glen: "Luna Fever",
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
        name_glen: "Divine Will",
        effect_en: "S-ATK(+20), R-ATK(+20), T-ATK(+20), PP(+5)",
        effect_jp: "打撃力(+20),射撃力(+20),法撃力(+20),PP(+5)",
        effect_glen: "MEL Pwr(+20), RNG Pwr(+20), TEC Pwr(+20), PP(+5)"
    },
    "ID02": {
        name_en: "Divine Order",
        name_jp: "ディバイン・オーダー",
        name_glen: "Divine Order",
        effect_en: "S-ATK(+50), R-ATK(+50), T-ATK(+50), HP(+20), PP(+10)",
        effect_jp: "打撃力(+50),射撃力(+50),法撃力(+50),HP(+20),PP(+10)",
        effect_glen: "MEL Pwr(+50), RNG Pwr(+50), TEC Pwr(+50), HP(+20), PP(+10)"
    },
    "IE01": {
        name_en: "Exceed Energy",
        name_jp: "イクシード・エナジー",
        name_glen: "Exceed Energy",
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
        name_glen: "Sentence Arma",
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
        name_glen: "Sentence Tyro",
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
        name_glen: "Sentence Magia",
        effect_en: "T-ATK(+20),<br>HP(+20),<br>PP(+3)",
        effect_jp: "法撃力(+20),<br>HP(+20),<br>PP(+3)",
        effect_glen: "TEC Pwr(+20),<br>HP(+20),<br>PP(+3)"
    },
    "YA31": {
        name_en: "Sentence Triple",
        name_jp: "センテンス・トリプル",
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
        name_glen: "Phrase Decay",
        effect_en: "Boosts damage inflicted to enemies<br>affected by Jellen by 5%.",
        effect_jp: "ジェルン状態の敵への威力+5%。",
        effect_glen: "Increase damage inflicted to enemies affected by Jellen by 5%."
    },
    "YB01": {
        name_en: "Phrase Recovery",
        name_jp: "フレイズ・レスポンス",
        name_glen: "Phrase Recovery",
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
        name_glen: "Phrase Response",
        effect_en: "+5% ATK PP Recovery.",
        effect_jp: "攻撃時PP回復+5%。",
        effect_glen: "Increases normal attack PP recovery by 5%"
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
        name_glen: "Omega Buster",
        effect_en: "Boosts damage against Demons by 3%.",
        effect_jp: "魔物へのダメージは10％増加する。",
        effect_glen: "Boosts damage against Demons by 3%."
    },
    "PA01": {
        name_en: "Ripper/Ltn. Weak",
        name_jp: "リーパー／雷弱点",
        name_glen: "Reaper: Weak to Lighting",
        effect_en: "Boost damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "雷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Increases damage against enemies weak to Lightning. Effect is reduced as the Weapon Rarity increases."
    },
    "PB02": {
        name_en: "Ripper/Fire Weak",
        name_jp: "リーパー／火弱点",
        name_glen: "Reaper: Weak to Fire",
        effect_en: "Boost damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "火弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Increases damage against enemies weak to Fire. Effect is reduced as the Weapon Rarity increases."
    },
    "PC03": {
        name_en: "Ripper/Ice Weak",
        name_jp: "リーパー／氷弱点",
        name_glen: "Reaper: Weak to Ice",
        effect_en: "Boost damage against enemies weak to Ice. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "氷弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Increases damage against enemies weak to Ice. Effect is reduced as the Weapon Rarity increases."
    },
    "PD04": {
        name_en: "Ripper/Wind Weak",
        name_jp: "リーパー／風弱点",
        name_glen: "Reaper: Weak to Wind",
        effect_en: "Boost damage against enemies weak to Wind. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "風弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Increases damage against enemies weak to Wind. Effect is reduced as the Weapon Rarity increases."
    },
    "PE05": {
        name_en: "Ripper/Light Weak",
        name_jp: "リーパー／光弱点",
        name_glen: "Reaper: Weak to Light",
        effect_en: "Boost damage against enemies weak to Light. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "光弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Increases damage against enemies weak to Light. Effect is reduced as Weapon Rarity increases."
    },
    "PF06": {
        name_en: "Ripper/Dark Weak",
        name_jp: "リーパー／闇弱点",
        name_glen: "Reaper: Weak to Dark",
        effect_en: "Boost damage against enemies weak to Dark. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "闇弱点のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against enemies weak to Dark. Effect is reduced as the Weapon Rarity increases."
    },
    "VQ01": {
        name_en: "Slayer/Armor Type",
        name_jp: "スレイヤー／機甲種",
        name_glen: "Slayer: Automata",
        effect_en: "Boost damage against Lillipa Mechs. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "機甲種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Automatas. Effect is reduced as the Weapon Rarity increases."
    },
    "VQ02": {
        name_en: "Slayer/Beast Type",
        name_jp: "スレイヤー／野獣種",
        name_glen: "Slayer: Sylvant",
        effect_en: "Boost damage against Naberius Natives. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "野獣種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Sylvants. Effect is reduced as the Weapon Rarity increases."
    },
    "PJ13": {
        name_en: "Slayer/Ocean Type",
        name_jp: "スレイヤー／海王種",
        name_glen: "Slayer: Oceanids",
        effect_en: "Boost damage against Oceanids. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "海王種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Oceanids. Effect is reduced as the Weapon Rarity increases."
    },
    "PK14": {
        name_en: "Slayer/Kuronite Type",
        name_jp: "スレイヤー／黒の民",
        name_glen: "Slayer: Nightfaller",
        effect_en: "Boost damage against Kuronites. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "黒の民のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Nightfallers. Effect is reduced as the Weapon Rarity increases."
    },
    "PL15": {
        name_en: "Slayer/Phantoms Type",
        name_jp: "スレイヤー／幻創種",
        name_glen: "Slayer: Phantasm",
        effect_en: "Boost damage against Phantoms. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "幻創種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Phantasms. Effect is reduced as the Weapon Rarity increases."
    },
    "PM16": {
        name_en: "Slayer/Darkers",
        name_jp: "スレイヤー／ダーカー",
        name_glen: "Slayer: Falspawn",
        effect_en: "Boost damage against Darkers. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "ダーカー種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Increase damage against Falspawns.<br>Effect is reduced as the Weapon Rarity increases."
    },
    "PN17": {
        name_en: "Slayer/Dragonkin",
        name_jp: "スレイヤー／龍族種",
        name_glen: "Slayer: Draconian",
        effect_en: "Boost damage against Dragonkin. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "龍族種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Draconians. Effect is reduced as the Weapon Rarity increases."
    },
    "PO18": {
        name_en: "Slayer/Luminmech",
        name_jp: "スレイヤー／閃機種",
        name_glen: "Slayer: Luminmech",
        effect_en: "Boost damage against Luminmech. Effect is reduced as the Weapon Rarity increases.",
        effect_jp: "閃機種のエネミーを攻撃時威力が上昇。ただし武器のレアリティが高くなるほど威力の上昇量は減少。",
        effect_glen: "Boost damage against Luminmechs. Effect is reduced as the Weapon Rarity increases."
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
        name_glen: "Reverie Catalyst",
        effect_en: "HP(+10),<br>PP(+1)",
        effect_jp: "HP(+10),<br>PP(+1)",
        effect_glen: "HP(+10),<br>PP(+1)"
    },
    "VJ04": {
        name_en: "Glare Catalyst",
        name_jp: "グレア・カタリスト",
		    name_glen: "Glare Catalyst",
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
        name_glen: "Augment Guidance",
        effect_en: "Increase Special Ability Addition success rate by 5%.",
        effect_jp: "特殊能力の成功率を5％上昇させる。",
        effect_glen: "Increases the probability of Augments successfully affixed to this equipment by 5%."
    },
    "VK05": {
        name_en: "NT Weapon Booster",
        name_jp: "ＮＴウェポンブースト",
        name_glen: "Weapon Booster",
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
        name_glen: "Sentence Receptor",
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
        name_glen: "Mark Receptor",
        effect_en: "Allows transfer Mark-type ability.<br>ALL(+10)",
        effect_jp: "マーク系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Allows transfer Mark-type ability.<br>ALL(+10)"
    },
    "XJ01": {
        name_en: "Divine Receptor",
        name_jp: "ディバインレセプター",
        name_glen: "Divine Receptor",
        effect_en: "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)",
        effect_jp: "ディバイン系特殊能力の合成成功率を大幅に上昇。<br>ALL(+10)",
        effect_glen: "Greatly increases affix rate of Divine-type ability.<br>ALL(+10)"
    },
	"XK01": {
        name_en: "Exceed Receptor",
        name_jp: "イクシードレセプター",
		name_glen: "Exceed Receptor",
        effect_en: "Greatly increases affix rate of Exceed-type ability.<br>ALL(+10)",
        effect_jp: "イクシード系特殊能力の継承成功率を大幅に上昇.<br>ALL(+10)",
		effect_glen: "Greatly increases affix rate of Exceed-type ability.<br>ALL(+10)"
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
        name_glen: "Grand Stamina",
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
        name_glen: "Grand Might",
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
        name_glen: "Grand Precision",
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
        name_glen: "Grand Casting",
        effect_en: "T-ATK(+60),HP(+20),PP(+5)",
        effect_jp: "法撃力(+50),HP(+20),PP(+5)",
        effect_glen: "TEC Pwr(+60),HP(+20),PP(+5)"
    },
    "XI60": {
        name_en: "Grand Spirita",
        name_jp: "グランド・スピリタ",
        name_glen: "Grand Spirit",
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