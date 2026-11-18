---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: biscuits-trempes-au-chocolat
title: Biscuits trempés au chocolat
lang: fr
description: "Sablés maison trempés dans le chocolat noir, pour 4. Goûter simple. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: sucré
tags:
- sucré
- biscuit
- chocolat
- goûter
image:
  url:
  alt: Biscuits trempés au chocolat
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
histoire: "Tremper un biscuit dans le chocolat reprend le sablé français et le chocolate dip anglo-saxon. Le cacao couvre la moitié du biscuit, on laisse figer. Chocolat de couverture (au moins 60 %) casse net."
fun_facts:
- text: "Le sablé nantais ou breton se travaille sablé : farine, beurre froid, sucre."
  source_name: "Wikipedia FR, Sablé"
  source_url: "https://fr.wikipedia.org/wiki/Sabl%C3%A9_(g%C3%A2teau)"
- text: La couverture fond plus nette que le chocolat pâtissier bas de gamme.
  source_name: "Wikipedia FR, Chocolat de couverture"
  source_url: "https://fr.wikipedia.org/wiki/Chocolat_de_couverture"
- text: "Un tempérage simple (fondre, refroidir, réchauffer un peu) donne un chocolat brillant."
  source_name: "Wikipedia FR, Tempérage"
  source_url: "https://fr.wikipedia.org/wiki/Temp%C3%A9rage_du_chocolat"
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
- name: Clairette de Die
  producer: Jaillance
  origin: "Die, Drôme"
  grapes: "Muscat, clairette"
  award: 
  why: "Bulles douces, dessert léger, fruit."
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
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - robot-patissier
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 200
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: beurre
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
    - qty: 1
      unit: piece
      item: œuf
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: chocolat noir
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: sel
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Mélangez la farine, le beurre froid, le sucre, le sel et l’œuf, filmez et réservez 30 min au frais."
    - "Cuisson. Détaillez des disques de 5 mm d’épaisseur et enfournez 12 min à 170 °C."
    - "Tremper. Trempez chaque biscuit à moitié dans le chocolat noir fondu, puis laissez figer."
    steps_niveaux:
      amateur:
      - "Mélangez la farine, le beurre froid, le sucre, le sel et l’œuf, filmez et réservez 30 min au frais."
      - "Détaillez des disques de 5 mm d’épaisseur et enfournez 12 min à 170 °C."
      - "Trempez chaque biscuit à moitié dans le chocolat noir fondu, puis laissez figer."
      pro:
      - "Mélanger farine, beurre froid, sucre, sel et œuf. Filmer. Réserver 30 min au frais."
      - "Détailler des disques de 5 mm d’épaisseur. Enfourner 12 min à 170 °C."
      - "Tremper chaque biscuit à moitié dans le chocolat noir fondu. Laisser figer."
      cavernes:
      - "Farine, beurre froid, sucre, sel, œuf : mélanger. Filmer. Réserver 30 min frais."
      - "Disques 5 mm : détailler. Four 170 °C 12 min."
      - "Biscuit : tremper moitié chocolat noir fondu. Figer."
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
      prep_min: 25
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - robot-patissier
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 200
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: margarine végétale
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
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: chocolat noir sans lait
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: sel
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Mélangez la farine, la margarine végétale, le sucre et le lait d’avoine, puis réservez 30 min au frais."
    - "Cuisson. Détaillez des disques de 5 mm d’épaisseur et enfournez 12 min à 170 °C."
    - "Tremper. Trempez chaque biscuit à moitié dans le chocolat noir sans lait fondu, puis laissez figer."
    steps_niveaux:
      amateur:
      - "Mélangez la farine, la margarine végétale, le sucre et le lait d’avoine, puis réservez 30 min au frais."
      - "Détaillez des disques de 5 mm d’épaisseur et enfournez 12 min à 170 °C."
      - "Trempez chaque biscuit à moitié dans le chocolat noir sans lait fondu, puis laissez figer."
      pro:
      - "Mélanger farine, margarine végétale, sucre et lait d’avoine. Réserver 30 min au frais."
      - "Détailler des disques de 5 mm d’épaisseur. Enfourner 12 min à 170 °C."
      - "Tremper chaque biscuit à moitié dans le chocolat noir sans lait fondu. Laisser figer."
      cavernes:
      - "Farine, margarine végétale, sucre, lait d’avoine : mélanger. Réserver 30 min frais."
      - "Disques 5 mm : détailler. Four 170 °C 12 min."
      - "Biscuit : tremper moitié chocolat noir sans lait fondu. Figer."
    kcal_per_serving: 450
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

# Biscuits trempés au chocolat

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 200 g farine
- 100 g beurre
- 80 g sucre
- 1 piece œuf
- 150 g chocolat noir
- 2 g sel

## Préparation

1. Pâte. Mélangez la farine, le beurre froid, le sucre, le sel et l’œuf, filmez et réservez 30 min au frais.
2. Cuisson. Détaillez des disques de 5 mm d’épaisseur et enfournez 12 min à 170 °C.
3. Tremper. Trempez chaque biscuit à moitié dans le chocolat noir fondu, puis laissez figer.
