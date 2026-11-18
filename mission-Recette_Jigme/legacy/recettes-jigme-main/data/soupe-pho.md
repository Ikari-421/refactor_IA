---
schema: recette-web-jigme/v2
slug: soupe-pho
title: Soupe pho
lang: fr
description: "Soupe pho : recette vietnamienne avec os à moelle, plat de côte de boeuf et nouilles de riz pour le pho, pour 4 personnes."
cuisine: vietnamienne
category: salé
tags:
- salé
- soupe
- os à moelle
- plat
image:
  url:
  alt: Soupe pho
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/soupe-pho.md
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
    - from: sauce soja
      to: tamari sans gluten
      note:
    - from: seitan ou champignons portobello
      to: tofu ferme
      note:
    note: Nouilles de riz déjà sans gluten ; sauce soja → tamari.
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
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
    already_ok: false
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
histoire: 'Phở : soupe vietnamienne de nouilles de riz, bouillon d’os, herbes, viande. Le mot apparaît
  par écrit au nord du Viêt Nam au début du XXe s. (dictionnaires vers 1930). Plat national, ici au bœuf.

  '
fun_facts:
- text: >
    Le bouillon se clarifie longtemps ; les herbes (basilic thaï, coriandre,
    citronnelle) se jettent au dernier moment.
  source_name: Grokipedia, Pho
  source_url: https://grokipedia.com/page/Pho
- text: >
    Nouilles de riz, pas de blé : trop cuites, elles cassent dans le bol.
  source_name: Usage
  source_url:
wines:
- name: Alsace Riesling
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume — le bouillon et les herbes, sans un rouge tannique.
- name: Alsace Pinot Gris
  producer: Cave de Turckheim
  origin: Turckheim, Alsace
  grapes: pinot gris
  award:
  why: Poire — le bœuf, légèrement sucré.
