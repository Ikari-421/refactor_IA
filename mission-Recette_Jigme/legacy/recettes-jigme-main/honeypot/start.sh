#!/bin/sh
# --- Contrôle cible/app (contre-audit v28) : refus de démarrer si l'image n'est pas sur la bonne app ---
FILE_TARGET=$(cat /etc/recettes-target 2>/dev/null)
[ -n "$FILE_TARGET" ] || { echo "ERREUR start.sh : /etc/recettes-target absent ou vide (image construite sans --build-arg TARGET) : démarrage refusé" >&2; exit 1; }
if [ -n "${TARGET+x}" ] && [ "$TARGET" != "$FILE_TARGET" ]; then echo "ERREUR start.sh : TARGET=« $TARGET » diffère de /etc/recettes-target (« $FILE_TARGET ») : démarrage refusé" >&2; exit 1; fi
TARGET=$FILE_TARGET
case "$TARGET" in
  preprod) [ "$FLY_APP_NAME" = "recettes-jigme-preprod" ] || { echo "ERREUR start.sh : image TARGET=preprod sur l'app « $FLY_APP_NAME » (attendu : recettes-jigme-preprod) : démarrage refusé" >&2; exit 1; } ;;
  prod) [ "$FLY_APP_NAME" != "recettes-jigme-preprod" ] || { echo "ERREUR start.sh : image TARGET=prod sur l'app de préprod : démarrage refusé" >&2; exit 1; } ;;
  "") echo "ERREUR start.sh : TARGET vide (image construite sans --build-arg TARGET) : démarrage refusé" >&2; exit 1 ;;
  *) echo "ERREUR start.sh : TARGET inconnu « $TARGET » : démarrage refusé" >&2; exit 1 ;;
esac
# --- fin du contrôle ---
# Leurres actifs UNIQUEMENT sur l'app preprod, et seulement si l'image contient le honeypot (build-arg HONEYPOT=1, fourni par [build.args] du fly.toml préprod ; défaut du Dockerfile = 0).
if [ "$FLY_APP_NAME" = "recettes-jigme-preprod" ] && [ -f /opt/hp/server.mjs ] && command -v node >/dev/null 2>&1; then
  cp /opt/hp/hp.conf /etc/nginx/hp-active.conf
  node /opt/hp/server.mjs &
  # API admin préprod (volume /var/recettes-live) — uniquement si RECETTES_ADMIN_SECRET est présent
  if [ -f /opt/hp/admin-api.mjs ] && [ -n "$RECETTES_ADMIN_SECRET" ]; then
    mkdir -p /var/recettes-live
    # HTML patchable pour les corrections live
    if [ -d /usr/share/nginx/html ]; then chmod -R u+w /usr/share/nginx/html 2>/dev/null || true; fi
    cat /opt/hp/visibility-proxy.conf >> /etc/nginx/hp-active.conf
    node /opt/hp/admin-api.mjs &
  fi
else
  : > /etc/nginx/hp-active.conf
fi
# En-tête anti-indexation : préprod seulement (ROBOTS_NOINDEX=1 dans fly.toml ET app recettes-jigme-preprod) ; jamais en prod
if [ "$ROBOTS_NOINDEX" = "1" ] && [ "$FLY_APP_NAME" = "recettes-jigme-preprod" ]; then
  echo 'add_header X-Robots-Tag "noindex, nofollow" always;' > /etc/nginx/robots.inc
else
  : > /etc/nginx/robots.inc
fi
exec nginx -g 'daemon off;'
