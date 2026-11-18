---
schema: recette-web-jigme/v2
slug: popcorn
title: Popcorn
lang: fr
description: "Popcorn : recette américaine avec maïs et assaisonnement de votre choix, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: salé
tags:
- salé
- accompagnement
- végane
- rapide
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/popcorn.webp
  alt: Popcorn
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/popcorn.md
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
    note: Déjà sans lait.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
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
    note: Déjà sans céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans mollusques.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
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
    note: Déjà sans lupin.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
  sans_arachides:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - arachides
    swaps:
    - from: arachide
      to: huile de tournesol
      note:
    - from: cacahuète
      to: graines de tournesol
      note:
    note: Remplacer arachide.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Pop-corn : grain de maïs (Zea mays everta) qui s’ouvre sous la vapeur interne. / l’un des plus
  vieux encas des Amériques, des millénaires avant le micro-ondes. Ici, la casserole, pas le sachet.

  '
fun_facts:
- text: 'L’humidité du grain (vers 13–14 %) fait éclater ; trop sec, il brûle sans s’ouvrir.

    '
  source_name: Grokipedia, Popcorn
  source_url: https://grokipedia.com/page/Popcorn
- text: 'Une casserole avec un fond d’huile, couvercle, agitation : le micro-ondes n’est pas obligatoire.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Popcorn ».'
  source_name: Wikipédia
  source_url: https://fr.wikipedia.org/wiki/Popcorn
wines:
- name: Crémant de Bourgogne
  producer: Louis Bouillot
  origin: Nuits-Saint-Georges, Bourgogne
  grapes: pinot noir, chardonnay
  award:
  why: Bulles, pomme — le pop-corn salé, sans un champagne.
- name: Clairette de Die
  producer: Cave de Die Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — si le pop-corn est sucré.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — l’encas salé, sans un vin de garde.
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
    allergens: &id001
    - arachides
    difficulty: 2
    time: &id002
      prep_min: 10
      cook_min: 10
      rest_min: 0
      total_min: 20
    equipment: &id003
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: assaisonnement de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, versez généreusement de l’huile d’arachide.
    - Versez-y du maïs à popcorn. Mettez le couvercle et le feu très vif.
    - Finition. Dès que les premiers popcorn éclatent, baissez le feu. Sucrez ou salez vos popcorn quand
      ils sont encore chauds et mélangez-les.
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez généreusement de l’huile d’arachide."
      - "Versez-y du maïs à popcorn. Mettez le couvercle et le feu très vif."
      - "Finition. Dès que les premiers popcorn éclatent, baissez le feu. Sucrez ou salez vos popcorn quand ils sont encore chauds et mélangez-les."
      pro:
      - "Verser généreusement de l’huile d’arachide dans une casserole."
      - "Verser le maïs à popcorn. Couvrir. Feu très vif."
      - "Dès les premiers éclatements, baisser le feu. Sucrer ou saler encore chaud. Mélanger."
      cavernes:
      - "Cuisson. Casserole. Huile arachide, verser généreusement."
      - "Maïs popcorn, verser. Couvercle. Feu très vif."
      - "Finition. Premiers popcorn éclatent, baisser feu. Sucre ou sel, popcorn encore chauds, mélanger."
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - arachides
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
    - qty: 250
      unit: g
      item: maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: assaisonnement de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, versez généreusement de l’huile d’arachide.
    - Versez-y du maïs à popcorn. Mettez le couvercle et le feu très vif.
    - Finition. Dès que les premiers popcorn éclatent, baissez le feu. Sucrez ou salez vos popcorn quand
      ils sont encore chauds et mélangez-les.
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez généreusement de l’huile d’arachide."
      - "Versez-y du maïs à popcorn. Mettez le couvercle et le feu très vif."
      - "Finition. Dès que les premiers popcorn éclatent, baissez le feu. Sucrez ou salez vos popcorn quand ils sont encore chauds et mélangez-les."
      pro:
      - "Verser généreusement de l’huile d’arachide dans une casserole."
      - "Verser le maïs à popcorn. Couvrir. Feu très vif."
      - "Dès les premiers éclatements, baisser le feu. Sucrer ou saler encore chaud. Mélanger."
      cavernes:
      - "Cuisson. Casserole. Huile arachide, verser généreusement."
      - "Maïs popcorn, verser. Couvercle. Feu très vif."
      - "Finition. Premiers popcorn éclatent, baisser feu. Sucre ou sel, popcorn encore chauds, mélanger."
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Pas au frigo (ramollit)."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "24 h", note: "Perdent le croustillant."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Popcorn

![[popcorn.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/popcorn.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/popcorn]]

## Ingrédients (4 personnes)

- 250 g maïs
-  huile d'arachide
-  assaisonnement de votre choix

## Préparation

1. Dans une casserole, versez généreusement de l’huile d’arachide.
2. Versez-y du maïs à popcorn.

Mettez le couvercle et le feu très vif.
3. Dès que les premiers popcorn éclatent, baissez le feu.

 
 

 
 Sucrez ou salez vos popcorn quand ils sont encore chauds et mélangez-les.
