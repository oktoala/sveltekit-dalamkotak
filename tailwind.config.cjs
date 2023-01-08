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
			}
		},
		extend: {
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
				'purple-ig': '#9300F8'
			}
		}
	},
	plugins: []
};
