---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: pate-a-pizza-napolitaine
title: Pâte à pizza napolitaine
lang: fr
description: "Pâte à pizza napolitaine : recette italienne avec farine 00, sel marin et levure sèche, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- boulangerie
- pizza
- Naples
- Italie
image:
  url:
  alt: Pâte à pizza napolitaine
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/pate-a-pizza-napolitaine.md
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
    note: 'Gluten : farine 00 → mix farine sans gluten + psyllium.'
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
histoire: 'L’Associazione Verace Pizza Napoletana (AVPN), 1989, a figé la « vraie » pizza
  napolitaine : farine 00/0, eau, sel, levure ; pâtons 200–280 g ; four à bois ≈ 430–480 °C,
  60–90 s. En 2017, l’UNESCO inscrit l’art du pizzaiolo napolitain.


  Jigmé ajoute gluten vital (filet de force) et un peu d’huile — écart maison, pas AVPN.'
fun_facts:
- text: Pas de graisse dans la pâte AVPN. Huile = sur la pizza cuite, en spirale.
  source_name: AVPN
  source_url: https://www.pizzanapoletana.org/fr/ricetta_pizza_napoletana
- text: Pâton 200–280 g → pizza 22–35 cm, cornicione 1–2 cm.
  source_name: AVPN
  source_url: https://www.pizzanapoletana.org/fr/ricetta_pizza_napoletana
- text: 'Sel 40–60 g / litre d’eau, levure fraîche 0,1–3 g / litre : très peu, maturation
    8–24 h.'
  source_name: AVPN
  source_url: https://www.pizzanapoletana.org/fr/ricetta_pizza_napoletana
- text: 'UNESCO 2017 : le geste (staglio, étalage à la main), pas une recette de restaurant.'
  source_name: UNESCO
  source_url: https://ich.unesco.org/fr/RL/lart-du-pizzaiolo-napolitain-pizzaiuolo-00722
wines:
- name: Lacryma Christi del Vesuvio rosso
  producer: Mastroberardino
  origin: Vesuvio DOC, Campanie
  grapes: piedirosso (majoritaire)
  award:
  why: 'volcan, cerise, tanin souple : pizza napolitaine, tomate, mozzarella.'
- name: Greco di Tufo
  producer: Feudi di San Gregorio
  origin: Greco di Tufo DOCG, Irpinia
  grapes: greco
  award:
  why: 'blanc tendu, amande, agrume : Margherita, basilic, huile.'
