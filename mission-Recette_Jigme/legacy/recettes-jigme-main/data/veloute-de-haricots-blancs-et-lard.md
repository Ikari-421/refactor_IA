---
schema: recette-web-jigme/v2
slug: veloute-de-haricots-blancs-et-lard
title: Velouté de haricots blancs et lard
lang: fr
description: "Velouté de haricots blancs et lard : recette française avec haricots blancs secs, lard fumé et carotte, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- soupe
- haricots
- lard
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/veloute-de-haricots-blancs-et-lard.jpg
  alt: Velouté de haricots blancs et lard
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/veloute-de-haricots-blancs-et-lard.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
diet_toggles:
- vegetarien
- vegan
- pesco
allergen_toggles:
- sans_gluten
- sans_lactose
- sans_produits_laitiers
- sans_oeufs
- sans_fruits_a_coque
- sans_celeri
- sans_moutarde
- sans_mollusques
- sans_crustaces
- sans_poisson
- sans_lupin
- sans_soja
- sans_arachides
- sans_sesame
- sans_sulfites
constraint_layers:
  sans_gluten:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Allergie lait : pas de substitut honnête listé.'
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans fruits à coque.
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans mollusques.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
  sans_poisson:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (fumet de poisson) : pas d’adaptation fiable.'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : tofu fumé → pois chiches rôtis ; crème de soja ou avoine → crème d''avoine.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: >
  Velouté : soupe liée (roux ou mixage), haricots blancs, lard. Les soupes de
  haricots existent partout en Europe. Plat d’hiver de maison, pas une recette
  d’auteur.
fun_facts:
- text: >
    Les haricots secs se trempent ; trop peu cuits, le mixage reste granuleux.
  source_name: Usage
  source_url:
- text: >
    Le lard se rissole à part : trop tôt dans la purée, il ramollit.
  source_name: Usage
  source_url:
