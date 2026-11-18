---
schema: recette-web-jigme/v2
slug: moules-mascarpone-et-curry
title: Moules mascarpone et curry
lang: fr
description: "Moules mascarpone et curry : recette française avec moules fraiches, mascarpone et botte de céleri branche, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- curry
- fruits de mer
- moules fraiches
image:
  url:
  alt: Moules mascarpone et curry
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/moules-mascarpone-et-curry.md
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
    - from: mascarpone
      to: fromage frais sans lactose
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: mascarpone végétal (cajou)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : mascarpone végétal (cajou) → graines de tournesol.'
  sans_celeri:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - celeri
    swaps:
    - from: céleri
      to: fenouil ou carotte
      note: Allergie céleri.
    note: Omettre le céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - mollusques
    swaps: []
    note: 'Contient mollusques (moules fraiches) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: verre de pinot blanc
      to: bouillon de légumes
      note:
    note: 'Sulfites : verre de pinot blanc → bouillon de légumes.'
house_toggle:
house_options: []
histoire: 'Moules au vin blanc, ici mascarpone et curry à la place du seul persil des marinières. Les
  marinières sont le fond (vin, échalote, beurre). Le mascarpone est une crème acide lombarde ; le curry,
  un mélange d’épices d’Asie du Sud. Assiette contemporaine, pas un plat de bouchot.

  '
fun_facts:
- text: 'Le mascarpone lie la sauce sans farine : trop réduit, elle casse ; on l’ajoute hors du feu.

    '
  source_name: Usage
  source_url: null
