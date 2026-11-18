---
schema: recette-web-jigme/v2
equipment: []
slug: pancakes
title: Pancakes
lang: fr
description: "Pancakes américains, épais et moelleux, pour 4. Petit-déjeuner. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: américaine
category: sucré
tags:
- sucré
- petit-déjeuner
- blé
- brunch
image:
  url:
  alt: Pancakes
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
histoire: "Le pancake américain, plus épais que la crêpe, lève à la levure chimique ou au buttermilk. Poêle antiadhésive, bulles en surface avant de retourner. Sirop d’érable, beurre, fruits. Brunch du week-end."
fun_facts:
- text: "Le pancake se distingue de la crêpe : pâte plus épaisse, levée, d’un seul retournement."
  source_name: "Wikipedia FR, Pancake"
  source_url: "https://fr.wikipedia.org/wiki/Pancake"
- text: "Le buttermilk réagit avec le bicarbonate : plus de moelleux."
  source_name: "Wikipedia EN, Pancake"
  source_url: "https://en.wikipedia.org/wiki/Pancake"
- text: "Le sirop d’érable reste l’accompagnement classique, pas obligatoire."
  source_name: "Wikipedia FR, Sirop d'érable"
  source_url: "https://fr.wikipedia.org/wiki/Sirop_d%27%C3%A9rable"
wines:
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
      prep_min: 15
      cook_min: 15
      rest_min: 0
      total_min: 30
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
    - qty: 40
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
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
    - "Pâte. Mélangez la farine, le sucre, la levure chimique, les œufs, le lait et le beurre fondu. Ne fouettez pas trop."
    - "Poêle. Versez de petites louches de pâte dans la poêle."
    - "Retourner. Retournez dès l’apparition des bulles."
    steps_niveaux:
      amateur:
      - "Pâte. Mélangez la farine, le sucre, la levure chimique, les œufs, le lait et le beurre fondu. Ne fouettez pas trop."
      - "Poêle. Versez de petites louches de pâte dans la poêle."
      - "Retourner. Retournez dès l’apparition des bulles."
      pro:
      - "Mélanger la farine, le sucre, la levure chimique, les œufs, le lait et le beurre fondu. Ne pas trop fouetter."
      - "Verser de petites louches de pâte dans la poêle."
      - "Retourner dès l’apparition des bulles."
      cavernes:
      - "Pâte. Farine, sucre, levure chimique, œufs, lait, beurre fondu, mélanger. Pas trop fouetter."
      - "Poêle. Petites louches pâte, poêle, verser."
      - "Retourner. Bulles, apparition, retourner."
    kcal_per_serving: 410
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
    kcal_per_serving: 410
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
      cook_min: 15
      rest_min: 0
      total_min: 30
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
    - qty: 320
      unit: ml
      item: "lait d'avoine"
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
    - qty: 30
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
    - "Pâte végétale. Mélangez la farine, le sucre, la levure chimique, le lait d’avoine et la margarine végétale fondue. Ne fouettez pas trop."
    - "Poêle. Versez de petites louches de pâte dans la poêle."
    - "Retourner aux bulles. Retournez dès l’apparition des bulles."
    steps_niveaux:
      amateur:
      - "Pâte végétale. Mélangez la farine, le sucre, la levure chimique, le lait d’avoine et la margarine végétale fondue. Ne fouettez pas trop."
      - "Poêle. Versez de petites louches de pâte dans la poêle."
      - "Retourner aux bulles. Retournez dès l’apparition des bulles."
      pro:
      - "Mélanger la farine, le sucre, la levure chimique, le lait d’avoine et la margarine végétale fondue. Ne pas trop fouetter."
      - "Verser de petites louches de pâte dans la poêle."
      - "Retourner dès l’apparition des bulles."
      cavernes:
      - "Pâte végétale. Farine, sucre, levure chimique, lait d’avoine, margarine végétale fondue, mélanger. Pas trop fouetter."
      - "Poêle. Petites louches pâte, poêle, verser."
      - "Retourner. Bulles, apparition, retourner."
    kcal_per_serving: 380
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
    kcal_per_serving: 410
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

# Pancakes

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 250 g farine
- 2 piece œufs
- 300 ml lait
- 40 g sucre
- 30 g beurre
- 8 g levure chimique

## Préparation

1. Pâte. Mélangez la farine, le sucre, la levure chimique, les œufs, le lait et le beurre fondu. Ne fouettez pas trop.
2. Poêle. Versez de petites louches de pâte dans la poêle.
3. Retourner. Retournez dès l’apparition des bulles.
