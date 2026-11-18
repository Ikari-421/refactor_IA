---
schema: recette-web-jigme/v2
slug: tartiflette
title: Tartiflette
lang: fr
description: "Tartiflette : recette française avec pommes de terre, lard entier et reblochon, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- reblochon
- Savoie
- hiver
- lard
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tartiflette.webp
  alt: Tartiflette
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tartiflette.md
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
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Le reblochon est l’ingrédient central : pas de substitut honnête.'
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Le reblochon est l’ingrédient central : pas de substitut honnête.'
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
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu fumé → pois chiches rôtis.'
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
  Gratin savoyard de pommes de terre, lardons, oignons et reblochon. Plat d’hiver
  de Haute-Savoie, collé au fromage. On raconte une création récente, dans les
  années 1980, à partir d’un plat plus ancien, la péla.
fun_facts:
- text: >
    Le reblochon se pose croûte vers le haut ou fendu : trop bas, il noie les
    pommes de terre.
  source_name: Grokipedia, Reblochon
  source_url: https://grokipedia.com/page/Reblochon
- text: >
    Un vin blanc pour déglacer les oignons : trop, et le gratin nage.
  source_name: Usage
  source_url:
wines:
- name: Apremont
  producer: Jean Perrier et Fils
  origin: Apremont, Savoie
  grapes: jacquère
  award:
  why: Jacquère, poire — le reblochon, voisin de montagne.
- name: Roussette de Savoie
  producer: Domaine Dupasquier
  origin: Savoie
  grapes: altesse
  award:
  why: Blanc de Savoie — le gratin, plus de corps.
