import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		headers: {
			'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self';"
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
