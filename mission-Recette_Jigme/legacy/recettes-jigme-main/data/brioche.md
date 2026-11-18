---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: batteur
slug: brioche
title: Brioche
lang: fr
description: "Brioche : recette française avec farine, sucre et oeuf, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- boulangerie
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/brioche.webp
  alt: Brioche
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/brioche.md
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
histoire: >
  Pain enrichi (beurre, œufs) d’origine française, souvent rattaché à la Normandie.
  Le nom viendrait de l’ancien français brier, « pétrir », avec des attestations
  tardives du Moyen Âge. D’abord produit de luxe, puis formes régionales nombreuses.
fun_facts:
- text: "On raconte souvent que Marie-Antoinette a dit « qu’ils mangent de la brioche ». La phrase est déjà dans les Confessions de Rousseau, mise dans la bouche d’« une grande princesse », donc pas forcément dans celle de la reine."
  source_name: Usage historique courant
  source_url:
- text: "Un bun burger brioché est un usage salé contemporain, pas la brioche de fête."
  source_name: Usage
  source_url:
wines:
- name: Crémant de Bourgogne
  producer: Louis Bouillot
  origin: Nuits-Saint-Georges
  grapes: pinot noir, chardonnay
  award:
  why: "Bulles, brioché — le beurre de la pâte."
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Beaulieu-sur-Layon, Anjou
  grapes: chenin
  award:
  why: "Si on la mange sucrée (confiture), miel et acidité."
