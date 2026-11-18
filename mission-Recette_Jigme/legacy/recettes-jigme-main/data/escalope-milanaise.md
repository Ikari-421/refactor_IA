---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: escalope-milanaise
title: Escalope milanaise
lang: fr
description: "Escalope milanaise : recette lombarde de veau pané à la chapelure, frit à la poêle, pour 4 personnes. Facile à suivre à la maison."
cuisine: italienne
category: salé
tags:
- salé
- veau
- panure
- Milan
image:
  url:
  alt: Escalope milanaise
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
    - from: chapelure
      to: chapelure sans gluten
      note: Même geste.
    note: Chapelure de blé → chapelure sans gluten.
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
histoire: "La cotoletta alla milanese est une côte ou une escalope de veau panée, cuite dans le beurre ou l’huile. Elle se distingue de la viennoise par l’os parfois laissé et la panure sans parmesan obligatoire."
fun_facts:
- text: Milan et Vienne se disputent l’origine de l’escalope panée.
  source_name: "Wikipedia FR, Cotoletta"
  source_url: "https://fr.wikipedia.org/wiki/Cotoletta"
- text: "La milanaise se cuit souvent au beurre clarifié, panure bien dorée, viande rose."
  source_name: "Wikipedia FR, Cotoletta"
  source_url: "https://fr.wikipedia.org/wiki/Cotoletta"
- text: "Une panure trop épaisse cuit trop vite et laisse le veau cru, ou l’inverse."
  source_name: "Wikipedia EN, Cotoletta"
  source_url: "https://en.wikipedia.org/wiki/Cotoletta"
wines:
- name: Soave Classico
  producer: Pieropan
  origin: "Soave, Vénétie"
  grapes: Garganega
  award: 
  why: "Blanc sec, amande, coupe le gras de la panure."
- name: "Barbera d'Asti"
  producer: Vietti
  origin: Piémont
  grapes: Barbera
  award: 
  why: Acidité sur le veau pané.
