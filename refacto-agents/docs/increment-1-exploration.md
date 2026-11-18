# Incrément 1 : exploration et oracle

> Cadrage de l'incrément 1. Il précise le cadrage (§4, §8.2, §9) pour l'exploration. En cas de contradiction, le cadrage fait foi et doit être mis à jour.
> Statut : proposition, à valider. Phase 1 du [Pipeline de refacto](../../Pipeline_de_Refacto.txt) : sauvegarde du DOM après JavaScript, enregistrement des appels API.

## 1. Objectif

Produire, à partir d'une app web legacy, un **snapshot** : toutes les pages accessibles en lecture, leur DOM après exécution du JavaScript, une capture et les appels réseau. Ce snapshot est l'entrée figée de l'analyse fonctionnelle (incrément 3). Il est reproductible : même app, même base, même snapshot.

L'incrément comprend deux parties, dans cet ordre :

- **1a. Exploration** : le crawl et le snapshot décrits ici.
- **1b. Oracle** : choisir un parcours dans le snapshot, le décrire en `.feature` et le rejouer en test E2E, vert deux fois de suite contre le legacy.

## 2. Périmètre

- **Inclus** : crawl en lecture seule par rôle, DOM rendu, captures, appels réseau masqués, index, reprise après interruption, garde-fous, support des sites statiques et des SPA.
- **Exclus** : soumettre des formulaires ou cliquer sur des boutons (étape C, plus tard), analyse fonctionnelle et statique (incrément 3), toute écriture dans le legacy ou sa base.

## 3. Un seul moteur pour les deux types de site

Le moteur est Playwright en mode headless, pour les sites statiques comme pour les SPA. Sur un site statique, le DOM rendu est le HTML source. Sur une SPA, il est indispensable. Un seul chemin de code, donc un seul comportement à tester.

**Découverte des pages :**

- les liens `<a href>` présents dans le DOM rendu ;
- le `sitemap.xml` s'il existe, comme source supplémentaire ;
- une liste de routes en configuration, pour les SPA qui naviguent sans `href`.

Un élément cliquable sans `href` (bouton, `onclick`) n'est pas suivi. Il est listé dans `liens-non-suivis.json`. C'est ce qui rend visible ce que le crawl ne couvre pas.

**Stabilité :** attendre la fin du réseau, puis un délai sans mutation du DOM, avec une borne de 10 secondes. Si le texte de la page reste quasi vide, la page est journalisée comme « coquille vide ».

## 4. Garde-fous

Ils sont vérifiés par des tests, pas par une consigne.

- **Lecture seule au réseau** : toute requête autre que GET est bloquée par interception, sauf une liste blanche limitée à la connexion.
- **Aucun clic sur un bouton, aucune soumission de formulaire.** Seuls les liens sont suivis.
- **Même origine uniquement.** Exclusions par défaut, configurables : déconnexion, liens contenant `supprimer`, `delete`, `export`, `download`.
- **Copie de la base obligatoire.** Le crawl refuse de démarrer sans le fichier `copie-confirmee` dans la mission.
- **Bornes** : profondeur, nombre de pages, délai entre requêtes, durée totale. Chaque borne atteinte est journalisée.
- **Paramètres de requête** : au plus N valeurs distinctes par paramètre et par chemin, pour éviter l'explosion combinatoire des filtres. Le dépassement est journalisé.

## 5. Sessions par rôle

- Chaque rôle a une connexion scriptée. Les identifiants viennent de variables d'environnement, jamais du dépôt.
- La session est sauvegardée dans un dossier exclu du versionnement.
- Un crawl par rôle. L'index note le rôle de chaque page : une page accessible à un rôle et refusée à un autre est une règle d'accès observée.
- Pour Jigme, on commence par le rôle public. L'admin (`admin.jigme.fr`, derrière Cloudflare Access) est hors incrément 1.

## 6. Sorties

```
docs/01-moa/snapshot/
├── index.json              une entrée par page : id, url, rôle, statut HTTP, titre, profondeur, page d'origine, fichiers
├── liens-non-suivis.json   boutons et éléments sans href, avec la page où ils se trouvent
├── journal.jsonl           erreurs, timeouts, requêtes bloquées, bornes atteintes, coquilles vides
└── <rôle>/
    ├── pages/<id>.html     DOM rendu après JavaScript
    ├── captures/<id>.png
    └── reseau.har          appels réseau, masqués
```

