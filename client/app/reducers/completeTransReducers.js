const initialState = {
 amount: 0,
 fee: 0
};

// REDUCER
const completeTransReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_FEE':
   return {
    ...state,
    fee: action.fee
   };
  case 'ADD_AMOUNT':
   return {
    ...state,
    amount: action.amount
   };
  case 'RESET_DATA':
   return {
    ...state,
    fee: 0,
    amount: 0
   };
  default:
   return state;
 }
};

export default completeTransReducers;
