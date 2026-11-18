---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: wellington-vegetarien
title: Wellington végétarien
lang: fr
description: "Wellington végétarien : recette britannique avec pâte feuilletée, champignons de Paris et choux de Bruxelles, pour 4 personnes."
cuisine: britannique
category: salé
tags:
- salé
- bœuf
- végétarien
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/wellington-vegetarien.jpg
  alt: Wellington végétarien
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/wellington-vegetarien.md
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
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lait.
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
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja (liaison) ou amidon → crème d''avoine.'
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
histoire: 'Wellington : filet en croûte, duxelles, pâte feuilletée. Le bœuf Wellington a des adaptations
  sans viande (betterave, etc.). Ici, légumes et champignons : plat de fête contemporain, pas le filet
  britannique.

  '
fun_facts:
- text: 'La duxelles doit être sèche : trop d’eau, la pâte détrempée.

    '
  source_name: Usage
  source_url: null
- text: 'Un feuilletage bien froid, four vif : trop doux, ça ramollit avant de dorer.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Wellington végétarien ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Beef_Wellington
wines:
- name: Côtes du Rhône
  producer: Domaine Brusset
  origin: Cairanne, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — les champignons en croûte, tanin souple.
- name: Saint-Joseph
  producer: Cave de Tain
  origin: Saint-Joseph, Rhône nord
  grapes: syrah
  award:
  why: Syrah, poivre — le plat de fête, sans un hermitage.
