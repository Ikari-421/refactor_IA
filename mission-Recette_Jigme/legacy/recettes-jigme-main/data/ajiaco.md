---
schema: recette-web-jigme/v2
slug: ajiaco
title: Ajiaco
lang: fr
description: "Ajiaco : recette colombienne avec épis de maïs frais, pilon de poulet et pomme de terre, pour 4 personnes. Version maison."
cuisine: colombienne
category: salé
tags:
- salé
- soupe
- poulet
- maïs
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/ajiaco.webp
  alt: Ajiaco
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/ajiaco.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - celeri
    swaps:
    - from: céleri
      to: fenouil ou carotte
      note: Allergie céleri.
    note: Omettre le céleri.
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : paneer ou tofu ferme → pois chiches rôtis ; tofu ferme → pois chiches rôtis
      ; crème de soja ou avoine → crème d''avoine.'
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
  Soupe de pommes de terre, surtout à Bogotá (ajiaco santafereño) : poulet, plusieurs
  variétés de pommes de terre, herbe *guasca*. Le nom viendrait du taïno *ají* (piment).
  Cuba et le Pérou ont des ajiacos très différents ; l’origine unique n’est pas tranchée.
fun_facts:
- text: >
    *Ajiaco* viendrait d’*ají*, « piment » en taïno. À Bogotá on garnit souvent d’avocat,
    de câpres et de crème.
  source_name: Wikipedia, Ajiaco
  source_url: https://en.wikipedia.org/wiki/Ajiaco
- text: >
    La *guasca* (*Galinsoga parviflora*) est une « mauvaise herbe » aux États-Unis
    et l’herbe obligatoire de l’ajiaco bogotanais.
  source_name: Wikipedia, Ajiaco
  source_url: https://en.wikipedia.org/wiki/Ajiaco
wines:
- name: Côtes de Gascogne
  producer: Domaine Tariquet
  origin: Eauze, Gascogne
  grapes: colombard, ugni blanc
  award:
  why: Agrume, maigre — bouillon de poulet et pomme de terre, sans bois.
- name: Rueda
  producer: José Pariente
  origin: Rueda, Castille
  grapes: verdejo
  award:
  why: Fenouil, citron — crème et avocat du bol.
