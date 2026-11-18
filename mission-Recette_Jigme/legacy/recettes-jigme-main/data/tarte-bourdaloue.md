---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: tarte-bourdaloue
title: Tarte bourdaloue
lang: fr
description: "Tarte bourdaloue : recette française avec pâte sablée, poire et sucre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- tarte
- végétarien
- pâte sablée
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tarte-bourdaloue.webp
  alt: Tarte bourdaloue
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-bourdaloue.md
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
    - from: pâte sablée
      to: pâte brisée vegan (à la margarine)
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
    - from: pâte sablée
      to: pâte brisée vegan (à la margarine)
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: poudre d'amandes
      to: graines de tournesol
      note:
    - from: amandes effilées
      to: graines de tournesol
      note:
    note: 'Fruits à coque : poudre d''amandes → graines de tournesol ; amandes effilées →
      graines de tournesol.'
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
histoire: 'Tarte Bourdaloue : poires pochées sur frangipane, tarte parisienne. Belle Époque, poires en
  deux sur crème d’amande. Le nom renvoie souvent à la rue Bourdaloue (Paris) ; une paternité unique n’est
  pas tranchée ici.

  '
fun_facts:
- text: >
    Les poires se pochent d’abord : crues, elles restent dures sous la frangipane.
  source_name: Grokipedia, List of fruit dishes
  source_url: https://grokipedia.com/page/List_of_fruit_dishes
- text: >
    Une Comice ou une Williams tient mieux qu’une poire farineuse.
  source_name: Grokipedia, Doyenné du Comice
  source_url: https://grokipedia.com/page/Doyenn%C3%A9_du_Comice
