---
schema: recette-web-jigme/v2
slug: clafoutis-poires-et-marrons
title: Clafoutis poires et marrons
lang: fr
description: "Clafoutis poires et marrons : recette française avec poire, sucre et oeuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- goûter
- poire
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/clafoutis-poires-et-marrons.jpg
  alt: Clafoutis poires et marrons
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/clafoutis-poires-et-marrons.md
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; lait d''avoine ou soja → lait d''avoine ; crème de soja ou avoine → crème d''avoine.'
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
histoire: 'Dessert du Limousin : fruits dans une pâte à clafir (« remplir », occitan). Le clafoutis aux
  cerises se fixe vers le milieu du XIXe s. Aux poires et marrons, c’est une flaugnarde d’hiver, pas le
  clafoutis canon.

  '
fun_facts:
- text: "Hors cerises, le même gâteau s’appelle souvent flaugnarde ou flognarde."
  source_name: Grokipedia, Clafoutis
  source_url: https://grokipedia.com/page/Clafoutis
- text: "Tradition limousine : cerises non dénoyautées, un goût d’amande du noyau."
  source_name: Grokipedia, Clafoutis
  source_url: https://grokipedia.com/page/Clafoutis
wines:
- name: Monbazillac
  producer: Château Belingard
  origin: Monbazillac, Bergerac
  grapes: sémillon, muscadelle
  award:
  why: Miel, poire — le fruit et le marron, sucrosité alignée.
