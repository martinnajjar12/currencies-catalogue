import {
  AppBar,
  Container,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import HideOnScroll from '../utils/HideOnScroll';

const useStyles = makeStyles({
  bg: {
    backgroundColor: '#ec4c8b',
  },
  anchor: {
    color: '#fff',
    textDecoration: 'none',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll>
        <AppBar className={classes.bg}>
          <Toolbar>
            <Container>
              <Link to="/" className={classes.anchor}>
                <Typography variant="h6">Currencies Catalogue</Typography>
              </Link>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <CssBaseline />
    </>
  );
};

export default Header;
