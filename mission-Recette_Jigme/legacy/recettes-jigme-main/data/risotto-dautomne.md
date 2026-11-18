---
schema: recette-web-jigme/v2
slug: risotto-dautomne
title: Risotto d'automne
lang: fr
description: "Risotto d'automne : recette italienne avec potimarron, oignon rouge et girolles, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: salé
tags:
- salé
- risotto
- végétarien
- automne
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/risotto-dautomne.jpg
  alt: Risotto d'automne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/risotto-dautomne.md
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
    - from: parmesan râpé
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: 1 poignée de noisettes
      to: graines de tournesol
      note:
    note: 'Fruits à coque : 1 poignée de noisettes → graines de tournesol.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  Le risotto vient d’Italie du Nord. La culture du riz s’y implante dans la plaine
  du Pô à partir du XVe siècle, à partir de souches asiatiques (japonica) : arborio,
  carnaroli, vialone nano. La technique — nacrer un riz rond, le mouiller peu à peu
  de bouillon chaud — donne cette texture crémeuse sans crème. Le milanais au safran
  est la version la plus célèbre. L’automne remplace le jaune du safran par courge
  et champignons de saison. Les girolles se dessèchent à la poêle avant le riz, sinon
  elles rendent l’eau dans la crème.
fun_facts:
- text: >
    Le risotto est associé aux rizières de la plaine du Pô, où, depuis le XVe siècle,
    on a développé des riz ronds à partir d’une souche asiatique « japonica ».
  source_name: Marmiton, réussir son risotto
  source_url: https://www.marmiton.org/cuisine-facile/risotto-s3017795.html
- text: >
    Le parmesan se râpe hors du feu : trop chaud, il file en fils et sale trop.
  source_name: Usage
  source_url:
wines:
- name: Mondeuse
  producer: Domaine Giachino
  origin: Savoie
  grapes: mondeuse
  award:
  why: Poivre — les girolles, un rouge de montagne.
- name: Chignin-Bergeron
  producer: André et Michel Quenard
  origin: Chignin, Savoie
  grapes: roussanne
  award:
  why: Blanc ample, abricot — le potimarron.
