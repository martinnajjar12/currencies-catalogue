import { Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles({
  gridPadding: {
    padding: 20,
  },
});

const Currencies = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.gridPadding}>
      <Grid container justify="center">
        <Skeleton animation="wave" variant="circle" width={60} height={60} />
      </Grid>
      <Grid container justify="flex-end">
        <Skeleton animation="wave" variant="text" width="80%" />
        <Skeleton animation="wave" variant="text" width="40%" />
      </Grid>
    </Grid>
  );
};

export default Currencies;
