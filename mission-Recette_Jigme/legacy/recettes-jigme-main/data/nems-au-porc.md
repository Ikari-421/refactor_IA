---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: nems-au-porc
title: Nems au porc
lang: fr
description: "Nems au porc : recette vietnamienne avec porc haché, champignons et vermicelles de riz, pour 4 personnes. Version maison."
cuisine: vietnamienne
category: salé
tags:
- salé
- entrée
- porc
- porc haché
image:
  url:
  alt: Nems au porc
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/nems-au-porc.md
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
    - from: sauce soja salée
      to: tamari sans gluten
      note:
    - from: seitan ou tempeh
      to: tofu ferme
      note:
    - from: sauce soja + citron vert
      to: tamari sans gluten
      note:
    note: 'Gluten : sauce soja salée → tamari sans gluten ; seitan ou tempeh → tofu ferme
      ; sauce soja + citron vert → tamari sans gluten.'
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
    note: Déjà sans lait.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: seitan ou tempeh
      to: seitan
      note:
    - from: sauce soja salée
      to: aminos de coco
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de riz
      to: jus de citron vert
      note: Acidité un peu différente.
    note: Vinaigre de riz → citron vert.
house_toggle:
house_options: []
histoire: 'Nem rán (nord) ou chả giò (sud) : rouleau vietnamien de porc haché, champignons, vermicelle,
  frit dans une feuille de riz. /. En France on dit « nem ». Ce n’est pas le rouleau frais (gỏi cuốn).

  '
fun_facts:
- text: 'La feuille de riz se trempe à peine : trop molle, le nem éclate dans l’huile.

    '
  source_name: Usage
  source_url: null
- text: 'On sert souvent avec laitue, herbes et nuoc-mâm : on enroule le nem dans la feuille verte, on
    ne le mange pas nu.

    '
  source_name: Grokipedia, Spring roll
  source_url: https://grokipedia.com/page/Spring_roll
