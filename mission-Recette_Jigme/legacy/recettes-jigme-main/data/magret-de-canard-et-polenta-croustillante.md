---
schema: recette-web-jigme/v2
slug: magret-de-canard-et-polenta-croustillante
title: Magret de canard et polenta croustillante
lang: fr
description: "Magret de canard et polenta croustillante : recette française avec magrets de canard de 150 g, polenta et crème liquide ou de lait, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- canard
- polenta
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/magret-de-canard-et-polenta-croustillante.webp
  alt: Magret de canard et polenta croustillante
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/magret-de-canard-et-polenta-croustillante.md
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (pavé de saumon) : pas d’adaptation fiable.'
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
    note: 'Soja : lait d''avoine ou soja → lait d''avoine.'
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
  Magret : filet de canard (souvent mulard, canard à foie gras). André Daguin
  l’a fait connaître à Auch à la fin des années 1950, en le traitant comme un
  steak. Polenta : bouillie de maïs du nord de l’Italie, ici grillée jusqu’à
  croustiller.
fun_facts:
- text: >
    On saisit le magret côté peau d’abord : la graisse fond, la peau grille, la
    chair reste rosée.
  source_name: Usage
  source_url:
- text: >
    La polenta froide tranchée et rissolée n’est plus une bouillie : c’est un
    accompagnement croustillant, usage courant au nord de l’Italie.
  source_name: Wikipedia, Polenta
  source_url: https://en.wikipedia.org/wiki/Polenta
wines:
- name: Madiran
  producer: Producteurs Plaimont
  origin: Madiran, Sud-Ouest
  grapes: tannat
  award:
  why: Tannat du Sud-Ouest — le magret, tanin à la hauteur de la graisse.
- name: Bergerac
  producer: Château Tour des Gendres
  origin: Bergerac, Dordogne
  grapes: merlot, cabernet
  award:
  why: Merlot du Périgord — le canard, fruit sans un cahors trop austère.
