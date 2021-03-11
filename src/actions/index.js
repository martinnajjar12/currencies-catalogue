import axios from 'axios';

const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;

const LOADING = data => ({
  type: 'LOADING',
  payload: data,
});

const FETCH_DATA = ({ data }) => {
  const request = axios.get(baseUrl);
  return dispatch => {
    request.then(() => {
      dispatch({
        type: 'FETCH DATA',
        payload: data,
      });
    });
  };
};

const FILTER = currency => ({
  type: 'FILTER',
  payload: currency,
});

export { LOADING, FETCH_DATA, FILTER };
