---
schema: recette-web-jigme/v2
equipment:
- ref: chalumeau
- ref: fouet
slug: tartelette-au-citron-meringuee
title: Tartelettes au citron meringuées
lang: fr
description: "Tartelettes au citron meringuées : recette française avec farine, beurre et sucre glace, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- citron
- meringue
- tartelette
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tartelette-au-citron-meringuee.webp
  alt: Tartelettes au citron meringuées
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/tartelette-au-citron-meringuee.md
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
    - from: beurre
      to: beurre sans lactose ou clarifié
      note:
    - from: beurre
      to: beurre sans lactose ou clarifié
      note:
    note: 'Lactose : beurre → beurre sans lactose ou clarifié.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: beurre
      to: margarine végétale
      note:
    - from: beurre
      to: margarine végétale
      note:
    note: 'Produits laitiers : beurre → margarine végétale.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (jaune d''œuf) : pas d’adaptation fiable.'
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
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
histoire: 'La tarte au citron française (pâte sucrée, crème citron) se fixe aux XVIIIe–XIXe
  s. ; sans meringue dans sa forme « pâtisserie ». La version meringuée recoupe la lemon meringue
  pie anglo-américaine : crème aux jaunes, zeste et jus, parfois amidon, meringue pochée puis
  brève cuisson. Le nom « lemon meringue pie » apparaît en 1869. Les tartelettes sont le même
  dessert en portion.'
fun_facts:
- text: 'Menon (1739) : fruits recouverts de meringue cuite (pommes meringuées) ; crème «
    citron » meringuée en anglais dès 1769.'
  source_name: Wikipedia EN, Lemon meringue pie
  source_url: https://en.wikipedia.org/wiki/Lemon_meringue_pie
- text: La tarte au citron française classique n’inclut pas la meringue.
  source_name: Wikipedia EN, Lemon tart
  source_url: https://en.wikipedia.org/wiki/Lemon_tart
- text: 'Origines de la pie meringuée discutées (Goodfellow à Philadelphie, Frehse en Suisse,
    etc.) : on ne tranche pas.'
  source_name: TasteAtlas
  source_url: https://www.tasteatlas.com/lemon-meringue-pie
- text: 'National Lemon Meringue Pie Day aux États-Unis : 15 août.'
  source_name: TasteAtlas
  source_url: https://www.tasteatlas.com/lemon-meringue-pie
wines:
- name: Jurançon moelleux
  producer: Domaine Cauhapé
  origin: Jurançon AOP
  grapes: petit manseng
  award:
  why: acidité et agrumes confits du petit manseng tiennent tête au citron ; le moelleux porte
    la meringue.
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Coteaux du Layon AOP
  grapes: chenin blanc
  award:
  why: chenin liquoreux, fraîcheur, notes d’agrumes — accord classique tarte au citron.
