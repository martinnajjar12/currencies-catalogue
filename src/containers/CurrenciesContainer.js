import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import Currency from '../components/Currency';

const url = '/v1/cryptocurrency/listings/latest?start=1&limit=5&convert=USD';

const CurrenciesContainer = () => {
  const [currency, setCurrency] = useState([{ name: 'hello' }]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-CMC_PRO_API_KEY': env.API_KEY,
      },
    });
    const data = await response.json();
    setCurrency(data.data);
    setLoading(false);
  }, []);

  return (
    <Grid container>
      { loading
        ? (
          <>
            <div>
              <Skeleton variant="text" width="50%" />
              <Skeleton variant="circle" height={80} width={80} />
              <Skeleton variant="text" />
              <Skeleton variant="text" width="50%" />
            </div>
          </>
        )
        : <Currency data={currency} /> }
    </Grid>
  );
};

export default CurrenciesContainer;
