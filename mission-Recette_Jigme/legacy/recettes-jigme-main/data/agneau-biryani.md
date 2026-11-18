---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: agneau-biryani
title: Agneau biryani
lang: fr
description: "Agneau biryani : recette indienne avec épaule d'agneau, yaourt et gousse d'ail, pour 4 personnes. Version maison. Facile à suivre."
cuisine: indienne
category: salé
tags:
- salé
- riz
- agneau
- épaule d'agneau
image:
  url:
  alt: Agneau biryani
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/agneau-biryani.md
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
    - from: yaourt
      to: yaourt sans lactose
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
    note: 'Contient poisson (lotte ou cabillaud) : pas d’adaptation fiable.'
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
    - from: yaourt de soja nature
      to: yaourt de coco
      note:
    note: 'Soja : yaourt de soja nature → yaourt de coco.'
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
  Plat de riz et de viande épicée d’Asie du Sud, souvent lié aux cuisines mogholes.
  Le mot viendrait du persan *birinj biryan*, « riz frit / rôti ». On débat s’il naît
  à la cour moghole ou plus tôt en Inde du Sud, à partir du pilaf persan.
fun_facts:
- text: >
    L’Ain-i-Akbari (fin XVIe s.) cite déjà des plats de riz et de viande sous des noms
    proches ; la forme actuelle (riz en grains séparés, viande marinée au yaourt) est
    plus tardive.
  source_name: Wikipedia, Biryani
  source_url: https://en.wikipedia.org/wiki/Biryani
- text: >
    Le *dum* (cuisson à l’étouffée, pâton de pâte sur le couvercle) n’est pas obligatoire
    partout : Hyderabad le pousse, d’autres régions superposent riz et viande sans scellement.
  source_name: Wikipedia, Biryani
  source_url: https://en.wikipedia.org/wiki/Biryani
wines:
- name: Côtes du Rhône
  producer: Famille Perrin
  origin: Orange, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit mûr, épice douce — agneau et riz safranés, tanin modéré.
