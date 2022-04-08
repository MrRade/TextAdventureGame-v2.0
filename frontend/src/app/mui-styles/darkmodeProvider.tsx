import {createContext, useContext} from "react";

export const getModeOfLocalStorage = (): "light" | "dark" => {
    const mode = localStorage.getItem("THEME_MODE")
    return mode === "dark"
        ? "dark"
        : "light";
};

export const setModeOfLocalStorage = (mode: string) => localStorage.setItem("THEME_MODE", mode)

export const ColorModeContext = createContext({ toggleColorMode: () => {}} );
export const ColorModeProvider = ColorModeContext.Provider;
export const useColorModeContext = () => useContext(ColorModeContext);