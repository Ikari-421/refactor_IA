---
schema: recette-web-jigme/v2
slug: salade-de-ble
title: Salade de blé
lang: fr
description: "Salade de blé : recette libanaise avec blé, concombre et tomates cerises, pour 4 personnes. Version maison. Facile à suivre."
cuisine: libanaise
category: salé
tags:
- salé
- salade
- végane
- rapide
image:
  url:
  alt: Salade de blé
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-de-ble.md
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
    impossible: true
    redirect_variant:
    clears:
    - gluten
    swaps: []
    note: 'Contient gluten (blé) : pas d’adaptation fiable.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans poisson.
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de Xérès
      to: jus de citron
      note: Acidité un peu différente.
    note: Vinaigre de Xérès → citron.
house_toggle:
house_options: []
histoire: >
  Salade de grains de blé (ou d’épeautre) cuits, légumes, herbes, vinaigrette.
  Cousine du taboulé (boulgour) plus que d’une salade niçoise. Plat d’été de
  maison, pas une recette régionale datée.
fun_facts:
- text: >
    Le blé se cuit comme un riz, puis s’égoutte froid : trop d’eau, la vinaigrette
    se dilue.
  source_name: Usage
  source_url:
- text: >
    Menthe et citron rapprochent du taboulé ; sans herbes, c’est une salade de
    céréales.
  source_name: Usage
  source_url:
wines:
- name: Côtes de Provence
  producer: Château de Roquefort
  origin: Roquefort-la-Bédoule, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — le citron et les herbes, sans un rouge.
