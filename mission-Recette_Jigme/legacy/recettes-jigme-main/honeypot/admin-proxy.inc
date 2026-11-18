client_max_body_size 12m;
proxy_pass http://127.0.0.1:9001;
proxy_set_header Host $host;
proxy_set_header Authorization $http_authorization;
proxy_set_header Content-Type $http_content_type;
proxy_read_timeout 120s;
proxy_connect_timeout 5s;
