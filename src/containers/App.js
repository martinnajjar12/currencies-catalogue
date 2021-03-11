import React, { useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';
import {
  createMuiTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import FeaturedComponent from '../components/FeaturedComponent';
import TitleComponent from '../components/TitleComponent';
import CurrenciesContainer from './CurrenciesContainer';
import { FETCH_DATA } from '../actions/index';
import FilterCurrency from '../components/FilterCurrency';
import Details from '../components/Details';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        color: '#323232',
      },
    },
  },
  typography: {
    fontFamily: ['lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  },
  palette: {
    background: {
      default: '#ec4c8a',
    },
    text: {
      primary: '#fff',
    },
  },
});

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(FETCH_DATA()), []);

  return (
    <ThemeProvider theme={theme}>
      {state.length === 0
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
                  <Header />
                  <FilterCurrency currency={state} />
                  <FeaturedComponent currencies={state} />
                  <TitleComponent />
                  <CurrenciesContainer currency={state} />
                </Route>
                <Route exact path="/currency/:id">
                  <Header />
                  <FeaturedComponent currencies={state} />
                  <TitleComponent />
                  <Details currencies={state} />
                </Route>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        )}
    </ThemeProvider>
  );
};

export default App;
