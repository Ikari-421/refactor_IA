---
schema: recette-web-jigme/v2
equipment:
- ref: siphon
- ref: fouet
slug: langoustines-a-la-mer
title: Langoustines à la mer
lang: fr
description: "Langoustines à la mer : recette française avec langoustine fraîche, celeri boule et lait, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- langoustine
- fruits de mer
- plat
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/langoustines-a-la-mer.jpg
  alt: Langoustines à la mer
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/langoustines-a-la-mer.md
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
    - from: farine (crumble de Nori)
      to: mix farine sans gluten + psyllium
      note:
    - from: panko
      to: chapelure sans gluten
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
    - from: beurre (crumble de Nori)
      to: beurre sans lactose ou clarifié
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
    - from: blancs d'œufs
      to: aquafaba (30 ml par blanc)
      note: Pour le gâteau éponge.
    note: Blancs d’œufs du gâteau éponge → aquafaba.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - celeri
    swaps:
    - from: céleri
      to: fenouil ou carotte
      note: Allergie céleri.
    - from: celeri boule
      to: panais
      note:
    note: Omettre le céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - mollusques
    swaps: []
    note: 'Contient mollusques (encre de seiche) : pas d’adaptation fiable.'
  sans_crustaces:
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - crustaces
    swaps: []
    note: → version végétarienne.
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; œuf de lin (1 c.à.s. lin + 3 c.à.s.
      eau / œuf) ou tofu soyeux → pois chiches rôtis.'
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
histoire: 'Langoustine : Nephrops norvegicus, petit homard de l’Atlantique nord-est et d’une partie de
  la Méditerranée. « À la mer » désigne ici une cuisson simple, iodée, pas une recette historique nommée.

  '
fun_facts:
- text: 'En anglais on dit aussi Norway lobster ou Dublin Bay prawn ; en cuisine, scampi désigne souvent
    la queue.

    '
  source_name: Grokipedia, Scampi
  source_url: https://grokipedia.com/page/Scampi
- text: 'La chair est dans la queue : trop cuite, elle se file et sèche.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Langoustines à la mer ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Langoustine
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Luneau-Papin
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé — la langoustine, sans un chardonnay gras.
- name: Picpoul de Pinet
  producer: Domaine Félines Jourdan
  origin: Pinet, Languedoc
  grapes: piquepoul
  award:
  why: Citron, sel — le crustacé, acidité nette.
