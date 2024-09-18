/** @type {import('tailwindcss').Config} */
module.exports = {
	darkmode:'media',
	content: [
		'./templates/**/*.html'
	],
	theme: {
		extend: {
			fontFamily:{
				Kanit: ["Kanit"],
				Prompt: ["Prompt"],
				sarabun: ["Sarabun"],
				mitr:["Mitr"],
			}
		},
	},
	plugins: [require('daisyui'),],
}

