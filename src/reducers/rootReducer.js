const initialState = [];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return [state.find(currency => currency.name === action.payload)];
    case 'FETCH DATA':
      return [...action.payload];
    default:
      return state;
  }
};

export default rootReducer;
