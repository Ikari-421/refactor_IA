---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: choux-au-chocolat
title: Choux au chocolat
lang: fr
description: "Choux pâte à choux, crème pâtissière chocolat, pour 4. Pâtisserie classique. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: sucré
tags:
- sucré
- choux
- chocolat
- pâtisserie
image:
  url:
  alt: Choux au chocolat
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "La pâte à choux (eau, beurre, farine, œufs) daterait de Panterelli puis d’Avice et Carême. Le chou au chocolat se garnit de pâtissière cacao ou ganache. Poche à douille, four sec, ne pas ouvrir en début de cuisson."
fun_facts:
- text: "La farine est desséchée sur le feu avant les œufs : c’est le panade."
  source_name: "Wikipedia FR, Pâte à choux"
  source_url: "https://fr.wikipedia.org/wiki/P%C3%A2te_%C3%A0_choux"
- text: "Le chou se garnit après cuisson, jamais avant, sinon il s’affaisse."
  source_name: "Wikipedia FR, Chou à la crème"
  source_url: "https://fr.wikipedia.org/wiki/Chou_%C3%A0_la_cr%C3%A8me"
- text: "Jaunes, lait, sucre, amidon : la pâtissière tient le chocolat fondu."
  source_name: "Wikipedia FR, Crème pâtissière"
  source_url: "https://fr.wikipedia.org/wiki/Cr%C3%A8me_p%C3%A2tissi%C3%A8re"
wines:
- name: Monbazillac
  producer: Château Tirecul La Gravière
  origin: "Monbazillac, Dordogne"
  grapes: "Sémillon, muscadelle"
  award: 
  why: "Miel, dessert aux noix ou chocolat."
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: "Rivesaltes, Roussillon"
  grapes: Muscat
  award: 
  why: "Fleur d’oranger, pêches, crème."
- name: Champagne Brut
  producer: Pierre Gimonnet
  origin: Côte des Blancs
  grapes: Chardonnay
  award: 
  why: "Bulles, fête, bananes flambées, île flottante."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - robot-patissier
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 80
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: lait
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: cacao
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: "jaunes d'œufs"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: maïzena
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Panade. Portez l’eau et le beurre à ébullition, ajoutez la farine et desséchez, puis incorporez les œufs un à un."
    - "Four. Dressez les choux et enfournez 20 min à 180 °C."
    - "Crème. Préparez une crème pâtissière au cacao et garnissez les choux une fois froids."
    steps_niveaux:
      amateur:
      - "[[panade|Panade]]. Portez l’eau et le beurre à ébullition, ajoutez la farine et [[dessecher|desséchez]], puis incorporez les œufs un à un."
      - "Four. Dressez les choux et enfournez 20 min à 180 °C."
      - "Crème. Préparez une crème pâtissière au cacao et garnissez les choux une fois froids."
      pro:
      - "Porter l’eau et le beurre à ébullition. Ajouter la farine, dessécher. Incorporer les œufs un à un."
      - "Dresser les choux. Enfourner 20 min à 180 °C."
      - "Préparer une crème pâtissière au cacao. Garnir les choux une fois froids."
      cavernes:
      - "Panade. Eau, beurre, ébullition. Farine, ajouter, dessécher. Œufs, incorporer 1 par 1."
      - "Four. Choux, dresser. 20 min 180 °C."
      - "Crème. Crème pâtissière cacao. Choux froids, garnir."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    - gluten
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
  vegan:
    label: Vegan
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - robot-patissier
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 80
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: "lait d'avoine"
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: cacao
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: maïzena
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Panade. Portez l’eau et la margarine végétale à ébullition, ajoutez la farine, puis le lait d’avoine."
    - "Four. Enfournez 20 min à 180 °C."
    - "Crème. Faites une crème avec le lait d’avoine, le cacao et la maïzena, puis garnissez."
    steps_niveaux:
      amateur:
      - "[[panade|Panade]]. Portez l’eau et la margarine végétale à ébullition, ajoutez la farine, puis le lait d’avoine."
      - "Four. Enfournez 20 min à 180 °C."
      - "Crème. Faites une crème avec le lait d’avoine, le cacao et la maïzena, puis garnissez."
      pro:
      - "Porter l’eau et la margarine végétale à ébullition. Ajouter la farine, puis le lait d’avoine."
      - "Enfourner 20 min à 180 °C."
      - "Faire une crème avec le lait d’avoine, le cacao et la maïzena. Garnir."
      cavernes:
      - "Panade. Eau, margarine végétale, ébullition. Farine, ajouter. Lait d’avoine."
      - "Four. 20 min 180 °C."
      - "Crème. Lait d’avoine, cacao, maïzena. Garnir."
    kcal_per_serving: 430
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
    - oeuf
    - lactose
    - produits_laitiers
    - gluten
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
lexique_local:
  traditionnelle:
    dessecher:
      terme: "dessécher"
      explication: "Vous ajoutez la farine à la panade, sur le feu. Vous remuez jusqu’à ce que la pâte se détache et sèche (un film au fond). C’est réussi quand la pâte se détache et qu’un film se forme au fond."
      ref: Cuisine/Lexique/dessecher.md
    panade:
      terme: "panade"
      explication: "Vous faites une pâte de base avec un liquide, de la matière grasse et de la farine, souvent desséchée sur le feu, puis vous y incorporez les œufs. C’est la pâte des choux et des éclairs. C’est réussi quand la pâte est lisse et se dresse."
      ref: Cuisine/Lexique/panade.md
  vegan:
    panade:
      terme: "panade"
      explication: "Vous faites une pâte de base avec un liquide, de la matière grasse et de la farine, souvent desséchée sur le feu, puis vous y incorporez les œufs. C’est la pâte des choux et des éclairs. C’est réussi quand la pâte est lisse et se dresse."
      ref: Cuisine/Lexique/panade.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 2 à 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Choux au chocolat

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 80 g beurre
- 125 ml eau
- 100 g farine
- 3 piece œufs
- 400 ml lait
- 80 g sucre
- 40 g cacao
- 3 piece jaunes d'œufs
- 30 g maïzena

## Préparation

1. Panade. Portez l’eau et le beurre à ébullition, ajoutez la farine et desséchez, puis incorporez les œufs un à un.
2. Four. Dressez les choux et enfournez 20 min à 180 °C.
3. Crème. Préparez une crème pâtissière au cacao et garnissez les choux une fois froids.
