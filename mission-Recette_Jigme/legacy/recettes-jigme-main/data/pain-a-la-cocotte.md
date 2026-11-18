---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: cocotte
slug: pain-a-la-cocotte
title: Pain à la cocotte
lang: fr
description: "Pain à la cocotte : recette française avec farine T65, eau tiède et levure sèche, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- boulangerie
- végane
- pain
- noix
image:
  url:
  alt: Pain à la cocotte
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/pain-a-la-cocotte.md
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
    - from: farine T65
      to: mix farine sans gluten + psyllium
      note:
    note: 'Gluten : farine T65 → mix farine sans gluten + psyllium.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: noix et/ou figues sèches
      to: graines de tournesol
      note:
    note: 'Fruits à coque : noix et/ou figues sèches → graines de tournesol.'
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
histoire: 'Cuire un pain sous cloche (cocotte, Dutch oven) recrée le four de boulanger : vapeur
  captive, croûte. En 2006, Jim Lahey (Sullivan Street Bakery) publie avec Mark Bittman au
  New York Times un pain sans pétrissage, 12–18 h de pousse, cocotte brûlante. Le geste est
  plus vieux (pain à l’ancienne, fermentation longue) ; Lahey l’a rendu viral.


  Jigmé est plus « pain de ménage » : 10 g de levure fraîche, 10 min de travail, 4–5 h, 240
  °C / 40 min couvercle + 5 min.'
fun_facts:
- text: La cocotte = le four. Couvercle 30–40 min, puis à nu pour dorer.
  source_name: Alexandra’s Kitchen
  source_url: https://alexandracooks.com/2006/11/26/no-knead-bread/
- text: 'Peu de levure, beaucoup de temps chez Lahey (≈ 1 g). Jigmé inverse : plus de levure,
    4–5 h. Les deux marchent.'
  source_name:
  source_url:
- text: 'Hydratation ≈ 68 % chez Jigmé (340 g d’eau / 500 g de farine) : mie alvéolée, pâte
    collante.'
  source_name:
  source_url:
wines:
- name: Bergerac rouge
  producer: Château Tour des Gendres
  origin: Bergerac, Sud-Ouest
  grapes: merlot, cabernet, malbec selon cuvée
  award:
  why: 'fruit, tanin moyen : pain de campagne, noix, fromage de chèvre.'
- name: Cahors
  producer: Clos Triguedina
  origin: Cahors, Lot
  grapes: malbec (côt)
  award:
  why: 'structure, prune : pain, noix, figues, terrine.'
