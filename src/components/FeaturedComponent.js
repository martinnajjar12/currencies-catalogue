import {
  Grid,
  Typography,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import React from 'react';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  },
  palette: {
    background: {
      default: '#ec4c8a',
    },
    type: 'dark',
  },
});

const FeaturedComponent = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Grid container>
      <Grid item xs={6}>
        <img src="./sj" alt="pic" />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">United States</Typography>
        <Typography variant="subtitle1">USD</Typography>
      </Grid>
    </Grid>
  </ThemeProvider>
);

export default FeaturedComponent;
