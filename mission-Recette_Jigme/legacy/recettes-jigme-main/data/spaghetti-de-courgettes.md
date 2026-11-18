---
schema: recette-web-jigme/v2
equipment:
- ref: econome
slug: spaghetti-de-courgettes
title: Spaghetti de courgettes
lang: fr
description: "Spaghetti de courgettes : recette italienne avec petite courgette, botte de basilic et parmesan, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- légumes
- végétarien
image:
  url:
  alt: Spaghetti de courgettes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/spaghetti-de-courgettes.md
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
    - from: parmesan
      to: comté affiné (naturellement quasi sans lactose)
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: >
  Courgette taillée en fils, souvent crue ou à peine poêlée, pesto. Substitut
  de pâtes contemporain, pas des spaghetti italiens. Plat d’été, pas une recette
  régionale datée.
fun_facts:
- text: >
    Trop cuites, les courgettes rendent l’eau et le pesto se dilue.
  source_name: Usage
  source_url:
- text: >
    Un pesto d’herbes et d’huile tient mieux qu’une crème : moins d’eau.
  source_name: Usage
  source_url:
wines:
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le pesto et la courgette, voisin.
- name: Vermentino di Sardegna
  producer: Sella e Mosca
  origin: Alghero, Sardaigne
  grapes: vermentino
  award:
  why: Blanc d’herbes — le basilic, sans un chardonnay boisé.
