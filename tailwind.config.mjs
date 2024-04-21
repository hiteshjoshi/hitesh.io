/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	typography: (theme) => ({
		DEFAULT: {
			css: {
				color: theme('colors.gray.700'),
				h2: {
					color: theme('colors.gray.800'),
				},
				h3: {
					color: theme('colors.gray.800'),
				},
				strong: {
					color: theme('colors.gray.800'),
				},
				a: {
					color: theme('colors.green.500'),
					'&:hover': {
						color: theme('colors.green.600')
					},
				},
			},
		},
	}),
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	plugins: [require('@tailwindcss/typography')],
}
