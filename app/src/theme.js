import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = () => ({
  grey: {
    300: "#e0e0e0",
    400: "#d6d6d6",
    500: "#cccccc",
    600: "#a3a3a3",
    700: "#4a4a4a",
    800: "#5B5B5B",
    900: "#292929",
  },
  white: {
    100: "#ffffff",
    200: "#f2f2f2",
    300: "#e6e6e6",
    400: "#d9d9d9",
    500: "#cccccc",
    600: "#bfbfbf",
    700: "#b3b3b3",
    800: "#a6a6a6",
    900: "#999999",
  },
  black: {
    100: "#e6e6e6",
    200: "#cccccc",
    300: "#b3b3b3",
    400: "#999999",
    500: "#808080",
    600: "#666666",
    700: "#4d4d4d",
    800: "#333333",
    900: "#1a1a1a",
  },
  blue: {
    100: "#cce4f6",
    200: "#99c9ed",
    300: "#66afe5",
    400: "#3394dc",
    500: "#0079d3",
    600: "#0061a9",
    700: "#00497f",
    800: "#003054",
    900: "#00182a",
  },
  green: {
    100: "#d4edda",
    200: "#a9dbb5",
    300: "#7dc990",
    400: "#52b76b",
    500: "#27a546",
    600: "#1f8438",
    700: "#17632a",
    800: "#0f421c",
    900: "#07210e",
  },
});

export const themeSettings = () => {
  const colors = tokens();
  return {
    palette: {
      primary: {
        main: colors.grey[700],
      },
      secondary: {
        main: colors.grey[700],
      },

      background: {
        default: colors.white[100],
      },
      
    },
  };
};