- text: 'Pour aller plus loin : l’histoire de « Nems au porc ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Nem
wines:
- name: Alsace Riesling
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: riesling
  award:
  why: Agrume — la friture et le nuoc-mâm, sans un chardonnay boisé.
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — le porc pané de riz, acidité nette.
- name: Crémant d'Alsace
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot blanc
  award:
  why: Bulles, pomme — l’apéritif frit, sans un champagne de prestige.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - poisson
    - soja
    - arachides
    - sulfites
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 10
      rest_min: 0
      total_min: 40
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: porc haché
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: vermicelles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 16
      unit: piece
      item: feuille de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aillet
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
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja salée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre de riz
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
      item: fécule de maïs
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre de cannes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: nuoc-mam
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une
      fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez.
    - Cuisson. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes,
      mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons
      de Paris.
    - Cuisson. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et
      du poivre. Une fois cuits, débarrassez.
    - Cuisson. Retirez le gras du filet mignon de porc, puis hachez-le assez finement. Pour ceux qui
      voudraient sauter cette étape, utilisez directement de la viande de porc hachée. Placez
      le tout dans un récipient.
    - Cuisson. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche.
      Placez le tout dans le récipient contentant la viande. Complétez avec les champignons
      et les vermicelles. Salez et poivrez selon vos goûts.
    - Cuisson. Dans ce même récipient, ajoutez la sauce nuoc mam et la sauce soja salée. Râpez l’équivalent
      d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement épluchée. Mélangez
      et rectifiez l’aissaisonnement en fonction de vos goûts.
    - Cuisson. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la
      également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté
      gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du
      bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique
      de Marc dans la vidéo ci-dessous.
    - Cuisson. Dans une petit récipient, délayez de la farine de mais avec un peu d’eau. À l’aide d’un
      pinceau, badigeonnez tous les nems de ce mélange. Plongez-les ensuite dans une friteuse
      à 160°C pendant 2 à 3 minutes.
    - Mélange. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez
      2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce nuoc mam. Complétez
      avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne.
    - Finition. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer
      l’excédent de graisse. Vos nems maison sont prêts ! Servez-les dans un joli récipient,
      accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la
      cacahuète. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez."
      - "Cuisson. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes, mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons de Paris."
      - "Cuisson. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et du poivre. Une fois cuits, débarrassez."
      - "Cuisson. Retirez le gras du filet mignon de porc, puis hachez-le assez finement. Pour ceux qui voudraient sauter cette étape, utilisez directement de la viande de porc hachée. Placez le tout dans un récipient."
      - "Cuisson. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche. Placez le tout dans le récipient contentant la viande. Complétez avec les champignons et les vermicelles. Salez et poivrez selon vos goûts."
      - "Cuisson. Dans ce même récipient, ajoutez la sauce nuoc mam et la sauce soja salée. [[raper|Râpez]] l’équivalent d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement épluchée. Mélangez et rectifiez l’aissaisonnement en fonction de vos goûts."
      - "Cuisson. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique de Marc dans la vidéo ci-dessous."
      - "Cuisson. Dans une petit récipient, mélangez de la farine de mais avec un peu d’eau. À l’aide d’un pinceau, badigeonnez tous les nems de ce mélange. [[frire|Plongez-les]] ensuite dans une friteuse à 160°C pendant 2 à 3 minutes."
      - "Mélange. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez 2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce nuoc mam. Complétez avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne."
      - "Finition. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer l’excédent de graisse. Vos nems maison sont prêts ! Servez-les dans un joli récipient, accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la cacahuète. Bon appétit !"
      pro:
      - "Cuire les vermicelles dans une casserole d’eau bouillante pendant 1min30. Plonger dans l’eau froide. Égoutter. Réserver."
      - "Couper finement les champignons (pleurotes, ou champignons noirs, shiitake, champignons de Paris)."
      - "Faire revenir les champignons hachés à la poêle, filet d’huile, sel, poivre. Une fois cuits, débarrasser."
      - "Retirer le gras du filet mignon de porc. Hacher assez finement. Option : viande de porc hachée. Placer dans un récipient."
      - "Éplucher et couper très finement l’oignon et l’aillet. Hacher la coriandre fraiche. Placer dans le récipient contentant la viande. Compléter avec les champignons et les vermicelles. Saler, poivrer selon le goût."
      - "Ajouter la sauce nuoc mam et la sauce soja salée. Râper l’équivalent d’une noisette de gingembre, et une gousse d’ail épluchée. Mélanger. Rectifier l’aissaisonnement."
      - "Étaler un torchon humide. Y placer une feuille de riz, l’humidifier. Déposer un peu de farce au centre. Rabattre côté gauche, côté droit, puis le bas. Rouler à partir du bas. Répéter pour toutes les feuilles."
      - "Mélanger de la farine de mais avec un peu d’eau, petit récipient. Badigeonner tous les nems au pinceau. Plonger dans une friteuse à 160°C pendant 2 à 3 minutes."
      - "Pendant la cuisson : mélanger 2 c.à.s de sauce soja salée, de vinaigre de riz et de sauce nuoc mam. Compléter avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne."
      - "Retirer les nems de la friteuse. Déposer sur papier absorbant. Servir avec menthe fraiche, salade et sauce à la cacahuète."
      cavernes:
      - "Cuisson. Casserole, eau bouillante. Vermicelles, 1min30. Eau froide, plonger. Égoutter. Réserver."
      - "Cuisson. Champignons, couper fin. Pleurotes, ou champignons noirs, shiitake, champignons de Paris."
      - "Cuisson. Champignons hachés, poêle, filet huile, sel, poivre, faire revenir. Cuits, débarrasser."
      - "Cuisson. Filet mignon porc, gras, retirer. Hacher assez fin. Option, porc haché. Récipient, placer."
      - "Cuisson. Oignon, aillet, éplucher, couper très fin. Coriandre fraiche, hacher. Récipient contentant viande. Champignons, vermicelles, compléter. Sel, poivre, goût."
      - "Cuisson. Même récipient. Sauce nuoc mam, sauce soja salée, ajouter. Gingembre, équivalent noisette, râper. Gousse ail épluchée. Mélanger. Aissaisonnement, rectifier."
      - "Cuisson. Torchon humide, étaler. Feuille riz, placer, humidifier. Peu farce, centre. Côté gauche, côté droit, bas, rabattre. Partir bas, rouler. Toutes feuilles, même."
      - "Cuisson. Petit récipient. Farine de mais, peu eau, mélanger. Pinceau, badigeonner nems. Friteuse 160°C, 2 à 3 min, plonger."
      - "Mélange. Pendant. Sauce. Récipient. 2 c.à.s sauce soja salée, vinaigre de riz, sauce nuoc mam, mélanger. Cacahuètes concassées, demi c.à.c sucre de canne, compléter."
      - "Finition. Friteuse, nems, retirer. Papier absorbant, excédent graisse. Menthe fraiche, salade, sauce cacahuète. Servir."
    kcal_per_serving: 420
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
    - soja
    - arachides
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: vermicelles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 16
      unit: piece
      item: feuille de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aillet
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
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja + citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja salée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre de riz
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
      item: fécule de maïs
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre de cannes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une
      fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez.
    - Cuisson. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes,
      mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons
      de Paris.
    - Cuisson. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et
      du poivre. Une fois cuits, débarrassez.
    - Cuisson. Hachez finement le seitan ou le tempeh. Placez-le dans un récipient.
    - Cuisson. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche.
      Placez le tout dans le récipient contenant le seitan. Complétez avec les champignons
      et les vermicelles. Salez et poivrez selon vos goûts.
    - Cuisson. Dans ce même récipient, ajoutez la sauce soja + citron vert et la sauce soja salée.
      Râpez l’équivalent d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement
      épluchée. Mélangez et rectifiez l’aissaisonnement en fonction de vos goûts.
    - Cuisson. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la
      également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté
      gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du
      bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique
      de Marc dans la vidéo ci-dessous.
    - Cuisson. Dans une petit récipient, délayez de la farine de mais avec un peu d’eau. À l’aide d’un
      pinceau, badigeonnez tous les nems de ce mélange. Plongez-les ensuite dans une friteuse
      à 160°C pendant 2 à 3 minutes.
    - Mélange. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez
      2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce soja + citron vert.
      Complétez avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne.
    - Finition. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer
      l’excédent de graisse. Vos nems maison sont prêts ! Servez-les dans un joli récipient,
      accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la
      cacahuète. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez."
      - "Cuisson. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes, mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons de Paris."
      - "Cuisson. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et du poivre. Une fois cuits, débarrassez."
      - "Cuisson. Hachez finement le seitan ou le tempeh. Placez-le dans un récipient."
      - "Cuisson. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche. Placez le tout dans le récipient contenant le seitan. Complétez avec les champignons et les vermicelles. Salez et poivrez selon vos goûts."
      - "Cuisson. Dans ce même récipient, ajoutez la sauce soja + citron vert et la sauce soja salée. [[raper|Râpez]] l’équivalent d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement épluchée. Mélangez et rectifiez l’aissaisonnement en fonction de vos goûts."
      - "Cuisson. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique de Marc dans la vidéo ci-dessous."
      - "Cuisson. Dans une petit récipient, mélangez de la farine de mais avec un peu d’eau. À l’aide d’un pinceau, badigeonnez tous les nems de ce mélange. [[frire|Plongez-les]] ensuite dans une friteuse à 160°C pendant 2 à 3 minutes."
      - "Mélange. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez 2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce soja + citron vert. Complétez avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne."
      - "Finition. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer l’excédent de graisse. Vos nems maison sont prêts ! Servez-les dans un joli récipient, accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la cacahuète. Bon appétit !"
      pro:
      - "Cuire les vermicelles dans une casserole d’eau bouillante pendant 1min30. Plonger dans l’eau froide. Égoutter. Réserver."
      - "Couper finement les champignons (pleurotes, ou champignons noirs, shiitake, champignons de Paris)."
      - "Faire revenir les champignons hachés à la poêle, filet d’huile, sel, poivre. Une fois cuits, débarrasser."
      - "Hacher finement le seitan ou le tempeh. Placer dans un récipient."
      - "Éplucher et couper très finement l’oignon et l’aillet. Hacher la coriandre fraiche. Placer dans le récipient contenant le seitan. Compléter avec les champignons et les vermicelles. Saler, poivrer selon le goût."
      - "Ajouter la sauce soja + citron vert et la sauce soja salée. Râper l’équivalent d’une noisette de gingembre, et une gousse d’ail épluchée. Mélanger. Rectifier l’aissaisonnement."
      - "Étaler un torchon humide. Y placer une feuille de riz, l’humidifier. Déposer un peu de farce au centre. Rabattre côté gauche, côté droit, puis le bas. Rouler à partir du bas. Répéter pour toutes les feuilles."
      - "Mélanger de la farine de mais avec un peu d’eau, petit récipient. Badigeonner tous les nems au pinceau. Plonger dans une friteuse à 160°C pendant 2 à 3 minutes."
      - "Pendant la cuisson : mélanger 2 c.à.s de sauce soja salée, de vinaigre de riz et de sauce soja + citron vert. Compléter avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne."
      - "Retirer les nems de la friteuse. Déposer sur papier absorbant. Servir avec menthe fraiche, salade et sauce à la cacahuète."
      cavernes:
      - "Cuisson. Casserole, eau bouillante. Vermicelles, 1min30. Eau froide, plonger. Égoutter. Réserver."
      - "Cuisson. Champignons, couper fin. Pleurotes, ou champignons noirs, shiitake, champignons de Paris."
      - "Cuisson. Champignons hachés, poêle, filet huile, sel, poivre, faire revenir. Cuits, débarrasser."
      - "Cuisson. Seitan ou tempeh, hacher fin. Récipient, placer."
      - "Cuisson. Oignon, aillet, éplucher, couper très fin. Coriandre fraiche, hacher. Récipient contenant seitan. Champignons, vermicelles, compléter. Sel, poivre, goût."
      - "Cuisson. Même récipient. Sauce soja + citron vert, sauce soja salée, ajouter. Gingembre, équivalent noisette, râper. Gousse ail épluchée. Mélanger. Aissaisonnement, rectifier."
      - "Cuisson. Torchon humide, étaler. Feuille riz, placer, humidifier. Peu farce, centre. Côté gauche, côté droit, bas, rabattre. Partir bas, rouler. Toutes feuilles, même."
      - "Cuisson. Petit récipient. Farine de mais, peu eau, mélanger. Pinceau, badigeonner nems. Friteuse 160°C, 2 à 3 min, plonger."
      - "Mélange. Pendant. Sauce. Récipient. 2 c.à.s sauce soja salée, vinaigre de riz, sauce soja + citron vert, mélanger. Cacahuètes concassées, demi c.à.c sucre de canne, compléter."
      - "Finition. Friteuse, nems, retirer. Papier absorbant, excédent graisse. Menthe fraiche, salade, sauce cacahuète. Servir."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    - arachides
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 420
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
    - poisson
    - soja
    - arachides
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: vermicelles de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 16
      unit: piece
      item: feuille de riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: aillet
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
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: sauce soja salée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre de riz
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
      item: fécule de maïs
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre de cannes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une
      fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez.
    - Cuisson. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes,
      mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons
      de Paris.
    - Cuisson. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et
      du poivre. Une fois cuits, débarrassez.
    - Cuisson. Retirez le gras du filet mignon de porc, puis hachez-le assez finement. Pour ceux qui
      voudraient sauter cette étape, utilisez directement de la viande de cabillaude. Placez
      le tout dans un récipient.
    - Cuisson. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche.
      Placez le tout dans le récipient contentant la viande. Complétez avec les champignons
      et les vermicelles. Salez et poivrez selon vos goûts.
    - Cuisson. Dans ce même récipient, ajoutez la sauce nuoc mam et la sauce soja salée. Râpez l’équivalent
      d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement épluchée. Mélangez
      et rectifiez l’aissaisonnement en fonction de vos goûts.
    - Cuisson. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la
      également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté
      gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du
      bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique
      de Marc dans la vidéo ci-dessous.
    - Cuisson. Dans une petit récipient, délayez de la farine de mais avec un peu d’eau. À l’aide d’un
      pinceau, badigeonnez tous les nems de ce mélange. Plongez-les ensuite dans une friteuse
      à 160°C pendant 2 à 3 minutes.
    - Mélange. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez
      2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce nuoc mam. Complétez
      avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne.
    - Finition. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer
      l’excédent de graisse. Vos nems maison sont prêts ! Servez-les dans un joli récipient,
      accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la
      cacahuète. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez."
      - "Cuisson. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes, mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons de Paris."
      - "Cuisson. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et du poivre. Une fois cuits, débarrassez."
      - "Cuisson. Retirez le gras du filet mignon de porc, puis hachez-le assez finement. Pour ceux qui voudraient sauter cette étape, utilisez directement de la viande de cabillaude. Placez le tout dans un récipient."
      - "Cuisson. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche. Placez le tout dans le récipient contentant la viande. Complétez avec les champignons et les vermicelles. Salez et poivrez selon vos goûts."
      - "Cuisson. Dans ce même récipient, ajoutez la sauce nuoc mam et la sauce soja salée. [[raper|Râpez]] l’équivalent d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement épluchée. Mélangez et rectifiez l’aissaisonnement en fonction de vos goûts."
      - "Cuisson. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique de Marc dans la vidéo ci-dessous."
      - "Cuisson. Dans une petit récipient, mélangez de la farine de mais avec un peu d’eau. À l’aide d’un pinceau, badigeonnez tous les nems de ce mélange. [[frire|Plongez-les]] ensuite dans une friteuse à 160°C pendant 2 à 3 minutes."
      - "Mélange. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez 2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce nuoc mam. Complétez avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne."
      - "Finition. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer l’excédent de graisse. Vos nems maison sont prêts ! Servez-les dans un joli récipient, accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la cacahuète. Bon appétit !"
      pro:
      - "Cuire les vermicelles dans une casserole d’eau bouillante pendant 1min30. Plonger dans l’eau froide. Égoutter. Réserver."
      - "Couper finement les champignons (pleurotes, ou champignons noirs, shiitake, champignons de Paris)."
      - "Faire revenir les champignons hachés à la poêle, filet d’huile, sel, poivre. Une fois cuits, débarrasser."
      - "Retirer le gras du filet mignon de porc. Hacher assez finement. Option : viande de cabillaude. Placer dans un récipient."
      - "Éplucher et couper très finement l’oignon et l’aillet. Hacher la coriandre fraiche. Placer dans le récipient contentant la viande. Compléter avec les champignons et les vermicelles. Saler, poivrer selon le goût."
      - "Ajouter la sauce nuoc mam et la sauce soja salée. Râper l’équivalent d’une noisette de gingembre, et une gousse d’ail épluchée. Mélanger. Rectifier l’aissaisonnement."
      - "Étaler un torchon humide. Y placer une feuille de riz, l’humidifier. Déposer un peu de farce au centre. Rabattre côté gauche, côté droit, puis le bas. Rouler à partir du bas. Répéter pour toutes les feuilles."
      - "Mélanger de la farine de mais avec un peu d’eau, petit récipient. Badigeonner tous les nems au pinceau. Plonger dans une friteuse à 160°C pendant 2 à 3 minutes."
      - "Pendant la cuisson : mélanger 2 c.à.s de sauce soja salée, de vinaigre de riz et de sauce nuoc mam. Compléter avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne."
      - "Retirer les nems de la friteuse. Déposer sur papier absorbant. Servir avec menthe fraiche, salade et sauce à la cacahuète."
      cavernes:
      - "Cuisson. Casserole, eau bouillante. Vermicelles, 1min30. Eau froide, plonger. Égoutter. Réserver."
      - "Cuisson. Champignons, couper fin. Pleurotes, ou champignons noirs, shiitake, champignons de Paris."
      - "Cuisson. Champignons hachés, poêle, filet huile, sel, poivre, faire revenir. Cuits, débarrasser."
      - "Cuisson. Filet mignon porc, gras, retirer. Hacher assez fin. Option, viande cabillaude. Récipient, placer."
      - "Cuisson. Oignon, aillet, éplucher, couper très fin. Coriandre fraiche, hacher. Récipient contentant viande. Champignons, vermicelles, compléter. Sel, poivre, goût."
      - "Cuisson. Même récipient. Sauce nuoc mam, sauce soja salée, ajouter. Gingembre, équivalent noisette, râper. Gousse ail épluchée. Mélanger. Aissaisonnement, rectifier."
      - "Cuisson. Torchon humide, étaler. Feuille riz, placer, humidifier. Peu farce, centre. Côté gauche, côté droit, bas, rabattre. Partir bas, rouler. Toutes feuilles, même."
      - "Cuisson. Petit récipient. Farine de mais, peu eau, mélanger. Pinceau, badigeonner nems. Friteuse 160°C, 2 à 3 min, plonger."
      - "Mélange. Pendant. Sauce. Récipient. 2 c.à.s sauce soja salée, vinaigre de riz, sauce nuoc mam, mélanger. Cacahuètes concassées, demi c.à.c sucre de canne, compléter."
      - "Finition. Friteuse, nems, retirer. Papier absorbant, excédent graisse. Menthe fraiche, salade, sauce cacahuète. Servir."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  pesco:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; viande hachée ; riz cuit (Bacillus cereus si refroidissement lent)"

