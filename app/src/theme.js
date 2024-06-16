import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = () => ({
  grey: {
    100: "#f5f5f5",
    200: "#ebebeb",
    300: "#e0e0e0",
    400: "#d6d6d6",
    500: "#cccccc",
    600: "#a3a3a3",
    700: "#7a7a7a",
    800: "#525252",
    900: "#292929",
  },
  white: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
  black: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
  primary: {
    100: "#f0f8ff",
    200: "#b0e0e6",
    300: "#87ceeb",
    400: "#87ceeb",
    500: "#87ceeb",
    600: "#87ceeb",
    700: "#87ceeb",
    800: "#87ceeb",
    900: "#87ceeb",
  },
  secondary: {
    100: "#f0f8ff",
    200: "#b0e0e6",
    300: "#87ceeb",
    400: "#87ceeb",
    500: "#87ceeb",
    600: "#87ceeb",
    700: "#87ceeb",
    800: "#87ceeb",
    900: "#87ceeb",
  },
});

export const themeSettings = () => {
  const colors = tokens();
  return {
    palette: {
      primary: {
        main: colors.primary[500],
      },
      neutral: {
        main: colors.white[500],
      },
      secondary: {
        main: colors.white[500],
      },

      background: {
        default: colors.black[800],
      },
      typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 16,
        },

        h6: {
          fontFamily: ["Roboto", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    },
  };
};
