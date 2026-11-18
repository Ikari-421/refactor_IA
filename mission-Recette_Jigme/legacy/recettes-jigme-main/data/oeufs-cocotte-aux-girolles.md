---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: oeufs-cocotte-aux-girolles
title: Œufs cocotte aux girolles
lang: fr
description: "Œufs cocotte aux girolles : recette française avec œuf, girolles et tranche de jambon sec, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- œufs
- champignons
- œuf
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/oeufs-cocotte-aux-girolles.webp
  alt: Œufs cocotte aux girolles
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/oeufs-cocotte-aux-girolles.md
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
    note: 'Contient poisson (saumon fumé) : pas d’adaptation fiable.'
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
histoire: 'Œufs en cocotte : œufs cuits au four dans un petit pot, souvent au bain-marie. « œufs dans
  un petit pot », parfois sur une duxelles. Ici, girolles. Pas une recette datée : un geste de cuisine
  française.

  '
fun_facts:
- text: >
    Le jaune reste coulant si le blanc est juste pris : une minute de trop, et
    c’est un œuf dur en ramequin.
  source_name: Grokipedia, Ramekin
  source_url: https://grokipedia.com/page/Ramekin
- text: >
    Les girolles rendent de l’eau : on les sèche à la poêle avant, sinon l’œuf
    poché dans un bouillon.
  source_name: Usage
  source_url:
wines:
- name: Mâcon-Villages
  producer: Cave de Lugny
  origin: Mâcon, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc souple — l’œuf et la girolle, sans un fût marqué.
