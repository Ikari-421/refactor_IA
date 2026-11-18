---
schema: recette-web-jigme/v2
slug: risotto-aux-legumes-dautomne
title: Risotto aux légumes d'automne
lang: fr
description: "Risotto aux légumes d'automne : recette italienne avec riz rond, asperge verte et champignon eryngii, pour 4 personnes. Version maison."
cuisine: italienne
category: salé
tags:
- salé
- risotto
- légumes
- automne
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/risotto-aux-legumes-dautomne.jpg
  alt: Risotto aux légumes d'automne
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/risotto-aux-legumes-dautomne.md
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
    - from: mascarpone
      to: fromage frais sans lactose
      note:
    - from: parmesan
      to: comté affiné (naturellement quasi sans lactose)
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: mascarpone végétal (cajou)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : mascarpone végétal (cajou) → graines de tournesol.'
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
    note: 'Contient poisson (fumet de poisson) : pas d’adaptation fiable.'
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
histoire: >
  Même risotto du nord de l’Italie, légumes d’automne (courge, champignons,
  châtaigne). Le geste (riz, oignon, vin blanc, bouillon, parmesan) reste celui
  du risotto ; la garniture suit la saison, sans recette d’auteur.
fun_facts:
- text: >
    On nappe (all’onda) : trop serré, c’est un pilaf ; trop liquide, une soupe.
  source_name: Wikipedia, Risotto
  source_url: https://en.wikipedia.org/wiki/Risotto
- text: >
    La courge rend de l’eau : on la rissole d’abord, on ne la jette pas crue.
  source_name: Usage
  source_url:
wines:
- name: Soave
  producer: Pieropan
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Blanc d’amande — la courge et le riz, voisin du nord.
- name: Barbera d'Asti
  producer: Coppo
  origin: Asti, Piémont
  grapes: barbera
  award:
  why: Acidité de barbera — les champignons, tanin souple.