---

# Nems au porc
**Équipement :** [[friteuse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/nems-au-porc]]

## Ingrédients (4 personnes)

- 300 g de porc haché
- 160 g de champignons
- 50 g de vermicelles de riz
- 16 feuille de riz
- 1 aillet
- 1 oignon
- 2 gousse d'ail
- 1 bouquet de coriandre fraiche
- 2 c.à.s de sauce nuoc mam
- 2 c.à.s de sauce soja salée
-  vinaigre de riz
-  cacahuète
-  fécule de maïs
-  gingembre
-  sucre de cannes

## Préparation

1. Dans une casserole d’eau bouillante, faites cuire les vermicelles pendant 1min30. Une fois la cuisson terminée, plongez-les dans l’eau froide. Égouttez et réservez.
2. Coupez finement les champignons. Ici, on a choisi de faire la recette avec des pleurotes, mais vous pouvez aussi prendre des champignons noirs, des shiitake ou des champignons de Paris.
3. Faites revenir les champignons hachés dans une poêle avec un filet d’huile, du sel et du poivre. Une fois cuits, débarrassez.
4. Retirez le gras du filet mignon de porc, puis hachez-le assez finement. Pour ceux qui voudraient sauter cette étape, utilisez directement de la viande de porc hachée. Placez le tout dans un récipient.
5. Épluchez et coupez l’oignon et l’aillet très finement, puis hachez la coriandre fraiche. Placez le tout dans le récipient contentant la viande. Complétez avec les champignons et les vermicelles. Salez et poivrez selon vos goûts.
6. Dans ce même récipient, ajoutez la sauce nuoc mam et la sauce soja salée. Râpez l’équivalent d’une noisette de gingembre, ainsi qu’une gousse d’ail préalablement épluchée. Mélangez et rectifiez l’aissaisonnement en fonction de vos goûts.
7. Étalez devant vous un torchon humide. Placez-y ensuite une feuille de riz et humidifiez-la également. Déposez un peu de farce au centre de la feuille. Rabattez ensuite le côté gauche, le côté droit, puis le bas de la feuille de riz. Roulez le tout à partir du bas. Faites de même pour toutes les feuilles de riz. N’hésitez pas à regarder la technique de Marc dans la vidéo ci-dessous.
8. Dans une petit récipient, délayez de la farine de mais avec un peu d’eau. À l’aide d’un pinceau, badigeonnez tous les nems de ce mélange. Plongez-les ensuite dans une friteuse à 160°C pendant 2 à 3 minutes.
9. Pendant que les nems cuisent, attaquez vous à la sauce. Dans un récipient, mélangez 2 c.à.s de sauce soja salée, de vinaigre de riz ainsi que de sauce nuoc mam. Complétez avec quelques cacahuètes concassées et une demi c.à.c de sucre de canne.
10. Retirez les nems de la friteuse et déposez-les sur un papier absorbant pour retirer l’excédent de graisse.

 
 

 
 Vos nems maison sont prêts ! Servez-les dans un joli récipient,  accompagnés de feuilles de menthe fraiches, de feuilles de salade et de la sauce à la cacahuète. Bon appétit !
