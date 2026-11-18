---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: yakitori-boeuf-fromage
title: Yakitori bœuf fromage
lang: fr
description: "Yakitori bœuf fromage : recette japonaise avec pics à brochette, emmental et viande de boeuf, pour 4 personnes. Version maison."
cuisine: japonaise
category: salé
tags:
- salé
- bœuf
- plat
- pics à brochette
image:
  url:
  alt: Yakitori bœuf fromage
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/yakitori-boeuf-fromage.md
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
    - from: sauce soja salée
      to: tamari sans gluten
      note:
    - from: seitan ou portobello
      to: tofu ferme
      note:
    note: 'Gluten : sauce soja salée → tamari sans gluten ; seitan ou portobello → tofu ferme.'
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
    - from: emmental
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
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
histoire: 'Yakitori : « oiseau grillé », brochettes de poulet au charbon. Ici, bœuf et fromage : fusion,
  pas un yakitori de comptoir tokyoïte. Le geste (brochette, braise ou gril) reste japonais.

  '
fun_facts:
- text: >
    Le fromage fond : trop longtemps, il coule dans le feu ; on le met à la fin
    ou on le cale.
  source_name: Usage
  source_url:
- text: >
    Une sauce tare (soja sucré) nappe en fin de cuisson, pas au début (ça brûle).
  source_name: Grokipedia, Yakitori
  source_url: https://grokipedia.com/page/Yakitori
