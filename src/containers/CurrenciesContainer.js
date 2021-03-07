import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';
import Currency from '../components/Currency';

const CurrenciesContainer = () => {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${env.API_KEY}&per-page=24&interval=1d&convert=USD&sort=rank`;
    axios.get(baseUrl, {
      headers: {
        'Access-Control-Allow-Origin': 'http://currencies-catalogue.herokuapp.com',
      },
    }).then(response => {
      setCurrency(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <Grid container>
      { loading
        ? (
          <>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="circle" height={65} width={65} />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="50%" />
            </Grid>
          </>
        )
        : (
          <Currency data={currency} />
        )}
    </Grid>
  );
};

export default CurrenciesContainer;
