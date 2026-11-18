---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: oeufs-farcis-chimay
title: Œufs farcis Chimay
lang: fr
description: "Œufs farcis Chimay : recette française avec œuf, échalote et oignon jaune, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- œufs
- végétarien
- œuf
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/oeufs-farcis-chimay.jpg
  alt: Œufs farcis Chimay
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/oeufs-farcis-chimay.md
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
    - from: fromage râpé
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
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; lait d''avoine ou soja → lait d''avoine ; crème de soja (liaison) ou amidon
      → crème d''avoine.'
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
  Œufs durs farcis, souvent duxelles de champignons, nappés de Mornay et gratinés.
  Le nom Chimay renvoie à la ville belge ; une paternité unique (un cuisinier,
  une princesse) n’est pas tranchée ici. Geste de cuisine française et belge,
  pas un plat de brasserie daté.
fun_facts:
- text: >
    La Mornay, c’est une béchamel fromagée : trop liquide, elle nappe mal ; trop
    réduite, elle croûte avant que l’œuf soit chaud.
  source_name: Usage
  source_url:
- text: >
    On farcit le blanc, on nappe, on gratine : ce n’est pas un œuf mimosa froid.
  source_name: Usage
  source_url:
wines:
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — l’œuf gratiné, sans un champagne.
- name: Rully
  producer: Antonin Rodet
  origin: Rully, Bourgogne
  grapes: chardonnay
  award:
  why: Blanc de Bourgogne — la Mornay et le champignon.
