import { resolve } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vitest/config';

import type { PluginOption } from 'vite';

export default defineConfig({
  plugins: [
    // TODO: Fix these TS Error
    //@ts-expect-error
    sveltekit(),
    //@ts-expect-error
    Icons({
      compiler: 'svelte',
      autoInstall: true,
    }) as unknown as PluginOption[],
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
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'], // Ignore unnecessary folders
    },
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
