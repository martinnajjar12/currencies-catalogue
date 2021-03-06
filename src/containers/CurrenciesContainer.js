import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import Currency from '../components/Currency';

const url = '/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD';

const CurrenciesContainer = () => {
  const [currency, setCurrency] = useState([{ name: 'hello' }]);
  useEffect(async () => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': env.API_KEY,
      },
    });
    const data = await response.json();
    console.log(data.data);
    setCurrency(data.data);
  }, []);

  return (
    <Grid container>
      <Currency data={currency} />
      <Currency data={currency} />
    </Grid>
  );
};

export default CurrenciesContainer;
