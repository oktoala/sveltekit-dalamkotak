const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			screens: {
				// xl: '1280px',
				lg: '1024px',
				md: '768px',
				sm: '640px'
			},
			padding: {
				DEFAULT: '1rem',
				md: '3rem',
				sm: '3rem'
			}
		},
		extend: {
			fontFamily: {
				primary: ['"poppins"']
			},
			translate: ['dark'],
			gradientColorStops: (theme) => ({
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				third: 'var(--color-third)',
				fourth: 'var(--color-fourth)',
				fifth: 'var(--color-fifth)',
				sixth: 'var(--color-six)'
			}),
			colors: {
				'yellow-ig': '#FFE00F',
				'orange-ig': '#FF6900',
				'red-ig': '#FF0062',
				'pink-ig': '#F400C2',
				'purple-ig': '#9300F8',
				bodyLight: colors.gray[50],
				bodyDark: colors.gray[800]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
