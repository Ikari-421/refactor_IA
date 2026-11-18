---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
- ref: econome
slug: foret-noire
title: Forêt noire
lang: fr
description: "Forêt noire : recette française avec œuf, sucre et farine, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: allemande
category: sucré
tags:
- sucré
- dessert
- gâteau
- végétarien
- œuf
image:
  url:
  alt: Forêt noire
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/foret-noire.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Gâteau allemand (Schwarzwälder Kirschtorte) : génoise cacao, cerises, kirsch, crème fouettée.
  La recette écrite apparaît dans les années 1930 ; on raconte qu’un pâtissier, Josef Keller, l’aurait
  créée vers 1915. On le rattache à la Forêt-Noire au début du XXe s.

  '
fun_facts:
- text: Le kirsch (eau-de-vie de cerise) n’est pas facultatif dans la version allemande ; sans lui, ce
    n’est plus tout à fait une Forêt-Noire.
  source_name: Wikipedia, Black Forest gateau
  source_url: https://en.wikipedia.org/wiki/Black_Forest_gateau
- text: On raconte plusieurs paternités (cafés de Forêt-Noire, pâtissiers du XXe s.) ; aucune n’est tranchée.
  source_name: Wikipedia, Black Forest gateau
  source_url: https://en.wikipedia.org/wiki/Black_Forest_gateau
