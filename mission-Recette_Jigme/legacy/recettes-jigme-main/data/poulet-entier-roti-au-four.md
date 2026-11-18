---
schema: recette-web-jigme/v2
slug: poulet-entier-roti-au-four
title: Poulet entier rôti au four
lang: fr
description: "Poulet entier rôti au four : recette française avec poulet fermier entier, gousse d'ail et citron jaune, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- poulet
- rôti
- four
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/poulet-entier-roti-au-four.jpg
  alt: Poulet entier rôti au four
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/poulet-entier-roti-au-four.md
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
    - from: paneer ou tofu ferme
      to: tofu ferme
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
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: paneer ou tofu ferme
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : paneer ou tofu ferme → pois chiches rôtis ; tofu ferme → pois chiches rôtis.'
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
histoire: 'Poulet rôti entier : geste européen ancien, repas du dimanche en France. On tourne la bête
  ou on la pose en cocotte, four chaud, peau croustillante. On décrit surtout la rôtissoire ; au four,
  le principe est le même.

  '
fun_facts:
- text: 'On sale sous la peau et dans la cavité : le sel en surface seulement ne traverse pas.

    '
  source_name: Usage
  source_url: null
- text: 'Le beurre ou l’huile sous la peau colorent sans dessécher la poitrine.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Poulet entier rôti au four ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Roast_chicken
wines:
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, poivre — le jus de rôti, tanin court.
- name: Mâcon-Villages
  producer: Cave de Lugny
  origin: Mâcon, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc souple — si l’on veut un blanc, la peau et le jus.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — le dimanche, sans un bourgogne de garde.
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
    difficulty: 2
    time: &id001
      prep_min: 50
      cook_min: 40
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: poulet fermier entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pain à trancher
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
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
    - Préparation. Démarrez cette recette par la farce du poulet. Pour cela, découpez quelques tranches
      de pain et badigeonnez-les avec une gousse d’ail coupées en deux. Placez les tranches
      de pain, l’ail ainsi qu’un citron coupé en petits morceaux dans le poulet. Finalisez
      avec quelques feuilles de laurier et du thym frais.
    - Cuisson. Réalisez quelques entailles sur la partie supérieure du poulet afin d’optimiser la cuisson.
      Vous pouvez également vous en servir pour glisser du thym et du laurier entre la chair
      et la peau. Salez et poivrez selon vos goûts.
    - Cuisson. Placez le poulet dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés
      en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du
      laurier. Enfin, finalisez avec du beurre et un filet d’huile végétale.
    - Cuisson. Placez le poulet au four pendant 1h, entre 180°C et 200°C. Pensez à régulièrement arrosé
      le poulet avec le jus de cuisson. Si possible, retournez le poulet une fois toutes les
      15 minutes afin d’avoir une cuisson homogène.
    - Finition. Pour la découpe du poulet, commencez par couper les blancs en suivant la ligne formée
      par les os. Retirez ensuite les cuisses, puis les ailes. Servez bien chaud, accompagné
      de pommes de terre, de petits légumes ou de féculents. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Démarrez cette recette par la farce du poulet. Pour cela, découpez quelques tranches de pain et badigeonnez-les avec une gousse d’ail coupées en deux. Placez les tranches de pain, l’ail ainsi qu’un citron coupé en petits morceaux dans le poulet. Finalisez avec quelques feuilles de laurier et du thym frais."
      - "Cuisson. Réalisez quelques entailles sur la partie supérieure du poulet afin d’optimiser la cuisson. Vous pouvez également vous en servir pour glisser du thym et du laurier entre la chair et la peau. Salez et poivrez selon vos goûts."
      - "Cuisson. Placez le poulet dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier. Enfin, finalisez avec du beurre et un filet d’huile végétale."
      - "Cuisson. Placez le poulet au four pendant 1h, entre 180°C et 200°C. Pensez à régulièrement arrosé le poulet avec le jus de cuisson. Si possible, retournez le poulet une fois toutes les 15 minutes afin d’avoir une cuisson homogène."
      - "Finition. Pour la découpe du poulet, commencez par couper les blancs en suivant la ligne formée par les os. Retirez ensuite les cuisses, puis les ailes. Servez bien chaud, accompagné de pommes de terre, de petits légumes ou de féculents. Bon appétit !"
      pro:
      - "Découper quelques tranches de pain. Badigeonner avec une gousse d’ail coupées en deux. Placer les tranches de pain, l’ail et un citron en petits morceaux dans le poulet. Finaliser avec quelques feuilles de laurier et du thym frais."
      - "Entailler la partie supérieure du poulet. Y glisser thym et laurier entre la chair et la peau si besoin. Saler, poivrer."
      - "Placer le poulet dans un grand plat pouvant aller au four. Ajouter les oignons en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier, du beurre et un filet d’huile végétale."
      - "Enfourner 1 h, entre 180°C et 200°C. Arroser régulièrement avec le jus de cuisson. Retourner le poulet toutes les 15 minutes si possible."
      - "Couper les blancs en suivant la ligne formée par les os. Retirer les cuisses, puis les ailes. Servir chaud, avec pommes de terre, petits légumes ou féculents."
      cavernes:
      - "Préparation. Farce poulet. Tranches pain, découper. Gousse ail coupées en deux, badigeonner. Pain, ail, citron petits morceaux, dans poulet. Laurier, thym frais, finaliser."
      - "Cuisson. Entailles partie supérieure poulet. Thym, laurier, glisser entre chair et peau possible. Saler, poivrer selon goûts."
      - "Cuisson. Poulet, grand plat four. Oignons lamelles, gousses ails écrasées, jus citron jaune, thym, laurier. Beurre, filet huile végétale."
      - "Cuisson. Four 1h, 180°C et 200°C. Jus cuisson, arroser régulièrement. Si possible, retourner 1 fois toutes 15 min."
      - "Finition. Blancs, couper suivant ligne os. Cuisses, ailes, retirer. Servir chaud. Pommes terre, petits légumes ou féculents. Bon appétit !"
    kcal_per_serving: 192
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
    - lactose
    - produits_laitiers
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pain à trancher
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
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
    - Préparation. Découpez quelques tranches de pain et badigeonnez-les avec une gousse d’ail coupée en deux. Disposez le pain, l’ail, le citron en morceaux, le laurier et le thym autour du bloc de paneer (ou de tofu ferme).
    - Cuisson. Entaillez légèrement le paneer, glissez-y du thym et du laurier. Salez et poivrez.
    - Cuisson. Placez le paneer dans un grand plat allant au four. Ajoutez les oignons en lamelles, quelques gousses d’ail écrasées, le jus d’un citron, du thym, du laurier, du beurre et un filet d’huile végétale.
    - Cuisson. Enfournez 45 min à 1 h, entre 180°C et 200°C. Arrosez régulièrement avec le jus de cuisson et retournez le paneer toutes les 15 minutes.
    - Tranchez le paneer. Servez bien chaud, accompagné de pommes de terre, de petits légumes ou de féculents. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Découpez quelques tranches de pain et badigeonnez-les avec une gousse d’ail coupée en deux. Disposez le pain, l’ail, le citron en morceaux, le laurier et le thym autour du bloc de paneer (ou de tofu ferme)."
      - "Cuisson. Entaillez légèrement le paneer, glissez-y du thym et du laurier. Salez et poivrez."
      - "Cuisson. Placez le paneer dans un grand plat allant au four. Ajoutez les oignons en lamelles, quelques gousses d’ail écrasées, le jus d’un citron, du thym, du laurier, du beurre et un filet d’huile végétale."
      - "Cuisson. Enfournez 45 min à 1 h, entre 180°C et 200°C. Arrosez régulièrement avec le jus de cuisson et retournez le paneer toutes les 15 minutes."
      - "Tranchez le paneer. Servez bien chaud, accompagné de pommes de terre, de petits légumes ou de féculents. Bon appétit !"
      pro:
      - "Découper quelques tranches de pain. Badigeonner avec une gousse d’ail coupée en deux. Disposer pain, ail, citron en morceaux, laurier et thym autour du bloc de paneer (ou de tofu ferme)."
      - "Entailler légèrement le paneer. Y glisser thym et laurier. Saler, poivrer."
      - "Placer le paneer dans un grand plat allant au four. Ajouter les oignons en lamelles, quelques gousses d’ail écrasées, le jus d’un citron, du thym, du laurier, du beurre et un filet d’huile végétale."
      - "Enfourner 45 min à 1 h, entre 180°C et 200°C. Arroser régulièrement avec le jus de cuisson. Retourner le paneer toutes les 15 minutes."
      - "Trancher le paneer. Servir chaud, avec pommes de terre, petits légumes ou féculents."
      cavernes:
      - "Préparation. Tranches pain, découper. Gousse ail coupée en deux, badigeonner. Pain, ail, citron morceaux, laurier, thym, autour bloc paneer ou tofu ferme."
      - "Cuisson. Paneer, entailler légèrement. Thym, laurier, glisser. Saler, poivrer."
      - "Cuisson. Paneer, grand plat four. Oignons lamelles, gousses ail écrasées, jus citron, thym, laurier, beurre, filet huile végétale."
      - "Cuisson. Four 45 min à 1 h, 180°C et 200°C. Jus cuisson, arroser régulièrement. Paneer, retourner toutes 15 min."
      - "Paneer, trancher. Servir chaud. Pommes terre, petits légumes ou féculents. Bon appétit !"
    kcal_per_serving: 173
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
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pain à trancher
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
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
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
    - Mélange. Découpez quelques tranches de pain, badigeonnez-les d’ail. Mélangez pain, ail, citron, laurier et thym — ce sera la farce à glisser autour du tofu (ou à rôtir à côté).
    - Cuisson. Salez, poivrez le tofu ferme et glissez thym et laurier autour.
    - Cuisson. Placez le tofu dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés
      en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du
      laurier. Enfin, finalisez avec de la margarine végétale et un filet d’huile
      végétale.
    - Cuisson. Enfournez 35 à 45 minutes entre 180°C et 200°C. Arrosez régulièrement et retournez à mi-cuisson.
    - Dressage. Tranchez le tofu et servez chaud avec pommes de terre ou légumes. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Découpez quelques tranches de pain, badigeonnez-les d’ail. Mélangez pain, ail, citron, laurier et thym — ce sera la farce à glisser autour du tofu (ou à rôtir à côté)."
      - "Cuisson. Salez, poivrez le tofu ferme et glissez thym et laurier autour."
      - "Cuisson. Placez le tofu dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier. Enfin, finalisez avec de la margarine végétale et un filet d’huile végétale."
      - "Cuisson. Enfournez 35 à 45 minutes entre 180°C et 200°C. Arrosez régulièrement et retournez à mi-cuisson."
      - "Dressage. Tranchez le tofu et servez chaud avec pommes de terre ou légumes. Bon appétit !"
      pro:
      - "Découper quelques tranches de pain. Badigeonner d’ail. Mélanger pain, ail, citron, laurier et thym. Farce autour du tofu, ou à rôtir à côté."
      - "Saler, poivrer le tofu ferme. Glisser thym et laurier autour."
      - "Placer le tofu dans un grand plat pouvant aller au four. Ajouter les oignons en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier, de la margarine végétale et un filet d’huile végétale."
      - "Enfourner 35 à 45 minutes entre 180°C et 200°C. Arroser régulièrement. Retourner à mi-cuisson."
      - "Trancher le tofu. Servir chaud, avec pommes de terre ou légumes."
      cavernes:
      - "Mélange. Tranches pain, découper, ail, badigeonner. Pain, ail, citron, laurier, thym, mélanger. Farce autour tofu, ou rôtir à côté."
      - "Cuisson. Tofu ferme, saler, poivrer. Thym, laurier, autour."
      - "Cuisson. Tofu, grand plat four. Oignons lamelles, gousses ails écrasées, jus citron jaune, thym, laurier. Margarine végétale, filet huile végétale."
      - "Cuisson. Four 35 à 45 min, 180°C et 200°C. Arroser régulièrement. Retourner mi-cuisson."
      - "Dressage. Tofu, trancher. Servir chaud. Pommes terre ou légumes. Bon appétit !"
    kcal_per_serving: 105
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
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pain à trancher
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: thym
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
    - Préparation. Démarrez cette recette par la farce du poulet. Pour cela, découpez quelques tranches
      de pain et badigeonnez-les avec une gousse d’ail coupées en deux. Placez les tranches
      de pain, l’ail ainsi qu’un citron coupé en petits morceaux dans le poulet. Finalisez
      avec quelques feuilles de laurier et du thym frais.
    - Cuisson. Réalisez quelques entailles sur la partie supérieure du poulet afin d’optimiser la cuisson.
      Vous pouvez également vous en servir pour glisser du thym et du laurier entre la chair
      et la peau. Salez et poivrez selon vos goûts.
    - Cuisson. Placez le poulet dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés
      en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du
      laurier. Enfin, finalisez avec du beurre et un filet d’huile végétale.
    - Cuisson. Placez le poulet au four pendant 1h, entre 180°C et 200°C. Pensez à régulièrement arrosé
      le poulet avec le jus de cuisson. Si possible, retournez le poulet une fois toutes les
      15 minutes afin d’avoir une cuisson homogène.
    - Finition. Pour la découpe du poulet, commencez par couper les blancs en suivant la ligne formée
      par les os. Retirez ensuite les cuisses, puis les ailes. Servez bien chaud, accompagné
      de pommes de terre, de petits légumes ou de féculents. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Démarrez cette recette par la farce du poulet. Pour cela, découpez quelques tranches de pain et badigeonnez-les avec une gousse d’ail coupées en deux. Placez les tranches de pain, l’ail ainsi qu’un citron coupé en petits morceaux dans le poulet. Finalisez avec quelques feuilles de laurier et du thym frais."
      - "Cuisson. Réalisez quelques entailles sur la partie supérieure du poulet afin d’optimiser la cuisson. Vous pouvez également vous en servir pour glisser du thym et du laurier entre la chair et la peau. Salez et poivrez selon vos goûts."
      - "Cuisson. Placez le poulet dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier. Enfin, finalisez avec du beurre et un filet d’huile végétale."
      - "Cuisson. Placez le poulet au four pendant 1h, entre 180°C et 200°C. Pensez à régulièrement arrosé le poulet avec le jus de cuisson. Si possible, retournez le poulet une fois toutes les 15 minutes afin d’avoir une cuisson homogène."
      - "Finition. Pour la découpe du poulet, commencez par couper les blancs en suivant la ligne formée par les os. Retirez ensuite les cuisses, puis les ailes. Servez bien chaud, accompagné de pommes de terre, de petits légumes ou de féculents. Bon appétit !"
      pro:
      - "Découper quelques tranches de pain. Badigeonner avec une gousse d’ail coupées en deux. Placer les tranches de pain, l’ail et un citron en petits morceaux dans le poulet. Finaliser avec quelques feuilles de laurier et du thym frais."
      - "Entailler la partie supérieure du poulet. Y glisser thym et laurier entre la chair et la peau si besoin. Saler, poivrer."
      - "Placer le poulet dans un grand plat pouvant aller au four. Ajouter les oignons en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier, du beurre et un filet d’huile végétale."
      - "Enfourner 1 h, entre 180°C et 200°C. Arroser régulièrement avec le jus de cuisson. Retourner le poulet toutes les 15 minutes si possible."
      - "Couper les blancs en suivant la ligne formée par les os. Retirer les cuisses, puis les ailes. Servir chaud, avec pommes de terre, petits légumes ou féculents."
      cavernes:
      - "Préparation. Farce poulet. Tranches pain, découper. Gousse ail coupées en deux, badigeonner. Pain, ail, citron petits morceaux, dans poulet. Laurier, thym frais, finaliser."
      - "Cuisson. Entailles partie supérieure poulet. Thym, laurier, glisser entre chair et peau possible. Saler, poivrer selon goûts."
      - "Cuisson. Poulet, grand plat four. Oignons lamelles, gousses ails écrasées, jus citron jaune, thym, laurier. Beurre, filet huile végétale."
      - "Cuisson. Four 1h, 180°C et 200°C. Jus cuisson, arroser régulièrement. Si possible, retourner 1 fois toutes 15 min."
      - "Finition. Blancs, couper suivant ligne os. Cuisses, ailes, retirer. Servir chaud. Pommes terre, petits légumes ou féculents. Bon appétit !"
    kcal_per_serving: 173
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
  restes: ["Sandwich ou salade froide"]
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Poulet entier rôti au four
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/poulet-entier-roti-au-four]]

