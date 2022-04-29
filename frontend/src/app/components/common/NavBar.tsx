import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme} from "@mui/material";
import {useColorModeContext} from "../../mui-styles/darkmodeProvider";
import {getLanguage, getLanguageLabel} from "../../i18n/i18n";
import {useTranslation} from "react-i18next";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

export const NavBar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3"
                                sx={{flexGrow: 1}}
                    >
                        The TextAdventureGame v.2
                    </Typography>
                    <MenuButton/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

const MenuButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <MenuIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}><ColorModeButton/></MenuItem>
                <MenuItem onClick={handleClose}><LanguageButton/></MenuItem>
            </Menu>
        </div>
    )
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
