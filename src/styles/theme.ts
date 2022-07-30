import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { amber } from "@mui/material/colors";

declare module "@mui/material/styles/" {
  interface TypographyVariants {
    [key: string]: any;
  }
  interface Palette {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }
  interface TypographyVariantsOptions {
    [key: string]: any;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: amber[700],
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Roboto, sans-serif"].join(", "),
  },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
  },
};

theme = responsiveFontSizes(theme);

export default theme;