- name: Pinot Gris d'Alsace
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire, légèrement sucré — calme le piment et le yaourt.
- name: Chinon
  producer: Olga Raffault
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: Poivron, tanin vif — la graisse de l’agneau.
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
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 45
      rest_min: 60
      total_min: 135
    equipment: &id002
    - four
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: épaule d'agneau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: yaourt
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
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 300
      unit: g
      item: riz basmati
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: safran
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: graine de cardamome
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: feuille de laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale ou du beurre clarifié
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Désossez l’épaule d’agneau et coupez-la en gros cubes. Déposez-les dans un récipient
      et ajoutez-y le yaourt, le curcuma, le piment en poudre et un peu de la coriandre hachée.
      Mélangez bien et laissez mariner une bonne demi-heure au frigo, voire une nuit entière
      si vous le pouvez afin que la viande soit bien tendre.
    - Marinade. Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade
      du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié,
      puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse.
      Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et
      laissez cuire.
    - Cuisson. En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome,
      de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Il faudra
      l’égoutter lorsqu’il sera encore légèrement cassant. Dans la cocotte, ajoutez la marinade,
      mélangez et laissez cuire à feu doux.
    - Marinade. Lorsque le riz est prêt, versez-le dans la cocotte contenant la viande marinée et ajoutez
      le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30
      minutes à 180°. Mélangez et c’est prêt ! Pour la présentation, versez-en dans une grande
      assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles
      de coriandre pour la décoration. Vous pouvez aussi ajouter des oignons frits si vous
      le souhaitez.
    steps_niveaux:
      amateur:
      - "Désossez l’épaule d’agneau et coupez-la en gros cubes. Déposez-les dans un récipient et ajoutez-y le yaourt, le curcuma, le piment en poudre et un peu de la coriandre hachée. Mélangez bien et [[mariner|laissez mariner]] une bonne demi-heure au frigo, voire une nuit entière si vous le pouvez afin que la viande soit bien tendre."
      - "Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié, puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse. Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et laissez cuire."
      - "En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome, de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Égouttez-le lorsqu’il est encore légèrement cassant. Dans la cocotte, ajoutez la marinade, mélangez et laissez cuire à feu doux."
      - "Lorsque le riz est prêt, versez-le dans la cocotte contenant la viande [[mariner|marinée]] et ajoutez le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30 minutes à 180°. Mélangez. Pour la présentation, versez-en dans une grande assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles de coriandre. Vous pouvez aussi ajouter des oignons frits."
      pro:
      - "Désosser l’épaule d’agneau. Tailler en gros cubes. Déposer dans un récipient. Ajouter yaourt, curcuma, piment en poudre et un peu de coriandre hachée. Mélanger. Mariner une bonne demi-heure au frigo, voire une nuit entière."
      - "Découper l’ail, l’oignon et le gingembre en petits morceaux. Sortir la marinade du frigo. Dans une cocotte sur le feu : un peu d’huile végétale ou de beurre clarifié, cardamome et cumin. Chauffer les épices dans la matière grasse. Ajouter oignons, ail en purée, gingembre pressé. Mélanger. Laisser cuire."
      - "En parallèle, grande casserole d’eau : cardamome, cannelle, laurier. Porter à ébullition. Ajouter le riz. Égoutter encore légèrement cassant. Dans la cocotte, ajouter la marinade. Mélanger. Cuire à feu doux."
      - "Lorsque le riz est prêt, verser dans la cocotte sur la viande marinée. Ajouter le safran dilué dans de l’eau chaude. Enfourner la cocotte à couvert, 20 à 30 min à 180°. Mélanger. Dresser en assiette creuse : menthe hachée, piment haché, feuilles de coriandre. Oignons frits facultatif."
      cavernes:
      - "Épaule agneau désosser. Gros cubes. Récipient : yaourt, curcuma, piment poudre, peu coriandre hachée. Mélanger. Frigo bonne demi-heure, voire nuit entière. Viande tendre."
      - "Ail oignon gingembre petits morceaux. Marinade hors frigo. Cocotte feu : peu huile végétale ou beurre clarifié, cardamome, cumin. Épices chauffer matière grasse. Oignons, ail purée, gingembre pressé. Mélanger. Cuire."
      - "Parallèle : grande casserole eau, cardamome, cannelle, laurier. Ébullition. Riz. Égoutter encore légèrement cassant. Cocotte : marinade. Mélanger. Feu doux."
      - "Riz prêt, verser cocotte viande marinée. Safran dilué eau chaude. Cocotte couvert, four 20-30 min 180°. Mélanger. Assiette creuse. Menthe hachée, piment haché, feuilles coriandre. Oignons frits facultatif."
    kcal_per_serving: 440
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
    - qty: 600
      unit: g
      item: pois chiches + aubergines
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: yaourt
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
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 300
      unit: g
      item: riz basmati
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: safran
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: graine de cardamome
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: feuille de laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale ou du beurre clarifié
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Marinade. Coupez les aubergines en gros cubes et égouttez les pois chiches. Déposez-les dans un récipient avec le yaourt, le curcuma, le piment en poudre et un peu de coriandre hachée. Mélangez bien et laissez mariner une bonne demi-heure au frigo, voire une nuit.
    - Marinade. Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade
      du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié,
      puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse.
      Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et
      laissez cuire.
    - Cuisson. En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome,
      de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Il faudra
      l’égoutter lorsqu’il sera encore légèrement cassant. Dans la cocotte, ajoutez la marinade,
      mélangez et laissez cuire à feu doux.
    - Marinade. Lorsque le riz est prêt, versez-le dans la cocotte contenant les aubergines et pois chiches marinés et ajoutez
      le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30
      minutes à 180°. Mélangez et c’est prêt ! Pour la présentation, versez-en dans une grande
      assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles
      de coriandre pour la décoration. Vous pouvez aussi ajouter des oignons frits si vous
      le souhaitez.
    steps_niveaux:
      amateur:
      - "Coupez les aubergines en gros cubes et égouttez les pois chiches. Déposez-les dans un récipient avec le yaourt, le curcuma, le piment en poudre et un peu de coriandre hachée. Mélangez bien et [[mariner|laissez mariner]] une bonne demi-heure au frigo, voire une nuit."
      - "Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié, puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse. Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et laissez cuire."
      - "En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome, de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Égouttez-le lorsqu’il est encore légèrement cassant. Dans la cocotte, ajoutez la marinade, mélangez et laissez cuire à feu doux."
      - "Lorsque le riz est prêt, versez-le dans la cocotte contenant les aubergines et pois chiches [[mariner|marinés]] et ajoutez le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30 minutes à 180°. Mélangez. Pour la présentation, versez-en dans une grande assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles de coriandre. Vous pouvez aussi ajouter des oignons frits."
      pro:
      - "Tailler les aubergines en gros cubes. Égoutter les pois chiches. Déposer dans un récipient avec yaourt, curcuma, piment en poudre et un peu de coriandre hachée. Mélanger. Mariner une bonne demi-heure au frigo, voire une nuit."
      - "Découper l’ail, l’oignon et le gingembre en petits morceaux. Sortir la marinade du frigo. Dans une cocotte sur le feu : un peu d’huile végétale ou de beurre clarifié, cardamome et cumin. Chauffer les épices dans la matière grasse. Ajouter oignons, ail en purée, gingembre pressé. Mélanger. Laisser cuire."
      - "En parallèle, grande casserole d’eau : cardamome, cannelle, laurier. Porter à ébullition. Ajouter le riz. Égoutter encore légèrement cassant. Dans la cocotte, ajouter la marinade. Mélanger. Cuire à feu doux."
      - "Lorsque le riz est prêt, verser dans la cocotte sur les aubergines et pois chiches marinés. Ajouter le safran dilué dans de l’eau chaude. Enfourner la cocotte à couvert, 20 à 30 min à 180°. Mélanger. Dresser en assiette creuse : menthe hachée, piment haché, feuilles de coriandre. Oignons frits facultatif."
      cavernes:
      - "Aubergines gros cubes. Pois chiches égoutter. Récipient : yaourt, curcuma, piment poudre, peu coriandre hachée. Mélanger. Frigo bonne demi-heure, voire nuit."
      - "Ail oignon gingembre petits morceaux. Marinade hors frigo. Cocotte feu : peu huile végétale ou beurre clarifié, cardamome, cumin. Épices chauffer matière grasse. Oignons, ail purée, gingembre pressé. Mélanger. Cuire."
      - "Parallèle : grande casserole eau, cardamome, cannelle, laurier. Ébullition. Riz. Égoutter encore légèrement cassant. Cocotte : marinade. Mélanger. Feu doux."
      - "Riz prêt, verser cocotte aubergines pois chiches marinés. Safran dilué eau chaude. Cocotte couvert, four 20-30 min 180°. Mélanger. Assiette creuse. Menthe hachée, piment haché, feuilles coriandre. Oignons frits facultatif."
    kcal_per_serving: 440
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
    - qty: 600
      unit: g
      item: pois chiches + aubergines
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: yaourt de soja nature
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
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 300
      unit: g
      item: riz basmati
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: safran
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: graine de cardamome
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: feuille de laurier
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
    - qty:
      unit:
      item: menthe
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Marinade. Coupez les aubergines en gros cubes et égouttez les pois chiches. Déposez-les dans un récipient et ajoutez-y le yaourt de soja nature, le curcuma, le piment en poudre et un peu de coriandre hachée. Mélangez bien et laissez mariner une bonne demi-heure au frigo, voire une nuit entière, pour que les légumes s’imprègnent.
    - Marinade. Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade
      du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de margarine végétale,
      puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse.
      Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et
      laissez cuire.
    - Cuisson. En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome,
      de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Il faudra
      l’égoutter lorsqu’il sera encore légèrement cassant. Dans la cocotte, ajoutez la marinade,
      mélangez et laissez cuire à feu doux.
    - Marinade. Lorsque le riz est prêt, versez-le dans la cocotte contenant le mélange mariné et ajoutez
      le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30
      minutes à 180°. Mélangez et c’est prêt ! Pour la présentation, versez-en dans une grande
      assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles
      de coriandre pour la décoration. Vous pouvez aussi ajouter des oignons frits si vous
      le souhaitez.
    steps_niveaux:
      amateur:
      - "Coupez les aubergines en gros cubes et égouttez les pois chiches. Déposez-les dans un récipient et ajoutez-y le yaourt de soja nature, le curcuma, le piment en poudre et un peu de coriandre hachée. Mélangez bien et [[mariner|laissez mariner]] une bonne demi-heure au frigo, voire une nuit entière, pour que les légumes s’imprègnent."
      - "Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de margarine végétale, puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse. Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et laissez cuire."
      - "En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome, de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Égouttez-le lorsqu’il est encore légèrement cassant. Dans la cocotte, ajoutez la marinade, mélangez et laissez cuire à feu doux."
      - "Lorsque le riz est prêt, versez-le dans la cocotte contenant le mélange [[mariner|mariné]] et ajoutez le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30 minutes à 180°. Mélangez. Pour la présentation, versez-en dans une grande assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles de coriandre. Vous pouvez aussi ajouter des oignons frits."
      pro:
      - "Tailler les aubergines en gros cubes. Égoutter les pois chiches. Déposer dans un récipient. Ajouter yaourt de soja nature, curcuma, piment en poudre et un peu de coriandre hachée. Mélanger. Mariner une bonne demi-heure au frigo, voire une nuit entière, pour imprégner les légumes."
      - "Découper l’ail, l’oignon et le gingembre en petits morceaux. Sortir la marinade du frigo. Dans une cocotte sur le feu : un peu d’huile végétale ou de margarine végétale, cardamome et cumin. Chauffer les épices dans la matière grasse. Ajouter oignons, ail en purée, gingembre pressé. Mélanger. Laisser cuire."
      - "En parallèle, grande casserole d’eau : cardamome, cannelle, laurier. Porter à ébullition. Ajouter le riz. Égoutter encore légèrement cassant. Dans la cocotte, ajouter la marinade. Mélanger. Cuire à feu doux."
      - "Lorsque le riz est prêt, verser dans la cocotte sur le mélange mariné. Ajouter le safran dilué dans de l’eau chaude. Enfourner la cocotte à couvert, 20 à 30 min à 180°. Mélanger. Dresser en assiette creuse : menthe hachée, piment haché, feuilles de coriandre. Oignons frits facultatif."
      cavernes:
      - "Aubergines gros cubes. Pois chiches égoutter. Récipient : yaourt de soja nature, curcuma, piment poudre, peu coriandre hachée. Mélanger. Frigo bonne demi-heure, voire nuit entière. Légumes s’imprègnent."
      - "Ail oignon gingembre petits morceaux. Marinade hors frigo. Cocotte feu : peu huile végétale ou margarine végétale, cardamome, cumin. Épices chauffer matière grasse. Oignons, ail purée, gingembre pressé. Mélanger. Cuire."
      - "Parallèle : grande casserole eau, cardamome, cannelle, laurier. Ébullition. Riz. Égoutter encore légèrement cassant. Cocotte : marinade. Mélanger. Feu doux."
      - "Riz prêt, verser cocotte mélange mariné. Safran dilué eau chaude. Cocotte couvert, four 20-30 min 180°. Mélanger. Assiette creuse. Menthe hachée, piment haché, feuilles coriandre. Oignons frits facultatif."
    kcal_per_serving: 440
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: lotte ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: yaourt
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
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: g
      item: gingembre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 300
      unit: g
      item: riz basmati
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: safran
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: curcuma
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: piment en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: graine de cardamome
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cumin
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: feuille de laurier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale ou du beurre clarifié
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: menthe
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: piment frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Désossez l’épaule d’agneau et coupez-la en gros cubes. Déposez-les dans un récipient
      et ajoutez-y le yaourt, le curcuma, le piment en poudre et un peu de la coriandre hachée.
      Mélangez bien et laissez mariner une bonne demi-heure au frigo, voire une nuit entière
      si vous le pouvez afin que la viande soit bien tendre.
    - Marinade. Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade
      du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié,
      puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse.
      Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et
      laissez cuire.
    - Cuisson. En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome,
      de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Il faudra
      l’égoutter lorsqu’il sera encore légèrement cassant. Dans la cocotte, ajoutez la marinade,
      mélangez et laissez cuire à feu doux.
    - Marinade. Lorsque le riz est prêt, versez-le dans la cocotte contenant la viande marinée et ajoutez
      le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30
      minutes à 180°. Mélangez et c’est prêt ! Pour la présentation, versez-en dans une grande
      assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles
      de coriandre pour la décoration. Vous pouvez aussi ajouter des oignons frits si vous
      le souhaitez.
    steps_niveaux:
      amateur:
      - "Désossez l’épaule d’agneau et coupez-la en gros cubes. Déposez-les dans un récipient et ajoutez-y le yaourt, le curcuma, le piment en poudre et un peu de la coriandre hachée. Mélangez bien et [[mariner|laissez mariner]] une bonne demi-heure au frigo, voire une nuit entière si vous le pouvez afin que la viande soit bien tendre."
      - "Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié, puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse. Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et laissez cuire."
      - "En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome, de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Égouttez-le lorsqu’il est encore légèrement cassant. Dans la cocotte, ajoutez la marinade, mélangez et laissez cuire à feu doux."
      - "Lorsque le riz est prêt, versez-le dans la cocotte contenant la viande [[mariner|marinée]] et ajoutez le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30 minutes à 180°. Mélangez. Pour la présentation, versez-en dans une grande assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles de coriandre. Vous pouvez aussi ajouter des oignons frits."
      pro:
      - "Désosser l’épaule d’agneau. Tailler en gros cubes. Déposer dans un récipient. Ajouter yaourt, curcuma, piment en poudre et un peu de coriandre hachée. Mélanger. Mariner une bonne demi-heure au frigo, voire une nuit entière."
      - "Découper l’ail, l’oignon et le gingembre en petits morceaux. Sortir la marinade du frigo. Dans une cocotte sur le feu : un peu d’huile végétale ou de beurre clarifié, cardamome et cumin. Chauffer les épices dans la matière grasse. Ajouter oignons, ail en purée, gingembre pressé. Mélanger. Laisser cuire."
      - "En parallèle, grande casserole d’eau : cardamome, cannelle, laurier. Porter à ébullition. Ajouter le riz. Égoutter encore légèrement cassant. Dans la cocotte, ajouter la marinade. Mélanger. Cuire à feu doux."
      - "Lorsque le riz est prêt, verser dans la cocotte sur la viande marinée. Ajouter le safran dilué dans de l’eau chaude. Enfourner la cocotte à couvert, 20 à 30 min à 180°. Mélanger. Dresser en assiette creuse : menthe hachée, piment haché, feuilles de coriandre. Oignons frits facultatif."
      cavernes:
      - "Épaule agneau désosser. Gros cubes. Récipient : yaourt, curcuma, piment poudre, peu coriandre hachée. Mélanger. Frigo bonne demi-heure, voire nuit entière. Viande tendre."
      - "Ail oignon gingembre petits morceaux. Marinade hors frigo. Cocotte feu : peu huile végétale ou beurre clarifié, cardamome, cumin. Épices chauffer matière grasse. Oignons, ail purée, gingembre pressé. Mélanger. Cuire."
      - "Parallèle : grande casserole eau, cardamome, cannelle, laurier. Ébullition. Riz. Égoutter encore légèrement cassant. Cocotte : marinade. Mélanger. Feu doux."
      - "Riz prêt, verser cocotte viande marinée. Safran dilué eau chaude. Cocotte couvert, four 20-30 min 180°. Mélanger. Assiette creuse. Menthe hachée, piment haché, feuilles coriandre. Oignons frits facultatif."
    kcal_per_serving: 440
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
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

