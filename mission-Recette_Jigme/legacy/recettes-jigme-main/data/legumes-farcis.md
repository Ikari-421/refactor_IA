---
schema: recette-web-jigme/v2
slug: legumes-farcis
title: Légumes farcis
lang: fr
description: "Légumes farcis : recette française avec légume à farcir de votre choix, chair à saucisse et oignon, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- légumes
- farci
- plat
image:
  url:
  alt: Légumes farcis
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/legumes-farcis.md
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
    - from: du parmesan
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
    note: 'Contient poisson (farce de poisson) : pas d’adaptation fiable.'
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
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
histoire: 'Légumes d’été (tomate, courgette, parfois aubergine ou poivron) creusés et remplis. Les farcis
  niçois mêlent viande hachée, mie et herbes. Le verbe farcir vient de « remplir ». Variante végétarienne
  : riz, restes de pain, fromage — même geste, autre farce.

  '
fun_facts:
- text: >
    On vide sans percer le fond : sinon le jus de cuisson s’échappe et la farce sèche.
  source_name: Usage
  source_url:
- text: >
    En Provence, tomates et courgettes farcies sont un plat de saison, pas un
    gratin d’hiver.
  source_name: Grokipedia, Stuffing
  source_url: https://grokipedia.com/page/Stuffing
wines:
- name: Côtes de Provence
  producer: Château de Roquefort
  origin: Roquefort-la-Bédoule, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé ou rouge léger de Provence — la tomate et les herbes.
- name: Coteaux d'Aix-en-Provence
  producer: Château Revelette
  origin: Jouques, Provence
  grapes: syrah, grenache
  award:
  why: Garrigue — la farce, sans un tanin de garde.
