---
schema: recette-web-jigme/v2
equipment: []
slug: soupe-a-loignon
title: "Soupe à l'oignon"
lang: fr
description: "Soupe à l'oignon gratinée, pain, fromage, pour 4. Recette maison pour 4. Facile........................................."
cuisine: française
category: salé
tags:
- salé
- soupe
- oignon
- gratin
image:
  url:
  alt: "Soupe à l'oignon"
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
house_toggle: 
house_options: []
histoire: "La soupe à l’oignon, plat de Halles et de brasserie : oignons longtemps blondis, bouillon, vin ou cognac parfois, tartines, fromage gratiné. Le secret est le temps de coloration, pas le fromage seul."
fun_facts:
- text: Les oignons doivent sucrer au fond de casserole avant le bouillon.
  source_name: "Wikipedia FR, Soupe à l'oignon"
  source_url: "https://fr.wikipedia.org/wiki/Soupe_%C3%A0_l%27oignon"
- text: Le gratin (pain + fromage) est la version « soupe à l’oignon gratinée ».
  source_name: "Wikipedia EN, French onion soup"
  source_url: "https://en.wikipedia.org/wiki/French_onion_soup"
- text: "Des oignons jaunes, pas trop nouveaux, caramélisent mieux."
  source_name: "Wikipedia FR, Oignon"
  source_url: "https://fr.wikipedia.org/wiki/Oignon"
wines:
- name: Brouilly
  producer: Château Thivin
  origin: "Côte de Brouilly, Beaujolais"
  grapes: Gamay
  award: 
  why: "Fruit, charcuterie, cake salé."
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, tomate, viande, mijoté."
- name: "Pinot Noir d'Alsace"
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Pinot noir
  award: 
  why: "Fruit rouge, viande blanche, champignon."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de bœuf
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranches de pain
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: gruyère
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
    steps:
    - "Oignons. Faites blondir les oignons 25 min à feu moyen."
    - "Bouillon. Déglacez au vin blanc, versez le bouillon de bœuf et laissez mijoter 15 min."
    - "Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril."
    steps_niveaux:
      amateur:
      - "Oignons. Faites blondir les oignons 25 min à feu moyen."
      - "Bouillon. [[deglacer|Déglacez]] au vin blanc, versez le bouillon de bœuf et [[mijoter|laissez mijoter]] 15 min."
      - "Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril."
      pro:
      - "Blondir les oignons 25 min à feu moyen."
      - "Déglacer au vin blanc, verser le bouillon de bœuf et laisser mijoter 15 min."
      - "Répartir les tranches de pain et le gruyère, puis passer 8 min sous le gril."
      cavernes:
      - "Oignons. Oignons, blondir 25 min, feu moyen."
      - "Bouillon. Vin blanc, déglacer. Bouillon bœuf, verser. Mijoter 15 min."
      - "Gratin. Tranches pain, gruyère, répartir. Gril, 8 min."
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
    - lactose
    - produits_laitiers
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranches de pain
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: gruyère
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
    steps:
    - "Oignons. Faites blondir les oignons 25 min à feu moyen."
    - "Bouillon végétal. Déglacez au vin blanc, versez le bouillon de légumes et laissez mijoter 15 min."
    - "Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril."
    steps_niveaux:
      amateur:
      - "Oignons. Faites blondir les oignons 25 min à feu moyen."
      - "Bouillon végétal. [[deglacer|Déglacez]] au vin blanc, versez le bouillon de légumes et [[mijoter|laissez mijoter]] 15 min."
      - "Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril."
      pro:
      - "Blondir les oignons 25 min à feu moyen."
      - "Déglacer au vin blanc, verser le bouillon de légumes et laisser mijoter 15 min."
      - "Répartir les tranches de pain et le gruyère, puis passer 8 min sous le gril."
      cavernes:
      - "Oignons. Oignons, blondir 25 min, feu moyen."
      - "Bouillon végétal. Vin blanc, déglacer. Bouillon légumes, verser. Mijoter 15 min."
      - "Gratin. Tranches pain, gruyère, répartir. Gril, 8 min."
    kcal_per_serving: 400
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
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranches de pain
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: fromage végétal
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Oignons. Faites blondir les oignons 25 min à feu moyen."
    - "Bouillon. Déglacez au vin blanc, versez le bouillon de légumes et laissez mijoter 15 min."
    - "Pain, fromage végétal, grill. Répartissez les tranches de pain et le fromage végétal, puis passez 8 min sous le gril."
    steps_niveaux:
      amateur:
      - "Oignons. Faites blondir les oignons 25 min à feu moyen."
      - "Bouillon. [[deglacer|Déglacez]] au vin blanc, versez le bouillon de légumes et [[mijoter|laissez mijoter]] 15 min."
      - "Pain, fromage végétal, grill. Répartissez les tranches de pain et le fromage végétal, puis passez 8 min sous le gril."
      pro:
      - "Blondir les oignons 25 min à feu moyen."
      - "Déglacer au vin blanc, verser le bouillon de légumes et laisser mijoter 15 min."
      - "Répartir les tranches de pain et le fromage végétal, puis passer 8 min sous le gril."
      cavernes:
      - "Oignons. Oignons, blondir 25 min, feu moyen."
      - "Bouillon. Vin blanc, déglacer. Bouillon légumes, verser. Mijoter 15 min."
      - "Pain, fromage végétal, grill. Tranches pain, fromage végétal, répartir. Gril, 8 min."
    kcal_per_serving: 360
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment: []
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fumet de poisson
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: vin blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranches de pain
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: gruyère
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
    steps:
    - "Oignons. Faites blondir les oignons."
    - "Fumet, vin. Versez le fumet de poisson et le vin blanc, puis laissez mijoter 15 min."
    - "Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril."
    steps_niveaux:
      amateur:
      - "Oignons. Faites blondir les oignons."
      - "Fumet, vin. Versez le fumet de poisson et le vin blanc, puis [[mijoter|laissez mijoter]] 15 min."
      - "Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril."
      pro:
      - "Blondir les oignons."
      - "Verser le fumet de poisson et le vin blanc, puis laisser mijoter 15 min."
      - "Répartir les tranches de pain et le gruyère, puis passer 8 min sous le gril."
      cavernes:
      - "Oignons. Oignons, blondir."
      - "Fumet, vin. Fumet poisson, vin blanc, verser. Mijoter 15 min."
      - "Gratin. Tranches pain, gruyère, répartir. Gril, 8 min."
    kcal_per_serving: 400
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Soupe à l'oignon

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 800 g oignons
- 1000 ml bouillon de bœuf
- 80 ml vin blanc
- 8 piece tranches de pain
- 120 g gruyère
- 30 g beurre

## Préparation

1. Oignons. Faites blondir les oignons 25 min à feu moyen.
2. Bouillon. Déglacez au vin blanc, versez le bouillon de bœuf et laissez mijoter 15 min.
3. Gratin. Répartissez les tranches de pain et le gruyère, puis passez 8 min sous le gril.
