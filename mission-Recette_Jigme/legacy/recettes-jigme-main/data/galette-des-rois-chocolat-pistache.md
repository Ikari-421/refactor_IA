---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: galette-des-rois-chocolat-pistache
title: Galette des rois chocolat pistache
lang: fr
description: "Galette des rois chocolat pistache : recette française avec pâte feuilletée, lait et oeuf, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- chocolat
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/galette-des-rois-chocolat-pistache.jpg
  alt: Galette des rois chocolat pistache
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/galette-des-rois-chocolat-pistache.md
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
    - from: crème de pistache
      to: graines de courge
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; œuf de lin (1 c.à.s. lin + 3 c.à.s.
      eau / œuf) ou tofu soyeux → pois chiches rôtis ; crème de soja ou avoine → crème d''avoine.'
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
  Même galette d’Épiphanie (feuilletage, fève), garniture chocolat-pistache à
  la place de la frangipane d’amande. Le geste (rois, 6 janvier) est ancien ;
  chocolat et pistache sont une variante de pâtisserie contemporaine.
fun_facts:
- text: "La galette du nord est feuilletée ; au sud, on sert souvent une brioche des rois aux fruits confits."
  source_name: Wikipedia, King cake
  source_url: https://en.wikipedia.org/wiki/King_cake
- text: "Pistache et chocolat masquent l’amande ; la fève se cache aussi bien dans cette crème."
  source_name: Usage
  source_url:
