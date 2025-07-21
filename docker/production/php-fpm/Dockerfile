# -------------------------
# Stage 1: PHP Composer + Vite Build
# -------------------------
FROM php:8.1-fpm AS builder

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl unzip git libpq-dev libonig-dev libssl-dev libxml2-dev \
    libcurl4-openssl-dev libicu-dev libzip-dev \
    libjpeg-dev libpng-dev libfreetype6-dev libwebp-dev \
 && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
 && apt-get install -y nodejs \
 && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
 && docker-php-ext-install -j$(nproc) \
    pdo_mysql pdo_pgsql pgsql opcache intl zip bcmath soap gd \
 && pecl install redis \
 && docker-php-ext-enable redis \
 && apt-get autoremove -y && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /var/www

# Copy full Laravel + frontend app
COPY . .

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php \
 && mv composer.phar /usr/local/bin/composer

# Set correct ownership
RUN chown -R www-data:www-data /var/www
USER www-data

# Install PHP dependencies
RUN composer install

# Install JS deps and build assets
RUN npm install && npm run build



# -------------------------
# Stage 2: Final Production Image
# -------------------------
FROM php:8.1-fpm AS production

# Install runtime dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev libicu-dev libzip-dev libfcgi-bin procps \
    libonig-dev libssl-dev libxml2-dev \
    libcurl4-openssl-dev libjpeg-dev libpng-dev libfreetype6-dev libwebp-dev \
 && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
 && docker-php-ext-install -j$(nproc) \
    pdo_mysql pdo_pgsql pgsql opcache intl zip bcmath soap gd \
 && pecl install redis \
 && docker-php-ext-enable redis \
 && apt-get autoremove -y && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Use production php.ini
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Enable opcache
RUN echo "opcache.enable=1\n\
opcache.enable_cli=1\n\
opcache.memory_consumption=128\n\
opcache.max_accelerated_files=10000\n\
opcache.validate_timestamps=0\n\
opcache.revalidate_freq=0" > "$PHP_INI_DIR/conf.d/opcache-recommended.ini"

# Copy app from builder stage (includes built assets)
COPY --from=builder --chown=www-data:www-data /var/www /var/www

# Copy entrypoint
COPY docker/production/php-fpm/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /var/www

# Create writable dirs
RUN mkdir -p storage/framework/{sessions,cache,views} bootstrap/cache \
 && chown -R www-data:www-data storage bootstrap

EXPOSE 9000

ENTRYPOINT ["entrypoint.sh"]
CMD ["php-fpm"]