/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			fontFamily: {
				// Open Sans with system fallbacks
				sans: ['Open Sans', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],

				// Tektur with blocky, bold system fallbacks
				heading: ['Tektur', 'Arial Black', 'Roboto Condensed', 'Segoe UI', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
