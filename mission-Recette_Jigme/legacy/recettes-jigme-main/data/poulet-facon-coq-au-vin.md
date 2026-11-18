---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: poulet-facon-coq-au-vin
title: Poulet façon coq au vin
lang: fr
description: "Poulet façon coq au vin : recette française avec poulet entier, oignon et échalote, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- poulet
- mijoté
- vin
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/poulet-facon-coq-au-vin.jpg
  alt: Poulet façon coq au vin
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/poulet-facon-coq-au-vin.md
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
    impossible: true
    redirect_variant:
    clears:
    - soja
    swaps: []
    note: 'Contient soja (lardons de tempeh fumé) : pas d’adaptation fiable.'
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
    - from: bouteille de rouge
      to: bouillon de légumes
      note:
    note: 'Sulfites : bouteille de rouge → bouillon de légumes.'
house_toggle:
house_options: []
histoire: 'Coq au vin : coq (ou poulet) braisé au vin rouge, lardons, champignons, oignons grelots. Plat
  français, souvent un vin de Bourgogne. Des variantes locales (vin jaune, riesling). Ici, un poulet «
  façon coq au vin », plus tendre qu’un vrai coq de basse-cour.

  '
fun_facts:
- text: >
    Un vrai coq se braise longtemps ; le poulet de chair cuit plus vite, le vin
    ne doit pas réduire à un sirop amer.
  source_name: Wikipedia, Coq au vin
  source_url: https://en.wikipedia.org/wiki/Coq_au_vin
- text: >
    Le bouquet garni (thym, persil, laurier) entre tôt, avec la viande.
  source_name: Grokipedia, Bouquet garni
  source_url: https://grokipedia.com/page/Bouquet_garni
wines:
- name: Bourgogne
  producer: Maison Louis Latour
  origin: Beaune, Bourgogne
  grapes: pinot noir
  award:
  why: Pinot de Bourgogne — le plat et le vin de la marinade, sans un grand cru.
- name: Côtes du Rhône Villages
  producer: Domaine Brusset
  origin: Cairanne, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, garrigue — si le vin de cuisson est un rhône, on reste dans le même registre.
