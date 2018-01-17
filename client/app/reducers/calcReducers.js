const initialState = {
 amount: 0,
 convRate: 0,
 conversion: 0
};

// REDUCER
const calcReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'CONV_RATE':
   return {
    ...state,
    convRate: action.data
   };
  case 'AMOUNT':
   return {
    ...state,
    amount: action.data
   };
  case 'CONVERTED':
   return {
    ...state,
    conversion: action.data
   };
  default:
   return state;
 }
};

export default calcReducers;
