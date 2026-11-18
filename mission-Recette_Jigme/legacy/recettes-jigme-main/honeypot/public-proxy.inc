proxy_pass http://127.0.0.1:9001;
proxy_set_header Host $host;
proxy_read_timeout 30s;
proxy_connect_timeout 5s;
include /etc/nginx/robots.inc;
include /etc/nginx/security.inc;
