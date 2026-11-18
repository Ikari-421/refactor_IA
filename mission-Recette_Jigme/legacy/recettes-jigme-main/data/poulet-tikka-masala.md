---
schema: recette-web-jigme/v2
slug: poulet-tikka-masala
title: Poulet tikka masala (ou butter chicken)
lang: fr
description: "Poulet tikka masala : recette indienne avec blancs de poulet, yaourt nature et citron, pour 4 personnes. Version maison."
cuisine: indienne
category: salé
tags:
- salé
- plat
- poulet
- Inde
- épices
image:
  url:
  alt: Poulet tikka masala
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/poulet-tikka-masala.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
- sans_lactose_sans_gluten
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
    note: Sauce OK. Servir avec du riz, pas de naan au blé.
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: yaourt nature
      to: yaourt de coco nature
      note: Marinade.
    - from: beurre (finition)
      to: huile neutre
      note:
    - from: paneer
      to: tofu ferme pressé ou chou-fleur
      note: 'Si végé + SL : le paneer est du lait.'
    - from: coriandre, feuilles de fenugrec, beurre, sel, poivre
      to: beurre sans lactose ou clarifié
      note:
    note: Intolérance. Allergie → sans_produits_laitiers (même swaps, plus le paneer).
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: yaourt nature
      to: yaourt de coco nature
      note: Allergie lait.
    - from: beurre (finition)
      to: huile neutre
      note:
    - from: paneer
      to: chou-fleur en bouquets
      note: Pas de fromage.
    - from: coriandre, feuilles de fenugrec, beurre, sel, poivre
      to: margarine végétale
      note:
    note: Allergie lait. Ne pas garder le paneer.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’œufs.
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: noix de cajou
      to: pois chiches cuits égouttés, mixés avec les tomates
      note: Pour épaissir la sauce. Pois chiches nature (pas de houmous, qui contient du tahini,
        donc du sésame).
    note: Cajou dans la sauce.
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche (hors version maison, si indiquée).
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: 'Tradi poulet : déjà sans poisson. Si pesco cochée : basculer végé (paneer / chou-fleur).'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de lupin listé. Vérifier le mix SG du commerce (parfois du lupin).
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Tradi OK. En vegan, rester sur le chou-fleur (pas le tofu).
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés (éviter vinaigre / vin sulfité en substi).
house_toggle: ma_recette
house_options:
- ma_recette
histoire: 'Plat anglo-indien : morceaux de poulet marinés au yaourt et aux épices, grillés (tikka), puis
  nappés d’une sauce tomate enrichie de crème, beurre ou yaourt. On attribue souvent la création à Glasgow
  au début des années 1970 (Ali Ahmed Aslam, restaurant Shish Mahal), tout en notant le débat et le lien
  possible avec le butter chicken. En 2001, Robin Cook en fait un symbole du multiculturalisme britannique
  (parfois présenté comme un « véritable plat national »). Le murgh makhani, lui, est delhiite : Moti
  Mahal après la Partition (1947), dispute d’invention entre les familles Gujral et Jaggi.

  '
fun_facts:
- text: Ali Ahmed Aslam, immigré pakistanais arrivé à Glasgow dans les années 1960, est souvent
    crédité du tikka masala au Shish Mahal, début des années 1970.
  source_name: Grokipedia, Chicken tikka masala
  source_url: https://grokipedia.com/page/Chicken_tikka_masala
- text: 'Robin Cook, 2001 : le plat comme symbole de l’évolution multiculturelle du Royaume-Uni,
    parfois appelé « véritable plat national ».'
  source_name: Grokipedia, Chicken tikka masala
  source_url: https://grokipedia.com/page/Chicken_tikka_masala
- text: 'Butter chicken (murgh makhani) : Moti Mahal, Delhi, après 1947. Invention disputée
    en justice entre descendants de Kundan Lal Gujral et de Kundan Lal Jaggi.'
  source_name: Grokipedia, Butter chicken
  source_url: https://grokipedia.com/page/Butter_chicken
- text: '1998, enquête britannique : parmi 48 recettes de tikka masala, le seul ingrédient
    commun était le poulet.'
  source_name: Wikipedia EN, Chicken tikka masala
  source_url: https://en.wikipedia.org/wiki/Chicken_tikka_masala
