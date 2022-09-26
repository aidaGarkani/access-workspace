import COLORS from "./colors";

export const theme = {
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    text: {
      primary: COLORS.DARKTEXT,
    },
    background: {
      default: COLORS.DARKBG,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    color: COLORS.DARKTEXT,
    allVariants: {
      color: COLORS.DARKTEXT,
      fontWeight: 600,
    },
    h1: {
      fontSize: 30,
      fontWeight: 700,
    },
    h2: {
      fontSize: 25,
      fontWeight: 700,
    },
    h3: {
      fontSize: 22,
      fontWeight: 700,
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
    },
    h6: {
      fontSize: 17,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 700,
    },
    caption: {
      fontSize: 9,
      fontWeight: 700,
      color: COLORS.SUBTEXT,
    },
    subtitle1: {
      color: COLORS.SUBTEXT,
      fontWeight: 600,
      fontSize: 13,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
};
