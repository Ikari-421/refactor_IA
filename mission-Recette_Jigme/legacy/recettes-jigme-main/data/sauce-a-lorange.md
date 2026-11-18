---
schema: recette-web-jigme/v2
slug: sauce-a-lorange
title: Sauce à l'orange
lang: fr
description: "Sauce à l'orange : recette française avec sucre, vinaigre et orange, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- base
- orange
- poisson
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/sauce-a-lorange.jpg
  alt: Sauce à l'orange
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/sauce-a-lorange.md
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
    - from: vinaigre
      to: jus de citron
      note: Acidité un peu différente.
    note: Vinaigre → citron.
house_toggle:
house_options: []
histoire: 'Sauce bigarade : jus et zeste d’orange amère (bigarade de Séville), sucré-acide, classiquement
  avec un canard rôti (canard à l’orange ou à la bigarade). Ici, une sauce à l’orange pour magret, pas
  forcément à la bigarade.

  '
fun_facts:
- text: >
    L’orange douce sucrée plus qu’elle n’acidifie : un filet de vinaigre ou de
    jus de citron rattrape.
  source_name: Usage
  source_url:
- text: >
    Un fond de veau ou de canard lie mieux qu’un jus d’orange seul, trop fluide.
  source_name: Grokipedia, Bigarade sauce
  source_url: https://grokipedia.com/page/Bigarade_sauce
