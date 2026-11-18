---
schema: recette-web-jigme/v2
slug: saint-jacques-puree-de-butternut
title: Saint-Jacques, purée de butternut
lang: fr
description: "Saint-Jacques, purée de butternut : recette française avec pièce de Saint-Jacques, courge butternut et oignon, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- accompagnement
- saint-jacques
- automne
image:
  url:
  alt: Saint-Jacques, purée de butternut
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/saint-jacques-puree-de-butternut.md
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
    - from: champignons + seitan
      to: tofu ferme
      note:
    note: 'Gluten : champignons + seitan → tofu ferme.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - celeri
    swaps:
    - from: gros pétoncles de céleri-rave
      to: panais
      note:
    note: 'Céleri : gros pétoncles de céleri-rave → panais.'
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - mollusques
    swaps: []
    note: → version végétarienne.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
  sans_poisson:
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
histoire: 'Coquille Saint-Jacques : pétoncle, souvent Pecten maximus en Atlantique nord-est. Poêlée, purée
  de courge butternut : assiette de restaurant, pas un plat de marin daté.

  '
fun_facts:
- text: 'La noix se saisit très vite : trop cuite, elle se colle et ramollit.

    '
  source_name: Usage
  source_url: null
- text: 'Le corail se mange ; beaucoup le retirent, ce n’est pas une obligation.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Saint-Jacques, purée de butternut ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Scallop
wines:
- name: Chablis
  producer: La Chablisienne
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre, citron — la Saint-Jacques, sans beurre de fût.
- name: Sancerre
  producer: Henri Bourgeois
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — le mollusque et la courge, acidité nette.
- name: Muscadet Sèvre-et-Maine
  producer: Luneau-Papin
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — la noix, voisin de mer.
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
    - mollusques
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 25
      rest_min: 0
      total_min: 65
    equipment: &id002
    - casserole
    - poêle
    - mixeur
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 16
      unit: piece
      item: pièce de Saint-Jacques
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courge butternut
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: girolles
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
    - qty:
      unit:
      item: beurre
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
    - qty:
      unit:
      item: fond de veau
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fleurs comestibles
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-là. Coupez
      ensuite la chaire grossièrement afin que la cuisson soit plus rapide.
    - Cuisson. Épluchez et émincez l’oignon puis faites le revenir rapidement dans une casserole avec
      une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques
      minutes.
    - Cuisson. Complétez avec du fond de veau (ou du bouillon de légume) puis laissez mijoter à feu
      doux.
    - Cuisson. Pendant que la courge est en train de cuire, vous allez pouvoir ouvrir les coquilles
      Saint-Jacques. Pour cela, plantez la pointe de votre couteau entre les deux parties
      du coquillage puis servez-vous de cette lame comme levier. N’hésitez pas à jeter un
      coup d’oeil à la vidéo ci-dessous pour mieux comprendre. Dès qu’elle s’entrouvre, bloquez
      la coquille avec vos doigts et grattez la face la plus plate avec la lame de votre couteau
      afin de décoller la chaire. Une fois ouverte, retirez la St-Jacques de son pied à l’aide
      d’une cuillère en tournant délicatement tout autour. Celle-ci finit par se décrocher.
    - Cuisson. Le temps d’ouvrir vos Saint-Jacques, la courge devrait être cuite. À l’aide d’un écumoire,
      transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez
      une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez.
    - Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez
      le tout avec une cuillère à soupe d’huile d’olive et vous obtenez une persillade.
    - Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et
      poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons
      sont bien colorés, réservez-les sur le côté.
    - Cuisson. Faites revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Laissez colorez
      le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de
      beurre pour le goût en fin de cuisson.
    - Dressage. Pour le dressage, versez la purée dans une poche à douille afin de réaliser des petits
      ronds dans l’assiette. Placez ensuite les champignons et enfin les Saint-Jacques. Pour
      être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe
      de vinaigrette pour finaliser votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-la. Coupez ensuite la chair grossièrement afin que la cuisson soit plus rapide."
      - "Cuisson. Épluchez et émincez l’oignon puis faites-le revenir rapidement dans une casserole avec une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques minutes."
      - "Cuisson. Complétez avec du fond de veau (ou du bouillon de légume) puis [[mijoter|laissez mijoter]] à feu doux."
      - "Cuisson. Pendant que la courge est en train de cuire, ouvrez les coquilles Saint-Jacques. Plantez la pointe de votre couteau entre les deux parties du coquillage puis servez-vous de cette lame comme levier. N’hésitez pas à jeter un coup d’œil à la vidéo ci-dessous pour mieux comprendre. Dès qu’elle s’entrouvre, bloquez la coquille avec vos doigts et grattez la face la plus plate avec la lame de votre couteau afin de décoller la chair. Une fois ouverte, retirez la Saint-Jacques de son pied à l’aide d’une cuillère en tournant délicatement tout autour. Celle-ci finit par se décrocher."
      - "Cuisson. Le temps d’ouvrir vos Saint-Jacques, la courge devrait être cuite. À l’aide d’une écumoire, transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez."
      - "Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez le tout avec une cuillère à soupe d’huile d’olive : vous obtenez une persillade."
      - "Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons sont bien colorés, réservez-les sur le côté."
      - "Cuisson. Faites revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Laissez colorer le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de beurre pour le goût en fin de cuisson."
      - "Dressage. Versez la purée dans une poche à douille afin de réaliser des petits ronds dans l’assiette. Placez ensuite les champignons et enfin les Saint-Jacques. Pour être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe de vinaigrette pour finaliser votre plat. Bon appétit !"
      pro:
      - "Couper la courge butternut en deux. Retirer les graines. Éplucher. Couper la chair grossièrement."
      - "Éplucher et émincer l’oignon. Faire revenir rapidement dans une casserole avec une noix de beurre. Ajouter les morceaux de butternut. Laisser cuire quelques minutes."
      - "Compléter avec du fond de veau (ou du bouillon de légume). Laisser mijoter à feu doux."
      - "Pendant la cuisson de la courge, ouvrir les coquilles Saint-Jacques : planter la pointe du couteau entre les deux parties du coquillage, se servir de la lame comme levier. Voir la vidéo. Dès l’ouverture, bloquer la coquille, gratter la face la plus plate pour décoller la chair. Retirer la Saint-Jacques de son pied à la cuillère, en tournant tout autour."
      - "Courge cuite. À l’écumoire, transvaser les oignons et les dés de butternut dans un mixeur. Mixer. Ajouter une noix de beurre. Réserver."
      - "Éplucher et ciseler une gousse d’ail. Hacher quelques feuilles de persil. Mélanger avec une cuillère à soupe d’huile d’olive : persillade."
      - "Faire revenir les girolles à la poêle avec un filet d’huile d’olive. Saler, poivrer. Ajouter une noix de beurre. Réserver une fois colorées."
      - "Faire revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Colorer le premier côté, retourner. Option : noisette de beurre en fin de cuisson."
      - "Dresser : purée en poche à douille, petits ronds. Champignons. Saint-Jacques. Option : fleurs comestibles et pointe de vinaigrette."
      cavernes:
      - "Préparation. Courge butternut, couper en deux. Graines, retirer. Éplucher. Chair, couper grossièrement."
      - "Cuisson. Oignon, éplucher, émincer. Casserole, noix beurre, revenir rapidement. Morceaux butternut, ajouter. Cuire quelques minutes."
      - "Cuisson. Fond de veau ou bouillon de légume, compléter. Feu doux, mijoter."
      - "Cuisson. Pendant courge cuit : coquilles Saint-Jacques, ouvrir. Pointe couteau entre deux parties, levier. Vidéo si besoin. Entrouvre : bloquer, face plate, gratter, chair décoller. Pied, cuillère, tourner, décrocher."
      - "Cuisson. Saint-Jacques ouvertes, courge cuite. Écumoire, oignons, dés butternut, mixeur, transvaser. Mixer. Noix beurre, ajouter. Réserver."
      - "Mélange. Gousse ail, éplucher, ciseler. Feuilles persil, hacher. Cuillère soupe huile olive, mélanger. Persillade."
      - "Cuisson. Girolles, poêle, filet huile olive, revenir. Saler, poivrer. Noix beurre. Colorés, réserver."
      - "Cuisson. Saint-Jacques, poêle, filet huile olive, revenir. Premier côté, colorer, retourner. Option : noisette beurre fin cuisson."
      - "Dressage. Purée, poche à douille, petits ronds assiette. Champignons, Saint-Jacques. Option : fleurs comestibles, pointe vinaigrette. Bon appétit."
    kcal_per_serving: 171
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
    - celeri
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 16
      unit: piece
      item: gros pétoncles de céleri-rave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courge butternut
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: girolles
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
    - qty:
      unit:
      item: beurre
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
    - qty:
      unit:
      item: fond de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fleurs comestibles
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-là. Coupez
      ensuite la chaire grossièrement afin que la cuisson soit plus rapide.
    - Cuisson. Épluchez et émincez l’oignon puis faites le revenir rapidement dans une casserole avec
      une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques
      minutes.
    - Cuisson. Complétez avec du fond de légumes puis laissez mijoter
      à feu doux.
    - Dressage. Pendant que la courge cuit, taillez le céleri-rave en pétoncles (dés ou médaillons). Réservez.
    - Cuisson. Le temps de tailler le céleri-rave, la courge devrait être cuite. À l’aide d’un écumoire,
      transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez
      une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez.
    - Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez
      le tout avec une cuillère à soupe d’huile d’olive et vous obtenez une persillade.
    - Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et
      poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons
      sont bien colorés, réservez-les sur le côté.
    - Cuisson. Faites revenir les pétoncles de céleri-rave à la poêle avec un filet d’huile d’olive. Laissez colorer le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de
      beurre pour le goût en fin de cuisson.
    - Dressage. Pour le dressage, versez la purée dans une poche à douille afin de réaliser des petits
      ronds dans l’assiette. Placez ensuite les champignons et enfin les pétoncles de céleri-rave. Pour
      être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe
      de vinaigrette pour finaliser votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-la. Coupez ensuite la chair grossièrement afin que la cuisson soit plus rapide."
      - "Cuisson. Épluchez et émincez l’oignon puis faites-le revenir rapidement dans une casserole avec une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques minutes."
      - "Cuisson. Complétez avec du fond de légumes puis [[mijoter|laissez mijoter]] à feu doux."
      - "Dressage. Pendant que la courge cuit, taillez le céleri-rave en pétoncles (dés ou médaillons). Réservez."
      - "Cuisson. Le temps de tailler le céleri-rave, la courge devrait être cuite. À l’aide d’une écumoire, transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez."
      - "Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez le tout avec une cuillère à soupe d’huile d’olive : vous obtenez une persillade."
      - "Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons sont bien colorés, réservez-les sur le côté."
      - "Cuisson. Faites revenir les pétoncles de céleri-rave à la poêle avec un filet d’huile d’olive. Laissez colorer le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de beurre pour le goût en fin de cuisson."
      - "Dressage. Versez la purée dans une poche à douille afin de réaliser des petits ronds dans l’assiette. Placez ensuite les champignons et enfin les pétoncles de céleri-rave. Pour être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe de vinaigrette pour finaliser votre plat. Bon appétit !"
      pro:
      - "Couper la courge butternut en deux. Retirer les graines. Éplucher. Couper la chair grossièrement."
      - "Éplucher et émincer l’oignon. Faire revenir rapidement dans une casserole avec une noix de beurre. Ajouter les morceaux de butternut. Laisser cuire quelques minutes."
      - "Compléter avec du fond de légumes. Laisser mijoter à feu doux."
      - "Pendant la cuisson de la courge, tailler le céleri-rave en pétoncles (dés ou médaillons). Réserver."
      - "Courge cuite. À l’écumoire, transvaser les oignons et les dés de butternut dans un mixeur. Mixer. Ajouter une noix de beurre. Réserver."
      - "Éplucher et ciseler une gousse d’ail. Hacher quelques feuilles de persil. Mélanger avec une cuillère à soupe d’huile d’olive : persillade."
      - "Faire revenir les girolles à la poêle avec un filet d’huile d’olive. Saler, poivrer. Ajouter une noix de beurre. Réserver une fois colorées."
      - "Faire revenir les pétoncles de céleri-rave à la poêle avec un filet d’huile d’olive. Colorer le premier côté, retourner. Option : noisette de beurre en fin de cuisson."
      - "Dresser : purée en poche à douille, petits ronds. Champignons. Pétoncles de céleri-rave. Option : fleurs comestibles et pointe de vinaigrette."
      cavernes:
      - "Préparation. Courge butternut, couper en deux. Graines, retirer. Éplucher. Chair, couper grossièrement."
      - "Cuisson. Oignon, éplucher, émincer. Casserole, noix beurre, revenir rapidement. Morceaux butternut, ajouter. Cuire quelques minutes."
      - "Cuisson. Fond de légumes, compléter. Feu doux, mijoter."
      - "Dressage. Pendant courge cuit : céleri-rave, tailler en pétoncles (dés ou médaillons). Réserver."
      - "Cuisson. Céleri-rave taillé, courge cuite. Écumoire, oignons, dés butternut, mixeur, transvaser. Mixer. Noix beurre, ajouter. Réserver."
      - "Mélange. Gousse ail, éplucher, ciseler. Feuilles persil, hacher. Cuillère soupe huile olive, mélanger. Persillade."
      - "Cuisson. Girolles, poêle, filet huile olive, revenir. Saler, poivrer. Noix beurre. Colorés, réserver."
      - "Cuisson. Pétoncles céleri-rave, poêle, filet huile olive, revenir. Premier côté, colorer, retourner. Option : noisette beurre fin cuisson."
      - "Dressage. Purée, poche à douille, petits ronds assiette. Champignons, pétoncles céleri-rave. Option : fleurs comestibles, pointe vinaigrette. Bon appétit."
    kcal_per_serving: 197
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
    - celeri
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 16
      unit: piece
      item: gros pétoncles de céleri-rave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courge butternut
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: girolles
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
    - qty:
      unit:
      item: margarine végétale
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
    - qty:
      unit:
      item: fond de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fleurs comestibles
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-là. Coupez
      ensuite la chaire grossièrement afin que la cuisson soit plus rapide.
    - Cuisson. Épluchez et émincez l’oignon puis faites le revenir rapidement dans une casserole avec
      une noix de margarine végétale. Ajoutez vos morceaux de butternut et laissez
      cuire pendant quelques minutes.
    - Cuisson. Complétez avec du fond de légumes puis laissez mijoter à feu doux.
    - Cuisson. Pendant que la courge est en train de cuire, préparez les pétoncles de céleri-rave (dés de céleri poêlés, taille Saint-Jacques).
    - Cuisson. Le temps de préparer le céleri, la courge devrait être cuite. À l’aide d’un écumoire,
      transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez
      une noix de margarine végétale pour rendre la purée plus lisse et onctueuse.
      Réservez.
    - Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez
      le tout avec une cuillère à soupe d’huile d’olive et vous obtenez une persillade.
    - Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et
      poivrez selon vos goûts, puis ajoutez-y une noix de margarine végétale.
      Une fois que les champignons sont bien colorés, réservez-les sur le côté.
    - Cuisson. Faites revenir les pétoncles de céleri à la poêle avec un filet d’huile d’olive. Laissez colorez
      le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de
      margarine végétale pour la goût en fin de cuisson.
    - Dressage. Pour le dressage, versez la purée dans une poche à douille afin de réaliser des petits
      ronds dans l’assiette. Placez ensuite les champignons et enfin les pétoncles de céleri. Pour
      être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe
      de vinaigrette pour finaliser votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-la. Coupez ensuite la chair grossièrement afin que la cuisson soit plus rapide."
      - "Cuisson. Épluchez et émincez l’oignon puis faites-le revenir rapidement dans une casserole avec une noix de margarine végétale. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques minutes."
      - "Cuisson. Complétez avec du fond de légumes puis [[mijoter|laissez mijoter]] à feu doux."
      - "Cuisson. Pendant que la courge est en train de cuire, préparez les pétoncles de céleri-rave (dés de céleri poêlés, taille Saint-Jacques)."
      - "Cuisson. Le temps de préparer le céleri, la courge devrait être cuite. À l’aide d’une écumoire, transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez une noix de margarine végétale pour rendre la purée plus lisse et onctueuse. Réservez."
      - "Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez le tout avec une cuillère à soupe d’huile d’olive : vous obtenez une persillade."
      - "Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et poivrez selon vos goûts, puis ajoutez-y une noix de margarine végétale. Une fois que les champignons sont bien colorés, réservez-les sur le côté."
      - "Cuisson. Faites revenir les pétoncles de céleri à la poêle avec un filet d’huile d’olive. Laissez colorer le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de margarine végétale pour le goût en fin de cuisson."
      - "Dressage. Versez la purée dans une poche à douille afin de réaliser des petits ronds dans l’assiette. Placez ensuite les champignons et enfin les pétoncles de céleri. Pour être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe de vinaigrette pour finaliser votre plat. Bon appétit !"
      pro:
      - "Couper la courge butternut en deux. Retirer les graines. Éplucher. Couper la chair grossièrement."
      - "Éplucher et émincer l’oignon. Faire revenir rapidement dans une casserole avec une noix de margarine végétale. Ajouter les morceaux de butternut. Laisser cuire quelques minutes."
      - "Compléter avec du fond de légumes. Laisser mijoter à feu doux."
      - "Pendant la cuisson de la courge, préparer les pétoncles de céleri-rave (dés de céleri poêlés, taille Saint-Jacques)."
      - "Courge cuite. À l’écumoire, transvaser les oignons et les dés de butternut dans un mixeur. Mixer. Ajouter une noix de margarine végétale. Réserver."
      - "Éplucher et ciseler une gousse d’ail. Hacher quelques feuilles de persil. Mélanger avec une cuillère à soupe d’huile d’olive : persillade."
      - "Faire revenir les girolles à la poêle avec un filet d’huile d’olive. Saler, poivrer. Ajouter une noix de margarine végétale. Réserver une fois colorées."
      - "Faire revenir les pétoncles de céleri à la poêle avec un filet d’huile d’olive. Colorer le premier côté, retourner. Option : noisette de margarine végétale en fin de cuisson."
      - "Dresser : purée en poche à douille, petits ronds. Champignons. Pétoncles de céleri. Option : fleurs comestibles et pointe de vinaigrette."
      cavernes:
      - "Préparation. Courge butternut, couper en deux. Graines, retirer. Éplucher. Chair, couper grossièrement."
      - "Cuisson. Oignon, éplucher, émincer. Casserole, noix margarine végétale, revenir rapidement. Morceaux butternut, ajouter. Cuire quelques minutes."
      - "Cuisson. Fond de légumes, compléter. Feu doux, mijoter."
      - "Cuisson. Pendant courge cuit : pétoncles céleri-rave (dés céleri poêlés, taille Saint-Jacques), préparer."
      - "Cuisson. Céleri préparé, courge cuite. Écumoire, oignons, dés butternut, mixeur, transvaser. Mixer. Noix margarine végétale, ajouter. Réserver."
      - "Mélange. Gousse ail, éplucher, ciseler. Feuilles persil, hacher. Cuillère soupe huile olive, mélanger. Persillade."
      - "Cuisson. Girolles, poêle, filet huile olive, revenir. Saler, poivrer. Noix margarine végétale. Colorés, réserver."
      - "Cuisson. Pétoncles céleri, poêle, filet huile olive, revenir. Premier côté, colorer, retourner. Option : noisette margarine végétale fin cuisson."
      - "Dressage. Purée, poche à douille, petits ronds assiette. Champignons, pétoncles céleri. Option : fleurs comestibles, pointe vinaigrette. Bon appétit."
    kcal_per_serving: 197
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
    - mollusques
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 16
      unit: piece
      item: pièce de Saint-Jacques
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courge butternut
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: girolles
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
    - qty:
      unit:
      item: beurre
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
    - qty:
      unit:
      item: sole ou cabillaud
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fleurs comestibles
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-là. Coupez
      ensuite la chaire grossièrement afin que la cuisson soit plus rapide.
    - Cuisson. Épluchez et émincez l’oignon puis faites le revenir rapidement dans une casserole avec
      une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques
      minutes.
    - Cuisson. Complétez avec du sole ou cabillaud (ou du bouillon de légume) puis laissez mijoter
      à feu doux.
    - Cuisson. Pendant que la courge est en train de cuire, vous allez pouvoir ouvrir les coquilles
      Saint-Jacques. Pour cela, plantez la pointe de votre couteau entre les deux parties
      du coquillage puis servez-vous de cette lame comme levier. N’hésitez pas à jeter un
      coup d’oeil à la vidéo ci-dessous pour mieux comprendre. Dès qu’elle s’entrouvre, bloquez
      la coquille avec vos doigts et grattez la face la plus plate avec la lame de votre couteau
      afin de décoller la chaire. Une fois ouverte, retirez la St-Jacques de son pied à l’aide
      d’une cuillère en tournant délicatement tout autour. Celle-ci finit par se décrocher.
    - Cuisson. Le temps d’ouvrir vos Saint-Jacques, la courge devrait être cuite. À l’aide d’un écumoire,
      transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez
      une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez.
    - Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez
      le tout avec une cuillère à soupe d’huile d’olive et vous obtenez une persillade.
    - Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et
      poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons
      sont bien colorés, réservez-les sur le côté.
    - Cuisson. Faites revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Laissez colorez
      le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de
      beurre pour le goût en fin de cuisson.
    - Dressage. Pour le dressage, versez la purée dans une poche à douille afin de réaliser des petits
      ronds dans l’assiette. Placez ensuite les champignons et enfin les Saint-Jacques. Pour
      être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe
      de vinaigrette pour finaliser votre plat. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez votre courge butternut en deux, retirez les graines puis épluchez-la. Coupez ensuite la chair grossièrement afin que la cuisson soit plus rapide."
      - "Cuisson. Épluchez et émincez l’oignon puis faites-le revenir rapidement dans une casserole avec une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques minutes."
      - "Cuisson. Complétez avec du sole ou cabillaud (ou du bouillon de légume) puis [[mijoter|laissez mijoter]] à feu doux."
      - "Cuisson. Pendant que la courge est en train de cuire, ouvrez les coquilles Saint-Jacques. Plantez la pointe de votre couteau entre les deux parties du coquillage puis servez-vous de cette lame comme levier. N’hésitez pas à jeter un coup d’œil à la vidéo ci-dessous pour mieux comprendre. Dès qu’elle s’entrouvre, bloquez la coquille avec vos doigts et grattez la face la plus plate avec la lame de votre couteau afin de décoller la chair. Une fois ouverte, retirez la Saint-Jacques de son pied à l’aide d’une cuillère en tournant délicatement tout autour. Celle-ci finit par se décrocher."
      - "Cuisson. Le temps d’ouvrir vos Saint-Jacques, la courge devrait être cuite. À l’aide d’une écumoire, transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez."
      - "Mélange. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez le tout avec une cuillère à soupe d’huile d’olive : vous obtenez une persillade."
      - "Cuisson. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons sont bien colorés, réservez-les sur le côté."
      - "Cuisson. Faites revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Laissez colorer le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de beurre pour le goût en fin de cuisson."
      - "Dressage. Versez la purée dans une poche à douille afin de réaliser des petits ronds dans l’assiette. Placez ensuite les champignons et enfin les Saint-Jacques. Pour être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe de vinaigrette pour finaliser votre plat. Bon appétit !"
      pro:
      - "Couper la courge butternut en deux. Retirer les graines. Éplucher. Couper la chair grossièrement."
      - "Éplucher et émincer l’oignon. Faire revenir rapidement dans une casserole avec une noix de beurre. Ajouter les morceaux de butternut. Laisser cuire quelques minutes."
      - "Compléter avec du sole ou cabillaud (ou du bouillon de légume). Laisser mijoter à feu doux."
      - "Pendant la cuisson de la courge, ouvrir les coquilles Saint-Jacques : planter la pointe du couteau entre les deux parties du coquillage, se servir de la lame comme levier. Voir la vidéo. Dès l’ouverture, bloquer la coquille, gratter la face la plus plate pour décoller la chair. Retirer la Saint-Jacques de son pied à la cuillère, en tournant tout autour."
      - "Courge cuite. À l’écumoire, transvaser les oignons et les dés de butternut dans un mixeur. Mixer. Ajouter une noix de beurre. Réserver."
      - "Éplucher et ciseler une gousse d’ail. Hacher quelques feuilles de persil. Mélanger avec une cuillère à soupe d’huile d’olive : persillade."
      - "Faire revenir les girolles à la poêle avec un filet d’huile d’olive. Saler, poivrer. Ajouter une noix de beurre. Réserver une fois colorées."
      - "Faire revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Colorer le premier côté, retourner. Option : noisette de beurre en fin de cuisson."
      - "Dresser : purée en poche à douille, petits ronds. Champignons. Saint-Jacques. Option : fleurs comestibles et pointe de vinaigrette."
      cavernes:
      - "Préparation. Courge butternut, couper en deux. Graines, retirer. Éplucher. Chair, couper grossièrement."
      - "Cuisson. Oignon, éplucher, émincer. Casserole, noix beurre, revenir rapidement. Morceaux butternut, ajouter. Cuire quelques minutes."
      - "Cuisson. Sole ou cabillaud ou bouillon de légume, compléter. Feu doux, mijoter."
      - "Cuisson. Pendant courge cuit : coquilles Saint-Jacques, ouvrir. Pointe couteau entre deux parties, levier. Vidéo si besoin. Entrouvre : bloquer, face plate, gratter, chair décoller. Pied, cuillère, tourner, décrocher."
      - "Cuisson. Saint-Jacques ouvertes, courge cuite. Écumoire, oignons, dés butternut, mixeur, transvaser. Mixer. Noix beurre, ajouter. Réserver."
      - "Mélange. Gousse ail, éplucher, ciseler. Feuilles persil, hacher. Cuillère soupe huile olive, mélanger. Persillade."
      - "Cuisson. Girolles, poêle, filet huile olive, revenir. Saler, poivrer. Noix beurre. Colorés, réserver."
      - "Cuisson. Saint-Jacques, poêle, filet huile olive, revenir. Premier côté, colorer, retourner. Option : noisette beurre fin cuisson."
      - "Dressage. Purée, poche à douille, petits ronds assiette. Champignons, Saint-Jacques. Option : fleurs comestibles, pointe vinaigrette. Bon appétit."
    kcal_per_serving: 171
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer"