- name: Coteaux du Giennois
  producer: Domaine de Villargeau
  origin: Giennois, Loire
  grapes: sauvignon
  award:
  why: Blanc vif — coupe le fromage du gratin.
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
      prep_min: 45
      cook_min: 25
      rest_min: 0
      total_min: 70
    equipment: &id002
    - four
    - poêle
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 6
      unit: piece
      item: œuf
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
    - qty: 1
      unit: piece
      item: oignon jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaune d'œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage râpé
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
    - Cuisson. Faites cuire les oeufs 10 à 12 minutes dans de l’eau bouillante avant de les écaler.
      Couper finement l’oignon, l’échalote, les champignons et le persil. Dans une poêle avec
      du beurre, faites d’abord suer les oignons et les échalotes, ajoutez ensuite les champignons,
      puis en fin de cuisson, ajoutez le persil et assaisonnez.
    - 'Cuisson. Réalisez un roux : pour cela, faites fondre le beurre, puis ajoutez-y la même quantité
      de farine. Mélangez bien et laissez cuire quelques minutes. Laissez refroidir le roux
      hors du feu. Lorsqu’il est suffisamment froid, ajoutez-y le lait bouillant en mélangeant
      à l’aide d’un fouet pour éviter tous grumeaux. Assaisonnez et ajoutez du fromage râpé
      et le jaune d’oeuf avant de mélanger à nouveau. Votre sauce Mornay est prête !'
    - Finition. Coupez les oeufs durs en deux et séparez les jaunes des blancs. Incorporez les jaunes
      à votre farce aux champignons et ajoutez-y un peu de sauce Mornay pour lier le tout.
      Mélangez. Garnissez les blancs d’oeufs de cette préparation à l’aide d’une cuillère
      ou d’une poche à douille. Déposez-les dans un plat allant au four et versez par-dessus
      la sauce Mornay et un peu de fromage râpé. Enfournez environ 10 minutes à 200° puis
      3 à 5 minutes en mode grill à 250°. Vos oeufs gratinés sont prêts ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les œufs 10 à 12 minutes dans de l’eau bouillante avant de les écaler. Coupez finement l’oignon, l’échalote, les champignons et le persil. Dans une poêle avec du beurre, faites d’abord suer les oignons et les échalotes, ajoutez ensuite les champignons, puis en fin de cuisson, ajoutez le persil et assaisonnez."
      - "Cuisson. Réalisez un roux : pour cela, faites fondre le beurre, puis ajoutez-y la même quantité de farine. Mélangez bien et laissez cuire quelques minutes. Laissez refroidir le roux [[hors-du-feu|hors du feu]]. Lorsqu’il est suffisamment froid, ajoutez-y le lait bouillant en mélangeant à l’aide d’un fouet pour éviter tous grumeaux. Assaisonnez et ajoutez du fromage [[raper|râpé]] et le jaune d’œuf avant de mélanger à nouveau."
      - "Finition. Coupez les œufs durs en deux et séparez les jaunes des blancs. Incorporez les jaunes à votre farce aux champignons et ajoutez-y un peu de sauce Mornay pour lier le tout. Mélangez. Garnissez les blancs d’œufs de cette préparation à l’aide d’une cuillère ou d’une poche à douille. Déposez-les dans un plat allant au four et versez par-dessus la sauce Mornay et un peu de fromage [[raper|râpé]]. Enfournez environ 10 minutes à 200° puis 3 à 5 minutes en mode grill à 250°."
      pro:
      - "Cuire les œufs 10 à 12 minutes à l’eau bouillante. Écaler. Couper finement oignon, échalote, champignons et persil. Suer d’abord oignons et échalotes au beurre. Ajouter les champignons. En fin de cuisson, ajouter le persil. Assaisonner."
      - "Réaliser un roux : fondre le beurre, ajouter la même quantité de farine. Mélanger. Cuire quelques minutes. Refroidir le roux hors du feu. Suffisamment froid : ajouter le lait bouillant au fouet, sans grumeaux. Assaisonner. Ajouter le fromage râpé et le jaune d’œuf. Mélanger."
      - "Couper les œufs durs en deux. Séparer jaunes et blancs. Incorporer les jaunes à la farce aux champignons. Lier avec un peu de sauce Mornay. Mélanger. Garnir les blancs d’œufs, cuillère ou poche à douille. Déposer dans un plat allant au four. Verser la sauce Mornay et un peu de fromage râpé. Enfourner environ 10 minutes à 200°, puis 3 à 5 minutes en mode grill à 250°."
      cavernes:
      - "Cuisson. Œufs, 10 à 12 min, eau bouillante, cuire. Écaler. Oignon échalote champignons persil, couper finement. Poêle, beurre. Oignons échalotes, suer d’abord. Champignons, ajouter. Fin cuisson, persil, ajouter. Assaisonner."
      - "Cuisson. Roux. Beurre, fondre. Même quantité farine, ajouter. Mélanger. Quelques minutes, cuire. Roux, hors feu, refroidir. Suffisamment froid. Lait bouillant, fouet, ajouter, mélanger. Grumeaux, éviter. Assaisonner. Fromage râpé, jaune d’œuf, ajouter, mélanger."
      - "Finition. Œufs durs, couper deux. Jaunes, blancs, séparer. Jaunes, farce champignons, incorporer. Sauce Mornay, peu, lier. Mélanger. Blancs œufs, garnir, cuillère ou poche à douille. Plat four, déposer. Sauce Mornay, fromage râpé, dessus. Four environ 10 min 200°. Grill 3 à 5 min 250°."
    kcal_per_serving: 442
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
    kcal_per_serving: 442
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
    - qty: 6
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
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
    - qty: 1
      unit: piece
      item: oignon jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: champignons de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: fromage végétal
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
    - Préparation. Coupez le tofu ferme en deux dans la longueur pour former des barquettes, évidez légèrement le centre.
      Couper finement l’oignon, l’échalote, les champignons et le persil. Dans une poêle avec
      de la margarine végétale, faites d’abord suer les oignons
      et les échalotes, ajoutez ensuite les champignons, puis en fin de cuisson, ajoutez le
      persil et assaisonnez.
    - 'Cuisson. Réalisez un roux : pour cela, faites fondre la margarine végétale,
      puis ajoutez-y la même quantité de farine. Mélangez bien et laissez cuire
      quelques minutes. Laissez refroidir le roux hors du feu. Lorsqu’il est suffisamment
      froid, ajoutez-y le lait d''avoine ou soja bouillant en mélangeant à l’aide d’un fouet
      pour éviter tous grumeaux. Assaisonnez et ajoutez du fromage végétal avant de mélanger à nouveau. Votre sauce Mornay est prête !'
    - Cuisson. Incorporez le tofu retiré du centre à la farce aux champignons, liez avec un peu de sauce Mornay. Garnissez les barquettes de tofu. Déposez-les dans un plat allant au four et versez par-dessus
      la sauce Mornay et un peu de fromage végétal. Enfournez environ 10 minutes à 200° puis
      3 à 5 minutes en mode grill à 250°. C’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez le tofu ferme en deux dans la longueur pour former des barquettes, évidez légèrement le centre. Coupez finement l’oignon, l’échalote, les champignons et le persil. Dans une poêle avec de la margarine végétale, faites d’abord suer les oignons et les échalotes, ajoutez ensuite les champignons, puis en fin de cuisson, ajoutez le persil et assaisonnez."
      - "Cuisson. Réalisez un roux : pour cela, faites fondre la margarine végétale, puis ajoutez-y la même quantité de farine. Mélangez bien et laissez cuire quelques minutes. Laissez refroidir le roux [[hors-du-feu|hors du feu]]. Lorsqu’il est suffisamment froid, ajoutez-y le lait d’avoine ou soja bouillant en mélangeant à l’aide d’un fouet pour éviter tous grumeaux. Assaisonnez et ajoutez du fromage végétal avant de mélanger à nouveau."
      - "Cuisson. Incorporez le tofu retiré du centre à la farce aux champignons, liez avec un peu de sauce Mornay. Garnissez les barquettes de tofu. Déposez-les dans un plat allant au four et versez par-dessus la sauce Mornay et un peu de fromage végétal. Enfournez environ 10 minutes à 200° puis 3 à 5 minutes en mode grill à 250°."
      pro:
      - "Couper le tofu ferme en deux dans la longueur pour former des barquettes. Évider légèrement le centre. Couper finement oignon, échalote, champignons et persil. Suer d’abord oignons et échalotes à la margarine végétale. Ajouter les champignons. En fin de cuisson, ajouter le persil. Assaisonner."
      - "Réaliser un roux : fondre la margarine végétale, ajouter la même quantité de farine. Mélanger. Cuire quelques minutes. Refroidir le roux hors du feu. Suffisamment froid : ajouter le lait d’avoine ou soja bouillant au fouet, sans grumeaux. Assaisonner. Ajouter le fromage végétal. Mélanger."
      - "Incorporer le tofu retiré du centre à la farce aux champignons. Lier avec un peu de sauce Mornay. Garnir les barquettes de tofu. Déposer dans un plat allant au four. Verser la sauce Mornay et un peu de fromage végétal. Enfourner environ 10 minutes à 200°, puis 3 à 5 minutes en mode grill à 250°."
      cavernes:
      - "Préparation. Tofu ferme, couper deux, longueur, barquettes. Centre, évider légèrement. Oignon échalote champignons persil, couper finement. Poêle, margarine végétale. Oignons échalotes, suer d’abord. Champignons, ajouter. Fin cuisson, persil, ajouter. Assaisonner."
      - "Cuisson. Roux. Margarine végétale, fondre. Même quantité farine, ajouter. Mélanger. Quelques minutes, cuire. Roux, hors feu, refroidir. Suffisamment froid. Lait d’avoine ou soja bouillant, fouet, ajouter, mélanger. Grumeaux, éviter. Assaisonner. Fromage végétal, ajouter, mélanger."
      - "Cuisson. Tofu retiré centre, farce champignons, incorporer. Sauce Mornay, peu, lier. Barquettes tofu, garnir. Plat four, déposer. Sauce Mornay, fromage végétal, dessus. Four environ 10 min 200°. Grill 3 à 5 min 250°."
    kcal_per_serving: 332
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
    kcal_per_serving: 442
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "48 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "œufs crus ou peu cuits"

