---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: mixeur-plongeant
- ref: batteur
- ref: fouet
slug: buche-de-noel-chocolat-noisette
title: Bûche de Noël chocolat noisette
lang: fr
description: "Bûche de Noël chocolat noisette : recette française avec œuf, sucre semoule et farine, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- chocolat
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/buche-de-noel-chocolat-noisette.webp
  alt: Bûche de Noël chocolat noisette
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/buche-de-noel-chocolat-noisette.md
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
    - from: sucre semoule
      to: quinoa
      note:
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
histoire: >
  La bûche de Noël pâtissière (génoise roulée, crème au beurre) se fixe en France
  à la fin du XIXe s. / début du XXe, en souvenir de la bûche brûlée dans l’âtre.
  Chocolat-noisette est une garniture, pas le canon (souvent praliné ou chocolat).
fun_facts:
- text: "Avant la génoise, on servait une vraie bûche de bois décorée, parfois flambée."
  source_name: Usage français de Noël
  source_url:
- text: "Le roulé se fend si la génoise refroidit à plat trop sèche : on la roule tiède dans un linge."
  source_name: Usage pâtissier
  source_url:
wines:
- name: Champagne brut
  producer: Pierre Gimonnet
  origin: Cuis, Côte des Blancs
  grapes: chardonnay
  award:
  why: Bulles, agrume — le gras du beurre et du chocolat. (rester sur un brut de vignerons, pas un prestige.)
- name: Rivesaltes ambré
  producer: Domaine Cazes
  origin: Rivesaltes
  grapes: grenache, macabeu
  award:
  why: Noisette, orange confite — la garniture noisette.
