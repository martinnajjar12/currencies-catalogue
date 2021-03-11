import {
  Container,
  Card,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  noPadding: {
    padding: 0,
  },
  card: {
    width: '100%',
    height: 80,
    borderRadius: 0,
    color: '#fff',
    boxShadow: 'none',
    padding: 15,
  },
  oddCard: {
    backgroundColor: '#cf4278',
  },
  evenCard: {
    backgroundColor: '#db4681',
  },
  divWidth: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      margin: '0 auto',
    },
  },
}));

const Details = ({ currencies }) => {
  const classes = useStyles();
  const { id } = useParams();
  const thisCurrency = currencies.find(currency => currency.id === id);
  return (
    <Container className={classes.noPadding}>
      <Card
        className={`${classes.card} ${classes.oddCard}`}
      >
        <div className={classes.divWidth}>
          <Typography align="left">Rank</Typography>
          <Typography>{thisCurrency.rank}</Typography>
        </div>
      </Card>
      <Card
        className={`${classes.card} ${classes.evenCard}`}
      >
        <div className={classes.divWidth}>
          <Typography align="left">USD Price</Typography>
          <Typography>
            &#x24;
            {parseFloat(thisCurrency.price).toFixed(2)}
          </Typography>
        </div>
      </Card>
      <Card
        className={`${classes.card} ${classes.oddCard}`}
      >
        <div className={classes.divWidth}>
          <Typography align="left">USD price percent</Typography>
          <Typography>
            {(parseFloat(thisCurrency['1d'].price_change_pct) * 100).toFixed(2)}
            %
          </Typography>
        </div>
      </Card>
      <Card
        className={`${classes.card} ${classes.evenCard}`}
      >
        <div className={classes.divWidth}>
          <Typography align="left">Market Cap</Typography>
          <Typography>
            &#x24;
            {thisCurrency.market_cap}
          </Typography>
        </div>
      </Card>
      <Card
        className={`${classes.card} ${classes.oddCard}`}
      >
        <div className={classes.divWidth}>
          <Typography align="left">Volume</Typography>
          <Typography>
            &#x24;
            {parseFloat(thisCurrency['1d'].volume).toFixed(2)}
          </Typography>
        </div>
      </Card>
    </Container>
  );
};

Details.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currencies: PropTypes.array.isRequired,
};

export default Details;
