import { Grid } from '@material-ui/core';
import React from 'react';
import Currency from '../components/Currency';

const CurrenciesContainer = () => (
  <Grid container>
    <Currency />
    <Currency />
  </Grid>
);

export default CurrenciesContainer;