- name: Muscat de Rivesaltes
  producer: Domaine Lafage
  origin: Perpignan, Roussillon
  grapes: muscat
  award:
  why: Raisin frais — plus léger qu’un liquoreux sur la pâte à œufs.
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: moscato bianco
  award:
  why: Bulles douces, fleur — le clafoutis tiède, sans lourdeur.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 70
      cook_min: 50
      rest_min: 0
      total_min: 120
    equipment: &id002
    - four
    - casserole
    - saladier
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: poire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 270
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: marron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, versez l’eau et la moitié du sucre, puis allumez le feu. Pendant
      que le sirop chauffe, épluchez vos poires. Plongez les ensuite l’eau sucrée et laissez
      les cuire pendant environ 20 minutes.
    - Cuisson. Placez les marrons dans un récipient allant au four. Idéalement, choisissez un récipient
      muni d’un couvercle, ça évitera de salir votre four. Enfournez les marrons à 180°C pendant
      20 minutes.
    - Cuisson. Dans un récipient, versez le reste du sucre, vos oeufs, la farine, le lait et la crème
      liquide. Mélangez bien jusqu’à obtenir une pâte homogène et sans grumeaux. Enfin, ajoutez-y
      quelques noix concassées.
    - Cuisson. Quand vos poires sont cuites, coupez-les en deux et retirez les pépins (à l’aide d’une
      cuillère, comme dans la vidéo ci-dessous). Vous pouvez ensuite couper les poires en
      cubes puis les placer dans votre appareil à clafoutis.
    - Cuisson. Une fois que vos marrons sont cuits et qu’ils ont un peu refroidit, épluchez-les. Pour
      que ce soit plus facile, réalisez au préalable une petite entaille dans la peau du marron
      à l’aide d’un couteau. Concassez grossièrement ces marrons et incorporez-les a votre
      appareil.
    - Finition. Mélangez bien votre appareil, puis versez-le dans un plat beurré et fariné. Placez le
      tout au four à 180°C pendant 30 minutes. Laissez refroidir votre clafoutis avant de
      le dévorer en dessert ou au goûter. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez l’eau et la moitié du sucre, puis allumez le feu. Pendant que le sirop chauffe, épluchez les poires. Plongez-les ensuite dans l’eau sucrée et laissez-les cuire pendant environ 20 minutes."
      - "Cuisson. Placez les marrons dans un récipient allant au four. Idéalement, choisissez un récipient muni d’un couvercle, cela évitera de salir votre four. Enfournez les marrons à 180 °C pendant 20 minutes."
      - "Cuisson. Dans un récipient, versez le reste du sucre, les œufs, la farine, le lait et la crème liquide. Mélangez bien jusqu’à obtenir une pâte homogène et sans grumeaux. Ajoutez-y quelques noix concassées."
      - "Cuisson. Quand les poires sont cuites, coupez-les en deux et retirez les pépins à l’aide d’une cuillère. Coupez ensuite les poires en cubes puis placez-les dans l’appareil à clafoutis."
      - "Cuisson. Une fois que les marrons sont cuits et qu’ils ont un peu refroidi, épluchez-les. Pour que ce soit plus facile, réalisez au préalable une petite entaille dans la peau du marron à l’aide d’un couteau. Concassez grossièrement ces marrons et incorporez-les à votre appareil."
      - "Finition. Mélangez bien votre appareil, puis versez-le dans un plat beurré et fariné. Placez le tout au four à 180 °C pendant 30 minutes. Laissez refroidir le clafoutis."
      pro:
      - "Verser l’eau et la moitié du sucre dans une casserole. Allumer le feu. Pendant que le sirop chauffe, éplucher les poires. Les plonger dans l’eau sucrée. Cuire environ 20 minutes."
      - "Placer les marrons dans un récipient allant au four, idéalement avec couvercle. Enfourner à 180 °C pendant 20 minutes."
      - "Verser le reste du sucre, les œufs, la farine, le lait et la crème liquide. Mélanger jusqu’à pâte homogène, sans grumeaux. Ajouter quelques noix concassées."
      - "Poires cuites : couper en deux, retirer les pépins à la cuillère. Couper en cubes. Placer dans l’appareil."
      - "Marrons cuits et un peu refroidis : éplucher (petite entaille dans la peau au couteau). Concasser grossièrement. Incorporer à l’appareil."
      - "Mélanger l’appareil. Verser dans un plat beurré et fariné. Four 180 °C pendant 30 minutes. Laisser refroidir."
      cavernes:
      - "Cuisson. Eau, moitié sucre, casserole. Feu. Pendant sirop, poires, éplucher. Eau sucrée, plonger. Environ 20 min."
      - "Cuisson. Marrons, récipient four. Idéalement couvercle. 180 °C 20 min."
      - "Cuisson. Reste sucre, œufs, farine, lait, crème liquide. Mélanger, pâte homogène, sans grumeaux. Noix concassées."
      - "Cuisson. Poires cuites, couper deux. Pépins, cuillère. Cubes. Appareil."
      - "Cuisson. Marrons cuits, peu refroidi, éplucher. Entaille peau couteau. Concasser gros. Appareil."
      - "Finition. Appareil, mélanger. Plat beurré fariné. 180 °C 30 min. Refroidir."
    kcal_per_serving: 532
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 532
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: poire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 270
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: marron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, versez l’eau et la moitié du sucre, puis allumez le feu. Pendant
      que le sirop chauffe, épluchez vos poires. Plongez les ensuite l’eau sucrée et laissez
      les cuire pendant environ 20 minutes.
    - Cuisson. Placez les marrons dans un récipient allant au four. Idéalement, choisissez un récipient
      muni d’un couvercle, ça évitera de salir votre four. Enfournez les marrons à 180°C pendant
      20 minutes.
    - Cuisson. Dans un récipient, versez le reste du sucre, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, la farine, le lait d'avoine ou soja et la crème de soja
      ou avoine. Mélangez bien jusqu’à obtenir une pâte homogène et sans grumeaux. Enfin,
      ajoutez-y quelques noix concassées.
    - Cuisson. Quand vos poires sont cuites, coupez-les en deux et retirez les pépins (à l’aide d’une
      cuillère, comme dans la vidéo ci-dessous). Vous pouvez ensuite couper les poires en
      cubes puis les placer dans votre appareil à clafoutis.
    - Cuisson. Une fois que vos marrons sont cuits et qu’ils ont un peu refroidit, épluchez-les. Pour
      que ce soit plus facile, réalisez au préalable une petite entaille dans la peau du marron
      à l’aide d’un couteau. Concassez grossièrement ces marrons et incorporez-les a votre
      appareil.
    - Finition. Mélangez bien votre appareil, puis versez-le dans un plat graissé avec de la margarine végétale et fariné. Placez le
      tout au four à 180°C pendant 30 minutes. Laissez refroidir votre clafoutis avant de
      le dévorer en dessert ou au goûter. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez l’eau et la moitié du sucre, puis allumez le feu. Pendant que le sirop chauffe, épluchez les poires. Plongez-les ensuite dans l’eau sucrée et laissez-les cuire pendant environ 20 minutes."
      - "Cuisson. Placez les marrons dans un récipient allant au four. Idéalement, choisissez un récipient muni d’un couvercle, cela évitera de salir votre four. Enfournez les marrons à 180 °C pendant 20 minutes."
      - "Cuisson. Dans un récipient, versez le reste du sucre, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, la farine, le lait d’avoine ou soja et la crème de soja ou avoine. Mélangez bien jusqu’à obtenir une pâte homogène et sans grumeaux. Ajoutez-y quelques noix concassées."
      - "Cuisson. Quand les poires sont cuites, coupez-les en deux et retirez les pépins à l’aide d’une cuillère. Coupez ensuite les poires en cubes puis placez-les dans l’appareil à clafoutis."
      - "Cuisson. Une fois que les marrons sont cuits et qu’ils ont un peu refroidi, épluchez-les. Pour que ce soit plus facile, réalisez au préalable une petite entaille dans la peau du marron à l’aide d’un couteau. Concassez grossièrement ces marrons et incorporez-les à votre appareil."
      - "Finition. Mélangez bien votre appareil, puis versez-le dans un plat graissé avec de la margarine végétale et fariné. Placez le tout au four à 180 °C pendant 30 minutes. Laissez refroidir le clafoutis."
      pro:
      - "Verser l’eau et la moitié du sucre dans une casserole. Allumer le feu. Pendant que le sirop chauffe, éplucher les poires. Les plonger dans l’eau sucrée. Cuire environ 20 minutes."
      - "Placer les marrons dans un récipient allant au four, idéalement avec couvercle. Enfourner à 180 °C pendant 20 minutes."
      - "Verser le reste du sucre, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, la farine, le lait d’avoine ou soja et la crème de soja ou avoine. Mélanger jusqu’à pâte homogène, sans grumeaux. Ajouter quelques noix concassées."
      - "Poires cuites : couper en deux, retirer les pépins à la cuillère. Couper en cubes. Placer dans l’appareil."
      - "Marrons cuits et un peu refroidis : éplucher (petite entaille dans la peau au couteau). Concasser grossièrement. Incorporer à l’appareil."
      - "Mélanger l’appareil. Verser dans un plat graissé à la margarine végétale et fariné. Four 180 °C pendant 30 minutes. Laisser refroidir."
      cavernes:
      - "Cuisson. Eau, moitié sucre, casserole. Feu. Pendant sirop, poires, éplucher. Eau sucrée, plonger. Environ 20 min."
      - "Cuisson. Marrons, récipient four. Idéalement couvercle. 180 °C 20 min."
      - "Cuisson. Reste sucre, œuf lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, farine, lait d’avoine ou soja, crème soja ou avoine. Mélanger, pâte homogène, sans grumeaux. Noix concassées."
      - "Cuisson. Poires cuites, couper deux. Pépins, cuillère. Cubes. Appareil."
      - "Cuisson. Marrons cuits, peu refroidi, éplucher. Entaille peau couteau. Concasser gros. Appareil."
      - "Finition. Appareil, mélanger. Plat graissé margarine végétale, fariné. 180 °C 30 min. Refroidir."
    kcal_per_serving: 429
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 532
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

