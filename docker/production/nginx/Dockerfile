# -------------------------
# Nginx Web Server (Only)
# -------------------------
FROM nginx:alpine

# Copy nginx config
COPY ./docker/production/nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy static public assets (served by Nginx)
# You’ll mount or copy from the php-fpm service's shared volume
# So this step might be optional if using volumes
WORKDIR /var/www/public

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
