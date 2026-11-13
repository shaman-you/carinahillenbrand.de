// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.carinahillenbrand.de',
	integrations: [sitemap()],
	server: {
		host: '127.0.0.1',
		// Jede Website in /sandbox/repos hat einen eigenen Port (4331–4337),
		// damit alle gleichzeitig laufen können.
		port: 4337,
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			strictPort: true,
		},
	},
});
