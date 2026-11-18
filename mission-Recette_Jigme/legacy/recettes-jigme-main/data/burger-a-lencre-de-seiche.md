---
schema: recette-web-jigme/v2
slug: burger-a-lencre-de-seiche
title: Burger à l'encre de seiche
lang: fr
description: "Burger à l'encre de seiche : recette américaine avec pain à burger à l'encre de seiche, steak haché et oignon, pour 4 personnes."
cuisine: américaine
category: salé
tags:
- salé
- burger
- seiche
- plat
image:
  url:
  alt: Burger à l'encre de seiche
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/burger-a-lencre-de-seiche.md
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - mollusques
    swaps: []
    note: 'Contient mollusques (pain à burger à l''encre de seiche) : pas d’adaptation fiable.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: >
  Le hamburger moderne se fige aux États-Unis au tournant du XXe s. L’encre de seiche
  dans le pain ou la sauce est un geste de trattoria / tapas, pas un burger historique.
fun_facts:
- text: "L’encre noircit la mie ; trop cuite, elle amertume."
  source_name: Usage
  source_url:
- text: "La seiche fournit l’encre ; le calmar aussi, plus douce."
  source_name: Usage
  source_url:
wines:
- name: Albariño Rías Baixas
  producer: Pazo de Señorans
  origin: Meaño, Galice
  grapes: albariño
  award:
  why: Iodé, agrume — encre et mer.
- name: Cassis blanc
  producer: Clos Sainte Magdeleine
  origin: Cassis, Provence
  grapes: marsanne, clairette
  award:
  why: Fenouil, sel — le pain à l’encre.