- name: Gaillac
  producer: Domaine Rotier
  origin: Gaillac, Sud-Ouest
  grapes: duras, braucol
  award:
  why: Cépages du Tarn, poivre — le magret, voisin de terroir.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 20
      rest_min: 0
      total_min: 60
    equipment: &id002
    - casserole
    - poêle
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: magrets de canard
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: polenta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème liquide ou de lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
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
    - Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez
      la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant
      de mélanger.
    - Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés.
      Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement
      beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo.
    - Cuisson. Pendant que la polenta refroidit, préparez vos magrets de canards. Retirez les nerfs,
      ainsi que les morceaux de gras qui dépassent sur les côtés. Sur le côté blanc, quadrillez
      le gras avec la pointe d’un couteau. Salez et poivrez le magret, puis faite le saisir
      (côté gras) dans une poêle bien chaude. Pensez à le retourner au milieu de la cuisson.
    - Cuisson. Pendant que les magrets cuisent, préparons notre sauce. Dans une casserole, faite revenir
      la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de veau. Laissez
      réduire à feu doux.
    - Dressage. Mettez les magrets cuits de côté et conservez la poêle avec le gras de canard. La polenta
      ayant refroidit, vous devriez pouvoir en découper de gros rectangles. Roulez-les dans
      la polenta avant de les mettre à griller dans la graisse de canard. Une fois que les
      4 faces de la polenta sont bien dorées, vous pouvez passer au dressage ! Pour un dressage
      « de chef », placé le rectangle de polenta au milieu de l’assiette. Déposez de part
      et d’autres le magret de canard, préalablement coupé en deux dans le sens de la longueur.
      Terminez en ajoutant votre sauce ainsi que quelques herbes ciselées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant de mélanger."
      - "Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés. Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo."
      - "Cuisson. Pendant que la polenta refroidit, préparez vos magrets de canards. Retirez les nerfs, ainsi que les morceaux de gras qui dépassent sur les côtés. Sur le côté blanc, quadrillez le gras avec la pointe d’un couteau. Salez et poivrez le magret, puis faite le saisir (côté gras) dans une poêle bien chaude. Pensez à le retourner au milieu de la cuisson."
      - "Cuisson. Pendant que les magrets cuisent, préparons notre sauce. Dans une casserole, faite revenir la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de veau. [[reduire|Laissez réduire]] à feu doux."
      - "Dressage. Mettez les magrets cuits de côté et conservez la poêle avec le gras de canard. La polenta ayant refroidit, vous devriez pouvoir en découper de gros rectangles. Roulez-les dans la polenta avant de les mettre à griller dans la graisse de canard. Une fois que les 4 faces de la polenta sont bien dorées, vous pouvez passer au dressage ! Pour un dressage « de chef », placé le rectangle de polenta au milieu de l’assiette. Déposez de part et d’autres le magret de canard, préalablement coupé en deux dans le sens de la longueur. Terminez en ajoutant votre sauce ainsi que quelques herbes ciselées. Bon appétit !"
      pro:
      - "Porter l’eau à ébullition dans une casserole. Saler. Dès l’ébullition, ajouter la polenta petit à petit en mélangeant. Ajouter la crème liquide en continuant de mélanger."
      - "Polenta onctueuse : ajouter persil et ciboulette ciselés. Mélanger. Verser dans un plat à gratin préalablement beurré. Répartir également. Filmer. Réserver au frigo."
      - "Pendant le refroidissement de la polenta : retirer nerfs et morceaux de gras qui dépassent des magrets. Côté blanc : quadriller le gras à la pointe du couteau. Saler, poivrer. Saisir côté gras dans une poêle bien chaude. Retourner au milieu de la cuisson."
      - "Pendant la cuisson des magrets : dans une casserole, faire revenir la poudre de tandoori avec une noisette de beurre. Ajouter le fond de veau. Réduire à feu doux."
      - "Magrets cuits de côté. Conserver la poêle et le gras de canard. Polenta refroidie : découper de gros rectangles. Rouler dans la polenta. Griller dans la graisse de canard, 4 faces dorées. Rectangle de polenta au milieu de l’assiette. Magret coupé en deux dans le sens de la longueur, de part et d’autre. Sauce. Herbes ciselées."
      cavernes:
      - "Cuisson. Casserole. Eau, ébullition, saler. Eau bout. Polenta, petit à petit, ajouter, mélanger. Crème liquide, ajouter, mélanger."
      - "Cuisson. Polenta, onctueuse. Persil, ciboulette ciselés, ajouter. Mélanger. Plat gratin, beurré. Polenta crémeuse, verser, répartir. Filmer. Frigo, réserver."
      - "Cuisson. Polenta, refroidir. Magrets canards, préparer. Nerfs, morceaux gras côtés, retirer. Côté blanc, gras, pointe couteau, quadriller. Saler, poivrer. Poêle bien chaude, côté gras, saisir. Milieu cuisson, retourner."
      - "Cuisson. Magrets, cuire. Sauce. Casserole. Poudre tandoori, noisette beurre, revenir. Fond veau, ajouter. Feu doux, réduire."
      - "Dressage. Magrets cuits, côté. Poêle, gras canard, conserver. Polenta, refroidit. Gros rectangles, découper. Polenta, rouler. Graisse canard, griller. 4 faces, dorées. Rectangle polenta, milieu assiette. Magret, couper deux, sens longueur, part et d’autres. Sauce, herbes ciselées. Bon appétit."
    kcal_per_serving: 810
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
      item: aubergines rôties (gros quartiers)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: polenta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème liquide ou de lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
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
    - Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez
      la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant
      de mélanger.
    - Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés.
      Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement
      beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo.
    - Cuisson. Pendant que la polenta refroidit, préparez les aubergines. Coupez-les en gros quartiers, salez, poivrez, badigeonnez d’huile d’olive et faites-les rôtir à feu vif jusqu’à ce qu’elles soient bien colorées. Retournez-les à mi-cuisson.
    - Cuisson. Pendant que les aubergines rôtissent, préparons notre sauce. Dans une casserole, faites revenir la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de légumes. Laissez
      réduire à feu doux.
    - Réservez les aubergines. La polenta ayant refroidi, découpez-en de gros rectangles et faites-les griller dans une poêle avec un filet d’huile d’olive jusqu’à ce que les 4 faces soient dorées. Dressez un rectangle de polenta au centre, les quartiers d’aubergine de part et d’autre, la sauce et quelques herbes ciselées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant de mélanger."
      - "Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés. Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo."
      - "Cuisson. Pendant que la polenta refroidit, préparez les aubergines. Coupez-les en gros quartiers, salez, poivrez, badigeonnez d’huile d’olive et faites-les rôtir à feu vif jusqu’à ce qu’elles soient bien colorées. Retournez-les à mi-cuisson."
      - "Cuisson. Pendant que les aubergines rôtissent, préparons notre sauce. Dans une casserole, faites revenir la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de légumes. [[reduire|Laissez réduire]] à feu doux."
      - "Réservez les aubergines. La polenta ayant refroidi, découpez-en de gros rectangles et faites-les griller dans une poêle avec un filet d’huile d’olive jusqu’à ce que les 4 faces soient dorées. Dressez un rectangle de polenta au centre, les quartiers d’aubergine de part et d’autre, la sauce et quelques herbes ciselées. Bon appétit !"
      pro:
      - "Porter l’eau à ébullition dans une casserole. Saler. Dès l’ébullition, ajouter la polenta petit à petit en mélangeant. Ajouter la crème liquide en continuant de mélanger."
      - "Polenta onctueuse : ajouter persil et ciboulette ciselés. Mélanger. Verser dans un plat à gratin préalablement beurré. Répartir également. Filmer. Réserver au frigo."
      - "Pendant le refroidissement de la polenta : couper les aubergines en gros quartiers. Saler, poivrer. Badigeonner d’huile d’olive. Rôtir à feu vif jusqu’à bien colorées. Retourner à mi-cuisson."
      - "Pendant que les aubergines rôtissent : dans une casserole, faire revenir la poudre de tandoori avec une noisette de beurre. Ajouter le fond de légumes. Réduire à feu doux."
      - "Réserver les aubergines. Polenta refroidie : découper de gros rectangles. Griller à la poêle avec un filet d’huile d’olive, 4 faces dorées. Rectangle de polenta au centre. Quartiers d’aubergine de part et d’autre. Sauce. Herbes ciselées."
      cavernes:
      - "Cuisson. Casserole. Eau, ébullition, saler. Eau bout. Polenta, petit à petit, ajouter, mélanger. Crème liquide, ajouter, mélanger."
      - "Cuisson. Polenta, onctueuse. Persil, ciboulette ciselés, ajouter. Mélanger. Plat gratin, beurré. Polenta crémeuse, verser, répartir. Filmer. Frigo, réserver."
      - "Cuisson. Polenta, refroidir. Aubergines, gros quartiers, couper. Saler, poivrer. Huile d’olive, badigeonner. Feu vif, rôtir, colorées. Mi-cuisson, retourner."
      - "Cuisson. Aubergines, rôtir. Sauce. Casserole. Poudre tandoori, noisette beurre, revenir. Fond légumes, ajouter. Feu doux, réduire."
      - "Aubergines, réserver. Polenta, refroidi. Gros rectangles, découper. Poêle, filet huile d’olive, griller. 4 faces, dorées. Rectangle polenta, centre. Quartiers aubergine, part et d’autre. Sauce, herbes ciselées. Bon appétit."
    kcal_per_serving: 517
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: aubergines rôties (gros quartiers)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: polenta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
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
    - Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez
      la polenta petit à petit tout en mélangeant. Ajoutez ensuite le lait d’avoine ou de soja en continuant de mélanger.
    - Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés.
      Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement graissé avec de la margarine végétale. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo.
    - Cuisson. Pendant que la polenta refroidit, préparez les aubergines rôties. Salez, poivrez, et saisissez les quartiers dans une poêle bien chaude jusqu’à ce qu’ils soient bien colorés.
    - Cuisson. Pendant que les aubergines cuisent, préparons la sauce. Dans une casserole, faites revenir la poudre de tandoori avec une noisette de margarine végétale, puis ajoutez le fond de légumes. Laissez réduire à feu doux.
    - Réservez les aubergines. La polenta ayant refroidi, découpez-en de gros rectangles et faites-les dorer à la poêle avec un peu d’huile. Dressez la polenta au centre, les quartiers d’aubergine de part et d’autre, la sauce et des herbes ciselées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez la polenta petit à petit tout en mélangeant. Ajoutez ensuite le lait d’avoine ou de soja en continuant de mélanger."
      - "Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés. Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement graissé avec de la margarine végétale. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo."
      - "Cuisson. Pendant que la polenta refroidit, préparez les aubergines rôties. Salez, poivrez, et saisissez les quartiers dans une poêle bien chaude jusqu’à ce qu’ils soient bien colorés."
      - "Cuisson. Pendant que les aubergines cuisent, préparons la sauce. Dans une casserole, faites revenir la poudre de tandoori avec une noisette de margarine végétale, puis ajoutez le fond de légumes. [[reduire|Laissez réduire]] à feu doux."
      - "Réservez les aubergines. La polenta ayant refroidi, découpez-en de gros rectangles et faites-les dorer à la poêle avec un peu d’huile. Dressez la polenta au centre, les quartiers d’aubergine de part et d’autre, la sauce et des herbes ciselées. Bon appétit !"
      pro:
      - "Porter l’eau à ébullition dans une casserole. Saler. Dès l’ébullition, ajouter la polenta petit à petit en mélangeant. Ajouter le lait d’avoine ou de soja en continuant de mélanger."
      - "Polenta onctueuse : ajouter persil et ciboulette ciselés. Mélanger. Verser dans un plat à gratin préalablement graissé à la margarine végétale. Répartir également. Filmer. Réserver au frigo."
      - "Pendant le refroidissement de la polenta : saler, poivrer les quartiers d’aubergines. Saisir dans une poêle bien chaude jusqu’à bien colorés."
      - "Pendant la cuisson des aubergines : dans une casserole, faire revenir la poudre de tandoori avec une noisette de margarine végétale. Ajouter le fond de légumes. Réduire à feu doux."
      - "Réserver les aubergines. Polenta refroidie : découper de gros rectangles. Dorer à la poêle avec un peu d’huile. Polenta au centre. Quartiers d’aubergine de part et d’autre. Sauce. Herbes ciselées."
      cavernes:
      - "Cuisson. Casserole. Eau, ébullition, saler. Eau bout. Polenta, petit à petit, ajouter, mélanger. Lait d’avoine ou soja, ajouter, mélanger."
      - "Cuisson. Polenta, onctueuse. Persil, ciboulette ciselés, ajouter. Mélanger. Plat gratin, margarine végétale, graisser. Polenta crémeuse, verser, répartir. Filmer. Frigo, réserver."
      - "Cuisson. Polenta, refroidir. Aubergines rôties, préparer. Quartiers, saler, poivrer. Poêle bien chaude, saisir, colorés."
      - "Cuisson. Aubergines, cuire. Sauce. Casserole. Poudre tandoori, noisette margarine végétale, revenir. Fond légumes, ajouter. Feu doux, réduire."
      - "Aubergines, réserver. Polenta, refroidi. Gros rectangles, découper. Poêle, peu huile, dorer. Polenta, centre. Quartiers aubergine, part et d’autre. Sauce, herbes ciselées. Bon appétit."
    kcal_per_serving: 169
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
    - lactose
    - produits_laitiers
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pavé de saumon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: polenta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème liquide ou de lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez
      la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant
      de mélanger.
    - Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés.
      Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement
      beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo.
    - Cuisson. Pendant que la polenta refroidit, préparez vos magrets de canards. Retirez les nerfs,
      ainsi que les morceaux de gras qui dépassent sur les côtés. Sur le côté blanc, quadrillez
      le gras avec la pointe d’un couteau. Salez et poivrez le magret, puis faite le saisir
      (côté gras) dans une poêle bien chaude. Pensez à le retourner au milieu de la cuisson.
    - Cuisson. Pendant que les magrets cuisent, préparons notre sauce. Dans une casserole, faite revenir
      la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de veau. Laissez
      réduire à feu doux.
    - Dressage. Mettez les magrets cuits de côté et conservez la poêle avec le gras de canard. La polenta
      ayant refroidit, vous devriez pouvoir en découper de gros rectangles. Roulez-les dans
      la polenta avant de les mettre à griller dans la graisse de canard. Une fois que les
      4 faces de la polenta sont bien dorées, vous pouvez passer au dressage ! Pour un dressage
      « de chef », placé le rectangle de polenta au milieu de l’assiette. Déposez de part
      et d’autres le magret de canard, préalablement coupé en deux dans le sens de la longueur.
      Terminez en ajoutant votre sauce ainsi que quelques herbes ciselées. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant de mélanger."
      - "Cuisson. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés. Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo."
      - "Cuisson. Pendant que la polenta refroidit, préparez vos magrets de canards. Retirez les nerfs, ainsi que les morceaux de gras qui dépassent sur les côtés. Sur le côté blanc, quadrillez le gras avec la pointe d’un couteau. Salez et poivrez le magret, puis faite le saisir (côté gras) dans une poêle bien chaude. Pensez à le retourner au milieu de la cuisson."
      - "Cuisson. Pendant que les magrets cuisent, préparons notre sauce. Dans une casserole, faite revenir la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de veau. [[reduire|Laissez réduire]] à feu doux."
      - "Dressage. Mettez les magrets cuits de côté et conservez la poêle avec le gras de canard. La polenta ayant refroidit, vous devriez pouvoir en découper de gros rectangles. Roulez-les dans la polenta avant de les mettre à griller dans la graisse de canard. Une fois que les 4 faces de la polenta sont bien dorées, vous pouvez passer au dressage ! Pour un dressage « de chef », placé le rectangle de polenta au milieu de l’assiette. Déposez de part et d’autres le magret de canard, préalablement coupé en deux dans le sens de la longueur. Terminez en ajoutant votre sauce ainsi que quelques herbes ciselées. Bon appétit !"
      pro:
      - "Porter l’eau à ébullition dans une casserole. Saler. Dès l’ébullition, ajouter la polenta petit à petit en mélangeant. Ajouter la crème liquide en continuant de mélanger."
      - "Polenta onctueuse : ajouter persil et ciboulette ciselés. Mélanger. Verser dans un plat à gratin préalablement beurré. Répartir également. Filmer. Réserver au frigo."
      - "Pendant le refroidissement de la polenta : retirer nerfs et morceaux de gras qui dépassent des magrets. Côté blanc : quadriller le gras à la pointe du couteau. Saler, poivrer. Saisir côté gras dans une poêle bien chaude. Retourner au milieu de la cuisson."
      - "Pendant la cuisson des magrets : dans une casserole, faire revenir la poudre de tandoori avec une noisette de beurre. Ajouter le fond de veau. Réduire à feu doux."
      - "Magrets cuits de côté. Conserver la poêle et le gras de canard. Polenta refroidie : découper de gros rectangles. Rouler dans la polenta. Griller dans la graisse de canard, 4 faces dorées. Rectangle de polenta au milieu de l’assiette. Magret coupé en deux dans le sens de la longueur, de part et d’autre. Sauce. Herbes ciselées."
      cavernes:
      - "Cuisson. Casserole. Eau, ébullition, saler. Eau bout. Polenta, petit à petit, ajouter, mélanger. Crème liquide, ajouter, mélanger."
      - "Cuisson. Polenta, onctueuse. Persil, ciboulette ciselés, ajouter. Mélanger. Plat gratin, beurré. Polenta crémeuse, verser, répartir. Filmer. Frigo, réserver."
      - "Cuisson. Polenta, refroidir. Magrets canards, préparer. Nerfs, morceaux gras côtés, retirer. Côté blanc, gras, pointe couteau, quadriller. Saler, poivrer. Poêle bien chaude, côté gras, saisir. Milieu cuisson, retourner."
      - "Cuisson. Magrets, cuire. Sauce. Casserole. Poudre tandoori, noisette beurre, revenir. Fond veau, ajouter. Feu doux, réduire."
      - "Dressage. Magrets cuits, côté. Poêle, gras canard, conserver. Polenta, refroidit. Gros rectangles, découper. Polenta, rouler. Graisse canard, griller. 4 faces, dorées. Rectangle polenta, milieu assiette. Magret, couper deux, sens longueur, part et d’autres. Sauce, herbes ciselées. Bon appétit."
    kcal_per_serving: 632
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  pesco:
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Magret de canard et polenta croustillante

