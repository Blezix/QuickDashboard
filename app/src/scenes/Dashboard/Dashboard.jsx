import React from "react"
import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"
import { tokens } from "../../theme"

export default function Dashboard(){
    const theme = useTheme;
    const colors = tokens(theme.pallete);
    return(
        <Box width={"100%"} height={"90%"} mt={"2.5%"}display="flex" flexDirection="row" flexWrap={"wrap"} gap={"5px"} pl={"50px"}>
                <Box borderRadius={"5px"} bgcolor={colors.grey[400]} width={"24%"} height={"40%"}></Box>
                <Box borderRadius={"5px"}bgcolor={"red"} bgcolor={colors.grey[400]} width={"24%"} height={"40%"}></Box>
                <Box bgcolor={"red"}borderRadius={"5px"} bgcolor={colors.grey[400]} width={"24%"} height={"40%"}></Box>
                <Box bgcolor={"red"} width={"24%"} bgcolor={colors.grey[400]} borderRadius={"5px"} height={"40%"}></Box>
                <Box bgcolor={"red"} width={"20%"} bgcolor={colors.grey[400]}borderRadius={"5px"} height={"55%"}></Box>
                <Box bgcolor={"red"} width={"20%" }bgcolor={colors.grey[400]}borderRadius={"5px"} height={"55%"}></Box>
                <Box bgcolor={"red"} width={"56%"}borderRadius={"5px"}bgcolor={colors.grey[400]} height={"55%"}></Box>
 

        </Box>
    )
}