FROM php:8.2-fpm

# Install PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev libonig-dev libxml2-dev zip unzip libzip-dev \
 && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy Laravel source code
COPY . .

# Install PHP dependencies
RUN composer install

EXPOSE 9000
CMD ["php-fpm"]
