---
schema: recette-web-jigme/v2
equipment:
- ref: maryse
slug: mousse-au-chocolat-express
title: Mousse au chocolat express
lang: fr
description: "Mousse au chocolat express : recette française avec chocolat noir, blanc d'œufs et sucre, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- goûter
- chocolat
- végétarien
image:
  url:
  alt: Mousse au chocolat express
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/mousse-au-chocolat-express.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: blanc d'œufs
      to: aquafaba (jus de pois chiches, 30 ml par blanc)
      note: Monte comme des blancs ; mousse un peu plus fragile.
    note: Blancs d’œufs → aquafaba.
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
histoire: 'Mousse : appareil aéré (blancs ou crème fouettée). D’abord salée (viandes, poissons) dans la
  cuisine française, puis sucrée au XIXe s. ; la mousse au chocolat devient le grand classique. La version
  « express » (peu d’ingrédients, pas de cuisson longue) est un raccourci contemporain, pas une autre
  histoire.

  '
fun_facts:
- text: 'Sans jaune cuit, l’œuf cru reste un risque : on choisit des œufs très frais, ou on pasteurise.

    '
  source_name: Usage
  source_url: null
- text: 'Le chocolat trop chaud fait retomber les blancs ; trop froid, il fige en grains.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Mousse au chocolat express ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Mousse_au_chocolat
wines:
- name: Banyuls
  producer: Domaine de La Rectorie
  origin: Banyuls, Roussillon
  grapes: grenache
  award:
  why: VDN cacao — la mousse, sucré-amer.
- name: Rivesaltes
  producer: Domaine Lafage
  origin: Roussillon
  grapes: grenache, muscat
  award:
  why: Doux du Roussillon — le chocolat, sans un vin sec.
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — la mousse aérienne, sans un liquoreux lourd.
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
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 0
      rest_min: 0
      total_min: 15
    equipment: &id002
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: chocolat noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: blanc d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites fondre le chocolat au bain marie. En attendant, versez les blancs d’oeufs dans
      un récipient et montez-les en neige en ajoutant le sucre au fur et à mesure.
    - Finition. Versez le chocolat fondu dans les blancs en neige et mélangez délicatement à l’aide
      d’une maryse. Enfin, versez la préparation dans des petits ramequins avant de les placer
      au réfrigérateur pendant minimum 2 heures. Le plus dur, c’est de patienter pendant que
      la mousse repose au réfrigérateur… Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites fondre le chocolat, casserole au-dessus d’eau chaude. En attendant, versez les blancs d’œufs dans un récipient et [[monter-en-neige|montez-les en neige]] en ajoutant le sucre au fur et à mesure."
      - "Finition. Versez le chocolat fondu dans les blancs en neige et mélangez délicatement à l’aide d’une maryse. Enfin, versez la préparation dans des petits ramequins avant de les placer au réfrigérateur pendant minimum 2 heures. Le plus dur, c’est de patienter pendant que la mousse repose au réfrigérateur… Bon appétit !"
      pro:
      - "Faire fondre le chocolat, casserole au-dessus d’eau chaude. Pendant ce temps, verser les blancs d’œufs dans un récipient. Monter en neige en ajoutant le sucre au fur et à mesure."
      - "Verser le chocolat fondu dans les blancs en neige. Mélanger délicatement à la maryse. Verser dans des petits ramequins. Réfrigérateur pendant minimum 2 heures."
      cavernes:
      - "Cuisson. Chocolat, casserole dessus eau chaude, fondre. Pendant. Blancs d’œufs, récipient, verser. Sucre peu à peu, monter en neige."
      - "Finition. Chocolat fondu, blancs en neige, verser. Maryse, mélanger délicat. Petits ramequins, verser. Réfrigérateur, minimum 2 h. Patienter."
    kcal_per_serving: 390
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 390
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
    - pesco
    - vegan
    allergens: []
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 0
      rest_min: 0
      total_min: 15
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: chocolat noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: aquafaba (30 ml par blanc)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Faites fondre le chocolat au bain marie. En attendant, versez l’aquafaba dans un récipient et montez-la en neige en ajoutant le sucre au fur et à mesure.
    - Finition. Versez le chocolat fondu dans les aquafaba en neige et mélangez délicatement à l’aide
      d’une maryse. Enfin, versez la préparation dans des petits ramequins avant de les placer
      au réfrigérateur pendant minimum 2 heures. Le plus dur, c’est de patienter pendant que
      la mousse repose au réfrigérateur… Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites fondre le chocolat, casserole au-dessus d’eau chaude. En attendant, versez l’aquafaba dans un récipient et [[monter-en-neige|montez-la en neige]] en ajoutant le sucre au fur et à mesure."
      - "Finition. Versez le chocolat fondu dans les aquafaba en neige et mélangez délicatement à l’aide d’une maryse. Enfin, versez la préparation dans des petits ramequins avant de les placer au réfrigérateur pendant minimum 2 heures. Le plus dur, c’est de patienter pendant que la mousse repose au réfrigérateur… Bon appétit !"
      pro:
      - "Faire fondre le chocolat, casserole au-dessus d’eau chaude. Pendant ce temps, verser l’aquafaba dans un récipient. Monter en neige en ajoutant le sucre au fur et à mesure."
      - "Verser le chocolat fondu dans les aquafaba en neige. Mélanger délicatement à la maryse. Verser dans des petits ramequins. Réfrigérateur pendant minimum 2 heures."
      cavernes:
      - "Cuisson. Chocolat, casserole dessus eau chaude, fondre. Pendant. Aquafaba, récipient, verser. Sucre peu à peu, monter en neige."
      - "Finition. Chocolat fondu, aquafaba en neige, verser. Maryse, mélanger délicat. Petits ramequins, verser. Réfrigérateur, minimum 2 h. Patienter."
    kcal_per_serving: 390
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 390
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  vegan:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "œufs crus ou peu cuits"

---

# Mousse au chocolat express
**Équipement :** [[maryse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/mousse-au-chocolat-express]]

## Ingrédients (4 personnes)

- 200 g de chocolat noir
- 6 blanc d'œufs
- 50 g de sucre

## Préparation

1. Faites fondre le chocolat au bain marie. En attendant, versez les blancs d’oeufs dans un récipient et montez-les en neige en ajoutant le sucre au fur et à mesure.
2. Versez le chocolat fondu dans les blancs en neige et mélangez délicatement à l’aide d’une maryse. Enfin, versez la préparation dans des petits ramequins avant de les placer au réfrigérateur pendant minimum 2 heures.

 
 

 
 Le plus dur, c’est de patienter pendant que la mousse repose au réfrigérateur… Bon appétit !
