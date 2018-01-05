const initialState = {
 recTrans: [],
 sentTrans: []
};

// REDUCER
const transactionReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_SENT':
   return {
    ...state,
    sentTrans: action.data
   };
  case 'ADD_REC':
   return {
    ...state,
    recTrans: action.data
   };
  default:
   return state;
 }
};

export default transactionReducers;
