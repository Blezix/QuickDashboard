import { useState } from "react";
import { Box, Drawer } from "@mui/material";

export default function Sidebar() {
  const [collapsed] = useState(false);
  return (
    <Box width={"30%"} height={"88vh"}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={!collapsed}
        transitionDuration={200}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: "0",
            position: "relative",
            height: "80vh",
            width: "75%",
            marginTop: "6%",
            marginLeft: "20%",

          },
        }}
      >
      </Drawer>
    </Box>
  );
}