- name: Muscat de Saint-Jean-de-Minervois
  producer: Domaine de Barroubio
  origin: Saint-Jean-de-Minervois AOP
  grapes: muscat à petits grains
  award:
  why: VDN muscat, vivacité du Minervois (cité par Toutlevin pour ce plat) plutôt qu’un Sauternes
    trop lourd.
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
    - oeuf
    - produits_laitiers
    difficulty: 3
    time:
      prep_min: 35
      cook_min: 30
      rest_min: 0
      total_min: 80
    equipment:
    - 4 moules tartelettes ou moule 18–20 cm
    - fouet
    - casserole
    substitutions:
    - from: pas de zeste untreated
      to: citrons bio
      note:
    - from: pas de chalumeau
      to: 5–8 min à 200 °C
      note:
    scale_note:
    ingredients:
    - qty: 125
      unit: g
      item: farine
      note:
      group: Pâte
    - qty: 62
      unit: g
      item: beurre
      note:
      group: Pâte
    - qty: 25
      unit: g
      item: sucre glace
      note:
      group: Pâte
    - qty: 2
      unit: g
      item: sel
      note:
      group: Pâte
    - qty: 1
      unit: piece
      item: jaune d'œuf
      note:
      group: Pâte
    - qty: 15
      unit: g
      item: eau
      note:
      group: Pâte
    - qty: 2
      unit: piece
      item: jaunes d’œufs
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sucre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: citrons (zeste et jus)
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 14
      unit: g
      item: fécule de maïs
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: blancs
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Meringue
      scale: false
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
    - "Préparation. Cuisez les fonds à blanc."
    - "Cuisson. Blanchissez les jaunes d’œufs avec le sucre, incorporez la fécule de maïs, le jus et le zeste de citron, portez à ébullition en fouettant, ajoutez le beurre hors du feu, passez au chinois si besoin, puis garnissez les fonds."
    - "Finition. Montez les blancs avec le sel en versant le sucre en pluie. Collez la meringue aux bords. Enfournez 8 min à 180–200 °C."
    steps_niveaux:
      amateur:
      - "Préparation. Cuisez les fonds à blanc."
      - "Cuisson. [[blanchir|Blanchissez]] les jaunes d’œufs avec le sucre, incorporez la fécule de maïs, le jus et le zeste de citron, portez à ébullition en fouettant, ajoutez le beurre [[hors-du-feu|hors du feu]], passez au chinois si besoin, puis garnissez les fonds."
      - "Finition. [[monter-en-neige|Montez en neige]] les blancs avec le sel en versant le sucre en pluie. Collez la meringue aux bords. Enfournez 8 min à 180–200 °C."
      pro:
      - "Cuire les fonds à blanc."
      - "Blanchir les jaunes d’œufs avec le sucre, incorporer la fécule de maïs, le jus et le zeste de citron, porter à ébullition en fouettant, ajouter le beurre hors du feu, passer au chinois si besoin, puis garnir les fonds."
      - "Monter les blancs avec le sel en versant le sucre en pluie. Coller la meringue aux bords. Enfourner 8 min à 180–200 °C."
      cavernes:
      - "Préparation. Fonds, cuire à blanc."
      - "Cuisson. Jaunes œufs, sucre, blanchir. Fécule maïs, jus, zeste citron, incorporer. Fouetter, ébullition. Beurre, hors feu, ajouter. Chinois si besoin. Fonds, garnir."
      - "Finition. Blancs, sel, sucre en pluie, monter en neige. Meringue, bords, coller. Four 180–200 °C, 8 min."
    kcal_per_serving: 490
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
    kcal_per_serving: 490
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
    difficulty: 3
    time:
      prep_min: 35
      cook_min: 25
      rest_min: 0
      total_min: 75
    equipment:
    - 4 moules tartelettes ou moule 18–20 cm
    - fouet
    - casserole
    substitutions:
    - from: trop acide
      to: 10 g de sucre de plus, pas de lait
      note:
    scale_note:
    ingredients:
    - qty: 125
      unit: g
      item: farine
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 62
      unit: g
      item: margarine
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 25
      unit: g
      item: sucre glace
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sel
      group: Pâte
      scale: false
      optional: false
      to_taste: true
    - qty: 20
      unit: g
      item: eau
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: jus de citron + zeste
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sucre
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: fécule
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: margarine
      group: Crème
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: aquafaba
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: Meringue
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
    - "Fonds à blanc. Cuisez les fonds à blanc. Faites cuire la crème jusqu’à nappe. Montez l’aquafaba, puis dorez."
    steps_niveaux:
      amateur:
      - "Fonds à blanc. Cuisez les fonds à blanc. Faites cuire la crème jusqu’à nappe. [[monter-en-neige|Montez en neige]] l’aquafaba, puis dorez."
      pro:
      - "Cuire les fonds à blanc. Cuire la crème jusqu’à nappe. Monter l’aquafaba, puis dorer."
      cavernes:
      - "Fonds à blanc. Fonds, cuire à blanc. Crème, cuire jusqu’à nappe. Aquafaba, monter en neige, dorer."
    kcal_per_serving: 470
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
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 3
    time:
      prep_min: 35
      cook_min: 0
      rest_min: 0
      total_min: 90
    equipment:
    - moules tartelettes ou moule à tarte
    - fouet
    - casserole
    - chinois (facultatif)
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte sablée sucrée (voir fiche pâte sablée)
      note:
      group: Pâte
    - qty: 3
      unit: piece
      item: jaunes d’œufs
      group: Crème citron
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group: Crème citron
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: citrons (zeste et jus)
      group: Crème citron
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: fécule de maïs
      group: Crème citron
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: beurre
      group: Crème citron
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: blancs d’œufs
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group: Meringue
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: Meringue
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Préparation. Cuisez les fonds à blanc ([[pate-sablee-sucree]])."
    - "Cuisson. Blanchissez les jaunes d’œufs avec le sucre."
    - "Cuisson. Ajoutez la fécule de maïs, le jus et le zeste de citron."
    - "Cuisson. Portez à ébullition en fouettant."
    - "Cuisson. Hors du feu, ajoutez le beurre."
    - "Cuisson. Passez au chinois, si vous le souhaitez."
    - "Cuisson. Garnissez les fonds."
    - "Finition. Montez les blancs d’œufs en ajoutant le sucre progressivement, avec le sel. Pochez ou étalez. Dorez au four ou au chalumeau."
    steps_niveaux:
      amateur:
      - "Préparation. Cuisez les fonds à blanc (pâte sablée sucrée)."
      - "Cuisson. [[blanchir|Blanchissez]] les jaunes d’œufs avec le sucre."
      - "Cuisson. Ajoutez la fécule de maïs, le jus et le zeste de citron."
      - "Cuisson. Portez à ébullition en fouettant."
      - "Cuisson. [[hors-du-feu|Hors du feu]], ajoutez le beurre."
      - "Cuisson. Passez au chinois, si vous le souhaitez."
      - "Cuisson. Garnissez les fonds."
      - "Finition. [[monter-en-neige|Montez en neige]] les blancs d’œufs en ajoutant le sucre progressivement, avec le sel. Pochez ou étalez. Dorez au four ou [[chalumeau|au chalumeau]]."
      pro:
      - "Cuire les fonds à blanc."
      - "Blanchir les jaunes d’œufs avec le sucre."
      - "Ajouter la fécule de maïs, le jus et le zeste de citron."
      - "Porter à ébullition en fouettant."
      - "Hors du feu, ajouter le beurre."
      - "Passer au chinois, si souhaité."
      - "Garnir les fonds."
      - "Monter les blancs d’œufs en ajoutant le sucre progressivement, avec le sel. Pocher ou étaler. Dorer au four ou au chalumeau."
      cavernes:
      - "Préparation. Fonds, cuire à blanc."
      - "Cuisson. Jaunes œufs, sucre, blanchir."
      - "Cuisson. Fécule maïs, jus, zeste citron, ajouter."
      - "Cuisson. Fouetter, ébullition."
      - "Cuisson. Hors feu. Beurre, ajouter."
      - "Cuisson. Option : chinois, passer."
      - "Cuisson. Fonds, garnir."
      - "Finition. Blancs œufs, sucre progressivement, sel, monter en neige. Pocher ou étaler. Four ou chalumeau, dorer."
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  vegan:
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
  ma_recette:
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    monter-en-neige:
      terme: "monter en neige"
      explication: "Vous fouettez les blancs d’œufs (ou l’aquafaba). Vous continuez jusqu’à une mousse ferme qui tient en pics. C’est réussi quand la mousse tient en pics."
      ref: Cuisine/Lexique/monter-en-neige.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24–48 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Tartelettes au citron meringuées

![[tartelette-au-citron-meringuee.webp]]

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Sucré/tartelette-au-citron-meringuee.md).

**Catégorie :** sucré

## Ingrédients (4 personnes)

**Pâte :** ½ batch [[pate-sablee-sucree]] (ou 125 g farine / 62 g beurre / 25 g sucre glace / 2–3 g sel / 1 jaune / 15 g d’eau).

**Crème**
- 2 jaunes d’œufs
- 70 g de sucre
- zeste + jus de ~140 g de citrons
- 14 g de fécule de maïs
- 20 g de beurre

**Meringue**
- 50 g de blancs
- 80 g de sucre + pincée de sel

## Préparation

1. Préparation. Cuisez les fonds à blanc.
2. Cuisson. Blanchissez les jaunes d’œufs avec le sucre, incorporez la fécule de maïs, le jus et le zeste de citron, portez à ébullition en fouettant, ajoutez le beurre hors du feu, passez au chinois si besoin, puis garnissez les fonds.
3. Finition. Montez les blancs avec le sel en versant le sucre en pluie. Collez la meringue aux bords. Enfournez 8 min à 180–200 °C.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