- name: Clairette de Die Tradition
  producer: Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: "Doux, bulles — brioche du goûter."
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
      cook_min: 20
      rest_min: 0
      total_min: 65
    equipment: &id002
    - four
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: sucre
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
    - qty: 150
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: levure fraîche
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
    steps:
    - 'Cuisson. Versez la farine dans la cuve de votre batteur électrique et faites trois petits puits
      : un pour le sel, un pour le sucre et un pour la levure. La levure doit être mélangée
      avec le lait avant d’être versée dans le petit puit que vous avez creusé. La levure
      étant un être vivant, mélangée au sel, elle perdrait toute son utilité qui est celle
      de lever la pâte !'
    - Mélange. Cassez vos œufs et versez-les dans la cuve. Mélangez à vitesse moyenne.
    - Mélange. Incorporez les morceaux de beurre un à un tout en mélangeant à vitesse rapide cette
      fois. A cette étape de la recette vous pouvez rajouter ce qui vous fait plaisir, raisins
      secs ou autre fruits secs et même pépites de chocolat.
    - Cuisson. Fleurez un cul de poule et placez-y la pâte. Recouvrez le tout avec un torchon et laissez
      reposer 3H.
    - Finition. Faites 4 boules de même quantité en utilisant un peu de farine au creux de votre main.
      Beurrez et farinez un moule à brioche et placez les boules dedans. Mettez le tout au
      four chauffé à 180°C, pendant 20 minutes et à mi-cuisson mettez un peu de jaune d’oeuf
      à l’aide d’un pinceau sur le dessus de la brioche. Vérifiez la cuisson de votre brioche
      à l’aide d’une lame de couteau, s’il n’y a rien sur la lame c’est que c’est prêt !
    steps_niveaux:
      amateur:
      - "Cuisson. Versez la farine dans la cuve du batteur électrique et faites trois petits puits : sel, sucre, levure. Mélangez d’abord la levure avec le lait, puis versez-la dans son puit. Ne mélangez pas la levure au sel."
      - "Mélange. Cassez les œufs, versez-les dans la cuve et mélangez à vitesse moyenne."
      - "Mélange. Incorporez les morceaux de beurre un à un en mélangeant à vitesse rapide. Vous pouvez ajouter raisins secs, autres fruits secs ou pépites de chocolat."
      - "Cuisson. Fleurez un cul de poule, placez-y la pâte, recouvrez d’un torchon et laissez reposer 3 h."
      - "Finition. Formez 4 boules égales avec un peu de farine au creux de la main. Beurrez et farinez un moule à brioche, placez-y les boules. Enfournez 20 minutes à 180 °C ; à mi-cuisson, badigeonnez le dessus d’un peu de jaune d’œuf au pinceau. Vérifiez à la lame de couteau : s’il n’y a rien sur la lame, c’est prêt."
      pro:
      - "Verser la farine dans la cuve du batteur. Creuser trois puits : sel, sucre, levure. Mélanger la levure au lait, puis la verser dans son puit. Ne pas mélanger la levure au sel."
      - "Casser les œufs, verser dans la cuve. Mélanger à vitesse moyenne."
      - "Incorporer les morceaux de beurre un à un à vitesse rapide. Option : raisins secs, fruits secs ou pépites de chocolat."
      - "Fleurer un cul de poule. Y placer la pâte. Recouvrir d’un torchon. Laisser reposer 3 h."
      - "Former 4 boules égales, farine au creux de la main. Beurrer et fariner un moule à brioche. Y placer les boules. Four 180 °C, 20 min ; à mi-cuisson, badigeonner le dessus de jaune d’œuf au pinceau. Contrôler à la lame : rien sur la lame, c’est prêt."
      cavernes:
      - "Cuisson. Farine, cuve batteur. Trois puits : sel, sucre, levure. Levure mélanger lait, verser puit. Levure pas avec sel."
      - "Mélange. Œufs casser, verser cuve. Mélanger vitesse moyenne."
      - "Mélange. Morceaux beurre, incorporer successivement. Vitesse rapide. Raisins secs, fruits secs, pépites chocolat : possible."
      - "Cuisson. Cul de poule, fleurer. Pâte dedans. Torchon. Reposer 3 h."
      - "Finition. 4 boules égales, farine creux main. Moule brioche, beurrer fariner. Boules dedans. Four 180 °C 20 min. Mi-cuisson, jaune œuf pinceau dessus. Lame couteau : rien sur lame, prêt."
    kcal_per_serving: 609
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
    kcal_per_serving: 609
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
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 35
      unit: g
      item: sucre
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
    - qty: 150
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: levure fraîche
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
    steps:
    - 'Cuisson. Versez la farine dans la cuve de votre batteur électrique et faites trois petits puits
      : un pour le sel, un pour le sucre et un pour la levure. La levure doit être mélangée
      avec le lait d''avoine ou soja avant d’être versée dans le petit puit que vous avez
      creusé. La levure étant un être vivant, mélangée au sel, elle perdrait toute son utilité
      qui est celle de lever la pâte !'
    - Mélange. Versez les œufs de lin (ou le tofu soyeux) dans la cuve. Mélangez à vitesse moyenne.
    - Cuisson. Incorporez les morceaux de margarine végétale un à un tout
      en mélangeant à vitesse rapide cette fois. A cette étape de la recette vous pouvez rajouter
      ce qui vous fait plaisir, raisins secs ou autre fruits secs et même pépites de chocolat.
    - Cuisson. Fleurez un cul de poule et placez-y la pâte. Recouvrez le tout avec un torchon et laissez
      reposer 3H.
    - Finition. Faites 4 boules de même quantité en utilisant un peu de farine au creux de votre main.
      Graissez et farinez un moule à brioche avec de la margarine végétale, puis placez
      les boules dedans. Mettez le tout au four chauffé à 180°C, pendant 20 minutes et, à mi-cuisson,
      badigeonnez le dessus avec un peu de lait d’avoine ou de soja à l’aide d’un pinceau.
      Vérifiez la cuisson de votre brioche
      à l’aide d’une lame de couteau, s’il n’y a rien sur la lame c’est que c’est prêt !
    steps_niveaux:
      amateur:
      - "Cuisson. Versez la farine dans la cuve du batteur électrique et faites trois petits puits : sel, sucre, levure. Mélangez d’abord la levure avec le lait d’avoine ou soja, puis versez-la dans son puit. Ne mélangez pas la levure au sel."
      - "Mélange. Versez les œufs de lin (ou le tofu soyeux) dans la cuve et mélangez à vitesse moyenne."
      - "Cuisson. Incorporez les morceaux de margarine végétale un à un en mélangeant à vitesse rapide. Vous pouvez ajouter raisins secs, autres fruits secs ou pépites de chocolat."
      - "Cuisson. Fleurez un cul de poule, placez-y la pâte, recouvrez d’un torchon et laissez reposer 3 h."
      - "Finition. Formez 4 boules égales avec un peu de farine au creux de la main. Graissez et farinez un moule à brioche avec de la margarine végétale, placez-y les boules. Enfournez 20 minutes à 180 °C ; à mi-cuisson, badigeonnez le dessus d’un peu de lait d’avoine ou de soja au pinceau. Vérifiez à la lame de couteau : s’il n’y a rien sur la lame, c’est prêt."
      pro:
      - "Verser la farine dans la cuve du batteur. Creuser trois puits : sel, sucre, levure. Mélanger la levure au lait d’avoine ou soja, puis la verser dans son puit. Ne pas mélanger la levure au sel."
      - "Verser les œufs de lin (ou le tofu soyeux) dans la cuve. Mélanger à vitesse moyenne."
      - "Incorporer les morceaux de margarine végétale un à un à vitesse rapide. Option : raisins secs, fruits secs ou pépites de chocolat."
      - "Fleurer un cul de poule. Y placer la pâte. Recouvrir d’un torchon. Laisser reposer 3 h."
      - "Former 4 boules égales, farine au creux de la main. Graisser et fariner un moule à brioche à la margarine végétale. Y placer les boules. Four 180 °C, 20 min ; à mi-cuisson, badigeonner le dessus de lait d’avoine ou de soja au pinceau. Contrôler à la lame : rien sur la lame, c’est prêt."
      cavernes:
      - "Cuisson. Farine, cuve batteur. Trois puits : sel, sucre, levure. Levure mélanger lait d’avoine ou soja, verser puit. Levure pas avec sel."
      - "Mélange. Œufs de lin ou tofu soyeux, verser cuve. Mélanger vitesse moyenne."
      - "Cuisson. Morceaux margarine végétale, incorporer successivement. Vitesse rapide. Raisins secs, fruits secs, pépites chocolat : possible."
      - "Cuisson. Cul de poule, fleurer. Pâte dedans. Torchon. Reposer 3 h."
      - "Finition. 4 boules égales, farine creux main. Moule brioche, graisser fariner margarine végétale. Boules dedans. Four 180 °C 20 min. Mi-cuisson, lait d’avoine ou soja pinceau dessus. Lame couteau : rien sur lame, prêt."
    kcal_per_serving: 345
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
    kcal_per_serving: 609
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
  anti_gaspi: ["Croûtons ou chapelure"]
  a_verifier: false
  note_verif: ""
