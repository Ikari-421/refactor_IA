---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: galette-des-rois-a-la-frangipane
title: Galette des rois à la frangipane
lang: fr
description: "Galette des rois à la frangipane : recette française avec pâte feuilletée, farine et sucre en poudre, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- galette
- amande
- hiver
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/galette-des-rois-a-la-frangipane.jpg
  alt: Galette des rois à la frangipane
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/galette-des-rois-a-la-frangipane.md
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
    - from: poudre d'amandes
      to: graines de tournesol
      note:
    note: 'Fruits à coque : poudre d''amandes → graines de tournesol.'
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
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; lait d''avoine ou soja → lait d''avoine.'
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
histoire: 'Galette des rois : pâte feuilletée, frangipane, fève, Épiphanie (6 janvier). Deux disques de
  feuilletage, crème d’amandes. Gâteau des Rois dans plusieurs pays ; la version feuilletée à la frangipane
  est surtout française du nord.

  '
fun_facts:
- text: Qui tire la fève est roi ou reine du jour ; l’usage de la figurine en porcelaine est plus tardif
    que la fève.
  source_name: Grokipedia, List of French desserts
  source_url: https://grokipedia.com/page/List_of_French_desserts
- text: On raconte que le nom frangipane viendrait d’un parfum d’amande du XVIIe s. (famille Frangipani)
    ; l’étymologie n’est pas tranchée.
  source_name: Grokipedia, Frangipane
  source_url: https://grokipedia.com/page/Frangipane
- text: 'Pour aller plus loin : l’histoire de « Galette des rois à la frangipane ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Galette_des_rois
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Rochefort-sur-Loire, Anjou
  grapes: chenin blanc
  award:
  why: Pomme, miel — l’amande et le feuilletage.
