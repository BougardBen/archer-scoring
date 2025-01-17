import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Enregistre et met à jour automatiquement le service worker
      includeAssets: ['favicon.svg', 'BASfavicon.ico', 'robots.txt', 'BAS-apple-icon.png'], // Ressources additionnelles
      manifest: {
        name: 'Ben Archer Scoring',
        short_name: 'Archer Scores',
        description: 'Application de scoring pour le tir à l\'arc.',
        theme_color: '#1E90FF',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/BAS_logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/BAS_logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/BAS_logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
