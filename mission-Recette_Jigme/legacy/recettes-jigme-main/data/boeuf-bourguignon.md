---
schema: recette-web-jigme/v2
slug: boeuf-bourguignon
title: Bœuf bourguignon
lang: fr
description: "Bœuf bourguignon : recette française avec paleron de bœuf, champignons de Paris et lard de porc, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- mijoté
- bœuf
- Bourgogne
- hiver
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/boeuf-bourguignon.webp
  alt: Bœuf bourguignon
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/boeuf-bourguignon.md
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
    - from: seitan ou portobello
      to: tofu ferme
      note:
    - from: champignons + seitan
      to: tofu ferme
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    note: 'Contient poisson (cabillaud ferme) : pas d’adaptation fiable.'
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
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: 'Bœuf braisé au vin rouge, lardons, champignons, oignons. Le mot « bourguignon » comme garniture
  vin-champignons apparaît au XIXe s. ; la recette sous ce nom est documentée en 1867 et n’est probablement
  pas un plat régional ancien de Bourgogne. Elle devient un standard de bistrot parisien au XXe s.

  '
fun_facts:
- text: "Julia Child l’a popularisée dans le monde anglophone (*Mastering the Art of French Cooking*)."
  source_name: Wikipedia, Beef bourguignon
  source_url: https://en.wikipedia.org/wiki/Beef_bourguignon
- text: "On braise souvent avec le même type de vin que l’on boit : un Bourgogne village, pas un grand cru."
  source_name: Usage
  source_url:
wines:
- name: Bourgogne Passetoutgrain
  producer: Maison Joseph Drouhin
  origin: Beaune
  grapes: gamay, pinot noir
  award:
  why: Fruit, tanin léger — le ragoût, sans écraser.
- name: Côtes de Nuits-Villages
  producer: Domaine Confuron-Cotetidot
  origin: Vosne-Romanée (négoce villages)
  grapes: pinot noir
  award:
  why: Pinot, sous-bois — champignons et lardons.
