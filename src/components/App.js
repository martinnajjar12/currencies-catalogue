import React from 'react';
import {
  Container,
} from '@material-ui/core';
import Header from './Header';
import FeaturedComponent from './FeaturedComponent';

const App = () => (
  <>
    <Header />
    <Container>
      <FeaturedComponent />
    </Container>
  </>
);

export default App;
