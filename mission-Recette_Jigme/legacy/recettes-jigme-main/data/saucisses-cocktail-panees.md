---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: saucisses-cocktail-panees
title: Saucisses cocktail panées
lang: fr
description: "Saucisses cocktail panées : recette belge avec saucisses cocktail, oeuf entier et farine, pour 4 personnes. Version maison."
cuisine: américaine
category: salé
tags:
- salé
- boisson
- rapide
- saucisses cocktail
image:
  url:
  alt: Saucisses cocktail panées
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/saucisses-cocktail-panees.md
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
    - from: chapelure ou pancko
      to: chapelure sans gluten
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
  sans_lactose:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lait.
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
    - from: protéines de soja texturées réhydratées
      to: lentilles vertes cuites
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : protéines de soja texturées réhydratées → lentilles vertes cuites ; œuf
      de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches rôtis.'
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
histoire: 'Petites saucisses panées, frites : apéritif. Cousines des « pigs in a blanket » (saucisse dans
  une pâte), répandues aux États-Unis vers le milieu du XXe s. Ici, une panure, pas une pâte.

  '
fun_facts:
- text: 'La panure tient si la saucisse est sèche et froide ; trop chaude, ça glisse.

    '
  source_name: Usage
  source_url: null
- text: 'Ce n’est pas une chipolata de grillade : la taille cocktail est un bouchée.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Saucisses cocktail panées ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Pigs_in_blankets
wines:
- name: Crémant d'Alsace
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot blanc
  award:
  why: Bulles, pomme — l’apéritif frit, sans un champagne.
- name: Beaujolais-Villages
  producer: Louis Tête
  origin: Beaujolais
  grapes: gamay
  award:
  why: Gamay léger — la saucisse, tanin court.