- name: Côtes de Provence
  producer: Château de Pourcieux
  origin: Pourcieux, Provence
  grapes: grenache, cinsault
  award:
  why: Rosé sec — la soupe, sans un vin de garde.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - poisson
    - soja
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 600
      rest_min: 0
      total_min: 630
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: os à moelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: plat de côte de boeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles de riz pour le pho
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: filet de bavette
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gingembre entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'aillets ou d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de coriandre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de poivre noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bâton de cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cardamome noire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: anis étoilée (ou badiane)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: nuoc-mam
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos os à moelle dans une casserole et remplissez d’eau à hauteur. Faites bouillir
      le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez
      l’écume qui apparait à la surface à l’aide d’une petite passoire métallique munie d’un
      manche (attention à ne pas vous brûler).
    - Cuisson. Videz l’eau de cuisson, puis rincez les os à moelle à l’eau claire. L’objectif est de
      retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la
      recette.
    - 'Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre.
      Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix
      s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuir dans une
      poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. On a choisi
      la dernière méthode, en mode Mc Gyver (voir la vidéo ci-dessous). Réservez.'
    - Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle,
      le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la
      cardamome classique). Dès que le tout a bien brunît, vous pouvez réserver.
    - Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans
      une grande casserole, placez les os à moelle blanchis, les oignons, le gingembre, les
      épices torréfiées ainsi que le plat de côte de boeuf. Laissez mijoter plusieurs heures
      à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si
      vous êtes pressés de goûter cette recette). Retirez régulièrement l’écume qui apparaît
      à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez
      également les tâches de gras qui apparaissent à la surface du bouillon.
    - Cuisson. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis filtrez
      le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce nuoc mam (sauce poisson).
    - Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées
      sur le paquet (la cuisson est généralement très rapide).
    - C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et
      déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment
      la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles
      vont cuire légèrement dans le bouillon.
    - 'Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une
      poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement,
      du piment rouge et de la coriandre fraîche. Finalisez votre soupe Pho en y versant du
      jus de citron vert, et c’est prêt ! Dégustez votre soupe bien chaude au déjeuner ou
      au diner…ou encore au petit-déjeuner, comme c’était le cas traditionnellement au Vietnam
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos os à moelle dans une casserole et remplissez d’eau à hauteur. Faites bouillir le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez l’écume qui apparaît à la surface à l’aide d’une petite passoire métallique munie d’un manche (attention à ne pas vous brûler)."
      - "Cuisson. Videz l’eau de cuisson, puis rincez les os à moelle à l’eau claire. L’objectif est de retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la recette."
      - "Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre. Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuire dans une poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. Réservez."
      - "Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la cardamome classique). Dès que le tout a bien bruni, vous pouvez réserver."
      - "Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans une grande casserole, placez les os à moelle, les oignons, le gingembre, les épices torréfiées ainsi que le plat de côte de boeuf. [[mijoter|Laissez mijoter]] plusieurs heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si vous êtes pressés). Retirez régulièrement l’écume qui apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez également les taches de gras qui apparaissent à la surface du bouillon."
      - "Cuisson. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis [[filtrer|filtrez]] le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce nuoc mam (sauce poisson)."
      - "Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées sur le paquet (la cuisson est généralement très rapide)."
      - "C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles vont cuire légèrement dans le bouillon."
      - "Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement, du piment rouge et de la coriandre fraîche. Finalisez votre soupe pho en y versant du jus de citron vert. Dégustez bien chaud."
      pro:
      - "Placer les os à moelle dans une casserole, remplir d’eau à hauteur. Faire bouillir 5 à 10 minutes maximum. Dès l’ébullition, retirer l’écume à la petite passoire métallique à manche (attention aux brûlures)."
      - "Vider l’eau de cuisson, rincer les os à moelle à l’eau claire, pour un bouillon bien clair."
      - "Couper en deux les oignons (sans les éplucher) et le gros morceau de gingembre. Brûler toutes les faces. Trois choix : i) four, sous le grill, ii) poêle sans matière grasse, iii) directement sur le feu. Réserver."
      - "Poêle bien chaude : ajouter les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire. Dès que le tout a bien bruni, réserver."
      - "Retirer la peau brûlée des oignons et les parties les plus noires du gingembre. Grande casserole : os à moelle, oignons, gingembre, épices torréfiées, plat de côte de boeuf. Laisser mijoter plusieurs heures à feu doux (8h à 10h puristes, 3h à 4h pressés). Retirer régulièrement l’écume à la passoire à manche. Retirer aussi les taches de gras à la cuillère à soupe."
      - "Débarrasser la viande, les oignons et le gingembre dans un plat. Filtrer le bouillon au chinois. Ajouter un filet de sauce nuoc mam (sauce poisson)."
      - "Cuire les vermicelles dans l’eau bouillante selon les indications du paquet (cuisson généralement très rapide)."
      - "Dressage. Découper des lamelles de boeuf dans le plat de côte, les déposer au fond des bols. Ajouter les vermicelles au-dessus. Option viande bleue : de très fines tranches de bavette crues, qui cuisent légèrement dans le bouillon."
      - "Ajouter quelques louches de bouillon par bol. Compléter avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou aillet) coupés finement, du piment rouge et de la coriandre fraîche. Verser du jus de citron vert. Servir bien chaud."
      cavernes:
      - "Cuisson. Os moelle, casserole, eau à hauteur. Bouillir 5 à 10 min maximum. Ébullition : écume surface, petite passoire métallique manche, retirer. Attention brûler."
      - "Cuisson. Eau cuisson, vider. Os moelle, eau claire, rincer. Maximum particules dehors. Bouillon clair."
      - "Cuisson. Oignons, sans éplucher, gingembre gros morceau, couper en deux. Brûler toutes faces. Choix : four sous grill, ou poêle sans gras, ou directement feu. Réserver."
      - "Cuisson. Poêle bien chaude. Graines coriandres, bâtons cannelle, poivre noir, anis étoilée, cardamome noire. Bien bruni, réserver."
      - "Cuisson. Peau brûlée oignons, parties plus noires gingembre, retirer. Grande casserole : os moelle, oignons, gingembre, épices torréfiées, plat côte boeuf. Feu doux, mijoter plusieurs heures (8h à 10h puristes, 3h à 4h pressés). Écume, passoire manche, régulier. Taches gras, cuillère soupe, surface bouillon, retirer."
      - "Cuisson. Viande, oignons, gingembre, plat à part. Bouillon, chinois, filtrer. Filet sauce nuoc mam (sauce poisson)."
      - "Cuisson. Vermicelles, eau bouillante, indications paquet. Cuisson généralement très rapide."
      - "Dressage. Lamelles boeuf, plat côte, fond bols. Vermicelles dessus. Option viande bleue : très fines tranches bavette crues. Cuire légèrement dans bouillon."
      - "Finition. Louches bouillon, par bol. Verdure : poignée pousses soja, oignons frais (ou aillet) coupés finement, piment rouge, coriandre fraîche. Jus citron vert. Déguster chaud."
    kcal_per_serving: 720
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Pas de version végétarienne fiable
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: seitan ou champignons portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles de riz pour le pho
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gingembre entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'aillets ou d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de coriandre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de poivre noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bâton de cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cardamome noire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: anis étoilée (ou badiane)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja + citron vert
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos fond de légumes dans une casserole et remplissez d’eau à hauteur. Faites bouillir
      le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez
      l’écume qui apparait à la surface à l’aide d’une petite passoire métallique munie d’un
      manche (attention à ne pas vous brûler).
    - Cuisson. Videz l’eau de cuisson, puis rincez les fond de légumes à l’eau claire. L’objectif est de
      retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la
      recette.
    - 'Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre.
      Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix
      s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuir dans une
      poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. On a choisi
      la dernière méthode, en mode Mc Gyver (voir la vidéo ci-dessous). Réservez.'
    - Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle,
      le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la
      cardamome classique). Dès que le tout a bien brunît, vous pouvez réserver.
    - Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans
      une grande casserole, placez les fond de légumes blanchis, les oignons, le gingembre, les
      épices torréfiées ainsi que le seitan ou champignons portobello. Laissez mijoter plusieurs
      heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h
      à 4h si vous êtes pressés de goûter cette recette). Retirez régulièrement l’écume qui
      apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe,
      retirez également les tâches de gras qui apparaissent à la surface du bouillon.
    - Cuisson. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis filtrez
      le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce soja + citron vert (sauce
      poisson).
    - Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées
      sur le paquet (la cuisson est généralement très rapide).
    - C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et
      déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment
      la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles
      vont cuire légèrement dans le bouillon.
    - 'Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une
      poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement,
      du piment rouge et de la coriandre fraîche. Finalisez votre soupe Pho en y versant du
      jus de citron vert, et c’est prêt ! Dégustez votre soupe bien chaude au déjeuner ou
      au diner…ou encore au petit-déjeuner, comme c’était le cas traditionnellement au Vietnam
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos fonds de légumes dans une casserole et remplissez d’eau à hauteur. Faites bouillir le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez l’écume qui apparaît à la surface à l’aide d’une petite passoire métallique munie d’un manche (attention à ne pas vous brûler)."
      - "Cuisson. Videz l’eau de cuisson, puis rincez les fonds de légumes à l’eau claire. L’objectif est de retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la recette."
      - "Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre. Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuire dans une poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. Réservez."
      - "Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la cardamome classique). Dès que le tout a bien bruni, vous pouvez réserver."
      - "Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans une grande casserole, placez les fonds de légumes, les oignons, le gingembre, les épices torréfiées ainsi que le seitan ou les champignons portobello. [[mijoter|Laissez mijoter]] plusieurs heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si vous êtes pressés). Retirez régulièrement l’écume qui apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez également les taches de gras qui apparaissent à la surface du bouillon."
      - "Cuisson. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis [[filtrer|filtrez]] le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce soja + citron vert (sauce poisson)."
      - "Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées sur le paquet (la cuisson est généralement très rapide)."
      - "C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles vont cuire légèrement dans le bouillon."
      - "Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement, du piment rouge et de la coriandre fraîche. Finalisez votre soupe pho en y versant du jus de citron vert. Dégustez bien chaud."
      pro:
      - "Placer les fonds de légumes dans une casserole, remplir d’eau à hauteur. Faire bouillir 5 à 10 minutes maximum. Dès l’ébullition, retirer l’écume à la petite passoire métallique à manche (attention aux brûlures)."
      - "Vider l’eau de cuisson, rincer les fonds de légumes à l’eau claire, pour un bouillon bien clair."
      - "Couper en deux les oignons (sans les éplucher) et le gros morceau de gingembre. Brûler toutes les faces. Trois choix : i) four, sous le grill, ii) poêle sans matière grasse, iii) directement sur le feu. Réserver."
      - "Poêle bien chaude : ajouter les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire. Dès que le tout a bien bruni, réserver."
      - "Retirer la peau brûlée des oignons et les parties les plus noires du gingembre. Grande casserole : fonds de légumes, oignons, gingembre, épices torréfiées, seitan ou champignons portobello. Laisser mijoter plusieurs heures à feu doux (8h à 10h puristes, 3h à 4h pressés). Retirer régulièrement l’écume à la passoire à manche. Retirer aussi les taches de gras à la cuillère à soupe."
      - "Débarrasser la viande, les oignons et le gingembre dans un plat. Filtrer le bouillon au chinois. Ajouter un filet de sauce soja + citron vert (sauce poisson)."
      - "Cuire les vermicelles dans l’eau bouillante selon les indications du paquet (cuisson généralement très rapide)."
      - "Dressage. Découper des lamelles de boeuf dans le plat de côte, les déposer au fond des bols. Ajouter les vermicelles au-dessus. Option viande bleue : de très fines tranches de bavette crues, qui cuisent légèrement dans le bouillon."
      - "Ajouter quelques louches de bouillon par bol. Compléter avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou aillet) coupés finement, du piment rouge et de la coriandre fraîche. Verser du jus de citron vert. Servir bien chaud."
      cavernes:
      - "Cuisson. Fonds légumes, casserole, eau à hauteur. Bouillir 5 à 10 min maximum. Ébullition : écume surface, petite passoire métallique manche, retirer. Attention brûler."
      - "Cuisson. Eau cuisson, vider. Fonds légumes, eau claire, rincer. Maximum particules dehors. Bouillon clair."
      - "Cuisson. Oignons, sans éplucher, gingembre gros morceau, couper en deux. Brûler toutes faces. Choix : four sous grill, ou poêle sans gras, ou directement feu. Réserver."
      - "Cuisson. Poêle bien chaude. Graines coriandres, bâtons cannelle, poivre noir, anis étoilée, cardamome noire. Bien bruni, réserver."
      - "Cuisson. Peau brûlée oignons, parties plus noires gingembre, retirer. Grande casserole : fonds légumes, oignons, gingembre, épices torréfiées, seitan ou champignons portobello. Feu doux, mijoter plusieurs heures (8h à 10h puristes, 3h à 4h pressés). Écume, passoire manche, régulier. Taches gras, cuillère soupe, surface bouillon, retirer."
      - "Cuisson. Viande, oignons, gingembre, plat à part. Bouillon, chinois, filtrer. Filet sauce soja + citron vert (sauce poisson)."
      - "Cuisson. Vermicelles, eau bouillante, indications paquet. Cuisson généralement très rapide."
      - "Dressage. Lamelles boeuf, plat côte, fond bols. Vermicelles dessus. Option viande bleue : très fines tranches bavette crues. Cuire légèrement dans bouillon."
      - "Finition. Louches bouillon, par bol. Verdure : poignée pousses soja, oignons frais (ou aillet) coupés finement, piment rouge, coriandre fraîche. Jus citron vert. Déguster chaud."
    kcal_per_serving: 650
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
    - soja
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: kombu et champignons séchés
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: seitan ou champignons portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles de riz pour le pho
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: steaks de pleurotes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gingembre entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'aillets ou d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de coriandre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de poivre noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bâton de cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cardamome noire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: anis étoilée (ou badiane)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja + citron vert
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez le kombu et les champignons séchés dans une casserole d’eau. Faites bouillir
      le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez
      l’écume qui apparait à la surface à l’aide d’une petite passoire métallique munie d’un
      manche (attention à ne pas vous brûler).
    - Cuisson. Videz l’eau de cuisson, puis rincez le kombu et les champignons. L’objectif est de
      retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la
      recette.
    - 'Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre.
      Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix
      s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuir dans une
      poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. On a choisi
      la dernière méthode, en mode Mc Gyver (voir la vidéo ci-dessous). Réservez.'
    - Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle,
      le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la
      cardamome classique). Dès que le tout a bien brunît, vous pouvez réserver.
    - Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans
      une grande casserole, placez le kombu, les champignons, les oignons, le gingembre, les épices et le seitan. Laissez mijoter plusieurs
      heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h
      à 4h si vous êtes pressés de goûter cette recette). Retirez régulièrement l’écume qui
      apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe,
      retirez également les tâches de gras qui apparaissent à la surface du bouillon.
    - Cuisson. Débarrassez le seitan, les oignons et le gingembre, filtrez le bouillon. Ajoutez un filet de sauce soja et de citron vert.
    - Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées
      sur le paquet (la cuisson est généralement très rapide).
    - C’est parti pour le dressage. Déposez des lamelles de seitan ou de pleurotes au fond des bols, puis les vermicelles.
    - 'Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une
      poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement,
      du piment rouge et de la coriandre fraîche. Finalisez votre soupe Pho en y versant du
      jus de citron vert, et c’est prêt ! Dégustez votre soupe bien chaude au déjeuner ou
      au diner…ou encore au petit-déjeuner, comme c’était le cas traditionnellement au Vietnam
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Cuisson. Placez le kombu et les champignons séchés dans une casserole d’eau. Faites bouillir le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez l’écume qui apparaît à la surface à l’aide d’une petite passoire métallique munie d’un manche (attention à ne pas vous brûler)."
      - "Cuisson. Videz l’eau de cuisson, puis rincez le kombu et les champignons. L’objectif est de retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la recette."
      - "Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre. Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuire dans une poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. Réservez."
      - "Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la cardamome classique). Dès que le tout a bien bruni, vous pouvez réserver."
      - "Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans une grande casserole, placez le kombu, les champignons, les oignons, le gingembre, les épices et le seitan. [[mijoter|Laissez mijoter]] plusieurs heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si vous êtes pressés). Retirez régulièrement l’écume qui apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez également les taches de gras qui apparaissent à la surface du bouillon."
      - "Cuisson. Débarrassez le seitan, les oignons et le gingembre, puis [[filtrer|filtrez]] le bouillon. Ajoutez un filet de sauce soja et de citron vert."
      - "Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées sur le paquet (la cuisson est généralement très rapide)."
      - "C’est parti pour le dressage. Déposez des lamelles de seitan ou de pleurotes au fond des bols, puis les vermicelles."
      - "Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement, du piment rouge et de la coriandre fraîche. Finalisez votre soupe pho en y versant du jus de citron vert. Dégustez bien chaud."
      pro:
      - "Placer le kombu et les champignons séchés dans une casserole d’eau. Faire bouillir 5 à 10 minutes maximum. Dès l’ébullition, retirer l’écume à la petite passoire métallique à manche (attention aux brûlures)."
      - "Vider l’eau de cuisson, rincer le kombu et les champignons, pour un bouillon bien clair."
      - "Couper en deux les oignons (sans les éplucher) et le gros morceau de gingembre. Brûler toutes les faces. Trois choix : i) four, sous le grill, ii) poêle sans matière grasse, iii) directement sur le feu. Réserver."
      - "Poêle bien chaude : ajouter les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire. Dès que le tout a bien bruni, réserver."
      - "Retirer la peau brûlée des oignons et les parties les plus noires du gingembre. Grande casserole : kombu, champignons, oignons, gingembre, épices, seitan. Laisser mijoter plusieurs heures à feu doux (8h à 10h puristes, 3h à 4h pressés). Retirer régulièrement l’écume à la passoire à manche. Retirer aussi les taches de gras à la cuillère à soupe."
      - "Débarrasser le seitan, les oignons et le gingembre. Filtrer le bouillon. Ajouter un filet de sauce soja et de citron vert."
      - "Cuire les vermicelles dans l’eau bouillante selon les indications du paquet (cuisson généralement très rapide)."
      - "Dressage. Déposer des lamelles de seitan ou de pleurotes au fond des bols, puis les vermicelles."
      - "Ajouter quelques louches de bouillon par bol. Compléter avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou aillet) coupés finement, du piment rouge et de la coriandre fraîche. Verser du jus de citron vert. Servir bien chaud."
      cavernes:
      - "Cuisson. Kombu, champignons séchés, casserole eau. Bouillir 5 à 10 min maximum. Ébullition : écume surface, petite passoire métallique manche, retirer. Attention brûler."
      - "Cuisson. Eau cuisson, vider. Kombu, champignons, rincer. Maximum particules dehors. Bouillon clair."
      - "Cuisson. Oignons, sans éplucher, gingembre gros morceau, couper en deux. Brûler toutes faces. Choix : four sous grill, ou poêle sans gras, ou directement feu. Réserver."
      - "Cuisson. Poêle bien chaude. Graines coriandres, bâtons cannelle, poivre noir, anis étoilée, cardamome noire. Bien bruni, réserver."
      - "Cuisson. Peau brûlée oignons, parties plus noires gingembre, retirer. Grande casserole : kombu, champignons, oignons, gingembre, épices, seitan. Feu doux, mijoter plusieurs heures (8h à 10h puristes, 3h à 4h pressés). Écume, passoire manche, régulier. Taches gras, cuillère soupe, surface bouillon, retirer."
      - "Cuisson. Seitan, oignons, gingembre, débarrasser. Bouillon, filtrer. Filet sauce soja, citron vert."
      - "Cuisson. Vermicelles, eau bouillante, indications paquet. Cuisson généralement très rapide."
      - "Dressage. Lamelles seitan ou pleurotes, fond bols, puis vermicelles."
      - "Finition. Louches bouillon, par bol. Verdure : poignée pousses soja, oignons frais (ou aillet) coupés finement, piment rouge, coriandre fraîche. Jus citron vert. Déguster chaud."
    kcal_per_serving: 650
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pas de version pesco fiable
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: arêtes de poisson
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: thon ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: nouilles de riz pour le pho
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: pousses de soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: pavé de thon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gingembre entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: botte d'aillets ou d'oignons nouveaux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet de coriandre fraiche
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron vert
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: piment rouge
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de coriandre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: grains de poivre noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: bâton de cannelle
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: cardamome noire
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: anis étoilée (ou badiane)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce de poisson (nuoc-mâm)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Placez vos arêtes de poisson dans une casserole et remplissez d’eau à hauteur. Faites bouillir
      le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez
      l’écume qui apparait à la surface à l’aide d’une petite passoire métallique munie d’un
      manche (attention à ne pas vous brûler).
    - Cuisson. Videz l’eau de cuisson, puis rincez les arêtes de poisson à l’eau claire. L’objectif est de
      retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la
      recette.
    - 'Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre.
      Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix
      s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuir dans une
      poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. On a choisi
      la dernière méthode, en mode Mc Gyver (voir la vidéo ci-dessous). Réservez.'
    - Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle,
      le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la
      cardamome classique). Dès que le tout a bien brunît, vous pouvez réserver.
    - Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans
      une grande casserole, placez les arêtes de poisson blanchis, les oignons, le gingembre, les
      épices torréfiées ainsi que le thon ou cabillaud. Laissez mijoter plusieurs heures à
      feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si vous
      êtes pressés de goûter cette recette). Retirez régulièrement l’écume qui apparaît à
      la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez
      également les tâches de gras qui apparaissent à la surface du bouillon.
    - Cuisson. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis filtrez
      le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce nuoc mam (sauce poisson).
    - Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées
      sur le paquet (la cuisson est généralement très rapide).
    - C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et
      déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment
      la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles
      vont cuire légèrement dans le bouillon.
    - 'Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une
      poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement,
      du piment rouge et de la coriandre fraîche. Finalisez votre soupe Pho en y versant du
      jus de citron vert, et c’est prêt ! Dégustez votre soupe bien chaude au déjeuner ou
      au diner…ou encore au petit-déjeuner, comme c’était le cas traditionnellement au Vietnam
      ! Bon appétit !'
    steps_niveaux:
      amateur:
      - "Cuisson. Placez vos arêtes de poisson dans une casserole et remplissez d’eau à hauteur. Faites bouillir le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez l’écume qui apparaît à la surface à l’aide d’une petite passoire métallique munie d’un manche (attention à ne pas vous brûler)."
      - "Cuisson. Videz l’eau de cuisson, puis rincez les arêtes de poisson à l’eau claire. L’objectif est de retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la recette."
      - "Cuisson. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre. Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuire dans une poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. Réservez."
      - "Cuisson. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la cardamome classique). Dès que le tout a bien bruni, vous pouvez réserver."
      - "Cuisson. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans une grande casserole, placez les arêtes de poisson, les oignons, le gingembre, les épices torréfiées ainsi que le thon ou le cabillaud. [[mijoter|Laissez mijoter]] plusieurs heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si vous êtes pressés). Retirez régulièrement l’écume qui apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez également les taches de gras qui apparaissent à la surface du bouillon."
      - "Cuisson. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis [[filtrer|filtrez]] le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce nuoc mam (sauce poisson)."
      - "Cuisson. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées sur le paquet (la cuisson est généralement très rapide)."
      - "C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles vont cuire légèrement dans le bouillon."
      - "Finition. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement, du piment rouge et de la coriandre fraîche. Finalisez votre soupe pho en y versant du jus de citron vert. Dégustez bien chaud."
      pro:
      - "Placer les arêtes de poisson dans une casserole, remplir d’eau à hauteur. Faire bouillir 5 à 10 minutes maximum. Dès l’ébullition, retirer l’écume à la petite passoire métallique à manche (attention aux brûlures)."
      - "Vider l’eau de cuisson, rincer les arêtes de poisson à l’eau claire, pour un bouillon bien clair."
      - "Couper en deux les oignons (sans les éplucher) et le gros morceau de gingembre. Brûler toutes les faces. Trois choix : i) four, sous le grill, ii) poêle sans matière grasse, iii) directement sur le feu. Réserver."
      - "Poêle bien chaude : ajouter les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire. Dès que le tout a bien bruni, réserver."
      - "Retirer la peau brûlée des oignons et les parties les plus noires du gingembre. Grande casserole : arêtes de poisson, oignons, gingembre, épices torréfiées, thon ou cabillaud. Laisser mijoter plusieurs heures à feu doux (8h à 10h puristes, 3h à 4h pressés). Retirer régulièrement l’écume à la passoire à manche. Retirer aussi les taches de gras à la cuillère à soupe."
      - "Débarrasser la viande, les oignons et le gingembre dans un plat. Filtrer le bouillon au chinois. Ajouter un filet de sauce nuoc mam (sauce poisson)."
      - "Cuire les vermicelles dans l’eau bouillante selon les indications du paquet (cuisson généralement très rapide)."
      - "Dressage. Découper des lamelles de boeuf dans le plat de côte, les déposer au fond des bols. Ajouter les vermicelles au-dessus. Option viande bleue : de très fines tranches de bavette crues, qui cuisent légèrement dans le bouillon."
      - "Ajouter quelques louches de bouillon par bol. Compléter avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou aillet) coupés finement, du piment rouge et de la coriandre fraîche. Verser du jus de citron vert. Servir bien chaud."
      cavernes:
      - "Cuisson. Arêtes poisson, casserole, eau à hauteur. Bouillir 5 à 10 min maximum. Ébullition : écume surface, petite passoire métallique manche, retirer. Attention brûler."
      - "Cuisson. Eau cuisson, vider. Arêtes poisson, eau claire, rincer. Maximum particules dehors. Bouillon clair."
      - "Cuisson. Oignons, sans éplucher, gingembre gros morceau, couper en deux. Brûler toutes faces. Choix : four sous grill, ou poêle sans gras, ou directement feu. Réserver."
      - "Cuisson. Poêle bien chaude. Graines coriandres, bâtons cannelle, poivre noir, anis étoilée, cardamome noire. Bien bruni, réserver."
      - "Cuisson. Peau brûlée oignons, parties plus noires gingembre, retirer. Grande casserole : arêtes poisson, oignons, gingembre, épices torréfiées, thon ou cabillaud. Feu doux, mijoter plusieurs heures (8h à 10h puristes, 3h à 4h pressés). Écume, passoire manche, régulier. Taches gras, cuillère soupe, surface bouillon, retirer."
      - "Cuisson. Viande, oignons, gingembre, plat à part. Bouillon, chinois, filtrer. Filet sauce nuoc mam (sauce poisson)."
      - "Cuisson. Vermicelles, eau bouillante, indications paquet. Cuisson généralement très rapide."
      - "Dressage. Lamelles boeuf, plat côte, fond bols. Vermicelles dessus. Option viande bleue : très fines tranches bavette crues. Cuire légèrement dans bouillon."
      - "Finition. Louches bouillon, par bol. Verdure : poignée pousses soja, oignons frais (ou aillet) coupés finement, piment rouge, coriandre fraîche. Jus citron vert. Déguster chaud."
    kcal_per_serving: 600
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
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
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C) si le plat se mange chaud."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; riz cuit (Bacillus cereus si refroidissement lent)"

