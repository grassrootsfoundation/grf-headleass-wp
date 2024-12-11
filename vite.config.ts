import { resolve } from 'path';

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	resolve: {
		alias: {
			'@grassrootsfoundation/trusty-ui': resolve(
				__dirname,
				'node_modules/@grassrootsfoundation/trusty-ui/dist/index.js'
			)
		},
		extensions: ['.svelte', '.js', '.ts']
	},
	ssr: {
		noExternal: ['@grassrootsfoundation/trusty-ui']
	},
	optimizeDeps: {
		include: ['@grassrootsfoundation/trusty-ui']
	},
	server: {
		headers: {
			'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self';"
		},
		fs: {
			allow: ['src']
		},
		proxy: {
			'/api': {
				target: process.env.VITE_API_BASE_URL,
				changeOrigin: true
			}
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
