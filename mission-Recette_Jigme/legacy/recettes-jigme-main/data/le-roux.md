---
schema: recette-web-jigme/v2
slug: le-roux
title: Le roux
lang: fr
description: "Le roux : recette française avec beurre et farine, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes. Pour un repas du soir."
cuisine: française
category: salé
tags:
- salé
- base
- végétarien
- rapide
image:
  url:
  alt: Le roux
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/le-roux.md
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
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
histoire: 'Roux : farine et matière grasse cuites ensemble, pour lier sauces et soupes. / parts égales
  en poids, blanc, blond ou brun selon le temps de cuisson. Base des sauces béchamel, velouté, espagnole.

  '
fun_facts:
- text: >
    Plus il brunit, moins il lie (l’amidon se casse) et plus il goûte le noisette
    ou le grillé.
  source_name: Wikipedia, Roux
  source_url: https://en.wikipedia.org/wiki/Roux
- text: >
    Beurre, graisse de volaille ou huile : le gras change le goût, pas le principe.
  source_name: Grokipedia, Roux
  source_url: https://grokipedia.com/page/Roux
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "C’est un liant, pas un plat : pas d’accord vin."
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
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 10
      cook_min: 5
      rest_min: 0
      total_min: 15
    equipment: &id003
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 100
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Finition. Dans une casserole sur le feu, faites fondre le beurre puis ajoutez toute la farine
      et mélangez bien jusqu’à ce que cela devienne consistant. Vous pouvez utiliser le roux
      dans vos béchamels ou dans vos blanquettes !
    steps_niveaux:
      amateur:
      - "Finition. Dans une casserole sur le feu, faites fondre le beurre puis ajoutez toute la farine et mélangez bien jusqu’à ce que cela devienne consistant. Vous pouvez utiliser le roux dans vos béchamels ou dans vos blanquettes."
      pro:
      - "Faire fondre le beurre en casserole. Ajouter toute la farine. Mélanger jusqu’à consistance. Roux utilisable en béchamel ou blanquette."
      cavernes:
      - "Finition. Casserole feu. Beurre, fondre. Farine toute, ajouter. Mélanger jusqu’à consistant. Roux, béchamel ou blanquette, possible."
    kcal_per_serving: 276
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
    kcal_per_serving: 276
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
    - gluten
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients:
    - qty: 100
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Finition. Dans une casserole sur le feu, faites fondre la margarine végétale puis
      ajoutez toute la farine et mélangez bien jusqu’à ce que cela devienne consistant. Vous
      pouvez utiliser le roux dans vos béchamels ou dans vos blanquettes !
    steps_niveaux:
      amateur:
      - "Finition. Dans une casserole sur le feu, faites fondre la margarine végétale puis ajoutez toute la farine et mélangez bien jusqu’à ce que cela devienne consistant. Vous pouvez utiliser le roux dans vos béchamels ou dans vos blanquettes."
      pro:
      - "Faire fondre la margarine végétale en casserole. Ajouter toute la farine. Mélanger jusqu’à consistance. Roux utilisable en béchamel ou blanquette."
      cavernes:
      - "Finition. Casserole feu. Margarine végétale, fondre. Farine toute, ajouter. Mélanger jusqu’à consistant. Roux, béchamel ou blanquette, possible."
    kcal_per_serving: 100
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
    kcal_per_serving: 276
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

# Le roux
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/le-roux]]

## Ingrédients (4 personnes)

- 100 g de beurre
- 100 g de farine

## Préparation

1. Dans une casserole sur le feu, faites fondre le beurre puis ajoutez toute la farine et mélangez bien jusqu’à ce que cela devienne consistant.

 
 

 
 Vous pouvez utiliser le roux dans vos béchamels ou dans vos blanquettes !
