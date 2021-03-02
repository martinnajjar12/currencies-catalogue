import {
  Typography,
  makeStyles,
  Container,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#cf4278',
  },
  subtitle1: {
    fontSize: 14,
  },
});

const TitleComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Typography className={classes.subtitle1} variant="subtitle1">USD TO OTHER CURRENCIES</Typography>
      </Container>
    </>
  );
};

export default TitleComponent;
