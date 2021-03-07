import {
  Avatar,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const CurrencyDetails = ({ data }) => {
  const classes = useStyles();
  return (
    data.map(currency => (
      <Grid key={currency.id} item xs={6}>
        <Avatar alt={currency.name} src={currency.logo_url} variant="rounded" sizes="150000" className={classes.large} />
        <Typography variant="h4">{currency.name}</Typography>
        <Typography variant="subtitle1">{currency.symbol}</Typography>
      </Grid>
    ))
  );
};

CurrencyDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default CurrencyDetails;