- name: Pinot Grigio
  producer: Alois Lageder
  origin: Alto Adige
  grapes: Pinot gris
  award: 
  why: "Léger, poêle, citron à table."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - trois assiettes
    - poêle
    substitutions:
    - from: veau
      to: dinde
      note: Même panure.
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: escalopes de veau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
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
    - qty: 1
      unit: piece
      item: citron
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Panure. Préparez la farine, les œufs battus et la chapelure. Salez et poivrez le veau."
    - "Panage. Farinez, passez à l’œuf, pannez à la chapelure. Tassez."
    - "Cuisson. Faites chauffer le beurre et l’huile. Comptez 3 min par face, jusqu’à ce que ce soit doré."
    - "Finition. Égouttez. Servez avec le citron."
    steps_niveaux:
      amateur:
      - "Panure. Préparez la farine, les œufs battus et la chapelure. Salez et poivrez le veau."
      - "Panage. Farinez, passez à l’œuf, pannez à la chapelure. Tassez."
      - "Cuisson. Faites chauffer le beurre et l’huile. Comptez 3 min par face, jusqu’à ce que ce soit doré."
      - "Finition. Égouttez. Servez avec le citron."
      pro:
      - "Panure. Préparer la farine, les œufs battus et la chapelure. Saler et poivrer le veau."
      - "Panage. Fariner. Passer à l’œuf. Panner à la chapelure. Tasser."
      - "Cuisson. Faire chauffer le beurre et l’huile. Compter 3 min par face, jusqu’à ce que ce soit doré."
      - "Finition. Égoutter. Servir avec le citron."
      cavernes:
      - "Panure. Farine, œufs battus, chapelure, préparer. Veau, saler, poivrer."
      - "Panage. Fariner. Œuf, passer. Chapelure, panner. Tasser."
      - "Cuisson. Beurre, huile, chauffer. 3 min par face, jusqu’à doré."
      - "Finition. Égoutter. Citron, servir."
    kcal_per_serving: 580
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
    - oeuf
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: "tranches d'aubergine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Panure. Salez les tranches d’aubergine 10 min, essuyez-les. Passez-les à la farine, à l’œuf, puis à la chapelure."
    - "Cuisson. Faites cuire dans l’huile, 3 min par face."
    - "Finition. Servez avec le citron."
    steps_niveaux:
      amateur:
      - "Panure. Salez les tranches d’aubergine 10 min, essuyez-les. Passez-les à la farine, à l’œuf, puis à la chapelure."
      - "Cuisson. Faites cuire dans l’huile, 3 min par face."
      - "Finition. Servez avec le citron."
      pro:
      - "Panure. Saler les tranches d’aubergine 10 min, essuyer. Passer à la farine, à l’œuf, puis à la chapelure."
      - "Cuisson. Cuire dans l’huile, 3 min par face."
      - "Finition. Servir avec le citron."
      cavernes:
      - "Panure. Tranches aubergine, saler 10 min, essuyer. Farine, œuf, chapelure, passer."
      - "Cuisson. Huile, cuire 3 min par face."
      - "Finition. Citron, servir."
    kcal_per_serving: 390
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
    - pesco
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 4
      unit: piece
      item: "tranches d'aubergine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Panure. Passez l’aubergine à la farine, au lait d’avoine, puis à la chapelure."
    - "Cuisson. Faites cuire dans l’huile, 3 min par face."
    - "Finition. Servez avec le citron."
    steps_niveaux:
      amateur:
      - "Panure. Passez l’aubergine à la farine, au lait d’avoine, puis à la chapelure."
      - "Cuisson. Faites cuire dans l’huile, 3 min par face."
      - "Finition. Servez avec le citron."
      pro:
      - "Panure. Passer l’aubergine à la farine, au lait d’avoine, puis à la chapelure."
      - "Cuisson. Cuire dans l’huile, 3 min par face."
      - "Finition. Servir avec le citron."
      cavernes:
      - "Panure. Aubergine, farine, lait avoine, chapelure, passer."
      - "Cuisson. Huile, cuire 3 min par face."
      - "Finition. Citron, servir."
    kcal_per_serving: 360
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - oeuf
    - poisson
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
      item: filets de cabillaud
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Panure. Passez les filets de cabillaud à la farine, à l’œuf, puis à la chapelure."
    - "Cuisson. Faites cuire dans l’huile, 2 à 3 min par face."
    - "Finition. Servez avec le citron."
    steps_niveaux:
      amateur:
      - "Panure. Passez les filets de cabillaud à la farine, à l’œuf, puis à la chapelure."
      - "Cuisson. Faites cuire dans l’huile, 2 à 3 min par face."
      - "Finition. Servez avec le citron."
      pro:
      - "Panure. Passer les filets de cabillaud à la farine, à l’œuf, puis à la chapelure."
      - "Cuisson. Cuire dans l’huile, 2 à 3 min par face."
      - "Finition. Servir avec le citron."
      cavernes:
      - "Panure. Filets cabillaud, farine, œuf, chapelure, passer."
      - "Cuisson. Huile, cuire 2 à 3 min par face."
      - "Finition. Citron, servir."
    kcal_per_serving: 450
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

# Escalope milanaise

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 4 piece escalopes de veau
- 80 g farine de blé
- 2 piece œufs
- 120 g chapelure
- 60 g beurre doux
- 20 ml huile d'olive
- sel (au goût)
- poivre (au goût)
- 1 piece citron

## Préparation

1. Panure. Préparez la farine, les œufs battus et la chapelure. Salez et poivrez le veau.
2. Panage. Farinez, passez à l’œuf, pannez à la chapelure. Tassez.
3. Cuisson. Faites chauffer le beurre et l’huile. Comptez 3 min par face, jusqu’à ce que ce soit doré.
4. Finition. Égouttez. Servez avec le citron.
