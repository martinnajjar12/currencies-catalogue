import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import HideOnScroll from '../containers/HideOnScroll';

const Header = () => (
  <>
    <HideOnScroll>
      <AppBar color="inherit">
        <Toolbar>
          <Container>
            <Typography variant="h5">Currencies Catalogue</Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    <Toolbar />
  </>
);

export default Header;
