---
schema: recette-web-jigme/v2
equipment:
- ref: econome
- ref: mandoline
slug: tarte-coloree-et-fleurie
title: Tarte colorée et fleurie
lang: fr
description: "Tarte colorée et fleurie : recette française avec ricotta, oeuf et parmesan, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- tarte
- légumes
- végétarien
image:
  url:
  alt: Tarte colorée et fleurie
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tarte-coloree-et-fleurie.md
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
    - from: ricotta
      to: fromage frais sans lactose
      note:
    - from: parmesan
      to: comté affiné (naturellement quasi sans lactose)
      note:
    - from: pâte sablée ou brisée
      to: pâte brisée vegan (à la margarine)
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
    - from: pâte sablée ou brisée
      to: pâte brisée vegan (à la margarine)
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
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
  Les tartes en spirale, où des rubans de carotte et de courgette s’enroulent en fleur,
  se sont multipliées sur les blogs culinaires et les réseaux, surtout dans les années
  2010. Elles reprennent l’appareil de la quiche et la pâte brisée française, mais
  misent sur le visuel : un plat qui se partage autant en photo qu’à table. Ce n’est
  pas une recette régionale. Les tranches régulières cuisent ensemble ; trop épaisses,
  le centre reste cru. Un fond de fromage ou de crème sous les légumes colle le décor.
fun_facts:
- text: >
    Les tranches régulières cuisent ensemble ; trop épaisses, le centre reste cru.
  source_name: Usage
  source_url:
- text: >
    Un fond de fromage ou de crème sous les légumes colle le décor.
  source_name: Usage
  source_url:
