---
schema: recette-web-jigme/v2
slug: poulet-popcorn
title: Poulet popcorn
lang: fr
description: "Poulet popcorn : recette américaine avec blanc de poulet, sucre et sauce soja, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: salé
tags:
- salé
- accompagnement
- poulet
- blanc de poulet
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/poulet-popcorn.jpg
  alt: Poulet popcorn
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/poulet-popcorn.md
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
    - from: sauce soja
      to: tamari sans gluten
      note:
    - from: vin jaune chinois
      to: xérès sec
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: paneer (cubes)
      to: tofu ferme
      note:
    note: 'Lactose : paneer (cubes) → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: paneer (cubes)
      to: tofu ferme
      note:
    note: 'Produits laitiers : paneer (cubes) → tofu ferme.'
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
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sesame
    swaps:
    - from: sésame
      to: graines de courge
      note:
    - from: tahini
      to: purée de tournesol
      note:
    note: Remplacer sésame.
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
    - from: vin jaune chinois
      to: bouillon de légumes
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: 'Poulet popcorn taïwanais : yán sū jī, morceaux de cuisse marinés, amidon (souvent de patate
  douce), frits, cuisine de rue. Ce n’est pas le pop-corn de maïs : le mot décrit la taille des bouchées.

  '
fun_facts:
- text: >
    Cinq-épices et basilic thaï (ou taïwanais) se jettent souvent hors de friture,
    pour ne pas brûler.
  source_name: Grokipedia, Taiwanese fried chicken
  source_url: https://grokipedia.com/page/Taiwanese_fried_chicken
- text: >
    L’amidon de patate douce cloisonne mieux que la farine : la croûte reste sèche.
  source_name: Grokipedia, Popcorn chicken
  source_url: https://grokipedia.com/page/Popcorn_chicken
