---
schema: recette-web-jigme/v2
equipment:
- ref: mixeur-plongeant
slug: dos-de-cabillaud-mais-et-emulsion-au-lard
title: Dos de cabillaud, maïs et émulsion au lard
lang: fr
description: "Dos de cabillaud, maïs et émulsion au lard : recette française avec dos de cabillaud, tranche de lard et maïs doux en grain, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- cabillaud
- plat
- dos de cabillaud
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/dos-de-cabillaud-mais-et-emulsion-au-lard.webp
  alt: Dos de cabillaud, maïs et émulsion au lard
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/dos-de-cabillaud-mais-et-emulsion-au-lard.md
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
    - from: tofu ferme ou halloumi
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
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : tofu ferme ou halloumi → pois chiches rôtis ; tofu fumé → pois chiches rôtis
      ; tofu ferme → pois chiches rôtis ; crème de soja ou avoine → crème d''avoine.'
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
  Dos de cabillaud (morue fraîche, Atlantique nord), maïs et émulsion au lard :
  assiette de restaurant contemporaine, pas un plat régional nommé. Le cabillaud
  se pêche depuis des siècles ; ce montage (sucré du maïs, fumé du lard) n’a
  pas d’auteur daté.
fun_facts:
- text: "Cabillaud désigne la morue fraîche ; salée et séchée, elle devient morue."
  source_name: Usage
  source_url:
- text: "Une émulsion au lard casse si elle bout ; on lie hors du feu, comme une vinaigrette chaude."
  source_name: Usage
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de l'Ecu
  origin: Le Landreau, Muscadet
  grapes: melon de Bourgogne
  award:
  why: Iode, citron — le cabillaud, vin maigre.
