---
schema: recette-web-jigme/v2
equipment: []
slug: gaufres
title: Gaufres
lang: fr
description: "Gaufres sucrées au gaufrier, pour 4. Pâte à la bière ou au lait. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: belge
category: sucré
tags:
- sucré
- gaufre
- goûter
- Belgique
image:
  url:
  alt: Gaufres
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
histoire: "La gaufre belge (Bruxelles, Liège) se cuit au fer. Version maison : lait, œufs, beurre, farine, un peu de sucre. Gaufrier bien chaud. Servir aussitôt, sucre glace ou fruits."
fun_facts:
- text: La gaufre de Liège contient des perles de sucre ; celle de Bruxelles est plus légère.
  source_name: "Wikipedia FR, Gaufre"
  source_url: "https://fr.wikipedia.org/wiki/Gaufre"
- text: Le fer à gaufres imprime alvéoles qui retiennent beurre et sucre.
  source_name: "Wikipedia EN, Waffle"
  source_url: "https://en.wikipedia.org/wiki/Waffle"
- text: "La bruxelloise se sert souvent avec fruits, la liégeoise se mange nature."
  source_name: "Wikipedia FR, Gaufre de Bruxelles"
  source_url: "https://fr.wikipedia.org/wiki/Gaufre_de_Bruxelles"
wines:
- name: Clairette de Die
  producer: Jaillance
  origin: "Die, Drôme"
  grapes: "Muscat, clairette"
  award: 
  why: "Bulles douces, dessert léger, fruit."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, gâteau, brunch, pancakes."
- name: Cidre bouché brut
  producer: Eric Bordelet
  origin: Normandie
  grapes: Pommes à cidre
  award: 
  why: "Pomme, crumble, tarte, chausson."
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
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: farine
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
    - qty: 2
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: lait
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: beurre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: levure chimique
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte. Mélangez la farine, le sucre, les œufs, le lait, le beurre fondu et la levure chimique."
    - "Repos. Laissez reposer 15 min."
    - "Cuisson. Faites cuire dans le gaufrier bien chaud, jusqu’à coloration."
    steps_niveaux:
      amateur:
      - "Pâte. Mélangez la farine, le sucre, les œufs, le lait, le beurre fondu et la levure chimique."
      - "Repos. Laissez reposer 15 min."
      - "Cuisson. Faites cuire dans le gaufrier bien chaud, jusqu’à coloration."
      pro:
      - "Mélanger farine, sucre, œufs, lait, beurre fondu et levure chimique."
      - "Laisser reposer 15 min."
      - "Cuire au gaufrier bien chaud, jusqu’à coloration."
      cavernes:
      - "Pâte. Farine, sucre, œufs, lait, beurre fondu, levure chimique, mélanger."
      - "Repos. 15 min."
      - "Cuisson. Gaufrier bien chaud. Cuire jusqu’à coloration."
    kcal_per_serving: 420
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
    kcal_per_serving: 420
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
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: farine
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
    - qty: 320
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: levure chimique
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Pâte végétale. Mélangez la farine, le sucre, le lait d’avoine, la margarine végétale fondue et la levure chimique."
    - "Repos. Laissez reposer 15 min."
    - "Gaufrier. Faites cuire dans le gaufrier bien chaud, jusqu’à coloration."
    steps_niveaux:
      amateur:
      - "Pâte végétale. Mélangez la farine, le sucre, le lait d’avoine, la margarine végétale fondue et la levure chimique."
      - "Repos. Laissez reposer 15 min."
      - "Gaufrier. Faites cuire dans le gaufrier bien chaud, jusqu’à coloration."
      pro:
      - "Mélanger farine, sucre, lait d’avoine, margarine végétale fondue et levure chimique."
      - "Laisser reposer 15 min."
      - "Cuire au gaufrier bien chaud, jusqu’à coloration."
      cavernes:
      - "Pâte végétale. Farine, sucre, lait d’avoine, margarine végétale fondue, levure chimique, mélanger."
      - "Repos. 15 min."
      - "Gaufrier. Gaufrier bien chaud. Cuire jusqu’à coloration."
    kcal_per_serving: 390
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
    kcal_per_serving: 420
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

# Gaufres

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 250 g farine
- 40 g sucre
- 2 piece œufs
- 300 ml lait
- 80 g beurre
- 8 g levure chimique

## Préparation

1. Pâte. Mélangez la farine, le sucre, les œufs, le lait, le beurre fondu et la levure chimique.
2. Repos. Laissez reposer 15 min.
3. Cuisson. Faites cuire dans le gaufrier bien chaud, jusqu’à coloration.
