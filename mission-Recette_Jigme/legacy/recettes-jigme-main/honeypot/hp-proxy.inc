proxy_pass http://127.0.0.1:9000;
proxy_set_header X-HP-Path $uri;
proxy_set_header Host $host;
access_log off;
