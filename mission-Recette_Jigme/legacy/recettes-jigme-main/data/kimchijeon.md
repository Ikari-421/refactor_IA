---
schema: recette-web-jigme/v2
slug: kimchijeon
title: Kimchijeon
lang: fr
description: "Kimchijeon : recette coréenne avec Kimchi, jus de Kimchi et gousse d'ail, pour 4 personnes. Version maison. Facile à suivre."
cuisine: coréenne
category: salé
tags:
- salé
- kimchi
- végétarien
- Corée
image:
  url:
  alt: Kimchijeon
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/kimchijeon.md
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
    clears:
    - gluten
    swaps:
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    note: Déjà sans lait.
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    note: Déjà sans céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans mollusques.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
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
    note: Déjà sans lupin.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Kimchijeon (ou kimchi-buchimgae) : crêpe salée coréenne de kimchi haché dans une pâte farine-eau,
  poêlée. Une variété de jeon / buchimgae. Bon usage du kimchi trop fermenté. Les jeon sont attestés comme
  crêpes rituelles sous Joseon (1392–1910) ; le kimchijeon, lui, n’a pas de date d’auteur.

  '
fun_facts:
- text: 'Le kimchi trop mûr, plus acide, tient mieux dans la pâte que le kimchi jeune.

    '
  source_name: Wikipedia, Kimchi-buchimgae
  source_url: https://en.wikipedia.org/wiki/Kimchi-buchimgae
