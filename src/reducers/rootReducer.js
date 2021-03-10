const initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return [state.find(currency => currency.name === action.payload)];
    case 'LOADING':
      return [];
    case 'FETCH DATA':
      return [...action.payload];
    default:
      return state;
  }
};

export default filterReducer;
