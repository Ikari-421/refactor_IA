---
schema: recette-web-jigme/v2
slug: hamburger-classique
title: Hamburger classique
lang: fr
description: "Hamburger classique : recette américaine avec pain à burger, viande hachée et oignon, pour 4 personnes. Version maison. Facile à suivre."
cuisine: américaine
category: salé
tags:
- salé
- boisson
- pain à burger
- plat
image:
  url:
  alt: Hamburger classique
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/hamburger-classique.md
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
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (tranche de fromage à raclette) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: protéines de soja texturées réhydratées
      to: lentilles vertes cuites
      note:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : protéines de soja texturées réhydratées → lentilles vertes cuites ; tofu
      fumé → pois chiches rôtis ; crème de soja ou avoine → crème d''avoine.'
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
histoire: 'Steak haché dans un pain rond. Le geste vient du steak de Hambourg (viande hachée assaisonnée),
  puis le sandwich américain se fixe aux États-Unis à la fin du XIXe s. et au début du XXe. Plusieurs
  villes s’en disputent l’invention ; aucune n’est tranchée.

  '
fun_facts:
- text: >
    Le bun brioché est un usage récent : le pain à hamburger classique est plus
    serré, pour tenir le jus.
  source_name: Usage
  source_url:
- text: >
    On raconte le steak de Hambourg apporté par des migrants allemands ; le
    sandwich, lui, est américain.
  source_name: Grokipedia, History of the hamburger
  source_url: https://grokipedia.com/page/History_of_the_hamburger
wines:
- name: Cahors
  producer: Château du Cèdre
  origin: Cahors, Sud-Ouest
  grapes: malbec
  award:
  why: Malbec, fruit noir — le bœuf haché, tanin présent sans un grand cru.
- name: Côtes du Rhône Villages
  producer: Domaine Brusset
  origin: Cairanne, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, poivre — la pancetta et l’oignon, pas un tanin de garde.