---

# Saint-Jacques, purée de butternut
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/saint-jacques-puree-de-butternut]]

## Ingrédients (4 personnes)

- 16 pièce de Saint-Jacques
- 1 courge butternut
- 1 oignon
- 120 g de girolles
- 1 gousse d'ail
-  beurre
-  huile d'olive
-  fond de veau
-  persil
-  fleurs comestibles

## Préparation

1. Coupez votre courge butternut en deux, retirez les graines puis épluchez-là. Coupez ensuite la chaire grossièrement afin que la cuisson soit plus rapide.
2. Épluchez et émincez l’oignon puis faites le revenir rapidement dans une casserole avec une noix de beurre. Ajoutez vos morceaux de butternut et laissez cuire pendant quelques minutes.
3. Complétez avec du fond de veau (ou du bouillon de légume) puis laissez mijoter à feu doux.
4. Pendant que la courge est en train de cuire, vous allez pouvoir ouvrir les coquilles Saint-Jacques. Pour cela, plantez la pointe de votre couteau entre les deux parties du coquillage puis servez-vous de cette lame comme levier. N’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous pour mieux comprendre. Dès qu’elle s’entrouvre, bloquez la coquille avec vos doigts et grattez la face la plus plate avec la lame de votre couteau afin de décoller la chaire.

