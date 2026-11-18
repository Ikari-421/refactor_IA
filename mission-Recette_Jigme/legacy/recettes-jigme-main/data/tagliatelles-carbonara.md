---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: tagliatelles-carbonara
title: Tagliatelles carbonara
lang: fr
description: "Tagliatelles carbonara : recette romaine de pâtes, guanciale, œufs et pecorino, sans crème, pour 4 personnes. Facile à suivre à la maison."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- porc
- œuf
image:
  url:
  alt: Tagliatelles carbonara
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
    note: Pâtes de blé → tagliatelles sans gluten.
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
    note: "Sans œuf, ce n’est plus une carbonara : crème végétale, autre plat."
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
histoire: "La carbonara est un plat de pâtes romain : guanciale, œuf, pecorino, poivre. Pas de crème dans la version d’Italie. Les tagliatelles tiennent la sauce ; spaghetti et rigatoni aussi. L’après-guerre a fixé la recette actuelle."
fun_facts:
- text: "La crème n’est pas dans la carbonara romaine : l’œuf et le pecorino lient."
  source_name: "Wikipedia FR, Carbonara"
  source_url: "https://fr.wikipedia.org/wiki/Carbonara"
- text: "Le guanciale (joue) n’est pas de la pancetta ; plus gras, plus parfumé."
  source_name: "Wikipedia EN, Carbonara"
  source_url: "https://en.wikipedia.org/wiki/Carbonara"
- text: "Hors du feu, sinon l’œuf brouille."
  source_name: "Wikipedia FR, Carbonara"
  source_url: "https://fr.wikipedia.org/wiki/Carbonara"
wines:
- name: Frascati
  producer: Fontana Candida
  origin: Latium
  grapes: "Malvasia, trebbiano"
  award: 
  why: "Blanc local, gras du guanciale."
- name: Chianti Classico
  producer: Fontodi
  origin: "Panzano, Toscane"
  grapes: Sangiovese
  award: 
  why: "Acidité, pecorino, poivre."
