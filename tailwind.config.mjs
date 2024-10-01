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
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontFamily: 'Tektur, Arial black,Roboto Condensed, Segoe UI, sans-serif',
						},
						h2: {
							fontFamily: 'Tektur, Arial black,Roboto Condensed, Segoe UI, sans-serif',
						},
						h3: {
							fontFamily: 'Tektur, Arial black,Roboto Condensed, Segoe UI, sans-serif',
						},
						h4: {
							fontFamily: 'Tektur, Arial black,Roboto Condensed, Segoe UI, sans-serif',
						},
						h5: {
							fontFamily: 'Tektur, Arial black,Roboto Condensed, Segoe UI, sans-serif',
						},
						h6: {
							fontFamily: 'Tektur, Arial black,Roboto Condensed, Segoe UI, sans-serif',
						},
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
