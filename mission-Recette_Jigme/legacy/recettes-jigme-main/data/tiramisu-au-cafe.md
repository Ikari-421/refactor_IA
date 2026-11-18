---
schema: recette-web-jigme/v2
equipment:
- ref: maryse
slug: tiramisu-au-cafe
title: Tiramisu au café
lang: fr
description: "Tiramisu au café : recette italienne avec jaune d'oeuf, blanc d'oeuf et sucre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: sucré
tags:
- sucré
- dessert
- goûter
- café
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tiramisu-au-cafe.jpg
  alt: Tiramisu au café
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tiramisu-au-cafe.md
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
    - from: boudoir
      to: boudoirs sans gluten
      note: 'Vérifier l’étiquette : ils contiennent souvent de l’œuf.'
    - from: biscuits vegan
      to: biscuits sans gluten
      note:
    note: Boudoirs au blé → boudoirs sans gluten.
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
    - from: mascarpone
      to: fromage frais sans lactose
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
      to: aquafaba (30 ml par œuf)
      note: Pour la mousse.
    - from: oeuf
      to: aquafaba (30 ml par œuf)
      note:
    - from: boudoir
      to: biscuits secs sans œuf (type biscuits vegan)
      note: Les boudoirs classiques contiennent de l’œuf.
    note: Œufs de la crème et des boudoirs.
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: mascarpone végétal (cajou)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : mascarpone végétal (cajou) → graines de tournesol.'
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
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja (liaison) ou amidon → crème d''avoine.'
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
  Dessert italien du nord-est (Vénétie). Le nom vient de *tirami su*, « remonte-moi le moral ».
  On rattache souvent la version de restaurant au Beccherie, à Treviso, vers 1970
  (Alba di Pillo et le pâtissier Roberto Linguanotto) ; d’autres villes le revendiquent.
  Les livres de cuisine ne le citent guère avant la fin des années 1960.
fun_facts:
- text: >
    Le mascarpone, fromage frais lombard, n’est pas un fromage affiné : il se comporte
    comme une crème très dense et donne le gras du dessert sans beurre.
  source_name: Wikipedia, Tiramisu / Mascarpone
  source_url: https://en.wikipedia.org/wiki/Tiramisu
- text: >
    On raconte parfois une origine plus ancienne (Sienne, XIXe siècle) : ce n’est pas
    étayé par les livres de cuisine d’époque.
  source_name: Wikipedia, Tiramisu
  source_url: https://en.wikipedia.org/wiki/Tiramisu
wines:
- name: Moscato d'Asti
  producer: Vietti
  origin: Asti, Piémont
  grapes: moscato bianco
  award:
  why: Sucre et bulles fines — café, cacao et mascarpone sans alourdir.
- name: Recioto della Valpolicella
  producer: Allegrini
  origin: Valpolicella, Vénétie
  grapes: corvina
  award:
  why: Cerise, cacao, sucrosité — dialogue avec le cacao amer du dessus.
