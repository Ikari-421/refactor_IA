---
schema: recette-web-jigme/v2
slug: bavette-sauce-poivre
title: Bavette sauce poivre
lang: fr
description: "Bavette sauce poivre : recette française avec bavette, poivre en grains et cognac, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- bœuf
- plat
- bavette
image:
  url:
  alt: Bavette sauce poivre
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/bavette-sauce-poivre.md
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
    note: 'Contient poisson (pavé de thon) : pas d’adaptation fiable.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  La bavette (pièce de flanc, fibres longues) se saisit ; la sauce au poivre est un
  classique de bistrot français du XXe s., proche de la sauce au poivre vert des
  steakhouses. Pas d’inventeur unique.
fun_facts:
- text: "La bavette se tranche à contre-fibre, sinon elle tire comme de la ficelle."
  source_name: Usage boucher
  source_url:
- text: "Le poivre concassé flambé à l’alcool puis déglacé à la crème évite l’amertume du grain brûlé à sec trop longtemps."
  source_name: Usage bistrot
  source_url:
wines:
- name: Saint-Nicolas-de-Bourgueil
  producer: Yannick Amirault
  origin: Bourgueil, Loire
  grapes: cabernet franc
  award:
  why: Poivron, tanin vif — le poivre de la sauce et le gras de la bavette.
- name: Crozes-Hermitage
  producer: Domaine Combier
  origin: Crozes-Hermitage, Rhône nord
  grapes: syrah
  award:
  why: Poivre noir, violette — même registre que la sauce.