# Clafoutis poires et marrons
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/clafoutis-poires-et-marrons]]

## Ingrédients (6 personnes)

- 4 poire
- 270 g de sucre
- 5 oeuf
- 25 cl de lait
- 25 cl de crème liquide
- 100 g de farine
- 200 g de marron
- 30 g de noix
- 1 L d'eau

## Préparation

1. Dans une casserole, versez l’eau et la moitié du sucre, puis allumez le feu. Pendant que le sirop chauffe, épluchez vos poires. Plongez les ensuite l’eau sucrée et laissez les cuire pendant environ 20 minutes.
2. Placez les marrons dans un récipient allant au four. Idéalement, choisissez un récipient muni d’un couvercle, ça évitera de salir votre four. Enfournez les marrons à 180°C pendant 20 minutes.
3. Dans un récipient, versez le reste du sucre, vos oeufs, la farine, le lait et la crème liquide. Mélangez bien jusqu’à obtenir une pâte homogène et sans grumeaux. Enfin, ajoutez-y quelques noix concassées.
4. Quand vos poires sont cuites, coupez-les en deux et retirez les pépins (à l’aide d’une cuillère, comme dans la vidéo ci-dessous). Vous pouvez ensuite couper les poires en cubes puis les placer dans votre appareil à clafoutis.
5. Une fois que vos marrons sont cuits et qu’ils ont un peu refroidit, épluchez-les. Pour que ce soit plus facile, réalisez au préalable une petite entaille dans la peau du marron à l’aide d’un couteau. Concassez grossièrement ces marrons et incorporez-les a votre appareil.
6. Mélangez bien votre appareil, puis versez-le dans un plat beurré et fariné. Placez le tout au four à 180°C pendant 30 minutes.

 
 

 
 Laissez refroidir votre clafoutis avant de le dévorer en dessert ou au goûter. Bon appétit !
