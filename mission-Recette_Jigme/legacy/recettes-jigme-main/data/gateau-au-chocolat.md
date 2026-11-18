---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: gateau-au-chocolat
title: Gâteau au chocolat
lang: fr
description: "Gâteau au chocolat : recette française fondante avec chocolat noir, beurre et œufs, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: sucré
tags:
- sucré
- chocolat
- gâteau
- dessert
image:
  url:
  alt: Gâteau au chocolat
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
    swaps:
    - from: farine de blé
      to: farine de riz
      note: Même poids.
    note: "Peu de farine : farine de riz possible."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Chocolat parfois traces. Lire l’étiquette.
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
histoire: "Le gâteau au chocolat se répand en Europe quand le cacao devient un ingrédient de pâtisserie, pas seulement une boisson. Au XIXe siècle, beurre, sucre, œufs et chocolat noir donnent le fondant actuel, sans levure ou avec très peu."
fun_facts:
- text: Le cacao arrive d’Amérique ; le gâteau tel qu’on le connaît est une affaire du XIXe siècle européen.
  source_name: "Wikipedia FR, Gâteau au chocolat"
  source_url: "https://fr.wikipedia.org/wiki/G%C3%A2teau_au_chocolat"
- text: "Un fondant se cuit peu : le centre reste tremblant, il fige en refroidissant."
  source_name: "Wikipedia FR, Gâteau au chocolat"
  source_url: "https://fr.wikipedia.org/wiki/G%C3%A2teau_au_chocolat"
- text: "Plus le chocolat est cacao, moins il faut de farine pour tenir le gâteau."
  source_name: "Wikipedia FR, Chocolat"
  source_url: "https://fr.wikipedia.org/wiki/Chocolat"
wines:
- name: Banyuls
  producer: Domaine de La Rectorie
  origin: "Banyuls, Roussillon"
  grapes: Grenache noir
  award: 
  why: "Vdn, cacao et fruit, tient un gâteau au chocolat noir."
- name: Maury
  producer: Mas Amiel
  origin: "Maury, Roussillon"
  grapes: Grenache noir
  award: 
  why: "Sucre et pruneau, dessert chocolaté sans l’écraser."
- name: Champagne Brut
  producer: Pierre Gimonnet
  origin: Côte des Blancs
  grapes: Chardonnay
  award: 
  why: "Bulles et agrumes, coupe le gras du beurre."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 60
      total_min: 130
    equipment:
    - bain-marie
    - moule
    - four
    substitutions:
    - from: "chocolat 70 %"
      to: "chocolat 60 %"
      note: Plus sucré.
    scale_note: 
    ingredients:
    - qty: 200
      unit: g
      item: "chocolat noir 70 %"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre
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
    - qty: 40
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Four. Préchauffez le four à 170 °C et beurrez un moule de 20 cm."
    - "Fonte. Faites fondre le chocolat noir et le beurre au bain-marie."
    - "Appareil. Incorporez le sucre, les œufs un à un, la farine et le sel. Mélangez sans trop fouetter."
    - "Cuisson. Enfournez 22 à 25 min : le cœur doit rester encore moelleux."
    - "Finition. Laissez refroidir 15 min avant de démouler."
    steps_niveaux:
      amateur:
      - "Four. Préchauffez le four à 170 °C et beurrez un moule de 20 cm."
      - "Fonte. Faites fondre le chocolat noir et le beurre au bain-marie."
      - "Appareil. Incorporez le sucre, les œufs un à un, la farine et le sel. Mélangez sans trop fouetter."
      - "Cuisson. Enfournez 22 à 25 min : le cœur doit rester encore moelleux."
      - "Finition. Laissez refroidir 15 min avant de démouler."
      pro:
      - "Préchauffer le four à 170 °C. Beurrer un moule de 20 cm."
      - "Fondre le chocolat noir et le beurre au bain-marie."
      - "Incorporer le sucre, les œufs un à un, la farine et le sel. Mélanger sans trop fouetter."
      - "Enfourner 22 à 25 min : le cœur encore moelleux."
      - "Refroidir 15 min. Démouler."
      cavernes:
      - "Four. Four 170 °C. Moule 20 cm, beurrer."
      - "Fonte. Chocolat noir, beurre, bain-marie, fondre."
      - "Appareil. Sucre, œufs 1 à 1, farine, sel, incorporer. Mélanger, pas trop fouetter."
      - "Cuisson. Four 22 à 25 min. Cœur encore moelleux."
      - "Finition. Refroidir 15 min. Démouler."
    kcal_per_serving: 520
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 520
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
    - pesco
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 60
      total_min: 130
    equipment:
    - moule
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 200
      unit: g
      item: chocolat noir vegan
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: huile de coco
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
    - qty: 80
      unit: g
      item: compote de pomme
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
    - qty: 80
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: levure chimique
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Four. Préchauffez le four à 170 °C et huilez le moule."
    - "Fonte. Faites fondre le chocolat noir vegan et l’huile de coco."
    - "Appareil. Mélangez la compote de pomme, le lait d’avoine, le sucre, la farine, la levure chimique et le sel."
    - "Cuisson. Enfournez 25 à 28 min."
    steps_niveaux:
      amateur:
      - "Four. Préchauffez le four à 170 °C et huilez le moule."
      - "Fonte. Faites fondre le chocolat noir vegan et l’huile de coco."
      - "Appareil. Mélangez la compote de pomme, le lait d’avoine, le sucre, la farine, la levure chimique et le sel."
      - "Cuisson. Enfournez 25 à 28 min."
      pro:
      - "Préchauffer le four à 170 °C. Huiler le moule."
      - "Fondre le chocolat noir vegan et l’huile de coco."
      - "Mélanger la compote de pomme, le lait d’avoine, le sucre, la farine, la levure chimique et le sel."
      - "Enfourner 25 à 28 min."
      cavernes:
      - "Four. Four 170 °C. Moule, huiler."
      - "Fonte. Chocolat noir vegan, huile de coco, fondre."
      - "Appareil. Compote de pomme, lait d’avoine, sucre, farine, levure chimique, sel, mélanger."
      - "Cuisson. Four 25 à 28 min."
    kcal_per_serving: 430
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gâteau au chocolat

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 200 g chocolat noir 70 %
- 150 g beurre doux
- 120 g sucre
- 3 piece œufs
- 40 g farine de blé
- 1 pincee sel

## Préparation

1. Four. Préchauffez le four à 170 °C et beurrez un moule de 20 cm.
2. Fonte. Faites fondre le chocolat noir et le beurre au bain-marie.
3. Appareil. Incorporez le sucre, les œufs un à un, la farine et le sel. Mélangez sans trop fouetter.
4. Cuisson. Enfournez 22 à 25 min : le cœur doit rester encore moelleux.
5. Finition. Laissez refroidir 15 min avant de démouler.
