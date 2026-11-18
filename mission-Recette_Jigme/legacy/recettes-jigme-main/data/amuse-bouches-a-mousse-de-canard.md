---
schema: recette-web-jigme/v2
slug: amuse-bouches-a-mousse-de-canard
title: Amuse-bouches à mousse de canard
lang: fr
description: "Amuse-bouches à mousse de canard : recette française avec mousse de canard, citron confit et cornichon, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- entrée
- canard
- fêtes
image:
  url:
  alt: Amuse-bouches à mousse de canard
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/amuse-bouches-a-mousse-de-canard.md
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
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (pavé de saumon) : pas d’adaptation fiable.'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    - from: cornichon
      to: concombre + un filet de jus de citron
      note:
    - from: porto
      to: bouillon de légumes
      note:
    - from: vinaigre balsamique
      to: jus de citron
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  L’amuse-bouche de restaurant (petite bouchée avant le menu) se fixe au XXe siècle
  dans la haute cuisine française. La mousse de canard (foie, magret ou rillettes
  mixées) est un usage de charcutier, pas un mets médiéval catalogué.
fun_facts:
- text: >
    « Amuse-bouche » et « amuse-gueule » ne sont pas interchangeables partout :
    le premier est plutôt de carte, le second d’apéritif.
  source_name: Usage français
  source_url:
- text: >
    Une mousse de canard se tient au gras et au froid : trop fouettée, elle bave
    dès la pièce chauffe.
  source_name: Usage charcutier
  source_url:
wines:
- name: Crémant de Loire
  producer: Langlois-Chateau
  origin: Saumur, Loire
  grapes: chenin, chardonnay
  award:
  why: Bulles, extra-brut — gras du canard, citron confit.
- name: Alsace Pinot Noir
  producer: Domaine Marcel Deiss
  origin: Bergheim, Alsace
  grapes: pinot noir
  award:
  why: Cerise, peu de tanin — mousse et porto sans écraser.
