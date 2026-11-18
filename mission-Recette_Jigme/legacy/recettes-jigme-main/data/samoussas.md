---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: samoussas
title: Samoussas
lang: fr
description: "Samoussas : recette indienne de triangles de pâte farcis, bœuf épicé ou légumes, frits, pour 4 personnes. Facile à suivre à la maison."
cuisine: indienne
category: salé
tags:
- salé
- friture
- Inde
- épicé
image:
  url:
  alt: Samoussas
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
    note: "Feuilles de brick au blé : feuilles de riz, plus fragiles."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le samosa (samoussa) est un chausson triangulaire farci, frit, répandu de l’Inde à l’océan Indien. Farce viande ou légumes, pâte fine, cumin, coriandre, piment. Aux Mascareignes, le samoussa est un snack de rue."
fun_facts:
- text: Le samosa circule avec le commerce musulman ; l’Inde du Nord en a fait un plat de fête.
  source_name: "Wikipedia FR, Samoussa"
  source_url: "https://fr.wikipedia.org/wiki/Samoussa"
- text: "La farce doit être sèche, sinon la pâte se déchire à la friture."
  source_name: "Wikipedia FR, Samoussa"
  source_url: "https://fr.wikipedia.org/wiki/Samoussa"
- text: "Feuilles de brick à la place de la pâte maison : plus rapide, moins authentique."
  source_name: "Wikipedia EN, Samosa"
  source_url: "https://en.wikipedia.org/wiki/Samosa"
wines:
- name: Gewurztraminer Alsace
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Gewurztraminer
  award: 
  why: "Litchi, rose, épices du samoussa."
- name: Côtes du Rhône blanc
  producer: Famille Perrin
  origin: "Orange, Rhône"
  grapes: "Grenache blanc, viognier"
  award: 
  why: "Souple, friture, coriandre."
