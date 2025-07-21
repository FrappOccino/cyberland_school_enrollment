#!/bin/sh
set -e

# # -----------------------------------------------------------
# # Wait for MySQL to be ready
# # -----------------------------------------------------------
# echo "Waiting for the database to be ready..."
# until php artisan migrate:status > /dev/null 2>&1; do
#   sleep 2
# done
# echo "Database is ready!"

# -----------------------------------------------------------
# Initialize the storage directory if empty (fresh volume)
# -----------------------------------------------------------
if [ ! "$(ls -A /var/www/storage)" ]; then
  echo "📁 Initializing storage directory..."
  cp -R /var/www/storage-init/. /var/www/storage
  chown -R www-data:www-data /var/www/storage
fi

# Ensure critical storage subdirectories always exist
mkdir -p /var/www/storage/framework/sessions
mkdir -p /var/www/storage/framework/views
mkdir -p /var/www/storage/framework/cache
mkdir -p /var/www/storage/logs
mkdir -p /var/www/storage/app/public

# Ensure correct ownership (in case volume was pre-mounted)
chown -R www-data:www-data /var/www/storage

# -----------------------------------------------------------
# Laravel Setup: Migrations and Caching
# -----------------------------------------------------------
echo "Running Laravel migrations..."
php artisan migrate --force

echo "Caching configuration and routes..."
php artisan config:clear
php artisan config:cache
php artisan route:clear
php artisan route:cache

# -----------------------------------------------------------
# Run the main container command (php-fpm)
# -----------------------------------------------------------
exec "$@"
