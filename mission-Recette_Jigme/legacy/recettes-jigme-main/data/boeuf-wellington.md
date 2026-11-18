---
schema: recette-web-jigme/v2
equipment:
- ref: siphon
slug: boeuf-wellington
title: Bœuf Wellington
lang: fr
description: "Bœuf Wellington : recette britannique avec filet de bœuf, champignons et oignons, pour 4 personnes. Version maison. Facile à suivre."
cuisine: britannique
category: salé
tags:
- salé
- bœuf
- plat
- filet de bœuf
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/boeuf-wellington.webp
  alt: Bœuf Wellington
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/boeuf-wellington.md
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
    - from: seitan ou champignons portobello
      to: tofu ferme
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
    - from: céleri
      to: fenouil ou carotte
      note: Allergie céleri.
    note: Omettre le céleri.
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
    note: 'Contient poisson (thon ou cabillaud) : pas d’adaptation fiable.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; crème de soja ou avoine → crème d''avoine.'
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
histoire: >
  Filet de bœuf, duxelles, pâte feuilletée : l’Angleterre rattache le nom au duc de
  Wellington (Arthur Wellesley), sans preuve solide. On raconte un relooking patriotique
  du filet de bœuf en croûte français. Le *Répertoire de la cuisine* (1923) décrit déjà
  un « Wellington » professionnel : filet, farce, duxelles, feuilletage.
fun_facts:
- text: >
    *Duxelles* (avec un s) : hachis de champignons au beurre, attribué à la cuisine
    du marquis d’Uxelles (XVIIe s., via La Varenne). Ce n’est pas une farce de viande.
  source_name: Wikipedia, Duxelles
  source_url: https://en.wikipedia.org/wiki/Duxelles
- text: >
    La pâte détrempée vient de la vapeur des champignons : on sèche la duxelles à blanc
    et souvent on isole le filet (crêpe ou jambon) avant le feuilletage.
  source_name: Usage pâtissier / cuisine
  source_url: https://en.wikipedia.org/wiki/Beef_Wellington
wines:
- name: Haut-Médoc
  producer: Château Beaumont
  origin: Cussac-Fort-Médoc
  grapes: cabernet sauvignon, merlot
  award:
  why: Cassis, tanin droit — le filet et la croûte, sans sucrosité.
- name: Mercurey
  producer: Domaine Faiveley
  origin: Mercurey, Côte chalonnaise
  grapes: pinot noir
  award:
  why: Sous-bois, tanin soyeux — duxelles et jus de bœuf.