- name: Côtes de Provence
  producer: Domaine Gavoty
  origin: Cabasse, Provence
  grapes: cinsault, grenache
  award:
  why: Rosé sec — la panure, sans un rouge de garde.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 5
      rest_min: 0
      total_min: 20
    equipment: &id002
    - saladier
    - fouet
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: saucisses cocktail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: chapelure ou pancko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pavot
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second,
      versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et
      battez les oeufs.
    - Cuisson. Placez vos saucisses cocktail dans la farine de façon à ce qu’elles soient entièrement
      recouvertes. Plongez-les ensuite dans les oeufs, puis dans la chapelure. Repassez-les
      ensuite dans les oeufs et de nouveau dans la chapelure.
    - Dressage. Réservez les saucisses panées au frais le temps de réaliser les sauces.
    - Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement
      deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3cm. Placez le
      tout dans la cuve d’un robot et mixez. Versez ensuite 10cL de sauce soja sucrée, 2 c.à.c
      de pâte de tandoori et 340g de ketchup. Mixez le tout. Passez la sauce barbecue ainsi
      obtenue au chinois afin de retirer les gros morceaux.
    - Mélange. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions
      égales.
    - Finition. Il est maintenant temps de cuir vos saucisses panées. Pour cela, il suffit d’un rapide
      tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour
      retirer l’excédent de gras. Et voilà, vous avez réussi à transformer de simple saucisses
      cocktails en un apéro croustillant et original. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second, versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et battez les œufs."
      - "Cuisson. Placez vos saucisses cocktail dans la farine de façon à ce qu’elles soient entièrement recouvertes. Plongez-les ensuite dans les œufs, puis dans la chapelure. Repassez-les ensuite dans les œufs et de nouveau dans la chapelure."
      - "Dressage. Réservez les saucisses panées au frais le temps de réaliser les sauces."
      - "Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3 cm. Placez le tout dans la cuve d’un robot et mixez. Versez ensuite 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixez le tout. [[filtrer|Filtrez]] la sauce barbecue ainsi obtenue au chinois afin de retirer les gros morceaux."
      - "Mélange. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions égales."
      - "Finition. Faites cuire vos saucisses panées : [[frire|faites-les frire]] d’un rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour retirer l’excédent de gras."
      pro:
      - "Verser la farine dans un premier récipient. Dans un second, chapelure et pavot, mélanger. Dans un troisième, casser et battre les œufs."
      - "Passer les saucisses cocktail dans la farine, puis dans les œufs, puis dans la chapelure. Repasser dans les œufs, puis dans la chapelure."
      - "Réserver les saucisses panées au frais le temps des sauces."
      - "Sauce barbecue : ciseler 2 bâtons de citronnelle, éplucher et couper grossièrement deux gousses d’ail, éplucher un morceau de gingembre frais de 2 ou 3 cm. Mixer au robot. Ajouter 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixer. Filtrer au chinois."
      - "Sauce moutarde et miel : mélanger les deux en portions égales."
      - "Frire d’un rapide tour à la friteuse jusqu’à coloration. Débarrasser sur papier absorbant."
      cavernes:
      - "Préparation. Farine, premier récipient. Chapelure, pavot, second, mélanger. Oeufs, troisième, casser, battre."
      - "Cuisson. Saucisses cocktail, farine, recouvrir. Oeufs, plonger. Chapelure. Encore oeufs, encore chapelure."
      - "Dressage. Saucisses panées, frais, réserver. Temps sauces."
      - "Cuisson. Sauce barbecue. 2 bâtons citronnelle, ciseler. 2 gousses ail, éplucher, couper grossièrement. Gingembre frais 2 ou 3 cm, éplucher. Robot, mixer. 10 cL sauce soja sucrée, 2 c.à.c pâte tandoori, 340 g ketchup, verser. Mixer. Chinois, filtrer, gros morceaux dehors."
      - "Mélange. Sauce moutarde miel, portions égales, mélanger."
      - "Finition. Friteuse, rapide, jusqu’à coloration. Papier absorbant, débarrasser, gras dehors."
    kcal_per_serving: 223
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: protéines de soja texturées réhydratées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: chapelure ou pancko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pavot
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second,
      versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et
      battez les oeufs.
    - Cuisson. Placez vos protéines de soja cocktail dans la farine de façon à ce qu’elles soient entièrement
      recouvertes. Plongez-les ensuite dans les oeufs, puis dans la chapelure. Repassez-les
      ensuite dans les oeufs et de nouveau dans la chapelure.
    - Dressage. Réservez les protéines de soja panées au frais le temps de réaliser les sauces.
    - Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement
      deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3cm. Placez le
      tout dans la cuve d’un robot et mixez. Versez ensuite 10cL de sauce soja sucrée, 2 c.à.c
      de pâte de tandoori et 340g de ketchup. Mixez le tout. Passez la sauce barbecue ainsi
      obtenue au chinois afin de retirer les gros morceaux.
    - Mélange. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions
      égales.
    - Finition. Il est maintenant temps de cuir vos protéines de soja panées. Pour cela, il suffit d’un
      rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant
      pour retirer l’excédent de gras. Et voilà, vous avez réussi à transformer de simple
      protéines de soja cocktails en un apéro croustillant et original. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second, versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et battez les œufs."
      - "Cuisson. Placez vos protéines de soja cocktail dans la farine de façon à ce qu’elles soient entièrement recouvertes. Plongez-les ensuite dans les œufs, puis dans la chapelure. Repassez-les ensuite dans les œufs et de nouveau dans la chapelure."
      - "Dressage. Réservez les protéines de soja panées au frais le temps de réaliser les sauces."
      - "Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3 cm. Placez le tout dans la cuve d’un robot et mixez. Versez ensuite 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixez le tout. [[filtrer|Filtrez]] la sauce barbecue ainsi obtenue au chinois afin de retirer les gros morceaux."
      - "Mélange. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions égales."
      - "Finition. Faites cuire vos protéines de soja panées : [[frire|faites-les frire]] d’un rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour retirer l’excédent de gras."
      pro:
      - "Verser la farine dans un premier récipient. Dans un second, chapelure et pavot, mélanger. Dans un troisième, casser et battre les œufs."
      - "Passer les protéines de soja cocktail dans la farine, puis dans les œufs, puis dans la chapelure. Repasser dans les œufs, puis dans la chapelure."
      - "Réserver les protéines de soja panées au frais le temps des sauces."
      - "Sauce barbecue : ciseler 2 bâtons de citronnelle, éplucher et couper grossièrement deux gousses d’ail, éplucher un morceau de gingembre frais de 2 ou 3 cm. Mixer au robot. Ajouter 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixer. Filtrer au chinois."
      - "Sauce moutarde et miel : mélanger les deux en portions égales."
      - "Frire d’un rapide tour à la friteuse jusqu’à coloration. Débarrasser sur papier absorbant."
      cavernes:
      - "Préparation. Farine, premier récipient. Chapelure, pavot, second, mélanger. Oeufs, troisième, casser, battre."
      - "Cuisson. Protéines soja cocktail, farine, recouvrir. Oeufs, plonger. Chapelure. Encore oeufs, encore chapelure."
      - "Dressage. Protéines soja panées, frais, réserver. Temps sauces."
      - "Cuisson. Sauce barbecue. 2 bâtons citronnelle, ciseler. 2 gousses ail, éplucher, couper grossièrement. Gingembre frais 2 ou 3 cm, éplucher. Robot, mixer. 10 cL sauce soja sucrée, 2 c.à.c pâte tandoori, 340 g ketchup, verser. Mixer. Chinois, filtrer, gros morceaux dehors."
      - "Mélange. Sauce moutarde miel, portions égales, mélanger."
      - "Finition. Friteuse, rapide, jusqu’à coloration. Papier absorbant, débarrasser, gras dehors."
    kcal_per_serving: 223
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
    - qty: 350
      unit: g
      item: saucisse végétale
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
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: chapelure ou pancko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pavot
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second,
      versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, battez l’œuf de lin (ou le tofu soyeux).
    - Cuisson. Placez vos saucisse végétale dans la farine de façon à ce qu’elles soient entièrement
      recouvertes. Plongez-les ensuite dans l’œuf de lin, puis dans la chapelure. Repassez-les dans l’œuf de lin et de nouveau dans la chapelure.
    - Dressage. Réservez les saucisses panées au frais le temps de réaliser les sauces.
    - Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement
      deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3cm. Placez le
      tout dans la cuve d’un robot et mixez. Versez ensuite 10cL de sauce soja sucrée, 2 c.à.c
      de pâte de tandoori et 340g de ketchup. Mixez le tout. Passez la sauce barbecue ainsi
      obtenue au chinois afin de retirer les gros morceaux.
    - Mélange. Pour la sauce moutarde et sirop d’érable, mélangez simplement les deux en portions égales.
    - Finition. Il est maintenant temps de cuir vos saucisses panées. Pour cela, il suffit d’un rapide
      tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour
      retirer l’excédent de gras. Et voilà, vous avez réussi à transformer de simple saucisse
      végétales en un apéro croustillant et original. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second, versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, battez l’œuf de lin (ou le tofu soyeux)."
      - "Cuisson. Placez vos saucisses végétales dans la farine de façon à ce qu’elles soient entièrement recouvertes. Plongez-les ensuite dans l’œuf de lin, puis dans la chapelure. Repassez-les dans l’œuf de lin et de nouveau dans la chapelure."
      - "Dressage. Réservez les saucisses panées au frais le temps de réaliser les sauces."
      - "Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3 cm. Placez le tout dans la cuve d’un robot et mixez. Versez ensuite 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixez le tout. [[filtrer|Filtrez]] la sauce barbecue ainsi obtenue au chinois afin de retirer les gros morceaux."
      - "Mélange. Pour la sauce moutarde et sirop d’érable, mélangez simplement les deux en portions égales."
      - "Finition. Faites cuire vos saucisses panées : [[frire|faites-les frire]] d’un rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour retirer l’excédent de gras."
      pro:
      - "Verser la farine dans un premier récipient. Dans un second, chapelure et pavot, mélanger. Dans un troisième, battre l’œuf de lin (ou le tofu soyeux)."
      - "Passer les saucisses végétales dans la farine, puis dans l’œuf de lin, puis dans la chapelure. Repasser dans l’œuf de lin, puis dans la chapelure."
      - "Réserver les saucisses panées au frais le temps des sauces."
      - "Sauce barbecue : ciseler 2 bâtons de citronnelle, éplucher et couper grossièrement deux gousses d’ail, éplucher un morceau de gingembre frais de 2 ou 3 cm. Mixer au robot. Ajouter 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixer. Filtrer au chinois."
      - "Sauce moutarde et sirop d’érable : mélanger les deux en portions égales."
      - "Frire d’un rapide tour à la friteuse jusqu’à coloration. Débarrasser sur papier absorbant."
      cavernes:
      - "Préparation. Farine, premier récipient. Chapelure, pavot, second, mélanger. Oeuf de lin ou tofu soyeux, troisième, battre."
      - "Cuisson. Saucisses végétales, farine, recouvrir. Oeuf de lin, plonger. Chapelure. Encore œuf de lin, encore chapelure."
      - "Dressage. Saucisses panées, frais, réserver. Temps sauces."
      - "Cuisson. Sauce barbecue. 2 bâtons citronnelle, ciseler. 2 gousses ail, éplucher, couper grossièrement. Gingembre frais 2 ou 3 cm, éplucher. Robot, mixer. 10 cL sauce soja sucrée, 2 c.à.c pâte tandoori, 340 g ketchup, verser. Mixer. Chinois, filtrer, gros morceaux dehors."
      - "Mélange. Sauce moutarde sirop d’érable, portions égales, mélanger."
      - "Finition. Friteuse, rapide, jusqu’à coloration. Papier absorbant, débarrasser, gras dehors."
    kcal_per_serving: 223
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - oeuf
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: protéines de soja texturées réhydratées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: chapelure ou pancko
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: pavot
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second,
      versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et
      battez les oeufs.
    - Cuisson. Placez vos protéines de soja cocktail dans la farine de façon à ce qu’elles soient entièrement
      recouvertes. Plongez-les ensuite dans les oeufs, puis dans la chapelure. Repassez-les
      ensuite dans les oeufs et de nouveau dans la chapelure.
    - Dressage. Réservez les protéines de soja panées au frais le temps de réaliser les sauces.
    - Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement
      deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3cm. Placez le
      tout dans la cuve d’un robot et mixez. Versez ensuite 10cL de sauce soja sucrée, 2 c.à.c
      de pâte de tandoori et 340g de ketchup. Mixez le tout. Passez la sauce barbecue ainsi
      obtenue au chinois afin de retirer les gros morceaux.
    - Mélange. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions
      égales.
    - Finition. Il est maintenant temps de cuir vos protéines de soja panées. Pour cela, il suffit d’un
      rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant
      pour retirer l’excédent de gras. Et voilà, vous avez réussi à transformer de simple
      protéines de soja cocktails en un apéro croustillant et original. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second, versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et battez les œufs."
      - "Cuisson. Placez vos protéines de soja cocktail dans la farine de façon à ce qu’elles soient entièrement recouvertes. Plongez-les ensuite dans les œufs, puis dans la chapelure. Repassez-les ensuite dans les œufs et de nouveau dans la chapelure."
      - "Dressage. Réservez les protéines de soja panées au frais le temps de réaliser les sauces."
      - "Cuisson. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3 cm. Placez le tout dans la cuve d’un robot et mixez. Versez ensuite 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixez le tout. [[filtrer|Filtrez]] la sauce barbecue ainsi obtenue au chinois afin de retirer les gros morceaux."
      - "Mélange. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions égales."
      - "Finition. Faites cuire vos protéines de soja panées : [[frire|faites-les frire]] d’un rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour retirer l’excédent de gras."
      pro:
      - "Verser la farine dans un premier récipient. Dans un second, chapelure et pavot, mélanger. Dans un troisième, casser et battre les œufs."
      - "Passer les protéines de soja cocktail dans la farine, puis dans les œufs, puis dans la chapelure. Repasser dans les œufs, puis dans la chapelure."
      - "Réserver les protéines de soja panées au frais le temps des sauces."
      - "Sauce barbecue : ciseler 2 bâtons de citronnelle, éplucher et couper grossièrement deux gousses d’ail, éplucher un morceau de gingembre frais de 2 ou 3 cm. Mixer au robot. Ajouter 10 cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340 g de ketchup. Mixer. Filtrer au chinois."
      - "Sauce moutarde et miel : mélanger les deux en portions égales."
      - "Frire d’un rapide tour à la friteuse jusqu’à coloration. Débarrasser sur papier absorbant."
      cavernes:
      - "Préparation. Farine, premier récipient. Chapelure, pavot, second, mélanger. Oeufs, troisième, casser, battre."
      - "Cuisson. Protéines soja cocktail, farine, recouvrir. Oeufs, plonger. Chapelure. Encore oeufs, encore chapelure."
      - "Dressage. Protéines soja panées, frais, réserver. Temps sauces."
      - "Cuisson. Sauce barbecue. 2 bâtons citronnelle, ciseler. 2 gousses ail, éplucher, couper grossièrement. Gingembre frais 2 ou 3 cm, éplucher. Robot, mixer. 10 cL sauce soja sucrée, 2 c.à.c pâte tandoori, 340 g ketchup, verser. Mixer. Chinois, filtrer, gros morceaux dehors."
      - "Mélange. Sauce moutarde miel, portions égales, mélanger."
      - "Finition. Friteuse, rapide, jusqu’à coloration. Papier absorbant, débarrasser, gras dehors."
    kcal_per_serving: 223
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegetarienne:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  pesco:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "bouteille fermée", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Saucisses cocktail panées
**Équipement :** [[friteuse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/saucisses-cocktail-panees]]

