---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: moules-marinieres
title: Moules marinières
lang: fr
description: "Moules marinières : vin blanc, échalote, persil, pour 4. Plat de mer. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- moules
- vin
- mer
image:
  url:
  alt: Moules marinières
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Les moules marinières, plat du nord de la France et de Belgique, cuisent à la vapeur du vin blanc, échalotes, persil, poivre. On jette les coquilles ouvertes avant cuisson et celles restées fermées après. Pain pour la sauce."
fun_facts:
- text: "Marinière : cuisson de marin, vin et aromates, sans crème (la crème, c’est moules à la crème)."
  source_name: "Wikipedia FR, Moules marinières"
  source_url: "https://fr.wikipedia.org/wiki/Moules_marini%C3%A8res"
- text: "En Belgique, les frites sont l’accompagnement presque obligatoire."
  source_name: "Wikipedia EN, Moules-frites"
  source_url: "https://en.wikipedia.org/wiki/Moules-frites"
- text: "Une moule vivante se ferme si on la tape ; ouverte et inerte, on la jette."
  source_name: "Wikipedia FR, Moule"
  source_url: "https://fr.wikipedia.org/wiki/Moule_(mollusque)"
wines:
- name: Muscadet Sèvre-et-Maine
  producer: "Domaine de l'Ecu"
  origin: "Muscadet, Loire"
  grapes: Melon de Bourgogne
  award: 
  why: "Iode, fruits de mer, friture légère."
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et pierre, plat vif ou herbes."
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Pierre et citron, beurre ou poisson."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - mollusques
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 2000
      unit: g
      item: moules
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
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
    - qty: 20
      unit: g
      item: persil
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
    - qty: 4
      unit: g
      item: poivre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Nettoyer. Ôtez les barbes, rincez le sable et jetez les moules déjà ouvertes."
    - "Cuisson. Faites suer les échalotes, ajoutez le vin blanc et les moules, puis couvrez 5 min."
    - "Service. Parsemez de persil, poivrez et servez avec du pain."
    steps_niveaux:
      amateur:
      - "Nettoyer. Ôtez les barbes, rincez le sable et jetez les moules déjà ouvertes."
      - "Cuisson. Faites suer les échalotes, ajoutez le vin blanc et les moules, puis couvrez 5 min."
      - "Service. Parsemez de persil, poivrez et servez avec du pain."
      pro:
      - "Ôter les barbes. Rincer le sable. Jeter les moules déjà ouvertes."
      - "Faire suer les échalotes. Ajouter le vin blanc et les moules. Couvrir 5 min."
      - "Parsemer de persil. Poivrer. Servir avec du pain."
      cavernes:
      - "Nettoyer. Barbes, ôter. Sable, rincer. Moules déjà ouvertes, jeter."
      - "Cuisson. Échalotes, suer. Vin blanc, moules, ajouter. Couvrir 5 min."
      - "Service. Persil, parsemer. Poivrer. Pain, servir."
    kcal_per_serving: 280
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
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: pleurotes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
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
    - qty: 20
      unit: g
      item: persil
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
    steps:
    - "Champignons. Faites suer les échalotes, ajoutez le vin blanc et les pleurotes, puis laissez 8 min."
    - "Persil. Poursuivez à couvert 5 min avec les échalotes et le vin blanc, puis parsemez de persil."
    - "Pain. Parsemez de persil et servez."
    steps_niveaux:
      amateur:
      - "Champignons. Faites suer les échalotes, ajoutez le vin blanc et les pleurotes, puis laissez 8 min."
      - "Persil. Poursuivez à couvert 5 min avec les échalotes et le vin blanc, puis parsemez de persil."
      - "Pain. Parsemez de persil et servez."
      pro:
      - "Faire suer les échalotes. Ajouter le vin blanc et les pleurotes. Laisser 8 min."
      - "Poursuivre à couvert 5 min avec les échalotes et le vin blanc. Parsemer de persil."
      - "Parsemer de persil. Servir."
      cavernes:
      - "Champignons. Échalotes, suer. Vin blanc, pleurotes, ajouter. Laisser 8 min."
      - "Persil. À couvert 5 min, échalotes, vin blanc, poursuivre. Persil, parsemer."
      - "Pain. Persil, parsemer. Servir."
    kcal_per_serving: 220
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
    allergens: []
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 15
      rest_min: 0
      total_min: 25
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: pleurotes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
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
    - qty: 20
      unit: g
      item: persil
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Champignons. Faites cuire les pleurotes dans le vin blanc 8 min."
    - "Persil. Ajoutez les échalotes et le vin blanc, puis couvrez 5 min. Parsemez de persil."
    steps_niveaux:
      amateur:
      - "Champignons. Faites cuire les pleurotes dans le vin blanc 8 min."
      - "Persil. Ajoutez les échalotes et le vin blanc, puis couvrez 5 min. Parsemez de persil."
      pro:
      - "Cuire les pleurotes dans le vin blanc 8 min."
      - "Ajouter les échalotes et le vin blanc. Couvrir 5 min. Parsemer de persil."
      cavernes:
      - "Champignons. Pleurotes, vin blanc, cuire 8 min."
      - "Persil. Échalotes, vin blanc, ajouter. Couvrir 5 min. Persil, parsemer."
    kcal_per_serving: 200
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
    - lactose
    - produits_laitiers
    - mollusques
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 à 48 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: Ne pas recongeler.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C) si servi chaud.
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Moules cuites : 24 h au frigo, ne pas recongeler."

---

# Moules marinières

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 2000 g moules
- 200 ml vin blanc
- 80 g échalotes
- 20 g persil
- 20 g beurre
- 4 g poivre

## Préparation

1. Nettoyer. Ôtez les barbes, rincez le sable et jetez les moules déjà ouvertes.
2. Cuisson. Faites suer les échalotes, ajoutez le vin blanc et les moules, puis couvrez 5 min.
3. Service. Parsemez de persil, poivrez et servez avec du pain.
