---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: cookies-noix-chocolat
title: Cookies noix & chocolat
lang: fr
description: "Cookies noix & chocolat : recette américaine avec beurre tendre, cassonade et œuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: sucré
tags:
- sucré
- cookies
- chocolat
- noix
- goûter
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/cookies-noix-chocolat.webp
  alt: Cookies noix & chocolat
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/cookies-noix-chocolat.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
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
    clears:
    - gluten
    swaps:
    - from: farine
      to: mix farine sans gluten + psyllium
      note:
    note: 'Gluten : farine → mix farine sans gluten + psyllium.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: beurre tendre
      to: beurre sans lactose ou clarifié
      note:
    note: 'Lactose : beurre tendre → beurre sans lactose ou clarifié.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: beurre tendre
      to: margarine végétale
      note:
    note: 'Produits laitiers : beurre tendre → margarine végétale.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (œuf) : pas d’adaptation fiable.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: cerneaux de noix
      to: graines de tournesol
      note:
    note: 'Fruits à coque : cerneaux de noix → graines de tournesol.'
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
house_toggle: ma_recette
house_options:
- ma_recette
histoire: 'Le chocolate chip cookie est un drop cookie américain. L’invention est généralement
  attribuée à Ruth Graves Wakefield (Massachusetts, années 1930, Toll House), même si des
  versions existaient avant. La recette se répand via Nestlé, les rations de la Seconde Guerre
  mondiale, puis Famous Amos et Mrs. Fields. Noix (souvent cerneaux ou pécan) : inclusion
  classique, pas obligatoire.'
fun_facts:
- text: Cassonade = cookie plus moelleux (sucre hygroscopique) ; sucre blanc = plus cassant.
    Beaucoup de recettes mélangent les deux.
  source_name: Wikipedia EN
  source_url: https://en.wikipedia.org/wiki/Chocolate_chip_cookie
- text: 'Œufs un par un après le crémage beurre-sucre : moins d’étalement, plus de mâche.'
  source_name: Wikipedia EN
  source_url: https://en.wikipedia.org/wiki/Chocolate_chip_cookie
- text: 'La farine de noisette de Jigmé n’est pas Toll House : c’est son geste (goût de fruit
    sec en plus des cerneaux).'
  source_name:
  source_url:
wines:
- name: Maury Vintage rouge
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache noir
  award:
  why: 'cacao, cerise noire : tient le chocolat et la noix sans Porto trop fort.'
- name: Late Bottled Vintage
  producer: Taylor’s
  origin: Porto, Portugal
  grapes: touriga nacional et assemblage du Douro
  award:
  why: 'fruits noirs, tanin souple : le cookie gras + noix.'