- name: Chinon
  producer: Charles Joguet
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc — la pâte et la duxelles, tanin vif.
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
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 80
      cook_min: 35
      rest_min: 0
      total_min: 115
    equipment: &id002
    - four
    - casserole
    - poêle
    - fouet
    - mixeur
    - couteau
    - film alimentaire
    - wok
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: choux de Bruxelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: chou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 9
      unit: piece
      item: carotte fane
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d'œuf
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
    - qty: 1
      unit: piece
      item: échalote (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par réaliser une duxelle de champignons. Il s’agit d’un hachis de champignons
      sautés. Pour cela, pelez les champignons puis coupez-les grossièrement en quart. Mettez
      le tout dans un mixeur (si vous n’en avez pas, il faudra couper les champignons à la
      main très finement). Ajoutez une gousse d’ail et de l’échalote (facultatif) et mixez
      le tout.
    - Cuisson. Faites revenir votre mélange dans une poêle bien chaude avec un filet d’huile végétale.
      Salez et poivrez selon vos goûts. Laissez cuire assez longtemps. Il faut que les champignons
      rendent bien toute l’eau qu’ils contiennent.
    - Cuisson. Épluchez vos carottes, mais ne les coupez pas. Pour cette recette, on a décidé de les
      garder entières. Plongez-les dans de l’eau bouillante salée et laissez-les cuire de
      façon à ce quelles soient al-dente (un peu croquantes). Vous pouvez vérifier la cuisson
      en plantant la pointe d’un couteau dans une carotte. Une fois cuites, stoppez la cuisson
      en les plongeant dans de l’eau froide avec des glaçons.
    - Cuisson. Retirez les feuilles un peu abîmées et coupez les pieds des choux de Bruxelles (on dit
      « coupez le cul » dans la vidéo, mais on a décidé d’être plus subtil sur la fiche recette).
      Coupez-les en deux puis tranchez-les finement.
    - Cuisson. Faites revenir les choux de Bruxelles dans un wok bien chaud, avec une noisette de beurre.
      Assaisonnez selon vos goûts. Baissez le feu et laissez-les cuire à feu très doux.
    - Cuisson. Prélevez 5 à 6 feuilles de votre chou et faites les blanchir dans une grande casserole
      d’eau bouillante pendant 1min30. Débarassez-les ensuite dans de l’eau froide.
    - Cuisson. Tous les ingrédients sont prêts, place au montage ! Placez un film alimentaire sur le
      plan de travail devant vous. Commencez par étaler la duxelle de champignons sur ce film
      en formant une sorte de rectangle.
    - Cuisson. Déposez les carottes entières puis ajoutez les choux de Bruxelles par-dessus. Vous pouvez
      jeter un coup d’oeil à la vidéo ci-dessous pour mieux voir comment se fait le montage
      du Wellington végétarien.
    - Cuisson. C’est le moment clé de la recette, car il va falloir former un boudin avec les légumes.
      Rabattez le film puis roulez les légumes. Sur les côtés, tirez bien le plastique vers
      l’extérieur pour éliminer l’air. Placez le boudin ainsi formé au frigo pendant 10 à
      15min pour qu’il se fige.
    - Cuisson. Pendant ce temps, retirez la grosse veine centrale de chaque feuille de chou. Pour la
      deuxième partie du montage, placez de nouveau un film devant vous. Déposez vos feuilles
      de chou sur le film, puis ajoutez le « boudin » de légumes par-dessus (sans le film
      plastique qui l’entourait, évidemment). Recouvrez le tout de feuilles de chou et roulez
      de nouveau votre préparation.
    - Cuisson. Coupez les entames de votre boudin pour qu’il soit aux dimensions de la pâte feuilletée.
      Déposez-le sur la pâte, puis rabattez les petits côtés. Rabattez ensuite la partie plus
      longue, un bord après l’autre. À l’aide d’un pinceau, déposez un peu de jaune d’oeuf
      pour faire la jointure au moment de rabattre le dernier bord.
    - Cuisson. Retournez le Wellington et badigeonnez le de jaune d’oeuf à l’aide d’un pinceau. Cela
      permettra à la pâte de prendre une belle couleur dorée au four. Enfin, à l’aide d’un
      couteau pointu, vous pouvez réaliser des entailles sur le haut de la pâte pour décorer.
    - Cuisson. Enfournez le Wellington pendant environ 30 minutes à 170°C. Vérifiez régulièrement la
      cuisson, le but étant d’obtenir une pâte joliment dorée. Et voilà, vous avez réalisé
      un délicieux Wellington aux légumes et aux champignons. Vous pouvez le trancher à l’aide
      d’un couteau à pain et le servir accompagné d’une belle salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Réalisez une duxelle de champignons : un hachis de champignons sautés. Pelez les champignons puis coupez-les grossièrement en quart. Mettez le tout dans un mixeur (sans mixeur, coupez-les à la main très finement). Ajoutez une gousse d’ail et de l’échalote (facultatif) et mixez."
      - "Cuisson. Faites revenir le mélange dans une poêle bien chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Laissez cuire assez longtemps, jusqu’à ce que les champignons rendent bien toute l’eau qu’ils contiennent."
      - "Cuisson. Épluchez vos carottes, sans les couper : on les garde entières. Plongez-les dans de l’eau bouillante salée et laissez-les cuire un peu croquantes. Vérifiez en plantant la pointe d’un couteau dans une carotte. Une fois cuites, stoppez la cuisson en les plongeant dans de l’eau froide avec des glaçons."
      - "Cuisson. Retirez les feuilles un peu abîmées et coupez les pieds des choux de Bruxelles. Coupez-les en deux puis tranchez-les finement."
      - "Cuisson. Faites revenir les choux de Bruxelles dans un wok bien chaud, avec une noisette de beurre. Assaisonnez selon vos goûts. Baissez le feu et laissez-les cuire à feu très doux."
      - "Cuisson. Prélevez 5 à 6 feuilles de votre chou et plongez-les 1 min 30 dans une grande casserole d’eau bouillante. Débarrassez-les ensuite dans de l’eau froide."
      - "Cuisson. Placez un film alimentaire sur le plan de travail. Étalez la duxelle de champignons sur ce film en formant une sorte de rectangle."
      - "Cuisson. Déposez les carottes entières puis ajoutez les choux de Bruxelles par-dessus."
      - "Cuisson. Formez un boudin avec les légumes. Rabattez le film puis roulez les légumes. Sur les côtés, tirez bien le plastique vers l’extérieur pour éliminer l’air. Placez le boudin au frigo pendant 10 à 15 min pour qu’il se fige."
      - "Cuisson. Retirez la grosse veine centrale de chaque feuille de chou. Placez de nouveau un film. Déposez vos feuilles de chou sur le film, puis ajoutez le boudin de légumes par-dessus, sans le film plastique. Recouvrez de feuilles de chou et roulez de nouveau."
      - "Cuisson. Coupez les entames du boudin pour qu’il soit aux dimensions de la pâte feuilletée. Déposez-le sur la pâte, rabattez les petits côtés, puis la partie plus longue, un bord après l’autre. Au pinceau, déposez un peu de jaune d’oeuf pour faire la jointure au moment de rabattre le dernier bord."
      - "Cuisson. Retournez le Wellington et badigeonnez-le de jaune d’oeuf au pinceau. À l’aide d’un couteau pointu, réalisez des entailles sur le haut de la pâte pour décorer."
      - "Cuisson. Enfournez le Wellington pendant environ 30 minutes à 170 °C. Vérifiez régulièrement la cuisson, jusqu’à une pâte joliment dorée. Tranchez au couteau à pain et servez accompagné d’une salade."
      pro:
      - "Réaliser une duxelle : peler les champignons, les couper grossièrement en quart, mixer avec une gousse d’ail et de l’échalote (facultatif). Sans mixeur : couper à la main très finement."
      - "Faire revenir le mélange dans une poêle bien chaude avec un filet d’huile végétale. Saler, poivrer. Cuire assez longtemps, jusqu’à ce que les champignons rendent toute leur eau."
      - "Éplucher les carottes, les garder entières. Plonger dans de l’eau bouillante salée, cuire un peu croquantes. Vérifier à la pointe du couteau. Stopper dans de l’eau froide avec des glaçons."
      - "Retirer les feuilles un peu abîmées, couper les pieds des choux de Bruxelles. Couper en deux, trancher finement."
      - "Faire revenir les choux de Bruxelles dans un wok bien chaud avec une noisette de beurre. Assaisonner. Baisser le feu, cuire à feu très doux."
      - "Prélever 5 à 6 feuilles de chou, les plonger 1 min 30 dans une grande casserole d’eau bouillante. Débarrasser dans de l’eau froide."
      - "Poser un film alimentaire. Étaler la duxelle en rectangle."
      - "Déposer les carottes entières, ajouter les choux de Bruxelles par-dessus."
      - "Rabattre le film, rouler les légumes en boudin. Tirer le plastique vers l’extérieur pour éliminer l’air. Frigo 10 à 15 min, figer."
      - "Retirer la grosse veine centrale de chaque feuille de chou. Nouveau film : déposer les feuilles, le boudin sans son film, recouvrir de feuilles de chou, rouler."
      - "Couper les entames du boudin aux dimensions de la pâte feuilletée. Déposer sur la pâte, rabattre les petits côtés puis la partie longue, un bord après l’autre. Pinceau : un peu de jaune d’oeuf pour la jointure du dernier bord."
      - "Retourner le Wellington, badigeonner de jaune d’oeuf au pinceau. Couteau pointu : entailles sur le haut de la pâte."
      - "Enfourner environ 30 minutes à 170 °C. Vérifier régulièrement jusqu’à pâte joliment dorée. Trancher au couteau à pain, servir avec une salade."
      cavernes:
      - "Préparation. Duxelle. Champignons, peler. Quart, grossièrement, couper. Mixeur, mettre. Sans mixeur : main, très finement, couper. Gousse ail, échalote facultatif, ajouter. Mixer."
      - "Cuisson. Mélange, poêle bien chaude, filet huile végétale, faire revenir. Sel, poivre. Assez longtemps, cuire. Champignons, eau, rendre."
      - "Cuisson. Carottes, éplucher. Entières, garder. Eau bouillante salée, plonger. Peu croquantes, cuire. Pointe couteau, vérifier. Eau froide, glaçons, plonger. Cuisson, stopper."
      - "Cuisson. Choux Bruxelles, feuilles peu abîmées, retirer. Pieds, couper. En deux, couper. Finement, trancher."
      - "Cuisson. Choux Bruxelles, wok bien chaud, noisette beurre, faire revenir. Assaisonner. Feu, baisser. Feu très doux, cuire."
      - "Cuisson. Chou, 5 à 6 feuilles, prélever. Grande casserole, eau bouillante, 1 min 30, plonger. Eau froide, débarrasser."
      - "Cuisson. Film alimentaire, plan travail, placer. Duxelle champignons, rectangle, étaler."
      - "Cuisson. Carottes entières, déposer. Choux Bruxelles, dessus, ajouter."
      - "Cuisson. Légumes, boudin, former. Film, rabattre. Légumes, rouler. Côtés, plastique, extérieur, tirer. Air, éliminer. Boudin, frigo, 10 à 15 min, figer."
      - "Cuisson. Chaque feuille chou, grosse veine centrale, retirer. Film, de nouveau. Feuilles chou, film, déposer. Boudin légumes, sans film plastique, dessus. Feuilles chou, recouvrir. De nouveau, rouler."
      - "Cuisson. Entames boudin, dimensions pâte feuilletée, couper. Pâte, déposer. Petits côtés, rabattre. Partie plus longue, bord après bord, rabattre. Pinceau, peu jaune oeuf, jointure dernier bord."
      - "Cuisson. Wellington, retourner. jaune oeuf, pinceau, badigeonner. Couteau pointu, haut pâte, entailles, décorer."
      - "Cuisson. Wellington, environ 30 min, 170 °C, enfourner. Cuisson, régulièrement, vérifier. Pâte joliment dorée. Couteau pain, trancher. Salade, servir."
    kcal_per_serving: 234
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 234
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
    - qty: 1
      unit: piece
      item: pâte feuilletée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: choux de Bruxelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: chou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 9
      unit: piece
      item: carotte fane
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: crème de soja (liaison) ou amidon
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
    - qty: 1
      unit: piece
      item: échalote (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: lait d'avoine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par réaliser une duxelle de champignons. Il s’agit d’un hachis de champignons
      sautés. Pour cela, pelez les champignons puis coupez-les grossièrement en quart. Mettez
      le tout dans un mixeur (si vous n’en avez pas, il faudra couper les champignons à la
      main très finement). Ajoutez une gousse d’ail et de l’échalote (facultatif) et mixez
      le tout.
    - Cuisson. Faites revenir votre mélange dans une poêle bien chaude avec un filet d’huile végétale.
      Salez et poivrez selon vos goûts. Laissez cuire assez longtemps. Il faut que les champignons
      rendent bien toute l’eau qu’ils contiennent.
    - Cuisson. Épluchez vos carottes, mais ne les coupez pas. Pour cette recette, on a décidé de les
      garder entières. Plongez-les dans de l’eau bouillante salée et laissez-les cuire de
      façon à ce quelles soient al-dente (un peu croquantes). Vous pouvez vérifier la cuisson
      en plantant la pointe d’un couteau dans une carotte. Une fois cuites, stoppez la cuisson
      en les plongeant dans de l’eau froide avec des glaçons.
    - Cuisson. Retirez les feuilles un peu abîmées et coupez les pieds des choux de Bruxelles (on dit
      « coupez le cul » dans la vidéo, mais on a décidé d’être plus subtil sur la fiche recette).
      Coupez-les en deux puis tranchez-les finement.
    - Cuisson. Faites revenir les choux de Bruxelles dans un wok bien chaud, avec une noisette de margarine végétale.
      Assaisonnez selon vos goûts. Baissez le feu et laissez-les cuire à feu très doux.
    - Cuisson. Prélevez 5 à 6 feuilles de votre chou et faites les blanchir dans une grande casserole
      d’eau bouillante pendant 1min30. Débarassez-les ensuite dans de l’eau froide.
    - Cuisson. Tous les ingrédients sont prêts, place au montage ! Placez un film alimentaire sur le
      plan de travail devant vous. Commencez par étaler la duxelle de champignons sur ce film
      en formant une sorte de rectangle.
    - Cuisson. Déposez les carottes entières puis ajoutez les choux de Bruxelles par-dessus. Vous pouvez
      jeter un coup d’oeil à la vidéo ci-dessous pour mieux voir comment se fait le montage
      du Wellington végétarien.
    - Cuisson. C’est le moment clé de la recette, car il va falloir former un boudin avec les légumes.
      Rabattez le film puis roulez les légumes. Sur les côtés, tirez bien le plastique vers
      l’extérieur pour éliminer l’air. Placez le boudin ainsi formé au frigo pendant 10 à
      15min pour qu’il se fige.
    - Cuisson. Pendant ce temps, retirez la grosse veine centrale de chaque feuille de chou. Pour la
      deuxième partie du montage, placez de nouveau un film devant vous. Déposez vos feuilles
      de chou sur le film, puis ajoutez le « boudin » de légumes par-dessus (sans le film
      plastique qui l’entourait, évidemment). Recouvrez le tout de feuilles de chou et roulez
      de nouveau votre préparation.
    - Cuisson. Coupez les entames de votre boudin pour qu’il soit aux dimensions de la pâte feuilletée.
      Déposez-le sur la pâte, puis rabattez les petits côtés. Rabattez ensuite la partie plus
      longue, un bord après l’autre. À l’aide d’un pinceau, déposez un peu de lait d’avoine pour faire la jointure au moment de rabattre le dernier bord.
    - Cuisson. Retournez le Wellington et badigeonnez-le de lait d’avoine à l’aide d’un pinceau. Cela
      permettra à la pâte de prendre une belle couleur dorée au four. Enfin, à l’aide d’un
      couteau pointu, vous pouvez réaliser des entailles sur le haut de la pâte pour décorer.
    - Cuisson. Enfournez le Wellington pendant environ 30 minutes à 170°C. Vérifiez régulièrement la
      cuisson, le but étant d’obtenir une pâte joliment dorée. Et voilà, vous avez réalisé
      un délicieux Wellington aux légumes et aux champignons. Vous pouvez le trancher à l’aide
      d’un couteau à pain et le servir accompagné d’une belle salade. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Réalisez une duxelle de champignons : un hachis de champignons sautés. Pelez les champignons puis coupez-les grossièrement en quart. Mettez le tout dans un mixeur (sans mixeur, coupez-les à la main très finement). Ajoutez une gousse d’ail et de l’échalote (facultatif) et mixez."
      - "Cuisson. Faites revenir le mélange dans une poêle bien chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Laissez cuire assez longtemps, jusqu’à ce que les champignons rendent bien toute l’eau qu’ils contiennent."
      - "Cuisson. Épluchez vos carottes, sans les couper : on les garde entières. Plongez-les dans de l’eau bouillante salée et laissez-les cuire un peu croquantes. Vérifiez en plantant la pointe d’un couteau dans une carotte. Une fois cuites, stoppez la cuisson en les plongeant dans de l’eau froide avec des glaçons."
      - "Cuisson. Retirez les feuilles un peu abîmées et coupez les pieds des choux de Bruxelles. Coupez-les en deux puis tranchez-les finement."
      - "Cuisson. Faites revenir les choux de Bruxelles dans un wok bien chaud, avec une noisette de margarine végétale. Assaisonnez selon vos goûts. Baissez le feu et laissez-les cuire à feu très doux."
      - "Cuisson. Prélevez 5 à 6 feuilles de votre chou et plongez-les 1 min 30 dans une grande casserole d’eau bouillante. Débarrassez-les ensuite dans de l’eau froide."
      - "Cuisson. Placez un film alimentaire sur le plan de travail. Étalez la duxelle de champignons sur ce film en formant une sorte de rectangle."
      - "Cuisson. Déposez les carottes entières puis ajoutez les choux de Bruxelles par-dessus."
      - "Cuisson. Formez un boudin avec les légumes. Rabattez le film puis roulez les légumes. Sur les côtés, tirez bien le plastique vers l’extérieur pour éliminer l’air. Placez le boudin au frigo pendant 10 à 15 min pour qu’il se fige."
      - "Cuisson. Retirez la grosse veine centrale de chaque feuille de chou. Placez de nouveau un film. Déposez vos feuilles de chou sur le film, puis ajoutez le boudin de légumes par-dessus, sans le film plastique. Recouvrez de feuilles de chou et roulez de nouveau."
      - "Cuisson. Coupez les entames du boudin pour qu’il soit aux dimensions de la pâte feuilletée. Déposez-le sur la pâte, rabattez les petits côtés, puis la partie plus longue, un bord après l’autre. Au pinceau, déposez un peu de lait d’avoine pour faire la jointure au moment de rabattre le dernier bord."
      - "Cuisson. Retournez le Wellington et badigeonnez-le de lait d’avoine au pinceau. À l’aide d’un couteau pointu, réalisez des entailles sur le haut de la pâte pour décorer."
      - "Cuisson. Enfournez le Wellington pendant environ 30 minutes à 170 °C. Vérifiez régulièrement la cuisson, jusqu’à une pâte joliment dorée. Tranchez au couteau à pain et servez accompagné d’une salade."
      pro:
      - "Réaliser une duxelle : peler les champignons, les couper grossièrement en quart, mixer avec une gousse d’ail et de l’échalote (facultatif). Sans mixeur : couper à la main très finement."
      - "Faire revenir le mélange dans une poêle bien chaude avec un filet d’huile végétale. Saler, poivrer. Cuire assez longtemps, jusqu’à ce que les champignons rendent toute leur eau."
      - "Éplucher les carottes, les garder entières. Plonger dans de l’eau bouillante salée, cuire un peu croquantes. Vérifier à la pointe du couteau. Stopper dans de l’eau froide avec des glaçons."
      - "Retirer les feuilles un peu abîmées, couper les pieds des choux de Bruxelles. Couper en deux, trancher finement."
      - "Faire revenir les choux de Bruxelles dans un wok bien chaud avec une noisette de margarine végétale. Assaisonner. Baisser le feu, cuire à feu très doux."
      - "Prélever 5 à 6 feuilles de chou, les plonger 1 min 30 dans une grande casserole d’eau bouillante. Débarrasser dans de l’eau froide."
      - "Poser un film alimentaire. Étaler la duxelle en rectangle."
      - "Déposer les carottes entières, ajouter les choux de Bruxelles par-dessus."
      - "Rabattre le film, rouler les légumes en boudin. Tirer le plastique vers l’extérieur pour éliminer l’air. Frigo 10 à 15 min, figer."
      - "Retirer la grosse veine centrale de chaque feuille de chou. Nouveau film : déposer les feuilles, le boudin sans son film, recouvrir de feuilles de chou, rouler."
      - "Couper les entames du boudin aux dimensions de la pâte feuilletée. Déposer sur la pâte, rabattre les petits côtés puis la partie longue, un bord après l’autre. Pinceau : un peu de lait d’avoine pour la jointure du dernier bord."
      - "Retourner le Wellington, badigeonner de lait d’avoine au pinceau. Couteau pointu : entailles sur le haut de la pâte."
      - "Enfourner environ 30 minutes à 170 °C. Vérifier régulièrement jusqu’à pâte joliment dorée. Trancher au couteau à pain, servir avec une salade."
      cavernes:
      - "Préparation. Duxelle. Champignons, peler. Quart, grossièrement, couper. Mixeur, mettre. Sans mixeur : main, très finement, couper. Gousse ail, échalote facultatif, ajouter. Mixer."
      - "Cuisson. Mélange, poêle bien chaude, filet huile végétale, faire revenir. Sel, poivre. Assez longtemps, cuire. Champignons, eau, rendre."
      - "Cuisson. Carottes, éplucher. Entières, garder. Eau bouillante salée, plonger. Peu croquantes, cuire. Pointe couteau, vérifier. Eau froide, glaçons, plonger. Cuisson, stopper."
      - "Cuisson. Choux Bruxelles, feuilles peu abîmées, retirer. Pieds, couper. En deux, couper. Finement, trancher."
      - "Cuisson. Choux Bruxelles, wok bien chaud, noisette margarine végétale, faire revenir. Assaisonner. Feu, baisser. Feu très doux, cuire."
      - "Cuisson. Chou, 5 à 6 feuilles, prélever. Grande casserole, eau bouillante, 1 min 30, plonger. Eau froide, débarrasser."
      - "Cuisson. Film alimentaire, plan travail, placer. Duxelle champignons, rectangle, étaler."
      - "Cuisson. Carottes entières, déposer. Choux Bruxelles, dessus, ajouter."
      - "Cuisson. Légumes, boudin, former. Film, rabattre. Légumes, rouler. Côtés, plastique, extérieur, tirer. Air, éliminer. Boudin, frigo, 10 à 15 min, figer."
      - "Cuisson. Chaque feuille chou, grosse veine centrale, retirer. Film, de nouveau. Feuilles chou, film, déposer. Boudin légumes, sans film plastique, dessus. Feuilles chou, recouvrir. De nouveau, rouler."
      - "Cuisson. Entames boudin, dimensions pâte feuilletée, couper. Pâte, déposer. Petits côtés, rabattre. Partie plus longue, bord après bord, rabattre. Pinceau, peu lait avoine, jointure dernier bord."
      - "Cuisson. Wellington, retourner. lait avoine, pinceau, badigeonner. Couteau pointu, haut pâte, entailles, décorer."
      - "Cuisson. Wellington, environ 30 min, 170 °C, enfourner. Cuisson, régulièrement, vérifier. Pâte joliment dorée. Couteau pain, trancher. Salade, servir."
    kcal_per_serving: 223
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
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 234
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

# Wellington végétarien
**Équipement :** [[sauteuse-wok]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/wellington-vegetarien]]

## Ingrédients (4 personnes)

- 1 pâte feuilletée
- 500 g de champignons de Paris
- 400 g de choux de Bruxelles
- 1 chou
- 9 carotte fane
- 1 jaune d'œuf
- 1 gousse d'ail
- 1 échalote (facultatif)

## Préparation

1. Commencez par réaliser une duxelle de champignons. Il s’agit d’un hachis de champignons sautés. Pour cela, pelez les champignons puis coupez-les grossièrement en quart. Mettez le tout dans un mixeur (si vous n’en avez pas, il faudra couper les champignons à la main très finement). Ajoutez une gousse d’ail et de l’échalote (facultatif) et mixez le tout.
2. Faites revenir votre mélange dans une poêle bien chaude avec un filet d’huile végétale. Salez et poivrez selon vos goûts. Laissez cuire assez longtemps. Il faut que les champignons rendent bien toute l’eau qu’ils contiennent.
3. Épluchez vos carottes, mais ne les coupez pas. Pour cette recette, on a décidé de les garder entières. Plongez-les dans de l’eau bouillante salée et laissez-les cuire de façon à ce quelles soient al-dente (un peu croquantes). Vous pouvez vérifier la cuisson en plantant la pointe d’un couteau dans une carotte. Une fois cuites, stoppez la cuisson en les plongeant dans de l’eau froide avec des glaçons.
4. Retirez les feuilles un peu abîmées et coupez les pieds des choux de Bruxelles (on dit « coupez le cul » dans la vidéo, mais on a décidé d’être plus subtil sur la fiche recette). Coupez-les en deux puis tranchez-les finement.
5. Faites revenir les choux de Bruxelles dans un wok bien chaud, avec une noisette de beurre. Assaisonnez selon vos goûts. Baissez le feu et laissez-les cuire à feu très doux.
6. Prélevez 5 à 6 feuilles de votre chou et faites les blanchir dans une grande casserole d’eau bouillante pendant 1min30. Débarassez-les ensuite dans de l’eau froide.
7. Tous les ingrédients sont prêts, place au montage ! Placez un film alimentaire sur le plan de travail devant vous. Commencez par étaler la duxelle de champignons sur ce film en formant une sorte de rectangle.
8. Déposez les carottes entières puis ajoutez les choux de Bruxelles par-dessus. Vous pouvez jeter un coup d’oeil à la vidéo ci-dessous pour mieux voir comment se fait le montage du Wellington végétarien.
9. C’est le moment clé de la recette, car il va falloir former un boudin avec les légumes. Rabattez le film puis roulez les légumes. Sur les côtés, tirez bien le plastique vers l’extérieur pour éliminer l’air. Placez le boudin ainsi formé au frigo pendant 10 à 15min pour qu’il se fige.
10. Pendant ce temps, retirez la grosse veine centrale de chaque feuille de chou. Pour la deuxième partie du montage, placez de nouveau un film devant vous. Déposez vos feuilles de chou sur le film, puis ajoutez le « boudin » de légumes par-dessus (sans le film plastique qui l’entourait, évidemment). Recouvrez le tout de feuilles de chou et roulez de nouveau votre préparation.
11. Coupez les entames de votre boudin pour qu’il soit aux dimensions de la pâte feuilletée. Déposez-le sur la pâte, puis rabattez les petits côtés. Rabattez ensuite la partie plus longue, un bord après l’autre. À l’aide d’un pinceau, déposez un peu de jaune d’oeuf pour faire la jointure au moment de rabattre le dernier bord.
12. Retournez le Wellington et badigeonnez le de jaune d’oeuf à l’aide d’un pinceau. Cela permettra à la pâte de prendre une belle couleur dorée au four. Enfin, à l’aide d’un couteau pointu, vous pouvez réaliser des entailles sur le haut de la pâte pour décorer.
13. Enfournez le Wellington pendant environ 30 minutes à 170°C. Vérifiez régulièrement la cuisson, le but étant d’obtenir une pâte joliment dorée.

 
 

 
 Et voilà, vous avez réalisé un délicieux Wellington aux légumes et aux champignons. Vous pouvez le trancher à l’aide d’un couteau à pain et le servir accompagné d’une belle salade. Bon appétit !
