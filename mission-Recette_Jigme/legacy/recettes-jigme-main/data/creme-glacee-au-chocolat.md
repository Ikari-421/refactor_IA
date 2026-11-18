---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: creme-glacee-au-chocolat
title: Crème glacée au chocolat
lang: fr
description: "Crème glacée au chocolat : recette française avec jaune d'oeuf, sucre blanc et lait, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- goûter
- chocolat
- végétarien
image:
  url:
  alt: Crème glacée au chocolat
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/creme-glacee-au-chocolat.md
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
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
    - from: pistaches non salées
      to: graines de courge
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
    - from: crème de soja (liaison) ou amidon
      to: crème d'avoine
      note:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja (liaison) ou amidon → crème d''avoine ; lait d''avoine ou
      soja → lait d''avoine ; crème de soja ou avoine → crème d''avoine.'
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
histoire: 'Crème glacée au cacao. Dessert lacté fouetté pendant la prise, pour limiter les cristaux. Les
  glaces européennes se répandent à partir des XVIIe–XVIIIe s. ; le chocolat suit l’usage du cacao en
  Europe. Sans sorbetière, on bat au freezer — méthode maison, pas un inventeur daté.

  '
fun_facts:
- text: "Sans agitation, des cristaux de glace se forment ; d’où les battages répétés au freezer."
  source_name: Wikipedia, Ice cream
  source_url: https://en.wikipedia.org/wiki/Ice_cream
- text: "Un chocolat plus amer (plus de cacao) tient mieux face au froid, qui éteint le sucré."
  source_name: Usage
  source_url:
wines:
- name: Banyuls
  producer: Domaine Vial Magnères
  origin: Banyuls-sur-Mer, Roussillon
  grapes: grenache
  award:
  why: Cacao, cerise — le même registre que la glace, servi très frais.
