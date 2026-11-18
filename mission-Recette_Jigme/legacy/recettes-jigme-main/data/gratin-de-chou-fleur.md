---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: gratin-de-chou-fleur
title: Gratin de chou-fleur
lang: fr
description: "Gratin de chou-fleur : recette française avec chou-fleur, lait et farine, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- gratin
- légumes
- végétarien
image:
  url:
  alt: Gratin de chou-fleur
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gratin-de-chou-fleur.md
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
    - from: fromage râpé
      to: comté affiné (naturellement quasi sans lactose)
      note:
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine.'
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
histoire: 'Chou-fleur cuit, nappé d’une sauce au fromage (souvent une béchamel fromagée, proche de la
  Mornay) puis gratiné. On décrit le cauliflower cheese anglais ; le geste français est le même, avec
  gruyère ou comté plus souvent que le cheddar.

  '
fun_facts:
- text: >
    La sauce Mornay, c’est une béchamel enrichie de fromage : le liant du gratin,
    pas une invention récente.
  source_name: Grokipedia, Mornay sauce
  source_url: https://grokipedia.com/page/Mornay_sauce
- text: >
    Le chou-fleur se blanchit d’abord : trop d’eau dans les bouquets, et la sauce
    se délite.
  source_name: Usage
  source_url:
wines:
- name: Montagny
  producer: Cave de Buxy
  origin: Montagny-lès-Buxy, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc de Bourgogne, noisette — la béchamel et le gruyère, sans un chardonnay trop boisé.
