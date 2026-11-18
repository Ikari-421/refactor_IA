---
schema: recette-web-jigme/v2
equipment: []
slug: salade-de-riz
title: Salade de riz
lang: fr
description: "Salade de riz froide, légumes, thon optionnel, pour 4. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- riz
- froid
- pique-nique
image:
  url:
  alt: Salade de riz
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "La salade de riz, classique de cantine et de pique-nique : riz, vinaigrette, légumes croquants, souvent thon et œuf. Riz refroidi vite. Maïs, poivron, olive. Servir froide."
fun_facts:
- text: Le riz long tient mieux en salade que le riz trop collant.
  source_name: "Wikipedia FR, Salade de riz"
  source_url: "https://fr.wikipedia.org/wiki/Salade_de_riz"
- text: "Refroidir le riz vite : ne pas le laisser des heures à température ambiante."
  source_name: "Wikipedia FR, Bacillus cereus"
  source_url: "https://fr.wikipedia.org/wiki/Bacillus_cereus"
- text: On assaisonne le riz encore un peu tiède.
  source_name: "Wikipedia EN, Rice salad"
  source_url: "https://en.wikipedia.org/wiki/Rice_salad"
wines:
- name: Tavel
  producer: Domaine Lafond Roc-Epine
  origin: "Tavel, Rhône"
  grapes: Grenache
  award: 
  why: "Rosé de table, pizza, tapenade."
- name: Picpoul de Pinet
  producer: Ormarine
  origin: "Thau, Languedoc"
  grapes: Piquepoul
  award: 
  why: "Citron, entrée froide, huile d’olive."
- name: Bandol Rosé
  producer: Domaine Tempier
  origin: "Bandol, Provence"
  grapes: Mourvèdre
  award: 
  why: "Structure, tomate, grillade d’été."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - oeuf
    - poisson
    - sulfites
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 300
      unit: g
      item: riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: thon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: poivron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: maïs
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
    - qty: 60
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: vinaigre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Riz. Faites cuire le riz, puis refroidissez-le rapidement."
    - "Garniture. Ajoutez le thon, les œufs, le poivron et le maïs."
    - "Vinaigrette. Liez avec l’huile d’olive et le vinaigre, puis réservez 1 h au frais."
    steps_niveaux:
      amateur:
      - "Riz. Faites cuire le riz, puis refroidissez-le rapidement."
      - "Garniture. Ajoutez le thon, les œufs, le poivron et le maïs."
      - "Vinaigrette. Liez avec l’huile d’olive et le vinaigre, puis réservez 1 h au frais."
      pro:
      - "Cuire le riz. Refroidir rapidement."
      - "Ajouter le thon, les œufs, le poivron et le maïs."
      - "Lier avec l’huile d’olive et le vinaigre. Réserver 1 h au frais."
      cavernes:
      - "Riz. Riz, cuire. Refroidir rapidement."
      - "Garniture. Thon, œufs, poivron, maïs, ajouter."
      - "Vinaigrette. Huile olive, vinaigre, lier. 1 h frais, réserver."
    kcal_per_serving: 420
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
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 25
      rest_min: 0
      total_min: 40
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 300
      unit: g
      item: riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: poivron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: maïs
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
    - qty: 80
      unit: g
      item: emmental
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Riz. Faites cuire le riz, puis refroidissez-le rapidement."
    - "Légumes, œufs, fromage. Ajoutez le poivron, le maïs, les œufs et l’emmental."
    - "Vinaigrette. Liez avec l’huile d’olive, puis réservez 1 h au frais."
    steps_niveaux:
      amateur:
      - "Riz. Faites cuire le riz, puis refroidissez-le rapidement."
      - "Légumes, œufs, fromage. Ajoutez le poivron, le maïs, les œufs et l’emmental."
      - "Vinaigrette. Liez avec l’huile d’olive, puis réservez 1 h au frais."
      pro:
      - "Cuire le riz. Refroidir rapidement."
      - "Ajouter le poivron, le maïs, les œufs et l’emmental."
      - "Lier avec l’huile d’olive. Réserver 1 h au frais."
      cavernes:
      - "Riz. Riz, cuire. Refroidir rapidement."
      - "Légumes, œufs, fromage. Poivron, maïs, œufs, emmental, ajouter."
      - "Vinaigrette. Huile olive, lier. 1 h frais, réserver."
    kcal_per_serving: 380
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
    - sulfites
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
    - qty: 300
      unit: g
      item: riz
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: poivron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: maïs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: pois chiches
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: vinaigre
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Riz. Faites cuire le riz, puis refroidissez-le rapidement."
    - "Légumes, pois chiches. Ajoutez le poivron, le maïs et les pois chiches."
    - "Vinaigrette. Liez avec l’huile d’olive et le vinaigre, puis réservez 1 h au frais."
    steps_niveaux:
      amateur:
      - "Riz. Faites cuire le riz, puis refroidissez-le rapidement."
      - "Légumes, pois chiches. Ajoutez le poivron, le maïs et les pois chiches."
      - "Vinaigrette. Liez avec l’huile d’olive et le vinaigre, puis réservez 1 h au frais."
      pro:
      - "Cuire le riz. Refroidir rapidement."
      - "Ajouter le poivron, le maïs et les pois chiches."
      - "Lier avec l’huile d’olive et le vinaigre. Réserver 1 h au frais."
      cavernes:
      - "Riz. Riz, cuire. Refroidir rapidement."
      - "Légumes, pois chiches. Poivron, maïs, pois chiches, ajouter."
      - "Vinaigrette. Huile olive, vinaigre, lier. 1 h frais, réserver."
    kcal_per_serving: 340
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
    - poisson
    - sulfites
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
  frigo: {duree: 24 h, contenant: boîte hermétique, note: Refroidir rapidement.}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Riz cuit : refroidir vite, 24 h au frigo."

---

# Salade de riz

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 300 g riz
- 200 g thon
- 150 g poivron
- 100 g maïs
- 2 piece œufs
- 60 ml huile d'olive
- 20 ml vinaigre

## Préparation

1. Riz. Faites cuire le riz, puis refroidissez-le rapidement.
2. Garniture. Ajoutez le thon, les œufs, le poivron et le maïs.
3. Vinaigrette. Liez avec l’huile d’olive et le vinaigre, puis réservez 1 h au frais.