wines:
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — le bœuf en brochette, tanin court.
- name: Côtes du Rhône
  producer: Domaine Fond Croze
  origin: Tulette, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, poivre — le fromage grillé, tanin souple.
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire — si la tare sucrée domine, un blanc légèrement sucré.
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
    - soja
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 15
      rest_min: 0
      total_min: 55
    equipment: &id002
    - poêle
    - saladier
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 14
      unit: piece
      item: pics à brochette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: emmental
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: viande de boeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citron
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron
      jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez
      à l’aide d’un fouet. Réservez.
    - Cuisson. Découpez des rectangles d’emmental d’environ 1cm d’épaisseur, puis faites les glisser
      le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le
      geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous.
    - Cuisson. Découpez de fines lamelles de viande, comme pour un carpaccio, et enroulez-les autour
      du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat
      à bords hauts et recouvrez-les de marinade. Laissez-les mariner pendant 1h au frigo,
      en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés
      dans la sauce.
    - Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille
      de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez
      les brochettes quand la viande commence à être colorée. Elles sont prêtes quand les
      deux côtés sont dorés et que le fromage au centre est fondant. Servez vos yakitori bien
      chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner
      de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez à l’aide d’un fouet. Réservez."
      - "Cuisson. Découpez des rectangles d’emmental d’environ 1cm d’épaisseur, puis faites les glisser le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous."
      - "Cuisson. Découpez de fines lamelles de viande, comme pour un carpaccio, et enroulez-les autour du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat à bords hauts et recouvrez-les de marinade. [[mariner|Laissez-les mariner]] pendant 1h au frigo, en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés dans la sauce."
      - "Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez les brochettes quand la viande commence à être colorée. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant. Servez vos yakitori bien chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !"
      pro:
      - "Préparer la marinade : dans un bol, verser le miel et le jus d’un demi citron jaune. Saler, poivrer. Compléter avec la sauce soja salée. Mélanger au fouet. Réserver."
      - "Découper des rectangles d’emmental d’environ 1cm d’épaisseur. Les faire glisser le long d’un pic à brochette, dans le sens de la longueur."
      - "Découper de fines lamelles de viande, comme pour un carpaccio. Enrouler autour du fromage. Reproduire pour toutes les brochettes. Plat à bords hauts, recouvrir de marinade. Mariner 1 h au frigo, retourner au bout d’environ 30 minutes, deux côtés trempés."
      - "Cuire les brochettes à la poêle, filet d’huile végétale. Feu pas trop fort, afin que le fromage ait le temps de fondre. Retourner quand la viande commence à être colorée. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant. Servir bien chaudes, fromage encore fondant. Accompagner de la marinade utilisée."
      cavernes:
      - "Marinade. Bol. Miel, jus demi citron jaune, verser. Sel, poivre. Sauce soja salée, compléter. Fouet, mélanger. Réserver."
      - "Cuisson. Rectangles emmental, environ 1cm épaisseur, découper. Pic brochette, longueur, glisser. Geste : vidéo Marc."
      - "Cuisson. Fines lamelles viande, comme carpaccio, découper. Fromage, enrouler. Toutes brochettes, même. Plat bords hauts, placer. Marinade, recouvrir. Frigo, 1h, mariner. Environ 30 min, retourner. Deux côtés, sauce, trempés."
      - "Finition. Brochettes, poêle, filet huile végétale, cuire. Feu pas trop fort. Fromage, temps fondre. Viande commence colorée, retourner. Prêt : deux côtés dorés, fromage centre fondant. Yakitori bien chaudes, servir. Fromage encore fondant, dévorer. Marinade utilisée, accompagner."
    kcal_per_serving: 281
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 14
      unit: piece
      item: pics à brochette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: emmental (présure microbienne)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: seitan ou portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citron
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron
      jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez
      à l’aide d’un fouet. Réservez.
    - Cuisson. Découpez des rectangles d’emmental (présure microbienne) d’environ 1cm d’épaisseur, puis faites les glisser
      le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le
      geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous.
    - Cuisson. Découpez de fines lamelles de seitan (ou de portobello), comme pour un carpaccio, et enroulez-les autour du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat
      à bords hauts et recouvrez-les de marinade. Laissez-les mariner pendant 1h au frigo,
      en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés
      dans la sauce.
    - Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille
      de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez les brochettes quand le seitan commence à être coloré. Elles sont prêtes quand les
      deux côtés sont dorés et que le fromage au centre est fondant. Servez vos yakitori bien
      chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner
      de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez à l’aide d’un fouet. Réservez."
      - "Cuisson. Découpez des rectangles d’emmental (présure microbienne) d’environ 1cm d’épaisseur, puis faites les glisser le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous."
      - "Cuisson. Découpez de fines lamelles de seitan (ou de portobello), comme pour un carpaccio, et enroulez-les autour du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat à bords hauts et recouvrez-les de marinade. [[mariner|Laissez-les mariner]] pendant 1h au frigo, en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés dans la sauce."
      - "Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez les brochettes quand le seitan commence à être coloré. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant. Servez vos yakitori bien chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !"
      pro:
      - "Préparer la marinade : dans un bol, verser le miel et le jus d’un demi citron jaune. Saler, poivrer. Compléter avec la sauce soja salée. Mélanger au fouet. Réserver."
      - "Découper des rectangles d’emmental (présure microbienne) d’environ 1cm d’épaisseur. Les faire glisser le long d’un pic à brochette, dans le sens de la longueur."
      - "Découper de fines lamelles de seitan (ou de portobello), comme pour un carpaccio. Enrouler autour du fromage. Reproduire pour toutes les brochettes. Plat à bords hauts, recouvrir de marinade. Mariner 1 h au frigo, retourner au bout d’environ 30 minutes, deux côtés trempés."
      - "Cuire les brochettes à la poêle, filet d’huile végétale. Feu pas trop fort, afin que le fromage ait le temps de fondre. Retourner quand le seitan commence à être coloré. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant. Servir bien chaudes, fromage encore fondant. Accompagner de la marinade utilisée."
      cavernes:
      - "Marinade. Bol. Miel, jus demi citron jaune, verser. Sel, poivre. Sauce soja salée, compléter. Fouet, mélanger. Réserver."
      - "Cuisson. Rectangles emmental présure microbienne, environ 1cm épaisseur, découper. Pic brochette, longueur, glisser. Geste : vidéo Marc."
      - "Cuisson. Fines lamelles seitan ou portobello, comme carpaccio, découper. Fromage, enrouler. Toutes brochettes, même. Plat bords hauts, placer. Marinade, recouvrir. Frigo, 1h, mariner. Environ 30 min, retourner. Deux côtés, sauce, trempés."
      - "Finition. Brochettes, poêle, filet huile végétale, cuire. Feu pas trop fort. Fromage, temps fondre. Seitan commence coloré, retourner. Prêt : deux côtés dorés, fromage centre fondant. Yakitori bien chaudes, servir. Fromage encore fondant, dévorer. Marinade utilisée, accompagner."
    kcal_per_serving: 272
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 14
      unit: piece
      item: pics à brochette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: parmesan végétal ou levure maltée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: seitan ou portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: sirop d'érable ou agave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citron
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparez d’abord la marinade. Dans un bol, versez le sirop d'érable ou agave et le jus
      d’un demi citron jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja
      salée, puis mélangez à l’aide d’un fouet. Réservez.
    - Cuisson. Découpez des rectangles d’parmesan végétal ou levure maltée d’environ 1cm d’épaisseur,
      puis faites les glisser le long d’un pic à brochette (dans le sens de la longueur).
      Pour bien visualiser le geste, n’hésitez pas à regarder comment Marc fait dans la vidéo
      ci-dessous.
    - Cuisson. Découpez de fines lamelles de seitan ou de portobello et enroulez-les autour du fromage végétal. Faites de même pour toutes les brochettes, puis placez-les dans un plat
      à bords hauts et recouvrez-les de marinade. Laissez-les mariner pendant 1h au frigo,
      en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés
      dans la sauce.
    - Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille
      de ne pas mettre le feu trop fort, afin que le fromage végétal fonde. Retournez quand le seitan est coloré. C’est prêt quand les deux côtés sont dorés. Servez vos yakitori bien
      chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner
      de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparez d’abord la marinade. Dans un bol, versez le sirop d'érable ou agave et le jus d’un demi citron jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez à l’aide d’un fouet. Réservez."
      - "Cuisson. Découpez des rectangles d’parmesan végétal ou levure maltée d’environ 1cm d’épaisseur, puis faites les glisser le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous."
      - "Cuisson. Découpez de fines lamelles de seitan ou de portobello, et enroulez-les autour du fromage végétal. Faites de même pour toutes les brochettes, puis placez-les dans un plat à bords hauts et recouvrez-les de marinade. [[mariner|Laissez-les mariner]] pendant 1h au frigo, en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés dans la sauce."
      - "Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille de ne pas mettre le feu trop fort, afin que le fromage végétal fonde. Retournez les brochettes quand le seitan est coloré. C’est prêt quand les deux côtés sont dorés. Servez vos yakitori bien chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !"
      pro:
      - "Préparer la marinade : dans un bol, verser le sirop d'érable ou agave et le jus d’un demi citron jaune. Saler, poivrer. Compléter avec la sauce soja salée. Mélanger au fouet. Réserver."
      - "Découper des rectangles d’parmesan végétal ou levure maltée d’environ 1cm d’épaisseur. Les faire glisser le long d’un pic à brochette, dans le sens de la longueur."
      - "Découper de fines lamelles de seitan ou de portobello. Enrouler autour du fromage végétal. Reproduire pour toutes les brochettes. Plat à bords hauts, recouvrir de marinade. Mariner 1 h au frigo, retourner au bout d’environ 30 minutes, deux côtés trempés."
      - "Cuire les brochettes à la poêle, filet d’huile végétale. Feu pas trop fort, afin que le fromage végétal fonde. Retourner quand le seitan est coloré. C’est prêt quand les deux côtés sont dorés. Servir bien chaudes, fromage encore fondant. Accompagner de la marinade utilisée."
      cavernes:
      - "Marinade. Bol. Sirop érable ou agave, jus demi citron jaune, verser. Sel, poivre. Sauce soja salée, compléter. Fouet, mélanger. Réserver."
      - "Cuisson. Rectangles parmesan végétal ou levure maltée, environ 1cm épaisseur, découper. Pic brochette, longueur, glisser. Geste : vidéo Marc."
      - "Cuisson. Fines lamelles seitan ou portobello, découper. Fromage végétal, enrouler. Toutes brochettes, même. Plat bords hauts, placer. Marinade, recouvrir. Frigo, 1h, mariner. Environ 30 min, retourner. Deux côtés, sauce, trempés."
      - "Finition. Brochettes, poêle, filet huile végétale, cuire. Feu pas trop fort. Fromage végétal, fondre. Seitan coloré, retourner. Prêt : deux côtés dorés. Yakitori bien chaudes, servir. Fromage encore fondant, dévorer. Marinade utilisée, accompagner."
    kcal_per_serving: 466
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
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 14
      unit: piece
      item: pics à brochette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: emmental
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: cabillaud ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja salée
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citron
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron
      jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez
      à l’aide d’un fouet. Réservez.
    - Cuisson. Découpez des rectangles d’emmental d’environ 1cm d’épaisseur, puis faites les glisser
      le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le
      geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous.
    - Cuisson. Découpez de fines lamelles de viande, comme pour un carpaccio, et enroulez-les autour
      du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat
      à bords hauts et recouvrez-les de marinade. Laissez-les mariner pendant 1h au frigo,
      en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés
      dans la sauce.
    - Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille
      de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez
      les brochettes quand la viande commence à être colorée. Elles sont prêtes quand les
      deux côtés sont dorés et que le fromage au centre est fondant. Servez vos yakitori bien
      chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner
      de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez à l’aide d’un fouet. Réservez."
      - "Cuisson. Découpez des rectangles d’emmental d’environ 1cm d’épaisseur, puis faites les glisser le long d’un pic à brochette (dans le sens de la longueur). Pour bien visualiser le geste, n’hésitez pas à regarder comment Marc fait dans la vidéo ci-dessous."
      - "Cuisson. Découpez de fines lamelles de viande, comme pour un carpaccio, et enroulez-les autour du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat à bords hauts et recouvrez-les de marinade. [[mariner|Laissez-les mariner]] pendant 1h au frigo, en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés dans la sauce."
      - "Finition. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez les brochettes quand la viande commence à être colorée. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant. Servez vos yakitori bien chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !"
      pro:
      - "Préparer la marinade : dans un bol, verser le miel et le jus d’un demi citron jaune. Saler, poivrer. Compléter avec la sauce soja salée. Mélanger au fouet. Réserver."
      - "Découper des rectangles d’emmental d’environ 1cm d’épaisseur. Les faire glisser le long d’un pic à brochette, dans le sens de la longueur."
      - "Découper de fines lamelles de viande, comme pour un carpaccio. Enrouler autour du fromage. Reproduire pour toutes les brochettes. Plat à bords hauts, recouvrir de marinade. Mariner 1 h au frigo, retourner au bout d’environ 30 minutes, deux côtés trempés."
      - "Cuire les brochettes à la poêle, filet d’huile végétale. Feu pas trop fort, afin que le fromage ait le temps de fondre. Retourner quand la viande commence à être colorée. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant. Servir bien chaudes, fromage encore fondant. Accompagner de la marinade utilisée."
      cavernes:
      - "Marinade. Bol. Miel, jus demi citron jaune, verser. Sel, poivre. Sauce soja salée, compléter. Fouet, mélanger. Réserver."
      - "Cuisson. Rectangles emmental, environ 1cm épaisseur, découper. Pic brochette, longueur, glisser. Geste : vidéo Marc."
      - "Cuisson. Fines lamelles viande, comme carpaccio, découper. Fromage, enrouler. Toutes brochettes, même. Plat bords hauts, placer. Marinade, recouvrir. Frigo, 1h, mariner. Environ 30 min, retourner. Deux côtés, sauce, trempés."
      - "Finition. Brochettes, poêle, filet huile végétale, cuire. Feu pas trop fort. Fromage, temps fondre. Viande commence colorée, retourner. Prêt : deux côtés dorés, fromage centre fondant. Yakitori bien chaudes, servir. Fromage encore fondant, dévorer. Marinade utilisée, accompagner."
    kcal_per_serving: 230
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegetarienne:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  pesco:
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Yakitori bœuf fromage
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/yakitori-boeuf-fromage]]