wines:
- name: Gewurztraminer « Hugel »
  producer: Hugel & Fils
  origin: Alsace (Riquewihr)
  grapes: Gewurztraminer
  award:
  why: Litchi, rose, épice douce — rondeur qui tient le beurre ; sucrosité qui calme le kashmiri.
- name: Riesling
  producer: F.E. Trimbach
  origin: Alsace (Ribeauvillé)
  grapes: Riesling
  award:
  why: Plus sec, plus acide que le gewurz — coupe la sauce cajou et relance la tomate.
- name: Pinot Noir
  producer: Hugel & Fils
  origin: Alsace
  grapes: Pinot noir
  award:
  why: Rouge léger, peu de tanins — tient le grill du poulet sans assécher (un syrah se battrait
    avec le piment).
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - fruits_a_coque
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 180
      total_min: 250
    equipment:
    - saladier
    - poêle large ou grill
    - casserole
    - mixeur
    substitutions:
    - from: piment kashmiri
      to: paprika
      note: Déjà prévu sur la fiche maison.
    - from: feuilles de fenugrec
      to: omettre
      note: Ne pas remplacer par des graines de fenugrec (amer).
    scale_note: Sans gluten si servi avec du riz basmati, pas un naan au blé. Marinade ≥ 3
      h, mieux une nuit.
    ingredients:
    - qty: 4
      unit: piece
      item: blancs de poulet, en gros cubes
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: yaourt nature
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron (jus)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: gousse
      item: ail, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamomes vertes (légèrement écrasées)
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons rouges, émincés
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix de cajou
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre (finition)
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de fenugrec
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
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
    - "Marinade. Enrobez bien les cubes de poulet de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit."
    - "Grill. Dans une poêle très chaude (ou au gril), faites cuire le poulet sans rincer la marinade, 4–5 min par face, jusqu’à ce qu’il soit bien marqué. Réservez."
    - "Base. Dans la même poêle, faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons rouges et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min, pour cuire le cru."
    - "Coulis. Mixez les tomates avec les noix de cajou. Versez dans la poêle et laissez resserrer 10 min à feu moyen."
    - "Assemblée. Remettez le poulet et le jus de poêle dans la sauce. Laissez mijoter 15–20 min à feu doux."
    - "Finition. Incorporez un morceau de beurre froid, froissez les feuilles de fenugrec à la main et parsemez de coriandre fraîche. Goûtez et rectifiez le sel."
    steps_niveaux:
      amateur:
      - "Enrobez bien les cubes de poulet de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit."
      - "Dans une poêle très chaude (ou au gril), faites cuire le poulet sans rincer la marinade, 4–5 min par face, jusqu’à ce qu’il soit bien marqué. Réservez."
      - "Dans la même poêle, faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons rouges et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min, pour cuire le cru."
      - "Mixez les tomates avec les noix de cajou. Versez dans la poêle et laissez resserrer 10 min à feu moyen : la sauce se concentre."
      - "Remettez le poulet et le jus de poêle dans la sauce. Laissez mijoter 15–20 min à feu doux."
      - "Incorporez un morceau de beurre froid, froissez les feuilles de fenugrec à la main et parsemez de coriandre fraîche. Goûtez et rectifiez le sel."
      pro:
      - "Enrober les cubes de poulet de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réserver au frais au moins 3 h, mieux une nuit."
      - "Poêle très chaude ou gril : cuire le poulet sans rincer la marinade, 4–5 min par face, jusqu’au marquage. Réserver."
      - "Dans la même poêle, faire revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajouter les oignons rouges et blondir. Incorporer les épices de sauce, laisser 1–2 min pour cuire le cru."
      - "Mixer les tomates avec les noix de cajou. Verser dans la poêle. Resserrer 10 min à feu moyen."
      - "Remettre le poulet et le jus de poêle dans la sauce. Mijoter 15–20 min à feu doux."
      - "Incorporer un morceau de beurre froid, froisser les feuilles de fenugrec à la main, parsemer de coriandre fraîche. Goûter et rectifier le sel."
      cavernes:
      - "Cubes poulet yaourt nature jus citron épices marinade ail gingembre sel, enrober. Frais minimum 3 h, mieux nuit."
      - "Poêle très chaude ou gril. Poulet cuire sans rincer marinade, 4–5 min par face, bien marqué. Réserver."
      - "Même poêle. Beurre, graines cumin, cardamomes vertes, revenir 30 s. Oignons rouges, blondir. Épices sauce, 1–2 min, cuire cru."
      - "Tomates noix de cajou, mixer. Poêle, verser. Feu moyen 10 min, resserrer."
      - "Poulet, jus poêle, remettre sauce. Feu doux, mijoter 15–20 min."
      - "Beurre froid, morceau, incorporer. Feuilles fenugrec, froisser main. Coriandre fraîche, parsemer. Goûter, sel rectifier."
    kcal_per_serving: 237
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - fruits_a_coque
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 180
      total_min: 250
    equipment:
    - saladier
    - poêle large ou grill
    - casserole
    - mixeur
    substitutions: []
    scale_note: 'Doses maison telles quelles (4 blancs). Le process n’était pas noté sur la
      fiche 2023 : le déroulé ci-dessous est celui de la traditionnelle, mêmes totaux.'
    ingredients:
    - qty: 4
      unit: piece
      item: blancs de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: yaourt nature
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: garam masala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: piment kashmiri (ou paprika)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: coriandre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: cumin en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons rouges
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: gousse
      item: ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamomes vertes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix de cajou
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: crème liquide entière
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre, feuilles de fenugrec, beurre, sel, poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Mélangez les cubes de poulet avec le yaourt nature, le citron, la moitié des épices en poudre, l’ail, le gingembre et le sel. Réservez au frais au moins 3 h, mieux une nuit."
    - "Grill. Dans une poêle très chaude, faites cuire le poulet sans rincer la marinade, 4–5 min par face. Réservez."
    - "Base. Faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons et faites-les blondir. Incorporez le reste des épices et laissez 1–2 min."
    - "Coulis. Mixez les tomates avec les noix de cajou, versez et laissez 10 min à feu moyen."
    - "Assemblée. Remettez le poulet dans la sauce et laissez mijoter 15–20 min à feu doux."
    - "Finition. Incorporez un morceau de beurre froid, froissez le fenugrec et parsemez de coriandre."
    steps_niveaux:
      amateur:
      - "Mélangez les cubes de poulet avec le yaourt nature, le citron, la moitié des épices en poudre, l’ail, le gingembre et le sel. Réservez au frais au moins 3 h, mieux une nuit."
      - "Dans une poêle très chaude, faites cuire le poulet sans rincer la marinade, 4–5 min par face. Réservez."
      - "Faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons et faites-les blondir. Incorporez le reste des épices et laissez 1–2 min."
      - "Mixez les tomates avec les noix de cajou, versez et laissez 10 min à feu moyen."
      - "Remettez le poulet dans la sauce et laissez mijoter 15–20 min à feu doux."
      - "Incorporez un morceau de beurre froid, froissez le fenugrec et parsemez de coriandre."
      pro:
      - "Mélanger les cubes de poulet avec le yaourt nature, le citron, la moitié des épices en poudre, l’ail, le gingembre et le sel. Réserver au frais au moins 3 h, mieux une nuit."
      - "Poêle très chaude : cuire le poulet sans rincer la marinade, 4–5 min par face. Réserver."
      - "Faire revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajouter les oignons et blondir. Incorporer le reste des épices, laisser 1–2 min."
      - "Mixer les tomates avec les noix de cajou, verser, laisser 10 min à feu moyen."
      - "Remettre le poulet dans la sauce. Mijoter 15–20 min à feu doux."
      - "Incorporer un morceau de beurre froid, froisser le fenugrec, parsemer de coriandre."
      cavernes:
      - "Cubes poulet yaourt nature citron moitié épices poudre ail gingembre sel, mélanger. Frais minimum 3 h, mieux nuit."
      - "Poêle très chaude. Poulet cuire sans rincer marinade, 4–5 min par face. Réserver."
      - "Beurre, graines cumin, cardamomes vertes, revenir 30 s. Oignons, blondir. Reste épices, 1–2 min."
      - "Tomates noix de cajou, mixer. Verser. Feu moyen 10 min."
      - "Poulet, remettre sauce. Feu doux, mijoter 15–20 min."
      - "Beurre froid, morceau, incorporer. Fenugrec, froisser. Coriandre, parsemer."
    kcal_per_serving: 310
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
  vegetarienne:
    label: Végétarienne (paneer tikka masala)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - fruits_a_coque
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 35
      rest_min: 60
      total_min: 115
    equipment:
    - saladier
    - poêle large ou grill
    - casserole
    - mixeur
    substitutions:
    - from: paneer
      to: halloumi
      note: Plus salé, rincer.
    scale_note: Même sauce que la traditionnelle. Marinade 1 h seulement.
    ingredients:
    - qty: 400
      unit: g
      item: paneer en cubes
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: yaourt nature
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron (jus)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: gousse
      item: ail, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamomes vertes
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons rouges, émincés
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix de cajou
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre (finition)
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de fenugrec
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche, sel, poivre
      group: sauce
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
    - "Marinade. Faites mariner 1 h seulement (le paneer n’a pas besoin d’une nuit) : enrobez les cubes de paneer de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel."
    - "Cuisson. Saisissez vivement le paneer 2 min par face."
    - "Cuisson. Préparez la sauce : faites revenir les graines de cumin et les cardamomes, blondissez les oignons rouges, ajoutez les épices, puis versez le coulis de tomates et de noix de cajou."
    - "Finition. Glissez le paneer 10 min seulement dans la sauce (il durcit si on le cuit 30 min). Terminez avec le beurre, le fenugrec froissé et la coriandre fraîche."
    steps_niveaux:
      amateur:
      - "Faites mariner 1 h seulement (le paneer n’a pas besoin d’une nuit) : enrobez les cubes de paneer de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel."
      - "Saisissez vivement le paneer 2 min par face."
      - "Préparez la sauce : faites revenir les graines de cumin et les cardamomes, blondissez les oignons rouges, ajoutez les épices, puis versez le coulis de tomates et de noix de cajou."
      - "Glissez le paneer 10 min seulement dans la sauce (il durcit si on le cuit 30 min). Terminez avec le beurre, le fenugrec froissé et la coriandre fraîche."
      pro:
      - "Faire mariner 1 h seulement (le paneer n’a pas besoin d’une nuit) : enrober les cubes de paneer de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel."
      - "Saisir vivement le paneer 2 min par face."
      - "Préparer la sauce : faire revenir les graines de cumin et les cardamomes, blondir les oignons rouges, ajouter les épices, puis verser le coulis de tomates et de noix de cajou."
      - "Glisser le paneer 10 min seulement dans la sauce (il durcit si on le cuit 30 min). Terminer avec le beurre, le fenugrec froissé et la coriandre fraîche."
      cavernes:
      - "Cubes paneer yaourt nature jus citron épices marinade ail gingembre sel, enrober. Mariner 1 h seulement. Paneer, zéro nuit."
      - "Paneer, saisir vif 2 min par face."
      - "Sauce. Graines cumin cardamomes, revenir. Oignons rouges, blondir. Épices, ajouter. Coulis tomates noix de cajou, verser."
      - "Paneer, glisser sauce 10 min seulement. 30 min, durcit. Beurre, fenugrec froissé, coriandre fraîche, terminer."
    kcal_per_serving: 174
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (chou-fleur)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    allergens:
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 40
      rest_min: 60
      total_min: 125
    equipment:
    - plaque four
    - poêle
    - mixeur
    substitutions:
    - from: chou-fleur
      to: tofu ferme pressé
      note: Même marinade.
    scale_note:
    ingredients:
    - qty: 700
      unit: g
      item: chou-fleur en bouquets
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: yaourt de coco
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: garam masala
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: piment kashmiri (ou paprika)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: coriandre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: cumin en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: gousse
      item: ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons rouges
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix de cajou
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamomes vertes
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile neutre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fenugrec, coriandre, sel, poivre
      group: sauce
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Enrobez les bouquets de chou-fleur de yaourt de coco, d’épices et de citron, puis laissez mariner 1 h."
    - "Cuisson. Enfournez à 220 °C pendant 20 min, jusqu’à ce que les bords soient grillés."
    - "Cuisson. Préparez la sauce à l’huile neutre : faites revenir les graines de cumin et les cardamomes, blondissez les oignons rouges, ajoutez les épices, puis versez le coulis de tomates et de noix de cajou."
    - "Finition. Glissez le chou-fleur 10 min dans la sauce. Froissez le fenugrec et parsemez de coriandre."
    steps_niveaux:
      amateur:
      - "Enrobez les bouquets de chou-fleur de yaourt de coco, d’épices et de citron, puis laissez mariner 1 h."
      - "Enfournez à 220 °C pendant 20 min, jusqu’à ce que les bords soient grillés."
      - "Préparez la sauce à l’huile neutre : faites revenir les graines de cumin et les cardamomes, blondissez les oignons rouges, ajoutez les épices, puis versez le coulis de tomates et de noix de cajou."
      - "Glissez le chou-fleur 10 min dans la sauce. Froissez le fenugrec et parsemez de coriandre."
      pro:
      - "Enrober les bouquets de chou-fleur de yaourt de coco, d’épices et de citron, puis laisser mariner 1 h."
      - "Enfourner à 220 °C pendant 20 min, jusqu’aux bords grillés."
      - "Préparer la sauce à l’huile neutre : faire revenir les graines de cumin et les cardamomes, blondir les oignons rouges, ajouter les épices, puis verser le coulis de tomates et de noix de cajou."
      - "Glisser le chou-fleur 10 min dans la sauce. Froisser le fenugrec et parsemer de coriandre."
      cavernes:
      - "Bouquets chou-fleur yaourt de coco épices citron, enrober. Mariner 1 h."
      - "Four 220 °C 20 min. Bords grillés, ok."
      - "Sauce huile neutre. Graines cumin cardamomes, revenir. Oignons rouges, blondir. Épices, ajouter. Coulis tomates noix de cajou, verser."
      - "Chou-fleur, glisser sauce 10 min. Fenugrec, froisser. Coriandre, parsemer."
    kcal_per_serving: 230
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
  pesco:
    label: Pesco-végétarienne
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - fruits_a_coque
    - poisson
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 180
      total_min: 250
    equipment:
    - saladier
    - poêle large ou grill
    - casserole
    - mixeur
    substitutions:
    - from: piment kashmiri
      to: paprika
      note: Déjà prévu sur la fiche maison.
    - from: feuilles de fenugrec
      to: omettre
      note: Ne pas remplacer par des graines de fenugrec (amer).
    - from: poulet
      to: cabillaud / saumon / lieu
      note: Même marinade yaourt, grill plus court.
    scale_note: Sans gluten si servi avec du riz basmati, pas un naan au blé. Marinade ≥ 3
      h, mieux une nuit.
    ingredients:
    - qty: 4
      unit: piece
      item: filet de cabillaud ou saumon, en gros cubes
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: yaourt nature
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron (jus)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: gousse
      item: ail, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamomes vertes (légèrement écrasées)
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons rouges, émincés
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix de cajou
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre (finition)
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de fenugrec
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre fraîche
      group: sauce
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Enrobez bien les cubes de cabillaud ou de saumon de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit."
    - "Grill. Dans une poêle très chaude (ou au gril), faites cuire le poisson sans rincer la marinade, 4–5 min par face, jusqu’à ce qu’il soit bien marqué. Réservez."
    - "Base. Dans la même poêle, faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons rouges et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min, pour cuire le cru."
    - "Coulis. Mixez les tomates avec les noix de cajou. Versez dans la poêle et laissez resserrer 10 min à feu moyen."
    - "Assemblée. Remettez le poisson et le jus de poêle dans la sauce. Laissez mijoter 15–20 min à feu doux."
    - "Finition. Incorporez un morceau de beurre froid, froissez les feuilles de fenugrec à la main et parsemez de coriandre fraîche. Goûtez et rectifiez le sel."
    steps_niveaux:
      amateur:
      - "Enrobez bien les cubes de cabillaud ou de saumon de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit."
      - "Dans une poêle très chaude (ou au gril), faites cuire le poisson sans rincer la marinade, 4–5 min par face, jusqu’à ce qu’il soit bien marqué. Réservez."
      - "Dans la même poêle, faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons rouges et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min, pour cuire le cru."
      - "Mixez les tomates avec les noix de cajou. Versez dans la poêle et laissez resserrer 10 min à feu moyen : la sauce se concentre."
      - "Remettez le poisson et le jus de poêle dans la sauce. Laissez mijoter 15–20 min à feu doux."
      - "Incorporez un morceau de beurre froid, froissez les feuilles de fenugrec à la main et parsemez de coriandre fraîche. Goûtez et rectifiez le sel."
      pro:
      - "Enrober les cubes de cabillaud ou de saumon de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réserver au frais au moins 3 h, mieux une nuit."
      - "Poêle très chaude ou gril : cuire le poisson sans rincer la marinade, 4–5 min par face, jusqu’au marquage. Réserver."
      - "Dans la même poêle, faire revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajouter les oignons rouges et blondir. Incorporer les épices de sauce, laisser 1–2 min pour cuire le cru."
      - "Mixer les tomates avec les noix de cajou. Verser dans la poêle. Resserrer 10 min à feu moyen."
      - "Remettre le poisson et le jus de poêle dans la sauce. Mijoter 15–20 min à feu doux."
      - "Incorporer un morceau de beurre froid, froisser les feuilles de fenugrec à la main, parsemer de coriandre fraîche. Goûter et rectifier le sel."
      cavernes:
      - "Cubes cabillaud ou saumon yaourt nature jus citron épices marinade ail gingembre sel, enrober. Frais minimum 3 h, mieux nuit."
      - "Poêle très chaude ou gril. Poisson cuire sans rincer marinade, 4–5 min par face, bien marqué. Réserver."
      - "Même poêle. Beurre, graines cumin, cardamomes vertes, revenir 30 s. Oignons rouges, blondir. Épices sauce, 1–2 min, cuire cru."
      - "Tomates noix de cajou, mixer. Poêle, verser. Feu moyen 10 min, resserrer."
      - "Poisson, jus poêle, remettre sauce. Feu doux, mijoter 15–20 min."
      - "Beurre froid, morceau, incorporer. Feuilles fenugrec, froisser main. Coriandre fraîche, parsemer. Goûter, sel rectifier."
    kcal_per_serving: 164
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  sans_lactose_sans_gluten:
    label: Sans lactose et sans gluten
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 45
      rest_min: 180
      total_min: 250
    equipment:
    - saladier
    - poêle large ou grill
    - casserole
    - mixeur
    substitutions:
    - from: naan
      to: riz basmati
      note: Le naan au blé casse le sans gluten.
    scale_note: Poulet conservé. Yaourt de coco + huile à la place du yaourt et du beurre.
    ingredients:
    - qty: 4
      unit: piece
      item: blancs de poulet, en gros cubes
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: yaourt de coco
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron (jus)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: gousse
      item: ail, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gingembre, râpé
      group: marinade
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: graines de cumin
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cardamomes vertes
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons rouges, émincés
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: curcuma
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: garam masala
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: piment kashmiri (ou paprika)
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: coriandre en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: cumin en poudre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: noix de cajou
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: tomates
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile neutre
      group: sauce
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: feuilles de fenugrec, coriandre, sel, poivre
      group: sauce
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Enrobez les cubes de poulet de yaourt de coco, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit."
    - "Grill. Dans une poêle très chaude, faites cuire le poulet sans rincer la marinade, 4–5 min par face. Réservez."
    - "Base. Faites revenir l’huile neutre, les graines de cumin et les cardamomes 30 s. Ajoutez les oignons et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min."
    - "Coulis. Mixez les tomates avec les noix de cajou, versez et laissez 10 min à feu moyen."
    - "Assemblée. Remettez le poulet dans la sauce et laissez mijoter 15–20 min à feu doux."
    - "Finition. Froissez le fenugrec et parsemez de coriandre."
    steps_niveaux:
      amateur:
      - "Enrobez les cubes de poulet de yaourt de coco, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit."
      - "Dans une poêle très chaude, faites cuire le poulet sans rincer la marinade, 4–5 min par face. Réservez."
      - "Faites revenir l’huile neutre, les graines de cumin et les cardamomes 30 s. Ajoutez les oignons et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min."
      - "Mixez les tomates avec les noix de cajou, versez et laissez 10 min à feu moyen."
      - "Remettez le poulet dans la sauce et laissez mijoter 15–20 min à feu doux."
      - "Froissez le fenugrec et parsemez de coriandre."
      pro:
      - "Enrober les cubes de poulet de yaourt de coco, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réserver au frais au moins 3 h, mieux une nuit."
      - "Poêle très chaude : cuire le poulet sans rincer la marinade, 4–5 min par face. Réserver."
      - "Faire revenir l’huile neutre, les graines de cumin et les cardamomes 30 s. Ajouter les oignons et blondir. Incorporer les épices de sauce, laisser 1–2 min."
      - "Mixer les tomates avec les noix de cajou, verser, laisser 10 min à feu moyen."
      - "Remettre le poulet dans la sauce. Mijoter 15–20 min à feu doux."
      - "Froisser le fenugrec et parsemer de coriandre."
      cavernes:
      - "Cubes poulet yaourt de coco jus citron épices marinade ail gingembre sel, enrober. Frais minimum 3 h, mieux nuit."
      - "Poêle très chaude. Poulet cuire sans rincer marinade, 4–5 min par face. Réserver."
      - "Huile neutre, graines cumin, cardamomes, revenir 30 s. Oignons, blondir. Épices sauce, 1–2 min."
      - "Tomates noix de cajou, mixer. Verser. Feu moyen 10 min."
      - "Poulet, remettre sauce. Feu doux, mijoter 15–20 min."
      - "Fenugrec, froisser. Coriandre, parsemer."
    kcal_per_serving: 370
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
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

