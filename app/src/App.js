import React from "react";
import { useMemo } from "react";
import { tokens, themeSettings } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Topbar from "./scenes/global/Topbar";
function App() {
  const colors = tokens();
  return (
    <ThemeProvider theme={useMemo(() => createTheme(themeSettings()), [])}>
      <Box
        className="App"
        bgcolor={colors.grey[200]}
        width={"100%"}
        height={"100vh"}
      >
        <Topbar width={"100%"} />
        <Box className="content"> </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
