---
schema: recette-web-jigme/v2
equipment: []
slug: club-sandwich-poulet
title: Club sandwich poulet
lang: fr
description: "Club sandwich au poulet rôti, sans bacon, pain de mie, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: américaine
category: salé
tags:
- salé
- sandwich
- poulet
- déjeuner
image:
  url:
  alt: Club sandwich poulet
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
histoire: "Variante du club : on garde les trois étages et la mayo, on remplace le bacon par plus de poulet rôti et parfois de l’avocat. Moins fumé, plus « filet ». Pain toasté obligatoire pour la tenue."
fun_facts:
- text: Beaucoup de cartes d’hôtel proposent un club « chicken » sans porc.
  source_name: "Wikipedia EN, Club sandwich"
  source_url: "https://en.wikipedia.org/wiki/Club_sandwich"
- text: Un blanc rôti tranché mince se superpose mieux qu’un haché.
  source_name: "Wikipedia FR, Blanc de poulet"
  source_url: "https://fr.wikipedia.org/wiki/Blanc_de_poulet"
- text: "Une mayo liée tient le pain ; trop liquide, le club dégouline."
  source_name: "Wikipedia FR, Mayonnaise"
  source_url: "https://fr.wikipedia.org/wiki/Mayonnaise"
wines:
- name: Côtes du Rhône blanc
  producer: Famille Perrin
  origin: "Orange, Rhône"
  grapes: "Grenache blanc, viognier"
  award: 
  why: "Fleurs et poire, friture, fromage."
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre et citron, beurre ou poisson."
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
    - oeuf
    - gluten
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: poulet rôti émincé
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
    - qty: 80
      unit: g
      item: laitue
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Poulet. Émincez le poulet rôti."
    - "Montage. Tartinez de mayonnaise, garnissez de poulet, d’avocat, de tomate et de laitue."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Poulet. Émincez le poulet rôti."
      - "Montage. Tartinez de mayonnaise, garnissez de poulet, d’avocat, de tomate et de laitue."
      pro:
      - "Griller les tranches de pain de mie."
      - "Émincer le poulet rôti."
      - "Tartiner de mayonnaise. Garnir de poulet, d’avocat, de tomate et de laitue."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Poulet. Poulet rôti, émincer."
      - "Montage. Mayonnaise, tartiner. Poulet, avocat, tomate, laitue."
    kcal_per_serving: 610
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
    - oeuf
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: escalopes de fromage pané
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
    - qty: 80
      unit: g
      item: mayonnaise
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Fromage. Dorez les escalopes de fromage pané."
    - "Montage. Tartinez de mayonnaise, garnissez de fromage, d’avocat et de tomate."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Fromage. Dorez les escalopes de fromage pané."
      - "Montage. Tartinez de mayonnaise, garnissez de fromage, d’avocat et de tomate."
      pro:
      - "Griller les tranches de pain de mie."
      - "Dorer les escalopes de fromage pané."
      - "Tartiner de mayonnaise. Garnir de fromage, d’avocat et de tomate."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Fromage. Escalopes fromage pané, dorer."
      - "Montage. Mayonnaise, tartiner. Fromage, avocat, tomate."
    kcal_per_serving: 590
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
    - soja
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: poulet végétal
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise végétale
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
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Montage. Tartinez de mayonnaise végétale, garnissez de poulet végétal, d’avocat et de tomate."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Montage. Tartinez de mayonnaise végétale, garnissez de poulet végétal, d’avocat et de tomate."
      pro:
      - "Griller les tranches de pain de mie."
      - "Tartiner de mayonnaise végétale. Garnir de poulet végétal, d’avocat et de tomate."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Montage. Mayonnaise végétale, tartiner. Poulet végétal, avocat, tomate."
    kcal_per_serving: 520
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
    - oeuf
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 10
      rest_min: 0
      total_min: 20
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 12
      unit: piece
      item: tranches de pain de mie
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: thon égoutté
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: mayonnaise
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
    - qty: 80
      unit: g
      item: laitue
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pain. Faites griller les tranches de pain de mie."
    - "Thon. Mélangez le thon égoutté à la mayonnaise."
    - "Montage. Montez le sandwich sur trois étages."
    steps_niveaux:
      amateur:
      - "Pain. Faites griller les tranches de pain de mie."
      - "Thon. Mélangez le thon égoutté à la mayonnaise."
      - "Montage. Montez le sandwich sur trois étages."
      pro:
      - "Griller les tranches de pain de mie."
      - "Mélanger le thon égoutté à la mayonnaise."
      - "Monter le sandwich sur trois étages."
      cavernes:
      - "Pain. Pain de mie, griller."
      - "Thon. Thon égoutté, mayonnaise, mélanger."
      - "Montage. Sandwich, trois étages."
    kcal_per_serving: 570
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

# Club sandwich poulet

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 12 piece tranches de pain de mie
- 400 g poulet rôti émincé
- 2 piece tomates
- 80 g laitue
- 80 g mayonnaise
- 1 piece avocat

## Préparation

1. Pain. Faites griller les tranches de pain de mie.
2. Poulet. Émincez le poulet rôti.
3. Montage. Tartinez de mayonnaise, garnissez de poulet, d’avocat, de tomate et de laitue.
