import { Container, Paper } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

const Details = ({ currencies }) => {
  const { id } = useParams();
  const thisCurrency = currencies.find(currency => currency.id === id);
  return (
    <Container>
      <Paper>{thisCurrency.rank}</Paper>
      <Paper>{parseFloat(thisCurrency.price).toFixed(2)}</Paper>
      <Paper>{(parseFloat(thisCurrency['1d'].price_change_pct) * 100).toFixed(2)}</Paper>
      <Paper>{thisCurrency.market_cap}</Paper>
      <Paper>{parseFloat(thisCurrency['1d'].volume).toFixed(2)}</Paper>
    </Container>
  );
};

Details.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currencies: PropTypes.array.isRequired,
};

export default Details;
