---
schema: recette-web-jigme/v2
slug: mimosa-passion
title: Mimosa passion
lang: fr
description: "Mimosa passion : recette française avec triple sec, champagne et jus de fruit de la passion, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- boisson
- végane
- rapide
image:
  url:
  alt: Mimosa passion
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/mimosa-passion.md
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
    - from: champagne
      to: bouillon de légumes
      note:
    note: 'Sulfites : champagne → bouillon de légumes.'
house_toggle:
house_options: []
histoire: 'Mimosa : cocktail à parts égales de jus d’orange et de vin effervescent (champagne, prosecco
  ou cava), servi très froid. La version « passion » remplace ou complète l’orange par du fruit de la
  passion : variante contemporaine, pas le mimosa de bar du XXe s.

  '
fun_facts:
- text: >
    Un champagne cher s’y noie : un crémant ou un prosecco brut suffit, le jus
    mène le goût.
  source_name: Grokipedia, Wine cocktail
  source_url: https://grokipedia.com/page/Wine_cocktail
- text: >
    Le fruit de la passion est très acide : on sucrerait trop le cocktail en
    prenant un effervescent demi-sec.
  source_name: Usage
  source_url:
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "Déjà un cocktail à l’effervescent et au fruit : un vin en plus ne sert à rien."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 5
      cook_min: 0
      rest_min: 0
      total_min: 5
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 20
      unit: ml
      item: triple sec
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: champagne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: jus de fruit de la passion
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Finition. Dans une coupe de champagne, verser le triple sec, le champagne puis le jus de fruit
      de la passion. C’est déjà prêt ! Santé !
    steps_niveaux:
      amateur:
      - "Finition. Dans une coupe de champagne, versez le triple sec, le champagne puis le jus de fruit de la passion. C’est déjà prêt ! Santé !"
      pro:
      - "Dans une coupe de champagne : verser le triple sec, le champagne, puis le jus de fruit de la passion. Servir."
      cavernes:
      - "Finition. Coupe champagne. Triple sec, champagne, jus fruit passion, verser. Déjà prêt. Santé."
    kcal_per_serving: 70
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: &id003 []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 70
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: []
    difficulty: 2
    time:
      prep_min: 5
      cook_min: 0
      rest_min: 0
      total_min: 5
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 20
      unit: ml
      item: triple sec
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: champagne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: jus de fruit de la passion
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Finition. Dans une coupe de champagne, verser le triple sec, le champagne puis le jus de fruit
      de la passion. C’est déjà prêt ! Santé !
    steps_niveaux:
      amateur:
      - "Finition. Dans une coupe de champagne, versez le triple sec, le champagne puis le jus de fruit de la passion. C’est déjà prêt ! Santé !"
      pro:
      - "Dans une coupe de champagne : verser le triple sec, le champagne, puis le jus de fruit de la passion. Servir."
      cavernes:
      - "Finition. Coupe champagne. Triple sec, champagne, jus fruit passion, verser. Déjà prêt. Santé."
    kcal_per_serving: 70
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 1
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: *id003
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 70
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "bouteille fermée", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Mimosa passion
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 1 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/mimosa-passion]]

## Ingrédients (1 personnes)

- 2 cl de triple sec
- 6 cl de champagne
- 6 cl de jus de fruit de la passion

## Préparation

1. Dans une coupe de champagne, verser le triple sec, le champagne puis le jus de fruit de la passion.

 
 

 
 C’est déjà prêt ! Santé !
