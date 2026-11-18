---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: tarte-a-la-rhubarbe
title: Tarte à la rhubarbe
lang: fr
description: "Tarte à la rhubarbe : recette française de pâte, tiges acidulées et sucre, éventuellement crumble, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: sucré
tags:
- sucré
- rhubarbe
- tarte
- printemps
image:
  url:
  alt: Tarte à la rhubarbe
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
    note: Pâte sans gluten du commerce.
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
histoire: "La rhubarbe, tige acide, se sucre fort en tarte, souvent sur pâte brisée. Plat de printemps, du nord de la France à l’Angleterre. Les feuilles sont toxiques ; on ne cuit que les tiges."
fun_facts:
- text: "Seules les tiges se mangent ; les feuilles, riches en oxalates, sont toxiques."
  source_name: "Wikipedia FR, Rhubarbe"
  source_url: "https://fr.wikipedia.org/wiki/Rhubarbe"
- text: "Sucrer la rhubarbe à l’avance fait rendre l’eau, pâte moins détrempée."
  source_name: "Wikipedia FR, Tarte"
  source_url: "https://fr.wikipedia.org/wiki/Tarte"
- text: Un crumble sur la tarte retient un peu le jus.
  source_name: "Wikipedia EN, Rhubarb pie"
  source_url: "https://en.wikipedia.org/wiki/Rhubarb_pie"
wines:
- name: Vouvray demi-sec
  producer: Domaine Huet
  origin: "Vouvray, Loire"
  grapes: Chenin
  award: 
  why: "Sucre et acidité, tige de rhubarbe."
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: "Layon, Loire"
  grapes: Chenin
  award: 
  why: "Moelleux, dessert acidulé."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, tarte de printemps."
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
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 60
      total_min: 130
    equipment:
    - moule à tarte
    - four
    substitutions:
    - from: pâte brisée
      to: pâte sucrée
      note: Plus sucrée.
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: pâte brisée
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: rhubarbe
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
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: amandes en poudre
      group: 
      scale: true
      optional: true
      to_taste: false
    steps:
    - "Rhubarbe. Coupez les tiges en tronçons, mélangez-les avec 80 g de sucre et laissez 20 min."
    - "Fond. Foncez avec la pâte brisée, piquez, et parsemez de poudre d’amandes si vous en mettez."
    - "Montage. Répartissez la rhubarbe égouttée, le reste de sucre et des noisettes de beurre."
    - "Cuisson. Enfournez 35 min à 180 °C."
    steps_niveaux:
      amateur:
      - "Rhubarbe. Coupez les tiges en tronçons, mélangez-les avec 80 g de sucre et laissez 20 min."
      - "Fond. [[foncer|Foncez]] avec la pâte brisée, piquez, et parsemez de poudre d’amandes si vous en mettez."
      - "Montage. Répartissez la rhubarbe égouttée, le reste de sucre et des noisettes de beurre."
      - "Cuisson. Enfournez 35 min à 180 °C."
      pro:
      - "Couper les tiges en tronçons, mélanger avec 80 g de sucre et laisser 20 min."
      - "Foncer avec la pâte brisée, piquer, et parsemer de poudre d’amandes si on en met."
      - "Répartir la rhubarbe égouttée, le reste de sucre et des noisettes de beurre."
      - "Enfourner 35 min à 180 °C."
      cavernes:
      - "Rhubarbe. Tiges, tronçons, couper. 80 g sucre, mélanger. Laisser 20 min."
      - "Fond. Pâte brisée, foncer, piquer. Option : poudre amandes, parsemer."
      - "Montage. Rhubarbe égouttée, reste sucre, noisettes beurre, répartir."
      - "Cuisson. Four 180 °C, 35 min, enfourner."
    kcal_per_serving: 390
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
    - fruits_a_coque
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 390
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
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 60
      total_min: 130
    equipment:
    - moule à tarte
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: pâte brisée végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: rhubarbe
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
    - qty: 20
      unit: ml
      item: huile de coco
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: amandes en poudre
      group: 
      scale: true
      optional: true
      to_taste: false
    steps:
    - "Rhubarbe. Coupez les tiges en tronçons, mélangez-les avec 80 g de sucre et laissez 20 min."
    - "Fond. Foncez avec la pâte brisée végétale, et parsemez de poudre d’amandes si vous en mettez."
    - "Montage. Répartissez la rhubarbe, le sucre et l’huile de coco."
    - "Cuisson. Enfournez 35 min à 180 °C."
    steps_niveaux:
      amateur:
      - "Rhubarbe. Coupez les tiges en tronçons, mélangez-les avec 80 g de sucre et laissez 20 min."
      - "Fond. [[foncer|Foncez]] avec la pâte brisée végétale, et parsemez de poudre d’amandes si vous en mettez."
      - "Montage. Répartissez la rhubarbe, le sucre et l’huile de coco."
      - "Cuisson. Enfournez 35 min à 180 °C."
      pro:
      - "Couper les tiges en tronçons, mélanger avec 80 g de sucre et laisser 20 min."
      - "Foncer avec la pâte brisée végétale, et parsemer de poudre d’amandes si on en met."
      - "Répartir la rhubarbe, le sucre et l’huile de coco."
      - "Enfourner 35 min à 180 °C."
      cavernes:
      - "Rhubarbe. Tiges, tronçons, couper. 80 g sucre, mélanger. Laisser 20 min."
      - "Fond. Pâte brisée végétale, foncer. Option : poudre amandes, parsemer."
      - "Montage. Rhubarbe, sucre, huile coco, répartir."
      - "Cuisson. Four 180 °C, 35 min, enfourner."
    kcal_per_serving: 360
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
    - fruits_a_coque
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 390
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 2 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Tarte à la rhubarbe

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 250 g pâte brisée
- 600 g rhubarbe
- 120 g sucre
- 20 g beurre doux
- 20 g amandes en poudre

## Préparation

1. Rhubarbe. Coupez les tiges en tronçons, mélangez-les avec 80 g de sucre et laissez 20 min.
2. Fond. Foncez avec la pâte brisée, piquez, et parsemez de poudre d’amandes si vous en mettez.
3. Montage. Répartissez la rhubarbe égouttée, le reste de sucre et des noisettes de beurre.
4. Cuisson. Enfournez 35 min à 180 °C.
