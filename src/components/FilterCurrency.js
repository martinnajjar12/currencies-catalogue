import {
  Container, makeStyles, TextField,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FETCH_DATA, FILTER } from '../actions';

const useStyles = makeStyles({
  root: {
    margin: '25px auto',
    borderColor: '#fff',
    '& label': {
      color: '#fff',
    },
    '& button': {
      color: '#fff',
    },
    '& fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused label': {
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      borderColor: '#fff',
      '&.Mui-focused fieldset': {
        border: '1px solid #fff',
      },
    },
  },
});

const FilterCurrency = ({ currency }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFilterChange = name => {
    dispatch(FILTER(name));
  };

  return (
    <Container>
      <Autocomplete
        className={classes.root}
        options={currency}
        getOptionLabel={option => option.name}
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
        renderInput={params => <TextField className={classes.root} {...params} label="Filter Currency" variant="outlined" size="small" />}
      />
    </Container>
  );
};

FilterCurrency.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currency: PropTypes.array.isRequired,
};

export default FilterCurrency;