- name: Chablis
  producer: Domaine William Fèvre
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre, agrume — le poisson, le maïs en fond sucré.
- name: Pinot gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire, gras — le lard et l’émulsion, un blanc plus ample.
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
    - poisson
    difficulty: 2
    time: &id001
      prep_min: 35
      cook_min: 20
      rest_min: 0
      total_min: 55
    equipment: &id002
    - casserole
    - poêle
    - mixeur
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 560
      unit: g
      item: dos de cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranche de lard
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: maïs doux en grain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: minis épis de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de volaille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: beurre
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
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez le lard, puis faites-le revenir dans une casserole à feu doux en remuant de temps
      en temps. Quand les lardons commencent à dorer, ajouter la crème puis couvrez pour laisser
      infuser les saveurs.
    - Cuisson. Dans une autre casserole, faites réduire le fond de volaille à feu doux. Pendant ce
      temps, salez et poivrez votre dos de cabillaud des deux côtés, puis passez le dans la
      farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le poisson
      ne s’effrite pas à la cuisson.
    - Cuisson. Une fois que votre fond de volaille est bien épais, ajoutez-y une noix de beurre et
      mélangez. Vous pouvez maintenant plonger le maïs et les petits épis dans ce glaçage.
    - Cuisson. Saisissez le dos de cabillaud dans une poêle bien chaude, dans laquelle vous aurez préalablement
      mis un peu d’huile. Une fois que le pavé de cabillaud est bien doré, retournez-le, baissez
      le feu et laissez le cuire à coeur pendant environ 5 min. En fin de cuisson, vous pouvez
      ajouter une noisette de beurre et vous en servir pour arroser le cabillaud à l’aide
      d’une cuillère à soupe.
    - Cuisson. Passez vos lardons à la crème au chinois. Ajoutez les lardons au maïs, dans le fond
      de volaille. Pour finir, réalisez une émulsion avec la crème restante, en vous servant
      simplement d’un mixeur plongeant.
    - Finition. Il est temps de dresser le plat ! Déposez votre mix de maïs et de lardons au fond de
      l’assiette, puis disposez votre cabillaud par-dessus. Enfin, ajoutez plusieurs cuillères
      de votre émulsions au lard tout autour. Finalisez le dressage en parsemant de la ciboulette
      fraiche ciselée sur les assiettes. Et voilà, c’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez le lard, puis faites-le revenir dans une casserole à feu doux en remuant de temps en temps. Quand les lardons commencent à dorer, ajoutez la crème puis couvrez pour laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, [[reduire|faites réduire]] le fond de volaille à feu doux. Pendant ce temps, salez et poivrez votre dos de cabillaud des deux côtés, puis passez-le dans la farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le poisson ne s’effrite pas à la cuisson."
      - "Cuisson. Une fois que votre fond de volaille est bien épais, ajoutez-y une noix de beurre et mélangez. Plongez le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisissez le dos de cabillaud dans une poêle bien chaude, dans laquelle vous aurez préalablement mis un peu d’huile. Une fois que le pavé de cabillaud est bien doré, retournez-le, baissez le feu et laissez-le cuire à cœur pendant environ 5 min. En fin de cuisson, vous pouvez ajouter une noisette de beurre et vous en servir pour arroser le cabillaud à l’aide d’une cuillère à soupe."
      - "Cuisson. [[filtrer|Passez]] vos lardons à la crème au chinois. Ajoutez les lardons au maïs, dans le fond de volaille. Pour finir, [[emulsion|réalisez une émulsion]] avec la crème restante, en vous servant simplement d’un mixeur plongeant."
      - "Finition. Déposez votre mélange de maïs et de lardons au fond de l’assiette, puis disposez votre cabillaud par-dessus. Ajoutez plusieurs cuillères de votre [[emulsion|émulsion]] au lard tout autour. Finalisez le dressage en parsemant de ciboulette fraiche ciselée (coupée en petits brins) sur les assiettes."
      pro:
      - "Cuisson. Couper le lard. Le faire revenir en casserole à feu doux, en remuant de temps en temps. Lardons qui commencent à dorer : ajouter la crème. Couvrir. Laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, réduire le fond de volaille à feu doux. Pendant ce temps, saler et poivrer le dos de cabillaud des deux côtés, le passer dans la farine, tapoter le surplus. La farine limite l’effritement du poisson."
      - "Cuisson. Fond de volaille bien épais : ajouter une noix de beurre. Mélanger. Plonger le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisir le dos de cabillaud dans une poêle bien chaude, peu d’huile. Pavé bien doré : retourner, baisser le feu, cuire à cœur environ 5 min. En fin de cuisson, noisette de beurre possible : arroser le cabillaud à la cuillère à soupe."
      - "Cuisson. Passer les lardons à la crème au chinois. Ajouter les lardons au maïs, dans le fond de volaille. Émulsionner la crème restante au mixeur plongeant."
      - "Finition. Mélange maïs-lardons au fond de l’assiette. Cabillaud par-dessus. Émulsion au lard tout autour. Ciboulette fraiche ciselée."
      cavernes:
      - "Cuisson. Lard, couper. Casserole, feu doux, revenir, remuer temps en temps. Lardons dorer. Crème, ajouter. Couvercle, infuser saveurs."
      - "Cuisson. Autre casserole. Fond volaille, feu doux, réduire. Pendant : dos cabillaud, deux côtés, saler poivrer. Farine, passer, tapoter surplus. Farine : poisson pas s’effriter cuisson."
      - "Cuisson. Fond volaille bien épais. Noix beurre, ajouter, mélanger. Maïs, petits épis, plonger glaçage."
      - "Cuisson. Poêle bien chaude, peu huile. Dos cabillaud, saisir. Pavé cabillaud bien doré, retourner. Feu, baisser. Cuire cœur environ 5 min. Fin cuisson : noisette beurre, cuillère soupe, arroser."
      - "Cuisson. Lardons crème, chinois. Lardons, maïs, fond volaille, ajouter. Crème restante, mixeur plongeant, émulsion."
      - "Finition. Mix maïs lardons, fond assiette. Cabillaud, dessus. Émulsion lard, autour, cuillères. Ciboulette fraiche ciselée, parsemer."
    kcal_per_serving: 528
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 560
      unit: g
      item: tofu ferme ou halloumi
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
    - qty: 250
      unit: g
      item: maïs doux en grain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: minis épis de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: beurre
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
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez le tofu fumé, puis faites-le revenir dans une casserole à feu doux en remuant
      de temps en temps. Quand les tofu fumé commencent à dorer, ajouter la crème puis couvrez
      pour laisser infuser les saveurs.
    - Cuisson. Dans une autre casserole, faites réduire le fond de légumes à feu doux. Pendant ce temps,
      salez et poivrez votre tofu ferme ou halloumi des deux côtés, puis passez le dans la
      farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le tofu (ou le halloumi) ne s’effrite pas à la cuisson.
    - Mélange. Une fois que votre fond de légumes est bien épais, ajoutez-y une noix de beurre et mélangez.
      Vous pouvez maintenant plonger le maïs et les petits épis dans ce glaçage.
    - Cuisson. Saisissez le tofu ferme ou halloumi dans une poêle bien chaude, dans laquelle vous aurez
      préalablement mis un peu d’huile. Une fois que le tofu (ou le halloumi) est bien doré, retournez-le, baissez le feu et laissez-le cuire à cœur environ 5 min. En fin de cuisson, ajoutez une noisette de beurre et arrosez.
    - Cuisson. Passez vos tofu fumé à la crème au chinois. Ajoutez les tofu fumé au maïs, dans le fond
      de légumes. Pour finir, réalisez une émulsion avec la crème restante, en vous servant
      simplement d’un mixeur plongeant.
    - Finition. Il est temps de dresser le plat ! Déposez votre mix de maïs et de tofu fumé au fond
      de l’assiette, puis disposez le tofu ferme (ou le halloumi) par-dessus. Enfin, ajoutez plusieurs cuillères
      de votre émulsions au tofu fumé tout autour. Finalisez le dressage en parsemant de la
      ciboulette fraiche ciselée sur les assiettes. Et voilà, c’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez le tofu fumé, puis faites-le revenir dans une casserole à feu doux en remuant de temps en temps. Quand le tofu fumé commence à dorer, ajoutez la crème puis couvrez pour laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, [[reduire|faites réduire]] le fond de légumes à feu doux. Pendant ce temps, salez et poivrez votre tofu ferme ou halloumi des deux côtés, puis passez-le dans la farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le tofu (ou le halloumi) ne s’effrite pas à la cuisson."
      - "Mélange. Une fois que votre fond de légumes est bien épais, ajoutez-y une noix de beurre et mélangez. Plongez le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisissez le tofu ferme ou halloumi dans une poêle bien chaude, dans laquelle vous aurez préalablement mis un peu d’huile. Une fois que le tofu (ou le halloumi) est bien doré, retournez-le, baissez le feu et laissez-le cuire à cœur environ 5 min. En fin de cuisson, ajoutez une noisette de beurre et arrosez."
      - "Cuisson. [[filtrer|Passez]] votre tofu fumé à la crème au chinois. Ajoutez le tofu fumé au maïs, dans le fond de légumes. Pour finir, [[emulsion|réalisez une émulsion]] avec la crème restante, en vous servant simplement d’un mixeur plongeant."
      - "Finition. Déposez votre mélange de maïs et de tofu fumé au fond de l’assiette, puis disposez le tofu ferme (ou le halloumi) par-dessus. Ajoutez plusieurs cuillères de votre [[emulsion|émulsion]] au tofu fumé tout autour. Finalisez le dressage en parsemant de ciboulette fraiche ciselée (coupée en petits brins) sur les assiettes."
      pro:
      - "Cuisson. Couper le tofu fumé. Le faire revenir en casserole à feu doux, en remuant de temps en temps. Dès qu’il commence à dorer : ajouter la crème. Couvrir. Laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, réduire le fond de légumes à feu doux. Pendant ce temps, saler et poivrer le tofu ferme ou halloumi des deux côtés, le passer dans la farine, tapoter le surplus. La farine limite l’effritement du tofu (ou du halloumi)."
      - "Mélange. Fond de légumes bien épais : ajouter une noix de beurre. Mélanger. Plonger le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisir le tofu ferme ou halloumi dans une poêle bien chaude, peu d’huile. Bien doré : retourner, baisser le feu, cuire à cœur environ 5 min. En fin de cuisson, noisette de beurre : arroser."
      - "Cuisson. Passer le tofu fumé à la crème au chinois. Ajouter le tofu fumé au maïs, dans le fond de légumes. Émulsionner la crème restante au mixeur plongeant."
      - "Finition. Mélange maïs-tofu fumé au fond de l’assiette. Tofu ferme (ou halloumi) par-dessus. Émulsion au tofu fumé tout autour. Ciboulette fraiche ciselée."
      cavernes:
      - "Cuisson. Tofu fumé, couper. Casserole, feu doux, revenir, remuer temps en temps. Tofu fumé dorer. Crème, ajouter. Couvercle, infuser saveurs."
      - "Cuisson. Autre casserole. Fond légumes, feu doux, réduire. Pendant : tofu ferme ou halloumi, deux côtés, saler poivrer. Farine, passer, tapoter surplus. Farine : tofu ou halloumi pas s’effriter cuisson."
      - "Mélange. Fond légumes bien épais. Noix beurre, ajouter, mélanger. Maïs, petits épis, plonger glaçage."
      - "Cuisson. Poêle bien chaude, peu huile. Tofu ferme ou halloumi, saisir. Bien doré, retourner. Feu, baisser. Cuire cœur environ 5 min. Fin cuisson : noisette beurre, arroser."
      - "Cuisson. Tofu fumé crème, chinois. Tofu fumé, maïs, fond légumes, ajouter. Crème restante, mixeur plongeant, émulsion."
      - "Finition. Mix maïs tofu fumé, fond assiette. Tofu ferme ou halloumi, dessus. Émulsion tofu fumé, autour, cuillères. Ciboulette fraiche ciselée, parsemer."
    kcal_per_serving: 665
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 560
      unit: g
      item: tofu ferme
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
    - qty: 250
      unit: g
      item: maïs doux en grain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: minis épis de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: margarine végétale
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
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez le tofu fumé, puis faites-le revenir dans une casserole à feu doux en remuant
      de temps en temps. Quand les morceaux de tofu fumé commencent à dorer, ajouter la crème de soja ou d’avoine puis couvrez
      pour laisser infuser les saveurs.
    - Cuisson. Dans une autre casserole, faites réduire le fond de légumes à feu doux. Pendant ce temps,
      salez et poivrez votre tofu ferme des deux côtés, puis passez le dans la farine et tapotez
      pour en retirer le surplus. Cet ajout de farine permet que le tofu ne s’effrite pas à la cuisson.
    - Mélange. Une fois que votre fond de légumes est bien épais, ajoutez-y une noix de margarine végétale et mélangez. Vous pouvez maintenant plonger le maïs et les petits épis dans
      ce glaçage.
    - Cuisson. Saisissez le tofu ferme dans une poêle bien chaude, dans laquelle vous aurez préalablement
      mis un peu d’huile. Une fois que le tofu est bien doré, retournez-le, baissez le feu et laissez-le cuire à cœur environ 5 min. En fin de cuisson, ajoutez une noisette de margarine végétale et arrosez le tofu.
    - Cuisson. Passez vos morceaux de tofu fumé à la crème de soja ou d’avoine au chinois. Ajoutez les tofu fumé au maïs, dans le fond
      de légumes. Pour finir, réalisez une émulsion avec la crème de soja ou d’avoine restante, en vous servant
      simplement d’un mixeur plongeant.
    - Finition. Il est temps de dresser le plat ! Déposez votre mix de maïs et de tofu fumé au fond
      de l’assiette, puis disposez le tofu ferme par-dessus. Enfin, ajoutez plusieurs cuillères
      de votre émulsions au tofu fumé tout autour. Finalisez le dressage en parsemant de la
      ciboulette fraiche ciselée sur les assiettes. Et voilà, c’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez le tofu fumé, puis faites-le revenir dans une casserole à feu doux en remuant de temps en temps. Quand les morceaux de tofu fumé commencent à dorer, ajoutez la crème de soja ou d’avoine puis couvrez pour laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, [[reduire|faites réduire]] le fond de légumes à feu doux. Pendant ce temps, salez et poivrez votre tofu ferme des deux côtés, puis passez-le dans la farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le tofu ne s’effrite pas à la cuisson."
      - "Mélange. Une fois que votre fond de légumes est bien épais, ajoutez-y une noix de margarine végétale et mélangez. Plongez le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisissez le tofu ferme dans une poêle bien chaude, dans laquelle vous aurez préalablement mis un peu d’huile. Une fois que le tofu est bien doré, retournez-le, baissez le feu et laissez-le cuire à cœur environ 5 min. En fin de cuisson, ajoutez une noisette de margarine végétale et arrosez le tofu."
      - "Cuisson. [[filtrer|Passez]] vos morceaux de tofu fumé à la crème de soja ou d’avoine au chinois. Ajoutez le tofu fumé au maïs, dans le fond de légumes. Pour finir, [[emulsion|réalisez une émulsion]] avec la crème de soja ou d’avoine restante, en vous servant simplement d’un mixeur plongeant."
      - "Finition. Déposez votre mélange de maïs et de tofu fumé au fond de l’assiette, puis disposez le tofu ferme par-dessus. Ajoutez plusieurs cuillères de votre [[emulsion|émulsion]] au tofu fumé tout autour. Finalisez le dressage en parsemant de ciboulette fraiche ciselée (coupée en petits brins) sur les assiettes."
      pro:
      - "Cuisson. Couper le tofu fumé. Le faire revenir en casserole à feu doux, en remuant de temps en temps. Morceaux qui commencent à dorer : ajouter la crème de soja ou d’avoine. Couvrir. Laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, réduire le fond de légumes à feu doux. Pendant ce temps, saler et poivrer le tofu ferme des deux côtés, le passer dans la farine, tapoter le surplus. La farine limite l’effritement du tofu."
      - "Mélange. Fond de légumes bien épais : ajouter une noix de margarine végétale. Mélanger. Plonger le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisir le tofu ferme dans une poêle bien chaude, peu d’huile. Bien doré : retourner, baisser le feu, cuire à cœur environ 5 min. En fin de cuisson, noisette de margarine végétale : arroser le tofu."
      - "Cuisson. Passer les morceaux de tofu fumé à la crème de soja ou d’avoine au chinois. Ajouter le tofu fumé au maïs, dans le fond de légumes. Émulsionner la crème de soja ou d’avoine restante au mixeur plongeant."
      - "Finition. Mélange maïs-tofu fumé au fond de l’assiette. Tofu ferme par-dessus. Émulsion au tofu fumé tout autour. Ciboulette fraiche ciselée."
      cavernes:
      - "Cuisson. Tofu fumé, couper. Casserole, feu doux, revenir, remuer temps en temps. Morceaux tofu fumé dorer. Crème soja ou avoine, ajouter. Couvercle, infuser saveurs."
      - "Cuisson. Autre casserole. Fond légumes, feu doux, réduire. Pendant : tofu ferme, deux côtés, saler poivrer. Farine, passer, tapoter surplus. Farine : tofu pas s’effriter cuisson."
      - "Mélange. Fond légumes bien épais. Noix margarine végétale, ajouter, mélanger. Maïs, petits épis, plonger glaçage."
      - "Cuisson. Poêle bien chaude, peu huile. Tofu ferme, saisir. Bien doré, retourner. Feu, baisser. Cuire cœur environ 5 min. Fin cuisson : noisette margarine végétale, arroser tofu."
      - "Cuisson. Morceaux tofu fumé, crème soja ou avoine, chinois. Tofu fumé, maïs, fond légumes, ajouter. Crème soja ou avoine restante, mixeur plongeant, émulsion."
      - "Finition. Mix maïs tofu fumé, fond assiette. Tofu ferme, dessus. Émulsion tofu fumé, autour, cuillères. Ciboulette fraiche ciselée, parsemer."
    kcal_per_serving: 366
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
    - poisson
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 560
      unit: g
      item: dos de cabillaud
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
    - qty: 250
      unit: g
      item: maïs doux en grain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: minis épis de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fumet de poisson
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: beurre
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
      item: ciboulette fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez le tofu fumé, puis faites-le revenir dans une casserole à feu doux en remuant
      de temps en temps. Quand les tofu fumé commencent à dorer, ajouter la crème puis couvrez
      pour laisser infuser les saveurs.
    - Cuisson. Dans une autre casserole, faites réduire le fumet de poisson à feu doux. Pendant ce
      temps, salez et poivrez votre dos de cabillaud des deux côtés, puis passez le dans la
      farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le poisson
      ne s’effrite pas à la cuisson.
    - Cuisson. Une fois que votre fumet de poisson est bien épais, ajoutez-y une noix de beurre et
      mélangez. Vous pouvez maintenant plonger le maïs et les petits épis dans ce glaçage.
    - Cuisson. Saisissez le dos de cabillaud dans une poêle bien chaude, dans laquelle vous aurez préalablement
      mis un peu d’huile. Une fois que le pavé de cabillaud est bien doré, retournez-le, baissez
      le feu et laissez le cuire à coeur pendant environ 5 min. En fin de cuisson, vous pouvez
      ajouter une noisette de beurre et vous en servir pour arroser le cabillaud à l’aide
      d’une cuillère à soupe.
    - Cuisson. Passez vos tofu fumé à la crème au chinois. Ajoutez les tofu fumé au maïs, dans le fumet
      de poisson. Pour finir, réalisez une émulsion avec la crème restante, en vous servant
      simplement d’un mixeur plongeant.
    - Finition. Il est temps de dresser le plat ! Déposez votre mix de maïs et de tofu fumé au fond
      de l’assiette, puis disposez votre cabillaud par-dessus. Enfin, ajoutez plusieurs cuillères
      de votre émulsions au tofu fumé tout autour. Finalisez le dressage en parsemant de la
      ciboulette fraiche ciselée sur les assiettes. Et voilà, c’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Coupez le tofu fumé, puis faites-le revenir dans une casserole à feu doux en remuant de temps en temps. Quand le tofu fumé commence à dorer, ajoutez la crème puis couvrez pour laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, [[reduire|faites réduire]] le fumet de poisson à feu doux. Pendant ce temps, salez et poivrez votre dos de cabillaud des deux côtés, puis passez-le dans la farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le poisson ne s’effrite pas à la cuisson."
      - "Cuisson. Une fois que votre fumet de poisson est bien épais, ajoutez-y une noix de beurre et mélangez. Plongez le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisissez le dos de cabillaud dans une poêle bien chaude, dans laquelle vous aurez préalablement mis un peu d’huile. Une fois que le pavé de cabillaud est bien doré, retournez-le, baissez le feu et laissez-le cuire à cœur pendant environ 5 min. En fin de cuisson, vous pouvez ajouter une noisette de beurre et vous en servir pour arroser le cabillaud à l’aide d’une cuillère à soupe."
      - "Cuisson. [[filtrer|Passez]] votre tofu fumé à la crème au chinois. Ajoutez le tofu fumé au maïs, dans le fumet de poisson. Pour finir, [[emulsion|réalisez une émulsion]] avec la crème restante, en vous servant simplement d’un mixeur plongeant."
      - "Finition. Déposez votre mélange de maïs et de tofu fumé au fond de l’assiette, puis disposez votre cabillaud par-dessus. Ajoutez plusieurs cuillères de votre [[emulsion|émulsion]] au tofu fumé tout autour. Finalisez le dressage en parsemant de ciboulette fraiche ciselée (coupée en petits brins) sur les assiettes."
      pro:
      - "Cuisson. Couper le tofu fumé. Le faire revenir en casserole à feu doux, en remuant de temps en temps. Dès qu’il commence à dorer : ajouter la crème. Couvrir. Laisser infuser les saveurs."
      - "Cuisson. Dans une autre casserole, réduire le fumet de poisson à feu doux. Pendant ce temps, saler et poivrer le dos de cabillaud des deux côtés, le passer dans la farine, tapoter le surplus. La farine limite l’effritement du poisson."
      - "Cuisson. Fumet de poisson bien épais : ajouter une noix de beurre. Mélanger. Plonger le maïs et les petits épis dans ce glaçage."
      - "Cuisson. Saisir le dos de cabillaud dans une poêle bien chaude, peu d’huile. Pavé bien doré : retourner, baisser le feu, cuire à cœur environ 5 min. En fin de cuisson, noisette de beurre possible : arroser le cabillaud à la cuillère à soupe."
      - "Cuisson. Passer le tofu fumé à la crème au chinois. Ajouter le tofu fumé au maïs, dans le fumet de poisson. Émulsionner la crème restante au mixeur plongeant."
      - "Finition. Mélange maïs-tofu fumé au fond de l’assiette. Cabillaud par-dessus. Émulsion au tofu fumé tout autour. Ciboulette fraiche ciselée."
      cavernes:
      - "Cuisson. Tofu fumé, couper. Casserole, feu doux, revenir, remuer temps en temps. Tofu fumé dorer. Crème, ajouter. Couvercle, infuser saveurs."
      - "Cuisson. Autre casserole. Fumet poisson, feu doux, réduire. Pendant : dos cabillaud, deux côtés, saler poivrer. Farine, passer, tapoter surplus. Farine : poisson pas s’effriter cuisson."
      - "Cuisson. Fumet poisson bien épais. Noix beurre, ajouter, mélanger. Maïs, petits épis, plonger glaçage."
      - "Cuisson. Poêle bien chaude, peu huile. Dos cabillaud, saisir. Pavé cabillaud bien doré, retourner. Feu, baisser. Cuire cœur environ 5 min. Fin cuisson : noisette beurre, cuillère soupe, arroser."
      - "Cuisson. Tofu fumé crème, chinois. Tofu fumé, maïs, fumet poisson, ajouter. Crème restante, mixeur plongeant, émulsion."
      - "Finition. Mix maïs tofu fumé, fond assiette. Cabillaud, dessus. Émulsion tofu fumé, autour, cuillères. Ciboulette fraiche ciselée, parsemer."
    kcal_per_serving: 528
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    emulsion:
      terme: "émulsion"
      explication: "Vous mélangez un liquide gras et un liquide aqueux jusqu’à ce qu’ils restent liés. Souvent vous fouettez ou vous mixez, sans laisser le mélange se séparer. C’est réussi quand la sauce est homogène, légère ou onctueuse, sans filet d’huile à part."
      ref: Cuisine/Lexique/emulsion.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    emulsion:
      terme: "émulsion"
      explication: "Vous mélangez un liquide gras et un liquide aqueux jusqu’à ce qu’ils restent liés. Souvent vous fouettez ou vous mixez, sans laisser le mélange se séparer. C’est réussi quand la sauce est homogène, légère ou onctueuse, sans filet d’huile à part."
      ref: Cuisine/Lexique/emulsion.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    emulsion:
      terme: "émulsion"
      explication: "Vous mélangez un liquide gras et un liquide aqueux jusqu’à ce qu’ils restent liés. Souvent vous fouettez ou vous mixez, sans laisser le mélange se séparer. C’est réussi quand la sauce est homogène, légère ou onctueuse, sans filet d’huile à part."
      ref: Cuisine/Lexique/emulsion.md
  pesco:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    emulsion:
      terme: "émulsion"
      explication: "Vous mélangez un liquide gras et un liquide aqueux jusqu’à ce qu’ils restent liés. Souvent vous fouettez ou vous mixez, sans laisser le mélange se séparer. C’est réussi quand la sauce est homogène, légère ou onctueuse, sans filet d’huile à part."
      ref: Cuisine/Lexique/emulsion.md
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
  a_verifier: false
  note_verif: ""