- name: Palomino (Vino de Pasto)
  producer: Bodegas Luis Pérez
  origin: Jerez
  grapes: palomino
  award:
  why: Iodé, amande — l’encre, sans sucrosité.
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
    - mollusques
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 0
      total_min: 50
    equipment: &id002
    - casserole
    - poêle
    - saladier
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger à l'encre de seiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steak haché
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: betterave cuite
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: crème fraîche épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et et coupez les oignons en
      lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu,
      ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide
      d’une cuillère en bois, puis laissez compoter à feu moyen.
    - Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite
      dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc.
      Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les
      oignons de temps en temps.
    - Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche
      épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur
      rose.
    - Dressage. Vos oignons doivent être bien caramélisés. Retirez-les du feu et réservez. Dans une
      poêle bien chaude, faite revenir les steak hachés avec un filet d’huile végétale. Pendant
      qu’ils cuisent, coupez les pains à burger en deux et faites les griller au toaster.
    - Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème
      à la betterave. Ajoutez le steak haché, ainsi qu’une généreuse cuillère d’oignons caramélisés.
      Finalisez avec une peu de chou rouge, puis étalez de nouveau de la crème de betterave
      sur le chapeau du burger avant de le déposer au dessus. Dégustez tant que c’est chaud,
      accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et coupez les oignons en lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu, ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide d’une cuillère en bois, puis laissez compoter à feu moyen."
      - "Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc. Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les oignons de temps en temps."
      - "Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur rose."
      - "Dressage. Vos oignons doivent être bien caramélisés. [[hors-du-feu|Retirez-les du feu]] et réservez. Dans une poêle bien chaude, faites revenir les steaks hachés avec un filet d’huile végétale. Pendant qu’ils cuisent, coupez les pains à burger en deux et faites-les griller au toaster."
      - "Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème à la betterave. Ajoutez le steak haché, ainsi qu’une généreuse cuillère d’oignons caramélisés. Finalisez avec un peu de chou rouge, puis étalez de nouveau de la crème de betterave sur le chapeau du burger avant de le déposer au-dessus. Dégustez tant que c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !"
      pro:
      - "Éplucher et couper les oignons en lamelles. Faire fondre une noix de beurre dans une casserole. Ajouter oignons, sucre et sel. Mélanger à la cuillère en bois. Compoter à feu moyen."
      - "Couper le chou rouge finement. Assaisonner dans un bol d’huile de sésame et de vinaigre balsamique blanc. Saler, poivrer, mélanger. Remuer les oignons de temps en temps."
      - "Mixer betterave cuite et crème fraîche épaisse. Saler, poivrer. Obtenir un mélange homogène rose."
      - "Retirer les oignons du feu. Réserver. Faire revenir les steaks hachés dans une poêle bien chaude, filet d’huile végétale. Couper les pains à burger en deux. Griller au toaster."
      - "Tartiner le pain du dessous de crème à la betterave. Ajouter le steak haché et une généreuse cuillère d’oignons caramélisés. Chou rouge. Crème de betterave sur le chapeau. Refermer. Servir chaud, verdure ou frites."
      cavernes:
      - "Préparation. Compotée oignons. Oignons, éplucher, couper lamelles. Noix beurre, casserole. Fondu. Oignons, sucre, sel selon goûts, ajouter. Cuillère bois, mélanger. Feu moyen, compoter."
      - "Cuisson. Oignons caramélisent. Chou rouge, couper finement. Bol. Huile sésame, vinaigre balsamique blanc, assaisonner. Sel, poivre selon goûts. Mélanger. Oignons, remuer temps en temps."
      - "Cuisson. Mixeur, cuve. Betterave cuite, placer. Crème fraîche épaisse, compléter. Sel, poivre. Mixer jusqu’à mélange homogène couleur rose."
      - "Dressage. Oignons bien caramélisés. Hors feu, réserver. Poêle bien chaude. Steaks hachés, filet huile végétale, revenir. Pains burger, couper deux. Toaster, griller."
      - "Dressage. Premier pain burger. Crème betterave, tartiner. Steak haché, ajouter. Cuillère généreuse oignons caramélisés. Chou rouge. Crème betterave, chapeau burger, étaler. Déposer dessus. Chaud, déguster. Verdure ou frites. Bon appétit !"
    kcal_per_serving: 374
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - mollusques
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger à l'charbon végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: betterave cuite
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: crème fraîche épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et et coupez les oignons en
      lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu,
      ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide
      d’une cuillère en bois, puis laissez compoter à feu moyen.
    - Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite
      dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc.
      Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les
      oignons de temps en temps.
    - Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche
      épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur
      rose.
    - Dressage. Vos oignons doivent être bien caramélisés. Retirez-les du feu et réservez. Dans une
      poêle bien chaude, faite revenir les steaks de pleurotess avec un filet d’huile végétale.
      Pendant qu’ils cuisent, coupez les pains à burger en deux et faites les griller au toaster.
    - Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème
      à la betterave. Ajoutez le steaks de pleurotes, ainsi qu’une généreuse cuillère d’oignons
      caramélisés. Finalisez avec une peu de chou rouge, puis étalez de nouveau de la crème
      de betterave sur le chapeau du burger avant de le déposer au dessus. Dégustez tant que
      c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et coupez les oignons en lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu, ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide d’une cuillère en bois, puis laissez compoter à feu moyen."
      - "Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc. Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les oignons de temps en temps."
      - "Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur rose."
      - "Dressage. Vos oignons doivent être bien caramélisés. [[hors-du-feu|Retirez-les du feu]] et réservez. Dans une poêle bien chaude, faites revenir les steaks de pleurotes avec un filet d’huile végétale. Pendant qu’ils cuisent, coupez les pains à burger en deux et faites-les griller au toaster."
      - "Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème à la betterave. Ajoutez les steaks de pleurotes, ainsi qu’une généreuse cuillère d’oignons caramélisés. Finalisez avec un peu de chou rouge, puis étalez de nouveau de la crème de betterave sur le chapeau du burger avant de le déposer au-dessus. Dégustez tant que c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !"
      pro:
      - "Éplucher et couper les oignons en lamelles. Faire fondre une noix de beurre dans une casserole. Ajouter oignons, sucre et sel. Mélanger à la cuillère en bois. Compoter à feu moyen."
      - "Couper le chou rouge finement. Assaisonner dans un bol d’huile de sésame et de vinaigre balsamique blanc. Saler, poivrer, mélanger. Remuer les oignons de temps en temps."
      - "Mixer betterave cuite et crème fraîche épaisse. Saler, poivrer. Obtenir un mélange homogène rose."
      - "Retirer les oignons du feu. Réserver. Faire revenir les steaks de pleurotes dans une poêle bien chaude, filet d’huile végétale. Couper les pains à burger en deux. Griller au toaster."
      - "Tartiner le pain du dessous de crème à la betterave. Ajouter les steaks de pleurotes et une généreuse cuillère d’oignons caramélisés. Chou rouge. Crème de betterave sur le chapeau. Refermer. Servir chaud, verdure ou frites."
      cavernes:
      - "Préparation. Compotée oignons. Oignons, éplucher, couper lamelles. Noix beurre, casserole. Fondu. Oignons, sucre, sel selon goûts, ajouter. Cuillère bois, mélanger. Feu moyen, compoter."
      - "Cuisson. Oignons caramélisent. Chou rouge, couper finement. Bol. Huile sésame, vinaigre balsamique blanc, assaisonner. Sel, poivre selon goûts. Mélanger. Oignons, remuer temps en temps."
      - "Cuisson. Mixeur, cuve. Betterave cuite, placer. Crème fraîche épaisse, compléter. Sel, poivre. Mixer jusqu’à mélange homogène couleur rose."
      - "Dressage. Oignons bien caramélisés. Hors feu, réserver. Poêle bien chaude. Steaks pleurotes, filet huile végétale, revenir. Pains burger, couper deux. Toaster, griller."
      - "Dressage. Premier pain burger. Crème betterave, tartiner. Steaks pleurotes, ajouter. Cuillère généreuse oignons caramélisés. Chou rouge. Crème betterave, chapeau burger, étaler. Déposer dessus. Chaud, déguster. Verdure ou frites. Bon appétit !"
    kcal_per_serving: 374
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
    - qty: 4
      unit: piece
      item: pain à burger vegan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: betterave cuite
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile de sésame
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
    - Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et et coupez les oignons en
      lamelles. Placez une noix de margarine végétale dans une casserole. Dès qu’elle est fondue,
      ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide
      d’une cuillère en bois, puis laissez compoter à feu moyen.
    - Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite
      dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc.
      Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les
      oignons de temps en temps.
    - Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème de soja
      ou avoine. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de
      couleur rose.
    - Dressage. Vos oignons doivent être bien caramélisés. Retirez-les du feu et réservez. Dans une
      poêle bien chaude, faite revenir les steaks de pleurotess avec un filet d’huile végétale.
      Pendant qu’ils cuisent, coupez les pains à burger en deux et faites les griller au toaster.
    - Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème
      à la betterave. Ajoutez le steaks de pleurotes, ainsi qu’une généreuse cuillère d’oignons
      caramélisés. Finalisez avec une peu de chou rouge, puis étalez de nouveau de la crème
      de betterave sur le chapeau du burger avant de le déposer au dessus. Dégustez tant que
      c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et coupez les oignons en lamelles. Placez une noix de margarine végétale dans une casserole. Dès qu’elle est fondue, ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide d’une cuillère en bois, puis laissez compoter à feu moyen."
      - "Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc. Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les oignons de temps en temps."
      - "Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème de soja ou avoine. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur rose."
      - "Dressage. Vos oignons doivent être bien caramélisés. [[hors-du-feu|Retirez-les du feu]] et réservez. Dans une poêle bien chaude, faites revenir les steaks de pleurotes avec un filet d’huile végétale. Pendant qu’ils cuisent, coupez les pains à burger en deux et faites-les griller au toaster."
      - "Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème à la betterave. Ajoutez les steaks de pleurotes, ainsi qu’une généreuse cuillère d’oignons caramélisés. Finalisez avec un peu de chou rouge, puis étalez de nouveau de la crème de betterave sur le chapeau du burger avant de le déposer au-dessus. Dégustez tant que c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !"
      pro:
      - "Éplucher et couper les oignons en lamelles. Faire fondre une noix de margarine végétale dans une casserole. Ajouter oignons, sucre et sel. Mélanger à la cuillère en bois. Compoter à feu moyen."
      - "Couper le chou rouge finement. Assaisonner dans un bol d’huile de sésame et de vinaigre balsamique blanc. Saler, poivrer, mélanger. Remuer les oignons de temps en temps."
      - "Mixer betterave cuite et crème de soja ou avoine. Saler, poivrer. Obtenir un mélange homogène rose."
      - "Retirer les oignons du feu. Réserver. Faire revenir les steaks de pleurotes dans une poêle bien chaude, filet d’huile végétale. Couper les pains à burger en deux. Griller au toaster."
      - "Tartiner le pain du dessous de crème à la betterave. Ajouter les steaks de pleurotes et une généreuse cuillère d’oignons caramélisés. Chou rouge. Crème de betterave sur le chapeau. Refermer. Servir chaud, verdure ou frites."
      cavernes:
      - "Préparation. Compotée oignons. Oignons, éplucher, couper lamelles. Noix margarine végétale, casserole. Fondue. Oignons, sucre, sel selon goûts, ajouter. Cuillère bois, mélanger. Feu moyen, compoter."
      - "Cuisson. Oignons caramélisent. Chou rouge, couper finement. Bol. Huile sésame, vinaigre balsamique blanc, assaisonner. Sel, poivre selon goûts. Mélanger. Oignons, remuer temps en temps."
      - "Cuisson. Mixeur, cuve. Betterave cuite, placer. Crème soja ou avoine, compléter. Sel, poivre. Mixer jusqu’à mélange homogène couleur rose."
      - "Dressage. Oignons bien caramélisés. Hors feu, réserver. Poêle bien chaude. Steaks pleurotes, filet huile végétale, revenir. Pains burger, couper deux. Toaster, griller."
      - "Dressage. Premier pain burger. Crème betterave, tartiner. Steaks pleurotes, ajouter. Cuillère généreuse oignons caramélisés. Chou rouge. Crème betterave, chapeau burger, étaler. Déposer dessus. Chaud, déguster. Verdure ou frites. Bon appétit !"
    kcal_per_serving: 374
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
    - mollusques
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger à l'encre de seiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pavé de thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: chou rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: betterave cuite
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: crème fraîche épaisse
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et et coupez les oignons en
      lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu,
      ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide
      d’une cuillère en bois, puis laissez compoter à feu moyen.
    - Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite
      dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc.
      Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les
      oignons de temps en temps.
    - Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche
      épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur
      rose.
    - Dressage. Vos oignons doivent être bien caramélisés. Retirez-les du feu et réservez. Dans une
      poêle bien chaude, faite revenir les pavés de thon avec un filet d’huile végétale. Pendant
      qu’ils cuisent, coupez les pains à burger en deux et faites les griller au toaster.
    - Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème
      à la betterave. Ajoutez le pavé de thon, ainsi qu’une généreuse cuillère d’oignons caramélisés.
      Finalisez avec une peu de chou rouge, puis étalez de nouveau de la crème de betterave
      sur le chapeau du burger avant de le déposer au dessus. Dégustez tant que c’est chaud,
      accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par la compotée d’oignons. Pour cela, épluchez et coupez les oignons en lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu, ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide d’une cuillère en bois, puis laissez compoter à feu moyen."
      - "Cuisson. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc. Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les oignons de temps en temps."
      - "Cuisson. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur rose."
      - "Dressage. Vos oignons doivent être bien caramélisés. [[hors-du-feu|Retirez-les du feu]] et réservez. Dans une poêle bien chaude, faites revenir les pavés de thon avec un filet d’huile végétale. Pendant qu’ils cuisent, coupez les pains à burger en deux et faites-les griller au toaster."
      - "Dressage. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème à la betterave. Ajoutez le pavé de thon, ainsi qu’une généreuse cuillère d’oignons caramélisés. Finalisez avec un peu de chou rouge, puis étalez de nouveau de la crème de betterave sur le chapeau du burger avant de le déposer au-dessus. Dégustez tant que c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !"
      pro:
      - "Éplucher et couper les oignons en lamelles. Faire fondre une noix de beurre dans une casserole. Ajouter oignons, sucre et sel. Mélanger à la cuillère en bois. Compoter à feu moyen."
      - "Couper le chou rouge finement. Assaisonner dans un bol d’huile de sésame et de vinaigre balsamique blanc. Saler, poivrer, mélanger. Remuer les oignons de temps en temps."
      - "Mixer betterave cuite et crème fraîche épaisse. Saler, poivrer. Obtenir un mélange homogène rose."
      - "Retirer les oignons du feu. Réserver. Faire revenir les pavés de thon dans une poêle bien chaude, filet d’huile végétale. Couper les pains à burger en deux. Griller au toaster."
      - "Tartiner le pain du dessous de crème à la betterave. Ajouter le pavé de thon et une généreuse cuillère d’oignons caramélisés. Chou rouge. Crème de betterave sur le chapeau. Refermer. Servir chaud, verdure ou frites."
      cavernes:
      - "Préparation. Compotée oignons. Oignons, éplucher, couper lamelles. Noix beurre, casserole. Fondu. Oignons, sucre, sel selon goûts, ajouter. Cuillère bois, mélanger. Feu moyen, compoter."
      - "Cuisson. Oignons caramélisent. Chou rouge, couper finement. Bol. Huile sésame, vinaigre balsamique blanc, assaisonner. Sel, poivre selon goûts. Mélanger. Oignons, remuer temps en temps."
      - "Cuisson. Mixeur, cuve. Betterave cuite, placer. Crème fraîche épaisse, compléter. Sel, poivre. Mixer jusqu’à mélange homogène couleur rose."
      - "Dressage. Oignons bien caramélisés. Hors feu, réserver. Poêle bien chaude. Pavés thon, filet huile végétale, revenir. Pains burger, couper deux. Toaster, griller."
      - "Dressage. Premier pain burger. Crème betterave, tartiner. Pavé thon, ajouter. Cuillère généreuse oignons caramélisés. Chou rouge. Crème betterave, chapeau burger, étaler. Déposer dessus. Chaud, déguster. Verdure ou frites. Bon appétit !"
    kcal_per_serving: 324
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  vegetarienne:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  pesco:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; viande hachée"

