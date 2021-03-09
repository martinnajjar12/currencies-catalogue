import {
  Grid,
  Typography,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
  Avatar,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['lato', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  },
  palette: {
    background: {
      default: '#ec4c8a',
    },
    type: 'dark',
  },
});

const useStyles = makeStyles(theme => ({
  containerPadding: {
    padding: 15,
  },
  xLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const FeaturedComponent = ({ currency }) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container className={classes.containerPadding}>
        <Grid item xs={6}>
          <Avatar src={currency.logo_url} alt={currency.name} className={classes.xLarge} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">Bitcoin</Typography>
          <Typography variant="subtitle1">BTC</Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

FeaturedComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currency: PropTypes.object.isRequired,
};

export default FeaturedComponent;
