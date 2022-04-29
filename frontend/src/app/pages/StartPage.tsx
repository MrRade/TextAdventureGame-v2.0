import {Paper, Typography} from "@mui/material";
import {NavBar} from "../components/common/NavBar";
import React from 'react'

export const StartPage = () => {

    return (
        <Paper>
            <NavBar/>
            <Typography variant="h1">Hello World!</Typography>

        </Paper>
    )
}
