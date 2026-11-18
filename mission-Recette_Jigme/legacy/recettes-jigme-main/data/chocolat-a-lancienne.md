---
schema: recette-web-jigme/v2
slug: chocolat-a-lancienne
title: Chocolat à l'ancienne
lang: fr
description: "Chocolat à l'ancienne : recette française avec lait, crème liquide et bâton de cannelle, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- boisson
- chocolat
- végétarien
image:
  url:
  alt: Chocolat à l'ancienne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/chocolat-a-lancienne.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; crème de soja ou avoine → crème
      d''avoine.'
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
histoire: 'Boisson de cacao chauffée au lait ou à l’eau. Le cacao se boit en Mésoamérique depuis des millénaires
  ; le chocolat chaud sucré se répand en Europe à partir du XVIe s. « À l’ancienne » désigne ici une tasse
  épaisse, pas une recette datée.

  '
fun_facts:
- text: "Les Mayas et les Aztèques buvaient le cacao souvent amer, épicé, sans lait de vache."
  source_name: Wikipedia, Hot chocolate
  source_url: https://en.wikipedia.org/wiki/Hot_chocolate
- text: "Le chocolat fait de tablette fondue est plus épais et moins sucré que le cacao en poudre."
  source_name: Wikipedia, Hot chocolate
  source_url: https://en.wikipedia.org/wiki/Hot_chocolate
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: Boisson sucrée au cacao, déjà lactée. Pas d’accord vin.
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 10
      cook_min: 10
      rest_min: 0
      total_min: 20
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bâton de cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chocolat noir 90%
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Versez le lait dans une casserole et la crème liquide dans une casserole. Ajoutez un
      bâton de cannelle (si vous n’en avez pas, prenez de la cannelle en poudre) et faites
      chauffer à feu doux.
    - Cuisson. Cassez grossièrement le chocolat et déposez le tout dans la casserole lorsque le lait
      est chaud puis mélangez.
    - Finition. Laissez chauffer le tout à feu doux en surveillant bien. Quand tout la tablette a bien
      fondue et que votre lait à une belle teinte chocolatée, c’est que votre chocolat est
      prêt ! Une boisson à déguster bien chaude, enroulé dans un plaid en profitant d’un moment
      de calme (série, bouquin, discussion entre amis, etc.). Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Versez le lait dans une casserole et la crème liquide dans une casserole. Ajoutez un bâton de cannelle (si vous n’en avez pas, prenez de la cannelle en poudre) et faites chauffer à feu doux."
      - "Cuisson. Cassez grossièrement le chocolat et déposez le tout dans la casserole lorsque le lait est chaud, puis mélangez."
      - "Finition. Laissez chauffer le tout à feu doux en surveillant bien. Quand toute la tablette a bien fondu et que votre lait a une belle teinte chocolatée, votre chocolat est prêt."
      pro:
      - "Verser le lait dans une casserole et la crème liquide dans une casserole. Ajouter un bâton de cannelle (à défaut, cannelle en poudre). Chauffer à feu doux."
      - "Casser grossièrement le chocolat. Lorsque le lait est chaud, déposer dans la casserole. Mélanger."
      - "Chauffer à feu doux en surveillant. Tablette fondue et lait à teinte chocolatée : prêt."
      cavernes:
      - "Cuisson. Lait, casserole. Crème liquide, casserole. Bâton cannelle. Sinon cannelle poudre. Feu doux, chauffer."
      - "Cuisson. Chocolat, casser grossièrement. Lait chaud, casserole, déposer. Mélanger."
      - "Finition. Feu doux, chauffer, surveiller. Tablette fondue, lait teinte chocolatée : prêt."
    kcal_per_serving: 469
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
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 469
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
    - qty: 1000
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bâton de cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chocolat noir 90%
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Versez le lait d'avoine ou soja dans une casserole et la crème de soja ou avoine dans
      une casserole. Ajoutez un bâton de cannelle (si vous n’en avez pas, prenez de la cannelle
      en poudre) et faites chauffer à feu doux.
    - Cuisson. Cassez grossièrement le chocolat et déposez le tout dans la casserole lorsque le lait
      d'avoine ou soja est chaud puis mélangez.
    - Finition. Laissez chauffer le tout à feu doux en surveillant bien. Quand tout la tablette a bien
      fondue et que votre lait d'avoine ou soja à une belle teinte chocolatée, c’est que votre
      chocolat est prêt ! Une boisson à déguster bien chaude, enroulé dans un plaid en profitant
      d’un moment de calme (série, bouquin, discussion entre amis, etc.). Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Versez le lait d’avoine ou soja dans une casserole et la crème de soja ou avoine dans une casserole. Ajoutez un bâton de cannelle (si vous n’en avez pas, prenez de la cannelle en poudre) et faites chauffer à feu doux."
      - "Cuisson. Cassez grossièrement le chocolat et déposez le tout dans la casserole lorsque le lait d’avoine ou soja est chaud, puis mélangez."
      - "Finition. Laissez chauffer le tout à feu doux en surveillant bien. Quand toute la tablette a bien fondu et que votre lait d’avoine ou soja a une belle teinte chocolatée, votre chocolat est prêt."
      pro:
      - "Verser le lait d’avoine ou soja dans une casserole et la crème de soja ou avoine dans une casserole. Ajouter un bâton de cannelle (à défaut, cannelle en poudre). Chauffer à feu doux."
      - "Casser grossièrement le chocolat. Lorsque le lait d’avoine ou soja est chaud, déposer dans la casserole. Mélanger."
      - "Chauffer à feu doux en surveillant. Tablette fondue et lait d’avoine ou soja à teinte chocolatée : prêt."
      cavernes:
      - "Cuisson. Lait d’avoine ou soja, casserole. Crème de soja ou avoine, casserole. Bâton cannelle. Sinon cannelle poudre. Feu doux, chauffer."
      - "Cuisson. Chocolat, casser grossièrement. Lait d’avoine ou soja chaud, casserole, déposer. Mélanger."
      - "Finition. Feu doux, chauffer, surveiller. Tablette fondue, lait d’avoine ou soja teinte chocolatée : prêt."
    kcal_per_serving: 346
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
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 469
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Chocolat à l'ancienne
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/chocolat-a-lancienne]]

## Ingrédients (4 personnes)

- 1 L de lait
- 20 cl de crème liquide
- 1 bâton de cannelle
- 100 g de chocolat noir 90%

## Préparation

1. Versez le lait dans une casserole et la crème liquide dans une casserole. Ajoutez un bâton de cannelle (si vous n’en avez pas, prenez de la cannelle en poudre) et faites chauffer à feu doux.
2. Cassez grossièrement le chocolat et déposez le tout dans la casserole lorsque le lait est chaud puis mélangez.
3. Laissez chauffer le tout à feu doux en surveillant bien. Quand tout la tablette a bien fondue et que votre lait à une belle teinte chocolatée, c’est que votre chocolat est prêt !

 
 

 
 Une boisson à déguster bien chaude, enroulé dans un plaid en profitant d’un moment de calme (série, bouquin, discussion entre amis, etc.). Bon appétit !
