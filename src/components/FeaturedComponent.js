import {
  Grid,
  Typography,
  CssBaseline,
  Avatar,
  makeStyles,
  Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  anchorColor: {
    color: '#fff',
    textDecoration: 'none',
  },
  containerPadding: {
    padding: 15,
  },
  xLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '0 auto',
  },
}));

const FeaturedComponent = ({ currencies }) => {
  const classes = useStyles();
  const { id } = useParams();
  if (id) {
    const thisCurrency = currencies.find(currency => currency.id === id);
    return (
      <>
        <CssBaseline />
        <Container>
          <Grid container className={classes.containerPadding}>
            <Grid item xs={6}>
              <Avatar
                src={thisCurrency.logo_url}
                alt={thisCurrency.name}
                className={classes.xLarge}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">{thisCurrency.name}</Typography>
              <Typography variant="subtitle1">{thisCurrency.symbol}</Typography>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
  return (
    <>
      <CssBaseline />
      <Link to={`/currency/${currencies[0].id}`} className={classes.anchorColor}>
        <Container>
          <Grid container className={classes.containerPadding}>
            <Grid item xs={6}>
              <Avatar
                src={currencies[0].logo_url}
                alt={currencies[0].name}
                className={classes.xLarge}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">{currencies[0].name}</Typography>
              <Typography variant="subtitle1">{currencies[0].symbol}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Link>
    </>
  );
};

FeaturedComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currencies: PropTypes.array.isRequired,
};

export default FeaturedComponent;
