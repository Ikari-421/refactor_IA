---
schema: recette-web-jigme/v2
slug: pumpkin-pie
title: Pumpkin pie
lang: fr
description: "Pumpkin pie : recette américaine avec farine pour la pâte, beurre pour la pâte et sucre pour la pâte, pour 4 personnes. Version maison."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- courge
- tarte
- végétarien
image:
  url:
  alt: Pumpkin pie
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pumpkin-pie.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans poisson.
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
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; crème de soja ou avoine → crème d''avoine.'
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
histoire: 'Tarte à la citrouille : appareil d’œuf, lait, purée de courge, cannelle, gingembre, muscade.
  Dessert d’automne, Thanksgiving aux États-Unis et au Canada. On la trouve déjà dans les livres américains
  de la fin du XVIIIe s. (American Cookery, 1796, est souvent cité — une source, donc le siècle).

  '
fun_facts:
- text: 'Le mélange « pumpkin pie spice » est surtout de la cannelle, plus un peu de gingembre, muscade,
    clou.

    '
  source_name: Grokipedia, Pumpkin pie spice
  source_url: https://grokipedia.com/page/Pumpkin_pie_spice
- text: 'Une courge musquée bien cuite remplace la citrouille américaine, plus fade.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Pumpkin pie ».'
  source_name: Wikipédia
  source_url: https://fr.wikipedia.org/wiki/Pumpkin_pie
