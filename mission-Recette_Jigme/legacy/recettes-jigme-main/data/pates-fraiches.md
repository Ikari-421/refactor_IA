---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: pates-fraiches
title: Pâtes fraîches
lang: fr
description: "Pâtes fraîches : recette italienne avec farine 00, œufs et sel fin, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: italienne
category: salé
tags:
- salé
- Italie
- pâtes
- œufs
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pates-fraiches.webp
  alt: Pâtes fraîches
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/pates-fraiches.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
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
    - from: farine 00
      to: mix farine sans gluten + psyllium
      note:
    - from: Farine pour le plan
      to: mix farine sans gluten + psyllium
      note:
    - from: semoule fine de blé dur
      to: farine de riz
      note:
    note: 'Gluten : farine 00 → mix farine sans gluten + psyllium ; Farine pour le plan →
      mix farine sans gluten + psyllium ; semoule fine de blé dur → farine de riz.'
  sans_lactose:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (œufs) : pas d’adaptation fiable.'
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
house_toggle: ma_recette
house_options:
- ma_recette
histoire: Les pâtes fraîches d’Émilie-Romagne se font à la farine 00 et aux œufs, laminées,
  pas extrudées. En France, « pâtes fraîches aux œufs frais » suppose notamment ≥ 140 g d’œufs
  / kg de semoule et plus de 12 % d’humidité. Jigmé, lui, est en 00 + jaunes (riche) ou farine
  + 3 œufs + eau (light) — deux écoles dans la même cuisine.
fun_facts:
- text: '140 g d’œufs / kg de semoule : seuil français de l’appellation « pâtes aux œufs ».'
  source_name: Wikipedia FR, Pâtes alimentaires
  source_url: https://fr.wikipedia.org/wiki/P%C3%A2tes_alimentaires
- text: Laminage, pas filière. Feuille ≈ 1 mm, puis tagliatelle / spaghetti.
  source_name: Wikipedia FR, Pâtes alimentaires
  source_url: https://fr.wikipedia.org/wiki/P%C3%A2tes_alimentaires
- text: 'Jaunes seuls : couleur, gras, pâte plus courte — la version riche de Jigmé.'
  source_name:
  source_url:
- text: 'Cuisson 3 min max : pâte fraîche, pas sèche.'
  source_name:
  source_url:
wines:
- name: Soave Classico
  producer: Pieropan
  origin: Soave Classico, Vénétie
  grapes: garganega
  award:
  why: 'amande, agrume, sec : pâte à l’œuf, beurre, sauge.'
- name: Barbera d’Asti
  producer: Vietti
  origin: Asti, Piémont
  grapes: barbera
  award:
  why: 'acidité, cerise : ragù, tomate, pâte fraîche.'