wines:
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire — l’orange et le magret, légèrement sucré.
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin tendre — le sucré-acide de la sauce, sans un sauternes.
- name: Chinon
  producer: Charles Joguet
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc — le canard, tanin vif contre l’orange.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 60
      rest_min: 60
      total_min: 150
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: vinaigre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: orange
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: liqueur d'orange (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Lavez et pelez les oranges. Faites blanchir les zestes dans de l’eau (départ à froid).
      Dès que l’eau commence à bouillir, égouttez-les puis recommencez l’opération deux à
      trois fois. Cette étape permet de retirer l’amertume mais également les potentiels pesticides
      présents dans la peau d’orange.
    - Dressage. Pressez les oranges pour en récupérer le jus et réservez-le. Dans une casserole, faites
      chauffer du sucre à feu doux jusqu’à ce qu’il brunisse, puis déglacez-le au vinaigre
      et laissez réduire de moitié. Incorporez ensuite le jus d’orange et les zestes blanchis.
      Laissez à nouveau réduire de moitié.
    - Finition. Dans une autre casserole, préparez un bouillon avec de la demi-glace ou du fond de volaille,
      de veau ou légumes, puis incorporez-le à la réduction d’orange et laissez réduire à
      nouveau. Vous n’avez plus qu’à verser la sauce sur le magret tranché. Bon appétit !

    steps_niveaux:
      amateur:
      - "Zestes. Lavez et pelez les oranges. Mettez les zestes dans de l’eau froide. Dès que l’eau commence à bouillir, égouttez-les puis recommencez l’opération deux à trois fois. Cette étape retire l’amertume et les potentiels pesticides présents dans la peau d’orange."
      - "Dressage. Pressez les oranges pour en récupérer le jus et réservez-le. Dans une casserole, faites chauffer du sucre à feu doux jusqu’à ce qu’il brunisse, puis déglacez-le au vinaigre et [[reduire|laissez réduire]] de moitié. Incorporez ensuite le jus d’orange et les zestes. Laissez à nouveau [[reduire|réduire]] de moitié."
      - "Finition. Dans une autre casserole, préparez un bouillon avec de la demi-glace ou du fond de volaille, de veau ou légumes, puis incorporez-le à la réduction d’orange et [[reduire|laissez réduire]] à nouveau. Versez la sauce sur le magret tranché."
      pro:
      - "Laver et peler les oranges. Mettre les zestes dans de l’eau froide. Dès que l’eau commence à bouillir, égoutter, recommencer deux à trois fois. Retirer l’amertume et les potentiels pesticides de la peau."
      - "Presser les oranges, réserver le jus. Chauffer le sucre à feu doux jusqu’à brunissement. Déglacer au vinaigre, réduire de moitié. Incorporer le jus d’orange et les zestes. Réduire à nouveau de moitié."
      - "Préparer un bouillon (demi-glace ou fond de volaille, de veau ou légumes). Incorporer à la réduction d’orange, réduire à nouveau. Verser la sauce sur le magret tranché."
      cavernes:
      - "Zestes. Oranges, laver, peler. Zestes, eau froide. Eau commence bouillir, égoutter. Recommencer deux à trois fois. Amertume, pesticides peau, retirer."
      - "Dressage. Oranges, presser, jus, réserver. Sucre, casserole, feu doux, chauffer jusqu’à brunisse. Vinaigre, déglacer. Réduire de moitié. Jus orange, zestes, incorporer. Encore, réduire de moitié."
      - "Finition. Autre casserole. Bouillon : demi-glace ou fond volaille, veau ou légumes. Incorporer réduction orange. Réduire encore. Sauce, magret tranché, verser."
    kcal_per_serving: 135
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: vegan
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 135
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
    - sulfites
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 60
      rest_min: 60
      total_min: 150
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: vinaigre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: orange
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: bouillon de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: liqueur d'orange (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Lavez et pelez les oranges. Faites blanchir les zestes dans de l’eau (départ à froid).
      Dès que l’eau commence à bouillir, égouttez-les puis recommencez l’opération deux à
      trois fois. Cette étape permet de retirer l’amertume mais également les potentiels pesticides
      présents dans la peau d’orange.
    - Dressage. Pressez les oranges pour en récupérer le jus et réservez-le. Dans une casserole, faites
      chauffer du sucre à feu doux jusqu’à ce qu’il brunisse, puis déglacez-le au vinaigre
      et laissez réduire de moitié. Incorporez ensuite le jus d’orange et les zestes blanchis.
      Laissez à nouveau réduire de moitié.
    - Dressage. Dans une autre casserole, préparez un bouillon de légumes, puis incorporez-le à la réduction d’orange et laissez réduire à nouveau. Versez la sauce sur des légumes rôtis ou du seitan. Bon appétit !

    steps_niveaux:
      amateur:
      - "Zestes. Lavez et pelez les oranges. Mettez les zestes dans de l’eau froide. Dès que l’eau commence à bouillir, égouttez-les puis recommencez l’opération deux à trois fois. Cette étape retire l’amertume et les potentiels pesticides présents dans la peau d’orange."
      - "Dressage. Pressez les oranges pour en récupérer le jus et réservez-le. Dans une casserole, faites chauffer du sucre à feu doux jusqu’à ce qu’il brunisse, puis déglacez-le au vinaigre et [[reduire|laissez réduire]] de moitié. Incorporez ensuite le jus d’orange et les zestes. Laissez à nouveau [[reduire|réduire]] de moitié."
      - "Dressage. Dans une autre casserole, préparez un bouillon de légumes, puis incorporez-le à la réduction d’orange et [[reduire|laissez réduire]] à nouveau. Versez la sauce sur des légumes rôtis ou du seitan."
      pro:
      - "Laver et peler les oranges. Mettre les zestes dans de l’eau froide. Dès que l’eau commence à bouillir, égoutter, recommencer deux à trois fois. Retirer l’amertume et les potentiels pesticides de la peau."
      - "Presser les oranges, réserver le jus. Chauffer le sucre à feu doux jusqu’à brunissement. Déglacer au vinaigre, réduire de moitié. Incorporer le jus d’orange et les zestes. Réduire à nouveau de moitié."
      - "Préparer un bouillon de légumes. Incorporer à la réduction d’orange, réduire à nouveau. Verser la sauce sur des légumes rôtis ou du seitan."
      cavernes:
      - "Zestes. Oranges, laver, peler. Zestes, eau froide. Eau commence bouillir, égoutter. Recommencer deux à trois fois. Amertume, pesticides peau, retirer."
      - "Dressage. Oranges, presser, jus, réserver. Sucre, casserole, feu doux, chauffer jusqu’à brunisse. Vinaigre, déglacer. Réduire de moitié. Jus orange, zestes, incorporer. Encore, réduire de moitié."
      - "Dressage. Autre casserole. Bouillon légumes. Incorporer réduction orange. Réduire encore. Sauce, légumes rôtis ou seitan, verser."
    kcal_per_serving: 135
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 135
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
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

# Sauce à l'orange
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/sauce-a-lorange]]

## Ingrédients (4 personnes)

- 50 g de sucre
- 6 cl de vinaigre
- 3 orange
- 20 cl de bouillon
- 3 cl de liqueur d'orange (facultatif)

## Préparation

1. Lavez et pelez les oranges. Faites blanchir les zestes dans de l’eau (départ à froid). Dès que l’eau commence à bouillir, égouttez-les puis recommencez l’opération deux à trois fois. Cette étape permet de retirer l’amertume mais également les potentiels pesticides présents dans la peau d’orange.
2. Pressez les oranges pour en récupérer le jus et réservez-le. Dans une casserole, faites chauffer du sucre à feu doux jusqu’à ce qu’il brunisse, puis déglacez-le au vinaigre et laissez réduire de moitié. Incorporez ensuite le jus d’orange et les zestes blanchis. Laissez à nouveau réduire de moitié.
3. Dans une autre casserole, préparez un bouillon avec de la demi-glace ou du fond de volaille, de veau ou légumes, puis incorporez-le à la réduction d’orange et laissez réduire à nouveau.

 
 

 
 Vous n’avez plus qu’à verser la sauce sur le magret tranché. Bon appétit !
