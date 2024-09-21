/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				"fade-in-up": {
					"0%": {
						"opacity": "0",
						"transform": "translateY(20px)"
					},
					"100%": {
						"opacity": "1",
						"transform": "translateY(0)"
					}
				},
				"slide-in-left": {
					"0%": {
						"transform": "translateX(-20px)"
					},
					"100%": {
						"transform": "translateX(0)"
					}
				},
				"fade-in": {
					"0%": {
						"opacity": "0"
					},
					"100%": {
						"opacity": "1"
					}
				},
				"slide-out-right": {
					"0%": {
						"transform": "translateX(0)"
					},
					"100%": {
						"transform": "translateX(20px)"
					}
				},
				"slide-in-right": {
					"0%": {
						"transform": "translateX(20px)"
					},
					"100%": {
						"transform": "translateX(0)"
					}
				},
				"fade-in-left": {
					"0%": {
						"opacity": "0",
						"transform": "translateX(20px)"
					},
					"100%": {
						"opacity": "1",
						"transform": "translateX(0)"
					}
				},
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				"fade-in-up": "fade-in-up 0.6s ease-out",
				"slide-in-left": "slide-in-left 0.6s ease-out",
				"fade-in": "fade-in 0.6s ease-in",
				"slide-out-right": "slide-out-right 0.6s ease-out",
				"slide-in-right": "slide-in-right 0.6s ease-out",
				"fade-in-left": "fade-in-left 0.6s ease-in-out",
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			}
		}
	},
	plugins: [],
	darkMode: 'class',
}
