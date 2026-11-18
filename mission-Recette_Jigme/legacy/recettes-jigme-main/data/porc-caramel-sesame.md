---
schema: recette-web-jigme/v2
slug: porc-caramel-sesame
title: Porc caramel sésame
lang: fr
description: "Porc caramel sésame : recette chinoise avec escalope de porc, sucre et sauce soja, pour 4 personnes. Version maison. Facile à suivre."
cuisine: chinoise
category: salé
tags:
- salé
- porc
- caramel
- sésame
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/porc-caramel-sesame.webp
  alt: Porc caramel sésame
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/porc-caramel-sesame.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - gluten
    swaps:
    - from: sauce soja
      to: tamari sans gluten
      note:
    - from: seitan ou tempeh
      to: tofu ferme
      note:
    note: 'Gluten : sauce soja → tamari sans gluten ; seitan ou tempeh → tofu ferme.'
  sans_lactose:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lait.
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
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: seitan ou tempeh
      to: seitan
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
  sans_sesame:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sesame
    swaps:
    - from: sésame
      to: graines de courge
      note:
    - from: tahini
      to: purée de tournesol
      note:
    note: Remplacer sésame.
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
  Porc laqué au sucre caramélisé, sésame : famille des porcs au caramel d’Asie
  de l’Est et du Sud-Est (Viêt Nam, Chine). Ce n’est pas le char siu cantonais
  (porc rôti à la marinade sucrée). Plat de maison, sauce réduite à la casserole.
fun_facts:
- text: >
    Le sucre d’abord, jusqu’à l’ambre : trop clair, c’est un sirop ; trop noir,
    c’est brûlé.
  source_name: Usage
  source_url:
- text: >
    Le sésame se jette à la fin : trop tôt, il brûle dans le caramel.
  source_name: Usage
  source_url:
