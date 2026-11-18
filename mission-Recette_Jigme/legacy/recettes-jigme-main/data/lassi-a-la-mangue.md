---
schema: recette-web-jigme/v2
slug: lassi-a-la-mangue
title: Lassi à la mangue
lang: fr
description: "Lassi à la mangue : recette indienne avec mangue mûre, sucre et yaourt nature, pour 4 personnes. Version maison. Facile à suivre."
cuisine: indienne
category: sucré
tags:
- sucré
- dessert
- boisson
- mangue
- végétarien
image:
  url:
  alt: Lassi à la mangue
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/lassi-a-la-mangue.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    - from: yaourt nature
      to: yaourt sans lactose
      note:
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Allergie lait : pas de substitut honnête listé.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: yaourt de soja nature
      to: yaourt de coco
      note:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : yaourt de soja nature → yaourt de coco ; lait d''avoine ou soja → lait d''avoine.'
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
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
histoire: 'Lassi : boisson indienne au yaourt, plus ou moins salée ou sucrée. Le lassi à la mangue mélange
  pulpe de mangue, yaourt et sucre. Surtout au Pendjab et dans le nord de l’Inde, boisson d’été. Le mot
  anglais lassi est emprunté à l’hindi, attesté en 1882 ; l’étymologie plus ancienne n’est pas tranchée.

  '
fun_facts:
- text: >
    On cite souvent la mangue Alphonso pour le parfum ; n’importe quelle mangue
    mûre convient, plus elle est fibreuse plus on passe au chinois.
  source_name: Grokipedia, Lassi
  source_url: https://grokipedia.com/page/Lassi
- text: >
    Un lassi salé (cumin, sel) existe à côté du sucré ; ce n’est pas la même boisson.
  source_name: Wikipedia, Lassi
  source_url: https://en.wikipedia.org/wiki/Lassi
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "Boisson au yaourt et à la mangue : le vin n’a pas sa place."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 10
      cook_min: 0
      rest_min: 0
      total_min: 10
    equipment: &id002
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: mangue mûre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: yaourt nature
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: graine de cardamome verte
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mixage. Épluchez et coupez grossièrement la mangue. Dans un blender, versez la mangue, le yaourt
      nature, le sucre, le lait et les graines de cardamome (dont l’écorce aura préalablement
      été enlevée). Vous pouvez ajouter des glaçons pour pouvoir déguster votre lassi frais
      rapidement. Mixez et versez dans un verre et dégustez ! C’est aussi simple que ça !
      N’hésitez pas à varier les plaisirs en remplaçant la mangue par le fruit de votre choix
      !
    steps_niveaux:
      amateur:
      - "Mixage. Épluchez et coupez grossièrement la mangue. Dans un blender, versez la mangue, le yaourt nature, le sucre, le lait et les graines de cardamome (dont l’écorce aura préalablement été enlevée). Vous pouvez ajouter des glaçons pour déguster votre lassi frais rapidement. Mixez, versez dans un verre et dégustez. C’est aussi simple que ça. N’hésitez pas à remplacer la mangue par le fruit de votre choix."
      pro:
      - "Éplucher et couper grossièrement la mangue. Mixer au blender : mangue, yaourt nature, sucre, lait, graines de cardamome décortiquées. Glaçons possibles. Verser en verre. Servir. Fruit au choix possible."
      cavernes:
      - "Mixage. Mangue, éplucher, couper gros. Blender : mangue, yaourt nature, sucre, lait, graines cardamome, écorce dehors. Glaçons, option. Mixer. Verre, verser. Déguster. Autre fruit, possible."
    kcal_per_serving: 124
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
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 124
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: mangue mûre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: yaourt de soja nature
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: graine de cardamome verte
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mixage. Épluchez et coupez grossièrement la mangue. Dans un blender, versez la mangue, le yaourt
      de soja nature, le sucre, le lait d’avoine ou de soja et les graines de cardamome (dont l’écorce aura préalablement
      été enlevée). Vous pouvez ajouter des glaçons pour pouvoir déguster votre lassi frais
      rapidement. Mixez et versez dans un verre et dégustez ! C’est aussi simple que ça !
      N’hésitez pas à varier les plaisirs en remplaçant la mangue par le fruit de votre choix
      !
    steps_niveaux:
      amateur:
      - "Mixage. Épluchez et coupez grossièrement la mangue. Dans un blender, versez la mangue, le yaourt de soja nature, le sucre, le lait d’avoine ou de soja et les graines de cardamome (dont l’écorce aura préalablement été enlevée). Vous pouvez ajouter des glaçons pour déguster votre lassi frais rapidement. Mixez, versez dans un verre et dégustez. C’est aussi simple que ça. N’hésitez pas à remplacer la mangue par le fruit de votre choix."
      pro:
      - "Éplucher et couper grossièrement la mangue. Mixer au blender : mangue, yaourt de soja nature, sucre, lait d’avoine ou de soja, graines de cardamome décortiquées. Glaçons possibles. Verser en verre. Servir. Fruit au choix possible."
      cavernes:
      - "Mixage. Mangue, éplucher, couper gros. Blender : mangue, yaourt soja nature, sucre, lait avoine ou soja, graines cardamome, écorce dehors. Glaçons, option. Mixer. Verre, verser. Déguster. Autre fruit, possible."
    kcal_per_serving: 124
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
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 124
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Lassi à la mangue
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/lassi-a-la-mangue]]

## Ingrédients (4 personnes)

- 1 mangue mûre
- 50 g de sucre
- 250 g de yaourt nature
- 200 ml de lait entier
- 4 graine de cardamome verte

## Préparation

1. Épluchez et coupez grossièrement la mangue. Dans un blender, versez la mangue, le yaourt nature, le sucre, le lait et les graines de cardamome (dont l’écorce aura préalablement été enlevée). Vous pouvez ajouter des glaçons pour pouvoir déguster votre lassi frais rapidement. Mixez et versez dans un verre et dégustez !

 
 

 
 C’est aussi simple que ça ! N’hésitez pas à varier les plaisirs en remplaçant la mangue par le fruit de votre choix !