- name: Banyuls
  producer: Domaine du Mas Blanc (famille Parcé)
  origin: Banyuls, Roussillon
  grapes: grenache
  award:
  why: 'noix, cacao, oxydatif : miroir des cerneaux.'
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
    - fruits_a_coque
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 12
      rest_min: 0
      total_min: 35
    equipment:
    - saladier
    - plaque
    - papier sulfurisé
    - four
    substitutions:
    - from: pécan à la place des noix
      to:
      note:
    - from: cassonade + 30 g de sucre blanc si tu veux plus de croustillant
      to:
      note:
    scale_note:
    ingredients:
    - qty: 125
      unit: g
      item: beurre tendre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: cassonade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group:
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: vanille (facultatif)
      group:
      scale: true
      optional: true
      to_taste: false
    - qty: 120
      unit: g
      item: chocolat noir en morceaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: cerneaux de noix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Préchauffez le four à 200 °C."
    - "Cuisson. Crèmez le beurre avec la cassonade (et la vanille) 1 min. Incorporez l’œuf."
    - "Cuisson. Ajoutez la farine, la levure chimique et le sel. Incorporez le chocolat et les noix."
    - "Cuisson. Formez des boules de la taille d’une noix, bien espacées. Enfournez 12 min : les bords sont bruns, le centre encore mou."
    - "Finition. Transférez sur une grille."
    steps_niveaux:
      amateur:
      - "Cuisson. Préchauffez le four à 200 °C."
      - "Cuisson. Crèmez le beurre avec la cassonade (et la vanille) 1 min. Incorporez l’œuf."
      - "Cuisson. Ajoutez la farine, la levure chimique et le sel. Incorporez le chocolat et les noix."
      - "Cuisson. Formez des boules de la taille d’une noix, bien espacées. Enfournez 12 min : les bords sont bruns, le centre encore mou."
      - "Finition. Transférez sur une grille."
      pro:
      - "Préchauffer le four à 200 °C."
      - "Crémer le beurre avec la cassonade (et la vanille) 1 min. Incorporer l’œuf."
      - "Ajouter la farine, la levure chimique et le sel. Incorporer le chocolat et les noix."
      - "Former des boules de la taille d’une noix, bien espacées. Enfourner 12 min : bords bruns, centre encore mou."
      - "Transférer sur une grille."
      cavernes:
      - "Cuisson. Four 200 °C."
      - "Cuisson. Beurre, cassonade (vanille), crémer 1 min. Œuf, incorporer."
      - "Cuisson. Farine, levure chimique, sel, ajouter. Chocolat, noix, incorporer."
      - "Cuisson. Boules taille noix, bien espacées. Enfourner 12 min : bords bruns, centre encore mou."
      - "Finition. Grille."
    kcal_per_serving: 560
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 560
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
      cook_min: 12
      rest_min: 0
      total_min: 35
    equipment:
    - saladier
    - plaque
    substitutions:
    - from: aquafaba (3 c.à.s) à la place du lin
      to:
      note:
    scale_note:
    ingredients:
    - qty: 125
      unit: g
      item: margarine ou beurre de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: cassonade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de lin moulues
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: cac
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group:
      scale: false
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chocolat noir vegan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: cerneaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Mélangez les graines de lin moulues et l’eau, laissez 10 min (gel)."
    - "Cuisson. Crèmez la margarine avec la cassonade, ajoutez le lin, les poudres, le chocolat et les cerneaux."
    - "Finition. Formez des boules, enfournez 12 min à 190 °C."
    steps_niveaux:
      amateur:
      - "Préparation. Mélangez les graines de lin moulues et l’eau, laissez 10 min (gel)."
      - "Cuisson. Crèmez la margarine avec la cassonade, ajoutez le lin, les poudres, le chocolat et les cerneaux."
      - "Finition. Formez des boules, enfournez 12 min à 190 °C."
      pro:
      - "Mélanger les graines de lin moulues et l’eau, laisser 10 min (gel)."
      - "Crémer la margarine avec la cassonade, ajouter le lin, les poudres, le chocolat et les cerneaux."
      - "Former des boules, enfourner 12 min à 190 °C."
      cavernes:
      - "Préparation. Graines lin moulues, eau, mélanger, 10 min (gel)."
      - "Cuisson. Margarine, cassonade, crémer. Lin, poudres, chocolat, cerneaux, ajouter."
      - "Finition. Boules. Enfourner 12 min 190 °C."
    kcal_per_serving: 690
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 560
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 12
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - fruits_a_coque
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 12
      rest_min: 30
      total_min: 60
    equipment:
    - saladier
    - plaque
    - four
    - film
    substitutions: []
    scale_note:
    ingredients:
    - qty: 170
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: cassonade
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
    - qty: 250
      unit: g
      item: farine tout usage
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine de noisette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: /2 sachet de levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: grosse pincée de sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: chocolat noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: cerneaux de noix
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Mélange. Mélangez le beurre et la cassonade."
    - "Cuisson. Ajoutez les œufs."
    - "Cuisson. Ajoutez les farines, le sel et la levure."
    - "Cuisson. Ajoutez le chocolat et les noix."
    - "Repos. Formez un boudin, réservez 30 min au frais."
    - "Finition. Tranchez et enfournez 12 à 14 min à 200 °C."
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez le beurre et la cassonade."
      - "Cuisson. Ajoutez les œufs."
      - "Cuisson. Ajoutez les farines, le sel et la levure."
      - "Cuisson. Ajoutez le chocolat et les noix."
      - "Repos. Formez un boudin, réservez 30 min au frais."
      - "Finition. Tranchez et enfournez 12 à 14 min à 200 °C."
      pro:
      - "Mélanger le beurre et la cassonade."
      - "Ajouter les œufs."
      - "Ajouter les farines, le sel et la levure."
      - "Ajouter le chocolat et les noix."
      - "Former un boudin, réserver 30 min au frais."
      - "Trancher et enfourner 12 à 14 min à 200 °C."
      cavernes:
      - "Mélange. Beurre, cassonade, mélanger."
      - "Cuisson. Œufs, ajouter."
      - "Cuisson. Farines, sel, levure, ajouter."
      - "Cuisson. Chocolat, noix, ajouter."
      - "Repos. Boudin. Frais 30 min."
      - "Finition. Trancher. Enfourner 12 à 14 min 200 °C."
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: ""}
  congelation: {possible: true, duree: "2 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "4 à 7 jours", note: "Boîte hermétique."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Cookies noix & chocolat

![[cookies-noix-chocolat.webp]]

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Sucré/cookies-noix-chocolat.md).

**Catégorie :** sucré

## Ingrédients (4 personnes)

- 125 g de beurre tendre
- 150 g de cassonade
- 1 œuf
- 180 g de farine
- ½ c.à.c de levure chimique
- 1 pincée de sel
- 1 c.à.c de vanille (facultatif)
- 120 g de chocolat noir en morceaux
- 60 g de cerneaux de noix

## Préparation

1. Cuisson. Préchauffez le four à 200 °C.
2. Cuisson. Crèmez le beurre avec la cassonade (et la vanille) 1 min. Incorporez l’œuf.
3. Cuisson. Ajoutez la farine, la levure chimique et le sel. Incorporez le chocolat et les noix.
4. Cuisson. Formez des boules de la taille d’une noix, bien espacées. Enfournez 12 min : les bords sont bruns, le centre encore mou.
5. Finition. Transférez sur une grille.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
