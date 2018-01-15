const initialState = {
 marketData: []
};

// REDUCER
const marketReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_MARKET':
   return {
    ...state,
    marketData: action.data
   };
  default:
   return state;
 }
};

export default marketReducers;
