---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: cheesecake-au-kaki
title: Cheesecake au kaki
lang: fr
description: "Cheesecake au kaki : recette new-yorkaise cuite, fromage frais, biscuits et coulis de kaki, pour 4 personnes. Facile à suivre à la maison."
cuisine: américaine
category: sucré
tags:
- sucré
- kaki
- fromage
- dessert
image:
  url:
  alt: Cheesecake au kaki
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/cheesecake-au-kaki.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
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
    clears: []
    swaps: []
    note: "Petits beurre : biscuits sans gluten."
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
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
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: ma_recette
house_options:
- ma_recette
histoire: "Le gâteau au fromage existe depuis l’Antiquité grecque. La forme moderne naît vers le XVIIIe siècle. Le cream cheese américain date de 1872 (William Lawrence, Chester, New York). Le New York cheesecake cuit est lié aux delis ashkénazes des années 1930. Le kaki est un fruit d’hiver posé sur cette base, pas un classique new-yorkais."
fun_facts:
- text: "Deux familles : cuit (New York) et non cuit (fromage frais + biscuits). La version maison de Jigmé est non cuite, nappage agar."
  source_name: "Wikipedia EN, Cheesecake"
  source_url: "https://en.wikipedia.org/wiki/Cheesecake"
- text: "Mascarpone, quark, ricotta ou Philadelphia : le fromage n’est pas unique."
  source_name: "Wikipedia EN, Cheesecake"
  source_url: "https://en.wikipedia.org/wiki/Cheesecake"
- text: "Le kaki (Diospyros kaki) n’est pas historique sur ce gâteau : fruit d’hiver sur une base new-yorkaise."
  source_name: "Wikipedia FR, Plaqueminier"
  source_url: "https://fr.wikipedia.org/wiki/Plaqueminier"
wines:
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise
  grapes: Muscat petits grains
  award: 
  why: "Floral, kaki mûr, fromage frais."
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: "Layon, Loire"
  grapes: Chenin
  award: 
  why: "Moelleux, cheesecake cuit."
