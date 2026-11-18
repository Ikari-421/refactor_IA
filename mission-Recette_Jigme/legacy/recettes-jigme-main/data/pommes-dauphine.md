---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: pommes-dauphine
title: Pommes dauphine
lang: fr
description: "Pommes dauphine : recette française de purée de pommes de terre et pâte à choux, frites, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- pomme de terre
- friture
- accompagnement
image:
  url:
  alt: Pommes dauphine
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
    - from: farine de blé
      to: mix sans gluten
      note: Hydratation à ajuster.
    note: "Pâte à choux au blé : mix sans gluten, tenue différente."
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
histoire: "Les pommes dauphine mêlent purée de pommes de terre et pâte à choux, puis friture. Garniture de viande rôtie au XIXe siècle. Le nom évoque le Dauphiné, sans preuve d’origine provinciale unique."
fun_facts:
- text: "Purée + pâte à choux : la pâte gonfle en friture, d’où le moelleux."
  source_name: "Wikipedia FR, Pommes dauphine"
  source_url: "https://fr.wikipedia.org/wiki/Pommes_dauphine"
- text: "On les distingue des pommes duchesse, qui passent au four, pas à l’huile."
  source_name: "Wikipedia FR, Pommes dauphine"
  source_url: "https://fr.wikipedia.org/wiki/Pommes_dauphine"
- text: "Une pâte trop molle éclate ; trop ferme, elle ne gonfle pas."
  source_name: "Wikipedia FR, Pâte à choux"
  source_url: "https://fr.wikipedia.org/wiki/P%C3%A2te_%C3%A0_choux"
wines:
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Sec, coupe la friture."
- name: Crémant de Bourgogne
  producer: Louis Bouillot
  origin: Nuits-Saint-Georges
  grapes: "Chardonnay, pinot noir"
  award: 
  why: "Bulles, pomme de terre et beurre."
- name: Mâcon-Villages
  producer: Cave de Lugny
  origin: "Mâconnais, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Souple, accompagnement de rôti."
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
    - gluten
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 3
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - casserole
    - friteuse
    substitutions:
    - from: friture
      to: four 200 °C 20 min
      note: Moins gonflé.
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: eau
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
    - qty: 50
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
    - qty: 1000
      unit: ml
      item: huile de friture
      group: 
      scale: false
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
      item: muscade
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Purée. Faites cuire les pommes de terre, écrasez-les bien sèches, puis assaisonnez de sel et de muscade."
    - "Choux. Portez l’eau et le beurre à ébullition, versez la farine d’un coup, desséchez. Incorporez les œufs un à un."
    - "Mélange. Réunissez moitié purée, moitié pâte à choux, jusqu’à une pâte souple."
    - "Friture. Faites chauffer l’huile à 170 °C, plongez des cuillerées et dorez 4 à 5 min."
    - "Égouttage. Égouttez sur du papier et salez."
    steps_niveaux:
      amateur:
      - "Purée. Faites cuire les pommes de terre, écrasez-les bien sèches, puis assaisonnez de sel et de muscade."
      - "Choux. Portez l’eau et le beurre à ébullition, versez la farine d’un coup, [[dessecher|desséchez]]. Incorporez les œufs un à un."
      - "Mélange. Réunissez moitié purée, moitié pâte à choux, jusqu’à une pâte souple."
      - "Friture. Faites chauffer l’huile à 170 °C, plongez des cuillerées et dorez 4 à 5 min."
      - "Égouttage. Égouttez sur du papier et salez."
      pro:
      - "Cuire les pommes de terre. Écraser bien sèches. Assaisonner de sel et de muscade."
      - "Porter l’eau et le beurre à ébullition. Verser la farine d’un coup. Dessécher. Incorporer les œufs un à un."
      - "Réunir moitié purée, moitié pâte à choux, jusqu’à pâte souple."
      - "Chauffer l’huile à 170 °C. Plonger des cuillerées. Dorer 4 à 5 min."
      - "Égoutter sur papier. Saler."
      cavernes:
      - "Purée. Pommes de terre, cuire. Écraser, bien sèches. Sel, muscade, assaisonner."
      - "Choux. Eau, beurre, ébullition. Farine, 1 coup, verser. Dessécher. Œufs 1 à 1, incorporer."
      - "Mélange. Moitié purée, moitié pâte choux, réunir. Pâte souple."
      - "Friture. Huile 170 °C, chauffer. Cuillerées, plonger. Dorer 4 à 5 min."
      - "Égouttage. Papier, égoutter. Saler."
    kcal_per_serving: 390
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
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
    difficulty: 3
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - casserole
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 50
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
    - qty: 1000
      unit: ml
      item: huile de friture
      group: 
      scale: false
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
      item: muscade
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Purée. Écrasez les pommes de terre, puis assaisonnez de sel et de muscade."
    - "Pâte. Portez l’eau et la margarine végétale à ébullition, ajoutez la farine, puis le lait d’avoine."
    - "Mélange. Réunissez la purée et la pâte."
    - "Friture. Faites frire à 170 °C pendant 4 à 5 min."
    steps_niveaux:
      amateur:
      - "Purée. Écrasez les pommes de terre, puis assaisonnez de sel et de muscade."
      - "Pâte. Portez l’eau et la margarine végétale à ébullition, ajoutez la farine, puis le lait d’avoine."
      - "Mélange. Réunissez la purée et la pâte."
      - "Friture. [[frire|Faites frire]] à 170 °C pendant 4 à 5 min."
      pro:
      - "Écraser les pommes de terre. Assaisonner de sel et de muscade."
      - "Porter l’eau et la margarine végétale à ébullition. Ajouter la farine, puis le lait d’avoine."
      - "Réunir la purée et la pâte."
      - "Frire à 170 °C 4 à 5 min."
      cavernes:
      - "Purée. Pommes de terre, écraser. Sel, muscade, assaisonner."
      - "Pâte. Eau, margarine végétale, ébullition. Farine, ajouter. Lait avoine, ajouter."
      - "Mélange. Purée, pâte, réunir."
      - "Friture. 170 °C, 4 à 5 min, frire."
    kcal_per_serving: 360
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 390
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    dessecher:
      terme: "dessécher"
      explication: "Vous ajoutez la farine à la panade, sur le feu. Vous remuez jusqu’à ce que la pâte se détache et sèche (un film au fond). C’est réussi quand la pâte se détache et qu’un film se forme au fond."
      ref: Cuisine/Lexique/dessecher.md
  vegan:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: La friture ramollit au frigo.}
  congelation: {possible: true, duree: 1 mois, decongelation: "à l'huile encore congelé", note: ""}
  temperature_ambiante: {duree: le jour même, note: Servir chaud.}
  rechauffage: Four 180 °C quelques minutes.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Pommes dauphine

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 500 g pommes de terre
- 80 ml eau
- 40 g beurre doux
- 50 g farine de blé
- 2 piece œufs
- 1000 ml huile de friture
- sel (au goût)
- muscade (au goût)

## Préparation

1. Purée. Faites cuire les pommes de terre, écrasez-les bien sèches, puis assaisonnez de sel et de muscade.
2. Choux. Portez l’eau et le beurre à ébullition, versez la farine d’un coup, desséchez. Incorporez les œufs un à un.
3. Mélange. Réunissez moitié purée, moitié pâte à choux, jusqu’à une pâte souple.
4. Friture. Faites chauffer l’huile à 170 °C, plongez des cuillerées et dorez 4 à 5 min.
5. Égouttage. Égouttez sur du papier et salez.
