module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/templates/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			dark: "#0B0D17",
			light: "#D0D6F9",
			gray: "#979797",
			white: "#FFFFFF",
		},
		fontSize: {
			xs: "14px",
			sm: "16px",
			md: "28px",
			lg: "32px",
			xl: "56px",
			"2xl": "100px",
			"3xl": "150px",
		},
		fontFamily: {
			bellefair: "'Bellefair', serif",
			"barlow-condensed": "'Barlow Condensed', sans-serif",
		},
		letterSpacing: {
			normal: "0",
			wide: "2.35px",
			wider: "2.7px",
			widest: "4.75px",
		},
		extend: {},
	},
	plugins: [],
};
