import React from 'react';
import PropTypes from 'prop-types';
import CurrencyDetails from './CurrencyDetails';

const Currency = ({ data }) => (
  <>
    <CurrencyDetails data={data} />
  </>
);

Currency.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
};

export default Currency;
