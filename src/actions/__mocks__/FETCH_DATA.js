const FETCH_DATA = () => {
  const request = Promise.resolve({ name: 'test', rank: '1' });
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
