---
schema: recette-web-jigme/v2
slug: poulet-yassa
title: Poulet yassa
lang: fr
description: "Poulet yassa : recette sénégalaise avec cuisse ou blanc de poulet, riz blanc et cube de bouillon, pour 4 personnes. Version maison."
cuisine: sénégalaise
category: salé
tags:
- salé
- poulet
- yassa
- citron
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/poulet-yassa.webp
  alt: Poulet yassa
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/poulet-yassa.md
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
    - from: paneer (cubes)
      to: tofu ferme
      note:
    note: 'Lactose : paneer (cubes) → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: paneer (cubes)
      to: tofu ferme
      note:
    note: 'Produits laitiers : paneer (cubes) → tofu ferme.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - moutarde
    swaps:
    - from: moutarde
      to: horseradish ou omettre
      note: Allergie.
    note: Omettre ou vinaigrette sans moutarde.
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
    note: 'Contient poisson (cabillaud (cubes)) : pas d’adaptation fiable.'
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
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    note: 'Soja : tofu ferme → pois chiches rôtis.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre d'alcool blanc
      to: jus de citron
      note: Acidité un peu différente.
    note: Vinaigre → citron.
house_toggle:
house_options: []
histoire: 'Yassa : plat d’Afrique de l’Ouest, surtout de Casamance (Sénégal). Poulet, poisson ou agneau
  mariné, oignons caramélisés, agrumes, parfois moutarde. /. Le mot désigne d’abord la marinade et la
  cuisson, pas seulement le poulet.

  '
fun_facts:
- text: >
    Beaucoup d’oignons, longtemps : sans caramel d’oignon, ce n’est plus un yassa.
  source_name: Grokipedia, Yassa (food)
  source_url: https://grokipedia.com/page/Yassa_(food)
- text: >
    Citron ou moutarde acidifient : on ne sale qu’après, la marinade pique déjà.
  source_name: Wikipedia, Yassa (food)
  source_url: https://en.wikipedia.org/wiki/Yassa_(food)
