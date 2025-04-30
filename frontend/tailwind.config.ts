import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'media', // or 'class'
	theme: {
		extend: {},
	},
	content: ['./src/app/**/*.{ts,tsx}'],
	plugins: [require('@tailwindcss/typography')],
}
export default config