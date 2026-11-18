---
schema: recette-web-jigme/v2
slug: cheesecake-mangue-noix-de-coco
title: Cheesecake mangue noix de coco
lang: fr
description: "Cheesecake mangue noix de coco : recette américaine avec amandes entières, dattes et poudre de coco, pour 4 personnes. Version maison."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- goûter
- fruits à coque
- végétarien
image:
  url:
  alt: Cheesecake mangue noix de coco
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cheesecake-mangue-noix-de-coco.md
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
    note: Déjà sans produits laitiers.
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
  Les gâteaux au fromage frais sont anciens en Europe. La version new-yorkaise,
  cuite, dense, au cream cheese, est un classique du XXe siècle : on l’associe
  souvent aux restaurants new-yorkais des années 1920. La version sans cuisson,
  prise au froid ou à la gélatine, a besoin du réfrigérateur domestique : plus
  légère, plus rapide, elle s’est répandue au XXe siècle. Mangue et coco ne viennent
  pas de Manhattan. Ils rappellent les desserts d’Asie du Sud-Est et des Antilles.
  C’est une lecture tropicale du cheese — fraîche, pas un mets traditionnel daté.
fun_facts:
- text: >
    On attribue souvent le cheesecake new-yorkais au cream cheese à Arnold Reuben,
    à la fin des années 1920 (parfois 1929), puis à Lindy’s et Junior’s.
  source_name: Classic New York History, New York cheesecake
  source_url: https://classicnewyorkhistory.com/history-of-new-york-cheesecake/
- text: >
    Reuben aurait goûté une « cheese pie » (souvent au cottage cheese) chez des amis
    avant de la passer au cream cheese à sa carte.
  source_name: Eat This NY, histoire du cheesecake
  source_url: https://eatthisny.com/2014/06/24/cheesecake/having-my-cheesecake-and-eating-it-too/
wines:
- name: Moscato d'Asti
  producer: Fontanafredda
  origin: Piémont
  grapes: moscato
  award:
  why: Fleur, sucrosité — mangue.