wines:
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire — l’oignon caramélisé et le citron, sans un tannat.
- name: Chinon
  producer: Charles Joguet
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Cabernet franc, poivron — le poulet, tanin vif.
- name: Côtes du Rhône
  producer: Domaine Fond Croze
  origin: Tulette, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — la marinade acidulée, tanin souple.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - moutarde
    - arachides
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 50
      rest_min: 90
      total_min: 170
    equipment: &id002
    - four
    - saladier
    - passoire
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cuisse ou blanc de poulet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cube de bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: piment oiseau (facultatif)
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
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: vinaigre d'alcool blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: olives vertes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif
      si vous n’aimez pas manger épicé).
    - Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans vos morceaux de poulet,
      puis remplissez-les avec la « farce » précédemment obtenue. Répartissez l’excédent directement
      sur le poulet.
    - Cuisson. Placez vos morceaux de poulet dans un récipient et ajoutez-y la moutarde, le jus des
      citrons verts et l’huile d’arachide. Effritez ensuite un bouillon cube au dessus de
      votre récipient. Salez et poivrez selon vos goûts. Mélangez le tout et arrosez votre
      poulet de cette préparation à l’aide d’une cuillère.
    - Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le
      vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout.
    - Dressage. Dans un saladier, mélangez vos deux préparations (poulet et oignons) puis réservez au
      frigo pendant environ 2h.
    - Marinade. Quand le poulet a bien mariné, placez-le dans un plat et enfournez-le en mode « grill
      », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit
      cuit de manière uniforme.
    - Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard.
      Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade,
      l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez.
    - Cuisson. Quand les morceaux de poulets sont cuits, placez-les dans votre marmite. Vous pouvez
      récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau
      et en versant le tout dans la marmite.
    - Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube
      (facultatif). Mélangez puis laissez mijoter pendant 15 minutes. Pour dresser de belles
      assiettes, déposez votre morceau de poulet avec une peu de garniture (oignons et olives
      vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif si vous n’aimez pas manger épicé)."
      - "Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans vos morceaux de poulet, puis remplissez-les avec la « farce » précédemment obtenue. Répartissez l’excédent directement sur le poulet."
      - "Cuisson. Placez vos morceaux de poulet dans un récipient et ajoutez-y la moutarde, le jus des citrons verts et l’huile d’arachide. Effritez ensuite un bouillon cube au dessus de votre récipient. Salez et poivrez selon vos goûts. Mélangez le tout et arrosez votre poulet de cette préparation à l’aide d’une cuillère."
      - "Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout."
      - "Dressage. Dans un saladier, mélangez vos deux préparations (poulet et oignons) puis réservez au frigo pendant environ 2h."
      - "Marinade. Quand le poulet a bien [[mariner|mariné]], placez-le dans un plat et enfournez-le en mode « grill », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit cuit de manière uniforme."
      - "Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard. Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez."
      - "Cuisson. Quand les morceaux de poulets sont cuits, placez-les dans votre marmite. Vous pouvez récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau et en versant le tout dans la marmite."
      - "Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube (facultatif). Mélangez puis [[mijoter|laissez mijoter]] pendant 15 minutes. Pour dresser de belles assiettes, déposez votre morceau de poulet avec une peu de garniture (oignons et olives vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit !"
      pro:
      - "Dans un mortier, écraser les gousses d’ail, un cube de bouillon et le piment (facultatif)."
      - "Réaliser quelques petites entailles dans les morceaux de poulet. Les remplir avec la farce. Répartir l’excédent sur le poulet."
      - "Placer les morceaux de poulet dans un récipient. Ajouter la moutarde, le jus des citrons verts et l’huile d’arachide. Effriter un bouillon cube au dessus du récipient. Saler, poivrer. Mélanger. Arroser le poulet de cette préparation à la cuillère."
      - "Couper les oignons en rondelles. Les placer dans un récipient. Ajouter le vinaigre blanc, du sel, du poivre. Effriter un bouillon cube. Mélanger."
      - "Mélanger les deux préparations (poulet et oignons) dans un saladier. Réserver au frigo pendant environ 2h."
      - "Placer le poulet dans un plat. Enfourner en mode grill, 200°C pendant 30 minutes. Retourner de temps en temps pour une cuisson uniforme."
      - "Égoutter les oignons à la passoire. Conserver la marinade. Faire revenir dans une marmite jusqu’à ce qu’ils soient dorés. Compléter avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélanger, baisser le feu, couvrir."
      - "Placer les morceaux de poulet cuits dans la marmite. Rincer le plat avec un peu d’eau. Verser le jus dans la marmite."
      - "Ajouter des olives vertes et un dernier bouillon cube (facultatif). Mélanger. Mijoter pendant 15 minutes. Dresser : morceau de poulet, garniture (oignons et olives vertes), rondelles de citrons verts, feuille de laurier."
      cavernes:
      - "Préparation. Mortier : gousses ail, cube bouillon, piment (facultatif si aimez pas manger épicé)."
      - "Cuisson. Couteau, petites entailles dans morceaux poulet, remplir farce obtenue. Excédent, répartir directement sur poulet."
      - "Cuisson. Morceaux poulet, récipient. Moutarde, jus citrons verts, huile arachide, ajouter. Bouillon cube, effriter dessus récipient. Saler, poivrer selon goûts. Tout, mélanger. Poulet, arroser préparation, cuillère."
      - "Cuisson. Oignons, rondelles, récipient. Vinaigre blanc, sel, poivre, ajouter. Bouillon cube, effriter. Tout, mélanger."
      - "Dressage. Saladier, deux préparations (poulet et oignons), mélanger. Frigo, réserver pendant environ 2h."
      - "Marinade. Poulet bien mariné, plat, enfourner mode « grill », 200°C pendant 30 minutes. Retourner de temps en temps, cuit uniforme."
      - "Marinade. Passoire, oignons, égoutter. Marinade, conserver pour plus tard. Marmite, faire revenir jusqu’à dorés. Marinade, équivalent verre eau, laurier, compléter. Mélanger, feu, baisser, couvrir."
      - "Cuisson. Morceaux poulets cuits, marmite. Jus cuisson plat : rincer peu eau, verser tout dans marmite."
      - "Finition. Olives vertes, dernier bouillon cube (facultatif), ajouter. Mélanger, mijoter pendant 15 minutes. Assiettes : morceau poulet, peu garniture (oignons et olives vertes), quelques rondelles citrons verts, feuille laurier. Bon appétit !"
    kcal_per_serving: 438
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
    - moutarde
    - arachides
    - sulfites
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: paneer (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cube de bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: piment oiseau (facultatif)
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
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: vinaigre d'alcool blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: olives vertes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif
      si vous n’aimez pas manger épicé).
    - Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans le paneer, puis enduisez-le de la « farce ». Répartissez l’excédent sur le paneer.
    - Mélange. Placez le paneer dans un récipient, ajoutez moutarde, jus de citron vert et huile d’arachide. Effritez un bouillon cube, salez, poivrez, mélangez.
    - Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le
      vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout.
    - Dressage. Dans un saladier, mélangez vos deux préparations (paneer et oignons) puis réservez au
      frigo pendant environ 2h.
    - Marinade. Quand le paneer a bien mariné, placez-le dans un plat et enfournez-le en mode « grill
      », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit
      cuit de manière uniforme.
    - Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard.
      Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade,
      l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez.
    - Cuisson. Quand le paneer est cuit, placez-le dans votre marmite. Vous pouvez
      récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau
      et en versant le tout dans la marmite.
    - Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube
      (facultatif). Mélangez puis laissez mijoter pendant 15 minutes. Pour dresser de belles
      assiettes, déposez le paneer avec un peu de garniture (oignons et olives
      vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif si vous n’aimez pas manger épicé)."
      - "Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans le paneer, puis enduisez-le de la « farce ». Répartissez l’excédent sur le paneer."
      - "Mélange. Placez le paneer dans un récipient, ajoutez moutarde, jus de citron vert et huile d’arachide. Effritez un bouillon cube, salez, poivrez, mélangez."
      - "Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout."
      - "Dressage. Dans un saladier, mélangez vos deux préparations (paneer et oignons) puis réservez au frigo pendant environ 2h."
      - "Marinade. Quand le paneer a bien [[mariner|mariné]], placez-le dans un plat et enfournez-le en mode « grill », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit cuit de manière uniforme."
      - "Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard. Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez."
      - "Cuisson. Quand le paneer est cuit, placez-le dans votre marmite. Vous pouvez récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau et en versant le tout dans la marmite."
      - "Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube (facultatif). Mélangez puis [[mijoter|laissez mijoter]] pendant 15 minutes. Pour dresser de belles assiettes, déposez le paneer avec un peu de garniture (oignons et olives vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit !"
      pro:
      - "Dans un mortier, écraser les gousses d’ail, un cube de bouillon et le piment (facultatif)."
      - "Réaliser quelques petites entailles dans le paneer. L’enduire de farce. Répartir l’excédent sur le paneer."
      - "Placer le paneer dans un récipient. Ajouter moutarde, jus de citron vert et huile d’arachide. Effriter un bouillon cube. Saler, poivrer, mélanger."
      - "Couper les oignons en rondelles. Les placer dans un récipient. Ajouter le vinaigre blanc, du sel, du poivre. Effriter un bouillon cube. Mélanger."
      - "Mélanger les deux préparations (paneer et oignons) dans un saladier. Réserver au frigo pendant environ 2h."
      - "Placer le paneer dans un plat. Enfourner en mode grill, 200°C pendant 30 minutes. Retourner de temps en temps pour une cuisson uniforme."
      - "Égoutter les oignons à la passoire. Conserver la marinade. Faire revenir dans une marmite jusqu’à ce qu’ils soient dorés. Compléter avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélanger, baisser le feu, couvrir."
      - "Placer le paneer cuit dans la marmite. Rincer le plat avec un peu d’eau. Verser le jus dans la marmite."
      - "Ajouter des olives vertes et un dernier bouillon cube (facultatif). Mélanger. Mijoter pendant 15 minutes. Dresser : paneer, garniture (oignons et olives vertes), rondelles de citrons verts, feuille de laurier."
      cavernes:
      - "Préparation. Mortier : gousses ail, cube bouillon, piment (facultatif si aimez pas manger épicé)."
      - "Cuisson. Couteau, petites entailles dans paneer, enduire farce. Excédent, répartir sur paneer."
      - "Mélange. Paneer, récipient. Moutarde, jus citron vert, huile arachide, ajouter. Bouillon cube, effriter. Saler, poivrer, mélanger."
      - "Cuisson. Oignons, rondelles, récipient. Vinaigre blanc, sel, poivre, ajouter. Bouillon cube, effriter. Tout, mélanger."
      - "Dressage. Saladier, deux préparations (paneer et oignons), mélanger. Frigo, réserver pendant environ 2h."
      - "Marinade. Paneer bien mariné, plat, enfourner mode « grill », 200°C pendant 30 minutes. Retourner de temps en temps, cuit uniforme."
      - "Marinade. Passoire, oignons, égoutter. Marinade, conserver pour plus tard. Marmite, faire revenir jusqu’à dorés. Marinade, équivalent verre eau, laurier, compléter. Mélanger, feu, baisser, couvrir."
      - "Cuisson. Paneer cuit, marmite. Jus cuisson plat : rincer peu eau, verser tout dans marmite."
      - "Finition. Olives vertes, dernier bouillon cube (facultatif), ajouter. Mélanger, mijoter pendant 15 minutes. Assiettes : paneer, peu garniture (oignons et olives vertes), quelques rondelles citrons verts, feuille laurier. Bon appétit !"
    kcal_per_serving: 398
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - moutarde
    - arachides
    - sulfites
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cube de bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: piment oiseau (facultatif)
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
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: vinaigre d'alcool blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: olives vertes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif
      si vous n’aimez pas manger épicé).
    - Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans le tofu ferme, puis enduisez-le de la « farce ». Répartissez l’excédent sur le tofu.
    - Mélange. Placez le tofu dans un récipient, ajoutez moutarde, jus de citron vert et huile d’arachide. Effritez un bouillon cube, salez, poivrez, mélangez.
    - Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le
      vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout.
    - Dressage. Dans un saladier, mélangez vos deux préparations (tofu et oignons) puis réservez au
      frigo pendant environ 2h.
    - Marinade. Quand le tofu a bien mariné, placez-le dans un plat et enfournez-le en mode « grill
      », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit
      cuit de manière uniforme.
    - Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard.
      Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade,
      l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez.
    - Cuisson. Quand le tofu est cuit, placez-le dans votre marmite. Vous pouvez
      récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau
      et en versant le tout dans la marmite.
    - Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube
      (facultatif). Mélangez puis laissez mijoter pendant 15 minutes. Pour dresser de belles
      assiettes, déposez le tofu avec un peu de garniture (oignons et olives
      vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif si vous n’aimez pas manger épicé)."
      - "Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans le tofu ferme, puis enduisez-le de la « farce ». Répartissez l’excédent sur le tofu."
      - "Mélange. Placez le tofu dans un récipient, ajoutez moutarde, jus de citron vert et huile d’arachide. Effritez un bouillon cube, salez, poivrez, mélangez."
      - "Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout."
      - "Dressage. Dans un saladier, mélangez vos deux préparations (tofu et oignons) puis réservez au frigo pendant environ 2h."
      - "Marinade. Quand le tofu a bien [[mariner|mariné]], placez-le dans un plat et enfournez-le en mode « grill », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit cuit de manière uniforme."
      - "Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard. Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez."
      - "Cuisson. Quand le tofu est cuit, placez-le dans votre marmite. Vous pouvez récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau et en versant le tout dans la marmite."
      - "Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube (facultatif). Mélangez puis [[mijoter|laissez mijoter]] pendant 15 minutes. Pour dresser de belles assiettes, déposez le tofu avec un peu de garniture (oignons et olives vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit !"
      pro:
      - "Dans un mortier, écraser les gousses d’ail, un cube de bouillon et le piment (facultatif)."
      - "Réaliser quelques petites entailles dans le tofu ferme. L’enduire de farce. Répartir l’excédent sur le tofu."
      - "Placer le tofu dans un récipient. Ajouter moutarde, jus de citron vert et huile d’arachide. Effriter un bouillon cube. Saler, poivrer, mélanger."
      - "Couper les oignons en rondelles. Les placer dans un récipient. Ajouter le vinaigre blanc, du sel, du poivre. Effriter un bouillon cube. Mélanger."
      - "Mélanger les deux préparations (tofu et oignons) dans un saladier. Réserver au frigo pendant environ 2h."
      - "Placer le tofu dans un plat. Enfourner en mode grill, 200°C pendant 30 minutes. Retourner de temps en temps pour une cuisson uniforme."
      - "Égoutter les oignons à la passoire. Conserver la marinade. Faire revenir dans une marmite jusqu’à ce qu’ils soient dorés. Compléter avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélanger, baisser le feu, couvrir."
      - "Placer le tofu cuit dans la marmite. Rincer le plat avec un peu d’eau. Verser le jus dans la marmite."
      - "Ajouter des olives vertes et un dernier bouillon cube (facultatif). Mélanger. Mijoter pendant 15 minutes. Dresser : tofu, garniture (oignons et olives vertes), rondelles de citrons verts, feuille de laurier."
      cavernes:
      - "Préparation. Mortier : gousses ail, cube bouillon, piment (facultatif si aimez pas manger épicé)."
      - "Cuisson. Couteau, petites entailles dans tofu ferme, enduire farce. Excédent, répartir sur tofu."
      - "Mélange. Tofu, récipient. Moutarde, jus citron vert, huile arachide, ajouter. Bouillon cube, effriter. Saler, poivrer, mélanger."
      - "Cuisson. Oignons, rondelles, récipient. Vinaigre blanc, sel, poivre, ajouter. Bouillon cube, effriter. Tout, mélanger."
      - "Dressage. Saladier, deux préparations (tofu et oignons), mélanger. Frigo, réserver pendant environ 2h."
      - "Marinade. Tofu bien mariné, plat, enfourner mode « grill », 200°C pendant 30 minutes. Retourner de temps en temps, cuit uniforme."
      - "Marinade. Passoire, oignons, égoutter. Marinade, conserver pour plus tard. Marmite, faire revenir jusqu’à dorés. Marinade, équivalent verre eau, laurier, compléter. Mélanger, feu, baisser, couvrir."
      - "Cuisson. Tofu cuit, marmite. Jus cuisson plat : rincer peu eau, verser tout dans marmite."
      - "Finition. Olives vertes, dernier bouillon cube (facultatif), ajouter. Mélanger, mijoter pendant 15 minutes. Assiettes : tofu, peu garniture (oignons et olives vertes), quelques rondelles citrons verts, feuille laurier. Bon appétit !"
    kcal_per_serving: 398
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
    - moutarde
    - poisson
    - arachides
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cabillaud (cubes)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 240
      unit: g
      item: riz blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: cube de bouillon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: piment oiseau (facultatif)
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
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d'arachide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: vinaigre d'alcool blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: olives vertes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif
      si vous n’aimez pas manger épicé).
    - Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans vos morceaux de poulet,
      puis remplissez-les avec la « farce » précédemment obtenue. Répartissez l’excédent directement
      sur le poulet.
    - Cuisson. Placez vos morceaux de poulet dans un récipient et ajoutez-y la moutarde, le jus des
      citrons verts et l’huile d’arachide. Effritez ensuite un bouillon cube au dessus de
      votre récipient. Salez et poivrez selon vos goûts. Mélangez le tout et arrosez votre
      poulet de cette préparation à l’aide d’une cuillère.
    - Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le
      vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout.
    - Dressage. Dans un saladier, mélangez vos deux préparations (poulet et oignons) puis réservez au
      frigo pendant environ 2h.
    - Marinade. Quand le poulet a bien mariné, placez-le dans un plat et enfournez-le en mode « grill
      », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit
      cuit de manière uniforme.
    - Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard.
      Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade,
      l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez.
    - Cuisson. Quand les morceaux de poulets sont cuits, placez-les dans votre marmite. Vous pouvez
      récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau
      et en versant le tout dans la marmite.
    - Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube
      (facultatif). Mélangez puis laissez mijoter pendant 15 minutes. Pour dresser de belles
      assiettes, déposez votre morceau de poulet avec une peu de garniture (oignons et olives
      vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif si vous n’aimez pas manger épicé)."
      - "Cuisson. À l’aide d’un couteau, réalisez quelques petites entailles dans vos morceaux de poulet, puis remplissez-les avec la « farce » précédemment obtenue. Répartissez l’excédent directement sur le poulet."
      - "Cuisson. Placez vos morceaux de poulet dans un récipient et ajoutez-y la moutarde, le jus des citrons verts et l’huile d’arachide. Effritez ensuite un bouillon cube au dessus de votre récipient. Salez et poivrez selon vos goûts. Mélangez le tout et arrosez votre poulet de cette préparation à l’aide d’une cuillère."
      - "Cuisson. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout."
      - "Dressage. Dans un saladier, mélangez vos deux préparations (poulet et oignons) puis réservez au frigo pendant environ 2h."
      - "Marinade. Quand le poulet a bien [[mariner|mariné]], placez-le dans un plat et enfournez-le en mode « grill », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit cuit de manière uniforme."
      - "Marinade. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard. Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez."
      - "Cuisson. Quand les morceaux de poulets sont cuits, placez-les dans votre marmite. Vous pouvez récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau et en versant le tout dans la marmite."
      - "Finition. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube (facultatif). Mélangez puis [[mijoter|laissez mijoter]] pendant 15 minutes. Pour dresser de belles assiettes, déposez votre morceau de poulet avec une peu de garniture (oignons et olives vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit !"
      pro:
      - "Dans un mortier, écraser les gousses d’ail, un cube de bouillon et le piment (facultatif)."
      - "Réaliser quelques petites entailles dans les morceaux de poulet. Les remplir avec la farce. Répartir l’excédent sur le poulet."
      - "Placer les morceaux de poulet dans un récipient. Ajouter la moutarde, le jus des citrons verts et l’huile d’arachide. Effriter un bouillon cube au dessus du récipient. Saler, poivrer. Mélanger. Arroser le poulet de cette préparation à la cuillère."
      - "Couper les oignons en rondelles. Les placer dans un récipient. Ajouter le vinaigre blanc, du sel, du poivre. Effriter un bouillon cube. Mélanger."
      - "Mélanger les deux préparations (poulet et oignons) dans un saladier. Réserver au frigo pendant environ 2h."
      - "Placer le poulet dans un plat. Enfourner en mode grill, 200°C pendant 30 minutes. Retourner de temps en temps pour une cuisson uniforme."
      - "Égoutter les oignons à la passoire. Conserver la marinade. Faire revenir dans une marmite jusqu’à ce qu’ils soient dorés. Compléter avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélanger, baisser le feu, couvrir."
      - "Placer les morceaux de poulet cuits dans la marmite. Rincer le plat avec un peu d’eau. Verser le jus dans la marmite."
      - "Ajouter des olives vertes et un dernier bouillon cube (facultatif). Mélanger. Mijoter pendant 15 minutes. Dresser : morceau de poulet, garniture (oignons et olives vertes), rondelles de citrons verts, feuille de laurier."
      cavernes:
      - "Préparation. Mortier : gousses ail, cube bouillon, piment (facultatif si aimez pas manger épicé)."
      - "Cuisson. Couteau, petites entailles dans morceaux poulet, remplir farce obtenue. Excédent, répartir directement sur poulet."
      - "Cuisson. Morceaux poulet, récipient. Moutarde, jus citrons verts, huile arachide, ajouter. Bouillon cube, effriter dessus récipient. Saler, poivrer selon goûts. Tout, mélanger. Poulet, arroser préparation, cuillère."
      - "Cuisson. Oignons, rondelles, récipient. Vinaigre blanc, sel, poivre, ajouter. Bouillon cube, effriter. Tout, mélanger."
      - "Dressage. Saladier, deux préparations (poulet et oignons), mélanger. Frigo, réserver pendant environ 2h."
      - "Marinade. Poulet bien mariné, plat, enfourner mode « grill », 200°C pendant 30 minutes. Retourner de temps en temps, cuit uniforme."
      - "Marinade. Passoire, oignons, égoutter. Marinade, conserver pour plus tard. Marmite, faire revenir jusqu’à dorés. Marinade, équivalent verre eau, laurier, compléter. Mélanger, feu, baisser, couvrir."
      - "Cuisson. Morceaux poulets cuits, marmite. Jus cuisson plat : rincer peu eau, verser tout dans marmite."
      - "Finition. Olives vertes, dernier bouillon cube (facultatif), ajouter. Mélanger, mijoter pendant 15 minutes. Assiettes : morceau poulet, peu garniture (oignons et olives vertes), quelques rondelles citrons verts, feuille laurier. Bon appétit !"
    kcal_per_serving: 398
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
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
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"
---

