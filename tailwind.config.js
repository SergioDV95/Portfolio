/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ["./index.html" ,"./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				open: ["Open Sans", "sans-serif"],
				dela: ["Dela Gothic One", "sans-serif"],  
			},
			backgroundImage: {
				navbarDesktop: "linear-gradient(to bottom, #FFFFFF26, #FFFFFF80)",
				navbarMobile: "linear-gradient(to right, #42506B 40%, #42506BE6)",
				navbutton: "linear-gradient(to right, #41BD7526, #41BD7580)",
				button: "linear-gradient(135deg, #FFFFFF33, #FFFFFF66)",
				picture: "linear-gradient(to bottom, #FFFFFF66, #FFFFFF33 60%)",
				inputs: "linear-gradient(to bottom, #FFFFFF33, #FFFFFF66)",
				skills: "linear-gradient(to right, #FFFFFF33, #FFFFFF66)",
			},
			boxShadow: {
				button: "6px 6px 5.7px #00000040",
				lightMode: "inset 6px 6px 5.7px #00000040",
			},
			animation: {
				openNavbar: "navbar 1s forwards",
				closeNavbar: "navbar 1s reverse forwards",
			},
			keyframes: {
				navbar: {
					from: {
						"width": "63px",
						"height": "63px",
						"border-radius": "100%",
					},
					to: {
						"width": "50%",
						"height": "50vh",
						"border-radius": "0px 25px 25px 0px",
					},
				}
			}
		},
	},
	plugins: [],
}