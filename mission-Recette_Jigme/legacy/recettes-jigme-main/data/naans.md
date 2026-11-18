---
schema: recette-web-jigme/v2
slug: naans
title: Naans
lang: fr
description: "Naans : recette française avec farine, levure et lait à température ambiante, pour 4 personnes. Version maison. Facile à suivre."
cuisine: indienne
category: salé
tags:
- salé
- boulangerie
- végétarien
- farine
image:
  url:
  alt: Naans
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/naans.md
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: yaourt de soja nature
      to: yaourt de coco
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; yaourt de soja nature → yaourt
      de coco.'
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
histoire: 'Pain plat levé, cuit au tandoor ou à la poêle. Origine persane ou d’Asie centrale, largement
  repris dans le sous-continent indien. Mie légère, taches dorées de cuisson vive.

  '
fun_facts:
- text: 'L’ail naan est une variante indienne devenue mondiale ; le naan nature se contente de farine,
    levure, yaourt ou lait.

    '
  source_name: Grokipedia, Naan
  source_url: https://grokipedia.com/page/Naan
- text: 'Sans tandoor, une poêle très chaude puis un passage sous le gril donne les cloques ; trop de
    farine, et ça reste un galette.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Naans ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Naan
wines:
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — le pain chaud et un curry, sans un rouge tannique.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — le naan à l’ail, sans un blanc aromatique envahissant.
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire — le yaourt de la pâte et une garniture épicée.
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
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 40
      rest_min: 90
      total_min: 160
    equipment: &id002
    - poêle
    - saladier
    - rouleau à pâtisserie
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 9
      unit: g
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: lait à température ambiante
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: yaourt nature
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
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Repos. Dans un petit récipient, versez le lait puis la levure et laissez reposer pendant une
      dizaine de minutes, le temps qu’une croûte se forme à la surface du lait.
    - Mélange. Pendant ce temps, versez dans un saladier la farine, le sel, le sucre et mélangez le
      tout. Rajoutez ensuite le mélange lait/levure, le yaourt nature et un petit peu d’huile
      végétale. Mélangez, puis travaillez l’appareil avec les mains.
    - Cuisson. Huilez un saladier et mettez-y la pâte, puis recouvrez d’un torchon et laissez lever
      dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné,
      coupez la pâte en morceaux et étalez-les à l’aide d’un rouleau. C’est à ce moment que
      vous pouvez ajouter la garniture de votre choix (fromage, ail, herbes, graines…), mais
      vous pouvez tout aussi bien les faire nature. Placez la garniture au centre de votre
      pâte et enfermez-la en rabattant les bords au centre, puis étalez à nouveau avec un
      rouleau.
    - Finition. Pour la cuisson, faites chauffer une poêle à feu très vif et ajoutez-y un peu de matière
      grasse. Quand la poêle est bien chaude, ajoutez-y les naans un par un. Comptez environ
      5 minutes de cuisson par face, mais n’hésitez pas à les soulever régulièrement pour
      contrôler. À la fin de la cuisson, ajoutez une noix de beurre et étalez-la sur le naan.
      C’est prêt ! Vos naans seront parfaits pour accompagner un Dhal de lentilles ou même
      un poulet tikka masala. Vous pouvez aussi les manger seuls si vous le souhaitez, c’est
      délicieux !
    steps_niveaux:
      amateur:
      - "Repos. Dans un petit récipient, versez le lait puis la levure et laissez reposer pendant une dizaine de minutes, le temps qu’une croûte se forme à la surface du lait."
      - "Mélange. Pendant ce temps, versez dans un saladier la farine, le sel, le sucre et mélangez le tout. Rajoutez ensuite le mélange lait/levure, le yaourt nature et un petit peu d’huile végétale. Mélangez, puis travaillez l’appareil avec les mains."
      - "Cuisson. Huilez un saladier et mettez-y la pâte, puis recouvrez d’un torchon et laissez lever dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné, coupez la pâte en morceaux et étalez-les à l’aide d’un rouleau. C’est à ce moment que vous pouvez ajouter la garniture de votre choix (fromage, ail, herbes, graines…), mais vous pouvez tout aussi bien les faire nature. Placez la garniture au centre de votre pâte et enfermez-la en rabattant les bords au centre, puis étalez à nouveau avec un rouleau."
      - "Finition. Pour la cuisson, faites chauffer une poêle à feu très vif et ajoutez-y un peu de matière grasse. Quand la poêle est bien chaude, ajoutez-y les naans un par un. Comptez environ 5 minutes de cuisson par face, mais n’hésitez pas à les soulever régulièrement pour contrôler. À la fin de la cuisson, ajoutez une noix de beurre et étalez-la sur le naan. C’est prêt ! Vos naans seront parfaits pour accompagner un Dhal de lentilles ou même un poulet tikka masala. Vous pouvez aussi les manger seuls si vous le souhaitez, c’est délicieux !"
      pro:
      - "Verser le lait puis la levure dans un petit récipient. Laisser reposer une dizaine de minutes, jusqu’à formation d’une croûte à la surface du lait."
      - "Verser farine, sel et sucre dans un saladier. Mélanger. Rajouter le mélange lait/levure, le yaourt nature et un petit peu d’huile végétale. Mélanger, puis travailler l’appareil à la main."
      - "Huiler un saladier. Y mettre la pâte. Recouvrir d’un torchon. Laisser lever dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné, couper la pâte en morceaux. Étaler au rouleau. Garniture au choix (fromage, ail, herbes, graines…) ou nature. Placer la garniture au centre. Rabattre les bords au centre. Étaler à nouveau au rouleau."
      - "Chauffer une poêle à feu très vif. Ajouter un peu de matière grasse. Poêle bien chaude : ajouter les naans un par un. Environ 5 minutes par face, soulever régulièrement pour contrôler. En fin de cuisson, ajouter une noix de beurre et l’étaler sur le naan."
      cavernes:
      - "Repos. Petit récipient, lait, verser, puis levure. Reposer dizaine minutes. Croûte, surface lait."
      - "Mélange. Pendant. Saladier, farine, sel, sucre, verser, mélanger. Mélange lait/levure, yaourt nature, peu huile végétale, rajouter. Mélanger. Mains, travailler appareil."
      - "Cuisson. Saladier, huiler. Pâte, mettre. Torchon, recouvrir. Endroit légèrement chaud, lever, bonne heure. Plan travail fariné. Pâte, couper morceaux. Rouleau, étaler. Garniture choix (fromage, ail, herbes, graines…), option, ou nature. Garniture, centre pâte. Bords, rabattre centre, enfermer. Rouleau, étaler encore."
      - "Finition. Poêle, feu très vif, chauffer. Peu matière grasse, ajouter. Poêle bien chaude. Naans, 1 par 1. Environ 5 min par face. Soulever régulier, contrôler. Fin cuisson, noix beurre, étaler naan. Prêt. Dhal lentilles, ou poulet tikka masala. Ou seuls."
    kcal_per_serving: 260
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 260
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 9
      unit: g
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: yaourt de soja nature
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
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Repos. Dans un petit récipient, versez le lait d’avoine ou de soja puis la levure et laissez reposer pendant une
      dizaine de minutes, le temps qu’une croûte se forme à la surface du mélange.
    - Mélange. Pendant ce temps, versez dans un saladier la farine, le sel, le sucre et mélangez le
      tout. Rajoutez ensuite le mélange lait/levure, le yaourt de soja nature et un petit
      peu d’huile végétale. Mélangez, puis travaillez l’appareil avec les mains.
    - Cuisson. Huilez un saladier et mettez-y la pâte, puis recouvrez d’un torchon et laissez lever
      dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné,
      coupez la pâte en morceaux et étalez-les à l’aide d’un rouleau. C’est à ce moment que
      vous pouvez ajouter la garniture de votre choix (fromage végétal, ail, herbes, graines…), mais
      vous pouvez tout aussi bien les faire nature. Placez la garniture au centre de votre
      pâte et enfermez-la en rabattant les bords au centre, puis étalez à nouveau avec un
      rouleau.
    - Finition. Pour la cuisson, faites chauffer une poêle à feu très vif et ajoutez-y un peu de matière
      grasse. Quand la poêle est bien chaude, ajoutez-y les naans un par un. Comptez environ
      5 minutes de cuisson par face, mais n’hésitez pas à les soulever régulièrement pour
      contrôler. À la fin de la cuisson, ajoutez une noix de margarine végétale et étalez-la sur le naan.
      C’est prêt ! Vos naans seront parfaits pour accompagner un dhal de lentilles. Vous pouvez aussi les manger seuls si vous le souhaitez, c’est
      délicieux !
    steps_niveaux:
      amateur:
      - "Repos. Dans un petit récipient, versez le lait d’avoine ou de soja puis la levure et laissez reposer pendant une dizaine de minutes, le temps qu’une croûte se forme à la surface du mélange."
      - "Mélange. Pendant ce temps, versez dans un saladier la farine, le sel, le sucre et mélangez le tout. Rajoutez ensuite le mélange lait/levure, le yaourt de soja nature et un petit peu d’huile végétale. Mélangez, puis travaillez l’appareil avec les mains."
      - "Cuisson. Huilez un saladier et mettez-y la pâte, puis recouvrez d’un torchon et laissez lever dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné, coupez la pâte en morceaux et étalez-les à l’aide d’un rouleau. C’est à ce moment que vous pouvez ajouter la garniture de votre choix (fromage végétal, ail, herbes, graines…), mais vous pouvez tout aussi bien les faire nature. Placez la garniture au centre de votre pâte et enfermez-la en rabattant les bords au centre, puis étalez à nouveau avec un rouleau."
      - "Finition. Pour la cuisson, faites chauffer une poêle à feu très vif et ajoutez-y un peu de matière grasse. Quand la poêle est bien chaude, ajoutez-y les naans un par un. Comptez environ 5 minutes de cuisson par face, mais n’hésitez pas à les soulever régulièrement pour contrôler. À la fin de la cuisson, ajoutez une noix de margarine végétale et étalez-la sur le naan. C’est prêt ! Vos naans seront parfaits pour accompagner un dhal de lentilles. Vous pouvez aussi les manger seuls si vous le souhaitez, c’est délicieux !"
      pro:
      - "Verser le lait d’avoine ou de soja puis la levure dans un petit récipient. Laisser reposer une dizaine de minutes, jusqu’à formation d’une croûte à la surface du mélange."
      - "Verser farine, sel et sucre dans un saladier. Mélanger. Rajouter le mélange lait/levure, le yaourt de soja nature et un petit peu d’huile végétale. Mélanger, puis travailler l’appareil à la main."
      - "Huiler un saladier. Y mettre la pâte. Recouvrir d’un torchon. Laisser lever dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné, couper la pâte en morceaux. Étaler au rouleau. Garniture au choix (fromage végétal, ail, herbes, graines…) ou nature. Placer la garniture au centre. Rabattre les bords au centre. Étaler à nouveau au rouleau."
      - "Chauffer une poêle à feu très vif. Ajouter un peu de matière grasse. Poêle bien chaude : ajouter les naans un par un. Environ 5 minutes par face, soulever régulièrement pour contrôler. En fin de cuisson, ajouter une noix de margarine végétale et l’étaler sur le naan."
      cavernes:
      - "Repos. Petit récipient, lait d’avoine ou soja, verser, puis levure. Reposer dizaine minutes. Croûte, surface mélange."
      - "Mélange. Pendant. Saladier, farine, sel, sucre, verser, mélanger. Mélange lait/levure, yaourt soja nature, peu huile végétale, rajouter. Mélanger. Mains, travailler appareil."
      - "Cuisson. Saladier, huiler. Pâte, mettre. Torchon, recouvrir. Endroit légèrement chaud, lever, bonne heure. Plan travail fariné. Pâte, couper morceaux. Rouleau, étaler. Garniture choix (fromage végétal, ail, herbes, graines…), option, ou nature. Garniture, centre pâte. Bords, rabattre centre, enfermer. Rouleau, étaler encore."
      - "Finition. Poêle, feu très vif, chauffer. Peu matière grasse, ajouter. Poêle bien chaude. Naans, 1 par 1. Environ 5 min par face. Soulever régulier, contrôler. Fin cuisson, noix margarine végétale, étaler naan. Prêt. Dhal lentilles. Ou seuls."
    kcal_per_serving: 260
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 260
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
  restes: ["Grillé, avec un reste de curry"]
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Naans
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/naans]]