- name: Minervois
  producer: Château Coupe Roses
  origin: Minervois, Languedoc
  grapes: syrah, grenache
  award:
  why: Garrigue, fruit — le fromage coulant et le bœuf.
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
    - arachides
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 0
      total_min: 45
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
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: viande hachée
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de pancetta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de fromage à raclette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil plat
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment d'espelette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide
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
    - Cuisson. Épluchez et émincez vos oignons, puis ajoutez-les dans une casseroles avec de l’huile
      d’arachide. Dans un premier temps, faites caraméliser vos oignons à feu vif. Une fois
      qu’ils sont bien colorés, baissez le feu et laissez vos oignons compoter en mélangeant
      régulièrement.
    - Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat. Ajoutez
      le tout dans un récipient contenant votre viande hachée. Assaisonnez (sel, poivre, piment
      d’espelette) selon vos goûts puis mélangez. Vous pouvez maintenant utiliser cette préparation
      pour former des steak à l’aide de vos mains.
    - Mixage. Une fois prête, versez la compotée d’oignons dans un mixeur et mixez-la. Ajoutez-y une
      ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez votre
      compotée pour plus tard.
    - Cuisson. Dans une casserole, Faites chauffer votre fromage à raclette à feu doux. Pendant que
      le fromage fond, faites également chauffer une poêle avec un filet d’huile d’arachide
      pour y cuire les steak. Faites cuire la viande à votre convenance, bleue, saignante
      ou à point. En fin de cuisson, n’hésitez pas à ajouter une noisette de beurre dans la
      poêle et à en arroser la viande à l’aide d’une cuillère. Une fois cuite, réservez la
      viande.
    - Cuisson. Coupez vos pains à burger en deux et toastez-les à l’aide d’un grille-pain (ou à la
      poêle si vous n’en avez pas).
    - Cuisson. Dégraissez la poêle qui a servie à la cuisson de la viande et faites-y colorer à feu
      vif quelques tranches de pancetta.
    - Finition. Prenez tous vos pains toastés et étalez-y généreusement de la compotée d’oignons. Ajoutez
      votre steak, vos tranches de pancetta et versez ensuite le fromage à raclette fondu
      sur le tout. Ajoutez-y enfin quelques tranches de tomates et un peu de salade. Couvrez
      le tout avec le chapeau du burger…et c’est prêt ! Dressez votre magnifique burger et
      son fromage bien fondant dans une assiette. Accompagné de quelques frites et d’un peu
      de salade, il devrait faire un malheur. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez les oignons (coupez-les en lamelles), puis mettez-les dans une casserole avec de l’huile d’arachide. Faites-les d’abord caraméliser à feu vif. Une fois qu’ils sont bien colorés, baissez le feu et laissez-les compoter en mélangeant régulièrement."
      - "Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat (hachez-les menu). Ajoutez-les dans un récipient contenant votre viande hachée. Assaisonnez (sel, poivre, piment d’espelette) selon vos goûts, puis mélangez. Formez des steaks avec vos mains."
      - "Mixage. Versez la compotée d’oignons dans un mixeur et mixez. Ajoutez une ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez."
      - "Cuisson. Faites chauffer le fromage à raclette à feu doux dans une casserole. Pendant qu’il fond, faites chauffer une poêle avec un filet d’huile d’arachide et cuisez-y les steaks, bleus, saignants ou à point, selon votre convenance. En fin de cuisson, ajoutez une noisette de beurre dans la poêle et arrosez la viande à la cuillère. Réservez."
      - "Cuisson. Coupez les pains à burger en deux et toastez-les au grille-pain, ou à la poêle si vous n’en avez pas."
      - "Cuisson. Dégraissez la poêle qui a servi à la cuisson de la viande et faites-y colorer à feu vif quelques tranches de pancetta."
      - "Finition. Étalez généreusement la compotée d’oignons sur les pains toastés. Ajoutez le steak, les tranches de pancetta, puis versez le fromage à raclette fondu. Ajoutez quelques tranches de tomates et un peu de salade. Couvrez avec le chapeau du burger. Dressez dans une assiette. Accompagnez de quelques frites et d’un peu de salade."
      pro:
      - "Éplucher et émincer les oignons. Casserole, huile d’arachide. Caraméliser à feu vif. Une fois colorés, baisser le feu. Compoter en mélangeant régulièrement."
      - "Éplucher et ciseler finement échalotes et persil plat. Ajouter à la viande hachée. Assaisonner (sel, poivre, piment d’espelette). Mélanger. Former des steaks à la main."
      - "Mixer la compotée d’oignons. Ajouter une ou deux cuillères à soupe de crème liquide. Mixer à nouveau. Réserver."
      - "Chauffer le fromage à raclette à feu doux. Poêle, filet d’huile d’arachide : cuire les steaks bleus, saignants ou à point. Fin de cuisson : noisette de beurre, arroser à la cuillère. Réserver."
      - "Couper les pains à burger en deux. Toaster au grille-pain ou à la poêle."
      - "Dégraisser la poêle de cuisson de la viande. Colorer à feu vif quelques tranches de pancetta."
      - "Étaler la compotée d’oignons sur les pains toastés. Steak, pancetta, fromage à raclette fondu. Tranches de tomates, salade. Chapeau. Dresser. Accompagner de frites et de salade."
      cavernes:
      - "Cuisson. Oignons, éplucher, émincer. Casserole, huile arachide. Feu vif, caraméliser. Colorés, feu baisser. Compoter, mélanger."
      - "Cuisson. Échalotes, persil plat, éplucher, ciseler fin. Récipient viande hachée, ajouter. Sel, poivre, piment d’espelette. Mélanger. Mains, steaks."
      - "Mixage. Compotée oignons, mixeur, mixer. 1 ou 2 cuillères soupe crème liquide, mixer encore. Réserver."
      - "Cuisson. Fromage raclette, casserole, feu doux. Poêle, filet huile arachide, steaks. Convenance : bleue, saignante ou point. Fin cuisson, noisette beurre, arroser cuillère. Viande, réserver."
      - "Cuisson. Pains burger, couper deux. Grille-pain, toaster, ou poêle."
      - "Cuisson. Poêle viande, dégraisser. Tranches pancetta, feu vif, colorer."
      - "Finition. Pains toastés, compotée oignons, étaler. Steak, tranches pancetta. Fromage raclette fondu, verser. Tranches tomates, peu salade. Chapeau burger. Assiette. Frites, peu salade."
    kcal_per_serving: 384
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
    - arachides
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: protéines de soja texturées réhydratées
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de fromage à raclette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil plat
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment d'espelette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide
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
    - Cuisson. Épluchez et émincez vos oignons, puis ajoutez-les dans une casseroles avec de l’huile
      d’arachide. Dans un premier temps, faites caraméliser vos oignons à feu vif. Une fois
      qu’ils sont bien colorés, baissez le feu et laissez vos oignons compoter en mélangeant
      régulièrement.
    - Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat. Ajoutez
      le tout dans un récipient contenant votre protéines de soja. Assaisonnez (sel, poivre,
      piment d’espelette) selon vos goûts puis mélangez. Vous pouvez maintenant utiliser cette
      préparation pour former des steak à l’aide de vos mains.
    - Mixage. Une fois prête, versez la compotée d’oignons dans un mixeur et mixez-la. Ajoutez-y une
      ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez votre
      compotée pour plus tard.
    - Cuisson. Dans une casserole, Faites chauffer votre fromage à raclette à feu doux. Pendant que
      le fromage fond, faites également chauffer une poêle avec un filet d’huile d’arachide
      pour y cuire les steak. Faites cuire la protéines de soja à votre convenance, bleue,
      saignante ou à point. En fin de cuisson, n’hésitez pas à ajouter une noisette de beurre
      dans la poêle et à en arroser la protéines de soja à l’aide d’une cuillère. Une fois
      cuite, réservez la protéines de soja.
    - Cuisson. Coupez vos pains à burger en deux et toastez-les à l’aide d’un grille-pain (ou à la
      poêle si vous n’en avez pas).
    - Cuisson. Dégraissez la poêle qui a servie à la cuisson de la protéines de soja et faites-y colorer
      à feu vif quelques tranches de tofu fumé.
    - Finition. Prenez tous vos pains toastés et étalez-y généreusement de la compotée d’oignons. Ajoutez
      votre steak, vos tranches de tofu fumé et versez ensuite le fromage à raclette fondu
      sur le tout. Ajoutez-y enfin quelques tranches de tomates et un peu de salade. Couvrez
      le tout avec le chapeau du burger…et c’est prêt ! Dressez votre magnifique burger et
      son fromage bien fondant dans une assiette. Accompagné de quelques frites et d’un peu
      de salade, il devrait faire un malheur. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez les oignons (coupez-les en lamelles), puis mettez-les dans une casserole avec de l’huile d’arachide. Faites-les d’abord caraméliser à feu vif. Une fois qu’ils sont bien colorés, baissez le feu et laissez-les compoter en mélangeant régulièrement."
      - "Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat (hachez-les menu). Ajoutez-les dans un récipient contenant vos protéines de soja. Assaisonnez (sel, poivre, piment d’espelette) selon vos goûts, puis mélangez. Formez des steaks avec vos mains."
      - "Mixage. Versez la compotée d’oignons dans un mixeur et mixez. Ajoutez une ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez."
      - "Cuisson. Faites chauffer le fromage à raclette à feu doux dans une casserole. Pendant qu’il fond, faites chauffer une poêle avec un filet d’huile d’arachide et cuisez-y les steaks. Faites cuire les protéines de soja à votre convenance, bleues, saignantes ou à point. En fin de cuisson, ajoutez une noisette de beurre dans la poêle et arrosez les protéines de soja à la cuillère. Réservez."
      - "Cuisson. Coupez les pains à burger en deux et toastez-les au grille-pain, ou à la poêle si vous n’en avez pas."
      - "Cuisson. Dégraissez la poêle qui a servi à la cuisson des protéines de soja et faites-y colorer à feu vif quelques tranches de tofu fumé."
      - "Finition. Étalez généreusement la compotée d’oignons sur les pains toastés. Ajoutez le steak, les tranches de tofu fumé, puis versez le fromage à raclette fondu. Ajoutez quelques tranches de tomates et un peu de salade. Couvrez avec le chapeau du burger. Dressez dans une assiette. Accompagnez de quelques frites et d’un peu de salade."
      pro:
      - "Éplucher et émincer les oignons. Casserole, huile d’arachide. Caraméliser à feu vif. Une fois colorés, baisser le feu. Compoter en mélangeant régulièrement."
      - "Éplucher et ciseler finement échalotes et persil plat. Ajouter aux protéines de soja. Assaisonner (sel, poivre, piment d’espelette). Mélanger. Former des steaks à la main."
      - "Mixer la compotée d’oignons. Ajouter une ou deux cuillères à soupe de crème liquide. Mixer à nouveau. Réserver."
      - "Chauffer le fromage à raclette à feu doux. Poêle, filet d’huile d’arachide : cuire les steaks. Cuire les protéines de soja à convenance, bleues, saignantes ou à point. Fin de cuisson : noisette de beurre, arroser à la cuillère. Réserver."
      - "Couper les pains à burger en deux. Toaster au grille-pain ou à la poêle."
      - "Dégraisser la poêle de cuisson des protéines de soja. Colorer à feu vif quelques tranches de tofu fumé."
      - "Étaler la compotée d’oignons sur les pains toastés. Steak, tofu fumé, fromage à raclette fondu. Tranches de tomates, salade. Chapeau. Dresser. Accompagner de frites et de salade."
      cavernes:
      - "Cuisson. Oignons, éplucher, émincer. Casserole, huile arachide. Feu vif, caraméliser. Colorés, feu baisser. Compoter, mélanger."
      - "Cuisson. Échalotes, persil plat, éplucher, ciseler fin. Récipient protéines soja, ajouter. Sel, poivre, piment d’espelette. Mélanger. Mains, steaks."
      - "Mixage. Compotée oignons, mixeur, mixer. 1 ou 2 cuillères soupe crème liquide, mixer encore. Réserver."
      - "Cuisson. Fromage raclette, casserole, feu doux. Poêle, filet huile arachide, steaks. Protéines soja, convenance : bleue, saignante ou point. Fin cuisson, noisette beurre, arroser cuillère. Protéines soja, réserver."
      - "Cuisson. Pains burger, couper deux. Grille-pain, toaster, ou poêle."
      - "Cuisson. Poêle protéines soja, dégraisser. Tranches tofu fumé, feu vif, colorer."
      - "Finition. Pains toastés, compotée oignons, étaler. Steak, tranches tofu fumé. Fromage raclette fondu, verser. Tranches tomates, peu salade. Chapeau burger. Assiette. Frites, peu salade."
    kcal_per_serving: 384
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: protéines de soja texturées réhydratées
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil plat
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment d'espelette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème de soja ou avoine
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
    - Cuisson. Épluchez et émincez vos oignons, puis ajoutez-les dans une casseroles avec de l’huile
      d’arachide. Dans un premier temps, faites caraméliser vos oignons à feu vif. Une fois
      qu’ils sont bien colorés, baissez le feu et laissez vos oignons compoter en mélangeant
      régulièrement.
    - Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat. Ajoutez
      le tout dans un récipient contenant votre protéines de soja. Assaisonnez (sel, poivre,
      piment d’espelette) selon vos goûts puis mélangez. Vous pouvez maintenant utiliser cette
      préparation pour former des steak à l’aide de vos mains.
    - Mixage. Une fois prête, versez la compotée d’oignons dans un mixeur et mixez-la. Ajoutez-y une
      ou deux cuillères à soupe de crème de soja ou avoine, puis mixez une nouvelle fois.
      Réservez votre compotée pour plus tard.
    - Cuisson. Dans une casserole, Faites chauffer le fromage végétal à feu doux. Pendant qu’il fond, faites également chauffer une poêle avec un filet d’huile d’arachide
      pour y cuire les steak. Faites cuire la protéines de soja à votre convenance, bleue,
      saignante ou à point. En fin de cuisson, n’hésitez pas à ajouter une noisette de margarine
      végétale dans la poêle et à en arroser la protéines de soja à l’aide d’une
      cuillère. Une fois cuite, réservez la protéines de soja.
    - Cuisson. Coupez vos pains à burger en deux et toastez-les à l’aide d’un grille-pain (ou à la
      poêle si vous n’en avez pas).
    - Cuisson. Dégraissez la poêle qui a servie à la cuisson de la protéines de soja et faites-y colorer
      à feu vif quelques tranches de tofu fumé.
    - Finition. Prenez tous vos pains toastés et étalez-y généreusement de la compotée d’oignons. Ajoutez
      votre steak, vos tranches de tofu fumé et versez ensuite le fromage végétal fondu sur le tout. Ajoutez-y enfin quelques tranches de tomates et un peu de salade. Couvrez
      le tout avec le chapeau du burger…et c’est prêt ! Dressez votre magnifique burger et
      son fromage bien fondant dans une assiette. Accompagné de quelques frites et d’un peu
      de salade, il devrait faire un malheur. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez les oignons (coupez-les en lamelles), puis mettez-les dans une casserole avec de l’huile d’arachide. Faites-les d’abord caraméliser à feu vif. Une fois qu’ils sont bien colorés, baissez le feu et laissez-les compoter en mélangeant régulièrement."
      - "Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat (hachez-les menu). Ajoutez-les dans un récipient contenant vos protéines de soja. Assaisonnez (sel, poivre, piment d’espelette) selon vos goûts, puis mélangez. Formez des steaks avec vos mains."
      - "Mixage. Versez la compotée d’oignons dans un mixeur et mixez. Ajoutez une ou deux cuillères à soupe de crème de soja ou d’avoine, puis mixez une nouvelle fois. Réservez."
      - "Cuisson. Faites chauffer le fromage végétal à feu doux dans une casserole. Pendant qu’il fond, faites chauffer une poêle avec un filet d’huile d’arachide et cuisez-y les steaks. Faites cuire les protéines de soja à votre convenance, bleues, saignantes ou à point. En fin de cuisson, ajoutez une noisette de margarine végétale dans la poêle et arrosez les protéines de soja à la cuillère. Réservez."
      - "Cuisson. Coupez les pains à burger en deux et toastez-les au grille-pain, ou à la poêle si vous n’en avez pas."
      - "Cuisson. Dégraissez la poêle qui a servi à la cuisson des protéines de soja et faites-y colorer à feu vif quelques tranches de tofu fumé."
      - "Finition. Étalez généreusement la compotée d’oignons sur les pains toastés. Ajoutez le steak, les tranches de tofu fumé, puis versez le fromage végétal fondu. Ajoutez quelques tranches de tomates et un peu de salade. Couvrez avec le chapeau du burger. Dressez dans une assiette. Accompagnez de quelques frites et d’un peu de salade."
      pro:
      - "Éplucher et émincer les oignons. Casserole, huile d’arachide. Caraméliser à feu vif. Une fois colorés, baisser le feu. Compoter en mélangeant régulièrement."
      - "Éplucher et ciseler finement échalotes et persil plat. Ajouter aux protéines de soja. Assaisonner (sel, poivre, piment d’espelette). Mélanger. Former des steaks à la main."
      - "Mixer la compotée d’oignons. Ajouter une ou deux cuillères à soupe de crème de soja ou d’avoine. Mixer à nouveau. Réserver."
      - "Chauffer le fromage végétal à feu doux. Poêle, filet d’huile d’arachide : cuire les steaks. Cuire les protéines de soja à convenance, bleues, saignantes ou à point. Fin de cuisson : noisette de margarine végétale, arroser à la cuillère. Réserver."
      - "Couper les pains à burger en deux. Toaster au grille-pain ou à la poêle."
      - "Dégraisser la poêle de cuisson des protéines de soja. Colorer à feu vif quelques tranches de tofu fumé."
      - "Étaler la compotée d’oignons sur les pains toastés. Steak, tofu fumé, fromage végétal fondu. Tranches de tomates, salade. Chapeau. Dresser. Accompagner de frites et de salade."
      cavernes:
      - "Cuisson. Oignons, éplucher, émincer. Casserole, huile arachide. Feu vif, caraméliser. Colorés, feu baisser. Compoter, mélanger."
      - "Cuisson. Échalotes, persil plat, éplucher, ciseler fin. Récipient protéines soja, ajouter. Sel, poivre, piment d’espelette. Mélanger. Mains, steaks."
      - "Mixage. Compotée oignons, mixeur, mixer. 1 ou 2 cuillères soupe crème soja ou avoine, mixer encore. Réserver."
      - "Cuisson. Fromage végétal, casserole, feu doux. Poêle, filet huile arachide, steaks. Protéines soja, convenance : bleue, saignante ou point. Fin cuisson, noisette margarine végétale, arroser cuillère. Protéines soja, réserver."
      - "Cuisson. Pains burger, couper deux. Grille-pain, toaster, ou poêle."
      - "Cuisson. Poêle protéines soja, dégraisser. Tranches tofu fumé, feu vif, colorer."
      - "Finition. Pains toastés, compotée oignons, étaler. Steak, tranches tofu fumé. Fromage végétal fondu, verser. Tranches tomates, peu salade. Chapeau burger. Assiette. Frites, peu salade."
    kcal_per_serving: 409
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
    - arachides
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: pain à burger
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: protéines de soja texturées réhydratées
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de fromage à raclette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: salade
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: persil plat
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment d'espelette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide
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
    - Cuisson. Épluchez et émincez vos oignons, puis ajoutez-les dans une casseroles avec de l’huile
      d’arachide. Dans un premier temps, faites caraméliser vos oignons à feu vif. Une fois
      qu’ils sont bien colorés, baissez le feu et laissez vos oignons compoter en mélangeant
      régulièrement.
    - Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat. Ajoutez
      le tout dans un récipient contenant votre protéines de soja. Assaisonnez (sel, poivre,
      piment d’espelette) selon vos goûts puis mélangez. Vous pouvez maintenant utiliser cette
      préparation pour former des steak à l’aide de vos mains.
    - Mixage. Une fois prête, versez la compotée d’oignons dans un mixeur et mixez-la. Ajoutez-y une
      ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez votre
      compotée pour plus tard.
    - Cuisson. Dans une casserole, Faites chauffer votre fromage à raclette à feu doux. Pendant que
      le fromage fond, faites également chauffer une poêle avec un filet d’huile d’arachide
      pour y cuire les steak. Faites cuire la protéines de soja à votre convenance, bleue,
      saignante ou à point. En fin de cuisson, n’hésitez pas à ajouter une noisette de beurre
      dans la poêle et à en arroser la protéines de soja à l’aide d’une cuillère. Une fois
      cuite, réservez la protéines de soja.
    - Cuisson. Coupez vos pains à burger en deux et toastez-les à l’aide d’un grille-pain (ou à la
      poêle si vous n’en avez pas).
    - Cuisson. Dégraissez la poêle qui a servie à la cuisson de la protéines de soja et faites-y colorer
      à feu vif quelques tranches de tofu fumé.
    - Finition. Prenez tous vos pains toastés et étalez-y généreusement de la compotée d’oignons. Ajoutez
      votre steak, vos tranches de tofu fumé et versez ensuite le fromage à raclette fondu
      sur le tout. Ajoutez-y enfin quelques tranches de tomates et un peu de salade. Couvrez
      le tout avec le chapeau du burger…et c’est prêt ! Dressez votre magnifique burger et
      son fromage bien fondant dans une assiette. Accompagné de quelques frites et d’un peu
      de salade, il devrait faire un malheur. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez les oignons (coupez-les en lamelles), puis mettez-les dans une casserole avec de l’huile d’arachide. Faites-les d’abord caraméliser à feu vif. Une fois qu’ils sont bien colorés, baissez le feu et laissez-les compoter en mélangeant régulièrement."
      - "Cuisson. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat (hachez-les menu). Ajoutez-les dans un récipient contenant vos protéines de soja. Assaisonnez (sel, poivre, piment d’espelette) selon vos goûts, puis mélangez. Formez des steaks avec vos mains."
      - "Mixage. Versez la compotée d’oignons dans un mixeur et mixez. Ajoutez une ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez."
      - "Cuisson. Faites chauffer le fromage à raclette à feu doux dans une casserole. Pendant qu’il fond, faites chauffer une poêle avec un filet d’huile d’arachide et cuisez-y les steaks. Faites cuire les protéines de soja à votre convenance, bleues, saignantes ou à point. En fin de cuisson, ajoutez une noisette de beurre dans la poêle et arrosez les protéines de soja à la cuillère. Réservez."
      - "Cuisson. Coupez les pains à burger en deux et toastez-les au grille-pain, ou à la poêle si vous n’en avez pas."
      - "Cuisson. Dégraissez la poêle qui a servi à la cuisson des protéines de soja et faites-y colorer à feu vif quelques tranches de tofu fumé."
      - "Finition. Étalez généreusement la compotée d’oignons sur les pains toastés. Ajoutez le steak, les tranches de tofu fumé, puis versez le fromage à raclette fondu. Ajoutez quelques tranches de tomates et un peu de salade. Couvrez avec le chapeau du burger. Dressez dans une assiette. Accompagnez de quelques frites et d’un peu de salade."
      pro:
      - "Éplucher et émincer les oignons. Casserole, huile d’arachide. Caraméliser à feu vif. Une fois colorés, baisser le feu. Compoter en mélangeant régulièrement."
      - "Éplucher et ciseler finement échalotes et persil plat. Ajouter aux protéines de soja. Assaisonner (sel, poivre, piment d’espelette). Mélanger. Former des steaks à la main."
      - "Mixer la compotée d’oignons. Ajouter une ou deux cuillères à soupe de crème liquide. Mixer à nouveau. Réserver."
      - "Chauffer le fromage à raclette à feu doux. Poêle, filet d’huile d’arachide : cuire les steaks. Cuire les protéines de soja à convenance, bleues, saignantes ou à point. Fin de cuisson : noisette de beurre, arroser à la cuillère. Réserver."
      - "Couper les pains à burger en deux. Toaster au grille-pain ou à la poêle."
      - "Dégraisser la poêle de cuisson des protéines de soja. Colorer à feu vif quelques tranches de tofu fumé."
      - "Étaler la compotée d’oignons sur les pains toastés. Steak, tofu fumé, fromage à raclette fondu. Tranches de tomates, salade. Chapeau. Dresser. Accompagner de frites et de salade."
      cavernes:
      - "Cuisson. Oignons, éplucher, émincer. Casserole, huile arachide. Feu vif, caraméliser. Colorés, feu baisser. Compoter, mélanger."
      - "Cuisson. Échalotes, persil plat, éplucher, ciseler fin. Récipient protéines soja, ajouter. Sel, poivre, piment d’espelette. Mélanger. Mains, steaks."
      - "Mixage. Compotée oignons, mixeur, mixer. 1 ou 2 cuillères soupe crème liquide, mixer encore. Réserver."
      - "Cuisson. Fromage raclette, casserole, feu doux. Poêle, filet huile arachide, steaks. Protéines soja, convenance : bleue, saignante ou point. Fin cuisson, noisette beurre, arroser cuillère. Protéines soja, réserver."
      - "Cuisson. Pains burger, couper deux. Grille-pain, toaster, ou poêle."
      - "Cuisson. Poêle protéines soja, dégraisser. Tranches tofu fumé, feu vif, colorer."
      - "Finition. Pains toastés, compotée oignons, étaler. Steak, tranches tofu fumé. Fromage raclette fondu, verser. Tranches tomates, peu salade. Chapeau burger. Assiette. Frites, peu salade."
    kcal_per_serving: 384
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Cuire à cœur pour les personnes fragiles."}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "viande hachée ; crème"

