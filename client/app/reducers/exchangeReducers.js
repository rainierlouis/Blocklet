const initialState = {
 exchange: []
};

// REDUCER
const exchangeReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_EXCH':
   return {
    ...state,
    exchange: action.data
   };

  default:
   return state;
 }
};

export default exchangeReducers;