wines:
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — le caramel et le porc, sans un tannat.
- name: Alsace Riesling
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le sucré-salé, acidité nette.
- name: Chinon
  producer: Charles Joguet
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc, poivron — le porc, tanin vif.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: escalope de porc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: graines de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Coupez grossièrement des escalopes de porc. Assaisonnez le tout de sel, de poivre et
      mélangez avec vos mains. Faites chauffer une poêle à feu vif avec de l’huile végétale.
      Une fois chaude, déposez-y le porc et laissez le cuire.
    - Cuisson. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau.
    - Mélange. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez.
    - Cuisson. Déposez le porc dans le caramel, mélangez et laissez mijoter quelques minutes. À l’aide
      d’un écumoire, retirez le porc du caramel et déposez-le dans un bol.
    - 'Finition. Saupoudrez-le porc caramel généreusement de graines de sésame et mélangez délicatement.
      Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez
      ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former
      un joli tas tout rond. Versez une petite quantité de porc caramel et saupoudrez le tout
      de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion ! Bonne
      dégustation !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement des escalopes de porc. Assaisonnez le tout de sel, de poivre et mélangez avec vos mains. Faites chauffer une poêle à feu vif avec de l’huile végétale. Une fois chaude, déposez-y le porc et laissez le cuire."
      - "Cuisson. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau."
      - "Mélange. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez."
      - "Cuisson. Déposez le porc dans le caramel, mélangez et [[mijoter|laissez mijoter]] quelques minutes. À l’aide d’un écumoire, retirez le porc du caramel et déposez-le dans un bol."
      - "Finition. Saupoudrez-le porc caramel généreusement de graines de sésame et mélangez délicatement. Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former un joli tas tout rond. Versez une petite quantité de porc caramel et saupoudrez le tout de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion ! Bonne dégustation !"
      pro:
      - "Couper grossièrement des escalopes de porc. Assaisonner de sel et de poivre. Mélanger à la main. Chauffer une poêle à feu vif avec de l’huile végétale. Déposer le porc. Laisser cuire."
      - "Réaliser un caramel brun : sucre coupé avec un peu d’eau, casserole."
      - "Incorporer de la sauce soja au caramel. Mélanger."
      - "Déposer le porc dans le caramel. Mélanger. Mijoter quelques minutes. Retirer le porc à l’écumoire. Réserver dans un bol."
      - "Saupoudrer généreusement de graines de sésame. Mélanger délicatement. Dresser le riz au verre, au centre de l’assiette. Verser un peu de porc caramel. Saupoudrer de coriandre (suggestion)."
      cavernes:
      - "Préparation. Escalopes porc, couper grossièrement. Sel, poivre, assaisonner. Mains, mélanger. Poêle feu vif, huile végétale, chauffer. Chaude, porc, déposer. Cuire."
      - "Cuisson. Caramel brun, casserole. Sucre, peu eau, couper."
      - "Mélange. Prêt, sauce soja, caramel, incorporer. Mélanger."
      - "Cuisson. Porc, caramel, déposer. Mélanger. Quelques minutes, mijoter. Écumoire, porc, caramel, retirer. Bol, déposer."
      - "Finition. Porc caramel, graines sésame, saupoudrer généreusement. Mélanger délicatement. Verre eau, riz, mettre. Verre, milieu assiette, placer. Intérieur, glisser. Joli tas rond. Petite quantité porc caramel, verser. Coriandre, saupoudrer. Suggestion. Bonne dégustation."
    kcal_per_serving: 218
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
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: graines de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Coupez le seitan ou le tempeh en morceaux. Assaisonnez de sel et de poivre. Faites chauffer une poêle à feu vif avec de l’huile végétale.
      Une fois chaude, déposez-y le seitan et laissez-le cuire.
    - Cuisson. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau.
    - Mélange. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez.
    - Cuisson. Déposez le seitan dans le caramel, mélangez et laissez mijoter quelques minutes. À l’aide d’un écumoire, retirez-le et déposez-le dans un bol.
    - 'Finition. Saupoudrez généreusement de graines de sésame et mélangez délicatement.
      Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez
      ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former
      un joli tas tout rond. Versez une petite quantité de seitan caramélisé et saupoudrez le tout
      de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion ! Bonne
      dégustation !'
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez le seitan ou le tempeh en morceaux. Assaisonnez de sel et de poivre. Faites chauffer une poêle à feu vif avec de l’huile végétale. Une fois chaude, déposez-y le seitan et laissez-le cuire."
      - "Cuisson. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau."
      - "Mélange. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez."
      - "Cuisson. Déposez le seitan dans le caramel, mélangez et [[mijoter|laissez mijoter]] quelques minutes. À l’aide d’un écumoire, retirez-le et déposez-le dans un bol."
      - "Finition. Saupoudrez généreusement de graines de sésame et mélangez délicatement. Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former un joli tas tout rond. Versez une petite quantité de seitan caramélisé et saupoudrez le tout de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion ! Bonne dégustation !"
      pro:
      - "Couper le seitan ou le tempeh en morceaux. Assaisonner de sel et de poivre. Chauffer une poêle à feu vif avec de l’huile végétale. Déposer le seitan. Laisser cuire."
      - "Réaliser un caramel brun : sucre coupé avec un peu d’eau, casserole."
      - "Incorporer de la sauce soja au caramel. Mélanger."
      - "Déposer le seitan dans le caramel. Mélanger. Mijoter quelques minutes. Retirer à l’écumoire. Réserver dans un bol."
      - "Saupoudrer généreusement de graines de sésame. Mélanger délicatement. Dresser le riz au verre, au centre de l’assiette. Verser un peu de seitan caramélisé. Saupoudrer de coriandre (suggestion)."
      cavernes:
      - "Cuisson. Seitan ou tempeh, morceaux. Sel, poivre, assaisonner. Poêle feu vif, huile végétale, chauffer. Chaude, seitan, déposer. Cuire."
      - "Cuisson. Caramel brun, casserole. Sucre, peu eau, couper."
      - "Mélange. Prêt, sauce soja, caramel, incorporer. Mélanger."
      - "Cuisson. Seitan, caramel, déposer. Mélanger. Quelques minutes, mijoter. Écumoire, retirer. Bol, déposer."
      - "Finition. Graines sésame, saupoudrer généreusement. Mélanger délicatement. Verre eau, riz, mettre. Verre, milieu assiette, placer. Intérieur, glisser. Joli tas rond. Petite quantité seitan caramélisé, verser. Coriandre, saupoudrer. Suggestion. Bonne dégustation."
    kcal_per_serving: 285
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 285
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
    - poisson
    - soja
    - sesame
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: graines de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Coupez grossièrement des escalopes de porc. Assaisonnez le tout de sel, de poivre et
      mélangez avec vos mains. Faites chauffer une poêle à feu vif avec de l’huile végétale.
      Une fois chaude, déposez-y le porc et laissez le cuire.
    - Cuisson. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau.
    - Mélange. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez.
    - Cuisson. Déposez le porc dans le caramel, mélangez et laissez mijoter quelques minutes. À l’aide
      d’un écumoire, retirez le porc du caramel et déposez-le dans un bol.
    - 'Finition. Saupoudrez-le porc caramel généreusement de graines de sésame et mélangez délicatement.
      Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez
      ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former
      un joli tas tout rond. Versez une petite quantité de porc caramel et saupoudrez le tout
      de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion ! Bonne
      dégustation !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez grossièrement des escalopes de porc. Assaisonnez le tout de sel, de poivre et mélangez avec vos mains. Faites chauffer une poêle à feu vif avec de l’huile végétale. Une fois chaude, déposez-y le porc et laissez le cuire."
      - "Cuisson. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau."
      - "Mélange. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez."
      - "Cuisson. Déposez le porc dans le caramel, mélangez et [[mijoter|laissez mijoter]] quelques minutes. À l’aide d’un écumoire, retirez le porc du caramel et déposez-le dans un bol."
      - "Finition. Saupoudrez-le porc caramel généreusement de graines de sésame et mélangez délicatement. Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former un joli tas tout rond. Versez une petite quantité de porc caramel et saupoudrez le tout de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion ! Bonne dégustation !"
      pro:
      - "Couper grossièrement des escalopes de porc. Assaisonner de sel et de poivre. Mélanger à la main. Chauffer une poêle à feu vif avec de l’huile végétale. Déposer le porc. Laisser cuire."
      - "Réaliser un caramel brun : sucre coupé avec un peu d’eau, casserole."
      - "Incorporer de la sauce soja au caramel. Mélanger."
      - "Déposer le porc dans le caramel. Mélanger. Mijoter quelques minutes. Retirer le porc à l’écumoire. Réserver dans un bol."
      - "Saupoudrer généreusement de graines de sésame. Mélanger délicatement. Dresser le riz au verre, au centre de l’assiette. Verser un peu de porc caramel. Saupoudrer de coriandre (suggestion)."
      cavernes:
      - "Préparation. Escalopes porc, couper grossièrement. Sel, poivre, assaisonner. Mains, mélanger. Poêle feu vif, huile végétale, chauffer. Chaude, porc, déposer. Cuire."
      - "Cuisson. Caramel brun, casserole. Sucre, peu eau, couper."
      - "Mélange. Prêt, sauce soja, caramel, incorporer. Mélanger."
      - "Cuisson. Porc, caramel, déposer. Mélanger. Quelques minutes, mijoter. Écumoire, porc, caramel, retirer. Bol, déposer."
      - "Finition. Porc caramel, graines sésame, saupoudrer généreusement. Mélanger délicatement. Verre eau, riz, mettre. Verre, milieu assiette, placer. Intérieur, glisser. Joli tas rond. Petite quantité porc caramel, verser. Coriandre, saupoudrer. Suggestion. Bonne dégustation."
    kcal_per_serving: 218
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Porc caramel sésame

