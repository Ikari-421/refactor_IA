---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: gateau-a-lorange
title: Gâteau à l'orange
lang: fr
description: "Gâteau à l'orange : recette française avec orange bio, oeuf et beurre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- orange
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/gateau-a-lorange.jpg
  alt: Gâteau à l'orange
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gateau-a-lorange.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Allergie lait : pas de substitut honnête listé.'
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
histoire: >
  Gâteau parfumé à l’orange (zeste, jus, parfois sirop). Forme européenne
  courante dès que l’orange sucrée se démocratise (époque moderne), sans
  inventeur unique. Ce n’est ni le gâteau Jaffa britannique, ni une recette
  provençale datée.
fun_facts:
- text: "Le zeste porte l’huile essentielle ; le jus seul donne surtout de l’acidité et du liquide."
  source_name: Usage
  source_url:
- text: "Un sirop d’orange imbibé après cuisson rattrape un gâteau un peu sec."
  source_name: Usage
  source_url:
wines:
- name: Muscat de Rivesaltes
  producer: Domaine Lafage
  origin: Perpignan, Roussillon
  grapes: muscat
  award:
  why: Raisin, fleur d’oranger — le gâteau, même agrume.
- name: Coteaux du Layon
  producer: Domaine Ogereau
  origin: Saint-Lambert-du-Lattay, Anjou
  grapes: chenin blanc
  award:
  why: Pomme, miel — l’orange amère en fond, un chenin moelleux.
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: moscato bianco
  award:
  why: Bulles douces — plus léger qu’un liquoreux sur la pâte.
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
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 35
      cook_min: 20
      rest_min: 0
      total_min: 55
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: orange bio
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
    - qty: 150
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: liqueur d'orange
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez le beurre dans une casserole et ajoutez-y le zeste d’une orange (bio c’est mieux,
      pour éviter de manger des pesticides). Faites fondre le beurre à feu doux.
    - Mélange. Dans un récipient, cassez les oeufs et ajoutez-y le sucre. Mélangez le tout à l’aide
      d’un fouet. Ajoutez de la farine tout en mélangeant, puis terminez avec la levure.
    - Cuisson. Pressez les oranges, puis versez le jus dans votre préparation. Ajoutez également le
      beurre avec les zestes d’orange et mélangez le tout. Vous pouvez aussi mettre un filet
      de liqueur d’orange pour renforcer le goût.
    - Cuisson. Versez le mélange dans un moule préalablement beurré et fariné, puis enfournez le tout
      à 210°C pendant environ 20 minutes. Dégustez votre gâteau à l’orange au goûter ou en
      dessert, accompagné d’une tranche d’orange fraiche et de quelques meringues pour la
      déco. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez le beurre dans une casserole et ajoutez-y le zeste d’une orange (bio c’est mieux). Faites fondre le beurre à feu doux."
      - "Mélange. Dans un récipient, cassez les œufs et ajoutez-y le sucre. Mélangez le tout à l’aide d’un fouet. Ajoutez de la farine tout en mélangeant, puis terminez avec la levure."
      - "Cuisson. Pressez les oranges, puis versez le jus dans votre préparation. Ajoutez également le beurre avec les zestes d’orange et mélangez le tout. Vous pouvez aussi mettre un filet de liqueur d’orange pour renforcer le goût."
      - "Cuisson. Versez le mélange dans un moule préalablement beurré et fariné, puis enfournez à 210°C pendant environ 20 minutes."
      pro:
      - "Beurre en casserole. Ajouter le zeste d’une orange (bio de préférence). Fondre à feu doux."
      - "Casser les œufs dans un récipient. Ajouter le sucre. Fouetter. Ajouter la farine en mélangeant. Terminer avec la levure."
      - "Presser les oranges. Verser le jus dans la préparation. Ajouter le beurre avec les zestes. Mélanger. Option : filet de liqueur d’orange."
      - "Verser dans un moule beurré et fariné. Four 210°C, environ 20 minutes."
      cavernes:
      - "Cuisson. Casserole, beurre. Zeste 1 orange (bio mieux). Feu doux, fondre."
      - "Mélange. Récipient, œufs casser. Sucre, ajouter. Fouet, mélanger. Farine, ajouter en mélangeant. Levure, terminer."
      - "Cuisson. Oranges, presser. Jus, verser préparation. Beurre zestes, ajouter. Mélanger. Filet liqueur d’orange possible."
      - "Cuisson. Moule beurré fariné, verser. Four 210°C environ 20 minutes."
    kcal_per_serving: 607
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
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 607
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
    - qty: 2
      unit: piece
      item: orange bio
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
    - qty: 150
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: liqueur d'orange
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez la margarine végétale dans une casserole et ajoutez-y le zeste d’une
      orange (bio c’est mieux, pour éviter de manger des pesticides). Faites fondre la margarine
      végétale à feu doux.
    - Mélange. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et ajoutez-y le sucre. Mélangez le tout à l’aide d’un fouet. Ajoutez de la farine
      tout en mélangeant, puis terminez avec la levure.
    - Cuisson. Pressez les oranges, puis versez le jus dans votre préparation. Ajoutez également la
      margarine végétale avec les zestes d’orange et mélangez le tout. Vous pouvez
      aussi mettre un filet de liqueur d’orange pour renforcer le goût.
    - Cuisson. Versez le mélange dans un moule préalablement graissé avec de la margarine végétale et fariné, puis enfournez le tout
      à 210°C pendant environ 20 minutes. Dégustez votre gâteau à l’orange au goûter ou en
      dessert, accompagné d’une tranche d’orange fraiche et de quelques meringues pour la
      déco. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez la margarine végétale dans une casserole et ajoutez-y le zeste d’une orange (bio c’est mieux). Faites fondre la margarine végétale à feu doux."
      - "Mélange. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et ajoutez-y le sucre. Mélangez le tout à l’aide d’un fouet. Ajoutez de la farine tout en mélangeant, puis terminez avec la levure."
      - "Cuisson. Pressez les oranges, puis versez le jus dans votre préparation. Ajoutez également la margarine végétale avec les zestes d’orange et mélangez le tout. Vous pouvez aussi mettre un filet de liqueur d’orange pour renforcer le goût."
      - "Cuisson. Versez le mélange dans un moule préalablement graissé avec de la margarine végétale et fariné, puis enfournez à 210°C pendant environ 20 minutes."
      pro:
      - "Margarine végétale en casserole. Ajouter le zeste d’une orange (bio de préférence). Fondre à feu doux."
      - "Verser l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux dans un récipient. Ajouter le sucre. Fouetter. Ajouter la farine en mélangeant. Terminer avec la levure."
      - "Presser les oranges. Verser le jus dans la préparation. Ajouter la margarine végétale avec les zestes. Mélanger. Option : filet de liqueur d’orange."
      - "Verser dans un moule graissé à la margarine végétale et fariné. Four 210°C, environ 20 minutes."
      cavernes:
      - "Cuisson. Casserole, margarine végétale. Zeste 1 orange (bio mieux). Feu doux, fondre."
      - "Mélange. Récipient, œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux. Sucre, ajouter. Fouet, mélanger. Farine, ajouter en mélangeant. Levure, terminer."
      - "Cuisson. Oranges, presser. Jus, verser préparation. Margarine végétale zestes, ajouter. Mélanger. Filet liqueur d’orange possible."
      - "Cuisson. Moule graissé margarine végétale, fariné, verser. Four 210°C environ 20 minutes."
    kcal_per_serving: 343
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
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 607
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

