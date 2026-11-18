---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
- ref: maryse
slug: mousse-au-chocolat
title: Mousse au chocolat
lang: fr
description: "Mousse au chocolat : recette française avec chocolat de votre choix, beurre et œuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- goûter
- chocolat
- végétarien
image:
  url:
  alt: Mousse au chocolat
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/mousse-au-chocolat.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
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
histoire: 'Mousse au chocolat : chocolat, œufs, parfois beurre ou crème, fouettés pour emprisonner de
  l’air. La mousse salée précède ; la sucrée au chocolat s’impose au XIXe s. dans les livres français.
  Pas un gâteau : un appareil froid.

  '
fun_facts:
- text: 'Les blancs serrés font une mousse plus légère ; la crème fouettée, plus grasse et plus stable
    au frigo.

    '
  source_name: Wikipedia, Mousse
  source_url: https://en.wikipedia.org/wiki/Mousse
- text: 'Un chocolat à 60–70 % tient mieux qu’un chocolat au lait, trop sucré, trop mou.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Mousse au chocolat ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Mousse_au_chocolat
wines:
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Grenache muté, cacao — la mousse, fruit noir.
- name: Banyuls
  producer: Domaine Vial Magnères
  origin: Banyuls, Roussillon
  grapes: grenache
  award:
  why: VDN du Roussillon — le chocolat amer, sucré-amer.
