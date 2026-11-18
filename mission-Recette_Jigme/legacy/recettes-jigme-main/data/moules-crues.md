---
schema: recette-web-jigme/v2
equipment: []
slug: moules-crues
title: Moules crues
lang: fr
description: "Moules crues à la vinaigrette, pour 4. Recette risquée, fraîcheur stricte. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: française
category: salé
tags:
- salé
- moules
- cru
- entrée
image:
  url:
  alt: Moules crues
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Manger la moule crue existe (quelques bords de mer, vinaigrette) mais le risque sanitaire est réel (norovirus, phycotoxines). Uniquement des moules vivantes du jour, mer propre, jamais d’élevage douteux. On ouvre au couteau, vinaigrette citron-échalote. En cas de doute, cuire (marinières)."
fun_facts:
- text: "La moule filtre l’eau : elle concentre aussi les contaminants. La cuisson reste plus sûre."
  source_name: "Wikipedia FR, Moule"
  source_url: "https://fr.wikipedia.org/wiki/Moule_(mollusque)"
- text: La version cuite évite la plupart des risques du cru.
  source_name: "Wikipedia FR, Moules marinières"
  source_url: "https://fr.wikipedia.org/wiki/Moules_marini%C3%A8res"
- text: L’Anses rappelle les règles d’achat et de fraîcheur des coquillages vivants.
  source_name: "Anses, Coquillages"
  source_url: "https://www.anses.fr/fr/content/les-coquillages"
wines:
- name: Muscadet Sèvre-et-Maine
  producer: "Domaine de l'Ecu"
  origin: "Muscadet, Loire"
  grapes: Melon de Bourgogne
  award: 
  why: "Iode, fruits de mer, friture légère."
- name: Picpoul de Pinet
  producer: Ormarine
  origin: "Thau, Languedoc"
  grapes: Piquepoul
  award: 
  why: "Citron, entrée froide, huile d’olive."
- name: Sancerre
  producer: Domaine Vacheron
  origin: "Sancerre, Loire"
  grapes: Sauvignon blanc
  award: 
  why: "Agrumes et pierre, plat vif ou herbes."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - mollusques
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
    - qty: 1500
      unit: g
      item: moules vivantes extra-fraîches
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: échalote
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: persil
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Tri. Ne retenez que les moules vivantes extra-fraîches et maintenez la chaîne du froid."
    - "Ouvrir. Ouvrez-les au couteau et jetez toute moule douteuse."
    - "Vinaigrette. Assaisonnez d’huile d’olive, de jus de citron, d’échalote et de persil, puis servez aussitôt."
    steps_niveaux:
      amateur:
      - "Tri. Ne retenez que les moules vivantes extra-fraîches et maintenez la chaîne du froid."
      - "Ouvrir. Ouvrez-les au couteau et jetez toute moule douteuse."
      - "Vinaigrette. Assaisonnez d’huile d’olive, de jus de citron, d’échalote et de persil, puis servez aussitôt."
      pro:
      - "Ne retenir que les moules vivantes extra-fraîches. Maintenir la chaîne du froid."
      - "Ouvrir au couteau. Jeter toute moule douteuse."
      - "Assaisonner d’huile d’olive, de jus de citron, d’échalote et de persil. Servir aussitôt."
      cavernes:
      - "Tri. Moules vivantes extra-fraîches, retenir. Chaîne froid, maintenir."
      - "Ouvrir. Couteau, ouvrir. Moule douteuse, jeter."
      - "Vinaigrette. Huile olive, jus citron, échalote, persil, assaisonner. Servir aussitôt."
    kcal_per_serving: 180
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens: []
    difficulty: 2
    time:
      prep_min: 10
      cook_min: 10
      rest_min: 0
      total_min: 20
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: champignons de Paris
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: échalote
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Champignons. Coupez les champignons de Paris en lames très fines."
    - "Vinaigrette. Assaisonnez d’huile d’olive, de jus de citron et d’échalote, puis servez aussitôt."
    - "Servir de suite. Mélangez l’huile d’olive, le jus de citron et l’échalote, puis servez aussitôt."
    steps_niveaux:
      amateur:
      - "Champignons. Coupez les champignons de Paris en lames très fines."
      - "Vinaigrette. Assaisonnez d’huile d’olive, de jus de citron et d’échalote, puis servez aussitôt."
      - "Servir de suite. Mélangez l’huile d’olive, le jus de citron et l’échalote, puis servez aussitôt."
      pro:
      - "Couper les champignons de Paris en lames très fines."
      - "Assaisonner d’huile d’olive, de jus de citron et d’échalote. Servir aussitôt."
      - "Mélanger l’huile d’olive, le jus de citron et l’échalote. Servir aussitôt."
      cavernes:
      - "Champignons. Champignons de Paris, couper lames très fines."
      - "Vinaigrette. Huile olive, jus citron, échalote, assaisonner. Servir aussitôt."
      - "Servir de suite. Huile olive, jus citron, échalote, mélanger. Servir aussitôt."
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
    allergens: []
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
    - mollusques
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 180
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Ne pas congeler un tartare ou des moules crues.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Moules crues : 24 h max, chaîne du froid, origine sûre. Ne pas congeler."

---

# Moules crues

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 1500 g moules vivantes extra-fraîches
- 40 ml huile d'olive
- 20 ml jus de citron
- 40 g échalote
- 10 g persil

## Préparation

1. Tri. Ne retenez que les moules vivantes extra-fraîches et maintenez la chaîne du froid.
2. Ouvrir. Ouvrez-les au couteau et jetez toute moule douteuse.
3. Vinaigrette. Assaisonnez d’huile d’olive, de jus de citron, d’échalote et de persil, puis servez aussitôt.
