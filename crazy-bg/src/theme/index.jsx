const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  loginLine: "#F56A2C",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
};

const spacing = {
  xxs: "0.25rem", // 4px
  xs: "0.5rem",   // 8px
  sm: "0.75rem",  // 12px
  md: "1.25rem",  // 20px
  lg: "2rem",     // 32px
  xl: "3.25rem",  // 52px
  xxl: "5.25rem", // 84px
};

const fonts = {
  size: {
    XXXS: "0.5rem",  // 8px
    XXS: "0.625rem", // 10px
    XS: "0.75rem",   // 12px
    P0: "0.9375rem", // 15px
    P1: "1.125rem",  // 18px
    P2: "1.25rem",   // 20px
    P3: "1.5rem",    // 24px
    P4: "2.25rem",   // 36px
    P5: "3rem",      // 48px
    P6: "3.75rem",   // 60px
  },

  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
};

const gridUnit = 8;

const borderRadius = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};

const shadows = {};

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
};
