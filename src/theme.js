import { createTheme } from "@material-ui/core/styles";
import Poppins from "./Fonts/Poppins-Regular.ttf";

const poppins = {
	fontFamily: "Poppins",
};

const theme = createTheme({
	palette: {
		primary: {
			main: "#2196F3",
			dark: "#1B75BD",
		},
	},
	typography: {
		fontFamily: ["Poppins", "'sans-serif'"].join(","),
		button: {
			fontFamily: ["Poppins", "'sans-serif'"].join(","),
		},
		h2: {
			fontFamily: ["Poppins", "'sans-serif'"].join(","),
		},
		h5: {
			fontFamily: ["Poppins", "'sans-serif'"].join(","),
		},
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [poppins],
			},
		},
	},
});

export default theme;
