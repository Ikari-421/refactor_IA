---
schema: recette-web-jigme/v2
slug: quinotto
title: Quinotto
lang: fr
description: "Quinotto : recette italienne avec quinoa, oignon et gousse d'ail, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: fusion
category: salé
tags:
- salé
- risotto
- végétarien
- quinoa
image:
  url:
  alt: Quinotto
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/quinotto.md
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
    - from: parmesan
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
histoire: 'Quinotto : quinoa cuit comme un risotto (petit à petit de bouillon, crémeux). Le quinoa est
  andin ; le risotto, italien du nord. Le mot-valise est contemporain, pas un plat péruvien daté.

  '
fun_facts:
- text: >
    Le quinoa se rince : la saponine amertume si on saute cette étape.
  source_name: Grokipedia, Quinoa
  source_url: https://grokipedia.com/page/Quinoa
- text: >
    Moins d’amidon que le riz arborio : on n’obtient pas le même filant, on lie
    parfois avec du fromage.
  source_name: Usage
  source_url:
wines:
- name: Côtes du Rhône
  producer: Famille Perrin
  origin: Orange, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — le quinoa aux légumes, tanin souple.
- name: Soave
  producer: Cantina di Soave
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Blanc d’amande — si le quinotto est plutôt fromage et herbes.
- name: Côtes de Provence
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — un plat de grains, sans un barolo.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: quinoa
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
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
    - qty: 90
      unit: g
      item: parmesan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: asperges vertes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le
      ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il
      soit al-dente. Une fois cuit, réservez.
    - Cuisson. Pendant ce temps, épluchez et coupez l’oignon et l’ail.
    - Cuisson. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez
      cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau
      glacée afin de stopper la cuisson et de fixer la couleur verte.
    - Cuisson. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale.
      Complétez avec le quinoa et du parmesan râpé. Salez, poivrez et laissez cuire à feu
      doux en mélangeant régulièrement. Si jamais le mélange vous paraît trop sec, rajoutez
      un peu d’eau. Le tout doit être bien crémeux, comme un risotto.
    - Dressage. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges,
      quelques feuilles de roquette ainsi que des copeaux de parmesan. Vous pouvez finaliser
      votre quinotto avec un filet d’huile d’olive et le déguster bien chaud. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il soit tendre mais encore légèrement ferme. Une fois cuit, réservez."
      - "Cuisson. Pendant ce temps, épluchez et coupez l’oignon et l’ail."
      - "Cuisson. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau glacée afin de stopper la cuisson et de fixer la couleur verte."
      - "Cuisson. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale. Complétez avec le quinoa et du parmesan [[raper|râpé]]. Salez, poivrez et laissez cuire à feu doux en mélangeant régulièrement. Si jamais le mélange vous paraît trop sec, rajoutez un peu d’eau. Le tout doit être bien crémeux, comme un risotto."
      - "Dressage. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges, quelques feuilles de roquette ainsi que des copeaux de parmesan. Vous pouvez finaliser votre quinotto avec un filet d’huile d’olive et le déguster bien chaud. Bon appétit !"
      pro:
      - "Rincer le quinoa plusieurs fois à l’eau claire. Transvaser en casserole avec de l’eau. Cuire à feu moyen jusqu’à tendre mais encore légèrement ferme. Réserver."
      - "Éplucher et couper l’oignon et l’ail."
      - "Retirer le pied des asperges. Placer les têtes dans de l’eau bouillante salée. Cuire jusqu’à tendreté. Plonger dans de l’eau glacée pour stopper la cuisson et fixer la couleur verte."
      - "Faire revenir l’ail et l’oignon avec un filet d’huile végétale. Compléter avec le quinoa et du parmesan râpé. Saler, poivrer. Cuire à feu doux en mélangeant régulièrement. Si le mélange est trop sec, rajouter un peu d’eau. Texture crémeuse, type risotto."
      - "Dresser le quinotto en assiette creuse. Ajouter asperges, quelques feuilles de roquette et copeaux de parmesan. Finaliser d’un filet d’huile d’olive. Déguster chaud."
      cavernes:
      - "Préparation. Quinoa, récipient, rincer plusieurs fois eau claire. Transvaser casserole eau. Cuire feu moyen jusqu’à tendre, encore légèrement ferme. Cuit, réserver."
      - "Cuisson. Pendant ce temps, oignon, ail, éplucher, couper."
      - "Cuisson. Pied asperges, retirer. Têtes, eau bouillante salée. Cuire jusqu’à tendres. Eau glacée, plonger. Stop cuisson, couleur verte fixée."
      - "Cuisson. Autre casserole. Ail, oignon, filet huile végétale, faire revenir. Quinoa, parmesan râpé, compléter. Saler, poivrer. Feu doux, mélanger régulièrement. Si mélange trop sec, peu eau, rajouter. Crémeux, type risotto."
      - "Dressage. Quinotto, assiette creuse. Asperges, feuilles roquette, copeaux parmesan. Option : filet huile olive. Déguster chaud."
    kcal_per_serving: 137
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: quinoa
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
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
    - qty: 90
      unit: g
      item: grana (présure microbienne)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: asperges vertes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le
      ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il
      soit al-dente. Une fois cuit, réservez.
    - Cuisson. Pendant ce temps, épluchez et coupez l’oignon et l’ail.
    - Cuisson. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez
      cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau
      glacée afin de stopper la cuisson et de fixer la couleur verte.
    - Cuisson. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale.
      Complétez avec le quinoa et du grana (présure microbienne) râpé. Salez, poivrez et laissez cuire à feu
      doux en mélangeant régulièrement. Si jamais le mélange vous paraît trop sec, rajoutez
      un peu d’eau. Le tout doit être bien crémeux, comme un risotto.
    - Dressage. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges,
      quelques feuilles de roquette ainsi que des copeaux de grana (présure microbienne). Vous pouvez finaliser
      votre quinotto avec un filet d’huile d’olive et le déguster bien chaud. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il soit tendre mais encore légèrement ferme. Une fois cuit, réservez."
      - "Cuisson. Pendant ce temps, épluchez et coupez l’oignon et l’ail."
      - "Cuisson. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau glacée afin de stopper la cuisson et de fixer la couleur verte."
      - "Cuisson. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale. Complétez avec le quinoa et du grana (présure microbienne) [[raper|râpé]]. Salez, poivrez et laissez cuire à feu doux en mélangeant régulièrement. Si jamais le mélange vous paraît trop sec, rajoutez un peu d’eau. Le tout doit être bien crémeux, comme un risotto."
      - "Dressage. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges, quelques feuilles de roquette ainsi que des copeaux de grana (présure microbienne). Vous pouvez finaliser votre quinotto avec un filet d’huile d’olive et le déguster bien chaud. Bon appétit !"
      pro:
      - "Rincer le quinoa plusieurs fois à l’eau claire. Transvaser en casserole avec de l’eau. Cuire à feu moyen jusqu’à tendre mais encore légèrement ferme. Réserver."
      - "Éplucher et couper l’oignon et l’ail."
      - "Retirer le pied des asperges. Placer les têtes dans de l’eau bouillante salée. Cuire jusqu’à tendreté. Plonger dans de l’eau glacée pour stopper la cuisson et fixer la couleur verte."
      - "Faire revenir l’ail et l’oignon avec un filet d’huile végétale. Compléter avec le quinoa et du grana (présure microbienne) râpé. Saler, poivrer. Cuire à feu doux en mélangeant régulièrement. Si le mélange est trop sec, rajouter un peu d’eau. Texture crémeuse, type risotto."
      - "Dresser le quinotto en assiette creuse. Ajouter asperges, quelques feuilles de roquette et copeaux de grana (présure microbienne). Finaliser d’un filet d’huile d’olive. Déguster chaud."
      cavernes:
      - "Préparation. Quinoa, récipient, rincer plusieurs fois eau claire. Transvaser casserole eau. Cuire feu moyen jusqu’à tendre, encore légèrement ferme. Cuit, réserver."
      - "Cuisson. Pendant ce temps, oignon, ail, éplucher, couper."
      - "Cuisson. Pied asperges, retirer. Têtes, eau bouillante salée. Cuire jusqu’à tendres. Eau glacée, plonger. Stop cuisson, couleur verte fixée."
      - "Cuisson. Autre casserole. Ail, oignon, filet huile végétale, faire revenir. Quinoa, grana (présure microbienne) râpé, compléter. Saler, poivrer. Feu doux, mélanger régulièrement. Si mélange trop sec, peu eau, rajouter. Crémeux, type risotto."
      - "Dressage. Quinotto, assiette creuse. Asperges, feuilles roquette, copeaux grana (présure microbienne). Option : filet huile olive. Déguster chaud."
    kcal_per_serving: 137
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
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: quinoa
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
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
    - qty: 90
      unit: g
      item: parmesan végétal ou levure maltée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: roquette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: asperges vertes
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le
      ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il
      soit al-dente. Une fois cuit, réservez.
    - Cuisson. Pendant ce temps, épluchez et coupez l’oignon et l’ail.
    - Cuisson. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez
      cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau
      glacée afin de stopper la cuisson et de fixer la couleur verte.
    - Cuisson. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale.
      Complétez avec le quinoa et du parmesan végétal ou levure maltée râpé. Salez, poivrez
      et laissez cuire à feu doux en mélangeant régulièrement. Si jamais le mélange vous paraît
      trop sec, rajoutez un peu d’eau. Le tout doit être bien crémeux, comme un risotto.
    - Dressage. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges,
      quelques feuilles de roquette ainsi que des copeaux de parmesan végétal ou levure maltée.
      Vous pouvez finaliser votre quinotto avec un filet d’huile d’olive et le déguster bien
      chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il soit tendre mais encore légèrement ferme. Une fois cuit, réservez."
      - "Cuisson. Pendant ce temps, épluchez et coupez l’oignon et l’ail."
      - "Cuisson. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau glacée afin de stopper la cuisson et de fixer la couleur verte."
      - "Cuisson. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale. Complétez avec le quinoa et du parmesan végétal ou levure maltée [[raper|râpé]]. Salez, poivrez et laissez cuire à feu doux en mélangeant régulièrement. Si jamais le mélange vous paraît trop sec, rajoutez un peu d’eau. Le tout doit être bien crémeux, comme un risotto."
      - "Dressage. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges, quelques feuilles de roquette ainsi que des copeaux de parmesan végétal ou levure maltée. Vous pouvez finaliser votre quinotto avec un filet d’huile d’olive et le déguster bien chaud. Bon appétit !"
      pro:
      - "Rincer le quinoa plusieurs fois à l’eau claire. Transvaser en casserole avec de l’eau. Cuire à feu moyen jusqu’à tendre mais encore légèrement ferme. Réserver."
      - "Éplucher et couper l’oignon et l’ail."
      - "Retirer le pied des asperges. Placer les têtes dans de l’eau bouillante salée. Cuire jusqu’à tendreté. Plonger dans de l’eau glacée pour stopper la cuisson et fixer la couleur verte."
      - "Faire revenir l’ail et l’oignon avec un filet d’huile végétale. Compléter avec le quinoa et du parmesan végétal ou levure maltée râpé. Saler, poivrer. Cuire à feu doux en mélangeant régulièrement. Si le mélange est trop sec, rajouter un peu d’eau. Texture crémeuse, type risotto."
      - "Dresser le quinotto en assiette creuse. Ajouter asperges, quelques feuilles de roquette et copeaux de parmesan végétal ou levure maltée. Finaliser d’un filet d’huile d’olive. Déguster chaud."
      cavernes:
      - "Préparation. Quinoa, récipient, rincer plusieurs fois eau claire. Transvaser casserole eau. Cuire feu moyen jusqu’à tendre, encore légèrement ferme. Cuit, réserver."
      - "Cuisson. Pendant ce temps, oignon, ail, éplucher, couper."
      - "Cuisson. Pied asperges, retirer. Têtes, eau bouillante salée. Cuire jusqu’à tendres. Eau glacée, plonger. Stop cuisson, couleur verte fixée."
      - "Cuisson. Autre casserole. Ail, oignon, filet huile végétale, faire revenir. Quinoa, parmesan végétal ou levure maltée râpé, compléter. Saler, poivrer. Feu doux, mélanger régulièrement. Si mélange trop sec, peu eau, rajouter. Crémeux, type risotto."
      - "Dressage. Quinotto, assiette creuse. Asperges, feuilles roquette, copeaux parmesan végétal ou levure maltée. Option : filet huile olive. Déguster chaud."
    kcal_per_serving: 137
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 137
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Quinotto
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/quinotto]]