- name: Crozes-Hermitage
  producer: Cave de Tain
  origin: Tain-l'Hermitage, Rhône
  grapes: syrah
  award:
  why: Syrah, poivre — l’automne, tanin net sans un hermitage.
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
    - sulfites
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - casserole
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit:
      item: potimarron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: poignée
      item: girolles
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1300
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: parmesan râpé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: noisettes
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
    - Cuisson. Égrainez et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même
      pour l’oignon. Faites revenir le tout dans une casserole huilée.
    - Cuisson. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et laissez
      réduire à feu doux. Assaisonnez selon vos goûts.
    - Mélange. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez
      du bouillon à hauteur et laissez réduire à feu doux en mélangeant régulièrement. Recommencez
      l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment
      cuit, stoppez la cuisson et ajoutez du parmesan râpé.
    - Cuisson. Dans une poêle, faites revenir les girolles dans du beurre et assaisonnez. Dans une
      autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les
      écraser dans un mortier.
    - Dressage. Pour le dressage, mettez une généreuse quantité de risotto dans une assiette creuse
      et déposez les girolles et les noisettes sur le dessus. Saupoudrez de parmesan et de
      verdure selon vos goûts. C’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Retirez les graines et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même pour l’oignon. Faites revenir le tout dans une casserole huilée."
      - "Cuisson. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et [[reduire|laissez réduire]] à feu doux. Assaisonnez selon vos goûts."
      - "Mélange. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez du bouillon à hauteur et [[reduire|laissez réduire]] à feu doux en mélangeant régulièrement. Recommencez l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment cuit, stoppez la cuisson et ajoutez du parmesan [[raper|râpé]]."
      - "Cuisson. Dans une poêle, faites revenir les girolles dans du beurre et assaisonnez. Dans une autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les écraser dans un mortier."
      - "Dressage. Mettez une généreuse quantité de risotto dans une assiette creuse et déposez les girolles et les noisettes sur le dessus. Saupoudrez de parmesan et de verdure selon vos goûts."
      pro:
      - "Retirer les graines et éplucher le potimarron, le couper en petits morceaux. Idem pour l’oignon. Faire revenir le tout dans une casserole huilée."
      - "Oignons translucides : ajouter du vin blanc à hauteur, laisser réduire à feu doux. Assaisonner."
      - "Ajouter le riz rond, mélanger, laisser absorber le reste de vin blanc. Ajouter du bouillon à hauteur, laisser réduire à feu doux en mélangeant régulièrement. Recommencer jusqu’à texture souhaitée. Riz suffisamment cuit : stopper, ajouter du parmesan râpé."
      - "Poêle : faire revenir les girolles dans du beurre, assaisonner. Autre poêle : torréfier les noisettes, enlever la peau, écraser au mortier."
      - "Dresser une généreuse quantité de risotto dans une assiette creuse. Déposer girolles et noisettes. Saupoudrer de parmesan et de verdure."
      cavernes:
      - "Cuisson. Potimarron : graines, retirer, éplucher, petits morceaux. Oignon, idem. Casserole huilée, faire revenir."
      - "Cuisson. Oignons translucides. Vin blanc à hauteur, feu doux, laisser réduire. Assaisonner."
      - "Mélange. Riz rond, ajouter mélanger. Reste vin blanc, absorber. Bouillon à hauteur, feu doux, laisser réduire, mélanger régulièrement. Recommencer jusqu’à texture souhaitée. Riz assez cuit : stopper. Parmesan râpé, ajouter."
      - "Cuisson. Girolles, poêle beurre, faire revenir, assaisonner. Autre poêle : noisettes, torréfier, peau, enlever, mortier, écraser."
      - "Dressage. Risotto généreux, assiette creuse. Girolles, noisettes, dessus. Parmesan, verdure, saupoudrer."
    kcal_per_serving: 449
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
    - sulfites
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit:
      item: potimarron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: poignée
      item: girolles
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1300
      unit: ml
      item: bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: grana (présure microbienne) râpé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: noisettes
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
    - Cuisson. Égrainez et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même
      pour l’oignon. Faites revenir le tout dans une casserole huilée.
    - Cuisson. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et laissez
      réduire à feu doux. Assaisonnez selon vos goûts.
    - Mélange. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez
      du bouillon à hauteur et laissez réduire à feu doux en mélangeant régulièrement. Recommencez
      l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment
      cuit, stoppez la cuisson et ajoutez du grana (présure microbienne) râpé.
    - Cuisson. Dans une poêle, faites revenir les girolles dans du beurre et assaisonnez. Dans une
      autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les
      écraser dans un mortier.
    - Dressage. Pour le dressage, mettez une généreuse quantité de risotto dans une assiette creuse
      et déposez les girolles et les noisettes sur le dessus. Saupoudrez de grana (présure microbienne) et de
      verdure selon vos goûts. C’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Retirez les graines et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même pour l’oignon. Faites revenir le tout dans une casserole huilée."
      - "Cuisson. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et [[reduire|laissez réduire]] à feu doux. Assaisonnez selon vos goûts."
      - "Mélange. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez du bouillon à hauteur et [[reduire|laissez réduire]] à feu doux en mélangeant régulièrement. Recommencez l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment cuit, stoppez la cuisson et ajoutez du grana (présure microbienne) [[raper|râpé]]."
      - "Cuisson. Dans une poêle, faites revenir les girolles dans du beurre et assaisonnez. Dans une autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les écraser dans un mortier."
      - "Dressage. Mettez une généreuse quantité de risotto dans une assiette creuse et déposez les girolles et les noisettes sur le dessus. Saupoudrez de grana (présure microbienne) et de verdure selon vos goûts."
      pro:
      - "Retirer les graines et éplucher le potimarron, le couper en petits morceaux. Idem pour l’oignon. Faire revenir le tout dans une casserole huilée."
      - "Oignons translucides : ajouter du vin blanc à hauteur, laisser réduire à feu doux. Assaisonner."
      - "Ajouter le riz rond, mélanger, laisser absorber le reste de vin blanc. Ajouter du bouillon à hauteur, laisser réduire à feu doux en mélangeant régulièrement. Recommencer jusqu’à texture souhaitée. Riz suffisamment cuit : stopper, ajouter du grana (présure microbienne) râpé."
      - "Poêle : faire revenir les girolles dans du beurre, assaisonner. Autre poêle : torréfier les noisettes, enlever la peau, écraser au mortier."
      - "Dresser une généreuse quantité de risotto dans une assiette creuse. Déposer girolles et noisettes. Saupoudrer de grana (présure microbienne) et de verdure."
      cavernes:
      - "Cuisson. Potimarron : graines, retirer, éplucher, petits morceaux. Oignon, idem. Casserole huilée, faire revenir."
      - "Cuisson. Oignons translucides. Vin blanc à hauteur, feu doux, laisser réduire. Assaisonner."
      - "Mélange. Riz rond, ajouter mélanger. Reste vin blanc, absorber. Bouillon à hauteur, feu doux, laisser réduire, mélanger régulièrement. Recommencer jusqu’à texture souhaitée. Riz assez cuit : stopper. Grana (présure microbienne) râpé, ajouter."
      - "Cuisson. Girolles, poêle beurre, faire revenir, assaisonner. Autre poêle : noisettes, torréfier, peau, enlever, mortier, écraser."
      - "Dressage. Risotto généreux, assiette creuse. Girolles, noisettes, dessus. Grana (présure microbienne), verdure, saupoudrer."
    kcal_per_serving: 449
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
    - sulfites
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit:
      item: potimarron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: poignée
      item: girolles
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 100
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1300
      unit: ml
      item: bouillon de légumes
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
      item: noisettes
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
    - Cuisson. Égrainez et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même
      pour l’oignon. Faites revenir le tout dans une casserole huilée.
    - Cuisson. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et laissez
      réduire à feu doux. Assaisonnez selon vos goûts.
    - Mélange. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez
      du bouillon à hauteur et laissez réduire à feu doux en mélangeant régulièrement. Recommencez
      l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment
      cuit, stoppez la cuisson et ajoutez du parmesan végétal ou levure maltée.
    - Cuisson. Dans une poêle, faites revenir les girolles dans de la margarine végétale et assaisonnez. Dans une
      autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les
      écraser dans un mortier.
    - Dressage. Pour le dressage, mettez une généreuse quantité de risotto dans une assiette creuse
      et déposez les girolles et les noisettes sur le dessus. Saupoudrez de parmesan végétal ou de levure maltée et de verdure selon vos goûts. C’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Retirez les graines et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même pour l’oignon. Faites revenir le tout dans une casserole huilée."
      - "Cuisson. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et [[reduire|laissez réduire]] à feu doux. Assaisonnez selon vos goûts."
      - "Mélange. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez du bouillon à hauteur et [[reduire|laissez réduire]] à feu doux en mélangeant régulièrement. Recommencez l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment cuit, stoppez la cuisson et ajoutez du parmesan végétal ou levure maltée."
      - "Cuisson. Dans une poêle, faites revenir les girolles dans de la margarine végétale et assaisonnez. Dans une autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les écraser dans un mortier."
      - "Dressage. Mettez une généreuse quantité de risotto dans une assiette creuse et déposez les girolles et les noisettes sur le dessus. Saupoudrez de parmesan végétal ou de levure maltée et de verdure selon vos goûts."
      pro:
      - "Retirer les graines et éplucher le potimarron, le couper en petits morceaux. Idem pour l’oignon. Faire revenir le tout dans une casserole huilée."
      - "Oignons translucides : ajouter du vin blanc à hauteur, laisser réduire à feu doux. Assaisonner."
      - "Ajouter le riz rond, mélanger, laisser absorber le reste de vin blanc. Ajouter du bouillon à hauteur, laisser réduire à feu doux en mélangeant régulièrement. Recommencer jusqu’à texture souhaitée. Riz suffisamment cuit : stopper, ajouter du parmesan végétal ou levure maltée."
      - "Poêle : faire revenir les girolles dans de la margarine végétale, assaisonner. Autre poêle : torréfier les noisettes, enlever la peau, écraser au mortier."
      - "Dresser une généreuse quantité de risotto dans une assiette creuse. Déposer girolles et noisettes. Saupoudrer de parmesan végétal ou de levure maltée et de verdure."
      cavernes:
      - "Cuisson. Potimarron : graines, retirer, éplucher, petits morceaux. Oignon, idem. Casserole huilée, faire revenir."
      - "Cuisson. Oignons translucides. Vin blanc à hauteur, feu doux, laisser réduire. Assaisonner."
      - "Mélange. Riz rond, ajouter mélanger. Reste vin blanc, absorber. Bouillon à hauteur, feu doux, laisser réduire, mélanger régulièrement. Recommencer jusqu’à texture souhaitée. Riz assez cuit : stopper. Parmesan végétal ou levure maltée, ajouter."
      - "Cuisson. Girolles, poêle margarine végétale, faire revenir, assaisonner. Autre poêle : noisettes, torréfier, peau, enlever, mortier, écraser."
      - "Dressage. Risotto généreux, assiette creuse. Girolles, noisettes, dessus. Parmesan végétal ou levure maltée, verdure, saupoudrer."
    kcal_per_serving: 449
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
    - sulfites
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 449
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: ["Arancini"]
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"

