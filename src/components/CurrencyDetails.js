import {
  Avatar,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let counter = 0;
const whichBackground = counter => {
  if (counter === 2 || counter === 3) {
    return { backgroundColor: '#cf4278' };
  }
  return { backgroundColor: '#db4681' };
};

const useStyles = makeStyles(theme => ({
  anchorColor: {
    color: '#fff',
    textDecoration: 'none',
  },
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
          <Link className={classes.anchorColor} to={`/currency/${currency.id}`}>
            <Avatar alt={currency.name} src={currency.logo_url} variant="rounded" className={classes.large} />
            <Typography variant="h6" align="right">{currency.name}</Typography>
            <Typography variant="subtitle2" align="right">{currency.symbol}</Typography>
          </Link>
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
