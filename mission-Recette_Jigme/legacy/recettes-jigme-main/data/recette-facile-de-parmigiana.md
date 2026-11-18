---
schema: recette-web-jigme/v2
slug: recette-facile-de-parmigiana
title: Recette facile de parmigiana
lang: fr
description: "Recette facile de parmigiana : recette italienne avec aubergine, coulis de tomate et mozzarella, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- végétarien
- plat
- aubergine
image:
  url:
  alt: Recette facile de parmigiana
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/recette-facile-de-parmigiana.md
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
    - from: mozzarella
      to: mozzarella sans lactose
      note:
    - from: pécorino ou parmesan
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
histoire: 'Parmigiana : aubergine (souvent) tranchée, frite, empilée tomate et fromage, cuite au four.
  L’Italie du sud s’en dispute l’origine (Calabre, Campanie, Pouilles, Sicile) — non tranché.

  '
fun_facts:
- text: 'On sale et on égoutte l’aubergine : trop d’eau, le gratin nage.

    '
  source_name: Usage
  source_url: null
- text: 'Ce n’est pas le chicken parmesan italo-américain (escalope panée).

    '
  source_name: Grokipedia, Chicken parmesan
  source_url: https://grokipedia.com/page/Chicken_parmesan
- text: 'Pour aller plus loin : l’histoire de « Recette facile de parmigiana ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Parmigiana
wines:
- name: Chianti
  producer: Melini
  origin: Chianti, Toscane
  grapes: sangiovese
  award:
  why: Cerise, tanin vif — la tomate et l’aubergine.
- name: Nero d'Avola
  producer: Feudo Arancio
  origin: Sicile
  grapes: nero d'avola
  award:
  why: Fruit du sud — si l’on penche pour une origine sicilienne.