# Agneau biryani
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/agneau-biryani]]

## Ingrédients (4 personnes)

- 600 g d'épaule d'agneau
- 350 g de yaourt
- 3 gousse d'ail
- 2 oignon
- 15 g de gingembre
-  coriandre
- 300 g de riz basmati
- 1 pincée de safran
- 1 grosse cuillère à soupe de curcuma
- 1 grosse cuillère à soupe de piment en poudre
- 8 graine de cardamome
- 1 cuillère à soupe de cumin
- 1 baton de cannelle
- 3 feuille de laurier
-  huile végétale ou du beurre clarifié
-  menthe
-  piment frais

## Préparation

1. Désossez l’épaule d’agneau et coupez-la en gros cubes. Déposez-les dans un récipient et ajoutez-y le yaourt, le curcuma, le piment en poudre et un peu de la coriandre hachée. Mélangez bien et laissez mariner une bonne demi-heure au frigo, voire une nuit entière si vous le pouvez afin que la viande soit bien tendre.
2. Découpez l’ail, l’oignon et le gingembre en petits morceaux puis sortez la marinade du frigo. Dans une cocotte sur le feu, versez un peu d’huile végétale ou de beurre clarifié, puis la cardamome et le cumin et laissez les épices chauffer dans la matière grasse. Ajoutez ensuite les oignons, l’ail en purée et le gingembre pressé. Mélangez bien et laissez cuire.
3. En parallèle, préparez une grande casserole d’eau dans laquelle vous ajoutez de la cardamome, de la cannelle et du laurier. Portez le tout à ébullition puis ajoutez le riz. Il faudra l’égoutter lorsqu’il sera encore légèrement cassant. Dans la cocotte, ajoutez la marinade, mélangez et laissez cuire à feu doux.
4. Lorsque le riz est prêt, versez-le dans la cocotte contenant la viande marinée et ajoutez le safran dilué dans de l’eau chaude. Enfournez la cocotte à couvert pendant 20 à 30 minutes à 180°. Mélangez et c’est prêt !

 
 

 
 Pour la présentation, versez-en dans une grande assiette creuse et parsemez de menthe hachée, de piment haché et de quelques feuilles de coriandre pour la décoration. Vous pouvez aussi ajouter des oignons frits si vous le souhaitez.
