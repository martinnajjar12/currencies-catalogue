import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const FeaturedComponent = () => (
  <Grid container justify="space-around" alignItems="center">
    <Grid item>
      <Skeleton animation="wave" variant="circle" width={80} height={80} />
    </Grid>
    <Grid item>
      <Skeleton animation="wave" variant="text" width={200} height={60} />
      <Skeleton animation="wave" variant="text" width={100} />
    </Grid>
  </Grid>
);

export default FeaturedComponent;