- text: 'Pour aller plus loin : l’histoire de « Forêt noire ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Black_Forest_gateau
wines:
- name: Crémant d'Alsace
  producer: Dopff au Moulin
  origin: Riquewihr, Alsace
  grapes: pinot blanc, auxerrois
  award:
  why: Bulles, pomme — la crème et la cerise, sans un liquoreux lourd.
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cerise noire, cacao — le gâteau, tanin doux.
- name: Gewurztraminer
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, rose — la cerise à l’eau-de-vie, un blanc aromatique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 20
      rest_min: 120
      total_min: 170
    equipment: &id002
    - four
    - saladier
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: maïzena
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: cacao en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 750
      unit: ml
      item: crème
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre glace
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: boîte de cerises amarenas
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tablette de chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Cassez vos oeufs dans une cuve à batteur. Ajoutez 2/3 de la quantité de sucre demandée
      puis mixez (on dit aussi « blanchir les oeufs »).
    - Mélange. Dans un saladier, mélangez la farine, la maïzena et le cacao en poudre. Incorporez le
      tout aux oeufs, petit à petit, et mélangez bien pour qu’il n’y ait pas de grumeaux.
      Vous venez de réaliser une génoise !
    - Cuisson. Placez votre préparation dans un moule allant au fou, préalablement beurré. Enfournez-le
      à 180°C pendant 20 à 25 minutes. Lorsque votre génoise est cuite, laissez-la reposer
      2 heures avant de poursuivre la recette.
    - Cuisson. Il est maintenant temps de passer à la chantilly. Dans la cuve d’un batteur, versez
      la crème liquide, puis incorporez le reste de sucre en poudre (le 1/3 restant) au fur
      et à mesure pendant que le batteur tourne. Votre chantilly est prête quand la matière
      se tient bien. Placez la chantilly dans une poche à douille.
    - Cuisson. Retirez la croûte au dessus de votre génoise et coupez-la ensuite horizontalement, en
      trois parties égales. Vous devez obtenir trois génoises identiques.
    - Cuisson. Récupérez le sirop de vos cerises amarenas et imbibez-en chacune de vos génoises à l’aide
      d’un pinceau.
    - Cuisson. Étalez la chantilly sur toute la surface de votre première génoise à l’aide la poche
      à douille. Disposez ensuite quelques cerises (n’hésitez pas à regarder la vidéo ci-dessous
      pour réaliser un montage parfait).
    - Cuisson. Ajoutez la deuxième génoise au dessus de votre préparation, appuyez légèrement dessus
      puis répétez l’opération (chantilly et cerises).
    - Cuisson. Disposez la dernière génoise sur votre préparation. Réalisez un glaçage sur tout le
      gâteau en étalant de la chantilly sur l’intégralité de votre préparation (au dessus
      et sur les bords). Le gâteau doit être complètement blanc.
    - Finition. Râpez votre tablette de chocolat à l’aide d’un économe et saupoudrez le gâteau. Ajoutez
      quelques touche de chantilly et des cerises pour finaliser la déco de votre Forêt-Noire.
      Découpez de groooosses parts de gâteau et dégustez-le en dessert, en famille ou entre
      amis. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Cassez vos œufs dans une cuve à batteur. Ajoutez 2/3 de la quantité de sucre demandée puis mixez (on dit aussi « blanchir les œufs »)."
      - "Mélange. Dans un saladier, mélangez la farine, la maïzena et le cacao en poudre. Incorporez le tout aux œufs, petit à petit, et mélangez bien pour qu’il n’y ait pas de grumeaux. Vous venez de réaliser une génoise."
      - "Cuisson. Placez votre préparation dans un moule allant au fou, préalablement beurré. Enfournez-le à 180°C pendant 20 à 25 minutes. Lorsque votre génoise est cuite, laissez-la reposer 2 heures avant de poursuivre la recette."
      - "Cuisson. Dans la cuve d’un batteur, versez la crème liquide, puis incorporez le reste de sucre en poudre (le 1/3 restant) au fur et à mesure pendant que le batteur tourne. Votre chantilly est prête quand la matière se tient bien. Placez la chantilly dans une poche à douille."
      - "Cuisson. Retirez la croûte au-dessus de votre génoise et coupez-la ensuite horizontalement, en trois parties égales. Vous devez obtenir trois génoises identiques."
      - "Cuisson. Récupérez le sirop de vos cerises amarenas et imbibez-en chacune de vos génoises à l’aide d’un pinceau."
      - "Cuisson. Étalez la chantilly sur toute la surface de votre première génoise à l’aide de la poche à douille. Disposez ensuite quelques cerises."
      - "Cuisson. Ajoutez la deuxième génoise au-dessus de votre préparation, appuyez légèrement dessus, puis répétez l’opération (chantilly et cerises)."
      - "Cuisson. Disposez la dernière génoise sur votre préparation. Réalisez un glaçage sur tout le gâteau en étalant de la chantilly sur l’intégralité de votre préparation (au-dessus et sur les bords). Le gâteau doit être complètement blanc."
      - "Finition. Râpez votre tablette de chocolat à l’aide d’un économe et saupoudrez le gâteau. Ajoutez quelques touche de chantilly et des cerises pour finaliser la déco de votre Forêt-Noire."
      pro:
      - "Préparation. Casser les œufs dans une cuve à batteur. Ajouter 2/3 du sucre puis mixer (blanchir les œufs)."
      - "Mélange. Mélanger farine, maïzena et cacao en poudre dans un saladier. Incorporer progressivement aux œufs et mélanger jusqu’à absence de grumeaux. Génoise."
      - "Cuisson. Verser dans un moule allant au fou, préalablement beurré. Enfourner à 180°C pendant 20 à 25 minutes. Laisser reposer 2 heures."
      - "Cuisson. Verser la crème liquide dans la cuve d’un batteur. Incorporer le 1/3 de sucre en poudre restant au fur et à mesure pendant que le batteur tourne, jusqu’à ce que la matière se tienne. Dresser en poche à douille."
      - "Cuisson. Retirer la croûte au-dessus de la génoise. Couper horizontalement en trois parties égales."
      - "Cuisson. Imbiber chaque génoise du sirop des cerises amarenas au pinceau."
      - "Cuisson. Étaler la chantilly sur toute la surface de la première génoise à la poche à douille. Disposer quelques cerises."
      - "Cuisson. Poser la deuxième génoise, appuyer légèrement, puis répéter chantilly et cerises."
      - "Cuisson. Poser la dernière génoise. Glaçage : étaler la chantilly dessus et sur les bords jusqu’à gâteau complètement blanc."
      - "Finition. Râper la tablette de chocolat à l’économe et saupoudrer le gâteau. Ajouter quelques touche de chantilly et des cerises."
      cavernes:
      - "Préparation. Œufs, cuve batteur, casser. 2/3 sucre, ajouter. Mixer."
      - "Mélange. Farine, maïzena, cacao poudre, saladier, mélanger. Œufs, incorporer petit à petit. Mélanger, zéro grumeaux. Génoise."
      - "Cuisson. Préparation, moule fou, beurré. Enfourner 20-25 min 180 °C. Génoise cuite, reposer 2 h."
      - "Cuisson. Crème liquide, cuve batteur, verser. 1/3 sucre poudre restant, incorporer fur mesure, batteur tourne. Matière tient, chantilly prête. Chantilly, poche douille."
      - "Cuisson. Croûte génoise dessus, retirer. Couper horizontalement, trois parties égales. Trois génoises identiques."
      - "Cuisson. Sirop cerises amarenas, récupérer. Génoises, pinceau, imbiber."
      - "Cuisson. Chantilly, première génoise, poche douille, étaler. Cerises, disposer."
      - "Cuisson. Deuxième génoise, dessus, ajouter. Appuyer légèrement. Répéter, chantilly, cerises."
      - "Cuisson. Dernière génoise, disposer. Glaçage, chantilly, étaler dessus, bords. Gâteau blanc."
      - "Finition. Tablette chocolat, économe, râper. Gâteau, saupoudrer. Touche chantilly, cerises, déco."
    kcal_per_serving: 538
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 538
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
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
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: maïzena
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: cacao en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 750
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre glace
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: boîte de cerises amarenas
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tablette de chocolat
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
    - Mixage. Versez l’œuf de lin (ou le tofu soyeux) dans une cuve à batteur. Ajoutez 2/3 de la quantité de sucre demandée puis mixez.
    - Mélange. Dans un saladier, mélangez la farine, la maïzena et le cacao en poudre. Incorporez le tout à l’appareil, petit à petit, et mélangez bien pour qu’il n’y ait pas de grumeaux.
      Vous venez de réaliser une génoise !
    - Cuisson. Placez votre préparation dans un moule allant au fou, préalablement graissé avec de la margarine végétale. Enfournez-le
      à 180°C pendant 20 à 25 minutes. Lorsque votre génoise est cuite, laissez-la reposer
      2 heures avant de poursuivre la recette.
    - Cuisson. Il est maintenant temps de passer à la chantilly. Dans la cuve d’un batteur, versez
      la crème de soja ou avoine liquide, puis incorporez le reste de sucre en poudre (le
      1/3 restant) au fur et à mesure pendant que le batteur tourne. Votre chantilly est prête
      quand la matière se tient bien. Placez la chantilly dans une poche à douille.
    - Cuisson. Retirez la croûte au dessus de votre génoise et coupez-la ensuite horizontalement, en
      trois parties égales. Vous devez obtenir trois génoises identiques.
    - Cuisson. Récupérez le sirop de vos cerises amarenas et imbibez-en chacune de vos génoises à l’aide
      d’un pinceau.
    - Cuisson. Étalez la chantilly sur toute la surface de votre première génoise à l’aide la poche
      à douille. Disposez ensuite quelques cerises (n’hésitez pas à regarder la vidéo ci-dessous
      pour réaliser un montage parfait).
    - Cuisson. Ajoutez la deuxième génoise au dessus de votre préparation, appuyez légèrement dessus
      puis répétez l’opération (chantilly et cerises).
    - Cuisson. Disposez la dernière génoise sur votre préparation. Réalisez un glaçage sur tout le
      gâteau en étalant de la chantilly sur l’intégralité de votre préparation (au dessus
      et sur les bords). Le gâteau doit être complètement blanc.
    - Finition. Râpez votre tablette de chocolat à l’aide d’un économe et saupoudrez le gâteau. Ajoutez
      quelques touche de chantilly et des cerises pour finaliser la déco de votre Forêt-Noire.
      Découpez de groooosses parts de gâteau et dégustez-le en dessert, en famille ou entre
      amis. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mixage. Versez l’œuf de lin (ou le tofu soyeux) dans une cuve à batteur. Ajoutez 2/3 de la quantité de sucre demandée puis mixez."
      - "Mélange. Dans un saladier, mélangez la farine, la maïzena et le cacao en poudre. Incorporez le tout à l’appareil, petit à petit, et mélangez bien pour qu’il n’y ait pas de grumeaux. Vous venez de réaliser une génoise."
      - "Cuisson. Placez votre préparation dans un moule allant au fou, préalablement graissé avec de la margarine végétale. Enfournez-le à 180°C pendant 20 à 25 minutes. Lorsque votre génoise est cuite, laissez-la reposer 2 heures avant de poursuivre la recette."
      - "Cuisson. Dans la cuve d’un batteur, versez la crème de soja ou avoine liquide, puis incorporez le reste de sucre en poudre (le 1/3 restant) au fur et à mesure pendant que le batteur tourne. Votre chantilly est prête quand la matière se tient bien. Placez la chantilly dans une poche à douille."
      - "Cuisson. Retirez la croûte au-dessus de votre génoise et coupez-la ensuite horizontalement, en trois parties égales. Vous devez obtenir trois génoises identiques."
      - "Cuisson. Récupérez le sirop de vos cerises amarenas et imbibez-en chacune de vos génoises à l’aide d’un pinceau."
      - "Cuisson. Étalez la chantilly sur toute la surface de votre première génoise à l’aide de la poche à douille. Disposez ensuite quelques cerises."
      - "Cuisson. Ajoutez la deuxième génoise au-dessus de votre préparation, appuyez légèrement dessus, puis répétez l’opération (chantilly et cerises)."
      - "Cuisson. Disposez la dernière génoise sur votre préparation. Réalisez un glaçage sur tout le gâteau en étalant de la chantilly sur l’intégralité de votre préparation (au-dessus et sur les bords). Le gâteau doit être complètement blanc."
      - "Finition. Râpez votre tablette de chocolat à l’aide d’un économe et saupoudrez le gâteau. Ajoutez quelques touche de chantilly et des cerises pour finaliser la déco de votre Forêt-Noire."
      pro:
      - "Mixage. Verser l’œuf de lin ou le tofu soyeux dans une cuve à batteur. Ajouter 2/3 du sucre puis mixer."
      - "Mélange. Mélanger farine, maïzena et cacao en poudre dans un saladier. Incorporer progressivement à l’appareil et mélanger jusqu’à absence de grumeaux. Génoise."
      - "Cuisson. Verser dans un moule allant au fou, préalablement graissé à la margarine végétale. Enfourner à 180°C pendant 20 à 25 minutes. Laisser reposer 2 heures."
      - "Cuisson. Verser la crème de soja ou d’avoine liquide dans la cuve d’un batteur. Incorporer le 1/3 de sucre en poudre restant au fur et à mesure pendant que le batteur tourne, jusqu’à ce que la matière se tienne. Dresser en poche à douille."
      - "Cuisson. Retirer la croûte au-dessus de la génoise. Couper horizontalement en trois parties égales."
      - "Cuisson. Imbiber chaque génoise du sirop des cerises amarenas au pinceau."
      - "Cuisson. Étaler la chantilly sur toute la surface de la première génoise à la poche à douille. Disposer quelques cerises."
      - "Cuisson. Poser la deuxième génoise, appuyer légèrement, puis répéter chantilly et cerises."
      - "Cuisson. Poser la dernière génoise. Glaçage : étaler la chantilly dessus et sur les bords jusqu’à gâteau complètement blanc."
      - "Finition. Râper la tablette de chocolat à l’économe et saupoudrer le gâteau. Ajouter quelques touche de chantilly et des cerises."
      cavernes:
      - "Mixage. Œuf lin ou tofu soyeux, cuve batteur, verser. 2/3 sucre, ajouter. Mixer."
      - "Mélange. Farine, maïzena, cacao poudre, saladier, mélanger. Appareil, incorporer petit à petit. Mélanger, zéro grumeaux. Génoise."
      - "Cuisson. Préparation, moule fou, margarine végétale, graisser. Enfourner 20-25 min 180 °C. Génoise cuite, reposer 2 h."
      - "Cuisson. Crème soja ou avoine liquide, cuve batteur, verser. 1/3 sucre poudre restant, incorporer fur mesure, batteur tourne. Matière tient, chantilly prête. Chantilly, poche douille."
      - "Cuisson. Croûte génoise dessus, retirer. Couper horizontalement, trois parties égales. Trois génoises identiques."
      - "Cuisson. Sirop cerises amarenas, récupérer. Génoises, pinceau, imbiber."
      - "Cuisson. Chantilly, première génoise, poche douille, étaler. Cerises, disposer."
      - "Cuisson. Deuxième génoise, dessus, ajouter. Appuyer légèrement. Répéter, chantilly, cerises."
      - "Cuisson. Dernière génoise, disposer. Glaçage, chantilly, étaler dessus, bords. Gâteau blanc."
      - "Finition. Tablette chocolat, économe, râper. Gâteau, saupoudrer. Touche chantilly, cerises, déco."
    kcal_per_serving: 538
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 538
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24–48 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Forêt noire
**Équipement :** [[econome]] · [[batteur]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/foret-noire]]