## Ingrédients (4 personnes)

- 350 g de saucisses cocktail
- 2 oeuf entier
- 100 g de farine
- 300 g de chapelure ou pancko
- 100 g de pavot

## Préparation

1. Versez la farine dans un premier récipient (plat ou assiette creuse). Dans un second, versez la chapelure et le pavot, puis mélangez. Enfin, dans un troisième, cassez et battez les oeufs.
2. Placez vos saucisses cocktail dans la farine de façon à ce qu’elles soient entièrement recouvertes. Plongez-les ensuite dans les oeufs, puis dans la chapelure. Repassez-les ensuite dans les oeufs et de nouveau dans la chapelure.
3. Réservez les saucisses panées au frais le temps de réaliser les sauces.
4. Pour la sauce barbecue, ciselez 2 bâtons de citronnelle, épluchez et coupez grossièrement deux gousses d’ail et épluchez un morceau de gingembre frais de 2 ou 3cm. Placez le tout dans la cuve d’un robot et mixez. Versez ensuite 10cL de sauce soja sucrée, 2 c.à.c de pâte de tandoori et 340g de ketchup. Mixez le tout. Passez la sauce barbecue ainsi obtenue au chinois afin de retirer les gros morceaux.
5. Pour la sauce moutarde et miel, mélangez simplement les deux ingrédients en portions égales.
6. Il est maintenant temps de cuir vos saucisses panées. Pour cela, il suffit d’un rapide tour à la friteuse jusqu’à coloration. Débarrassez ensuite sur un papier absorbant pour retirer l’excédent de gras.

 
 

 
 Et voilà, vous avez réussi à transformer de simple saucisses cocktails en un apéro croustillant et original. Bon appétit !