- name: Marsala Superiore
  producer: Marco De Bartoli
  origin: Marsala, Sicile
  grapes: grillo
  award:
  why: Oxydatif, noix, sucrosité retenue — le café et les jaunes.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 0
      rest_min: 0
      total_min: 30
    equipment: &id002
    - four
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: jaune d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: blanc d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: piece
      item: boudoir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'Amaretto
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du café
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Clarifiez les oeufs (séparez les blancs des jaunes). Vous aurez besoin de plus de blancs
      que de jaunes (voir dosages). Mélangez les jaunes avec un bon tiers de sucre, puis ajoutez-y
      la vanille et le mascarpone. Mélangez délicatement jusqu’à l’obtention d’une préparation
      homogène.
    - Cuisson. Battez les blancs en neige en ajoutant le reste de sucre au fur et à mesure. Incorporez
      les blancs délicatement à l’autre préparation, en 2 ou 3 fois à l’aide d’une maryse.
    - Finition. Préparez du café et laissez-le tiédir. Vous pouvez y ajouter de l’Amaretto à votre convenance.
      Dans votre plat, étalez une première couche de crème. Trempez les boudoirs dans le café
      et disposez-les par dessus la crème. Étalez une deuxième couche de crème, puis à nouveau
      une couche de boudoirs. Terminez en étalant de la crème. Recouvrez votre plat avec du
      cellophane, un couvercle ou une assiette, puis laissez-le reposer une nuit au réfrigérateur
      (perso, je l’oublie même 24 h). Saupoudrez ensuite de cacao en poudre. Votre tiramisu
      est prêt à être dégusté ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Clarifiez les oeufs (séparez les blancs des jaunes). Vous aurez besoin de plus de blancs que de jaunes (voir dosages). Mélangez les jaunes avec un bon tiers de sucre, puis ajoutez-y la vanille et le mascarpone. Mélangez délicatement jusqu’à l’obtention d’une préparation homogène."
      - "Cuisson. [[monter-en-neige|Battez les blancs en neige]] en ajoutant le reste de sucre au fur et à mesure. Incorporez les blancs délicatement à l’autre préparation, en 2 ou 3 fois à l’aide d’une maryse."
      - "Finition. Préparez du café et laissez-le tiédir. Vous pouvez y ajouter de l’Amaretto à votre convenance. Dans votre plat, étalez une première couche de crème. Trempez les boudoirs dans le café et disposez-les par-dessus la crème. Étalez une deuxième couche de crème, puis à nouveau une couche de boudoirs. Terminez en étalant de la crème. Recouvrez votre plat avec du cellophane, un couvercle ou une assiette, puis laissez-le reposer une nuit au réfrigérateur (perso, je l’oublie même 24 h). Saupoudrez ensuite de cacao en poudre. Votre tiramisu est prêt à être dégusté ! Bon appétit !"
      pro:
      - "Clarifier les oeufs (séparer les blancs des jaunes). Plus de blancs que de jaunes (voir dosages). Mélanger les jaunes avec un bon tiers de sucre, puis ajouter la vanille et le mascarpone. Mélanger délicatement jusqu’à une préparation homogène."
      - "Battre les blancs en neige en ajoutant le reste de sucre au fur et à mesure. Incorporer les blancs délicatement à l’autre préparation, en 2 ou 3 fois, à la maryse."
      - "Préparer du café et le laisser tiédir. Option : Amaretto. Dans le plat, étaler une première couche de crème. Tremper les boudoirs dans le café et les disposer par-dessus la crème. Étaler une deuxième couche de crème, puis à nouveau une couche de boudoirs. Terminer en étalant de la crème. Recouvrir le plat (cellophane, couvercle ou assiette). Reposer une nuit au réfrigérateur (24 h possible). Saupoudrer de cacao en poudre. Déguster."
      cavernes:
      - "Préparation. Oeufs, clarifier : blancs, jaunes. Plus blancs que jaunes (dosages). Jaunes, bon tiers sucre, mélanger. Vanille, mascarpone, ajouter. Mélanger délicat, homogène."
      - "Cuisson. Blancs, battre neige. Reste sucre, ajouter fur et mesure. Blancs, 2 ou 3 fois, maryse, incorporer délicat."
      - "Finition. Café, préparer, tiédir. Option : Amaretto. Plat, première couche crème, étaler. Boudoirs, café, tremper, dessus crème. Deuxième couche crème, puis boudoirs. Terminer, crème, étaler. Plat, cellophane, couvercle ou assiette. Nuit, réfrigérateur. Option 24 h. Cacao poudre, saupoudrer. Déguster. Bon appétit."
    kcal_per_serving: 238
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 238
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    - vegan
    allergens:
    - fruits_a_coque
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: aquafaba
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: piece
      item: biscuits vegan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: mascarpone végétal (cajou)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'Amaretto
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du café
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Mélangez la crème de soja (ou l’amidon délayé) avec un bon tiers de sucre, puis ajoutez-y la vanille et le mascarpone végétal (cajou). Mélangez délicatement jusqu’à l’obtention d’une préparation homogène.
    - Cuisson. Battez l’aquafaba en neige en ajoutant le reste de sucre au fur et à mesure. Incorporez-la délicatement à l’autre préparation, en 2 ou 3 fois à l’aide d’une maryse.
    - Finition. Préparez du café et laissez-le tiédir. Vous pouvez y ajouter de l’Amaretto à votre convenance.
      Dans votre plat, étalez une première couche de crème de mascarpone végétal. Trempez les biscuits vegan dans le café et disposez-les par-dessus. Étalez une deuxième couche de crème végétale, puis à nouveau une couche de biscuits vegan. Terminez en étalant de la crème végétale. Recouvrez votre
      plat avec du cellophane, un couvercle ou une assiette, puis laissez-le reposer une nuit
      au réfrigérateur (perso, je l’oublie même 24 h). Saupoudrez ensuite de cacao en poudre.
      Votre tiramisu est prêt à être dégusté ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez la crème de soja (ou l’amidon mélangé à un peu d’eau froide) avec un bon tiers de sucre, puis ajoutez-y la vanille et le mascarpone végétal (cajou). Mélangez délicatement jusqu’à l’obtention d’une préparation homogène."
      - "Cuisson. [[monter-en-neige|Battez l’aquafaba en neige]] en ajoutant le reste de sucre au fur et à mesure. Incorporez-la délicatement à l’autre préparation, en 2 ou 3 fois à l’aide d’une maryse."
      - "Finition. Préparez du café et laissez-le tiédir. Vous pouvez y ajouter de l’Amaretto à votre convenance. Dans votre plat, étalez une première couche de crème de mascarpone végétal. Trempez les biscuits vegan dans le café et disposez-les par-dessus. Étalez une deuxième couche de crème végétale, puis à nouveau une couche de biscuits vegan. Terminez en étalant de la crème végétale. Recouvrez votre plat avec du cellophane, un couvercle ou une assiette, puis laissez-le reposer une nuit au réfrigérateur (perso, je l’oublie même 24 h). Saupoudrez ensuite de cacao en poudre. Votre tiramisu est prêt à être dégusté ! Bon appétit !"
      pro:
      - "Mélanger la crème de soja (ou l’amidon mélangé à un peu d’eau froide) avec un bon tiers de sucre, puis ajouter la vanille et le mascarpone végétal (cajou). Mélanger délicatement jusqu’à une préparation homogène."
      - "Battre l’aquafaba en neige en ajoutant le reste de sucre au fur et à mesure. Incorporer délicatement à l’autre préparation, en 2 ou 3 fois, à la maryse."
      - "Préparer du café et le laisser tiédir. Option : Amaretto. Dans le plat, étaler une première couche de crème de mascarpone végétal. Tremper les biscuits vegan dans le café et les disposer par-dessus. Étaler une deuxième couche de crème végétale, puis à nouveau une couche de biscuits vegan. Terminer en étalant de la crème végétale. Recouvrir le plat (cellophane, couvercle ou assiette). Reposer une nuit au réfrigérateur (24 h possible). Saupoudrer de cacao en poudre. Déguster."
      cavernes:
      - "Mélange. Crème soja (ou amidon mélangé peu eau froide), bon tiers sucre, mélanger. Vanille, mascarpone végétal (cajou), ajouter. Mélanger délicat, homogène."
      - "Cuisson. Aquafaba, battre neige. Reste sucre, ajouter fur et mesure. 2 ou 3 fois, maryse, incorporer délicat."
      - "Finition. Café, préparer, tiédir. Option : Amaretto. Plat, première couche crème mascarpone végétal, étaler. Biscuits vegan, café, tremper, dessus. Deuxième couche crème végétale, puis biscuits vegan. Terminer, crème végétale, étaler. Plat, cellophane, couvercle ou assiette. Nuit, réfrigérateur. Option 24 h. Cacao poudre, saupoudrer. Déguster. Bon appétit."
    kcal_per_serving: 172
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 238
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  vegan:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème ; œufs crus ou peu cuits"