- name: Verdicchio
  producer: Umani Ronchi
  origin: Marches
  grapes: Verdicchio
  award: 
  why: "Amande, pâtes, jaune d’œuf."
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
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    - grande casserole
    substitutions:
    - from: guanciale
      to: pancetta
      note: Moins typique.
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: tagliatelles
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: guanciale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: "jaunes d'œufs"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: pecorino romano râpé
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
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pâtes. Portez de l’eau salée à ébullition et cuisez les tagliatelles al dente."
    - "Guanciale. Faites rissoler le guanciale sans matière grasse, jusqu’à ce que la graisse fonde."
    - "Jaunes. Mélangez les jaunes d’œufs et le pecorino romano râpé, poivrez, puis détendez avec un peu d’eau de cuisson."
    - "Liaison. Hors du feu, mélangez les pâtes et le guanciale avec les jaunes, jusqu’à lier. Servez aussitôt."
    steps_niveaux:
      amateur:
      - "Portez de l’eau salée à ébullition et cuisez les tagliatelles [[al-dente|al dente]], encore fermes sous la dent. Prélevez un peu d’eau de cuisson, puis égouttez."
      - "Faites rissoler le guanciale sans matière grasse, jusqu’à ce que la graisse fonde : il dore dans son gras, vous n’ajoutez ni huile ni beurre."
      - "Mélangez les jaunes d’œufs et le pecorino romano râpé, poivrez, puis détendez avec un peu d’eau de cuisson : vous assouplissez le mélange."
      - "[[hors-du-feu|Hors du feu]], mélangez les pâtes et le guanciale avec les jaunes, jusqu’à lier : une sauce unie accroche aux pâtes. Servez aussitôt."
      pro:
      - "Porter l’eau salée à ébullition. Cuire les tagliatelles al dente. Prélever un peu d’eau de cuisson, puis égoutter."
      - "Rissoler le guanciale à sec jusqu’à fonte de la graisse."
      - "Mélanger jaunes d’œufs et pecorino romano râpé, poivrer, détendre avec un peu d’eau de cuisson."
      - "Hors du feu, mélanger pâtes et guanciale avec les jaunes jusqu’à liaison. Dresser aussitôt."
      cavernes:
      - "Eau salée ébullition. Cuire tagliatelles al dente. Prélever peu eau cuisson. Égoutter."
      - "Rissoler guanciale. Zéro gras ajouté. Graisse fond."
      - "Mélanger jaunes d’œufs pecorino romano râpé. Poivrer. Détendre peu eau cuisson."
      - "Hors feu. Mélanger pâtes guanciale jaunes. Lier. Servir aussitôt."
    kcal_per_serving: 680
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: tagliatelles
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons de Paris
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: "jaunes d'œufs"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: pecorino romano râpé
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
    - qty: 1
      unit: cac
      item: paprika fumé
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pâtes. Cuisez les tagliatelles al dente."
    - "Champignons. Faites rissoler les champignons de Paris à l’huile d’olive, avec le paprika fumé."
    - "Liaison. Hors du feu, liez avec les jaunes d’œufs et le pecorino romano râpé."
    steps_niveaux:
      amateur:
      - "Cuisez les tagliatelles [[al-dente|al dente]], encore fermes sous la dent."
      - "Faites rissoler les champignons de Paris à l’huile d’olive, avec le paprika fumé."
      - "[[hors-du-feu|Hors du feu]], mélangez les pâtes et les champignons avec les jaunes d’œufs et le pecorino romano râpé, jusqu’à lier : une sauce unie accroche aux pâtes."
      pro:
      - "Cuire les tagliatelles al dente."
      - "Rissoler les champignons de Paris à l’huile d’olive, avec le paprika fumé."
      - "Hors du feu, mélanger pâtes et champignons avec les jaunes d’œufs et le pecorino romano râpé jusqu’à liaison."
      cavernes:
      - "Cuire tagliatelles al dente."
      - "Rissoler champignons de Paris huile d’olive paprika fumé."
      - "Hors feu. Mélanger pâtes champignons jaunes d’œufs pecorino romano râpé. Lier."
    kcal_per_serving: 560
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
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: tagliatelles
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons de Paris
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: tofu soyeux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: levure maltée
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
    - qty: 1
      unit: cac
      item: paprika fumé
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Pâtes. Cuisez les tagliatelles al dente."
    - "Champignons. Faites rissoler les champignons de Paris dans l’huile d’olive, avec le paprika fumé."
    - "Liaison. Hors du feu, liez avec le tofu soyeux et la levure maltée, puis poivrez."
    steps_niveaux:
      amateur:
      - "Cuisez les tagliatelles [[al-dente|al dente]], encore fermes sous la dent."
      - "Faites rissoler les champignons de Paris dans l’huile d’olive, avec le paprika fumé."
      - "[[hors-du-feu|Hors du feu]], mélangez les pâtes et les champignons avec le tofu soyeux et la levure maltée, jusqu’à lier, puis poivrez."
      pro:
      - "Cuire les tagliatelles al dente."
      - "Rissoler les champignons de Paris dans l’huile d’olive, avec le paprika fumé."
      - "Hors du feu, mélanger pâtes et champignons avec le tofu soyeux et la levure maltée jusqu’à liaison, puis poivrer."
      cavernes:
      - "Cuire tagliatelles al dente."
      - "Rissoler champignons de Paris huile d’olive paprika fumé."
      - "Hors feu. Mélanger pâtes champignons tofu soyeux levure maltée. Lier. Poivrer."
    kcal_per_serving: 510
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: vegetarienne
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
  note_verif: "Œufs liés : manger de suite, 24 h au frigo."
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
  vegetarienne:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    al-dente:
      terme: "al dente"
      explication: "Vous goûtez une pâte. Elle est cuite, encore légèrement ferme sous la dent : pas dure, pas crue. C’est réussi quand vous sentez cette petite résistance."
      ref: Cuisine/Lexique/al-dente.md

---

# Tagliatelles carbonara

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 400 g tagliatelles
- 140 g guanciale
- 4 piece jaunes d'œufs
- 80 g pecorino romano râpé
- poivre (au goût)
- sel (au goût)

## Préparation

1. Pâtes. Portez de l’eau salée à ébullition et cuisez les tagliatelles al dente.
2. Guanciale. Faites rissoler le guanciale sans matière grasse, jusqu’à ce que la graisse fonde.
3. Jaunes. Mélangez les jaunes d’œufs et le pecorino romano râpé, poivrez, puis détendez avec un peu d’eau de cuisson.
4. Liaison. Hors du feu, mélangez les pâtes et le guanciale avec les jaunes, jusqu’à lier. Servez aussitôt.