wines:
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin — la poire et l’amande, sucré-acide.
- name: Jurançon
  producer: Domaine Bellegarde
  origin: Jurançon, Béarn
  grapes: petit manseng
  award:
  why: Moelleux, agrume — la frangipane, sans un sauternes de prestige.
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — la tarte, sans un champagne brut.
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
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - fouet
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte sablée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: poire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 625
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: poudre d'amandes
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
    - qty:
      unit:
      item: amandes effilées
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vanille (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1000
      unit: ml
      item: eau
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
    - Cuisson. Dans une casserole, faites chauffer l’eau et les 3/4 de sucre (500g de sucre pour 1L
      d’eau) afin de réaliser un sirop. Vous pouvez également ajouter le contenu d’une gousse
      de vanille (facultatif). Épluchez les poires et pochez-les dans ce sirop. Elles sont
      cuites lorsque vous-y plantez la lame d’un couteau et qu’il n’y a aucune résistance.
      Égouttez-les, enlevez les cœurs des poires et réservez.
    - Cuisson. Pour réaliser la crème d’amande, munissez-vous d’un récipient. Versez-y le sucre et
      les œufs entiers. Mélangez à l’aide d’un fouet, puis ajoutez le beurre fondu et la poudre
      d’amande. Mélangez à nouveau.
    - Cuisson. Placez votre pâte sablée dans un moule à tarte, comme expliquer sur cette vidéo. Étalez
      la crème d’amande dans votre fond de tarte (avec une poche à douille, c’est plus joli
      et plus régulier). Disposez les demi-poires au-dessus.
    - Cuisson. Enfournez la tarte à 180°C pendant 30 minutes. Au passage, faites torréfier quelques
      amandes effilées, soit au four, soit dans une poêle sans matière grasse. Vous pourrez
      les ajouter pour décorer votre tarte lorsqu’elle sortira du four ! Et oui, une tarte
      Bourdaloue, ce n’est que ça et c’est terriblement bon ! Nous avons mis des demi-poires
      mais vous pouvez très bien laisser votre créativité parler en imaginant d’autres découpes
      ou dressages. Bonne dégustation à vous !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, faites chauffer l’eau et les 3/4 de sucre (500 g de sucre pour 1 L d’eau) afin de réaliser un sirop. Vous pouvez également ajouter le contenu d’une gousse de vanille (facultatif). Épluchez les poires et pochez-les dans ce sirop. Elles sont cuites lorsque vous y plantez la lame d’un couteau et qu’il n’y a aucune résistance. Égouttez-les, enlevez les cœurs des poires et réservez."
      - "Cuisson. Pour réaliser la crème d’amande, munissez-vous d’un récipient. Versez-y le sucre et les œufs entiers. Mélangez à l’aide d’un fouet, puis ajoutez le beurre fondu et la poudre d’amande. Mélangez à nouveau."
      - "Cuisson. Placez votre pâte sablée dans un moule à tarte. Étalez la crème d’amande dans votre fond de tarte (avec une poche à douille, c’est plus joli et plus régulier). Disposez les demi-poires au-dessus."
      - "Cuisson. Enfournez la tarte à 180 °C pendant 30 minutes. Au passage, faites torréfier quelques amandes effilées, soit au four, soit dans une poêle sans matière grasse. Ajoutez-les pour décorer votre tarte lorsqu’elle sort du four. Vous pouvez adopter d’autres découpes ou dressages."
      pro:
      - "Dans une casserole, faire chauffer l’eau et les 3/4 de sucre (500 g de sucre pour 1 L d’eau) afin de réaliser un sirop. Option : ajouter le contenu d’une gousse de vanille. Éplucher les poires et les pocher dans ce sirop. Cuit lorsque la lame d’un couteau n’oppose aucune résistance. Égoutter, enlever les cœurs des poires et réserver."
      - "Crème d’amande : dans un récipient, verser le sucre et les œufs entiers. Mélanger au fouet, puis ajouter le beurre fondu et la poudre d’amande. Mélanger à nouveau."
      - "Placer la pâte sablée dans un moule à tarte. Étaler la crème d’amande dans le fond de tarte (poche à douille : plus joli et plus régulier). Disposer les demi-poires au-dessus."
      - "Enfourner la tarte à 180 °C pendant 30 minutes. Au passage, torréfier quelques amandes effilées, au four ou dans une poêle sans matière grasse. Les ajouter pour décorer à la sortie du four. Option : autres découpes ou dressages."
      cavernes:
      - "Cuisson. Casserole, eau, 3/4 sucre (500 g sucre pour 1 L eau), chauffer, sirop. Option : contenu gousse vanille, ajouter. Poires, éplucher, sirop, pocher. Cuites : lame couteau, zéro résistance. Égoutter, cœurs poires, enlever, réserver."
      - "Cuisson. Crème amande : récipient. Sucre, œufs entiers, verser. Fouet, mélanger, puis beurre fondu, poudre amande, ajouter. Mélanger de nouveau."
      - "Cuisson. Pâte sablée, moule tarte, placer. Crème amande, fond tarte, étaler. Option : poche douille, plus joli, plus régulier. Demi-poires, dessus, disposer."
      - "Cuisson. Tarte, Four 180 °C, 30 min, enfourner. Passage : amandes effilées, torréfier, Four ou poêle sans matière grasse. Sortie four, décorer, ajouter. Option : autres découpes, dressages."
    kcal_per_serving: 1048
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 1048
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
    - pesco
    - vegan
    allergens:
    - gluten
    - soja
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte brisée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: poire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 625
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: poudre d'amandes
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
    - qty:
      unit:
      item: amandes effilées
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vanille (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1000
      unit: ml
      item: eau
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
    - Cuisson. Dans une casserole, faites chauffer l’eau et les 3/4 de sucre (500g de sucre pour 1L
      d’eau) afin de réaliser un sirop. Vous pouvez également ajouter le contenu d’une gousse
      de vanille (facultatif). Épluchez les poires et pochez-les dans ce sirop. Elles sont
      cuites lorsque vous-y plantez la lame d’un couteau et qu’il n’y a aucune résistance.
      Égouttez-les, enlevez les cœurs des poires et réservez.
    - Mélange. Pour réaliser la crème d’amande, munissez-vous d’un récipient. Versez-y le sucre et l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélangez à l’aide d’un fouet, puis ajoutez la margarine végétale fondue et la poudre d’amande. Mélangez à nouveau.
    - Cuisson. Placez votre pâte sablée dans un moule à tarte, comme expliquer sur cette vidéo. Étalez
      la crème d’amande dans votre fond de tarte (avec une poche à douille, c’est plus joli
      et plus régulier). Disposez les demi-poires au-dessus.
    - Cuisson. Enfournez la tarte à 180°C pendant 30 minutes. Au passage, faites torréfier quelques
      amandes effilées, soit au four, soit dans une poêle sans matière grasse. Vous pourrez
      les ajouter pour décorer votre tarte lorsqu’elle sortira du four ! Et oui, une tarte
      Bourdaloue, ce n’est que ça et c’est terriblement bon ! Nous avons mis des demi-poires
      mais vous pouvez très bien laisser votre créativité parler en imaginant d’autres découpes
      ou dressages. Bonne dégustation à vous !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, faites chauffer l’eau et les 3/4 de sucre (500 g de sucre pour 1 L d’eau) afin de réaliser un sirop. Vous pouvez également ajouter le contenu d’une gousse de vanille (facultatif). Épluchez les poires et pochez-les dans ce sirop. Elles sont cuites lorsque vous y plantez la lame d’un couteau et qu’il n’y a aucune résistance. Égouttez-les, enlevez les cœurs des poires et réservez."
      - "Mélange. Pour réaliser la crème d’amande, munissez-vous d’un récipient. Versez-y le sucre et l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélangez à l’aide d’un fouet, puis ajoutez la margarine végétale fondue et la poudre d’amande. Mélangez à nouveau."
      - "Cuisson. Placez votre pâte sablée dans un moule à tarte. Étalez la crème d’amande dans votre fond de tarte (avec une poche à douille, c’est plus joli et plus régulier). Disposez les demi-poires au-dessus."
      - "Cuisson. Enfournez la tarte à 180 °C pendant 30 minutes. Au passage, faites torréfier quelques amandes effilées, soit au four, soit dans une poêle sans matière grasse. Ajoutez-les pour décorer votre tarte lorsqu’elle sort du four. Vous pouvez adopter d’autres découpes ou dressages."
      pro:
      - "Dans une casserole, faire chauffer l’eau et les 3/4 de sucre (500 g de sucre pour 1 L d’eau) afin de réaliser un sirop. Option : ajouter le contenu d’une gousse de vanille. Éplucher les poires et les pocher dans ce sirop. Cuit lorsque la lame d’un couteau n’oppose aucune résistance. Égoutter, enlever les cœurs des poires et réserver."
      - "Crème d’amande : dans un récipient, verser le sucre et l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélanger au fouet, puis ajouter la margarine végétale fondue et la poudre d’amande. Mélanger à nouveau."
      - "Placer la pâte sablée dans un moule à tarte. Étaler la crème d’amande dans le fond de tarte (poche à douille : plus joli et plus régulier). Disposer les demi-poires au-dessus."
      - "Enfourner la tarte à 180 °C pendant 30 minutes. Au passage, torréfier quelques amandes effilées, au four ou dans une poêle sans matière grasse. Les ajouter pour décorer à la sortie du four. Option : autres découpes ou dressages."
      cavernes:
      - "Cuisson. Casserole, eau, 3/4 sucre (500 g sucre pour 1 L eau), chauffer, sirop. Option : contenu gousse vanille, ajouter. Poires, éplucher, sirop, pocher. Cuites : lame couteau, zéro résistance. Égoutter, cœurs poires, enlever, réserver."
      - "Mélange. Crème amande : récipient. Sucre, œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, verser. Fouet, mélanger, puis margarine végétale fondue, poudre amande, ajouter. Mélanger de nouveau."
      - "Cuisson. Pâte sablée, moule tarte, placer. Crème amande, fond tarte, étaler. Option : poche douille, plus joli, plus régulier. Demi-poires, dessus, disposer."
      - "Cuisson. Tarte, Four 180 °C, 30 min, enfourner. Passage : amandes effilées, torréfier, Four ou poêle sans matière grasse. Sortie four, décorer, ajouter. Option : autres découpes, dressages."
    kcal_per_serving: 828
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 1048
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

# Tarte bourdaloue

![[tarte-bourdaloue.webp]]
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-bourdaloue]]

