---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: crepes-flambees-au-rhum
title: Crêpes flambées au rhum
lang: fr
description: "Crêpes flambées au rhum : recette française avec lait, farine et oeuf, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- crêpes
- rhum
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/crepes-flambees-au-rhum.webp
  alt: Crêpes flambées au rhum
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/crepes-flambees-au-rhum.md
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine ; œuf de lin (1 c.à.s. lin + 3 c.à.s.
      eau / œuf) ou tofu soyeux → pois chiches rôtis ; crème de soja (liaison) ou amidon →
      crème d''avoine.'
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
histoire: 'Crêpe de blé sucrée, flambée au rhum. La crêpe de froment est le versant sucré, distinct de
  la galette de sarrasin. Le flambage au rhum est un geste de dessert, pas forcément les crêpes Suzette
  (agrume, liqueur d’orange).

  '
fun_facts:
- text: Les crêpes Suzette, elles, se flambent plutôt à la liqueur d’orange, pas au rhum.
  source_name: Wikipedia, Crêpe Suzette
  source_url: https://en.wikipedia.org/wiki/Crêpe_Suzette
- text: Une pâte trop épaisse fait une galette ; trop liquide, elle se déchire à la poêle.
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Crêpes flambées au rhum ».'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Crêpe_Suzette
wines:
- name: Coteaux du Layon
  producer: Domaine Ogereau
  origin: Saint-Lambert-du-Lattay, Anjou
  grapes: chenin blanc
  award:
  why: Pomme, miel — le sucre de la crêpe, le rhum en fond.
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise, Rhône
  grapes: muscat
  award:
  why: Raisin frais — plus léger que le rhum, sur la pâte à œufs.
