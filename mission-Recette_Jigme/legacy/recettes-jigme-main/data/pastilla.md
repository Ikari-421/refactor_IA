---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: pastilla
title: Pastilla
lang: fr
description: "Pastilla : recette marocaine avec blanc de poulet, oignon rouge et carotte, pour 4 personnes. Version maison. Facile à suivre."
cuisine: marocaine
category: salé
tags:
- salé
- poulet
- Maroc
- brick
- fêtes
image:
  url:
  alt: Pastilla
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pastilla.md
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
    - from: feuille de brick
      to: feuille de riz
      note:
    note: 'Gluten : feuille de brick → feuille de riz.'
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
    - from: paneer (cubes)
      to: tofu ferme
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (cabillaud (cubes)) : pas d’adaptation fiable.'
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
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu ferme → pois chiches rôtis ; œuf de lin (1 c.à.s. lin + 3 c.à.s. eau
      / œuf) ou tofu soyeux → pois chiches rôtis.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Pastilla (bastilla) : tourte maghrébine, feuilles de warqa, viande (pigeon ou poulet), amandes,
  cannelle, sucre glace. Surtout marocaine. On raconte une origine andalouse, vers le XIIIe s., après
  les migrations d’al-Andalus — une piste, pas un jour.

  '
fun_facts:
- text: >
    Sucré-salé : la cannelle et le sucre glace ne sont pas une erreur, c’est le
    plat.
  source_name: Grokipedia, Pastilla
  source_url: https://grokipedia.com/page/Pastilla
- text: >
    La warqa est plus fine que le filo grec ; trop épaisse, la tourte se mâche.
  source_name: Wikipedia, Pastilla
  source_url: https://en.wikipedia.org/wiki/Pastilla
wines:
- name: Côtes du Rhône
  producer: Famille Perrin
  origin: Orange, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, épice douce — le poulet cannelle, tanin souple.
