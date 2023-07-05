import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#E8BC43',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#436fe8',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        background: {
            default: 'rgba(12,12,12, 0.9)',
            paper: 'rgba(12,12,12,0.12)',
        },
        text: {
            primary: 'rgba(255,255,255,0.8)',
        },
    }
};

export const lightTheme: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: '#436fe8',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
            main: '#E8BC43',
            contrastText: 'rgba(255,255,255,0.87)',
        }
    },
};  
