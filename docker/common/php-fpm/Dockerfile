# Stage 1: Build assets with Node.js
FROM node:18-alpine AS node-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: PHP-FPM with Composer
FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip \
 && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy composer files first for better cache
COPY composer.* ./
RUN composer install

# Copy the full Laravel app
COPY . .

# Copy built frontend assets
COPY --from=node-build /app/public/build /var/www/public/build

EXPOSE 9000
CMD ["php-fpm"]
