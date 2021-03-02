import { Grid } from '@material-ui/core';
import React from 'react';
import Currency from '../components/Currency';

const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD';

const getData = async (url = '') => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    },
  });
  return response.json();
};

getData(url)
  .then(data => {
    console.log(data);
  });

const CurrenciesContainer = () => (
  <Grid container>
    <Currency />
    <Currency />
  </Grid>
);

export default CurrenciesContainer;
