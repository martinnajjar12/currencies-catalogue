import { Container, Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

const CurrenciesContainer = ({ currencies }) => {
  const dataWithoutFirstCurrency = currencies.filter(currency => currency.rank !== '1');
  return (
    <Container disableGutters>
      <Grid container>
        <Currency data={dataWithoutFirstCurrency} />
      </Grid>
    </Container>
  );
};

CurrenciesContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currencies: PropTypes.array.isRequired,
};

export default CurrenciesContainer;