---

# Soupe pho
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/soupe-pho]]

## Ingrédients (4 personnes)

- 4 os à moelle
- 500 g de plat de côte de boeuf
- 400 g de nouilles de riz pour le pho
- 150 g de pousses de soja
- 2 oignon
- 3 filet de bavette
- 1 gingembre entier
- 1 botte d'aillets ou d'oignons nouveaux
- 1 bouquet de coriandre fraiche
- 1 citron vert
- 1 piment rouge
- 1 c.à.s de grains de coriandre
- 1 c.à.s de grains de poivre noir
- 2 bâton de cannelle
- 1 c.à.c de cardamome noire
- 5 anis étoilée (ou badiane)
-  sauce nuoc mam

## Préparation

1. Placez vos os à moelle dans une casserole et remplissez d’eau à hauteur. Faites bouillir le tout pendant 5 à 10 minutes maximum. Lorsque le mélange commence à bouillir, retirez l’écume qui apparait à la surface à l’aide d’une petite passoire métallique munie d’un manche (attention à ne pas vous brûler).
2. Videz l’eau de cuisson, puis rincez les os à moelle à l’eau claire. L’objectif est de retirer le maximum de particules afin d’avoir un bouillon bien clair à la fin de la recette.
3. Coupez en deux les oignons (sans les éplucher) ainsi que le gros morceau de gingembre. Il va maintenant falloir « brûler » toutes les faces de ces ingrédients. Trois choix s’offrent à vous : i) les mettre au four, sous le grill, ii) les faire cuir dans une poêle sans ajout de matière grasse ou iii) les placer directement sur le feu. On a choisi la dernière méthode, en mode Mc Gyver (voir la vidéo ci-dessous). Réservez.
4. Dans une poêle bien chaude, ajoutez les graines de coriandres, les bâtons de cannelle, le poivre noir, l’anis étoilée et la cardamome noire (elle a un goût plus fumé que la cardamome classique). Dès que le tout a bien brunît, vous pouvez réserver.
5. Retirez la peau brûlée des oignons et les parties les plus noires du gingembre. Dans une grande casserole, placez les os à moelle blanchis, les oignons, le gingembre, les épices torréfiées ainsi que le plat de côte de boeuf. Laissez mijoter plusieurs heures à feu doux (8h à 10h si vous êtes des puristes et que vous avez le temps, 3h à 4h si vous êtes pressés de goûter cette recette). Retirez régulièrement l’écume qui apparaît à la surface à l’aide d’une passoire à manche. À l’aide d’une cuillère à soupe, retirez également les tâches de gras qui apparaissent à la surface du bouillon.
6. Débarrassez la viande, les oignons et le gingembre dans un plat à part, puis filtrez le bouillon au chinois. Ajoutez à ce bouillon un filet de sauce nuoc mam (sauce poisson).
7. Faites cuire vos vermicelles dans l’eau bouillante en suivant les indications notées sur le paquet (la cuisson est généralement très rapide).
8. C’est parti pour le dressage. Découpez des lamelles de boeuf dans le plat de côte et déposez-les au fond des bols. Ajoutez les vermicelles au-dessus. Pour ceux qui aiment la viande bleue, vous pouvez ajouter de très fines tranches de bavette crues. Elles vont cuire légèrement dans le bouillon.
9. Ajoutez quelques louches de bouillon par bol, puis complétez avec la verdure : une poignée de pousses de soja, quelques oignons frais (ou de l’aillet) coupés finement, du piment rouge et de la coriandre fraîche. Finalisez votre soupe Pho en y versant du jus de citron vert, et c’est prêt !

 
 

 
 Dégustez votre soupe bien chaude au déjeuner ou au diner…ou encore au petit-déjeuner, comme c’était le cas traditionnellement au Vietnam ! Bon appétit !