- name: Vouvray moelleux
  producer: Domaine Champalou
  origin: Vouvray, Loire
  grapes: chenin blanc
  award:
  why: Coing, cire — la frangipane, un chenin plus ample.
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin blanc
  award:
  why: Bulles, pomme — la galette de l’Épiphanie, sans un liquoreux lourd.
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
      cook_min: 40
      rest_min: 90
      total_min: 160
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
    - qty: 30
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: poudre d'amandes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: beurre
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
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Préparez d’abord la crème pâtissière : dans un récipient, cassez 2 œufs entiers (pour 6 personnes). Ajoutez la moitié du sucre et mélangez. Incorporez la farine petit à petit, en mélangeant, pour éviter les grumeaux."
    - "Cuisson. Dans une casserole, faites chauffer le lait et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrez d’un film alimentaire pour conserver les arômes de vanille."
    - "Mélange. Lorsque le lait est chaud, versez-le sur la préparation en fouettant. Transvasez dans la casserole et faites cuire à feu doux 3 minutes en mélangeant sans arrêt."
    - "Cuisson. Débarrassez la crème dans une assiette filmée, recouvrez d’un second film alimentaire, puis réservez au réfrigérateur jusqu’à complet refroidissement."
    - "Cuisson. Préparez la crème d’amande : dans un récipient, déposez 4 jaunes d’œufs (pour 6 personnes) et l’autre moitié du sucre. Fouettez énergiquement. Ajoutez le beurre pommade, ramolli à température ambiante, puis la poudre d’amandes, et mélangez de nouveau."
    - "Repos. Sortez la crème pâtissière du réfrigérateur : elle doit être froide et légèrement compacte. Détendez-la au fouet jusqu’à ce qu’elle soit souple et homogène, puis incorporez-la à la crème d’amande."
    - "Cuisson. Mettez la préparation dans une poche à douille. Posez une première pâte feuilletée sur le plan de travail, puis dressez la crème en spirale, de l’intérieur vers l’extérieur. Sans poche, procédez à la cuillère. Laissez 1 cm à 2 cm de bord sans crème et n’oubliez pas la fève."
    - "Cuisson. Dorez les bords libres au pinceau avec un peu de jaune d’œuf. Posez la seconde pâte feuilletée, soudez les rebords avec les doigts et chiquetez au couteau. Dorez toute la galette au jaune d’œuf, puis quadrillez-la de la pointe du couteau."
    - "Cuisson. Enfournez à 180 °C pendant environ 30 min, jusqu’à ce que la galette soit bien dorée. Servez avec la fève et la couronne."
    steps_niveaux:
      amateur:
      - "Préparation. Préparez d’abord la crème pâtissière : dans un récipient, cassez 2 œufs entiers (pour 6 personnes). Ajoutez la moitié du sucre et mélangez. Incorporez la farine petit à petit, en mélangeant, pour éviter les grumeaux."
      - "Cuisson. Dans une casserole, faites chauffer le lait et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrez d’un film alimentaire pour conserver les arômes de vanille."
      - "Mélange. Lorsque le lait est chaud, versez-le sur la préparation en fouettant. Transvasez dans la casserole et faites cuire à feu doux 3 minutes en mélangeant sans arrêt."
      - "Cuisson. Débarrassez la crème dans une assiette filmée, recouvrez d’un second film alimentaire, puis réservez au réfrigérateur jusqu’à complet refroidissement."
      - "Cuisson. Préparez la crème d’amande : dans un récipient, déposez 4 jaunes d’œufs (pour 6 personnes) et l’autre moitié du sucre. Fouettez énergiquement. Ajoutez le beurre pommade, ramolli à température ambiante, puis la poudre d’amandes, et mélangez de nouveau."
      - "Repos. Sortez la crème pâtissière du réfrigérateur : elle doit être froide et légèrement compacte. Détendez-la au fouet jusqu’à ce qu’elle soit souple et homogène, puis incorporez-la à la crème d’amande."
      - "Cuisson. Mettez la préparation dans une poche à douille. Posez une première pâte feuilletée sur le plan de travail, puis dressez la crème en spirale, de l’intérieur vers l’extérieur. Sans poche, procédez à la cuillère. Laissez 1 cm à 2 cm de bord sans crème et n’oubliez pas la fève."
      - "Cuisson. Dorez les bords libres au pinceau avec un peu de jaune d’œuf. Posez la seconde pâte feuilletée, soudez les rebords avec les doigts et chiquetez au couteau. Dorez toute la galette au jaune d’œuf, puis quadrillez-la de la pointe du couteau."
      - "Cuisson. Enfournez à 180 °C pendant environ 30 min, jusqu’à ce que la galette soit bien dorée. Servez avec la fève et la couronne."
      pro:
      - "Préparer la crème pâtissière : casser 2 œufs entiers (pour 6 personnes), ajouter la moitié du sucre, mélanger. Incorporer la farine petit à petit pour éviter les grumeaux."
      - "Chauffer le lait et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrir d’un film alimentaire."
      - "Verser le lait chaud sur la préparation en fouettant. Transvaser dans la casserole ; cuire à feu doux 3 minutes en mélangeant sans arrêt."
      - "Débarrasser la crème dans une assiette filmée, recouvrir d’un second film, réserver au réfrigérateur jusqu’à complet refroidissement."
      - "Crème d’amande : 4 jaunes d’œufs (pour 6 personnes) et l’autre moitié du sucre, fouetter énergiquement. Ajouter le beurre pommade à température ambiante, puis la poudre d’amandes ; mélanger."
      - "Sortir la crème pâtissière froide et légèrement compacte. Détendre au fouet jusqu’à souplesse, incorporer à la crème d’amande."
      - "Poche à douille. Dresser la crème en spirale sur une première pâte feuilletée, de l’intérieur vers l’extérieur ; sinon à la cuillère. Laisser 1 cm à 2 cm de bord. Placer la fève."
      - "Dorer les bords libres au pinceau avec un peu de jaune d’œuf. Poser la seconde pâte, souder, chiqueter. Dorer toute la galette, quadriller de la pointe du couteau."
      - "Enfourner à 180 °C environ 30 min, jusqu’à bien dorée. Servir avec la fève et la couronne."
      cavernes:
      - "Préparation. Crème pâtissière. Récipient, 2 œufs entiers (6 personnes), casser. Moitié sucre, mélanger. Farine petit à petit, mélanger. Grumeaux, éviter."
      - "Cuisson. Casserole, lait, contenu gousse vanille, chauffer jusqu’à frémissement. Film alimentaire, couvrir. Arômes vanille."
      - "Mélange. Lait chaud, verser sur préparation, fouetter. Casserole, transvaser. Feu doux 3 min, mélanger sans arrêt."
      - "Cuisson. Crème, assiette filmée. Second film alimentaire, recouvrir. Frigo jusqu’à complet refroidissement."
      - "Cuisson. Crème d’amande. Récipient, 4 jaunes d’œufs (6 personnes), autre moitié sucre. Fouetter énergiquement. Beurre pommade, température ambiante, poudre d’amandes, mélanger encore."
      - "Repos. Crème pâtissière, frigo, sortir. Froide, légèrement compacte. Fouet, détendre, souple, homogène. Crème d’amande, incorporer."
      - "Cuisson. Poche à douille, préparation. Première pâte feuilletée, plan de travail. Crème, spirale, intérieur vers extérieur. Sans poche, cuillère. Bord 1 cm à 2 cm sans crème. Fève."
      - "Cuisson. Bords libres, pinceau, peu jaune d’œuf, dorer. Seconde pâte feuilletée, poser. Rebords, doigts, souder. Couteau, chiqueter. Galette entière, jaune d’œuf, dorer. Pointe couteau, quadriller."
      - "Cuisson. Four 180 °C environ 30 min, jusqu’à bien dorée. Fève, couronne, servir."
    kcal_per_serving: 324
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
    kcal_per_serving: 324
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
    - soja
    - fruits_a_coque
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
    - qty: 30
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: poudre d'amandes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 7
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: margarine végétale
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
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Mélange. Préparez d’abord la crème pâtissière : dans un récipient, versez l’équivalent de 2 œufs de lin (ou de tofu soyeux). Ajoutez la moitié du sucre et mélangez. Incorporez la farine petit à petit, en mélangeant, pour éviter les grumeaux."
    - "Cuisson. Dans une casserole, faites chauffer le lait d’avoine ou de soja et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrez d’un film alimentaire pour conserver les arômes de vanille."
    - "Mélange. Lorsque le lait d’avoine ou de soja est chaud, versez-le sur la préparation en fouettant. Transvasez dans la casserole et faites cuire à feu doux 3 minutes en mélangeant sans arrêt."
    - "Cuisson. Débarrassez la crème dans une assiette filmée, recouvrez d’un second film alimentaire, puis réservez au réfrigérateur jusqu’à complet refroidissement."
    - "Mélange. Préparez la crème d’amande : dans un récipient, déposez l’équivalent de 4 œufs de lin (ou de tofu soyeux) et l’autre moitié du sucre. Fouettez énergiquement. Ajoutez la margarine végétale pommade, ramollie à température ambiante, puis la poudre d’amandes, et mélangez de nouveau."
    - "Repos. Sortez la crème pâtissière du réfrigérateur : elle doit être froide et légèrement compacte. Détendez-la au fouet jusqu’à ce qu’elle soit souple et homogène, puis incorporez-la à la crème d’amande."
    - "Cuisson. Mettez la préparation dans une poche à douille. Posez une première pâte feuilletée vegan sur le plan de travail, puis dressez la crème en spirale, de l’intérieur vers l’extérieur. Sans poche, procédez à la cuillère. Laissez 1 cm à 2 cm de bord sans crème et n’oubliez pas la fève."
    - "Cuisson. Dorez les bords libres au pinceau avec un peu de lait d’avoine. Posez la seconde pâte feuilletée vegan, soudez les rebords avec les doigts et chiquetez au couteau. Dorez toute la galette au lait d’avoine, puis quadrillez-la de la pointe du couteau."
    - "Cuisson. Enfournez à 180 °C pendant environ 30 min, jusqu’à ce que la galette soit bien dorée. Servez avec la fève et la couronne."
    steps_niveaux:
      amateur:
      - "Mélange. Préparez d’abord la crème pâtissière : dans un récipient, versez l’équivalent de 2 œufs de lin (ou de tofu soyeux). Ajoutez la moitié du sucre et mélangez. Incorporez la farine petit à petit, en mélangeant, pour éviter les grumeaux."
      - "Cuisson. Dans une casserole, faites chauffer le lait d’avoine ou de soja et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrez d’un film alimentaire pour conserver les arômes de vanille."
      - "Mélange. Lorsque le lait d’avoine ou de soja est chaud, versez-le sur la préparation en fouettant. Transvasez dans la casserole et faites cuire à feu doux 3 minutes en mélangeant sans arrêt."
      - "Cuisson. Débarrassez la crème dans une assiette filmée, recouvrez d’un second film alimentaire, puis réservez au réfrigérateur jusqu’à complet refroidissement."
      - "Mélange. Préparez la crème d’amande : dans un récipient, déposez l’équivalent de 4 œufs de lin (ou de tofu soyeux) et l’autre moitié du sucre. Fouettez énergiquement. Ajoutez la margarine végétale pommade, ramollie à température ambiante, puis la poudre d’amandes, et mélangez de nouveau."
      - "Repos. Sortez la crème pâtissière du réfrigérateur : elle doit être froide et légèrement compacte. Détendez-la au fouet jusqu’à ce qu’elle soit souple et homogène, puis incorporez-la à la crème d’amande."
      - "Cuisson. Mettez la préparation dans une poche à douille. Posez une première pâte feuilletée vegan sur le plan de travail, puis dressez la crème en spirale, de l’intérieur vers l’extérieur. Sans poche, procédez à la cuillère. Laissez 1 cm à 2 cm de bord sans crème et n’oubliez pas la fève."
      - "Cuisson. Dorez les bords libres au pinceau avec un peu de lait d’avoine. Posez la seconde pâte feuilletée vegan, soudez les rebords avec les doigts et chiquetez au couteau. Dorez toute la galette au lait d’avoine, puis quadrillez-la de la pointe du couteau."
      - "Cuisson. Enfournez à 180 °C pendant environ 30 min, jusqu’à ce que la galette soit bien dorée. Servez avec la fève et la couronne."
      pro:
      - "Préparer la crème pâtissière : verser l’équivalent de 2 œufs de lin (ou de tofu soyeux), ajouter la moitié du sucre, mélanger. Incorporer la farine petit à petit pour éviter les grumeaux."
      - "Chauffer le lait d’avoine ou de soja et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrir d’un film alimentaire."
      - "Verser le lait d’avoine ou de soja chaud sur la préparation en fouettant. Transvaser ; cuire à feu doux 3 minutes en mélangeant sans arrêt."
      - "Débarrasser la crème dans une assiette filmée, recouvrir d’un second film, réserver au réfrigérateur jusqu’à complet refroidissement."
      - "Crème d’amande : équivalent de 4 œufs de lin (ou de tofu soyeux) et l’autre moitié du sucre, fouetter énergiquement. Ajouter la margarine végétale pommade à température ambiante, puis la poudre d’amandes ; mélanger."
      - "Sortir la crème pâtissière froide et légèrement compacte. Détendre au fouet jusqu’à souplesse, incorporer à la crème d’amande."
      - "Poche à douille. Dresser la crème en spirale sur une première pâte feuilletée vegan ; sinon à la cuillère. Laisser 1 cm à 2 cm de bord. Placer la fève."
      - "Dorer les bords libres au pinceau avec un peu de lait d’avoine. Poser la seconde pâte feuilletée vegan, souder, chiqueter. Dorer toute la galette au lait d’avoine, quadriller."
      - "Enfourner à 180 °C environ 30 min, jusqu’à bien dorée. Servir avec la fève et la couronne."
      cavernes:
      - "Mélange. Crème pâtissière. Récipient, équivalent 2 œufs de lin ou tofu soyeux, verser. Moitié sucre, mélanger. Farine petit à petit, mélanger. Grumeaux, éviter."
      - "Cuisson. Casserole, lait d’avoine ou soja, contenu gousse vanille, chauffer jusqu’à frémissement. Film alimentaire, couvrir. Arômes vanille."
      - "Mélange. Lait d’avoine ou soja chaud, verser sur préparation, fouetter. Casserole, transvaser. Feu doux 3 min, mélanger sans arrêt."
      - "Cuisson. Crème, assiette filmée. Second film alimentaire, recouvrir. Frigo jusqu’à complet refroidissement."
      - "Mélange. Crème d’amande. Récipient, équivalent 4 œufs de lin ou tofu soyeux, autre moitié sucre. Fouetter énergiquement. Margarine végétale pommade, température ambiante, poudre d’amandes, mélanger encore."
      - "Repos. Crème pâtissière, frigo, sortir. Froide, légèrement compacte. Fouet, détendre, souple, homogène. Crème d’amande, incorporer."
      - "Cuisson. Poche à douille, préparation. Première pâte feuilletée vegan, plan de travail. Crème, spirale, intérieur vers extérieur. Sans poche, cuillère. Bord 1 cm à 2 cm sans crème. Fève."
      - "Cuisson. Bords libres, pinceau, peu lait d’avoine, dorer. Seconde pâte feuilletée vegan, poser. Rebords, doigts, souder. Couteau, chiqueter. Galette entière, lait d’avoine, dorer. Pointe couteau, quadriller."
      - "Cuisson. Four 180 °C environ 30 min, jusqu’à bien dorée. Fève, couronne, servir."
    kcal_per_serving: 254
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
    kcal_per_serving: 324
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