---

# Brioche

![[brioche.webp]]
**Équipement :** [[batteur]] · [[robot-patissier]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/brioche]]

## Ingrédients (4 personnes)

- 250 g de farine
- 6 g de sel
- 35 g de sucre
- 3 oeuf
- 150 g de beurre
- 10 g de levure fraîche
- 5 cl de lait

## Préparation

1. Versez la farine dans la cuve de votre batteur électrique et faites trois petits puits : un pour le sel, un pour le sucre et un pour la levure. La levure doit être mélangée avec le lait avant d’être versée dans le petit puit que vous avez creusé. La levure étant un être vivant, mélangée au sel, elle perdrait toute son utilité qui est celle de lever la pâte !
2. Cassez vos œufs et versez-les dans la cuve. Mélangez à vitesse moyenne.
3. Incorporez les morceaux de beurre un à un tout en mélangeant à vitesse rapide cette fois. A cette étape de la recette vous pouvez rajouter ce qui vous fait plaisir, raisins secs ou autre fruits secs et même pépites de chocolat.
4. Fleurez un cul de poule et placez-y la pâte. Recouvrez le tout avec un torchon et laissez reposer 3H.
5. Faites 4 boules de même quantité en utilisant un peu de farine au creux de votre main. Beurrez et farinez un moule à brioche et placez les boules dedans. Mettez le tout au four chauffé à 180°C, pendant 20 minutes et à mi-cuisson mettez un peu de jaune d’oeuf à l’aide d’un pinceau sur le dessus de la brioche.

 
 

 
 Vérifiez la cuisson de votre brioche à l’aide d’une lame de couteau, s’il n’y a rien sur la lame c’est que c’est prêt !
