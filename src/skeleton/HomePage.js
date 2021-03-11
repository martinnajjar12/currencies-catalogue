import { Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import Currencies from './Currencies';
import FeaturedComponent from './FeaturedComponent';
import FilterComponent from './FilterComponent';
import Header from './Header';

const useStyles = makeStyles({
  dividerMargin: {
    marginTop: 25,
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <FilterComponent />
      <FeaturedComponent />
      <Skeleton animation="wave" variant="rect" height={40} className={classes.dividerMargin} />
      <Grid container>
        <Currencies />
        <Currencies />
        <Currencies />
        <Currencies />
        <Currencies />
        <Currencies />
        <Currencies />
        <Currencies />
      </Grid>
    </>
  );
};

export default HomePage;