wines:
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — les légumes d’été, sans un vin de dessert.
- name: Sancerre
  producer: Pascal Jolivet
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — la tarte, acidité nette.
- name: Cheverny
  producer: Domaine du Salvard
  origin: Cheverny, Loire
  grapes: sauvignon, chardonnay
  award:
  why: Blanc vif — la crème sous les légumes.
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
      cook_min: 35
      rest_min: 70
      total_min: 135
    equipment: &id002
    - four
    - saladier
    - moule / plat
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: ricotta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: parmesan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: carottes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courgette jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courgette verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pâte sablée ou brisée
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Réaliser une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient,
      mélangez la ricotta, l’oeuf, le parmesan et le thym. Assaisonnez et laissez de côté.
    - Cuisson. Épluchez les carottes et les courgettes et coupez-les en lamelles grâce à un économe
      ou une mandoline. Cette étape prend du temps, n’hésitez pas à regarder une Stream Twitch
      pendant ce temps 😉
    - Finition. Garnissez le fond de tarte du mélange ricotta/parmesan. Enroulez les lamelles de légumes
      sur elles-même pour faire comme des petites fleurs. Déposez-les debout sur le mélange
      ricotta/parmesan. N’hésitez pas à vous faire aider ! Lorsque le fond de tarte est entièrement
      garni de fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes. Une fois cuite,
      vous pouvez assaisonner la tarte selon votre envie et la déguster ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Réalisez une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient, mélangez la ricotta, l’œuf, le parmesan et le thym. Assaisonnez et laissez de côté."
      - "Cuisson. Épluchez les carottes et les courgettes et coupez-les en lamelles à l’aide d’un économe ou d’une mandoline."
      - "Finition. Garnissez le fond de tarte du mélange ricotta/parmesan. Enroulez les lamelles de légumes sur elles-mêmes pour faire comme des petites fleurs. Déposez-les debout sur le mélange ricotta/parmesan. Lorsque le fond de tarte est entièrement garni de fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes. Une fois cuite, vous pouvez assaisonner la tarte selon votre envie."
      pro:
      - "Réaliser une pâte sablée ou brisée et la précuire dans un plat à tarte. Dans un récipient, mélanger la ricotta, l’œuf, le parmesan et le thym. Assaisonner et laisser de côté."
      - "Éplucher les carottes et les courgettes et les couper en lamelles à l’aide d’un économe ou d’une mandoline."
      - "Garnir le fond de tarte du mélange ricotta/parmesan. Enrouler les lamelles de légumes sur elles-mêmes pour former comme de petites fleurs. Les déposer debout sur le mélange ricotta/parmesan. Lorsque le fond est entièrement garni, enfourner à 180° pendant 30 à 40 minutes. Option : assaisonner selon l’envie."
      cavernes:
      - "Préparation. Pâte sablée ou brisée, réaliser, plat tarte, précuire. Récipient : ricotta, œuf, parmesan, thym, mélanger. Assaisonner, laisser de côté."
      - "Cuisson. Carottes, courgettes, éplucher, lamelles, économe ou mandoline, couper."
      - "Finition. Fond tarte, mélange ricotta/parmesan, garnir. Lamelles légumes, enrouler, petites fleurs. Debout, mélange ricotta/parmesan, déposer. Fond tarte, fleurs légumes, entier, garni : Four 180°, 30 à 40 min, enfourner. Option : assaisonner, envie."
    kcal_per_serving: 244
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
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: ricotta
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: grana (présure microbienne)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: carottes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courgette jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courgette verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pâte sablée ou brisée
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Réaliser une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient,
      mélangez la ricotta, l’oeuf, le grana (présure microbienne) et le thym. Assaisonnez et laissez de côté.
    - Cuisson. Épluchez les carottes et les courgettes et coupez-les en lamelles grâce à un économe
      ou une mandoline. Cette étape prend du temps, n’hésitez pas à regarder une Stream Twitch
      pendant ce temps 😉
    - Finition. Garnissez le fond de tarte du mélange ricotta/grana (présure microbienne). Enroulez les lamelles de légumes
      sur elles-même pour faire comme des petites fleurs. Déposez-les debout sur le mélange
      ricotta/grana (présure microbienne). N’hésitez pas à vous faire aider ! Lorsque le fond de tarte est entièrement
      garni de fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes. Une fois cuite,
      vous pouvez assaisonner la tarte selon votre envie et la déguster ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Réalisez une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient, mélangez la ricotta, l’œuf, le grana (présure microbienne) et le thym. Assaisonnez et laissez de côté."
      - "Cuisson. Épluchez les carottes et les courgettes et coupez-les en lamelles à l’aide d’un économe ou d’une mandoline."
      - "Finition. Garnissez le fond de tarte du mélange ricotta/grana (présure microbienne). Enroulez les lamelles de légumes sur elles-mêmes pour faire comme des petites fleurs. Déposez-les debout sur le mélange ricotta/grana (présure microbienne). Lorsque le fond de tarte est entièrement garni de fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes. Une fois cuite, vous pouvez assaisonner la tarte selon votre envie."
      pro:
      - "Réaliser une pâte sablée ou brisée et la précuire dans un plat à tarte. Dans un récipient, mélanger la ricotta, l’œuf, le grana (présure microbienne) et le thym. Assaisonner et laisser de côté."
      - "Éplucher les carottes et les courgettes et les couper en lamelles à l’aide d’un économe ou d’une mandoline."
      - "Garnir le fond de tarte du mélange ricotta/grana (présure microbienne). Enrouler les lamelles de légumes sur elles-mêmes pour former comme de petites fleurs. Les déposer debout sur le mélange ricotta/grana (présure microbienne). Lorsque le fond est entièrement garni, enfourner à 180° pendant 30 à 40 minutes. Option : assaisonner selon l’envie."
      cavernes:
      - "Préparation. Pâte sablée ou brisée, réaliser, plat tarte, précuire. Récipient : ricotta, œuf, grana (présure microbienne), thym, mélanger. Assaisonner, laisser de côté."
      - "Cuisson. Carottes, courgettes, éplucher, lamelles, économe ou mandoline, couper."
      - "Finition. Fond tarte, mélange ricotta/grana (présure microbienne), garnir. Lamelles légumes, enrouler, petites fleurs. Debout, mélange ricotta/grana (présure microbienne), déposer. Fond tarte, fleurs légumes, entier, garni : Four 180°, 30 à 40 min, enfourner. Option : assaisonner, envie."
    kcal_per_serving: 244
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
    - pesco
    - vegan
    allergens:
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: g
      item: fromage végétal
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
    - qty: 60
      unit: g
      item: parmesan végétal ou levure maltée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du thym
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 4
      unit: piece
      item: carottes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courgette jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: courgette verte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pâte brisée vegan (à la margarine)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Réaliser une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient,
      mélangez la fromage végétal, l’œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu
      soyeux, le parmesan végétal ou levure maltée et le thym. Assaisonnez et laissez de côté.
    - Cuisson. Épluchez les carottes et les courgettes et coupez-les en lamelles grâce à un économe
      ou une mandoline. Cette étape prend du temps, n’hésitez pas à regarder une Stream Twitch
      pendant ce temps 😉
    - Finition. Garnissez le fond de tarte du mélange fromage végétal/parmesan végétal ou levure maltée.
      Enroulez les lamelles de légumes sur elles-même pour faire comme des petites fleurs.
      Déposez-les debout sur le mélange fromage végétal/parmesan végétal ou levure maltée.
      N’hésitez pas à vous faire aider ! Lorsque le fond de tarte est entièrement garni de
      fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes. Une fois cuite, vous pouvez
      assaisonner la tarte selon votre envie et la déguster ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Réalisez une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient, mélangez le fromage végétal, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, le parmesan végétal ou la levure maltée et le thym. Assaisonnez et laissez de côté."
      - "Cuisson. Épluchez les carottes et les courgettes et coupez-les en lamelles à l’aide d’un économe ou d’une mandoline."
      - "Finition. Garnissez le fond de tarte du mélange fromage végétal/parmesan végétal ou levure maltée. Enroulez les lamelles de légumes sur elles-mêmes pour faire comme des petites fleurs. Déposez-les debout sur le mélange fromage végétal/parmesan végétal ou levure maltée. Lorsque le fond de tarte est entièrement garni de fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes. Une fois cuite, vous pouvez assaisonner la tarte selon votre envie."
      pro:
      - "Réaliser une pâte sablée ou brisée et la précuire dans un plat à tarte. Dans un récipient, mélanger le fromage végétal, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, le parmesan végétal ou la levure maltée et le thym. Assaisonner et laisser de côté."
      - "Éplucher les carottes et les courgettes et les couper en lamelles à l’aide d’un économe ou d’une mandoline."
      - "Garnir le fond de tarte du mélange fromage végétal/parmesan végétal ou levure maltée. Enrouler les lamelles de légumes sur elles-mêmes pour former comme de petites fleurs. Les déposer debout sur le mélange fromage végétal/parmesan végétal ou levure maltée. Lorsque le fond est entièrement garni, enfourner à 180° pendant 30 à 40 minutes. Option : assaisonner selon l’envie."
      cavernes:
      - "Préparation. Pâte sablée ou brisée, réaliser, plat tarte, précuire. Récipient : fromage végétal, œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, parmesan végétal ou levure maltée, thym, mélanger. Assaisonner, laisser de côté."
      - "Cuisson. Carottes, courgettes, éplucher, lamelles, économe ou mandoline, couper."
      - "Finition. Fond tarte, mélange fromage végétal/parmesan végétal ou levure maltée, garnir. Lamelles légumes, enrouler, petites fleurs. Debout, mélange fromage végétal/parmesan végétal ou levure maltée, déposer. Fond tarte, fleurs légumes, entier, garni : Four 180°, 30 à 40 min, enfourner. Option : assaisonner, envie."
    kcal_per_serving: 244
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
    kcal_per_serving: 244
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Tarte colorée et fleurie
**Équipement :** [[mandoline]] · [[econome]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tarte-coloree-et-fleurie]]

## Ingrédients (4 personnes)

- 500 g de ricotta
- 1 oeuf
- 60 g de parmesan
-  du thym
- 4 carottes
- 1 courgette jaune
- 1 courgette verte
- 1 pâte sablée ou brisée

## Préparation

1. Réaliser une pâte sablée ou brisée et précuisez-la dans un plat à tarte. Dans un récipient, mélangez la ricotta, l’oeuf, le parmesan et le thym. Assaisonnez et laissez de côté.
2. Épluchez les carottes et les courgettes et coupez-les en lamelles grâce à un économe ou une mandoline. Cette étape prend du temps, n’hésitez pas à regarder une Stream Twitch pendant ce temps 😉
3. Garnissez le fond de tarte du mélange ricotta/parmesan. Enroulez les lamelles de légumes sur elles-même pour faire comme des petites fleurs. Déposez-les debout sur le mélange ricotta/parmesan. N’hésitez pas à vous faire aider ! Lorsque le fond de tarte est entièrement garni de fleurs de légumes, enfournez à 180° pendant 30 à 40 minutes.

 
 

 
 Une fois cuite, vous pouvez assaisonner la tarte selon votre envie et la déguster ! Bon appétit !
