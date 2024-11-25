import { useState } from "react";
import { Box, Drawer, Button, List, ListItem } from "@mui/material";

export default function Sidebar() {
  const [collapsed] = useState(false);
  const [used, setUsed] = useState(false);
  return (
    <Box width={"15%"} height={"88vh"}>
      <Drawer
        variant="permanent"
        anchor="left"
        open={!collapsed}
        transitionDuration={200}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: "0",
            position: "relative",
            height: "100vh",
            width: "100%",
          },
        }}
      >
        <Box height={"20%"} width="100%"></Box>
        <Box height={"70%"} width="100%" borderTop={"1px solid lightgrey"} borderBottom={"1px solid lightgrey"} sx={{display:"flex", justifyContent:"center"}}>
        <List sx={{width:"70%"}}>
            <ListItem>
              <Button variant="contained" fullWidth sx={{justifyContent:"start", background:"black", color:"white"}}>
                Home
              </Button>
            </ListItem>
            <ListItem>
            <Button variant="text" fullWidth sx={{justifyContent:"start"}}>

                Analitics
              </Button>
            </ListItem>
            <ListItem>
            <Button variant="text" fullWidth sx={{justifyContent:"start"}}>

                shop
              </Button>
            </ListItem>
          </List>
        </Box>
        <Box height={"15%"} width="100%"></Box>
      </Drawer>
    </Box>
  );
}