- name: Côtes du Rhône
  producer: Domaine Brusset
  origin: Cairanne, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit — un risotto d’automne, sans un amarone.
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
      prep_min: 50
      cook_min: 35
      rest_min: 0
      total_min: 85
    equipment: &id002
    - four
    - casserole
    - poêle
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: asperge verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon eryngii (ou autre champignon)
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
    - qty: 200
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fond blanc de volaille
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graisse de canard
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
    - Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole
      avec une noisette de beurre.
    - Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement
      jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond blanc
      de volaille à hauteur.
    - Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les
      ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide
      de la pointe d’un couteau, les asperges doivent être bien fondantes.
    - Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des
      glaçons pour stopper la cuisson et fixer la couleur verte.
    - Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez
      le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de
      la pointe d’un couteau. N’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous pour
      mieux comprendre cette technique. Réalisez une brunoise avec le pied et le reste de
      vos champignons.
    - Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec
      de la matière grasse. On a utilisé de la graisse de canard, mais vous pouvez aussi prendre
      de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat
      pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons
      au four pendant 10 minutes à 180°C.
    - Cuisson. En attendant, faites revenir votre brunoise de champignons à la poêle avec de la matière
      grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés.
    - Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais).
      Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec
      vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour
      la déco des assiettes.
    - Cuisson. Ajoutez le mascarpone et le parmesan à votre riz. N’ayez pas peur d’être généreux, car
      le parmesan est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes
      et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fond blanc
      de volaille.
    - Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons
      quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques
      lamelles de parmesan et servez bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole avec une noisette de beurre."
      - "Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond blanc de volaille à hauteur."
      - "Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide de la pointe d’un couteau, les asperges doivent être bien fondantes."
      - "Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de la pointe d’un couteau. Réalisez une [[brunoise|brunoise]] avec le pied et le reste de vos champignons."
      - "Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec de la matière grasse. On a utilisé de la graisse de canard, mais vous pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons au four pendant 10 minutes à 180°C."
      - "Cuisson. En attendant, faites revenir votre [[brunoise|brunoise]] de champignons à la poêle avec de la matière grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés."
      - "Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais). Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour la déco des assiettes."
      - "Cuisson. Ajoutez le mascarpone et le parmesan à votre riz. N’ayez pas peur d’être généreux, car le parmesan est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fond blanc de volaille."
      - "Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques lamelles de parmesan et servez bien chaud."
      pro:
      - "Éplucher et émincer les oignons, les faire revenir rapidement dans une grande casserole avec une noisette de beurre."
      - "Avant coloration des oignons, ajouter le riz à risotto (riz rond). Mélanger régulièrement jusqu’à grains translucides. Ajouter le fond blanc de volaille à hauteur."
      - "Préparer les asperges : couper le bas de la tige, éplucher les pointes. Plonger dans l’eau bouillante préalablement salée. Vérifier à la pointe d’un couteau : asperges bien fondantes."
      - "Asperges cuites : débarrasser dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Décoration : retirer le pied d’un champignon eryngii. Couper dans la longueur, quadriller l’intérieur de la chaire à la pointe d’un couteau. Réaliser une brunoise avec le pied et le reste des champignons."
      - "Saisir les champignons de décoration côté quadrillé, poêle, matière grasse. Graisse de canard utilisée, ou huile d’arachide. Coloration faite : débarrasser dans un plat allant au four. Saler, poivrer légèrement. Four 10 minutes à 180°C."
      - "Faire revenir la brunoise de champignons à la poêle avec de la matière grasse. Saler, poivrer, cuire jusqu’à bien colorés."
      - "Pendant la cuisson des champignons, couper le corps des asperges en sifflet (de biais). S’arrêter aux têtes. Hacher finement le persil, ajouter dans la poêle avec les champignons, mélanger. Réserver quelques têtes d’asperges pour la déco."
      - "Ajouter le mascarpone et le parmesan au riz. Généreux : le parmesan lie et apporte de l’onctuosité. Ajouter les légumes, mélanger. Selon la texture, ajouter du fond blanc de volaille."
      - "Dresser le risotto dans une assiette creuse. Décorer avec les deux champignons quadrillés et quelques têtes d’asperges. Option amateurs : quelques lamelles de parmesan. Servir bien chaud."
      cavernes:
      - "Cuisson. Oignons, éplucher émincer. Grande casserole, noisette beurre, faire revenir rapidement."
      - "Mélange. Avant oignons colorer : riz risotto (riz rond), ajouter. Mélanger régulièrement, grains translucides. Fond blanc volaille, à hauteur."
      - "Cuisson. Asperges : bas tige, couper. Pointes, éplucher. Eau bouillante salée, plonger. Pointe couteau : asperges bien fondantes."
      - "Cuisson. Asperges cuites. Eau froide, glaçons, débarrasser. Stopper cuisson, fixer couleur verte."
      - "Cuisson. Déco risotto. Champignon eryngii, pied, retirer. Longueur, couper. Intérieur chaire, quadriller pointe couteau. Pied et reste champignons, brunoise."
      - "Cuisson. Champignons déco, côté quadrillé, poêle matière grasse, saisir. Graisse canard, ou huile arachide. Coloration : plat four, débarrasser. Sel poivre léger. Four 10 min 180°C."
      - "Cuisson. Brunoise champignons, poêle matière grasse, faire revenir. Sel poivre. Cuire jusqu’à bien colorés."
      - "Cuisson. Pendant champignons. Corps asperges, sifflet (biais). Stop têtes. Persil, hacher fin. Poêle champignons, ajouter mélanger. Quelques têtes asperges, réserver déco."
      - "Cuisson. Riz, mascarpone, parmesan, ajouter. Généreux : parmesan lie, onctuosité. Légumes, ajouter mélanger. Texture : fond blanc volaille si besoin."
      - "Dressage. Risotto, assiette creuse. Deux champignons quadrillés, têtes asperges. Option amateurs : lamelles parmesan. Servir bien chaud."
    kcal_per_serving: 423
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
    - qty: 350
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: asperge verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon eryngii (ou autre champignon)
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
    - qty: 200
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fond de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: grana (présure microbienne)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: aubergines rôties (gros quartiers)
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
    - Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole
      avec une noisette de beurre.
    - Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement
      jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond de légumes
      à hauteur.
    - Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les
      ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide
      de la pointe d’un couteau, les asperges doivent être bien fondantes.
    - Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des
      glaçons pour stopper la cuisson et fixer la couleur verte.
    - Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez
      le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de
      la pointe d’un couteau. N’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous pour
      mieux comprendre cette technique. Réalisez une brunoise avec le pied et le reste de
      vos champignons.
    - Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec
      de la matière grasse. On a utilisé de la aubergines rôties (gros quartiers), mais vous
      pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les
      dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux
      champignons au four pendant 10 minutes à 180°C.
    - Cuisson. En attendant, faites revenir votre brunoise de champignons à la poêle avec de la matière
      grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés.
    - Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais).
      Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec
      vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour
      la déco des assiettes.
    - Cuisson. Ajoutez le mascarpone et le grana (présure microbienne) à votre riz. N’ayez pas peur d’être généreux, car
      le grana (présure microbienne) est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes
      et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fond de légumes.
    - Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons
      quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques
      lamelles de grana (présure microbienne) et servez bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole avec une noisette de beurre."
      - "Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond de légumes à hauteur."
      - "Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide de la pointe d’un couteau, les asperges doivent être bien fondantes."
      - "Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de la pointe d’un couteau. Réalisez une [[brunoise|brunoise]] avec le pied et le reste de vos champignons."
      - "Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec de la matière grasse. On a utilisé de la aubergines rôties (gros quartiers), mais vous pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons au four pendant 10 minutes à 180°C."
      - "Cuisson. En attendant, faites revenir votre [[brunoise|brunoise]] de champignons à la poêle avec de la matière grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés."
      - "Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais). Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour la déco des assiettes."
      - "Cuisson. Ajoutez le mascarpone et le grana (présure microbienne) à votre riz. N’ayez pas peur d’être généreux, car le grana (présure microbienne) est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fond de légumes."
      - "Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques lamelles de grana (présure microbienne) et servez bien chaud."
      pro:
      - "Éplucher et émincer les oignons, les faire revenir rapidement dans une grande casserole avec une noisette de beurre."
      - "Avant coloration des oignons, ajouter le riz à risotto (riz rond). Mélanger régulièrement jusqu’à grains translucides. Ajouter le fond de légumes à hauteur."
      - "Préparer les asperges : couper le bas de la tige, éplucher les pointes. Plonger dans l’eau bouillante préalablement salée. Vérifier à la pointe d’un couteau : asperges bien fondantes."
      - "Asperges cuites : débarrasser dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Décoration : retirer le pied d’un champignon eryngii. Couper dans la longueur, quadriller l’intérieur de la chaire à la pointe d’un couteau. Réaliser une brunoise avec le pied et le reste des champignons."
      - "Saisir les champignons de décoration côté quadrillé, poêle, matière grasse. Aubergines rôties (gros quartiers) utilisées, ou huile d’arachide. Coloration faite : débarrasser dans un plat allant au four. Saler, poivrer légèrement. Four 10 minutes à 180°C."
      - "Faire revenir la brunoise de champignons à la poêle avec de la matière grasse. Saler, poivrer, cuire jusqu’à bien colorés."
      - "Pendant la cuisson des champignons, couper le corps des asperges en sifflet (de biais). S’arrêter aux têtes. Hacher finement le persil, ajouter dans la poêle avec les champignons, mélanger. Réserver quelques têtes d’asperges pour la déco."
      - "Ajouter le mascarpone et le grana (présure microbienne) au riz. Généreux : le grana (présure microbienne) lie et apporte de l’onctuosité. Ajouter les légumes, mélanger. Selon la texture, ajouter du fond de légumes."
      - "Dresser le risotto dans une assiette creuse. Décorer avec les deux champignons quadrillés et quelques têtes d’asperges. Option amateurs : quelques lamelles de grana (présure microbienne). Servir bien chaud."
      cavernes:
      - "Cuisson. Oignons, éplucher émincer. Grande casserole, noisette beurre, faire revenir rapidement."
      - "Mélange. Avant oignons colorer : riz risotto (riz rond), ajouter. Mélanger régulièrement, grains translucides. Fond légumes, à hauteur."
      - "Cuisson. Asperges : bas tige, couper. Pointes, éplucher. Eau bouillante salée, plonger. Pointe couteau : asperges bien fondantes."
      - "Cuisson. Asperges cuites. Eau froide, glaçons, débarrasser. Stopper cuisson, fixer couleur verte."
      - "Cuisson. Déco risotto. Champignon eryngii, pied, retirer. Longueur, couper. Intérieur chaire, quadriller pointe couteau. Pied et reste champignons, brunoise."
      - "Cuisson. Champignons déco, côté quadrillé, poêle matière grasse, saisir. Aubergines rôties (gros quartiers), ou huile arachide. Coloration : plat four, débarrasser. Sel poivre léger. Four 10 min 180°C."
      - "Cuisson. Brunoise champignons, poêle matière grasse, faire revenir. Sel poivre. Cuire jusqu’à bien colorés."
      - "Cuisson. Pendant champignons. Corps asperges, sifflet (biais). Stop têtes. Persil, hacher fin. Poêle champignons, ajouter mélanger. Quelques têtes asperges, réserver déco."
      - "Cuisson. Riz, mascarpone, grana (présure microbienne), ajouter. Généreux : grana (présure microbienne) lie, onctuosité. Légumes, ajouter mélanger. Texture : fond légumes si besoin."
      - "Dressage. Risotto, assiette creuse. Deux champignons quadrillés, têtes asperges. Option amateurs : lamelles grana (présure microbienne). Servir bien chaud."
    kcal_per_serving: 423
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: asperge verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon eryngii (ou autre champignon)
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
    - qty: 200
      unit: g
      item: mascarpone végétal (cajou)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fond de légumes
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan végétal ou levure maltée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: aubergines rôties (gros quartiers)
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
    - Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole
      avec une noisette de margarine végétale.
    - Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement
      jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond de légumes
      à hauteur.
    - Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les
      ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide
      de la pointe d’un couteau, les asperges doivent être bien fondantes.
    - Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des
      glaçons pour stopper la cuisson et fixer la couleur verte.
    - Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez
      le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de
      la pointe d’un couteau. N’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous pour
      mieux comprendre cette technique. Réalisez une brunoise avec le pied et le reste de
      vos champignons.
    - Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec
      de la matière grasse. On a utilisé de la aubergines rôties (gros quartiers), mais vous
      pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les
      dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux
      champignons au four pendant 10 minutes à 180°C.
    - Cuisson. En attendant, faites revenir votre brunoise de champignons à la poêle avec de la matière
      grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés.
    - Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais).
      Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec
      vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour
      la déco des assiettes.
    - Cuisson. Ajoutez le mascarpone végétal (cajou) et le parmesan végétal ou levure maltée à votre
      riz. N’ayez pas peur d’être généreux, car le parmesan végétal ou levure maltée est le
      liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes et mélangez le tout.
      En fonction de la texture, n’hésitez pas à ajouter du fond de légumes.
    - Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons
      quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques
      lamelles de parmesan végétal ou levure maltée et servez bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole avec une noisette de margarine végétale."
      - "Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond de légumes à hauteur."
      - "Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide de la pointe d’un couteau, les asperges doivent être bien fondantes."
      - "Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de la pointe d’un couteau. Réalisez une [[brunoise|brunoise]] avec le pied et le reste de vos champignons."
      - "Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec de la matière grasse. On a utilisé de la aubergines rôties (gros quartiers), mais vous pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons au four pendant 10 minutes à 180°C."
      - "Cuisson. En attendant, faites revenir votre [[brunoise|brunoise]] de champignons à la poêle avec de la matière grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés."
      - "Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais). Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour la déco des assiettes."
      - "Cuisson. Ajoutez le mascarpone végétal (cajou) et le parmesan végétal ou levure maltée à votre riz. N’ayez pas peur d’être généreux, car le parmesan végétal ou levure maltée est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fond de légumes."
      - "Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques lamelles de parmesan végétal ou levure maltée et servez bien chaud."
      pro:
      - "Éplucher et émincer les oignons, les faire revenir rapidement dans une grande casserole avec une noisette de margarine végétale."
      - "Avant coloration des oignons, ajouter le riz à risotto (riz rond). Mélanger régulièrement jusqu’à grains translucides. Ajouter le fond de légumes à hauteur."
      - "Préparer les asperges : couper le bas de la tige, éplucher les pointes. Plonger dans l’eau bouillante préalablement salée. Vérifier à la pointe d’un couteau : asperges bien fondantes."
      - "Asperges cuites : débarrasser dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Décoration : retirer le pied d’un champignon eryngii. Couper dans la longueur, quadriller l’intérieur de la chaire à la pointe d’un couteau. Réaliser une brunoise avec le pied et le reste des champignons."
      - "Saisir les champignons de décoration côté quadrillé, poêle, matière grasse. Aubergines rôties (gros quartiers) utilisées, ou huile d’arachide. Coloration faite : débarrasser dans un plat allant au four. Saler, poivrer légèrement. Four 10 minutes à 180°C."
      - "Faire revenir la brunoise de champignons à la poêle avec de la matière grasse. Saler, poivrer, cuire jusqu’à bien colorés."
      - "Pendant la cuisson des champignons, couper le corps des asperges en sifflet (de biais). S’arrêter aux têtes. Hacher finement le persil, ajouter dans la poêle avec les champignons, mélanger. Réserver quelques têtes d’asperges pour la déco."
      - "Ajouter le mascarpone végétal (cajou) et le parmesan végétal ou levure maltée au riz. Généreux : le parmesan végétal ou levure maltée lie et apporte de l’onctuosité. Ajouter les légumes, mélanger. Selon la texture, ajouter du fond de légumes."
      - "Dresser le risotto dans une assiette creuse. Décorer avec les deux champignons quadrillés et quelques têtes d’asperges. Option amateurs : quelques lamelles de parmesan végétal ou levure maltée. Servir bien chaud."
      cavernes:
      - "Cuisson. Oignons, éplucher émincer. Grande casserole, noisette margarine végétale, faire revenir rapidement."
      - "Mélange. Avant oignons colorer : riz risotto (riz rond), ajouter. Mélanger régulièrement, grains translucides. Fond légumes, à hauteur."
      - "Cuisson. Asperges : bas tige, couper. Pointes, éplucher. Eau bouillante salée, plonger. Pointe couteau : asperges bien fondantes."
      - "Cuisson. Asperges cuites. Eau froide, glaçons, débarrasser. Stopper cuisson, fixer couleur verte."
      - "Cuisson. Déco risotto. Champignon eryngii, pied, retirer. Longueur, couper. Intérieur chaire, quadriller pointe couteau. Pied et reste champignons, brunoise."
      - "Cuisson. Champignons déco, côté quadrillé, poêle matière grasse, saisir. Aubergines rôties (gros quartiers), ou huile arachide. Coloration : plat four, débarrasser. Sel poivre léger. Four 10 min 180°C."
      - "Cuisson. Brunoise champignons, poêle matière grasse, faire revenir. Sel poivre. Cuire jusqu’à bien colorés."
      - "Cuisson. Pendant champignons. Corps asperges, sifflet (biais). Stop têtes. Persil, hacher fin. Poêle champignons, ajouter mélanger. Quelques têtes asperges, réserver déco."
      - "Cuisson. Riz, mascarpone végétal (cajou), parmesan végétal ou levure maltée, ajouter. Généreux : parmesan végétal ou levure maltée lie, onctuosité. Légumes, ajouter mélanger. Texture : fond légumes si besoin."
      - "Dressage. Risotto, assiette creuse. Deux champignons quadrillés, têtes asperges. Option amateurs : lamelles parmesan végétal ou levure maltée. Servir bien chaud."
    kcal_per_serving: 423
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
    - qty: 350
      unit: g
      item: riz rond
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: asperge verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: champignon eryngii (ou autre champignon)
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
    - qty: 200
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fumet de poisson
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: parmesan
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pavé de saumon
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole
      avec une noisette de beurre.
    - Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement
      jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fumet de poisson
      à hauteur.
    - Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les
      ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide
      de la pointe d’un couteau, les asperges doivent être bien fondantes.
    - Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des
      glaçons pour stopper la cuisson et fixer la couleur verte.
    - Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez
      le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de
      la pointe d’un couteau. N’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous pour
      mieux comprendre cette technique. Réalisez une brunoise avec le pied et le reste de
      vos champignons.
    - Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec
      de la matière grasse. On a utilisé de la pavé de saumon, mais vous pouvez aussi prendre
      de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat
      pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons
      au four pendant 10 minutes à 180°C.
    - Cuisson. En attendant, faites revenir votre brunoise de champignons à la poêle avec de la matière
      grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés.
    - Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais).
      Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec
      vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour
      la déco des assiettes.
    - Cuisson. Ajoutez le mascarpone et le parmesan à votre riz. N’ayez pas peur d’être généreux, car
      le parmesan est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes
      et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fumet de
      poisson.
    - Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons
      quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques
      lamelles de parmesan et servez bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole avec une noisette de beurre."
      - "Mélange. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fumet de poisson à hauteur."
      - "Cuisson. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide de la pointe d’un couteau, les asperges doivent être bien fondantes."
      - "Cuisson. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Cuisson. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de la pointe d’un couteau. Réalisez une [[brunoise|brunoise]] avec le pied et le reste de vos champignons."
      - "Cuisson. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec de la matière grasse. On a utilisé de la pavé de saumon, mais vous pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons au four pendant 10 minutes à 180°C."
      - "Cuisson. En attendant, faites revenir votre [[brunoise|brunoise]] de champignons à la poêle avec de la matière grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés."
      - "Cuisson. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais). Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour la déco des assiettes."
      - "Cuisson. Ajoutez le mascarpone et le parmesan à votre riz. N’ayez pas peur d’être généreux, car le parmesan est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fumet de poisson."
      - "Dressage. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons quadrillés ainsi que quelques têtes d’asperges. Pour les amateurs, complétez avec quelques lamelles de parmesan et servez bien chaud."
      pro:
      - "Éplucher et émincer les oignons, les faire revenir rapidement dans une grande casserole avec une noisette de beurre."
      - "Avant coloration des oignons, ajouter le riz à risotto (riz rond). Mélanger régulièrement jusqu’à grains translucides. Ajouter le fumet de poisson à hauteur."
      - "Préparer les asperges : couper le bas de la tige, éplucher les pointes. Plonger dans l’eau bouillante préalablement salée. Vérifier à la pointe d’un couteau : asperges bien fondantes."
      - "Asperges cuites : débarrasser dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte."
      - "Décoration : retirer le pied d’un champignon eryngii. Couper dans la longueur, quadriller l’intérieur de la chaire à la pointe d’un couteau. Réaliser une brunoise avec le pied et le reste des champignons."
      - "Saisir les champignons de décoration côté quadrillé, poêle, matière grasse. Pavé de saumon utilisé, ou huile d’arachide. Coloration faite : débarrasser dans un plat allant au four. Saler, poivrer légèrement. Four 10 minutes à 180°C."
      - "Faire revenir la brunoise de champignons à la poêle avec de la matière grasse. Saler, poivrer, cuire jusqu’à bien colorés."
      - "Pendant la cuisson des champignons, couper le corps des asperges en sifflet (de biais). S’arrêter aux têtes. Hacher finement le persil, ajouter dans la poêle avec les champignons, mélanger. Réserver quelques têtes d’asperges pour la déco."
      - "Ajouter le mascarpone et le parmesan au riz. Généreux : le parmesan lie et apporte de l’onctuosité. Ajouter les légumes, mélanger. Selon la texture, ajouter du fumet de poisson."
      - "Dresser le risotto dans une assiette creuse. Décorer avec les deux champignons quadrillés et quelques têtes d’asperges. Option amateurs : quelques lamelles de parmesan. Servir bien chaud."
      cavernes:
      - "Cuisson. Oignons, éplucher émincer. Grande casserole, noisette beurre, faire revenir rapidement."
      - "Mélange. Avant oignons colorer : riz risotto (riz rond), ajouter. Mélanger régulièrement, grains translucides. Fumet poisson, à hauteur."
      - "Cuisson. Asperges : bas tige, couper. Pointes, éplucher. Eau bouillante salée, plonger. Pointe couteau : asperges bien fondantes."
      - "Cuisson. Asperges cuites. Eau froide, glaçons, débarrasser. Stopper cuisson, fixer couleur verte."
      - "Cuisson. Déco risotto. Champignon eryngii, pied, retirer. Longueur, couper. Intérieur chaire, quadriller pointe couteau. Pied et reste champignons, brunoise."
      - "Cuisson. Champignons déco, côté quadrillé, poêle matière grasse, saisir. Pavé saumon, ou huile arachide. Coloration : plat four, débarrasser. Sel poivre léger. Four 10 min 180°C."
      - "Cuisson. Brunoise champignons, poêle matière grasse, faire revenir. Sel poivre. Cuire jusqu’à bien colorés."
      - "Cuisson. Pendant champignons. Corps asperges, sifflet (biais). Stop têtes. Persil, hacher fin. Poêle champignons, ajouter mélanger. Quelques têtes asperges, réserver déco."
      - "Cuisson. Riz, mascarpone, parmesan, ajouter. Généreux : parmesan lie, onctuosité. Légumes, ajouter mélanger. Texture : fumet poisson si besoin."
      - "Dressage. Risotto, assiette creuse. Deux champignons quadrillés, têtes asperges. Option amateurs : lamelles parmesan. Servir bien chaud."
    kcal_per_serving: 423
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
  vegetarienne:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
  vegan:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
  pesco:
    brunoise:
      terme: "brunoise"
      explication: "Vous taillez l’aliment en tout petits dés réguliers. Vous cherchez un calibre égal, aussi large que long. C’est réussi quand les dés sont petits et du même calibre."
      ref: Cuisine/Lexique/brunoise.md
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
  anti_gaspi: ["Arancini"]
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent) ; crème"

