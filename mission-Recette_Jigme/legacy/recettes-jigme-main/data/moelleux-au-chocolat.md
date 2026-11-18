---
schema: recette-web-jigme/v2
slug: moelleux-au-chocolat
title: Moelleux au chocolat
lang: fr
description: "Moelleux au chocolat : recette française avec chocolat, œuf et sucre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- chocolat
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/moelleux-au-chocolat.webp
  alt: Moelleux au chocolat
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/moelleux-au-chocolat.md
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
histoire: 'Gâteau au chocolat à cœur coulant (mi-cuit, coulant). Extérieur cuit, centre liquide. Dessert
  français, à ne pas confondre avec le fondant très peu fariné. Plusieurs paternités circulent (années
  1980, restaurants) ; aucune n’est tranchée ici, donc pas d’année affichée comme fait.

  '
fun_facts:
- text: >
    Le cœur coule si la cuisson s’arrête tôt : une minute de trop, et ce n’est
    plus un moelleux, c’est un gâteau.
  source_name: Grokipedia, Molten chocolate cake
  source_url: https://grokipedia.com/page/Molten_chocolate_cake
- text: >
    Le fondant au chocolat, lui, est une pâte dense beurre-chocolat, peu de farine :
    pas le même gâteau.
  source_name: Wikipedia, Molten chocolate cake
  source_url: https://en.wikipedia.org/wiki/Molten_chocolate_cake
