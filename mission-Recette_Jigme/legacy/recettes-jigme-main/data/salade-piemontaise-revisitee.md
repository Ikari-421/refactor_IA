---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
- ref: mandoline
- ref: fouet
slug: salade-piemontaise-revisitee
title: Salade piémontaise revisitée
lang: fr
description: "Salade piémontaise revisitée : recette italienne avec pommes de terre, oeufs et patate douce, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- salade
- pomme de terre
- rapide
image:
  url:
  alt: Salade piémontaise revisitée
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-piemontaise-revisitee.md
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
    - from: seitan ou tempeh
      to: tofu ferme
      note:
    note: 'Gluten : seitan ou tempeh → tofu ferme.'
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
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Œufs durs de la salade : à retirer, pas de substitut.'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: seitan ou tempeh
      to: seitan
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu soyeux
      to: aquafaba
      note: Mayonnaise à l’aquafaba (jus de pois chiches).
    note: 'Soja : seitan ou tempeh → seitan ; tofu ferme → pois chiches rôtis ; tofu soyeux → aquafaba.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: cornichons au vinaigre
      to: concombre en dés + un filet de jus de citron
      note: 'Cornichons au vinaigre : sulfites possibles.'
    note: Cornichons au vinaigre → concombre citronné.
house_toggle:
house_options: []
histoire: >
  Salade piémontaise : pommes de terre, œufs, cornichons, souvent thon ou jambon,
  mayonnaise. Malgré le nom, c’est un plat français de buffet, pas une insalata
  piemontese d’Asti. « Revisitée » dit une variante de maison.
fun_facts:
- text: >
    Les cornichons et le vinaigre tiennent l’ennui de la mayo : sans acide, c’est
    une purée liée.
  source_name: Usage
  source_url:
- text: >
    Le nom « piémontaise » n’est pas une AOP : on le trouve surtout en France.
  source_name: Usage
  source_url:
wines:
- name: Barbera d'Asti
  producer: Coppo
  origin: Asti, Piémont
  grapes: barbera
  award:
  why: Acidité de barbera — le nom du plat, tanin souple contre la mayo.