- name: Languedoc
  producer: Château de Lancyre
  origin: Pic Saint-Loup, Languedoc
  grapes: syrah, grenache
  award:
  why: Garrigue — les amandes et la cannelle, sans un tanin de garde.
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — le sucré-salé de la tourte.
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
    - oeuf
    - arachides
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 70
      cook_min: 30
      rest_min: 0
      total_min: 100
    equipment: &id002
    - four
    - casserole
    - fouet
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: blanc de poulet
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
    - qty: 2
      unit: piece
      item: carotte
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
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cacahuète
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: paprika
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: curry
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de volaille
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
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dégraissez et déveinez le blanc de poulet avant de le découper en morceaux.
    - Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse
      d’ail.
    - Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir les blancs
      de poulet.
    - Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout.
    - Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de volaille à hauteur avant de remuer
      à nouveau. Laissez cuire jusqu’à ce que le poulet devienne fondant, puis sortez-le de
      la casserole.
    - Cuisson. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant
      qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le
      feu.
    - Mélange. Émiettez grossièrement les morceaux de poulet et ajoutez-les à votre préparation. Mélangez
      bien.
    - Cuisson. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de
      celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui
      serviront à fermer la pastilla.
    - Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la
      verser dans le moule et de bien l’étaler.
    - Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec
      une dernière feuille.
    - Finition. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le
      dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine
      de minutes jusqu’à ce que votre pastilla soit bien colorée. Et voilà ! Une pastilla
      savoureuse, croquante à l’extérieur et tendre à l’intérieur. N’hésitez pas à la partager
      avec vos amis lors de vos repas aux saveurs orientales !
    steps_niveaux:
      amateur:
      - "Préparation. Dégraissez et déveinez le blanc de poulet avant de le découper en morceaux."
      - "Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse d’ail."
      - "Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir les blancs de poulet."
      - "Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout."
      - "Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de volaille à hauteur avant de remuer à nouveau. Laissez cuire jusqu’à ce que le poulet devienne fondant, puis sortez-le de la casserole."
      - "Cuisson. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le feu."
      - "Mélange. Émiettez grossièrement les morceaux de poulet et ajoutez-les à votre préparation. Mélangez bien."
      - "Cuisson. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui serviront à fermer la pastilla."
      - "Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la verser dans le moule et de bien l’étaler."
      - "Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec une dernière feuille."
      - "Finition. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine de minutes jusqu’à ce que votre pastilla soit bien colorée."
      pro:
      - "Dégraisser et déveiner le blanc de poulet. Découper en morceaux."
      - "Éplucher et couper l’oignon rouge et les carottes en morceaux. Hacher la gousse d’ail."
      - "Casserole bien chaude. Ajouter l’huile d’arachide. Saisir les blancs de poulet."
      - "Ajouter les carottes et les oignons. Mélanger."
      - "Ajouter l’ail, le curry, le paprika et le bouillon de volaille à hauteur. Remuer. Cuire jusqu’à poulet fondant. Sortir le poulet."
      - "Ajouter les oeufs. Fouetter pendant que ça épaissit, jusqu’à texture mayonnaise. Éteindre le feu."
      - "Émietter grossièrement les morceaux de poulet. Ajouter à la préparation. Mélanger."
      - "Beurrer le moule. Déposer deux feuilles de brick au fond, trois sur les côtés pour fermer."
      - "Ajouter les cacahuètes pillées et la coriandre hachée. Verser dans le moule. Étaler."
      - "Rabattre les feuilles latérales. Sécuriser avec une dernière feuille."
      - "Contrôler la fermeture. Étaler du beurre fondu sur le dessus. Enfourner à 180° une bonne vingtaine de minutes, jusqu’à coloration."
      cavernes:
      - "Préparation. Blanc poulet, dégraisser, déveiner. Morceaux, découper."
      - "Cuisson. Oignon rouge, carottes, éplucher, morceaux. Gousse d’ail, hacher."
      - "Cuisson. Casserole bien chaude. Huile d’arachide, ajouter. Blancs poulet, saisir."
      - "Cuisson. Carottes, oignons, casserole, ajouter. Tout, mélanger."
      - "Cuisson. Ail, curry, paprika, bouillon de volaille à hauteur, rajouter. Remuer. Poulet fondant, cuire. Poulet, casserole, sortir."
      - "Cuisson. Oeufs, casserole, ajouter. Fouet, mélanger pendant épaissit. Texture mayonnaise. Feu, éteindre."
      - "Mélange. Morceaux poulet, émietter grossièrement. Préparation, ajouter. Mélanger."
      - "Cuisson. Montage. Moule, beurrer. Fond : 2 feuilles brick. Côtés : 3 feuilles, fermer."
      - "Cuisson. Cacahuètes pillées, coriandre hachée, ajouter. Moule, verser. Étaler."
      - "Cuisson. Feuilles brick latérales, rabattre. Dernière feuille, sécuriser."
      - "Finition. Pastilla fermée. Beurre fondu, dessus, étaler. 180°, bonne vingtaine de minutes, enfourner. Colorée."
    kcal_per_serving: 338
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
    - oeuf
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: paneer (cubes)
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
    - qty: 2
      unit: piece
      item: carotte
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
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cacahuète
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: paprika
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: curry
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de légumes
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
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Découpez le paneer en morceaux.
    - Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse
      d’ail.
    - Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir le paneer en cubes.
    - Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout.
    - Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de légumes à hauteur avant de remuer
      à nouveau. Laissez cuire jusqu’à ce que le paneer soit bien imprégné, puis sortez-le de la casserole.
    - Cuisson. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant
      qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le
      feu.
    - Mélange. Émiettez grossièrement le paneer et ajoutez-le à votre préparation. Mélangez
      bien.
    - Cuisson. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de
      celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui
      serviront à fermer la pastilla.
    - Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la
      verser dans le moule et de bien l’étaler.
    - Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec
      une dernière feuille.
    - Finition. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le
      dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine
      de minutes jusqu’à ce que votre pastilla soit bien colorée. Et voilà ! Une pastilla
      savoureuse, croquante à l’extérieur et tendre à l’intérieur. N’hésitez pas à la partager
      avec vos amis lors de vos repas aux saveurs orientales !
    steps_niveaux:
      amateur:
      - "Préparation. Découpez le paneer en morceaux."
      - "Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse d’ail."
      - "Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir le paneer en cubes."
      - "Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout."
      - "Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de légumes à hauteur avant de remuer à nouveau. Laissez cuire jusqu’à ce que le paneer soit bien imprégné, puis sortez-le de la casserole."
      - "Cuisson. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le feu."
      - "Mélange. Émiettez grossièrement le paneer et ajoutez-le à votre préparation. Mélangez bien."
      - "Cuisson. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui serviront à fermer la pastilla."
      - "Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la verser dans le moule et de bien l’étaler."
      - "Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec une dernière feuille."
      - "Finition. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine de minutes jusqu’à ce que votre pastilla soit bien colorée."
      pro:
      - "Découper le paneer en morceaux."
      - "Éplucher et couper l’oignon rouge et les carottes en morceaux. Hacher la gousse d’ail."
      - "Casserole bien chaude. Ajouter l’huile d’arachide. Saisir le paneer en cubes."
      - "Ajouter les carottes et les oignons. Mélanger."
      - "Ajouter l’ail, le curry, le paprika et le bouillon de légumes à hauteur. Remuer. Cuire jusqu’à paneer imprégné. Sortir le paneer."
      - "Ajouter les oeufs. Fouetter pendant que ça épaissit, jusqu’à texture mayonnaise. Éteindre le feu."
      - "Émietter grossièrement le paneer. Ajouter à la préparation. Mélanger."
      - "Beurrer le moule. Déposer deux feuilles de brick au fond, trois sur les côtés pour fermer."
      - "Ajouter les cacahuètes pillées et la coriandre hachée. Verser dans le moule. Étaler."
      - "Rabattre les feuilles latérales. Sécuriser avec une dernière feuille."
      - "Contrôler la fermeture. Étaler du beurre fondu sur le dessus. Enfourner à 180° une bonne vingtaine de minutes, jusqu’à coloration."
      cavernes:
      - "Préparation. Paneer, morceaux, découper."
      - "Cuisson. Oignon rouge, carottes, éplucher, morceaux. Gousse d’ail, hacher."
      - "Cuisson. Casserole bien chaude. Huile d’arachide, ajouter. Paneer cubes, saisir."
      - "Cuisson. Carottes, oignons, casserole, ajouter. Tout, mélanger."
      - "Cuisson. Ail, curry, paprika, bouillon de légumes à hauteur, rajouter. Remuer. Paneer imprégné, cuire. Paneer, casserole, sortir."
      - "Cuisson. Oeufs, casserole, ajouter. Fouet, mélanger pendant épaissit. Texture mayonnaise. Feu, éteindre."
      - "Mélange. Paneer, émietter grossièrement. Préparation, ajouter. Mélanger."
      - "Cuisson. Montage. Moule, beurrer. Fond : 2 feuilles brick. Côtés : 3 feuilles, fermer."
      - "Cuisson. Cacahuètes pillées, coriandre hachée, ajouter. Moule, verser. Étaler."
      - "Cuisson. Feuilles brick latérales, rabattre. Dernière feuille, sécuriser."
      - "Finition. Pastilla fermée. Beurre fondu, dessus, étaler. 180°, bonne vingtaine de minutes, enfourner. Colorée."
    kcal_per_serving: 224
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
    - pesco
    - vegan
    allergens:
    - soja
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: tofu ferme
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
    - qty: 2
      unit: piece
      item: carotte
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
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cacahuète
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: paprika
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: curry
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de légumes
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
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dégraissez et déveinez le tofu ferme avant de le découper en morceaux.
    - Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse
      d’ail.
    - Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir le tofu ferme.
    - Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout.
    - Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de légumes à hauteur avant de remuer
      à nouveau. Laissez cuire jusqu’à ce que le tofu soit bien imprégné, puis sortez-le de la casserole.
    - Cuisson. Ajoutez les œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs dans la casserole
      et mélangez la préparation à l’aide d’un fouet pendant qu’elle épaissit. Lorsque la
      texture ressemble à celle d’une mayonnaise, éteignez le feu.
    - Mélange. Émiettez grossièrement le tofu et ajoutez-le à votre préparation. Mélangez
      bien.
    - Cuisson. Pour le montage de votre pastilla, commencez par graisser votre
      moule. Dans le fond de celui-ci, déposez deux feuilles de brick, puis trois autres feuilles
      sur les côtés qui serviront à fermer la pastilla.
    - Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la
      verser dans le moule et de bien l’étaler.
    - Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec
      une dernière feuille.
    - Cuisson. Veillez à ce que votre pastilla soit bien fermée, puis étalez de la margarine végétale fondue sur le dessus afin qu’elle dore bien au four. Enfournez à 180° pendant
      une bonne vingtaine de minutes jusqu’à ce que votre pastilla soit bien colorée. Et voilà
      ! Une pastilla savoureuse, croquante à l’extérieur et tendre à l’intérieur. N’hésitez
      pas à la partager avec vos amis lors de vos repas aux saveurs orientales !
    steps_niveaux:
      amateur:
      - "Préparation. Dégraissez et déveinez le tofu ferme avant de le découper en morceaux."
      - "Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse d’ail."
      - "Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir le tofu ferme."
      - "Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout."
      - "Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de légumes à hauteur avant de remuer à nouveau. Laissez cuire jusqu’à ce que le tofu soit bien imprégné, puis sortez-le de la casserole."
      - "Cuisson. Ajoutez les œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le feu."
      - "Mélange. Émiettez grossièrement le tofu et ajoutez-le à votre préparation. Mélangez bien."
      - "Cuisson. Pour le montage de votre pastilla, commencez par graisser votre moule. Dans le fond de celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui serviront à fermer la pastilla."
      - "Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la verser dans le moule et de bien l’étaler."
      - "Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec une dernière feuille."
      - "Cuisson. Veillez à ce que votre pastilla soit bien fermée, puis étalez de la margarine végétale fondue sur le dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine de minutes jusqu’à ce que votre pastilla soit bien colorée."
      pro:
      - "Dégraisser et déveiner le tofu ferme. Découper en morceaux."
      - "Éplucher et couper l’oignon rouge et les carottes en morceaux. Hacher la gousse d’ail."
      - "Casserole bien chaude. Ajouter l’huile d’arachide. Saisir le tofu ferme."
      - "Ajouter les carottes et les oignons. Mélanger."
      - "Ajouter l’ail, le curry, le paprika et le bouillon de légumes à hauteur. Remuer. Cuire jusqu’à tofu imprégné. Sortir le tofu."
      - "Ajouter les œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs. Fouetter pendant que ça épaissit, jusqu’à texture mayonnaise. Éteindre le feu."
      - "Émietter grossièrement le tofu. Ajouter à la préparation. Mélanger."
      - "Graisser le moule. Déposer deux feuilles de brick au fond, trois sur les côtés pour fermer."
      - "Ajouter les cacahuètes pillées et la coriandre hachée. Verser dans le moule. Étaler."
      - "Rabattre les feuilles latérales. Sécuriser avec une dernière feuille."
      - "Contrôler la fermeture. Étaler de la margarine végétale fondue sur le dessus. Enfourner à 180° une bonne vingtaine de minutes, jusqu’à coloration."
      cavernes:
      - "Préparation. Tofu ferme, dégraisser, déveiner. Morceaux, découper."
      - "Cuisson. Oignon rouge, carottes, éplucher, morceaux. Gousse d’ail, hacher."
      - "Cuisson. Casserole bien chaude. Huile d’arachide, ajouter. Tofu ferme, saisir."
      - "Cuisson. Carottes, oignons, casserole, ajouter. Tout, mélanger."
      - "Cuisson. Ail, curry, paprika, bouillon de légumes à hauteur, rajouter. Remuer. Tofu imprégné, cuire. Tofu, casserole, sortir."
      - "Cuisson. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeuxs, casserole, ajouter. Fouet, mélanger pendant épaissit. Texture mayonnaise. Feu, éteindre."
      - "Mélange. Tofu, émietter grossièrement. Préparation, ajouter. Mélanger."
      - "Cuisson. Montage. Moule, graisser. Fond : 2 feuilles brick. Côtés : 3 feuilles, fermer."
      - "Cuisson. Cacahuètes pillées, coriandre hachée, ajouter. Moule, verser. Étaler."
      - "Cuisson. Feuilles brick latérales, rabattre. Dernière feuille, sécuriser."
      - "Cuisson. Pastilla fermée. Margarine végétale fondue, dessus, étaler. 180°, bonne vingtaine de minutes, enfourner. Colorée."
    kcal_per_serving: 346
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
    - oeuf
    - poisson
    - arachides
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: cabillaud (cubes)
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
    - qty: 2
      unit: piece
      item: carotte
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
    - qty: 4
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: feuille de brick
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cacahuète
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: paprika
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: curry
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: bouillon de légumes
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
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dégraissez et déveinez le cabillaud (cubes) avant de le découper en morceaux.
    - Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse
      d’ail.
    - Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir les blancs
      de poulet.
    - Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout.
    - Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de légumes à hauteur avant de remuer
      à nouveau. Laissez cuire jusqu’à ce que le poulet devienne fondant, puis sortez-le de
      la casserole.
    - Cuisson. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant
      qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le
      feu.
    - Mélange. Émiettez grossièrement les morceaux de poulet et ajoutez-les à votre préparation. Mélangez
      bien.
    - Cuisson. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de
      celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui
      serviront à fermer la pastilla.
    - Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la
      verser dans le moule et de bien l’étaler.
    - Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec
      une dernière feuille.
    - Finition. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le
      dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine
      de minutes jusqu’à ce que votre pastilla soit bien colorée. Et voilà ! Une pastilla
      savoureuse, croquante à l’extérieur et tendre à l’intérieur. N’hésitez pas à la partager
      avec vos amis lors de vos repas aux saveurs orientales !
    steps_niveaux:
      amateur:
      - "Préparation. Dégraissez et déveinez le cabillaud (cubes) avant de le découper en morceaux."
      - "Cuisson. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse d’ail."
      - "Cuisson. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir les blancs de poulet."
      - "Cuisson. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout."
      - "Cuisson. Rajoutez l’ail, le curry, le paprika et le bouillon de légumes à hauteur avant de remuer à nouveau. Laissez cuire jusqu’à ce que le poulet devienne fondant, puis sortez-le de la casserole."
      - "Cuisson. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le feu."
      - "Mélange. Émiettez grossièrement les morceaux de poulet et ajoutez-les à votre préparation. Mélangez bien."
      - "Cuisson. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui serviront à fermer la pastilla."
      - "Cuisson. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la verser dans le moule et de bien l’étaler."
      - "Cuisson. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec une dernière feuille."
      - "Finition. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine de minutes jusqu’à ce que votre pastilla soit bien colorée."
      pro:
      - "Dégraisser et déveiner le cabillaud (cubes). Découper en morceaux."
      - "Éplucher et couper l’oignon rouge et les carottes en morceaux. Hacher la gousse d’ail."
      - "Casserole bien chaude. Ajouter l’huile d’arachide. Saisir les blancs de poulet."
      - "Ajouter les carottes et les oignons. Mélanger."
      - "Ajouter l’ail, le curry, le paprika et le bouillon de légumes à hauteur. Remuer. Cuire jusqu’à poulet fondant. Sortir le poulet."
      - "Ajouter les oeufs. Fouetter pendant que ça épaissit, jusqu’à texture mayonnaise. Éteindre le feu."
      - "Émietter grossièrement les morceaux de poulet. Ajouter à la préparation. Mélanger."
      - "Beurrer le moule. Déposer deux feuilles de brick au fond, trois sur les côtés pour fermer."
      - "Ajouter les cacahuètes pillées et la coriandre hachée. Verser dans le moule. Étaler."
      - "Rabattre les feuilles latérales. Sécuriser avec une dernière feuille."
      - "Contrôler la fermeture. Étaler du beurre fondu sur le dessus. Enfourner à 180° une bonne vingtaine de minutes, jusqu’à coloration."
      cavernes:
      - "Préparation. Cabillaud (cubes), dégraisser, déveiner. Morceaux, découper."
      - "Cuisson. Oignon rouge, carottes, éplucher, morceaux. Gousse d’ail, hacher."
      - "Cuisson. Casserole bien chaude. Huile d’arachide, ajouter. Blancs poulet, saisir."
      - "Cuisson. Carottes, oignons, casserole, ajouter. Tout, mélanger."
      - "Cuisson. Ail, curry, paprika, bouillon de légumes à hauteur, rajouter. Remuer. Poulet fondant, cuire. Poulet, casserole, sortir."
      - "Cuisson. Oeufs, casserole, ajouter. Fouet, mélanger pendant épaissit. Texture mayonnaise. Feu, éteindre."
      - "Mélange. Morceaux poulet, émietter grossièrement. Préparation, ajouter. Mélanger."
      - "Cuisson. Montage. Moule, beurrer. Fond : 2 feuilles brick. Côtés : 3 feuilles, fermer."
      - "Cuisson. Cacahuètes pillées, coriandre hachée, ajouter. Moule, verser. Étaler."
      - "Cuisson. Feuilles brick latérales, rabattre. Dernière feuille, sécuriser."
      - "Finition. Pastilla fermée. Beurre fondu, dessus, étaler. 180°, bonne vingtaine de minutes, enfourner. Colorée."
    kcal_per_serving: 224
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

