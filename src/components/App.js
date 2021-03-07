import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import FeaturedComponent from './FeaturedComponent';
import TitleComponent from './TitleComponent';
import CurrenciesContainer from '../containers/CurrenciesContainer';

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;
    axios.get(baseUrl).then(response => {
      setCurrency(response.data);
      setLoading(false);
    }).catch(err => console.log(err));
  }, []);

  return (
    <>
      <Header />
      {loading
        ? (
          <>
            <Grid item xs={6}>
              <Skeleton variant="circle" width={40} height={40} />
              <Skeleton variant="text" width={100} />
              <Skeleton variant="text" width={100} />
            </Grid>
          </>
        )
        : (
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
        )}
    </>
  );
};

export default App;