- name: Côtes du Rhône Villages
  producer: Domaine de l'Oratoire Saint-Martin
  origin: Cairanne, Rhône
  grapes: grenache, mourvèdre
  award:
  why: Fruit noir, garrigue — si le vin de cuisson est plus sudiste.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 140
      rest_min: 130
      total_min: 300
    equipment: &id002
    - four
    - casserole
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: paleron de bœuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lard de porc
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine torréfiée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1500
      unit: ml
      item: vin rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de veau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez votre paleron de boeuf en gros cubes. N’hésitez pas à retirer toutes les parties
      où il y a trop de graisse. Placez le tout dans un grand récipient avant de vous attaquer
      à la marinade.
    - Cuisson. Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand
      millésime.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la
      marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une
      bonne nuit (idéalement 24h).
    - Marinade. Maintenant que votre préparation a bien mariné, vous allez pouvoir décanter la viande.
      Pour cela, séparez-là de la partie liquide. Épongez l’excédent de vin sur les morceaux
      de boeuf à l’aide d’un papier absorbant. Cela permet d’éviter que votre viande ne crépite
      trop à la cuisson.
    - Cuisson. Faites saisir les morceaux de viande dans une casserole très chaude. Pour cela, tapissez
      le fond avec une première série de morceaux. Ne mélangez pas, afin que la viande rende
      le moins de jus possible. Retournez-là simplement de temps en temps (avec les doigts
      ou à l’aide d’une pince) jusqu’à obtenir un aspect « croûté ». N’hésitez pas à visionner
      la vidéo ci-dessous pour avoir un aperçu du résultat.
    - Cuisson. Pendant ce temps, retirez la couenne et les parties cartilagineuses de votre lard, puis
      découpez-le en lardons.
    - Cuisson. Débarrassez votre viande joliment « croutée » et recommencez avec vos autres morceaux
      jusqu’à ce qu’ils soient tous cuits.
    - Cuisson. Dans la même casserole, faites colorer le lard avec les sucs de cuisson de la viande.
      Pendant ce temps, découpez vos champignons en quatre. Une fois les lardons bien grillés,
      débarrassez et réservez.
    - Cuisson. Dans la même casserole, avec le jus de cuisson de la viande et du lard, déposer vos
      champignons. Ne mélangez pas trop pour qu’ils ne rendent pas d’eau (comme on vous l’explique
      ici). Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez.
    - Cuisson. Il est maintenant temps de faire cuire le reste de la garniture qui se trouvait dans
      la marinade. À l’aide d’un écumoire, récupérez les oignons et les carottes puis déposez-les
      dans votre casserole (toujours la même).
    - Cuisson. Un peu de vin a du se déposer au fond de la casserole pendant cette manipulation, et
      c’est tant mieux ! À l’aide d’une spatule en bois, grattez le fond afin de récupérer
      les sucs de cuisson. On appelle ça « déglacer ».
    - Cuisson. Ajoutez votre viande dans la casserole et mélangez. Complétez avec de la farine torréfiée
      (au four pendant 20 minutes à 180°C). Vous pouvez utiliser de la farine blanche, mais
      vous obtiendrez un bourguignon assez clair.
    - Marinade. Ajoutez le vin de la marinade et mélangez. Si votre préparation n’est pas assez liquide,
      complétez avec du bouillon de veau. Ajoutez le lard et les champignons, puis mettez
      à feu vif. Dès que le mélange arrive à ébullition, transvasez-le dans un plat allant
      au four.
    - Cuisson. Laissez cuir au four à 180°C pendant environ 2h. Votre préparation est couleur chocolat,
      elle a bien réduit et la viande est friable ? C’est que votre boeuf bourguignon est
      prêt ! Et voilà, vous avez préparé un authentique boeuf bourguignon. Un plat à servir
      bien chaud et à déguster en famille le dimanche midi. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez le paleron de boeuf en gros cubes. Retirez les parties trop grasses. Placez le tout dans un grand récipient, avant la marinade."
      - "Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand millésime."
      - "Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une bonne nuit (idéalement 24 h)."
      - "Une fois la préparation bien [[mariner|marinée]], décantez la viande : séparez-la de la partie liquide. Épongez l’excédent de vin sur les morceaux de boeuf avec un papier absorbant, pour éviter qu’ils ne crépitent trop à la cuisson."
      - "Faites saisir les morceaux de viande dans une casserole très chaude. Tapissez le fond d’une première série de morceaux. Ne mélangez pas, pour que la viande rende le moins de jus possible. Retournez-les de temps en temps (avec les doigts ou une pince) jusqu’à un aspect croûté."
      - "Pendant ce temps, retirez la couenne et les parties cartilagineuses du lard, puis découpez-le en lardons."
      - "Débarrassez la viande joliment croûtée et recommencez avec les autres morceaux jusqu’à ce qu’ils soient tous cuits."
      - "Dans la même casserole, faites colorer le lard avec les sucs de cuisson de la viande. Pendant ce temps, découpez les champignons en quatre. Une fois les lardons bien grillés, débarrassez et réservez."
      - "Dans la même casserole, avec le jus de cuisson de la viande et du lard, déposez les champignons. Ne mélangez pas trop, pour qu’ils ne rendent pas d’eau. Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez."
      - "Faites cuire le reste de la garniture de la marinade. Avec une écumoire, récupérez les oignons et les carottes, puis déposez-les dans la même casserole."
      - "Un peu de vin s’est déposé au fond : avec une spatule en bois, grattez le fond pour récupérer les sucs de cuisson ([[deglacer|déglacer]])."
      - "Ajoutez la viande dans la casserole et mélangez. Complétez avec de la farine torréfiée (au four pendant 20 minutes à 180 °C). Vous pouvez utiliser de la farine blanche : le bourguignon sera assez clair."
      - "Ajoutez le vin de la marinade et mélangez. Si la préparation n’est pas assez liquide, complétez avec du bouillon de veau. Ajoutez le lard et les champignons, puis mettez à feu vif. Dès l’ébullition, transvasez dans un plat allant au four."
      - "Laissez cuire au four à 180 °C pendant environ 2 h. Quand la préparation est couleur chocolat, bien [[reduire|réduite]] et que la viande est friable, c’est prêt. Servez bien chaud."
      pro:
      - "Couper le paleron de boeuf en gros cubes. Retirer les parties trop grasses. Placer dans un grand récipient, avant la marinade."
      - "Ajouter du vin rouge à hauteur. Vin de choix, pas un grand millésime."
      - "Éplucher et couper grossièrement les carottes et les oignons. Les ajouter à la marinade. Laurier, thym. Reposer une bonne nuit (idéalement 24 h)."
      - "Décanter la viande : séparer de la partie liquide. Éponger l’excédent de vin sur les morceaux de boeuf au papier absorbant, pour limiter le crépitement."
      - "Saisir les morceaux de viande dans une casserole très chaude. Tapisser le fond d’une première série. Ne pas mélanger, pour limiter le jus. Retourner de temps en temps (doigts ou pince) jusqu’à aspect croûté."
      - "Retirer la couenne et les parties cartilagineuses du lard. Tailler en lardons."
      - "Débarrasser la viande croûtée. Recommencer avec les autres morceaux jusqu’à ce qu’ils soient tous cuits."
      - "Même casserole : colorer le lard avec les sucs de la viande. Couper les champignons en quatre. Lardons bien grillés : débarrasser, réserver."
      - "Même casserole, jus de viande et de lard : déposer les champignons. Ne pas trop mélanger, pour qu’ils ne rendent pas d’eau. Assaisonner. Cuits : débarrasser, réserver."
      - "Garniture de la marinade : à l’écumoire, récupérer oignons et carottes. Déposer dans la même casserole."
      - "Vin au fond : spatule en bois, gratter pour récupérer les sucs (déglacer)."
      - "Ajouter la viande, mélanger. Farine torréfiée (four 20 minutes à 180 °C). Farine blanche possible : bourguignon assez clair."
      - "Ajouter le vin de la marinade, mélanger. Si ce n’est pas assez liquide : bouillon de veau. Ajouter le lard et les champignons. Feu vif. À ébullition : transvaser dans un plat allant au four."
      - "Four 180 °C environ 2 h. Couleur chocolat, bien réduit, viande friable : prêt. Servir bien chaud."
      cavernes:
      - "Paleron de boeuf : gros cubes. Parties trop grasses : retirer. Grand récipient, avant marinade."
      - "Vin rouge à hauteur. Vin de choix, pas grand millésime."
      - "Carottes, oignons : éplucher, couper gros, marinade. Feuilles laurier, thym. Reposer bonne nuit (idéalement 24 h)."
      - "Préparation marinée : décanter viande, séparer partie liquide. Excédent vin : éponger papier absorbant. Moins crépiter."
      - "Casserole très chaude : saisir viande. Première série, tapisser fond. Pas mélanger, moins jus. Retourner de temps en temps (doigts ou pince) jusqu’à croûté."
      - "Lard : retirer couenne, parties cartilagineuses, lardons."
      - "Viande croûtée : débarrasser. Autres morceaux : recommencer jusqu’à tous cuits."
      - "Même casserole : lard colorer sucs viande. Champignons : couper en quatre. Lardons bien grillés : débarrasser, réserver."
      - "Même casserole, jus viande et lard : champignons. Pas trop mélanger, zéro eau. Assaisonner. Cuits : débarrasser, réserver."
      - "Garniture marinade : écumoire, oignons, carottes, même casserole."
      - "Vin fond casserole. Spatule bois : gratter fond, sucs. Déglacer."
      - "Viande : casserole, mélanger. Farine torréfiée (four 20 minutes 180 °C). Farine blanche possible : bourguignon assez clair."
      - "Vin marinade : ajouter, mélanger. Pas assez liquide : bouillon de veau. Lard, champignons. Feu vif. Ébullition : transvaser plat four."
      - "Four 180 °C environ 2 h. Couleur chocolat, bien réduit, viande friable : prêt. Servir chaud."
    kcal_per_serving: 797
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
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: seitan ou portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: lardons de tempeh fumé
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine torréfiée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1500
      unit: ml
      item: vin rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez le seitan ou les portobellos en gros cubes. Placez-les dans un grand récipient avant de vous attaquer
      à la marinade.
    - Cuisson. Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand
      millésime.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la
      marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une
      bonne nuit (idéalement 24h).
    - Marinade. Maintenant que votre préparation a bien mariné, vous allez pouvoir décanter le seitan. Séparez-le de la partie liquide. Épongez l’excédent de vin sur les morceaux
      de seitan à l’aide d’un papier absorbant. Cela permet d’éviter que le seitan ne crépite
      trop à la cuisson.
    - Cuisson. Faites saisir les morceaux de seitan dans une casserole très chaude. Pour cela, tapissez
      le fond avec une première série de morceaux. Ne mélangez pas, afin que le seitan rende
      le moins de jus possible. Retournez-là simplement de temps en temps (avec les doigts
      ou à l’aide d’une pince) jusqu’à obtenir un aspect « croûté ». N’hésitez pas à visionner
      la vidéo ci-dessous pour avoir un aperçu du résultat.
    - Cuisson. Pendant ce temps, découpez le tempeh fumé en lardons.
    - Cuisson. Débarrassez le seitan joliment croûté et recommencez avec les autres morceaux
      jusqu’à ce qu’ils soient tous cuits.
    - Cuisson. Dans la même casserole, faites colorer les lardons de tempeh avec les sucs de cuisson.
      Pendant ce temps, découpez vos champignons en quatre. Une fois les lardons bien grillés,
      débarrassez et réservez.
    - Cuisson. Dans la même casserole, avec le jus de cuisson du seitan et du tempeh, déposez vos champignons. Ne mélangez pas trop pour qu’ils ne rendent pas d’eau (comme on vous l’explique
      ici). Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez.
    - Cuisson. Il est maintenant temps de faire cuire le reste de la garniture qui se trouvait dans
      la marinade. À l’aide d’un écumoire, récupérez les oignons et les carottes puis déposez-les
      dans votre casserole (toujours la même).
    - Cuisson. Un peu de vin a du se déposer au fond de la casserole pendant cette manipulation, et
      c’est tant mieux ! À l’aide d’une spatule en bois, grattez le fond afin de récupérer
      les sucs de cuisson. On appelle ça « déglacer ».
    - Cuisson. Ajoutez le seitan dans la casserole et mélangez. Complétez avec de la farine torréfiée
      (au four pendant 20 minutes à 180°C). Vous pouvez utiliser de la farine blanche, mais
      vous obtiendrez un bourguignon assez clair.
    - Marinade. Ajoutez le vin de la marinade et mélangez. Si votre préparation n’est pas assez liquide,
      complétez avec du fond de légumes. Ajoutez le tempeh et les champignons, puis mettez
      à feu vif. Dès que le mélange arrive à ébullition, transvasez-le dans un plat allant
      au four.
    - Cuisson. Laissez cuir au four à 180°C pendant environ 2h. Votre préparation est couleur chocolat,
      elle a bien réduit et le seitan est fondant ? C’est prêt ! Et voilà, vous avez préparé un mijoté au seitan
      bien chaud et à déguster en famille le dimanche midi. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez le seitan ou les portobellos en gros cubes. Placez-les dans un grand récipient, avant la marinade."
      - "Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand millésime."
      - "Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une bonne nuit (idéalement 24 h)."
      - "Une fois la préparation bien [[mariner|marinée]], décantez le seitan : séparez-le de la partie liquide. Épongez l’excédent de vin sur les morceaux de seitan avec un papier absorbant, pour éviter qu’ils ne crépitent trop à la cuisson."
      - "Faites saisir les morceaux de seitan dans une casserole très chaude. Tapissez le fond d’une première série de morceaux. Ne mélangez pas, pour que le seitan rende le moins de jus possible. Retournez-les de temps en temps (avec les doigts ou une pince) jusqu’à un aspect croûté."
      - "Pendant ce temps, découpez le tempeh fumé en lardons."
      - "Débarrassez le seitan joliment croûté et recommencez avec les autres morceaux jusqu’à ce qu’ils soient tous cuits."
      - "Dans la même casserole, faites colorer les lardons de tempeh avec les sucs de cuisson. Pendant ce temps, découpez les champignons en quatre. Une fois les lardons bien grillés, débarrassez et réservez."
      - "Dans la même casserole, avec le jus de cuisson du seitan et du tempeh, déposez les champignons. Ne mélangez pas trop, pour qu’ils ne rendent pas d’eau. Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez."
      - "Faites cuire le reste de la garniture de la marinade. Avec une écumoire, récupérez les oignons et les carottes, puis déposez-les dans la même casserole."
      - "Un peu de vin s’est déposé au fond : avec une spatule en bois, grattez le fond pour récupérer les sucs de cuisson ([[deglacer|déglacer]])."
      - "Ajoutez le seitan dans la casserole et mélangez. Complétez avec de la farine torréfiée (au four pendant 20 minutes à 180 °C). Vous pouvez utiliser de la farine blanche : le bourguignon sera assez clair."
      - "Ajoutez le vin de la marinade et mélangez. Si la préparation n’est pas assez liquide, complétez avec du fond de légumes. Ajoutez le tempeh et les champignons, puis mettez à feu vif. Dès l’ébullition, transvasez dans un plat allant au four."
      - "Laissez cuire au four à 180 °C pendant environ 2 h. Quand la préparation est couleur chocolat, bien [[reduire|réduite]] et que le seitan est fondant, c’est prêt. Servez bien chaud."
      pro:
      - "Couper le seitan ou les portobellos en gros cubes. Placer dans un grand récipient, avant la marinade."
      - "Ajouter du vin rouge à hauteur. Vin de choix, pas un grand millésime."
      - "Éplucher et couper grossièrement les carottes et les oignons. Les ajouter à la marinade. Laurier, thym. Reposer une bonne nuit (idéalement 24 h)."
      - "Décanter le seitan : séparer de la partie liquide. Éponger l’excédent de vin sur les morceaux de seitan au papier absorbant, pour limiter le crépitement."
      - "Saisir les morceaux de seitan dans une casserole très chaude. Tapisser le fond d’une première série. Ne pas mélanger, pour limiter le jus. Retourner de temps en temps (doigts ou pince) jusqu’à aspect croûté."
      - "Tailler le tempeh fumé en lardons."
      - "Débarrasser le seitan croûté. Recommencer avec les autres morceaux jusqu’à ce qu’ils soient tous cuits."
      - "Même casserole : colorer les lardons de tempeh avec les sucs. Couper les champignons en quatre. Lardons bien grillés : débarrasser, réserver."
      - "Même casserole, jus de seitan et de tempeh : déposer les champignons. Ne pas trop mélanger, pour qu’ils ne rendent pas d’eau. Assaisonner. Cuits : débarrasser, réserver."
      - "Garniture de la marinade : à l’écumoire, récupérer oignons et carottes. Déposer dans la même casserole."
      - "Vin au fond : spatule en bois, gratter pour récupérer les sucs (déglacer)."
      - "Ajouter le seitan, mélanger. Farine torréfiée (four 20 minutes à 180 °C). Farine blanche possible : bourguignon assez clair."
      - "Ajouter le vin de la marinade, mélanger. Si ce n’est pas assez liquide : fond de légumes. Ajouter le tempeh et les champignons. Feu vif. À ébullition : transvaser dans un plat allant au four."
      - "Four 180 °C environ 2 h. Couleur chocolat, bien réduit, seitan fondant : prêt. Servir bien chaud."
      cavernes:
      - "Seitan ou portobellos : gros cubes. Grand récipient, avant marinade."
      - "Vin rouge à hauteur. Vin de choix, pas grand millésime."
      - "Carottes, oignons : éplucher, couper gros, marinade. Feuilles laurier, thym. Reposer bonne nuit (idéalement 24 h)."
      - "Préparation marinée : décanter seitan, séparer partie liquide. Excédent vin : éponger papier absorbant. Moins crépiter."
      - "Casserole très chaude : saisir seitan. Première série, tapisser fond. Pas mélanger, moins jus. Retourner de temps en temps (doigts ou pince) jusqu’à croûté."
      - "Tempeh fumé : lardons."
      - "Seitan croûté : débarrasser. Autres morceaux : recommencer jusqu’à tous cuits."
      - "Même casserole : lardons de tempeh colorer sucs. Champignons : couper en quatre. Lardons bien grillés : débarrasser, réserver."
      - "Même casserole, jus seitan et tempeh : champignons. Pas trop mélanger, zéro eau. Assaisonner. Cuits : débarrasser, réserver."
      - "Garniture marinade : écumoire, oignons, carottes, même casserole."
      - "Vin fond casserole. Spatule bois : gratter fond, sucs. Déglacer."
      - "Seitan : casserole, mélanger. Farine torréfiée (four 20 minutes 180 °C). Farine blanche possible : bourguignon assez clair."
      - "Vin marinade : ajouter, mélanger. Pas assez liquide : fond de légumes. Tempeh, champignons. Feu vif. Ébullition : transvaser plat four."
      - "Four 180 °C environ 2 h. Couleur chocolat, bien réduit, seitan fondant : prêt. Servir chaud."
    kcal_per_serving: 980
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit: vegetarienne
    servings_base: 4
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
    ingredients: []
    steps: []
    kcal_per_serving: 980
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
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 600
      unit: g
      item: cabillaud ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: dés de saumon fumé
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
    - qty: 3
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine torréfiée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1500
      unit: ml
      item: vin rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: laurier
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez votre paleron de boeuf en gros cubes. N’hésitez pas à retirer toutes les parties
      où il y a trop de graisse. Placez le tout dans un grand récipient avant de vous attaquer
      à la marinade.
    - Cuisson. Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand
      millésime.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la
      marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une
      bonne nuit (idéalement 24h).
    - Marinade. Maintenant que votre préparation a bien mariné, vous allez pouvoir décanter la viande.
      Pour cela, séparez-là de la partie liquide. Épongez l’excédent de vin sur les morceaux
      de boeuf à l’aide d’un papier absorbant. Cela permet d’éviter que votre viande ne crépite
      trop à la cuisson.
    - Cuisson. Faites saisir les morceaux de viande dans une casserole très chaude. Pour cela, tapissez
      le fond avec une première série de morceaux. Ne mélangez pas, afin que la viande rende
      le moins de jus possible. Retournez-là simplement de temps en temps (avec les doigts
      ou à l’aide d’une pince) jusqu’à obtenir un aspect « croûté ». N’hésitez pas à visionner
      la vidéo ci-dessous pour avoir un aperçu du résultat.
    - Cuisson. Pendant ce temps, retirez la couenne et les parties cartilagineuses de votre lard, puis
      découpez-le en lardons.
    - Cuisson. Débarrassez votre viande joliment « croutée » et recommencez avec vos autres morceaux
      jusqu’à ce qu’ils soient tous cuits.
    - Cuisson. Dans la même casserole, faites colorer le lard avec les sucs de cuisson de la viande.
      Pendant ce temps, découpez vos champignons en quatre. Une fois les lardons bien grillés,
      débarrassez et réservez.
    - Cuisson. Dans la même casserole, avec le jus de cuisson de la viande et du lard, déposer vos
      champignons. Ne mélangez pas trop pour qu’ils ne rendent pas d’eau (comme on vous l’explique
      ici). Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez.
    - Cuisson. Il est maintenant temps de faire cuire le reste de la garniture qui se trouvait dans
      la marinade. À l’aide d’un écumoire, récupérez les oignons et les carottes puis déposez-les
      dans votre casserole (toujours la même).
    - Cuisson. Un peu de vin a du se déposer au fond de la casserole pendant cette manipulation, et
      c’est tant mieux ! À l’aide d’une spatule en bois, grattez le fond afin de récupérer
      les sucs de cuisson. On appelle ça « déglacer ».
    - Cuisson. Ajoutez votre viande dans la casserole et mélangez. Complétez avec de la farine torréfiée
      (au four pendant 20 minutes à 180°C). Vous pouvez utiliser de la farine blanche, mais
      vous obtiendrez un bourguignon assez clair.
    - Marinade. Ajoutez le vin de la marinade et mélangez. Si votre préparation n’est pas assez liquide,
      complétez avec du bouillon de veau. Ajoutez le lard et les champignons, puis mettez
      à feu vif. Dès que le mélange arrive à ébullition, transvasez-le dans un plat allant
      au four.
    - Cuisson. Laissez cuir au four à 180°C pendant environ 2h. Votre préparation est couleur chocolat,
      elle a bien réduit et la viande est friable ? C’est que votre boeuf bourguignon est
      prêt ! Et voilà, vous avez préparé un authentique boeuf bourguignon. Un plat à servir
      bien chaud et à déguster en famille le dimanche midi. Bon appétit !
    steps_niveaux:
      amateur:
      - "Coupez le paleron de boeuf en gros cubes. Retirez les parties trop grasses. Placez le tout dans un grand récipient, avant la marinade."
      - "Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand millésime."
      - "Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une bonne nuit (idéalement 24 h)."
      - "Une fois la préparation bien [[mariner|marinée]], décantez la viande : séparez-la de la partie liquide. Épongez l’excédent de vin sur les morceaux de boeuf avec un papier absorbant, pour éviter qu’ils ne crépitent trop à la cuisson."
      - "Faites saisir les morceaux de viande dans une casserole très chaude. Tapissez le fond d’une première série de morceaux. Ne mélangez pas, pour que la viande rende le moins de jus possible. Retournez-les de temps en temps (avec les doigts ou une pince) jusqu’à un aspect croûté."
      - "Pendant ce temps, retirez la couenne et les parties cartilagineuses du lard, puis découpez-le en lardons."
      - "Débarrassez la viande joliment croûtée et recommencez avec les autres morceaux jusqu’à ce qu’ils soient tous cuits."
      - "Dans la même casserole, faites colorer le lard avec les sucs de cuisson de la viande. Pendant ce temps, découpez les champignons en quatre. Une fois les lardons bien grillés, débarrassez et réservez."
      - "Dans la même casserole, avec le jus de cuisson de la viande et du lard, déposez les champignons. Ne mélangez pas trop, pour qu’ils ne rendent pas d’eau. Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez."
      - "Faites cuire le reste de la garniture de la marinade. Avec une écumoire, récupérez les oignons et les carottes, puis déposez-les dans la même casserole."
      - "Un peu de vin s’est déposé au fond : avec une spatule en bois, grattez le fond pour récupérer les sucs de cuisson ([[deglacer|déglacer]])."
      - "Ajoutez la viande dans la casserole et mélangez. Complétez avec de la farine torréfiée (au four pendant 20 minutes à 180 °C). Vous pouvez utiliser de la farine blanche : le bourguignon sera assez clair."
      - "Ajoutez le vin de la marinade et mélangez. Si la préparation n’est pas assez liquide, complétez avec du bouillon de veau. Ajoutez le lard et les champignons, puis mettez à feu vif. Dès l’ébullition, transvasez dans un plat allant au four."
      - "Laissez cuire au four à 180 °C pendant environ 2 h. Quand la préparation est couleur chocolat, bien [[reduire|réduite]] et que la viande est friable, c’est prêt. Servez bien chaud."
      pro:
      - "Couper le paleron de boeuf en gros cubes. Retirer les parties trop grasses. Placer dans un grand récipient, avant la marinade."
      - "Ajouter du vin rouge à hauteur. Vin de choix, pas un grand millésime."
      - "Éplucher et couper grossièrement les carottes et les oignons. Les ajouter à la marinade. Laurier, thym. Reposer une bonne nuit (idéalement 24 h)."
      - "Décanter la viande : séparer de la partie liquide. Éponger l’excédent de vin sur les morceaux de boeuf au papier absorbant, pour limiter le crépitement."
      - "Saisir les morceaux de viande dans une casserole très chaude. Tapisser le fond d’une première série. Ne pas mélanger, pour limiter le jus. Retourner de temps en temps (doigts ou pince) jusqu’à aspect croûté."
      - "Retirer la couenne et les parties cartilagineuses du lard. Tailler en lardons."
      - "Débarrasser la viande croûtée. Recommencer avec les autres morceaux jusqu’à ce qu’ils soient tous cuits."
      - "Même casserole : colorer le lard avec les sucs de la viande. Couper les champignons en quatre. Lardons bien grillés : débarrasser, réserver."
      - "Même casserole, jus de viande et de lard : déposer les champignons. Ne pas trop mélanger, pour qu’ils ne rendent pas d’eau. Assaisonner. Cuits : débarrasser, réserver."
      - "Garniture de la marinade : à l’écumoire, récupérer oignons et carottes. Déposer dans la même casserole."
      - "Vin au fond : spatule en bois, gratter pour récupérer les sucs (déglacer)."
      - "Ajouter la viande, mélanger. Farine torréfiée (four 20 minutes à 180 °C). Farine blanche possible : bourguignon assez clair."
      - "Ajouter le vin de la marinade, mélanger. Si ce n’est pas assez liquide : bouillon de veau. Ajouter le lard et les champignons. Feu vif. À ébullition : transvaser dans un plat allant au four."
      - "Four 180 °C environ 2 h. Couleur chocolat, bien réduit, viande friable : prêt. Servir bien chaud."
      cavernes:
      - "Paleron de boeuf : gros cubes. Parties trop grasses : retirer. Grand récipient, avant marinade."
      - "Vin rouge à hauteur. Vin de choix, pas grand millésime."
      - "Carottes, oignons : éplucher, couper gros, marinade. Feuilles laurier, thym. Reposer bonne nuit (idéalement 24 h)."
      - "Préparation marinée : décanter viande, séparer partie liquide. Excédent vin : éponger papier absorbant. Moins crépiter."
      - "Casserole très chaude : saisir viande. Première série, tapisser fond. Pas mélanger, moins jus. Retourner de temps en temps (doigts ou pince) jusqu’à croûté."
      - "Lard : retirer couenne, parties cartilagineuses, lardons."
      - "Viande croûtée : débarrasser. Autres morceaux : recommencer jusqu’à tous cuits."
      - "Même casserole : lard colorer sucs viande. Champignons : couper en quatre. Lardons bien grillés : débarrasser, réserver."
      - "Même casserole, jus viande et lard : champignons. Pas trop mélanger, zéro eau. Assaisonner. Cuits : débarrasser, réserver."
      - "Garniture marinade : écumoire, oignons, carottes, même casserole."
      - "Vin fond casserole. Spatule bois : gratter fond, sucs. Déglacer."
      - "Viande : casserole, mélanger. Farine torréfiée (four 20 minutes 180 °C). Farine blanche possible : bourguignon assez clair."
      - "Vin marinade : ajouter, mélanger. Pas assez liquide : bouillon de veau. Lard, champignons. Feu vif. Ébullition : transvaser plat four."
      - "Four 180 °C environ 2 h. Couleur chocolat, bien réduit, viande friable : prêt. Servir chaud."
    kcal_per_serving: 698
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  pesco:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
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

