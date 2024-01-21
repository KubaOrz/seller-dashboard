/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#15DCC4',
					dark: '#8b52c4',
				},
				secondary: {
					light: '#FFFFFF',
					dark: '#474747',
					darker: '#323233'
				},
				white: '#FFFFFF',
				headerText: {
					light: '#10AC98',
					dark: '#C0A6FF'
				},
				text: {
					light: '#dbd7de',
					dark: '#000000'
				}
			},
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif']
			}
		}
	},
	darkMode: "class",
	plugins: []
};