## Ingrédients (4 personnes)

- 14 pics à brochette
- 250 g d'emmental
- 200 g de viande de boeuf
- 3 c.à.s miel
-  sauce soja salée
-  citron

## Préparation

1. Préparez d’abord la marinade. Dans un bol, versez le miel et le jus d’un demi citron jaune. Salez et poivrez selon vos goûts. Complétez avec la sauce soja salée, puis mélangez à l’aide d’un fouet. Réservez.
2. Découpez des rectangles d’emmental d’environ 1cm d’épaisseur, puis faites les glisser le long d’un pic à brochette (dans le sens de la longueur). 
3. Découpez de fines lamelles de viande, comme pour un carpaccio,  et enroulez-les autour du fromage. Faites de même pour toutes les brochettes, puis placez-les dans un plat à bords hauts et recouvrez-les de marinade. Laissez-les mariner pendant 1h au frigo, en les retournant au bout d’environ 30 minutes afin que les deux côtés aient bien trempés dans la sauce.
4. Faites cuire les brochettes dans une poêle avec un filet d’huile végétale. On vous conseille de ne pas mettre le feu trop fort, afin que le fromage ait le temps de fondre. Retournez les brochettes quand la viande commence à être colorée. Elles sont prêtes quand les deux côtés sont dorés et que le fromage au centre est fondant.

 
 

 
 Servez vos yakitori bien chaudes et dévorez-les tant que le fromage est encore fondant. Vous pouvez les accompagner de la marinade que vous avez utilisé (pas de gâchis). Bon appétit !
