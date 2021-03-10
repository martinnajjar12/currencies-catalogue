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

const useStyles = makeStyles(theme => ({
  containerPadding: {
    padding: 15,
  },
  xLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '0 auto',
  },
}));

const FeaturedComponent = ({ currency }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container className={classes.containerPadding}>
          <Grid item xs={6}>
            <Avatar src={currency.logo_url} alt={currency.name} className={classes.xLarge} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">{currency.name}</Typography>
            <Typography variant="subtitle1">{currency.symbol}</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

FeaturedComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currency: PropTypes.object.isRequired,
};

export default FeaturedComponent;
