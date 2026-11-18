---
schema: recette-web-jigme/v2
slug: ramen-vegetarien
title: Ramen végétarien
lang: fr
description: "Ramen végétarien : recette japonaise avec nouilles japonaises, bok choy et shiitakes, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: salé
tags:
- salé
- nouilles
- végétarien
- japonais
image:
  url:
  alt: Ramen végétarien
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/ramen-vegetarien.md
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
    - from: nouilles japonaises
      to: nouilles de riz
      note:
    - from: sauce soja
      to: tamari sans gluten
      note:
    - from: miso
      to: miso de riz certifié sans gluten
      note:
    note: Nouilles ramen (blé), sauce soja → nouilles de riz, tamari.
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
    impossible: true
    redirect_variant:
    clears:
    - soja
    swaps: []
    note: 'Contient soja (pâte miso) : pas d’adaptation fiable.'
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
histoire: 'Même soupe de nouilles japonaises, bouillon de légumes (kombu, champignons, miso) à la place
  de l’os de porc. Le ramen reste une fusion sino-japonaise ; la version végétarienne est une adaptation,
  pas un canon de quartier.

  '
fun_facts:
- text: 'Un dashi de kombu et de shiitakés donne de l’umami sans poisson ; trop réduit, il amertume.

    '
  source_name: Usage
  source_url: null
