import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
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
      sx={{ height: "12%" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="white"
    >
      <Box
        width="10%"
        display={"flex"}
        alignItems="center"
        justifyContent="space-around"
      >
        <Box
          sx={{ height: "50px", width: "50px", borderRadius: "50px" }}
          bgcolor={colors.grey[600]}
        ></Box>
        <Typography variant="h5" color="initial">
          Logo
        </Typography>
      </Box>
      <Box
        height={"50%"}
        width={"60%"}
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
        <InputBase
          sx={{ ml: 2, flex: 1, width: "50%" }}
          placeholder="Search here"
        />
        <IconButton>
          <MailIcon sx={{ fill: colors.grey[500], fill: colors.grey[500] }} />
        </IconButton>
        <IconButton>
          <NotificationsIcon sx={{ fill: colors.grey[500] }} />
        </IconButton>
        <IconButton>
          <Box
            sx={{ height: "35px", width: "35px", borderRadius: "50px" }}
            bgcolor={colors.grey[400]}
          ></Box>
          <ArrowDropDownIcon sx={{ fill: colors.grey[700] }} />
        </IconButton>
      </Box>
    </Box>
  );
}
