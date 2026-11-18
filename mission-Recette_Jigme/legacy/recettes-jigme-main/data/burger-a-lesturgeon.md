---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: burger-a-lesturgeon
title: "Burger à l'esturgeon"
lang: fr
description: "Burger à l'esturgeon : recette française avec pavé d’esturgeon, pain et crudités, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- esturgeon
- pain
- poisson
image:
  url:
  alt: "Burger à l'esturgeon"
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
    swaps:
    - from: pains burger
      to: pains sans gluten
      note: Même taille.
    note: Pain de blé → pain sans gluten.
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
    note: "Sans esturgeon : version végétarienne halloumi."
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
histoire: "L’esturgeon, longtemps pêché pour le caviar, se cuisine aussi en pavé. Ici, sandwich type burger : pain, poisson poêlé, crudités. L’élevage d’esturgeon en France a relancé la chair."
fun_facts:
- text: L’esturgeon est surtout connu pour les œufs (caviar) ; la chair se poêle comme un poisson gras.
  source_name: "Wikipedia FR, Esturgeon"
  source_url: "https://fr.wikipedia.org/wiki/Esturgeon"
- text: Plusieurs espèces d’esturgeons sont protégées ; préférer un élevage identifié.
  source_name: "Wikipedia FR, Esturgeon"
  source_url: "https://fr.wikipedia.org/wiki/Esturgeon"
- text: Un pain brioché trop sucré écrase le poisson ; un pain ferme tient mieux le jus.
  source_name: "Wikipedia FR, Hamburger"
  source_url: "https://fr.wikipedia.org/wiki/Hamburger"
wines:
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Sec, pierre, tient un poisson gras poêlé."
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et silex, crudités du sandwich."
- name: Champagne Brut
  producer: Pierre Gimonnet
  origin: Côte des Blancs
  grapes: Chardonnay
  award: 
  why: "Bulles, pain et poisson."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - poisson
    - oeuf
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - poêle
    - spatule
    substitutions:
    - from: esturgeon
      to: saumon
      note: Même cuisson.
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: pains burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: "pavés d'esturgeon"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates
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
    - qty: 80
      unit: g
      item: salade
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: true
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pain. Ouvrez les pains burger et faites-les dorer 1 min dans le beurre doux."
    - "Poisson. Salez les pavés d’esturgeon et poêlez-les 3 à 4 min par face, encore nacrés au cœur."
    - "Montage. Garnissez de salade, de tomate, d’oignon rouge, de poisson et de mayonnaise, si vous en mettez."
    - "Finition. Servez tout de suite, le pain encore chaud."
    steps_niveaux:
      amateur:
      - "Pain. Ouvrez les pains burger et faites-les dorer 1 min dans le beurre doux."
      - "Poisson. Salez les pavés d’esturgeon et poêlez-les 3 à 4 min par face, encore nacrés au cœur."
      - "Montage. Garnissez de salade, de tomate, d’oignon rouge, de poisson et de mayonnaise, si vous en mettez."
      - "Finition. Servez tout de suite, le pain encore chaud."
      pro:
      - "Ouvrir les pains burger. Dorer 1 min dans le beurre doux."
      - "Saler les pavés d’esturgeon. Poêler 3 à 4 min par face, encore nacrés au cœur."
      - "Garnir : salade, tomate, oignon rouge, poisson, mayonnaise si prévue."
      - "Servir tout de suite, pain encore chaud."
      cavernes:
      - "Pain. Pains burger, ouvrir. Beurre doux, dorer 1 min."
      - "Poisson. Pavés esturgeon, saler. Poêler 3 à 4 min par face. Cœur encore nacré."
      - "Montage. Salade, tomate, oignon rouge, poisson. Mayonnaise, si mettez. Garnir."
      - "Finition. Servir tout de suite. Pain encore chaud."
    kcal_per_serving: 560
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
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: pains burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: halloumi
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates
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
    - qty: 80
      unit: g
      item: salade
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pain. Faites dorer les pains burger dans le beurre doux."
    - "Fromage. Poêlez les tranches de halloumi jusqu’à ce qu’elles soient bien marquées."
    - "Montage. Garnissez de salade, de tomate, d’oignon rouge et de halloumi."
    steps_niveaux:
      amateur:
      - "Pain. Faites dorer les pains burger dans le beurre doux."
      - "Fromage. Poêlez les tranches de halloumi jusqu’à ce qu’elles soient bien marquées."
      - "Montage. Garnissez de salade, de tomate, d’oignon rouge et de halloumi."
      pro:
      - "Dorer les pains burger dans le beurre doux."
      - "Poêler les tranches de halloumi jusqu’à marquage net."
      - "Garnir : salade, tomate, oignon rouge, halloumi."
      cavernes:
      - "Pain. Pains burger, beurre doux, dorer."
      - "Fromage. Tranches halloumi, poêler. Bien marquées."
      - "Montage. Salade, tomate, oignon rouge, halloumi. Garnir."
    kcal_per_serving: 520
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
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: pains burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: steaks de pois
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates
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
    - qty: 80
      unit: g
      item: salade
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: mayonnaise végétale
      group: 
      scale: true
      optional: true
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pain. Faites dorer les pains burger à l’huile d’olive."
    - "Steaks. Poêlez les steaks de pois selon les indications de l’emballage."
    - "Montage. Garnissez de salade, de tomate, d’oignon rouge, du steak de pois et de mayonnaise végétale."
    steps_niveaux:
      amateur:
      - "Pain. Faites dorer les pains burger à l’huile d’olive."
      - "Steaks. Poêlez les steaks de pois selon les indications de l’emballage."
      - "Montage. Garnissez de salade, de tomate, d’oignon rouge, du steak de pois et de mayonnaise végétale."
      pro:
      - "Dorer les pains burger à l’huile d’olive."
      - "Poêler les steaks de pois selon les indications de l’emballage."
      - "Garnir : salade, tomate, oignon rouge, steak de pois, mayonnaise végétale."
      cavernes:
      - "Pain. Pains burger, huile olive, dorer."
      - "Steaks. Steaks pois, poêler selon indications emballage."
      - "Montage. Salade, tomate, oignon rouge, steak pois, mayonnaise végétale. Garnir."
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - poisson
    - oeuf
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 560
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
  a_verifier: true
  note_verif: "Poisson cuit : 24 à 48 h. Ne pas recongeler."

---

# Burger à l'esturgeon

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 4 piece pains burger
- 600 g pavés d'esturgeon
- 2 piece tomates
- 1 piece oignon rouge
- 80 g salade
- 40 g beurre doux
- 40 g mayonnaise
- sel (au goût)
- poivre (au goût)

## Préparation

1. Pain. Ouvrez les pains burger et faites-les dorer 1 min dans le beurre doux.
2. Poisson. Salez les pavés d’esturgeon et poêlez-les 3 à 4 min par face, encore nacrés au cœur.
3. Montage. Garnissez de salade, de tomate, d’oignon rouge, de poisson et de mayonnaise, si vous en mettez.
4. Finition. Servez tout de suite, le pain encore chaud.