- name: Chianti Classico
  producer: Rocca delle Macìe
  origin: Castellina in Chianti
  grapes: sangiovese
  award:
  why: Cerise, acidité — tient le feuilletage sans masquer le bœuf.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - celeri
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 50
      cook_min: 45
      rest_min: 0
      total_min: 95
    equipment: &id002
    - four
    - poêle
    - saladier
    - passoire
    - couteau
    - siphon
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: filet de bœuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: oignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: foie gras
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: pommes de terre amandine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: feuille
      item: céleri
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème
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
    - qty: 6
      unit: piece
      item: châtaigne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: poivre
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
    - qty: 250
      unit: ml
      item: fond blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: thym
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites chauffer une poêle avec un fond d’huile pour croûter les quatre côtés de votre
      filet après avoir salé et poivré chaque côté au préalable. Réservez la viande dans le
      frigo pendant 15-20 minutes le temps de préparer la duxelles et snacker le foie gras.
    - Cuisson. Poivrez et salez les foies gras et faites chauffer une poêle sans matière grasse bien
      sûr. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour
      cuire les pommes de terre/
    - 'Cuisson. Nous vous proposons une manière particulière d’introduire les pommes de terre dans
      l’assiette de vos convives : coupez-les en forme de champignons ! Pour cela, faites
      une incision autour du haut de la pomme de terre sans toucher le centre afin de ne pas
      la couper. Ensuite, en partant du bas, coupez vers l’incision que vous avez faite sur
      le haut de la pomme de terre. Pratiquez cette manœuvre jusqu’à obtenir une tige. N’hésitez-pas
      à jeter un coup d’oeil sur la vidéo associée à cette recette ! Enfin, faites cuire vos
      pommes de terre dans la poêle avec du thym et du laurier. Pour vérifier la cuisson,
      piquer les pommes de terre à l’aide d’un couteau, si vous rencontrez de la résistance
      c’est qu’elles ne sont pas encore cuites !'
    - Cuisson. Préparer une duxelles de champignons, pour cela faites revenir des champignons émincés
      très finement avec des échalotes puis hachez le tous. Coupez le filet dans la moitié,
      sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les
      morceaux de foie gras et fermez le tout.
    - Cuisson. Placez la viande au milieu de la pâte feuilletée et enveloppez la viande dans la pâte
      feuilletée en rabattant les côtés les uns sur les autres. Badigeonnez de jaune d’œuf
      (mélangé à un peu d’eau) le-dessus de votre petit paquet et à l’aide d’une fourchette
      quadrillez le dessus pour un visuel plus alléchant ! Mettez-le tout au four à 190°C
      pendant 30 minutes.
    - Finition. Marc vous invite à apprendre à faire un siphon à la châtaigne. Pour cela, faites revenir
      dans du beurre les châtaignes, au préalable légèrement écrasées, et ajoutez ensuite
      des feuilles de céleri pour donner un peu de goût à votre préparation. Ajoutez ensuite
      la crème, le fond blanc et après voir laisser mijoter le tout pendant 10 minutes, mixez
      votre préparation. Versez ensuite la préparation dans un bol avec l’aide d’une passoire,
      assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le
      dans un joli bol…votre sauce est prête ! Lorsque le temps de cuisson de votre bœuf est
      passé, vous pouvez passer au dressage. Vous avez carte blanche pour faire une magnifique
      assiette ! Découpez une tranche de bœuf puis dégustez un morceau avec la sauce à la
      châtaigne, un voyage culinaire vous attend dont vous ne sortirez pas indemne.
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer une poêle avec un fond d’huile. Salez et poivrez chaque côté du filet, puis croûtez les quatre côtés. Réservez la viande au frigo pendant 15-20 minutes, le temps de préparer la duxelles et de saisir le foie gras."
      - "Cuisson. Poivrez et salez les foies gras. Faites chauffer une poêle sans matière grasse. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour cuire les pommes de terre."
      - "Cuisson. Coupez les pommes de terre en forme de champignons : faites une incision autour du haut, sans toucher le centre, afin de ne pas les couper. En partant du bas, coupez vers cette incision jusqu’à obtenir une tige. Faites-les cuire dans la poêle avec du thym et du laurier. Pour vérifier la cuisson, piquez-les à l’aide d’un couteau : s’il y a de la résistance, elles ne sont pas encore cuites."
      - "Cuisson. Préparez une duxelles de champignons : faites revenir des champignons émincés très finement avec des échalotes, puis hachez le tout. Coupez le filet dans la moitié, sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les morceaux de foie gras et fermez le tout."
      - "Cuisson. Placez la viande au milieu de la pâte feuilletée et enveloppez-la en rabattant les côtés les uns sur les autres. Badigeonnez de jaune d’œuf mélangé à un peu d’eau le dessus du paquet. À l’aide d’une fourchette, quadrillez le dessus. Enfournez le tout à 190 °C pendant 30 minutes."
      - "Finition. Faites revenir dans du beurre les châtaignes, au préalable légèrement écrasées. Ajoutez des feuilles de céleri. Ajoutez la crème et le fond blanc. Après avoir laissé [[mijoter|mijoter]] 10 minutes, mixez. Versez la préparation dans un bol [[filtrer|à l’aide d’une passoire]], assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le dans un bol. Lorsque le temps de cuisson du bœuf est passé, découpez une tranche et servez avec la sauce à la châtaigne."
      pro:
      - "Chauffer une poêle avec un fond d’huile. Saler et poivrer chaque côté du filet. Croûter les quatre côtés. Réserver la viande au frigo 15-20 minutes. Préparer la duxelles. Saisir le foie gras."
      - "Poivrer et saler les foies gras. Chauffer une poêle sans matière grasse. Croûter, réserver. Conserver le gras de la poêle pour les pommes de terre."
      - "Couper les pommes de terre en forme de champignons : incision autour du haut, sans toucher le centre. Du bas, couper vers l’incision jusqu’à une tige. Cuire à la poêle avec thym et laurier. Vérifier au couteau : résistance = pas cuit."
      - "Duxelles : faire revenir champignons émincés très finement avec échalotes, hacher. Couper le filet dans la moitié, sans le couper en deux. Garnir de duxelles. Placer les morceaux de foie gras. Fermer."
      - "Placer la viande au milieu de la pâte feuilletée. Envelopper en rabattant les côtés. Badigeonner de jaune d’œuf mélangé à un peu d’eau. Quadriller à la fourchette. Four 190 °C, 30 minutes."
      - "Faire revenir au beurre les châtaignes légèrement écrasées. Ajouter des feuilles de céleri, la crème et le fond blanc. Mijoter 10 minutes. Mixer. Verser dans un bol à l’aide d’une passoire. Assaisonner. Verser dans le siphon. Siphon gazé et refroidi : vider dans un bol. Cuisson du bœuf terminée : trancher. Servir avec la sauce à la châtaigne."
      cavernes:
      - "Cuisson. Poêle, fond huile. Filet : saler poivrer chaque côté, croûter quatre côtés. Viande frigo 15-20 minutes. Duxelles, foie gras saisir."
      - "Cuisson. Foies gras : poivrer, saler. Poêle sans matière grasse. Croûter, réserver. Gras poêle : pommes de terre."
      - "Cuisson. Pommes de terre forme champignons. Incision autour haut, pas toucher centre, pas couper. Partir bas, couper vers incision, tige. Poêle, thym, laurier. Couteau piquer : résistance = pas cuit."
      - "Cuisson. Duxelles : champignons émincés très fin, échalotes, revenir, hacher. Filet : couper dans moitié, pas en deux. Duxelles dedans. Morceaux foie gras, fermer."
      - "Cuisson. Viande milieu pâte feuilletée, envelopper, rabattre côtés. Jaune d’œuf, peu eau, badigeonner dessus. Fourchette : quadriller. Four 190 °C 30 minutes."
      - "Finition. Châtaignes légèrement écrasées, beurre, revenir. Feuilles céleri. Crème, fond blanc. Mijoter 10 minutes, mixer. Bol, passoire. Assaisonner, siphon. Siphon gazé, refroidi, vider bol. Temps bœuf passé : tranche, sauce châtaigne. Servir."
    kcal_per_serving: 800
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
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - celeri
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: seitan ou champignons portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: oignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: terrine de champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: pommes de terre amandine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: feuille
      item: céleri
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème
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
    - qty: 6
      unit: piece
      item: châtaigne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: poivre
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
    - qty: 250
      unit: ml
      item: fond blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: thym
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites chauffer une poêle avec un fond d’huile pour croûter les quatre côtés de votre
      filet après avoir salé et poivré chaque côté au préalable. Réservez la viande dans le
      frigo pendant 15-20 minutes le temps de préparer la duxelles et snacker le terrine de champignons.
    - Cuisson. Poivrez et salez les foies gras et faites chauffer une poêle sans matière grasse bien
      sûr. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour
      cuire les pommes de terre/
    - 'Cuisson. Nous vous proposons une manière particulière d’introduire les pommes de terre dans
      l’assiette de vos convives : coupez-les en forme de champignons ! Pour cela, faites
      une incision autour du haut de la pomme de terre sans toucher le centre afin de ne pas
      la couper. Ensuite, en partant du bas, coupez vers l’incision que vous avez faite sur
      le haut de la pomme de terre. Pratiquez cette manœuvre jusqu’à obtenir une tige. N’hésitez-pas
      à jeter un coup d’oeil sur la vidéo associée à cette recette ! Enfin, faites cuire vos
      pommes de terre dans la poêle avec du thym et du laurier. Pour vérifier la cuisson,
      piquer les pommes de terre à l’aide d’un couteau, si vous rencontrez de la résistance
      c’est qu’elles ne sont pas encore cuites !'
    - Cuisson. Préparer une duxelles de champignons, pour cela faites revenir des champignons émincés
      très finement avec des échalotes puis hachez le tous. Coupez le filet dans la moitié,
      sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les
      morceaux de terrine de champignons et fermez le tout.
    - Cuisson. Placez la viande au milieu de la pâte feuilletée et enveloppez la viande dans la pâte
      feuilletée en rabattant les côtés les uns sur les autres. Badigeonnez de jaune d’œuf
      (mélangé à un peu d’eau) le-dessus de votre petit paquet et à l’aide d’une fourchette
      quadrillez le dessus pour un visuel plus alléchant ! Mettez-le tout au four à 190°C
      pendant 30 minutes.
    - Finition. Marc vous invite à apprendre à faire un siphon à la châtaigne. Pour cela, faites revenir
      dans du beurre les châtaignes, au préalable légèrement écrasées, et ajoutez ensuite
      des feuilles de céleri pour donner un peu de goût à votre préparation. Ajoutez ensuite
      la crème, le fond blanc et après voir laisser mijoter le tout pendant 10 minutes, mixez
      votre préparation. Versez ensuite la préparation dans un bol avec l’aide d’une passoire,
      assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le
      dans un joli bol…votre sauce est prête ! Lorsque le temps de cuisson de votre bœuf est
      passé, vous pouvez passer au dressage. Vous avez carte blanche pour faire une magnifique
      assiette ! Découpez une tranche de bœuf puis dégustez un morceau avec la sauce à la
      châtaigne, un voyage culinaire vous attend dont vous ne sortirez pas indemne.
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer une poêle avec un fond d’huile. Salez et poivrez chaque côté du filet, puis croûtez les quatre côtés. Réservez la viande au frigo pendant 15-20 minutes, le temps de préparer la duxelles et de saisir la terrine de champignons."
      - "Cuisson. Poivrez et salez les foies gras. Faites chauffer une poêle sans matière grasse. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour cuire les pommes de terre."
      - "Cuisson. Coupez les pommes de terre en forme de champignons : faites une incision autour du haut, sans toucher le centre, afin de ne pas les couper. En partant du bas, coupez vers cette incision jusqu’à obtenir une tige. Faites-les cuire dans la poêle avec du thym et du laurier. Pour vérifier la cuisson, piquez-les à l’aide d’un couteau : s’il y a de la résistance, elles ne sont pas encore cuites."
      - "Cuisson. Préparez une duxelles de champignons : faites revenir des champignons émincés très finement avec des échalotes, puis hachez le tout. Coupez le filet dans la moitié, sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les morceaux de terrine de champignons et fermez le tout."
      - "Cuisson. Placez la viande au milieu de la pâte feuilletée et enveloppez-la en rabattant les côtés les uns sur les autres. Badigeonnez de jaune d’œuf mélangé à un peu d’eau le dessus du paquet. À l’aide d’une fourchette, quadrillez le dessus. Enfournez le tout à 190 °C pendant 30 minutes."
      - "Finition. Faites revenir dans du beurre les châtaignes, au préalable légèrement écrasées. Ajoutez des feuilles de céleri. Ajoutez la crème et le fond blanc. Après avoir laissé [[mijoter|mijoter]] 10 minutes, mixez. Versez la préparation dans un bol [[filtrer|à l’aide d’une passoire]], assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le dans un bol. Lorsque le temps de cuisson du bœuf est passé, découpez une tranche et servez avec la sauce à la châtaigne."
      pro:
      - "Chauffer une poêle avec un fond d’huile. Saler et poivrer chaque côté du filet. Croûter les quatre côtés. Réserver la viande au frigo 15-20 minutes. Préparer la duxelles. Saisir la terrine de champignons."
      - "Poivrer et saler les foies gras. Chauffer une poêle sans matière grasse. Croûter, réserver. Conserver le gras de la poêle pour les pommes de terre."
      - "Couper les pommes de terre en forme de champignons : incision autour du haut, sans toucher le centre. Du bas, couper vers l’incision jusqu’à une tige. Cuire à la poêle avec thym et laurier. Vérifier au couteau : résistance = pas cuit."
      - "Duxelles : faire revenir champignons émincés très finement avec échalotes, hacher. Couper le filet dans la moitié, sans le couper en deux. Garnir de duxelles. Placer les morceaux de terrine de champignons. Fermer."
      - "Placer la viande au milieu de la pâte feuilletée. Envelopper en rabattant les côtés. Badigeonner de jaune d’œuf mélangé à un peu d’eau. Quadriller à la fourchette. Four 190 °C, 30 minutes."
      - "Faire revenir au beurre les châtaignes légèrement écrasées. Ajouter des feuilles de céleri, la crème et le fond blanc. Mijoter 10 minutes. Mixer. Verser dans un bol à l’aide d’une passoire. Assaisonner. Verser dans le siphon. Siphon gazé et refroidi : vider dans un bol. Cuisson du bœuf terminée : trancher. Servir avec la sauce à la châtaigne."
      cavernes:
      - "Cuisson. Poêle, fond huile. Filet : saler poivrer chaque côté, croûter quatre côtés. Viande frigo 15-20 minutes. Duxelles, terrine de champignons saisir."
      - "Cuisson. Foies gras : poivrer, saler. Poêle sans matière grasse. Croûter, réserver. Gras poêle : pommes de terre."
      - "Cuisson. Pommes de terre forme champignons. Incision autour haut, pas toucher centre, pas couper. Partir bas, couper vers incision, tige. Poêle, thym, laurier. Couteau piquer : résistance = pas cuit."
      - "Cuisson. Duxelles : champignons émincés très fin, échalotes, revenir, hacher. Filet : couper dans moitié, pas en deux. Duxelles dedans. Morceaux terrine de champignons, fermer."
      - "Cuisson. Viande milieu pâte feuilletée, envelopper, rabattre côtés. Jaune d’œuf, peu eau, badigeonner dessus. Fourchette : quadriller. Four 190 °C 30 minutes."
      - "Finition. Châtaignes légèrement écrasées, beurre, revenir. Feuilles céleri. Crème, fond blanc. Mijoter 10 minutes, mixer. Bol, passoire. Assaisonner, siphon. Siphon gazé, refroidi, vider bol. Temps bœuf passé : tranche, sauce châtaigne. Servir."
    kcal_per_serving: 773
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
    - celeri
    - soja
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: seitan ou champignons portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: oignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pâte feuilletée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: pommes de terre amandine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: feuille
      item: céleri
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème de soja ou avoine
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
    - qty: 6
      unit: piece
      item: châtaigne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: poivre
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
    - qty: 250
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: thym
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: lait d'avoine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Dressage. Faites chauffer une poêle avec un fond d’huile pour croûter les quatre côtés du seitan (ou des portobellos) après avoir salé et poivré chaque côté. Réservez au frigo 15-20 minutes le temps de préparer la duxelles et de faire dorer le tofu fumé.
    - Dressage. Poivrez et salez le tofu fumé et faites-le dorer dans une poêle. Réservez. Gardez le fond de cuisson pour les pommes de terre.
    - 'Cuisson. Nous vous proposons une manière particulière d’introduire les pommes de terre dans
      l’assiette de vos convives : coupez-les en forme de champignons ! Pour cela, faites
      une incision autour du haut de la pomme de terre sans toucher le centre afin de ne pas
      la couper. Ensuite, en partant du bas, coupez vers l’incision que vous avez faite sur
      le haut de la pomme de terre. Pratiquez cette manœuvre jusqu’à obtenir une tige. N’hésitez-pas
      à jeter un coup d’oeil sur la vidéo associée à cette recette ! Enfin, faites cuire vos
      pommes de terre dans la poêle avec du thym et du laurier. Pour vérifier la cuisson,
      piquer les pommes de terre à l’aide d’un couteau, si vous rencontrez de la résistance
      c’est qu’elles ne sont pas encore cuites !'
    - Cuisson. Préparer une duxelles de champignons, pour cela faites revenir des champignons émincés
      très finement avec des échalotes puis hachez le tous. Fendez le seitan (ou les portobellos) sans le couper en deux, garnissez l’intérieur avec la duxelles, placez le tofu fumé et fermez le tout.
    - Cuisson. Placez le seitan au milieu de la pâte feuilletée vegan et enveloppez-le en rabattant les côtés. Badigeonnez le dessus avec un peu de lait d’avoine (ou de tofu soyeux délayé) et à l’aide d’une fourchette quadrillez le dessus pour un visuel
      plus alléchant ! Mettez-le tout au four à 190°C pendant 30 minutes.
    - Finition. Marc vous invite à apprendre à faire un siphon à la châtaigne. Pour cela, faites revenir
      dans de la margarine végétale les châtaignes, au préalable légèrement écrasées,
      et ajoutez ensuite des feuilles de céleri pour donner un peu de goût à votre préparation.
      Ajoutez ensuite la crème de soja ou d’avoine, le fond de légumes et après voir laisser mijoter
      le tout pendant 10 minutes, mixez votre préparation. Versez ensuite la préparation dans
      un bol avec l’aide d’une passoire, assaisonnez et versez-la dans le siphon. Une fois
      le siphon gazé et refroidi, videz-le dans un joli bol…votre sauce est prête ! Lorsque le temps de cuisson est passé, passez au dressage. Découpez une tranche de Wellington vegan et servez avec la sauce à la châtaigne.
    steps_niveaux:
      amateur:
      - "Dressage. Faites chauffer une poêle avec un fond d’huile. Salez et poivrez chaque côté du seitan (ou des portobellos), puis croûtez les quatre côtés. Réservez au frigo 15-20 minutes, le temps de préparer la duxelles et de faire dorer le tofu fumé."
      - "Dressage. Poivrez et salez le tofu fumé. Faites-le dorer dans une poêle. Réservez. Gardez le fond de cuisson pour les pommes de terre."
      - "Cuisson. Coupez les pommes de terre en forme de champignons : faites une incision autour du haut, sans toucher le centre, afin de ne pas les couper. En partant du bas, coupez vers cette incision jusqu’à obtenir une tige. Faites-les cuire dans la poêle avec du thym et du laurier. Pour vérifier la cuisson, piquez-les à l’aide d’un couteau : s’il y a de la résistance, elles ne sont pas encore cuites."
      - "Cuisson. Préparez une duxelles de champignons : faites revenir des champignons émincés très finement avec des échalotes, puis hachez le tout. Fendez le seitan (ou les portobellos) sans le couper en deux, garnissez l’intérieur avec la duxelles, placez le tofu fumé et fermez le tout."
      - "Cuisson. Placez le seitan au milieu de la pâte feuilletée vegan et enveloppez-le en rabattant les côtés. Badigeonnez le dessus avec un peu de lait d’avoine (ou de tofu soyeux délayé). À l’aide d’une fourchette, quadrillez le dessus. Enfournez le tout à 190 °C pendant 30 minutes."
      - "Finition. Faites revenir dans de la margarine végétale les châtaignes, au préalable légèrement écrasées. Ajoutez des feuilles de céleri. Ajoutez la crème de soja ou d’avoine et le fond de légumes. Après avoir laissé [[mijoter|mijoter]] 10 minutes, mixez. Versez la préparation dans un bol [[filtrer|à l’aide d’une passoire]], assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le dans un bol. Lorsque le temps de cuisson est passé, découpez une tranche de Wellington vegan et servez avec la sauce à la châtaigne."
      pro:
      - "Chauffer une poêle avec un fond d’huile. Saler et poivrer chaque côté du seitan ou des portobellos. Croûter les quatre côtés. Réserver au frigo 15-20 minutes. Préparer la duxelles. Faire dorer le tofu fumé."
      - "Poivrer et saler le tofu fumé. Faire dorer à la poêle. Réserver. Conserver le fond de cuisson pour les pommes de terre."
      - "Couper les pommes de terre en forme de champignons : incision autour du haut, sans toucher le centre. Du bas, couper vers l’incision jusqu’à une tige. Cuire à la poêle avec thym et laurier. Vérifier au couteau : résistance = pas cuit."
      - "Duxelles : faire revenir champignons émincés très finement avec échalotes, hacher. Fendre le seitan ou les portobellos sans couper en deux. Garnir de duxelles. Placer le tofu fumé. Fermer."
      - "Placer le seitan au milieu de la pâte feuilletée vegan. Envelopper en rabattant les côtés. Badigeonner de lait d’avoine ou de tofu soyeux délayé. Quadriller à la fourchette. Four 190 °C, 30 minutes."
      - "Faire revenir à la margarine végétale les châtaignes légèrement écrasées. Ajouter des feuilles de céleri, la crème de soja ou d’avoine et le fond de légumes. Mijoter 10 minutes. Mixer. Verser dans un bol à l’aide d’une passoire. Assaisonner. Verser dans le siphon. Siphon gazé et refroidi : vider dans un bol. Cuisson terminée : trancher le Wellington vegan. Servir avec la sauce à la châtaigne."
      cavernes:
      - "Dressage. Poêle, fond huile. Seitan ou portobellos : saler poivrer chaque côté, croûter quatre côtés. Frigo 15-20 minutes. Duxelles, tofu fumé dorer."
      - "Dressage. Tofu fumé : poivrer, saler, dorer poêle. Réserver. Fond cuisson : pommes de terre."
      - "Cuisson. Pommes de terre forme champignons. Incision autour haut, pas toucher centre, pas couper. Partir bas, couper vers incision, tige. Poêle, thym, laurier. Couteau piquer : résistance = pas cuit."
      - "Cuisson. Duxelles : champignons émincés très fin, échalotes, revenir, hacher. Seitan ou portobellos : fendre, pas en deux. Duxelles dedans. Tofu fumé, fermer."
      - "Cuisson. Seitan milieu pâte feuilletée vegan, envelopper, rabattre côtés. Lait d’avoine ou tofu soyeux délayé, badigeonner dessus. Fourchette : quadriller. Four 190 °C 30 minutes."
      - "Finition. Châtaignes légèrement écrasées, margarine végétale, revenir. Feuilles céleri. Crème de soja ou avoine, fond de légumes. Mijoter 10 minutes, mixer. Bol, passoire. Assaisonner, siphon. Siphon gazé, refroidi, vider bol. Temps passé : tranche Wellington vegan, sauce châtaigne. Servir."
    kcal_per_serving: 773
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - celeri
    - poisson
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: thon ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: oignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: pâte feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: pommes de terre amandine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: feuille
      item: céleri
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème
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
    - qty: 6
      unit: piece
      item: châtaigne
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: poivre
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
    - qty: 250
      unit: ml
      item: fond blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: thym
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Faites chauffer une poêle avec un fond d’huile pour croûter les quatre côtés de votre
      filet après avoir salé et poivré chaque côté au préalable. Réservez la viande dans le
      frigo pendant 15-20 minutes le temps de préparer la duxelles et snacker le saumon fumé.
    - Cuisson. Poivrez et salez les foies gras et faites chauffer une poêle sans matière grasse bien
      sûr. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour
      cuire les pommes de terre/
    - 'Cuisson. Nous vous proposons une manière particulière d’introduire les pommes de terre dans
      l’assiette de vos convives : coupez-les en forme de champignons ! Pour cela, faites
      une incision autour du haut de la pomme de terre sans toucher le centre afin de ne pas
      la couper. Ensuite, en partant du bas, coupez vers l’incision que vous avez faite sur
      le haut de la pomme de terre. Pratiquez cette manœuvre jusqu’à obtenir une tige. N’hésitez-pas
      à jeter un coup d’oeil sur la vidéo associée à cette recette ! Enfin, faites cuire vos
      pommes de terre dans la poêle avec du thym et du laurier. Pour vérifier la cuisson,
      piquer les pommes de terre à l’aide d’un couteau, si vous rencontrez de la résistance
      c’est qu’elles ne sont pas encore cuites !'
    - Cuisson. Préparer une duxelles de champignons, pour cela faites revenir des champignons émincés
      très finement avec des échalotes puis hachez le tous. Coupez le filet dans la moitié,
      sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les
      morceaux de saumon fumé et fermez le tout.
    - Cuisson. Placez la viande au milieu de la pâte feuilletée et enveloppez la viande dans la pâte
      feuilletée en rabattant les côtés les uns sur les autres. Badigeonnez de jaune d’œuf
      (mélangé à un peu d’eau) le-dessus de votre petit paquet et à l’aide d’une fourchette
      quadrillez le dessus pour un visuel plus alléchant ! Mettez-le tout au four à 190°C
      pendant 30 minutes.
    - Finition. Marc vous invite à apprendre à faire un siphon à la châtaigne. Pour cela, faites revenir
      dans du beurre les châtaignes, au préalable légèrement écrasées, et ajoutez ensuite
      des feuilles de céleri pour donner un peu de goût à votre préparation. Ajoutez ensuite
      la crème, le fond blanc et après voir laisser mijoter le tout pendant 10 minutes, mixez
      votre préparation. Versez ensuite la préparation dans un bol avec l’aide d’une passoire,
      assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le
      dans un joli bol…votre sauce est prête ! Lorsque le temps de cuisson de votre bœuf est
      passé, vous pouvez passer au dressage. Vous avez carte blanche pour faire une magnifique
      assiette ! Découpez une tranche de bœuf puis dégustez un morceau avec la sauce à la
      châtaigne, un voyage culinaire vous attend dont vous ne sortirez pas indemne.
    steps_niveaux:
      amateur:
      - "Cuisson. Faites chauffer une poêle avec un fond d’huile. Salez et poivrez chaque côté du filet, puis croûtez les quatre côtés. Réservez la viande au frigo pendant 15-20 minutes, le temps de préparer la duxelles et de saisir le saumon fumé."
      - "Cuisson. Poivrez et salez les foies gras. Faites chauffer une poêle sans matière grasse. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour cuire les pommes de terre."
      - "Cuisson. Coupez les pommes de terre en forme de champignons : faites une incision autour du haut, sans toucher le centre, afin de ne pas les couper. En partant du bas, coupez vers cette incision jusqu’à obtenir une tige. Faites-les cuire dans la poêle avec du thym et du laurier. Pour vérifier la cuisson, piquez-les à l’aide d’un couteau : s’il y a de la résistance, elles ne sont pas encore cuites."
      - "Cuisson. Préparez une duxelles de champignons : faites revenir des champignons émincés très finement avec des échalotes, puis hachez le tout. Coupez le filet dans la moitié, sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les morceaux de saumon fumé et fermez le tout."
      - "Cuisson. Placez la viande au milieu de la pâte feuilletée et enveloppez-la en rabattant les côtés les uns sur les autres. Badigeonnez de jaune d’œuf mélangé à un peu d’eau le dessus du paquet. À l’aide d’une fourchette, quadrillez le dessus. Enfournez le tout à 190 °C pendant 30 minutes."
      - "Finition. Faites revenir dans du beurre les châtaignes, au préalable légèrement écrasées. Ajoutez des feuilles de céleri. Ajoutez la crème et le fond blanc. Après avoir laissé [[mijoter|mijoter]] 10 minutes, mixez. Versez la préparation dans un bol [[filtrer|à l’aide d’une passoire]], assaisonnez et versez-la dans le siphon. Une fois le siphon gazé et refroidi, videz-le dans un bol. Lorsque le temps de cuisson du bœuf est passé, découpez une tranche et servez avec la sauce à la châtaigne."
      pro:
      - "Chauffer une poêle avec un fond d’huile. Saler et poivrer chaque côté du filet. Croûter les quatre côtés. Réserver la viande au frigo 15-20 minutes. Préparer la duxelles. Saisir le saumon fumé."
      - "Poivrer et saler les foies gras. Chauffer une poêle sans matière grasse. Croûter, réserver. Conserver le gras de la poêle pour les pommes de terre."
      - "Couper les pommes de terre en forme de champignons : incision autour du haut, sans toucher le centre. Du bas, couper vers l’incision jusqu’à une tige. Cuire à la poêle avec thym et laurier. Vérifier au couteau : résistance = pas cuit."
      - "Duxelles : faire revenir champignons émincés très finement avec échalotes, hacher. Couper le filet dans la moitié, sans le couper en deux. Garnir de duxelles. Placer les morceaux de saumon fumé. Fermer."
      - "Placer la viande au milieu de la pâte feuilletée. Envelopper en rabattant les côtés. Badigeonner de jaune d’œuf mélangé à un peu d’eau. Quadriller à la fourchette. Four 190 °C, 30 minutes."
      - "Faire revenir au beurre les châtaignes légèrement écrasées. Ajouter des feuilles de céleri, la crème et le fond blanc. Mijoter 10 minutes. Mixer. Verser dans un bol à l’aide d’une passoire. Assaisonner. Verser dans le siphon. Siphon gazé et refroidi : vider dans un bol. Cuisson du bœuf terminée : trancher. Servir avec la sauce à la châtaigne."
      cavernes:
      - "Cuisson. Poêle, fond huile. Filet : saler poivrer chaque côté, croûter quatre côtés. Viande frigo 15-20 minutes. Duxelles, saumon fumé saisir."
      - "Cuisson. Foies gras : poivrer, saler. Poêle sans matière grasse. Croûter, réserver. Gras poêle : pommes de terre."
      - "Cuisson. Pommes de terre forme champignons. Incision autour haut, pas toucher centre, pas couper. Partir bas, couper vers incision, tige. Poêle, thym, laurier. Couteau piquer : résistance = pas cuit."
      - "Cuisson. Duxelles : champignons émincés très fin, échalotes, revenir, hacher. Filet : couper dans moitié, pas en deux. Duxelles dedans. Morceaux saumon fumé, fermer."
      - "Cuisson. Viande milieu pâte feuilletée, envelopper, rabattre côtés. Jaune d’œuf, peu eau, badigeonner dessus. Fourchette : quadriller. Four 190 °C 30 minutes."
      - "Finition. Châtaignes légèrement écrasées, beurre, revenir. Feuilles céleri. Crème, fond blanc. Mijoter 10 minutes, mixer. Bol, passoire. Assaisonner, siphon. Siphon gazé, refroidi, vider bol. Temps bœuf passé : tranche, sauce châtaigne. Servir."
    kcal_per_serving: 647
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "saumon fumé"
---

