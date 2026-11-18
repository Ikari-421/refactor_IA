---
schema: recette-web-jigme/v2
equipment:
- ref: mixeur-plongeant
slug: gaspacho-tomate-pasteque
title: Gaspacho tomate pastèque
lang: fr
description: "Gaspacho tomate pastèque : recette andalouse froide avec tomates, pastèque et pain, pour 4 personnes. Facile à suivre à la maison."
cuisine: espagnole
category: salé
tags:
- salé
- soupe
- tomate
- été
- Andalousie
image:
  url:
  alt: Gaspacho tomate pastèque
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/gaspacho-tomate-pasteque.md
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
    - from: pain de campagne
      to: sans pain
      note: Plus de tomate et de concombre.
    note: "Pain de campagne : version sans pain (plus de tomate et concombre)."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Vinaigre de xérès parfois sulfité.
house_toggle: 
house_options: []
histoire: "Le gaspacho est une soupe froide d’Andalousie. Tomate, huile, vinaigre, pain. Avant la tomate, pain, ail, huile. La pastèque est une variante d’été, pas le canon de Séville, mais courante."
fun_facts:
- text: "Deux étymologies circulent : latin du chaudron, ou mot hispano-arabe."
  source_name: "Wikipedia FR, Gaspacho"
  source_url: "https://fr.wikipedia.org/wiki/Gaspacho"
- text: Sans tomate jusqu’à l’arrivée du fruit d’Amérique au XVIe siècle.
  source_name: "Wikipedia FR, Gaspacho"
  source_url: "https://fr.wikipedia.org/wiki/Gaspacho"
- text: Le 21 juillet est le jour du gazpacho à Séville ; une académie y a été fondée en 2017.
  source_name: Visita Sevilla
  source_url: "https://visitasevilla.es/fr/le-gazpacho-le-plat-vedette-de-lete-a-seville/"
wines:
- name: Manzanilla Solear
  producer: Bodegas Barbadillo
  origin: Sanlúcar de Barrameda
  grapes: Palomino
  award: 
  why: "Salin, amande, tient le vinaigre de xérès et l’huile."
- name: Getariako Txakolina
  producer: Ameztoi
  origin: "Getaria, Pays basque"
  grapes: Hondarrabi Zuri
  award: 
  why: "Perlant, citron, douceur de pastèque."
- name: Bandol Rosé
  producer: Domaine Tempier
  origin: "Bandol, Provence"
  grapes: Mourvèdre
  award: 
  why: Structure et agrumes sur tomate et huile d’olive.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 1
    time:
      prep_min: 20
      cook_min: 0
      rest_min: 120
      total_min: 140
    equipment:
    - blender
    - saladier
    - frigo
    substitutions:
    - from: vinaigre de xérès
      to: vinaigre de cidre
      note: Moins de notes oxydatives.
    scale_note: 
    ingredients:
    - qty: 1000
      unit: g
      item: tomates mûres
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: chair de pastèque
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: pastèque en dés
      group: service
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: pain de campagne
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: ml
      item: vinaigre de xérès
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: ml
      item: "huile d'olive vierge extra"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: botte
      item: basilic
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon nouveau
      group: 
      scale: true
      optional: true
      to_taste: false
    - qty: 150
      unit: g
      item: concombre
      group: 
      scale: true
      optional: true
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Découpe. Coupez les tomates en morceaux et la pastèque en cubes, puis émiettez le pain de campagne."
    - "Mixage. Mixez d’abord le pain avec le vinaigre de xérès et l’huile d’olive, puis ajoutez les tomates, la pastèque, le basilic, l’oignon nouveau et le concombre."
    - "Assaisonnement. Rectifiez le sel, le poivre et l’acidité. Passez au chinois si la peau gêne."
    - "Repos. Réservez au frais au moins 1 h, mieux 2 à 3 h."
    - "Service. Servez très froid, avec des dés de pastèque, du basilic et un filet d’huile d’olive."
    steps_niveaux:
      amateur:
      - "Découpe. Coupez les tomates en morceaux et la pastèque en cubes, puis émiettez le pain de campagne."
      - "Mixage. Mixez d’abord le pain avec le vinaigre de xérès et l’huile d’olive, puis ajoutez les tomates, la pastèque, le basilic, l’oignon nouveau et le concombre."
      - "Assaisonnement. Rectifiez le sel, le poivre et l’acidité. Passez au chinois si la peau gêne."
      - "Repos. Réservez au frais au moins 1 h, mieux 2 à 3 h."
      - "Service. Servez très froid, avec des dés de pastèque, du basilic et un filet d’huile d’olive."
      pro:
      - "Couper les tomates en morceaux et la pastèque en cubes. Émietter le pain de campagne."
      - "Mixer d’abord le pain avec le vinaigre de xérès et l’huile d’olive. Ajouter tomates, pastèque, basilic, oignon nouveau et concombre."
      - "Rectifier sel, poivre et acidité. Passer au chinois si la peau gêne."
      - "Réserver au frais au moins 1 h, mieux 2 à 3 h."
      - "Servir très froid, avec dés de pastèque, basilic et un filet d’huile d’olive."
      cavernes:
      - "Découpe. Tomates, morceaux. Pastèque, cubes. Pain de campagne, émietter."
      - "Mixage. Pain, vinaigre de xérès, huile d’olive, mixer d’abord. Tomates, pastèque, basilic, oignon nouveau, concombre, ajouter."
      - "Assaisonnement. Sel, poivre, acidité, rectifier. Chinois si peau gêne."
      - "Repos. Frais minimum 1 h, mieux 2 à 3 h."
      - "Service. Très froid. Dés pastèque, basilic, filet huile d’olive."
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 1
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 1
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 1
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Texture cassée.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gaspacho tomate pastèque

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 1000 g tomates mûres
- 500 g chair de pastèque
- 80 g pastèque en dés
- 150 g pain de campagne
- 45 ml vinaigre de xérès
- 45 ml huile d'olive vierge extra
- 1 botte basilic
- 1 piece oignon nouveau
- 150 g concombre
- sel (au goût)
- poivre (au goût)

## Préparation

1. Découpe. Coupez les tomates en morceaux et la pastèque en cubes, puis émiettez le pain de campagne.
2. Mixage. Mixez d’abord le pain avec le vinaigre de xérès et l’huile d’olive, puis ajoutez les tomates, la pastèque, le basilic, l’oignon nouveau et le concombre.
3. Assaisonnement. Rectifiez le sel, le poivre et l’acidité. Passez au chinois si la peau gêne.
4. Repos. Réservez au frais au moins 1 h, mieux 2 à 3 h.
5. Service. Servez très froid, avec des dés de pastèque, du basilic et un filet d’huile d’olive.