- name: Cassis
  producer: Clos Sainte-Magdeleine
  origin: Cassis, Provence
  grapes: marsanne, clairette
  award:
  why: Blanc de Provence, sel — l’été, sans un rouge.
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
      prep_min: 45
      cook_min: 0
      rest_min: 0
      total_min: 45
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: petite courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte de basilic
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: parmesan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: grosse pincée de pignons de pin
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
    - qty: 70
      unit: ml
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles
      de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédant d’eau.
      Vous pouvez également les couper par endroits si vos spaghetti sont trop longs.
    - Finition. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le parmesan, le basilic et
      l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une jolie assiette creuse,
      versez le pesto en mélangeant et ajoutez quelques pignons de pin, des feuilles de basilic
      et des copeaux de parmesan pour la décoration. C’est bon, c’est frais et ça change des
      salades dont on a l’habitude. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédent d’eau. Vous pouvez également les couper par endroits si vos spaghetti sont trop longs."
      - "Finition. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le parmesan, le basilic et l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une assiette creuse, versez le pesto en mélangeant et ajoutez quelques pignons de pin, des feuilles de basilic et des copeaux de parmesan pour la décoration."
      pro:
      - "Au spiraliseur ou à l’économe, réaliser des spaghetti ou des tagliatelles de courgettes. Débarrasser sur du papier absorbant pour éliminer l’excédent d’eau. Couper par endroits si trop longs."
      - "Au mortier pilon, ajouter les pignons de pin, l’ail, le parmesan, le basilic et l’huile. Assaisonner si besoin. Dresser les spaghetti dans une assiette creuse, verser le pesto en mélangeant, ajouter quelques pignons de pin, des feuilles de basilic et des copeaux de parmesan."
      cavernes:
      - "Préparation. Spiraliseur ou économe : spaghetti ou tagliatelles courgettes. Papier absorbant, débarrasser, excédent eau. Option : trop longs, couper par endroits."
      - "Finition. Mortier pilon : pignons pin, ail, parmesan, basilic, huile. Assaisonner si besoin. Spaghetti, assiette creuse, dresser. Pesto, verser, mélanger. Décoration : pignons pin, feuilles basilic, copeaux parmesan."
    kcal_per_serving: 330
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
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
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: petite courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte de basilic
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: grana (présure microbienne)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: grosse pincée de pignons de pin
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
    - qty: 70
      unit: ml
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles
      de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédant d’eau.
      Vous pouvez également les couper par endroits si vos spaghetti sont trop longs.
    - Finition. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le grana (présure microbienne), le basilic et
      l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une jolie assiette creuse,
      versez le pesto en mélangeant et ajoutez quelques pignons de pin, des feuilles de basilic
      et des copeaux de grana (présure microbienne) pour la décoration. C’est bon, c’est frais et ça change des
      salades dont on a l’habitude. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédent d’eau. Vous pouvez également les couper par endroits si vos spaghetti sont trop longs."
      - "Finition. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le grana (présure microbienne), le basilic et l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une assiette creuse, versez le pesto en mélangeant et ajoutez quelques pignons de pin, des feuilles de basilic et des copeaux de grana (présure microbienne) pour la décoration."
      pro:
      - "Au spiraliseur ou à l’économe, réaliser des spaghetti ou des tagliatelles de courgettes. Débarrasser sur du papier absorbant pour éliminer l’excédent d’eau. Couper par endroits si trop longs."
      - "Au mortier pilon, ajouter les pignons de pin, l’ail, le grana (présure microbienne), le basilic et l’huile. Assaisonner si besoin. Dresser les spaghetti dans une assiette creuse, verser le pesto en mélangeant, ajouter quelques pignons de pin, des feuilles de basilic et des copeaux de grana (présure microbienne)."
      cavernes:
      - "Préparation. Spiraliseur ou économe : spaghetti ou tagliatelles courgettes. Papier absorbant, débarrasser, excédent eau. Option : trop longs, couper par endroits."
      - "Finition. Mortier pilon : pignons pin, ail, grana (présure microbienne), basilic, huile. Assaisonner si besoin. Spaghetti, assiette creuse, dresser. Pesto, verser, mélanger. Décoration : pignons pin, feuilles basilic, copeaux grana (présure microbienne)."
    kcal_per_serving: 330
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
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: petite courgette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte de basilic
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: parmesan végétal ou levure maltée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: grosse pincée de pignons de pin
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
    - qty: 70
      unit: ml
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles
      de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédant d’eau.
      Vous pouvez également les couper par endroits si vos spaghetti sont trop longs.
    - Finition. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le parmesan végétal ou levure
      maltée, le basilic et l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une
      jolie assiette creuse, versez le pesto en mélangeant et ajoutez quelques pignons de
      pin, des feuilles de basilic et des copeaux de parmesan végétal ou levure maltée pour
      la décoration. C’est bon, c’est frais et ça change des salades dont on a l’habitude.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédent d’eau. Vous pouvez également les couper par endroits si vos spaghetti sont trop longs."
      - "Finition. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le parmesan végétal ou la levure maltée, le basilic et l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une assiette creuse, versez le pesto en mélangeant et ajoutez quelques pignons de pin, des feuilles de basilic et des copeaux de parmesan végétal ou de levure maltée pour la décoration."
      pro:
      - "Au spiraliseur ou à l’économe, réaliser des spaghetti ou des tagliatelles de courgettes. Débarrasser sur du papier absorbant pour éliminer l’excédent d’eau. Couper par endroits si trop longs."
      - "Au mortier pilon, ajouter les pignons de pin, l’ail, le parmesan végétal ou la levure maltée, le basilic et l’huile. Assaisonner si besoin. Dresser les spaghetti dans une assiette creuse, verser le pesto en mélangeant, ajouter quelques pignons de pin, des feuilles de basilic et des copeaux de parmesan végétal ou de levure maltée."
      cavernes:
      - "Préparation. Spiraliseur ou économe : spaghetti ou tagliatelles courgettes. Papier absorbant, débarrasser, excédent eau. Option : trop longs, couper par endroits."
      - "Finition. Mortier pilon : pignons pin, ail, parmesan végétal ou levure maltée, basilic, huile. Assaisonner si besoin. Spaghetti, assiette creuse, dresser. Pesto, verser, mélanger. Décoration : pignons pin, feuilles basilic, copeaux parmesan végétal ou levure maltée."
    kcal_per_serving: 330
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
    kcal_per_serving: 330
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Spaghetti de courgettes
**Équipement :** [[econome]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/spaghetti-de-courgettes]]

## Ingrédients (4 personnes)

- 4 petite courgette
- 1 botte de basilic
- 50 g de parmesan
- 1 grosse pincée de pignons de pin
- 1 gousse d'ail
- 70 ml d'huile d'olive
-  du sel

## Préparation

1. À l’aide d’un spiraliseur ou d’un économe, réalisez des spaghetti ou des tagliatelles de courgettes. Débarrassez-les sur du papier absorbant pour éliminer l’excédant d’eau. Vous pouvez également les couper par endroits si vos spaghetti sont trop longs.
2. Dans un mortier pilon, ajoutez les pignons de pin, l’ail, le parmesan, le basilic et l’huile. Assaisonnez si besoin. Dressez les spaghetti dans une jolie assiette creuse, versez le pesto en mélangeant et ajoutez quelques pignons de pin, des feuilles de basilic et des copeaux de parmesan pour la décoration.

 
 

 
 C’est bon, c’est frais et ça change des salades dont on a l’habitude. Bon appétit !
