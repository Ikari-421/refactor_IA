---
schema: recette-web-jigme/v2
slug: salade-betteraves-epinards-oeuf-poche
title: Salade betteraves, épinards, œuf poché
lang: fr
description: "Salade betteraves, épinards, œuf poché : recette française avec pousses d'épinards, betterave cuite et oeuf, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- salade
- épinards
- végétarien
- rapide
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/salade-betteraves-epinards-oeuf-poche.webp
  alt: Salade betteraves, épinards, œuf poché
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-betteraves-epinards-oeuf-poche.md
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
    clears:
    - gluten
    swaps:
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
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
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
    - from: vinaigre de framboise
      to: jus de citron
      note: Acidité un peu différente.
    note: Vinaigre de framboise → citron.
house_toggle:
house_options: []
histoire: >
  Salade composée : betterave, pousses d’épinards, œuf poché, croûtons. Plat de
  maison contemporain, pas une salade régionale datée. La betterave cuite et
  l’œuf poché se croisent dans beaucoup de tables européennes.
fun_facts:
- text: >
    L’œuf poché se fait dans une eau frémissante, vinaigrée : trop bouillante,
    le blanc s’effiloche.
  source_name: Usage
  source_url:
- text: >
    La betterave tache : on l’ajoute au dernier moment, ou on accepte le rose.
  source_name: Usage
  source_url:
