---
schema: recette-web-jigme/v2
equipment:
- ref: mandoline
slug: salade-de-chou-japonaise
title: Salade de chou japonaise
lang: fr
description: "Salade de chou type japonais, vinaigre, sésame, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: japonaise
category: salé
tags:
- salé
- chou
- Japon
- entrée
image:
  url:
  alt: Salade de chou japonaise
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_sulfites:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
house_toggle: 
house_options: []
histoire: "La salade de chou à la japonaise (coleslaw de tonkatsu, kyabetsu) : chou très fin, vinaigre de riz, soja ou mayo légère, sésame. Accompagne fritures. Mandoline. Servir de suite pour le croquant."
fun_facts:
- text: Le chou cru fin est l’accompagnement classique du tonkatsu.
  source_name: "Wikipedia EN, Japanese mayonnaise"
  source_url: "https://en.wikipedia.org/wiki/Japanese_mayonnaise"
- text: "Un chou blanc pommé, tranché papier, reste croquant."
  source_name: "Wikipedia FR, Chou cabus"
  source_url: "https://fr.wikipedia.org/wiki/Chou_cabus"
- text: Le vinaigre de riz est plus doux que le vinaigre de vin.
  source_name: "Wikipedia FR, Vinaigre de riz"
  source_url: "https://fr.wikipedia.org/wiki/Vinaigre_de_riz"
wines:
- name: Riesling Alsace
  producer: Trimbach
  origin: "Ribeauvillé, Alsace"
  grapes: Riesling
  award: 
  why: "Sec, coupe le gras et le sucré léger."
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et pierre, plat vif ou herbes."
- name: Picpoul de Pinet
  producer: Ormarine
  origin: "Thau, Languedoc"
  grapes: Piquepoul
  award: 
  why: "Citron, entrée froide, huile d’olive."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - soja
    - sesame
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 10
      rest_min: 0
      total_min: 20
    equipment:
    - mandoline
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: chou blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: vinaigre de riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: ml
      item: sauce soja
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sésame
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Chou. Émincez le chou blanc très finement à la mandoline."
    - "Sauce. Mélangez le vinaigre de riz, la sauce soja et le sucre."
    - "Sésame. Ajoutez le sésame et mélangez au dernier moment."
    steps_niveaux:
      amateur:
      - "Chou. Émincez le chou blanc très finement à la mandoline."
      - "Sauce. Mélangez le vinaigre de riz, la sauce soja et le sucre."
      - "Sésame. Ajoutez le sésame et mélangez au dernier moment."
      pro:
      - "Émincer le chou blanc très finement à la mandoline."
      - "Mélanger le vinaigre de riz, la sauce soja et le sucre."
      - "Ajouter le sésame et mélanger au dernier moment."
      cavernes:
      - "Chou. Chou blanc, émincer très fin, mandoline."
      - "Sauce. Vinaigre riz, sauce soja, sucre, mélanger."
      - "Sésame. Sésame, ajouter. Mélanger dernier moment."
    kcal_per_serving: 90
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
    - soja
    - sesame
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 90
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
    - soja
    - sesame
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 90
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
    - soja
    - sesame
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 90
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 à 48 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Texture cassée.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade de chou japonaise

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 500 g chou blanc
- 30 ml vinaigre de riz
- 15 ml sauce soja
- 10 g sésame
- 10 g sucre

## Préparation

1. Chou. Émincez le chou blanc très finement à la mandoline.
2. Sauce. Mélangez le vinaigre de riz, la sauce soja et le sucre.
3. Sésame. Ajoutez le sésame et mélangez au dernier moment.