- name: Entre-deux-Mers
  producer: Château Bonnet
  origin: Entre-deux-Mers, Bordeaux
  grapes: sauvignon, sémillon
  award:
  why: Blanc vif, pamplemousse — le beurre de cuisson s’il y en a.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - celeri
    - crustaces
    - poisson
    - oeuf
    - fruits_a_coque
    - mollusques
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 30
      rest_min: 150
      total_min: 210
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - mixeur
    - couteau
    - siphon
    substitutions: []
    scale_note:
    ingredients:
    - qty: 20
      unit: piece
      item: langoustine fraîche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: celeri boule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: beurre (purée)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: encre de seiche
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
    - qty: 40
      unit: g
      item: farine (gâteau éponge)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: thé matcha
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: blancs d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pamplemousse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine (crumble de Nori)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: panko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre (crumble de Nori)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: badiane
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: clou de girofle
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
    steps:
    - Préparation. Commençons par la purée de céleris. Épluchez et coupez grossièrement le céleris. Placez
      les morceaux obtenus dans une grande casserole et ajoutez le lait. Laissez cuire votre
      préparation jusqu’à ce que le céleris soit tendre. Vous pouvez vérifier l’avancée de
      la cuisson en plantant la pointe d’un couteau dans un morceau de céleris.
    - Mixage. À l’aide d’un écumoire, transvasez le cèleris cuit dans un blender. Ajoutez le beurre
      puis mixez.
    - Mélange. Versez la purée ainsi obtenue dans un récipient puis ajoutez l’encre de sèche. Mélangez
      à l’aide d’un fouet jusqu’à ce que la couleur de votre préparation soit homogène.
    - Cuisson. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et le la poudre
      de thé marcha. Mixez le tout.
    - Mixage. Séparez le blanc du jaune de vos oeufs et versez les blancs dans la cuve du robot. Mixez
      de nouveau.
    - Mélange. Transvasez le mélange ainsi obtenu dans un siphon. Chargez le siphon avec deux cartouches
      de gaz.
    - Cuisson. Passons maintenant au crumble de Nori. Déposez une feuille de Nori face à vous, à plat
      sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis renouvelez
      l’opération deux fois. À l’aide d’un couteau bien aiguisé, hachez finement le long tube
      de Nori obtenu. N’hésitez pas à vous référer à la vidéo ci-dessous pour mieux comprendre
      chaque étape de la recette.
    - Cuisson. Dans un cul de poule, versez votre feuille de Nori hachée, la farine, le panko (chapelure
      typique japonaise) et le beurre. Mélangez le tout avec vos mains jusqu’à obtenir une
      pâte granuleuse.
    - Cuisson. Déposez la pâte dans un plat allant au four, puis enfournez à 180°C degrés pendant 20
      minutes.
    - Cuisson. Continuons avec le bouillon de langoustines. Dans une grande casserole remplie d’eau,
      ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Complétez
      avec un pamplemousse épluché et coupé grossièrement, puis portez à ébullition.
    - Dressage. Pendant que votre bouillon chauffe, décortiquez vos langoustines. Ne conservez que la
      queue. Chartez ensuite les langoustines (retirez le boyau noire au milieu), puis mettez-les
      sur un pique à brochette en bois. Salez et poivrez selon vos goûts.
    - Cuisson. Placez un emporte pièce dans la casserole contenant votre bouillon de matcha et de pamplemousse.
      Celui-ci doit dépasser du bouillon. Déposez vos brochettes de langoustines par dessus
      et laissez-les cuire à la vapeur pendant environ 45 secondes. Réservez.
    - Cuisson. Prélevez quelques suprêmes d’un pamplemousse (regardez les gestes dans la vidéo). Pressez
      le reste du fruit dans un récipient pour réaliser la vinaigrette. Complétez cette vinaigrette
      avec du sel, du poivre et un filet d’huile d’olive. Mélangez bien.
    - Finition. Munissez vous d’un verre en plastique et faites-y deux entailles à l’aide de la pointe
      d’un couteau. Versez ensuite dans ce verre le mélange de votre siphon (jusqu’à la moitié
      du verre environ). Placez-le au micro-onde pendant 30 secondes à la puissance maximale.
      Tous vos ingrédients sont prêts, il ne vous reste plus qu’à dresser votre assiette !
      Inspirez vous du dressage très original de la vidéo ci-dessous. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez le céleris et coupez-le grossièrement. Placez les morceaux dans une grande casserole, ajoutez le lait et laissez cuire jusqu’à ce que le céleris soit tendre. Vérifiez en plantant la pointe d’un couteau dans un morceau."
      - "Mixage. Avec une écumoire, transvasez le cèleris cuit dans un blender. Ajoutez le beurre, puis mixez."
      - "Mélange. Versez la purée dans un récipient, ajoutez l’encre de sèche et mélangez au fouet jusqu’à ce que la couleur soit homogène."
      - "Cuisson. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et la poudre de thé matcha. Mixez le tout."
      - "Mixage. Séparez le blanc du jaune de vos œufs et versez les blancs dans la cuve du robot. Mixez de nouveau."
      - "Mélange. Transvasez le mélange dans un siphon. Chargez le siphon avec deux cartouches de gaz."
      - "Cuisson. Posez une feuille de Nori à plat sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis recommencez deux fois. Avec un couteau bien aiguisé, hachez finement le long tube de Nori obtenu."
      - "Cuisson. Dans un cul de poule, versez le Nori haché, la farine, le panko (chapelure japonaise) et le beurre. Mélangez à la main jusqu’à obtenir une pâte granuleuse."
      - "Cuisson. Déposez la pâte dans un plat allant au four. Enfournez à 180°C pendant 20 minutes."
      - "Cuisson. Dans une grande casserole d’eau, ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Ajoutez un pamplemousse épluché et coupé grossièrement, puis portez à ébullition."
      - "Dressage. Pendant que le bouillon chauffe, décortiquez les langoustines : ne gardez que la queue. Chartez (retirez le boyau noir au milieu), puis enfilez-les sur un pique à brochette en bois. Salez et poivrez selon vos goûts."
      - "Cuisson. Placez un emporte-pièce dans la casserole de bouillon de matcha et de pamplemousse : il doit dépasser du bouillon. Posez les brochettes de langoustines par-dessus et laissez-les cuire à la vapeur environ 45 secondes. Réservez."
      - "Cuisson. Prélevez quelques suprêmes de pamplemousse. Pressez le reste du fruit dans un récipient pour la vinaigrette. Ajoutez du sel, du poivre et un filet d’huile d’olive. Mélangez."
      - "Finition. Prenez un verre en plastique et faites-y deux entailles avec la pointe d’un couteau. Versez le mélange du siphon jusqu’à la moitié du verre environ. Passez-le au micro-onde 30 secondes à puissance maximale. Dressez l’assiette."
      pro:
      - "Éplucher et couper grossièrement le céleris. Grande casserole, lait. Cuire jusqu’à tendre. Vérifier à la pointe du couteau."
      - "Écumoire : transvaser le cèleris cuit dans un blender. Ajouter le beurre. Mixer."
      - "Verser la purée dans un récipient. Ajouter l’encre de sèche. Fouetter jusqu’à couleur homogène."
      - "Cuve du robot : poudre d’amande, farine, sucre, poudre de thé matcha. Mixer."
      - "Séparer blancs et jaunes. Verser les blancs dans la cuve du robot. Mixer de nouveau."
      - "Transvaser dans un siphon. Charger deux cartouches de gaz."
      - "Feuille de Nori à plat. Pliage en deux dans le sens de la longueur, deux fois. Hacher finement le tube au couteau aiguisé."
      - "Cul de poule : Nori haché, farine, panko, beurre. Mélanger à la main jusqu’à pâte granuleuse."
      - "Pâte dans un plat. Four 180°C, 20 minutes."
      - "Grande casserole d’eau : clous de girofle, anis étoilée, thé matcha en poudre. Pamplemousse épluché, coupé grossièrement. Porter à ébullition."
      - "Décortiquer les langoustines, ne garder que la queue. Charter (retirer le boyau noir). Enfiler sur pique à brochette en bois. Saler, poivrer."
      - "Emporte-pièce dans la casserole de bouillon matcha-pamplemousse, dépassant du bouillon. Brochettes de langoustines par-dessus. Vapeur environ 45 secondes. Réserver."
      - "Prélever des suprêmes de pamplemousse. Presser le reste du fruit. Vinaigrette : sel, poivre, filet d’huile d’olive. Mélanger."
      - "Verre plastique : deux entailles à la pointe du couteau. Verser le siphon jusqu’à mi-verre. Micro-onde 30 secondes, puissance maximale. Dresser."
      cavernes:
      - "Préparation. Céleris, éplucher, couper gros. Morceaux, casserole grande, lait, ajouter. Cuire jusqu’à tendre. Pointe couteau, morceau céleris, vérifier."
      - "Mixage. Écumoire, cèleris cuit, blender, transvaser. Beurre, ajouter, mixer."
      - "Mélange. Purée, récipient, verser. Encre sèche, ajouter. Fouet, mélanger jusqu’à couleur homogène."
      - "Cuisson. Robot, cuve : poudre amande, farine, sucre, poudre thé matcha. Mixer."
      - "Mixage. Œufs, blanc jaune, séparer. Blancs, cuve robot, verser. Mixer encore."
      - "Mélange. Mélange, siphon, transvaser. Deux cartouches gaz, charger."
      - "Cuisson. Feuille Nori, plat, plan travail. Pliage deux, sens longueur, deux fois. Couteau aiguisé, tube Nori, hacher fin."
      - "Cuisson. Cul de poule : Nori haché, farine, panko, beurre. Mains, mélanger jusqu’à pâte granuleuse."
      - "Cuisson. Pâte, plat four. Four 180°C, 20 minutes."
      - "Cuisson. Casserole grande, eau. Clous girofle, anis étoilée, thé matcha poudre. Pamplemousse épluché, coupé gros. Ébullition."
      - "Dressage. Bouillon chauffe. Langoustines, décortiquer, queue seulement. Boyau noir milieu, retirer. Pique brochette bois. Sel, poivre."
      - "Cuisson. Emporte-pièce, casserole bouillon matcha pamplemousse. Doit dépasser bouillon. Brochettes langoustines dessus. Vapeur, environ 45 secondes. Réserver."
      - "Cuisson. Suprêmes pamplemousse, prélever. Reste fruit, presser, vinaigrette. Sel, poivre, filet huile olive. Mélanger."
      - "Finition. Verre plastique, pointe couteau, deux entailles. Mélange siphon, verser, jusqu’à moitié verre. Micro-onde, 30 secondes, puissance maximale. Assiette, dresser."
    kcal_per_serving: 477
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
    - gluten
    - lactose
    - produits_laitiers
    - celeri
    - crustaces
    - poisson
    - oeuf
    - fruits_a_coque
    - mollusques
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: celeri boule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: beurre (purée)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: spiruline
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
    - qty: 40
      unit: g
      item: farine (gâteau éponge)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: thé matcha
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: blancs d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pamplemousse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine (crumble de Nori)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: panko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre (crumble de Nori)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: badiane
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: clou de girofle
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
    steps:
    - Préparation. Commençons par la purée de céleris. Épluchez et coupez grossièrement le céleris. Placez
      les morceaux obtenus dans une grande casserole et ajoutez le lait. Laissez cuire votre
      préparation jusqu’à ce que le céleris soit tendre. Vous pouvez vérifier l’avancée de
      la cuisson en plantant la pointe d’un couteau dans un morceau de céleris.
    - Mixage. À l’aide d’un écumoire, transvasez le cèleris cuit dans un blender. Ajoutez le beurre
      puis mixez.
    - Mélange. Versez la purée ainsi obtenue dans un récipient puis ajoutez l’encre de sèche. Mélangez
      à l’aide d’un fouet jusqu’à ce que la couleur de votre préparation soit homogène.
    - Cuisson. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et le la poudre
      de thé marcha. Mixez le tout.
    - Mixage. Séparez le blanc du jaune de vos oeufs et versez les blancs dans la cuve du robot. Mixez
      de nouveau.
    - Mélange. Transvasez le mélange ainsi obtenu dans un siphon. Chargez le siphon avec deux cartouches
      de gaz.
    - Cuisson. Passons maintenant au crumble de Nori. Déposez une feuille de Nori face à vous, à plat
      sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis renouvelez
      l’opération deux fois. À l’aide d’un couteau bien aiguisé, hachez finement le long tube
      de Nori obtenu. N’hésitez pas à vous référer à la vidéo ci-dessous pour mieux comprendre
      chaque étape de la recette.
    - Cuisson. Dans un cul de poule, versez votre feuille de Nori hachée, la farine, le panko (chapelure
      typique japonaise) et le beurre. Mélangez le tout avec vos mains jusqu’à obtenir une
      pâte granuleuse.
    - Cuisson. Déposez la pâte dans un plat allant au four, puis enfournez à 180°C degrés pendant 20
      minutes.
    - Cuisson. Continuons avec le bouillon de langoustines. Dans une grande casserole remplie d’eau,
      ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Complétez
      avec un pamplemousse épluché et coupé grossièrement, puis portez à ébullition.
    - Dressage. Pendant que votre bouillon chauffe, décortiquez vos langoustines. Ne conservez que la
      queue. Chartez ensuite les langoustines (retirez le boyau noire au milieu), puis mettez-les
      sur un pique à brochette en bois. Salez et poivrez selon vos goûts.
    - Cuisson. Placez un emporte pièce dans la casserole contenant votre bouillon de matcha et de pamplemousse.
      Celui-ci doit dépasser du bouillon. Déposez vos brochettes de langoustines par dessus
      et laissez-les cuire à la vapeur pendant environ 45 secondes. Réservez.
    - Cuisson. Prélevez quelques suprêmes d’un pamplemousse (regardez les gestes dans la vidéo). Pressez
      le reste du fruit dans un récipient pour réaliser la vinaigrette. Complétez cette vinaigrette
      avec du sel, du poivre et un filet d’huile d’olive. Mélangez bien.
    - Finition. Munissez vous d’un verre en plastique et faites-y deux entailles à l’aide de la pointe
      d’un couteau. Versez ensuite dans ce verre le mélange de votre siphon (jusqu’à la moitié
      du verre environ). Placez-le au micro-onde pendant 30 secondes à la puissance maximale.
      Tous vos ingrédients sont prêts, il ne vous reste plus qu’à dresser votre assiette !
      Inspirez vous du dressage très original de la vidéo ci-dessous. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez le céleris et coupez-le grossièrement. Placez les morceaux dans une grande casserole, ajoutez le lait et laissez cuire jusqu’à ce que le céleris soit tendre. Vérifiez en plantant la pointe d’un couteau dans un morceau."
      - "Mixage. Avec une écumoire, transvasez le cèleris cuit dans un blender. Ajoutez le beurre, puis mixez."
      - "Mélange. Versez la purée dans un récipient, ajoutez l’encre de sèche et mélangez au fouet jusqu’à ce que la couleur soit homogène."
      - "Cuisson. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et la poudre de thé matcha. Mixez le tout."
      - "Mixage. Séparez le blanc du jaune de vos œufs et versez les blancs dans la cuve du robot. Mixez de nouveau."
      - "Mélange. Transvasez le mélange dans un siphon. Chargez le siphon avec deux cartouches de gaz."
      - "Cuisson. Posez une feuille de Nori à plat sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis recommencez deux fois. Avec un couteau bien aiguisé, hachez finement le long tube de Nori obtenu."
      - "Cuisson. Dans un cul de poule, versez le Nori haché, la farine, le panko (chapelure japonaise) et le beurre. Mélangez à la main jusqu’à obtenir une pâte granuleuse."
      - "Cuisson. Déposez la pâte dans un plat allant au four. Enfournez à 180°C pendant 20 minutes."
      - "Cuisson. Dans une grande casserole d’eau, ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Ajoutez un pamplemousse épluché et coupé grossièrement, puis portez à ébullition."
      - "Dressage. Pendant que le bouillon chauffe, décortiquez les langoustines : ne gardez que la queue. Chartez (retirez le boyau noir au milieu), puis enfilez-les sur un pique à brochette en bois. Salez et poivrez selon vos goûts."
      - "Cuisson. Placez un emporte-pièce dans la casserole de bouillon de matcha et de pamplemousse : il doit dépasser du bouillon. Posez les brochettes de langoustines par-dessus et laissez-les cuire à la vapeur environ 45 secondes. Réservez."
      - "Cuisson. Prélevez quelques suprêmes de pamplemousse. Pressez le reste du fruit dans un récipient pour la vinaigrette. Ajoutez du sel, du poivre et un filet d’huile d’olive. Mélangez."
      - "Finition. Prenez un verre en plastique et faites-y deux entailles avec la pointe d’un couteau. Versez le mélange du siphon jusqu’à la moitié du verre environ. Passez-le au micro-onde 30 secondes à puissance maximale. Dressez l’assiette."
      pro:
      - "Éplucher et couper grossièrement le céleris. Grande casserole, lait. Cuire jusqu’à tendre. Vérifier à la pointe du couteau."
      - "Écumoire : transvaser le cèleris cuit dans un blender. Ajouter le beurre. Mixer."
      - "Verser la purée dans un récipient. Ajouter l’encre de sèche. Fouetter jusqu’à couleur homogène."
      - "Cuve du robot : poudre d’amande, farine, sucre, poudre de thé matcha. Mixer."
      - "Séparer blancs et jaunes. Verser les blancs dans la cuve du robot. Mixer de nouveau."
      - "Transvaser dans un siphon. Charger deux cartouches de gaz."
      - "Feuille de Nori à plat. Pliage en deux dans le sens de la longueur, deux fois. Hacher finement le tube au couteau aiguisé."
      - "Cul de poule : Nori haché, farine, panko, beurre. Mélanger à la main jusqu’à pâte granuleuse."
      - "Pâte dans un plat. Four 180°C, 20 minutes."
      - "Grande casserole d’eau : clous de girofle, anis étoilée, thé matcha en poudre. Pamplemousse épluché, coupé grossièrement. Porter à ébullition."
      - "Décortiquer les langoustines, ne garder que la queue. Charter (retirer le boyau noir). Enfiler sur pique à brochette en bois. Saler, poivrer."
      - "Emporte-pièce dans la casserole de bouillon matcha-pamplemousse, dépassant du bouillon. Brochettes de langoustines par-dessus. Vapeur environ 45 secondes. Réserver."
      - "Prélever des suprêmes de pamplemousse. Presser le reste du fruit. Vinaigrette : sel, poivre, filet d’huile d’olive. Mélanger."
      - "Verre plastique : deux entailles à la pointe du couteau. Verser le siphon jusqu’à mi-verre. Micro-onde 30 secondes, puissance maximale. Dresser."
      cavernes:
      - "Préparation. Céleris, éplucher, couper gros. Morceaux, casserole grande, lait, ajouter. Cuire jusqu’à tendre. Pointe couteau, morceau céleris, vérifier."
      - "Mixage. Écumoire, cèleris cuit, blender, transvaser. Beurre, ajouter, mixer."
      - "Mélange. Purée, récipient, verser. Encre sèche, ajouter. Fouet, mélanger jusqu’à couleur homogène."
      - "Cuisson. Robot, cuve : poudre amande, farine, sucre, poudre thé matcha. Mixer."
      - "Mixage. Œufs, blanc jaune, séparer. Blancs, cuve robot, verser. Mixer encore."
      - "Mélange. Mélange, siphon, transvaser. Deux cartouches gaz, charger."
      - "Cuisson. Feuille Nori, plat, plan travail. Pliage deux, sens longueur, deux fois. Couteau aiguisé, tube Nori, hacher fin."
      - "Cuisson. Cul de poule : Nori haché, farine, panko, beurre. Mains, mélanger jusqu’à pâte granuleuse."
      - "Cuisson. Pâte, plat four. Four 180°C, 20 minutes."
      - "Cuisson. Casserole grande, eau. Clous girofle, anis étoilée, thé matcha poudre. Pamplemousse épluché, coupé gros. Ébullition."
      - "Dressage. Bouillon chauffe. Langoustines, décortiquer, queue seulement. Boyau noir milieu, retirer. Pique brochette bois. Sel, poivre."
      - "Cuisson. Emporte-pièce, casserole bouillon matcha pamplemousse. Doit dépasser bouillon. Brochettes langoustines dessus. Vapeur, environ 45 secondes. Réserver."
      - "Cuisson. Suprêmes pamplemousse, prélever. Reste fruit, presser, vinaigrette. Sel, poivre, filet huile olive. Mélanger."
      - "Finition. Verre plastique, pointe couteau, deux entailles. Mélange siphon, verser, jusqu’à moitié verre. Micro-onde, 30 secondes, puissance maximale. Assiette, dresser."
    kcal_per_serving: 477
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegan
    - pesco
    allergens:
    - gluten
    - celeri
    - soja
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: pleurotes (brochettes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: celeri boule
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: spiruline (couleur)
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
    - qty: 40
      unit: g
      item: farine (gâteau éponge)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: thé matcha
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pamplemousse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: feuille de nori
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine (crumble de Nori)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: panko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: badiane
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: clou de girofle
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
    steps:
    - Préparation. Commençons par la purée de céleris. Épluchez et coupez grossièrement le céleris. Placez
      les morceaux obtenus dans une grande casserole et ajoutez le lait d'avoine ou soja.
      Laissez cuire votre préparation jusqu’à ce que le céleris soit tendre. Vous pouvez vérifier
      l’avancée de la cuisson en plantant la pointe d’un couteau dans un morceau de céleris.
    - Mixage. À l’aide d’un écumoire, transvasez le cèleris cuit dans un blender. Ajoutez la margarine végétale puis mixez.
    - Mélange. Versez la purée ainsi obtenue dans un récipient puis ajoutez la spiruline. Mélangez
      à l’aide d’un fouet jusqu’à ce que la couleur de votre préparation soit homogène.
    - Cuisson. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et le la poudre
      de thé marcha. Mixez le tout.
    - Mixage. Ajoutez l’œuf de lin (ou le tofu soyeux) dans la cuve du robot. Mixez de nouveau.
    - Mélange. Transvasez le mélange ainsi obtenu dans un siphon. Chargez le siphon avec deux cartouches
      de gaz.
    - Cuisson. Passons maintenant au crumble de Nori. Déposez une feuille de Nori face à vous, à plat
      sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis renouvelez
      l’opération deux fois. À l’aide d’un couteau bien aiguisé, hachez finement le long tube
      de Nori obtenu. N’hésitez pas à vous référer à la vidéo ci-dessous pour mieux comprendre
      chaque étape de la recette.
    - Cuisson. Dans un cul de poule, versez votre feuille de Nori hachée, la farine, le panko (chapelure
      typique japonaise) et la margarine végétale. Mélangez le tout avec vos mains jusqu’à obtenir une
      pâte granuleuse.
    - Cuisson. Déposez la pâte dans un plat allant au four, puis enfournez à 180°C degrés pendant 20
      minutes.
    - Cuisson. Continuons avec le bouillon parfumé. Dans une grande casserole remplie d’eau,
      ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Complétez
      avec un pamplemousse épluché et coupé grossièrement, puis portez à ébullition.
    - Cuisson. Pendant que votre bouillon chauffe, nettoyez les pleurotes et enfilez-les sur un pique à brochette en bois. Salez et poivrez selon vos goûts.
    - Cuisson. Placez un emporte pièce dans la casserole contenant votre bouillon de matcha et de pamplemousse.
      Celui-ci doit dépasser du bouillon. Déposez vos brochettes de pleurotes par-dessus
      et laissez-les cuire à la vapeur pendant environ 45 secondes. Réservez.
    - Cuisson. Prélevez quelques suprêmes d’un pamplemousse (regardez les gestes dans la vidéo). Pressez
      le reste du fruit dans un récipient pour réaliser la vinaigrette. Complétez cette vinaigrette
      avec du sel, du poivre et un filet d’huile d’olive. Mélangez bien.
    - Finition. Munissez vous d’un verre en plastique et faites-y deux entailles à l’aide de la pointe
      d’un couteau. Versez ensuite dans ce verre le mélange de votre siphon (jusqu’à la moitié
      du verre environ). Placez-le au micro-onde pendant 30 secondes à la puissance maximale.
      Tous vos ingrédients sont prêts, il ne vous reste plus qu’à dresser votre assiette !
      Inspirez vous du dressage très original de la vidéo ci-dessous. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez le céleris et coupez-le grossièrement. Placez les morceaux dans une grande casserole, ajoutez le lait d’avoine ou soja et laissez cuire jusqu’à ce que le céleris soit tendre. Vérifiez en plantant la pointe d’un couteau dans un morceau."
      - "Mixage. Avec une écumoire, transvasez le cèleris cuit dans un blender. Ajoutez la margarine végétale, puis mixez."
      - "Mélange. Versez la purée dans un récipient, ajoutez la spiruline et mélangez au fouet jusqu’à ce que la couleur soit homogène."
      - "Cuisson. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et la poudre de thé matcha. Mixez le tout."
      - "Mixage. Ajoutez l’œuf de lin (ou le tofu soyeux) dans la cuve du robot. Mixez de nouveau."
      - "Mélange. Transvasez le mélange dans un siphon. Chargez le siphon avec deux cartouches de gaz."
      - "Cuisson. Posez une feuille de Nori à plat sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis recommencez deux fois. Avec un couteau bien aiguisé, hachez finement le long tube de Nori obtenu."
      - "Cuisson. Dans un cul de poule, versez le Nori haché, la farine, le panko (chapelure japonaise) et la margarine végétale. Mélangez à la main jusqu’à obtenir une pâte granuleuse."
      - "Cuisson. Déposez la pâte dans un plat allant au four. Enfournez à 180°C pendant 20 minutes."
      - "Cuisson. Dans une grande casserole d’eau, ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Ajoutez un pamplemousse épluché et coupé grossièrement, puis portez à ébullition."
      - "Cuisson. Pendant que le bouillon chauffe, nettoyez les pleurotes et enfilez-les sur un pique à brochette en bois. Salez et poivrez selon vos goûts."
      - "Cuisson. Placez un emporte-pièce dans la casserole de bouillon de matcha et de pamplemousse : il doit dépasser du bouillon. Posez les brochettes de pleurotes par-dessus et laissez-les cuire à la vapeur environ 45 secondes. Réservez."
      - "Cuisson. Prélevez quelques suprêmes de pamplemousse. Pressez le reste du fruit dans un récipient pour la vinaigrette. Ajoutez du sel, du poivre et un filet d’huile d’olive. Mélangez."
      - "Finition. Prenez un verre en plastique et faites-y deux entailles avec la pointe d’un couteau. Versez le mélange du siphon jusqu’à la moitié du verre environ. Passez-le au micro-onde 30 secondes à puissance maximale. Dressez l’assiette."
      pro:
      - "Éplucher et couper grossièrement le céleris. Grande casserole, lait d’avoine ou soja. Cuire jusqu’à tendre. Vérifier à la pointe du couteau."
      - "Écumoire : transvaser le cèleris cuit dans un blender. Ajouter la margarine végétale. Mixer."
      - "Verser la purée dans un récipient. Ajouter la spiruline. Fouetter jusqu’à couleur homogène."
      - "Cuve du robot : poudre d’amande, farine, sucre, poudre de thé matcha. Mixer."
      - "Ajouter l’œuf de lin (ou le tofu soyeux) dans la cuve du robot. Mixer de nouveau."
      - "Transvaser dans un siphon. Charger deux cartouches de gaz."
      - "Feuille de Nori à plat. Pliage en deux dans le sens de la longueur, deux fois. Hacher finement le tube au couteau aiguisé."
      - "Cul de poule : Nori haché, farine, panko, margarine végétale. Mélanger à la main jusqu’à pâte granuleuse."
      - "Pâte dans un plat. Four 180°C, 20 minutes."
      - "Grande casserole d’eau : clous de girofle, anis étoilée, thé matcha en poudre. Pamplemousse épluché, coupé grossièrement. Porter à ébullition."
      - "Nettoyer les pleurotes. Enfiler sur pique à brochette en bois. Saler, poivrer."
      - "Emporte-pièce dans la casserole de bouillon matcha-pamplemousse, dépassant du bouillon. Brochettes de pleurotes par-dessus. Vapeur environ 45 secondes. Réserver."
      - "Prélever des suprêmes de pamplemousse. Presser le reste du fruit. Vinaigrette : sel, poivre, filet d’huile d’olive. Mélanger."
      - "Verre plastique : deux entailles à la pointe du couteau. Verser le siphon jusqu’à mi-verre. Micro-onde 30 secondes, puissance maximale. Dresser."
      cavernes:
      - "Préparation. Céleris, éplucher, couper gros. Morceaux, casserole grande, lait avoine ou soja, ajouter. Cuire jusqu’à tendre. Pointe couteau, morceau céleris, vérifier."
      - "Mixage. Écumoire, cèleris cuit, blender, transvaser. Margarine végétale, ajouter, mixer."
      - "Mélange. Purée, récipient, verser. Spiruline, ajouter. Fouet, mélanger jusqu’à couleur homogène."
      - "Cuisson. Robot, cuve : poudre amande, farine, sucre, poudre thé matcha. Mixer."
      - "Mixage. Œuf de lin ou tofu soyeux, cuve robot, ajouter. Mixer encore."
      - "Mélange. Mélange, siphon, transvaser. Deux cartouches gaz, charger."
      - "Cuisson. Feuille Nori, plat, plan travail. Pliage deux, sens longueur, deux fois. Couteau aiguisé, tube Nori, hacher fin."
      - "Cuisson. Cul de poule : Nori haché, farine, panko, margarine végétale. Mains, mélanger jusqu’à pâte granuleuse."
      - "Cuisson. Pâte, plat four. Four 180°C, 20 minutes."
      - "Cuisson. Casserole grande, eau. Clous girofle, anis étoilée, thé matcha poudre. Pamplemousse épluché, coupé gros. Ébullition."
      - "Cuisson. Bouillon chauffe. Pleurotes, nettoyer. Pique brochette bois, enfiler. Sel, poivre."
      - "Cuisson. Emporte-pièce, casserole bouillon matcha pamplemousse. Doit dépasser bouillon. Brochettes pleurotes dessus. Vapeur, environ 45 secondes. Réserver."
      - "Cuisson. Suprêmes pamplemousse, prélever. Reste fruit, presser, vinaigrette. Sel, poivre, filet huile olive. Mélanger."
      - "Finition. Verre plastique, pointe couteau, deux entailles. Mélange siphon, verser, jusqu’à moitié verre. Micro-onde, 30 secondes, puissance maximale. Assiette, dresser."
    kcal_per_serving: 381
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - celeri
    - crustaces
    - poisson
    - oeuf
    - fruits_a_coque
    - mollusques
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 477
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Langoustines à la mer
**Équipement :** [[fouet]] · [[siphon]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/langoustines-a-la-mer]]