# Bœuf bourguignon

![[boeuf-bourguignon.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/boeuf-bourguignon]]

## Ingrédients (4 personnes)

- 600 g de paleron de bœuf
- 300 g de champignons de Paris
- 150 g de lard de porc
- 2 oignon
- 3 carotte
- 40 g de farine torréfiée
- 1.5 L de vin rouge
- 1 L de fond de veau
-  thym
-  laurier

## Préparation

1. Coupez votre paleron de boeuf en gros cubes. N’hésitez pas à retirer toutes les parties où il y a trop de graisse. Placez le tout dans un grand récipient avant de vous attaquer à la marinade.
2. Ajoutez du vin rouge à hauteur. Choisissez le vin de votre choix, pas besoin d’un grand millésime.
3. Épluchez et coupez grossièrement les carottes et les oignons, puis ajoutez-les à la marinade. Finalisez avec quelques feuilles de laurier et du thym. Laissez reposer une bonne nuit (idéalement 24h).
4. Maintenant que votre préparation a bien mariné, vous allez pouvoir décanter la viande. Pour cela, séparez-là de la partie liquide. Épongez l’excédent de vin sur les morceaux de boeuf à l’aide d’un papier absorbant. Cela permet d’éviter que votre viande ne crépite trop à la cuisson.
5. Faites saisir les morceaux de viande dans une casserole très chaude. Pour cela, tapissez le fond avec une première série de morceaux. Ne mélangez pas, afin que la viande rende le moins de jus possible. Retournez-là simplement de temps en temps (avec les doigts ou à l’aide d’une pince) jusqu’à obtenir un aspect « croûté ». N’hésitez pas à visionner la vidéo ci-dessous pour avoir un aperçu du résultat.
6. Pendant ce temps, retirez la couenne et les parties cartilagineuses de votre lard, puis découpez-le en lardons.
7. Débarrassez votre viande joliment « croutée » et recommencez avec vos autres morceaux jusqu’à ce qu’ils soient tous cuits.
8. Dans la même casserole, faites colorer le lard avec les sucs de cuisson de la viande. Pendant ce temps, découpez vos champignons en quatre. Une fois les lardons bien grillés, débarrassez et réservez.
9. Dans la même casserole, avec le jus de cuisson de la viande et du lard, déposer vos champignons. Ne mélangez pas trop pour qu’ils ne rendent pas d’eau (comme on vous l’explique ici). Assaisonnez selon vos goûts. Quand ils sont cuits, débarrassez et réservez.
10. Il est maintenant temps de faire cuire le reste de la garniture qui se trouvait dans la marinade. À l’aide d’un écumoire, récupérez les oignons et les carottes puis déposez-les dans votre casserole (toujours la même).
11. Un peu de vin a du se déposer au fond de la casserole pendant cette manipulation, et c’est tant mieux ! À l’aide d’une spatule en bois, grattez le fond afin de récupérer les sucs de cuisson. On appelle ça « déglacer ».
12. Ajoutez votre viande dans la casserole et mélangez. Complétez avec de la farine torréfiée (au four pendant 20 minutes à 180°C). Vous pouvez utiliser de la farine blanche, mais vous obtiendrez un bourguignon assez clair.
13. Ajoutez le vin de la marinade et mélangez. Si votre préparation n’est pas assez liquide, complétez avec du bouillon de veau. Ajoutez le lard et les champignons, puis mettez à feu vif. Dès que le mélange arrive à ébullition, transvasez-le dans un plat allant au four.
14. Laissez cuir au four à 180°C pendant environ 2h. Votre préparation est couleur chocolat, elle a bien réduit et la viande est friable ? C’est que votre boeuf bourguignon est prêt !

 
 

 
 Et voilà, vous avez préparé un authentique boeuf bourguignon. Un plat à servir bien chaud et à déguster en famille le dimanche midi. Bon appétit !

 
