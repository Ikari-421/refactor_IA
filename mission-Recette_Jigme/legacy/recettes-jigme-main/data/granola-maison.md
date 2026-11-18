---
schema: recette-web-jigme/v2
equipment: []
slug: granola-maison
title: Granola maison
lang: fr
description: "Granola maison : recette de flocons d’avoine rôtis au four, miel, noix et huile, pour 4 personnes. Facile à suivre à la maison."
cuisine: américaine
category: sucré
tags:
- sucré
- petit-déjeuner
- avoine
- noix
image:
  url:
  alt: Granola maison
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
    - from: "flocons d'avoine"
      to: "flocons d'avoine sans gluten"
      note: Même poids.
    note: "Avoine : flocons certifiés sans gluten."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Ôter noix et amandes, plus de graines de courge."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le granola américain naît au XIXe siècle dans le sillage des céréales de petit-déjeuner (Kellogg, Jackson). Flocons, sucrant, matière grasse, four. Ici version maison : avoine, miel, noix, huile, fruits secs après cuisson."
fun_facts:
- text: "Granola et muesli se distinguent : le granola est rôti au four, le muesli souvent cru."
  source_name: "Wikipedia FR, Granola"
  source_url: "https://fr.wikipedia.org/wiki/Granola"
- text: Le sucrant caramélise et agglomère les flocons en grumeaux.
  source_name: "Wikipedia FR, Granola"
  source_url: "https://fr.wikipedia.org/wiki/Granola"
- text: "Les fruits secs se rajoutent hors du four, sinon ils brûlent."
  source_name: "Wikipedia EN, Granola"
  source_url: "https://en.wikipedia.org/wiki/Granola"
wines:
- name: "Crémant d'Alsace"
  producer: Dopff au Moulin
  origin: "Riquewihr, Alsace"
  grapes: "Pinot blanc, auxerrois"
  award: 
  why: "Bulles, petit-déjeuner sucré-salé, pas un vin de repas."
- name: "Muscat d'Alsace"
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Muscat
  award: 
  why: "Floral, miel et noix du granola."
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: "Layon, Loire"
  grapes: Chenin
  award: 
  why: "Moelleux léger, avoine caramélisée."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - fruits_a_coque
    difficulty: 1
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - plaque
    - four
    - saladbowl
    substitutions:
    - from: miel
      to: "sirop d'érable"
      note: Goût différent.
    scale_note: "Rendement bocal : environ 8 petits-déjeuners."
    ingredients:
    - qty: 300
      unit: g
      item: "flocons d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: miel
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: huile de tournesol
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: amandes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: noisettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: raisins secs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cannelle
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
    - "Mélange. Mélangez les flocons d’avoine, les amandes, les noisettes, la cannelle, le sel, le miel et l’huile de tournesol."
    - "Four. Étalez sur une plaque et enfournez 25 à 30 min à 160 °C, en remuant à mi-cuisson."
    - "Finition. Laissez refroidir, ajoutez les raisins secs, puis conservez en bocal."
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez les flocons d’avoine, les amandes, les noisettes, la cannelle, le sel, le miel et l’huile de tournesol."
      - "Four. Étalez sur une plaque et enfournez 25 à 30 min à 160 °C, en remuant à mi-cuisson."
      - "Finition. Laissez refroidir, ajoutez les raisins secs, puis conservez en bocal."
      pro:
      - "Mélanger flocons d’avoine, amandes, noisettes, cannelle, sel, miel et huile de tournesol."
      - "Étaler sur une plaque. Enfourner 25 à 30 min à 160 °C, remuer à mi-cuisson."
      - "Laisser refroidir. Ajouter les raisins secs. Conserver en bocal."
      cavernes:
      - "Mélange. Flocons d’avoine, amandes, noisettes, cannelle, sel, miel, huile de tournesol, mélanger."
      - "Four. Plaque, étaler. Four 25 à 30 min 160 °C, remuer mi-cuisson."
      - "Finition. Refroidir. Raisins secs, ajouter. Bocal, conserver."
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
    - gluten
    - fruits_a_coque
    difficulty: 1
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
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - fruits_a_coque
    difficulty: 1
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - plaque
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 300
      unit: g
      item: "flocons d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: "sirop d'érable"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: huile de tournesol
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: amandes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: noisettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: raisins secs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cannelle
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
    - "Mélange. Mélangez les flocons d’avoine, les amandes, les noisettes, la cannelle, le sel, le sirop d’érable et l’huile de tournesol."
    - "Four. Enfournez 25 à 30 min à 160 °C, en remuant."
    - "Finition. Hors du four, ajoutez les raisins secs, puis conservez en bocal."
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez les flocons d’avoine, les amandes, les noisettes, la cannelle, le sel, le sirop d’érable et l’huile de tournesol."
      - "Four. Enfournez 25 à 30 min à 160 °C, en remuant."
      - "Finition. Hors du four, ajoutez les raisins secs, puis conservez en bocal."
      pro:
      - "Mélanger flocons d’avoine, amandes, noisettes, cannelle, sel, sirop d’érable et huile de tournesol."
      - "Enfourner 25 à 30 min à 160 °C, remuer."
      - "Hors du four, ajouter les raisins secs. Conserver en bocal."
      cavernes:
      - "Mélange. Flocons d’avoine, amandes, noisettes, cannelle, sel, sirop d’érable, huile de tournesol, mélanger."
      - "Four. Four 25 à 30 min 160 °C, remuer."
      - "Finition. Hors four, raisins secs, ajouter. Bocal, conserver."
    kcal_per_serving: 400
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
    - fruits_a_coque
    difficulty: 1
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
  frigo: {duree: "", contenant: "", note: L’humidité ramollit.}
  congelation: {possible: true, duree: 2 mois, decongelation: à température ambiante, note: ""}
  temperature_ambiante: {duree: 3 semaines, note: Bocal bien sec.}
  rechauffage: Se mange tel quel.
  restes: []
  anti_gaspi:
  - "Yaourt, compote, crumble."
  a_verifier: false
  note_verif: ""

---

# Granola maison

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 300 g flocons d'avoine
- 80 g miel
- 60 ml huile de tournesol
- 80 g amandes
- 60 g noisettes
- 80 g raisins secs
- 1 cac cannelle
- 1 pincee sel

## Préparation

1. Mélange. Mélangez les flocons d’avoine, les amandes, les noisettes, la cannelle, le sel, le miel et l’huile de tournesol.
2. Four. Étalez sur une plaque et enfournez 25 à 30 min à 160 °C, en remuant à mi-cuisson.
3. Finition. Laissez refroidir, ajoutez les raisins secs, puis conservez en bocal.
