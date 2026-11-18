---
schema: recette-web-jigme/v2
slug: cote-de-veau-petits-pois-carottes
title: Côte de veau petits pois carottes
lang: fr
description: "Côte de veau petits pois carottes : recette française avec côte de veau, carotte et petits-pois, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- veau
- plat
- côte de veau
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/cote-de-veau-petits-pois-carottes.webp
  alt: Côte de veau petits pois carottes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cote-de-veau-petits-pois-carottes.md
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
    - from: champignons + seitan
      to: tofu ferme
      note:
    - from: champignons + seitan
      to: tofu ferme
      note:
    note: 'Gluten : champignons + seitan → tofu ferme.'
  sans_lactose:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lait.
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
    note: 'Contient poisson (sole ou cabillaud) : pas d’adaptation fiable.'
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
  Côte de veau poêlée, garniture petits pois-carottes : plat de maison français,
  sans date d’auteur. Les petits pois au beurre sont un classique des XIXe–XXe s. ;
  la côte grillée est plus ancienne encore.
fun_facts:
- text: "Une côte avec os se dessert moins vite qu’une noix de veau ; l’os tient le jus."
  source_name: Usage
  source_url:
- text: "Les petits pois frais cuisent vite ; trop longtemps, ils jaunissent et durcissent."
  source_name: Usage
  source_url:
wines:
- name: Mercurey
  producer: Domaine François Raquillet
  origin: Mercurey, Côte chalonnaise
  grapes: pinot noir
  award:
  why: Cerise, sous-bois — le veau, tanin fin, pas un grand cru.
- name: Beaujolais-Villages
  producer: Jean-Marc Burgaud
  origin: Lantignié, Beaujolais
  grapes: gamay
  award:
  why: Fruit rouge, peu de bois — pois et carottes, viande claire.