# Bœuf Wellington

![[boeuf-wellington.webp]]
**Équipement :** [[siphon]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/boeuf-wellington]]

## Ingrédients (4 personnes)

- 600 g de filet de bœuf
- 150 g de champignons
- 50 g d'oignons
- 1 œuf
- 300 g de pâte feuilletée
- 250 g de foie gras
- 5 échalote
- 10 pommes de terre amandine
- 5 feuilles de céleri
- 250 g crème
-  beurre
- 6 châtaigne
-  poivre
-  sel
- 250 ml de fond blanc
- 1 bouquet de laurier
- 1 bouquet de thym
-  huile d'arachide

## Préparation

1. Faites chauffer une poêle avec un fond d’huile pour croûter les quatre côtés de votre filet après avoir salé et poivré chaque côté au préalable.

Réservez la viande dans le frigo pendant 15-20 minutes le temps de préparer la duxelles et snacker le foie gras.
2. Poivrez et salez les foies gras et faites chauffer une poêle sans matière grasse bien sûr. Faites croûter les foies gras et réservez de côté. Gardez le gras de la poêle pour cuire les pommes de terre/
3. Nous vous proposons une manière particulière d’introduire les pommes de terre dans l’assiette de vos convives : coupez-les en forme de champignons ! Pour cela, faites une incision autour du haut de la pomme de terre sans toucher le centre afin de ne pas la couper. Ensuite, en partant du bas, coupez vers l’incision que vous avez faite sur le haut de la pomme de terre. Pratiquez cette manœuvre jusqu’à obtenir une tige. N’hésitez-pas à jeter un coup d’oeil sur la vidéo associée à cette recette !