- name: Reuilly
  producer: Domaine de Reuilly
  origin: Reuilly, Centre-Loire
  grapes: sauvignon
  award:
  why: Agrume, silex — le chou-fleur un peu soufré, acidité vive.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Fruit rouge léger — le fromage gratiné, tanin court.
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
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 20
      rest_min: 0
      total_min: 60
    equipment: &id002
    - four
    - casserole
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: chou-fleur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 65
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 65
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage râpé
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Retirez le pied du chou fleur, puis coupez les sommités (les extrémités de la plante).
    - Cuisson. Dans une grande casserole, faites chauffer le lait. Une fois qu’il est chaud, ajoutez
      les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire. Retirez le chou-fleur
      à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant ou tendre) et débarrassez
      dans un plat à gratin.
    - Cuisson. Dans une seconde casserole, faites revenir le beurre pour le roux. Ajoutez la farine
      et laissez cuire pendant 2 minutes tout en remuant. Transvasez le lait dans la casserole
      contenant le roux et mélangez à l’aide d’un fouet pour monter la béchamel. Salez et
      poivrez en fonction de vos goûts. Vous pouvez également ajouter une pointe de noix de
      muscade (facultatif).
    - Cuisson. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou fleur. Pour compléter
      votre gratin, ajoutez du fromage râpé (gruyère ou compté).
    - Cuisson. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné (logique).
      Laissez refroidir quelques minutes et servez le gratin en accompagnement ou en en plat,
      assorti d’une petite salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Retirez le pied du chou-fleur, puis coupez les sommités (les extrémités de la plante)."
      - "Cuisson. Faites chauffer le lait dans une grande casserole. Une fois qu’il est chaud, ajoutez les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire. Retirez le chou-fleur à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant ou tendre) et débarrassez dans un plat à gratin."
      - "Cuisson. Dans une seconde casserole, faites revenir le beurre pour le roux. Ajoutez la farine et laissez cuire pendant 2 minutes tout en remuant. Transvasez le lait dans la casserole contenant le roux et mélangez à l’aide d’un fouet pour monter la béchamel. Salez et poivrez. Vous pouvez également ajouter une pointe de noix de muscade (facultatif)."
      - "Cuisson. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou-fleur. Ajoutez du fromage râpé (gruyère ou compté)."
      - "Cuisson. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné. Laissez refroidir quelques minutes et servez en accompagnement ou en plat, assorti d’une petite salade."
      pro:
      - "Retirer le pied du chou-fleur. Couper les sommités."
      - "Chauffer le lait. Ajouter les morceaux de chou-fleur, un peu de fleur de sel. Cuire. Retirer à l’écumoire selon le goût (croquant ou tendre). Débarrasser dans un plat à gratin."
      - "Faire revenir le beurre pour le roux. Ajouter la farine, cuire 2 min en remuant. Transvaser le lait sur le roux. Fouetter pour monter la béchamel. Saler, poivrer. Pointe de muscade facultative."
      - "Verser la béchamel jusqu’à recouvrir le chou-fleur. Ajouter du fromage râpé (gruyère ou compté)."
      - "Four mode grill jusqu’à gratiné. Laisser refroidir quelques minutes. Servir en accompagnement ou en plat, petite salade."
      cavernes:
      - "Préparation. Pied chou-fleur, retirer. Sommités, couper."
      - "Cuisson. Grande casserole, lait, chauffer. Chaud, morceaux chou-fleur, peu fleur de sel, cuire. Écumoire, retirer goût (croquant ou tendre). Plat gratin."
      - "Cuisson. Seconde casserole, beurre, revenir, roux. Farine, cuire 2 min, remuer. Lait transvaser sur roux. Fouet, béchamel. Sel poivre. Pointe muscade facultatif."
      - "Cuisson. Béchamel verser plat gratin jusqu’à recouvrir chou-fleur. Fromage râpé (gruyère ou compté), ajouter."
      - "Cuisson. Four mode grill jusqu’à gratiné. Refroidir minutes. Servir accompagnement ou plat, petite salade."
    kcal_per_serving: 352
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: chou-fleur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 65
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 65
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage râpé (tomme à présure végétale)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Retirez le pied du chou fleur, puis coupez les sommités (les extrémités de la plante).
    - Cuisson. Dans une grande casserole, faites chauffer le lait. Une fois qu’il est chaud, ajoutez
      les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire. Retirez le chou-fleur
      à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant ou tendre) et débarrassez
      dans un plat à gratin.
    - Cuisson. Dans une seconde casserole, faites revenir le beurre pour le roux. Ajoutez la farine
      et laissez cuire pendant 2 minutes tout en remuant. Transvasez le lait dans la casserole
      contenant le roux et mélangez à l’aide d’un fouet pour monter la béchamel. Salez et
      poivrez en fonction de vos goûts. Vous pouvez également ajouter une pointe de noix de
      muscade (facultatif).
    - Cuisson. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou fleur. Pour compléter
      votre gratin, ajoutez du fromage râpé (tomme (présure végétale)).
    - Cuisson. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné (logique).
      Laissez refroidir quelques minutes et servez le gratin en accompagnement ou en en plat,
      assorti d’une petite salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Retirez le pied du chou-fleur, puis coupez les sommités (les extrémités de la plante)."
      - "Cuisson. Faites chauffer le lait dans une grande casserole. Une fois qu’il est chaud, ajoutez les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire. Retirez le chou-fleur à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant ou tendre) et débarrassez dans un plat à gratin."
      - "Cuisson. Dans une seconde casserole, faites revenir le beurre pour le roux. Ajoutez la farine et laissez cuire pendant 2 minutes tout en remuant. Transvasez le lait dans la casserole contenant le roux et mélangez à l’aide d’un fouet pour monter la béchamel. Salez et poivrez. Vous pouvez également ajouter une pointe de noix de muscade (facultatif)."
      - "Cuisson. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou-fleur. Ajoutez du fromage râpé (tomme, présure végétale)."
      - "Cuisson. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné. Laissez refroidir quelques minutes et servez en accompagnement ou en plat, assorti d’une petite salade."
      pro:
      - "Retirer le pied du chou-fleur. Couper les sommités."
      - "Chauffer le lait. Ajouter les morceaux de chou-fleur, un peu de fleur de sel. Cuire. Retirer à l’écumoire selon le goût (croquant ou tendre). Débarrasser dans un plat à gratin."
      - "Faire revenir le beurre pour le roux. Ajouter la farine, cuire 2 min en remuant. Transvaser le lait sur le roux. Fouetter pour monter la béchamel. Saler, poivrer. Pointe de muscade facultative."
      - "Verser la béchamel jusqu’à recouvrir le chou-fleur. Ajouter du fromage râpé (tomme, présure végétale)."
      - "Four mode grill jusqu’à gratiné. Laisser refroidir quelques minutes. Servir en accompagnement ou en plat, petite salade."
      cavernes:
      - "Préparation. Pied chou-fleur, retirer. Sommités, couper."
      - "Cuisson. Grande casserole, lait, chauffer. Chaud, morceaux chou-fleur, peu fleur de sel, cuire. Écumoire, retirer goût (croquant ou tendre). Plat gratin."
      - "Cuisson. Seconde casserole, beurre, revenir, roux. Farine, cuire 2 min, remuer. Lait transvaser sur roux. Fouet, béchamel. Sel poivre. Pointe muscade facultatif."
      - "Cuisson. Béchamel verser plat gratin jusqu’à recouvrir chou-fleur. Fromage râpé (tomme, présure végétale), ajouter."
      - "Cuisson. Four mode grill jusqu’à gratiné. Refroidir minutes. Servir accompagnement ou plat, petite salade."
    kcal_per_serving: 352
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
    - qty: 1
      unit: piece
      item: chou-fleur
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 65
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 65
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage végétal
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Retirez le pied du chou fleur, puis coupez les sommités (les extrémités de la plante).
    - Cuisson. Dans une grande casserole, faites chauffer le lait d'avoine ou soja. Une fois qu’il
      est chaud, ajoutez les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire.
      Retirez le chou-fleur à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant
      ou tendre) et débarrassez dans un plat à gratin.
    - Cuisson. Dans une seconde casserole, faites revenir la margarine végétale pour la
      roux. Ajoutez la farine et laissez cuire pendant 2 minutes tout en remuant. Transvasez
      le lait d'avoine ou soja dans la casserole contenant le roux et mélangez à l’aide d’un
      fouet pour monter la béchamel. Salez et poivrez en fonction de vos goûts. Vous pouvez
      également ajouter une pointe de noix de muscade (facultatif).
    - Cuisson. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou fleur. Pour compléter
      votre gratin, ajoutez du fromage végétal râpé.
    - Cuisson. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné (logique).
      Laissez refroidir quelques minutes et servez le gratin en accompagnement ou en en plat,
      assorti d’une petite salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Retirez le pied du chou-fleur, puis coupez les sommités (les extrémités de la plante)."
      - "Cuisson. Faites chauffer le lait d'avoine ou soja dans une grande casserole. Une fois qu’il est chaud, ajoutez les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire. Retirez le chou-fleur à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant ou tendre) et débarrassez dans un plat à gratin."
      - "Cuisson. Dans une seconde casserole, faites revenir la margarine végétale pour le roux. Ajoutez la farine et laissez cuire pendant 2 minutes tout en remuant. Transvasez le lait d'avoine ou soja dans la casserole contenant le roux et mélangez à l’aide d’un fouet pour monter la béchamel. Salez et poivrez. Vous pouvez également ajouter une pointe de noix de muscade (facultatif)."
      - "Cuisson. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou-fleur. Ajoutez du fromage végétal râpé."
      - "Cuisson. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné. Laissez refroidir quelques minutes et servez en accompagnement ou en plat, assorti d’une petite salade."
      pro:
      - "Retirer le pied du chou-fleur. Couper les sommités."
      - "Chauffer le lait d'avoine ou soja. Ajouter les morceaux de chou-fleur, un peu de fleur de sel. Cuire. Retirer à l’écumoire selon le goût (croquant ou tendre). Débarrasser dans un plat à gratin."
      - "Faire revenir la margarine végétale pour le roux. Ajouter la farine, cuire 2 min en remuant. Transvaser le lait d'avoine ou soja sur le roux. Fouetter pour monter la béchamel. Saler, poivrer. Pointe de muscade facultative."
      - "Verser la béchamel jusqu’à recouvrir le chou-fleur. Ajouter du fromage végétal râpé."
      - "Four mode grill jusqu’à gratiné. Laisser refroidir quelques minutes. Servir en accompagnement ou en plat, petite salade."
      cavernes:
      - "Préparation. Pied chou-fleur, retirer. Sommités, couper."
      - "Cuisson. Grande casserole, lait d'avoine ou soja, chauffer. Chaud, morceaux chou-fleur, peu fleur de sel, cuire. Écumoire, retirer goût (croquant ou tendre). Plat gratin."
      - "Cuisson. Seconde casserole, margarine végétale, revenir, roux. Farine, cuire 2 min, remuer. Lait d'avoine ou soja transvaser sur roux. Fouet, béchamel. Sel poivre. Pointe muscade facultatif."
      - "Cuisson. Béchamel verser plat gratin jusqu’à recouvrir chou-fleur. Fromage végétal râpé, ajouter."
      - "Cuisson. Four mode grill jusqu’à gratiné. Refroidir minutes. Servir accompagnement ou plat, petite salade."
    kcal_per_serving: 238
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 352
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gratin de chou-fleur
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gratin-de-chou-fleur]]