- text: 'Le miso se délaye hors du bouillon bouillant, pour ne pas le granuler.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Ramen végétarien ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Rāmen
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le miso et les champignons, sans un rouge.
- name: Picpoul de Pinet
  producer: Cave de l'Ormarine
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — le bouillon, acidité nette.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — un ramen sans viande, sans un tanin.
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
    - oeuf
    - soja
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 45
      rest_min: 0
      total_min: 105
    equipment: &id002
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 240
      unit: g
      item: nouilles japonaises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bok choy (ou épinards ou blettes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: shiitakes (ou autres champignons)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tofu
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: pâte miso
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites cuire les oeufs dans de l’eau portée à ébullition pendant 6 min. Une fois cuits,
      débarrassez-les dans de l’eau froide.
    - Cuisson. Pour le bouillon, utilisez une grande casserole remplie d’eau. Ajoutez-y les tiges (partie
      verte) des oignons nouveaux et le gingembre pelé et coupé. Enfin, complétez avec les
      shiitake coupés en lamelle et la pâte miso.
    - Cuisson. Coupez votre Bok Choy (chou de Chine) dans la longueur, puis faites le revenir quelques
      minutes dans une poêle avec un filet d’huile d’olive. Une fois grillé, réservez dans
      une assiette. Dans la même poêle, avec le restant de matière grasse, faites cuire des
      morceaux de tofu et laissez-les griller doucement. En fin de cuisson, versez un peu
      de sauce soja sur le tofu.
    - Cuisson. À l’aide d’un écumoire, retirez tous les éléments solides du bouillon. Faites ensuite
      cuire les nouilles dans le bouillon pendant une à deux minutes. Une fois cuites, débarrassez
      dans des bols (un par personne)
    - Finition. Dans ces bols de nouilles, ajoutez du bouillon. Complétez avec quelques morceaux de
      Bok Choy, des champignons, quelques tranches de tofu et un oeuf préalablement écalé
      et coupé en deux. Finalisez avec quelques oignons nouveaux finement ciselés. Et voilà,
      vous avez un délicieux ramen 100% végétarien, à déguster bien chaud ! Bon appétit !

    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les œufs dans de l’eau portée à ébullition pendant 6 min. Une fois cuits, débarrassez-les dans de l’eau froide."
      - "Cuisson. Pour le bouillon, utilisez une grande casserole remplie d’eau. Ajoutez-y les tiges (partie verte) des oignons nouveaux et le gingembre pelé et coupé. Enfin, complétez avec les shiitake coupés en lamelles et la pâte miso."
      - "Cuisson. Coupez votre bok choy (chou de Chine) dans la longueur, puis faites-le revenir quelques minutes dans une poêle avec un filet d’huile d’olive. Une fois grillé, réservez dans une assiette. Dans la même poêle, avec le restant de matière grasse, faites cuire des morceaux de tofu et laissez-les griller doucement. En fin de cuisson, versez un peu de sauce soja sur le tofu."
      - "Cuisson. À l’aide d’un écumoire, retirez tous les éléments solides du bouillon. Faites ensuite cuire les nouilles dans le bouillon pendant une à deux minutes. Une fois cuites, débarrassez dans des bols (un par personne)."
      - "Finition. Dans ces bols de nouilles, ajoutez du bouillon. Complétez avec quelques morceaux de bok choy, des champignons, quelques tranches de tofu et un œuf préalablement écalé et coupé en deux. Finalisez avec quelques oignons nouveaux finement ciselés."
      pro:
      - "Cuire les œufs dans de l’eau portée à ébullition 6 min. Cuis, débarrasser à l’eau froide."
      - "Bouillon : grande casserole remplie d’eau. Ajouter les tiges (partie verte) des oignons nouveaux et le gingembre pelé et coupé. Compléter avec les shiitake en lamelles et la pâte miso."
      - "Couper le bok choy (chou de Chine) dans la longueur. Faire revenir quelques minutes dans une poêle avec un filet d’huile d’olive. Grillé : réserver. Dans la même poêle, avec le restant de matière grasse, cuire des morceaux de tofu, laisser griller doucement. En fin de cuisson, verser un peu de sauce soja sur le tofu."
      - "Retirer les solides du bouillon à l’écumoire. Cuire les nouilles dans le bouillon une à deux minutes. Cuis : débarrasser dans des bols (un par personne)."
      - "Ajouter du bouillon dans les bols de nouilles. Compléter avec bok choy, champignons, tranches de tofu et un œuf écalé coupé en deux. Finaliser avec oignons nouveaux finement ciselés."
      cavernes:
      - "Cuisson. Œufs, eau ébullition, 6 min. Cuits, eau froide, débarrasser."
      - "Cuisson. Bouillon. Grande casserole, eau. Tiges oignons nouveaux (partie verte), gingembre pelé coupé, ajouter. Shiitake lamelles, pâte miso, compléter."
      - "Cuisson. Bok choy (chou Chine), longueur, couper. Poêle, filet huile olive, quelques min, faire revenir. Grillé, réserver assiette. Même poêle, restant matière grasse. Tofu morceaux, griller doucement. Fin cuisson : peu sauce soja, verser sur tofu."
      - "Cuisson. Bouillon, solides, écumoire, retirer. Nouilles, cuire dans bouillon 1 à 2 min. Cuites, débarrasser bols (1 par personne)."
      - "Finition. Bols nouilles, bouillon. Bok choy, champignons, tofu tranches, œuf écalé coupé en deux. Oignons nouveaux, ciseler finement."
    kcal_per_serving: 286
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
    - oeuf
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 286
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 240
      unit: g
      item: nouilles japonaises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bok choy (ou épinards ou blettes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: shiitakes (ou autres champignons)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tofu
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
      item: botte d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: pâte miso
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le tofu en tranches (il remplace l’œuf mollet).
    - Cuisson. Pour le bouillon, utilisez une grande casserole remplie d’eau. Ajoutez-y les tiges (partie
      verte) des oignons nouveaux et le gingembre pelé et coupé. Enfin, complétez avec les
      shiitake coupés en lamelle et la pâte miso.
    - Cuisson. Coupez votre Bok Choy (chou de Chine) dans la longueur, puis faites le revenir quelques
      minutes dans une poêle avec un filet d’huile d’olive. Une fois grillé, réservez dans
      une assiette. Dans la même poêle, avec le restant de matière grasse, faites cuire des
      morceaux de tofu et laissez-les griller doucement. En fin de cuisson, versez un peu
      de sauce soja sur le tofu.
    - Cuisson. À l’aide d’un écumoire, retirez tous les éléments solides du bouillon. Faites ensuite
      cuire les nouilles dans le bouillon pendant une à deux minutes. Une fois cuites, débarrassez
      dans des bols (un par personne)
    - Finition. Dans ces bols de nouilles, ajoutez du bouillon. Complétez avec quelques morceaux de
      Bok Choy, des champignons, quelques tranches de tofu et quelques cubes de tofu. Finalisez avec quelques oignons nouveaux finement ciselés. Et voilà,
      vous avez un délicieux ramen 100% végétarien, à déguster bien chaud ! Bon appétit !

    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu en tranches (il remplace l’œuf mollet)."
      - "Cuisson. Pour le bouillon, utilisez une grande casserole remplie d’eau. Ajoutez-y les tiges (partie verte) des oignons nouveaux et le gingembre pelé et coupé. Enfin, complétez avec les shiitake coupés en lamelles et la pâte miso."
      - "Cuisson. Coupez votre bok choy (chou de Chine) dans la longueur, puis faites-le revenir quelques minutes dans une poêle avec un filet d’huile d’olive. Une fois grillé, réservez dans une assiette. Dans la même poêle, avec le restant de matière grasse, faites cuire des morceaux de tofu et laissez-les griller doucement. En fin de cuisson, versez un peu de sauce soja sur le tofu."
      - "Cuisson. À l’aide d’un écumoire, retirez tous les éléments solides du bouillon. Faites ensuite cuire les nouilles dans le bouillon pendant une à deux minutes. Une fois cuites, débarrassez dans des bols (un par personne)."
      - "Finition. Dans ces bols de nouilles, ajoutez du bouillon. Complétez avec quelques morceaux de bok choy, des champignons, quelques tranches de tofu et quelques cubes de tofu. Finalisez avec quelques oignons nouveaux finement ciselés."
      pro:
      - "Couper le tofu en tranches (remplace l’œuf mollet)."
      - "Bouillon : grande casserole remplie d’eau. Ajouter les tiges (partie verte) des oignons nouveaux et le gingembre pelé et coupé. Compléter avec les shiitake en lamelles et la pâte miso."
      - "Couper le bok choy (chou de Chine) dans la longueur. Faire revenir quelques minutes dans une poêle avec un filet d’huile d’olive. Grillé : réserver. Dans la même poêle, avec le restant de matière grasse, cuire des morceaux de tofu, laisser griller doucement. En fin de cuisson, verser un peu de sauce soja sur le tofu."
      - "Retirer les solides du bouillon à l’écumoire. Cuire les nouilles dans le bouillon une à deux minutes. Cuis : débarrasser dans des bols (un par personne)."
      - "Ajouter du bouillon dans les bols de nouilles. Compléter avec bok choy, champignons, tranches de tofu et cubes de tofu. Finaliser avec oignons nouveaux finement ciselés."
      cavernes:
      - "Préparation. Tofu, tranches (remplace œuf mollet)."
      - "Cuisson. Bouillon. Grande casserole, eau. Tiges oignons nouveaux (partie verte), gingembre pelé coupé, ajouter. Shiitake lamelles, pâte miso, compléter."
      - "Cuisson. Bok choy (chou Chine), longueur, couper. Poêle, filet huile olive, quelques min, faire revenir. Grillé, réserver assiette. Même poêle, restant matière grasse. Tofu morceaux, griller doucement. Fin cuisson : peu sauce soja, verser sur tofu."
      - "Cuisson. Bouillon, solides, écumoire, retirer. Nouilles, cuire dans bouillon 1 à 2 min. Cuites, débarrasser bols (1 par personne)."
      - "Finition. Bols nouilles, bouillon. Bok choy, champignons, tofu tranches, tofu cubes. Oignons nouveaux, ciseler finement."
    kcal_per_serving: 286
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
    - oeuf
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 286
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

# Ramen végétarien
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/ramen-vegetarien]]