## Ingrédients (6 personnes)

- 3 œuf
- 300 g de sucre
- 250 g de farine
- 60 g de maïzena
- 2 c.à.s de cacao en poudre
- 750 ml de crème
- 100 g de sucre glace
- 1 boîte de cerises amarenas
- 1 tablette de chocolat
-  beurre

## Préparation

1. Cassez vos oeufs dans une cuve à batteur. Ajoutez 2/3 de la quantité de sucre demandée puis mixez (on dit aussi « blanchir les oeufs »).
2. Dans un saladier, mélangez la farine, la maïzena et le cacao en poudre. Incorporez le tout aux oeufs, petit à petit, et mélangez bien pour qu’il n’y ait pas de grumeaux. Vous venez de réaliser une génoise !
3. Placez votre préparation dans un moule allant au fou, préalablement beurré. Enfournez-le à 180°C pendant 20 à 25 minutes. Lorsque votre génoise est cuite, laissez-la reposer 2 heures avant de poursuivre la recette.
4. Il est maintenant temps de passer à la chantilly. Dans la cuve d’un batteur, versez la crème liquide, puis incorporez le reste de sucre en poudre (le 1/3 restant) au fur et à mesure pendant que le batteur tourne. Votre chantilly est prête quand la matière se tient bien. Placez la chantilly dans une poche à douille.
5. Retirez la croûte au dessus de votre génoise et coupez-la ensuite horizontalement, en trois parties égales. Vous devez obtenir trois génoises identiques.
6. Récupérez le sirop de vos cerises amarenas et imbibez-en chacune de vos génoises à l’aide d’un pinceau.
7. Étalez la chantilly sur toute la surface de votre première génoise à l’aide la poche à douille. Disposez ensuite quelques cerises (n’hésitez pas à regarder la vidéo ci-dessous pour réaliser un montage parfait).
8. Ajoutez la deuxième génoise au dessus de votre préparation, appuyez légèrement dessus puis répétez l’opération (chantilly et cerises).
9. Disposez la dernière génoise sur votre préparation. Réalisez un glaçage sur tout le gâteau en étalant de la chantilly sur l’intégralité de votre préparation (au dessus et sur les bords). Le gâteau doit être complètement blanc.
10. Râpez votre tablette de chocolat à l’aide d’un économe et saupoudrez le gâteau. Ajoutez quelques touche de chantilly et des cerises pour finaliser la déco de votre Forêt-Noire.

 
 

 
 Découpez de groooosses parts de gâteau et dégustez-le en dessert, en famille ou entre amis. Bon appétit !
