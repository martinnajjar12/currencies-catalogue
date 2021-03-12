import axios from 'axios';

const baseUrl = `https://api.nomics.com/v1/currencies/ticker?key=${process.env.REACT_APP_API_KEY}&per-page=25&interval=1d&convert=USD&sort=rank`;

const FETCH_DATA_SUCCESSFUL = data => ({
  type: 'FETCH DATA',
  payload: data,
});

const FETCH_DATA = () => dispatch => axios.get(baseUrl)
  .then(({ data }) => dispatch(FETCH_DATA_SUCCESSFUL(data)));

export default FETCH_DATA;