---

# Burger à l'encre de seiche
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/burger-a-lencre-de-seiche]]

## Ingrédients (4 personnes)

- 4 pain à burger à l'encre de seiche
- 4 steak haché
- 6 oignon
- 50 g de sucre en poudre
- 0.5 chou rouge
- 2 betterave cuite
- 4 c.à.s de crème fraîche épaisse

## Préparation

1. Commencez par la compotée d’oignons. Pour cela, épluchez et et coupez les oignons en lamelles. Placez une noix de beurre dans une casserole. Dès que celui-ci est fondu, ajoutez les oignons, le sucre et du sel (en fonction de vos goûts). Mélangez à l’aide d’une cuillère en bois, puis laissez compoter à feu moyen.
2. Pendant que les oignons caramélisent, coupez le chou rouge finement. Placez-le ensuite dans un bol et assaisonnez avec de l’huile de sésame et du vinaigre balsamique blanc. Salez et poivrez en fonction de vos goûts, puis mélangez. N’oubliez pas de remuer les oignons de temps en temps.
3. Dans la cuve d’un mixeur, placez la betterave cuite et complétez avec la crème fraîche épaisse. Salez, poivrez, puis mixez le tout jusqu’à obtenir un mélange homogène de couleur rose.
4. Vos oignons doivent être bien caramélisés. Retirez-les du feu et réservez. Dans une poêle bien chaude, faite revenir les steak hachés avec un filet d’huile végétale. Pendant qu’ils cuisent, coupez les pains à burger en deux et faites les griller au toaster.
5. Pour le dressage, placez un premier pain à burger devant vous et tartinez-le de crème à la betterave. Ajoutez le steak haché, ainsi qu’une généreuse cuillère d’oignons caramélisés. Finalisez avec une peu de chou rouge, puis étalez de nouveau de la crème de betterave sur le chapeau du burger avant de le déposer au dessus.

 
 

 
 Dégustez tant que c’est chaud, accompagné d’un peu de verdure ou d’une bonne portion de frites. Bon appétit !