- name: Clairette de Die
  producer: Jaillance
  origin: "Die, Drôme"
  grapes: "Muscat, clairette"
  award: 
  why: "Bulles douces, dessert d’hiver."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 3
    time:
      prep_min: 30
      cook_min: 90
      rest_min: 600
      total_min: 720
    equipment:
    - moule à charnière
    - mixeur
    - four
    substitutions:
    - from: Philadelphia
      to: Saint-Môret
      note: Plus acide.
    scale_note: 
    ingredients:
    - qty: 150
      unit: g
      item: petits beurre
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: beurre fondu
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: cassonade
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: fromage frais type Philadelphia
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: crème fraîche épaisse
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œufs
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 0.5
      unit: piece
      item: citron
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: crème
      scale: false
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: kakis mûrs
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: sucre
      group: coulis
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Base. Mixez les petits-beurre avec la cassonade et le beurre fondu. Tassez. Enfournez 12 min à 175 °C, puis laissez refroidir."
    - "Appareil. Fouettez le fromage frais sans trop d’air. Incorporez le sucre, le sel, la crème fraîche, la vanille, les œufs un à un, puis le citron."
    - "Cuisson. Posez un plat d’eau dans le four. Enfournez 10 min à 200 °C, puis 1 h 10 à 90–100 °C : le centre doit rester tremblotant."
    - "Repos. Laissez dans le four éteint, porte entrouverte, 1 h, puis une nuit au frais."
    - "Coulis. Faites cuire les kakis mûrs avec le sucre et le citron 5 min. Servez à part ou nappé."
    steps_niveaux:
      amateur:
      - "Base. Mixez les petits-beurre avec la cassonade et le beurre fondu. Tassez. Enfournez 12 min à 175 °C, puis laissez refroidir."
      - "Appareil. Fouettez le fromage frais sans trop d’air. Incorporez le sucre, le sel, la crème fraîche, la vanille, les œufs un à un, puis le citron."
      - "Cuisson. Posez un plat d’eau dans le four. Enfournez 10 min à 200 °C, puis 1 h 10 à 90–100 °C : le centre doit rester tremblotant."
      - "Repos. Laissez dans le four éteint, porte entrouverte, 1 h, puis une nuit au frais."
      - "Coulis. Faites cuire les kakis mûrs avec le sucre et le citron 5 min. Servez à part ou [[napper|nappé]]."
      pro:
      - "Mixer les petits-beurre avec la cassonade et le beurre fondu. Tasser. Enfourner 12 min à 175 °C. Laisser refroidir."
      - "Fouetter le fromage frais sans trop d’air. Incorporer le sucre, le sel, la crème fraîche, la vanille, les œufs un à un, puis le citron."
      - "Poser un plat d’eau dans le four. Enfourner 10 min à 200 °C, puis 1 h 10 à 90–100 °C : centre tremblotant."
      - "Laisser dans le four éteint, porte entrouverte, 1 h, puis une nuit au frais."
      - "Cuire les kakis mûrs avec le sucre et le citron 5 min. Servir à part ou nappé."
      cavernes:
      - "Base. Petits-beurre, cassonade, beurre fondu, mixer. Tasser. Four 175 °C 12 min. Puis refroidir."
      - "Appareil. Fromage frais, fouetter, peu air. Sucre, sel, crème fraîche, vanille, œufs 1 par 1, citron, incorporer."
      - "Cuisson. Plat d’eau, four, poser. Four 200 °C 10 min, puis 90–100 °C 1 h 10. Centre tremblotant."
      - "Repos. Four éteint, porte entrouverte, 1 h. Puis nuit, frais."
      - "Coulis. Kakis mûrs, sucre, citron, cuire 5 min. Servir à part ou nappé."
    kcal_per_serving: 540
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 540
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
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
    time:
      prep_min: 40
      cook_min: 5
      rest_min: 480
      total_min: 525
    equipment:
    - moule à charnière
    - mixeur
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 150
      unit: g
      item: biscuits végétaux
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: margarine végétale
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: fromage végétal
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: tofu soyeux
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: kakis mûrs
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar-agar
      group: coulis
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Base. Mixez les biscuits végétaux avec la margarine végétale, tassez, puis réservez 45 min au frais."
    - "Crème. Mixez le fromage végétal, le tofu soyeux, le sucre et la vanille. Versez. Réservez 4 h au frais."
    - "Nappage. Portez la purée de kakis et l’agar-agar 30 s. Laissez prendre 3 h au froid."
    steps_niveaux:
      amateur:
      - "Base. Mixez les biscuits végétaux avec la margarine végétale, tassez, puis réservez 45 min au frais."
      - "Crème. Mixez le fromage végétal, le tofu soyeux, le sucre et la vanille. Versez. Réservez 4 h au frais."
      - "[[napper|Nappage]]. Portez la purée de kakis et l’agar-agar 30 s. Laissez prendre 3 h au froid."
      pro:
      - "Mixer les biscuits végétaux avec la margarine végétale. Tasser. Réserver 45 min au frais."
      - "Mixer le fromage végétal, le tofu soyeux, le sucre et la vanille. Verser. Réserver 4 h au frais."
      - "Porter la purée de kakis et l’agar-agar 30 s. Laisser prendre 3 h au froid."
      cavernes:
      - "Base. Biscuits végétaux, margarine végétale, mixer. Tasser. Frais 45 min."
      - "Crème. Fromage végétal, tofu soyeux, sucre, vanille, mixer. Verser. Frais 4 h."
      - "Nappage. Purée de kakis, agar-agar, porter 30 s. Froid 3 h, prendre."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
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
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 540
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  ma_recette:
    label: Ma recette
    inherit: 
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 40
      cook_min: 10
      rest_min: 480
      total_min: 530
    equipment:
    - moule à charnière
    - mixeur
    - casserole
    - spatule
    substitutions: []
    scale_note: "Batch réel : 1 cheesecake moule 20–22 cm, non cuit. Doses Jigmé telles quelles."
    ingredients:
    - qty: 200
      unit: g
      item: petits beurre
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: beurre fondu
      group: base
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: mascarpone
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: Philadelphia
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: cassonade
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: kaki
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: beurre doux
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: cassonade
      group: crème
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: anis étoilé
      group: crème
      scale: false
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: kakis
      group: topping
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar-agar
      group: topping
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: kaki
      group: décor
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Base. Réduisez les petits-beurre en poudre, mélangez au beurre fondu, tassez au fond du moule, puis réservez 45 min au frais."
    - "Compotée. Faites revenir des cubes de kaki avec le beurre doux, la cassonade et l’anis étoilé, jusqu’à une compotée légère."
    - "Crème. Mixez le mascarpone, le Philadelphia et la cassonade."
    - "Montage. Étalez la compotée, puis l’appareil. Réservez 3 à 4 h au frais."
    - "Nappage. Nappez de purée de kaki liée à l’agar-agar 30 secondes. Réservez 3 à 4 h au frais."
    - "Décor. Démoulez et garnissez de tranches de kaki."
    steps_niveaux:
      amateur:
      - "Base. Réduisez les petits-beurre en poudre, mélangez au beurre fondu, tassez au fond du moule, puis réservez 45 min au frais."
      - "Compotée. Faites revenir des cubes de kaki avec le beurre doux, la cassonade et l’anis étoilé, jusqu’à une compotée légère."
      - "Crème. Mixez le mascarpone, le Philadelphia et la cassonade."
      - "Montage. Étalez la compotée, puis l’appareil. Réservez 3 à 4 h au frais."
      - "[[napper|Nappage]]. Nappez de purée de kaki liée à l’agar-agar 30 secondes. Réservez 3 à 4 h au frais."
      - "Décor. Démoulez et garnissez de tranches de kaki."
      pro:
      - "Réduire les petits-beurre en poudre. Mélanger au beurre fondu. Tasser au fond du moule. Réserver 45 min au frais."
      - "Faire revenir des cubes de kaki avec le beurre doux, la cassonade et l’anis étoilé, jusqu’à compotée légère."
      - "Mixer le mascarpone, le Philadelphia et la cassonade."
      - "Étaler la compotée, puis l’appareil. Réserver 3 à 4 h au frais."
      - "Napper de purée de kaki liée à l’agar-agar 30 secondes. Réserver 3 à 4 h au frais."
      - "Démouler. Garnir de tranches de kaki."
      cavernes:
      - "Base. Petits-beurre, poudre. Beurre fondu, mélanger. Moule, fond, tasser. Frais 45 min."
      - "Compotée. Cubes de kaki, beurre doux, cassonade, anis étoilé, revenir. Jusqu’à compotée légère."
      - "Crème. Mascarpone, Philadelphia, cassonade, mixer."
      - "Montage. Compotée, étaler. Puis appareil. Frais 3 à 4 h."
      - "Nappage. Purée de kaki liée agar-agar 30 secondes, napper. Frais 3 à 4 h."
      - "Décor. Démouler. Tranches de kaki, garnir."
    kcal_per_serving: 610
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  ma_recette:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  traditionnelle:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
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
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Texture cassée à la décongélation.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Fromage frais : 3 jours au frigo."

---

# Cheesecake au kaki

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 150 g petits beurre
- 50 g beurre fondu
- 10 g cassonade
- 500 g fromage frais type Philadelphia
- 150 g crème fraîche épaisse
- 120 g sucre
- 3 piece œufs
- 1 gousse vanille
- 0.5 piece citron
- 1 pincee sel
- 2 piece kakis mûrs
- 1 cas sucre

## Préparation

1. Base. Mixez les petits-beurre avec la cassonade et le beurre fondu. Tassez. Enfournez 12 min à 175 °C, puis laissez refroidir.
2. Appareil. Fouettez le fromage frais sans trop d’air. Incorporez le sucre, le sel, la crème fraîche, la vanille, les œufs un à un, puis le citron.
3. Cuisson. Posez un plat d’eau dans le four. Enfournez 10 min à 200 °C, puis 1 h 10 à 90–100 °C : le centre doit rester tremblotant.
4. Repos. Laissez dans le four éteint, porte entrouverte, 1 h, puis une nuit au frais.
5. Coulis. Faites cuire les kakis mûrs avec le sucre et le citron 5 min. Servez à part ou nappé.
