import { Grid } from '@material-ui/core';
import React from 'react';
import CurrencyDetails from './CurrencyDetails';

const Currency = () => (
  <>
    <Grid item xs={6}>
      <CurrencyDetails />
    </Grid>
  </>
);

export default Currency;