- name: Porto tawny
  producer: Taylor's
  origin: Vila Nova de Gaia / Douro
  grapes: touriga nacional et autres
  award:
  why: Noix, caramel — chocolat, sans bulles.
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
      prep_min: 30
      cook_min: 7
      rest_min: 170
      total_min: 207
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - moule / plat
    - plaque + papier sulfurisé
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 110
      unit: g
      item: sucre semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: chocolat au lait 40 %
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: crème liquide entière
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pralin (noisettes caramélisées)
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
    - Préparation. Commençons par le biscuit de la bûche. Dans un saladier, déposez deux jaunes d’oeufs
      ainsi que deux oeufs entiers. Placez les deux blancs d’oeufs dans la cuve d’un batteur.
    - Mélange. Ajoutez 80g de sucre dans votre saladier, puis mélangez bien à l’aide d’un fouet.
    - Cuisson. Ajoutez également 30g de sucre dans le batteur et montez les blancs en neige.
    - Mélange. Incorporez à présent les blancs d’oeuf dans le saladier et mélangez doucement à l’aide
      d’une spatule. Ajoutez ensuite 50g de farine petit à petit, pour éviter les grumeaux.
    - Cuisson. Votre appareil à biscuit est prêt. Étalez-le uniformément sur une plaque à pâtisserie
      à bords bas. Si vous n’en avez pas sous la main, une plaque de cuisson recouverte de
      papier sulfurisé fera l’affaire. Enfournez-le ensuite à 200°C pendant 5 à 7 minutes.
      Une fois cuit, vous pouvez le démouler, le retourner, puis le réserver.
    - Cuisson. Place à la délicieuse ganache ! Faites fondre 450g de chocolat au lait dans un bain-marie.
      Dans une autre casserole, préparez la crème en versant 30 cL de crème et environ 50
      g de miel. Portez à ébullition et mélangez.
    - Cuisson. Versez le chocolat fondu dans un récipient. Incorporez environ un tiers de la crème,
      puis mélangez à l’aide d’une spatule jusqu’à ce que la ganache soit homogène. Réitérez
      l’opération deux fois, jusqu’à incorporer la totalité de la crème.
    - Mélange. Pour que la ganache soit parfaite, mélangez-la une dernière fois à l’aide d’un mixeur
      plongeant. Laissez reposer au frais pendant environ 3h.
    - Cuisson. Maintenant que la ganache est bien froide, montez-la à l’aide d’un batteur réglé à vitesse
      moyenne.
    - Dressage. Place au dressage ! Étalez la ganache sur le biscuit et saupoudrez le tout d’un peu
      de pralin. Roulez votre biscuit, comme dans la vidéo ci-dessous. Découpez ensuite les
      bords de la bûche afin qu’ils soient parfaitement lisses.
    - Finition. De nouveau, recouvrez votre bûche avec la ganache au chocolat. Vous pouvez ensuite décorer
      votre bûche à l’aide d’une fourchette (on vous montre comment faire dans la vidéo) et
      saupoudrer généreusement du pralin pour donner un bon goût de noisette. Et voilà, votre
      bûche de Noël est prête ! Laissez-la au frigo pour qu’elle se tienne bien au moment
      du dessert. Vous pouvez ajouter un peu de sucre en poudre dessus avant de la servir.
      Bon réveillon !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par le biscuit de la bûche. Dans un saladier, déposez deux jaunes d’oeufs ainsi que deux oeufs entiers. Placez les deux blancs d’oeufs dans la cuve d’un batteur."
      - "Mélange. Ajoutez 80g de sucre dans votre saladier, puis mélangez bien à l’aide d’un fouet."
      - "Cuisson. Ajoutez également 30g de sucre dans le batteur et montez les blancs en neige."
      - "Mélange. Incorporez à présent les blancs d’oeuf dans le saladier et mélangez doucement à l’aide d’une spatule. Ajoutez ensuite 50g de farine petit à petit, pour éviter les grumeaux."
      - "Cuisson. Votre appareil à biscuit est prêt. Étalez-le uniformément sur une plaque à pâtisserie à bords bas. Si vous n’en avez pas sous la main, une plaque de cuisson recouverte de papier sulfurisé fera l’affaire. Enfournez-le ensuite à 200°C pendant 5 à 7 minutes. Une fois cuit, vous pouvez le démouler, le retourner, puis le réserver."
      - "Cuisson. Place à la délicieuse ganache ! Faites fondre 450g de chocolat au lait dans un bain-marie. Dans une autre casserole, préparez la crème en versant 30 cL de crème et environ 50 g de miel. Portez à ébullition et mélangez."
      - "Cuisson. Versez le chocolat fondu dans un récipient. Incorporez environ un tiers de la crème, puis mélangez à l’aide d’une spatule jusqu’à ce que la ganache soit homogène. Réitérez l’opération deux fois, jusqu’à incorporer la totalité de la crème."
      - "Mélange. Pour que la ganache soit parfaite, mélangez-la une dernière fois à l’aide d’un mixeur plongeant. Laissez reposer au frais pendant environ 3h."
      - "Cuisson. Maintenant que la ganache est bien froide, montez-la à l’aide d’un batteur réglé à vitesse moyenne."
      - "Dressage. Place au dressage ! Étalez la ganache sur le biscuit et saupoudrez le tout d’un peu de pralin. Roulez votre biscuit, comme dans la vidéo ci-dessous. Découpez ensuite les bords de la bûche afin qu’ils soient parfaitement lisses."
      - "Finition. De nouveau, recouvrez votre bûche avec la ganache au chocolat. Vous pouvez ensuite décorer votre bûche à l’aide d’une fourchette (on vous montre comment faire dans la vidéo) et saupoudrer généreusement du pralin pour donner un bon goût de noisette. Et voilà, votre bûche de Noël est prête ! Laissez-la au frigo pour qu’elle se tienne bien au moment du dessert. Vous pouvez ajouter un peu de sucre en poudre dessus avant de la servir. Bon réveillon !"
      pro:
      - "Déposer deux jaunes d’oeufs et deux oeufs entiers dans un saladier. Placer les deux blancs d’oeufs dans la cuve d’un batteur."
      - "Ajouter 80 g de sucre dans le saladier. Mélanger au fouet."
      - "Ajouter 30 g de sucre dans le batteur. Monter les blancs en neige."
      - "Incorporer les blancs d’oeuf dans le saladier. Mélanger doucement à la spatule. Ajouter 50 g de farine petit à petit."
      - "Étaler l’appareil uniformément sur une plaque à pâtisserie à bords bas, ou une plaque de cuisson recouverte de papier sulfurisé. Enfourner à 200 °C pendant 5 à 7 minutes. Démouler, retourner, réserver."
      - "Fondre 450 g de chocolat au lait au bain-marie. Dans une autre casserole, verser 30 cL de crème et environ 50 g de miel. Porter à ébullition. Mélanger."
      - "Verser le chocolat fondu dans un récipient. Incorporer environ un tiers de la crème. Mélanger à la spatule jusqu’à ganache homogène. Répéter deux fois jusqu’à incorporation totale de la crème."
      - "Mixer une dernière fois au mixeur plongeant. Reposer au frais environ 3 h."
      - "Ganache bien froide : monter au batteur, vitesse moyenne."
      - "Étaler la ganache sur le biscuit. Saupoudrer un peu de pralin. Rouler le biscuit. Découper les bords de la bûche pour les lisser."
      - "Recouvrir la bûche de ganache au chocolat. Décorer à la fourchette. Saupoudrer généreusement de pralin. Réserver au frigo. Sucre en poudre au service, facultatif."
      cavernes:
      - "Préparation. Biscuit bûche. Saladier. Jaunes d’oeufs deux, oeufs entiers deux, déposer. Blancs d’oeufs deux, cuve batteur, placer."
      - "Mélange. Sucre 80g, saladier, ajouter. Fouet, mélanger."
      - "Cuisson. Sucre 30g, batteur, ajouter. Blancs, neige, monter."
      - "Mélange. Blancs d’oeuf, saladier, incorporer. Spatule, mélanger doucement. Farine 50g, petit à petit, ajouter. Grumeaux, éviter."
      - "Cuisson. Appareil biscuit prêt. Plaque pâtisserie bords bas, étaler uniforme. Ou plaque cuisson, papier sulfurisé. Four 200°C 5 à 7 minutes. Cuit, démouler, retourner, réserver."
      - "Cuisson. Ganache. Chocolat lait 450g, bain-marie, fondre. Autre casserole. Crème 30 cL, miel environ 50 g, verser. Ébullition, mélanger."
      - "Cuisson. Chocolat fondu, récipient, verser. Environ tiers crème, incorporer. Spatule, mélanger jusqu’à ganache homogène. Réitérer deux fois. Totalité crème, incorporer."
      - "Mélange. Mixeur plongeant, mélanger. Frais environ 3h."
      - "Cuisson. Ganache bien froide. Batteur vitesse moyenne, monter."
      - "Dressage. Ganache, biscuit, étaler. Pralin, saupoudrer. Biscuit, rouler. Bords bûche, découper, lisses."
      - "Finition. Bûche, ganache chocolat, recouvrir. Fourchette, décorer. Pralin, saupoudrer généreusement. Frigo. Sucre poudre dessus, servir. Bon réveillon !"
    kcal_per_serving: 381
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
    kcal_per_serving: 381
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
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 110
      unit: g
      item: sucre semoule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: chocolat noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sirop d'érable ou agave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pralin (noisettes caramélisées)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commençons par le biscuit de la bûche. Dans un saladier, déposez la moitié du tofu soyeux (ou de l’œuf de lin). Placez l’aquafaba (ou le reste de tofu soyeux) dans la cuve d’un batteur.
    - Mélange. Ajoutez 80g de sucre dans votre saladier, puis mélangez bien à l’aide d’un fouet.
    - Cuisson. Ajoutez également 30g de sucre dans le batteur et montez l’aquafaba (ou le tofu soyeux) en neige.
    - Mélange. Incorporez à présent l’aquafaba montée dans le saladier et mélangez doucement à l’aide
      d’une spatule. Ajoutez ensuite 50g de farine petit à petit, pour éviter les grumeaux.
    - Cuisson. Votre appareil à biscuit est prêt. Étalez-le uniformément sur une plaque à pâtisserie
      à bords bas. Si vous n’en avez pas sous la main, une plaque de cuisson recouverte de
      papier sulfurisé fera l’affaire. Enfournez-le ensuite à 200°C pendant 5 à 7 minutes.
      Une fois cuit, vous pouvez le démouler, le retourner, puis le réserver.
    - Cuisson. Place à la délicieuse ganache ! Faites fondre 450 g de chocolat noir dans un bain-marie. Dans une autre casserole, préparez la crème en versant 30 cL de crème de soja ou d’avoine et environ 50 g de sirop d’érable ou d’agave. Portez à ébullition et mélangez.
    - Mélange. Versez le chocolat fondu dans un récipient. Incorporez environ un tiers de la crème végétale, puis mélangez à l’aide d’une spatule jusqu’à ce que la ganache soit homogène. Réitérez
      l’opération deux fois, jusqu’à incorporer la totalité de la crème végétale.
    - Mélange. Pour que la ganache soit parfaite, mélangez-la une dernière fois à l’aide d’un mixeur
      plongeant. Laissez reposer au frais pendant environ 3h.
    - Cuisson. Maintenant que la ganache est bien froide, montez-la à l’aide d’un batteur réglé à vitesse
      moyenne.
    - Dressage. Place au dressage ! Étalez la ganache sur le biscuit et saupoudrez le tout d’un peu
      de pralin. Roulez votre biscuit, comme dans la vidéo ci-dessous. Découpez ensuite les
      bords de la bûche afin qu’ils soient parfaitement lisses.
    - Finition. De nouveau, recouvrez votre bûche avec la ganache au chocolat. Vous pouvez ensuite décorer
      votre bûche à l’aide d’une fourchette (on vous montre comment faire dans la vidéo) et
      saupoudrer généreusement du pralin pour donner un bon goût de noisette. Et voilà, votre
      bûche de Noël est prête ! Laissez-la au frigo pour qu’elle se tienne bien au moment
      du dessert. Vous pouvez ajouter un peu de sucre en poudre dessus avant de la servir.
      Bon réveillon !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par le biscuit de la bûche. Dans un saladier, déposez la moitié du tofu soyeux (ou de l’œuf de lin). Placez l’aquafaba (ou le reste de tofu soyeux) dans la cuve d’un batteur."
      - "Mélange. Ajoutez 80g de sucre dans votre saladier, puis mélangez bien à l’aide d’un fouet."
      - "Cuisson. Ajoutez également 30g de sucre dans le batteur et montez l’aquafaba (ou le tofu soyeux) en neige."
      - "Mélange. Incorporez à présent l’aquafaba montée dans le saladier et mélangez doucement à l’aide d’une spatule. Ajoutez ensuite 50g de farine petit à petit, pour éviter les grumeaux."
      - "Cuisson. Votre appareil à biscuit est prêt. Étalez-le uniformément sur une plaque à pâtisserie à bords bas. Si vous n’en avez pas sous la main, une plaque de cuisson recouverte de papier sulfurisé fera l’affaire. Enfournez-le ensuite à 200°C pendant 5 à 7 minutes. Une fois cuit, vous pouvez le démouler, le retourner, puis le réserver."
      - "Cuisson. Place à la délicieuse ganache ! Faites fondre 450 g de chocolat noir dans un bain-marie. Dans une autre casserole, préparez la crème en versant 30 cL de crème de soja ou d’avoine et environ 50 g de sirop d’érable ou d’agave. Portez à ébullition et mélangez."
      - "Mélange. Versez le chocolat fondu dans un récipient. Incorporez environ un tiers de la crème végétale, puis mélangez à l’aide d’une spatule jusqu’à ce que la ganache soit homogène. Réitérez l’opération deux fois, jusqu’à incorporer la totalité de la crème végétale."
      - "Mélange. Pour que la ganache soit parfaite, mélangez-la une dernière fois à l’aide d’un mixeur plongeant. Laissez reposer au frais pendant environ 3h."
      - "Cuisson. Maintenant que la ganache est bien froide, montez-la à l’aide d’un batteur réglé à vitesse moyenne."
      - "Dressage. Place au dressage ! Étalez la ganache sur le biscuit et saupoudrez le tout d’un peu de pralin. Roulez votre biscuit, comme dans la vidéo ci-dessous. Découpez ensuite les bords de la bûche afin qu’ils soient parfaitement lisses."
      - "Finition. De nouveau, recouvrez votre bûche avec la ganache au chocolat. Vous pouvez ensuite décorer votre bûche à l’aide d’une fourchette (on vous montre comment faire dans la vidéo) et saupoudrer généreusement du pralin pour donner un bon goût de noisette. Et voilà, votre bûche de Noël est prête ! Laissez-la au frigo pour qu’elle se tienne bien au moment du dessert. Vous pouvez ajouter un peu de sucre en poudre dessus avant de la servir. Bon réveillon !"
      pro:
      - "Déposer la moitié du tofu soyeux (ou de l’œuf de lin) dans un saladier. Placer l’aquafaba (ou le reste de tofu soyeux) dans la cuve d’un batteur."
      - "Ajouter 80 g de sucre dans le saladier. Mélanger au fouet."
      - "Ajouter 30 g de sucre dans le batteur. Monter l’aquafaba (ou le tofu soyeux) en neige."
      - "Incorporer l’aquafaba montée dans le saladier. Mélanger doucement à la spatule. Ajouter 50 g de farine petit à petit."
      - "Étaler l’appareil uniformément sur une plaque à pâtisserie à bords bas, ou une plaque de cuisson recouverte de papier sulfurisé. Enfourner à 200 °C pendant 5 à 7 minutes. Démouler, retourner, réserver."
      - "Fondre 450 g de chocolat noir au bain-marie. Dans une autre casserole, verser 30 cL de crème de soja ou d’avoine et environ 50 g de sirop d’érable ou d’agave. Porter à ébullition. Mélanger."
      - "Verser le chocolat fondu dans un récipient. Incorporer environ un tiers de la crème végétale. Mélanger à la spatule jusqu’à ganache homogène. Répéter deux fois jusqu’à incorporation totale de la crème végétale."
      - "Mixer une dernière fois au mixeur plongeant. Reposer au frais environ 3 h."
      - "Ganache bien froide : monter au batteur, vitesse moyenne."
      - "Étaler la ganache sur le biscuit. Saupoudrer un peu de pralin. Rouler le biscuit. Découper les bords de la bûche pour les lisser."
      - "Recouvrir la bûche de ganache au chocolat. Décorer à la fourchette. Saupoudrer généreusement de pralin. Réserver au frigo. Sucre en poudre au service, facultatif."
      cavernes:
      - "Préparation. Biscuit bûche. Saladier. Moitié tofu soyeux (ou œuf de lin), déposer. Aquafaba (ou reste tofu soyeux), cuve batteur, placer."
      - "Mélange. Sucre 80g, saladier, ajouter. Fouet, mélanger."
      - "Cuisson. Sucre 30g, batteur, ajouter. Aquafaba (ou tofu soyeux), neige, monter."
      - "Mélange. Aquafaba montée, saladier, incorporer. Spatule, mélanger doucement. Farine 50g, petit à petit, ajouter. Grumeaux, éviter."
      - "Cuisson. Appareil biscuit prêt. Plaque pâtisserie bords bas, étaler uniforme. Ou plaque cuisson, papier sulfurisé. Four 200°C 5 à 7 minutes. Cuit, démouler, retourner, réserver."
      - "Cuisson. Ganache. Chocolat noir 450 g, bain-marie, fondre. Autre casserole. Crème soja ou avoine 30 cL, sirop érable ou agave environ 50 g, verser. Ébullition, mélanger."
      - "Mélange. Chocolat fondu, récipient, verser. Environ tiers crème végétale, incorporer. Spatule, mélanger jusqu’à ganache homogène. Réitérer deux fois. Totalité crème végétale, incorporer."
      - "Mélange. Mixeur plongeant, mélanger. Frais environ 3h."
      - "Cuisson. Ganache bien froide. Batteur vitesse moyenne, monter."
      - "Dressage. Ganache, biscuit, étaler. Pralin, saupoudrer. Biscuit, rouler. Bords bûche, découper, lisses."
      - "Finition. Bûche, ganache chocolat, recouvrir. Fourchette, décorer. Pralin, saupoudrer généreusement. Frigo. Sucre poudre dessus, servir. Bon réveillon !"
    kcal_per_serving: 236
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
    kcal_per_serving: 381
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; crème"
---