wines:
- name: Banyuls
  producer: Domaine Vial Magnères
  origin: Banyuls, Roussillon
  grapes: grenache
  award:
  why: VDN grenache, cacao — le cœur coulant, sucré-amer.
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cerise noire, cacao — le gâteau chaud, tanin doux.
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin moelleux — le chocolat amer, sans un porto.
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
      cook_min: 6
      rest_min: 0
      total_min: 36
    equipment: &id002
    - four
    - saladier
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 100
      unit: g
      item: chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 110
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cacao
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Mettre le beurre et le chocolat ensemble dans un bain marie et ajoutez le lait sans
      attendre que les ingrédients n’aient fondu.
    - Mélange. Cassez les trois œufs avec le sucre versé au préalable dans un bol et mélangez. Rajoutez
      dans cette préparation le chocolat, le beurre et le lait et mélangez à nouveau.
    - Mélange. Ajoutez la farine et le cacao et mélangez une troisième fois !
    - Finition. Une fois que les moules sont beurrés et fleurés, versez votre préparation. Placez les
      ensuite au four à 190°C et laissez les cuire pendant 6 min. La cuisson du moelleux au
      chocolat est toujours délicate, vérifiez à l’aide d’un couteau si la cuisson vous convient.
      Si le coeur n’est pas assez fondant ou coulant c’est que votre moelleux est devenu un
      gâteau chocolat, ne baissez pas les bras et réessayez !
    steps_niveaux:
      amateur:
      - "Préparation. Mettez le beurre et le chocolat ensemble dans une casserole au-dessus d’eau frémissante et ajoutez le lait sans attendre que les ingrédients n’aient fondu."
      - "Mélange. Cassez les trois œufs avec le sucre versé au préalable dans un bol et mélangez. Rajoutez dans cette préparation le chocolat, le beurre et le lait et mélangez à nouveau."
      - "Mélange. Ajoutez la farine et le cacao et mélangez une troisième fois !"
      - "Finition. Une fois que les moules sont beurrés et fleurés, versez votre préparation. Placez-les ensuite au four à 190°C et laissez-les cuire pendant 6 min. La cuisson du moelleux au chocolat est toujours délicate, vérifiez à l’aide d’un couteau si la cuisson vous convient. Si le cœur n’est pas assez fondant ou coulant c’est que votre moelleux est devenu un gâteau chocolat, ne baissez pas les bras et réessayez !"
      pro:
      - "Mettre le beurre et le chocolat ensemble dans une casserole au-dessus d’eau frémissante. Ajouter le lait sans attendre que les ingrédients aient fondu."
      - "Casser les trois œufs avec le sucre versé au préalable dans un bol. Mélanger. Ajouter le chocolat, le beurre et le lait. Mélanger à nouveau."
      - "Ajouter la farine et le cacao. Mélanger une troisième fois."
      - "Moules beurrés et fleurés. Verser la préparation. Four 190 °C, 6 min. Vérifier au couteau. Cœur trop cuit : gâteau au chocolat. Recommencer."
      cavernes:
      - "Préparation. Beurre, chocolat, casserole dessus eau frémissante. Lait, ajouter, sans attendre fonte."
      - "Mélange. Trois œufs, casser. Sucre déjà dans bol. Mélanger. Chocolat, beurre, lait, rajouter. Mélanger encore."
      - "Mélange. Farine, cacao, ajouter. Mélanger troisième fois."
      - "Finition. Moules beurrés fleurés. Préparation, verser. Four 190°C, 6 min. Couteau, vérifier. Cœur pas assez fondant ou coulant : gâteau chocolat. Réessayer."
    kcal_per_serving: 394
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
    kcal_per_serving: 394
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
    - qty: 100
      unit: g
      item: chocolat
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
    - qty: 110
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cacao
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: l'huile
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Mettre la margarine végétale et le chocolat ensemble dans un bain marie
      et ajoutez le lait d'avoine ou soja sans attendre que les ingrédients n’aient fondu.
    - Mélange. Mélangez l’œuf de lin (ou le tofu soyeux) avec le sucre versé au préalable dans un bol et mélangez. Rajoutez dans cette préparation
      le chocolat, la margarine végétale et le lait d'avoine ou soja et mélangez
      à nouveau.
    - Mélange. Ajoutez la farine et le cacao et mélangez une troisième fois !
    - Finition. Une fois que les moules sont graissés avec de la margarine végétale et farinés, versez votre préparation. Placez les
      ensuite au four à 190°C et laissez les cuire pendant 6 min. La cuisson du moelleux au
      chocolat est toujours délicate, vérifiez à l’aide d’un couteau si la cuisson vous convient.
      Si le coeur n’est pas assez fondant ou coulant c’est que votre moelleux est devenu un
      gâteau chocolat, ne baissez pas les bras et réessayez !
    steps_niveaux:
      amateur:
      - "Préparation. Mettez la margarine végétale et le chocolat ensemble dans une casserole au-dessus d’eau frémissante et ajoutez le lait d'avoine ou soja sans attendre que les ingrédients n’aient fondu."
      - "Mélange. Mélangez l’œuf de lin (ou le tofu soyeux) avec le sucre versé au préalable dans un bol et mélangez. Rajoutez dans cette préparation le chocolat, la margarine végétale et le lait d'avoine ou soja et mélangez à nouveau."
      - "Mélange. Ajoutez la farine et le cacao et mélangez une troisième fois !"
      - "Finition. Une fois que les moules sont graissés avec de la margarine végétale et farinés, versez votre préparation. Placez-les ensuite au four à 190°C et laissez-les cuire pendant 6 min. La cuisson du moelleux au chocolat est toujours délicate, vérifiez à l’aide d’un couteau si la cuisson vous convient. Si le cœur n’est pas assez fondant ou coulant c’est que votre moelleux est devenu un gâteau chocolat, ne baissez pas les bras et réessayez !"
      pro:
      - "Mettre la margarine végétale et le chocolat ensemble dans une casserole au-dessus d’eau frémissante. Ajouter le lait d'avoine ou soja sans attendre que les ingrédients aient fondu."
      - "Mélanger l’œuf de lin (ou le tofu soyeux) avec le sucre versé au préalable dans un bol. Ajouter le chocolat, la margarine végétale et le lait d'avoine ou soja. Mélanger à nouveau."
      - "Ajouter la farine et le cacao. Mélanger une troisième fois."
      - "Moules graissés à la margarine végétale et farinés. Verser la préparation. Four 190 °C, 6 min. Vérifier au couteau. Cœur trop cuit : gâteau au chocolat. Recommencer."
      cavernes:
      - "Préparation. Margarine végétale, chocolat, casserole dessus eau frémissante. Lait avoine ou soja, ajouter, sans attendre fonte."
      - "Mélange. Œuf de lin ou tofu soyeux, sucre déjà dans bol, mélanger. Chocolat, margarine végétale, lait avoine ou soja, rajouter. Mélanger encore."
      - "Mélange. Farine, cacao, ajouter. Mélanger troisième fois."
      - "Finition. Moules graissés margarine végétale, farinés. Préparation, verser. Four 190°C, 6 min. Couteau, vérifier. Cœur pas assez fondant ou coulant : gâteau chocolat. Réessayer."
    kcal_per_serving: 236
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
    kcal_per_serving: 394
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

# Moelleux au chocolat

![[moelleux-au-chocolat.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/moelleux-au-chocolat]]

## Ingrédients (4 personnes)

- 100 g de chocolat
- 3 œuf
- 110 g de sucre
- 5 cl de lait
- 90 g de beurre
- 35 g de farine
- 1 c.à.c de cacao
-  de l'huile

## Préparation

1. Mettre le beurre et le chocolat ensemble dans un bain marie et ajoutez le lait sans attendre que les ingrédients n’aient fondu.
2. Cassez les trois œufs avec le sucre versé au préalable dans un bol et mélangez. Rajoutez dans cette préparation le chocolat, le beurre et le lait et mélangez à nouveau.
3. Ajoutez la farine et le cacao et mélangez une troisième fois !
4. Une fois que les moules sont beurrés et fleurés, versez votre préparation. Placez les ensuite au four à 190°C et laissez les cuire pendant 6 min.

 
 

 
 La cuisson du moelleux au chocolat est toujours délicate, vérifiez à l’aide d’un couteau si la cuisson vous convient. Si le coeur n’est pas assez fondant ou coulant c’est que votre moelleux est devenu un gâteau chocolat, ne baissez pas les bras et réessayez !