![[porc-caramel-sesame.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `Cuisine/Recettes/Web/porc-caramel-sesame.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/porc-caramel-sesame]]

## Ingrédients (4 personnes)

- 4 escalope de porc
-  huile végétale
- 150 g de sucre
- 20 cl de sauce soja
- 20 g de graines de sésame

## Préparation

1. Coupez grossièrement des escalopes de porc. Assaisonnez le tout de sel, de poivre et mélangez avec vos mains.

Faites chauffer une poêle à feu vif avec de l’huile végétale. Une fois chaude, déposez-y le porc et laissez le cuire.
2. Réalisez un caramel brun dans une casserole avec du sucre coupé avec un peu d’eau.
3. Une fois prêt, incorporez de la sauce soja dans votre caramel et mélangez.
4. Déposez le porc dans le caramel, mélangez et laissez mijoter quelques minutes.

À l’aide d’un écumoire, retirez le porc du caramel et déposez-le dans un bol.
5. Saupoudrez-le porc caramel généreusement de graines de sésame et mélangez délicatement.

 
 

 
 Pour le dressage rien de plus facile : prenez un verre d’eau et mettez-y du riz, placez ensuite le verre au milieu d’une assiette et faites glisser l’intérieur pour former un joli tas tout rond. Versez une petite quantité de porc caramel et saupoudrez le tout de coriandre pour une petite touche de vert, mais ceci n’est qu’une suggestion !

Bonne dégustation !