---

# Risotto aux légumes d'automne
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/risotto-aux-legumes-dautomne.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/risotto-aux-legumes-dautomne]]

## Ingrédients (4 personnes)

- 350 g de riz rond
- 4 asperge verte
- 4 champignon eryngii (ou autre champignon)
- 1 oignon
- 200 g mascarpone
-  fond blanc de volaille
-  parmesan
-  graisse de canard

## Préparation

1. Épluchez et émincez vos oignons puis faites-les revenir rapidement dans une grande casserole avec une noisette de beurre.
2. Avant que les oignons se colorent, ajoutez le riz à risotto (riz rond). Mélangez régulièrement jusqu’à ce que les grains de riz soient translucides. Ajoutez ensuite le fond blanc de volaille à hauteur.
3. Préparez vos asperges en coupant le bas de la tige et en épluchant les pointes. Plongez-les ensuite dans de l’eau bouillante, préalablement salée. Vérifiez la cuisson à l’aide de la pointe d’un couteau, les asperges doivent être bien fondantes.
4. Une fois que les asperges sont cuites, débarrassez-les dans de l’eau froide avec des glaçons pour stopper la cuisson et fixer la couleur verte.
5. Pour la décoration du risotto, retirez le pied d’un de vos champignons eryngii. Coupez le champignon dans la longueur, puis quadrillez l’intérieur de la chaire à l’aide de la pointe d’un couteau. N’hésitez pas à jeter un coup d’oeil à la vidéo ci-dessous pour mieux comprendre cette technique. Réalisez une brunoise avec le pied et le reste de vos champignons.
6. Faites saisir vos champignons « de décoration » côté quadrillé, dans une poêle avec de la matière grasse. On a utilisé de la graisse de canard, mais vous pouvez aussi prendre de l’huile d’arachide. Dès que la coloration est faite, débarrassez-les dans un plat pouvant aller au four. Salez et poivrez légèrement puis placez ces deux champignons au four pendant 10 minutes à 180°C.
7. En attendant, faites revenir votre brunoise de champignons à la poêle avec de la matière grasse. Salez, poivrez et laissez cuire jusqu’à ce qu’ils soient bien colorés.
8. Pendant la cuisson des champignons, coupez le corps de vos asperges en sifflet (de biais). Arrêtez-vous aux têtes. Hachez finement le persil, ajoutez le tout dans la poêle avec vos champignons et mélangez. Vous pouvez mettre de côté quelques têtes d’asperges pour la déco des assiettes.
9. Ajoutez le mascarpone et le parmesan à votre riz. N’ayez pas peur d’être généreux, car le parmesan est le liant et va apporter de l’onctuosité. Enfin, ajoutez les légumes et mélangez le tout. En fonction de la texture, n’hésitez pas à ajouter du fond blanc de volaille.
10. Dressez votre risotto dans une assiette creuse et décorez-le avec vos deux champignons quadrillés ainsi que quelques têtes d’asperges.

 
 

 
 Pour les amateurs, complétez avec quelques lamelles de parmesan et servez bien chaud. Bon appétit !
