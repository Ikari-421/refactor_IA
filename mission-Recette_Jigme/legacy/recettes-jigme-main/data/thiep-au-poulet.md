---
schema: recette-web-jigme/v2
slug: thiep-au-poulet
title: Thiep au poulet
lang: fr
description: "Thiep au poulet : recette sénégalaise avec oignon blanc, gousse d'ail et blanc de poulet, pour 4 personnes. Version maison."
cuisine: sénégalaise
category: salé
tags:
- salé
- riz
- poulet
- oignon blanc
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/thiep-au-poulet.jpg
  alt: Thiep au poulet
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/thiep-au-poulet.md
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
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu ferme → pois chiches rôtis.'
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
histoire: 'Thiep (tiep) : en wolof, plat de riz. Le plus connu est le thiéboudienne (riz au poisson),
  plat national sénégalais. Ici, au poulet : même riz, même sauce tomate, autre viande.

  '
fun_facts:
- text: >
    Le riz cuit dans la sauce, pas à part : trop d’eau, il colle ; trop peu, il
    brûle au fond (le « xooñ » recherché).
  source_name: Usage
  source_url:
- text: >
    Légumes (carotte, chou, aubergine) se braisent avec : ce n’est pas un riz
    nature nappé.
  source_name: Grokipedia, Thieboudienne
  source_url: https://grokipedia.com/page/Thieboudienne
wines:
- name: Saint-Chinian
  producer: Clos Bagatelle
  origin: Saint-Chinian, Languedoc
  grapes: syrah, grenache
  award:
  why: Fruit, garrigue — le poulet tomate, tanin souple.
- name: Côtes du Rhône
  producer: Famille Perrin
  origin: Orange, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — la sauce, sans un tanin de garde.
