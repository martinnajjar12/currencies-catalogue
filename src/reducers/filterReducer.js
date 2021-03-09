const initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return 'filter';
    case 'LOADING':
      return 'loading';
    case 'FETCH DATA':
      return [...action.payload];
    default:
      return state;
  }
};

export default filterReducer;