- name: Clairette de Die
  producer: Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Bulles douces — la crêpe chaude, sans un liquoreux lourd.
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
      prep_min: 70
      cook_min: 10
      rest_min: 0
      total_min: 80
    equipment: &id002
    - casserole
    - poêle
    - saladier
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 500
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: jaune d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille (ou extrait de vanille)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: rhum
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un récipient, cassez les oeufs ainsi et ajoutez-y le jaune d’oeuf seul. Ajoutez
      le sucre et mélangez avec un fouet.
    - Mélange. Ajoutez progressivement la farine tout en mélangeant avec le fouet. Complétez avec de
      l’extrait de vanille et le rhum, puis mélangez. Versez le lait, puis mélangez de nouveau.
    - Cuisson. Dans une casserole, faites fondre le beurre. Dès qu’il est fondu, versez-le dans l’appareil
      à crêpes et mélangez. Votre appareil est terminé, laissez-le reposer au frais pendant
      environ 1h.
    - Repos. Après l’avoir sorti du frigo, mélangez une dernière fois votre appareil. Faites ensuite
      chauffer une poêle à crêpes avec un peu d’huile végétale.
    - Cuisson. Versez une louche de votre appareil dans la poêle et répartissez la pâte jusqu’à former
      une crêpe bien lisse. Laissez dorer le premier côté, puis retourner la crêpe pour faire
      cuire le second.
    - Finition. Si comme Jigmé vous êtes gourmands, déposez un peu de beurre sur votre crêpe une fois
      que vous l’avez retourné dans la poêle. Saupoudrez d’un peu de sucre et repliez-la.
      Ajoutez un peu de rhum, laissez quelques secondes, puis faites flamber la crêpe. Pour
      les amateurs de crêpes bien gourmande, il y a aussi notre recette au chocolat et à la
      banane et à la chantilly ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, cassez les œufs et ajoutez-y le jaune d’œuf seul. Ajoutez le sucre et mélangez avec un fouet."
      - "Mélange. Ajoutez progressivement la farine tout en mélangeant avec le fouet. Complétez avec de l’extrait de vanille et le rhum, puis mélangez. Versez le lait, puis mélangez de nouveau."
      - "Cuisson. Dans une casserole, faites fondre le beurre. Dès qu’il est fondu, versez-le dans l’appareil à crêpes et mélangez. Laissez reposer l’appareil au frais pendant environ 1 h."
      - "Repos. Sortez l’appareil du frigo, mélangez une dernière fois. Faites chauffer une poêle à crêpes avec un peu d’huile végétale."
      - "Cuisson. Versez une louche d’appareil dans la poêle et répartissez la pâte jusqu’à former une crêpe bien lisse. Laissez dorer le premier côté, puis retournez la crêpe pour cuire le second."
      - "Finition. Déposez un peu de beurre sur la crêpe une fois retournée dans la poêle. Saupoudrez d’un peu de sucre et repliez-la. Ajoutez un peu de rhum, laissez quelques secondes, puis faites flamber la crêpe."
      pro:
      - "Préparation. Casser les œufs dans un récipient. Ajouter le jaune d’œuf seul, puis le sucre. Mélanger au fouet."
      - "Mélange. Ajouter progressivement la farine en mélangeant au fouet. Compléter avec l’extrait de vanille et le rhum. Verser le lait. Mélanger."
      - "Cuisson. Faire fondre le beurre en casserole. Verser fondu dans l’appareil à crêpes. Mélanger. Reposer au frais environ 1 h."
      - "Repos. Sortir du frigo. Mélanger une dernière fois. Chauffer une poêle à crêpes avec un peu d’huile végétale."
      - "Cuisson. Verser une louche d’appareil. Répartir jusqu’à crêpe lisse. Dorer le premier côté. Retourner. Cuire le second."
      - "Finition. Déposer un peu de beurre sur la crêpe retournée. Saupoudrer d’un peu de sucre. Replier. Ajouter un peu de rhum, quelques secondes. Flamber."
      cavernes:
      - "Préparation. Récipient. Œufs, casser, jaune d’œuf seul. Sucre, fouet, mélanger."
      - "Mélange. Farine, ajouter progressivement, fouet. Extrait vanille, rhum, mélanger. Lait, verser, mélanger encore."
      - "Cuisson. Casserole. Beurre, fondre. Fondu : verser appareil crêpes, mélanger. Appareil, reposer frais environ 1 h."
      - "Repos. Frigo, sortir. Appareil, mélanger dernière fois. Poêle crêpes, peu huile végétale, chauffer."
      - "Cuisson. Louche appareil, verser poêle. Pâte, répartir jusqu’à crêpe lisse. Premier côté, dorer. Crêpe, retourner, second, cuire."
      - "Finition. Peu beurre, déposer crêpe retournée poêle. Peu sucre, saupoudrer. Replier. Peu rhum, quelques secondes. Flamber."
    kcal_per_serving: 456
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
    kcal_per_serving: 456
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
    - qty: 500
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille (ou extrait de vanille)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: rhum
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Mélange. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, plus la crème de soja (liaison) ou l’amidon. Ajoutez le sucre et mélangez avec un fouet.
    - Mélange. Ajoutez progressivement la farine tout en mélangeant avec le fouet. Complétez avec de
      l’extrait de vanille et le rhum, puis mélangez. Versez le lait d'avoine ou soja, puis
      mélangez de nouveau.
    - Cuisson. Dans une casserole, faites fondre la margarine végétale. Dès qu’elle est fondue,
      versez-la dans l’appareil à crêpes et mélangez. Votre appareil est terminé, laissez-le
      reposer au frais pendant environ 1h.
    - Repos. Après l’avoir sorti du frigo, mélangez une dernière fois votre appareil. Faites ensuite
      chauffer une poêle à crêpes avec un peu d’huile végétale.
    - Cuisson. Versez une louche de votre appareil dans la poêle et répartissez la pâte jusqu’à former
      une crêpe bien lisse. Laissez dorer le premier côté, puis retourner la crêpe pour faire
      cuire le second.
    - Finition. Si comme Jigmé vous êtes gourmands, déposez un peu de margarine végétale
      sur votre crêpe une fois que vous l’avez retourné dans la poêle. Saupoudrez d’un peu
      de sucre et repliez-la. Ajoutez un peu de rhum, laissez quelques secondes, puis faites
      flamber la crêpe. Pour les amateurs de crêpes bien gourmande, il y a aussi notre recette
      au chocolat et à la banane et à la chantilly ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, plus la crème de soja (liaison) ou l’amidon. Ajoutez le sucre et mélangez avec un fouet."
      - "Mélange. Ajoutez progressivement la farine tout en mélangeant avec le fouet. Complétez avec de l’extrait de vanille et le rhum, puis mélangez. Versez le lait d’avoine ou de soja, puis mélangez de nouveau."
      - "Cuisson. Dans une casserole, faites fondre la margarine végétale. Dès qu’elle est fondue, versez-la dans l’appareil à crêpes et mélangez. Laissez reposer l’appareil au frais pendant environ 1 h."
      - "Repos. Sortez l’appareil du frigo, mélangez une dernière fois. Faites chauffer une poêle à crêpes avec un peu d’huile végétale."
      - "Cuisson. Versez une louche d’appareil dans la poêle et répartissez la pâte jusqu’à former une crêpe bien lisse. Laissez dorer le premier côté, puis retournez la crêpe pour cuire le second."
      - "Finition. Déposez un peu de margarine végétale sur la crêpe une fois retournée dans la poêle. Saupoudrez d’un peu de sucre et repliez-la. Ajoutez un peu de rhum, laissez quelques secondes, puis faites flamber la crêpe."
      pro:
      - "Mélange. Verser dans un récipient l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, plus la crème de soja (liaison) ou l’amidon. Ajouter le sucre. Mélanger au fouet."
      - "Mélange. Ajouter progressivement la farine en mélangeant au fouet. Compléter avec l’extrait de vanille et le rhum. Verser le lait d’avoine ou de soja. Mélanger."
      - "Cuisson. Faire fondre la margarine végétale en casserole. Verser fondue dans l’appareil à crêpes. Mélanger. Reposer au frais environ 1 h."
      - "Repos. Sortir du frigo. Mélanger une dernière fois. Chauffer une poêle à crêpes avec un peu d’huile végétale."
      - "Cuisson. Verser une louche d’appareil. Répartir jusqu’à crêpe lisse. Dorer le premier côté. Retourner. Cuire le second."
      - "Finition. Déposer un peu de margarine végétale sur la crêpe retournée. Saupoudrer d’un peu de sucre. Replier. Ajouter un peu de rhum, quelques secondes. Flamber."
      cavernes:
      - "Mélange. Récipient. Œuf lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, plus crème soja liaison ou amidon. Sucre, fouet, mélanger."
      - "Mélange. Farine, ajouter progressivement, fouet. Extrait vanille, rhum, mélanger. Lait d’avoine ou soja, verser, mélanger encore."
      - "Cuisson. Casserole. Margarine végétale, fondre. Fondue : verser appareil crêpes, mélanger. Appareil, reposer frais environ 1 h."
      - "Repos. Frigo, sortir. Appareil, mélanger dernière fois. Poêle crêpes, peu huile végétale, chauffer."
      - "Cuisson. Louche appareil, verser poêle. Pâte, répartir jusqu’à crêpe lisse. Premier côté, dorer. Crêpe, retourner, second, cuire."
      - "Finition. Peu margarine végétale, déposer crêpe retournée poêle. Peu sucre, saupoudrer. Replier. Peu rhum, quelques secondes. Flamber."
    kcal_per_serving: 375
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
    kcal_per_serving: 456
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Crêpes flambées au rhum