- name: Côtes de Provence
  producer: Château de Roquefort
  origin: Roquefort-la-Bédoule, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé ou rouge léger — l’huile de friture, sans un barolo.
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 30
      rest_min: 90
      total_min: 150
    equipment: &id002
    - four
    - casserole
    - poids pour cuisson à blanc
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: aubergine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: mozzarella
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pécorino ou parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Cuisson. Coupez les aubergines et faites les dégorger : saupoudrez-les de gros sel, mettez un
      poids par dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une
      partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile
      de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel
      et passez au papier absorbant ou torchon propre.'
    - Faites frire les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les
      sur du papier absorbant.
    - 'Cuisson. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous avez soit
      avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites
      revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez.'
    - 'Cuisson. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour
      éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de mozzarella, de
      pécornio ou parmesan râpé et encore de coulis. Recommencez jusqu’à remplissage du plat.
      Terminez par un peu de coulis et de fromage.'
    - Cuisson. Faire cuire au four à 190°C pendant 20 à 30 minutes. Et voilà, c’est simple ! C’est
      délicieux ! Si les gratins plein de fromage vous manquent pendant l’été, foncez sur
      cette recette de parmigiana.
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez les aubergines et faites-les dégorger : saupoudrez-les de gros sel, mettez un poids par-dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel et passez au papier absorbant ou torchon propre."
      - "[[frire|Faites frire]] les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les sur du papier absorbant."
      - "Cuisson. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous en avez, soit avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez."
      - "Cuisson. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de mozzarella, de pécornio ou parmesan [[raper|râpé]] et encore de coulis. Recommencez jusqu’à remplissage du plat. Terminez par un peu de coulis et de fromage."
      - "Cuisson. Faites cuire au four à 190°C pendant 20 à 30 minutes."
      pro:
      - "Couper les aubergines et les faire dégorger : saupoudrer de gros sel, mettre un poids par-dessus, laisser reposer 30 minutes. Le gros sel absorbe une partie du liquide de végétation. Dégorgé : rincer à l’eau courante, passer au papier absorbant ou torchon propre."
      - "Frire les aubergines. Retirer dès qu’elles commencent à dorer. Débarrasser sur du papier absorbant."
      - "Coulis de tomates (tomates fraîches ou coulis tout prêt) : un peu d’huile d’olive dans une casserole, faire revenir de l’ail, ajouter tomates et/ou coulis, laurier, assaisonner."
      - "Assembler dans le plat allant au four : un peu de coulis au fond. Ajouter aubergines, mozzarella, pécornio ou parmesan râpé, encore de coulis. Recommencer jusqu’à remplissage. Terminer par un peu de coulis et de fromage."
      - "Cuire au four à 190°C 20 à 30 minutes."
      cavernes:
      - "Cuisson. Aubergines, couper. Dégorger : gros sel, saupoudrer. Poids par-dessus, reposer 30 min. Gros sel absorbe liquide végétation, moins huile friture. Dégorgé : eau courante, rincer. Papier absorbant ou torchon propre."
      - "Frire aubergines. Dorent, retirer. Papier absorbant, débarrasser."
      - "Cuisson. Coulis tomates (tomates fraîches ou coulis tout prêt). Casserole, peu huile olive. Ail, faire revenir. Tomates et/ou coulis, laurier, assaisonner."
      - "Cuisson. Plat four, assembler. Peu coulis, fond, éviter accroche. Aubergines, mozzarella, pécornio ou parmesan râpé, coulis. Remplir plat. Fin : peu coulis, fromage."
      - "Cuisson. Four 190°C, 20 à 30 min."
    kcal_per_serving: 56
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 6
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
      item: aubergine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: mozzarella
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pecorino (présure microbienne)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Cuisson. Coupez les aubergines et faites les dégorger : saupoudrez-les de gros sel, mettez un
      poids par dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une
      partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile
      de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel
      et passez au papier absorbant ou torchon propre.'
    - Faites frire les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les
      sur du papier absorbant.
    - 'Cuisson. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous avez soit
      avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites
      revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez.'
    - 'Cuisson. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour
      éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de mozzarella, de
      pécornio ou grana (présure microbienne) râpé et encore de coulis. Recommencez jusqu’à remplissage du plat.
      Terminez par un peu de coulis et de fromage.'
    - Cuisson. Faire cuire au four à 190°C pendant 20 à 30 minutes. Et voilà, c’est simple ! C’est
      délicieux ! Si les gratins plein de fromage vous manquent pendant l’été, foncez sur
      cette recette de parmigiana.
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez les aubergines et faites-les dégorger : saupoudrez-les de gros sel, mettez un poids par-dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel et passez au papier absorbant ou torchon propre."
      - "[[frire|Faites frire]] les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les sur du papier absorbant."
      - "Cuisson. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous en avez, soit avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez."
      - "Cuisson. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de mozzarella, de pécornio ou grana (présure microbienne) [[raper|râpé]] et encore de coulis. Recommencez jusqu’à remplissage du plat. Terminez par un peu de coulis et de fromage."
      - "Cuisson. Faites cuire au four à 190°C pendant 20 à 30 minutes."
      pro:
      - "Couper les aubergines et les faire dégorger : saupoudrer de gros sel, mettre un poids par-dessus, laisser reposer 30 minutes. Le gros sel absorbe une partie du liquide de végétation. Dégorgé : rincer à l’eau courante, passer au papier absorbant ou torchon propre."
      - "Frire les aubergines. Retirer dès qu’elles commencent à dorer. Débarrasser sur du papier absorbant."
      - "Coulis de tomates (tomates fraîches ou coulis tout prêt) : un peu d’huile d’olive dans une casserole, faire revenir de l’ail, ajouter tomates et/ou coulis, laurier, assaisonner."
      - "Assembler dans le plat allant au four : un peu de coulis au fond. Ajouter aubergines, mozzarella, pécornio ou grana (présure microbienne) râpé, encore de coulis. Recommencer jusqu’à remplissage. Terminer par un peu de coulis et de fromage."
      - "Cuire au four à 190°C 20 à 30 minutes."
      cavernes:
      - "Cuisson. Aubergines, couper. Dégorger : gros sel, saupoudrer. Poids par-dessus, reposer 30 min. Gros sel absorbe liquide végétation, moins huile friture. Dégorgé : eau courante, rincer. Papier absorbant ou torchon propre."
      - "Frire aubergines. Dorent, retirer. Papier absorbant, débarrasser."
      - "Cuisson. Coulis tomates (tomates fraîches ou coulis tout prêt). Casserole, peu huile olive. Ail, faire revenir. Tomates et/ou coulis, laurier, assaisonner."
      - "Cuisson. Plat four, assembler. Peu coulis, fond, éviter accroche. Aubergines, mozzarella, pécornio ou grana (présure microbienne) râpé, coulis. Remplir plat. Fin : peu coulis, fromage."
      - "Cuisson. Four 190°C, 20 à 30 min."
    kcal_per_serving: 56
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
    - pesco
    - vegan
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: aubergine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: coulis de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: parmesan végétal ou levure maltée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Cuisson. Coupez les aubergines et faites les dégorger : saupoudrez-les de gros sel, mettez un
      poids par dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une
      partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile
      de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel
      et passez au papier absorbant ou torchon propre.'
    - Faites frire les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les
      sur du papier absorbant.
    - 'Cuisson. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous avez soit
      avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites
      revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez.'
    - 'Cuisson. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour
      éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de fromage végétal ou de levure maltée, et encore de coulis. Recommencez jusqu’à remplissage du
      plat. Terminez par un peu de coulis et de fromage végétal.'
    - Cuisson. Faire cuire au four à 190°C pendant 20 à 30 minutes. Et voilà, c’est simple ! C’est
      délicieux ! Si les gratins plein de fromage végétal vous manquent pendant l’été, foncez
      sur cette recette de parmigiana.
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez les aubergines et faites-les dégorger : saupoudrez-les de gros sel, mettez un poids par-dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel et passez au papier absorbant ou torchon propre."
      - "[[frire|Faites frire]] les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les sur du papier absorbant."
      - "Cuisson. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous en avez, soit avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez."
      - "Cuisson. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de fromage végétal ou de levure maltée, et encore de coulis. Recommencez jusqu’à remplissage du plat. Terminez par un peu de coulis et de fromage végétal."
      - "Cuisson. Faites cuire au four à 190°C pendant 20 à 30 minutes."
      pro:
      - "Couper les aubergines et les faire dégorger : saupoudrer de gros sel, mettre un poids par-dessus, laisser reposer 30 minutes. Le gros sel absorbe une partie du liquide de végétation. Dégorgé : rincer à l’eau courante, passer au papier absorbant ou torchon propre."
      - "Frire les aubergines. Retirer dès qu’elles commencent à dorer. Débarrasser sur du papier absorbant."
      - "Coulis de tomates (tomates fraîches ou coulis tout prêt) : un peu d’huile d’olive dans une casserole, faire revenir de l’ail, ajouter tomates et/ou coulis, laurier, assaisonner."
      - "Assembler dans le plat allant au four : un peu de coulis au fond. Ajouter aubergines, fromage végétal ou levure maltée, encore de coulis. Recommencer jusqu’à remplissage. Terminer par un peu de coulis et de fromage végétal."
      - "Cuire au four à 190°C 20 à 30 minutes."
      cavernes:
      - "Cuisson. Aubergines, couper. Dégorger : gros sel, saupoudrer. Poids par-dessus, reposer 30 min. Gros sel absorbe liquide végétation, moins huile friture. Dégorgé : eau courante, rincer. Papier absorbant ou torchon propre."
      - "Frire aubergines. Dorent, retirer. Papier absorbant, débarrasser."
      - "Cuisson. Coulis tomates (tomates fraîches ou coulis tout prêt). Casserole, peu huile olive. Ail, faire revenir. Tomates et/ou coulis, laurier, assaisonner."
      - "Cuisson. Plat four, assembler. Peu coulis, fond, éviter accroche. Aubergines, fromage végétal ou levure maltée, coulis. Remplir plat. Fin : peu coulis, fromage végétal."
      - "Cuisson. Four 190°C, 20 à 30 min."
    kcal_per_serving: 56
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
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 56
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
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