wines:
- name: Banyuls
  producer: Domaine de La Rectorie
  origin: Banyuls-sur-Mer, Roussillon
  grapes: grenache
  award:
  why: Cacao, figue — le chocolat de la galette.
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cerise, cacao — pistache et chocolat, tanin doux.
- name: Rivesaltes ambré
  producer: Domaine des Schistes
  origin: Estagel, Roussillon
  grapes: grenache, macabeu
  award:
  why: Noix, orange sèche — le feuilletage beurré.
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
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 30
      rest_min: 0
      total_min: 60
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: pâte feuilletée
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
    - qty: 6
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 170
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: poudre d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: crème de pistache
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pépites de chocolat
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Commencez par réaliser la crème pâtissière. Pour cela, faites chauffer le lait dans
      une grande casserole. Découpez une gousse de vanille et raclez l’intérieur à l’aide
      de la pointe d’un couteau. Mettez le tout à infuser dans le lait à feu doux.
    - Cuisson. Clarifiez 3 oeufs et placez les jaunes dans un saladier. Ajoutez-y 40g de sucre et 30g
      de farine, puis mélangez à l’aide d’un fouet. Complétez avec le lait bien chaud (pensez
      à retirer la gousse de vanille) et mélangez de nouveau.
    - Cuisson. Transvasez la crème pâtissière dans une casserole et faites-la cuire à feu doux pendant
      quelques minutes. Réservez-la ensuite au frigo.
    - Cuisson. Dans un saladier, cassez 3 oeufs. Ajoutez 130g de sucre, 130g de poudre d’amandes, 40g
      de crème de pistache et 130g de beurre que vous aurez fait fondre préalablement. Mélangez
      le tout à l’aide d’un fouet. Ajoutez enfin la crème pâtissière, et mélangez de nouveau
      jusqu’à obtenir un mélange homogène.
    - Cuisson. Munissez-vous de deux pâtes feuilletées (faites maison, c’est mieux) rondes de taille
      similaire. À l’aide d’une poche à douille, garnissez la première pâte de crème d’amande
      à la pistache en laissant environ 2cm vides sur les bords (vous pouvez observer le coup
      de main dans la vidéo ci-dessous). Saupoudrez de quelques pistoles de chocolat et dorés
      ensuite les bords de la pâte à l’aide de jaunes d’oeufs et d’un pinceau.
    - Cuisson. Pensez à ajouter la fève, puis déposez la seconde pâte feuilletée par-dessus. Badigeonnez
      le tout de jaune d’oeuf à l’aide de votre pinceau. Vous pouvez maintenant décoré le
      dessus de votre galette des rois à l’aide d’un couteau.
    - Repos. Laissez reposer le tout au frigo pendant environ 15 minutes pour que le jaune d’oeuf
      refroidisse. Badigeonnez de nouveau votre galette de jaune d’oeuf, puis enfournez-la
      pendant 30 minutes à 180°C. Votre galette est prête, il ne reste plus qu’à la découper
      et la déguster encore tiède. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Commencez par réaliser la crème pâtissière. Faites chauffer le lait dans une grande casserole. Découpez une gousse de vanille et raclez l’intérieur à l’aide de la pointe d’un couteau. Mettez le tout à infuser dans le lait à feu doux."
      - "Cuisson. Clarifiez 3 œufs et placez les jaunes dans un saladier. Ajoutez-y 40 g de sucre et 30 g de farine, puis mélangez à l’aide d’un fouet. Complétez avec le lait bien chaud (retirez la gousse de vanille) et mélangez de nouveau."
      - "Cuisson. Transvasez la crème pâtissière dans une casserole et faites-la cuire à feu doux pendant quelques minutes. Réservez-la ensuite au frigo."
      - "Cuisson. Dans un saladier, cassez 3 œufs. Ajoutez 130 g de sucre, 130 g de poudre d’amandes, 40 g de crème de pistache et 130 g de beurre que vous aurez fait fondre préalablement. Mélangez le tout à l’aide d’un fouet. Ajoutez enfin la crème pâtissière, et mélangez de nouveau jusqu’à obtenir un mélange homogène."
      - "Cuisson. Munissez-vous de deux pâtes feuilletées rondes de taille similaire. À l’aide d’une poche à douille, garnissez la première pâte de crème d’amande à la pistache en laissant environ 2 cm vides sur les bords. Saupoudrez de quelques pistoles de chocolat et dorez ensuite les bords de la pâte à l’aide de jaunes d’œufs et d’un pinceau."
      - "Cuisson. Ajoutez la fève, puis déposez la seconde pâte feuilletée par-dessus. Badigeonnez le tout de jaune d’œuf à l’aide de votre pinceau. Décorez le dessus de la galette à l’aide d’un couteau."
      - "Repos. Laissez reposer le tout au frigo pendant environ 15 minutes pour que le jaune d’œuf refroidisse. Badigeonnez de nouveau votre galette de jaune d’œuf, puis enfournez-la pendant 30 minutes à 180 °C. Découpez et dégustez encore tiède."
      pro:
      - "Chauffer le lait dans une grande casserole. Découper une gousse de vanille, racler l’intérieur à la pointe du couteau. Infuser le tout dans le lait à feu doux."
      - "Clarifier 3 œufs ; jaunes au saladier. Ajouter 40 g de sucre et 30 g de farine, mélanger au fouet. Retirer la gousse. Compléter avec le lait bien chaud, mélanger."
      - "Transvaser la crème pâtissière dans une casserole ; cuire à feu doux quelques minutes. Réserver au frigo."
      - "Casser 3 œufs. Ajouter 130 g de sucre, 130 g de poudre d’amandes, 40 g de crème de pistache et 130 g de beurre fondu préalablement. Mélanger au fouet. Incorporer la crème pâtissière jusqu’à homogénéité."
      - "Deux pâtes feuilletées rondes. Poche à douille : garnir la première de crème d’amande à la pistache, environ 2 cm de bords vides. Saupoudrer de pistoles de chocolat. Dorer les bords au pinceau avec des jaunes d’œufs."
      - "Ajouter la fève. Poser la seconde pâte. Badigeonner de jaune d’œuf. Décorer le dessus au couteau."
      - "Repos. Frigo environ 15 minutes, jaune d’œuf refroidi. Badigeonner de nouveau de jaune d’œuf. Enfourner 30 minutes à 180 °C. Servir tiède."
      cavernes:
      - "Cuisson. Crème pâtissière. Grande casserole, lait, chauffer. Gousse vanille, découper, intérieur, pointe couteau, racler. Tout, infuser lait, feu doux."
      - "Cuisson. 3 œufs, clarifier. Jaunes, saladier. 40 g sucre, 30 g farine, fouet, mélanger. Gousse vanille, retirer. Lait bien chaud, compléter, mélanger encore."
      - "Cuisson. Crème pâtissière, casserole, transvaser. Feu doux, quelques minutes. Frigo, réserver."
      - "Cuisson. Saladier, 3 œufs, casser. 130 g sucre, 130 g poudre d’amandes, 40 g crème de pistache, 130 g beurre fondu préalablement. Fouet, mélanger. Crème pâtissière, ajouter, mélanger jusqu’à homogène."
      - "Cuisson. Deux pâtes feuilletées rondes, taille similaire. Poche à douille, première pâte, crème d’amande pistache, environ 2 cm bords vides. Pistoles chocolat, saupoudrer. Bords, jaunes d’œufs, pinceau, dorer."
      - "Cuisson. Fève, ajouter. Seconde pâte feuilletée, dessus. Jaune d’œuf, pinceau, badigeonner. Dessus, couteau, décorer."
      - "Repos. Frigo environ 15 min, jaune d’œuf, refroidir. Jaune d’œuf, badigeonner encore. Four 30 min 180 °C. Découper, déguster tiède."
    kcal_per_serving: 650
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
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 650
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: pâte feuilletée vegan (à la margarine)
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
    - qty: 6
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 170
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: poudre d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: pépites de chocolat
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Commencez par réaliser la crème pâtissière. Pour cela, faites chauffer le lait d'avoine
      ou soja dans une grande casserole. Découpez une gousse de vanille et raclez l’intérieur
      à l’aide de la pointe d’un couteau. Mettez le tout à infuser dans le lait d'avoine ou
      soja à feu doux.
    - Mélange. Versez l’équivalent de 3 œufs de lin (ou de tofu soyeux) dans un saladier. Ajoutez-y 40g de sucre et 30g de farine, puis mélangez
      à l’aide d’un fouet. Complétez avec le lait d'avoine ou soja bien chaud (pensez à retirer
      la gousse de vanille) et mélangez de nouveau.
    - Cuisson. Transvasez la crème pâtissière dans une casserole et faites-la cuire à feu doux pendant
      quelques minutes. Réservez-la ensuite au frigo.
    - Cuisson. Dans un saladier, versez l’équivalent de 3 œufs de lin (ou de tofu soyeux).
      Ajoutez 130g de sucre, 130g de poudre d’amandes, 40g de crème de soja ou avoine et 130g
      de margarine végétale que vous aurez fait fondre préalablement. Mélangez
      le tout à l’aide d’un fouet. Ajoutez enfin la crème pâtissière, et mélangez de nouveau
      jusqu’à obtenir un mélange homogène.
    - Cuisson. Munissez-vous de deux pâtes feuilletées (faites maison, c’est mieux) rondes de taille
      similaire. À l’aide d’une poche à douille, garnissez la première pâte de crème d’amande
      à la pistache en laissant environ 2cm vides sur les bords (vous pouvez observer le coup
      de main dans la vidéo ci-dessous). Saupoudrez de quelques pistoles de chocolat et dorez ensuite les bords de la pâte avec du lait d’avoine et un pinceau.
    - Cuisson. Pensez à ajouter la fève, puis déposez la seconde pâte feuilletée par-dessus. Badigeonnez le tout de lait d’avoine à l’aide de votre pinceau. Vous pouvez maintenant décoré le dessus de votre galette des rois
      à l’aide d’un couteau.
    - Cuisson. Laissez reposer le tout au frigo pendant environ 15 minutes pour que la dorure fige. Badigeonnez de nouveau votre galette de lait d’avoine, puis enfournez-la pendant 30 minutes à 180°C. Votre galette est prête, il ne
      reste plus qu’à la découper et la déguster encore tiède. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Commencez par réaliser la crème pâtissière. Faites chauffer le lait d’avoine ou soja dans une grande casserole. Découpez une gousse de vanille et raclez l’intérieur à l’aide de la pointe d’un couteau. Mettez le tout à infuser dans le lait d’avoine ou soja à feu doux."
      - "Mélange. Versez l’équivalent de 3 œufs de lin (ou de tofu soyeux) dans un saladier. Ajoutez-y 40 g de sucre et 30 g de farine, puis mélangez à l’aide d’un fouet. Complétez avec le lait d’avoine ou soja bien chaud (retirez la gousse de vanille) et mélangez de nouveau."
      - "Cuisson. Transvasez la crème pâtissière dans une casserole et faites-la cuire à feu doux pendant quelques minutes. Réservez-la ensuite au frigo."
      - "Cuisson. Dans un saladier, versez l’équivalent de 3 œufs de lin (ou de tofu soyeux). Ajoutez 130 g de sucre, 130 g de poudre d’amandes, 40 g de crème de soja ou avoine et 130 g de margarine végétale que vous aurez fait fondre préalablement. Mélangez le tout à l’aide d’un fouet. Ajoutez enfin la crème pâtissière, et mélangez de nouveau jusqu’à obtenir un mélange homogène."
      - "Cuisson. Munissez-vous de deux pâtes feuilletées rondes de taille similaire. À l’aide d’une poche à douille, garnissez la première pâte de crème d’amande à la pistache en laissant environ 2 cm vides sur les bords. Saupoudrez de quelques pistoles de chocolat et dorez ensuite les bords de la pâte avec du lait d’avoine et un pinceau."
      - "Cuisson. Ajoutez la fève, puis déposez la seconde pâte feuilletée par-dessus. Badigeonnez le tout de lait d’avoine à l’aide de votre pinceau. Décorez le dessus de la galette à l’aide d’un couteau."
      - "Cuisson. Laissez reposer le tout au frigo pendant environ 15 minutes pour que la dorure fige. Badigeonnez de nouveau votre galette de lait d’avoine, puis enfournez-la pendant 30 minutes à 180 °C. Découpez et dégustez encore tiède."
      pro:
      - "Chauffer le lait d’avoine ou soja dans une grande casserole. Découper une gousse de vanille, racler l’intérieur à la pointe du couteau. Infuser le tout dans le lait d’avoine ou soja à feu doux."
      - "Verser l’équivalent de 3 œufs de lin (ou de tofu soyeux) dans un saladier. Ajouter 40 g de sucre et 30 g de farine, mélanger au fouet. Retirer la gousse. Compléter avec le lait d’avoine ou soja bien chaud, mélanger."
      - "Transvaser la crème pâtissière dans une casserole ; cuire à feu doux quelques minutes. Réserver au frigo."
      - "Verser l’équivalent de 3 œufs de lin (ou de tofu soyeux). Ajouter 130 g de sucre, 130 g de poudre d’amandes, 40 g de crème de soja ou avoine et 130 g de margarine végétale fondue préalablement. Mélanger au fouet. Incorporer la crème pâtissière jusqu’à homogénéité."
      - "Deux pâtes feuilletées rondes. Poche à douille : garnir la première de crème d’amande à la pistache, environ 2 cm de bords vides. Saupoudrer de pistoles de chocolat. Dorer les bords au lait d’avoine au pinceau."
      - "Ajouter la fève. Poser la seconde pâte. Badigeonner de lait d’avoine. Décorer le dessus au couteau."
      - "Frigo environ 15 minutes, dorure figée. Badigeonner de nouveau de lait d’avoine. Enfourner 30 minutes à 180 °C. Servir tiède."
      cavernes:
      - "Cuisson. Crème pâtissière. Grande casserole, lait d’avoine ou soja, chauffer. Gousse vanille, découper, intérieur, pointe couteau, racler. Tout, infuser lait d’avoine ou soja, feu doux."
      - "Mélange. Équivalent 3 œufs de lin ou tofu soyeux, saladier, verser. 40 g sucre, 30 g farine, fouet, mélanger. Gousse vanille, retirer. Lait d’avoine ou soja bien chaud, compléter, mélanger encore."
      - "Cuisson. Crème pâtissière, casserole, transvaser. Feu doux, quelques minutes. Frigo, réserver."
      - "Cuisson. Saladier, équivalent 3 œufs de lin ou tofu soyeux, verser. 130 g sucre, 130 g poudre d’amandes, 40 g crème de soja ou avoine, 130 g margarine végétale fondue préalablement. Fouet, mélanger. Crème pâtissière, ajouter, mélanger jusqu’à homogène."
      - "Cuisson. Deux pâtes feuilletées rondes, taille similaire. Poche à douille, première pâte, crème d’amande pistache, environ 2 cm bords vides. Pistoles chocolat, saupoudrer. Bords, lait d’avoine, pinceau, dorer."
      - "Cuisson. Fève, ajouter. Seconde pâte feuilletée, dessus. Lait d’avoine, pinceau, badigeonner. Dessus, couteau, décorer."
      - "Cuisson. Frigo environ 15 min, dorure, figer. Lait d’avoine, badigeonner encore. Four 30 min 180 °C. Découper, déguster tiède."
    kcal_per_serving: 421
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
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 650
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

