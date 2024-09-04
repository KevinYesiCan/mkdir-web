/** @type {import('tailwindcss').Config} */
module.exports = {
	darkmode:'media',
	content: [
		'./templates/**/*.html'
	],
	theme: {
		extend: {
			fontFamily:{
				Kanit: ["Kanit"]
			}
		},
	},
	plugins: [require('daisyui'),],
}