Une fois ouverte, retirez la St-Jacques de son pied à l’aide d’une cuillère en tournant délicatement tout autour. Celle-ci finit par se décrocher.
5. Le temps d’ouvrir vos Saint-Jacques, la courge devrait être cuite. À l’aide d’un écumoire, transvasez les oignons et les dés de butternut dans un mixeur et mixez le tout. Ajoutez une noix de beurre pour rendre la purée plus lisse et onctueuse. Réservez.
6. Épluchez et ciselez une gousse d’ail puis hachez quelques feuilles de persil. Mélangez le tout avec une cuillère à soupe d’huile d’olive et vous obtenez une persillade.
7. Dans une poêle, faites revenir vos girolles avec un filet d’huile d’olive. Salez et poivrez selon vos goûts, puis ajoutez-y une noix de beurre. Une fois que les champignons sont bien colorés, réservez-les sur le côté.
8. Faites revenir les Saint-Jacques à la poêle avec un filet d’huile d’olive. Laissez colorez le premier côté puis retournez-les délicatement. Vous pouvez ajouter une noisette de beurre pour le goût en fin de cuisson.
9. Pour le dressage, versez la purée dans une poche à douille afin de réaliser des petits ronds dans l’assiette. Placez ensuite les champignons et enfin les Saint-Jacques.

 
 

 
 Pour être plus romantique que jamais, vous pouvez ajouter des fleurs comestibles et une pointe de vinaigrette pour finaliser votre plat. Bon appétit !