- name: Mondeuse
  producer: Louis Magnin
  origin: Arbin, Savoie
  grapes: mondeuse
  award:
  why: Mondeuse, poivre — les lardons, un rouge de Savoie.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - sulfites
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
    - casserole
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: lard entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: reblochon
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: vin blanc sec (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ
      à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de
      terre.
    - Cuisson. Pendant ce temps, tranchez votre lard grossièrement et retirez les parties cartilagineuses.
      Réservez.
    - Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre
      sont cuites, débarrassez puis laissez-les refroidir.
    - Cuisson. Dans une grande casserole chaude, faites cuire vos lardons. Lorsqu’ils sont bien colorés,
      ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, déglacez
      au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez
      le fond de la casserole afin de décoller le sucs de cuisson riches en goût.
    - Cuisson. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit
      chapeau » à votre reblochon de 1 ou 2cm max. Celui-ci servira pour la décoration. Coupez
      le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles.
    - Cuisson. C’est le moment du montage ! Beurrez votre plat, puis déposez-y une première couche
      de pommes de terre. Parsemez du mélange lardons-oignon-ail, puis déposez quelques tranches
      de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients.
    - Finition. Pour ceux qui aiment, n’hésitez pas à ajouter une ou deux c.à.s de vin blanc à la fin.
      Enfin, déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez le tout à
      170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30min
      environ). Votre tartiflette est prête et ça doit sentir dans toute la cuisine (voire
      la maison) ! Servez bien chaud et déguster avec vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Cuisson. Pendant ce temps, tranchez votre lard grossièrement et retirez les parties cartilagineuses. Réservez."
      - "Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrassez puis laissez-les refroidir."
      - "Cuisson. Dans une grande casserole chaude, faites cuire vos lardons. Lorsqu’ils sont bien colorés, ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, [[deglacer|déglacez]] au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez le fond de la casserole afin de décoller les sucs de cuisson riches en goût."
      - "Cuisson. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit chapeau » à votre reblochon de 1 ou 2 cm max. Celui-ci servira pour la décoration. Coupez le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles."
      - "Cuisson. Beurrez votre plat, puis déposez-y une première couche de pommes de terre. Parsemez du mélange lardons-oignon-ail, puis déposez quelques tranches de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients."
      - "Finition. Si vous aimez, ajoutez une ou deux c.à.s de vin blanc à la fin. Déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez à 170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30 min environ). Servez bien chaud."
      pro:
      - "Éplucher les pommes de terre et les cuire dans une grande casserole d’eau (départ à froid). Surveiller la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Trancher le lard grossièrement et retirer les parties cartilagineuses. Réserver."
      - "Éplucher et tailler finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrasser puis les laisser refroidir."
      - "Dans une grande casserole chaude, cuire les lardons. Une fois bien colorés, ajouter l’ail et l’oignon. Mélanger. Oignons translucides : déglacer au vin blanc (idéalement vin de Savoie). Gratter le fond à la spatule en bois pour décoller les sucs."
      - "Vin évaporé : retirer un « petit chapeau » au reblochon de 1 ou 2 cm max, pour la décoration. Couper le reste du fromage en tranches. Couper les pommes de terre en lamelles."
      - "Beurrer le plat. Première couche de pommes de terre, mélange lardons-oignon-ail, quelques tranches de reblochon. Réitérer jusqu’à épuisement des ingrédients."
      - "Option : une ou deux c.à.s de vin blanc à la fin. Déposer le « chapeau » du reblochon, croûte vers le haut. Enfourner à 170°C jusqu’à reblochon fondu et croûte grillée (20-30 min environ). Servir bien chaud."
      cavernes:
      - "Cuisson. Pommes de terre, éplucher. Grande casserole eau, départ froid, cuire. Pointe couteau, piquer, surveiller."
      - "Cuisson. Lard, gros, trancher. Parties cartilagineuses, retirer. Réserver."
      - "Cuisson. Oignon, gousse ail, éplucher, tailler fin. Pommes de terre cuites, débarrasser, refroidir."
      - "Cuisson. Grande casserole chaude. Lardons, cuire, colorer. Ail, oignon, ajouter, mélanger. Oignons translucides. Vin blanc, idéalement Savoie, déglacer. Spatule bois, fond, sucs, gratter."
      - "Cuisson. Vin évaporé. Reblochon, petit chapeau 1 ou 2 cm max, retirer, déco. Reste fromage, tranches. Pommes de terre, lamelles."
      - "Cuisson. Plat, beurrer. Couche pommes de terre. Mélange lardons-oignon-ail, parsemer. Tranches reblochon. Répéter jusqu’à tout."
      - "Finition. Option : 1 ou 2 c.à.s vin blanc, fin. Chapeau reblochon, croûte haut. Four 170°C, 20-30 min environ. Reblochon fondu, croûte grillée. Servir chaud."
    kcal_per_serving: 267
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
    - sulfites
    - lactose
    - produits_laitiers
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: reblochon
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: vin blanc sec (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ
      à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de
      terre.
    - Cuisson. Pendant ce temps, tranchez votre tofu fumé grossièrement et retirez les parties cartilagineuses.
      Réservez.
    - Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre
      sont cuites, débarrassez puis laissez-les refroidir.
    - Cuisson. Dans une grande casserole chaude, faites cuire vos tofu fumé. Lorsqu’ils sont bien colorés,
      ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, déglacez
      au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez
      le fond de la casserole afin de décoller le sucs de cuisson riches en goût.
    - Cuisson. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit
      chapeau » à votre reblochon de 1 ou 2cm max. Celui-ci servira pour la décoration. Coupez
      le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles.
    - Cuisson. C’est le moment du montage ! Beurrez votre plat, puis déposez-y une première couche
      de pommes de terre. Parsemez du mélange tofu fumé-oignon-ail, puis déposez quelques
      tranches de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients.
    - Finition. Pour ceux qui aiment, n’hésitez pas à ajouter une ou deux c.à.s de vin blanc à la fin.
      Enfin, déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez le tout à
      170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30min
      environ). Votre tartiflette est prête et ça doit sentir dans toute la cuisine (voire
      la maison) ! Servez bien chaud et déguster avec vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Cuisson. Pendant ce temps, tranchez votre tofu fumé grossièrement et retirez les parties cartilagineuses. Réservez."
      - "Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrassez puis laissez-les refroidir."
      - "Cuisson. Dans une grande casserole chaude, faites cuire vos tofu fumé. Lorsqu’ils sont bien colorés, ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, [[deglacer|déglacez]] au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez le fond de la casserole afin de décoller les sucs de cuisson riches en goût."
      - "Cuisson. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit chapeau » à votre reblochon de 1 ou 2 cm max. Celui-ci servira pour la décoration. Coupez le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles."
      - "Cuisson. Beurrez votre plat, puis déposez-y une première couche de pommes de terre. Parsemez du mélange tofu fumé-oignon-ail, puis déposez quelques tranches de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients."
      - "Finition. Si vous aimez, ajoutez une ou deux c.à.s de vin blanc à la fin. Déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez à 170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30 min environ). Servez bien chaud."
      pro:
      - "Éplucher les pommes de terre et les cuire dans une grande casserole d’eau (départ à froid). Surveiller la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Trancher le tofu fumé grossièrement et retirer les parties cartilagineuses. Réserver."
      - "Éplucher et tailler finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrasser puis les laisser refroidir."
      - "Dans une grande casserole chaude, cuire le tofu fumé. Une fois bien coloré, ajouter l’ail et l’oignon. Mélanger. Oignons translucides : déglacer au vin blanc (idéalement vin de Savoie). Gratter le fond à la spatule en bois pour décoller les sucs."
      - "Vin évaporé : retirer un « petit chapeau » au reblochon de 1 ou 2 cm max, pour la décoration. Couper le reste du fromage en tranches. Couper les pommes de terre en lamelles."
      - "Beurrer le plat. Première couche de pommes de terre, mélange tofu fumé-oignon-ail, quelques tranches de reblochon. Réitérer jusqu’à épuisement des ingrédients."
      - "Option : une ou deux c.à.s de vin blanc à la fin. Déposer le « chapeau » du reblochon, croûte vers le haut. Enfourner à 170°C jusqu’à reblochon fondu et croûte grillée (20-30 min environ). Servir bien chaud."
      cavernes:
      - "Cuisson. Pommes de terre, éplucher. Grande casserole eau, départ froid, cuire. Pointe couteau, piquer, surveiller."
      - "Cuisson. Tofu fumé, gros, trancher. Parties cartilagineuses, retirer. Réserver."
      - "Cuisson. Oignon, gousse ail, éplucher, tailler fin. Pommes de terre cuites, débarrasser, refroidir."
      - "Cuisson. Grande casserole chaude. Tofu fumé, cuire, colorer. Ail, oignon, ajouter, mélanger. Oignons translucides. Vin blanc, idéalement Savoie, déglacer. Spatule bois, fond, sucs, gratter."
      - "Cuisson. Vin évaporé. Reblochon, petit chapeau 1 ou 2 cm max, retirer, déco. Reste fromage, tranches. Pommes de terre, lamelles."
      - "Cuisson. Plat, beurrer. Couche pommes de terre. Mélange tofu fumé-oignon-ail, parsemer. Tranches reblochon. Répéter jusqu’à tout."
      - "Finition. Option : 1 ou 2 c.à.s vin blanc, fin. Chapeau reblochon, croûte haut. Four 170°C, 20-30 min environ. Reblochon fondu, croûte grillée. Servir chaud."
    kcal_per_serving: 267
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: lardons de tempeh fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: fromage végétal à croûte
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: vin blanc sec (facultatif)
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
    steps:
    - Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ
      à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de
      terre.
    - Dressage. Pendant ce temps, découpez le tempeh fumé en lardons. Réservez.
    - Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre
      sont cuites, débarrassez puis laissez-les refroidir.
    - Cuisson. Dans une grande casserole chaude, faites cuire les lardons de tempeh. Lorsqu’ils sont bien colorés,
      ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, déglacez
      au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez
      le fond de la casserole afin de décoller le sucs de cuisson riches en goût.
    - Cuisson. Une fois que le vin s’est évaporé, coupez le fromage végétal en tranches. Gardez quelques morceaux pour le dessus. De même, coupez les pommes de terre en lamelles.
    - Mélange. C’est le moment du montage ! Graissez votre plat avec de la margarine végétale, puis une couche de pommes de terre, le mélange tempeh-oignon-ail, et des tranches de fromage végétal. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients.
    - Finition. Pour ceux qui aiment, n’hésitez pas à ajouter une ou deux c.à.s de vin blanc à la fin.
      Enfin, déposez le reste de fromage végétal. Enfournez à 170°C jusqu’à ce que le fromage soit fondu et gratiné (20-30 min). C’est prêt et ça doit sentir dans toute la cuisine (voire
      la maison) ! Servez bien chaud et déguster avec vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Dressage. Pendant ce temps, découpez le tempeh fumé en lardons. Réservez."
      - "Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrassez puis laissez-les refroidir."
      - "Cuisson. Dans une grande casserole chaude, faites cuire les lardons de tempeh. Lorsqu’ils sont bien colorés, ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, [[deglacer|déglacez]] au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez le fond de la casserole afin de décoller les sucs de cuisson riches en goût."
      - "Cuisson. Une fois que le vin s’est évaporé, coupez le fromage végétal en tranches. Gardez quelques morceaux pour le dessus. De même, coupez les pommes de terre en lamelles."
      - "Mélange. Graissez votre plat avec de la margarine végétale, puis une couche de pommes de terre, le mélange tempeh-oignon-ail, et des tranches de fromage végétal. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients."
      - "Finition. Si vous aimez, ajoutez une ou deux c.à.s de vin blanc à la fin. Déposez le reste de fromage végétal. Enfournez à 170°C jusqu’à ce que le fromage soit fondu et gratiné (20-30 min). Servez bien chaud."
      pro:
      - "Éplucher les pommes de terre et les cuire dans une grande casserole d’eau (départ à froid). Surveiller la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Découper le tempeh fumé en lardons. Réserver."
      - "Éplucher et tailler finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrasser puis les laisser refroidir."
      - "Dans une grande casserole chaude, cuire les lardons de tempeh. Une fois bien colorés, ajouter l’ail et l’oignon. Mélanger. Oignons translucides : déglacer au vin blanc (idéalement vin de Savoie). Gratter le fond à la spatule en bois pour décoller les sucs."
      - "Vin évaporé : couper le fromage végétal en tranches. Garder quelques morceaux pour le dessus. Couper les pommes de terre en lamelles."
      - "Graisser le plat avec de la margarine végétale. Couche de pommes de terre, mélange tempeh-oignon-ail, tranches de fromage végétal. Réitérer jusqu’à épuisement des ingrédients."
      - "Option : une ou deux c.à.s de vin blanc à la fin. Déposer le reste de fromage végétal. Enfourner à 170°C jusqu’à fromage fondu et gratiné (20-30 min). Servir bien chaud."
      cavernes:
      - "Cuisson. Pommes de terre, éplucher. Grande casserole eau, départ froid, cuire. Pointe couteau, piquer, surveiller."
      - "Dressage. Tempeh fumé, lardons, découper. Réserver."
      - "Cuisson. Oignon, gousse ail, éplucher, tailler fin. Pommes de terre cuites, débarrasser, refroidir."
      - "Cuisson. Grande casserole chaude. Lardons tempeh, cuire, colorer. Ail, oignon, ajouter, mélanger. Oignons translucides. Vin blanc, idéalement Savoie, déglacer. Spatule bois, fond, sucs, gratter."
      - "Cuisson. Vin évaporé. Fromage végétal, tranches. Peu morceaux, dessus, garder. Pommes de terre, lamelles."
      - "Mélange. Plat, margarine végétale, graisser. Couche pommes de terre. Mélange tempeh-oignon-ail. Tranches fromage végétal. Répéter jusqu’à tout."
      - "Finition. Option : 1 ou 2 c.à.s vin blanc, fin. Reste fromage végétal, déposer. Four 170°C, 20-30 min. Fromage fondu, gratiné. Servir chaud."
    kcal_per_serving: 267
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
    - sulfites
    - lactose
    - produits_laitiers
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: pommes de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: reblochon
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
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: ml
      item: vin blanc sec (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ
      à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de
      terre.
    - Cuisson. Pendant ce temps, tranchez votre tofu fumé grossièrement et retirez les parties cartilagineuses.
      Réservez.
    - Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre
      sont cuites, débarrassez puis laissez-les refroidir.
    - Cuisson. Dans une grande casserole chaude, faites cuire vos tofu fumé. Lorsqu’ils sont bien colorés,
      ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, déglacez
      au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez
      le fond de la casserole afin de décoller le sucs de cuisson riches en goût.
    - Cuisson. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit
      chapeau » à votre reblochon de 1 ou 2cm max. Celui-ci servira pour la décoration. Coupez
      le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles.
    - Cuisson. C’est le moment du montage ! Beurrez votre plat, puis déposez-y une première couche
      de pommes de terre. Parsemez du mélange tofu fumé-oignon-ail, puis déposez quelques
      tranches de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients.
    - Finition. Pour ceux qui aiment, n’hésitez pas à ajouter une ou deux c.à.s de vin blanc à la fin.
      Enfin, déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez le tout à
      170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30min
      environ). Votre tartiflette est prête et ça doit sentir dans toute la cuisine (voire
      la maison) ! Servez bien chaud et déguster avec vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Cuisson. Pendant ce temps, tranchez votre tofu fumé grossièrement et retirez les parties cartilagineuses. Réservez."
      - "Cuisson. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrassez puis laissez-les refroidir."
      - "Cuisson. Dans une grande casserole chaude, faites cuire vos tofu fumé. Lorsqu’ils sont bien colorés, ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, [[deglacer|déglacez]] au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez le fond de la casserole afin de décoller les sucs de cuisson riches en goût."
      - "Cuisson. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit chapeau » à votre reblochon de 1 ou 2 cm max. Celui-ci servira pour la décoration. Coupez le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles."
      - "Cuisson. Beurrez votre plat, puis déposez-y une première couche de pommes de terre. Parsemez du mélange tofu fumé-oignon-ail, puis déposez quelques tranches de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients."
      - "Finition. Si vous aimez, ajoutez une ou deux c.à.s de vin blanc à la fin. Déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez à 170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30 min environ). Servez bien chaud."
      pro:
      - "Éplucher les pommes de terre et les cuire dans une grande casserole d’eau (départ à froid). Surveiller la cuisson en piquant la pointe d’un couteau dans une pomme de terre."
      - "Trancher le tofu fumé grossièrement et retirer les parties cartilagineuses. Réserver."
      - "Éplucher et tailler finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrasser puis les laisser refroidir."
      - "Dans une grande casserole chaude, cuire le tofu fumé. Une fois bien coloré, ajouter l’ail et l’oignon. Mélanger. Oignons translucides : déglacer au vin blanc (idéalement vin de Savoie). Gratter le fond à la spatule en bois pour décoller les sucs."
      - "Vin évaporé : retirer un « petit chapeau » au reblochon de 1 ou 2 cm max, pour la décoration. Couper le reste du fromage en tranches. Couper les pommes de terre en lamelles."
      - "Beurrer le plat. Première couche de pommes de terre, mélange tofu fumé-oignon-ail, quelques tranches de reblochon. Réitérer jusqu’à épuisement des ingrédients."
      - "Option : une ou deux c.à.s de vin blanc à la fin. Déposer le « chapeau » du reblochon, croûte vers le haut. Enfourner à 170°C jusqu’à reblochon fondu et croûte grillée (20-30 min environ). Servir bien chaud."
      cavernes:
      - "Cuisson. Pommes de terre, éplucher. Grande casserole eau, départ froid, cuire. Pointe couteau, piquer, surveiller."
      - "Cuisson. Tofu fumé, gros, trancher. Parties cartilagineuses, retirer. Réserver."
      - "Cuisson. Oignon, gousse ail, éplucher, tailler fin. Pommes de terre cuites, débarrasser, refroidir."
      - "Cuisson. Grande casserole chaude. Tofu fumé, cuire, colorer. Ail, oignon, ajouter, mélanger. Oignons translucides. Vin blanc, idéalement Savoie, déglacer. Spatule bois, fond, sucs, gratter."
      - "Cuisson. Vin évaporé. Reblochon, petit chapeau 1 ou 2 cm max, retirer, déco. Reste fromage, tranches. Pommes de terre, lamelles."
      - "Cuisson. Plat, beurrer. Couche pommes de terre. Mélange tofu fumé-oignon-ail, parsemer. Tranches reblochon. Répéter jusqu’à tout."
      - "Finition. Option : 1 ou 2 c.à.s vin blanc, fin. Chapeau reblochon, croûte haut. Four 170°C, 20-30 min environ. Reblochon fondu, croûte grillée. Servir chaud."
    kcal_per_serving: 267
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegetarienne:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  vegan:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
  pesco:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
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

