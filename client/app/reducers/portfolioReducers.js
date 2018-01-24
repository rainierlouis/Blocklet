const initialState = {
 tokens: {
   token: '',
   quantity: '',
   email: '',
 },
 // sentTrans: []
};

// REDUCER
const portfolioReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_TOKEN':
   return {
    ...state,
    sentTrans: action.data
   };
  // case 'ADD_REC':
  //  return {
  //   ...state,
  //   recTrans: action.data
  //  };
  default:
   return state;
 }
};

export default portfolioReducers;
