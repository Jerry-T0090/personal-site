import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import * as path from 'path';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid(), solidPlugin()],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  base: '/personal-site/'
});
