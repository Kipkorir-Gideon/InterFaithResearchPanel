import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          const ext = (assetInfo.name.split('.').pop() || '').toLowerCase();
          if (['png', 'jpg', 'jpeg', 'svg', 'gif'].includes(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/files/[name]-[hash][extname]`;
        },
      },
    },
  },
  publicDir: 'public',
  assetsInclude: ['**/*.pdf', '**/*.docx'],
}));
