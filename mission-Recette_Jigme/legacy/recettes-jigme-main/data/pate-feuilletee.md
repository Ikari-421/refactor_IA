---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
slug: pate-feuilletee
title: Pâte feuilletée
lang: fr
description: "Pâte feuilletée : recette française avec farine et beurre, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- pâte
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pate-feuilletee.jpg
  alt: Pâte feuilletée
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pate-feuilletee.md
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
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
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
histoire: 'Pâte feuilletée : farine, eau, beurre, tours et plis. Pâte laminée, des centaines de couches
  minces. Base de mille-feuille, galette, vol-au-vent. Pas un plat : une pâte.

  '
fun_facts:
- text: >
    Le beurre doit rester froid : s’il fond dans la détrempe, plus de couches,
    une brioche molle.
  source_name: Grokipedia, Puff pastry
  source_url: https://grokipedia.com/page/Puff_pastry
- text: >
    Chaque tour multiplie les couches ; trop de tours, et le gluten se casse.
  source_name: Usage
  source_url:
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "C’est une pâte, pas un plat : pas d’accord vin."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: &id001
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id002
      prep_min: 30
      cook_min: 0
      rest_min: 450
      total_min: 480
    equipment: &id003
    - fouet
    - moule / plat
    - rouleau à pâtisserie
    - film alimentaire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Versez 500g de farine et 12g de sel dans la cuve d’un batteur. Compléter avec une grande
      partie de l’eau, sans en verser la totalité. Mélangez à vitesse lente. En fonction de
      la farine utilisée, la pâte peut être plus ou moins sèche. C’est pour cela que nous
      vous avons conseillé de conserver un peu d’eau. Si la pâte est trop friable, n’hésitez
      pas à ajouter de l’eau, puis mélangez de nouveau.
    - Cuisson. Pétrissez légèrement la pâte à l’aide de vos mains jusqu’à former une boule. Faites
      une incision en forme de croix au-dessus de la boule, puis laissez reposer au frigo
      pendant au moins 1h.
    - Cuisson. Nettoyez votre plan de travail puis fleurez-le avec un peu de farine. Déposez la boule
      de pâte face à vous, puis étalez-la en forme de rectangle à l’aide d’un rouleau à pâtisserie.
    - Cuisson. Votre pâte a la bonne longueur lorsque vous pouvez la plier en trois, en rabattant un
      côté, puis l’autre par-dessus. Avant de passer à cette étape de « pliage », il va falloir
      donner à vos 400g de beurre la même texture et la même largeur que la pâte. Pour cela,
      déposez le beurre dans du film alimentaire afin de lui donner la forme et la texture
      de son choix.
    - Cuisson. Placez le beurre au centre du rectangle de pâte, rectifiez la dimension du beurre au
      besoin. Rabattez un bord de la pâte sur le beurre, puis étirez la pâte sur les côtés
      pour qu’elle le recouvre intégralement (le geste est bien visible dans la vidéo à la
      fin de cet article). Faites de même avec l’autre bord.
    - Cuisson. Fleurez de nouveau votre plan de travail. Faites faire un quart de tour à la pâte. Les
      plis sont maintenant face à vous. À l’aide de votre rouleau, appuyez légèrement au niveau
      des plis, afin de réaliser un joint avec le beurre.
    - Cuisson. Partez d’une extrémité de votre pâte et réalisez une nouvelle pression à l’aide de votre
      rouleau à pâtisserie. Réitérez l’opération trois fois d’un côté, puis passez à l’autre
      extrémité. Continuez à faire de même jusqu’à ce que toute la pâte soit à la même hauteur.
      Repartez des extrémités et répéter l’opération une nouvelle fois en appuyant sur les
      « bosses ».
    - Cuisson. Fleurez votre pâte et étalez-la maintenant à l’aide du rouleau. Elle doit toujours avoir
      la forme d’un rectangle bien régulier. Comme précédemment, rabattez un bord de votre
      pâte jusqu’au milieu, puis l’autre au dessus. Aplatissez de nouveau la pâte avec le
      rouleau, petit à petit. Fleurez ensuite la pâte et étalez-la à l’aide du rouleau. Faites
      deux traces de doigts dans la pâte, afin de vous souvenir que vous avez fait deux tours.
      Il faut maintenant laisser reposer 2h au frigo.
    - Finition. Répétez ces opérations (plier la pâte, aplatir, fleurer, étaler à l’aide du rouleau)
      de façon à réaliser encore deux tours. Faites 4 marques de doigts dans la pâte, puis
      laissez ensuite reposer 2h au frigo. Faites de même une dernière fois, jusqu’à avoir
      fait six tours au total. Laissez reposer encore 2h. Et voilà, votre pâte feuilletée
      maison est prête ! Vous pouvez maintenant réaliser un boeuf Wellington, un Wellington
      végétarien, une soupe de moules et champignons, des chaussons aux pommes ou encore une
      galette des rois. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez 500g de farine et 12g de sel dans la cuve d’un batteur. Complétez avec une grande partie de l’eau, sans en verser la totalité. Mélangez à vitesse lente. En fonction de la farine utilisée, la pâte peut être plus ou moins sèche : conservez un peu d’eau. Si la pâte est trop friable, ajoutez de l’eau, puis mélangez de nouveau."
      - "Cuisson. Pétrissez légèrement la pâte à l’aide de vos mains jusqu’à former une boule. Faites une incision en forme de croix au-dessus de la boule, puis laissez reposer au frigo pendant au moins 1h."
      - "Cuisson. Nettoyez votre plan de travail puis fleurez-le avec un peu de farine. Déposez la boule de pâte face à vous, puis étalez-la en forme de rectangle à l’aide d’un rouleau à pâtisserie."
      - "Cuisson. Votre pâte a la bonne longueur lorsque vous pouvez la plier en trois, en rabattant un côté, puis l’autre par-dessus. Avant de plier, donnez à vos 400g de beurre la même texture et la même largeur que la pâte : déposez le beurre dans du film alimentaire afin de lui donner la forme et la texture de son choix."
      - "Cuisson. Placez le beurre au centre du rectangle de pâte, rectifiez la dimension du beurre au besoin. Rabattez un bord de la pâte sur le beurre, puis étirez la pâte sur les côtés pour qu’elle le recouvre intégralement. Faites de même avec l’autre bord."
      - "Cuisson. Fleurez de nouveau votre plan de travail. Faites faire un quart de tour à la pâte. Les plis sont maintenant face à vous. À l’aide de votre rouleau, appuyez légèrement au niveau des plis, afin de réaliser un joint avec le beurre."
      - "Cuisson. Partez d’une extrémité de votre pâte et réalisez une nouvelle pression à l’aide de votre rouleau à pâtisserie. Réitérez l’opération trois fois d’un côté, puis passez à l’autre extrémité. Continuez jusqu’à ce que toute la pâte soit à la même hauteur. Repartez des extrémités et répétez l’opération une nouvelle fois en appuyant sur les bosses."
      - "Cuisson. Fleurez votre pâte et étalez-la à l’aide du rouleau. Elle doit toujours avoir la forme d’un rectangle bien régulier. Rabattez un bord de votre pâte jusqu’au milieu, puis l’autre au dessus. Aplatissez de nouveau la pâte avec le rouleau, petit à petit. Fleurez ensuite la pâte et étalez-la à l’aide du rouleau. Faites deux traces de doigts dans la pâte, afin de vous souvenir que vous avez fait deux tours. Laissez reposer 2h au frigo."
      - "Finition. Répétez ces opérations (plier la pâte, aplatir, fleurer, étaler à l’aide du rouleau) de façon à réaliser encore deux tours. Faites 4 marques de doigts dans la pâte, puis laissez reposer 2h au frigo. Faites de même une dernière fois, jusqu’à avoir fait six tours au total. Laissez reposer encore 2h."
      pro:
      - "Verser 500g de farine et 12g de sel dans la cuve d’un batteur. Compléter avec une grande partie de l’eau, sans tout verser. Mélanger à vitesse lente. Si la pâte est trop friable, ajouter de l’eau et mélanger de nouveau."
      - "Pétrir légèrement à la main jusqu’à former une boule. Inciser en croix. Repos frigo au moins 1h."
      - "Nettoyer le plan de travail. Fleurer un peu de farine. Étaler la boule en rectangle au rouleau."
      - "Longueur juste : pliage en trois. Donner à 400g de beurre la même texture et la même largeur que la pâte, dans du film alimentaire."
      - "Placer le beurre au centre du rectangle. Rectifier la dimension. Rabattre un bord, étirer pour recouvrir intégralement. Même geste de l’autre bord."
      - "Fleurer le plan. Quart de tour. Plis face à soi. Appuyer légèrement au niveau des plis pour un joint beurre."
      - "Presser au rouleau depuis une extrémité, trois fois d’un côté, puis l’autre. Égaliser la hauteur. Recommencer depuis les extrémités en appuyant sur les bosses."
      - "Fleurer. Étaler en rectangle régulier. Rabattre un bord jusqu’au milieu, l’autre au dessus. Aplatir au rouleau. Fleurer, étaler. Deux traces de doigts (deux tours). Repos 2h au frigo."
      - "Répéter (plier, aplatir, fleurer, étaler) encore deux tours. Quatre marques de doigts. Repos 2h au frigo. Encore deux tours, six au total. Repos 2h."
      cavernes:
      - "Préparation. 500g farine, 12g sel, cuve batteur, verser. Grande partie eau, compléter, pas totalité. Vitesse lente, mélanger. Pâte sèche possible. Peu eau, garder. Trop friable : eau, ajouter, mélanger."
      - "Cuisson. Pâte, mains, pétrir légèrement. Boule. Croix, inciser. Frigo, minimum 1h."
      - "Cuisson. Plan travail, nettoyer. Peu farine, fleurer. Boule pâte, déposer. Rectangle, rouleau, étaler."
      - "Cuisson. Longueur ok si plier en trois. 400g beurre, même texture, même largeur. Film alimentaire, former."
      - "Cuisson. Beurre, centre rectangle. Dimension, rectifier. Bord pâte, rabattre. Côtés, étirer, recouvrir. Autre bord, même."
      - "Cuisson. Plan, fleurer. Quart de tour. Plis face. Rouleau, plis, appuyer. Joint beurre."
      - "Cuisson. Extrémité, pression rouleau. Trois fois côté, autre extrémité. Même hauteur. Extrémités, bosses, encore."
      - "Cuisson. Pâte, fleurer, étaler. Rectangle régulier. Bord milieu, autre dessus, rabattre. Rouleau, aplatir. Fleurer, étaler. 2 traces doigts : 2 tours. Frigo 2h."
      - "Finition. Plier, aplatir, fleurer, étaler : encore 2 tours. 4 marques doigts. Frigo 2h. Encore, 6 tours total. Encore 2h."
    kcal_per_serving: 1190
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 1190
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
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 0
      rest_min: 450
      total_min: 480
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 12
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Versez 500g de farine et 12g de sel dans la cuve d’un batteur. Compléter avec une grande
      partie de l’eau, sans en verser la totalité. Mélangez à vitesse lente. En fonction de
      la farine utilisée, la pâte peut être plus ou moins sèche. C’est pour cela que nous
      vous avons conseillé de conserver un peu d’eau. Si la pâte est trop friable, n’hésitez
      pas à ajouter de l’eau, puis mélangez de nouveau.
    - Cuisson. Pétrissez légèrement la pâte à l’aide de vos mains jusqu’à former une boule. Faites
      une incision en forme de croix au-dessus de la boule, puis laissez reposer au frigo
      pendant au moins 1h.
    - Cuisson. Nettoyez votre plan de travail puis fleurez-le avec un peu de farine. Déposez la boule
      de pâte face à vous, puis étalez-la en forme de rectangle à l’aide d’un rouleau à pâtisserie.
    - Cuisson. Votre pâte a la bonne longueur lorsque vous pouvez la plier en trois, en rabattant un
      côté, puis l’autre par-dessus. Avant de passer à cette étape de « pliage », il va falloir
      donner à vos 400 g de margarine végétale la même texture et la même largeur que la pâte. Pour cela,
      déposez la margarine végétale dans du film alimentaire afin de lui donner la forme et la texture
      de son choix.
    - Cuisson. Placez la margarine végétale au centre du rectangle de pâte, rectifiez sa dimension au besoin. Rabattez un bord de la pâte sur la margarine végétale, puis étirez la pâte sur les côtés
      pour qu’elle le recouvre intégralement (le geste est bien visible dans la vidéo à la
      fin de cet article). Faites de même avec l’autre bord.
    - Cuisson. Fleurez de nouveau votre plan de travail. Faites faire un quart de tour à la pâte. Les
      plis sont maintenant face à vous. À l’aide de votre rouleau, appuyez légèrement au niveau
      des plis, afin de réaliser un joint avec la margarine végétale.
    - Cuisson. Partez d’une extrémité de votre pâte et réalisez une nouvelle pression à l’aide de votre
      rouleau à pâtisserie. Réitérez l’opération trois fois d’un côté, puis passez à l’autre
      extrémité. Continuez à faire de même jusqu’à ce que toute la pâte soit à la même hauteur.
      Repartez des extrémités et répéter l’opération une nouvelle fois en appuyant sur les
      « bosses ».
    - Cuisson. Fleurez votre pâte et étalez-la maintenant à l’aide du rouleau. Elle doit toujours avoir
      la forme d’un rectangle bien régulier. Comme précédemment, rabattez un bord de votre
      pâte jusqu’au milieu, puis l’autre au dessus. Aplatissez de nouveau la pâte avec le
      rouleau, petit à petit. Fleurez ensuite la pâte et étalez-la à l’aide du rouleau. Faites
      deux traces de doigts dans la pâte, afin de vous souvenir que vous avez fait deux tours.
      Il faut maintenant laisser reposer 2h au frigo.
    - Finition. Répétez ces opérations (plier la pâte, aplatir, fleurer, étaler à l’aide du rouleau)
      de façon à réaliser encore deux tours. Faites 4 marques de doigts dans la pâte, puis
      laissez ensuite reposer 2h au frigo. Faites de même une dernière fois, jusqu’à avoir
      fait six tours au total. Laissez reposer encore 2h. Et voilà, votre pâte feuilletée
      maison est prête ! Vous pouvez maintenant réaliser un boeuf Wellington, un Wellington
      végétarien, une soupe de moules et champignons, des chaussons aux pommes ou encore une
      galette des rois. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez 500g de farine et 12g de sel dans la cuve d’un batteur. Complétez avec une grande partie de l’eau, sans en verser la totalité. Mélangez à vitesse lente. En fonction de la farine utilisée, la pâte peut être plus ou moins sèche : conservez un peu d’eau. Si la pâte est trop friable, ajoutez de l’eau, puis mélangez de nouveau."
      - "Cuisson. Pétrissez légèrement la pâte à l’aide de vos mains jusqu’à former une boule. Faites une incision en forme de croix au-dessus de la boule, puis laissez reposer au frigo pendant au moins 1h."
      - "Cuisson. Nettoyez votre plan de travail puis fleurez-le avec un peu de farine. Déposez la boule de pâte face à vous, puis étalez-la en forme de rectangle à l’aide d’un rouleau à pâtisserie."
      - "Cuisson. Votre pâte a la bonne longueur lorsque vous pouvez la plier en trois, en rabattant un côté, puis l’autre par-dessus. Avant de plier, donnez à vos 400 g de margarine végétale la même texture et la même largeur que la pâte : déposez la margarine végétale dans du film alimentaire afin de lui donner la forme et la texture de son choix."
      - "Cuisson. Placez la margarine végétale au centre du rectangle de pâte, rectifiez sa dimension au besoin. Rabattez un bord de la pâte sur la margarine végétale, puis étirez la pâte sur les côtés pour qu’elle le recouvre intégralement. Faites de même avec l’autre bord."
      - "Cuisson. Fleurez de nouveau votre plan de travail. Faites faire un quart de tour à la pâte. Les plis sont maintenant face à vous. À l’aide de votre rouleau, appuyez légèrement au niveau des plis, afin de réaliser un joint avec la margarine végétale."
      - "Cuisson. Partez d’une extrémité de votre pâte et réalisez une nouvelle pression à l’aide de votre rouleau à pâtisserie. Réitérez l’opération trois fois d’un côté, puis passez à l’autre extrémité. Continuez jusqu’à ce que toute la pâte soit à la même hauteur. Repartez des extrémités et répétez l’opération une nouvelle fois en appuyant sur les bosses."
      - "Cuisson. Fleurez votre pâte et étalez-la à l’aide du rouleau. Elle doit toujours avoir la forme d’un rectangle bien régulier. Rabattez un bord de votre pâte jusqu’au milieu, puis l’autre au dessus. Aplatissez de nouveau la pâte avec le rouleau, petit à petit. Fleurez ensuite la pâte et étalez-la à l’aide du rouleau. Faites deux traces de doigts dans la pâte, afin de vous souvenir que vous avez fait deux tours. Laissez reposer 2h au frigo."
      - "Finition. Répétez ces opérations (plier la pâte, aplatir, fleurer, étaler à l’aide du rouleau) de façon à réaliser encore deux tours. Faites 4 marques de doigts dans la pâte, puis laissez reposer 2h au frigo. Faites de même une dernière fois, jusqu’à avoir fait six tours au total. Laissez reposer encore 2h."
      pro:
      - "Verser 500g de farine et 12g de sel dans la cuve d’un batteur. Compléter avec une grande partie de l’eau, sans tout verser. Mélanger à vitesse lente. Si la pâte est trop friable, ajouter de l’eau et mélanger de nouveau."
      - "Pétrir légèrement à la main jusqu’à former une boule. Inciser en croix. Repos frigo au moins 1h."
      - "Nettoyer le plan de travail. Fleurer un peu de farine. Étaler la boule en rectangle au rouleau."
      - "Longueur juste : pliage en trois. Donner à 400 g de margarine végétale la même texture et la même largeur que la pâte, dans du film alimentaire."
      - "Placer la margarine végétale au centre du rectangle. Rectifier la dimension. Rabattre un bord, étirer pour recouvrir intégralement. Même geste de l’autre bord."
      - "Fleurer le plan. Quart de tour. Plis face à soi. Appuyer légèrement au niveau des plis pour un joint margarine végétale."
      - "Presser au rouleau depuis une extrémité, trois fois d’un côté, puis l’autre. Égaliser la hauteur. Recommencer depuis les extrémités en appuyant sur les bosses."
      - "Fleurer. Étaler en rectangle régulier. Rabattre un bord jusqu’au milieu, l’autre au dessus. Aplatir au rouleau. Fleurer, étaler. Deux traces de doigts (deux tours). Repos 2h au frigo."
      - "Répéter (plier, aplatir, fleurer, étaler) encore deux tours. Quatre marques de doigts. Repos 2h au frigo. Encore deux tours, six au total. Repos 2h."
      cavernes:
      - "Préparation. 500g farine, 12g sel, cuve batteur, verser. Grande partie eau, compléter, pas totalité. Vitesse lente, mélanger. Pâte sèche possible. Peu eau, garder. Trop friable : eau, ajouter, mélanger."
      - "Cuisson. Pâte, mains, pétrir légèrement. Boule. Croix, inciser. Frigo, minimum 1h."
      - "Cuisson. Plan travail, nettoyer. Peu farine, fleurer. Boule pâte, déposer. Rectangle, rouleau, étaler."
      - "Cuisson. Longueur ok si plier en trois. 400 g margarine végétale, même texture, même largeur. Film alimentaire, former."
      - "Cuisson. Margarine végétale, centre rectangle. Dimension, rectifier. Bord pâte, rabattre. Côtés, étirer, recouvrir. Autre bord, même."
      - "Cuisson. Plan, fleurer. Quart de tour. Plis face. Rouleau, plis, appuyer. Joint margarine végétale."
      - "Cuisson. Extrémité, pression rouleau. Trois fois côté, autre extrémité. Même hauteur. Extrémités, bosses, encore."
      - "Cuisson. Pâte, fleurer, étaler. Rectangle régulier. Bord milieu, autre dessus, rabattre. Rouleau, aplatir. Fleurer, étaler. 2 traces doigts : 2 tours. Frigo 2h."
      - "Finition. Plier, aplatir, fleurer, étaler : encore 2 tours. 4 marques doigts. Frigo 2h. Encore, 6 tours total. Encore 2h."
    kcal_per_serving: 488
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
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 1190
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "film alimentaire", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Pâte feuilletée
**Équipement :** [[batteur]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pate-feuilletee]]