- name: Dolcetto d'Alba
  producer: Pio Cesare
  origin: Alba, Piémont
  grapes: dolcetto
  award:
  why: Fruit — les pommes de terre, sans un barolo.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de l'Ecu
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc citronné — la mayo et le cornichon.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - moutarde
    - arachides
    - oeuf
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - passoire
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oeufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: patate douce
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pommes de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: rôti de porc
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: tomates cerises
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: moutarde
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cornichons au vinaigre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites les
      cuir (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chaire
      des pommes de terre). En parallèle, faites bouillir de l’eau pour faire les oeufs durs.
      Une fois que l’eau bout, placez les oeufs dans la casserole et laissez-les pendant 10
      minutes.
    - Cuisson. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les
      jaunes d’oeufs puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit
      en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est
      bien onctueuse.
    - Cuisson. Quand les oeufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les.
      Coupez-les ensuite en deux et séparez le blanc du jaune.
    - Cuisson. Passez les blancs d’oeufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le
      chinois, prenez un nouveau récipient et faite la même chose avec les jaunes d’oeufs.
      N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser le geste à faire.
    - Cuisson. Les pommes de terre doivent maintenant être cuites. Pelez-les et coupez-les en lamelles
      assez épaisses. Découpez également les cornichons en rondelles et le rôti de porc en
      carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la poudre
      de jaunes d’oeuf et la moitié de la poudre de blancs d’oeuf. Finalisez avec un peu de
      mayonnaise et mélangez délicatement le tout. Réservez au frigo.
    - Cuisson. Pour ajouter un peu d’originalité à la recette, passez à la réalisation de chips maison.
      Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise (sans vous
      couper les doigts !). Placez-les ensuite dans la friteuse à 160°C, en prenant soin de
      cuir chaque type de pommes de terre séparément, car les temps de cuisson varient. Une
      fois que vos chips sont bien colorées, déposez-les sur du papier absorbant.
    - Finition. Pour finaliser la recette, découpez quelques tomates cerises et hachez de la ciboulette.
      Placez le tout sur votre salade piémontaise. Complétez avec une peu de poudre d’oeufs
      (jaunes et blancs) et quelques chips pour apporter un côté croustillant à cette recette.
      Et voilà, vous avez réalisez une excellente salade piémontaise revisitée. Elle sera
      parfait en entrée, en plat ou en accompagnement. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites-les cuire (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chair des pommes de terre). En parallèle, faites bouillir de l’eau pour les œufs durs. Une fois que l’eau bout, placez les œufs dans la casserole et laissez-les pendant 10 minutes."
      - "Cuisson. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les jaunes d’œufs, puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est bien onctueuse."
      - "Cuisson. Quand les œufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les. Coupez-les ensuite en deux et séparez le blanc du jaune."
      - "Cuisson. Passez les blancs d’œufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le chinois, prenez un nouveau récipient et faites la même chose avec les jaunes d’œufs."
      - "Cuisson. Quand les pommes de terre sont cuites, pelez-les et coupez-les en lamelles assez épaisses. Découpez également les cornichons en rondelles et le rôti de porc en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la poudre de jaunes d’œuf et la moitié de la poudre de blancs d’œuf. Finalisez avec un peu de mayonnaise et mélangez délicatement. Réservez au frigo."
      - "Cuisson. Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise. Placez-les ensuite dans la friteuse à 160 °C, en cuisant chaque type de pommes de terre séparément, car les temps de cuisson varient. Une fois que vos chips sont bien colorées, déposez-les sur du papier absorbant."
      - "Finition. Découpez quelques tomates cerises et hachez de la ciboulette. Placez le tout sur votre salade piémontaise. Complétez avec un peu de poudre d’œufs (jaunes et blancs) et quelques chips."
      pro:
      - "Placer les pommes de terre dans une grande casserole d’eau. Cuire ; vérifier à la pointe du couteau dans la chair. En parallèle, porter de l’eau à ébullition. Y placer les œufs 10 minutes, jusqu’à œufs durs."
      - "Pendant ce temps, mayonnaise : moutarde, jaunes d’œufs, sel, poivre. Ajouter l’huile végétale petit à petit, fouetter. Texture onctueuse."
      - "Œufs durs cuits : transvaser dans l’eau froide, écaler. Couper en deux. Séparer blancs et jaunes."
      - "Passer les blancs d’œufs au chinois jusqu’à poudre. Nettoyer le chinois. Même geste avec les jaunes, récipient neuf."
      - "Pommes de terre cuites : peler, lamelles assez épaisses. Cornichons en rondelles, rôti de porc en carrés, ajouter. Moitié de poudre de jaunes, moitié de poudre de blancs. Peu de mayonnaise, mélanger délicatement. Réserver au frigo."
      - "Découper les différentes pommes de terre à la mandoline japonaise. Friteuse 160 °C, chaque type séparément, temps variables. Chips colorées : papier absorbant."
      - "Découper quelques tomates cerises, hacher la ciboulette. Poser sur la salade. Compléter avec un peu de poudre d’œufs (jaunes et blancs) et quelques chips."
      cavernes:
      - "Cuisson. Pommes de terre, grande casserole, eau, cuire. Pointe couteau, chair, vérifier. Parallèle, eau, bouillir, œufs durs. Eau bout, œufs, casserole, 10 minutes."
      - "Cuisson. Pendant, mayonnaise. Récipient : moutarde, jaunes d’œufs, sel, poivre. Huile végétale, petit à petit, fouet, battre. Texture onctueuse, mayonnaise prête."
      - "Cuisson. Œufs durs cuits, eau froide, transvaser, écaler. Deux, couper. Blanc, jaune, séparer."
      - "Cuisson. Blancs d’œufs, chinois, poudre. Chinois, nettoyer. Nouveau récipient, jaunes d’œufs, même geste."
      - "Cuisson. Pommes de terre cuites, peler, lamelles assez épaisses. Cornichons, rondelles. Rôti de porc, carrés. Ajouter. Moitié poudre jaunes d’œuf, moitié poudre blancs d’œuf. Peu mayonnaise, mélanger délicatement. Frigo, réserver."
      - "Cuisson. Pommes de terre différentes, mandoline japonaise, découper. Friteuse 160 °C, chaque type séparément, temps varient. Chips colorées, papier absorbant."
      - "Finition. Tomates cerises, découper. Ciboulette, hacher. Salade piémontaise, poser. Peu poudre d’œufs (jaunes, blancs), chips, compléter."
    kcal_per_serving: 280
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
    - moutarde
    - soja
    - arachides
    - oeuf
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oeufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: patate douce
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pommes de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: seitan ou tempeh
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: tomates cerises
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: moutarde
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cornichons au vinaigre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites les
      cuir (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chaire
      des pommes de terre). En parallèle, faites bouillir de l’eau pour faire les oeufs durs.
      Une fois que l’eau bout, placez les oeufs dans la casserole et laissez-les pendant 10
      minutes.
    - Cuisson. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les
      jaunes d’oeufs puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit
      en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est
      bien onctueuse.
    - Cuisson. Quand les oeufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les.
      Coupez-les ensuite en deux et séparez le blanc du jaune.
    - Cuisson. Passez les blancs d’oeufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le
      chinois, prenez un nouveau récipient et faite la même chose avec les jaunes d’oeufs.
      N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser le geste à faire.
    - Cuisson. Les pommes de terre doivent maintenant être cuites. Pelez-les et coupez-les en lamelles
      assez épaisses. Découpez également les cornichons en rondelles et le seitan ou tempeh
      en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la
      poudre de jaunes d’oeuf et la moitié de la poudre de blancs d’oeuf. Finalisez avec un
      peu de mayonnaise et mélangez délicatement le tout. Réservez au frigo.
    - Cuisson. Pour ajouter un peu d’originalité à la recette, passez à la réalisation de chips maison.
      Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise (sans vous
      couper les doigts !). Placez-les ensuite dans la friteuse à 160°C, en prenant soin de
      cuir chaque type de pommes de terre séparément, car les temps de cuisson varient. Une
      fois que vos chips sont bien colorées, déposez-les sur du papier absorbant.
    - Finition. Pour finaliser la recette, découpez quelques tomates cerises et hachez de la ciboulette.
      Placez le tout sur votre salade piémontaise. Complétez avec une peu de poudre d’oeufs
      (jaunes et blancs) et quelques chips pour apporter un côté croustillant à cette recette.
      Et voilà, vous avez réalisez une excellente salade piémontaise revisitée. Elle sera
      parfait en entrée, en plat ou en accompagnement. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites-les cuire (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chair des pommes de terre). En parallèle, faites bouillir de l’eau pour les œufs durs. Une fois que l’eau bout, placez les œufs dans la casserole et laissez-les pendant 10 minutes."
      - "Cuisson. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les jaunes d’œufs, puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est bien onctueuse."
      - "Cuisson. Quand les œufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les. Coupez-les ensuite en deux et séparez le blanc du jaune."
      - "Cuisson. Passez les blancs d’œufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le chinois, prenez un nouveau récipient et faites la même chose avec les jaunes d’œufs."
      - "Cuisson. Quand les pommes de terre sont cuites, pelez-les et coupez-les en lamelles assez épaisses. Découpez également les cornichons en rondelles et le seitan ou tempeh en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la poudre de jaunes d’œuf et la moitié de la poudre de blancs d’œuf. Finalisez avec un peu de mayonnaise et mélangez délicatement. Réservez au frigo."
      - "Cuisson. Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise. Placez-les ensuite dans la friteuse à 160 °C, en cuisant chaque type de pommes de terre séparément, car les temps de cuisson varient. Une fois que vos chips sont bien colorées, déposez-les sur du papier absorbant."
      - "Finition. Découpez quelques tomates cerises et hachez de la ciboulette. Placez le tout sur votre salade piémontaise. Complétez avec un peu de poudre d’œufs (jaunes et blancs) et quelques chips."
      pro:
      - "Placer les pommes de terre dans une grande casserole d’eau. Cuire ; vérifier à la pointe du couteau dans la chair. En parallèle, porter de l’eau à ébullition. Y placer les œufs 10 minutes, jusqu’à œufs durs."
      - "Pendant ce temps, mayonnaise : moutarde, jaunes d’œufs, sel, poivre. Ajouter l’huile végétale petit à petit, fouetter. Texture onctueuse."
      - "Œufs durs cuits : transvaser dans l’eau froide, écaler. Couper en deux. Séparer blancs et jaunes."
      - "Passer les blancs d’œufs au chinois jusqu’à poudre. Nettoyer le chinois. Même geste avec les jaunes, récipient neuf."
      - "Pommes de terre cuites : peler, lamelles assez épaisses. Cornichons en rondelles, seitan ou tempeh en carrés, ajouter. Moitié de poudre de jaunes, moitié de poudre de blancs. Peu de mayonnaise, mélanger délicatement. Réserver au frigo."
      - "Découper les différentes pommes de terre à la mandoline japonaise. Friteuse 160 °C, chaque type séparément, temps variables. Chips colorées : papier absorbant."
      - "Découper quelques tomates cerises, hacher la ciboulette. Poser sur la salade. Compléter avec un peu de poudre d’œufs (jaunes et blancs) et quelques chips."
      cavernes:
      - "Cuisson. Pommes de terre, grande casserole, eau, cuire. Pointe couteau, chair, vérifier. Parallèle, eau, bouillir, œufs durs. Eau bout, œufs, casserole, 10 minutes."
      - "Cuisson. Pendant, mayonnaise. Récipient : moutarde, jaunes d’œufs, sel, poivre. Huile végétale, petit à petit, fouet, battre. Texture onctueuse, mayonnaise prête."
      - "Cuisson. Œufs durs cuits, eau froide, transvaser, écaler. Deux, couper. Blanc, jaune, séparer."
      - "Cuisson. Blancs d’œufs, chinois, poudre. Chinois, nettoyer. Nouveau récipient, jaunes d’œufs, même geste."
      - "Cuisson. Pommes de terre cuites, peler, lamelles assez épaisses. Cornichons, rondelles. Seitan ou tempeh, carrés. Ajouter. Moitié poudre jaunes d’œuf, moitié poudre blancs d’œuf. Peu mayonnaise, mélanger délicatement. Frigo, réserver."
      - "Cuisson. Pommes de terre différentes, mandoline japonaise, découper. Friteuse 160 °C, chaque type séparément, temps varient. Chips colorées, papier absorbant."
      - "Finition. Tomates cerises, découper. Ciboulette, hacher. Salade piémontaise, poser. Peu poudre d’œufs (jaunes, blancs), chips, compléter."
    kcal_per_serving: 311
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    - vegan
    allergens:
    - moutarde
    - soja
    - arachides
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tofu soyeux
      group: null
      scale: true
      optional: false
      to_taste: false
    - qty: null
      unit: null
      item: curcuma
      group: null
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: patate douce
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pommes de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: seitan ou tempeh
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: tomates cerises
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: moutarde
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cornichons au vinaigre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites-les cuire (vérifiez la cuisson en enfonçant la pointe d’un couteau dans la chair des pommes de terre).
    - Mayonnaise. Pendant ce temps, préparez la mayonnaise végétale. Mixez le tofu soyeux avec la moutarde, salez et poivrez. Ajoutez ensuite l’huile petit à petit en mixant jusqu’à obtenir une texture bien onctueuse.
    - Tofu. Égouttez le tofu ferme, épongez-le puis coupez-le en petits dés (il remplace les œufs durs). Saupoudrez-en la moitié de curcuma pour rappeler le jaune.
    - Tofu. Réservez les dés nature et les dés au curcuma dans deux récipients séparés.
    - Assemblage. Les pommes de terre doivent maintenant être cuites. Pelez-les et coupez-les en lamelles assez épaisses. Découpez également les cornichons en rondelles et le seitan ou tempeh en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié des dés de tofu (nature et au curcuma). Finalisez avec un peu de mayonnaise et mélangez délicatement le tout. Réservez au frigo.
    - Cuisson. Pour ajouter un peu d’originalité à la recette, passez à la réalisation de chips maison.
      Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise (sans vous
      couper les doigts !). Placez-les ensuite dans la friteuse à 160°C, en prenant soin de
      cuir chaque type de pommes de terre séparément, car les temps de cuisson varient. Une
      fois que vos chips sont bien colorées, déposez-les sur du papier absorbant.
    - Finition. Pour finaliser la recette, découpez quelques tomates cerises et hachez de la ciboulette. Placez le tout sur votre salade piémontaise. Complétez avec le reste des dés de tofu et quelques chips pour apporter un côté croustillant. Et voilà, votre salade piémontaise revisitée est prête, en entrée, en plat ou en accompagnement. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites-les cuire (vérifiez la cuisson en enfonçant la pointe d’un couteau dans la chair des pommes de terre)."
      - "Mayonnaise. Pendant ce temps, préparez la mayonnaise végétale. Mixez le tofu soyeux avec la moutarde, salez et poivrez. Ajoutez ensuite l’huile petit à petit en mixant jusqu’à obtenir une texture bien onctueuse."
      - "Tofu. Égouttez le tofu ferme, épongez-le puis coupez-le en petits dés (il remplace les œufs durs). Saupoudrez-en la moitié de curcuma pour rappeler le jaune."
      - "Tofu. Réservez les dés nature et les dés au curcuma dans deux récipients séparés."
      - "Assemblage. Quand les pommes de terre sont cuites, pelez-les et coupez-les en lamelles assez épaisses. Découpez également les cornichons en rondelles et le seitan ou tempeh en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié des dés de tofu (nature et au curcuma). Finalisez avec un peu de mayonnaise et mélangez délicatement. Réservez au frigo."
      - "Cuisson. Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise. Placez-les ensuite dans la friteuse à 160 °C, en cuisant chaque type de pommes de terre séparément, car les temps de cuisson varient. Une fois que vos chips sont bien colorées, déposez-les sur du papier absorbant."
      - "Finition. Découpez quelques tomates cerises et hachez de la ciboulette. Placez le tout sur votre salade piémontaise. Complétez avec le reste des dés de tofu et quelques chips."
      pro:
      - "Placer les pommes de terre dans une grande casserole d’eau. Cuire ; vérifier à la pointe du couteau dans la chair."
      - "Pendant ce temps, mayonnaise végétale : mixer le tofu soyeux avec la moutarde, sel, poivre. Ajouter l’huile petit à petit, mixer jusqu’à texture onctueuse."
      - "Égoutter le tofu ferme, éponger, couper en petits dés (à la place des œufs durs). Saupoudrer la moitié de curcuma pour rappeler le jaune."
      - "Réserver les dés nature et les dés au curcuma dans deux récipients séparés."
      - "Pommes de terre cuites : peler, lamelles assez épaisses. Cornichons en rondelles, seitan ou tempeh en carrés, ajouter. Moitié des dés de tofu (nature et au curcuma). Peu de mayonnaise, mélanger délicatement. Réserver au frigo."
      - "Découper les différentes pommes de terre à la mandoline japonaise. Friteuse 160 °C, chaque type séparément, temps variables. Chips colorées : papier absorbant."
      - "Découper quelques tomates cerises, hacher la ciboulette. Poser sur la salade. Compléter avec le reste des dés de tofu et quelques chips."
      cavernes:
      - "Cuisson. Pommes de terre, grande casserole, eau, cuire. Pointe couteau, chair, vérifier."
      - "Mayonnaise. Pendant, mayonnaise végétale. Tofu soyeux, moutarde, mixer, sel, poivre. Huile, petit à petit, mixer, texture onctueuse."
      - "Tofu. Tofu ferme, égoutter, éponger, petits dés (remplace œufs durs). Moitié, curcuma, saupoudrer, rappeler jaune."
      - "Tofu. Dés nature, dés curcuma, deux récipients, réserver."
      - "Assemblage. Pommes de terre cuites, peler, lamelles assez épaisses. Cornichons, rondelles. Seitan ou tempeh, carrés. Ajouter. Moitié dés tofu (nature, curcuma). Peu mayonnaise, mélanger délicatement. Frigo, réserver."
      - "Cuisson. Pommes de terre différentes, mandoline japonaise, découper. Friteuse 160 °C, chaque type séparément, temps varient. Chips colorées, papier absorbant."
      - "Finition. Tomates cerises, découper. Ciboulette, hacher. Salade piémontaise, poser. Reste dés tofu, chips, compléter."
    kcal_per_serving: 311
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - moutarde
    - poisson
    - arachides
    - oeuf
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oeufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: patate douce
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pommes de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: cabillaud
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 150
      unit: g
      item: tomates cerises
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: moutarde
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cornichons au vinaigre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites les
      cuir (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chaire
      des pommes de terre). En parallèle, faites bouillir de l’eau pour faire les oeufs durs.
      Une fois que l’eau bout, placez les oeufs dans la casserole et laissez-les pendant 10
      minutes.
    - Cuisson. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les
      jaunes d’oeufs puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit
      en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est
      bien onctueuse.
    - Cuisson. Quand les oeufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les.
      Coupez-les ensuite en deux et séparez le blanc du jaune.
    - Cuisson. Passez les blancs d’oeufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le
      chinois, prenez un nouveau récipient et faite la même chose avec les jaunes d’oeufs.
      N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser le geste à faire.
    - Cuisson. Les pommes de terre doivent maintenant être cuites. Pelez-les et coupez-les en lamelles
      assez épaisses. Découpez également les cornichons en rondelles et le cabillaud en carrés,
      puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la poudre de jaunes
      d’oeuf et la moitié de la poudre de blancs d’oeuf. Finalisez avec un peu de mayonnaise
      et mélangez délicatement le tout. Réservez au frigo.
    - Cuisson. Pour ajouter un peu d’originalité à la recette, passez à la réalisation de chips maison.
      Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise (sans vous
      couper les doigts !). Placez-les ensuite dans la friteuse à 160°C, en prenant soin de
      cuir chaque type de pommes de terre séparément, car les temps de cuisson varient. Une
      fois que vos chips sont bien colorées, déposez-les sur du papier absorbant.
    - Finition. Pour finaliser la recette, découpez quelques tomates cerises et hachez de la ciboulette.
      Placez le tout sur votre salade piémontaise. Complétez avec une peu de poudre d’oeufs
      (jaunes et blancs) et quelques chips pour apporter un côté croustillant à cette recette.
      Et voilà, vous avez réalisez une excellente salade piémontaise revisitée. Elle sera
      parfait en entrée, en plat ou en accompagnement. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites-les cuire (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chair des pommes de terre). En parallèle, faites bouillir de l’eau pour les œufs durs. Une fois que l’eau bout, placez les œufs dans la casserole et laissez-les pendant 10 minutes."
      - "Cuisson. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les jaunes d’œufs, puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est bien onctueuse."
      - "Cuisson. Quand les œufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les. Coupez-les ensuite en deux et séparez le blanc du jaune."
      - "Cuisson. Passez les blancs d’œufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le chinois, prenez un nouveau récipient et faites la même chose avec les jaunes d’œufs."
      - "Cuisson. Quand les pommes de terre sont cuites, pelez-les et coupez-les en lamelles assez épaisses. Découpez également les cornichons en rondelles et le cabillaud en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la poudre de jaunes d’œuf et la moitié de la poudre de blancs d’œuf. Finalisez avec un peu de mayonnaise et mélangez délicatement. Réservez au frigo."
      - "Cuisson. Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise. Placez-les ensuite dans la friteuse à 160 °C, en cuisant chaque type de pommes de terre séparément, car les temps de cuisson varient. Une fois que vos chips sont bien colorées, déposez-les sur du papier absorbant."
      - "Finition. Découpez quelques tomates cerises et hachez de la ciboulette. Placez le tout sur votre salade piémontaise. Complétez avec un peu de poudre d’œufs (jaunes et blancs) et quelques chips."
      pro:
      - "Placer les pommes de terre dans une grande casserole d’eau. Cuire ; vérifier à la pointe du couteau dans la chair. En parallèle, porter de l’eau à ébullition. Y placer les œufs 10 minutes, jusqu’à œufs durs."
      - "Pendant ce temps, mayonnaise : moutarde, jaunes d’œufs, sel, poivre. Ajouter l’huile végétale petit à petit, fouetter. Texture onctueuse."
      - "Œufs durs cuits : transvaser dans l’eau froide, écaler. Couper en deux. Séparer blancs et jaunes."
      - "Passer les blancs d’œufs au chinois jusqu’à poudre. Nettoyer le chinois. Même geste avec les jaunes, récipient neuf."
      - "Pommes de terre cuites : peler, lamelles assez épaisses. Cornichons en rondelles, cabillaud en carrés, ajouter. Moitié de poudre de jaunes, moitié de poudre de blancs. Peu de mayonnaise, mélanger délicatement. Réserver au frigo."
      - "Découper les différentes pommes de terre à la mandoline japonaise. Friteuse 160 °C, chaque type séparément, temps variables. Chips colorées : papier absorbant."
      - "Découper quelques tomates cerises, hacher la ciboulette. Poser sur la salade. Compléter avec un peu de poudre d’œufs (jaunes et blancs) et quelques chips."
      cavernes:
      - "Cuisson. Pommes de terre, grande casserole, eau, cuire. Pointe couteau, chair, vérifier. Parallèle, eau, bouillir, œufs durs. Eau bout, œufs, casserole, 10 minutes."
      - "Cuisson. Pendant, mayonnaise. Récipient : moutarde, jaunes d’œufs, sel, poivre. Huile végétale, petit à petit, fouet, battre. Texture onctueuse, mayonnaise prête."
      - "Cuisson. Œufs durs cuits, eau froide, transvaser, écaler. Deux, couper. Blanc, jaune, séparer."
      - "Cuisson. Blancs d’œufs, chinois, poudre. Chinois, nettoyer. Nouveau récipient, jaunes d’œufs, même geste."
      - "Cuisson. Pommes de terre cuites, peler, lamelles assez épaisses. Cornichons, rondelles. Cabillaud, carrés. Ajouter. Moitié poudre jaunes d’œuf, moitié poudre blancs d’œuf. Peu mayonnaise, mélanger délicatement. Frigo, réserver."
      - "Cuisson. Pommes de terre différentes, mandoline japonaise, découper. Friteuse 160 °C, chaque type séparément, temps varient. Chips colorées, papier absorbant."
      - "Finition. Tomates cerises, découper. Ciboulette, hacher. Salade piémontaise, poser. Peu poudre d’œufs (jaunes, blancs), chips, compléter."
    kcal_per_serving: 280
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