- name: Chianti Classico
  producer: Fontodi
  origin: Panzano, Chianti Classico
  grapes: sangiovese
  award:
  why: 'cerise, tanin moyen : tagliatelle, sauce, parmesan.'
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 3
      rest_min: 60
      total_min: 90
    equipment:
    - plan
    - laminoir
    - casserole
    substitutions:
    - from: '00'
      to: T55
      note:
    - from: 1 jaune en plus si les œufs sont petits
      to:
      note:
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: farine 00
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: huile d’olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: sel fin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Farine pour le plan
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Puits. Cassez les œufs au centre, ajoutez l’huile et le sel. Incorporez, puis pétrissez 10 min, jusqu’à obtenir une pâte lisse."
    - "Repos. Filmez et réservez au réfrigérateur 1 h."
    - "Cuisson. Passez au laminoir de 6 mm à 1 mm. Coupez en tagliatelle, ou en spaghetti."
    - "Cuisson. Plongez dans une eau bouillante salée, 3 min au plus."
    - "Finition. Réservez des portions de 120–130 g au congélateur, crues et farinées."
    steps_niveaux:
      amateur:
      - "Puits. Cassez les œufs au centre, ajoutez l’huile et le sel. Incorporez, puis pétrissez 10 min, jusqu’à obtenir une pâte lisse."
      - "Repos. Filmez et réservez au réfrigérateur 1 h."
      - "Cuisson. Passez au laminoir de 6 mm à 1 mm. Coupez en tagliatelle, ou en spaghetti."
      - "Cuisson. Plongez dans une eau bouillante salée, 3 min au plus."
      - "Finition. Réservez des portions de 120–130 g au congélateur, crues et farinées."
      pro:
      - "Casser les œufs au centre. Ajouter l’huile et le sel. Incorporer, pétrir 10 min jusqu’à pâte lisse."
      - "Filmer. Réserver au réfrigérateur 1 h."
      - "Passer au laminoir de 6 mm à 1 mm. Couper en tagliatelle ou spaghetti."
      - "Plonger dans une eau bouillante salée, 3 min au plus."
      - "Réserver des portions de 120–130 g au congélateur, crues et farinées."
      cavernes:
      - "Puits. Œufs centre, casser. Huile, sel, ajouter. Incorporer. Pétrir 10 min. Pâte lisse."
      - "Repos. Filmer. Frigo 1 h."
      - "Cuisson. Laminoir 6 mm à 1 mm. Couper tagliatelle, ou spaghetti."
      - "Cuisson. Eau bouillante salée, plonger, 3 min maximum."
      - "Finition. Portions 120–130 g, congélateur, crues farinées."
    kcal_per_serving: 450
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 450
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - gluten
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 3
      rest_min: 30
      total_min: 58
    equipment:
    - saladier
    - laminoir
    substitutions:
    - from: semoule de blé dur fine 50/50 avec 00
      to:
      note:
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine 00
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: semoule fine de blé dur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: eau tiède
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: huile d’olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pétrir 10 min. Laissez ensuite reposer 30 min."
    - "Laminoir. Passez la pâte au laminoir, puis faites cuire 3 min."
    steps_niveaux:
      amateur:
      - "Pétrir 10 min. Pétrissez 10 min. Laissez ensuite reposer 30 min."
      - "Laminoir. Passez la pâte au laminoir, puis faites cuire 3 min."
      pro:
      - "Pétrir 10 min. Reposer 30 min."
      - "Passer au laminoir. Cuire 3 min."
      cavernes:
      - "Pétrir 10 min. Pétrir 10 min. Repos 30 min."
      - "Laminoir. Pâte, laminoir. Cuire 3 min."
    kcal_per_serving: 370
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 450
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 3
      rest_min: 60
      total_min: 73
    equipment:
    - plan de travail
    - laminoir
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: farine 00
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: jaunes d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Sel
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Formez un puits avec la farine, puis y déposez les œufs et les autres ingrédients."
    - "Cuisson. Incorporez progressivement, puis pétrissez 10 minutes."
    - "Repos. Laissez reposer 1 h au réfrigérateur."
    - "Cuisson. Étalez au laminoir (tagliatelles, spaghetti…)."
    - "Finition. Faites cuire 3 minutes au maximum."
    steps_niveaux:
      amateur:
      - "Préparation. Formez un puits avec la farine, puis y déposez les œufs et les autres ingrédients."
      - "Cuisson. Incorporez progressivement, puis pétrissez 10 minutes."
      - "Repos. Laissez reposer 1 h au réfrigérateur."
      - "Cuisson. Étalez au laminoir (tagliatelles, spaghetti…)."
      - "Finition. Faites cuire 3 minutes au maximum."
      pro:
      - "Former un puits de farine. Y déposer les œufs et les autres ingrédients."
      - "Incorporer progressivement. Pétrir 10 minutes."
      - "Reposer 1 h au réfrigérateur."
      - "Étaler au laminoir (tagliatelles, spaghetti…)."
      - "Cuire 3 minutes au maximum."
      cavernes:
      - "Préparation. Farine, puits. Œufs, autres ingrédients, déposer."
      - "Cuisson. Incorporer progressivement. Pétrir 10 minutes."
      - "Repos. Frigo 1 h."
      - "Cuisson. Laminoir, étaler (tagliatelles, spaghetti…)."
      - "Finition. Cuire 3 minutes maximum."
    kcal_per_serving: 720
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "film alimentaire", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Pâtes fraîches

![[pates-fraiches.webp]]

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Salé/pates-fraiches.md).

**Catégorie :** salé

## Ingrédients (4 personnes)

- 400 g de farine 00
- 4 œufs
- 10 g d’huile d’olive
- 5 g de sel fin
- Farine pour le plan

## Préparation

1. Puits. Cassez les œufs au centre, ajoutez l’huile et le sel. Incorporez, puis pétrissez 10 min, jusqu’à obtenir une pâte lisse.
2. Repos. Filmez et réservez au réfrigérateur 1 h.
3. Cuisson. Passez au laminoir de 6 mm à 1 mm. Coupez en tagliatelle, ou en spaghetti.
4. Cuisson. Plongez dans une eau bouillante salée, 3 min au plus.
5. Finition. Réservez des portions de 120–130 g au congélateur, crues et farinées.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
