---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: filet-mignon-a-la-moutarde
title: Filet mignon à la moutarde
lang: fr
description: "Filet mignon de porc, crème et moutarde, pour 4. Plat de semaine. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- porc
- moutarde
- cocotte
image:
  url:
  alt: Filet mignon à la moutarde
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
house_toggle: 
house_options: []
histoire: "Le filet mignon de porc à la moutarde est un rôti français : viande saisie, déglacée, crème et moutarde de Dijon. Cuisson courte. On sert avec pommes de terre ou riz."
fun_facts:
- text: "Chez le porc, le filet mignon sèche si on le cuit trop."
  source_name: "Wikipedia FR, Filet mignon"
  source_url: "https://fr.wikipedia.org/wiki/Filet_mignon"
- text: La moutarde de Dijon se monte hors du feu pour ne pas amertumer.
  source_name: "Wikipedia FR, Moutarde de Dijon"
  source_url: "https://fr.wikipedia.org/wiki/Moutarde_de_Dijon"
- text: "La crème lie la sauce ; trop bouillie, elle peut granuler."
  source_name: "Wikipedia FR, Crème fraîche"
  source_url: "https://fr.wikipedia.org/wiki/Cr%C3%A8me_fra%C3%AEche"
wines:
- name: Brouilly
  producer: Château Thivin
  origin: "Côte de Brouilly, Beaujolais"
  grapes: Gamay
  award: 
  why: "Fruit, charcuterie, cake salé."
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, tomate, viande, mijoté."
- name: "Pinot Noir d'Alsace"
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Pinot noir
  award: 
  why: "Fruit rouge, viande blanche, champignon."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    - moutarde
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: filet mignon de porc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: moutarde de Dijon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: échalotes
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Saisir. Saisissez le filet mignon 6 min, puis réservez."
    - "Sauce. Faites suer les échalotes, déglacez au vin, ajoutez la crème, puis la moutarde hors du feu."
    - "Finition. Remettez 5 min dans la sauce."
    steps_niveaux:
      amateur:
      - "Saisir. Saisissez le filet mignon 6 min, puis réservez."
      - "Sauce. Faites suer les échalotes, [[deglacer|déglacez]] au vin, ajoutez la crème, puis la moutarde [[hors-du-feu|hors du feu]]."
      - "Finition. Remettez 5 min dans la sauce."
      pro:
      - "Saisir. Saisir le filet mignon 6 min, puis réserver."
      - "Sauce. Faire suer les échalotes, déglacer au vin, ajouter la crème, puis la moutarde hors du feu."
      - "Finition. Remettre 5 min dans la sauce."
      cavernes:
      - "Saisir. Filet mignon, saisir 6 min, réserver."
      - "Sauce. Échalotes, suer. Vin, déglacer. Crème, ajouter. Hors feu, moutarde."
      - "Finition. Sauce, 5 min, remettre."
    kcal_per_serving: 520
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
    - lactose
    - produits_laitiers
    - soja
    - moutarde
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: moutarde de Dijon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: échalotes
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Saisir. Saisissez le tofu 6 min, puis réservez."
    - "Sauce. Faites suer les échalotes, déglacez au vin, ajoutez la crème, puis la moutarde hors du feu."
    - "Napper. Remettez 5 min dans la sauce."
    steps_niveaux:
      amateur:
      - "Saisir. Saisissez le tofu 6 min, puis réservez."
      - "Sauce. Faites suer les échalotes, [[deglacer|déglacez]] au vin, ajoutez la crème, puis la moutarde [[hors-du-feu|hors du feu]]."
      - "[[napper|Napper]]. Remettez 5 min dans la sauce."
      pro:
      - "Saisir. Saisir le tofu 6 min, puis réserver."
      - "Sauce. Faire suer les échalotes, déglacer au vin, ajouter la crème, puis la moutarde hors du feu."
      - "Napper. Remettre 5 min dans la sauce."
      cavernes:
      - "Saisir. Tofu, saisir 6 min, réserver."
      - "Sauce. Échalotes, suer. Vin, déglacer. Crème, ajouter. Hors feu, moutarde."
      - "Napper. Sauce, 5 min, remettre."
    kcal_per_serving: 430
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
    - soja
    - moutarde
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: crème de soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: moutarde de Dijon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: échalotes
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Saisir. Saisissez le tofu 6 min, puis réservez."
    - "Sauce. Faites suer les échalotes, déglacez au vin, ajoutez la crème de soja, puis la moutarde hors du feu."
    - "Napper. Remettez 5 min dans la sauce."
    steps_niveaux:
      amateur:
      - "Saisir. Saisissez le tofu 6 min, puis réservez."
      - "Sauce. Faites suer les échalotes, [[deglacer|déglacez]] au vin, ajoutez la crème de soja, puis la moutarde [[hors-du-feu|hors du feu]]."
      - "[[napper|Napper]]. Remettez 5 min dans la sauce."
      pro:
      - "Saisir. Saisir le tofu 6 min, puis réserver."
      - "Sauce. Faire suer les échalotes, déglacer au vin, ajouter la crème de soja, puis la moutarde hors du feu."
      - "Napper. Remettre 5 min dans la sauce."
      cavernes:
      - "Saisir. Tofu, saisir 6 min, réserver."
      - "Sauce. Échalotes, suer. Vin, déglacer. Crème soja, ajouter. Hors feu, moutarde."
      - "Napper. Sauce, 5 min, remettre."
    kcal_per_serving: 400
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
    - lactose
    - produits_laitiers
    - moutarde
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: pavés de cabillaud
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: moutarde de Dijon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: échalotes
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Poisson. Faites cuire 4 min par face."
    - "Sauce. Préparez une sauce à la crème et à la moutarde."
    - "Napper. Laissez 5 min dans la sauce."
    steps_niveaux:
      amateur:
      - "Poisson. Faites cuire 4 min par face."
      - "Sauce. Préparez une sauce à la crème et à la moutarde."
      - "[[napper|Napper]]. Laissez 5 min dans la sauce."
      pro:
      - "Poisson. Cuire 4 min par face."
      - "Sauce. Préparer une sauce à la crème et à la moutarde."
      - "Napper. Laisser 5 min dans la sauce."
      cavernes:
      - "Poisson. Cuire 4 min par face."
      - "Sauce. Sauce crème, moutarde, préparer."
      - "Napper. Sauce, 5 min, laisser."
    kcal_per_serving: 410
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegetarienne:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  pesco:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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

# Filet mignon à la moutarde

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 600 g filet mignon de porc
- 150 ml crème fraîche
- 30 g moutarde de Dijon
- 20 g beurre
- 80 ml vin blanc
- 80 g échalotes

## Préparation

1. Saisir. Saisissez le filet mignon 6 min, puis réservez.
2. Sauce. Faites suer les échalotes, déglacez au vin, ajoutez la crème, puis la moutarde hors du feu.
3. Finition. Remettez 5 min dans la sauce.
