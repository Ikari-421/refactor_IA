---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: poulet-aux-noix-de-cajou
title: Poulet aux noix de cajou
lang: fr
description: "Poulet sauté aux noix de cajou, sauce soja, pour 4. Wok. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: chinoise
category: salé
tags:
- salé
- poulet
- cajou
- wok
image:
  url:
  alt: Poulet aux noix de cajou
  credit:
source_fiche: ""
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
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    note: Déjà sans produits laitiers.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œufs.
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
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
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
house_toggle: 
house_options: []
histoire: "Le poulet aux noix de cajou, plat de restaurant sino-américain et cantonais, saute des dés de poulet, cajous, poivron, sauce soja-vinaigre. Wok très chaud, cajous en fin pour rester croquants."
fun_facts:
- text: Le cashew chicken de Springfield (Missouri) est une variante panée locale.
  source_name: "Wikipedia EN, Cashew chicken"
  source_url: "https://en.wikipedia.org/wiki/Cashew_chicken"
- text: "La noix de cajou est la graine de l’anacarde, souvent grillée."
  source_name: "Wikipedia FR, Noix de cajou"
  source_url: "https://fr.wikipedia.org/wiki/Noix_de_cajou"
- text: "Le wok brûlant saisit sans trop d’eau : légumes encore croquants."
  source_name: "Wikipedia FR, Wok"
  source_url: "https://fr.wikipedia.org/wiki/Wok"
wines:
- name: Gewurztraminer Alsace
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Gewurztraminer
  award: 
  why: "Litchi et rose, cuisine épicée."
- name: Riesling Alsace
  producer: Trimbach
  origin: "Ribeauvillé, Alsace"
  grapes: Riesling
  award: 
  why: "Sec, coupe le gras et le sucré léger."
- name: Fleurie
  producer: Domaine de la Madone
  origin: "Fleurie, Beaujolais"
  grapes: Gamay
  award: 
  why: "Fleur, volaille, wok doux."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - fruits_a_coque
    - soja
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: blancs de poulet
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: noix de cajou
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Poulet. Coupez les blancs de poulet en dés, puis faites-les saisir dans l’huile."
    - "Légumes. Ajoutez le poivron et le gingembre, puis faites-les revenir."
    - "Sauce. Versez la sauce soja et le vinaigre de riz, ajoutez les noix de cajou et laissez 1 min."
    steps_niveaux:
      amateur:
      - "Poulet. Coupez les blancs de poulet en dés, puis faites-les saisir dans l’huile."
      - "Légumes. Ajoutez le poivron et le gingembre, puis faites-les revenir."
      - "Sauce. Versez la sauce soja et le vinaigre de riz, ajoutez les noix de cajou et laissez 1 min."
      pro:
      - "Couper les blancs de poulet en dés. Saisir dans l’huile."
      - "Ajouter le poivron et le gingembre. Faire revenir."
      - "Verser la sauce soja et le vinaigre de riz. Ajouter les noix de cajou. Laisser 1 min."
      cavernes:
      - "Poulet. Blancs poulet, dés, huile, saisir."
      - "Légumes. Poivron, gingembre, ajouter, revenir."
      - "Sauce. Sauce soja, vinaigre riz, verser. Noix cajou, ajouter. Laisser 1 min."
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - fruits_a_coque
    - soja
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: noix de cajou
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Tofu. Faites saisir le tofu ferme dans l’huile."
    - "Poivron. Ajoutez le poivron et faites-le revenir."
    - "Sauce, cajous. Versez la sauce soja et le vinaigre de riz, ajoutez les noix de cajou et laissez 1 min."
    steps_niveaux:
      amateur:
      - "Tofu. Faites saisir le tofu ferme dans l’huile."
      - "Poivron. Ajoutez le poivron et faites-le revenir."
      - "Sauce, cajous. Versez la sauce soja et le vinaigre de riz, ajoutez les noix de cajou et laissez 1 min."
      pro:
      - "Saisir le tofu ferme dans l’huile."
      - "Ajouter le poivron. Faire revenir."
      - "Verser la sauce soja et le vinaigre de riz. Ajouter les noix de cajou. Laisser 1 min."
      cavernes:
      - "Tofu. Tofu ferme, huile, saisir."
      - "Poivron. Poivron, ajouter, revenir."
      - "Sauce, cajous. Sauce soja, vinaigre riz, verser. Noix cajou, ajouter. Laisser 1 min."
    kcal_per_serving: 460
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - fruits_a_coque
    - soja
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 460
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - fruits_a_coque
    - soja
    - crustaces
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: crevettes décortiquées
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: noix de cajou
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: poivron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Crevettes. Faites sauter les crevettes décortiquées 3 min."
    - "Poivron, sauce, cajous. Ajoutez le poivron, la sauce soja et les noix de cajou, puis mélangez."
    steps_niveaux:
      amateur:
      - "Crevettes. Faites sauter les crevettes décortiquées 3 min."
      - "Poivron, sauce, cajous. Ajoutez le poivron, la sauce soja et les noix de cajou, puis mélangez."
      pro:
      - "Sauter les crevettes décortiquées 3 min."
      - "Ajouter le poivron, la sauce soja et les noix de cajou. Mélanger."
      cavernes:
      - "Crevettes. Crevettes décortiquées, sauter 3 min."
      - "Poivron, sauce, cajous. Poivron, sauce soja, noix cajou, ajouter. Mélanger."
    kcal_per_serving: 440
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Poulet aux noix de cajou

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 600 g blancs de poulet
- 120 g noix de cajou
- 1 piece poivron
- 40 ml sauce soja
- 15 ml vinaigre de riz
- 10 g gingembre
- 20 ml huile

## Préparation

1. Poulet. Coupez les blancs de poulet en dés, puis faites-les saisir dans l’huile.
2. Légumes. Ajoutez le poivron et le gingembre, puis faites-les revenir.
3. Sauce. Versez la sauce soja et le vinaigre de riz, ajoutez les noix de cajou et laissez 1 min.
