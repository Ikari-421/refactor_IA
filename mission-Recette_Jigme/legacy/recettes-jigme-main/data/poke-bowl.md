---
schema: recette-web-jigme/v2
equipment: []
slug: poke-bowl
title: Poke bowl
lang: fr
description: "Poke bowl hawaïen : riz, poisson cru, légumes, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: hawaïenne
category: salé
tags:
- salé
- poisson
- riz
- bol
image:
  url:
  alt: Poke bowl
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
    note: "Couche à appliquer : voir swaps."
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "Le poke hawaïen (couper) est un bol de poisson cru mariné (thon, saumon), riz, soja, sésame, algue, légumes. Version maison : poisson sashimi, riz vinaigré ou nature, toppings croquants. Servir de suite."
fun_facts:
- text: "Poke signifie « couper » en hawaïen : dés de poisson, pas carpaccio."
  source_name: "Wikipedia FR, Poke"
  source_url: "https://fr.wikipedia.org/wiki/Poke_(plat)"
- text: Le soja et le sésame sont des apports asiatiques au plat polynésien.
  source_name: "Wikipedia EN, Poke"
  source_url: "https://en.wikipedia.org/wiki/Poke_(dish)"
- text: "Un poisson « sashimi grade », très frais, ou on cuit."
  source_name: "Wikipedia FR, Thon"
  source_url: "https://fr.wikipedia.org/wiki/Thon"
wines:
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et pierre, plat vif ou herbes."
- name: Riesling Alsace
  producer: Trimbach
  origin: "Ribeauvillé, Alsace"
  grapes: Riesling
  award: 
  why: "Sec, coupe le gras et le sucré léger."
- name: Picpoul de Pinet
  producer: Ormarine
  origin: "Thau, Languedoc"
  grapes: Piquepoul
  award: 
  why: "Citron, entrée froide, huile d’olive."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - soja
    - poisson
    - sesame
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: saumon très frais
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile de sésame
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: concombre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sésame
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Riz. Faites cuire le riz, puis laissez-le tiédir."
    - "Poisson. Coupez le saumon en dés, puis mélangez-le à la sauce soja et au sésame."
    - "Bol. Dressez le riz, le poisson, l’avocat et le concombre."
    steps_niveaux:
      amateur:
      - "Riz. Faites cuire le riz, puis laissez-le tiédir."
      - "Poisson. Coupez le saumon en dés, puis mélangez-le à la sauce soja et au sésame."
      - "Bol. Dressez le riz, le poisson, l’avocat et le concombre."
      pro:
      - "Cuire le riz. Laisser tiédir."
      - "Couper le saumon en dés. Mélanger à la sauce soja et au sésame."
      - "Dresser le riz, le poisson, l’avocat et le concombre."
      cavernes:
      - "Riz. Riz, cuire. Tiédir."
      - "Poisson. Saumon, dés, couper. Sauce soja, sésame, mélanger."
      - "Bol. Riz, poisson, avocat, concombre, dresser."
    kcal_per_serving: 580
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
    - soja
    - sesame
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: concombre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sésame
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Riz. Faites cuire le riz, puis laissez-le tiédir."
    - "Tofu. Faites mariner le tofu ferme dans la sauce soja."
    - "Bol. Dressez le riz, le tofu, l’avocat et le concombre."
    steps_niveaux:
      amateur:
      - "Riz. Faites cuire le riz, puis laissez-le tiédir."
      - "Tofu. [[mariner|Faites mariner]] le tofu ferme dans la sauce soja."
      - "Bol. Dressez le riz, le tofu, l’avocat et le concombre."
      pro:
      - "Cuire le riz. Laisser tiédir."
      - "Mariner le tofu ferme dans la sauce soja."
      - "Dresser le riz, le tofu, l’avocat et le concombre."
      cavernes:
      - "Riz. Riz, cuire. Tiédir."
      - "Tofu. Tofu ferme, sauce soja, mariner."
      - "Bol. Riz, tofu, avocat, concombre, dresser."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - soja
    - sesame
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - soja
    - poisson
    - sesame
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Ne pas congeler un tartare ou des moules crues.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Poisson cru : 24 h, chaîne du froid. Riz 24 h."

---

# Poke bowl

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 400 g riz
- 400 g saumon très frais
- 40 ml sauce soja
- 20 ml huile de sésame
- 1 piece avocat
- 150 g concombre
- 10 g sésame

## Préparation

1. Riz. Faites cuire le riz, puis laissez-le tiédir.
2. Poisson. Coupez le saumon en dés, puis mélangez-le à la sauce soja et au sésame.
3. Bol. Dressez le riz, le poisson, l’avocat et le concombre.