- text: 'Un curry doux (mélange « Madras » léger) suffit : trop de piment, et on ne goûte plus la moule.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Moules mascarpone et curry ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Moules-frites
wines:
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — le curry et le mascarpone, sans un riesling trop sec.
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — la moule et l’épice, acidité nette.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — le curry doux, sans un rouge tannique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - celeri
    - mollusques
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 20
      rest_min: 0
      total_min: 60
    equipment: &id002
    - casserole
    - moule / plat
    - passoire
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2000
      unit: g
      item: moules fraiches
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte de céleri branche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: verre de pinot blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: branches de thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: curry en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Dressage. Hachez les échalotes, l’ail et le céleri branche. Conservez les feuilles du céleri, ajoutez-les aux branches de thym et aux feuilles de laurier, puis ficelez le tout pour obtenir un bouquet garni."
    - "Cuisson. Préparez les moules en ôtant les filaments qui en dépassent avec les doigts, ou avec la lame d’un couteau. Mettez-les dans une passoire, rincez-les sous l’eau froide et ne les laissez pas tremper, pour qu’elles ne perdent pas leur goût salé."
    - "Cuisson. Dans une grande casserole, faites revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de beurre."
    - "Cuisson. Lorsque les échalotes commencent à dorer légèrement, déglacez avec un verre de pinot blanc (ou un vin blanc de votre choix). Laissez cuire quelques minutes à feu doux avant d’ajouter les moules, puis couvrez pendant environ 10 min. Elles sont cuites lorsqu’elles sont toutes ouvertes."
    - "Finition. En fin de cuisson, ajoutez le mascarpone et le curry. Mélangez bien, puis laissez encore cuire à feu doux, à couvert, pendant quelques minutes. Au moment de servir, parsemez de persil haché dans chaque assiette et dégustez avec un petit verre de vin blanc."
    steps_niveaux:
      amateur:
      - "Dressage. Hachez les échalotes, l’ail et le céleri branche. Conservez les feuilles du céleri, ajoutez-les aux branches de thym et aux feuilles de laurier, puis ficelez le tout pour obtenir un bouquet garni."
      - "Cuisson. Préparez les moules en ôtant les filaments qui en dépassent avec les doigts, ou avec la lame d’un couteau. Mettez-les dans une passoire, rincez-les sous l’eau froide et ne les laissez pas tremper, pour qu’elles ne perdent pas leur goût salé."
      - "Cuisson. Dans une grande casserole, faites revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de beurre."
      - "Cuisson. Lorsque les échalotes commencent à dorer légèrement, [[deglacer|déglacez]] avec un verre de pinot blanc (ou un vin blanc de votre choix). Laissez cuire quelques minutes à feu doux avant d’ajouter les moules, puis couvrez pendant environ 10 min. Elles sont cuites lorsqu’elles sont toutes ouvertes."
      - "Finition. En fin de cuisson, ajoutez le mascarpone et le curry. Mélangez bien, puis laissez encore cuire à feu doux, à couvert, pendant quelques minutes. Au moment de servir, parsemez de persil haché dans chaque assiette et dégustez avec un petit verre de vin blanc."
      pro:
      - "Hacher les échalotes, l’ail et le céleri branche. Conserver les feuilles du céleri. Les ajouter aux branches de thym et aux feuilles de laurier. Ficeler le tout pour un bouquet garni."
      - "Ôter les filaments des moules avec les doigts ou la lame d’un couteau. Mettre dans une passoire. Rincer sous l’eau froide. Ne pas laisser tremper, pour qu’elles ne perdent pas leur goût salé."
      - "Dans une grande casserole, faire revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de beurre."
      - "Lorsque les échalotes commencent à dorer légèrement, déglacer avec un verre de pinot blanc (ou un vin blanc au choix). Laisser cuire quelques minutes à feu doux. Ajouter les moules. Couvrir pendant environ 10 min. Cuites lorsqu’elles sont toutes ouvertes."
      - "En fin de cuisson, ajouter le mascarpone et le curry. Mélanger. Laisser encore cuire à feu doux, à couvert, pendant quelques minutes. Au service, parsemer de persil haché dans chaque assiette. Déguster avec un petit verre de vin blanc."
      cavernes:
      - "Dressage. Échalotes, ail, céleri branche, hacher. Feuilles céleri, conserver. Ajouter à branches thym, feuilles laurier. Ficeler, bouquet garni."
      - "Cuisson. Moules, filaments qui dépassent, ôter doigts ou lame couteau. Passoire, rincer eau froide. Pas tremper. Goût salé, garder."
      - "Cuisson. Grande casserole. Échalotes, ail, céleri branche, bouquet garni, noisette beurre, faire revenir quelques minutes."
      - "Cuisson. Échalotes commencent dorer légèrement. Verre pinot blanc (ou vin blanc choix), déglacer. Feu doux, cuire quelques minutes. Moules, ajouter. Couvrir environ 10 min. Toutes ouvertes, cuit."
      - "Finition. Fin cuisson. Mascarpone, curry, ajouter. Mélanger. Feu doux, à couvert, encore quelques minutes. Servir. Persil haché, parsemer chaque assiette. Petit verre vin blanc, déguster."
    kcal_per_serving: 301
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit: vegan
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - fruits_a_coque
    - celeri
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 301
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegan
    - pesco
    allergens:
    - fruits_a_coque
    - celeri
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2000
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: mascarpone végétal (cajou)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte de céleri branche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: verre de pinot blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: branches de thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: curry en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Dressage. Hachez les échalotes, l’ail et le céleri branche. Conservez les feuilles du céleri, ajoutez-les aux branches de thym et aux feuilles de laurier, puis ficelez le tout pour obtenir un bouquet garni."
    - "Cuisson. Nettoyez les champignons, coupez les pieds terreux, puis rincez-les rapidement."
    - "Cuisson. Dans une grande casserole, faites revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de margarine végétale."
    - "Cuisson. Lorsque les échalotes commencent à dorer légèrement, déglacez avec un verre de pinot blanc (ou un vin blanc de votre choix). Laissez cuire quelques minutes à feu doux avant d’ajouter les champignons, puis couvrez 8 à 10 min, jusqu’à ce qu’ils soient tendres."
    - "Finition. En fin de cuisson, ajoutez le mascarpone végétal (cajou) et le curry. Mélangez bien, puis laissez encore cuire à feu doux, à couvert, pendant quelques minutes. Au moment de servir, parsemez de persil haché dans chaque assiette et dégustez avec un petit verre de vin blanc."
    steps_niveaux:
      amateur:
      - "Dressage. Hachez les échalotes, l’ail et le céleri branche. Conservez les feuilles du céleri, ajoutez-les aux branches de thym et aux feuilles de laurier, puis ficelez le tout pour obtenir un bouquet garni."
      - "Cuisson. Nettoyez les champignons, coupez les pieds terreux, puis rincez-les rapidement."
      - "Cuisson. Dans une grande casserole, faites revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de margarine végétale."
      - "Cuisson. Lorsque les échalotes commencent à dorer légèrement, [[deglacer|déglacez]] avec un verre de pinot blanc (ou un vin blanc de votre choix). Laissez cuire quelques minutes à feu doux avant d’ajouter les champignons, puis couvrez 8 à 10 min, jusqu’à ce qu’ils soient tendres."
      - "Finition. En fin de cuisson, ajoutez le mascarpone végétal (cajou) et le curry. Mélangez bien, puis laissez encore cuire à feu doux, à couvert, pendant quelques minutes. Au moment de servir, parsemez de persil haché dans chaque assiette et dégustez avec un petit verre de vin blanc."
      pro:
      - "Hacher les échalotes, l’ail et le céleri branche. Conserver les feuilles du céleri. Les ajouter aux branches de thym et aux feuilles de laurier. Ficeler le tout pour un bouquet garni."
      - "Nettoyer les champignons. Couper les pieds terreux. Rincer rapidement."
      - "Dans une grande casserole, faire revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de margarine végétale."
      - "Lorsque les échalotes commencent à dorer légèrement, déglacer avec un verre de pinot blanc (ou un vin blanc au choix). Laisser cuire quelques minutes à feu doux. Ajouter les champignons. Couvrir 8 à 10 min, jusqu’à ce qu’ils soient tendres."
      - "En fin de cuisson, ajouter le mascarpone végétal (cajou) et le curry. Mélanger. Laisser encore cuire à feu doux, à couvert, pendant quelques minutes. Au service, parsemer de persil haché dans chaque assiette. Déguster avec un petit verre de vin blanc."
      cavernes:
      - "Dressage. Échalotes, ail, céleri branche, hacher. Feuilles céleri, conserver. Ajouter à branches thym, feuilles laurier. Ficeler, bouquet garni."
      - "Cuisson. Champignons, nettoyer. Pieds terreux, couper. Rincer rapidement."
      - "Cuisson. Grande casserole. Échalotes, ail, céleri branche, bouquet garni, noisette margarine végétale, faire revenir quelques minutes."
      - "Cuisson. Échalotes commencent dorer légèrement. Verre pinot blanc (ou vin blanc choix), déglacer. Feu doux, cuire quelques minutes. Champignons, ajouter. Couvrir 8 à 10 min. Tendres, cuit."
      - "Finition. Fin cuisson. Mascarpone végétal (cajou), curry, ajouter. Mélanger. Feu doux, à couvert, encore quelques minutes. Servir. Persil haché, parsemer chaque assiette. Petit verre vin blanc, déguster."
    kcal_per_serving: 301
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - celeri
    - mollusques
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 301
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegan:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; crème"

