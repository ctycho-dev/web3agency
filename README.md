=== Node23 

```
docker build . -t
```


* Issue cert
```
sudo certbot --nginx -d node23.ru -d www.node23.ru
sudo nginx -t
sudo systemctl reload nginx

```


* Nginx config
```
# Redirect HTTP to HTTPS and enforce www
server {
    listen 80;
    server_name node23.ru www.node23.ru;

    # Redirect all requests to https://www.node23.ru
    return 301 https://www.node23.ru$request_uri;
}

server {
    listen 443 ssl;
    server_name node23.ru;

    # Redirect non-www HTTPS to www HTTPS
    return 301 https://www.node23.ru$request_uri;

    ssl_certificate /etc/letsencrypt/live/node23.ru/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/node23.ru/privkey.pem; # managed by Certbot
}

server {
    listen 443 ssl;
    server_name www.node23.ru;

    ssl_certificate /etc/letsencrypt/live/node23.ru/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/node23.ru/privkey.pem; # managed by Certbot

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_prefer_server_ciphers off;

    location / {
        proxy_pass http://0.0.0.0:5125;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

```