- name: Tavel
  producer: Domaine Lafond Roc-Epine
  origin: Tavel, Rhône
  grapes: grenache
  award:
  why: Rosé de saignée, fruit — la tomate farcie, structure plus que un rosé pâle.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 60
      rest_min: 60
      total_min: 150
    equipment: &id002
    - four
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 6
      unit: piece
      item: légume à farcir de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: chair à saucisse
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
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du riz cuit
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: l'huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux
      grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes
      pour avoir un résultat final fondant. Ne le faites pas si vous voulez des courgettes
      croquantes.
    - Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes
      avant de rajouter l’oignon, l’ail et la chair à saucisse. Ajoutez ensuite le riz cuit,
      la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez
      le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus et mélangez.
    - Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus.
      Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous
      les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes pour un résultat final fondant. Ne le faites pas si vous voulez des courgettes croquantes."
      - "Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes avant de rajouter l’oignon, l’ail et la chair à saucisse. Ajoutez ensuite le riz cuit, la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus et mélangez."
      - "Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus. Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit !"
      pro:
      - "Couper le haut des légumes. Vider. Couper la chair récupérée en petits morceaux grossiers. Option : pré-cuire les courgettes 5 minutes à l’eau bouillante pour un résultat fondant ; sinon laisser croquantes."
      - "Dans une grande poêle huilée, verser la chair de courgette. Cuire quelques minutes. Rajouter l’oignon, l’ail et la chair à saucisse. Ajouter le riz cuit, la chair de tomate et le persil haché. Mélanger. Assaisonner. Couper le feu. Légèrement refroidi, ajouter les oeufs battus. Mélanger."
      - "Garnir les légumes de farce. Tasser. Parmesan sur le dessus. Disposer dans un plat allant au four. Filet d’huile d’olive sur et sous les légumes. Enfourner à 180° une bonne quarantaine de minutes."
      cavernes:
      - "Préparation. Hauts légumes, couper. Vider. Chair récupérée, petits morceaux grossiers. Courgettes option pré-cuire eau bouillante 5 minutes, fondant. Sinon courgettes croquantes."
      - "Cuisson. Poêle grande huilée. Chair courgette, verser. Cuire quelques minutes. Oignon, ail, chair à saucisse, rajouter. Riz cuit, chair tomate, persil haché, ajouter. Mélanger. Assaisonner. Feu, couper. Légèrement refroidi. Œufs battus, ajouter. Mélanger."
      - "Finition. Légumes, farce, garnir. Tasser. Parmesan dessus. Plat four. Filet huile d’olive sur et sous. Four 180° quarantaine minutes. Bon appétit."
    kcal_per_serving: 143
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
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 6
      unit: piece
      item: légume à farcir de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: saucisse végétale
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
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du riz cuit
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: l'huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux
      grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes
      pour avoir un résultat final fondant. Ne le faites pas si vous voulez des courgettes
      croquantes.
    - Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes
      avant de rajouter l’oignon, l’ail et la saucisse végétale. Ajoutez ensuite le riz cuit,
      la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez
      le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus et mélangez.
    - Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus.
      Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous
      les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes pour un résultat final fondant. Ne le faites pas si vous voulez des courgettes croquantes."
      - "Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes avant de rajouter l’oignon, l’ail et la saucisse végétale. Ajoutez ensuite le riz cuit, la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus et mélangez."
      - "Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus. Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit !"
      pro:
      - "Couper le haut des légumes. Vider. Couper la chair récupérée en petits morceaux grossiers. Option : pré-cuire les courgettes 5 minutes à l’eau bouillante pour un résultat fondant ; sinon laisser croquantes."
      - "Dans une grande poêle huilée, verser la chair de courgette. Cuire quelques minutes. Rajouter l’oignon, l’ail et la saucisse végétale. Ajouter le riz cuit, la chair de tomate et le persil haché. Mélanger. Assaisonner. Couper le feu. Légèrement refroidi, ajouter les oeufs battus. Mélanger."
      - "Garnir les légumes de farce. Tasser. Parmesan sur le dessus. Disposer dans un plat allant au four. Filet d’huile d’olive sur et sous les légumes. Enfourner à 180° une bonne quarantaine de minutes."
      cavernes:
      - "Préparation. Hauts légumes, couper. Vider. Chair récupérée, petits morceaux grossiers. Courgettes option pré-cuire eau bouillante 5 minutes, fondant. Sinon courgettes croquantes."
      - "Cuisson. Poêle grande huilée. Chair courgette, verser. Cuire quelques minutes. Oignon, ail, saucisse végétale, rajouter. Riz cuit, chair tomate, persil haché, ajouter. Mélanger. Assaisonner. Feu, couper. Légèrement refroidi. Œufs battus, ajouter. Mélanger."
      - "Finition. Légumes, farce, garnir. Tasser. Parmesan dessus. Plat four. Filet huile d’olive sur et sous. Four 180° quarantaine minutes. Bon appétit."
    kcal_per_serving: 143
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 6
      unit: piece
      item: légume à farcir de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: saucisse végétale
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
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du riz cuit
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: l'huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan végétal ou levure maltée
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux
      grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes
      pour avoir un résultat final fondant. Ne le faites pas si vous voulez des courgettes
      croquantes.
    - Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes
      avant de rajouter l’oignon, l’ail et la saucisse végétale. Ajoutez ensuite le riz cuit,
      la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez
      le feu, et une fois que cela a légèrement refroidi, ajoutez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et mélangez.
    - Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez parmesan végétal ou levure
      maltée sur le dessus. Disposez-les dans un plat allant au four et versez un filet d’huile
      d’olive sur et sous les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes.
      Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes pour un résultat final fondant. Ne le faites pas si vous voulez des courgettes croquantes."
      - "Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes avant de rajouter l’oignon, l’ail et la saucisse végétale. Ajoutez ensuite le riz cuit, la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez le feu, et une fois que cela a légèrement refroidi, ajoutez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et mélangez."
      - "Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez parmesan végétal ou levure maltée sur le dessus. Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit !"
      pro:
      - "Couper le haut des légumes. Vider. Couper la chair récupérée en petits morceaux grossiers. Option : pré-cuire les courgettes 5 minutes à l’eau bouillante pour un résultat fondant ; sinon laisser croquantes."
      - "Dans une grande poêle huilée, verser la chair de courgette. Cuire quelques minutes. Rajouter l’oignon, l’ail et la saucisse végétale. Ajouter le riz cuit, la chair de tomate et le persil haché. Mélanger. Assaisonner. Couper le feu. Légèrement refroidi, ajouter l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélanger."
      - "Garnir les légumes de farce. Tasser. Parmesan végétal ou levure maltée sur le dessus. Disposer dans un plat allant au four. Filet d’huile d’olive sur et sous les légumes. Enfourner à 180° une bonne quarantaine de minutes."
      cavernes:
      - "Préparation. Hauts légumes, couper. Vider. Chair récupérée, petits morceaux grossiers. Courgettes option pré-cuire eau bouillante 5 minutes, fondant. Sinon courgettes croquantes."
      - "Cuisson. Poêle grande huilée. Chair courgette, verser. Cuire quelques minutes. Oignon, ail, saucisse végétale, rajouter. Riz cuit, chair tomate, persil haché, ajouter. Mélanger. Assaisonner. Feu, couper. Légèrement refroidi. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, ajouter. Mélanger."
      - "Finition. Légumes, farce, garnir. Tasser. Parmesan végétal ou levure maltée dessus. Plat four. Filet huile d’olive sur et sous. Four 180° quarantaine minutes. Bon appétit."
    kcal_per_serving: 143
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 6
      unit: piece
      item: légume à farcir de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: farce de poisson
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
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du riz cuit
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: l'huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux
      grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes
      pour avoir un résultat final fondant. Ne le faites pas si vous voulez des courgettes
      croquantes.
    - Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes
      avant de rajouter l’oignon, l’ail et la farce de poisson. Ajoutez ensuite le riz
      cuit, la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts.
      Coupez le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus
      et mélangez.
    - Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus.
      Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous
      les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes pour un résultat final fondant. Ne le faites pas si vous voulez des courgettes croquantes."
      - "Cuisson. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes avant de rajouter l’oignon, l’ail et la farce de poisson. Ajoutez ensuite le riz cuit, la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus et mélangez."
      - "Finition. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus. Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes. Bon appétit !"
      pro:
      - "Couper le haut des légumes. Vider. Couper la chair récupérée en petits morceaux grossiers. Option : pré-cuire les courgettes 5 minutes à l’eau bouillante pour un résultat fondant ; sinon laisser croquantes."
      - "Dans une grande poêle huilée, verser la chair de courgette. Cuire quelques minutes. Rajouter l’oignon, l’ail et la farce de poisson. Ajouter le riz cuit, la chair de tomate et le persil haché. Mélanger. Assaisonner. Couper le feu. Légèrement refroidi, ajouter les oeufs battus. Mélanger."
      - "Garnir les légumes de farce. Tasser. Parmesan sur le dessus. Disposer dans un plat allant au four. Filet d’huile d’olive sur et sous les légumes. Enfourner à 180° une bonne quarantaine de minutes."
      cavernes:
      - "Préparation. Hauts légumes, couper. Vider. Chair récupérée, petits morceaux grossiers. Courgettes option pré-cuire eau bouillante 5 minutes, fondant. Sinon courgettes croquantes."
      - "Cuisson. Poêle grande huilée. Chair courgette, verser. Cuire quelques minutes. Oignon, ail, farce de poisson, rajouter. Riz cuit, chair tomate, persil haché, ajouter. Mélanger. Assaisonner. Feu, couper. Légèrement refroidi. Œufs battus, ajouter. Mélanger."
      - "Finition. Légumes, farce, garnir. Tasser. Parmesan dessus. Plat four. Filet huile d’olive sur et sous. Four 180° quarantaine minutes. Bon appétit."
    kcal_per_serving: 143
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
  anti_gaspi: []
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"