- name: Saint-Nicolas-de-Bourgueil
  producer: Yannick Amirault
  origin: Saint-Nicolas-de-Bourgueil, Loire
  grapes: cabernet franc
  award:
  why: Poivron, violette — le jus de veau, fraîcheur ligérienne.
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
    - moutarde
    difficulty: 2
    time: &id001
      prep_min: 50
      cook_min: 40
      rest_min: 0
      total_min: 90
    equipment: &id002
    - casserole
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 800
      unit: g
      item: côte de veau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: petits-pois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de veau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde de Brive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
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
    - Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets.
    - Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient
      tendre. Une fois qu’ils sont cuits, débarrassez les dans de l’eau froide afin de stopper
      la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour pouvoir cuire
      les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les
      carottes dans de l’eau froide et réservez.
    - Cuisson. Dans une autre casserole, versez le fond de veau et la moutarde de Brive. Mélangez bien
      et laissez cuire à feu doux pendant quelques minutes.
    - Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez
      le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive.
    - Cuisson. Salez et poivrez la côte veau des deux côtés. Faites la cuire dans une casserole bien
      chaude avec un filet d’huile d’arachide. Faites la « croûter » à feu vif. Une fois que
      cette croûte grillée s’est formée, laissez la côte de veau cuire environ 6 minutes de
      chaque côté à feu moyen.
    - Repos. Débarrassez la côté de veau dans un plat ou sur une planche en bois et laissez-la reposer
      afin que la viande s’attendrisse. À l’aide d’un pinceau, badigeonnez-la de votre mélange
      de persil et d’ail.
    - Finition. Pour les légumes réalisez un glaçage avec un peu de fond de volaille et du beurre. Faites
      chauffer le tout dans une poêle et laissez réduire. Faites réchauffez les légumes dans
      ce glaçage avant de servir le tout bien chaud. Et voilà, vous avez réalisez une superbe
      côte de veau aux légumes de printemps. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets."
      - "Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient tendres. Une fois cuits, débarrassez-les dans de l’eau froide afin de stopper la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour cuire les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les carottes dans de l’eau froide et réservez."
      - "Cuisson. Dans une autre casserole, versez le fond de veau et la moutarde de Brive. Mélangez bien et laissez cuire à feu doux pendant quelques minutes."
      - "Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive."
      - "Cuisson. Salez et poivrez la côte de veau des deux côtés. Faites-la cuire dans une casserole bien chaude avec un filet d’huile d’arachide. Faites-la « croûter » à feu vif. Une fois la croûte grillée formée, laissez la côte de veau cuire environ 6 minutes de chaque côté à feu moyen."
      - "Repos. Débarrassez la côte de veau dans un plat ou sur une planche en bois et laissez-la reposer afin que la viande s’attendrisse. À l’aide d’un pinceau, badigeonnez-la de votre mélange de persil et d’ail."
      - "Finition. Pour les légumes, réalisez un glaçage avec un peu de fond de volaille et du beurre. Faites chauffer le tout dans une poêle et [[reduire|laissez réduire]]. Faites réchauffer les légumes dans ce glaçage avant de servir le tout bien chaud."
      pro:
      - "Écosser les petits pois. Éplucher et tailler les carottes en petits bâtonnets."
      - "Cuire les petits pois dans de l’eau bouillante salée jusqu’à tendreté. Débarrasser dans de l’eau froide pour stopper la cuisson et fixer la couleur verte. Conserver l’eau de cuisson. Y cuire les carottes jusqu’à tendreté. Débarrasser dans de l’eau froide. Réserver."
      - "Verser le fond de veau et la moutarde de Brive dans une autre casserole. Mélanger. Cuire à feu doux quelques minutes."
      - "Piler les gousses d’ail au pilon avec un peu de persil frais. Assaisonner sel, poivre, filet d’huile d’olive."
      - "Saler et poivrer la côte de veau des deux côtés. Cuire dans une casserole bien chaude, filet d’huile d’arachide. Croûter à feu vif. Puis cuire environ 6 minutes de chaque côté à feu moyen."
      - "Débarrasser la côte de veau dans un plat ou sur une planche en bois. Laisser reposer. Badigeonner au pinceau du mélange persil-ail."
      - "Glaçage : un peu de fond de volaille et du beurre. Chauffer en poêle, laisser réduire. Réchauffer les légumes dans ce glaçage. Servir bien chaud."
      cavernes:
      - "Préparation. Petits pois, écosser. Carottes, éplucher, tailler petits bâtonnets."
      - "Cuisson. Petits pois, eau bouillante salée, cuire jusqu’à tendre. Eau froide, débarrasser, stopper cuisson, fixer couleur verte. Eau cuisson, garder. Carottes, cuire. Tendres, eau froide, débarrasser, réserver."
      - "Cuisson. Autre casserole, fond de veau, moutarde de Brive, verser. Mélanger. Feu doux, quelques minutes."
      - "Cuisson. Gousses d’ail, pilon, peu persil frais. Piler. Sel, poivre, filet huile d’olive."
      - "Cuisson. Côte veau, saler poivrer deux côtés. Casserole bien chaude, filet huile arachide, cuire. Croûter feu vif. Croûte grillée. Cuire environ 6 minutes chaque côté, feu moyen."
      - "Repos. Côte veau, plat ou planche bois, débarrasser, reposer, viande s’attendrir. Pinceau, mélange persil ail, badigeonner."
      - "Finition. Légumes, glaçage peu fond volaille, beurre. Poêle, chauffer, réduire. Légumes, réchauffer glaçage. Servir chaud."
    kcal_per_serving: 450
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
    - moutarde
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 800
      unit: g
      item: champignons + seitan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: petits-pois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde de Brive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
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
    - Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets.
    - Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient
      tendre. Une fois qu’ils sont cuits, débarrassez les dans de l’eau froide afin de stopper
      la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour pouvoir cuire
      les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les
      carottes dans de l’eau froide et réservez.
    - Cuisson. Dans une autre casserole, versez le fond de légumes et la moutarde de Brive. Mélangez
      bien et laissez cuire à feu doux pendant quelques minutes.
    - Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez
      le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive.
    - Cuisson. Salez et poivrez le seitan (ou les champignons) des deux côtés. Saisissez à feu vif avec un filet d’huile d’arachide, puis cuisez environ 6 minutes de chaque côté.
    - Repos. Débarrassez le seitan dans un plat et laissez reposer. À l’aide d’un pinceau, badigeonnez-la de votre mélange
      de persil et d’ail.
    - Finition. Pour les légumes réalisez un glaçage avec un peu de fond de légumes et du beurre. Faites
      chauffer le tout dans une poêle et laissez réduire. Faites réchauffez les légumes dans
      ce glaçage avant de servir le tout bien chaud. Et voilà, vous avez réalisez une superbe
      champignons + seitan aux légumes de printemps. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets."
      - "Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient tendres. Une fois cuits, débarrassez-les dans de l’eau froide afin de stopper la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour cuire les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les carottes dans de l’eau froide et réservez."
      - "Cuisson. Dans une autre casserole, versez le fond de légumes et la moutarde de Brive. Mélangez bien et laissez cuire à feu doux pendant quelques minutes."
      - "Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive."
      - "Cuisson. Salez et poivrez le seitan (ou les champignons) des deux côtés. Saisissez à feu vif avec un filet d’huile d’arachide, puis cuisez environ 6 minutes de chaque côté."
      - "Repos. Débarrassez le seitan dans un plat et laissez reposer. À l’aide d’un pinceau, badigeonnez-le de votre mélange de persil et d’ail."
      - "Finition. Pour les légumes, réalisez un glaçage avec un peu de fond de légumes et du beurre. Faites chauffer le tout dans une poêle et [[reduire|laissez réduire]]. Faites réchauffer les légumes dans ce glaçage avant de servir le tout bien chaud."
      pro:
      - "Écosser les petits pois. Éplucher et tailler les carottes en petits bâtonnets."
      - "Cuire les petits pois dans de l’eau bouillante salée jusqu’à tendreté. Débarrasser dans de l’eau froide pour stopper la cuisson et fixer la couleur verte. Conserver l’eau de cuisson. Y cuire les carottes jusqu’à tendreté. Débarrasser dans de l’eau froide. Réserver."
      - "Verser le fond de légumes et la moutarde de Brive dans une autre casserole. Mélanger. Cuire à feu doux quelques minutes."
      - "Piler les gousses d’ail au pilon avec un peu de persil frais. Assaisonner sel, poivre, filet d’huile d’olive."
      - "Saler et poivrer le seitan (ou les champignons) des deux côtés. Saisir à feu vif, filet d’huile d’arachide, puis cuire environ 6 minutes de chaque côté."
      - "Débarrasser le seitan dans un plat. Laisser reposer. Badigeonner au pinceau du mélange persil-ail."
      - "Glaçage : un peu de fond de légumes et du beurre. Chauffer en poêle, laisser réduire. Réchauffer les légumes dans ce glaçage. Servir bien chaud."
      cavernes:
      - "Préparation. Petits pois, écosser. Carottes, éplucher, tailler petits bâtonnets."
      - "Cuisson. Petits pois, eau bouillante salée, cuire jusqu’à tendre. Eau froide, débarrasser, stopper cuisson, fixer couleur verte. Eau cuisson, garder. Carottes, cuire. Tendres, eau froide, débarrasser, réserver."
      - "Cuisson. Autre casserole, fond de légumes, moutarde de Brive, verser. Mélanger. Feu doux, quelques minutes."
      - "Cuisson. Gousses d’ail, pilon, peu persil frais. Piler. Sel, poivre, filet huile d’olive."
      - "Cuisson. Seitan (ou champignons), saler poivrer deux côtés. Filet huile arachide, saisir feu vif, puis cuire environ 6 minutes chaque côté."
      - "Repos. Seitan, plat, débarrasser, reposer. Pinceau, mélange persil ail, badigeonner."
      - "Finition. Légumes, glaçage peu fond de légumes, beurre. Poêle, chauffer, réduire. Légumes, réchauffer glaçage. Servir chaud."
    kcal_per_serving: 375
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
    - moutarde
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 800
      unit: g
      item: champignons + seitan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: petits-pois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde de Brive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
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
    - Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets.
    - Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient
      tendre. Une fois qu’ils sont cuits, débarrassez les dans de l’eau froide afin de stopper
      la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour pouvoir cuire
      les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les
      carottes dans de l’eau froide et réservez.
    - Cuisson. Dans une autre casserole, versez le fond de légumes et la moutarde de Brive. Mélangez
      bien et laissez cuire à feu doux pendant quelques minutes.
    - Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez
      le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive.
    - Cuisson. Salez et poivrez le seitan (ou les champignons) des deux côtés. Faites-le cuire dans
      une casserole bien chaude avec un filet d’huile d’arachide. Faites-le « croûter »
      à feu vif. Une fois que cette croûte grillée s’est formée, laissez cuire environ 6
      minutes de chaque côté à feu moyen.
    - Repos. Débarrassez le seitan (ou les champignons) dans un plat et laissez reposer. À l’aide
      d’un pinceau, badigeonnez-le de votre mélange de persil et d’ail.
    - Finition. Pour les légumes, réalisez un glaçage avec un peu de fond de légumes et de la margarine
      végétale. Faites chauffer le tout dans une poêle et laissez réduire. Faites réchauffer
      les légumes dans ce glaçage avant de servir le tout bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets."
      - "Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient tendres. Une fois cuits, débarrassez-les dans de l’eau froide afin de stopper la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour cuire les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les carottes dans de l’eau froide et réservez."
      - "Cuisson. Dans une autre casserole, versez le fond de légumes et la moutarde de Brive. Mélangez bien et laissez cuire à feu doux pendant quelques minutes."
      - "Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive."
      - "Cuisson. Salez et poivrez le seitan (ou les champignons) des deux côtés. Faites-le cuire dans une casserole bien chaude avec un filet d’huile d’arachide. Faites-le « croûter » à feu vif. Une fois la croûte grillée formée, laissez cuire environ 6 minutes de chaque côté à feu moyen."
      - "Repos. Débarrassez le seitan (ou les champignons) dans un plat et laissez reposer. À l’aide d’un pinceau, badigeonnez-le de votre mélange de persil et d’ail."
      - "Finition. Pour les légumes, réalisez un glaçage avec un peu de fond de légumes et de la margarine végétale. Faites chauffer le tout dans une poêle et [[reduire|laissez réduire]]. Faites réchauffer les légumes dans ce glaçage avant de servir le tout bien chaud."
      pro:
      - "Écosser les petits pois. Éplucher et tailler les carottes en petits bâtonnets."
      - "Cuire les petits pois dans de l’eau bouillante salée jusqu’à tendreté. Débarrasser dans de l’eau froide pour stopper la cuisson et fixer la couleur verte. Conserver l’eau de cuisson. Y cuire les carottes jusqu’à tendreté. Débarrasser dans de l’eau froide. Réserver."
      - "Verser le fond de légumes et la moutarde de Brive dans une autre casserole. Mélanger. Cuire à feu doux quelques minutes."
      - "Piler les gousses d’ail au pilon avec un peu de persil frais. Assaisonner sel, poivre, filet d’huile d’olive."
      - "Saler et poivrer le seitan (ou les champignons) des deux côtés. Cuire dans une casserole bien chaude, filet d’huile d’arachide. Croûter à feu vif. Puis cuire environ 6 minutes de chaque côté à feu moyen."
      - "Débarrasser le seitan (ou les champignons) dans un plat. Laisser reposer. Badigeonner au pinceau du mélange persil-ail."
      - "Glaçage : un peu de fond de légumes et de la margarine végétale. Chauffer en poêle, laisser réduire. Réchauffer les légumes dans ce glaçage. Servir bien chaud."
      cavernes:
      - "Préparation. Petits pois, écosser. Carottes, éplucher, tailler petits bâtonnets."
      - "Cuisson. Petits pois, eau bouillante salée, cuire jusqu’à tendre. Eau froide, débarrasser, stopper cuisson, fixer couleur verte. Eau cuisson, garder. Carottes, cuire. Tendres, eau froide, débarrasser, réserver."
      - "Cuisson. Autre casserole, fond de légumes, moutarde de Brive, verser. Mélanger. Feu doux, quelques minutes."
      - "Cuisson. Gousses d’ail, pilon, peu persil frais. Piler. Sel, poivre, filet huile d’olive."
      - "Cuisson. Seitan (ou champignons), saler poivrer deux côtés. Casserole bien chaude, filet huile arachide, cuire. Croûter feu vif. Croûte grillée. Cuire environ 6 minutes chaque côté, feu moyen."
      - "Repos. Seitan (ou champignons), plat, débarrasser, reposer. Pinceau, mélange persil ail, badigeonner."
      - "Finition. Légumes, glaçage peu fond de légumes, margarine végétale. Poêle, chauffer, réduire. Légumes, réchauffer glaçage. Servir chaud."
    kcal_per_serving: 375
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 800
      unit: g
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: petits-pois
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde de Brive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets.
    - Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient
      tendre. Une fois qu’ils sont cuits, débarrassez les dans de l’eau froide afin de stopper
      la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour pouvoir cuire
      les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les
      carottes dans de l’eau froide et réservez.
    - Cuisson. Dans une autre casserole, versez le sole ou cabillaud et la moutarde de Brive. Mélangez
      bien et laissez cuire à feu doux pendant quelques minutes.
    - Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez
      le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive.
    - Cuisson. Salez et poivrez la côte veau des deux côtés. Faites la cuire dans une casserole bien
      chaude avec un filet d’huile d’arachide. Faites la « croûter » à feu vif. Une fois que
      cette croûte grillée s’est formée, laissez la sole ou cabillaud cuire environ 6 minutes
      de chaque côté à feu moyen.
    - Repos. Débarrassez la côté de veau dans un plat ou sur une planche en bois et laissez-la reposer
      afin que la viande s’attendrisse. À l’aide d’un pinceau, badigeonnez-la de votre mélange
      de persil et d’ail.
    - Finition. Pour les légumes réalisez un glaçage avec un peu de fond de volaille et du beurre. Faites
      chauffer le tout dans une poêle et laissez réduire. Faites réchauffez les légumes dans
      ce glaçage avant de servir le tout bien chaud. Et voilà, vous avez réalisez une superbe
      sole ou cabillaud aux légumes de printemps. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets."
      - "Cuisson. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient tendres. Une fois cuits, débarrassez-les dans de l’eau froide afin de stopper la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour cuire les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les carottes dans de l’eau froide et réservez."
      - "Cuisson. Dans une autre casserole, versez le sole ou cabillaud et la moutarde de Brive. Mélangez bien et laissez cuire à feu doux pendant quelques minutes."
      - "Cuisson. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive."
      - "Cuisson. Salez et poivrez la côte de veau des deux côtés. Faites-la cuire dans une casserole bien chaude avec un filet d’huile d’arachide. Faites-la « croûter » à feu vif. Une fois la croûte grillée formée, laissez le sole ou cabillaud cuire environ 6 minutes de chaque côté à feu moyen."
      - "Repos. Débarrassez la côte de veau dans un plat ou sur une planche en bois et laissez-la reposer afin que la viande s’attendrisse. À l’aide d’un pinceau, badigeonnez-la de votre mélange de persil et d’ail."
      - "Finition. Pour les légumes, réalisez un glaçage avec un peu de fond de volaille et du beurre. Faites chauffer le tout dans une poêle et [[reduire|laissez réduire]]. Faites réchauffer les légumes dans ce glaçage avant de servir le tout bien chaud."
      pro:
      - "Écosser les petits pois. Éplucher et tailler les carottes en petits bâtonnets."
      - "Cuire les petits pois dans de l’eau bouillante salée jusqu’à tendreté. Débarrasser dans de l’eau froide pour stopper la cuisson et fixer la couleur verte. Conserver l’eau de cuisson. Y cuire les carottes jusqu’à tendreté. Débarrasser dans de l’eau froide. Réserver."
      - "Verser le sole ou cabillaud et la moutarde de Brive dans une autre casserole. Mélanger. Cuire à feu doux quelques minutes."
      - "Piler les gousses d’ail au pilon avec un peu de persil frais. Assaisonner sel, poivre, filet d’huile d’olive."
      - "Saler et poivrer la côte de veau des deux côtés. Cuire dans une casserole bien chaude, filet d’huile d’arachide. Croûter à feu vif. Puis cuire le sole ou cabillaud environ 6 minutes de chaque côté à feu moyen."
      - "Débarrasser la côte de veau dans un plat ou sur une planche en bois. Laisser reposer afin que la viande s’attendrisse. Badigeonner au pinceau du mélange persil-ail."
      - "Glaçage : un peu de fond de volaille et du beurre. Chauffer en poêle, laisser réduire. Réchauffer les légumes dans ce glaçage. Servir bien chaud."
      cavernes:
      - "Préparation. Petits pois, écosser. Carottes, éplucher, tailler petits bâtonnets."
      - "Cuisson. Petits pois, eau bouillante salée, cuire jusqu’à tendre. Eau froide, débarrasser, stopper cuisson, fixer couleur verte. Eau cuisson, garder. Carottes, cuire. Tendres, eau froide, débarrasser, réserver."
      - "Cuisson. Autre casserole, sole ou cabillaud, moutarde de Brive, verser. Mélanger. Feu doux, quelques minutes."
      - "Cuisson. Gousses d’ail, pilon, peu persil frais. Piler. Sel, poivre, filet huile d’olive."
      - "Cuisson. Côte veau, saler poivrer deux côtés. Casserole bien chaude, filet huile arachide, cuire. Croûter feu vif. Croûte grillée. Sole ou cabillaud, cuire environ 6 minutes chaque côté, feu moyen."
      - "Repos. Côte veau, plat ou planche bois, débarrasser, reposer, viande s’attendrir. Pinceau, mélange persil ail, badigeonner."
      - "Finition. Légumes, glaçage peu fond volaille, beurre. Poêle, chauffer, réduire. Légumes, réchauffer glaçage. Servir chaud."
    kcal_per_serving: 260
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  pesco:
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Côte de veau petits pois carottes