# Tartiflette

![[tartiflette.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tartiflette]]

## Ingrédients (4 personnes)

- 1 kg de pommes de terre
- 200 g de lard entier
- 1 reblochon
- 1 oignon
- 1 gousse d'ail
- 15 cl de vin blanc sec (facultatif)

## Préparation

1. Épluchez les pommes de terre et faites-les cuire dans une grande casserole d’eau (départ à froid). Surveillez la cuisson en piquant la pointe d’un couteau dans une pomme de terre.
2. Pendant ce temps, tranchez votre lard grossièrement et retirez les parties cartilagineuses. Réservez.
3. Épluchez et taillez finement l’oignon et la gousse d’ail. Quand les pommes de terre sont cuites, débarrassez puis laissez-les refroidir.
4. Dans une grande casserole chaude, faites cuire vos lardons. Lorsqu’ils sont bien colorés, ajoutez l’ail et l’oignon. Mélangez. Une fois que les oignons sont translucides, déglacez au vin blanc (idéalement, du vin de Savoie). À l’aide d’une spatule en bois, grattez le fond de la casserole afin de décoller le sucs de cuisson riches en goût.
5. Une fois que le vin s’est évaporé, passez à la découpe du fromage. Retirez un « petit chapeau » à votre reblochon de 1 ou 2cm max. Celui-ci servira pour la décoration. Coupez le reste du fromage en tranches. De même, coupez les pommes de terre en lamelles.
6. C’est le moment du montage ! Beurrez votre plat, puis déposez-y une première couche de pommes de terre. Parsemez du mélange lardons-oignon-ail, puis déposez quelques tranches de reblochon. Réitérez l’opération jusqu’à avoir utilisé tous les ingrédients.
7. Pour ceux qui aiment, n’hésitez pas à ajouter une ou deux c.à.s de vin blanc à la fin. Enfin, déposez le « chapeau » du reblochon, croûte vers le haut. Enfournez le tout à 170°C jusqu’à ce que le reblochon soit fondu et que sa croûte soit bien grillée (20-30min environ).

 
 

 
 Votre tartiflette est prête et ça doit sentir dans toute la cuisine (voire la maison) ! Servez bien chaud et déguster avec vos proches. Bon appétit !