- name: Pineau des Charentes
  producer: Pierre Ferrand
  origin: Jarnac, Charente
  grapes: ugni blanc
  award:
  why: Raisin, vanille — la crème, sans tanin.
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Fruit noir, cacao — la glace au chocolat, un cran plus sec.
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
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 15
      rest_min: 250
      total_min: 295
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 5
      unit: piece
      item: jaune d'oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème liquide (30%)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit:
      item: cacao en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: pistaches non salées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: arôme de pistache
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mixage. Clarifiez les oeufs (ne gardez que les jaunes). Ajoutez-y le sucre blanc et fouettez
      énergiquement. Réservez de côté.
    - Cuisson. Dans une casserole à feu moyen, mélangez le lait et la crème liquide. Ajoutez le cacao
      en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme pistache pour
      une crème glacée à la pistache. Mélangez jusqu’à ce que la préparation soit bien homogène.
      Pour la crème glacée à la pistache, il faudra passer la préparation au chinois une fois
      qu’elle sera bien infusée.
    - 'Mélange. Incorporez tout doucement la préparation aux oeufs blanchis tout en mélangeant bien
      pour éviter que les oeufs ne cuisent. Versez le tout dans la casserole à feu doux et
      mélangez à nouveau avec une spatule jusqu’à obtention de la texture voulue. La préparation
      doit être nappante : lorsque vous passez votre doigt sur la spatule, cela doit laisser
      une trace et ne plus bouger.'
    - Repos. Laissez reposer la préparation à température ambiante avec un couvercle. Pour accélérer
      le processus, débarrassez la préparation dans un bol que vous placerez dans un récipient
      plus grand rempli de glaçons. Lorsque la préparation a refroidi, il est temps de la
      transvaser dans le récipient qui ira au congélateur. Il faudra la sortir toutes les
      demi-heures pour la mélanger à la fourchette, 6 à 8 fois en tout. Cette opération permet
      de casser les cristaux de glace et d’incorporer un peu d’air pour améliorer la texture
      de votre crème glacée. Vous pouvez dès à présent vous servir une coupe de glace ! N’hésitez
      pas à rajouter des pépites de chocolat ou des brisures de pistache pour ajouter du croquant
      et rendre ça encore plus appétissant !
    steps_niveaux:
      amateur:
      - "Mixage. Clarifiez les œufs (ne gardez que les jaunes). Ajoutez-y le sucre blanc et [[blanchir|fouettez]] énergiquement. Réservez de côté."
      - "Cuisson. Dans une casserole à feu moyen, mélangez le lait et la crème liquide. Ajoutez le cacao en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme pistache pour une crème glacée à la pistache. Mélangez jusqu’à ce que la préparation soit bien homogène. Pour la crème glacée à la pistache, [[filtrer|passez]] la préparation au chinois une fois qu’elle sera bien [[infuser|infusée]]."
      - "Mélange. Incorporez tout doucement la préparation aux œufs [[blanchir|blanchis]] tout en mélangeant bien pour éviter que les œufs ne cuisent. Versez le tout dans la casserole à feu doux et mélangez à nouveau avec une spatule jusqu’à obtention de la texture voulue. La préparation doit être nappante : lorsque vous passez votre doigt sur la spatule, cela doit laisser une trace et ne plus bouger."
      - "Repos. Laissez reposer la préparation à température ambiante avec un couvercle. Pour accélérer le processus, débarrassez la préparation dans un bol que vous placerez dans un récipient plus grand rempli de glaçons. Lorsque la préparation a refroidi, transvasez-la dans le récipient qui ira au congélateur. Sortez-la toutes les demi-heures pour la mélanger à la fourchette, 6 à 8 fois en tout. Cette opération casse les cristaux de glace et incorpore un peu d’air. Servez une coupe. Vous pouvez ajouter des pépites de chocolat ou des brisures de pistache."
      pro:
      - "Mixage. Clarifier les œufs, ne garder que les jaunes. Ajouter le sucre blanc. Fouetter énergiquement. Réserver."
      - "Cuisson. Dans une casserole à feu moyen, mélanger le lait et la crème liquide. Ajouter le cacao en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme pistache pour une crème glacée à la pistache. Homogénéiser. Pour la pistache, passer au chinois une fois infusée."
      - "Mélange. Incorporer tout doucement la préparation aux œufs blanchis en mélangeant pour éviter de cuire les œufs. Verser dans la casserole à feu doux. Mélanger à la spatule jusqu’à nappant : le doigt sur la spatule laisse une trace qui ne bouge plus."
      - "Repos. Reposer à température ambiante sous couvercle. Pour accélérer : débarrasser dans un bol posé dans un récipient plus grand rempli de glaçons. Une fois refroidi, transvaser dans le récipient de congélation. Sortir toutes les demi-heures, mélanger à la fourchette, 6 à 8 fois. Servir. Pépites de chocolat ou brisures de pistache possibles."
      cavernes:
      - "Mixage. Œufs, clarifier, jaunes seulement. Sucre blanc, fouetter énergiquement. Réserver."
      - "Cuisson. Casserole feu moyen. Lait, crème liquide, mélanger. Cacao poudre pour crème glacée chocolat, ou pistaches et arôme pistache pour crème glacée pistache. Homogène. Pistache : chinois, passer, bien infusé."
      - "Mélange. Préparation, incorporer doucement œufs blanchis, mélanger pour œufs pas cuire. Casserole feu doux, verser. Spatule, mélanger jusqu’à nappant. Doigt sur spatule, trace, plus bouger."
      - "Repos. Préparation, reposer température ambiante, couvercle. Accélérer : bol dans récipient plus grand, glaçons. Refroidi : transvaser récipient congélateur. Sortir chaque demi-heure, fourchette, mélanger, 6 à 8 fois. Cristaux glace casser, peu air. Servir. Pépites chocolat ou brisures pistache, possible."
    kcal_per_serving: 415
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
    kcal_per_serving: 415
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 5
      unit: piece
      item: crème de soja (liaison) ou amidon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit:
      item: cacao en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: pistaches non salées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: arôme de pistache
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Dressage. Dans un récipient, fouettez le sucre avec la crème de soja (liaison) ou l’amidon délayé. Réservez.
    - Cuisson. Dans une casserole à feu moyen, mélangez le lait d’avoine ou de soja et la crème de soja ou d’avoine.
      Ajoutez le cacao en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme
      pistache pour une crème glacée à la pistache. Mélangez jusqu’à ce que la préparation
      soit bien homogène. Pour la crème glacée à la pistache, il faudra passer la préparation
      au chinois une fois qu’elle sera bien infusée.
    - 'Cuisson. Incorporez tout doucement la préparation chaude au mélange sucré, tout en fouettant pour éviter les grumeaux. Versez le tout dans la casserole à feu doux et
      mélangez à nouveau avec une spatule jusqu’à obtention de la texture voulue. La préparation
      doit être nappante : lorsque vous passez votre doigt sur la spatule, cela doit laisser
      une trace et ne plus bouger.'
    - Repos. Laissez reposer la préparation à température ambiante avec un couvercle. Pour accélérer
      le processus, débarrassez la préparation dans un bol que vous placerez dans un récipient
      plus grand rempli de glaçons. Lorsque la préparation a refroidi, il est temps de la
      transvaser dans le récipient qui ira au congélateur. Il faudra la sortir toutes les
      demi-heures pour la mélanger à la fourchette, 6 à 8 fois en tout. Cette opération permet
      de casser les cristaux de glace et d’incorporer un peu d’air pour améliorer la texture
      de votre crème glacée. Vous pouvez dès à présent vous servir une coupe de glace ! N’hésitez
      pas à rajouter des pépites de chocolat ou des brisures de pistache pour ajouter du croquant
      et rendre ça encore plus appétissant !
    steps_niveaux:
      amateur:
      - "Dressage. Dans un récipient, fouettez le sucre avec la crème de soja (liaison) ou l’amidon [[delayer|délayé]]. Réservez."
      - "Cuisson. Dans une casserole à feu moyen, mélangez le lait d’avoine ou de soja et la crème de soja ou d’avoine. Ajoutez le cacao en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme pistache pour une crème glacée à la pistache. Mélangez jusqu’à ce que la préparation soit bien homogène. Pour la crème glacée à la pistache, [[filtrer|passez]] la préparation au chinois une fois qu’elle sera bien [[infuser|infusée]]."
      - "Cuisson. Incorporez tout doucement la préparation chaude au mélange sucré, tout en fouettant pour éviter les grumeaux. Versez le tout dans la casserole à feu doux et mélangez à nouveau avec une spatule jusqu’à obtention de la texture voulue. La préparation doit être nappante : lorsque vous passez votre doigt sur la spatule, cela doit laisser une trace et ne plus bouger."
      - "Repos. Laissez reposer la préparation à température ambiante avec un couvercle. Pour accélérer le processus, débarrassez la préparation dans un bol que vous placerez dans un récipient plus grand rempli de glaçons. Lorsque la préparation a refroidi, transvasez-la dans le récipient qui ira au congélateur. Sortez-la toutes les demi-heures pour la mélanger à la fourchette, 6 à 8 fois en tout. Cette opération casse les cristaux de glace et incorpore un peu d’air. Servez une coupe. Vous pouvez ajouter des pépites de chocolat ou des brisures de pistache."
      pro:
      - "Dressage. Fouetter le sucre avec la crème de soja (liaison) ou l’amidon délayé. Réserver."
      - "Cuisson. Dans une casserole à feu moyen, mélanger le lait d’avoine ou de soja et la crème de soja ou d’avoine. Ajouter le cacao en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme pistache pour une crème glacée à la pistache. Homogénéiser. Pour la pistache, passer au chinois une fois infusée."
      - "Cuisson. Incorporer tout doucement la préparation chaude au mélange sucré en fouettant pour éviter les grumeaux. Verser dans la casserole à feu doux. Mélanger à la spatule jusqu’à nappant : le doigt sur la spatule laisse une trace qui ne bouge plus."
      - "Repos. Reposer à température ambiante sous couvercle. Pour accélérer : débarrasser dans un bol posé dans un récipient plus grand rempli de glaçons. Une fois refroidi, transvaser dans le récipient de congélation. Sortir toutes les demi-heures, mélanger à la fourchette, 6 à 8 fois. Servir. Pépites de chocolat ou brisures de pistache possibles."
      cavernes:
      - "Dressage. Récipient. Sucre, crème soja liaison ou amidon délayé, fouetter. Réserver."
      - "Cuisson. Casserole feu moyen. Lait d’avoine ou soja, crème soja ou avoine, mélanger. Cacao poudre pour crème glacée chocolat, ou pistaches et arôme pistache pour crème glacée pistache. Homogène. Pistache : chinois, passer, bien infusé."
      - "Cuisson. Préparation chaude, incorporer doucement mélange sucré, fouetter pour grumeaux. Casserole feu doux, verser. Spatule, mélanger jusqu’à nappant. Doigt sur spatule, trace, plus bouger."
      - "Repos. Préparation, reposer température ambiante, couvercle. Accélérer : bol dans récipient plus grand, glaçons. Refroidi : transvaser récipient congélateur. Sortir chaque demi-heure, fourchette, mélanger, 6 à 8 fois. Cristaux glace casser, peu air. Servir. Pépites chocolat ou brisures pistache, possible."
    kcal_per_serving: 237
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
    kcal_per_serving: 415
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegan:
    delayer:
      terme: "délayer"
      explication: "Vous mettez la poudre dans un bol. Vous ajoutez un peu de liquide encore froid, pris sur celui de la recette, et vous mélangez jusqu’à disparition des grumeaux. Puis vous versez ce mélange dans le reste. C’est réussi quand la poudre a disparu dans un liquide lisse. Évitez de jeter la poudre d’un coup dans le chaud : elle forme des paquets."
      ref: Cuisine/Lexique/delayer.md
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Pas de frigo : rester au congélateur."}
  congelation: {possible: true, duree: "1 mois", decongelation: "", note: "Ne pas recongeler une fois ramolli."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème"

---

# Crème glacée au chocolat
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/creme-glacee-au-chocolat]]

