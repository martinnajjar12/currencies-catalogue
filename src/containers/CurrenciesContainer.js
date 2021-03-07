import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Currency from '../components/Currency';

const CurrenciesContainer = ({ currency }) => (
  <Grid container>
    <Currency data={currency} />
  </Grid>
);

CurrenciesContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currency: PropTypes.array.isRequired,
};

export default CurrenciesContainer;
