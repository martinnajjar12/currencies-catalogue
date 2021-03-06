import {
  makeStyles,
  Container,
  Link,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#df4783',
  },
  subtitle1: {
    fontSize: 14,
    color: '#fff',
  },
});

const Attribution = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Link target="_blank" className={classes.subtitle1} href="https://nomics.com">CRYPTO MARKET CAP &amp; PRICING DATA PROVIDED BY NOMICS</Link>
      </Container>
    </>
  );
};

export default Attribution;
