// resources/js/config.js
export const APP_URL = import.meta.env.VITE_APP_URL;

export const routeUrl = (path) => `${APP_URL}/${path.replace(/^\/+/, '')}`;