## Ingrédients (4 personnes)

- 250 g de farine
- 9 g de levure
- 70 g de lait à température ambiante
- 1 càs de sucre
- 1 pincée de sel
- 130 g de yaourt nature
-  un peu d'huile végétale

## Préparation

1. Dans un petit récipient, versez le lait puis la levure et laissez reposer pendant une dizaine de minutes, le temps qu’une croûte se forme à la surface du lait.
2. Pendant ce temps, versez dans un saladier la farine, le sel, le sucre et mélangez le tout. Rajoutez ensuite le mélange lait/levure, le yaourt nature et un petit peu d’huile végétale. Mélangez, puis travaillez l’appareil avec les mains.
3. Huilez un saladier et mettez-y la pâte, puis recouvrez d’un torchon et laissez lever dans un endroit légèrement chaud pendant une bonne heure. Sur un plan de travail fariné, coupez la pâte en morceaux et étalez-les à l’aide d’un rouleau. C’est à ce moment que vous pouvez ajouter la garniture de votre choix (fromage, ail, herbes, graines…), mais vous pouvez tout aussi bien les faire nature. Placez la garniture au centre de votre pâte et enfermez-la en rabattant les bords au centre, puis étalez à nouveau avec un rouleau.
4. Pour la cuisson, faites chauffer une poêle à feu très vif et ajoutez-y un peu de matière grasse. Quand la poêle est bien chaude, ajoutez-y les naans un par un. Comptez environ 5 minutes de cuisson par face, mais n’hésitez pas à les soulever régulièrement pour contrôler. À la fin de la cuisson, ajoutez une noix de beurre et étalez-la sur le naan.

 
 

 
 C’est prêt ! Vos naans seront parfaits pour accompagner un Dhal de lentilles ou même un poulet tikka masala. Vous pouvez aussi les manger seuls si vous le souhaitez, c’est délicieux !