# Galette des rois chocolat pistache
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/galette-des-rois-chocolat-pistache]]

## Ingrédients (4 personnes)

- 2 pâte feuilletée
- 25 cL de lait
- 6 oeuf
- 170 g de sucre
- 1 gousse de vanille
- 30 g de farine
- 130 g de poudre d'amande
- 40 g de crème de pistache
- 130 g de beurre
-  pépites de chocolat

## Préparation

1. Commencez par réaliser la crème pâtissière. Pour cela, faites chauffer le lait dans une grande casserole. Découpez une gousse de vanille et raclez l’intérieur à l’aide de la pointe d’un couteau. Mettez le tout à infuser dans le lait à feu doux.
2. Clarifiez 3 oeufs et placez les jaunes dans un saladier. Ajoutez-y 40g de sucre et 30g de farine, puis mélangez à l’aide d’un fouet. Complétez avec le lait bien chaud (pensez à retirer la gousse de vanille) et mélangez de nouveau.
3. Transvasez la crème pâtissière dans une casserole et faites-la cuire à feu doux pendant quelques minutes. Réservez-la ensuite au frigo.
4. Dans un saladier, cassez 3 oeufs. Ajoutez 130g de sucre, 130g de poudre d’amandes, 40g de crème de pistache et 130g de beurre que vous aurez fait fondre préalablement. Mélangez le tout à l’aide d’un fouet. Ajoutez enfin la crème pâtissière, et mélangez de nouveau jusqu’à obtenir un mélange homogène.
5. Munissez-vous de deux pâtes feuilletées (faites maison, c’est mieux) rondes de taille similaire. À l’aide d’une poche à douille, garnissez la première pâte de crème d’amande à la pistache en laissant environ 2cm vides sur les bords (vous pouvez observer le coup de main dans la vidéo ci-dessous). Saupoudrez de quelques pistoles de chocolat et dorés ensuite les bords de la pâte à l’aide de jaunes d’oeufs et d’un pinceau.
6. Pensez à ajouter la fève, puis déposez la seconde pâte feuilletée par-dessus. Badigeonnez le tout de jaune d’oeuf à l’aide de votre pinceau. Vous pouvez maintenant décoré le dessus de votre galette des rois à l’aide d’un couteau.
7. Laissez reposer le tout au frigo pendant environ 15 minutes pour que le jaune d’oeuf refroidisse. Badigeonnez de nouveau votre galette de jaune d’oeuf, puis enfournez-la pendant 30 minutes à 180°C.

 
 

 
 Votre galette est prête, il ne reste plus qu’à la découper et la déguster encore tiède. Bon appétit !
