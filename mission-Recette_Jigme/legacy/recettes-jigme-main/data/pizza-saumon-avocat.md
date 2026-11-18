---
schema: recette-web-jigme/v2
equipment: []
slug: pizza-saumon-avocat
statut: brouillon
hidden: true
title: Pizza saumon avocat
lang: fr
description: "Pizza saumon fumé, avocat, crème, pour 4. Pizza froide sur pâte chaude. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- pizza
- saumon
- avocat
image:
  url:
  alt: Pizza saumon avocat
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œufs.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "Pizza « nordique » : pâte cuite avec crème ou fromage, saumon fumé et avocat posés hors du four. Le fumé ne recuit pas. Aneth, citron. Pâte maison ou disque du commerce."
fun_facts:
- text: "Hors de Naples, la pizza s’ouvre aux garnitures froides après cuisson."
  source_name: "Wikipedia FR, Pizza"
  source_url: "https://fr.wikipedia.org/wiki/Pizza"
- text: "Le saumon fumé se pose à la sortie du four, pas pendant."
  source_name: "Wikipedia FR, Saumon fumé"
  source_url: "https://fr.wikipedia.org/wiki/Saumon_fum%C3%A9"
- text: "L’avocat mûr, en lames, remplace souvent la mozzarella trop cuite."
  source_name: "Wikipedia FR, Avocat"
  source_url: "https://fr.wikipedia.org/wiki/Avocat_(fruit)"
wines:
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et pierre, plat vif ou herbes."
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre et citron, beurre ou poisson."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, gâteau, brunch, pancakes."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: pâte à pizza
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: saumon fumé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocats
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: aneth
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Étalez la pâte, nappez de crème fraîche, puis enfournez 12 min à 250 °C."
    - "Froid. Ajoutez le saumon fumé, l’avocat, l’aneth et le citron."
    - "Servir de suite. Coupez en parts dès la sortie, dressez tiède, le saumon et l’avocat encore froids."
    kcal_per_serving: 620
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: pâte à pizza
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocats
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: mozzarella
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: aneth
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Nappez de crème fraîche, ajoutez la mozzarella, puis enfournez 12 min."
    - "Avocat, aneth. Ajoutez l’avocat et l’aneth."
    - "Servir. Coupez en parts dès la sortie, dressez tiède, l’avocat et l’aneth encore frais."
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: pâte à pizza
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: avocats
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: crème végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: tomates cerises
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: aneth
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Nappez de crème végétale, puis enfournez 12 min."
    - "Avocat, tomates, aneth. Ajoutez l’avocat, les tomates cerises et l’aneth."
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - gluten
    - poisson
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 620
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 à 48 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: Ne pas recongeler.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C) si servi chaud.
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Poisson : 24 à 48 h au frigo. Ne pas recongeler."

---

# Pizza saumon avocat

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 500 g pâte à pizza
- 200 g saumon fumé
- 2 piece avocats
- 100 g crème fraîche
- 10 g aneth
- 1 piece citron

## Préparation

1. Pâte. Étalez la pâte, nappez de crème fraîche, puis enfournez 12 min à 250 °C.
2. Froid. Ajoutez le saumon fumé, l’avocat, l’aneth et le citron.
3. Servir de suite. Coupez en parts dès la sortie, dressez tiède, le saumon et l’avocat encore froids.