- name: Jurançon moelleux
  producer: Clos Uroulat
  origin: Jurançon
  grapes: petit manseng
  award:
  why: Ananas, agrume — coco et mangue.
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise, Rhône
  grapes: muscat à petits grains
  award:
  why: Raisin frais — le fruit, sans cacao.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    - vegan
    allergens:
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 480
      rest_min: 510
      total_min: 1020
    equipment: &id002
    - four
    - casserole
    - moule / plat
    - mixeur
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 280
      unit: g
      item: amandes entières
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: dattes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: poudre de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: noix de cajou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans la cuve d’un mixeur, versez les amandes entières. Ajoutez les dattes dénoyautées,
      la poudre de coco et mixez jusqu’à ce que le mélange soit homogène. Vous obtenez ainsi
      la base du biscuit, comme pour les cheesecake classiques.
    - Cuisson. Déposez cette pâte au fond du plat à base amovible. Étalez-la et pressez bien afin que
      la hauteur soit uniforme. Réservez ensuite au frigo, le temps de préparer la partie
      crémeuse du cheesecake.
    - Cuisson. Déposez les noix de cajou, qui ont trempé dans l’eau pendant une nuit, dans la cuve
      du mixeur. Ajouter le lait de coco (notamment la partie crémeuse du lait) et la crème
      de coco. Mixez, puis débarrassez le tout dans une casserole.
    - Cuisson. Faites réchauffer cette crème à feu doux. Lorsque le mélange est chaud, ajoutez l’agar
      agar, puis mélangez pendant environ 2 minutes jusqu’à ce que ça gélifie.
    - Cuisson. Versez la crème dans le moule, par dessus le biscuit que vous avez préparez précédemment.
      Placez le tout au frigo pendant 2h, jusqu’à ce que tout soit bien figé.
    - Mixage. Profitez-en pour couper les mangues et les mixer jusqu’à obtenir une purée. Vous pouvez
      rectifier la texture avec un peu d’eau si besoin et ajuster le goût avec du sucre, selon
      vos envies.
    - Cuisson. Passez la purée de mangue au chinois pour retirer les parties fibreuses, puis transférez-la
      dans une casserole. Faites chauffer à feu doux et ajoutez ensuite l’agar agar. Mélangez
      jusqu’à obtenir la texture souhaitée.
    - Dressage. Versez ce nappage sur votre cheesecake et répartissez-le de manière uniforme. Réservez
      au frigo pendant 6h (environ une nuit).
    - Repos. Maintenant que le cheesecake a bien reposé au frigo, vous pouvez le démouler. Finalisez
      ce superbe gâteau en le saupoudrant d’un peu de noix de coco râpée et de zest de citron
      vert. Coupez une belle part et dégustez-la sans plus attendre. Bon appétit !
    steps_niveaux:
      amateur:
      - "Fond. Dans la cuve d’un mixeur, versez les amandes entières. Ajoutez les dattes dénoyautées et la poudre de coco, puis mixez jusqu’à mélange homogène."
      - "Base. Déposez cette pâte au fond du plat à base amovible. Étalez-la et pressez bien afin que la hauteur soit uniforme. Réservez au frigo."
      - "Cajou. Déposez les noix de cajou, qui ont trempé dans l’eau pendant une nuit, dans la cuve du mixeur. Ajoutez le lait de coco (la partie crémeuse du lait) et la crème de coco. Mixez, puis débarrassez dans une casserole."
      - "Agar. Faites réchauffer cette crème à feu doux. Lorsque le mélange est chaud, ajoutez l’agar-agar, puis mélangez pendant environ 2 minutes jusqu’à ce que ça gélifie."
      - "Moule. Versez la crème dans le moule, par-dessus le biscuit. Placez au frigo pendant 2h, jusqu’à ce que tout soit bien figé."
      - "Mangue. Coupez les mangues et mixez-les jusqu’à obtenir une purée. Rectifiez la texture avec un peu d’eau si besoin et ajustez le goût avec du sucre, selon vos envies."
      - "Chinois. [[filtrer|Passez]] la purée de mangue au chinois pour retirer les parties fibreuses, puis transférez-la dans une casserole. Faites chauffer à feu doux, ajoutez l’agar-agar et mélangez jusqu’à la texture souhaitée."
      - "[[napper|Nappage]]. Versez ce nappage sur le cheesecake et répartissez-le de manière uniforme. Réservez au frigo pendant 6h (environ une nuit)."
      - "Décor. Démoulez. Saupoudrez d’un peu de noix de coco râpée et de zeste de citron vert."
      pro:
      - "Verser les amandes entières dans la cuve d’un mixeur. Ajouter les dattes dénoyautées et la poudre de coco. Mixer jusqu’à mélange homogène."
      - "Déposer la pâte au fond du plat à base amovible. Étaler et presser pour une hauteur uniforme. Réserver au frigo."
      - "Déposer les noix de cajou, trempées dans l’eau pendant une nuit, dans la cuve du mixeur. Ajouter le lait de coco (partie crémeuse) et la crème de coco. Mixer. Débarrasser dans une casserole."
      - "Réchauffer la crème à feu doux. Lorsque le mélange est chaud, ajouter l’agar-agar. Mélanger pendant environ 2 minutes jusqu’à gélification."
      - "Verser la crème dans le moule, par-dessus le biscuit. Placer au frigo pendant 2h, jusqu’à prise."
      - "Couper les mangues. Mixer jusqu’à purée. Rectifier la texture avec un peu d’eau si besoin. Ajuster le goût avec du sucre, selon envie."
      - "Passer la purée de mangue au chinois pour retirer les parties fibreuses. Transférer dans une casserole. Chauffer à feu doux. Ajouter l’agar-agar. Mélanger jusqu’à la texture souhaitée."
      - "Verser le nappage sur le cheesecake. Répartir de manière uniforme. Réserver au frigo pendant 6h (environ une nuit)."
      - "Démouler. Saupoudrer d’un peu de noix de coco râpée et de zeste de citron vert."
      cavernes:
      - "Fond. Mixeur, cuve. Amandes entières, verser. Dattes dénoyautées, poudre de coco, ajouter. Mixer. Homogène."
      - "Base. Pâte, fond plat base amovible, déposer. Étaler. Presser. Hauteur uniforme. Frigo."
      - "Cajou. Noix de cajou trempées eau, nuit, mixeur. Lait de coco, partie crémeuse, crème de coco, ajouter. Mixer. Casserole, débarrasser."
      - "Agar. Crème, feu doux, réchauffer. Chaud. Agar-agar, ajouter. Mélanger environ 2 minutes. Gélifie."
      - "Moule. Crème, moule, biscuit, verser. Frigo 2h. Figé."
      - "Mangue. Mangues, couper, mixer. Purée. Peu d’eau si besoin, texture. Sucre, goût, selon envies."
      - "Chinois. Purée de mangue, chinois, passer. Fibres dehors. Casserole. Feu doux, chauffer. Agar-agar, ajouter. Mélanger. Texture souhaitée."
      - "Nappage. Nappage, cheesecake, verser. Uniforme. Frigo 6h (environ nuit)."
      - "Décor. Démouler. Peu noix de coco râpée, zeste citron vert, saupoudrer."
    kcal_per_serving: 195
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 195
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 280
      unit: g
      item: amandes entières
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: dattes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: poudre de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: noix de cajou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: crème de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: lait de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans la cuve d’un mixeur, versez les amandes entières. Ajoutez les dattes dénoyautées,
      la poudre de coco et mixez jusqu’à ce que le mélange soit homogène. Vous obtenez ainsi
      la base du biscuit, comme pour les cheesecake classiques.
    - Cuisson. Déposez cette pâte au fond du plat à base amovible. Étalez-la et pressez bien afin que
      la hauteur soit uniforme. Réservez ensuite au frigo, le temps de préparer la partie
      crémeuse du cheesecake.
    - Cuisson. Déposez les noix de cajou, qui ont trempé dans l’eau pendant une nuit, dans la cuve
      du mixeur. Ajouter le lait de coco (notamment la partie crémeuse du lait) et la crème de coco. Mixez, puis débarrassez le tout dans une casserole.
    - Cuisson. Faites réchauffer cette crème à feu doux. Lorsque le mélange est chaud, ajoutez l’agar
      agar, puis mélangez pendant environ 2 minutes jusqu’à ce que ça gélifie.
    - Cuisson. Versez la crème dans le moule, par dessus le biscuit que vous avez préparez précédemment.
      Placez le tout au frigo pendant 2h, jusqu’à ce que tout soit bien figé.
    - Mixage. Profitez-en pour couper les mangues et les mixer jusqu’à obtenir une purée. Vous pouvez
      rectifier la texture avec un peu d’eau si besoin et ajuster le goût avec du sucre, selon
      vos envies.
    - Cuisson. Passez la purée de mangue au chinois pour retirer les parties fibreuses, puis transférez-la
      dans une casserole. Faites chauffer à feu doux et ajoutez ensuite l’agar agar. Mélangez
      jusqu’à obtenir la texture souhaitée.
    - Dressage. Versez ce nappage sur votre cheesecake et répartissez-le de manière uniforme. Réservez
      au frigo pendant 6h (environ une nuit).
    - Repos. Maintenant que le cheesecake a bien reposé au frigo, vous pouvez le démouler. Finalisez
      ce superbe gâteau en le saupoudrant d’un peu de noix de coco râpée et de zest de citron
      vert. Coupez une belle part et dégustez-la sans plus attendre. Bon appétit !
    steps_niveaux:
      amateur:
      - "Fond. Dans la cuve d’un mixeur, versez les amandes entières. Ajoutez les dattes dénoyautées et la poudre de coco, puis mixez jusqu’à mélange homogène."
      - "Base. Déposez cette pâte au fond du plat à base amovible. Étalez-la et pressez bien afin que la hauteur soit uniforme. Réservez au frigo."
      - "Cajou. Déposez les noix de cajou, qui ont trempé dans l’eau pendant une nuit, dans la cuve du mixeur. Ajoutez le lait de coco (la partie crémeuse du lait) et la crème de coco. Mixez, puis débarrassez dans une casserole."
      - "Agar. Faites réchauffer cette crème à feu doux. Lorsque le mélange est chaud, ajoutez l’agar-agar, puis mélangez pendant environ 2 minutes jusqu’à ce que ça gélifie."
      - "Moule. Versez la crème dans le moule, par-dessus le biscuit. Placez au frigo pendant 2h, jusqu’à ce que tout soit bien figé."
      - "Mangue. Coupez les mangues et mixez-les jusqu’à obtenir une purée. Rectifiez la texture avec un peu d’eau si besoin et ajustez le goût avec du sucre, selon vos envies."
      - "Chinois. [[filtrer|Passez]] la purée de mangue au chinois pour retirer les parties fibreuses, puis transférez-la dans une casserole. Faites chauffer à feu doux, ajoutez l’agar-agar et mélangez jusqu’à la texture souhaitée."
      - "[[napper|Nappage]]. Versez ce nappage sur le cheesecake et répartissez-le de manière uniforme. Réservez au frigo pendant 6h (environ une nuit)."
      - "Décor. Démoulez. Saupoudrez d’un peu de noix de coco râpée et de zeste de citron vert."
      pro:
      - "Verser les amandes entières dans la cuve d’un mixeur. Ajouter les dattes dénoyautées et la poudre de coco. Mixer jusqu’à mélange homogène."
      - "Déposer la pâte au fond du plat à base amovible. Étaler et presser pour une hauteur uniforme. Réserver au frigo."
      - "Déposer les noix de cajou, trempées dans l’eau pendant une nuit, dans la cuve du mixeur. Ajouter le lait de coco (partie crémeuse) et la crème de coco. Mixer. Débarrasser dans une casserole."
      - "Réchauffer la crème à feu doux. Lorsque le mélange est chaud, ajouter l’agar-agar. Mélanger pendant environ 2 minutes jusqu’à gélification."
      - "Verser la crème dans le moule, par-dessus le biscuit. Placer au frigo pendant 2h, jusqu’à prise."
      - "Couper les mangues. Mixer jusqu’à purée. Rectifier la texture avec un peu d’eau si besoin. Ajuster le goût avec du sucre, selon envie."
      - "Passer la purée de mangue au chinois pour retirer les parties fibreuses. Transférer dans une casserole. Chauffer à feu doux. Ajouter l’agar-agar. Mélanger jusqu’à la texture souhaitée."
      - "Verser le nappage sur le cheesecake. Répartir de manière uniforme. Réserver au frigo pendant 6h (environ une nuit)."
      - "Démouler. Saupoudrer d’un peu de noix de coco râpée et de zeste de citron vert."
      cavernes:
      - "Fond. Mixeur, cuve. Amandes entières, verser. Dattes dénoyautées, poudre de coco, ajouter. Mixer. Homogène."
      - "Base. Pâte, fond plat base amovible, déposer. Étaler. Presser. Hauteur uniforme. Frigo."
      - "Cajou. Noix de cajou trempées eau, nuit, mixeur. Lait de coco, partie crémeuse, crème de coco, ajouter. Mixer. Casserole, débarrasser."
      - "Agar. Crème, feu doux, réchauffer. Chaud. Agar-agar, ajouter. Mélanger environ 2 minutes. Gélifie."
      - "Moule. Crème, moule, biscuit, verser. Frigo 2h. Figé."
      - "Mangue. Mangues, couper, mixer. Purée. Peu d’eau si besoin, texture. Sucre, goût, selon envies."
      - "Chinois. Purée de mangue, chinois, passer. Fibres dehors. Casserole. Feu doux, chauffer. Agar-agar, ajouter. Mélanger. Texture souhaitée."
      - "Nappage. Nappage, cheesecake, verser. Uniforme. Frigo 6h (environ nuit)."
      - "Décor. Démouler. Peu noix de coco râpée, zeste citron vert, saupoudrer."
    kcal_per_serving: 195
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 195
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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

