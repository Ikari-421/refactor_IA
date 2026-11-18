---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: moules-froides
title: Moules froides
lang: fr
description: "Moules froides : recette française avec reste de moules, jaune d'oeuf et moutarde, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- fruits de mer
- rapide
- plat
image:
  url:
  alt: Moules froides
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/moules-froides.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - moutarde
    swaps:
    - from: moutarde
      to: horseradish ou omettre
      note: Allergie.
    note: Omettre ou vinaigrette sans moutarde.
  sans_mollusques:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - mollusques
    swaps: []
    note: 'Contient mollusques (reste de moules) : pas d’adaptation fiable.'
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
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja (liaison) ou amidon → crème d''avoine ; crème de soja ou avoine
      → crème d''avoine.'
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
histoire: 'Moules cuites puis servies froides (vinaigrette, mayonnaise, curry…). Le plat chaud de référence
  reste les moules marinières : moules au vin blanc, échalote, persil. La version froide est un reste
  ou un buffet, pas une recette d’auteur.

  '
fun_facts:
- text: >
    On jette les coquilles qui ne s’ouvrent pas à la cuisson ; une fois froides,
    on ne les réchauffe pas.
  source_name: Usage
  source_url:
- text: >
    Les moules de bouchot (élevage sur pieux) sont une spécialité de la Manche,
    souvent citées pour les marinières.
  source_name: Grokipedia, Bouchot
  source_url: https://grokipedia.com/page/bouchot
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — la moule, même froide, reste un plat de mer.
- name: Picpoul de Pinet
  producer: Cave de l'Ormarine
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — la vinaigrette, acidité nette.
- name: Entre-deux-Mers
  producer: Château Bonnet
  origin: Entre-deux-Mers, Bordeaux
  grapes: sauvignon, sémillon
  award:
  why: Blanc vif — les moules en sauce froide, sans un rouge.
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
    - oeuf
    - moutarde
    - mollusques
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 0
      rest_min: 0
      total_min: 15
    equipment: &id002
    - saladier
    - fouet
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty:
      unit:
      item: reste de moules
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: jaune d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curry en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: crème fraîche épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel, poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Pour chaque moule, retirez le côté de la coquille qui ne contient pas de chaire. Disposez
      le tout dans un plat.
    - Cuisson. Pour la sauce, commencez par réaliser une mayonnaise. Dans un récipient, versez un jaune
      d’oeuf, une cuillère de moutarde, du sel et du poivre. Montez la mayonnaise en mélangeant
      énergiquement à l’aide d’un fouet et en ajoutant de l’huile végétale au fur et à mesure.
      La mayonnaise est prête quand la texture est homogène et onctueuse.
    - Cuisson. Pour améliorer cette mayonnaise, versez-y le jus de vos moules de la veille, de la crème
      fraîche et du curry, puis mélangez.
    - Finition. Versez simplement ce mélange sur toutes vos moules, saupoudrez d’un peu de ciboulette
      hachée et le tour est joué ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Pour chaque moule, retirez le côté de la coquille qui ne contient pas de chaire. Disposez le tout dans un plat."
      - "Cuisson. Pour la sauce, commencez par réaliser une mayonnaise. Dans un récipient, versez un jaune d’oeuf, une cuillère de moutarde, du sel et du poivre. Montez la mayonnaise en mélangeant énergiquement à l’aide d’un fouet et en ajoutant de l’huile végétale au fur et à mesure. La mayonnaise est prête quand la texture est homogène et onctueuse."
      - "Cuisson. Pour améliorer cette mayonnaise, versez-y le jus de vos moules de la veille, de la crème fraîche et du curry, puis mélangez."
      - "Finition. Versez simplement ce mélange sur toutes vos moules, saupoudrez d’un peu de ciboulette hachée et le tour est joué ! Bon appétit !"
      pro:
      - "Pour chaque moule : retirer le côté de la coquille sans chair. Disposer dans un plat."
      - "Mayonnaise : verser un jaune d’oeuf, une cuillère de moutarde, sel et poivre. Monter au fouet en ajoutant l’huile végétale au fur et à mesure. Texture homogène et onctueuse."
      - "Verser le jus des moules de la veille, la crème fraîche et le curry. Mélanger."
      - "Verser le mélange sur les moules. Saupoudrer de ciboulette hachée."
      cavernes:
      - "Préparation. Chaque moule : côté coquille sans chair, retirer. Plat, disposer."
      - "Cuisson. Sauce. Mayonnaise. Récipient : jaune oeuf, cuillère moutarde, sel, poivre. Fouet, mélanger énergiquement. Huile végétale, ajouter fur et mesure. Texture homogène onctueuse : mayonnaise prête."
      - "Cuisson. Mayonnaise, améliorer. Jus moules veille, crème fraîche, curry, verser. Mélanger."
      - "Finition. Mélange, verser sur moules. Ciboulette hachée, saupoudrer. Bon appétit."
    kcal_per_serving: 300
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : ≈ 100 g de chair de moules + sauce (jaune, huile ≈ 1 c.à.s./pers.)
      ; quantités non précisées dans la fiche'
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit: vegan
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - moutarde
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 300
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : ≈ 100 g de chair de moules + sauce (jaune, huile ≈ 1 c.à.s./pers.)
      ; quantités non précisées dans la fiche'
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegan
    - pesco
    allergens:
    - moutarde
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty:
      unit:
      item: restes de champignons (pleurotes)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curry en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: ciboulette fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel, poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Disposez les champignons (restes de pleurotes ou champignons de Paris) dans un plat.
    - Mélange. Pour la sauce, commencez par réaliser une mayonnaise. Dans un récipient, versez un peu de crème de soja (liaison) ou d’amidon, une cuillère de moutarde, du sel et du poivre. Montez la mayonnaise en mélangeant
      énergiquement à l’aide d’un fouet et en ajoutant de l’huile végétale au fur et à mesure.
      La mayonnaise est prête quand la texture est homogène et onctueuse.
    - Mélange. Pour améliorer cette mayonnaise, versez-y un peu de jus de cuisson des champignons, de la crème de soja ou d’avoine et du curry, puis mélangez.
    - Finition. Versez simplement ce mélange sur les champignons, saupoudrez d’un peu de ciboulette
      hachée et le tour est joué ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Disposez les champignons (restes de pleurotes ou champignons de Paris) dans un plat."
      - "Mélange. Pour la sauce, commencez par réaliser une mayonnaise. Dans un récipient, versez un peu de crème de soja (liaison) ou d’amidon, une cuillère de moutarde, du sel et du poivre. Montez la mayonnaise en mélangeant énergiquement à l’aide d’un fouet et en ajoutant de l’huile végétale au fur et à mesure. La mayonnaise est prête quand la texture est homogène et onctueuse."
      - "Mélange. Pour améliorer cette mayonnaise, versez-y un peu de jus de cuisson des champignons, de la crème de soja ou d’avoine et du curry, puis mélangez."
      - "Finition. Versez simplement ce mélange sur les champignons, saupoudrez d’un peu de ciboulette hachée et le tour est joué ! Bon appétit !"
      pro:
      - "Disposer les champignons (restes de pleurotes ou champignons de Paris) dans un plat."
      - "Mayonnaise : verser un peu de crème de soja (liaison) ou d’amidon, une cuillère de moutarde, sel et poivre. Monter au fouet en ajoutant l’huile végétale au fur et à mesure. Texture homogène et onctueuse."
      - "Verser un peu de jus de cuisson des champignons, la crème de soja ou d’avoine et le curry. Mélanger."
      - "Verser le mélange sur les champignons. Saupoudrer de ciboulette hachée."
      cavernes:
      - "Préparation. Champignons, restes pleurotes ou champignons de Paris, plat, disposer."
      - "Mélange. Sauce. Mayonnaise. Récipient : crème soja liaison ou amidon, cuillère moutarde, sel, poivre. Fouet, mélanger énergiquement. Huile végétale, ajouter fur et mesure. Texture homogène onctueuse : mayonnaise prête."
      - "Mélange. Mayonnaise, améliorer. Peu jus cuisson champignons, crème soja ou avoine, curry, verser. Mélanger."
      - "Finition. Mélange, verser sur champignons. Ciboulette hachée, saupoudrer. Bon appétit."
    kcal_per_serving: 300
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : ≈ 100 g de chair de moules + sauce (jaune, huile ≈ 1 c.à.s./pers.)
      ; quantités non précisées dans la fiche'
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
    - oeuf
    - moutarde
    - mollusques
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 300
    kcal_source: ciqual_2020_estime
    kcal_note: 'estimation : ≈ 100 g de chair de moules + sauce (jaune, huile ≈ 1 c.à.s./pers.)
      ; quantités non précisées dans la fiche'
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"

---

# Moules froides
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/moules-froides]]

## Ingrédients (4 personnes)

-  reste de moules
- 1 jaune d'oeuf
- 1 c.à.s de moutarde
- 1 c.à.s de curry en poudre
- 1 c.à.s de crème fraîche épaisse
-  ciboulette fraîche
-  huile végétale
-  sel, poivre

## Préparation

1. Pour chaque moule, retirez le côté de la coquille qui ne contient pas de chaire. Disposez le tout dans un plat.
2. Pour la sauce, commencez par réaliser une mayonnaise. Dans un récipient, versez un jaune d’oeuf, une cuillère de moutarde, du sel et du poivre. Montez la mayonnaise en mélangeant énergiquement à l’aide d’un fouet et en ajoutant de l’huile végétale au fur et à mesure. La mayonnaise est prête quand la texture est homogène et onctueuse.
3. Pour améliorer cette mayonnaise, versez-y le jus de vos moules de la veille, de la crème fraîche et du curry, puis mélangez.
4. Versez simplement ce mélange sur toutes vos moules, saupoudrez d’un peu de ciboulette hachée et le tour est joué !

 
 

 
 Bon appétit !
