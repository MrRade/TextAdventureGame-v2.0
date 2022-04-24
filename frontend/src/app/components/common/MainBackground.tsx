import {Box} from "@mui/material";
import React, {ReactNode} from "react";

interface MainBackgroundProps {
    readonly children: ReactNode;
}

export const MainBackground = (props: MainBackgroundProps) => {

    return(
        <Box sx={{position: "absolute", display: "block"}}>
            {props.children}
        </Box>
    )
};