- name: Madiran
  producer: Château Montus
  origin: Madiran
  grapes: tannat
  award:
  why: Tanin ferme — la pièce grillée. (un peu plus marqué, rester sous 30 € sur les cuvées jeunes.)
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
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - poêle
    - rouleau à pâtisserie
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: bavette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: poivre en grains
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: crème épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le
      poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez
      ensuite vos bavettes avec le poivre concassé. Saisissez la viande dans une poêle à feu
      vif avec du beurre et de l’huile. En parallèle, préparez un fond (de veau, de volaille,
      comme vous voulez !).
    - Cuisson. Lorsque la viande a légèrement croûté, flambez au cognac. Retirez les viandes et baissez
      le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec
      une spatule pour décoller les sucs de cuisson. Laissez réduire à feu doux puis rajoutez
      le fond (ici de veau) et laissez réduire à nouveau. Ajoutez le crème, mélangez et laissez
      réduire pour que la sauce s’épaississe.
    - Finition. Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la
      sauce le nappe bien et reste en place dessus, c’est parfait ! Sinon, laissez réduire
      encore un peu. Faites réchauffer la viande quelques instants dans la sauce avant de
      la dresser dans l’assiette. Coupez le feu et ajoutez un tout petit peu de beurre dans
      la sauce (pour la texture) avant de la verser sur la viande. Personnellement, j’ai accompagné
      cela d’un écrasé de pommes de terre et c’était délicieux ! Vous savez maintenant faire
      une sauce au poivre parfaite pour les viandes ou même du tofu ou du seitan pour les
      végétariens (à faire avec du fond de légumes du coup !)
    steps_niveaux:
      amateur:
      - "Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez ensuite vos bavettes avec le poivre concassé. Saisissez la viande dans une poêle à feu vif avec du beurre et de l’huile. En parallèle, préparez un fond (de veau, de volaille, comme vous voulez)."
      - "Lorsque la viande a légèrement croûté, flambez au cognac. Retirez les viandes et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec une spatule pour décoller les sucs de cuisson. [[reduire|Laissez réduire]] à feu doux puis rajoutez le fond (ici de veau) et laissez réduire à nouveau. Ajoutez la crème, mélangez et laissez réduire pour que la sauce s’épaississe."
      - "Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la sauce le nappe bien et reste en place dessus, c’est parfait. Sinon, [[reduire|laissez réduire]] encore un peu. Faites réchauffer la viande quelques instants dans la sauce avant de la dresser dans l’assiette. Coupez le feu et ajoutez un tout petit peu de beurre dans la sauce (pour la texture) avant de la verser sur la viande."
      pro:
      - "Concasser le poivre au mortier, ou le casser au rouleau dans un sac congélation. Badigeonner les bavettes du poivre concassé. Saisir la viande à feu vif au beurre et à l’huile. Préparer en parallèle un fond de veau ou de volaille."
      - "Dès croûte légère, flamber au cognac. Retirer les viandes, baisser le feu. Déglacer au vin blanc, gratter les sucs. Réduire à feu doux. Ajouter le fond (ici de veau), réduire à nouveau. Ajouter la crème, mélanger, réduire jusqu’à épaississement."
      - "Contrôler le nappage au dos de la cuillère ; réduire encore si besoin. Réchauffer la viande quelques instants dans la sauce, dresser. Couper le feu, monter d’un peu de beurre, napper."
      cavernes:
      - "Poivre : concasser mortier. Sinon sac congélation, casser rouleau pâtisserie. Bavettes : badigeonner poivre concassé. Viande : saisir poêle feu vif beurre huile. Parallèle : fond veau ou volaille."
      - "Viande légèrement croûtée : flamber cognac. Viandes : retirer. Feu : baisser. Même poêle : vin blanc verser. Spatule : gratter fond poêle, sucs décoller. Feu doux : réduire. Fond (ici veau) : rajouter, réduire encore. Crème : ajouter, mélanger, réduire, sauce épaissit."
      - "Texture : dos cuillère, sauce nappe et reste. Sinon réduire encore. Viande : réchauffer instants sauce, dresser assiette. Feu : couper. Beurre tout petit peu sauce (texture). Verser viande."
    kcal_per_serving: 161
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: poivre en grains
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: crème épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le
      poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez
      ensuite vos steaks de pleurotes avec le poivre concassé. Saisissez-les dans une poêle à feu vif avec du beurre et de l’huile. En parallèle, préparez un fond de légumes.
    - Cuisson. Lorsque les steaks ont légèrement croûté, flambez au cognac. Retirez-les et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec
      une spatule pour décoller les sucs de cuisson. Laissez réduire à feu doux puis rajoutez le fond de légumes et laissez réduire à nouveau. Ajoutez le crème, mélangez et laissez
      réduire pour que la sauce s’épaississe.
    - Finition. Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la
      sauce le nappe bien et reste en place dessus, c’est parfait ! Sinon, laissez réduire
      encore un peu. Faites réchauffer les steaks de pleurotes quelques instants dans la sauce avant de les dresser. Coupez le feu et ajoutez un tout petit peu de beurre dans la sauce (pour la texture) avant de la verser. Accompagnez d’un écrasé de pommes de terre.
    steps_niveaux:
      amateur:
      - "Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez ensuite vos steaks de pleurotes avec le poivre concassé. Saisissez-les dans une poêle à feu vif avec du beurre et de l’huile. En parallèle, préparez un fond de légumes."
      - "Lorsque les steaks ont légèrement croûté, flambez au cognac. Retirez-les et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec une spatule pour décoller les sucs de cuisson. [[reduire|Laissez réduire]] à feu doux puis rajoutez le fond de légumes et laissez réduire à nouveau. Ajoutez la crème, mélangez et laissez réduire pour que la sauce s’épaississe."
      - "Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la sauce le nappe bien et reste en place dessus, c’est parfait. Sinon, [[reduire|laissez réduire]] encore un peu. Faites réchauffer les steaks de pleurotes quelques instants dans la sauce avant de les dresser. Coupez le feu et ajoutez un tout petit peu de beurre dans la sauce (pour la texture) avant de la verser. Accompagnez d’un écrasé de pommes de terre."
      pro:
      - "Concasser le poivre au mortier, ou le casser au rouleau dans un sac congélation. Badigeonner les steaks de pleurotes du poivre concassé. Saisir à feu vif au beurre et à l’huile. Préparer en parallèle un fond de légumes."
      - "Dès croûte légère, flamber au cognac. Retirer les steaks, baisser le feu. Déglacer au vin blanc, gratter les sucs. Réduire à feu doux. Ajouter le fond de légumes, réduire à nouveau. Ajouter la crème, mélanger, réduire jusqu’à épaississement."
      - "Contrôler le nappage au dos de la cuillère ; réduire encore si besoin. Réchauffer les steaks de pleurotes quelques instants dans la sauce, dresser. Couper le feu, monter d’un peu de beurre, napper. Accompagner d’un écrasé de pommes de terre."
      cavernes:
      - "Poivre : concasser mortier. Sinon sac congélation, casser rouleau pâtisserie. Steaks pleurotes : badigeonner poivre concassé. Saisir poêle feu vif beurre huile. Parallèle : fond légumes."
      - "Steaks légèrement croûtés : flamber cognac. Steaks : retirer. Feu : baisser. Même poêle : vin blanc verser. Spatule : gratter fond poêle, sucs décoller. Feu doux : réduire. Fond légumes : rajouter, réduire encore. Crème : ajouter, mélanger, réduire, sauce épaissit."
      - "Texture : dos cuillère, sauce nappe et reste. Sinon réduire encore. Steaks pleurotes : réchauffer instants sauce, dresser. Feu : couper. Beurre tout petit peu sauce (texture). Verser. Écrasé pommes de terre : accompagner."
    kcal_per_serving: 161
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: poivre en grains
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile
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
    - Préparation. Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le
      poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez
      ensuite vos steaks de pleurotes avec le poivre concassé. Saisissez-les dans une poêle à feu vif avec de la margarine végétale et de l’huile. En parallèle, préparez un fond de légumes.
    - Cuisson. Lorsque les pleurotes ont légèrement croûté, flambez au cognac. Retirez-les et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec
      une spatule pour décoller les sucs de cuisson. Laissez réduire à feu doux puis rajoutez le fond de légumes et laissez réduire à nouveau. Ajoutez la crème de soja ou d’avoine, mélangez et laissez
      réduire pour que la sauce s’épaississe.
    - Finition. Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la
      sauce le nappe bien et reste en place dessus, c’est parfait ! Sinon, laissez réduire
      encore un peu. Faites réchauffer les steaks de pleurotes quelques instants dans la sauce avant de les dresser. Coupez le feu et ajoutez un tout petit peu de margarine végétale dans la sauce (pour la texture) avant de la verser. Un écrasé de pommes de terre accompagne très bien.
    steps_niveaux:
      amateur:
      - "Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez ensuite vos steaks de pleurotes avec le poivre concassé. Saisissez-les dans une poêle à feu vif avec de la margarine végétale et de l’huile. En parallèle, préparez un fond de légumes."
      - "Lorsque les pleurotes ont légèrement croûté, flambez au cognac. Retirez-les et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec une spatule pour décoller les sucs de cuisson. [[reduire|Laissez réduire]] à feu doux puis rajoutez le fond de légumes et laissez réduire à nouveau. Ajoutez la crème de soja ou d’avoine, mélangez et laissez réduire pour que la sauce s’épaississe."
      - "Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la sauce le nappe bien et reste en place dessus, c’est parfait. Sinon, [[reduire|laissez réduire]] encore un peu. Faites réchauffer les steaks de pleurotes quelques instants dans la sauce avant de les dresser. Coupez le feu et ajoutez un tout petit peu de margarine végétale dans la sauce (pour la texture) avant de la verser. Un écrasé de pommes de terre accompagne très bien."
      pro:
      - "Concasser le poivre au mortier, ou le casser au rouleau dans un sac congélation. Badigeonner les steaks de pleurotes du poivre concassé. Saisir à feu vif à la margarine végétale et à l’huile. Préparer en parallèle un fond de légumes."
      - "Dès croûte légère, flamber au cognac. Retirer les pleurotes, baisser le feu. Déglacer au vin blanc, gratter les sucs. Réduire à feu doux. Ajouter le fond de légumes, réduire à nouveau. Ajouter la crème de soja ou d’avoine, mélanger, réduire jusqu’à épaississement."
      - "Contrôler le nappage au dos de la cuillère ; réduire encore si besoin. Réchauffer les steaks de pleurotes quelques instants dans la sauce, dresser. Couper le feu, monter d’un peu de margarine végétale, napper. Accompagner d’un écrasé de pommes de terre."
      cavernes:
      - "Poivre : concasser mortier. Sinon sac congélation, casser rouleau pâtisserie. Steaks pleurotes : badigeonner poivre concassé. Saisir poêle feu vif margarine végétale huile. Parallèle : fond légumes."
      - "Pleurotes légèrement croûtés : flamber cognac. Pleurotes : retirer. Feu : baisser. Même poêle : vin blanc verser. Spatule : gratter fond poêle, sucs décoller. Feu doux : réduire. Fond légumes : rajouter, réduire encore. Crème de soja ou avoine : ajouter, mélanger, réduire, sauce épaissit."
      - "Texture : dos cuillère, sauce nappe et reste. Sinon réduire encore. Steaks pleurotes : réchauffer instants sauce, dresser. Feu : couper. Margarine végétale tout petit peu sauce (texture). Verser. Écrasé pommes de terre : accompagner."
    kcal_per_serving: 161
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pavé de thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: poivre en grains
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vin blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de votre choix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: crème épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: du beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le
      poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez
      ensuite vos pavés de thon avec le poivre concassé. Saisissez la viande dans une poêle
      à feu vif avec du beurre et de l’huile. En parallèle, préparez un fond (de veau, de
      volaille, comme vous voulez !).
    - Cuisson. Lorsque la viande a légèrement croûté, flambez au cognac. Retirez les viandes et baissez
      le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec
      une spatule pour décoller les sucs de cuisson. Laissez réduire à feu doux puis rajoutez
      le fond (ici de veau) et laissez réduire à nouveau. Ajoutez le crème, mélangez et laissez
      réduire pour que la sauce s’épaississe.
    - Finition. Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la
      sauce le nappe bien et reste en place dessus, c’est parfait ! Sinon, laissez réduire
      encore un peu. Faites réchauffer la viande quelques instants dans la sauce avant de
      la dresser dans l’assiette. Coupez le feu et ajoutez un tout petit peu de beurre dans
      la sauce (pour la texture) avant de la verser sur la viande. Personnellement, j’ai accompagné
      cela d’un écrasé de pommes de terre et c’était délicieux ! Vous savez maintenant faire
      une sauce au poivre parfaite pour les viandes ou même du tofu ou du seitan pour les
      végétariens (à faire avec du fond de légumes du coup !)
    steps_niveaux:
      amateur:
      - "Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez ensuite vos pavés de thon avec le poivre concassé. Saisissez la viande dans une poêle à feu vif avec du beurre et de l’huile. En parallèle, préparez un fond (de veau, de volaille, comme vous voulez)."
      - "Lorsque la viande a légèrement croûté, flambez au cognac. Retirez les viandes et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec une spatule pour décoller les sucs de cuisson. [[reduire|Laissez réduire]] à feu doux puis rajoutez le fond (ici de veau) et laissez réduire à nouveau. Ajoutez la crème, mélangez et laissez réduire pour que la sauce s’épaississe."
      - "Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la sauce le nappe bien et reste en place dessus, c’est parfait. Sinon, [[reduire|laissez réduire]] encore un peu. Faites réchauffer la viande quelques instants dans la sauce avant de la dresser dans l’assiette. Coupez le feu et ajoutez un tout petit peu de beurre dans la sauce (pour la texture) avant de la verser sur la viande."
      pro:
      - "Concasser le poivre au mortier, ou le casser au rouleau dans un sac congélation. Badigeonner les pavés de thon du poivre concassé. Saisir la viande à feu vif au beurre et à l’huile. Préparer en parallèle un fond de veau ou de volaille."
      - "Dès croûte légère, flamber au cognac. Retirer les viandes, baisser le feu. Déglacer au vin blanc, gratter les sucs. Réduire à feu doux. Ajouter le fond (ici de veau), réduire à nouveau. Ajouter la crème, mélanger, réduire jusqu’à épaississement."
      - "Contrôler le nappage au dos de la cuillère ; réduire encore si besoin. Réchauffer la viande quelques instants dans la sauce, dresser. Couper le feu, monter d’un peu de beurre, napper."
      cavernes:
      - "Poivre : concasser mortier. Sinon sac congélation, casser rouleau pâtisserie. Pavés thon : badigeonner poivre concassé. Viande : saisir poêle feu vif beurre huile. Parallèle : fond veau ou volaille."
      - "Viande légèrement croûtée : flamber cognac. Viandes : retirer. Feu : baisser. Même poêle : vin blanc verser. Spatule : gratter fond poêle, sucs décoller. Feu doux : réduire. Fond (ici veau) : rajouter, réduire encore. Crème : ajouter, mélanger, réduire, sauce épaissit."
      - "Texture : dos cuillère, sauce nappe et reste. Sinon réduire encore. Viande : réchauffer instants sauce, dresser assiette. Feu : couper. Beurre tout petit peu sauce (texture). Verser viande."
    kcal_per_serving: 111
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