wines:
- name: Sancerre
  producer: Pascal Jolivet
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — la betterave sucrée-terreuse, acidité nette.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — l’œuf et le vinaigre, tanin court.
- name: Muscadet Sèvre-et-Maine
  producer: Famille Lieubeau
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc citronné — la vinaigrette, sans un chardonnay gras.
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
    - gluten
    - oeuf
    - fruits_a_coque
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 3
      rest_min: 0
      total_min: 18
    equipment: &id002
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: pousses d'épinards
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: betterave cuite
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre de framboise
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
      item: cerneaux de noix
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
    steps:
    - Cuisson. Coupez les tranches de pain en petits cubes, puis haché l’ail. Faites revenir le pain
      dans une poêle chaude avec du beurre et ajoutez de l’ail. Quand les croutons sont bien
      dorés, débarrassez sur du papier absorbant et réservez.
    - Mélange. Pour réaliser la vinaigrette rosée, mélangez dans un récipient le vinaigre de framboises
      et un peu de jus de betterave cuite. Mélangez et ajoutez progressivement de l’huile
      végétale. À vous de doser les quantités en fonction de vos goûts. N’hésitez pas à goûter
      et ajuster.
    - Découpez la betterave en dés. Dans les assiettes, disposez quelques pousses d’épinards
      et parsemez de betterave.
    - Cuisson. Pour faire un oeuf poché, commencez par casser un oeuf dans un récipient. Versez-le
      délicatement dans de l’eau chaude frémissante contenant du vinaigre blanc et du sel.
      À l’aide d’une cuillère, faite en sorte que le blanc enrobe le jaune. Au bout de 3 minutes,
      sortez l’oeuf de l’eau à l’aide d’un écumoire et déposez-le au centre de l’assiette,
      sur la salade.
    - Finition. Finalisez l’assiette en ajoutant les croutons, quelques cerneaux de noix et la vinaigrette
      rose. Et voilà une belle salade fraiche et colorée, idéale pour l’été. Bon appétit !

    steps_niveaux:
      amateur:
      - "Cuisson. Coupez les tranches de pain en petits cubes, puis hachez l’ail. Faites revenir le pain dans une poêle chaude avec du beurre et ajoutez l’ail. Quand les croûtons sont bien dorés, débarrassez-les sur du papier absorbant et réservez."
      - "Mélange. Pour réaliser la vinaigrette rosée, mélangez dans un récipient le vinaigre de framboises et un peu de jus de betterave cuite. Mélangez et ajoutez progressivement de l’huile végétale. Dosez les quantités en fonction de vos goûts. Goûtez et ajustez."
      - "Découpez la betterave en dés. Dans les assiettes, disposez quelques pousses d’épinards et parsemez de betterave."
      - "Cuisson. Pour faire un œuf poché, cassez un œuf dans un récipient. Versez-le délicatement dans de l’eau chaude frémissante contenant du vinaigre blanc et du sel. À l’aide d’une cuillère, faites en sorte que le blanc enrobe le jaune. Au bout de 3 minutes, sortez l’œuf de l’eau à l’aide d’une écumoire et déposez-le au centre de l’assiette, sur la salade."
      - "Finition. Finalisez l’assiette en ajoutant les croûtons, quelques cerneaux de noix et la vinaigrette rose. Et voilà une belle salade fraîche et colorée, idéale pour l’été."
      pro:
      - "Couper le pain en petits cubes. Hacher l’ail. Faire revenir le pain au beurre dans une poêle chaude. Ajouter l’ail. Croûtons dorés : débarrasser sur papier absorbant. Réserver."
      - "Vinaigrette rosée : mélanger vinaigre de framboises et un peu de jus de betterave cuite. Ajouter progressivement l’huile végétale. Doser au goût. Goûter et ajuster."
      - "Couper la betterave en dés. Disposer des pousses d’épinards dans les assiettes. Parsemer de betterave."
      - "Œuf poché : casser un œuf dans un récipient. Verser délicatement dans l’eau chaude frémissante, vinaigre blanc et sel. À la cuillère, enrober le jaune avec le blanc. 3 minutes. Sortir à l’écumoire. Déposer au centre de l’assiette, sur la salade."
      - "Ajouter les croûtons, quelques cerneaux de noix et la vinaigrette rose."
      cavernes:
      - "Cuisson. Pain, petits cubes. Ail, hacher. Poêle chaude, beurre, pain, revenir. Ail, ajouter. Croûtons dorés : papier absorbant, débarrasser. Réserver."
      - "Mélange. Vinaigrette rosée : vinaigre framboises, peu jus betterave cuite, mélanger. Huile végétale, ajouter progressivement. Doser goût. Goûter, ajuster."
      - "Betterave, dés. Assiettes, pousses épinards. Betterave, parsemer."
      - "Cuisson. Œuf poché : œuf, casser dans récipient. Eau chaude frémissante, vinaigre blanc, sel. Verser délicatement. Cuillère, blanc enrobe jaune. 3 minutes. Écumoire, sortir. Centre assiette, salade, déposer."
      - "Finition. Croûtons, cerneaux noix, vinaigrette rose, ajouter. Salade fraîche, colorée, été."
    kcal_per_serving: 279
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
    - gluten
    - oeuf
    - fruits_a_coque
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 279
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
    - gluten
    - fruits_a_coque
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: pousses d'épinards
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: betterave cuite
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre de framboise
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
      item: cerneaux de noix
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
    steps:
    - Cuisson. Coupez les tranches de pain en petits cubes, puis haché l’ail. Faites revenir le pain
      dans une poêle chaude avec de la margarine végétale et ajoutez de l’ail. Quand les croutons sont bien
      dorés, débarrassez sur du papier absorbant et réservez.
    - Mélange. Pour réaliser la vinaigrette rosée, mélangez dans un récipient le vinaigre de framboises
      et un peu de jus de betterave cuite. Mélangez et ajoutez progressivement de l’huile
      végétale. À vous de doser les quantités en fonction de vos goûts. N’hésitez pas à goûter
      et ajuster.
    - Découpez la betterave en dés. Dans les assiettes, disposez quelques pousses d’épinards
      et parsemez de betterave.
    - Cuisson. Pour le tofu poché, plongez un cube de tofu soyeux 1 minute dans l’eau frémissante vinaigrée, égouttez, déposez au centre de l’assiette.
    - Finition. Finalisez l’assiette en ajoutant les croutons, quelques cerneaux de noix et la vinaigrette
      rose. Et voilà une belle salade fraiche et colorée, idéale pour l’été. Bon appétit !

    steps_niveaux:
      amateur:
      - "Cuisson. Coupez les tranches de pain en petits cubes, puis hachez l’ail. Faites revenir le pain dans une poêle chaude avec de la margarine végétale et ajoutez l’ail. Quand les croûtons sont bien dorés, débarrassez-les sur du papier absorbant et réservez."
      - "Mélange. Pour réaliser la vinaigrette rosée, mélangez dans un récipient le vinaigre de framboises et un peu de jus de betterave cuite. Mélangez et ajoutez progressivement de l’huile végétale. Dosez les quantités en fonction de vos goûts. Goûtez et ajustez."
      - "Découpez la betterave en dés. Dans les assiettes, disposez quelques pousses d’épinards et parsemez de betterave."
      - "Cuisson. Pour le tofu poché, plongez un cube de tofu soyeux 1 minute dans l’eau frémissante vinaigrée, égouttez, déposez au centre de l’assiette."
      - "Finition. Finalisez l’assiette en ajoutant les croûtons, quelques cerneaux de noix et la vinaigrette rose. Et voilà une belle salade fraîche et colorée, idéale pour l’été."
      pro:
      - "Couper le pain en petits cubes. Hacher l’ail. Faire revenir le pain à la margarine végétale dans une poêle chaude. Ajouter l’ail. Croûtons dorés : débarrasser sur papier absorbant. Réserver."
      - "Vinaigrette rosée : mélanger vinaigre de framboises et un peu de jus de betterave cuite. Ajouter progressivement l’huile végétale. Doser au goût. Goûter et ajuster."
      - "Couper la betterave en dés. Disposer des pousses d’épinards dans les assiettes. Parsemer de betterave."
      - "Tofu poché : plonger un cube de tofu soyeux 1 minute dans l’eau frémissante vinaigrée. Égoutter. Déposer au centre de l’assiette."
      - "Ajouter les croûtons, quelques cerneaux de noix et la vinaigrette rose."
      cavernes:
      - "Cuisson. Pain, petits cubes. Ail, hacher. Poêle chaude, margarine végétale, pain, revenir. Ail, ajouter. Croûtons dorés : papier absorbant, débarrasser. Réserver."
      - "Mélange. Vinaigrette rosée : vinaigre framboises, peu jus betterave cuite, mélanger. Huile végétale, ajouter progressivement. Doser goût. Goûter, ajuster."
      - "Betterave, dés. Assiettes, pousses épinards. Betterave, parsemer."
      - "Cuisson. Tofu poché : cube tofu soyeux, 1 minute, eau frémissante vinaigrée, plonger. Égoutter. Centre assiette, déposer."
      - "Finition. Croûtons, cerneaux noix, vinaigrette rose, ajouter. Salade fraîche, colorée, été."
    kcal_per_serving: 279
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
    - gluten
    - oeuf
    - fruits_a_coque
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 279
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Salade betteraves, épinards, œuf poché