---

# Moules mascarpone et curry
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/moules-mascarpone-et-curry]]

## Ingrédients (4 personnes)

- 2 kg de moules fraiches
- 125 g de mascarpone
- 1 botte de céleri branche
- 2 échalote
- 2 gousse d'ail
- 1 verre de pinot blanc
-  branches de thym
-  feuilles de laurier
-  curry en poudre
-  persil frais

## Préparation

1. Dressage. Hachez les échalotes, l’ail et le céleri branche. Conservez les feuilles du céleri, ajoutez-les aux branches de thym et aux feuilles de laurier, puis ficelez le tout pour obtenir un bouquet garni.
2. Cuisson. Préparez les moules en ôtant les filaments qui en dépassent avec les doigts, ou avec la lame d’un couteau. Mettez-les dans une passoire, rincez-les sous l’eau froide et ne les laissez pas tremper, pour qu’elles ne perdent pas leur goût salé.
3. Cuisson. Dans une grande casserole, faites revenir quelques minutes les échalotes, l’ail, le céleri branche et le bouquet garni dans une noisette de beurre.
4. Cuisson. Lorsque les échalotes commencent à dorer légèrement, déglacez avec un verre de pinot blanc (ou un vin blanc de votre choix). Laissez cuire quelques minutes à feu doux avant d’ajouter les moules, puis couvrez pendant environ 10 min. Elles sont cuites lorsqu’elles sont toutes ouvertes.
5. Finition. En fin de cuisson, ajoutez le mascarpone et le curry. Mélangez bien, puis laissez encore cuire à feu doux, à couvert, pendant quelques minutes. Au moment de servir, parsemez de persil haché dans chaque assiette et dégustez avec un petit verre de vin blanc.

 
 

 
 Au moment de servir, ajoutez du persil haché dans chaque assiette, puis dégustez vos moules mascarpone et curry avec un petit verre de vin blanc. Bon appétit !