- name: Riesling d'Alsace
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Acidité, pétrole léger — le gras de la crème et le poulet.
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
    - celeri
    difficulty: 2
    time: &id001
      prep_min: 80
      cook_min: 60
      rest_min: 0
      total_min: 140
    equipment: &id002
    - casserole
    - poêle
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: épis de maïs frais (ou surgelé)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pilon de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: céleri branche
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
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème épaisse
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
    - Cuisson. Coupez votre épis de maïs en tronçons. Plongez-les dans une grande casserole remplie
      de bouillon de volaille (ou de bouillon de légumes). Salez, poivrez, puis ajoutez vos
      pilon de poulet. Laissez mijoter le tout à feu doux, avec un couvercle, pendant au moins
      40 minutes.
    - Cuisson. Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement.
    - Mélange. Après 40 minutes de cuisson, débarrassez le poulet et ajoutez au mélanges vos pommes
      de terre coupées. Laissez de nouveau mijoter pendant 30 minutes.
    - Cuisson. Épluchez et hachez finement l’oignon. Dans une poêle, déposer une noix de beurre puis
      faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les
      dans la casserole avec le bouillon.
    - Cuisson. Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet
      de coriandre fraîche. Placez le tout dans votre préparation qui mijote dans la casserole.
      Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson
      en plantant la pointe d’un couteau dans leur chair.
    - Finition. Pendant ce temps, dépiauté grossièrement les pilons de poulet à la main. Replongez-les
      ensuite dans le bouillon. Laissez mijoter quelques minute supplémentaires…et c’est prêt
      ! Dressez dans une assiette creuse avec un peu de coriandre fraîche et un cuillère à
      soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert et le tour
      est joué. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez votre épi de maïs en tronçons. Plongez-les dans une grande casserole remplie de bouillon de volaille (ou de bouillon de légumes). Salez, poivrez, puis ajoutez vos pilons de poulet. [[mijoter|Laissez mijoter]] le tout à feu doux, avec un couvercle, pendant au moins 40 minutes."
      - "Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement."
      - "Après 40 minutes de cuisson, débarrassez le poulet et ajoutez au mélange vos pommes de terre coupées. Laissez de nouveau [[mijoter|mijoter]] pendant 30 minutes."
      - "Épluchez et hachez finement l’oignon. Dans une poêle, déposez une noix de beurre puis faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les dans la casserole avec le bouillon."
      - "Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet de coriandre fraîche. Placez le tout dans votre préparation qui [[mijoter|mijote]] dans la casserole. Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson en plantant la pointe d’un couteau dans leur chair."
      - "Pendant ce temps, dépiautez grossièrement les pilons de poulet à la main. Replongez-les ensuite dans le bouillon. [[mijoter|Laissez mijoter]] quelques minutes supplémentaires. Dressez dans une assiette creuse avec un peu de coriandre fraîche et une cuillère à soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert."
      pro:
      - "Couper l’épi de maïs en tronçons. Plonger dans une grande casserole de bouillon de volaille (ou de bouillon de légumes). Saler, poivrer. Ajouter les pilons de poulet. Mijoter à feu doux, couvercle, au moins 40 min."
      - "Pendant ce temps, éplucher les pommes de terre. Tailler très grossièrement."
      - "Après 40 min, débarrasser le poulet. Ajouter au mélange les pommes de terre coupées. Mijoter de nouveau 30 min."
      - "Éplucher et hacher finement l’oignon. Dans une poêle, déposer une noix de beurre. Faire colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, les ajouter dans la casserole avec le bouillon."
      - "Tailler la branche de céleri en fine lamelle. Hacher grossièrement le bouquet de coriandre fraîche. Ajouter à la préparation qui mijote. Cuire jusqu’à ce que les patates soient prêtes : pointe de couteau dans la chair."
      - "Pendant ce temps, dépiauter grossièrement les pilons de poulet à la main. Replonger dans le bouillon. Mijoter quelques minutes. Dresser en assiette creuse : coriandre fraîche, une cuillère à soupe de crème entière. Avocat et citron vert."
      cavernes:
      - "Épi maïs tronçons. Grande casserole bouillon de volaille (ou bouillon de légumes). Sel poivre. Pilon poulet. Mijoter feu doux, couvercle, minimum 40 min."
      - "Pendant : pommes de terre éplucher. Tailler très gros."
      - "Après 40 min : poulet débarrasser. Pommes de terre coupées. Mijoter encore 30 min."
      - "Oignon éplucher, hacher fin. Poêle : noix beurre. Oignons colorer feu vif. Légèrement colorés, casserole bouillon."
      - "Céleri branche fine lamelle. Bouquet coriandre fraîche hacher gros. Préparation qui mijote. Cuire jusqu’à patates prêtes. Pointe couteau chair."
      - "Pendant : pilons poulet dépiauter gros, main. Replonger bouillon. Mijoter quelques minutes. Assiette creuse : peu coriandre fraîche, cuillère à soupe crème entière. Avocat, citron vert."
    kcal_per_serving: 247
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
    - celeri
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: épis de maïs frais (ou surgelé)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: paneer ou tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: céleri branche
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
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème épaisse
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
    - Cuisson. Coupez votre épis de maïs en tronçons. Plongez-les dans une grande casserole remplie
      de bouillon de légumes. Salez, poivrez, puis ajoutez vos
      paneer ou tofu ferme. Laissez mijoter le tout à feu doux, avec un couvercle, pendant
      au moins 40 minutes.
    - Cuisson. Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement.
    - Dressage. Après 40 minutes de cuisson, réservez le paneer (ou le tofu ferme) et ajoutez au mélange vos pommes de terre coupées. Laissez de nouveau mijoter pendant 30 minutes.
    - Cuisson. Épluchez et hachez finement l’oignon. Dans une poêle, déposer une noix de beurre puis
      faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les
      dans la casserole avec le bouillon.
    - Cuisson. Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet
      de coriandre fraîche. Placez le tout dans votre préparation qui mijote dans la casserole.
      Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson
      en plantant la pointe d’un couteau dans leur chair.
    - Finition. Pendant ce temps, effritez grossièrement le paneer (ou le tofu ferme) à la main. Replongez-le ensuite dans le bouillon. Laissez mijoter quelques minute supplémentaires…et c’est prêt
      ! Dressez dans une assiette creuse avec un peu de coriandre fraîche et un cuillère à
      soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert et le tour
      est joué. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez votre épi de maïs en tronçons. Plongez-les dans une grande casserole remplie de bouillon de légumes. Salez, poivrez, puis ajoutez votre paneer ou tofu ferme. [[mijoter|Laissez mijoter]] le tout à feu doux, avec un couvercle, pendant au moins 40 minutes."
      - "Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement."
      - "Après 40 minutes de cuisson, réservez le paneer (ou le tofu ferme) et ajoutez au mélange vos pommes de terre coupées. Laissez de nouveau [[mijoter|mijoter]] pendant 30 minutes."
      - "Épluchez et hachez finement l’oignon. Dans une poêle, déposez une noix de beurre puis faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les dans la casserole avec le bouillon."
      - "Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet de coriandre fraîche. Placez le tout dans votre préparation qui [[mijoter|mijote]] dans la casserole. Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson en plantant la pointe d’un couteau dans leur chair."
      - "Pendant ce temps, effritez grossièrement le paneer (ou le tofu ferme) à la main. Replongez-le ensuite dans le bouillon. [[mijoter|Laissez mijoter]] quelques minutes supplémentaires. Dressez dans une assiette creuse avec un peu de coriandre fraîche et une cuillère à soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert."
      pro:
      - "Couper l’épi de maïs en tronçons. Plonger dans une grande casserole de bouillon de légumes. Saler, poivrer. Ajouter le paneer ou le tofu ferme. Mijoter à feu doux, couvercle, au moins 40 min."
      - "Pendant ce temps, éplucher les pommes de terre. Tailler très grossièrement."
      - "Après 40 min, réserver le paneer (ou le tofu ferme). Ajouter au mélange les pommes de terre coupées. Mijoter de nouveau 30 min."
      - "Éplucher et hacher finement l’oignon. Dans une poêle, déposer une noix de beurre. Faire colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, les ajouter dans la casserole avec le bouillon."
      - "Tailler la branche de céleri en fine lamelle. Hacher grossièrement le bouquet de coriandre fraîche. Ajouter à la préparation qui mijote. Cuire jusqu’à ce que les patates soient prêtes : pointe de couteau dans la chair."
      - "Pendant ce temps, effriter grossièrement le paneer (ou le tofu ferme) à la main. Replonger dans le bouillon. Mijoter quelques minutes. Dresser en assiette creuse : coriandre fraîche, une cuillère à soupe de crème entière. Avocat et citron vert."
      cavernes:
      - "Épi maïs tronçons. Grande casserole bouillon de légumes. Sel poivre. Paneer ou tofu ferme. Mijoter feu doux, couvercle, minimum 40 min."
      - "Pendant : pommes de terre éplucher. Tailler très gros."
      - "Après 40 min : paneer (ou tofu ferme) réserver. Pommes de terre coupées. Mijoter encore 30 min."
      - "Oignon éplucher, hacher fin. Poêle : noix beurre. Oignons colorer feu vif. Légèrement colorés, casserole bouillon."
      - "Céleri branche fine lamelle. Bouquet coriandre fraîche hacher gros. Préparation qui mijote. Cuire jusqu’à patates prêtes. Pointe couteau chair."
      - "Pendant : paneer (ou tofu ferme) effriter gros, main. Replonger bouillon. Mijoter quelques minutes. Assiette creuse : peu coriandre fraîche, cuillère à soupe crème entière. Avocat, citron vert."
    kcal_per_serving: 174
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
    - celeri
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: épis de maïs frais (ou surgelé)
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
    - qty: 200
      unit: g
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: céleri branche
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
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
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
    - Cuisson. Coupez votre épis de maïs en tronçons. Plongez-les dans une grande casserole remplie
      de bouillon de légumes. Salez, poivrez, puis ajoutez le tofu ferme coupé en gros morceaux. Laissez mijoter le tout à feu doux, avec un couvercle, pendant au moins
      40 minutes.
    - Cuisson. Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement.
    - Mélange. Après 40 minutes de cuisson, débarrassez le tofu ferme et ajoutez au mélanges vos pommes
      de terre coupées. Laissez de nouveau mijoter pendant 30 minutes.
    - Cuisson. Épluchez et hachez finement l’oignon. Dans une poêle, déposer une noix de margarine végétale puis
      faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les
      dans la casserole avec le bouillon.
    - Cuisson. Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet
      de coriandre fraîche. Placez le tout dans votre préparation qui mijote dans la casserole.
      Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson
      en plantant la pointe d’un couteau dans leur chair.
    - Finition. Pendant ce temps, effritez grossièrement le tofu ferme. Replongez-le ensuite dans le bouillon. Laissez mijoter quelques minute supplémentaires…et c’est prêt
      ! Dressez dans une assiette creuse avec un peu de coriandre fraîche et une cuillère à soupe de crème de soja ou d’avoine. Accompagnez le tout d’un avocat et de citron vert et le tour
      est joué. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez votre épi de maïs en tronçons. Plongez-les dans une grande casserole remplie de bouillon de légumes. Salez, poivrez, puis ajoutez le tofu ferme coupé en gros morceaux. [[mijoter|Laissez mijoter]] le tout à feu doux, avec un couvercle, pendant au moins 40 minutes."
      - "Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement."
      - "Après 40 minutes de cuisson, débarrassez le tofu ferme et ajoutez au mélange vos pommes de terre coupées. Laissez de nouveau [[mijoter|mijoter]] pendant 30 minutes."
      - "Épluchez et hachez finement l’oignon. Dans une poêle, déposez une noix de margarine végétale puis faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les dans la casserole avec le bouillon."
      - "Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet de coriandre fraîche. Placez le tout dans votre préparation qui [[mijoter|mijote]] dans la casserole. Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson en plantant la pointe d’un couteau dans leur chair."
      - "Pendant ce temps, effritez grossièrement le tofu ferme. Replongez-le ensuite dans le bouillon. [[mijoter|Laissez mijoter]] quelques minutes supplémentaires. Dressez dans une assiette creuse avec un peu de coriandre fraîche et une cuillère à soupe de crème de soja ou d’avoine. Accompagnez le tout d’un avocat et de citron vert."
      pro:
      - "Couper l’épi de maïs en tronçons. Plonger dans une grande casserole de bouillon de légumes. Saler, poivrer. Ajouter le tofu ferme coupé en gros morceaux. Mijoter à feu doux, couvercle, au moins 40 min."
      - "Pendant ce temps, éplucher les pommes de terre. Tailler très grossièrement."
      - "Après 40 min, débarrasser le tofu ferme. Ajouter au mélange les pommes de terre coupées. Mijoter de nouveau 30 min."
      - "Éplucher et hacher finement l’oignon. Dans une poêle, déposer une noix de margarine végétale. Faire colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, les ajouter dans la casserole avec le bouillon."
      - "Tailler la branche de céleri en fine lamelle. Hacher grossièrement le bouquet de coriandre fraîche. Ajouter à la préparation qui mijote. Cuire jusqu’à ce que les patates soient prêtes : pointe de couteau dans la chair."
      - "Pendant ce temps, effriter grossièrement le tofu ferme. Replonger dans le bouillon. Mijoter quelques minutes. Dresser en assiette creuse : coriandre fraîche, une cuillère à soupe de crème de soja ou d’avoine. Avocat et citron vert."
      cavernes:
      - "Épi maïs tronçons. Grande casserole bouillon de légumes. Sel poivre. Tofu ferme gros morceaux. Mijoter feu doux, couvercle, minimum 40 min."
      - "Pendant : pommes de terre éplucher. Tailler très gros."
      - "Après 40 min : tofu ferme débarrasser. Pommes de terre coupées. Mijoter encore 30 min."
      - "Oignon éplucher, hacher fin. Poêle : noix margarine végétale. Oignons colorer feu vif. Légèrement colorés, casserole bouillon."
      - "Céleri branche fine lamelle. Bouquet coriandre fraîche hacher gros. Préparation qui mijote. Cuire jusqu’à patates prêtes. Pointe couteau chair."
      - "Pendant : tofu ferme effriter gros. Replonger bouillon. Mijoter quelques minutes. Assiette creuse : peu coriandre fraîche, cuillère à soupe crème de soja ou avoine. Avocat, citron vert."
    kcal_per_serving: 253
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
    - celeri
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: épis de maïs frais (ou surgelé)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: pomme de terre violette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: céleri branche
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
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème épaisse
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Coupez votre épis de maïs en tronçons. Plongez-les dans une grande casserole remplie
      de bouillon de volaille (ou de bouillon de légumes). Salez, poivrez, puis ajoutez vos
      cabillaud. Laissez mijoter le tout à feu doux, avec un couvercle, pendant au moins 40
      minutes.
    - Cuisson. Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement.
    - Mélange. Après 40 minutes de cuisson, débarrassez le poulet et ajoutez au mélanges vos pommes
      de terre coupées. Laissez de nouveau mijoter pendant 30 minutes.
    - Cuisson. Épluchez et hachez finement l’oignon. Dans une poêle, déposer une noix de beurre puis
      faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les
      dans la casserole avec le bouillon.
    - Cuisson. Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet
      de coriandre fraîche. Placez le tout dans votre préparation qui mijote dans la casserole.
      Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson
      en plantant la pointe d’un couteau dans leur chair.
    - Finition. Pendant ce temps, dépiauté grossièrement les pilons de poulet à la main. Replongez-les
      ensuite dans le bouillon. Laissez mijoter quelques minute supplémentaires…et c’est prêt
      ! Dressez dans une assiette creuse avec un peu de coriandre fraîche et un cuillère à
      soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert et le tour
      est joué. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez votre épi de maïs en tronçons. Plongez-les dans une grande casserole remplie de bouillon de volaille (ou de bouillon de légumes). Salez, poivrez, puis ajoutez vos pilons de poulet. [[mijoter|Laissez mijoter]] le tout à feu doux, avec un couvercle, pendant au moins 40 minutes."
      - "Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement."
      - "Après 40 minutes de cuisson, débarrassez le poulet et ajoutez au mélange vos pommes de terre coupées. Laissez de nouveau [[mijoter|mijoter]] pendant 30 minutes."
      - "Épluchez et hachez finement l’oignon. Dans une poêle, déposez une noix de beurre puis faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les dans la casserole avec le bouillon."
      - "Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet de coriandre fraîche. Placez le tout dans votre préparation qui [[mijoter|mijote]] dans la casserole. Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson en plantant la pointe d’un couteau dans leur chair."
      - "Pendant ce temps, dépiautez grossièrement les pilons de poulet à la main. Replongez-les ensuite dans le bouillon. [[mijoter|Laissez mijoter]] quelques minutes supplémentaires. Dressez dans une assiette creuse avec un peu de coriandre fraîche et une cuillère à soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert."
      pro:
      - "Couper l’épi de maïs en tronçons. Plonger dans une grande casserole de bouillon de volaille (ou de bouillon de légumes). Saler, poivrer. Ajouter les pilons de poulet. Mijoter à feu doux, couvercle, au moins 40 min."
      - "Pendant ce temps, éplucher les pommes de terre. Tailler très grossièrement."
      - "Après 40 min, débarrasser le poulet. Ajouter au mélange les pommes de terre coupées. Mijoter de nouveau 30 min."
      - "Éplucher et hacher finement l’oignon. Dans une poêle, déposer une noix de beurre. Faire colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, les ajouter dans la casserole avec le bouillon."
      - "Tailler la branche de céleri en fine lamelle. Hacher grossièrement le bouquet de coriandre fraîche. Ajouter à la préparation qui mijote. Cuire jusqu’à ce que les patates soient prêtes : pointe de couteau dans la chair."
      - "Pendant ce temps, dépiauter grossièrement les pilons de poulet à la main. Replonger dans le bouillon. Mijoter quelques minutes. Dresser en assiette creuse : coriandre fraîche, une cuillère à soupe de crème entière. Avocat et citron vert."
      cavernes:
      - "Épi maïs tronçons. Grande casserole bouillon de volaille (ou bouillon de légumes). Sel poivre. Pilon poulet. Mijoter feu doux, couvercle, minimum 40 min."
      - "Pendant : pommes de terre éplucher. Tailler très gros."
      - "Après 40 min : poulet débarrasser. Pommes de terre coupées. Mijoter encore 30 min."
      - "Oignon éplucher, hacher fin. Poêle : noix beurre. Oignons colorer feu vif. Légèrement colorés, casserole bouillon."
      - "Céleri branche fine lamelle. Bouquet coriandre fraîche hacher gros. Préparation qui mijote. Cuire jusqu’à patates prêtes. Pointe couteau chair."
      - "Pendant : pilons poulet dépiauter gros, main. Replonger bouillon. Mijoter quelques minutes. Assiette creuse : peu coriandre fraîche, cuillère à soupe crème entière. Avocat, citron vert."
    kcal_per_serving: 174
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Ajiaco

