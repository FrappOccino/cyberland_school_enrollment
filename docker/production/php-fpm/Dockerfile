# Stage 1: Build assets
FROM node:18-alpine as node-builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2: PHP FPM with code
FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip libzip-dev \
 && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy source and built assets
COPY . .
COPY --from=node-builder /app/public /var/www/public

# Install dependencies optimized for production
RUN composer install --no-dev --optimize-autoloader

EXPOSE 9000
CMD ["php-fpm"]
