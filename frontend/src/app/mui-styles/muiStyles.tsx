import {createTheme, PaletteMode} from "@mui/material";
import {green} from "@mui/material/colors";

export const createMainTheme = (mode: PaletteMode) => createTheme({
    palette: {
        mode: mode,
        primary: green,
        secondary: green
    },
    typography: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        body1: {},
        h1: {
            fontSize: "3rem"
        },
        h2: {
            fontSize: "2rem"
        },
        h3: {
            fontSize: "1.5rem"
        },
        h4: {
            fontSize: "1.062rem"
        },
        h5: {
            fontSize: "0.75rem"
        }
    },
});