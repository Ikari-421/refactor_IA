# Image épinglée par digest (nginx stable 1.30, alpine), sans droits root à l'exécution (utilisateur nginx, port 8080).
# Mise à jour : relever le digest de nginxinc/nginx-unprivileged:1.30-alpine puis le remplacer ci-dessous.
FROM nginxinc/nginx-unprivileged:1.30-alpine@sha256:f5116ed4606f3eb015dd4a8e28cb9b351476dc0ad4bc6e9f93b19cec130cdf03
# TARGET (obligatoire) : preprod | prod. HONEYPOT=0 par défaut (aucun Node, aucun leurre) ; préprod : HONEYPOT=1 via [build.args] de fly.toml.
# Prod : fly.prod.toml (TARGET=prod, sans HONEYPOT). TARGET=prod + HONEYPOT=1 est refusé.
ARG TARGET
ARG HONEYPOT=0
ARG GIT_COMMIT=""
# TARGET gravé dans l'image : start.sh refuse de démarrer sur la mauvaise app
ENV TARGET=$TARGET
ENV GIT_COMMIT=$GIT_COMMIT
RUN case "$TARGET" in prod|preprod) ;; *) echo "ERREUR : argument de build TARGET manquant ou invalide (« $TARGET ») : preprod ou prod" >&2; exit 1;; esac \
 && if [ "$TARGET" = "prod" ] && [ "$HONEYPOT" = "1" ]; then echo "ERREUR : TARGET=prod avec HONEYPOT=1 refusé (aucun leurre en prod)" >&2; exit 1; fi
USER root
# Cible gravée dans un fichier (contre-audit v29) : start.sh la relit et la compare à $TARGET et à FLY_APP_NAME
RUN printf '%s\n' "$TARGET" > /etc/recettes-target && chmod 0444 /etc/recettes-target
# v232 : chromium Alpine pour le pré-rendu SSR de la régénération ciblée (mêmes pages que build.mjs)
RUN if [ "$HONEYPOT" = "1" ]; then apk add --no-cache nodejs npm chromium ttf-freefont \
 && node -e "if (Number(process.versions.node.split('.')[0]) < 22) { console.error('ERREUR : Node '+process.versions.node+' < 22 (node:sqlite requis)'); process.exit(1); }"; fi
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY security.inc /etc/nginx/security.inc
COPY csp.inc /etc/nginx/csp.inc
COPY honeypot/ /opt/hp/
COPY domains/ /opt/domains/
COPY scripts/source-back.mjs /opt/scripts/source-back.mjs
COPY honeypot/hp-proxy.inc /etc/nginx/hp-proxy.inc
COPY honeypot/admin-proxy.inc /etc/nginx/admin-proxy.inc
COPY --chmod=0755 honeypot/start.sh /usr/local/bin/start.sh
RUN if [ "$HONEYPOT" = "1" ]; then test -f /opt/scripts/source-back.mjs || { echo "ERREUR : source-back.mjs absent de l'image" >&2; exit 1; }; fi
RUN if [ "$HONEYPOT" = "1" ]; then cd /opt/hp && npm init -y >/dev/null && npm install --omit=dev sharp@0.35.5 playwright-core@1.64.1 && rm -rf /root/.npm && chown -R nginx:nginx /opt/hp; fi
RUN if [ "$HONEYPOT" != "1" ]; then rm -rf /opt/hp /opt/domains /opt/scripts /etc/nginx/hp-proxy.inc /etc/nginx/admin-proxy.inc; fi \
 && : > /etc/nginx/hp-active.conf && : > /etc/nginx/robots.inc \
 && chown nginx:nginx /etc/nginx/hp-active.conf /etc/nginx/robots.inc
# D29 : dist/ contient cuisine/, restaurants/ et robots.txt (chemins publics)
COPY dist/ /usr/share/nginx/html/
# Contenu éditable (préprod admin) : MD seed ; le volume /var/recettes-live prend le relais au runtime
COPY data/ /opt/recettes-content/data/
COPY materiel/ /opt/recettes-content/materiel/
COPY lexique/ /opt/recettes-content/lexique/
COPY restaurants/ /opt/recettes-content/restaurants/
COPY src/categories-surcharge.json /opt/recettes-content/categories-surcharge.json
# D41 : génération ciblée (mêmes fonctions que build.mjs)
COPY generate-pages.mjs generate-targeted.mjs recipes-pipeline.mjs howto-name.mjs ssr.mjs seo-checks.mjs image-variants.mjs nginx.conf overrides.json build-manifest.json /opt/
COPY photos-jigme.json /opt/
COPY src/logic.js src/religion.js src/lectures.json src/titres.json src/cuisines.json src/verbes.json src/categories-surcharge.json src/dates-site.tsv src/dates-nas-fichier.tsv src/critical.css src/home-ui.css src/app.js /opt/src/
COPY src/fonts/fonts.css /opt/src/fonts/fonts.css
RUN if [ "$HONEYPOT" != "1" ]; then rm -rf /opt/recettes-content; fi
RUN if [ "$HONEYPOT" = "1" ]; then test -x /usr/bin/chromium-browser -o -x /usr/bin/chromium || { echo "ERREUR : chromium absent (SSR ciblé)" >&2; exit 1; }; grep -q '"slugs"' /opt/build-manifest.json || { echo "ERREUR : build-manifest.json invalide" >&2; exit 1; }; fi
# Garde-fou (03/11) : le build échoue si le site est absent (dist vide → « Welcome to nginx! »)
RUN grep -q 'Jigmé' /usr/share/nginx/html/cuisine/index.html && test -f /usr/share/nginx/html/cuisine/r/ile-flottante/index.html || { echo "ERREUR : site absent de l'image" >&2; exit 1; }
# Le déploiement échoue si les pages de test (dist/test) se retrouvent dans l'image
RUN test ! -e /usr/share/nginx/html/test && test ! -e /usr/share/nginx/html/cuisine/test || { echo "ERREUR : dist/test présent dans l'image (GEN_TESTS=1 ?) : déploiement refusé" >&2; exit 1; }
# Garde-fou (audit B6, contre-audit v27) : en prod, quel que soit HONEYPOT, rien de la préprod (site entier + csp.inc), et dist/ construit en TARGET=prod
RUN if [ "$TARGET" = "prod" ]; then \
      if grep -qiE 'pr(e|é)prod|fly\.dev' /etc/nginx/csp.inc; then echo "ERREUR : csp.inc contient « preprod » ou « fly.dev » alors que TARGET=prod" >&2; exit 1; fi; \
      grep -q '^# Généré par build.mjs (prod,' /etc/nginx/csp.inc || { echo "ERREUR : csp.inc n'a pas été généré par un build TARGET=prod" >&2; exit 1; }; \
      f=$(grep -rliE 'pr(e|é)prod|fly\.dev' /usr/share/nginx/html | head -3); \
      if [ -n "$f" ]; then echo "ERREUR : fichier du site avec « preprod » ou « fly.dev » alors que TARGET=prod : $f" >&2; exit 1; fi; \
    else \
      grep -q '^# Généré par build.mjs (preprod,' /etc/nginx/csp.inc || { echo "ERREUR : TARGET=preprod mais csp.inc vient d'un build de prod" >&2; exit 1; }; \
    fi
RUN if [ "$HONEYPOT" = "1" ]; then chown -R nginx:nginx /usr/share/nginx/html /opt/recettes-content /opt/hp /opt/domains /opt/scripts; mkdir -p /var/recettes-live && chown nginx:nginx /var/recettes-live; fi
USER nginx
EXPOSE 8080
CMD ["/usr/local/bin/start.sh"]
