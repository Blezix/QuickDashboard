import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

export default function SummaryCard() {
  const theme = useTheme;
  const colors = tokens(pallete);
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      bgcolor={colors.grey[400]}
      justifySelf={"center"}
      borderRadius={"8px"}
    >
      <Box width={"100%"} height={"40%"} display={"flex"} alignItems={"center"}>
        <Typography
          width={"100%"}
          variant="h6"
          fontWeight={"bold"}
          color={colors.grey[800]}
          textAlign={"center"}
        >
          Congrats Joe Doe
        </Typography>
      </Box>
    </Box>
  );
}