wines:
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — le lard, tanin court.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — le velouté, sans un vin de garde.
- name: Mâcon-Villages
  producer: Cave de Lugny
  origin: Mâcon, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc souple — si l’on veut un blanc, le haricot.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 120
      rest_min: 110
      total_min: 260
    equipment: &id002
    - casserole
    - saladier
    - mixeur
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: haricots blancs secs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: lard fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: gousse
      item: ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: clou de girofle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fond blanc de volaille
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Retirez le gras et le cartilage du morceau de lard fumé, puis coupez-le en lardons."
    - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
    - "Cuisson. Faites revenir le lard fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
    - "Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier."
    - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond blanc de volaille à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
    - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
    - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
    - "Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fond blanc de volaille, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
    - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques lardons. Découvrez aussi notre recette de velouté de cresson."
    steps_niveaux:
      amateur:
      - "Préparation. Retirez le gras et le cartilage du morceau de lard fumé, puis coupez-le en lardons."
      - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
      - "Cuisson. Faites revenir le lard fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
      - "Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier."
      - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond blanc de volaille à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
      - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
      - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fond blanc de volaille, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
      - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques lardons. Découvrez aussi notre recette de velouté de cresson."
      pro:
      - "Retirer le gras et le cartilage du morceau de lard fumé, puis le couper en lardons."
      - "Éplucher l’oignon, la carotte et l’ail. Couper l’oignon en deux. Piquer des clous de girofle dans une moitié. Couper l’autre moitié en quatre. Couper la carotte en quatre et l’ail en deux."
      - "Faire revenir le lard fumé dans une grande casserole à feu vif. Mélanger régulièrement et débarrasser lorsqu’il est bien coloré."
      - "Dans la même casserole, faire revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier."
      - "Ajouter les haricots blancs secs, compléter avec du fond blanc de volaille à hauteur. Couvrir et laisser cuire entre 2 h et 2 h 30."
      - "En fin de cuisson, retirer le laurier et le thym. À l’écumoire, transvaser les ingrédients cuits dans un mixeur. Mixer jusqu’à un mélange homogène."
      - "Passer le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Dans la cuve du mixeur, ajouter la crème liquide et un peu de fond blanc de volaille, puis mixer. Doser selon le goût, plus ou moins liquide ou crémeux."
      - "Passer une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dresser dans un bol avec quelques lardons."
      cavernes:
      - "Préparation. Gras, cartilage, lard fumé, retirer. Lardons, couper."
      - "Cuisson. Oignon, carotte, ail, éplucher. Oignon, deux, couper. Clous girofle, moitié, piquer. Autre moitié, quatre, couper. Carotte, quatre, couper. Ail, deux, couper."
      - "Cuisson. Lard fumé, grande casserole, feu vif, faire revenir. Régulier, mélanger. Bien coloré, débarrasser."
      - "Cuisson. Même casserole, légumes, noisette beurre, peu thym, quelques feuilles laurier, faire revenir."
      - "Cuisson. Haricots blancs secs, casserole, ajouter. Fond blanc volaille, hauteur, compléter. Couvrir. 2 h à 2 h 30, cuire."
      - "Cuisson. Fin cuisson, laurier, thym, retirer. Écumoire, ingrédients cuits, mixeur, transvaser. Homogène, mixer."
      - "Cuisson. Jus restant casserole, chinois, passer. Impuretés, retirer."
      - "Mixage. Cuve mixeur, crème liquide, peu fond blanc volaille, ajouter. Mixer. Selon goûts, plus moins liquide ou crémeux, doser."
      - "Finition. Velouté, chinois, dernière fois, passer. Petits bouts peau haricots, retirer. Bol, quelques lardons, dresser. Recette velouté cresson."
    kcal_per_serving: 395
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: haricots blancs secs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: gousse
      item: ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: clou de girofle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fond de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Coupez le tofu fumé en dés."
    - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
    - "Cuisson. Faites revenir le tofu fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
    - "Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier."
    - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond de légumes à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
    - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
    - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
    - "Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fond de légumes, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
    - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques dés de tofu fumé. Découvrez aussi notre recette de velouté de cresson."
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu fumé en dés."
      - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
      - "Cuisson. Faites revenir le tofu fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
      - "Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier."
      - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond de légumes à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
      - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
      - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fond de légumes, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
      - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques dés de tofu fumé. Découvrez aussi notre recette de velouté de cresson."
      pro:
      - "Couper le tofu fumé en dés."
      - "Éplucher l’oignon, la carotte et l’ail. Couper l’oignon en deux. Piquer des clous de girofle dans une moitié. Couper l’autre moitié en quatre. Couper la carotte en quatre et l’ail en deux."
      - "Faire revenir le tofu fumé dans une grande casserole à feu vif. Mélanger régulièrement et débarrasser lorsqu’il est bien coloré."
      - "Dans la même casserole, faire revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier."
      - "Ajouter les haricots blancs secs, compléter avec du fond de légumes à hauteur. Couvrir et laisser cuire entre 2 h et 2 h 30."
      - "En fin de cuisson, retirer le laurier et le thym. À l’écumoire, transvaser les ingrédients cuits dans un mixeur. Mixer jusqu’à un mélange homogène."
      - "Passer le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Dans la cuve du mixeur, ajouter la crème liquide et un peu de fond de légumes, puis mixer. Doser selon le goût, plus ou moins liquide ou crémeux."
      - "Passer une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dresser dans un bol avec quelques dés de tofu fumé."
      cavernes:
      - "Préparation. Tofu fumé, dés, couper."
      - "Cuisson. Oignon, carotte, ail, éplucher. Oignon, deux, couper. Clous girofle, moitié, piquer. Autre moitié, quatre, couper. Carotte, quatre, couper. Ail, deux, couper."
      - "Cuisson. Tofu fumé, grande casserole, feu vif, faire revenir. Régulier, mélanger. Bien coloré, débarrasser."
      - "Cuisson. Même casserole, légumes, noisette beurre, peu thym, quelques feuilles laurier, faire revenir."
      - "Cuisson. Haricots blancs secs, casserole, ajouter. Fond légumes, hauteur, compléter. Couvrir. 2 h à 2 h 30, cuire."
      - "Cuisson. Fin cuisson, laurier, thym, retirer. Écumoire, ingrédients cuits, mixeur, transvaser. Homogène, mixer."
      - "Cuisson. Jus restant casserole, chinois, passer. Impuretés, retirer."
      - "Mixage. Cuve mixeur, crème liquide, peu fond légumes, ajouter. Mixer. Selon goûts, plus moins liquide ou crémeux, doser."
      - "Finition. Velouté, chinois, dernière fois, passer. Petits bouts peau haricots, retirer. Bol, quelques dés tofu fumé, dresser. Recette velouté cresson."
    kcal_per_serving: 395
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: haricots blancs secs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: gousse
      item: ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: clou de girofle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fond de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Coupez le tofu fumé en dés."
    - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
    - "Cuisson. Faites revenir le tofu fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
    - "Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de margarine végétale, un peu de thym et quelques feuilles de laurier."
    - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond de légumes à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
    - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
    - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
    - "Mixage. Dans la cuve du mixeur, ajoutez la crème de soja ou d’avoine et un peu de fond de légumes, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
    - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques dés de tofu fumé. Découvrez aussi notre recette de velouté de cresson."
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu fumé en dés."
      - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
      - "Cuisson. Faites revenir le tofu fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
      - "Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de margarine végétale, un peu de thym et quelques feuilles de laurier."
      - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond de légumes à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
      - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
      - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Mixage. Dans la cuve du mixeur, ajoutez la crème de soja ou d’avoine et un peu de fond de légumes, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
      - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques dés de tofu fumé. Découvrez aussi notre recette de velouté de cresson."
      pro:
      - "Couper le tofu fumé en dés."
      - "Éplucher l’oignon, la carotte et l’ail. Couper l’oignon en deux. Piquer des clous de girofle dans une moitié. Couper l’autre moitié en quatre. Couper la carotte en quatre et l’ail en deux."
      - "Faire revenir le tofu fumé dans une grande casserole à feu vif. Mélanger régulièrement et débarrasser lorsqu’il est bien coloré."
      - "Dans la même casserole, faire revenir les légumes avec une noisette de margarine végétale, un peu de thym et quelques feuilles de laurier."
      - "Ajouter les haricots blancs secs, compléter avec du fond de légumes à hauteur. Couvrir et laisser cuire entre 2 h et 2 h 30."
      - "En fin de cuisson, retirer le laurier et le thym. À l’écumoire, transvaser les ingrédients cuits dans un mixeur. Mixer jusqu’à un mélange homogène."
      - "Passer le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Dans la cuve du mixeur, ajouter la crème de soja ou d’avoine et un peu de fond de légumes, puis mixer. Doser selon le goût, plus ou moins liquide ou crémeux."
      - "Passer une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dresser dans un bol avec quelques dés de tofu fumé."
      cavernes:
      - "Préparation. Tofu fumé, dés, couper."
      - "Cuisson. Oignon, carotte, ail, éplucher. Oignon, deux, couper. Clous girofle, moitié, piquer. Autre moitié, quatre, couper. Carotte, quatre, couper. Ail, deux, couper."
      - "Cuisson. Tofu fumé, grande casserole, feu vif, faire revenir. Régulier, mélanger. Bien coloré, débarrasser."
      - "Cuisson. Même casserole, légumes, noisette margarine végétale, peu thym, quelques feuilles laurier, faire revenir."
      - "Cuisson. Haricots blancs secs, casserole, ajouter. Fond légumes, hauteur, compléter. Couvrir. 2 h à 2 h 30, cuire."
      - "Cuisson. Fin cuisson, laurier, thym, retirer. Écumoire, ingrédients cuits, mixeur, transvaser. Homogène, mixer."
      - "Cuisson. Jus restant casserole, chinois, passer. Impuretés, retirer."
      - "Mixage. Cuve mixeur, crème soja ou avoine, peu fond légumes, ajouter. Mixer. Selon goûts, plus moins liquide ou crémeux, doser."
      - "Finition. Velouté, chinois, dernière fois, passer. Petits bouts peau haricots, retirer. Bol, quelques dés tofu fumé, dresser. Recette velouté cresson."
    kcal_per_serving: 148
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - poisson
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: haricots blancs secs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: gousse
      item: ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: clou de girofle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fumet de poisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Coupez le tofu fumé en dés."
    - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
    - "Cuisson. Faites revenir le tofu fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
    - "Cuisson. Dans la même casserole, faites revenir les légumes avec un peu de thym et quelques feuilles de laurier."
    - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fumet de poisson à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
    - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
    - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
    - "Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fumet de poisson, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
    - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques dés de tofu fumé. Découvrez aussi notre recette de velouté de cresson."
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu fumé en dés."
      - "Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux."
      - "Cuisson. Faites revenir le tofu fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré."
      - "Cuisson. Dans la même casserole, faites revenir les légumes avec un peu de thym et quelques feuilles de laurier."
      - "Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fumet de poisson à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30."
      - "Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène."
      - "Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fumet de poisson, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux."
      - "Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques dés de tofu fumé. Découvrez aussi notre recette de velouté de cresson."
      pro:
      - "Couper le tofu fumé en dés."
      - "Éplucher l’oignon, la carotte et l’ail. Couper l’oignon en deux. Piquer des clous de girofle dans une moitié. Couper l’autre moitié en quatre. Couper la carotte en quatre et l’ail en deux."
      - "Faire revenir le tofu fumé dans une grande casserole à feu vif. Mélanger régulièrement et débarrasser lorsqu’il est bien coloré."
      - "Dans la même casserole, faire revenir les légumes avec un peu de thym et quelques feuilles de laurier."
      - "Ajouter les haricots blancs secs, compléter avec du fumet de poisson à hauteur. Couvrir et laisser cuire entre 2 h et 2 h 30."
      - "En fin de cuisson, retirer le laurier et le thym. À l’écumoire, transvaser les ingrédients cuits dans un mixeur. Mixer jusqu’à un mélange homogène."
      - "Passer le jus restant dans la casserole au chinois, afin d’en retirer les impuretés."
      - "Dans la cuve du mixeur, ajouter la crème liquide et un peu de fumet de poisson, puis mixer. Doser selon le goût, plus ou moins liquide ou crémeux."
      - "Passer une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dresser dans un bol avec quelques dés de tofu fumé."
      cavernes:
      - "Préparation. Tofu fumé, dés, couper."
      - "Cuisson. Oignon, carotte, ail, éplucher. Oignon, deux, couper. Clous girofle, moitié, piquer. Autre moitié, quatre, couper. Carotte, quatre, couper. Ail, deux, couper."
      - "Cuisson. Tofu fumé, grande casserole, feu vif, faire revenir. Régulier, mélanger. Bien coloré, débarrasser."
      - "Cuisson. Même casserole, légumes, peu thym, quelques feuilles laurier, faire revenir."
      - "Cuisson. Haricots blancs secs, casserole, ajouter. Fumet poisson, hauteur, compléter. Couvrir. 2 h à 2 h 30, cuire."
      - "Cuisson. Fin cuisson, laurier, thym, retirer. Écumoire, ingrédients cuits, mixeur, transvaser. Homogène, mixer."
      - "Cuisson. Jus restant casserole, chinois, passer. Impuretés, retirer."
      - "Mixage. Cuve mixeur, crème liquide, peu fumet poisson, ajouter. Mixer. Selon goûts, plus moins liquide ou crémeux, doser."
      - "Finition. Velouté, chinois, dernière fois, passer. Petits bouts peau haricots, retirer. Bol, quelques dés tofu fumé, dresser. Recette velouté cresson."
    kcal_per_serving: 395
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Velouté de haricots blancs et lard
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/veloute-de-haricots-blancs-et-lard.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/veloute-de-haricots-blancs-et-lard]]