---

# Tiramisu au café
**Équipement :** [[maryse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tiramisu-au-cafe]]

## Ingrédients (6 personnes)

- 3 jaune d'oeuf
- 6 blanc d'oeuf
- 100 g de sucre
- 40 boudoir
- 500 g de mascarpone
- 1 gousse de vanille
-  de l'Amaretto
-  du café

## Préparation

1. Clarifiez les oeufs (séparez les blancs des jaunes). Vous aurez besoin de plus de blancs que de jaunes (voir dosages). Mélangez les jaunes avec un bon tiers de sucre, puis ajoutez-y la vanille et le mascarpone. Mélangez délicatement jusqu’à l’obtention d’une préparation homogène.
2. Battez les blancs en neige en ajoutant le reste de sucre au fur et à mesure. Incorporez les blancs délicatement à l’autre préparation, en 2 ou 3 fois à l’aide d’une maryse.
3. Préparez du café et laissez-le tiédir. Vous pouvez y ajouter de l’Amaretto à votre convenance. Dans votre plat, étalez une première couche de crème. Trempez les boudoirs dans le café et disposez-les par dessus la crème. Étalez une deuxième couche de crème, puis à nouveau une couche de boudoirs. Terminez en étalant de la crème. Recouvrez votre plat avec du cellophane, un couvercle ou une assiette, puis laissez-le reposer une nuit au réfrigérateur (perso, je l’oublie même 24 h). Saupoudrez ensuite de cacao en poudre.

 
 

 
 Votre tiramisu est prêt à être dégusté ! Bon appétit !
