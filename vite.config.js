import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    // base: '/',
    server: {
        host: true, // Listen on 0.0.0.0 for Docker access
        port: 5173,
        hmr: {
            host: 'localhost', // Use host.docker.internal if needed
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
});
