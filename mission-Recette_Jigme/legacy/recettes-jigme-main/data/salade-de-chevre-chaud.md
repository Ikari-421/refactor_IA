---
schema: recette-web-jigme/v2
slug: salade-de-chevre-chaud
title: Salade de chèvre chaud
lang: fr
description: "Salade de chèvre chaud : recette française avec salade, tomate et palet de fromage chèvre, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- salade
- fromage
- rapide
image:
  url:
  alt: Salade de chèvre chaud
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/salade-de-chevre-chaud.md
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
    impossible: true
    redirect_variant:
    clears:
    - lactose
    swaps: []
    note: 'Contient lactose (palet de fromage chèvre (type rocamadour)) : pas d’adaptation
      fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - moutarde
    swaps:
    - from: moutarde
      to: horseradish ou omettre
      note: Allergie.
    note: Omettre ou vinaigrette sans moutarde.
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
    - from: vinaigre balsamique
      to: jus de citron
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  Salade de chèvre chaud : fromage de chèvre rôti sur toasts, mesclun, vinaigrette.
  Plat de bistro français contemporain, pas une salade d’AOC. Le chèvre se sert
  souvent chaud pour le contrasté froid-chaud.
fun_facts:
- text: >
    Un crottin ou une bûche se tiennent au four ; un frais trop humide coule.
  source_name: Usage
  source_url:
- text: >
    Le chèvre apporte l’acide : on vinaigre avec retenue.
  source_name: Grokipedia, Goat cheese
  source_url: https://grokipedia.com/page/Goat_cheese
wines:
- name: Sancerre
  producer: Henri Bourgeois
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — le chèvre de Loire, voisin de terroir.
- name: Quincy
  producer: Domaine Mardon
  origin: Quincy, Loire
  grapes: sauvignon
  award:
  why: Blanc vif — le toast chaud, acidité nette.