# Poulet tikka masala (ou butter chicken)

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Viande (poulet).

**Catégorie :** salé · plat · Inde / Royaume-Uni  
**Régimes déjà vrais (tradi) :** sans gluten (avec du riz)  
**Photo :** aucune pour l’instant

## Ingrédients (4 personnes)

**Marinade**
- 4 blancs de poulet, en gros cubes
- 1 yaourt nature
- Jus de 1 citron
- 1 c. à s. de curcuma
- 1 c. à s. de garam masala
- 1 c. à s. de piment kashmiri (ou paprika)
- 1 c. à s. de coriandre en poudre
- 1 c. à s. de cumin en poudre
- 2 gousses d’ail, râpées
- 10 g de gingembre, râpé
- Sel, poivre

**Sauce**
- 1 c. à s. de graines de cumin
- 4 cardamomes vertes
- 2 oignons rouges, émincés
- 1 c. à s. de chaque épice en poudre (mêmes que la marinade)
- 1 poignée de noix de cajou
- 400 g de tomates
- Beurre, feuilles de fenugrec, coriandre fraîche

## Préparation

1. Marinade. Enrobez bien les cubes de poulet de yaourt nature, de jus de citron, des épices de marinade, d’ail, de gingembre et de sel. Réservez au frais au moins 3 h, mieux une nuit.
2. Grill. Dans une poêle très chaude (ou au gril), faites cuire le poulet sans rincer la marinade, 4–5 min par face, jusqu’à ce qu’il soit bien marqué. Réservez.
3. Base. Dans la même poêle, faites revenir le beurre, les graines de cumin et les cardamomes vertes 30 s. Ajoutez les oignons rouges et faites-les blondir. Incorporez les épices de sauce et laissez 1–2 min, pour cuire le cru.
4. Coulis. Mixez les tomates avec les noix de cajou. Versez dans la poêle et laissez resserrer 10 min à feu moyen.
5. Assemblée. Remettez le poulet et le jus de poêle dans la sauce. Laissez mijoter 15–20 min à feu doux.
6. Finition. Incorporez un morceau de beurre froid, froissez les feuilles de fenugrec à la main et parsemez de coriandre fraîche. Goûtez et rectifiez le sel.

## Variantes machine

`ma_recette` (mêmes doses, liste à plat) · `vegetarienne` (paneer) · `vegan` (chou-fleur) · `sans_lactose_sans_gluten` (poulet, yaourt coco)