---

# Légumes farcis
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/legumes-farcis]]

## Ingrédients (6 personnes)

- 6 légume à farcir de votre choix
- 800 g de chair à saucisse
- 1 oignon
- 2 gousse d'ail
- 2 oeuf
-  du riz cuit
-  du persil
-  de l'huile d'olive
-  du parmesan

## Préparation

1. Coupez le haut des légumes et videz-les. Coupez la chair récupérée en petits morceaux grossiers. Vous pouvez pré-cuire les courgettes dans l’eau bouillante pendant 5 minutes pour avoir un résultat final fondant. Ne le faites pas si vous voulez des courgettes croquantes.
2. Dans une grande poêle huilée, versez la chair de courgette, laissez cuire quelques minutes avant de rajouter l’oignon, l’ail et la chair à saucisse. Ajoutez ensuite le riz cuit, la chair de tomate et le persil haché. Mélangez et assaisonnez selon vos goûts. Coupez le feu, et une fois que cela a légèrement refroidi, ajoutez les oeufs battus et mélangez.
3. Garnissez les légumes avec la farce, tassez bien et ajoutez du parmesan sur le dessus. Disposez-les dans un plat allant au four et versez un filet d’huile d’olive sur et sous les légumes. Enfournez à 180° pendant une bonne quarantaine de minutes.

 
 

 
 Bon appétit !