- name: Beaujolais
  producer: Château des Capitans
  origin: Juliénas, Beaujolais
  grapes: gamay
  award:
  why: Gamay — un rouge léger si le poulet n’est pas un coq de dix-huit mois.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 80
      rest_min: 810
      total_min: 920
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: poulet entier (ou un coq dans l'idéal)
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: graines de poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bouteille de rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale neutre (type pépin de raisin)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: petit verre de cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: autre petit verre de cognac (pour flamber)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: fond de volaille (ou un bouillon cube à défaut)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: poitrine de porc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain pour quelques croûtons maison
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
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin rouge
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Marinade. Préparez toute vos découpes pour la marinade : épluchez les carottes et coupez les
      en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez
      votre bouquet garni.'
    - 'Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le poulet entier
      en morceau, toutes les découpes précédemment réalisées, le bouquet garni, les graines
      de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale
      pour former une petite pellicule sur le dessus et ainsi aider à la conservation. Laissez
      mariner une nuit.'
    - 'Marinade. Lorsque ça a bien mariné, séparez tous les éléments de la marinade : le poulet d’un
      côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez
      cette dernière à bouillir et passez directement à la suite.'
    - Cuisson. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau
      de poulet (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans
      ce cas là, réservez au fur et à mesure). Quand tout est cuit, réservez.
    - Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade.
      Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites
      suez le tout. Dès que c’est fait, rajoutez le morceaux de poulet directement par dessus.
    - Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !
    - Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de volaille
      également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de
      temps à autre.
    - Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (en fonction
      de la taille du poulet). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau
      si ça a trop réduit.
    - Cuisson. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter des lardons.
      Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison.
      5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et
      mélangez. Laissez cuire 5 minutes au four.
    - Finition. Ouf ! C’est terminé ! Et voilà, vous maîtrisez maintenant le coq au vin !
    steps_niveaux:
      amateur:
      - "Marinade. Préparez toutes vos découpes pour la marinade : épluchez les carottes et coupez-les en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez votre bouquet garni."
      - "Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le poulet entier en morceau, toutes les découpes précédemment réalisées, le bouquet garni, les graines de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale pour former une petite pellicule sur le dessus et ainsi aider à la conservation. [[mariner|Laissez mariner]] une nuit."
      - "Marinade. Lorsque ça a bien [[mariner|mariné]], séparez tous les éléments de la marinade : le poulet d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez cette dernière à bouillir et passez directement à la suite."
      - "Cuisson. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de poulet (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans ce cas-là, réservez au fur et à mesure). Quand tout est cuit, réservez."
      - "Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade. Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites suer le tout. Dès que c’est fait, rajoutez les morceaux de poulet directement par-dessus."
      - "Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !"
      - "Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de volaille également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de temps à autre."
      - "Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (en fonction de la taille du poulet). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau si ça a trop [[reduire|réduit]]."
      - "Cuisson. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter des lardons. Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison. 5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et mélangez. Laissez cuire 5 minutes au four."
      - "Finition. C’est terminé."
      pro:
      - "Éplucher les carottes, les couper en rondelles. Émincer les oignons et les échalotes. Éplucher un peu d’ail. Préparer le bouquet garni."
      - "Réunir dans un grand récipient le poulet entier en morceau, les découpes, le bouquet garni, les graines de poivres, le vin rouge (beaucoup), le cognac, de l’huile végétale en pellicule sur le dessus. Mariner une nuit."
      - "Séparer poulet, garniture et liquide de marinade. Porter le liquide à ébullition."
      - "Dans une cocotte, dorer chaque morceau de poulet dans un peu de matière grasse, au fur et à mesure si besoin. Réserver."
      - "Dans la même cocotte, dégraissée si besoin, ajouter la garniture de marinade. Racler le fond à la spatule en bois. Faire suer. Remettre les morceaux de poulet par-dessus."
      - "Ajouter la deuxième partie du cognac. Flamber."
      - "Ajouter la marinade bouillie et le fond de volaille. Porter à ébullition une dizaine de minutes. Écumer de temps à autre."
      - "Couvrir. Four 200°C, 1 heure à 1 heure 30 selon la taille du poulet. Vérifier au bout d’une heure. Ajouter un peu d’eau si ça a trop réduit."
      - "Faire sauter des lardons, puis des champignons dans la même poêle. Réserver. Préparer des croûtons maison. 5 minutes avant la fin, ajouter cette garniture, mélanger. Cuire 5 minutes au four."
      - "Terminer."
      cavernes:
      - "Marinade. Découpes marinade. Carottes, éplucher, rondelles. Oignons, échalotes, émincer. Peu ail, éplucher. Bouquet garni."
      - "Marinade. Grand récipient : poulet entier morceau, découpes, bouquet garni, graines poivres, vin rouge (beaucoup), cognac, huile végétale pellicule dessus conservation. Mariner nuit."
      - "Marinade. Bien mariné. Séparer : poulet côté, garniture autre, liquide marinade dans casserole. Bouillir. Suite."
      - "Cuisson. Cocotte, peu matière grasse. Morceaux poulet, dorer. Si cocotte trop petite, fur et à mesure, réserver fur et à mesure. Tout cuit, réserver."
      - "Marinade. Même cocotte, dégraissée si besoin. Garniture marinade. Fond cocotte, racler spatule bois. Suer. Morceaux poulet par-dessus."
      - "Cuisson. 2e partie cognac, flamber. Attention, ça brûle !"
      - "Marinade. Marinade bouillie. Fond volaille. Cocotte ébullition dizaine min. Écumer temps à autre."
      - "Cuisson. Cocotte, couvrir. Four 200°C, 1 heure à 1 heure 30 (taille poulet). Vérifier cuisson bout heure. Si trop réduit, peu eau."
      - "Cuisson. Avant fin cuisson, reste garniture. Lardons, sauter. Même poêle, champignons, sauter. Réserver. Croûtons maison. 5 min avant fin cuisson cocotte, garniture, mélanger. Four 5 min."
      - "Finition. Terminé."
    kcal_per_serving: 122
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
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
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: paneer ou tofu ferme
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: graines de poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bouteille de rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale neutre (type pépin de raisin)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: petit verre de cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: autre petit verre de cognac (pour flamber)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: lardons de tempeh fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain pour quelques croûtons maison
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
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin rouge
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Marinade. Préparez toute vos découpes pour la marinade : épluchez les carottes et coupez les
      en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez
      votre bouquet garni.'
    - 'Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le paneer (ou le tofu ferme) en morceaux, toutes les découpes précédemment réalisées, le bouquet garni, les graines
      de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale
      pour former une petite pellicule sur le dessus et ainsi aider à la conservation. Laissez
      mariner une nuit.'
    - 'Marinade. Lorsque ça a bien mariné, séparez tous les éléments de la marinade : le paneer d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez
      cette dernière à bouillir et passez directement à la suite.'
    - Dressage. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de paneer (au fur et à mesure si la cocotte est trop petite). Quand tout est cuit, réservez.
    - Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade.
      Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites
      suez le tout. Dès que c’est fait, rajoutez les morceaux de paneer directement par-dessus.
    - Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !
    - Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de légumes également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de
      temps à autre.
    - Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (selon la taille des morceaux). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau
      si ça a trop réduit.
    - Dressage. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter les lardons de tempeh. Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison.
      5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et
      mélangez. Laissez cuire 5 minutes au four.
    - Finition. Ouf ! C’est terminé ! Et voilà, vous maîtrisez maintenant le coq au vin !
    steps_niveaux:
      amateur:
      - "Marinade. Préparez toutes vos découpes pour la marinade : épluchez les carottes et coupez-les en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez votre bouquet garni."
      - "Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le paneer (ou le tofu ferme) en morceaux, toutes les découpes précédemment réalisées, le bouquet garni, les graines de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale pour former une petite pellicule sur le dessus et ainsi aider à la conservation. [[mariner|Laissez mariner]] une nuit."
      - "Marinade. Lorsque ça a bien [[mariner|mariné]], séparez tous les éléments de la marinade : le paneer d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez cette dernière à bouillir et passez directement à la suite."
      - "Dressage. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de paneer (au fur et à mesure si la cocotte est trop petite). Quand tout est cuit, réservez."
      - "Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade. Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites suer le tout. Dès que c’est fait, rajoutez les morceaux de paneer directement par-dessus."
      - "Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !"
      - "Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de légumes également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de temps à autre."
      - "Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (selon la taille des morceaux). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau si ça a trop [[reduire|réduit]]."
      - "Dressage. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter les lardons de tempeh. Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison. 5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et mélangez. Laissez cuire 5 minutes au four."
      - "Finition. C’est terminé."
      pro:
      - "Éplucher les carottes, les couper en rondelles. Émincer les oignons et les échalotes. Éplucher un peu d’ail. Préparer le bouquet garni."
      - "Réunir dans un grand récipient le paneer (ou le tofu ferme) en morceaux, les découpes, le bouquet garni, les graines de poivres, le vin rouge (beaucoup), le cognac, de l’huile végétale en pellicule sur le dessus. Mariner une nuit."
      - "Séparer paneer, garniture et liquide de marinade. Porter le liquide à ébullition."
      - "Dans une cocotte, dorer chaque morceau de paneer dans un peu de matière grasse, au fur et à mesure si besoin. Réserver."
      - "Dans la même cocotte, dégraissée si besoin, ajouter la garniture de marinade. Racler le fond à la spatule en bois. Faire suer. Remettre les morceaux de paneer par-dessus."
      - "Ajouter la deuxième partie du cognac. Flamber."
      - "Ajouter la marinade bouillie et le fond de légumes. Porter à ébullition une dizaine de minutes. Écumer de temps à autre."
      - "Couvrir. Four 200°C, 1 heure à 1 heure 30 selon la taille des morceaux. Vérifier au bout d’une heure. Ajouter un peu d’eau si ça a trop réduit."
      - "Faire sauter les lardons de tempeh, puis des champignons dans la même poêle. Réserver. Préparer des croûtons maison. 5 minutes avant la fin, ajouter cette garniture, mélanger. Cuire 5 minutes au four."
      - "Terminer."
      cavernes:
      - "Marinade. Découpes marinade. Carottes, éplucher, rondelles. Oignons, échalotes, émincer. Peu ail, éplucher. Bouquet garni."
      - "Marinade. Grand récipient : paneer ou tofu ferme morceaux, découpes, bouquet garni, graines poivres, vin rouge (beaucoup), cognac, huile végétale pellicule dessus conservation. Mariner nuit."
      - "Marinade. Bien mariné. Séparer : paneer côté, garniture autre, liquide marinade dans casserole. Bouillir. Suite."
      - "Dressage. Cocotte, peu matière grasse. Morceaux paneer, dorer. Si cocotte trop petite, fur et à mesure. Tout cuit, réserver."
      - "Marinade. Même cocotte, dégraissée si besoin. Garniture marinade. Fond cocotte, racler spatule bois. Suer. Morceaux paneer par-dessus."
      - "Cuisson. 2e partie cognac, flamber. Attention, ça brûle !"
      - "Marinade. Marinade bouillie. Fond légumes. Cocotte ébullition dizaine min. Écumer temps à autre."
      - "Cuisson. Cocotte, couvrir. Four 200°C, 1 heure à 1 heure 30 (taille morceaux). Vérifier cuisson bout heure. Si trop réduit, peu eau."
      - "Dressage. Avant fin cuisson, reste garniture. Lardons tempeh, sauter. Même poêle, champignons, sauter. Réserver. Croûtons maison. 5 min avant fin cuisson cocotte, garniture, mélanger. Four 5 min."
      - "Finition. Terminé."
    kcal_per_serving: 109
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: tofu ferme
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: graines de poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bouteille de rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale neutre (type pépin de raisin)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: petit verre de cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: autre petit verre de cognac (pour flamber)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: lardons de tempeh fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain pour quelques croûtons maison
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
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vin rouge
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Marinade. Préparez toute vos découpes pour la marinade : épluchez les carottes et coupez les
      en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez
      votre bouquet garni.'
    - 'Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le tofu ferme en morceaux, toutes les découpes précédemment réalisées, le bouquet garni, les graines
      de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale
      pour former une petite pellicule sur le dessus et ainsi aider à la conservation. Laissez
      mariner une nuit.'
    - 'Marinade. Lorsque ça a bien mariné, séparez tous les éléments de la marinade : le tofu d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez
      cette dernière à bouillir et passez directement à la suite.'
    - Cuisson. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de tofu (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans
      ce cas là, réservez au fur et à mesure). Quand tout est cuit, réservez.
    - Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade.
      Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites
      suez le tout. Dès que c’est fait, rajoutez les morceaux de tofu directement par dessus.
    - Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !
    - Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de légumes également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de
      temps à autre.
    - Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau
      si ça a trop réduit.
    - Cuisson. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter les lardons de tempeh.
      Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison.
      5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et
      mélangez. Laissez cuire 5 minutes au four.
    - Finition. Ouf ! C’est terminé ! Et voilà, vous maîtrisez maintenant le coq au vin !
    steps_niveaux:
      amateur:
      - "Marinade. Préparez toutes vos découpes pour la marinade : épluchez les carottes et coupez-les en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez votre bouquet garni."
      - "Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le tofu ferme en morceaux, toutes les découpes précédemment réalisées, le bouquet garni, les graines de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale pour former une petite pellicule sur le dessus et ainsi aider à la conservation. [[mariner|Laissez mariner]] une nuit."
      - "Marinade. Lorsque ça a bien [[mariner|mariné]], séparez tous les éléments de la marinade : le tofu d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez cette dernière à bouillir et passez directement à la suite."
      - "Cuisson. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de tofu (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans ce cas-là, réservez au fur et à mesure). Quand tout est cuit, réservez."
      - "Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade. Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites suer le tout. Dès que c’est fait, rajoutez les morceaux de tofu directement par-dessus."
      - "Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !"
      - "Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de légumes également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de temps à autre."
      - "Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau si ça a trop [[reduire|réduit]]."
      - "Cuisson. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter les lardons de tempeh. Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison. 5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et mélangez. Laissez cuire 5 minutes au four."
      - "Finition. C’est terminé."
      pro:
      - "Éplucher les carottes, les couper en rondelles. Émincer les oignons et les échalotes. Éplucher un peu d’ail. Préparer le bouquet garni."
      - "Réunir dans un grand récipient le tofu ferme en morceaux, les découpes, le bouquet garni, les graines de poivres, le vin rouge (beaucoup), le cognac, de l’huile végétale en pellicule sur le dessus. Mariner une nuit."
      - "Séparer tofu, garniture et liquide de marinade. Porter le liquide à ébullition."
      - "Dans une cocotte, dorer chaque morceau de tofu dans un peu de matière grasse, au fur et à mesure si besoin. Réserver."
      - "Dans la même cocotte, dégraissée si besoin, ajouter la garniture de marinade. Racler le fond à la spatule en bois. Faire suer. Remettre les morceaux de tofu par-dessus."
      - "Ajouter la deuxième partie du cognac. Flamber."
      - "Ajouter la marinade bouillie et le fond de légumes. Porter à ébullition une dizaine de minutes. Écumer de temps à autre."
      - "Couvrir. Four 200°C, 1 heure à 1 heure 30 (). Vérifier au bout d’une heure. Ajouter un peu d’eau si ça a trop réduit."
      - "Faire sauter les lardons de tempeh, puis des champignons dans la même poêle. Réserver. Préparer des croûtons maison. 5 minutes avant la fin, ajouter cette garniture, mélanger. Cuire 5 minutes au four."
      - "Terminer."
      cavernes:
      - "Marinade. Découpes marinade. Carottes, éplucher, rondelles. Oignons, échalotes, émincer. Peu ail, éplucher. Bouquet garni."
      - "Marinade. Grand récipient : tofu ferme morceaux, découpes, bouquet garni, graines poivres, vin rouge (beaucoup), cognac, huile végétale pellicule dessus conservation. Mariner nuit."
      - "Marinade. Bien mariné. Séparer : tofu côté, garniture autre, liquide marinade dans casserole. Bouillir. Suite."
      - "Cuisson. Cocotte, peu matière grasse. Morceaux tofu, dorer. Si cocotte trop petite, fur et à mesure, réserver fur et à mesure. Tout cuit, réserver."
      - "Marinade. Même cocotte, dégraissée si besoin. Garniture marinade. Fond cocotte, racler spatule bois. Suer. Morceaux tofu par-dessus."
      - "Cuisson. 2e partie cognac, flamber. Attention, ça brûle !"
      - "Marinade. Marinade bouillie. Fond légumes. Cocotte ébullition dizaine min. Écumer temps à autre."
      - "Cuisson. Cocotte, couvrir. Four 200°C, 1 heure à 1 heure 30 (). Vérifier cuisson bout heure. Si trop réduit, peu eau."
      - "Cuisson. Avant fin cuisson, reste garniture. Lardons tempeh, sauter. Même poêle, champignons, sauter. Réserver. Croûtons maison. 5 min avant fin cuisson cocotte, garniture, mélanger. Four 5 min."
      - "Finition. Terminé."
    kcal_per_serving: 123
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: cabillaud
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
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: graines de poivre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bouteille de rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale neutre (type pépin de raisin)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: petit verre de cognac
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: autre petit verre de cognac (pour flamber)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: fumet de poisson
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: dés de saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du pain pour quelques croûtons maison
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
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Marinade. Préparez toute vos découpes pour la marinade : épluchez les carottes et coupez les
      en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez
      votre bouquet garni.'
    - 'Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le poulet entier
      en morceau, toutes les découpes précédemment réalisées, le bouquet garni, les graines
      de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale
      pour former une petite pellicule sur le dessus et ainsi aider à la conservation. Laissez
      mariner une nuit.'
    - 'Marinade. Lorsque ça a bien mariné, séparez tous les éléments de la marinade : le poulet d’un
      côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez
      cette dernière à bouillir et passez directement à la suite.'
    - Cuisson. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau
      de poulet (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans
      ce cas là, réservez au fur et à mesure). Quand tout est cuit, réservez.
    - Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade.
      Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites
      suez le tout. Dès que c’est fait, rajoutez le morceaux de poulet directement par dessus.
    - Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !
    - Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de volaille
      également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de
      temps à autre.
    - Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (en fonction
      de la taille du poulet). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau
      si ça a trop réduit.
    - Cuisson. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter des lardons.
      Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison.
      5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et
      mélangez. Laissez cuire 5 minutes au four.
    - Finition. Ouf ! C’est terminé ! Et voilà, vous maîtrisez maintenant le coq au vin !
    steps_niveaux:
      amateur:
      - "Marinade. Préparez toutes vos découpes pour la marinade : épluchez les carottes et coupez-les en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez votre bouquet garni."
      - "Marinade. Mettez tous les éléments de la marinade dans un grand récipient : le poulet entier en morceau, toutes les découpes précédemment réalisées, le bouquet garni, les graines de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale pour former une petite pellicule sur le dessus et ainsi aider à la conservation. [[mariner|Laissez mariner]] une nuit."
      - "Marinade. Lorsque ça a bien [[mariner|mariné]], séparez tous les éléments de la marinade : le poulet d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez cette dernière à bouillir et passez directement à la suite."
      - "Cuisson. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de poulet (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans ce cas-là, réservez au fur et à mesure). Quand tout est cuit, réservez."
      - "Marinade. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade. Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites suer le tout. Dès que c’est fait, rajoutez les morceaux de poulet directement par-dessus."
      - "Cuisson. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !"
      - "Marinade. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de volaille également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de temps à autre."
      - "Cuisson. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (en fonction de la taille du poulet). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau si ça a trop [[reduire|réduit]]."
      - "Cuisson. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter des lardons. Dans la même poêle, faites sauter des champignons. Réservez. Préparez des croûtons maison. 5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et mélangez. Laissez cuire 5 minutes au four."
      - "Finition. C’est terminé."
      pro:
      - "Éplucher les carottes, les couper en rondelles. Émincer les oignons et les échalotes. Éplucher un peu d’ail. Préparer le bouquet garni."
      - "Réunir dans un grand récipient le poulet entier en morceau, les découpes, le bouquet garni, les graines de poivres, le vin rouge (beaucoup), le cognac, de l’huile végétale en pellicule sur le dessus. Mariner une nuit."
      - "Séparer poulet, garniture et liquide de marinade. Porter le liquide à ébullition."
      - "Dans une cocotte, dorer chaque morceau de poulet dans un peu de matière grasse, au fur et à mesure si besoin. Réserver."
      - "Dans la même cocotte, dégraissée si besoin, ajouter la garniture de marinade. Racler le fond à la spatule en bois. Faire suer. Remettre les morceaux de poulet par-dessus."
      - "Ajouter la deuxième partie du cognac. Flamber."
      - "Ajouter la marinade bouillie et le fond de volaille. Porter à ébullition une dizaine de minutes. Écumer de temps à autre."
      - "Couvrir. Four 200°C, 1 heure à 1 heure 30 selon la taille du poulet. Vérifier au bout d’une heure. Ajouter un peu d’eau si ça a trop réduit."
      - "Faire sauter des lardons, puis des champignons dans la même poêle. Réserver. Préparer des croûtons maison. 5 minutes avant la fin, ajouter cette garniture, mélanger. Cuire 5 minutes au four."
      - "Terminer."
      cavernes:
      - "Marinade. Découpes marinade. Carottes, éplucher, rondelles. Oignons, échalotes, émincer. Peu ail, éplucher. Bouquet garni."
      - "Marinade. Grand récipient : poulet entier morceau, découpes, bouquet garni, graines poivres, vin rouge (beaucoup), cognac, huile végétale pellicule dessus conservation. Mariner nuit."
      - "Marinade. Bien mariné. Séparer : poulet côté, garniture autre, liquide marinade dans casserole. Bouillir. Suite."
      - "Cuisson. Cocotte, peu matière grasse. Morceaux poulet, dorer. Si cocotte trop petite, fur et à mesure, réserver fur et à mesure. Tout cuit, réserver."
      - "Marinade. Même cocotte, dégraissée si besoin. Garniture marinade. Fond cocotte, racler spatule bois. Suer. Morceaux poulet par-dessus."
      - "Cuisson. 2e partie cognac, flamber. Attention, ça brûle !"
      - "Marinade. Marinade bouillie. Fond volaille. Cocotte ébullition dizaine min. Écumer temps à autre."
      - "Cuisson. Cocotte, couvrir. Four 200°C, 1 heure à 1 heure 30 (taille poulet). Vérifier cuisson bout heure. Si trop réduit, peu eau."
      - "Cuisson. Avant fin cuisson, reste garniture. Lardons, sauter. Même poêle, champignons, sauter. Réserver. Croûtons maison. 5 min avant fin cuisson cocotte, garniture, mélanger. Four 5 min."
      - "Finition. Terminé."
    kcal_per_serving: 169
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Poulet façon coq au vin
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `Cuisine/Recettes/Web/poulet-facon-coq-au-vin.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/poulet-facon-coq-au-vin]]

## Ingrédients (6 personnes)

- 1 poulet entier (ou un coq dans l'idéal)
- 1 oignon
- 2 échalote
- 2 carotte
- 3 gousse d'ail
- 1 grosse pincée de graines de poivre
- 1 bouquet garni
- 2 bouteille de rouge
-  huile végétale neutre (type pépin de raisin)
- 1 petit verre de cognac
- 1 autre petit verre de cognac (pour flamber)
- 30 g de fond de volaille (ou un bouillon cube à défaut)
- 250 g de poitrine de porc
- 200 g de champignons de Paris
-  du pain pour quelques croûtons maison
-  beurre
-  persil

## Préparation

1. Préparez toute vos découpes pour la marinade : épluchez les carottes et coupez les en rondelles, émincez les oignons et les échalotes, épluchez un peu d’ail. Préparez votre bouquet garni.
2. Mettez tous les éléments de la marinade dans un grand récipient : le poulet entier en morceau, toutes les découpes précédemment réalisées, le bouquet garni, les graines de poivres, le vin rouge (oui, il en faut beaucoup), le cognac, de l’huile végétale pour former une petite pellicule sur le dessus et ainsi aider à la conservation. Laissez mariner une nuit.
3. Lorsque ça a bien mariné, séparez tous les éléments de la marinade : le poulet d’un côté, la garniture de l’autre, le liquide de la marinade dans une casserole. Mettez cette dernière à bouillir et passez directement à la suite.
4. Dans une cocotte, rajoutez un petit peu de matière grasse et faites dorer chaque morceau de poulet (vous pouvez les faire au fur et à mesure si la cocotte est trop petite, dans ce cas là, réservez au fur et à mesure). Quand tout est cuit, réservez.
5. Dans la même cocotte (dégraissée si besoin), rajoutez toute la garniture de la marinade. Au passage, raclez un peu le fond de la cocotte à l’aide d’une spatule en bois. Faites suez le tout. Dès que c’est fait, rajoutez le morceaux de poulet directement par dessus.
6. Rajoutez la deuxième partie du cognac et faites flamber. Attention, ça brûle !
7. Rajoutez ensuite la marinade qui a eu le temps de bouillir. Rajoutez le fond de volaille également. Portez la cocotte à ébullition pendant une dizaine de minutes et écumez de temps à autre.
8. Couvrez la cocotte et hop, dans le four à 200°C pendant 1 heure à 1 heure 30 (en fonction de la taille du poulet). Vérifiez la cuisson au bout d’une heure. Rajoutez un peu d’eau si ça a trop réduit.
9. Avant la fin de cuisson, préparez le reste de la garniture. Faites sauter des lardons. Dans la même poêle, faites sauter des champignons. Réservez.

Préparez des croûtons maison.

5 minutes avant la fin de la cuisson de la cocotte, rajoutez toute cette garniture et mélangez. Laissez cuire 5 minutes au four.
10. Ouf ! C’est terminé !

 
 

 
 Et voilà, vous maîtrisez maintenant le coq au vin !
