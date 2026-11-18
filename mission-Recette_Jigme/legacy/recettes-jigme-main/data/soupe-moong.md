---
schema: recette-web-jigme/v2
slug: soupe-moong
title: Soupe moong
lang: fr
description: "Soupe moong : recette indienne avec lentilles mongue, carotte et oignon rouge, pour 4 personnes. Version maison. Facile à suivre."
cuisine: indienne
category: salé
tags:
- salé
- soupe
- lentilles
- végétarien
image:
  url:
  alt: Soupe moong
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/soupe-moong.md
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
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Moong dal : lentilles mungo décortiquées, soupe ou dal d’Asie du Sud. Épices, parfois un tarka
  (cumin, ail). Ce n’est pas un velouté français.

  '
fun_facts:
- text: >
    Le moong se cuit vite, sans trempage long ; trop cuit, c’est une purée.
  source_name: Grokipedia, Dal
  source_url: https://grokipedia.com/page/Dal
- text: >
    Un filet de citron à la fin : trop tôt, il amertume en cuisant.
  source_name: Grokipedia, List of Indian soups and stews
  source_url: https://grokipedia.com/page/List_of_Indian_soups_and_stews
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — les épices et la lentille, sans un rouge tannique.
- name: Alsace Gewurztraminer
  producer: Cave de Hunawihr
  origin: Hunawihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, légèrement sucré — le cumin et l’ail.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — la soupe, sans un vin de garde.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: &id001
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id003
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: lentilles mongue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: un petit morceau de gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre clarifié
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: l'asafetida
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du curcuma
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du vadouvan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez et coupez grossièrement les carottes, l’oignon et un morceau de gingembre.
      Dans votre robot, ajoutez un morceau de beurre clarifié, le gingembre et l’oignon. Laissez
      cuire 5 minutes. Si vous n’avez pas de robot et que vous utilisez une casserole, faites
      fondre le beurre en amont.
    - Finition. Ajoutez les épices et les carottes et laissez cuire 10 minutes. Incorporez les lentilles
      et versez de l’eau à hauteur. Assaisonnez selon vos goûts et laissez cuire une bonne
      trentaine de minutes. On a utilisé la fonction « soupe moulinée » de notre robot. Si
      vous n’avez pas de robot, écrasez grossièrement les lentilles contre la paroi de votre
      casserole pour avoir une consistance plus veloutée. Enfin, ajoutez un peu de coriandre
      fraîche pour la déco. C’est tellement simple et délicieux ! Bon appétit ! Découvrez
      aussi nos recettes de soupe de potiron, de soupe à la tomate.
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement les carottes, l’oignon et un morceau de gingembre. Dans votre robot, ajoutez un morceau de beurre clarifié, le gingembre et l’oignon. Laissez cuire 5 minutes. Si vous n’avez pas de robot et que vous utilisez une casserole, faites fondre le beurre en amont."
      - "Finition. Ajoutez les épices et les carottes et laissez cuire 10 minutes. Incorporez les lentilles et versez de l’eau à hauteur. Assaisonnez selon vos goûts et laissez cuire une bonne trentaine de minutes. Si vous avez un robot, utilisez la fonction « soupe moulinée ». Si vous n’avez pas de robot, écrasez grossièrement les lentilles contre la paroi de votre casserole pour une consistance plus veloutée. Ajoutez un peu de coriandre fraîche pour la déco."
      pro:
      - "Éplucher et couper grossièrement les carottes, l’oignon et un morceau de gingembre. Au robot : ajouter un morceau de beurre clarifié, le gingembre et l’oignon, laisser cuire 5 minutes. Sans robot : fondre le beurre en amont dans une casserole."
      - "Ajouter les épices et les carottes, laisser cuire 10 minutes. Incorporer les lentilles, verser de l’eau à hauteur, assaisonner, laisser cuire une bonne trentaine de minutes. Robot : fonction « soupe moulinée ». Sans robot : écraser grossièrement les lentilles contre la paroi de la casserole pour un velouté. Ajouter un peu de coriandre fraîche pour la déco."
      cavernes:
      - "Préparation. Carottes, oignon, morceau gingembre, éplucher, couper grossièrement. Robot : morceau beurre clarifié, gingembre, oignon, 5 min. Sans robot : casserole, beurre, fondre avant."
      - "Finition. Épices, carottes, 10 min. Lentilles, eau à hauteur. Assaisonner. Bonne trentaine minutes. Robot : soupe moulinée. Sans robot : lentilles, paroi casserole, écraser, velouté. Peu coriandre fraîche, déco."
    kcal_per_serving: 72
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 72
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
    allergens: []
    difficulty: 2
    time:
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: lentilles mongue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: un petit morceau de gingembre
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
    - qty:
      unit:
      item: l'asafetida
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du curcuma
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du vadouvan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez et coupez grossièrement les carottes, l’oignon et un morceau de gingembre.
      Dans votre robot, ajoutez un morceau de margarine végétale, le gingembre et l’oignon. Laissez cuire 5 minutes. Si vous n’avez pas de robot et que vous utilisez une casserole, faites fondre la margarine végétale en amont.
    - Finition. Ajoutez les épices et les carottes et laissez cuire 10 minutes. Incorporez les lentilles
      et versez de l’eau à hauteur. Assaisonnez selon vos goûts et laissez cuire une bonne
      trentaine de minutes. On a utilisé la fonction « soupe moulinée » de notre robot. Si
      vous n’avez pas de robot, écrasez grossièrement les lentilles contre la paroi de votre
      casserole pour avoir une consistance plus veloutée. Enfin, ajoutez un peu de coriandre
      fraîche pour la déco. C’est tellement simple et délicieux ! Bon appétit ! Découvrez
      aussi nos recettes de soupe de potiron, de soupe à la tomate.
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement les carottes, l’oignon et un morceau de gingembre. Dans votre robot, ajoutez un morceau de margarine végétale, le gingembre et l’oignon. Laissez cuire 5 minutes. Si vous n’avez pas de robot et que vous utilisez une casserole, faites fondre la margarine végétale en amont."
      - "Finition. Ajoutez les épices et les carottes et laissez cuire 10 minutes. Incorporez les lentilles et versez de l’eau à hauteur. Assaisonnez selon vos goûts et laissez cuire une bonne trentaine de minutes. Si vous avez un robot, utilisez la fonction « soupe moulinée ». Si vous n’avez pas de robot, écrasez grossièrement les lentilles contre la paroi de votre casserole pour une consistance plus veloutée. Ajoutez un peu de coriandre fraîche pour la déco."
      pro:
      - "Éplucher et couper grossièrement les carottes, l’oignon et un morceau de gingembre. Au robot : ajouter un morceau de margarine végétale, le gingembre et l’oignon, laisser cuire 5 minutes. Sans robot : fondre la margarine végétale en amont dans une casserole."
      - "Ajouter les épices et les carottes, laisser cuire 10 minutes. Incorporer les lentilles, verser de l’eau à hauteur, assaisonner, laisser cuire une bonne trentaine de minutes. Robot : fonction « soupe moulinée ». Sans robot : écraser grossièrement les lentilles contre la paroi de la casserole pour un velouté. Ajouter un peu de coriandre fraîche pour la déco."
      cavernes:
      - "Préparation. Carottes, oignon, morceau gingembre, éplucher, couper grossièrement. Robot : morceau margarine végétale, gingembre, oignon, 5 min. Sans robot : casserole, margarine végétale, fondre avant."
      - "Finition. Épices, carottes, 10 min. Lentilles, eau à hauteur. Assaisonner. Bonne trentaine minutes. Robot : soupe moulinée. Sans robot : lentilles, paroi casserole, écraser, velouté. Peu coriandre fraîche, déco."
    kcal_per_serving: 72
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 72
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

