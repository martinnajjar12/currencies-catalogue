import axios from 'axios';

const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;

const FETCH_DATA = () => {
  const request = axios.get(baseUrl);
  return dispatch => {
    request.then(({ data }) => {
      dispatch({
        type: 'FETCH DATA',
        payload: data,
      });
    });
  };
};

export default FETCH_DATA;
