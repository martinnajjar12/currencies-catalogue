import React, { useEffect } from 'react';
import {
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import FeaturedComponent from '../components/FeaturedComponent';
import Attribution from '../components/Attribution';
import CurrenciesContainer from './CurrenciesContainer';
import { FETCH_DATA, FILTER } from '../actions/index';
import FilterCurrency from '../components/FilterCurrency';
import Details from '../components/Details';
import HomePage from '../skeleton/HomePage';

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
  const handleFilterChange = name => {
    dispatch(FILTER(name));
  };

  return (
    <>
      {state.length === 0
        ? (
          <>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <HomePage />
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
                  <FilterCurrency currency={state} filterHandler={handleFilterChange} />
                  <FeaturedComponent currencies={state} />
                  <Attribution />
                  <CurrenciesContainer currencies={state} />
                </Route>
                <Route exact path="/currency/:id">
                  <Header />
                  <FeaturedComponent currencies={state} />
                  <Attribution />
                  <Details currencies={state} />
                </Route>
              </Switch>
            </BrowserRouter>
          </ThemeProvider>
        )}
    </>
  );
};

export default App;