# Soupe moong
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/soupe-moong]]

## Ingrédients (4 personnes)

- 300 g de lentilles mongue
- 3 carotte
- 1 oignon rouge
-  un petit morceau de gingembre
-  du beurre clarifié
-  de l'asafetida
-  du curcuma
-  du vadouvan
-  un peu de coriandre fraîche

## Préparation

1. Épluchez et coupez grossièrement les carottes, l’oignon et un morceau de gingembre. Dans votre robot, ajoutez un morceau de beurre clarifié, le gingembre et l’oignon. Laissez cuire 5 minutes. Si vous n’avez pas de robot et que vous utilisez une casserole, faites fondre le beurre en amont.
2. Ajoutez les épices et les carottes et laissez cuire 10 minutes. Incorporez les lentilles et versez de l’eau à hauteur. Assaisonnez selon vos goûts et laissez cuire une bonne trentaine de minutes. On a utilisé la fonction « soupe moulinée » de notre robot. Si vous n’avez pas de robot, écrasez grossièrement les lentilles contre la paroi de votre casserole pour avoir une consistance plus veloutée. Enfin, ajoutez un peu de coriandre fraîche pour la déco.

 
 

 
 C’est tellement simple et délicieux ! Bon appétit !

Découvrez aussi nos recettes de soupe de potiron, de soupe à la tomate.