- name: Montagny
  producer: Cave de Buxy
  origin: Montagny-lès-Buxy, Bourgogne
  grapes: chardonnay
  award:
  why: Noisette — le jaune et le champignon.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Fruit léger — si l’on veut un rouge, tanin court à côté de l’œuf.
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
    - oeuf
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: girolles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de jambon sec
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème liquide
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
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement.
    - 'Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix.
      De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible
      aux champignons. Salez et poivrez selon l’envie.'
    - Cuisson. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches
      de jambon et répartissez-les au fond de vos ramequins.
    - Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore
      cuire quelques minutes à feu doux.
    - Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez
      le feu.
    - Cuisson. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon
      œuf au plat.
    - 'Finition. Ajoutez le reste des girolles au dessus, puis faites chauffer votre bain-marie sur
      le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C.
      C’est prêt ! Pour parfaire le tout, n’hésitez pas à ajouter un peu de ciboulette fraîche
      sur vos œufs cocotte tout juste sortis du four. Ensuite, vous savez ce qu’il vous reste
      à faire : une cuillère et à table !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement."
      - "Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix. De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible aux champignons. Salez et poivrez selon l’envie."
      - "Cuisson. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches de jambon et répartissez-les au fond de vos ramequins."
      - "Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore cuire quelques minutes à feu doux."
      - "Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez le feu."
      - "Cuisson. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon œuf au plat."
      - "Finition. Ajoutez le reste des girolles au-dessus, puis faites chauffer votre [[bain-marie|bain-marie]] sur le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C. Vous pouvez ajouter un peu de ciboulette fraîche sur vos œufs cocotte tout juste sortis du four."
      pro:
      - "Couper les girolles. Éplucher l’ail, hacher finement."
      - "Cuire les champignons à la matière grasse au choix. Conseil : graisse de canard. Saler, poivrer."
      - "Pendant la coloration, découper grossièrement les tranches de jambon. Répartir au fond des ramequins."
      - "En fin de cuisson des girolles, incorporer l’ail et la crème. Cuire encore quelques minutes à feu doux."
      - "Hacher la ciboulette très finement, ajouter dans la poêle. Mélanger. Couper le feu."
      - "Garnir les ramequins. Ajouter 2 œufs par ramequin, façon œuf au plat."
      - "Ajouter le reste des girolles au-dessus. Chauffer le bain-marie sur le feu. Eau bien chaude : enfourner 10 minutes à 160°C. Option : ciboulette fraîche en sortie de four."
      cavernes:
      - "Préparation. Girolles, couper. Ail, éplucher, hacher finement."
      - "Cuisson. Champignons, poêle, matière grasse, cuire. Graisse de canard, conseil. Sel, poivre, selon envie."
      - "Cuisson. Champignons, couleur. Tranches de jambon, découper grossièrement, fond ramequins, répartir."
      - "Cuisson. Fin cuisson girolles. Ail, crème, incorporer. Feu doux, quelques minutes, cuire."
      - "Cuisson. Ciboulette, hacher très finement, poêle, ajouter. Mélanger. Feu, couper."
      - "Cuisson. Ramequins, garnir. 2 œufs par ramequin, façon œuf-plat."
      - "Finition. Reste girolles, dessus. Bain-marie, feu, chauffer. Eau bien chaude. Four 10 min 160°C. Ciboulette fraîche, possible."
    kcal_per_serving: 675
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
    - lactose
    - produits_laitiers
    - oeuf
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: girolles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème liquide
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
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement.
    - 'Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix.
      De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible
      aux champignons. Salez et poivrez selon l’envie.'
    - Cuisson. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches
      de jambon et répartissez-les au fond de vos ramequins.
    - Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore
      cuire quelques minutes à feu doux.
    - Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez
      le feu.
    - Cuisson. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon
      œuf au plat.
    - 'Finition. Ajoutez le reste des girolles au dessus, puis faites chauffer votre bain-marie sur
      le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C.
      C’est prêt ! Pour parfaire le tout, n’hésitez pas à ajouter un peu de ciboulette fraîche
      sur vos œufs cocotte tout juste sortis du four. Ensuite, vous savez ce qu’il vous reste
      à faire : une cuillère et à table !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement."
      - "Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix. De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible aux champignons. Salez et poivrez selon l’envie."
      - "Cuisson. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches de jambon et répartissez-les au fond de vos ramequins."
      - "Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore cuire quelques minutes à feu doux."
      - "Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez le feu."
      - "Cuisson. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon œuf au plat."
      - "Finition. Ajoutez le reste des girolles au-dessus, puis faites chauffer votre [[bain-marie|bain-marie]] sur le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C. Vous pouvez ajouter un peu de ciboulette fraîche sur vos œufs cocotte tout juste sortis du four."
      pro:
      - "Couper les girolles. Éplucher l’ail, hacher finement."
      - "Cuire les champignons à la matière grasse au choix. Conseil : graisse de canard. Saler, poivrer."
      - "Pendant la coloration, découper grossièrement les tranches de jambon. Répartir au fond des ramequins."
      - "En fin de cuisson des girolles, incorporer l’ail et la crème. Cuire encore quelques minutes à feu doux."
      - "Hacher la ciboulette très finement, ajouter dans la poêle. Mélanger. Couper le feu."
      - "Garnir les ramequins. Ajouter 2 œufs par ramequin, façon œuf au plat."
      - "Ajouter le reste des girolles au-dessus. Chauffer le bain-marie sur le feu. Eau bien chaude : enfourner 10 minutes à 160°C. Option : ciboulette fraîche en sortie de four."
      cavernes:
      - "Préparation. Girolles, couper. Ail, éplucher, hacher finement."
      - "Cuisson. Champignons, poêle, matière grasse, cuire. Graisse de canard, conseil. Sel, poivre, selon envie."
      - "Cuisson. Champignons, couleur. Tranches de jambon, découper grossièrement, fond ramequins, répartir."
      - "Cuisson. Fin cuisson girolles. Ail, crème, incorporer. Feu doux, quelques minutes, cuire."
      - "Cuisson. Ciboulette, hacher très finement, poêle, ajouter. Mélanger. Feu, couper."
      - "Cuisson. Ramequins, garnir. 2 œufs par ramequin, façon œuf-plat."
      - "Finition. Reste girolles, dessus. Bain-marie, feu, chauffer. Eau bien chaude. Four 10 min 160°C. Ciboulette fraîche, possible."
    kcal_per_serving: 700
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
    - qty: 8
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: girolles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: jambon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème de soja ou avoine
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
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc (facultatif)
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
    - Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement.
    - 'Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix.
      Utilisez de l’huile d’olive ou de la margarine végétale. Salez et poivrez selon l’envie.'
    - Cuisson. Pendant que les champignons prennent de la couleur, découpez le jambon végétal et répartissez-le au fond des ramequins.
    - Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème de soja ou d’avoine. Laissez encore
      cuire quelques minutes à feu doux.
    - Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez
      le feu.
    - Cuisson. Garnissez vos ramequins avec la préparation, puis versez du tofu soyeux dans chaque ramequin (façon œuf cocotte).
    - 'Finition. Ajoutez le reste des girolles au dessus, puis faites chauffer votre bain-marie sur
      le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C.
      C’est prêt ! Pour parfaire le tout, n’hésitez pas à ajouter un peu de ciboulette fraîche
      sur les ramequins tout juste sortis du four. Ensuite, vous savez ce qu’il vous reste à faire : une cuillère
      et à table !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement."
      - "Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix. Utilisez de l’huile d’olive ou de la margarine végétale. Salez et poivrez selon l’envie."
      - "Cuisson. Pendant que les champignons prennent de la couleur, découpez le jambon végétal et répartissez-le au fond des ramequins."
      - "Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème de soja ou d’avoine. Laissez encore cuire quelques minutes à feu doux."
      - "Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez le feu."
      - "Cuisson. Garnissez vos ramequins avec la préparation, puis versez du tofu soyeux dans chaque ramequin (façon œuf cocotte)."
      - "Finition. Ajoutez le reste des girolles au-dessus, puis faites chauffer votre [[bain-marie|bain-marie]] sur le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C. Vous pouvez ajouter un peu de ciboulette fraîche sur les ramequins tout juste sortis du four."
      pro:
      - "Couper les girolles. Éplucher l’ail, hacher finement."
      - "Cuire les champignons à l’huile d’olive ou à la margarine végétale. Saler, poivrer."
      - "Pendant la coloration, découper le jambon végétal. Répartir au fond des ramequins."
      - "En fin de cuisson des girolles, incorporer l’ail et la crème de soja ou d’avoine. Cuire encore quelques minutes à feu doux."
      - "Hacher la ciboulette très finement, ajouter dans la poêle. Mélanger. Couper le feu."
      - "Garnir les ramequins. Verser du tofu soyeux dans chaque ramequin, façon œuf cocotte."
      - "Ajouter le reste des girolles au-dessus. Chauffer le bain-marie sur le feu. Eau bien chaude : enfourner 10 minutes à 160°C. Option : ciboulette fraîche en sortie de four."
      cavernes:
      - "Préparation. Girolles, couper. Ail, éplucher, hacher finement."
      - "Cuisson. Champignons, poêle, matière grasse, cuire. Huile d’olive ou margarine végétale. Sel, poivre, selon envie."
      - "Cuisson. Champignons, couleur. Jambon végétal, découper, fond ramequins, répartir."
      - "Cuisson. Fin cuisson girolles. Ail, crème de soja ou d’avoine, incorporer. Feu doux, quelques minutes, cuire."
      - "Cuisson. Ciboulette, hacher très finement, poêle, ajouter. Mélanger. Feu, couper."
      - "Cuisson. Ramequins, garnir. Tofu soyeux, chaque ramequin, façon œuf cocotte."
      - "Finition. Reste girolles, dessus. Bain-marie, feu, chauffer. Eau bien chaude. Four 10 min 160°C. Ciboulette fraîche, possible."
    kcal_per_serving: 330
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
    - oeuf
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: girolles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: ml
      item: crème liquide
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
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin blanc (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement.
    - 'Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix.
      De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible
      aux champignons. Salez et poivrez selon l’envie.'
    - Cuisson. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches
      de jambon et répartissez-les au fond de vos ramequins.
    - Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore
      cuire quelques minutes à feu doux.
    - Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez
      le feu.
    - Cuisson. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon
      œuf au plat.
    - 'Finition. Ajoutez le reste des girolles au dessus, puis faites chauffer votre bain-marie sur
      le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C.
      C’est prêt ! Pour parfaire le tout, n’hésitez pas à ajouter un peu de ciboulette fraîche
      sur vos œufs cocotte tout juste sortis du four. Ensuite, vous savez ce qu’il vous reste
      à faire : une cuillère et à table !'
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les girolles, épluchez l’ail et hachez-le finement."
      - "Cuisson. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix. De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible aux champignons. Salez et poivrez selon l’envie."
      - "Cuisson. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches de jambon et répartissez-les au fond de vos ramequins."
      - "Cuisson. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore cuire quelques minutes à feu doux."
      - "Cuisson. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez le feu."
      - "Cuisson. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon œuf au plat."
      - "Finition. Ajoutez le reste des girolles au-dessus, puis faites chauffer votre [[bain-marie|bain-marie]] sur le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C. Vous pouvez ajouter un peu de ciboulette fraîche sur vos œufs cocotte tout juste sortis du four."
      pro:
      - "Couper les girolles. Éplucher l’ail, hacher finement."
      - "Cuire les champignons à la matière grasse au choix. Conseil : graisse de canard. Saler, poivrer."
      - "Pendant la coloration, découper grossièrement les tranches de jambon. Répartir au fond des ramequins."
      - "En fin de cuisson des girolles, incorporer l’ail et la crème. Cuire encore quelques minutes à feu doux."
      - "Hacher la ciboulette très finement, ajouter dans la poêle. Mélanger. Couper le feu."
      - "Garnir les ramequins. Ajouter 2 œufs par ramequin, façon œuf au plat."
      - "Ajouter le reste des girolles au-dessus. Chauffer le bain-marie sur le feu. Eau bien chaude : enfourner 10 minutes à 160°C. Option : ciboulette fraîche en sortie de four."
      cavernes:
      - "Préparation. Girolles, couper. Ail, éplucher, hacher finement."
      - "Cuisson. Champignons, poêle, matière grasse, cuire. Graisse de canard, conseil. Sel, poivre, selon envie."
      - "Cuisson. Champignons, couleur. Tranches de jambon, découper grossièrement, fond ramequins, répartir."
      - "Cuisson. Fin cuisson girolles. Ail, crème, incorporer. Feu doux, quelques minutes, cuire."
      - "Cuisson. Ciboulette, hacher très finement, poêle, ajouter. Mélanger. Feu, couper."
      - "Cuisson. Ramequins, garnir. 2 œufs par ramequin, façon œuf-plat."
      - "Finition. Reste girolles, dessus. Bain-marie, feu, chauffer. Eau bien chaude. Four 10 min 160°C. Ciboulette fraîche, possible."
    kcal_per_serving: 815
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
  vegetarienne:
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
  vegan:
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
  pesco:
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème"
---

# Œufs cocotte aux girolles

![[oeufs-cocotte-aux-girolles.webp]]
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/oeufs-cocotte-aux-girolles]]

