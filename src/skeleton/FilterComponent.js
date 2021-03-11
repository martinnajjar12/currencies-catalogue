import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles({
  inputMargin: {
    margin: '20px 0',
  },
});

const FilterComponent = () => {
  const classes = useStyles();
  return (
    <Skeleton animation="wave" variant="rect" height={50} className={classes.inputMargin} />
  );
};

export default FilterComponent;
