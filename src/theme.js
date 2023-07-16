import { createTheme } from "@material-ui/core/styles";

const jakarta = {
	fontFamily: "Plus Jakarta Sans",
};

const theme = createTheme({
	palette: {
		primary: {
			main: "#2196F3",
			dark: "#1B75BD",
		},
	},
	typography: {
		fontFamily: ["Plus Jakarta Sans", "'sans-serif'"].join(","),
		button: {
			fontFamily: ["Plus Jakarta Sans", "'sans-serif'"].join(","),
		},
		h2: {
			fontFamily: ["Plus Jakarta Sans", "'sans-serif'"].join(","),
		},
		h5: {
			fontFamily: ["Plus Jakarta Sans", "'sans-serif'"].join(","),
		},
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [jakarta],
			},
		},
	},
});

export default theme;