## Ingrédients (4 personnes)

- 1 poulet fermier entier
- 3 gousse d'ail
- 2 citron jaune
- 2 oignon
- 1 pain à trancher
- 50 g de beurre
-  feuilles de laurier
-  thym
-  huile d'olive

## Préparation

1. Démarrez cette recette par la farce du poulet. Pour cela, découpez quelques tranches de pain et badigeonnez-les avec une gousse d’ail coupées en deux. Placez les tranches de pain, l’ail ainsi qu’un citron coupé en petits morceaux dans le poulet. Finalisez avec quelques feuilles de laurier et du thym frais.
2. Réalisez quelques entailles sur la partie supérieure du poulet afin d’optimiser la cuisson. Vous pouvez également vous en servir pour glisser du thym et du laurier entre la chair et la peau. Salez et poivrez selon vos goûts.
3. Placez le poulet dans un grand plat pouvant aller au four. Ajoutez-y les oignons coupés en lamelles, quelques gousses d’ails écrasées, le jus d’un citron jaune, du thym, du laurier. Enfin, finalisez avec du beurre et un filet d’huile végétale.
4. Placez le poulet au four pendant 1h, entre 180°C et 200°C. Pensez à régulièrement arrosé le poulet avec le jus de cuisson. Si possible, retournez le poulet une fois toutes les 15 minutes afin d’avoir une cuisson homogène.
5. Pour la découpe du poulet, commencez par couper les blancs en suivant la ligne formée par les os. Retirez ensuite les cuisses, puis les ailes.

 
 

 
 Servez bien chaud, accompagné de pommes de terre, de petits légumes ou de féculents. Bon appétit !