- name: Coteaux du Giennois
  producer: Domaine de Villargeau
  origin: Giennois, Loire
  grapes: sauvignon
  award:
  why: Sauvignon — la salade, sans un sancerre de prestige.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - moutarde
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - four
    - poêle
    - saladier
    - plaque + papier sulfurisé
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: palet de fromage chèvre (type rocamadour)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: gésiers
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de
      la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez
      jusqu’à obtenir une vinaigrette assez épaisse. N’hésitez pas à ajuster les doses selon
      vos goûts.
    - Cuisson. Dans une poêle chaude, faite torréfier les pignons de pin. Le temps qu’ils aient une
      belle coloration, découpez quelques tranches de pain et faites les griller au grille-pain.
      Attention, si vous compter faire chauffer le rocamadour au four (et non au micro-onde),
      grillez le pain très légèrement. Réservez les pignons.
    - Cuisson. Dans une poêle, faite revenir les gésiers (sans ajout de matière grasse). Lorsqu’ils
      sont cuits, réservez.
    - Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le
      pain et, si vous aimez, du miel. Enfournez le tout en mode grill pendant quelques minutes
      (quand ça commence à couler, c’est prêt) ! Si vous utilisez un micro-onde, quelques
      secondes suffiront.
    - Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates.
    - Dressage. Place au dressage ! Déposez de la salade au fond des assiettes et agrémentez de quelques
      tranches de tomates. Ajoutez quelques gésiers, les pignons de pin, un peu de noix et
      la vinaigrette. Finalisez avec les tartines de chèvre fondant. Saupoudrez un peu de
      ciboulette fraiche hachée sur la salade et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez jusqu’à obtenir une vinaigrette assez épaisse."
      - "Cuisson. Dans une poêle chaude, torréfiez les pignons de pin. Pendant qu’ils prennent une belle coloration, découpez quelques tranches de pain et faites-les griller au grille-pain. Si vous comptez faire chauffer le rocamadour au four (et non au micro-onde), grillez le pain très légèrement. Réservez les pignons."
      - "Cuisson. Dans une poêle, faites revenir les gésiers (sans ajout de matière grasse). Lorsqu’ils sont cuits, réservez."
      - "Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le pain et, si vous aimez, du miel. Enfournez en mode grill pendant quelques minutes (quand ça commence à couler, c’est prêt). Au micro-onde, quelques secondes suffisent."
      - "Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates."
      - "Dressage. Déposez de la salade au fond des assiettes et agrémentez de quelques tranches de tomates. Ajoutez quelques gésiers, les pignons de pin, un peu de noix et la vinaigrette. Finalisez avec les tartines de chèvre fondant. Saupoudrez un peu de ciboulette fraîche hachée sur la salade."
      pro:
      - "Éplucher et hacher finement l’ail et l’échalote. Les placer dans un bol avec la moutarde, le vinaigre balsamique et l’huile d’olive. Saler, poivrer. Mélanger jusqu’à vinaigrette assez épaisse."
      - "Torréfier les pignons de pin dans une poêle chaude. Pendant la coloration : trancher le pain et le griller au grille-pain. Si le rocamadour passe au four (pas au micro-onde) : griller le pain très légèrement. Réserver les pignons."
      - "Faire revenir les gésiers dans une poêle, sans matière grasse. Une fois cuits, réserver."
      - "Disposer les tranches de pain sur une plaque. Déposer le chèvre, miel optionnel. Enfourner en mode grill quelques minutes (prêt dès que ça coule). Au micro-onde : quelques secondes."
      - "Pendant ce temps, découper quelques demi-rondelles de tomates."
      - "Dresser : salade au fond des assiettes, tranches de tomates, gésiers, pignons, un peu de noix, vinaigrette. Tartines de chèvre fondant. Saupoudrer de ciboulette fraîche hachée."
      cavernes:
      - "Préparation. Ail, échalote, éplucher, hacher fin. Bol : moutarde, vinaigre balsamique, huile olive. Saler, poivrer. Mélanger, vinaigrette assez épaisse."
      - "Cuisson. Poêle chaude, pignons, torréfier. Belle coloration. Pain, tranches, grille-pain. Option four (pas micro-onde) : pain, griller très légèrement. Pignons, réserver."
      - "Cuisson. Poêle, gésiers, revenir, zéro gras. Cuits, réserver."
      - "Cuisson. Pain, plaque four. Chèvre, dessus pain. Option : miel. Mode grill, quelques minutes. Ça coule : prêt. Micro-onde : quelques secondes."
      - "Cuisson. Tomates, demi-rondelles."
      - "Dressage. Salade, fond assiettes. Tomates. Gésiers, pignons, peu noix, vinaigrette. Tartines chèvre fondant. Ciboulette fraiche hachée, saupoudrer."
    kcal_per_serving: 437
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
    - gluten
    - lactose
    - produits_laitiers
    - moutarde
    - sulfites
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: palet de fromage chèvre (type rocamadour)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: noix
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de
      la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez
      jusqu’à obtenir une vinaigrette assez épaisse. N’hésitez pas à ajuster les doses selon
      vos goûts.
    - Cuisson. Dans une poêle chaude, faite torréfier les pignons de pin. Le temps qu’ils aient une
      belle coloration, découpez quelques tranches de pain et faites les griller au grille-pain.
      Attention, si vous compter faire chauffer le rocamadour au four (et non au micro-onde),
      grillez le pain très légèrement. Réservez les pignons.
    - Cuisson. Dans une poêle, faite revenir les noix (sans ajout de matière grasse). Lorsqu’ils
      sont cuits, réservez.
    - Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le
      pain et, si vous aimez, du miel. Enfournez le tout en mode grill pendant quelques minutes
      (quand ça commence à couler, c’est prêt) ! Si vous utilisez un micro-onde, quelques
      secondes suffiront.
    - Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates.
    - Dressage. Place au dressage ! Déposez de la salade au fond des assiettes et agrémentez de quelques
      tranches de tomates. Ajoutez quelques noix, les pignons de pin, un peu de noix et
      la vinaigrette. Finalisez avec les tartines de chèvre fondant. Saupoudrez un peu de
      ciboulette fraiche hachée sur la salade et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez jusqu’à obtenir une vinaigrette assez épaisse."
      - "Cuisson. Dans une poêle chaude, torréfiez les pignons de pin. Pendant qu’ils prennent une belle coloration, découpez quelques tranches de pain et faites-les griller au grille-pain. Si vous comptez faire chauffer le rocamadour au four (et non au micro-onde), grillez le pain très légèrement. Réservez les pignons."
      - "Cuisson. Dans une poêle, faites revenir les noix (sans ajout de matière grasse). Lorsqu’ils sont cuits, réservez."
      - "Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le pain et, si vous aimez, du miel. Enfournez en mode grill pendant quelques minutes (quand ça commence à couler, c’est prêt). Au micro-onde, quelques secondes suffisent."
      - "Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates."
      - "Dressage. Déposez de la salade au fond des assiettes et agrémentez de quelques tranches de tomates. Ajoutez quelques noix, les pignons de pin, un peu de noix et la vinaigrette. Finalisez avec les tartines de chèvre fondant. Saupoudrez un peu de ciboulette fraîche hachée sur la salade."
      pro:
      - "Éplucher et hacher finement l’ail et l’échalote. Les placer dans un bol avec la moutarde, le vinaigre balsamique et l’huile d’olive. Saler, poivrer. Mélanger jusqu’à vinaigrette assez épaisse."
      - "Torréfier les pignons de pin dans une poêle chaude. Pendant la coloration : trancher le pain et le griller au grille-pain. Si le rocamadour passe au four (pas au micro-onde) : griller le pain très légèrement. Réserver les pignons."
      - "Faire revenir les noix dans une poêle, sans matière grasse. Une fois cuites, réserver."
      - "Disposer les tranches de pain sur une plaque. Déposer le chèvre, miel optionnel. Enfourner en mode grill quelques minutes (prêt dès que ça coule). Au micro-onde : quelques secondes."
      - "Pendant ce temps, découper quelques demi-rondelles de tomates."
      - "Dresser : salade au fond des assiettes, tranches de tomates, noix, pignons, un peu de noix, vinaigrette. Tartines de chèvre fondant. Saupoudrer de ciboulette fraîche hachée."
      cavernes:
      - "Préparation. Ail, échalote, éplucher, hacher fin. Bol : moutarde, vinaigre balsamique, huile olive. Saler, poivrer. Mélanger, vinaigrette assez épaisse."
      - "Cuisson. Poêle chaude, pignons, torréfier. Belle coloration. Pain, tranches, grille-pain. Option four (pas micro-onde) : pain, griller très légèrement. Pignons, réserver."
      - "Cuisson. Poêle, noix, revenir, zéro gras. Cuits, réserver."
      - "Cuisson. Pain, plaque four. Chèvre, dessus pain. Option : miel. Mode grill, quelques minutes. Ça coule : prêt. Micro-onde : quelques secondes."
      - "Cuisson. Tomates, demi-rondelles."
      - "Dressage. Salade, fond assiettes. Tomates. Noix, pignons, peu noix, vinaigrette. Tartines chèvre fondant. Ciboulette fraiche hachée, saupoudrer."
    kcal_per_serving: 437
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
    - moutarde
    - sulfites
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: tempeh (gésiers végétaux)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de
      la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez
      jusqu’à obtenir une vinaigrette assez épaisse. N’hésitez pas à ajuster les doses selon
      vos goûts.
    - Cuisson. Dans une poêle chaude, faite torréfier les pignons de pin. Le temps qu’ils aient une
      belle coloration, découpez quelques tranches de pain et faites les griller au grille-pain.
      Attention, si vous compter faire chauffer le rocamadour au four (et non au micro-onde),
      grillez le pain très légèrement. Réservez les pignons.
    - Dressage. Dans une poêle, faites revenir le tempeh. Lorsqu’il est doré, réservez.
    - Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le fromage végétal sur le pain et, si vous aimez, du sirop d’érable. Enfournez le tout en mode grill pendant quelques minutes
      (quand ça commence à couler, c’est prêt) ! Si vous utilisez un micro-onde, quelques
      secondes suffiront.
    - Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates.
    - Dressage. Place au dressage ! Déposez de la salade au fond des assiettes et agrémentez de quelques
      tranches de tomates. Ajoutez le tempeh, les pignons, un peu de noix et la vinaigrette. Finalisez avec les tartines de fromage végétal fondant. Saupoudrez un peu de
      ciboulette fraiche hachée sur la salade et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez jusqu’à obtenir une vinaigrette assez épaisse."
      - "Cuisson. Dans une poêle chaude, torréfiez les pignons de pin. Pendant qu’ils prennent une belle coloration, découpez quelques tranches de pain et faites-les griller au grille-pain. Si vous comptez faire chauffer le rocamadour au four (et non au micro-onde), grillez le pain très légèrement. Réservez les pignons."
      - "Dressage. Dans une poêle, faites revenir le tempeh. Lorsqu’il est doré, réservez."
      - "Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le fromage végétal sur le pain et, si vous aimez, du sirop d’érable. Enfournez en mode grill pendant quelques minutes (quand ça commence à couler, c’est prêt). Au micro-onde, quelques secondes suffisent."
      - "Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates."
      - "Dressage. Déposez de la salade au fond des assiettes et agrémentez de quelques tranches de tomates. Ajoutez le tempeh, les pignons, un peu de noix et la vinaigrette. Finalisez avec les tartines de fromage végétal fondant. Saupoudrez un peu de ciboulette fraîche hachée sur la salade."
      pro:
      - "Éplucher et hacher finement l’ail et l’échalote. Les placer dans un bol avec la moutarde, le vinaigre balsamique et l’huile d’olive. Saler, poivrer. Mélanger jusqu’à vinaigrette assez épaisse."
      - "Torréfier les pignons de pin dans une poêle chaude. Pendant la coloration : trancher le pain et le griller au grille-pain. Si le rocamadour passe au four (pas au micro-onde) : griller le pain très légèrement. Réserver les pignons."
      - "Faire revenir le tempeh dans une poêle. Une fois doré, réserver."
      - "Disposer les tranches de pain sur une plaque. Déposer le fromage végétal, sirop d’érable optionnel. Enfourner en mode grill quelques minutes (prêt dès que ça coule). Au micro-onde : quelques secondes."
      - "Pendant ce temps, découper quelques demi-rondelles de tomates."
      - "Dresser : salade au fond des assiettes, tranches de tomates, tempeh, pignons, un peu de noix, vinaigrette. Tartines de fromage végétal fondant. Saupoudrer de ciboulette fraîche hachée."
      cavernes:
      - "Préparation. Ail, échalote, éplucher, hacher fin. Bol : moutarde, vinaigre balsamique, huile olive. Saler, poivrer. Mélanger, vinaigrette assez épaisse."
      - "Cuisson. Poêle chaude, pignons, torréfier. Belle coloration. Pain, tranches, grille-pain. Option four (pas micro-onde) : pain, griller très légèrement. Pignons, réserver."
      - "Dressage. Poêle, tempeh, revenir. Doré, réserver."
      - "Cuisson. Pain, plaque four. Fromage végétal, dessus pain. Option : sirop érable. Mode grill, quelques minutes. Ça coule : prêt. Micro-onde : quelques secondes."
      - "Cuisson. Tomates, demi-rondelles."
      - "Dressage. Salade, fond assiettes. Tomates. Tempeh, pignons, peu noix, vinaigrette. Tartines fromage végétal fondant. Ciboulette fraiche hachée, saupoudrer."
    kcal_per_serving: 437
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
    - gluten
    - lactose
    - produits_laitiers
    - moutarde
    - sulfites
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: salade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: tomate
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: palet de fromage chèvre (type rocamadour)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: piece
      item: tranche de pain
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: thon au naturel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de
      la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez
      jusqu’à obtenir une vinaigrette assez épaisse. N’hésitez pas à ajuster les doses selon
      vos goûts.
    - Cuisson. Dans une poêle chaude, faite torréfier les pignons de pin. Le temps qu’ils aient une
      belle coloration, découpez quelques tranches de pain et faites les griller au grille-pain.
      Attention, si vous compter faire chauffer le rocamadour au four (et non au micro-onde),
      grillez le pain très légèrement. Réservez les pignons.
    - Cuisson. Dans une poêle, faite revenir les thon au naturel (sans ajout de matière grasse). Lorsqu’ils
      sont cuits, réservez.
    - Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le
      pain et, si vous aimez, du miel. Enfournez le tout en mode grill pendant quelques minutes
      (quand ça commence à couler, c’est prêt) ! Si vous utilisez un micro-onde, quelques
      secondes suffiront.
    - Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates.
    - Dressage. Place au dressage ! Déposez de la salade au fond des assiettes et agrémentez de quelques
      tranches de tomates. Ajoutez quelques thon au naturel, les pignons de pin, un peu de noix et
      la vinaigrette. Finalisez avec les tartines de chèvre fondant. Saupoudrez un peu de
      ciboulette fraiche hachée sur la salade et dégustez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez jusqu’à obtenir une vinaigrette assez épaisse."
      - "Cuisson. Dans une poêle chaude, torréfiez les pignons de pin. Pendant qu’ils prennent une belle coloration, découpez quelques tranches de pain et faites-les griller au grille-pain. Si vous comptez faire chauffer le rocamadour au four (et non au micro-onde), grillez le pain très légèrement. Réservez les pignons."
      - "Cuisson. Dans une poêle, faites revenir le thon au naturel (sans ajout de matière grasse). Lorsqu’ils sont cuits, réservez."
      - "Cuisson. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le pain et, si vous aimez, du miel. Enfournez en mode grill pendant quelques minutes (quand ça commence à couler, c’est prêt). Au micro-onde, quelques secondes suffisent."
      - "Cuisson. Pendant ce temps, découpez quelques demi-rondelles de tomates."
      - "Dressage. Déposez de la salade au fond des assiettes et agrémentez de quelques tranches de tomates. Ajoutez le thon au naturel, les pignons de pin, un peu de noix et la vinaigrette. Finalisez avec les tartines de chèvre fondant. Saupoudrez un peu de ciboulette fraîche hachée sur la salade."
      pro:
      - "Éplucher et hacher finement l’ail et l’échalote. Les placer dans un bol avec la moutarde, le vinaigre balsamique et l’huile d’olive. Saler, poivrer. Mélanger jusqu’à vinaigrette assez épaisse."
      - "Torréfier les pignons de pin dans une poêle chaude. Pendant la coloration : trancher le pain et le griller au grille-pain. Si le rocamadour passe au four (pas au micro-onde) : griller le pain très légèrement. Réserver les pignons."
      - "Faire revenir le thon au naturel dans une poêle, sans matière grasse. Une fois cuit, réserver."
      - "Disposer les tranches de pain sur une plaque. Déposer le chèvre, miel optionnel. Enfourner en mode grill quelques minutes (prêt dès que ça coule). Au micro-onde : quelques secondes."
      - "Pendant ce temps, découper quelques demi-rondelles de tomates."
      - "Dresser : salade au fond des assiettes, tranches de tomates, thon au naturel, pignons, un peu de noix, vinaigrette. Tartines de chèvre fondant. Saupoudrer de ciboulette fraîche hachée."
      cavernes:
      - "Préparation. Ail, échalote, éplucher, hacher fin. Bol : moutarde, vinaigre balsamique, huile olive. Saler, poivrer. Mélanger, vinaigrette assez épaisse."
      - "Cuisson. Poêle chaude, pignons, torréfier. Belle coloration. Pain, tranches, grille-pain. Option four (pas micro-onde) : pain, griller très légèrement. Pignons, réserver."
      - "Cuisson. Poêle, thon naturel, revenir, zéro gras. Cuits, réserver."
      - "Cuisson. Pain, plaque four. Chèvre, dessus pain. Option : miel. Mode grill, quelques minutes. Ça coule : prêt. Micro-onde : quelques secondes."
      - "Cuisson. Tomates, demi-rondelles."
      - "Dressage. Salade, fond assiettes. Tomates. Thon naturel, pignons, peu noix, vinaigrette. Tartines chèvre fondant. Ciboulette fraiche hachée, saupoudrer."
    kcal_per_serving: 437
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Assaisonner au dernier moment si possible."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Salade de chèvre chaud
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/salade-de-chevre-chaud]]

