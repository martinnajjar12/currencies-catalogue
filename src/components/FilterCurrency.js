import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DATA, FILTER } from '../actions';

const FilterCurrency = ({ currency }) => {
  const dispatch = useDispatch();
  const handleFilterChange = name => {
    dispatch(FILTER(name));
  };

  return (
    <Autocomplete
      options={currency}
      getOptionLabel={option => option.name}
      style={{ width: 300 }}
      onChange={e => {
        if (e.target.textContent) {
          handleFilterChange(e.target.textContent);
        } else {
          dispatch(FETCH_DATA());
        }
      }}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          handleFilterChange(e.target.value);
        }
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={params => <TextField {...params} label="Filter Currency" variant="outlined" size="small" />}
    />
  );
};

FilterCurrency.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currency: PropTypes.array.isRequired,
};

export default FilterCurrency;