## Ingrédients (4 personnes)

- 300 g de quinoa
- 0.5 oignon
- 2 gousse d'ail
- 90 g de parmesan
-  huile d'olive
-  roquette
-  asperges vertes

## Préparation

1. Placez le quinoa dans un récipient et rincez-le plusieurs fois à l’eau claire. Transvasez-le ensuite dans une casserole avec de l’eau et laissez cuire à feu moyen jusqu’à ce qu’il soit al-dente. Une fois cuit, réservez.
2. Pendant ce temps, épluchez et coupez l’oignon et l’ail.
3. Retirez le pied des asperges et placez les têtes dans de l’eau bouillante salée. Laissez cuire jusqu’à ce qu’elles soient tendres. Une fois cuites, plongez-les dans de l’eau glacée afin de stopper la cuisson et de fixer la couleur verte.
4. Dans une autre casserole, faites revenir l’ail et l’oignon avec un filet d’huile végétale. Complétez avec le quinoa et du parmesan râpé. Salez, poivrez et laissez cuire à feu doux en mélangeant régulièrement. Si jamais le mélange vous paraît trop sec, rajoutez un peu d’eau. Le tout doit être bien crémeux, comme un risotto.
5. Pour le dressage, déposez du quinotto dans une assiette creuse. Ajoutez des asperges, quelques feuilles de roquette ainsi que des copeaux de parmesan.

 
 

 
 Vous pouvez finaliser votre quinotto avec un filet d’huile d’olive et le déguster bien chaud. Bon appétit !
