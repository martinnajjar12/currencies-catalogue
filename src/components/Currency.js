import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import CurrencyDetails from './CurrencyDetails';

const Currency = ({ data }) => (
  <>
    <Grid item xs={6}>
      <CurrencyDetails data={data} />
    </Grid>
  </>
);

Currency.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default Currency;
