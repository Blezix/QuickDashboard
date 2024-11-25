import React from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Typography } from "@mui/material";
export default function Dashboard() {
  const theme = useTheme;
  const colors = tokens(theme.pallete);
  return (
    <Box
      height={"95%"}
      paddingLeft={"40px"}
      paddingRight={"40px"}
      bgcolor={colors.white[100]}
      paddingTop={"40px"}
    >
      <Box className="LeftDash" width={"75%"} height={"100%"}>
        <Box
          className="CardsHolder"
          gap={"20px"}
          height={"25%"}
          width={"100%"}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Box
            minWidth={"30%"}
            height={"95%"}
            borderRadius={"20px"}
            display={"flex"}
            bgcolor={"#def3f5"}
          >
            <Box padding={"20px"}>
              <Box>
                <Typography variant="h3">333.42K</Typography>
                <Typography color={colors.grey[700]}>
                  Total customers
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Box>
                  <Typography variant="h5">+30%</Typography>
                  <Typography color={colors.grey[700]}>This month</Typography>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
          <Box
            minWidth={"30%"}
            height={"95%"}
            borderRadius={"20px"}
            display={"flex"}
            bgcolor={"#eafcea"}
          >
            <Box padding={"20px"}>
              <Box>
                <Typography variant="h3">$412.42K</Typography>
                <Typography color={colors.grey[700]}>Total Revenue</Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Box>
                  <Typography variant="h5">-12%</Typography>
                  <Typography color={colors.grey[700]}>This month</Typography>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
          <Box
            minWidth={"30%"}
            height={"95%"}
            borderRadius={"20px"}
            display={"flex"}
            bgcolor={"#e9f4f6"}
          >
            <Box padding={"20px"}>
              <Box>
                <Typography variant="h3">4.42K</Typography>
                <Typography color={colors.grey[700]}>Total Deals</Typography>
              </Box>
              <Box display={"flex"} flexDirection={"row"}>
                <Box>
                  <Typography variant="h5">+24%</Typography>
                  <Typography color={colors.grey[700]}>This month</Typography>
                </Box>
                <Box></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
