/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	singleQuote: true,
	semi: true,
	printWidth: 80,
	// prettier-plugin-tailwindcss muss zuletzt geladen werden, sonst greift die
	// Klassensortierung nicht.
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	// Tailwind v4 liest die Konfiguration aus dem CSS, nicht aus tailwind.config.js.
	tailwindStylesheet: './src/styles/global.css',
	overrides: [
		{
			files: '*.astro',
			options: { parser: 'astro' },
		},
		{
			files: ['*.json', '*.yml', '*.yaml', '*.md'],
			options: { useTabs: false, tabWidth: 2 },
		},
	],
};