---

# Dos de cabillaud, maïs et émulsion au lard

![[dos-de-cabillaud-mais-et-emulsion-au-lard.webp]]
**Équipement :** [[mixeur-plongeant]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/dos-de-cabillaud-mais-et-emulsion-au-lard]]

## Ingrédients (4 personnes)

- 560 g de dos de cabillaud
- 4 tranche de lard
- 250 g de maïs doux en grain
- 20 cl de crème liquide
- 100 g de minis épis de maïs
- 50 cl de fond de volaille
- 100 g de beurre
-  huile d'olive
-  ciboulette fraiche

## Préparation

1. Coupez le lard, puis faites-le revenir dans une casserole à feu doux en remuant de temps en temps. Quand les lardons commencent à dorer, ajouter la crème puis couvrez pour laisser infuser les saveurs.
2. Dans une autre casserole, faites réduire le fond de volaille à feu doux. Pendant ce temps, salez et poivrez votre dos de cabillaud des deux côtés, puis passez le dans la farine et tapotez pour en retirer le surplus. Cet ajout de farine permet que le poisson ne s’effrite pas à la cuisson.
3. Une fois que votre fond de volaille est bien épais, ajoutez-y une noix de beurre et mélangez. Vous pouvez maintenant plonger le maïs et les petits épis dans ce glaçage.
4. Saisissez le dos de cabillaud dans une poêle bien chaude, dans laquelle vous aurez préalablement mis un peu d’huile. Une fois que le pavé de cabillaud est bien doré, retournez-le, baissez le feu et laissez le cuire à coeur pendant environ 5 min. En fin de cuisson, vous pouvez ajouter une noisette de beurre et vous en servir pour arroser le cabillaud à l’aide d’une cuillère à soupe.
5. Passez vos lardons à la crème au chinois. Ajoutez les lardons au maïs, dans le fond de volaille. Pour finir, réalisez une émulsion avec la crème restante, en vous servant simplement d’un mixeur plongeant.
6. Il est temps de dresser le plat ! Déposez votre mix de maïs et de lardons au fond de l’assiette, puis disposez votre cabillaud par-dessus. Enfin, ajoutez plusieurs cuillères de votre émulsions au lard tout autour.

 
 

 
 Finalisez le dressage en parsemant de la ciboulette fraiche ciselée sur les assiettes. Et voilà, c’est prêt ! Bon appétit !
