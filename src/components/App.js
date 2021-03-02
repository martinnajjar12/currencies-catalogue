import React from 'react';
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import Header from './Header';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  },
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <CssBaseline />
  </ThemeProvider>
);

export default App;