wines:
- name: Jurançon
  producer: Domaine Bellegarde
  origin: Jurançon, Béarn
  grapes: petit manseng
  award:
  why: Moelleux, agrume — la cannelle et la courge, sans un sauternes de prestige.
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin doux — l’épice et le sucre de la tarte.
- name: Gewurztraminer
  producer: Cave de Hunawihr
  origin: Hunawihr, Alsace
  grapes: gewurztraminer
  award:
  why: Épice, litchi — la muscade, un blanc aromatique.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 120
      rest_min: 140
      total_min: 290
    equipment: &id002
    - four
    - saladier
    - moule / plat
    - plaque + papier sulfurisé
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: farine pour la pâte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: beurre pour la pâte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre pour la pâte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf pour la pâte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citrouille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: cannelle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: anis étoilé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: noix de muscade
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cardamome en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par préparer une pâte sablée, la fiche recette est disponible ici. Étalez
      la pâte sur votre plan de travail et chemisez votre moule à tarte avec du beurre et
      de la farine. Déposez la pâte dans le moule en collant bien les bords et laissez reposer
      le tout au réfrigérateur une quinzaine de minutes.
    - Cuisson. Déposez du papier cuisson sur votre fond de tarte et versez-y des billes en céramique
      (ou des lentilles si vous n’en avez pas). Recouvrez les bords de la pâte à tarte avec
      du papier aluminium afin qu’ils ne brûlent pas et enfournez pendant une quinzaine de
      minutes à 180°. Enfournez à nouveau sans le papier cuisson et les billes de céramique
      pendant 5 minutes pour assécher votre fond de tarte.
    - Dressage. Coupez la citrouille en deux et enlevez les graines à l’aide d’une cuillère. Conservez-les,
      une fois rôties elles seront délicieuses ! Placez la citrouille sur une plaque avec
      du papier sulfurisé et enfournez pendant une bonne heure à 180°.
    - Mélange. Dans un saladier, cassez les oeufs, ajoutez le sucre et mélangez. À-côté, videz la chair
      de la citrouille et passez-la au chinois pour éliminer l’excédent de liquide avant de
      la mixer. Incorporez la chair de citrouille mixée au mélange oeufs/sucre et mélangez.
      Ajoutez une pincée de sel, la crème et les épices (ajustez selon vos goûts).
    - Finition. Versez la préparation sur le fond de tarte. Vous pouvez napper les bords de la pâte
      à tarte de jaune d’oeuf pour obtenir une jolie couleur dorée à la cuisson. Enfournez
      pendant 45 minutes à 170°. On préfère généralement la déguster froide, mais faites comme
      bon vous semble ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par préparer une pâte sablée, la fiche recette est disponible ici. Étalez la pâte sur votre plan de travail et [[chemiser|chemisez]] votre moule à tarte avec du beurre et de la farine. Déposez la pâte dans le moule en collant bien les bords et laissez reposer le tout au réfrigérateur une quinzaine de minutes."
      - "Cuisson. Déposez du papier cuisson sur votre fond de tarte et versez-y des billes en céramique (ou des lentilles si vous n’en avez pas). Recouvrez les bords de la pâte à tarte avec du papier aluminium afin qu’ils ne brûlent pas et enfournez pendant une quinzaine de minutes à 180°. Enfournez à nouveau sans le papier cuisson et les billes de céramique pendant 5 minutes pour assécher votre fond de tarte."
      - "Dressage. Coupez la citrouille en deux et enlevez les graines à l’aide d’une cuillère. Conservez-les, une fois rôties elles seront délicieuses ! Placez la citrouille sur une plaque avec du papier sulfurisé et enfournez pendant une bonne heure à 180°."
      - "Mélange. Dans un saladier, cassez les oeufs, ajoutez le sucre et mélangez. À-côté, videz la chair de la citrouille et passez-la au chinois pour éliminer l’excédent de liquide avant de la mixer. Incorporez la chair de citrouille mixée au mélange oeufs/sucre et mélangez. Ajoutez une pincée de sel, la crème et les épices (ajustez selon vos goûts)."
      - "Finition. Versez la préparation sur le fond de tarte. Vous pouvez [[napper|napper]] les bords de la pâte à tarte de jaune d’oeuf pour obtenir une jolie couleur dorée à la cuisson. Enfournez pendant 45 minutes à 170°. On préfère généralement la déguster froide, mais faites comme bon vous semble ! Bon appétit !"
      pro:
      - "Préparer une pâte sablée (fiche disponible ici). Étaler la pâte. Chemiser le moule à tarte de beurre et de farine. Déposer la pâte dans le moule, coller les bords. Réfrigérateur une quinzaine de minutes."
      - "Papier cuisson sur le fond de tarte. Verser des billes en céramique (ou des lentilles). Recouvrir les bords de papier aluminium. Enfourner une quinzaine de minutes à 180°. Enfourner à nouveau sans papier ni billes, 5 minutes, pour assécher le fond."
      - "Couper la citrouille en deux. Enlever les graines à la cuillère. Les conserver (rôties). Citrouille sur plaque, papier sulfurisé. Enfourner une bonne heure à 180°."
      - "Casser les oeufs, ajouter le sucre, mélanger. Vider la chair de citrouille. Passer au chinois pour éliminer l’excédent de liquide. Mixer. Incorporer au mélange oeufs/sucre. Ajouter une pincée de sel, la crème et les épices."
      - "Verser la préparation sur le fond de tarte. Napper éventuellement les bords de jaune d’oeuf. Enfourner 45 minutes à 170°. Servir froid ou selon le goût."
      cavernes:
      - "Préparation. Pâte sablée, préparer, fiche ici. Pâte, étaler plan travail. Moule tarte, chemiser beurre farine. Pâte, déposer moule, coller bords. Réfrigérateur, reposer quinzaine minutes."
      - "Cuisson. Papier cuisson sur fond tarte, billes céramique (ou lentilles). Bords pâte, papier aluminium, recouvrir. Enfourner quinzaine minutes 180°. Sans papier, sans billes, 5 minutes, assécher fond tarte."
      - "Dressage. Citrouille, couper deux. Graines, cuillère, enlever. Conserver, rôties délicieuses. Citrouille, plaque, papier sulfurisé. Enfourner bonne heure 180°."
      - "Mélange. Saladier : oeufs, casser, sucre, ajouter, mélanger. À-côté, chair citrouille, vider. Chinois, passer, éliminer excédent liquide, mixer. Chair mixée, mélange oeufs/sucre, incorporer. Pincée sel, crème, épices, ajouter (ajuster selon goûts)."
      - "Finition. Préparation, verser sur fond tarte. Bords pâte, napper jaune oeuf, couleur dorée. Enfourner 45 minutes 170°. Déguster froide, ou selon. Bon appétit !"
    kcal_per_serving: 519
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 519
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: farine pour la pâte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre pour la pâte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citrouille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 160
      unit: g
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: cannelle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: anis étoilé
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: gingembre en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: noix de muscade
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cardamome en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: lait d'avoine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par préparer une pâte sablée, la fiche recette est disponible ici. Étalez
      la pâte sur votre plan de travail et chemisez votre moule à tarte avec de la margarine végétale et de la farine. Déposez la pâte dans le moule en collant bien les bords et laissez reposer
      le tout au réfrigérateur une quinzaine de minutes.
    - Cuisson. Déposez du papier cuisson sur votre fond de tarte et versez-y des billes en céramique
      (ou des lentilles si vous n’en avez pas). Recouvrez les bords de la pâte à tarte avec
      du papier aluminium afin qu’ils ne brûlent pas et enfournez pendant une quinzaine de
      minutes à 180°. Enfournez à nouveau sans le papier cuisson et les billes de céramique
      pendant 5 minutes pour assécher votre fond de tarte.
    - Dressage. Coupez la citrouille en deux et enlevez les graines à l’aide d’une cuillère. Conservez-les,
      une fois rôties elles seront délicieuses ! Placez la citrouille sur une plaque avec
      du papier sulfurisé et enfournez pendant une bonne heure à 180°.
    - Mélange. Dans un saladier, versez l’œuf de lin (ou le tofu soyeux), ajoutez le sucre et mélangez. À-côté, videz la chair
      de la citrouille et passez-la au chinois pour éliminer l’excédent de liquide avant de
      la mixer. Incorporez la chair de citrouille mixée au mélange sucré et mélangez. Ajoutez une pincée de sel, la crème de soja ou d’avoine et les épices (ajustez selon vos goûts).
    - Finition. Versez la préparation sur le fond de tarte. Vous pouvez napper les bords de la pâte
      à tarte de lait d’avoine pour obtenir une jolie couleur dorée à la cuisson. Enfournez
      pendant 45 minutes à 170°. On préfère généralement la déguster froide, mais faites comme
      bon vous semble ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par préparer une pâte sablée, la fiche recette est disponible ici. Étalez la pâte sur votre plan de travail et [[chemiser|chemisez]] votre moule à tarte avec de la margarine végétale et de la farine. Déposez la pâte dans le moule en collant bien les bords et laissez reposer le tout au réfrigérateur une quinzaine de minutes."
      - "Cuisson. Déposez du papier cuisson sur votre fond de tarte et versez-y des billes en céramique (ou des lentilles si vous n’en avez pas). Recouvrez les bords de la pâte à tarte avec du papier aluminium afin qu’ils ne brûlent pas et enfournez pendant une quinzaine de minutes à 180°. Enfournez à nouveau sans le papier cuisson et les billes de céramique pendant 5 minutes pour assécher votre fond de tarte."
      - "Dressage. Coupez la citrouille en deux et enlevez les graines à l’aide d’une cuillère. Conservez-les, une fois rôties elles seront délicieuses ! Placez la citrouille sur une plaque avec du papier sulfurisé et enfournez pendant une bonne heure à 180°."
      - "Mélange. Dans un saladier, versez l’œuf de lin (ou le tofu soyeux), ajoutez le sucre et mélangez. À-côté, videz la chair de la citrouille et passez-la au chinois pour éliminer l’excédent de liquide avant de la mixer. Incorporez la chair de citrouille mixée au mélange sucré et mélangez. Ajoutez une pincée de sel, la crème de soja ou d’avoine et les épices (ajustez selon vos goûts)."
      - "Finition. Versez la préparation sur le fond de tarte. Vous pouvez [[napper|napper]] les bords de la pâte à tarte de lait d’avoine pour obtenir une jolie couleur dorée à la cuisson. Enfournez pendant 45 minutes à 170°. On préfère généralement la déguster froide, mais faites comme bon vous semble ! Bon appétit !"
      pro:
      - "Préparer une pâte sablée (fiche disponible ici). Étaler la pâte. Chemiser le moule à tarte de margarine végétale et de farine. Déposer la pâte dans le moule, coller les bords. Réfrigérateur une quinzaine de minutes."
      - "Papier cuisson sur le fond de tarte. Verser des billes en céramique (ou des lentilles). Recouvrir les bords de papier aluminium. Enfourner une quinzaine de minutes à 180°. Enfourner à nouveau sans papier ni billes, 5 minutes, pour assécher le fond."
      - "Couper la citrouille en deux. Enlever les graines à la cuillère. Les conserver (rôties). Citrouille sur plaque, papier sulfurisé. Enfourner une bonne heure à 180°."
      - "Verser l’œuf de lin (ou le tofu soyeux), ajouter le sucre, mélanger. Vider la chair de citrouille. Passer au chinois pour éliminer l’excédent de liquide. Mixer. Incorporer au mélange sucré. Ajouter une pincée de sel, la crème de soja ou d’avoine et les épices."
      - "Verser la préparation sur le fond de tarte. Napper éventuellement les bords de lait d’avoine. Enfourner 45 minutes à 170°. Servir froid ou selon le goût."
      cavernes:
      - "Préparation. Pâte sablée, préparer, fiche ici. Pâte, étaler plan travail. Moule tarte, chemiser margarine végétale farine. Pâte, déposer moule, coller bords. Réfrigérateur, reposer quinzaine minutes."
      - "Cuisson. Papier cuisson sur fond tarte, billes céramique (ou lentilles). Bords pâte, papier aluminium, recouvrir. Enfourner quinzaine minutes 180°. Sans papier, sans billes, 5 minutes, assécher fond tarte."
      - "Dressage. Citrouille, couper deux. Graines, cuillère, enlever. Conserver, rôties délicieuses. Citrouille, plaque, papier sulfurisé. Enfourner bonne heure 180°."
      - "Mélange. Saladier : œuf lin (ou tofu soyeux), verser, sucre, ajouter, mélanger. À-côté, chair citrouille, vider. Chinois, passer, éliminer excédent liquide, mixer. Chair mixée, mélange sucré, incorporer. Pincée sel, crème soja ou avoine, épices, ajouter (ajuster selon goûts)."
      - "Finition. Préparation, verser sur fond tarte. Bords pâte, napper lait avoine, couleur dorée. Enfourner 45 minutes 170°. Déguster froide, ou selon. Bon appétit !"
    kcal_per_serving: 294
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 519
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    chemiser:
      terme: "chemiser"
      explication: "Vous tapissez le moule avant de le remplir. Vous le recouvrez (film, rhodoïd, beurre et farine, biscuits…). C’est réussi quand le moule est tapissé, sans trou."
      ref: Cuisine/Lexique/chemiser.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    chemiser:
      terme: "chemiser"
      explication: "Vous tapissez le moule avant de le remplir. Vous le recouvrez (film, rhodoïd, beurre et farine, biscuits…). C’est réussi quand le moule est tapissé, sans trou."
      ref: Cuisine/Lexique/chemiser.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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