# Pastilla
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pastilla]]

## Ingrédients (4 personnes)

- 500 g de blanc de poulet
- 1 oignon rouge
- 2 carotte
- 1 gousse d'ail
- 4 oeuf
- 05 feuille de brick
-  coriandre
-  cacahuète
-  paprika
-  curry
-  bouillon de volaille
-  huile d'arachide
-  beurre

## Préparation

1. Dégraissez et déveinez le blanc de poulet avant de le découper en morceaux.
2. Épluchez et coupez l’oignon rouge et les carottes en morceaux, puis hachez la gousse d’ail.
3. Dans une casserole bien chaude, ajoutez l’huile d’arachide et faites saisir les blancs de poulet.
4. Ajoutez les carottes et les oignons dans la casserole et mélangez le tout.
5. Rajoutez l’ail, le curry, le paprika et le bouillon de volaille à hauteur avant de remuer à nouveau. Laissez cuire jusqu’à ce que le poulet devienne fondant, puis sortez-le de la casserole.
6. Ajoutez les oeufs dans la casserole et mélangez la préparation à l’aide d’un fouet pendant qu’elle épaissit. Lorsque la texture ressemble à celle d’une mayonnaise, éteignez le feu.
7. Émiettez grossièrement les morceaux de poulet et ajoutez-les à votre préparation. Mélangez bien.
8. Pour le montage de votre pastilla, commencez par beurrer votre moule. Dans le fond de celui-ci, déposez deux feuilles de brick, puis trois autres feuilles sur les côtés qui serviront à fermer la pastilla.
9. Ajoutez les cacahuètes pillées et la coriandre hachée à votre préparation avant de la verser dans le moule et de bien l’étaler.
10. Rabattez les feuilles de brick latérales sur le dessus de la pastilla et sécurisez avec une dernière feuille.
11. Veillez à ce que votre pastilla soit bien fermée, puis étalez du beurre fondu sur le dessus afin qu’elle dore bien au four. Enfournez à 180° pendant une bonne vingtaine de minutes jusqu’à ce que votre pastilla soit bien colorée.

 
 

 
 Et voilà ! Une pastilla savoureuse, croquante à l’extérieur et tendre à l’intérieur. N’hésitez pas à la partager avec vos amis lors de vos repas aux saveurs orientales !
