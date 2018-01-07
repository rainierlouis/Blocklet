const initialState = {
 loaded: false,
 btcBal: 0,
 ltcBal: 0,
 dogeBal: 0
};

// REDUCER
const exchangeReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'LOADED':
   return {
    ...state,
    loaded: true
   };
  case 'GET_BTC_BAL':
   return {
    ...state,
    btcBal: action.data
   };
  case 'GET_LTC_BAL':
   return {
    ...state,
    ltcBal: action.data
   };
  case 'GET_DOGE_BAL':
   return {
    ...state,
    dogeBal: action.data
   };
  default:
   return state;
 }
};

export default exchangeReducers;
