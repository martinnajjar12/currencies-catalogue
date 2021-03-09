import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@material-ui/lab';
import {
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@material-ui/core';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import FeaturedComponent from './FeaturedComponent';
import TitleComponent from './TitleComponent';
import CurrenciesContainer from '../containers/CurrenciesContainer';

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

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;
    axios.get(baseUrl).then(response => {
      setCurrency(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      {loading
        ? (
          <>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Grid item xs={6}>
                <Skeleton variant="circle" width={40} height={40} />
                <Skeleton variant="text" width={100} />
                <Skeleton variant="text" width={100} />
              </Grid>
            </ThemeProvider>
          </>
        )
        : (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <FeaturedComponent currency={currency[0]} />
                  <TitleComponent />
                  <CurrenciesContainer currency={currency} />
                </Route>
                <Route exact path="/pages/:slug">
                  <FeaturedComponent currency={currency[1]} />
                  <TitleComponent />
                </Route>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        )}
    </>
  );
};

export default App;