# Galette des rois à la frangipane
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/galette-des-rois-a-la-frangipane]]

## Ingrédients (6 personnes)

- 2 pâte feuilletée
- 30 g de farine
- 120 g de sucre en poudre
- 150 g de poudre d'amandes
- 7 œuf
- 60 g de beurre
- 25 cl de lait
- 1 gousse de vanille

## Préparation

1. Préparation. Préparez d’abord la crème pâtissière : dans un récipient, cassez 2 œufs entiers (pour 6 personnes). Ajoutez la moitié du sucre et mélangez. Incorporez la farine petit à petit, en mélangeant, pour éviter les grumeaux.
2. Cuisson. Dans une casserole, faites chauffer le lait et le contenu d’une gousse de vanille jusqu’à frémissement. Couvrez d’un film alimentaire pour conserver les arômes de vanille.
3. Mélange. Lorsque le lait est chaud, versez-le sur la préparation en fouettant. Transvasez dans la casserole et faites cuire à feu doux 3 minutes en mélangeant sans arrêt.
4. Cuisson. Débarrassez la crème dans une assiette filmée, recouvrez d’un second film alimentaire, puis réservez au réfrigérateur jusqu’à complet refroidissement.
5. Cuisson. Préparez la crème d’amande : dans un récipient, déposez 4 jaunes d’œufs (pour 6 personnes) et l’autre moitié du sucre. Fouettez énergiquement. Ajoutez le beurre pommade, ramolli à température ambiante, puis la poudre d’amandes, et mélangez de nouveau.
6. Repos. Sortez la crème pâtissière du réfrigérateur : elle doit être froide et légèrement compacte. Détendez-la au fouet jusqu’à ce qu’elle soit souple et homogène, puis incorporez-la à la crème d’amande.
7. Cuisson. Mettez la préparation dans une poche à douille. Posez une première pâte feuilletée sur le plan de travail, puis dressez la crème en spirale, de l’intérieur vers l’extérieur. Sans poche, procédez à la cuillère. Laissez 1 cm à 2 cm de bord sans crème et n’oubliez pas la fève.
8. Cuisson. Dorez les bords libres au pinceau avec un peu de jaune d’œuf. Posez la seconde pâte feuilletée, soudez les rebords avec les doigts et chiquetez au couteau. Dorez toute la galette au jaune d’œuf, puis quadrillez-la de la pointe du couteau.
9. Cuisson. Enfournez à 180 °C pendant environ 30 min, jusqu’à ce que la galette soit bien dorée. Servez avec la fève et la couronne.

 
 

 
 On le répète, n’oubliez pas la fève et la couronne ! Et si vous aimez faire dans le traditionnel, ce sera au plus jeune d’attribuer les parts. Bon appétit !