## Ingrédients (4 personnes)

- 350 g de haricots blancs secs
- 250 g de lard fumé
- 1 carotte
- 40 cl de crème liquide
- 3 gousses d'ail
- 1 oignon
-  clou de girofle
-  thym
-  laurier
-  fond blanc de volaille

## Préparation

1. Préparation. Retirez le gras et le cartilage du morceau de lard fumé, puis coupez-le en lardons.
2. Cuisson. Épluchez l’oignon, la carotte et l’ail. Coupez l’oignon en deux. Piquez des clous de girofle dans une moitié. Coupez l’autre moitié en quatre. Coupez également la carotte en quatre et l’ail en deux.
3. Cuisson. Faites revenir le lard fumé dans une grande casserole à feu vif. Mélangez régulièrement et débarrassez-le lorsqu’il est bien coloré.
4. Cuisson. Dans la même casserole, faites revenir les légumes avec une noisette de beurre, un peu de thym et quelques feuilles de laurier.
5. Cuisson. Ajoutez les haricots blancs secs dans la casserole, puis complétez avec du fond blanc de volaille à hauteur. Couvrez et laissez cuire entre 2 h et 2 h 30.
6. Cuisson. En fin de cuisson, retirez le laurier et le thym. À l’aide d’une écumoire, transvasez les ingrédients cuits dans un mixeur. Mixez jusqu’à obtention d’un mélange homogène.
7. Cuisson. Passez le jus restant dans la casserole au chinois, afin d’en retirer les impuretés.
8. Mixage. Dans la cuve du mixeur, ajoutez la crème liquide et un peu de fond blanc de volaille, puis mixez. Dosez selon vos goûts, plus ou moins liquide ou crémeux.
9. Finition. Passez une dernière fois le velouté au chinois pour retirer les petits bouts de peau des haricots. Dressez dans un bol avec quelques lardons. Découvrez aussi notre recette de velouté de cresson.

 
 

 
 Dressez dans un bol avec quelques lardons, un peu de basilic ou de ciboulette ciselée…et dégustez ! Bon appétit !

Découvrez aussi notre recette de velouté de cresson.