---

# Hamburger classique
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/hamburger-classique]]

## Ingrédients (4 personnes)

- 4 pain à burger
- 600 g de viande hachée
- 2 oignon
- 2 échalote
- 4 tranche de pancetta
- 2 tomate
- 4 tranche de fromage à raclette
- 3 c.à.s d'huile d'arachide
-  salade
-  persil plat
-  piment d'espelette
-  crème liquide
-  beurre

## Préparation

1. Épluchez et émincez vos oignons, puis ajoutez-les dans une casseroles avec de l’huile d’arachide. Dans un premier temps, faites caraméliser vos oignons à feu vif. Une fois qu’ils sont bien colorés, baissez le feu et laissez vos oignons compoter en mélangeant régulièrement.
2. Pendant ce temps, épluchez et ciselez finement les échalotes et le persil plat. Ajoutez le tout dans un récipient contenant votre viande hachée. Assaisonnez (sel, poivre, piment d’espelette) selon vos goûts puis mélangez. Vous pouvez maintenant utiliser cette préparation pour former des steak à l’aide de vos mains.
3. Une fois prête, versez la compotée d’oignons dans un mixeur et mixez-la. Ajoutez-y une ou deux cuillères à soupe de crème liquide, puis mixez une nouvelle fois. Réservez votre compotée pour plus tard.
4. Dans une casserole, Faites chauffer votre fromage à raclette à feu doux. Pendant que le fromage fond, faites également chauffer une poêle avec un filet d’huile d’arachide pour y cuire les steak. Faites cuire la viande à votre convenance, bleue, saignante ou à point. En fin de cuisson, n’hésitez pas à ajouter une noisette de beurre dans la poêle et à en arroser la viande à l’aide d’une cuillère. Une fois cuite, réservez la viande.
5. Coupez vos pains à burger en deux et toastez-les à l’aide d’un grille-pain (ou à la poêle si vous n’en avez pas).
6. Dégraissez la poêle qui a servie à la cuisson de la viande et faites-y colorer à feu vif quelques tranches de pancetta.
7. Prenez tous vos pains toastés et étalez-y généreusement de la compotée d’oignons. Ajoutez votre steak, vos tranches de pancetta et versez ensuite le fromage à raclette fondu sur le tout. Ajoutez-y enfin quelques tranches de tomates et un peu de salade. Couvrez le tout avec le chapeau du burger…et c’est prêt !

 
 

 
 Dressez votre magnifique burger et son fromage bien fondant dans une assiette. Accompagné de quelques frites et d’un peu de salade, il devrait faire un malheur. Bon appétit !
