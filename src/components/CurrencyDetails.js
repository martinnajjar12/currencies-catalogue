import {
  Avatar,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

let counter = 0;
const whichBackground = counter => {
  if (counter === 2 || counter === 3) {
    return { backgroundColor: '#cf4278' };
  }
  return { backgroundColor: '#db4681' };
};

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: '0 auto',
  },
  containerPadding: {
    padding: 20,
  },
}));

const CurrencyDetails = ({ data }) => {
  const dataWithoutFirstCurrency = data.filter(currency => currency.rank !== '1');
  const classes = useStyles();

  return (
    dataWithoutFirstCurrency.map(currency => {
      if (counter === 3) {
        counter = 0;
      } else {
        counter += 1;
      }

      return (
        <Grid
          style={whichBackground(counter)}
          key={currency.id}
          item
          xs={6}
          className={classes.containerPadding}
        >
          <Avatar alt={currency.name} src={currency.logo_url} variant="rounded" className={classes.large} />
          <Typography variant="h6" align="right">{currency.name}</Typography>
          <Typography variant="subtitle2" align="right">{currency.symbol}</Typography>
        </Grid>
      );
    })
  );
};

CurrencyDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default CurrencyDetails;