- name: Banyuls
  producer: Domaine Vial-Magnères
  origin: Banyuls-sur-Mer, Roussillon
  grapes: grenache
  award:
  why: (un vin plus marqué) Fruit noir, sucrosité — le canard et le porto.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 10
      rest_min: 0
      total_min: 50
    equipment: &id002
    - four
    - moule / plat
    - rouleau à pâtisserie
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: mousse de canard
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron confit
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: cornichon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: porto
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vinaigre balsamique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: feuilles de gélatine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranches de pain de mie
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Munissez vous de moules en forme de petites demi-sphères. Garnissez-les de mousse de
      canard à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère).
      Ne remplissez pas complètement les moules, car nous allons ensuite garnir l’intérieur
      des demi-sphères.
    - Cuisson. Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur
      des demi-sphères, puis refermez ces dernières avec le reste de la mousse de canard.
      Placez le tout au congélateur.
    - Cuisson. Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar.
      Une fois que le mélange boue, faites flamber l’alcool (regardez comment Marc fait dans
      la vidéo ci-dessous).
    - Cuisson. Ajoutez ensuite les feuilles de gélatine, préalablement humidifiées dans de l’eau froide
      et mélangez.
    - Cuisson. Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage
      au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, comme on
      le montre dans la vidéo ci-dessous, et déposez-la sur une assiette. Faites de même pour
      toutes les demi-sphères.
    - Cuisson. Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grill
      pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des
      demi-sphères, à l’aide d’un emporte pièce.
    - Finition. Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez
      les amuses-bouche ainsi obtenus dans un joli plat et dégustez ce chef d’oeuvre avec
      vos invités. Bon appétit !
    steps_niveaux:
      amateur:
      - "Munissez-vous de moules en forme de petites demi-sphères. Garnissez-les de mousse de canard à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère). Ne remplissez pas complètement les moules : vous garnirez ensuite l’intérieur des demi-sphères."
      - "Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur des demi-sphères, puis refermez ces dernières avec le reste de la mousse de canard. Placez le tout au congélateur."
      - "Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar. Une fois que le mélange bout, faites flamber l’alcool."
      - "Ajoutez ensuite les feuilles de gélatine, préalablement humidifiées dans de l’eau froide, et mélangez."
      - "Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, et déposez-la sur une assiette. Faites de même pour toutes les demi-sphères."
      - "Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grille-pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des demi-sphères, à l’aide d’un emporte-pièce."
      - "Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez les amuse-bouches ainsi obtenus dans un plat."
      pro:
      - "Munir des moules en petites demi-sphères. Garnir de mousse de canard à la spatule ou à la cuillère à café (dos de la cuillère), sans remplir complètement."
      - "Couper finement cornichons et citrons confits. Garnir l’intérieur des demi-sphères, refermer avec le reste de mousse de canard. Congélateur."
      - "Porter à ébullition le porto, le balsamique blanc et l’agar agar. Dès que le mélange bout, flamber l’alcool."
      - "Ajouter les feuilles de gélatine, préalablement humidifiées dans de l’eau froide. Mélanger."
      - "Piquer une demi-sphère sur un cure-dent. Plonger dans le glaçage au porto. Retirer du cure-dent à la fourchette. Déposer sur une assiette. Répéter pour toutes les demi-sphères."
      - "Aplatir un morceau de pain de mie au rouleau. Passer au grille-pain. Découper des ronds à la taille des demi-sphères, emporte-pièce."
      - "Déposer chaque sphère sur son toast, un peu de citron confit et de ciboulette. Dresser."
      cavernes:
      - "Moules petites demi-sphères. Garnir mousse de canard, spatule ou cuillère à café, dos de cuillère. Pas remplir complètement."
      - "Cornichons, citrons confits : couper fin. Garnir intérieur demi-sphères. Refermer reste mousse de canard. Congélateur."
      - "Porto, balsamique blanc, agar agar : ébullition. Mélange bout, flamber alcool."
      - "Feuilles gélatine, humidifiées eau froide. Mélanger."
      - "Demi-sphère, cure-dent. Plonger glaçage porto. Retirer cure-dent, fourchette. Déposer assiette. Pareil toutes demi-sphères."
      - "Pain de mie, rouleau, aplatir. Grille-pain. Grillé : petits ronds taille demi-sphères, emporte-pièce."
      - "Sphère sur toast. Peu citron confit, ciboulette. Plat."
    kcal_per_serving: 407
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: aubergines rôties (gros quartiers)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron confit
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: cornichon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: porto
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vinaigre balsamique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3.0
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranches de pain de mie
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Munissez vous de moules en forme de petites demi-sphères. Garnissez-les de aubergines
      rôties (gros quartiers) à l’aide d’une spatule ou d’une cuillère à café (en utilisant
      le dos de la cuillère). Ne remplissez pas complètement les moules, car nous allons ensuite
      garnir l’intérieur des demi-sphères.
    - Cuisson. Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur
      des demi-sphères, puis refermez ces dernières avec le reste de la aubergines rôties
      (gros quartiers). Placez le tout au congélateur.
    - Cuisson. Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar.
      Une fois que le mélange boue, faites flamber l’alcool (regardez comment Marc fait dans
      la vidéo ci-dessous).
    - Cuisson. Ajoutez ensuite les feuilles de agar-agar, préalablement humidifiées dans de l’eau froide
      et mélangez.
    - Cuisson. Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage
      au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, comme on
      le montre dans la vidéo ci-dessous, et déposez-la sur une assiette. Faites de même pour
      toutes les demi-sphères.
    - Cuisson. Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grill
      pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des
      demi-sphères, à l’aide d’un emporte pièce.
    - Finition. Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez
      les amuses-bouche ainsi obtenus dans un joli plat et dégustez ce chef d’oeuvre avec
      vos invités. Bon appétit !
    steps_niveaux:
      amateur:
      - "Munissez-vous de moules en forme de petites demi-sphères. Garnissez-les d’aubergines rôties (gros quartiers) à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère). Ne remplissez pas complètement les moules : vous garnirez ensuite l’intérieur des demi-sphères."
      - "Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur des demi-sphères, puis refermez ces dernières avec le reste des aubergines rôties (gros quartiers). Placez le tout au congélateur."
      - "Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar. Une fois que le mélange bout, faites flamber l’alcool."
      - "Ajoutez ensuite les feuilles d’agar-agar, préalablement humidifiées dans de l’eau froide, et mélangez."
      - "Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, et déposez-la sur une assiette. Faites de même pour toutes les demi-sphères."
      - "Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grille-pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des demi-sphères, à l’aide d’un emporte-pièce."
      - "Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez les amuse-bouches ainsi obtenus dans un plat."
      pro:
      - "Munir des moules en petites demi-sphères. Garnir d’aubergines rôties (gros quartiers) à la spatule ou à la cuillère à café (dos de la cuillère), sans remplir complètement."
      - "Couper finement cornichons et citrons confits. Garnir l’intérieur des demi-sphères, refermer avec le reste des aubergines rôties (gros quartiers). Congélateur."
      - "Porter à ébullition le porto, le balsamique blanc et l’agar agar. Dès que le mélange bout, flamber l’alcool."
      - "Ajouter les feuilles d’agar-agar, préalablement humidifiées dans de l’eau froide. Mélanger."
      - "Piquer une demi-sphère sur un cure-dent. Plonger dans le glaçage au porto. Retirer du cure-dent à la fourchette. Déposer sur une assiette. Répéter pour toutes les demi-sphères."
      - "Aplatir un morceau de pain de mie au rouleau. Passer au grille-pain. Découper des ronds à la taille des demi-sphères, emporte-pièce."
      - "Déposer chaque sphère sur son toast, un peu de citron confit et de ciboulette. Dresser."
      cavernes:
      - "Moules petites demi-sphères. Garnir aubergines rôties (gros quartiers), spatule ou cuillère à café, dos de cuillère. Pas remplir complètement."
      - "Cornichons, citrons confits : couper fin. Garnir intérieur demi-sphères. Refermer reste aubergines rôties (gros quartiers). Congélateur."
      - "Porto, balsamique blanc, agar agar : ébullition. Mélange bout, flamber alcool."
      - "Feuilles agar-agar, humidifiées eau froide. Mélanger."
      - "Demi-sphère, cure-dent. Plonger glaçage porto. Retirer cure-dent, fourchette. Déposer assiette. Pareil toutes demi-sphères."
      - "Pain de mie, rouleau, aplatir. Grille-pain. Grillé : petits ronds taille demi-sphères, emporte-pièce."
      - "Sphère sur toast. Peu citron confit, ciboulette. Plat."
    kcal_per_serving: 321
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
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: aubergines rôties (gros quartiers)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron confit
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: cornichon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: porto
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vinaigre balsamique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: piece
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranches de pain de mie
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Munissez vous de moules en forme de petites demi-sphères. Garnissez-les de aubergines
      rôties (gros quartiers) à l’aide d’une spatule ou d’une cuillère à café (en utilisant
      le dos de la cuillère). Ne remplissez pas complètement les moules, car nous allons ensuite
      garnir l’intérieur des demi-sphères.
    - Cuisson. Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur
      des demi-sphères, puis refermez ces dernières avec le reste de la aubergines rôties
      (gros quartiers). Placez le tout au congélateur.
    - Cuisson. Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar.
      Une fois que le mélange boue, faites flamber l’alcool (regardez comment Marc fait dans
      la vidéo ci-dessous).
    - Mélange. Ajoutez ensuite les agar-agar, préalablement humidifiées dans de l’eau froide et mélangez.
    - Cuisson. Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage
      au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, comme on
      le montre dans la vidéo ci-dessous, et déposez-la sur une assiette. Faites de même pour
      toutes les demi-sphères.
    - Cuisson. Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grill
      pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des
      demi-sphères, à l’aide d’un emporte pièce.
    - Finition. Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez
      les amuses-bouche ainsi obtenus dans un joli plat et dégustez ce chef d’oeuvre avec
      vos invités. Bon appétit !
    steps_niveaux:
      amateur:
      - "Munissez-vous de moules en forme de petites demi-sphères. Garnissez-les d’aubergines rôties (gros quartiers) à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère). Ne remplissez pas complètement les moules : vous garnirez ensuite l’intérieur des demi-sphères."
      - "Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur des demi-sphères, puis refermez ces dernières avec le reste des aubergines rôties (gros quartiers). Placez le tout au congélateur."
      - "Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar. Une fois que le mélange bout, faites flamber l’alcool."
      - "Ajoutez ensuite les agar-agar, préalablement humidifiées dans de l’eau froide, et mélangez."
      - "Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, et déposez-la sur une assiette. Faites de même pour toutes les demi-sphères."
      - "Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grille-pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des demi-sphères, à l’aide d’un emporte-pièce."
      - "Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez les amuse-bouches ainsi obtenus dans un plat."
      pro:
      - "Munir des moules en petites demi-sphères. Garnir d’aubergines rôties (gros quartiers) à la spatule ou à la cuillère à café (dos de la cuillère), sans remplir complètement."
      - "Couper finement cornichons et citrons confits. Garnir l’intérieur des demi-sphères, refermer avec le reste des aubergines rôties (gros quartiers). Congélateur."
      - "Porter à ébullition le porto, le balsamique blanc et l’agar agar. Dès que le mélange bout, flamber l’alcool."
      - "Ajouter les agar-agar, préalablement humidifiées dans de l’eau froide. Mélanger."
      - "Piquer une demi-sphère sur un cure-dent. Plonger dans le glaçage au porto. Retirer du cure-dent à la fourchette. Déposer sur une assiette. Répéter pour toutes les demi-sphères."
      - "Aplatir un morceau de pain de mie au rouleau. Passer au grille-pain. Découper des ronds à la taille des demi-sphères, emporte-pièce."
      - "Déposer chaque sphère sur son toast, un peu de citron confit et de ciboulette. Dresser."
      cavernes:
      - "Moules petites demi-sphères. Garnir aubergines rôties (gros quartiers), spatule ou cuillère à café, dos de cuillère. Pas remplir complètement."
      - "Cornichons, citrons confits : couper fin. Garnir intérieur demi-sphères. Refermer reste aubergines rôties (gros quartiers). Congélateur."
      - "Porto, balsamique blanc, agar agar : ébullition. Mélange bout, flamber alcool."
      - "Agar-agar, humidifiées eau froide. Mélanger."
      - "Demi-sphère, cure-dent. Plonger glaçage porto. Retirer cure-dent, fourchette. Déposer assiette. Pareil toutes demi-sphères."
      - "Pain de mie, rouleau, aplatir. Grille-pain. Grillé : petits ronds taille demi-sphères, emporte-pièce."
      - "Sphère sur toast. Peu citron confit, ciboulette. Plat."
    kcal_per_serving: 292
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: pavé de saumon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: citron confit
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: cornichon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: ml
      item: porto
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: vinaigre balsamique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3.0
      unit: g
      item: agar-agar
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tranches de pain de mie
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Munissez vous de moules en forme de petites demi-sphères. Garnissez-les de pavé de saumon
      à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère).
      Ne remplissez pas complètement les moules, car nous allons ensuite garnir l’intérieur
      des demi-sphères.
    - Cuisson. Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur
      des demi-sphères, puis refermez ces dernières avec le reste de la pavé de saumon. Placez
      le tout au congélateur.
    - Cuisson. Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar.
      Une fois que le mélange boue, faites flamber l’alcool (regardez comment Marc fait dans
      la vidéo ci-dessous).
    - Cuisson. Ajoutez ensuite les feuilles de agar-agar, préalablement humidifiées dans de l’eau froide
      et mélangez.
    - Cuisson. Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage
      au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, comme on
      le montre dans la vidéo ci-dessous, et déposez-la sur une assiette. Faites de même pour
      toutes les demi-sphères.
    - Cuisson. Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grill
      pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des
      demi-sphères, à l’aide d’un emporte pièce.
    - Finition. Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez
      les amuses-bouche ainsi obtenus dans un joli plat et dégustez ce chef d’oeuvre avec
      vos invités. Bon appétit !
    steps_niveaux:
      amateur:
      - "Munissez-vous de moules en forme de petites demi-sphères. Garnissez-les de pavé de saumon à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère). Ne remplissez pas complètement les moules : vous garnirez ensuite l’intérieur des demi-sphères."
      - "Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur des demi-sphères, puis refermez ces dernières avec le reste du pavé de saumon. Placez le tout au congélateur."
      - "Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar. Une fois que le mélange bout, faites flamber l’alcool."
      - "Ajoutez ensuite les feuilles d’agar-agar, préalablement humidifiées dans de l’eau froide, et mélangez."
      - "Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, et déposez-la sur une assiette. Faites de même pour toutes les demi-sphères."
      - "Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grille-pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des demi-sphères, à l’aide d’un emporte-pièce."
      - "Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette. Placez les amuse-bouches ainsi obtenus dans un plat."
      pro:
      - "Munir des moules en petites demi-sphères. Garnir de pavé de saumon à la spatule ou à la cuillère à café (dos de la cuillère), sans remplir complètement."
      - "Couper finement cornichons et citrons confits. Garnir l’intérieur des demi-sphères, refermer avec le reste du pavé de saumon. Congélateur."
      - "Porter à ébullition le porto, le balsamique blanc et l’agar agar. Dès que le mélange bout, flamber l’alcool."
      - "Ajouter les feuilles d’agar-agar, préalablement humidifiées dans de l’eau froide. Mélanger."
      - "Piquer une demi-sphère sur un cure-dent. Plonger dans le glaçage au porto. Retirer du cure-dent à la fourchette. Déposer sur une assiette. Répéter pour toutes les demi-sphères."
      - "Aplatir un morceau de pain de mie au rouleau. Passer au grille-pain. Découper des ronds à la taille des demi-sphères, emporte-pièce."
      - "Déposer chaque sphère sur son toast, un peu de citron confit et de ciboulette. Dresser."
      cavernes:
      - "Moules petites demi-sphères. Garnir pavé de saumon, spatule ou cuillère à café, dos de cuillère. Pas remplir complètement."
      - "Cornichons, citrons confits : couper fin. Garnir intérieur demi-sphères. Refermer reste pavé de saumon. Congélateur."
      - "Porto, balsamique blanc, agar agar : ébullition. Mélange bout, flamber alcool."
      - "Feuilles agar-agar, humidifiées eau froide. Mélanger."
      - "Demi-sphère, cure-dent. Plonger glaçage porto. Retirer cure-dent, fourchette. Déposer assiette. Pareil toutes demi-sphères."
      - "Pain de mie, rouleau, aplatir. Grille-pain. Grillé : petits ronds taille demi-sphères, emporte-pièce."
      - "Sphère sur toast. Peu citron confit, ciboulette. Plat."
    kcal_per_serving: 393
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