# Bavette sauce poivre
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/bavette-sauce-poivre]]

## Ingrédients (4 personnes)

- 4 bavette
- 40 g de poivre en grains
- 4 cl de cognac
- 5 cl de vin blanc
- 20 cl de fond de votre choix
- 1 càs de crème épaisse
-  de l'huile
-  du beurre

## Préparation

1. Concassez le poivre à l’aide d’un mortier. Si vous n’avez pas de mortier, mettez le poivre dans un sac congélation et cassez-le à l’aide d’un rouleau à pâtisserie. Badigeonnez ensuite vos bavettes avec le poivre concassé. Saisissez la viande dans une poêle à feu vif avec du beurre et de l’huile. En parallèle, préparez un fond (de veau, de volaille, comme vous voulez !).
2. Lorsque la viande a légèrement croûté, flambez au cognac. Retirez les viandes et baissez le feu. Dans la même poêle, versez le vin blanc et grattez le fond de la poêle avec une spatule pour décoller les sucs de cuisson. Laissez réduire à feu doux puis rajoutez le fond (ici de veau) et laissez réduire à nouveau. Ajoutez le crème, mélangez et laissez réduire pour que la sauce s’épaississe.
3. Pour savoir si votre sauce a la bonne texture, plongez-y le dos d’une cuillère. Si la sauce le nappe bien et reste en place dessus, c’est parfait ! Sinon, laissez réduire encore un peu. Faites réchauffer la viande quelques instants dans la sauce avant de la dresser dans l’assiette. Coupez le feu et ajoutez un tout petit peu de beurre dans la sauce (pour la texture) avant de la verser sur la viande.

 
 

 
 Personnellement, j’ai accompagné cela d’un écrasé de pommes de terre et c’était délicieux ! Vous savez maintenant faire une sauce au poivre parfaite pour les viandes ou même du tofu ou du seitan pour les végétariens (à faire avec du fond de légumes du coup !)