# Pumpkin pie
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 8 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pumpkin-pie]]

## Ingrédients (8 personnes)

- 400 g de farine pour la pâte
- 200 g de beurre pour la pâte
- 50 g de sucre pour la pâte
- 1 œuf pour la pâte
- 1 citrouille
- 160 g de crème liquide
- 2 œuf
- 70 g de sucre
-  cannelle
-  anis étoilé
-  gingembre en poudre
-  noix de muscade
-  cardamome en poudre

## Préparation

1. Commencez par préparer une pâte sablée, la fiche recette est disponible ici. Étalez la pâte sur votre plan de travail et chemisez votre moule à tarte avec du beurre et de la farine. Déposez la pâte dans le moule en collant bien les bords et laissez reposer le tout au réfrigérateur une quinzaine de minutes.
2. Déposez du papier cuisson sur votre fond de tarte et versez-y des billes en céramique (ou des lentilles si vous n’en avez pas). Recouvrez les bords de la pâte à tarte avec du papier aluminium afin qu’ils ne brûlent pas et enfournez pendant une quinzaine de minutes à 180°. Enfournez à nouveau sans le papier cuisson et les billes de céramique pendant 5 minutes pour assécher votre fond de tarte.
3. Coupez la citrouille en deux et enlevez les graines à l’aide d’une cuillère. Conservez-les, une fois rôties elles seront délicieuses ! Placez la citrouille sur une plaque avec du papier sulfurisé et enfournez pendant une bonne heure à 180°.
4. Dans un saladier, cassez les oeufs, ajoutez le sucre et mélangez. À-côté, videz la chair de la citrouille et passez-la au chinois pour éliminer l’excédent de liquide avant de la mixer. Incorporez la chair de citrouille mixée au mélange oeufs/sucre et mélangez. Ajoutez une pincée de sel, la crème et les épices (ajustez selon vos goûts).
5. Versez la préparation sur le fond de tarte. Vous pouvez napper les bords de la pâte à tarte de jaune d’oeuf pour obtenir une jolie couleur dorée à la cuisson. Enfournez pendant 45 minutes à 170°.

 
 

 
 On préfère généralement la déguster froide, mais faites comme bon vous semble ! Bon appétit !
