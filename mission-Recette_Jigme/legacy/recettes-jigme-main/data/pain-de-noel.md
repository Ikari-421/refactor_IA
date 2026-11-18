---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: pain-de-noel
title: Pain de Noël
lang: fr
description: "Pain de Noël : recette française avec œuf, sucre et pincée de sel, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- boulangerie
- Noël
- hiver
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pain-de-noel.webp
  alt: Pain de Noël
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pain-de-noel.md
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; lait d''avoine ou soja → lait d''avoine.'
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
histoire: 'Pain sucré de fêtes, fruits secs, épices : forme européenne répandue (stollen, panettone milanais,
  pains d’épices). Le panettone est un pain au levain de Milan, fruits confits, beurre. Ici, un pain de
  Noël maison, pas une AOP.

  '
fun_facts:
- text: >
    Les fruits secs se trempent (thé, rhum, jus) pour ne pas pomper l’eau de la pâte.
  source_name: Usage
  source_url:
- text: >
    Un levain long (panettone) n’est pas la même pâte qu’un pain brioché rapide :
    le dôme et la mie filante demandent du temps.
  source_name: Grokipedia, Panettone
  source_url: https://grokipedia.com/page/Panettone
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin moelleux — les fruits secs, sans un sauternes de prestige.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Muscat doux — le pain d’épice et de fruits.
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles — la fête, sans un champagne.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 10
      rest_min: 100
      total_min: 140
    equipment: &id002
    - four
    - saladier
    - fouet
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: pincee
      item: pincée de sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: levure boulangère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 210
      unit: g
      item: farine de blé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: fruits secs / fruits confits
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: cannelle en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: perles de sucre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Dans un bol, mélangez le lait (il doit être à température ambiante) et la levure.
    - Cuisson. Dans un autre récipient, cassez un oeuf. Ajoutez le sucre et quelques pincées de sel,
      puis mélangez à l’aide d’un fouet. Complétez avec le beurre fondu et mélangez de nouveau.
    - Cuisson. Votre levure devrait maintenant être bien dissoute dans le lait. Vérifiez qu’il ne reste
      pas de grumeaux. Versez ensuite le mélange de levure et de lait dans votre récipient.
      Mélangez avec le fouet.
    - Mélange. Ajoutez ensuite la moitié de votre farine. Mélangez bien afin d’éviter l’apparition
      de grumeaux. Complétez avec l’autre moitié de la farine, puis mélangez de nouveau.
    - Cuisson. Pour finir, ajoutez à votre préparation des fruits secs et/ou fruits confits ainsi qu’une
      pointe de cannelle. Mélangez le tout à l’aide de vos mains.
    - Cuisson. Une fois que la pâte se décolle bien des bords de votre récipient, placez-la sur votre
      plan de travail préalablement recouvert d’un peu de farine. Travaillez votre pâte en
      la roulant plusieurs fois, puis formez une boule. N’hésitez pas à regarder la vidéo
      ci-dessous pour bien visualiser les mouvements que fait Marc.
    - Cuisson. Placez un peu de farine au fond de votre récipient et déposez-y votre boule. Recouvrez
      le tout d’un chiffon humide et laissez reposer pendant une petite heure.
    - Cuisson. Une fois que votre pâte a bien poussé grâce à la levure, travaillez la de nouveau sur
      votre plan de travail fariné. Formez une belle boule et déposez-la sur une plaque de
      four recouverte de papier cuisson. Recouvrez de nouveau votre boule d’un chiffon humide
      et laissez reposer pendant 40 minutes supplémentaires. Profitez de l’attente pour préchauffer
      votre four à 170°C.
    - Cuisson. Saupoudrez quelques perles de sucre sur votre pain, puis enfournez-le à 170°C pendant
      environ 10 minutes. Vous pouvez finalisez la recette en saupoudrant un peu de sucre
      en poudre sur votre pain de Noël. Dégustez-le ensuite accompagné d’un thé, d’un bon
      café ou d’un délicieux chocolat chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Dans un bol, mélangez le lait (il doit être à température ambiante) et la levure."
      - "Cuisson. Dans un autre récipient, cassez un œuf. Ajoutez le sucre et quelques pincées de sel, puis mélangez à l’aide d’un fouet. Complétez avec le beurre fondu et mélangez de nouveau."
      - "Cuisson. La levure devrait maintenant être bien dissoute dans le lait. Vérifiez qu’il ne reste pas de grumeaux. Versez ensuite le mélange de levure et de lait dans votre récipient. Mélangez avec le fouet."
      - "Mélange. Ajoutez ensuite la moitié de votre farine. Mélangez bien afin d’éviter l’apparition de grumeaux. Complétez avec l’autre moitié de la farine, puis mélangez de nouveau."
      - "Cuisson. Pour finir, ajoutez à votre préparation des fruits secs et/ou fruits confits ainsi qu’une pointe de cannelle. Mélangez le tout à l’aide de vos mains."
      - "Cuisson. Une fois que la pâte se décolle bien des bords de votre récipient, placez-la sur votre plan de travail préalablement recouvert d’un peu de farine. Travaillez votre pâte en la roulant plusieurs fois, puis formez une boule. N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser les mouvements que fait Marc."
      - "Cuisson. Placez un peu de farine au fond de votre récipient et déposez-y votre boule. Recouvrez le tout d’un chiffon humide et laissez reposer pendant une petite heure."
      - "Cuisson. Une fois que votre pâte a bien poussé grâce à la levure, travaillez-la de nouveau sur votre plan de travail fariné. Formez une belle boule et déposez-la sur une plaque de four recouverte de papier cuisson. Recouvrez de nouveau votre boule d’un chiffon humide et laissez reposer pendant 40 minutes supplémentaires. Profitez de l’attente pour préchauffer votre four à 170 °C."
      - "Cuisson. Saupoudrez quelques perles de sucre sur votre pain, puis enfournez-le à 170 °C pendant environ 10 minutes. Vous pouvez finaliser la recette en saupoudrant un peu de sucre en poudre sur votre pain de Noël. Dégustez-le ensuite accompagné d’un thé, d’un bon café ou d’un délicieux chocolat chaud."
      pro:
      - "Mélanger le lait à température ambiante et la levure, dans un bol."
      - "Casser un œuf dans un autre récipient. Ajouter le sucre et quelques pincées de sel. Mélanger au fouet. Compléter avec le beurre fondu. Mélanger de nouveau."
      - "Vérifier la levure bien dissoute dans le lait, sans grumeaux. Verser le mélange levure-lait dans le récipient. Mélanger au fouet."
      - "Ajouter la moitié de la farine. Mélanger pour éviter les grumeaux. Compléter avec l’autre moitié. Mélanger de nouveau."
      - "Ajouter fruits secs et/ou fruits confits et une pointe de cannelle. Mélanger à la main."
      - "Quand la pâte se décolle des bords, la placer sur le plan de travail fariné. Travailler en roulant plusieurs fois. Former une boule. Voir la vidéo ci-dessous, mouvements de Marc."
      - "Fariner le fond du récipient. Y déposer la boule. Recouvrir d’un chiffon humide. Reposer une petite heure."
      - "Quand la pâte a poussé, retravailler sur le plan fariné. Former une belle boule. Déposer sur une plaque recouverte de papier cuisson. Recouvrir d’un chiffon humide. Reposer 40 min. Pendant l’attente, préchauffer le four à 170 °C."
      - "Saupoudrer de perles de sucre. Enfourner à 170 °C environ 10 min. Option : saupoudrer de sucre en poudre. Déguster avec un thé, un café ou un chocolat chaud."
      cavernes:
      - "Mélange. Bol : lait température ambiante, levure, mélanger."
      - "Cuisson. Autre récipient : œuf, casser. Sucre, quelques pincées sel, ajouter. Fouet, mélanger. Beurre fondu, compléter. Mélanger encore."
      - "Cuisson. Levure, lait, bien dissoute. Grumeaux, vérifier. Mélange levure-lait, récipient, verser. Fouet, mélanger."
      - "Mélange. Moitié farine, ajouter. Grumeaux, éviter, mélanger. Autre moitié farine, compléter. Mélanger encore."
      - "Cuisson. Fruits secs et/ou fruits confits, pointe cannelle, ajouter. Mains, mélanger."
      - "Cuisson. Pâte, bords récipient, décolle. Plan travail, peu farine, recouvrir. Pâte, rouler plusieurs fois, travailler. Boule, former. Vidéo ci-dessous, mouvements Marc."
      - "Cuisson. Fond récipient, peu farine. Boule, déposer. Chiffon humide, recouvrir. Petite heure, reposer."
      - "Cuisson. Pâte poussée, levure. Plan travail fariné, travailler encore. Belle boule, former. Plaque four, papier cuisson, déposer. Chiffon humide, recouvrir encore. 40 min, reposer. Attente : four 170 °C, préchauffer."
      - "Cuisson. Perles sucre, saupoudrer. 170 °C environ 10 min, enfourner. Sucre poudre, option, saupoudrer. Thé, café ou chocolat chaud, déguster."
    kcal_per_serving: 333
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 333
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
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: pincee
      item: pincée de sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: levure boulangère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 210
      unit: g
      item: farine de blé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: fruits secs / fruits confits
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: g
      item: cannelle en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: perles de sucre
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Dans un bol, mélangez le lait d'avoine ou soja (il doit être à température ambiante)
      et la levure.
    - Mélange. Dans un autre récipient, versez l’œuf de lin (ou le tofu soyeux). Ajoutez le sucre et quelques pincées de sel, puis mélangez. Complétez avec la margarine végétale fondue et mélangez de nouveau.
    - Cuisson. Votre levure devrait maintenant être bien dissoute dans le lait d'avoine ou soja. Vérifiez
      qu’il ne reste pas de grumeaux. Versez ensuite le mélange de levure et de lait d'avoine
      ou soja dans votre récipient. Mélangez avec le fouet.
    - Mélange. Ajoutez ensuite la moitié de votre farine. Mélangez bien afin d’éviter l’apparition
      de grumeaux. Complétez avec l’autre moitié de la farine, puis mélangez de nouveau.
    - Cuisson. Pour finir, ajoutez à votre préparation des fruits secs et/ou fruits confits ainsi qu’une
      pointe de cannelle. Mélangez le tout à l’aide de vos mains.
    - Cuisson. Une fois que la pâte se décolle bien des bords de votre récipient, placez-la sur votre
      plan de travail préalablement recouvert d’un peu de farine. Travaillez votre pâte en
      la roulant plusieurs fois, puis formez une boule. N’hésitez pas à regarder la vidéo
      ci-dessous pour bien visualiser les mouvements que fait Marc.
    - Cuisson. Placez un peu de farine au fond de votre récipient et déposez-y votre boule. Recouvrez
      le tout d’un chiffon humide et laissez reposer pendant une petite heure.
    - Cuisson. Une fois que votre pâte a bien poussé grâce à la levure, travaillez la de nouveau sur
      votre plan de travail fariné. Formez une belle boule et déposez-la sur une plaque de
      four recouverte de papier cuisson. Recouvrez de nouveau votre boule d’un chiffon humide
      et laissez reposer pendant 40 minutes supplémentaires. Profitez de l’attente pour préchauffer
      votre four à 170°C.
    - Cuisson. Saupoudrez quelques perles de sucre sur votre pain, puis enfournez-le à 170°C pendant
      environ 10 minutes. Vous pouvez finalisez la recette en saupoudrant un peu de sucre
      en poudre sur votre pain de Noël. Dégustez-le ensuite accompagné d’un thé, d’un bon
      café ou d’un délicieux chocolat chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Dans un bol, mélangez le lait d’avoine ou soja (il doit être à température ambiante) et la levure."
      - "Mélange. Dans un autre récipient, versez l’œuf de lin (ou le tofu soyeux). Ajoutez le sucre et quelques pincées de sel, puis mélangez. Complétez avec la margarine végétale fondue et mélangez de nouveau."
      - "Cuisson. La levure devrait maintenant être bien dissoute dans le lait d’avoine ou soja. Vérifiez qu’il ne reste pas de grumeaux. Versez ensuite le mélange de levure et de lait d’avoine ou soja dans votre récipient. Mélangez avec le fouet."
      - "Mélange. Ajoutez ensuite la moitié de votre farine. Mélangez bien afin d’éviter l’apparition de grumeaux. Complétez avec l’autre moitié de la farine, puis mélangez de nouveau."
      - "Cuisson. Pour finir, ajoutez à votre préparation des fruits secs et/ou fruits confits ainsi qu’une pointe de cannelle. Mélangez le tout à l’aide de vos mains."
      - "Cuisson. Une fois que la pâte se décolle bien des bords de votre récipient, placez-la sur votre plan de travail préalablement recouvert d’un peu de farine. Travaillez votre pâte en la roulant plusieurs fois, puis formez une boule. N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser les mouvements que fait Marc."
      - "Cuisson. Placez un peu de farine au fond de votre récipient et déposez-y votre boule. Recouvrez le tout d’un chiffon humide et laissez reposer pendant une petite heure."
      - "Cuisson. Une fois que votre pâte a bien poussé grâce à la levure, travaillez-la de nouveau sur votre plan de travail fariné. Formez une belle boule et déposez-la sur une plaque de four recouverte de papier cuisson. Recouvrez de nouveau votre boule d’un chiffon humide et laissez reposer pendant 40 minutes supplémentaires. Profitez de l’attente pour préchauffer votre four à 170 °C."
      - "Cuisson. Saupoudrez quelques perles de sucre sur votre pain, puis enfournez-le à 170 °C pendant environ 10 minutes. Vous pouvez finaliser la recette en saupoudrant un peu de sucre en poudre sur votre pain de Noël. Dégustez-le ensuite accompagné d’un thé, d’un bon café ou d’un délicieux chocolat chaud."
      pro:
      - "Mélanger le lait d’avoine ou soja à température ambiante et la levure, dans un bol."
      - "Verser l’œuf de lin (ou le tofu soyeux) dans un autre récipient. Ajouter le sucre et quelques pincées de sel. Mélanger. Compléter avec la margarine végétale fondue. Mélanger de nouveau."
      - "Vérifier la levure bien dissoute dans le lait d’avoine ou soja, sans grumeaux. Verser le mélange levure-lait dans le récipient. Mélanger au fouet."
      - "Ajouter la moitié de la farine. Mélanger pour éviter les grumeaux. Compléter avec l’autre moitié. Mélanger de nouveau."
      - "Ajouter fruits secs et/ou fruits confits et une pointe de cannelle. Mélanger à la main."
      - "Quand la pâte se décolle des bords, la placer sur le plan de travail fariné. Travailler en roulant plusieurs fois. Former une boule. Voir la vidéo ci-dessous, mouvements de Marc."
      - "Fariner le fond du récipient. Y déposer la boule. Recouvrir d’un chiffon humide. Reposer une petite heure."
      - "Quand la pâte a poussé, retravailler sur le plan fariné. Former une belle boule. Déposer sur une plaque recouverte de papier cuisson. Recouvrir d’un chiffon humide. Reposer 40 min. Pendant l’attente, préchauffer le four à 170 °C."
      - "Saupoudrer de perles de sucre. Enfourner à 170 °C environ 10 min. Option : saupoudrer de sucre en poudre. Déguster avec un thé, un café ou un chocolat chaud."
      cavernes:
      - "Mélange. Bol : lait d’avoine ou soja température ambiante, levure, mélanger."
      - "Mélange. Autre récipient : œuf de lin (ou tofu soyeux), verser. Sucre, quelques pincées sel, ajouter. Mélanger. Margarine végétale fondue, compléter. Mélanger encore."
      - "Cuisson. Levure, lait d’avoine ou soja, bien dissoute. Grumeaux, vérifier. Mélange levure-lait, récipient, verser. Fouet, mélanger."
      - "Mélange. Moitié farine, ajouter. Grumeaux, éviter, mélanger. Autre moitié farine, compléter. Mélanger encore."
      - "Cuisson. Fruits secs et/ou fruits confits, pointe cannelle, ajouter. Mains, mélanger."
      - "Cuisson. Pâte, bords récipient, décolle. Plan travail, peu farine, recouvrir. Pâte, rouler plusieurs fois, travailler. Boule, former. Vidéo ci-dessous, mouvements Marc."
      - "Cuisson. Fond récipient, peu farine. Boule, déposer. Chiffon humide, recouvrir. Petite heure, reposer."
      - "Cuisson. Pâte poussée, levure. Plan travail fariné, travailler encore. Belle boule, former. Plaque four, papier cuisson, déposer. Chiffon humide, recouvrir encore. 40 min, reposer. Attente : four 170 °C, préchauffer."
      - "Cuisson. Perles sucre, saupoudrer. 170 °C environ 10 min, enfourner. Sucre poudre, option, saupoudrer. Thé, café ou chocolat chaud, déguster."
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 333
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Le froid dessèche le pain."}
  congelation: {possible: true, duree: "1 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "2 jours", note: "Sachet ou boîte, à l’abri de l’humidité."}
  rechauffage: ""
  restes: ["Pain perdu"]
  anti_gaspi: ["Croûtons"]
  a_verifier: false
  note_verif: ""
---

# Pain de Noël

![[pain-de-noel.webp]]
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pain-de-noel]]

