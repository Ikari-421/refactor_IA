---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: pain-a-burger-brioche
title: Pain à burger brioché
lang: fr
description: "Pain à burger brioché : recette américaine avec farine T65, lait tiède et levure sèche, pour 4 personnes. Version maison."
cuisine: américaine
category: salé
tags:
- salé
- boulangerie
- brioche
- burger
image:
  url:
  alt: Pain à burger brioché
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/pain-a-burger-brioche.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
- sans_lactose_sans_gluten
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
    clears:
    - gluten
    swaps:
    - from: farine T65
      to: mix farine sans gluten (avec liant) + 4 g de psyllium
      note: Le liant est obligatoire. Vérifier lupin sur le mix.
    - from: farine
      to: mix farine sans gluten (avec liant) + 4 g de psyllium
      note: 'Maison : même liant.'
    note: 'Pain au blé. Mix commerce : gare au lupin.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: lait tiède
      to: lait sans lactose tiède (25–29 °C)
      note: Intolérance.
    - from: beurre mou
      to: margarine sans lactose
      note:
    - from: beurre à température
      to: margarine sans lactose
      note:
    note: Intolérance. Allergie → vegan.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → lait d’avoine + margarine.
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - oeuf
    swaps: []
    note: 'Dorure et mie : aquafaba (vegan).'
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
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
    impossible: true
    redirect_variant:
    clears:
    - mollusques
    swaps: []
    note: 'Contient mollusques (encre de seiche) : pas d’adaptation fiable.'
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
    note:
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Tradi (blé) OK. En sans gluten, choisir un mix **sans lupin**.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: 'Tradi OK. Lait d’avoine vegan : vérifier qu’il n’est pas coupé au soja.'
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
    note: Pas de sulfites ajoutés listés (éviter vinaigre / vin sulfité en substi).
house_toggle: ma_recette
house_options:
- ma_recette
histoire: 'Pain français d’origine normande, pâte enrichie de beurre (souvent 30 à 50 % du
  poids de farine), d’œufs et de lait. Le nom viendrait du vieux français brier, « pétrir
  », avec une attestation vers 1404. Produit de luxe d’abord, la recette s’allège et se diversifie
  (plus de trente formes régionales). Le bun burger brioché est un usage salé contemporain
  : moins de beurre qu’une brioche de pâtisserie, pour porter un steak sans s’effondrer. Chez
  Jigmé : 50 g de beurre pour 400 g de farine.

  '
fun_facts:
- text: Attesté vers 1404 ; brier = pétrir. Origine normande, beurre typiquement 30–50 % du
    poids de farine.
  source_name: Grokipedia, Brioche
  source_url: https://grokipedia.com/page/Brioche
- text: Grokipedia note des usages salés modernes, dont le burger, à côté du pain perdu et
    des formes sucrées.
  source_name: Grokipedia, Brioche
  source_url: https://grokipedia.com/page/Brioche
- text: « Qu’ils mangent de la brioche » est déjà chez Rousseau (1782), attribué à « une grande
    princesse », pas à Marie-Antoinette de façon sûre.
  source_name: Wikipedia FR, Brioche
  source_url: https://fr.wikipedia.org/wiki/Brioche
- text: '400 g de beurre / kg de farine : plancher d’usage pâtissier souvent cité. Un bun
    burger se tient volontairement en dessous.'
  source_name: Wikipedia FR, Brioche
  source_url: https://fr.wikipedia.org/wiki/Brioche
wines:
- name: Coudoulet de Beaucastel rouge
  producer: Famille Perrin (Château de Beaucastel)
  origin: Orange / Côtes du Rhône
  grapes: grenache, mourvèdre, syrah, cinsault
  award:
  why: Fruit, garrigue, tanins souples — tient steak, cheddar, bun beurré. (Pour un burger
    dans le bun ; le pain seul n’appelle pas de vin.)
- name: Fleurie
  producer: Maison Louis Jadot
  origin: Fleurie, Beaujolais
  grapes: gamay
  award:
  why: Fruit rouge, peu de tanin — bun sucré + viande grillée, sans assommer.
