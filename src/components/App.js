import React from 'react';
import Header from './Header';
import FeaturedComponent from './FeaturedComponent';
import TitleComponent from './TitleComponent';
import CurrenciesContainer from '../containers/CurrenciesContainer';

require('dotenv').config();

const App = () => (
  <>
    <Header />
    <FeaturedComponent />
    <TitleComponent />
    <CurrenciesContainer />
  </>
);

export default App;