Enfin, faites cuire vos pommes de terre dans la poêle avec du thym et du laurier. Pour vérifier la cuisson, piquer les pommes de terre à l’aide d’un couteau, si vous rencontrez de la résistance c’est qu’elles ne sont pas encore cuites !
4. Préparer une duxelles de champignons, pour cela faites revenir des champignons émincés très finement avec des échalotes puis hachez le tous.

Coupez le filet dans la moitié, sans le couper en deux, et garnissez l’intérieur avec la duxelles. Placez ensuite les morceaux de foie gras et fermez le tout.
5. Placez la viande au milieu de la pâte feuilletée et enveloppez la viande dans la pâte feuilletée en rabattant les côtés les uns sur les autres.

Badigeonnez de jaune d’œuf (mélangé à un peu d’eau) le-dessus de votre petit paquet et à l’aide d’une fourchette quadrillez le dessus pour un visuel plus alléchant ! Mettez-le tout au four à 190°C pendant 30 minutes.
6. Marc vous invite à apprendre à faire un siphon à la châtaigne. Pour cela, faites revenir dans du beurre les châtaignes, au préalable légèrement écrasées, et ajoutez ensuite des feuilles de céleri pour donner un peu de goût à votre préparation.

Ajoutez ensuite la crème, le fond blanc et après voir laisser mijoter le tout pendant 10 minutes, mixez votre préparation. Versez ensuite la préparation dans un bol avec l’aide d’une passoire, assaisonnez et versez-la dans le siphon.

Une fois le siphon gazé et refroidi, videz-le dans un joli bol…votre sauce est prête !

 
 

 
 Lorsque le temps de cuisson de votre bœuf est passé, vous pouvez passer au dressage. Vous avez carte blanche pour faire une magnifique assiette ! Découpez une tranche de bœuf puis dégustez un morceau avec la sauce à la châtaigne, un voyage culinaire vous attend dont vous ne sortirez pas indemne.

 
