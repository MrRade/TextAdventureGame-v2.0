import {AppBar, Button, IconButton, Typography, useTheme} from "@mui/material";
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import {useColorModeContext} from "../../mui-styles/darkmodeProvider";
import {getLanguage, getLanguageLabel} from "../../i18n/i18n";
import {useTranslation} from "react-i18next";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import React from 'react'

export const NavBar = () => {

    return (
        <AppBar>
            <Typography variant="h3">
                The TextAdventureGame v.2
            </Typography>
            <ColorModeButton/>
            <LanguageButton/>
        </AppBar>
    );
}

const ColorModeButton = () => {
    const theme = useTheme();
    const colorMode = useColorModeContext();

    return (
        <IconButton onClick={colorMode.toggleColorMode}>
            {
                theme.palette.mode === "dark"
                    ? <Brightness7Icon/>
                    : <Brightness4Icon/>
            }
        </IconButton>
    );
}

const LanguageButton = () => {
    const language = getLanguage();
    const otherLang = language === "de" ? "en" : "de";
    const {i18n} = useTranslation();
    const toggleLang = () => i18n.changeLanguage(otherLang)

    return (
        <Button onClick={toggleLang} variant={"contained"} color={"secondary"}>
            {getLanguageLabel(otherLang)}
        </Button>
    )
}