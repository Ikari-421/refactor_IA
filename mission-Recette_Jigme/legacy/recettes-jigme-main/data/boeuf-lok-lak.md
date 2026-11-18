---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: boeuf-lok-lak
title: Bœuf lok lak
lang: fr
description: "Lok lak cambodgien : bœuf sauté, sauce poivre-citron, riz, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: cambodgienne
category: salé
tags:
- salé
- bœuf
- Cambodge
- wok
image:
  url:
  alt: Bœuf lok lak
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
    note: Déjà sans gluten.
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
histoire: "Le loc lac (lok lak) est un sauté de bœuf cambodgien, souvent servi sur riz et salade, avec un dip citron-poivre-sel. L’influence vietnamienne et chinoise se voit dans la marinade soja-ail. On saisit fort pour garder le cœur rosé."
fun_facts:
- text: "Le loc lac cambodgien se sert avec riz, oignon, tomate et sauce citron-poivre."
  source_name: "Wikipedia EN, Loc lac"
  source_url: "https://en.wikipedia.org/wiki/Loc_lac"
- text: Le wok et la sauce poisson (ou soja) tiennent beaucoup de sautés khmers.
  source_name: "Wikipedia FR, Cuisine cambodgienne"
  source_url: "https://fr.wikipedia.org/wiki/Cuisine_cambodgienne"
- text: "Le poivre de Kampot, IGP, est l’accord classique du lok lak."
  source_name: "Wikipedia FR, Poivre de Kampot"
  source_url: "https://fr.wikipedia.org/wiki/Poivre_de_Kampot"
wines:
- name: Madiran
  producer: Château Montus
  origin: "Madiran, Sud-Ouest"
  grapes: Tannat
  award: 
  why: "Tanin, bœuf, sauce soja caramélisée."
- name: Cahors
  producer: Château du Cèdre
  origin: "Cahors, Sud-Ouest"
  grapes: Malbec
  award: 
  why: "Noir, magret, parmentier, daube."
- name: Gewurztraminer Alsace
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Gewurztraminer
  award: 
  why: "Litchi et rose, cuisine épicée."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - soja
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - sauteuse-wok
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: rumsteck
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
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: "gousses d'ail"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: poivre de Kampot
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron vert
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: riz thaï cru
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: salade
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomates
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Marinade. Mélangez le rumsteck avec la sauce soja et l’ail, puis laissez mariner 20 min."
    - "Riz. Faites cuire le riz thaï à part."
    - "Sauté. Saisissez 4 min dans un wok très chaud. Servez avec une sauce au citron vert et au poivre de Kampot, et de la salade."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez le rumsteck avec la sauce soja et l’ail, puis [[mariner|laissez mariner]] 20 min."
      - "Riz. Faites cuire le riz thaï à part."
      - "Sauté. Saisissez 4 min dans un wok très chaud. Servez avec une sauce au citron vert et au poivre de Kampot, et de la salade."
      pro:
      - "Mélanger le rumsteck avec la sauce soja et l’ail. Mariner 20 min."
      - "Cuire le riz thaï à part."
      - "Saisir 4 min dans un wok très chaud. Servir avec une sauce au citron vert et au poivre de Kampot, et de la salade."
      cavernes:
      - "Marinade. Rumsteck, sauce soja, ail : mélanger. Mariner 20 min."
      - "Riz thaï : cuire à part."
      - "Wok très chaud : saisir 4 min. Sauce citron vert, poivre de Kampot. Salade. Servir."
    kcal_per_serving: 640
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
    - soja
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
      item: seitan ou champignons de Paris
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
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: "gousses d'ail"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: poivre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron vert
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: riz thaï cru
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Marinade. Mélangez le seitan ou les champignons de Paris avec la sauce soja et l’ail, puis laissez mariner 20 min."
    - "Sauté. Saisissez 4 min dans un wok très chaud. Servez avec une sauce au citron vert et au poivre."
    - "Service. Servez avec le riz thaï et la sauce au citron vert et au poivre."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez le seitan ou les champignons de Paris avec la sauce soja et l’ail, puis [[mariner|laissez mariner]] 20 min."
      - "Sauté. Saisissez 4 min dans un wok très chaud. Servez avec une sauce au citron vert et au poivre."
      - "Service. Servez avec le riz thaï et la sauce au citron vert et au poivre."
      pro:
      - "Mélanger le seitan ou les champignons de Paris avec la sauce soja et l’ail. Mariner 20 min."
      - "Saisir 4 min dans un wok très chaud. Servir avec une sauce au citron vert et au poivre."
      - "Servir avec le riz thaï et la sauce au citron vert et au poivre."
      cavernes:
      - "Marinade. Seitan ou champignons de Paris, sauce soja, ail : mélanger. Mariner 20 min."
      - "Wok très chaud : saisir 4 min. Sauce citron vert, poivre. Servir."
      - "Service. Riz thaï, sauce citron vert, poivre. Servir."
    kcal_per_serving: 520
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
    - gluten
    - soja
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 520
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
    - soja
    - poisson
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
      item: thon ou cabillaud en cubes
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
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: "gousses d'ail"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: poivre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron vert
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: riz thaï cru
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Marinade. Mélangez le thon ou le cabillaud en cubes avec la sauce soja et l’ail, puis laissez mariner 10 min."
    - "Sauté. Saisissez 3 min, sans trop cuire le poisson."
    - "Service. Servez avec le riz thaï et la sauce au citron vert et au poivre."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez le thon ou le cabillaud en cubes avec la sauce soja et l’ail, puis [[mariner|laissez mariner]] 10 min."
      - "Sauté. Saisissez 3 min, sans trop cuire le poisson."
      - "Service. Servez avec le riz thaï et la sauce au citron vert et au poivre."
      pro:
      - "Mélanger le thon ou le cabillaud en cubes avec la sauce soja et l’ail. Mariner 10 min."
      - "Saisir 3 min, sans trop cuire le poisson."
      - "Servir avec le riz thaï et la sauce au citron vert et au poivre."
      cavernes:
      - "Marinade. Thon ou cabillaud cubes, sauce soja, ail : mélanger. Mariner 10 min."
      - "Saisir 3 min, pas trop cuire poisson."
      - "Service. Riz thaï, sauce citron vert, poivre. Servir."
    kcal_per_serving: 580
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
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
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Bœuf lok lak

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 600 g rumsteck
- 40 ml sauce soja
- 20 ml huile
- 2 piece gousses d'ail
- 4 g poivre de Kampot
- 20 ml jus de citron vert
- 300 g riz thaï cru
- 150 g salade
- 2 piece tomates

## Préparation

1. Marinade. Mélangez le rumsteck avec la sauce soja et l’ail, puis laissez mariner 20 min.
2. Riz. Faites cuire le riz thaï à part.
3. Sauté. Saisissez 4 min dans un wok très chaud. Servez avec une sauce au citron vert et au poivre de Kampot, et de la salade.