# Gâteau à l'orange
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `Cuisine/Recettes/Web/gateau-a-lorange.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/gateau-a-lorange]]

## Ingrédients (4 personnes)

- 2 orange bio
- 2 oeuf
- 150 g de beurre
- 140 g de sucre
- 125 g de farine
- 5 g de levure chimique
-  liqueur d'orange

## Préparation

1. Placez le beurre dans une casserole et ajoutez-y le zeste d’une orange (bio c’est mieux, pour éviter de manger des pesticides). Faites fondre le beurre à feu doux.
2. Dans un récipient, cassez les oeufs et ajoutez-y le sucre. Mélangez le tout à l’aide d’un fouet. Ajoutez de la farine tout en mélangeant, puis terminez avec la levure.
3. Pressez les oranges, puis versez le jus dans votre préparation. Ajoutez également le beurre avec les zestes d’orange et mélangez le tout. Vous pouvez aussi mettre un filet de liqueur d’orange pour renforcer le goût.
4. Versez le mélange dans un moule préalablement beurré et fariné, puis enfournez le tout à 210°C pendant environ 20 minutes.

 
 

 
 Dégustez votre gâteau à l’orange au goûter ou en dessert, accompagné d’une tranche d’orange fraiche et de quelques meringues pour la déco. Bon appétit !