# Recette facile de parmigiana
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/recette-facile-de-parmigiana]]

## Ingrédients (6 personnes)

- 4 aubergine
- 50 cl de coulis de tomate
- 2 mozzarella
-  pécorino ou parmesan
-  laurier
-  huile d'olive

## Préparation

1. Coupez les aubergines et faites les dégorger : saupoudrez-les de gros sel, mettez un poids par dessus l’ensemble et laissez reposer 30 minutes. Le gros sel va absorber une partie du liquide de végétation du légume et cela l’empêchera de boire trop d’huile de friture. Quand ça a dégorgé, rincez à l’eau courante pour enlever l’excédent de sel et passez au papier absorbant ou torchon propre.
2. Faites frire les aubergines. Retirez-les quand elles commencent à dorer. Débarrassez-les sur du papier absorbant.
3. Préparez votre coulis de tomates (soit avec des tomates fraîches si vous avez soit avec du coulis tout prêt) : mettez un peu d’huile d’olive dans une casserole, faites revenir de l’ail, rajoutez les tomates et/ou le coulis, rajoutez du laurier, assaisonnez.
4. Assemblez le tout dans le plat qui ira au four : commencez par un peu de coulis pour éviter que le fond n’accroche. Puis rajoutez les aubergines, un peu de mozzarella, de pécornio ou parmesan râpé et encore de coulis. Recommencez jusqu’à remplissage du plat. Terminez par un peu de coulis et de fromage.
5. Faire cuire au four à 190°C pendant 20 à 30 minutes.

 
 

 
 Et voilà, c’est simple ! C’est délicieux ! Si les gratins plein de fromage vous manquent pendant l’été, foncez sur cette recette de parmigiana.