## Ingrédients (4 personnes)

- 240 g de nouilles japonaises
- 2 bok choy (ou épinards ou blettes)
- 150 g de shiitakes (ou autres champignons)
- 300 g de tofu
- 4 œuf
- 1 botte d'oignons nouveaux
- 1 racine de gingembre
- 1 c.à.s de pâte miso
-  huile d'olive
-  sauce soja

## Préparation

1. Faites cuire les oeufs dans de l’eau portée à ébullition pendant 6 min. Une fois cuits, débarrassez-les dans de l’eau froide.
2. Pour le bouillon, utilisez une grande casserole remplie d’eau. Ajoutez-y les tiges (partie verte) des oignons nouveaux et le gingembre pelé et coupé. Enfin, complétez avec les shiitake coupés en lamelle et la pâte miso.
3. Coupez votre Bok Choy (chou de Chine) dans la longueur, puis faites le revenir quelques minutes dans une poêle avec un filet d’huile d’olive. Une fois grillé, réservez dans une assiette. Dans la même poêle, avec le restant de matière grasse, faites cuire des morceaux de tofu et laissez-les griller doucement. En fin de cuisson, versez un peu de sauce soja sur le tofu.
4. À l’aide d’un écumoire, retirez tous les éléments solides du bouillon. Faites ensuite cuire les nouilles dans le bouillon pendant une à deux minutes. Une fois cuites, débarrassez dans des bols (un par personne)
5. Dans ces bols de nouilles, ajoutez du bouillon. Complétez avec quelques morceaux de Bok Choy, des champignons, quelques tranches de tofu et un oeuf préalablement écalé et coupé en deux. Finalisez avec quelques oignons nouveaux finement ciselés.

 
 

 
 Et voilà, vous avez un délicieux ramen 100% végétarien, à déguster bien chaud ! Bon appétit !