# Amuse-bouches à mousse de canard
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/amuse-bouches-a-mousse-de-canard]]

## Ingrédients (4 personnes)

- 200 g de mousse de canard
- 2 citron confit
- 5 cornichon
- 25 cL de porto
- 5 cL de vinaigre balsamique
- 2 g d'agar agar
- 6 feuilles de gélatine
- 4 tranches de pain de mie

## Préparation

1. Munissez vous de moules en forme de petites demi-sphères. Garnissez-les de mousse de canard à l’aide d’une spatule ou d’une cuillère à café (en utilisant le dos de la cuillère). Ne remplissez pas complètement les moules, car nous allons ensuite garnir l’intérieur des demi-sphères.
2. Coupez finement des cornichons et des citrons confits. Utilisez-les pour garnir l’intérieur des demi-sphères, puis refermez ces dernières avec le reste de la mousse de canard. Placez le tout au congélateur.
3. Pendant ce temps, portez à ébullition le porto, le balsamique blanc et l’agar agar. Une fois que le mélange boue, faites flamber l’alcool (regardez comment Marc fait dans la vidéo ci-dessous).
4. Ajoutez ensuite les feuilles de gélatine, préalablement humidifiées dans de l’eau froide et mélangez.
5. Récupérez une demi-sphère et placez-la sur un cure-dent. Plongez-la dans le glaçage au porto. Retirez-la ensuite du cure-dent en vous aidant d’une fourchette, comme on le montre dans la vidéo ci-dessous, et déposez-la sur une assiette. Faites de même pour toutes les demi-sphères.
6. Aplatissez un morceau de pain de mie à l’aide d’un rouleau, puis passez-le au grill pain. Une fois grillé, découpez dans le pain de mie des petits ronds de la taille des demi-sphères, à l’aide d’un emporte pièce.
7. Déposez chaque sphère sur son toast avec un peu de citron confit et de ciboulette.

 
 

 
 Placez les amuses-bouche ainsi obtenus dans un joli plat et dégustez ce chef d’oeuvre avec vos invités. Bon appétit !