---

# Œufs farcis Chimay
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/oeufs-farcis-chimay.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/oeufs-farcis-chimay]]

## Ingrédients (4 personnes)

- 6 œuf
- 2 échalote
- 1 oignon jaune
- 250 g de champignons de Paris
- 50 g de beurre
- 50 g de farine
- 50 cl de lait
- 2 jaune d'œuf
-  fromage râpé
-  persil

## Préparation

1. Faites cuire les oeufs 10 à 12 minutes dans de l’eau bouillante avant de les écaler. Couper finement l’oignon, l’échalote, les champignons et le persil. Dans une poêle avec du beurre, faites d’abord suer les oignons et les échalotes, ajoutez ensuite les champignons, puis en fin de cuisson, ajoutez le persil et assaisonnez.
2. Réalisez un roux : pour cela, faites fondre le beurre, puis ajoutez-y la même quantité de farine. Mélangez bien et laissez cuire quelques minutes. Laissez refroidir le roux hors du feu. Lorsqu’il est suffisamment froid, ajoutez-y le lait bouillant en mélangeant à l’aide d’un fouet pour éviter tous grumeaux. Assaisonnez et ajoutez du fromage râpé et le jaune d’oeuf avant de mélanger à nouveau. Votre sauce Mornay est prête !
3. Coupez les oeufs durs en deux et séparez les jaunes des blancs. Incorporez les jaunes à votre farce aux champignons et ajoutez-y un peu de sauce Mornay pour lier le tout. Mélangez. Garnissez les blancs d’oeufs de cette préparation à l’aide d’une cuillère ou d’une poche à douille. Déposez-les dans un plat allant au four et versez par-dessus la sauce Mornay et un peu de fromage râpé. Enfournez environ 10 minutes à 200° puis 3 à 5 minutes en mode grill à 250°.

 
 

 
 Vos oeufs gratinés sont prêts ! Bon appétit !
