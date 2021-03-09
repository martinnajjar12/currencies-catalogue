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
import Header from './Header';
import FeaturedComponent from './FeaturedComponent';
import TitleComponent from './TitleComponent';
import CurrenciesContainer from '../containers/CurrenciesContainer';
import { FETCH_DATA } from '../actions/index';

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
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(FETCH_DATA()), []);

  return (
    <>
      <Header />
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
                  <FeaturedComponent currency={state[0]} />
                  <TitleComponent />
                  <CurrenciesContainer currency={state} />
                </Route>
                <Route exact path="/pages/:slug">
                  <FeaturedComponent currency={state[1]} />
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