- name: Picpoul de Pinet
  producer: Cave de l'Ormarine
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — la vinaigrette, acidité nette.
- name: Tavel
  producer: Domaine Lafond Roc-Epine
  origin: Tavel, Rhône
  grapes: grenache
  award:
  why: Rosé de saignée — si la salade est plus tomate que menthe.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 0
      rest_min: 0
      total_min: 20
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: blé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: tomates cerises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: olive noire
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de Xérès
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites bouillir de l’eau et ajoutez-y le blé cru. Laissez-le cuire le temps indiqué
      sur le paquet (environ 10 minutes).
    - Cuisson. Coupez les légumes en morceaux (concombre, tomates cerises, olives). On recommande de
      vider le concombre à l’aide d’une cuillère pour qu’il ne rende pas trop d’eau.
    - Cuisson. Lorsque le blé est cuit et refroidit, disposez-le dans le fond de votre plat et ajoutez
      les légumes au-dessus.
    - Assaisonnez selon vos goûts. Ici, on a opté pour un mélange d’huile d’olive et de vinaigre
      de Xérès. Salez et poivrez, puis parsemez votre salade de basilic haché. À déguster
      bien frais ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites bouillir de l’eau et ajoutez-y le blé cru. Laissez-le cuire le temps indiqué sur le paquet (environ 10 minutes)."
      - "Cuisson. Coupez les légumes en morceaux (concombre, tomates cerises, olives). Videz le concombre à l’aide d’une cuillère pour qu’il ne rende pas trop d’eau."
      - "Cuisson. Lorsque le blé est cuit et refroidi, disposez-le dans le fond de votre plat et ajoutez les légumes au-dessus."
      - "Assaisonnez selon vos goûts : un mélange d’huile d’olive et de vinaigre de Xérès. Salez et poivrez, puis parsemez votre salade de basilic haché. Dégustez bien frais."
      pro:
      - "Faire bouillir de l’eau. Ajouter le blé cru. Cuire le temps indiqué sur le paquet (environ 10 minutes)."
      - "Couper les légumes en morceaux (concombre, tomates cerises, olives). Vider le concombre à la cuillère pour limiter l’eau."
      - "Blé cuit et refroidi : disposer au fond du plat. Ajouter les légumes au-dessus."
      - "Assaisonner : huile d’olive et vinaigre de Xérès. Saler, poivrer. Parsemer de basilic haché. Servir bien frais."
      cavernes:
      - "Cuisson. Eau, bouillir. Blé cru, ajouter. Cuire temps paquet, environ 10 min."
      - "Cuisson. Légumes, morceaux : concombre, tomates cerises, olives. Concombre, vider cuillère, limiter eau."
      - "Cuisson. Blé cuit, refroidi, fond plat. Légumes, dessus."
      - "Huile olive, vinaigre Xérès, mélange. Saler, poivrer. Basilic haché, parsemer. Frais."
    kcal_per_serving: 84
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 84
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - sulfites
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 0
      rest_min: 0
      total_min: 20
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: blé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: concombre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: tomates cerises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: olive noire
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de Xérès
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: basilic
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites bouillir de l’eau et ajoutez-y le blé cru. Laissez-le cuire le temps indiqué
      sur le paquet (environ 10 minutes).
    - Cuisson. Coupez les légumes en morceaux (concombre, tomates cerises, olives). On recommande de
      vider le concombre à l’aide d’une cuillère pour qu’il ne rende pas trop d’eau.
    - Cuisson. Lorsque le blé est cuit et refroidit, disposez-le dans le fond de votre plat et ajoutez
      les légumes au-dessus.
    - Assaisonnez selon vos goûts. Ici, on a opté pour un mélange d’huile d’olive et de vinaigre
      de Xérès. Salez et poivrez, puis parsemez votre salade de basilic haché. À déguster
      bien frais ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites bouillir de l’eau et ajoutez-y le blé cru. Laissez-le cuire le temps indiqué sur le paquet (environ 10 minutes)."
      - "Cuisson. Coupez les légumes en morceaux (concombre, tomates cerises, olives). Videz le concombre à l’aide d’une cuillère pour qu’il ne rende pas trop d’eau."
      - "Cuisson. Lorsque le blé est cuit et refroidi, disposez-le dans le fond de votre plat et ajoutez les légumes au-dessus."
      - "Assaisonnez selon vos goûts : un mélange d’huile d’olive et de vinaigre de Xérès. Salez et poivrez, puis parsemez votre salade de basilic haché. Dégustez bien frais."
      pro:
      - "Faire bouillir de l’eau. Ajouter le blé cru. Cuire le temps indiqué sur le paquet (environ 10 minutes)."
      - "Couper les légumes en morceaux (concombre, tomates cerises, olives). Vider le concombre à la cuillère pour limiter l’eau."
      - "Blé cuit et refroidi : disposer au fond du plat. Ajouter les légumes au-dessus."
      - "Assaisonner : huile d’olive et vinaigre de Xérès. Saler, poivrer. Parsemer de basilic haché. Servir bien frais."
      cavernes:
      - "Cuisson. Eau, bouillir. Blé cru, ajouter. Cuire temps paquet, environ 10 min."
      - "Cuisson. Légumes, morceaux : concombre, tomates cerises, olives. Concombre, vider cuillère, limiter eau."
      - "Cuisson. Blé cuit, refroidi, fond plat. Légumes, dessus."
      - "Huile olive, vinaigre Xérès, mélange. Saler, poivrer. Basilic haché, parsemer. Frais."
    kcal_per_serving: 84
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 84
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade de blé
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-de-ble]]

## Ingrédients (4 personnes)

- 300 g de blé
- 1 concombre
- 70 g de tomates cerises
-  olive noire
-  huile d'olive
-  vinaigre de Xérès
-  basilic

## Préparation

1. Faites bouillir de l’eau et ajoutez-y le blé cru. Laissez-le cuire le temps indiqué sur le paquet (environ 10 minutes).
2. Coupez les légumes en morceaux (concombre, tomates cerises, olives). On recommande de vider le concombre à l’aide d’une cuillère pour qu’il ne rende pas trop d’eau.
3. Lorsque le blé est cuit et refroidit, disposez-le dans le fond de votre plat et ajoutez les légumes au-dessus.
4. Assaisonnez selon vos goûts. Ici, on a opté pour un mélange d’huile d’olive et de vinaigre de Xérès. Salez et poivrez, puis parsemez votre salade de basilic haché.

 
 

 
 À déguster bien frais ! Bon appétit !