![[ajiaco.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/ajiaco]]

## Ingrédients (4 personnes)

- 1 épis de maïs frais (ou surgelé)
- 4 pilon de poulet
- 200 g de pomme de terre
- 200 g de pomme de terre violette
- 1 céleri branche
- 1 oignon
- 1 avocat
- 1 citron vert
-  coriandre fraîche
-  crème épaisse

## Préparation

1. Coupez votre épis de maïs en tronçons. Plongez-les dans une grande casserole remplie de bouillon de volaille (ou de bouillon de légumes). Salez, poivrez, puis ajoutez vos pilon de poulet. Laissez mijoter le tout à feu doux, avec un couvercle, pendant au moins 40 minutes.
2. Pendant ce temps, épluchez les pommes de terre et taillez-les très grossièrement.
3. Après 40 minutes de cuisson, débarrassez le poulet et ajoutez au mélanges vos pommes de terre coupées. Laissez de nouveau mijoter pendant 30 minutes.
4. Épluchez et hachez finement l’oignon. Dans une poêle, déposer une noix de beurre puis faites colorer les oignons à feu vif. Dès qu’ils sont légèrement colorés, ajoutez-les dans la casserole avec le bouillon.
5. Découpez votre branche de céleri en fine lamelle et hachez grossièrement le bouquet de coriandre fraîche. Placez le tout dans votre préparation qui mijote dans la casserole. Laissez cuire le temps que les patates soient prêtes. Vous pouvez vérifier leur cuisson en plantant la pointe d’un couteau dans leur chair.
6. Pendant ce temps, dépiauté grossièrement les pilons de poulet à la main. Replongez-les ensuite dans le bouillon. Laissez mijoter quelques minute supplémentaires…et c’est prêt !

 
 

 
 Dressez dans une assiette creuse avec un peu de coriandre fraîche et un cuillère à soupe de crème entière. Accompagnez le tout d’un avocat et de citron vert et le tour est joué. Bon appétit !