- text: 'On sert souvent avec une trempette soja-vinaigre, pas avec du sucre.

    '
  source_name: Usage coréen courant
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Kimchijeon ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Kimchi-buchimgae
wines:
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — le piment et l’acidité du kimchi.
- name: Txakoli de Getaria
  producer: Txomin Etxaniz
  origin: Getaria, Pays basque
  grapes: hondarrabi zuri
  award:
  why: Blanc perlé, citron — le gras de la poêle et le chou lacto-fermenté.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le piment, sans un rouge tannique.
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
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 10
      rest_min: 0
      total_min: 50
    equipment: &id002
    - poêle
    - saladier
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: Kimchi
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: jus de Kimchi
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: petit oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Passez le Kimchi au chinois pour en récupérer le jus, puis coupez-le grossièrement.
      Coupez la ciboulette, l’ail, l’oignon et rajoutez-les au Kimchi. Ajoutez les oeufs,
      un peu de jus de Kimchi, un peu d’eau et la farine. Mélangez bien.
    - Mélange. Pour la sauce, mélangez dans un saladier la sauce soja, le vinaigre de riz, de l’eau
      et du sucre. Goûtez pour ajuster selon vos préférences.
    - Finition. Faites chauffer de la matière grasse dans une poêle. Versez-y votre préparation au Kimchi
      et laissez-cuire des deux côtés. Vous pouvez vous aider d’une assiette pour le retourner.
      Vous obtenez un genre de gros pancake. C’est prêt ! Dégustez-le avec la sauce, c’est
      encore meilleur !
    steps_niveaux:
      amateur:
      - "Préparation. Passez le Kimchi au chinois pour en récupérer le jus, puis coupez-le grossièrement. Coupez la ciboulette, l’ail, l’oignon et rajoutez-les au Kimchi. Ajoutez les œufs, un peu de jus de Kimchi, un peu d’eau et la farine. Mélangez bien."
      - "Mélange. Pour la sauce, mélangez dans un saladier la sauce soja, le vinaigre de riz, de l’eau et du sucre. Goûtez pour ajuster selon vos préférences."
      - "Finition. Faites chauffer de la matière grasse dans une poêle. Versez-y votre préparation au Kimchi et laissez cuire des deux côtés. Vous pouvez vous aider d’une assiette pour le retourner. Vous obtenez un genre de gros pancake. C’est prêt ! Dégustez-le avec la sauce, c’est encore meilleur !"
      pro:
      - "Passer le Kimchi au chinois, récupérer le jus. Couper grossièrement. Couper ciboulette, ail, oignon ; ajouter au Kimchi. Ajouter les œufs, un peu de jus de Kimchi, un peu d’eau et la farine. Bien mélanger."
      - "Sauce : saladier, sauce soja, vinaigre de riz, eau et sucre. Goûter, ajuster."
      - "Chauffer la matière grasse à la poêle. Verser la préparation au Kimchi. Cuire des deux côtés. Retourner à l’assiette. Gros pancake. Servir avec la sauce."
      cavernes:
      - "Préparation. Kimchi, chinois, passer, jus récupérer. Couper gros. Ciboulette, ail, oignon, couper, ajouter Kimchi. Œufs, peu jus Kimchi, peu eau, farine, ajouter. Mélanger."
      - "Mélange. Sauce, saladier : sauce soja, vinaigre de riz, eau, sucre, mélanger. Goûter, ajuster."
      - "Finition. Matière grasse, poêle, chauffer. Préparation Kimchi, verser. Cuire deux côtés. Assiette, retourner. Genre gros pancake. Prêt. Sauce, déguster."
    kcal_per_serving: 166
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 166
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: kimchi vegan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: jus de kimchi vegan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: petit oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Passez le kimchi vegan au chinois pour en récupérer le jus, puis coupez-le grossièrement.
      Coupez la ciboulette, l’ail, l’oignon et rajoutez-les au Kimchi. Ajoutez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, un peu de jus de kimchi vegan, un
      peu d’eau et la farine. Mélangez bien.
    - Mélange. Pour la sauce, mélangez dans un saladier la sauce soja, le vinaigre de riz, de l’eau
      et du sucre. Goûtez pour ajuster selon vos préférences.
    - Finition. Faites chauffer de la matière grasse dans une poêle. Versez-y votre préparation au kimchi vegan
      et laissez-cuire des deux côtés. Vous pouvez vous aider d’une assiette pour le retourner.
      Vous obtenez un genre de gros pancake. C’est prêt ! Dégustez-le avec la sauce, c’est
      encore meilleur !
    steps_niveaux:
      amateur:
      - "Préparation. Passez le kimchi vegan au chinois pour en récupérer le jus, puis coupez-le grossièrement. Coupez la ciboulette, l’ail, l’oignon et rajoutez-les au Kimchi. Ajoutez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, un peu de jus de kimchi vegan, un peu d’eau et la farine. Mélangez bien."
      - "Mélange. Pour la sauce, mélangez dans un saladier la sauce soja, le vinaigre de riz, de l’eau et du sucre. Goûtez pour ajuster selon vos préférences."
      - "Finition. Faites chauffer de la matière grasse dans une poêle. Versez-y votre préparation au kimchi vegan et laissez cuire des deux côtés. Vous pouvez vous aider d’une assiette pour le retourner. Vous obtenez un genre de gros pancake. C’est prêt ! Dégustez-le avec la sauce, c’est encore meilleur !"
      pro:
      - "Passer le kimchi vegan au chinois, récupérer le jus. Couper grossièrement. Couper ciboulette, ail, oignon ; ajouter au Kimchi. Ajouter l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, un peu de jus de kimchi vegan, un peu d’eau et la farine. Bien mélanger."
      - "Sauce : saladier, sauce soja, vinaigre de riz, eau et sucre. Goûter, ajuster."
      - "Chauffer la matière grasse à la poêle. Verser la préparation au kimchi vegan. Cuire des deux côtés. Retourner à l’assiette. Gros pancake. Servir avec la sauce."
      cavernes:
      - "Préparation. Kimchi vegan, chinois, passer, jus récupérer. Couper gros. Ciboulette, ail, oignon, couper, ajouter Kimchi. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, peu jus kimchi vegan, peu eau, farine, ajouter. Mélanger."
      - "Mélange. Sauce, saladier : sauce soja, vinaigre de riz, eau, sucre, mélanger. Goûter, ajuster."
      - "Finition. Matière grasse, poêle, chauffer. Préparation kimchi vegan, verser. Cuire deux côtés. Assiette, retourner. Genre gros pancake. Prêt. Sauce, déguster."
    kcal_per_serving: 166
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 166
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Kimchijeon
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/kimchijeon]]

## Ingrédients (4 personnes)

- 200 g de Kimchi
-  jus de Kimchi
- 1 gousse d'ail
- 1 petit oignon
- 20 ml d'eau
- 2 oeuf
- 100 g de farine
-  ciboulette

## Préparation

1. Passez le Kimchi au chinois pour en récupérer le jus, puis coupez-le grossièrement. Coupez la ciboulette, l’ail, l’oignon et rajoutez-les au Kimchi. Ajoutez les oeufs, un peu de jus de Kimchi, un peu d’eau et la farine. Mélangez bien.
2. Pour la sauce, mélangez dans un saladier la sauce soja, le vinaigre de riz, de l’eau et du sucre. Goûtez pour ajuster selon vos préférences.
3. Faites chauffer de la matière grasse dans une poêle. Versez-y votre préparation au Kimchi et laissez-cuire des deux côtés. Vous pouvez vous aider d’une assiette pour le retourner. Vous obtenez un genre de gros pancake.

 
 

 
 C’est prêt ! Dégustez-le avec la sauce, c’est encore meilleur !