# Bûche de Noël chocolat noisette

![[buche-de-noel-chocolat-noisette.webp]]
**Équipement :** [[fouet]] · [[batteur]] · [[mixeur-plongeant]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/buche-de-noel-chocolat-noisette]]

## Ingrédients (6 personnes)

- 4 œuf
- 110 g de sucre semoule
- 50 g de farine
- 450 g de chocolat au lait 40 %
- 30 cl de crème liquide entière
- 50 g de miel
-  pralin (noisettes caramélisées)

## Préparation

1. Commençons par le biscuit de la bûche. Dans un saladier, déposez deux jaunes d’oeufs ainsi que deux oeufs entiers. Placez les deux blancs d’oeufs dans la cuve d’un batteur.
2. Ajoutez 80g de sucre dans votre saladier, puis mélangez bien à l’aide d’un fouet.
3. Ajoutez également 30g de sucre dans le batteur et montez les blancs en neige.
4. Incorporez à présent les blancs d’oeuf dans le saladier et mélangez doucement à l’aide d’une spatule. Ajoutez ensuite 50g de farine petit à petit, pour éviter les grumeaux.
5. Votre appareil à biscuit est prêt. Étalez-le uniformément sur une plaque à pâtisserie à bords bas. Si vous n’en avez pas sous la main, une plaque de cuisson recouverte de papier sulfurisé fera l’affaire. Enfournez-le ensuite à 200°C pendant 5 à 7 minutes. Une fois cuit, vous pouvez le démouler, le retourner, puis le réserver.
6. Place à la délicieuse ganache ! Faites fondre 450g de chocolat au lait dans un bain-marie. Dans une autre casserole, préparez la crème en versant 30 cL de crème et environ 50 g de miel. Portez à ébullition et mélangez.
7. Versez le chocolat fondu dans un récipient. Incorporez environ un tiers de la crème, puis mélangez à l’aide d’une spatule jusqu’à ce que la ganache soit homogène. Réitérez l’opération deux fois, jusqu’à incorporer la totalité de la crème.
8. Pour que la ganache soit parfaite, mélangez-la une dernière fois à l’aide d’un mixeur plongeant. Laissez reposer au frais pendant environ 3h.
9. Maintenant que la ganache est bien froide, montez-la à l’aide d’un batteur réglé à vitesse moyenne.
10. Place au dressage ! Étalez la ganache sur le biscuit et saupoudrez le tout d’un peu de pralin. Roulez votre biscuit, comme dans la vidéo ci-dessous. Découpez ensuite les bords de la bûche afin qu’ils soient parfaitement lisses.
11. De nouveau, recouvrez votre bûche avec la ganache au chocolat. Vous pouvez ensuite décorer votre bûche à l’aide d’une fourchette (on vous montre comment faire dans la vidéo) et saupoudrer généreusement du pralin pour donner un bon goût de noisette.

 
 

 
 Et voilà, votre bûche de Noël est prête ! Laissez-la au frigo pour qu’elle se tienne bien au moment du dessert. Vous pouvez ajouter un peu de sucre en poudre dessus avant de la servir. Bon réveillon !