## Ingrédients (4 personnes)

- 1 œuf
- 30 g de sucre
- 3 pincées pincée de sel
- 60 ml de lait
- 6 g de levure boulangère
- 30 g de beurre
- 210 g de farine de blé
- 90 g de fruits secs / fruits confits
- 1 g de cannelle en poudre
- 20 g de perles de sucre

## Préparation

1. Dans un bol, mélangez le lait (il doit être à température ambiante) et la levure.
2. Dans un autre récipient, cassez un oeuf. Ajoutez le sucre et quelques pincées de sel, puis mélangez à l’aide d’un fouet. Complétez avec le beurre fondu et mélangez de nouveau.
3. Votre levure devrait maintenant être bien dissoute dans le lait. Vérifiez qu’il ne reste pas de grumeaux. Versez ensuite le mélange de levure et de lait dans votre récipient. Mélangez avec le fouet.
4. Ajoutez ensuite la moitié de votre farine. Mélangez bien afin d’éviter l’apparition de grumeaux. Complétez avec l’autre moitié de la farine, puis mélangez de nouveau.
5. Pour finir, ajoutez à votre préparation des fruits secs et/ou fruits confits ainsi qu’une pointe de cannelle. Mélangez le tout à l’aide de vos mains.
6. Une fois que la pâte se décolle bien des bords de votre récipient, placez-la sur votre plan de travail préalablement recouvert d’un peu de farine. Travaillez votre pâte en la roulant plusieurs fois, puis formez une boule. N’hésitez pas à regarder la vidéo ci-dessous pour bien visualiser les mouvements que fait Marc.
7. Placez un peu de farine au fond de votre récipient et déposez-y votre boule. Recouvrez le tout d’un chiffon humide et laissez reposer pendant une petite heure.
8. Une fois que votre pâte a bien poussé grâce à la levure, travaillez la de nouveau sur votre plan de travail fariné. Formez une belle boule et déposez-la sur une plaque de four recouverte de papier cuisson. Recouvrez de nouveau votre boule d’un chiffon humide et laissez reposer pendant 40 minutes supplémentaires. Profitez de l’attente pour préchauffer votre four à 170°C.
9. Saupoudrez quelques perles de sucre sur votre pain, puis enfournez-le à 170°C pendant environ 10 minutes.

 
 

 
 Vous pouvez finalisez la recette en saupoudrant un peu de sucre en poudre sur votre pain de Noël. Dégustez-le ensuite accompagné d’un thé, d’un bon café ou d’un délicieux chocolat chaud. Bon appétit !
