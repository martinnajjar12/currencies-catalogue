import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import env from 'react-dotenv';
import Header from './Header';
import FeaturedComponent from './FeaturedComponent';
import TitleComponent from './TitleComponent';
import CurrenciesContainer from '../containers/CurrenciesContainer';

const App = () => {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${env.API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;
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
          <>
            <FeaturedComponent currency={currency[0]} />
            <TitleComponent />
            <CurrenciesContainer currency={currency} />
          </>
        )}
    </>
  );
};

export default App;