## Ingrédients (4 personnes)

- 1 salade
- 4 tomate
- 8 palet de fromage chèvre (type rocamadour)
- 8 tranche de pain
- 300 g de gésiers
- 1 gousse d'ail
- 1 échalote
- 1 c.à.c de moutarde
-  vinaigre balsamique
-  huile d'olive

## Préparation

1. Épluchez et hachez finement l’ail et l’échalote. Placez le tout dans un bol avec de la moutarde, du vinaigre balsamique et de l’huile d’olive. Salez, poivrez et mélangez jusqu’à obtenir une vinaigrette assez épaisse. N’hésitez pas à ajuster les doses selon vos goûts.
2. Dans une poêle chaude, faite torréfier les pignons de pin. Le temps qu’ils aient une belle coloration, découpez quelques tranches de pain et faites les griller au grille-pain. Attention, si vous compter faire chauffer le rocamadour au four (et non au micro-onde), grillez le pain très légèrement. Réservez les pignons.
3. Dans une poêle, faite revenir les gésiers (sans ajout de matière grasse). Lorsqu’ils sont cuits, réservez.
4. Placez vos tranches de pain sur une plaque allant au four. Déposez le chèvre sur le pain et, si vous aimez, du miel. Enfournez le tout en mode grill pendant quelques minutes (quand ça commence à couler, c’est prêt) ! Si vous utilisez un micro-onde, quelques secondes suffiront.
5. Pendant ce temps, découpez quelques demi-rondelles de tomates.
6. Place au dressage ! Déposez de la salade au fond des assiettes et agrémentez de quelques tranches de tomates. Ajoutez quelques gésiers, les pignons de pin, un peu de noix et la vinaigrette. Finalisez avec les tartines de chèvre fondant.

 
 

 
 Saupoudrez un peu de ciboulette fraiche hachée sur la salade et dégustez. Bon appétit !
