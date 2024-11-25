import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import MailIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Topbar(width, sx) {
  const theme = useTheme;
  const colors = tokens(theme.pallete);
  return (
    <Box
      width={width}
      sx={{ height: "15%" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="white"
      paddingRight={"40px"}
      paddingTop={"20px"}
    >
      <Box
        marginLeft={"80px"}
        display={"flex"}
        alignItems="left"
        flexDirection={"column"}
      >
        <Typography variant="h5" fontSize={"1.8rem"}>
          Welcome Back, User!
        </Typography>
        <Typography color={colors.grey[700]}>
          Here's whats new with your business
        </Typography>
      </Box>
      <Box
        height={"50%"}
        width={"15%"}
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon
            sx={{
              fill: colors.grey[500],
            }}
          />
        </IconButton>

        <IconButton>
          <NotificationsIcon sx={{ fill: colors.grey[500] }} />
        </IconButton>
        <IconButton border="1px solid lightgrey">
          <Box
            sx={{ height: "35px", width: "35px", borderRadius: "50px" }}
            bgcolor={colors.grey[400]}
            
></Box>
          <Typography marginLeft={"10px"} fontWeight={"bold"}>Jakub Milosz</Typography>
          <ArrowDropDownIcon sx={{ fill: colors.grey[700] }} />
        </IconButton>
      </Box>
    </Box>
  );
}
