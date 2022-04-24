import {Paper, Typography} from "@mui/material";
import {NavBar} from "../components/common/NavBar";
import React from 'react'
import {MainBackground} from "../components/common/MainBackground";

export const StartPage = () =>{

    return(
        <Paper>
            <NavBar/>
            <MainBackground>
                <Typography variant="h1">Hello World!</Typography>
            </MainBackground>
        </Paper>
    )
}