- name: Riesling Alsace
  producer: Trimbach
  origin: "Ribeauvillé, Alsace"
  grapes: Riesling
  award: 
  why: "Sec, coupe l’huile et le piment."
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
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - poêle
    - friteuse
    substitutions:
    - from: bœuf
      to: agneau haché
      note: Plus corsé.
    scale_note: "Viande hachée cuite : 24 h au frigo."
    ingredients:
    - qty: 8
      unit: piece
      item: feuilles de brick
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
    - qty: 1
      unit: piece
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: ail
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cumin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: coriandre en poudre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment
      group: 
      scale: true
      optional: true
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
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
      item: coriandre fraîche
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Farce. Faites revenir l’oignon et l’ail avec le bœuf haché et les épices, à sec. Laissez refroidir, puis ajoutez la coriandre fraîche."
    - "Pliage. Coupez les feuilles de brick, garnissez de farce, collez à l’œuf et formez des triangles."
    - "Friture. Faites frire à 170 °C pendant 3 min, jusqu’à ce qu’ils soient dorés."
    - "Égouttage. Égouttez sur du papier absorbant."
    steps_niveaux:
      amateur:
      - "Farce. Faites revenir l’oignon et l’ail avec le bœuf haché et les épices, à sec. Laissez refroidir, puis ajoutez la coriandre fraîche."
      - "Pliage. Coupez les feuilles de brick, garnissez de farce, collez à l’œuf et formez des triangles."
      - "Friture. [[frire|Faites frire]] à 170 °C pendant 3 min, jusqu’à ce qu’ils soient dorés."
      - "Égouttage. Égouttez sur du papier absorbant."
      pro:
      - "Faire revenir l’oignon et l’ail avec le bœuf haché et les épices, à sec. Laisser refroidir, ajouter la coriandre fraîche."
      - "Couper les feuilles de brick, garnir de farce, coller à l’œuf, former des triangles."
      - "Frire à 170 °C pendant 3 min, jusqu’à doré."
      - "Égoutter sur du papier absorbant."
      cavernes:
      - "Farce. Oignon, ail, bœuf haché, épices, revenir, à sec. Refroidir. Coriandre fraîche, ajouter."
      - "Pliage. Feuilles brick, couper, farce, garnir, œuf, coller, triangles."
      - "Friture. 170 °C, 3 min, frire, jusqu’à dorés."
      - "Égouttage. Papier absorbant, égoutter."
    kcal_per_serving: 450
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
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - poêle
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: feuilles de brick
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: petits pois
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cumin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
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
      item: coriandre fraîche
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Farce. Préparez une farce sèche avec les pommes de terre, les petits pois, l’oignon, les épices et la coriandre fraîche."
    - "Pliage. Garnissez les feuilles de brick et collez à l’œuf."
    - "Friture. Faites frire à 170 °C pendant 3 min."
    steps_niveaux:
      amateur:
      - "Farce. Préparez une farce sèche avec les pommes de terre, les petits pois, l’oignon, les épices et la coriandre fraîche."
      - "Pliage. Garnissez les feuilles de brick et collez à l’œuf."
      - "Friture. [[frire|Faites frire]] à 170 °C pendant 3 min."
      pro:
      - "Préparer une farce sèche avec les pommes de terre, les petits pois, l’oignon, les épices et la coriandre fraîche."
      - "Garnir les feuilles de brick, coller à l’œuf."
      - "Frire à 170 °C pendant 3 min."
      cavernes:
      - "Farce. Farce sèche : pommes de terre, petits pois, oignon, épices, coriandre fraîche."
      - "Pliage. Feuilles brick, garnir, œuf, coller."
      - "Friture. 170 °C, 3 min, frire."
    kcal_per_serving: 380
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
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - poêle
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: feuilles de brick
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: petits pois
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cumin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: eau
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
      item: coriandre fraîche
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Farce. Préparez la farce avec les pommes de terre, les petits pois, l’oignon et les épices."
    - "Pliage. Garnissez les feuilles de brick et collez à l’eau."
    - "Friture. Faites frire à 170 °C pendant 3 min."
    steps_niveaux:
      amateur:
      - "Farce. Préparez la farce avec les pommes de terre, les petits pois, l’oignon et les épices."
      - "Pliage. Garnissez les feuilles de brick et collez à l’eau."
      - "Friture. [[frire|Faites frire]] à 170 °C pendant 3 min."
      pro:
      - "Préparer la farce avec les pommes de terre, les petits pois, l’oignon et les épices."
      - "Garnir les feuilles de brick, coller à l’eau."
      - "Frire à 170 °C pendant 3 min."
      cavernes:
      - "Farce. Farce : pommes de terre, petits pois, oignon, épices."
      - "Pliage. Feuilles brick, garnir, eau, coller."
      - "Friture. 170 °C, 3 min, frire."
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
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - poêle
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 8
      unit: piece
      item: feuilles de brick
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: cabillaud
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cumin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: curcuma
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
      item: coriandre fraîche
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Farce. Émiettez le cabillaud et mélangez-le à l’oignon, aux épices et à la coriandre fraîche."
    - "Pliage. Garnissez les feuilles de brick et collez à l’œuf."
    - "Friture. Faites frire à 170 °C pendant 3 min."
    steps_niveaux:
      amateur:
      - "Farce. Émiettez le cabillaud et mélangez-le à l’oignon, aux épices et à la coriandre fraîche."
      - "Pliage. Garnissez les feuilles de brick et collez à l’œuf."
      - "Friture. [[frire|Faites frire]] à 170 °C pendant 3 min."
      pro:
      - "Émietter le cabillaud, mélanger à l’oignon, aux épices et à la coriandre fraîche."
      - "Garnir les feuilles de brick, coller à l’œuf."
      - "Frire à 170 °C pendant 3 min."
      cavernes:
      - "Farce. Cabillaud, émietter. Oignon, épices, coriandre fraîche, mélanger."
      - "Pliage. Feuilles brick, garnir, œuf, coller."
      - "Friture. 170 °C, 3 min, frire."
    kcal_per_serving: 400
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegetarienne:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  pesco:
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
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Viande hachée : 24 h. Recuire à 70 °C."

---

# Samoussas

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 8 piece feuilles de brick
- 300 g bœuf haché
- 1 piece oignon
- 1 gousse ail
- 1 cac cumin
- 1 cac coriandre en poudre
- 1 cac curcuma
- 1 piece piment
- 1 piece œuf
- 1000 ml huile de friture
- sel (au goût)
- coriandre fraîche (au goût)

## Préparation

1. Farce. Faites revenir l’oignon et l’ail avec le bœuf haché et les épices, à sec. Laissez refroidir, puis ajoutez la coriandre fraîche.
2. Pliage. Coupez les feuilles de brick, garnissez de farce, collez à l’œuf et formez des triangles.
3. Friture. Faites frire à 170 °C pendant 3 min, jusqu’à ce qu’ils soient dorés.
4. Égouttage. Égouttez sur du papier absorbant.