- name: Pic Saint-Loup
  producer: Domaine de l’Hortus
  origin: Pic Saint-Loup, Languedoc
  grapes: syrah, grenache, mourvèdre (selon cuvée)
  award:
  why: 'garrigue, fraîcheur : pain + olives, tomate, fromage.'
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
    - fruits_a_coque
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 45
      rest_min: 1080
      total_min: 1140
    equipment:
    - saladier
    - cocotte fonte
    - Miele
    substitutions:
    - from: levure fraîche 10 g + pousse 4–5 h = Ma recette
      to:
      note:
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: farine T65
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 340
      unit: g
      item: eau tiède
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: g
      item: levure sèche (ou 10 g fraîche pour une pousse courte)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sel fin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: noix et/ou figues sèches
      group: Option
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Mélange. Mélangez la farine, le sel et la levure. Ajoutez l’eau. Travaillez à la spatule 1 min, jusqu’à une pâte encore grossière. Il n’est pas nécessaire de pétrir."
    - "Cuisson. Couvrez et laissez 12 à 18 h à température ambiante, jusqu’à ce que la pâte ait doublé et soit parsemée de bulles."
    - "Repos. Farinez, dégazez, incorporez si vous le souhaitez les noix ou les figues sèches, puis formez une boule. Laissez reposer 30 min. Préchauffez la cocotte à 240 °C pendant 30 min (Miele)."
    - "Finition. Déposez le pain sur du papier cuisson dans la cocotte. Faites cuire 40 min avec le couvercle, puis 5 à 10 min à découvert."
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez la farine, le sel et la levure. Ajoutez l’eau. Travaillez à la spatule 1 min, jusqu’à une pâte encore grossière. Il n’est pas nécessaire de pétrir."
      - "Cuisson. Couvrez et laissez 12 à 18 h à température ambiante, jusqu’à ce que la pâte ait doublé et soit parsemée de bulles."
      - "Repos. Farinez, dégazez, incorporez si vous le souhaitez les noix ou les figues sèches, puis formez une boule. Laissez reposer 30 min. Préchauffez la cocotte à 240 °C pendant 30 min (Miele)."
      - "Finition. Déposez le pain sur du papier cuisson dans la cocotte. Faites cuire 40 min avec le couvercle, puis 5 à 10 min à découvert."
      pro:
      - "Mélanger la farine, le sel et la levure. Ajouter l’eau. Travailler à la spatule 1 min, jusqu’à pâte encore grossière. Ne pas pétrir."
      - "Couvrir. Laisser 12 à 18 h à température ambiante, jusqu’à pâte doublée et parsemée de bulles."
      - "Fariner. Dégazer. Incorporer noix ou figues sèches, option. Former une boule. Reposer 30 min. Préchauffer la cocotte à 240 °C pendant 30 min (Miele)."
      - "Déposer le pain sur du papier cuisson dans la cocotte. Cuire 40 min avec le couvercle, puis 5 à 10 min à découvert."
      cavernes:
      - "Mélange. Farine, sel, levure, mélanger. Eau, ajouter. Spatule 1 min, pâte encore grossière. Pétrir, pas besoin."
      - "Cuisson. Couvrir. 12 à 18 h, température ambiante, laisser. Pâte doublée, bulles."
      - "Repos. Fariner. Dégazer. Noix ou figues sèches, option, incorporer. Boule, former. 30 min, reposer. Cocotte 240 °C 30 min, préchauffer (Miele)."
      - "Finition. Pain, papier cuisson, cocotte, déposer. 40 min couvercle, cuire. 5 à 10 min découvert."
    kcal_per_serving: 560
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
    kcal_per_serving: 560
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 560
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
    kcal_per_serving: 560
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
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
      prep_min: 10
      cook_min: 45
      rest_min: 300
      total_min: 355
    equipment:
    - saladier
    - cocotte
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 340
      unit: g
      item: eau tiède
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: levure fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: grosses pincées de sel
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Mélange. Mélangez l’eau tiède et la levure, puis laissez prendre une quinzaine de minutes."
    - "Mélange. Pendant ce temps, mélangez la farine et le sel."
    - "Cuisson. Incorporez la partie liquide à la partie sèche et travaillez la pâte une dizaine de minutes."
    - "Cuisson. Formez une grosse boule et laissez pousser dans un grand récipient, dans un coin chaud de la pièce, sous un torchon humide, environ 4 à 5 h."
    - "Dégazer la pâte. Dégazez, puis formez à nouveau une boule."
    - "Cuisson. Tapissez le fond d’une cocotte de papier cuisson, puis déposez la boule par-dessus."
    - "Cuisson. Enfournez à 240 °C, cocotte fermée, pendant 40 minutes environ."
    - "Finition. Ôtez le couvercle et terminez la cuisson pendant 5 bonnes minutes."
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez l’eau tiède et la levure, puis laissez prendre une quinzaine de minutes."
      - "Mélange. Pendant ce temps, mélangez la farine et le sel."
      - "Cuisson. Incorporez la partie liquide à la partie sèche et travaillez la pâte une dizaine de minutes."
      - "Cuisson. Formez une grosse boule et laissez pousser dans un grand récipient, dans un coin chaud de la pièce, sous un torchon humide, environ 4 à 5 h."
      - "Dégazer la pâte. Dégazez, puis formez à nouveau une boule."
      - "Cuisson. Tapissez le fond d’une cocotte de papier cuisson, puis déposez la boule par-dessus."
      - "Cuisson. Enfournez à 240 °C, cocotte fermée, pendant 40 minutes environ."
      - "Finition. Ôtez le couvercle et terminez la cuisson pendant 5 bonnes minutes."
      pro:
      - "Mélanger l’eau tiède et la levure. Laisser prendre une quinzaine de minutes."
      - "Pendant ce temps, mélanger la farine et le sel."
      - "Incorporer la partie liquide à la partie sèche. Travailler la pâte une dizaine de minutes."
      - "Former une grosse boule. Laisser pousser dans un grand récipient, coin chaud de la pièce, sous un torchon humide, environ 4 à 5 h."
      - "Dégazer. Former à nouveau une boule."
      - "Tapisser le fond d’une cocotte de papier cuisson. Déposer la boule par-dessus."
      - "Enfourner à 240 °C, cocotte fermée, 40 minutes environ."
      - "Ôter le couvercle. Terminer la cuisson 5 bonnes minutes."
      cavernes:
      - "Mélange. Eau tiède, levure, mélanger. Quinzaine minutes, laisser prendre."
      - "Mélange. Pendant : farine, sel, mélanger."
      - "Cuisson. Partie liquide, partie sèche, incorporer. Pâte, dizaine minutes, travailler."
      - "Cuisson. Grosse boule, former. Grand récipient, coin chaud pièce, torchon humide, pousser, environ 4 à 5 h."
      - "Dégazer pâte. Dégazer. Boule, former encore."
      - "Cuisson. Fond cocotte, papier cuisson, tapisser. Boule, déposer par-dessus."
      - "Cuisson. 240 °C, cocotte fermée, enfourner. 40 minutes environ."
      - "Finition. Couvercle, ôter. 5 bonnes minutes, terminer cuisson."
    kcal_per_serving: 440
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Le froid dessèche le pain."}
  congelation: {possible: true, duree: "1 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "2 jours", note: "Sachet ou boîte, à l’abri de l’humidité."}
  rechauffage: ""
  restes: ["Pain perdu"]
  anti_gaspi: ["Croûtons ou chapelure"]
  a_verifier: false
  note_verif: ""

---

# Pain à la cocotte

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Salé/pain-a-la-cocotte.md).

**Catégorie :** salé

## Ingrédients (4 personnes)

- 500 g de farine T65
- 340 g d’eau tiède
- 3 g de levure sèche (ou 10 g fraîche pour une pousse courte)
- 10 g de sel fin
- Option : 80 g de noix et/ou figues sèches

## Préparation

1. Mélange. Mélangez la farine, le sel et la levure. Ajoutez l’eau. Travaillez à la spatule 1 min, jusqu’à une pâte encore grossière. Il n’est pas nécessaire de pétrir.
2. Cuisson. Couvrez et laissez 12 à 18 h à température ambiante, jusqu’à ce que la pâte ait doublé et soit parsemée de bulles.
3. Repos. Farinez, dégazez, incorporez si vous le souhaitez les noix ou les figues sèches, puis formez une boule. Laissez reposer 30 min. Préchauffez la cocotte à 240 °C pendant 30 min (Miele).
4. Finition. Déposez le pain sur du papier cuisson dans la cocotte. Faites cuire 40 min avec le couvercle, puis 5 à 10 min à découvert.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