![[cote-de-veau-petits-pois-carottes.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/côte-de-veau-petits-pois-carottes]]

## Ingrédients (4 personnes)

- 800 g de côte de veau
- 4 carotte
- 250 g de petits-pois
- 20 cL de fond de veau
- 1 c.a.s de moutarde de Brive
- 1 gousse d'ail
-  persil frais

## Préparation

1. Écossez les petits pois, puis épluchez et taillez les carottes en petits bâtonnets.
2. Faites cuire les petits pois dans de l’eau bouillante salée jusqu’à ce qu’ils soient tendre. Une fois qu’ils sont cuits, débarrassez les dans de l’eau froide afin de stopper la cuisson et fixer la couleur verte. Conservez l’eau de cuisson pour pouvoir cuire les carottes directement après. Lorsqu’elles sont tendres, débarrassez également les carottes dans de l’eau froide et réservez.
3. Dans une autre casserole, versez le fond de veau et la moutarde de Brive. Mélangez bien et laissez cuire à feu doux pendant quelques minutes.
4. En attendant, placez les gousses d’ail dans le pilon avec un peu de persil frais. Pilez le tout et assaisonnez avec du sel, du poivre et un filet d’huile d’olive.
5. Salez et poivrez la côte veau des deux côtés. Faites la cuire dans une casserole bien chaude avec un filet d’huile d’arachide. Faites la « croûter » à feu vif. Une fois que cette croûte grillée s’est formée, laissez la côte de veau cuire environ 6 minutes de chaque côté à feu moyen.
6. Débarrassez la côté de veau dans un plat ou sur une planche en bois et laissez-la reposer afin que la viande s’attendrisse. À l’aide d’un pinceau, badigeonnez-la de votre mélange de persil et d’ail.
7. Pour les légumes réalisez un glaçage avec un peu de fond de volaille et du beurre. Faites chauffer le tout dans une poêle et laissez réduire. Faites réchauffez les légumes dans ce glaçage avant de servir le tout bien chaud.

 
 

 
 Et voilà, vous avez réalisez une superbe côte de veau aux légumes de printemps. Bon appétit !
