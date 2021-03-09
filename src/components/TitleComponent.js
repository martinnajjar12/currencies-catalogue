import {
  makeStyles,
  Container,
  Link,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#cf4278',
  },
  subtitle1: {
    fontSize: 14,
    color: '#fff',
  },
});

const TitleComponent = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Link target="_blank" className={classes.subtitle1} href="https://nomics.com">CRYPTO MARKET CAP &amp; PRICING DATA PROVIDED BY NOMICS</Link>
      </Container>
    </>
  );
};

export default TitleComponent;
