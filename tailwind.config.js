/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#15DCC4',
				white: '#FFFFFF',
				headerText: '#10AC98'
			},
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