## Ingrédients (4 personnes)

- 500 g de farine
- 12 g de sel
- 250 g d'eau
- 400 g de beurre

## Préparation

1. Versez 500g de farine et 12g de sel dans la cuve d’un batteur. Compléter avec une grande partie de l’eau, sans en verser la totalité. Mélangez à vitesse lente. En fonction de la farine utilisée, la pâte peut être plus ou moins sèche. C’est pour cela que nous vous avons conseillé de conserver un peu d’eau. Si la pâte est trop friable, n’hésitez pas à ajouter de l’eau, puis mélangez de nouveau.
2. Pétrissez légèrement la pâte à l’aide de vos mains jusqu’à former une boule. Faites une incision en forme de croix au-dessus de la boule, puis laissez reposer au frigo pendant au moins 1h.
3. Nettoyez votre plan de travail puis fleurez-le avec un peu de farine. Déposez la boule de pâte face à vous, puis étalez-la en forme de rectangle à l’aide d’un rouleau à pâtisserie.
4. Votre pâte a la bonne longueur lorsque vous pouvez la plier en trois, en rabattant un côté, puis l’autre par-dessus. Avant de passer à cette étape de « pliage », il va falloir donner à vos 400g de beurre la même texture et la même largeur que la pâte. Pour cela, déposez le beurre dans du film alimentaire afin de lui donner la forme et la texture de son choix.
5. Placez le beurre au centre du rectangle de pâte, rectifiez la dimension du beurre au besoin. Rabattez un bord de la pâte sur le beurre, puis étirez la pâte sur les côtés pour qu’elle le recouvre intégralement (le geste est bien visible dans la vidéo à la fin de cet article). Faites de même avec l’autre bord.
6. Fleurez de nouveau votre plan de travail. Faites faire un quart de tour à la pâte. Les plis sont maintenant face à vous. À l’aide de votre rouleau, appuyez légèrement au niveau des plis, afin de réaliser un joint avec le beurre.
7. Partez d’une extrémité de votre pâte et réalisez une nouvelle pression à l’aide de votre rouleau à pâtisserie. Réitérez l’opération trois fois d’un côté, puis passez à l’autre extrémité. Continuez à faire de même jusqu’à ce que toute la pâte soit à la même hauteur. Repartez des extrémités et répéter l’opération une nouvelle fois en appuyant sur les « bosses ».
8. Fleurez votre pâte et étalez-la maintenant à l’aide du rouleau. Elle doit toujours avoir la forme d’un rectangle bien régulier. Comme précédemment, rabattez un bord de votre pâte jusqu’au milieu, puis l’autre au dessus. Aplatissez de nouveau la pâte avec le rouleau, petit à petit. Fleurez ensuite la pâte et étalez-la à l’aide du rouleau. Faites deux traces de doigts dans la pâte, afin de vous souvenir que vous avez fait deux tours. Il faut maintenant laisser reposer 2h au frigo.
9. Répétez ces opérations (plier la pâte, aplatir, fleurer, étaler à l’aide du rouleau) de façon à réaliser encore deux tours. Faites 4 marques de doigts dans la pâte, puis laissez ensuite reposer 2h au frigo. Faites de même une dernière fois, jusqu’à avoir fait six tours au total. Laissez reposer encore 2h.

 
 

 
 Et voilà, votre pâte feuilletée maison est prête ! Vous pouvez maintenant réaliser un boeuf Wellington, un Wellington végétarien, une soupe de moules et champignons, des chaussons aux pommes ou encore une galette des rois. Bon appétit !