- name: Crémant d'Alsace
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: pinot blanc, auxerrois
  award:
  why: Bulles, pomme — coupe la mousse, sans un champagne de prestige.
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
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 10
      rest_min: 60
      total_min: 100
    equipment: &id002
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: chocolat de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 75
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
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
    - Préparation. Cassez en morceaux l’équivalent d’une tablette de chocolat et faites-la fonre au bain-marie
      avec le beurre coupé grossièrement.
    - Cuisson. Pendant ce temps, clarifiez vos œufs.
    - Surveillez le bain-marie. Une fois le chocolat entièrement fondu, mettez-le hors du
      feu, ajoutez-y les jaunes d’œufs et mélangez.
    - Cuisson. Ajoutez le sucre aux blancs d’œufs et montez-les en neige à l’aide d’un batteur.
    - Mélange. Incorporez les blancs montés en neige au chocolat à l’aide d’une maryse. Mélangez délicatement,
      de manière aérienne, pour ne pas casser les blancs.
    - Finition. Déposez la mousse dans des ramequins et mettez-les au frais pendant au moins une heure.
      Et n’hésitez pas à lécher les restes de mousse au chocolat de votre récipient avant
      de le laver… Servez vos mousses au moment du dessert et régalez-vous !
    steps_niveaux:
      amateur:
      - "Préparation. Cassez en morceaux l’équivalent d’une tablette de chocolat et faites-la fondre avec le beurre coupé grossièrement, casserole au-dessus d’eau chaude."
      - "Cuisson. Pendant ce temps, clarifiez vos œufs."
      - "Fonte. Une fois le chocolat entièrement fondu, mettez-le [[hors-du-feu|hors du feu]], ajoutez-y les jaunes d’œufs et mélangez."
      - "Cuisson. Ajoutez le sucre aux blancs d’œufs et [[monter-en-neige|montez-les en neige]] à l’aide d’un batteur."
      - "Mélange. Incorporez les blancs [[monter-en-neige|montés en neige]] au chocolat à l’aide d’une maryse. Mélangez délicatement, de manière aérienne, pour ne pas casser les blancs."
      - "Finition. Déposez la mousse dans des ramequins et mettez-les au frais pendant au moins une heure. Et n’hésitez pas à lécher les restes de mousse au chocolat de votre récipient avant de le laver… Servez vos mousses au moment du dessert et régalez-vous !"
      pro:
      - "Casser en morceaux l’équivalent d’une tablette de chocolat. Faire fondre avec le beurre coupé grossièrement, casserole au-dessus d’eau chaude."
      - "Pendant ce temps, clarifier les œufs."
      - "Une fois le chocolat entièrement fondu, mettre hors du feu. Ajouter les jaunes d’œufs. Mélanger."
      - "Ajouter le sucre aux blancs d’œufs. Monter en neige au batteur."
      - "Incorporer les blancs montés en neige au chocolat à la maryse. Mélanger délicatement, de manière aérienne, pour ne pas casser les blancs."
      - "Déposer la mousse dans des ramequins. Mettre au frais pendant au moins une heure. Servir au moment du dessert."
      cavernes:
      - "Préparation. Tablette chocolat, casser morceaux. Beurre, couper gros. Casserole dessus eau chaude, fondre."
      - "Cuisson. Pendant ce temps. Œufs, clarifier."
      - "Fonte. Chocolat entièrement fondu. Hors feu. Jaunes d’œufs, ajouter. Mélanger."
      - "Cuisson. Sucre, blancs d’œufs, ajouter. Batteur, monter en neige."
      - "Mélange. Blancs montés en neige, chocolat, maryse, incorporer. Mélanger délicat, aérien. Blancs, pas casser."
      - "Finition. Mousse, ramequins, déposer. Frais, minimum 1 h. Restes mousse, lécher avant laver. Dessert, servir."
    kcal_per_serving: 290
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
    kcal_per_serving: 290
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: chocolat de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 75
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Cassez en morceaux l’équivalent d’une tablette de chocolat et faites-la fonre au bain-marie
      avec la margarine végétale coupé grossièrement.
    - Cuisson. Pendant ce temps, préparez l’aquafaba (ou le tofu soyeux) d’un côté, le reste pour lier le chocolat.
    - Surveillez le bain-marie. Une fois le chocolat entièrement fondu, mettez-le hors du
      feu, ajoutez-y le tofu soyeux (liaison) et mélangez.
    - Cuisson. Ajoutez le sucre à l’aquafaba et montez-la en neige à l’aide d’un batteur.
    - Mélange. Incorporez l’aquafaba montée au chocolat à l’aide d’une maryse. Mélangez délicatement,
      de manière aérienne, pour ne pas casser les blancs.
    - Finition. Déposez la mousse dans des ramequins et mettez-les au frais pendant au moins une heure.
      Et n’hésitez pas à lécher les restes de mousse au chocolat de votre récipient avant
      de le laver… Servez vos mousses au moment du dessert et régalez-vous !
    steps_niveaux:
      amateur:
      - "Préparation. Cassez en morceaux l’équivalent d’une tablette de chocolat et faites-la fondre avec la margarine végétale coupé grossièrement, casserole au-dessus d’eau chaude."
      - "Cuisson. Pendant ce temps, préparez l’aquafaba (ou le tofu soyeux) d’un côté, le reste pour lier le chocolat."
      - "Fonte. Une fois le chocolat entièrement fondu, mettez-le [[hors-du-feu|hors du feu]], ajoutez-y le tofu soyeux (liaison) et mélangez."
      - "Cuisson. Ajoutez le sucre à l’aquafaba et [[monter-en-neige|montez-la en neige]] à l’aide d’un batteur."
      - "Mélange. Incorporez l’aquafaba montée au chocolat à l’aide d’une maryse. Mélangez délicatement, de manière aérienne, pour ne pas casser les blancs."
      - "Finition. Déposez la mousse dans des ramequins et mettez-les au frais pendant au moins une heure. Et n’hésitez pas à lécher les restes de mousse au chocolat de votre récipient avant de le laver… Servez vos mousses au moment du dessert et régalez-vous !"
      pro:
      - "Casser en morceaux l’équivalent d’une tablette de chocolat. Faire fondre avec la margarine végétale coupé grossièrement, casserole au-dessus d’eau chaude."
      - "Pendant ce temps, préparer l’aquafaba (ou le tofu soyeux) d’un côté, le reste pour lier le chocolat."
      - "Une fois le chocolat entièrement fondu, mettre hors du feu. Ajouter le tofu soyeux (liaison). Mélanger."
      - "Ajouter le sucre à l’aquafaba. Monter en neige au batteur."
      - "Incorporer l’aquafaba montée au chocolat à la maryse. Mélanger délicatement, de manière aérienne, pour ne pas casser les blancs."
      - "Déposer la mousse dans des ramequins. Mettre au frais pendant au moins une heure. Servir au moment du dessert."
      cavernes:
      - "Préparation. Tablette chocolat, casser morceaux. Margarine végétale, couper gros. Casserole dessus eau chaude, fondre."
      - "Cuisson. Pendant ce temps. Aquafaba (ou tofu soyeux) côté, préparer. Reste, lier chocolat."
      - "Fonte. Chocolat entièrement fondu. Hors feu. Tofu soyeux (liaison), ajouter. Mélanger."
      - "Cuisson. Sucre, aquafaba, ajouter. Batteur, monter en neige."
      - "Mélange. Aquafaba montée, chocolat, maryse, incorporer. Mélanger délicat, aérien. Blancs, pas casser."
      - "Finition. Mousse, ramequins, déposer. Frais, minimum 1 h. Restes mousse, lécher avant laver. Dessert, servir."
    kcal_per_serving: 158
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
    kcal_per_serving: 290
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
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
  note_verif: "œufs crus ou peu cuits"

---

# Mousse au chocolat
**Équipement :** [[maryse]] · [[batteur]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/mousse-au-chocolat]]

## Ingrédients (4 personnes)

- 200 g de chocolat de votre choix
- 75 g de beurre
- 4 œuf
- 40 g de sucre

## Préparation

1. Cassez en morceaux l’équivalent d’une tablette de chocolat et faites-la fonre au bain-marie avec le beurre coupé grossièrement.
2. Pendant ce temps, clarifiez vos œufs.
3. Surveillez le bain-marie. Une fois le chocolat entièrement fondu, mettez-le hors du feu, ajoutez-y les jaunes d’œufs et mélangez.
4. Ajoutez le sucre aux blancs d’œufs et montez-les en neige à l’aide d’un batteur.
5. Incorporez les blancs montés en neige au chocolat à l’aide d’une maryse. Mélangez délicatement, de manière aérienne, pour ne pas casser les blancs.
6. Déposez la mousse dans des ramequins et mettez-les au frais pendant au moins une heure. Et n’hésitez pas à lécher les restes de mousse au chocolat de votre récipient avant de le laver…

 
 

 
 Servez vos mousses au moment du dessert et régalez-vous !