# Poulet yassa

![[poulet-yassa.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/poulet-yassa.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/poulet-yassa]]

## Ingrédients (4 personnes)

- 4 cuisse ou blanc de poulet
- 240 g de riz blanc
- 4 cube de bouillon
- 4 gousse d'ail
- 2 piment oiseau (facultatif)
- 2 oignon
- 1 c.à.c de moutarde
- 2 citron vert
- 2 c.à.s d'huile d'arachide
- 2 c.à.s de vinaigre d'alcool blanc
-  olives vertes
-  feuilles de laurier

## Préparation

1. Dans un mortier, écrasez les gousses d’ail, un cube de bouillon et le piment (facultatif si vous n’aimez pas manger épicé).
2. À l’aide d’un couteau, réalisez quelques petites entailles dans vos morceaux de poulet, puis remplissez-les avec la « farce » précédemment obtenue. Répartissez l’excédent directement sur le poulet.
3. Placez vos morceaux de poulet dans un récipient et ajoutez-y la moutarde, le jus des citrons verts et l’huile d’arachide. Effritez ensuite un bouillon cube au dessus de votre récipient. Salez et poivrez selon vos goûts. Mélangez le tout et arrosez votre poulet de cette préparation à l’aide d’une cuillère.
4. Coupez les oignons en rondelles avant de les placer dans un récipient. Ajoutez-y le vinaigre blanc, du sel, du poivre, puis effritez un bouillon cube. Mélangez le tout.
5. Dans un saladier, mélangez vos deux préparations (poulet et oignons) puis réservez au frigo pendant environ 2h.
6. Quand le poulet a bien mariné, placez-le dans un plat et enfournez-le en mode « grill », à 200°C pendant 30 minutes. Pensez à le retourner de temps en temps pour qu’il soit cuit de manière uniforme.
7. À l’aide d’une passoire, égouttez les oignons et conservez la marinade pour plus tard. Faites les revenir dans une marmite jusqu’à ce qu’il soit dorés. Complétez avec la marinade, l’équivalent d’un verre d’eau et du laurier. Mélangez, baissez le feu et couvrez.
8. Quand les morceaux de poulets sont cuits, placez-les dans votre marmite. Vous pouvez récupérer le jus de cuisson présent dans votre plat en le rinçant avec un peu d’eau et en versant le tout dans la marmite.
9. Finalisez votre préparation en ajoutant des olives vertes et un dernier bouillon cube (facultatif). Mélangez puis laissez mijoter pendant 15 minutes.

 
 

 
 Pour dresser de belles assiettes, déposez votre morceau de poulet avec une peu de garniture (oignons et olives vertes), quelques rondelles de citrons verts et une feuille de laurier. Bon appétit !
