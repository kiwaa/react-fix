import { ThemeOptions } from "@mui/material";
import { colors } from "./base/colors";
import type { } from '@mui/x-data-grid/themeAugmentation';

export const lightTheme: ThemeOptions = {
    palette: { ...colors },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                    '.x-dg-row-odd': {
                        backgroundColor: '#F5F5F5',
                    }
                }
            },
        },
    }
};