- name: Chinon
  producer: Olga Raffault
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc — le poulet, tanin vif.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 40
      rest_min: 0
      total_min: 100
    equipment: &id002
    - casserole
    - mixeur
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: oignon blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: blanc de poulet
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
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: navet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de manioc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment oiseau (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur.
      Ajoutez les gousses d’ail et mixez le tout. Réservez.
    - Cuisson. Salez et poivrez les filets de poulet. Faites les ensuite saisir dans une grande casserole
      chaude avec un filet d’huile d’arachide. Une fois qu’ils sont bien grillés, réservez.
    - Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que
      le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez
      pas à utiliser du jus de tomate du commerce pour la recette.
    - Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec
      environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et laissez mijoter.
    - Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec
      le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous
      aimez manger épicé, puis déposez les blancs de poulet dans la même casserole. Laissez
      mijoter à feu doux.
    - Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans
      la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le poulet
      et réservez. Conservez la sauce tomate pour la suite de la recette.
    - Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le
      ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites le cuire à
      feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus
      de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois,
      jusqu’à ce que le riz soit cuit.
    - Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat
      convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes,
      le poulet et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec
      vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur. Ajoutez les gousses d’ail et mixez le tout. Réservez."
      - "Cuisson. Salez et poivrez les filets de poulet. Faites-les ensuite saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois qu’ils sont bien grillés, réservez."
      - "Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez pas à utiliser du jus de tomate du commerce pour la recette."
      - "Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et [[mijoter|laissez mijoter]]."
      - "Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous aimez manger épicé, puis déposez les blancs de poulet dans la même casserole. [[mijoter|Laissez mijoter]] à feu doux."
      - "Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le poulet et réservez. Conservez la sauce tomate pour la suite de la recette."
      - "Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites-le cuire à feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois, jusqu’à ce que le riz soit cuit."
      - "Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le poulet et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec vos proches. Bon appétit !"
      pro:
      - "Éplucher et couper grossièrement les oignons, les placer dans la cuve d’un mixeur. Ajouter les gousses d’ail et mixer. Réserver."
      - "Saler et poivrer les filets de poulet. Saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Bien grillés : réserver."
      - "Dans la même casserole, verser les oignons et l’ail mixés. Pendant que le mélange revient à feu doux, mixer les tomates. Hors saison : jus de tomate du commerce."
      - "Verser le mélange de tomate dans la casserole, avec l’oignon et l’ail. Compléter avec environ 50cl d’eau (sauf jus de tomate) et laisser mijoter."
      - "Éplucher les légumes et couper en gros morceaux. Placer dans la casserole avec le jus de tomate. Compléter avec de l’eau à hauteur. Option : piment oiseau. Déposer les blancs de poulet. Laisser mijoter à feu doux."
      - "Légumes cuits (pointe de couteau dans la chair) : retirer à l’écumoire. Retirer le poulet et réserver. Conserver la sauce tomate."
      - "Cuire le riz façon risotto : rincer à l’eau claire. Casserole, fond d’eau, un peu de sel, feu doux, couvercle. Quand le riz a bu l’eau, verser un peu de jus de cuisson à la tomate. Mélanger, couvrir. Répéter deux à trois fois jusqu’à cuisson."
      - "Dresser dans un grand plat : riz à la tomate, légumes, poulet, quartier de citron vert. Servir bien chaud."
      cavernes:
      - "Préparation. Oignons, éplucher, couper gros. Cuve mixeur. Gousses ail, ajouter. Tout, mixer. Réserver."
      - "Cuisson. Filets poulet, saler, poivrer. Grande casserole chaude, filet huile arachide, saisir. Bien grillés, réserver."
      - "Cuisson. Même casserole, oignons ail mixés, verser. Feu doux, revenir. Pendant, tomates, mixer. Hors saison : jus tomate commerce."
      - "Cuisson. Mélange tomate, casserole, oignon ail. Environ 50cl eau (sauf jus tomate), mijoter."
      - "Cuisson. Légumes, éplucher, gros morceaux. Casserole, jus tomate. Eau à hauteur. Option : piment oiseau. Blancs poulet, déposer. Feu doux, mijoter."
      - "Cuisson. Légumes cuits : pointe couteau, chair. Écumoire, retirer. Poulet, retirer, réserver. Sauce tomate, garder."
      - "Cuisson. Riz, façon risotto. Eau claire, rincer. Casserole, fond eau, peu sel, feu doux, couvercle. Eau bue : peu jus cuisson tomate, verser. Mélanger, couvrir. Deux à trois fois, jusqu’à cuit."
      - "Finition. Grand plat. Riz tomate, légumes, poulet, petit quartier citron vert. Chaud. Bon appétit."
    kcal_per_serving: 379
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
    - arachides
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: oignon blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: paneer (cubes)
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
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: navet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de manioc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment oiseau (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur.
      Ajoutez les gousses d’ail et mixez le tout. Réservez.
    - Salez et poivrez le paneer. Faites-le saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois bien grillé, réservez.
    - Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que
      le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez
      pas à utiliser du jus de tomate du commerce pour la recette.
    - Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec
      environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et laissez mijoter.
    - Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec
      le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous
      aimez manger épicé, puis déposez le paneer dans la même casserole. Laissez
      mijoter à feu doux.
    - Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans
      la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le paneer et réservez. Conservez la sauce tomate pour la suite de la recette.
    - Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le
      ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites le cuire à
      feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus
      de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois,
      jusqu’à ce que le riz soit cuit.
    - Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat
      convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le paneer et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec
      vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur. Ajoutez les gousses d’ail et mixez le tout. Réservez."
      - "Salez et poivrez le paneer. Faites-le saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois bien grillé, réservez."
      - "Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez pas à utiliser du jus de tomate du commerce pour la recette."
      - "Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et [[mijoter|laissez mijoter]]."
      - "Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous aimez manger épicé, puis déposez le paneer dans la même casserole. [[mijoter|Laissez mijoter]] à feu doux."
      - "Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le paneer et réservez. Conservez la sauce tomate pour la suite de la recette."
      - "Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites-le cuire à feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois, jusqu’à ce que le riz soit cuit."
      - "Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le paneer et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec vos proches. Bon appétit !"
      pro:
      - "Éplucher et couper grossièrement les oignons, les placer dans la cuve d’un mixeur. Ajouter les gousses d’ail et mixer. Réserver."
      - "Saler et poivrer le paneer. Saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Bien grillé : réserver."
      - "Dans la même casserole, verser les oignons et l’ail mixés. Pendant que le mélange revient à feu doux, mixer les tomates. Hors saison : jus de tomate du commerce."
      - "Verser le mélange de tomate dans la casserole, avec l’oignon et l’ail. Compléter avec environ 50cl d’eau (sauf jus de tomate) et laisser mijoter."
      - "Éplucher les légumes et couper en gros morceaux. Placer dans la casserole avec le jus de tomate. Compléter avec de l’eau à hauteur. Option : piment oiseau. Déposer le paneer. Laisser mijoter à feu doux."
      - "Légumes cuits (pointe de couteau dans la chair) : retirer à l’écumoire. Retirer le paneer et réserver. Conserver la sauce tomate."
      - "Cuire le riz façon risotto : rincer à l’eau claire. Casserole, fond d’eau, un peu de sel, feu doux, couvercle. Quand le riz a bu l’eau, verser un peu de jus de cuisson à la tomate. Mélanger, couvrir. Répéter deux à trois fois jusqu’à cuisson."
      - "Dresser dans un grand plat : riz à la tomate, légumes, paneer, quartier de citron vert. Servir bien chaud."
      cavernes:
      - "Préparation. Oignons, éplucher, couper gros. Cuve mixeur. Gousses ail, ajouter. Tout, mixer. Réserver."
      - "Paneer, saler, poivrer. Grande casserole chaude, filet huile arachide, saisir. Bien grillé, réserver."
      - "Cuisson. Même casserole, oignons ail mixés, verser. Feu doux, revenir. Pendant, tomates, mixer. Hors saison : jus tomate commerce."
      - "Cuisson. Mélange tomate, casserole, oignon ail. Environ 50cl eau (sauf jus tomate), mijoter."
      - "Cuisson. Légumes, éplucher, gros morceaux. Casserole, jus tomate. Eau à hauteur. Option : piment oiseau. Paneer, déposer. Feu doux, mijoter."
      - "Cuisson. Légumes cuits : pointe couteau, chair. Écumoire, retirer. Paneer, retirer, réserver. Sauce tomate, garder."
      - "Cuisson. Riz, façon risotto. Eau claire, rincer. Casserole, fond eau, peu sel, feu doux, couvercle. Eau bue : peu jus cuisson tomate, verser. Mélanger, couvrir. Deux à trois fois, jusqu’à cuit."
      - "Finition. Grand plat. Riz tomate, légumes, paneer, petit quartier citron vert. Chaud. Bon appétit."
    kcal_per_serving: 193
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - arachides
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: oignon blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu ferme
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
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: navet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de manioc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment oiseau (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur.
      Ajoutez les gousses d’ail et mixez le tout. Réservez.
    - Dressage. Salez et poivrez le tofu ferme. Saisissez-le dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois grillé, réservez.
    - Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que
      le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez
      pas à utiliser du jus de tomate du commerce pour la recette.
    - Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec
      environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et laissez mijoter.
    - Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec
      le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous
      aimez manger épicé, puis déposez le tofu dans la même casserole. Laissez
      mijoter à feu doux.
    - Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans
      la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le tofu et réservez. Conservez la sauce tomate pour la suite de la recette.
    - Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le
      ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites le cuire à
      feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus
      de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois,
      jusqu’à ce que le riz soit cuit.
    - Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat
      convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le tofu et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec
      vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur. Ajoutez les gousses d’ail et mixez le tout. Réservez."
      - "Dressage. Salez et poivrez le tofu ferme. Saisissez-le dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois grillé, réservez."
      - "Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez pas à utiliser du jus de tomate du commerce pour la recette."
      - "Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et [[mijoter|laissez mijoter]]."
      - "Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous aimez manger épicé, puis déposez le tofu dans la même casserole. [[mijoter|Laissez mijoter]] à feu doux."
      - "Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le tofu et réservez. Conservez la sauce tomate pour la suite de la recette."
      - "Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites-le cuire à feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois, jusqu’à ce que le riz soit cuit."
      - "Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le tofu et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec vos proches. Bon appétit !"
      pro:
      - "Éplucher et couper grossièrement les oignons, les placer dans la cuve d’un mixeur. Ajouter les gousses d’ail et mixer. Réserver."
      - "Saler et poivrer le tofu ferme. Saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Grillé : réserver."
      - "Dans la même casserole, verser les oignons et l’ail mixés. Pendant que le mélange revient à feu doux, mixer les tomates. Hors saison : jus de tomate du commerce."
      - "Verser le mélange de tomate dans la casserole, avec l’oignon et l’ail. Compléter avec environ 50cl d’eau (sauf jus de tomate) et laisser mijoter."
      - "Éplucher les légumes et couper en gros morceaux. Placer dans la casserole avec le jus de tomate. Compléter avec de l’eau à hauteur. Option : piment oiseau. Déposer le tofu. Laisser mijoter à feu doux."
      - "Légumes cuits (pointe de couteau dans la chair) : retirer à l’écumoire. Retirer le tofu et réserver. Conserver la sauce tomate."
      - "Cuire le riz façon risotto : rincer à l’eau claire. Casserole, fond d’eau, un peu de sel, feu doux, couvercle. Quand le riz a bu l’eau, verser un peu de jus de cuisson à la tomate. Mélanger, couvrir. Répéter deux à trois fois jusqu’à cuisson."
      - "Dresser dans un grand plat : riz à la tomate, légumes, tofu, quartier de citron vert. Servir bien chaud."
      cavernes:
      - "Préparation. Oignons, éplucher, couper gros. Cuve mixeur. Gousses ail, ajouter. Tout, mixer. Réserver."
      - "Dressage. Tofu ferme, saler, poivrer. Grande casserole chaude, filet huile arachide, saisir. Grillé, réserver."
      - "Cuisson. Même casserole, oignons ail mixés, verser. Feu doux, revenir. Pendant, tomates, mixer. Hors saison : jus tomate commerce."
      - "Cuisson. Mélange tomate, casserole, oignon ail. Environ 50cl eau (sauf jus tomate), mijoter."
      - "Cuisson. Légumes, éplucher, gros morceaux. Casserole, jus tomate. Eau à hauteur. Option : piment oiseau. Tofu, déposer. Feu doux, mijoter."
      - "Cuisson. Légumes cuits : pointe couteau, chair. Écumoire, retirer. Tofu, retirer, réserver. Sauce tomate, garder."
      - "Cuisson. Riz, façon risotto. Eau claire, rincer. Casserole, fond eau, peu sel, feu doux, couvercle. Eau bue : peu jus cuisson tomate, verser. Mélanger, couvrir. Deux à trois fois, jusqu’à cuit."
      - "Finition. Grand plat. Riz tomate, légumes, tofu, petit quartier citron vert. Chaud. Bon appétit."
    kcal_per_serving: 193
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
    - arachides
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: oignon blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cabillaud (cubes)
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
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: navet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: racine de manioc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: concentré de tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment oiseau (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur.
      Ajoutez les gousses d’ail et mixez le tout. Réservez.
    - Cuisson. Salez et poivrez les filets de poulet. Faites les ensuite saisir dans une grande casserole
      chaude avec un filet d’huile d’arachide. Une fois qu’ils sont bien grillés, réservez.
    - Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que
      le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez
      pas à utiliser du jus de tomate du commerce pour la recette.
    - Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec
      environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et laissez mijoter.
    - Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec
      le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous
      aimez manger épicé, puis déposez les blancs de poulet dans la même casserole. Laissez
      mijoter à feu doux.
    - Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans
      la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le poulet
      et réservez. Conservez la sauce tomate pour la suite de la recette.
    - Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le
      ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites le cuire à
      feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus
      de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois,
      jusqu’à ce que le riz soit cuit.
    - Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat
      convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes,
      le poulet et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec
      vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur. Ajoutez les gousses d’ail et mixez le tout. Réservez."
      - "Cuisson. Salez et poivrez les filets de poulet. Faites-les ensuite saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois qu’ils sont bien grillés, réservez."
      - "Cuisson. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez pas à utiliser du jus de tomate du commerce pour la recette."
      - "Cuisson. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et [[mijoter|laissez mijoter]]."
      - "Cuisson. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous aimez manger épicé, puis déposez les blancs de poulet dans la même casserole. [[mijoter|Laissez mijoter]] à feu doux."
      - "Cuisson. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le poulet et réservez. Conservez la sauce tomate pour la suite de la recette."
      - "Cuisson. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites-le cuire à feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois, jusqu’à ce que le riz soit cuit."
      - "Finition. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le poulet et terminez avec un petit quartier de citron vert. Dégustez bien chaud avec vos proches. Bon appétit !"
      pro:
      - "Éplucher et couper grossièrement les oignons, les placer dans la cuve d’un mixeur. Ajouter les gousses d’ail et mixer. Réserver."
      - "Saler et poivrer les filets de poulet. Saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Bien grillés : réserver."
      - "Dans la même casserole, verser les oignons et l’ail mixés. Pendant que le mélange revient à feu doux, mixer les tomates. Hors saison : jus de tomate du commerce."
      - "Verser le mélange de tomate dans la casserole, avec l’oignon et l’ail. Compléter avec environ 50cl d’eau (sauf jus de tomate) et laisser mijoter."
      - "Éplucher les légumes et couper en gros morceaux. Placer dans la casserole avec le jus de tomate. Compléter avec de l’eau à hauteur. Option : piment oiseau. Déposer les blancs de poulet. Laisser mijoter à feu doux."
      - "Légumes cuits (pointe de couteau dans la chair) : retirer à l’écumoire. Retirer le poulet et réserver. Conserver la sauce tomate."
      - "Cuire le riz façon risotto : rincer à l’eau claire. Casserole, fond d’eau, un peu de sel, feu doux, couvercle. Quand le riz a bu l’eau, verser un peu de jus de cuisson à la tomate. Mélanger, couvrir. Répéter deux à trois fois jusqu’à cuisson."
      - "Dresser dans un grand plat : riz à la tomate, légumes, poulet, quartier de citron vert. Servir bien chaud."
      cavernes:
      - "Préparation. Oignons, éplucher, couper gros. Cuve mixeur. Gousses ail, ajouter. Tout, mixer. Réserver."
      - "Cuisson. Filets poulet, saler, poivrer. Grande casserole chaude, filet huile arachide, saisir. Bien grillés, réserver."
      - "Cuisson. Même casserole, oignons ail mixés, verser. Feu doux, revenir. Pendant, tomates, mixer. Hors saison : jus tomate commerce."
      - "Cuisson. Mélange tomate, casserole, oignon ail. Environ 50cl eau (sauf jus tomate), mijoter."
      - "Cuisson. Légumes, éplucher, gros morceaux. Casserole, jus tomate. Eau à hauteur. Option : piment oiseau. Blancs poulet, déposer. Feu doux, mijoter."
      - "Cuisson. Légumes cuits : pointe couteau, chair. Écumoire, retirer. Poulet, retirer, réserver. Sauce tomate, garder."
      - "Cuisson. Riz, façon risotto. Eau claire, rincer. Casserole, fond eau, peu sel, feu doux, couvercle. Eau bue : peu jus cuisson tomate, verser. Mélanger, couvrir. Deux à trois fois, jusqu’à cuit."
      - "Finition. Grand plat. Riz tomate, légumes, poulet, petit quartier citron vert. Chaud. Bon appétit."
    kcal_per_serving: 193
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
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"

---

# Thiep au poulet
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/thiep-au-poulet]]

## Ingrédients (4 personnes)

- 2 oignon blanc
- 10 gousse d'ail
- 4 blanc de poulet
-  huile d'arachide
- 2 tomate
- 2 carotte
- 2 pomme de terre
- 0.5 chou blanc
- 1 navet
- 1 racine de manioc
- 70 g de concentré de tomate
- 1 piment oiseau (facultatif)

## Préparation

1. Épluchez et coupez grossièrement les oignons, puis placez-les dans la cuve d’un mixeur. Ajoutez les gousses d’ail et mixez le tout. Réservez.
2. Salez et poivrez les filets de poulet. Faites les ensuite saisir dans une grande casserole chaude avec un filet d’huile d’arachide. Une fois qu’ils sont bien grillés, réservez.
3. Dans la même casserole, versez les oignons et l’ail préalablement mixés. Pendant que le mélange revient à feu doux, mixez les tomates. Lorsque ce n’est pas la saison, n’hésitez pas à utiliser du jus de tomate du commerce pour la recette.
4. Versez le mélange de tomate dans la casserole, avec l’oignon et l’ail. Complétez avec environ 50cl d’eau (sauf si vous utilisez du jus de tomate) et laissez mijoter.
5. Épluchez les légumes et coupez-les en gros morceaux. Placez-les dans la casserole avec le jus de tomate. Complétez avec de l’eau à hauteur. Ajoutez un piment oiseau si vous aimez manger épicé, puis déposez les blancs de poulet dans la même casserole. Laissez mijoter à feu doux.
6. Lorsque tous les légumes sont cuits (vérifiez en enfonçant la pointe d’un couteau dans la chair des légumes), retirez-les à l’aide d’un écumoire. Retirez également le poulet et réservez. Conservez la sauce tomate pour la suite de la recette.
7. Faites cuire le riz façon risotto. Pour cela, rincez le riz à l’eau claire. Placez-le ensuite dans une casserole avec un fond d’eau, un peu de sel, puis faites le cuire à feu doux avec un couvercle. Une fois que le riz a bu toute l’eau, versez un peu de jus de cuisson à la tomate. Mélangez, puis couvrez. Répétez l’opération deux à trois fois, jusqu’à ce que le riz soit cuit.
8. Vos ingrédients sont prêts, il ne reste plus qu’à dresser. Vous pouvez servir ce plat convivial dans un grand plat. Déposez d’abord le riz à la tomate, puis ajoutez les légumes, le poulet et terminez avec un petit quartier de citron vert.

 
 

 
 Dégustez bien chaud avec vos proches. Bon appétit !