## Ingrédients (4 personnes)

- 8 œuf
- 350 g de girolles
- 4 tranche de jambon sec
- 60 cl de crème liquide
- 2 gousse d'ail
-  ciboulette
-  vin blanc (facultatif)

## Préparation

1. Coupez les girolles, épluchez l’ail et hachez-le finement.
2. Faites cuire les champignons dans une poêle contenant la matière grasse de votre choix. De notre côté, on vous conseille la graisse de canard : elle donnera une saveur irrésistible aux champignons. Salez et poivrez selon l’envie.
3. Pendant que les champignons prennent de la couleur, découpez grossièrement vos tranches de jambon et répartissez-les au fond de vos ramequins.
4. Vers la fin de la cuisson des girolles, incorporez l’ail et la crème. Laissez encore cuire quelques minutes à feu doux.
5. Hachez la ciboulette très finement et ajoutez-la dans la poêle. Mélangez, puis coupez le feu.
6. Garnissez vos ramequins avec la préparation, puis ajoutez 2 œufs par ramequin, façon œuf au plat.
7. Ajoutez le reste des girolles au dessus, puis faites chauffer votre bain-marie sur le feu. Une fois l’eau bien chaude, placez le tout au four pendant 10 minutes à 160°C.

 
 

 
 C’est prêt ! Pour parfaire le tout, n’hésitez pas à ajouter un peu de ciboulette fraîche sur vos œufs cocotte tout juste sortis du four. Ensuite, vous savez ce qu’il vous reste à faire : une cuillère et à table !