![[crepes-flambees-au-rhum.webp]]
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/crepes-flambees-au-rhum]]

## Ingrédients (4 personnes)

- 50 cL de lait
- 200 g de farine
- 3 oeuf
- 1 jaune d'oeuf
- 40 g de sucre
- 40 g de beurre
- 1 gousse de vanille (ou extrait de vanille)
-  rhum

## Préparation

1. Dans un récipient, cassez les oeufs ainsi et ajoutez-y le jaune d’oeuf seul. Ajoutez le sucre et mélangez avec un fouet.
2. Ajoutez progressivement la farine tout en mélangeant avec le fouet. Complétez avec de l’extrait de vanille et le rhum, puis mélangez. Versez le lait, puis mélangez de nouveau.
3. Dans une casserole, faites fondre le beurre. Dès qu’il est fondu, versez-le dans l’appareil à crêpes et mélangez. Votre appareil est terminé, laissez-le reposer au frais pendant environ 1h.
4. Après l’avoir sorti du frigo, mélangez une dernière fois votre appareil. Faites ensuite chauffer une poêle à crêpes avec un peu d’huile végétale.
5. Versez une louche de votre appareil dans la poêle et répartissez la pâte jusqu’à former une crêpe bien lisse. Laissez dorer le premier côté, puis retourner la crêpe pour faire cuire le second.
6. Si comme Jigmé vous êtes gourmands, déposez un peu de beurre sur votre crêpe une fois que vous l’avez retourné dans la poêle. Saupoudrez d’un peu de sucre et repliez-la. Ajoutez un peu de rhum, laissez quelques secondes, puis faites flamber la crêpe.

 
 

 
 Pour les amateurs de crêpes bien gourmande, il y a aussi notre recette au chocolat et à la banane et à la chantilly ! Bon appétit !