## Ingrédients (4 personnes)

- 1 pâte sablée
- 6 poire
- 625 g de sucre
- 125 g de beurre
- 125 g de poudre d'amandes
- 2 oeuf
-  amandes effilées
-  vanille (facultatif)
- 1 L d'eau

## Préparation

1. Dans une casserole, faites chauffer l’eau et les 3/4 de sucre (500g de sucre pour 1L d’eau) afin de réaliser un sirop. Vous pouvez également ajouter le contenu d’une gousse de vanille (facultatif). Épluchez les poires et pochez-les dans ce sirop. Elles sont cuites lorsque vous-y plantez la lame d’un couteau et qu’il n’y a aucune résistance. Égouttez-les, enlevez les cœurs des poires et réservez.
2. Pour réaliser la crème d’amande, munissez-vous d’un récipient. Versez-y le sucre et les œufs entiers. Mélangez à l’aide d’un fouet, puis ajoutez le beurre fondu et la poudre d’amande. Mélangez à nouveau.
3. Placez votre pâte sablée dans un moule à tarte, comme expliquer sur cette vidéo. Étalez la crème d’amande dans votre fond de tarte (avec une poche à douille, c’est plus joli et plus régulier). Disposez les demi-poires au-dessus.
4. Enfournez la tarte à 180°C pendant 30 minutes. Au passage, faites torréfier quelques amandes effilées, soit au four, soit dans une poêle sans matière grasse. Vous pourrez les ajouter pour décorer votre tarte lorsqu’elle sortira du four !

 
 

 
 Et oui, une tarte Bourdaloue, ce n’est que ça et c’est terriblement bon ! Nous avons mis des demi-poires mais vous pouvez très bien laisser votre créativité parler en imaginant d’autres découpes ou dressages. Bonne dégustation à vous !