# Salade piémontaise revisitée
**Équipement :** [[fouet]] · [[mandoline]] · [[friteuse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-piemontaise-revisitee]]

## Ingrédients (4 personnes)

- 500 g de pommes de terre
- 6 oeufs
- 1 patate douce
- 3 pommes de terre violette
- 150 g de rôti de porc
- 1 poignée de tomates cerises
-  ciboulette fraîche
-  huile d'arachide
-  moutarde
-  cornichons au vinaigre

## Préparation

1. Placez vos pommes de terre dans une grande casserole remplie d’eau, puis faites les cuir (vous pouvez vérifier la cuisson en enfonçant la pointe d’un couteau dans la chaire des pommes de terre). En parallèle, faites bouillir de l’eau pour faire les oeufs durs. Une fois que l’eau bout, placez les oeufs dans la casserole et laissez-les pendant 10 minutes.
2. Pendant ce temps, préparez la mayonnaise. Dans un récipient, déposez la moutarde, les jaunes d’oeufs puis salez et poivrez. Ajoutez ensuite de l’huile végétale petit à petit en battant le tout à l’aide d’un fouet. La mayonnaise est prête quand la texture est bien onctueuse.
3. Quand les oeufs durs sont cuits, transvasez-les dans de l’eau froide, puis écalez-les. Coupez-les ensuite en deux et séparez le blanc du jaune.
4. Passez les blancs d’oeufs au chinois afin d’obtenir une sorte de poudre. Nettoyez le chinois, prenez un nouveau récipient et faite la même chose avec les jaunes d’oeufs. N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser le geste à faire.
5. Les pommes de terre doivent maintenant être cuites. Pelez-les et coupez-les en lamelles assez épaisses. Découpez également les cornichons en rondelles et le rôti de porc en carrés, puis ajoutez le tout aux pommes de terre. Complétez avec la moitié de la poudre de jaunes d’oeuf et la moitié de la poudre de blancs d’oeuf. Finalisez avec un peu de mayonnaise et mélangez délicatement le tout. Réservez au frigo.
6. Pour ajouter un peu d’originalité à la recette, passez à la réalisation de chips maison. Découpez les différentes pommes de terre à l’aide d’une mandoline japonaise (sans vous couper les doigts !). Placez-les ensuite dans la friteuse à 160°C, en prenant soin de cuir chaque type de pommes de terre séparément, car les temps de cuisson varient. Une fois que vos chips sont bien colorées, déposez-les sur du papier absorbant.
7. Pour finaliser la recette, découpez quelques tomates cerises et hachez de la ciboulette. Placez le tout sur votre salade piémontaise. Complétez avec une peu de poudre d’oeufs (jaunes et blancs) et quelques chips pour apporter un côté croustillant à cette recette.

 
 

 
 Et voilà, vous avez réalisez une excellente salade piémontaise revisitée. Elle sera parfait en entrée, en plat ou en accompagnement. Bon appétit !