---

# Risotto d'automne
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/risotto-dautomne]]

## Ingrédients (4 personnes)

- 1 demi potimarron
- 1 oignon rouge
-  1 belle poignée de girolles
- 10 cl de vin blanc
- 300 g de riz rond
- 1.3 L de bouillon
-  parmesan râpé
-  1 poignée de noisettes

## Préparation

1. Égrainez et épluchez le potimarron, puis coupez-le en petits morceaux. Faites de même pour l’oignon. Faites revenir le tout dans une casserole huilée.
2. Lorsque les oignons deviennent translucides, ajoutez du vin blanc à hauteur et laissez réduire à feu doux. Assaisonnez selon vos goûts.
3. Ajoutez le riz rond, mélangez et laissez-le absorber le reste de vin blanc. Ajoutez du bouillon à hauteur et laissez réduire à feu doux en mélangeant régulièrement. Recommencez l’opération jusqu’à ce que le riz ait la texture souhaitée. Lorsque le riz est suffisamment cuit, stoppez la cuisson et ajoutez du parmesan râpé.
4. Dans une poêle, faites revenir les girolles dans du beurre et assaisonnez. Dans une autre poêle, faites torréfier les noisettes avant de leur enlever la peau et de les écraser dans un mortier.
5. Pour le dressage, mettez une généreuse quantité de risotto dans une assiette creuse et déposez les girolles et les noisettes sur le dessus. Saupoudrez de parmesan et de verdure selon vos goûts.

 
 

 
 C’est prêt ! Bon appétit !
