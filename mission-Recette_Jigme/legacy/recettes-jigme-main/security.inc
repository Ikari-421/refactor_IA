add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header X-Frame-Options "SAMEORIGIN" always;
# HSTS : max-age seul. includeSubDomains n'est pas ajouté (sous-domaines non vérifiables depuis le build), pas de preload.
add_header Strict-Transport-Security "max-age=31536000" always;
# geolocation=(self) : bouton « Autour de moi » de l'onglet Restaurants (11/11)
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(self), payment=(), usb=()" always;
# CSP générée par build.mjs (hash des scripts/styles inline, form-action selon l'environnement)
include /etc/nginx/csp.inc;
