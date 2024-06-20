import React from "react";
import { useMemo } from "react";
import { tokens, themeSettings } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/Dashboard/Dashboard";
function App() {
  const colors = tokens();
  return (
    <ThemeProvider theme={useMemo(() => createTheme(themeSettings()), [])}>
      <Box
        className="App"
        bgcolor={colors.grey[200]}
        width={"100%"}
        height={"100vh"}
        display="flex"
        flexDirection="column"
      >
        <Topbar width={"100%"} />
        <Box display="flex" flexGrow={1}>
        <Router>
          <Sidebar />
          <Box display="flex" flexGrow={1} sx={{height:"88vh", width:"80%"}}  className="content"> 
          <Routes>
            <Route path="/" element={<Dashboard></Dashboard>} />
              </Routes>
            </Box>
            </Router>

        </Box>

      </Box>
    </ThemeProvider>
  );
}
export default App;
