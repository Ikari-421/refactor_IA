---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: eclair-au-chocolat
title: Éclair au chocolat
lang: fr
description: "Éclairs au chocolat : pâte à choux, crème et fondant, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: sucré
tags:
- sucré
- chocolat
- choux
- pâtisserie
image:
  url:
  alt: Éclair au chocolat
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
histoire: "L’éclair, chou allongé garni et glacé, se fixe au XIXe siècle. Version chocolat : pâtissière cacao, fondant ou ganache. Même pâte que les choux, pochée en boudins."
fun_facts:
- text: "Le nom « éclair » viendrait de ce qu’on le mange vite, « en un éclair »."
  source_name: "Wikipedia FR, Éclair"
  source_url: "https://fr.wikipedia.org/wiki/%C3%89clair_(p%C3%A2tisserie)"
- text: La pâte est la même que le chou ; seule la forme change.
  source_name: "Wikipedia EN, Éclair"
  source_url: "https://en.wikipedia.org/wiki/%C3%89clair"
- text: "Le fondant chocolat se pose sur l’éclair froid, pas tiède."
  source_name: "Wikipedia FR, Fondant"
  source_url: "https://fr.wikipedia.org/wiki/Fondant_(cuisine)"
wines:
- name: Monbazillac
  producer: Château Tirecul La Gravière
  origin: "Monbazillac, Dordogne"
  grapes: "Sémillon, muscadelle"
  award: 
  why: "Miel, dessert aux noix ou chocolat."
- name: Champagne Brut
  producer: Pierre Gimonnet
  origin: Côte des Blancs
  grapes: Chardonnay
  award: 
  why: "Bulles, fête, bananes flambées, île flottante."
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: "Rivesaltes, Roussillon"
  grapes: Muscat
  award: 
  why: "Fleur d’oranger, pêches, crème."
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
    - qty: 3
      unit: piece
      item: "jaunes d'œufs"
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
    - qty: 30
      unit: g
      item: maïzena
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chocolat noir
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Préparez la panade, incorporez les œufs, dressez des boudins à la poche."
    - "Four. Enfournez 20 min à 180 °C."
    - "Garnir. Garnissez de crème pâtissière au chocolat, nappez de fondant."
    steps_niveaux:
      amateur:
      - "Pâte. [[panade|Préparez la panade]], incorporez les œufs, dressez des boudins à la poche."
      - "Four. Enfournez 20 min à 180 °C."
      - "Garnir. Garnissez de crème pâtissière au chocolat, [[napper|nappez]] de fondant."
      pro:
      - "Pâte. Préparer la panade. Incorporer les œufs. Dresser des boudins à la poche."
      - "Four. Enfourner 20 min à 180 °C."
      - "Garnir. Garnir de crème pâtissière au chocolat. Napper de fondant."
      cavernes:
      - "Pâte. Panade, préparer. Œufs, incorporer. Boudins, poche, dresser."
      - "Four. Enfourner 20 min 180 °C."
      - "Garnir. Crème pâtissière chocolat, garnir. Fondant, napper."
    kcal_per_serving: 490
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
    kcal_per_serving: 490
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
    - qty: 400
      unit: ml
      item: "lait d'avoine"
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
    - qty: 30
      unit: g
      item: maïzena
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: chocolat noir sans lait
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte végétale. Préparez la panade et dressez des boudins à la poche."
    - "Crème. Faites une crème avec le lait d’avoine et la maïzena."
    - "Nappe. Nappez de chocolat fondu."
    steps_niveaux:
      amateur:
      - "Pâte végétale. [[panade|Préparez la panade]] et dressez des boudins à la poche."
      - "Crème. Faites une crème avec le lait d’avoine et la maïzena."
      - "Nappe. [[napper|Nappez]] de chocolat fondu."
      pro:
      - "Pâte végétale. Préparer la panade. Dresser des boudins à la poche."
      - "Crème. Faire une crème avec le lait d’avoine et la maïzena."
      - "Nappe. Napper de chocolat fondu."
      cavernes:
      - "Pâte végétale. Panade, préparer. Boudins, poche, dresser."
      - "Crème. Lait avoine, maïzena, crème."
      - "Nappe. Chocolat fondu, napper."
    kcal_per_serving: 440
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
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
    panade:
      terme: "panade"
      explication: "Vous faites une pâte de base avec un liquide, de la matière grasse et de la farine, souvent desséchée sur le feu, puis vous y incorporez les œufs. C’est la pâte des choux et des éclairs. C’est réussi quand la pâte est lisse et se dresse."
      ref: Cuisine/Lexique/panade.md
  vegan:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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

# Éclair au chocolat

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 80 g beurre
- 125 ml eau
- 100 g farine
- 3 piece œufs
- 400 ml lait
- 3 piece jaunes d'œufs
- 80 g sucre
- 30 g maïzena
- 100 g chocolat noir

## Préparation

1. Pâte. Préparez la panade, incorporez les œufs, dressez des boudins à la poche.
2. Four. Enfournez 20 min à 180 °C.
3. Garnir. Garnissez de crème pâtissière au chocolat, nappez de fondant.
