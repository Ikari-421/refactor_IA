---
schema: recette-web-jigme/v2
equipment: []
slug: pizza-a-la-viande
title: Pizza à la viande
lang: fr
description: "Pizza viande hachée, tomate, mozzarella, pour 4. Pizza généreuse. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: italienne
category: salé
tags:
- salé
- pizza
- bœuf
- tomate
image:
  url:
  alt: Pizza à la viande
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Pizza garnie de viande hachée (bœuf ou mélange), sauce tomate, mozzarella : version « meat » des pizzerias, loin de la Margherita napolitaine. Viande précuite pour ne pas détremper. Four très chaud."
fun_facts:
- text: La pizza napolitaine IGP est plus sobre ; la viande hachée est une variante mondiale.
  source_name: "Wikipedia FR, Pizza"
  source_url: "https://fr.wikipedia.org/wiki/Pizza"
- text: Un four 250 °C mini donne un fond croustillant malgré la garniture.
  source_name: "Wikipedia EN, Pizza"
  source_url: "https://en.wikipedia.org/wiki/Pizza"
- text: Une mozzarella bien égouttée évite l’eau sur la pâte.
  source_name: "Wikipedia FR, Mozzarella"
  source_url: "https://fr.wikipedia.org/wiki/Mozzarella"
wines:
- name: Chianti Classico
  producer: Fontodi
  origin: "Panzano, Toscane"
  grapes: Sangiovese
  award: 
  why: "Acidité, tomate, pâtes, pecorino."
- name: "Montepulciano d'Abruzzo"
  producer: Emidio Pepe
  origin: Abruzzes
  grapes: Montepulciano
  award: 
  why: "Fruit noir, bœuf, sauce brune."
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, tomate, viande, mijoté."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
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
    - qty: 300
      unit: g
      item: bœuf haché
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sauce tomate
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: mozzarella
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Viande. Faites revenir le bœuf haché et les oignons 8 min."
    - "Pâte. Étalez la pâte, garnissez de sauce tomate, de viande et de mozzarella."
    - "Four. Enfournez 12 min à 250 °C."
    steps_niveaux:
      amateur:
      - "Viande. Faites revenir le bœuf haché et les oignons 8 min."
      - "Pâte. Étalez la pâte, garnissez de sauce tomate, de viande et de mozzarella."
      - "Four. Enfournez 12 min à 250 °C."
      pro:
      - "Faire revenir le bœuf haché et les oignons 8 min."
      - "Étaler la pâte. Garnir de sauce tomate, de viande et de mozzarella."
      - "Enfourner 12 min à 250 °C."
      cavernes:
      - "Viande. Bœuf haché, oignons, revenir 8 min."
      - "Pâte. Pâte, étaler. Sauce tomate, viande, mozzarella, garnir."
      - "Four. 12 min, 250 °C, enfourner."
    kcal_per_serving: 720
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
    - qty: 250
      unit: g
      item: champignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sauce tomate
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: mozzarella
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Champignons. Faites-les poêler."
    - "Pâte. Étalez la pâte, garnissez de sauce tomate et de mozzarella."
    - "Four. Enfournez 12 min à 250 °C."
    steps_niveaux:
      amateur:
      - "Champignons. Faites-les poêler."
      - "Pâte. Étalez la pâte, garnissez de sauce tomate et de mozzarella."
      - "Four. Enfournez 12 min à 250 °C."
      pro:
      - "Poêler les champignons."
      - "Étaler la pâte. Garnir de sauce tomate et de mozzarella."
      - "Enfourner 12 min à 250 °C."
      cavernes:
      - "Champignons. Poêler."
      - "Pâte. Pâte, étaler. Sauce tomate, mozzarella, garnir."
      - "Four. 12 min, 250 °C, enfourner."
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
    - qty: 250
      unit: g
      item: champignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sauce tomate
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: fromage végétal
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Champignons. Faites-les revenir 8 min."
    - "Pâte. Étalez la pâte, garnissez de sauce tomate et de fromage végétal."
    - "Four. Enfournez 12 min."
    steps_niveaux:
      amateur:
      - "Champignons. Faites-les revenir 8 min."
      - "Pâte. Étalez la pâte, garnissez de sauce tomate et de fromage végétal."
      - "Four. Enfournez 12 min."
      pro:
      - "Faire revenir les champignons 8 min."
      - "Étaler la pâte. Garnir de sauce tomate et de fromage végétal."
      - "Enfourner 12 min."
      cavernes:
      - "Champignons. Revenir 8 min."
      - "Pâte. Pâte, étaler. Sauce tomate, fromage végétal, garnir."
      - "Four. 12 min, enfourner."
    kcal_per_serving: 540
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
    - lactose
    - produits_laitiers
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
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
      item: thon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sauce tomate
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: mozzarella
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Étalez la pâte, garnissez de sauce tomate, de thon et de mozzarella."
    - "Four. Enfournez 12 min à 250 °C."
    steps_niveaux:
      amateur:
      - "Pâte. Étalez la pâte, garnissez de sauce tomate, de thon et de mozzarella."
      - "Four. Enfournez 12 min à 250 °C."
      pro:
      - "Étaler la pâte. Garnir de sauce tomate, de thon et de mozzarella."
      - "Enfourner 12 min à 250 °C."
      cavernes:
      - "Pâte. Pâte, étaler. Sauce tomate, thon, mozzarella, garnir."
      - "Four. 12 min, 250 °C, enfourner."
    kcal_per_serving: 640
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

# Pizza à la viande

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 500 g pâte à pizza
- 300 g bœuf haché
- 200 g sauce tomate
- 200 g mozzarella
- 80 g oignons

## Préparation

1. Viande. Faites revenir le bœuf haché et les oignons 8 min.
2. Pâte. Étalez la pâte, garnissez de sauce tomate, de viande et de mozzarella.
3. Four. Enfournez 12 min à 250 °C.
