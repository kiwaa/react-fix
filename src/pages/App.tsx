import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { PaletteMode } from "@mui/material";
import { ColorContext } from "../components/responsiive-app-bar/ColorContext";
import { lightTheme } from '../assets/theme';
import { darkTheme } from '../assets/theme-dark';
import ResponsiveAppBar from '../components/responsiive-app-bar/ResponsiveAppBar';
import FixParser from '../components/fix-parser/FixParser';
import Timeline from '../components/timeline/Timeline';
import FixMessageViewer from '../components/message-viewer/FixMessageViewer';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { FixMessage } from "../models/FixMessage/FixMessage";

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

  const [messages, setMessages] = React.useState<FixMessage[]>({} as FixMessage[]);
  const [selectedMessage, setSelectedMessage] = React.useState<FixMessage>(new FixMessage(-1, null));
  const handleFixParserChanged = (messages: FixMessage[]) => {
    console.log(messages);
    setMessages(messages);
  }

  const handleSelectedMessage = (message: FixMessage) => {
    console.log(message);
    setSelectedMessage(message);
  }

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Container maxWidth="xl" sx={{ p: '24px' }}>
          <Box>
            <Grid container spacing={2}>
              <Grid xs={12}>
                <Item>
                  <Typography variant="h4" component="h1" gutterBottom>
                    FIX Messages Decoder
                  </Typography>
                  <FixParser onChange={handleFixParserChanged} />
                </Item>
              </Grid>
              <Grid xs={7}>
                <Item>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Timeline
                  </Typography>
                  <Timeline values={messages} onSelected={handleSelectedMessage} />
                </Item>
              </Grid>
              <Grid xs={5}>
                <Item>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Detail
                  </Typography>
                  <FixMessageViewer value={selectedMessage} />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </ColorContext.Provider >
  );
}

export default App;