![[salade-betteraves-epinards-oeuf-poche.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-betteraves-epinards-oeuf-poche]]

## Ingrédients (4 personnes)

- 200 g de pousses d'épinards
- 3 betterave cuite
- 4 oeuf
- 1 gousse d'ail
- 4 tranche de pain
-  vinaigre de framboise
-  huile végétale
-  cerneaux de noix

## Préparation

1. Coupez les tranches de pain en petits cubes, puis haché l’ail. Faites revenir le pain dans une poêle chaude avec du beurre et ajoutez de l’ail. Quand les croutons sont bien dorés, débarrassez sur du papier absorbant et réservez.
2. Pour réaliser la vinaigrette rosée, mélangez dans un récipient le vinaigre de framboises et un peu de jus de betterave cuite. Mélangez et ajoutez progressivement de l’huile végétale. À  vous de doser les quantités en fonction de vos goûts. N’hésitez pas à goûter et ajuster.
3. Découpez la betterave en dés. Dans les assiettes, disposez quelques pousses d’épinards et parsemez de betterave.
4. Pour faire un oeuf poché, commencez par casser un oeuf dans un récipient. Versez-le délicatement dans de l’eau chaude frémissante contenant du vinaigre blanc et du sel. À l’aide d’une cuillère, faite en sorte que le blanc enrobe le jaune. Au bout de 3 minutes, sortez l’oeuf de l’eau à l’aide d’un écumoire et déposez-le au centre de l’assiette, sur la salade.
5. Finalisez l’assiette en ajoutant les croutons, quelques cerneaux de noix et la vinaigrette rose.

 
 

 
 Et voilà une belle salade fraiche et colorée, idéale pour l’été. Bon appétit !