- name: Bandol rouge
  producer: Château de Pibarnon
  origin: Bandol, Provence
  grapes: mourvèdre (majoritaire)
  award:
  why: Structure, poivre, fruit noir — burger charnu, bacon, bun brioché.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: pains
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 20
      rest_min: 150
      total_min: 195
    equipment:
    - KitchenAid (crochet) ou saladier
    - plaque
    - four
    substitutions:
    - from: 3 g de levure sèche
      to: 12 g de levure fraîche
      note: Même pâte.
    - from: lait
      to: lait entier
      note: Meilleure mie.
    scale_note: Le visiteur choisit un nombre de pains. Au-delà de 12, plutôt deux pâtons.
      La levure scale à peu près en linéaire à cette échelle.
    ingredients:
    - qty: 270
      unit: g
      item: farine T65
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: lait tiède (25–29 °C)
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: g
      item: levure sèche
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 27
      unit: g
      item: sucre
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: g
      item: sel
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: beurre mou
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf entier
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d'œuf
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d'œuf
      group: dorure
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: eau
      group: dorure
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Mélange. Mélangez le lait et la levure, puis laissez 5 min. Ajoutez la farine, le sucre, le sel, puis l’œuf et le jaune. Pétrissez 8 min. Incorporez le beurre en morceaux et pétrissez jusqu’à obtenir une pâte lisse."
    - "Cuisson. Laissez lever une première fois, à couvert, jusqu’à ce que la pâte double de volume (environ 1 h 15)."
    - "Cuisson. Divisez la pâte en boules de 120–130 g, puis laissez lever 45 à 60 min."
    - "Dorer. Enfournez à 185 °C et faites cuire 18 à 20 min."
    steps_niveaux:
      amateur:
      - "Mélange. Mélangez le lait et la levure, puis laissez 5 min. Ajoutez la farine, le sucre, le sel, puis l’œuf et le jaune. Pétrissez 8 min. Incorporez le beurre en morceaux et pétrissez jusqu’à obtenir une pâte lisse."
      - "Cuisson. Laissez lever une première fois, à couvert, jusqu’à ce que la pâte double de volume (environ 1 h 15)."
      - "Cuisson. Divisez la pâte en boules de 120–130 g, puis laissez lever 45 à 60 min."
      - "Dorer. Enfournez à 185 °C et faites cuire 18 à 20 min."
      pro:
      - "Mélanger le lait et la levure. Laisser 5 min. Ajouter la farine, le sucre, le sel, puis l’œuf et le jaune. Pétrir 8 min. Incorporer le beurre en morceaux. Pétrir jusqu’à pâte lisse."
      - "Laisser lever une première fois, à couvert, jusqu’à doublement du volume (environ 1 h 15)."
      - "Diviser la pâte en boules de 120–130 g. Laisser lever 45 à 60 min."
      - "Enfourner à 185 °C. Cuire 18 à 20 min."
      cavernes:
      - "Mélange. Lait, levure, mélanger. 5 min, laisser. Farine, sucre, sel, ajouter. Œuf, jaune, ajouter. 8 min, pétrir. Beurre morceaux, incorporer. Pâte lisse, pétrir."
      - "Cuisson. Première fois, couvert, lever. Pâte double volume, environ 1 h 15."
      - "Cuisson. Pâte, boules 120–130 g, diviser. 45 à 60 min, lever."
      - "Dorer. 185 °C, enfourner. 18 à 20 min, cuire."
    kcal_per_serving: 409
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 6
    servings_unit: pains
    diets: []
    allergens:
    - gluten
    - lactose
    - oeuf
    - mollusques
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 19
      rest_min: 150
      total_min: 194
    equipment:
    - saladier ou KitchenAid
    - plaque
    - four
    substitutions: []
    scale_note: Batch maison = 6 pains. Boules 120–130 g. Scaling à partir de 6.
    ingredients:
    - qty: 400
      unit: g
      item: farine
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lait tiède (25–29 °C)
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: levure sèche
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sel
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre à température
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs entiers
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d'œuf
      group: dorure
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: eau (dorure)
      group: dorure
      scale: false
      optional: false
      to_taste: true
    - qty: 7
      unit: g
      item: encre de seiche
      group: variante
      scale: true
      optional: true
      to_taste: false
    steps:
    - "Préparation. Laissez lever une première fois avec la totalité de la pâte."
    - "Cuisson. Divisez en boules de 120–130 g, puis laissez lever une deuxième fois."
    - "Cuisson. Enfournez à 180–190 °C et faites cuire 18 à 20 minutes."
    - "Finition. Pour une variante à l’encre de seiche, incorporez 6 à 8 g d’encre de seiche à la pâte, en option."
    steps_niveaux:
      amateur:
      - "Préparation. Laissez lever une première fois avec la totalité de la pâte."
      - "Cuisson. Divisez en boules de 120–130 g, puis laissez lever une deuxième fois."
      - "Cuisson. Enfournez à 180–190 °C et faites cuire 18 à 20 minutes."
      - "Finition. Pour une variante à l’encre de seiche, incorporez 6 à 8 g d’encre de seiche à la pâte, en option."
      pro:
      - "Laisser lever une première fois avec la totalité de la pâte."
      - "Diviser en boules de 120–130 g. Laisser lever une deuxième fois."
      - "Enfourner à 180–190 °C. Cuire 18 à 20 minutes."
      - "Variante optionnelle : incorporer 6 à 8 g d’encre de seiche à la pâte."
      cavernes:
      - "Préparation. Totalité pâte, première fois, lever."
      - "Cuisson. Boules 120–130 g, diviser. Deuxième fois, lever."
      - "Cuisson. 180–190 °C, enfourner. 18 à 20 minutes, cuire."
      - "Finition. Variante encre de seiche, option : 6 à 8 g, pâte, incorporer."
    kcal_per_serving: 370
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients, par pain (encre de seiche négligeable)
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: pains
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 409
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: pains
    diets:
    - vegetarien
    - vegan
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 20
      rest_min: 150
      total_min: 195
    equipment:
    - KitchenAid ou saladier
    - plaque
    - four
    substitutions:
    - from: lait d'avoine
      to: autre lait végétal
      note: Avoine recommandé.
    - from: margarine
      to: margarine 80 % MG
      note: Éviter les 40 % type régime.
    scale_note: Nombre de pains.
    ingredients:
    - qty: 270
      unit: g
      item: farine T65
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: lait d'avoine (25–29 °C)
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: g
      item: levure sèche
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 27
      unit: g
      item: sucre
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: g
      item: sel
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: margarine
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: aquafaba
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: lait d'avoine pour dorer
      group: dorure
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Procédez à la même double levée, avec le lait d’avoine et l’aquafaba."
    - "Cuisson. Dorez au lait d’avoine."
    - "Cuisson. Enfournez à 185 °C et faites cuire 18 à 20 min."
    steps_niveaux:
      amateur:
      - "Préparation. Procédez à la même double levée, avec le lait d’avoine et l’aquafaba."
      - "Cuisson. Dorez au lait d’avoine."
      - "Cuisson. Enfournez à 185 °C et faites cuire 18 à 20 min."
      pro:
      - "Procéder à la même double levée, avec le lait d’avoine et l’aquafaba."
      - "Dorer au lait d’avoine."
      - "Enfourner à 185 °C. Cuire 18 à 20 min."
      cavernes:
      - "Préparation. Même double levée. Lait d’avoine, aquafaba."
      - "Cuisson. Lait d’avoine, dorer."
      - "Cuisson. 185 °C, enfourner. 18 à 20 min, cuire."
    kcal_per_serving: 340
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: pains
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 409
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  sans_lactose_sans_gluten:
    label: Sans lactose et sans gluten
    inherit:
    servings_base: 4
    servings_unit: pains
    diets:
    - vegetarien
    allergens:
    - oeuf
    difficulty: 3
    time:
      prep_min: 25
      cook_min: 20
      rest_min: 105
      total_min: 150
    equipment:
    - KitchenAid
    - plaque
    - four
    substitutions:
    - from: mix farine SG
      to: mix commerce + 4 g de psyllium
      note: Le liant est obligatoire.
    scale_note: Pâte plus molle. Nombre de pains.
    ingredients:
    - qty: 270
      unit: g
      item: mix farine sans gluten (avec liant)
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: psyllium
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 110
      unit: g
      item: lait sans lactose (25–29 °C)
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: g
      item: levure sèche
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 27
      unit: g
      item: sucre
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: sel
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: margarine sans lactose
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group: pate
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d'œuf
      group: dorure
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: eau (dorure)
      group: dorure
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Pétrissez 6 min : la pâte est plus molle."
    - "Cuisson. Laissez lever 50 min."
    - "Cuisson. Formez des boules à la cuillère, puis laissez lever une seconde fois 40 min."
    - "Cuisson. Dorez au jaune d’œuf délayé d’eau, puis enfournez à 185 °C et faites cuire 18 à 20 min."
    steps_niveaux:
      amateur:
      - "Préparation. Pétrissez 6 min : la pâte est plus molle."
      - "Cuisson. Laissez lever 50 min."
      - "Cuisson. Formez des boules à la cuillère, puis laissez lever une seconde fois 40 min."
      - "Cuisson. Dorez au jaune d’œuf mélangé d’eau, puis enfournez à 185 °C et faites cuire 18 à 20 min."
      pro:
      - "Pétrir 6 min : la pâte est plus molle."
      - "Laisser lever 50 min."
      - "Former des boules à la cuillère. Laisser lever une seconde fois 40 min."
      - "Dorer au jaune d’œuf mélangé d’eau. Enfourner à 185 °C. Cuire 18 à 20 min."
      cavernes:
      - "Préparation. 6 min, pétrir. Pâte plus molle."
      - "Cuisson. 50 min, lever."
      - "Cuisson. Boules, cuillère, former. Seconde fois 40 min, lever."
      - "Cuisson. Jaune d’œuf mélangé d’eau, dorer. 185 °C, enfourner. 18 à 20 min, cuire."
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Le froid dessèche le pain."}
  congelation: {possible: true, duree: "1 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "2 jours", note: "Sachet ou boîte, à l’abri de l’humidité."}
  rechauffage: ""
  restes: ["Pain perdu"]
  anti_gaspi: ["Croûtons"]
  a_verifier: false
  note_verif: ""

---

# Pain à burger brioché

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 pains.

**Catégorie :** salé · boulangerie  
**Régimes déjà vrais (tradi) :** végétarien  
**Photo :** aucune pour l’instant

**Équipement :** [[robot-patissier]]

## Ingrédients (4 pains)

- 270 g de farine T65
- 100 g de lait tiède (25–29 °C)
- 3 g de levure sèche
- 27 g de sucre
- 7 g de sel
- 35 g de beurre mou
- 1 œuf entier + 1 jaune (pâte)
- 1 jaune d’œuf + 1 c. à c. d’eau (dorure)

## Préparation

1. Mélange. Mélangez le lait et la levure, puis laissez 5 min. Ajoutez la farine, le sucre, le sel, puis l’œuf et le jaune. Pétrissez 8 min. Incorporez le beurre en morceaux et pétrissez jusqu’à obtenir une pâte lisse.
2. Cuisson. Laissez lever une première fois, à couvert, jusqu’à ce que la pâte double de volume (environ 1 h 15).
3. Cuisson. Divisez la pâte en boules de 120–130 g, puis laissez lever 45 à 60 min.
4. Dorer. Enfournez à 185 °C et faites cuire 18 à 20 min.

## Variantes machine

`ma_recette` (6 pains) · `vegetarienne` (identique) · `vegan` · `sans_lactose_sans_gluten`