wines:
- name: Alsace Riesling
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — la friture et le cinq-épices.
- name: Crémant d'Alsace
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot blanc
  award:
  why: Bulles, pomme — l’encas frit, sans un champagne.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — le poulet salé-épicé, sans un rouge tannique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - oeuf
    - soja
    - arachides
    - sesame
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 80
      cook_min: 5
      rest_min: 0
      total_min: 85
    equipment: &id002
    - four
    - saladier
    - fouet
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: blanc de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: g
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: vin jaune chinois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: paprika
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mélange 5 épices (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commencez par la marinade. Dans un récipient, versez le sucre, la sauce soja, le vin
      blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau
      chaude pour diluer le sucre.
    - Marinade. Hachez l’équivalent d’un gousse d’ail, puis ajoutez-la à la marinade.
    - Marinade. Coupez vos blancs de poulets en gros morceaux avant de les déposer dans la marinade.
      Placez le tout au frigo pendant environ 1h.
    - Marinade. Une fois que vos morceaux de poulet ont bien mariné, passez-les à la passoire et réservez-les.
    - Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez
      puis battez les oeufs (on le fait avec des baguettes dans la vidéo, mais vous avez le
      droit de le faire à la fourchette).
    - Cuisson. Pour paner vos morceaux de poulets, placez-les dans la farine jusqu’à ce qu’ils soient
      entièrement recouverts. Recommencez dans les oeufs battus, puis de nouveau dans la farine.
      Enfin, débarrassez-les dans un bol.
    - Finition. Vous n’avez plus qu’à faire frire vos morceaux de poulet ainsi recouverts dans de l’huile
      bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange
      5 épices. Placez quelques piques en bois et dégustez ces « popcorn de poulet » accompagnés
      de la sauce de votre choix. Bon appétit !
    steps_niveaux:
      amateur:
      - "Marinade. Dans un récipient, versez le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Marinade. Hachez l’équivalent d’une gousse d’ail, puis ajoutez-la à la marinade."
      - "Marinade. Coupez vos blancs de poulet en gros morceaux avant de les déposer dans la marinade. Placez le tout au frigo pendant environ 1h."
      - "Marinade. Une fois que vos morceaux de poulet ont bien [[mariner|mariné]], passez-les à la passoire et réservez-les."
      - "Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez puis battez les œufs (on le fait avec des baguettes dans la vidéo, mais vous avez le droit de le faire à la fourchette)."
      - "Cuisson. Pour paner vos morceaux de poulet, placez-les dans la farine jusqu’à ce qu’ils soient entièrement recouverts. Recommencez dans les œufs battus, puis de nouveau dans la farine. Enfin, débarrassez-les dans un bol."
      - "Finition. [[frire|Faites frire]] vos morceaux de poulet ainsi recouverts dans de l’huile bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange 5 épices. Placez quelques piques en bois et dégustez ces « popcorn de poulet » accompagnés de la sauce de votre choix."
      pro:
      - "Dans un récipient, verser le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajouter l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Hacher l’équivalent d’une gousse d’ail. Ajouter à la marinade."
      - "Couper les blancs de poulet en gros morceaux. Déposer dans la marinade. Frigo environ 1h."
      - "Passer les morceaux de poulet à la passoire. Réserver."
      - "Mélanger farine et paprika. Dans un second récipient, casser puis battre les œufs (baguettes ou fourchette)."
      - "Paner les morceaux de poulet : farine, œufs battus, farine. Débarrasser dans un bol."
      - "Frire les morceaux de poulet dans de l’huile bien chaude, environ 1min30. Dresser dans un bol. Saupoudrer d’un mélange 5 épices. Piques en bois. Servir avec la sauce au choix."
      cavernes:
      - "Marinade. Récipient : sucre, sauce soja, vin blanc, huile sésame, poivre. Verre eau chaude, diluer sucre."
      - "Marinade. Équivalent gousse ail, hacher. Marinade, ajouter."
      - "Marinade. Blancs poulet, gros morceaux, marinade. Frigo environ 1h."
      - "Marinade. Morceaux poulet bien mariné. Passoire, réserver."
      - "Mélange. Premier récipient : farine, paprika. Second : œufs, casser, battre (baguettes ou fourchette)."
      - "Cuisson. Morceaux poulet, paner : farine, œufs battus, farine. Débarrasser dans bol."
      - "Finition. Morceaux poulet recouverts, frire huile bien chaude environ 1min30. Dresser dans bol. Mélange 5 épices, saupoudrer. Piques bois. Sauce choix."
    kcal_per_serving: 779
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
    - gluten
    - oeuf
    - soja
    - arachides
    - sesame
    - sulfites
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: paneer (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: g
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: vin jaune chinois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: paprika
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mélange 5 épices (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commencez par la marinade. Dans un récipient, versez le sucre, la sauce soja, le vin
      blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau
      chaude pour diluer le sucre.
    - Marinade. Hachez l’équivalent d’un gousse d’ail, puis ajoutez-la à la marinade.
    - Marinade. Coupez le paneer en gros cubes avant de les déposer dans la marinade.
      Placez le tout au frigo pendant environ 1h.
    - Marinade. Une fois que les cubes de paneer ont bien mariné, passez-les à la passoire et réservez-les.
    - Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez
      puis battez les oeufs (on le fait avec des baguettes dans la vidéo, mais vous avez le
      droit de le faire à la fourchette).
    - Cuisson. Pour paner les cubes de paneer, placez-les dans la farine jusqu’à ce qu’ils soient
      entièrement recouverts. Recommencez dans les oeufs battus, puis de nouveau dans la farine.
      Enfin, débarrassez-les dans un bol.
    - Dressage. Vous n’avez plus qu’à faire frire les cubes de paneer ainsi recouverts dans de l’huile bien chaude pendant environ 1 min 30. Dressez, saupoudrez d’un mélange 5 épices et dégustez avec la sauce de votre choix. Bon appétit !
    steps_niveaux:
      amateur:
      - "Marinade. Dans un récipient, versez le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Marinade. Hachez l’équivalent d’une gousse d’ail, puis ajoutez-la à la marinade."
      - "Marinade. Coupez le paneer en gros cubes avant de les déposer dans la marinade. Placez le tout au frigo pendant environ 1h."
      - "Marinade. Une fois que les cubes de paneer ont bien [[mariner|mariné]], passez-les à la passoire et réservez-les."
      - "Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez puis battez les œufs (on le fait avec des baguettes dans la vidéo, mais vous avez le droit de le faire à la fourchette)."
      - "Cuisson. Pour paner les cubes de paneer, placez-les dans la farine jusqu’à ce qu’ils soient entièrement recouverts. Recommencez dans les œufs battus, puis de nouveau dans la farine. Enfin, débarrassez-les dans un bol."
      - "Dressage. [[frire|Faites frire]] les cubes de paneer ainsi recouverts dans de l’huile bien chaude pendant environ 1 min 30. Dressez, saupoudrez d’un mélange 5 épices et dégustez avec la sauce de votre choix."
      pro:
      - "Dans un récipient, verser le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajouter l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Hacher l’équivalent d’une gousse d’ail. Ajouter à la marinade."
      - "Couper le paneer en gros cubes. Déposer dans la marinade. Frigo environ 1h."
      - "Passer les cubes de paneer à la passoire. Réserver."
      - "Mélanger farine et paprika. Dans un second récipient, casser puis battre les œufs (baguettes ou fourchette)."
      - "Paner les cubes de paneer : farine, œufs battus, farine. Débarrasser dans un bol."
      - "Frire les cubes de paneer dans de l’huile bien chaude, environ 1 min 30. Dresser. Saupoudrer d’un mélange 5 épices. Servir avec la sauce au choix."
      cavernes:
      - "Marinade. Récipient : sucre, sauce soja, vin blanc, huile sésame, poivre. Verre eau chaude, diluer sucre."
      - "Marinade. Équivalent gousse ail, hacher. Marinade, ajouter."
      - "Marinade. Paneer, gros cubes, marinade. Frigo environ 1h."
      - "Marinade. Cubes paneer bien mariné. Passoire, réserver."
      - "Mélange. Premier récipient : farine, paprika. Second : œufs, casser, battre (baguettes ou fourchette)."
      - "Cuisson. Cubes paneer, paner : farine, œufs battus, farine. Débarrasser dans bol."
      - "Dressage. Cubes paneer recouverts, frire huile bien chaude environ 1 min 30. Dresser. Mélange 5 épices, saupoudrer. Sauce choix."
    kcal_per_serving: 594
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
    - arachides
    - sesame
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: g
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: vin jaune chinois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: paprika
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mélange 5 épices (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commencez par la marinade. Dans un récipient, versez le sucre, la sauce soja, le vin
      blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau
      chaude pour diluer le sucre.
    - Marinade. Hachez l’équivalent d’un gousse d’ail, puis ajoutez-la à la marinade.
    - Marinade. Coupez le tofu ferme en gros morceaux avant de les déposer dans la marinade.
      Placez le tout au frigo pendant environ 1h.
    - Marinade. Une fois que vos morceaux de tofu ont bien mariné, passez-les à la passoire et réservez-les.
    - Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, battez l’œuf de lin (ou le tofu soyeux) (on le
      fait avec des baguettes dans la vidéo, mais vous avez le droit de le faire à la fourchette).
    - Cuisson. Pour paner vos morceaux de tofu, placez-les dans la farine jusqu’à ce qu’ils soient
      entièrement recouverts. Recommencez dans l’œuf de lin battu, puis de nouveau dans la farine. Enfin, débarrassez-les
      dans un bol.
    - Finition. Vous n’avez plus qu’à faire frire vos morceaux de tofu ainsi recouverts dans de l’huile
      bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange
      5 épices. Placez quelques piques en bois et dégustez ces popcorn de tofu accompagnés
      de la sauce de votre choix. Bon appétit !
    steps_niveaux:
      amateur:
      - "Marinade. Dans un récipient, versez le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Marinade. Hachez l’équivalent d’une gousse d’ail, puis ajoutez-la à la marinade."
      - "Marinade. Coupez le tofu ferme en gros morceaux avant de les déposer dans la marinade. Placez le tout au frigo pendant environ 1h."
      - "Marinade. Une fois que vos morceaux de tofu ont bien [[mariner|mariné]], passez-les à la passoire et réservez-les."
      - "Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, battez l’œuf de lin (ou le tofu soyeux) (on le fait avec des baguettes dans la vidéo, mais vous avez le droit de le faire à la fourchette)."
      - "Cuisson. Pour paner vos morceaux de tofu, placez-les dans la farine jusqu’à ce qu’ils soient entièrement recouverts. Recommencez dans l’œuf de lin battu, puis de nouveau dans la farine. Enfin, débarrassez-les dans un bol."
      - "Finition. [[frire|Faites frire]] vos morceaux de tofu ainsi recouverts dans de l’huile bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange 5 épices. Placez quelques piques en bois et dégustez ces popcorn de tofu accompagnés de la sauce de votre choix."
      pro:
      - "Dans un récipient, verser le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajouter l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Hacher l’équivalent d’une gousse d’ail. Ajouter à la marinade."
      - "Couper le tofu ferme en gros morceaux. Déposer dans la marinade. Frigo environ 1h."
      - "Passer les morceaux de tofu à la passoire. Réserver."
      - "Mélanger farine et paprika. Dans un second récipient, battre l’œuf de lin (ou le tofu soyeux) (baguettes ou fourchette)."
      - "Paner les morceaux de tofu : farine, œuf de lin battu, farine. Débarrasser dans un bol."
      - "Frire les morceaux de tofu dans de l’huile bien chaude, environ 1min30. Dresser dans un bol. Saupoudrer d’un mélange 5 épices. Piques en bois. Servir avec la sauce au choix."
      cavernes:
      - "Marinade. Récipient : sucre, sauce soja, vin blanc, huile sésame, poivre. Verre eau chaude, diluer sucre."
      - "Marinade. Équivalent gousse ail, hacher. Marinade, ajouter."
      - "Marinade. Tofu ferme, gros morceaux, marinade. Frigo environ 1h."
      - "Marinade. Morceaux tofu bien mariné. Passoire, réserver."
      - "Mélange. Premier récipient : farine, paprika. Second : œuf lin ou tofu soyeux, battre (baguettes ou fourchette)."
      - "Cuisson. Morceaux tofu, paner : farine, œuf lin battu, farine. Débarrasser dans bol."
      - "Finition. Morceaux tofu recouverts, frire huile bien chaude environ 1min30. Dresser dans bol. Mélange 5 épices, saupoudrer. Piques bois. Sauce choix."
    kcal_per_serving: 672
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
    - oeuf
    - poisson
    - soja
    - arachides
    - sesame
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cabillaud (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 45
      unit: g
      item: sauce soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: vin jaune chinois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: huile de sésame
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: paprika
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
      item: huile d'arachide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: mélange 5 épices (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Commencez par la marinade. Dans un récipient, versez le sucre, la sauce soja, le vin
      blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau
      chaude pour diluer le sucre.
    - Marinade. Hachez l’équivalent d’un gousse d’ail, puis ajoutez-la à la marinade.
    - Marinade. Coupez vos blancs de poulets en gros morceaux avant de les déposer dans la marinade.
      Placez le tout au frigo pendant environ 1h.
    - Marinade. Une fois que vos morceaux de poulet ont bien mariné, passez-les à la passoire et réservez-les.
    - Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez
      puis battez les oeufs (on le fait avec des baguettes dans la vidéo, mais vous avez le
      droit de le faire à la fourchette).
    - Cuisson. Pour paner vos morceaux de poulets, placez-les dans la farine jusqu’à ce qu’ils soient
      entièrement recouverts. Recommencez dans les oeufs battus, puis de nouveau dans la farine.
      Enfin, débarrassez-les dans un bol.
    - Finition. Vous n’avez plus qu’à faire frire vos morceaux de poulet ainsi recouverts dans de l’huile
      bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange
      5 épices. Placez quelques piques en bois et dégustez ces « popcorn de poulet » accompagnés
      de la sauce de votre choix. Bon appétit !
    steps_niveaux:
      amateur:
      - "Marinade. Dans un récipient, versez le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Marinade. Hachez l’équivalent d’une gousse d’ail, puis ajoutez-la à la marinade."
      - "Marinade. Coupez vos blancs de poulet en gros morceaux avant de les déposer dans la marinade. Placez le tout au frigo pendant environ 1h."
      - "Marinade. Une fois que vos morceaux de poulet ont bien [[mariner|mariné]], passez-les à la passoire et réservez-les."
      - "Mélange. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez puis battez les œufs (on le fait avec des baguettes dans la vidéo, mais vous avez le droit de le faire à la fourchette)."
      - "Cuisson. Pour paner vos morceaux de poulet, placez-les dans la farine jusqu’à ce qu’ils soient entièrement recouverts. Recommencez dans les œufs battus, puis de nouveau dans la farine. Enfin, débarrassez-les dans un bol."
      - "Finition. [[frire|Faites frire]] vos morceaux de poulet ainsi recouverts dans de l’huile bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange 5 épices. Placez quelques piques en bois et dégustez ces « popcorn de poulet » accompagnés de la sauce de votre choix."
      pro:
      - "Dans un récipient, verser le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajouter l’équivalent d’un verre d’eau chaude pour diluer le sucre."
      - "Hacher l’équivalent d’une gousse d’ail. Ajouter à la marinade."
      - "Couper les blancs de poulet en gros morceaux. Déposer dans la marinade. Frigo environ 1h."
      - "Passer les morceaux de poulet à la passoire. Réserver."
      - "Mélanger farine et paprika. Dans un second récipient, casser puis battre les œufs (baguettes ou fourchette)."
      - "Paner les morceaux de poulet : farine, œufs battus, farine. Débarrasser dans un bol."
      - "Frire les morceaux de poulet dans de l’huile bien chaude, environ 1min30. Dresser dans un bol. Saupoudrer d’un mélange 5 épices. Piques en bois. Servir avec la sauce au choix."
      cavernes:
      - "Marinade. Récipient : sucre, sauce soja, vin blanc, huile sésame, poivre. Verre eau chaude, diluer sucre."
      - "Marinade. Équivalent gousse ail, hacher. Marinade, ajouter."
      - "Marinade. Blancs poulet, gros morceaux, marinade. Frigo environ 1h."
      - "Marinade. Morceaux poulet bien mariné. Passoire, réserver."
      - "Mélange. Premier récipient : farine, paprika. Second : œufs, casser, battre (baguettes ou fourchette)."
      - "Cuisson. Morceaux poulet, paner : farine, œufs battus, farine. Débarrasser dans bol."
      - "Finition. Morceaux poulet recouverts, frire huile bien chaude environ 1min30. Dresser dans bol. Mélange 5 épices, saupoudrer. Piques bois. Sauce choix."
    kcal_per_serving: 594
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
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

# Poulet popcorn
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/poulet-popcorn]]

## Ingrédients (4 personnes)

- 4 blanc de poulet
- 15 g de sucre
- 45 g de sauce soja
- 20 g de vin jaune chinois
- 20 g d'huile de sésame
- 5 g de poivre
- 500 g de farine
- 15 g de paprika
- 2 oeuf
-  huile d'arachide
-  mélange 5 épices (facultatif)

## Préparation

1. Commencez par la marinade. Dans un récipient, versez le sucre, la sauce soja, le vin blanc, l’huile de sésame et le poivre. Ajoutez ensuite l’équivalent d’un verre d’eau chaude pour diluer le sucre.
2. Hachez l’équivalent d’un gousse d’ail, puis ajoutez-la à la marinade.
3. Coupez vos blancs de poulets en gros morceaux avant de les déposer dans la marinade. Placez le tout au frigo pendant environ 1h.
4. Une fois que vos morceaux de poulet ont bien mariné, passez-les à la passoire et réservez-les.
5. Dans un premier récipient, mélangez la farine et le paprika. Dans un second, cassez puis battez les oeufs (on le fait avec des baguettes dans la vidéo, mais vous avez le droit de le faire à la fourchette).
6. Pour paner vos morceaux de poulets, placez-les dans la farine jusqu’à ce qu’ils soient entièrement recouverts. Recommencez dans les oeufs battus, puis de nouveau dans la farine. Enfin, débarrassez-les dans un bol.
7. Vous n’avez plus qu’à faire frire vos morceaux de poulet ainsi recouverts dans de l’huile bien chaude pendant environ 1min30. Dressez ensuite dans un bol et saupoudrez d’un mélange 5 épices.

 
 

 
 Placez quelques piques en bois et dégustez ces « popcorn de poulet » accompagnés de la sauce de votre choix. Bon appétit !