# Cheesecake mangue noix de coco
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 8 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cheesecake-mangue-noix-de-coco]]

## Ingrédients (8 personnes)

- 280 g d'amandes entières
- 500 g de dattes
- 40 g de poudre de coco
- 200 g de noix de cajou
- 3 mangue
- 400 ml de crème de coco
- 500 ml de lait de coco
- 100 g de sucre
- 4 g d'agar-agar

## Préparation

1. Dans la cuve d’un mixeur, versez les amandes entières. Ajoutez les dattes dénoyautées, la poudre de coco et mixez jusqu’à ce que le mélange soit homogène. Vous obtenez ainsi la base du biscuit, comme pour les cheesecake classiques.
2. Déposez cette pâte au fond du plat à base amovible. Étalez-la et pressez bien afin que la hauteur soit uniforme. Réservez ensuite au frigo, le temps de préparer la partie crémeuse du cheesecake.
3. Déposez les noix de cajou, qui ont trempé dans l’eau pendant une nuit, dans la cuve du mixeur. Ajouter le lait de coco (notamment la partie crémeuse du lait) et la crème de coco. Mixez, puis débarrassez le tout dans une casserole.
4. Faites réchauffer cette crème à feu doux. Lorsque le mélange est chaud, ajoutez l’agar agar, puis mélangez pendant environ 2 minutes jusqu’à ce que ça gélifie.
5. Versez la crème dans le moule, par dessus le biscuit que vous avez préparez précédemment. Placez le tout au frigo pendant 2h, jusqu’à ce que tout soit bien figé.
6. Profitez-en pour couper les mangues et les mixer jusqu’à obtenir une purée. Vous pouvez rectifier la texture avec un peu d’eau si besoin et ajuster le goût avec du sucre, selon vos envies.
7. Passez la purée de mangue au chinois pour retirer les parties fibreuses, puis transférez-la dans une casserole. Faites chauffer à feu doux et ajoutez ensuite l’agar agar. Mélangez jusqu’à obtenir la texture souhaitée.
8. Versez ce nappage sur votre cheesecake et répartissez-le de manière uniforme. Réservez au frigo pendant 6h (environ une nuit).
9. Maintenant que le cheesecake a bien reposé au frigo, vous pouvez le démouler. Finalisez ce superbe gâteau en le saupoudrant d’un peu de noix de coco râpée et de zest de citron vert.

 
 

 
 Coupez une belle part et dégustez-la sans plus attendre. Bon appétit !
