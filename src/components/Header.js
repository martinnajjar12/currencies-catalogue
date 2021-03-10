import {
  AppBar,
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import HideOnScroll from '../utils/HideOnScroll';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  },
  palette: {
    primary: {
      main: '#ec4c8b',
    },
    type: 'dark',
  },
});

const Header = () => (
  <ThemeProvider theme={theme}>
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Container>
            <Typography variant="h6">Currencies Catalogue</Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    <Toolbar />
    <CssBaseline />
  </ThemeProvider>
);

export default Header;