## Ingrédients (6 personnes)

- 20 langoustine fraîche
- 1 celeri boule
- 1 L de lait
- 70 g de beurre (purée)
- 1 sachet d'encre de seiche
- 150 g de poudre d'amandes
- 40 g de farine (gâteau éponge)
- 150 g de sucre
- 20 g de thé matcha
- 300 g de blancs d'œufs
- 1 pamplemousse
- 1 feuille de nori
- 50 g de farine (crumble de Nori)
- 50 g de panko
- 50 g de beurre (crumble de Nori)
-  badiane
-  clou de girofle
-  huile d'olive

## Préparation

1. Commençons par la purée de céleris. Épluchez et coupez grossièrement le céleris. Placez les morceaux obtenus dans une grande casserole et ajoutez le lait. Laissez cuire votre préparation jusqu’à ce que le céleris soit tendre. Vous pouvez vérifier l’avancée de la cuisson en plantant la pointe d’un couteau dans un morceau de céleris.
2. À l’aide d’un écumoire, transvasez le cèleris cuit dans un blender. Ajoutez le beurre puis mixez.
3. Versez la purée ainsi obtenue dans un récipient puis ajoutez l’encre de sèche. Mélangez à l’aide d’un fouet jusqu’à ce que la couleur de votre préparation soit homogène.
4. Dans la cuve d’un robot, déposez la poudre d’amande, la farine, le sucre et le la poudre de thé marcha. Mixez le tout.
5. Séparez le blanc du jaune de vos oeufs et versez les blancs dans la cuve du robot. Mixez de nouveau.
6. Transvasez le mélange ainsi obtenu dans un siphon. Chargez le siphon avec deux cartouches de gaz.
7. Passons maintenant au crumble de Nori. Déposez une feuille de Nori face à vous, à plat sur le plan de travail. Pliez-la en deux dans le sens de la longueur, puis renouvelez l’opération deux fois. À l’aide d’un couteau bien aiguisé, hachez finement le long tube de Nori obtenu. N’hésitez pas à vous référer à la vidéo ci-dessous pour mieux comprendre chaque étape de la recette.
8. Dans un cul de poule, versez votre feuille de Nori hachée, la farine, le panko (chapelure typique japonaise) et le beurre. Mélangez le tout avec vos mains jusqu’à obtenir une pâte granuleuse.
9. Déposez la pâte dans un plat allant au four, puis enfournez à 180°C degrés pendant 20 minutes.
10. Continuons avec le bouillon de langoustines. Dans une grande casserole remplie d’eau, ajoutez des clous de girofle, de l’anis étoilée et du thé matcha en poudre. Complétez avec un pamplemousse épluché et coupé grossièrement, puis portez à ébullition.
11. Pendant que votre bouillon chauffe, décortiquez vos langoustines. Ne conservez que la queue. Chartez ensuite les langoustines (retirez le boyau noire au milieu), puis mettez-les sur un pique à brochette en bois. Salez et poivrez selon vos goûts.
12. Placez un emporte pièce dans la casserole contenant votre bouillon de matcha et de pamplemousse. Celui-ci doit dépasser du bouillon. Déposez vos brochettes de langoustines par dessus et laissez-les cuire à la vapeur pendant environ 45 secondes. Réservez.
13. Prélevez quelques suprêmes d’un pamplemousse (regardez les gestes dans la vidéo). Pressez le reste du fruit dans un récipient pour réaliser la vinaigrette. Complétez cette vinaigrette avec du sel, du poivre et un filet d’huile d’olive. Mélangez bien.
14. Munissez vous d’un verre en plastique et faites-y deux entailles à l’aide de la pointe d’un couteau. Versez ensuite dans ce verre le mélange de votre siphon (jusqu’à la moitié du verre environ). Placez-le au micro-onde pendant 30 secondes à la puissance maximale.

 
 

 
 Tous vos ingrédients sont prêts, il ne vous reste plus qu’à dresser votre assiette ! Inspirez vous du dressage très original de la vidéo ci-dessous. Bon appétit !