- `<id>` : un slug lisible suivi de 8 caractères issus du hash de l'URL normalisée. Il est stable d'un run à l'autre.
- `reseau.har` est masqué : les en-têtes `Authorization`, `Cookie` et `Set-Cookie` sont supprimés, et les valeurs des paramètres nommés `token`, `jeton`, `key` ou `secret` sont remplacées.
- Le DOM n'est **pas** masqué. Si l'app affiche des données personnelles, il faut le décider avant de versionner le snapshot (question 4).

## 7. Reproductibilité et reprise

- Même entrée et même base donnent le même `index.json`, aux horodatages près.
- Chaque run enregistre l'empreinte du legacy, la version du script, la configuration et la date.
- Interrompu, le crawl reprend là où il s'est arrêté, sans recapturer les pages déjà faites.

## 8. Emplacement et technologie

- **Langage : Node.js.** Playwright y est natif, et Jigme est en Node. À confirmer.
- **Emplacement pendant la construction.** Le cadrage (§8.1) place l'outillage dans `.claude/` de la mission. Je propose le script dans `refacto-agents/plugins/cycle-v/skills/retro-ingenierie/scripts/crawl/`, testé avec des fixtures dans `refacto-agents/tests/`. La mission l'appelle par son chemin. Il est ainsi testable sans mission, et on le packagera à l'incrément 8 sans le réécrire. C'est une exception au cadrage §8.1, à valider.

## 9. Critères de fin : tests d'acceptation

Les fixtures sont des mini-sites servis localement. Les tests sont écrits avant le code et doivent d'abord échouer.

| # | Test | Attendu |
|---|---|---|
| T1 | Site statique : 3 pages, un lien cassé, un sitemap | Les 3 pages sont trouvées ; le lien cassé est journalisé |
| T2 | SPA : routage côté client, contenu chargé par `fetch` | Le DOM capturé contient le contenu, pas la coquille vide ; les liens `href` sont suivis |
| T3 | SPA avec un bouton `onclick` et un lien « supprimer » | Le bouton est dans `liens-non-suivis.json` ; le lien « supprimer » est exclu |
| T4 | Page avec un formulaire POST et un lien vers une action destructrice | Le serveur de test ne reçoit aucune requête non GET |
| T5 | Deux runs sur la même fixture | `index.json` identiques, aux horodatages près |
| T6 | HAR produit sur une fixture qui utilise un jeton | Aucun `Authorization`, `Cookie` ni valeur de jeton dans le HAR |
| T7 | Arrêt en cours de crawl, puis relance | Pas de doublon ; snapshot complet ; pages déjà faites non recapturées |
| T8 | Lancement sans `copie-confirmee` | Refus avec un message explicite |
| T9 | Jigme, sur copie locale | Pages trouvées comparées au sitemap ; aucune erreur bloquante ; empreinte du legacy identique avant et après |

- **Fin de 1a :** T1 à T9 verts.
- **Fin de 1b :** un parcours choisi dans le snapshot, un `.feature`, et un test E2E vert deux fois de suite contre le legacy.

## 10. Hors périmètre de cet incrément

Interactions (étape C), analyse fonctionnelle (étape D), analyse statique, admin Jigme, comparaison avec la nouvelle app.

## 11. Ordre de travail, une fois validé

1. Fixtures et tests T1 à T8, écrits et rouges.
2. Crawl statique : T1, T5.
3. Garde-fous : T4, T8.
4. Moteur SPA : T2, T3.
5. HAR masqué et reprise : T6, T7.
6. Jigme : T9.
7. Partie 1b, l'oracle.

## 12. Questions à trancher

1. **Node.js** pour le crawl : confirmé ?
2. **Emplacement du script** : dans `refacto-agents/` (proposition, exception au cadrage §8.1) ou dans `.claude/` de la mission ?
3. **Partie 1b dans l'incrément 1** (proposition), ou décalée à l'incrément 2 ? Décaler renumérote tous les incréments suivants.
4. **Admin Jigme** : confirmer qu'il est hors incrément 1.
5. **Snapshot** : versionné dans le dépôt de mission, ou hors git ? Ça dépend des données personnelles affichées.
