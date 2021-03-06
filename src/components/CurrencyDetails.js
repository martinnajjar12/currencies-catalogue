import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const CurrencyDetails = ({ data }) => (
  <>
    <Grid>{data[0].name}</Grid>
    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="icon" />
    <Typography variant="h4">Bitcoin</Typography>
    <Typography variant="subtitle1">BTC</Typography>
  </>
);

CurrencyDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default CurrencyDetails;
