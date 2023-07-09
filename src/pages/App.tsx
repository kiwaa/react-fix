import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Header from './components/header/Header';
import AppContent from '../components/content/AppContent';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { PaletteMode } from "@mui/material";
import { ColorContext } from "../ColorContext";
import { lightTheme } from '../assets/theme';
import { darkTheme } from '../assets/theme-dark';
import ResponsiveAppBar from '../components/responsiiveAppBar/ResponsiveAppBar';

function App() {

  const [mode, setMode] = React.useState<PaletteMode>('light');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Container maxWidth="xl" sx={{ p: '24px' }}>
          <Box>
            <AppContent />
          </Box>
        </Container>
      </ThemeProvider>
    </ColorContext.Provider >
  );
}

export default App;
