const initialState = {
 baseCurrency: 'BTC',
 quoteCurrency: 'EUR',
 balance: 0,
 conversionRate: 0,
 date: new Date(),
 rate24: 0,
 rate7: 0
};

// HELPER
const filterCurrency = (state, list) =>
 Number(list.filter(item => item.price_base === state.quoteCurrency)[0].price);

// REDUCER
const reducer = (state = initialState, action) => {
 switch (action.type) {
  case 'ADD_BALANCE':
   return {
    ...state,
    balance: action.balance
   };
  case 'ADD_BTC_RATE':
   return {
    ...state,
    conversionRate: filterCurrency(state, action.conversionRate.prices)
   };
  case 'ADD_TICKERS':
   return {
    ...state,
    rate24: +action.tickerData.percent_change_24h,
    rate7: +action.tickerData.percent_change_7d
   };
  default:
   return state;
 }
};

export default reducer;