## Ingrédients (4 personnes)

- 5 jaune d'oeuf
- 80 g de sucre blanc
- 40 cl de lait
- 20 cl de crème liquide (30%)
- 4 càs bombées de cacao en poudre
- 125 g de pistaches non salées
- 1 càc d'arôme de pistache

## Préparation

1. Clarifiez les oeufs (ne gardez que les jaunes). Ajoutez-y le sucre blanc et fouettez énergiquement. Réservez de côté.
2. Dans une casserole à feu moyen, mélangez le lait et la crème liquide. Ajoutez le cacao en poudre pour une crème glacée au chocolat, ou les pistaches et l’arôme pistache pour une crème glacée à la pistache. Mélangez jusqu’à ce que la préparation soit bien homogène. Pour la crème glacée à la pistache, il faudra passer la préparation au chinois une fois qu’elle sera bien infusée.
3. Incorporez tout doucement la préparation aux oeufs blanchis tout en mélangeant bien pour éviter que les oeufs ne cuisent. Versez le tout dans la casserole à feu doux et mélangez à nouveau avec une spatule jusqu’à obtention de la texture voulue. La préparation doit être nappante : lorsque vous passez votre doigt sur la spatule, cela doit laisser une trace et ne plus bouger.
4. Laissez reposer la préparation à température ambiante avec un couvercle. Pour accélérer le processus, débarrassez la préparation dans un bol que vous placerez dans un récipient plus grand rempli de glaçons.

Lorsque la préparation a refroidi, il est temps de la transvaser dans le récipient qui ira au congélateur. Il faudra la sortir toutes les demi-heures pour la mélanger à la fourchette, 6 à 8 fois en tout. Cette opération permet de casser les cristaux de glace et d’incorporer un peu d’air pour améliorer la texture de votre crème glacée.

 
 

 
 Vous pouvez dès à présent vous servir une coupe de glace ! N’hésitez pas à rajouter des pépites de chocolat ou des brisures de pistache pour ajouter du croquant et rendre ça encore plus appétissant !