![[magret-de-canard-et-polenta-croustillante.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/magret-de-canard-et-polenta-croustillante]]

## Ingrédients (4 personnes)

- 4 magrets de canard de 150 g
- 250 g de polenta
- 60 cL d'eau
- 60 cL de crème liquide ou de lait
-  persil frais
-  ciboulette fraiche
-  sel
-  poivre

## Préparation

1. Dans une casserole, portez l’eau à ébullition et salez. Lorsque l’eau bout, ajoutez la polenta petit à petit tout en mélangeant. Ajoutez ensuite la crème liquide en continuant de mélanger.
2. Une fois que la polenta est bien onctueuse, ajoutez-y le persil et la ciboulette ciselés. Mélangez le tout, puis versez la polenta crémeuse dans un plat à gratin préalablement beurré. Répartissez-la également dans tout le plat, filmez, puis réservez au frigo.
3. Pendant que la polenta refroidit, préparez vos magrets de canards. Retirez les nerfs, ainsi que les morceaux de gras qui dépassent sur les côtés. Sur le côté blanc, quadrillez le gras avec la pointe d’un couteau. Salez et poivrez le magret, puis faite le saisir (côté gras) dans une poêle bien chaude. Pensez à le retourner au milieu de la cuisson.
4. Pendant que les magrets cuisent, préparons notre sauce. Dans une casserole, faite revenir la poudre de tandoori avec une noisette de beurre, puis ajoutez le fond de veau. Laissez réduire à feu doux.
5. Mettez les magrets cuits de côté et conservez la poêle avec le gras de canard. La polenta ayant refroidit, vous devriez pouvoir en découper de gros rectangles. Roulez-les dans la polenta avant de les mettre à griller dans la graisse de canard. Une fois que les 4 faces de la polenta sont bien dorées, vous pouvez passer au dressage !

 
 

 
 Pour un dressage « de chef », placé le rectangle de polenta au milieu de l’assiette. Déposez de part et d’autres le magret de canard, préalablement coupé en deux dans le sens de la longueur. Terminez en ajoutant votre sauce ainsi que quelques herbes ciselées. Bon appétit !
