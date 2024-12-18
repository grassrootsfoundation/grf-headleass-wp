import { resolve } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    //@ts-expect-error
    sveltekit(),
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    }) as never,
  ],
  resolve: {
    alias: {
      $src: resolve(__dirname, 'src'),
      $components: resolve(__dirname, 'src/lib/components'),
      $utils: resolve(__dirname, 'src/lib/utils'),
      $types: resolve(__dirname, 'src/lib/types'),
    },
  },
  server: {
    headers: {
      'Content-Security-Policy':
        "default-src 'self'; script-src 'self'; style-src 'self';",
    },
    fs: {
      allow: ['src'],
    },
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE_URL,
        changeOrigin: true,
      },
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