- name: Peppoli Chianti Classico
  producer: Marchesi Antinori
  origin: Chianti Classico, Toscane
  grapes: sangiovese
  award:
  why: 'cerise, acidité : tomate cuite, fromage, pâte levée.'
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
    difficulty: 3
    time:
      prep_min: 20
      cook_min: 15
      rest_min: 1440
      total_min: 1475
    equipment:
    - KitchenAid ou saladier
    - boîtes à pâtons
    substitutions:
    - from: levure fraîche 3 g
      to:
      note:
    - from: farine 0 si pas de 00
      to:
      note:
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: farine 00
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 310
      unit: g
      item: eau (16–22 °C)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sel marin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: levure sèche (ou 3 g fraîche)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Mélangez l’eau et le sel. Ajoutez 10 % de la farine, puis la levure. Incorporez le reste de farine. Pétrissez 10 à 15 min, jusqu’à obtenir une pâte lisse."
    - "Repos couvert 2 h. Divisez ensuite en 4 boules de 200–210 g."
    - "Cuisson. Laissez maturer 8 à 18 h au frais, ou 6 à 8 h à 18–20 °C."
    - "Cuisson. Sortez du froid 30 à 40 min. Étalez à la main (centre de 2,5 mm au plus), en ménageant le bord."
    - "Garnir. Garnissez, puis enfournez dans un four très chaud (Ooni ou pierre à 250 °C ou plus)."
    steps_niveaux:
      amateur:
      - "Préparation. Mélangez l’eau et le sel. Ajoutez 10 % de la farine, puis la levure. Incorporez le reste de farine. Pétrissez 10 à 15 min, jusqu’à obtenir une pâte lisse."
      - "Repos couvert 2 h. Laissez reposer à couvert 2 h. Divisez ensuite en 4 boules de 200–210 g."
      - "Cuisson. Laissez maturer 8 à 18 h au frais, ou 6 à 8 h à 18–20 °C."
      - "Cuisson. Sortez du froid 30 à 40 min. Étalez à la main (centre de 2,5 mm au plus), en ménageant le bord."
      - "Garnir. Garnissez, puis enfournez dans un four très chaud (Ooni ou pierre à 250 °C ou plus)."
      pro:
      - "Mélanger l’eau et le sel. Ajouter 10 % de la farine, puis la levure. Incorporer le reste de farine. Pétrir 10 à 15 min, jusqu’à pâte lisse."
      - "Repos couvert 2 h. Diviser en 4 boules de 200–210 g."
      - "Maturer 8 à 18 h au frais, ou 6 à 8 h à 18–20 °C."
      - "Sortir du froid 30 à 40 min. Étaler à la main (centre de 2,5 mm au plus), ménager le bord."
      - "Garnir. Enfourner dans un four très chaud (Ooni ou pierre à 250 °C ou plus)."
      cavernes:
      - "Préparation. Eau, sel, mélanger. 10 % farine, ajouter. Levure, ajouter. Reste farine, incorporer. 10 à 15 min, pétrir. Pâte lisse."
      - "Repos. Couvercle, 2 h. 4 boules 200–210 g, diviser."
      - "Cuisson. Maturer 8 à 18 h frais, ou 6 à 8 h 18–20 °C."
      - "Cuisson. Froid, sortir 30 à 40 min. Main, étaler (centre 2,5 mm max). Bord, ménager."
      - "Garnir. Garnir. Four très chaud (Ooni ou pierre 250 °C ou plus), enfourner."
    kcal_per_serving: 440
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
    kcal_per_serving: 440
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
    kcal_per_serving: 440
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
    kcal_per_serving: 440
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
    difficulty: 3
    time:
      prep_min: 20
      cook_min: 15
      rest_min: 1440
      total_min: 1475
    equipment:
    - pétrin
    - saladier
    - frigo
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
    - qty: 310
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: g
      item: levure sèche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2.5
      unit: g
      item: gluten vital de blé
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
    - qty: 1
      unit: cas
      item: Huile d'olive (en fin de pétrissage)
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Pétrissez, puis formez une boule."
    - "Repos. Laissez reposer 3 h à température ambiante."
    - "Cuisson. Divisez en boules individuelles."
    - "Repos. Laissez doubler de volume (environ 1 h), puis placez au réfrigérateur."
    - "Finition. Sortez 30 à 40 min avant utilisation."
    steps_niveaux:
      amateur:
      - "Préparation. Pétrissez, puis formez une boule."
      - "Repos. Laissez reposer 3 h à température ambiante."
      - "Cuisson. Divisez en boules individuelles."
      - "Repos. Laissez doubler de volume (environ 1 h), puis placez au réfrigérateur."
      - "Finition. Sortez 30 à 40 min avant utilisation."
      pro:
      - "Pétrir. Former une boule."
      - "Repos 3 h à température ambiante."
      - "Diviser en boules individuelles."
      - "Laisser doubler de volume (environ 1 h). Placer au réfrigérateur."
      - "Sortir 30 à 40 min avant utilisation."
      cavernes:
      - "Préparation. Pétrir. Boule, former."
      - "Repos. 3 h température ambiante, reposer."
      - "Cuisson. Boules individuelles, diviser."
      - "Repos. Volume, doubler (environ 1 h). Réfrigérateur, placer."
      - "Finition. 30 à 40 min avant utilisation, sortir."
    kcal_per_serving: 440
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

# Pâte à pizza napolitaine

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Salé/pate-a-pizza-napolitaine.md).

**Catégorie :** salé

## Ingrédients (4 personnes)

- 500 g de farine 00
- 310 g d’eau (16–22 °C)
- 15 g de sel marin
- 1 g de levure sèche (ou 3 g fraîche)

## Préparation

1. Préparation. Mélangez l’eau et le sel. Ajoutez 10 % de la farine, puis la levure. Incorporez le reste de farine. Pétrissez 10 à 15 min, jusqu’à obtenir une pâte lisse.
2. Repos couvert 2 h. Divisez ensuite en 4 boules de 200–210 g.
3. Cuisson. Laissez maturer 8 à 18 h au frais, ou 6 à 8 h à 18–20 °C.
4. Cuisson. Sortez du froid 30 à 40 min. Étalez à la main (centre de 2,5 mm au plus), en ménageant le bord.
5. Garnir. Garnissez, puis enfournez dans un four très chaud (Ooni ou pierre à 250 °C ou plus).

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