## Ingrédients (4 personnes)

- 1 chou-fleur
- 1 L de lait
- 65 g de farine
- 65 g de beurre
-  fromage râpé

## Préparation

1. Retirez le pied du chou fleur, puis coupez les sommités (les extrémités de la plante).
2. Dans une grande casserole, faites chauffer le lait. Une fois qu’il est chaud, ajoutez les morceaux de chou-fleur, un peu de fleur de sel et laissez cuire. Retirez le chou-fleur à l’aide d’un écumoire lorsqu’il est cuit à votre goût (croquant ou tendre) et débarrassez dans un plat à gratin.
3. Dans une seconde casserole, faites revenir le beurre pour le roux. Ajoutez la farine et laissez cuire pendant 2 minutes tout en remuant. Transvasez le lait dans la casserole contenant le roux et mélangez à l’aide d’un fouet pour monter la béchamel. Salez et poivrez en fonction de vos goûts. Vous pouvez également ajouter une pointe de noix de muscade (facultatif).
4. Versez la béchamel dans le plat à gratin jusqu’à recouvrir le chou fleur. Pour compléter votre gratin, ajoutez du fromage râpé (gruyère ou compté).
5. Placez le tout au four en mode grill jusqu’à ce que le gratin soit gratiné (logique).

 
 

 
 Laissez refroidir quelques minutes et servez le gratin en accompagnement ou en en plat, assorti d’une petite salade. Bon appétit !
