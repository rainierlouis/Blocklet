const initialState = {
 baseCurrency: 'BTC',
 quoteCurrency: 'EUR',
 balance: 0,
 conversionRate: 0,
 date: new Date(),
 rate24: 0,
 rate7: 0,
 lastTrans: []
};

// HELPER
const filterCurrency = (state, list) =>
 Number(list.filter(item => item.price_base === state.quoteCurrency)[0].price);

const uniqueArr = (arr, prop) =>
 arr.filter(
  (obj, i, list) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === i
 );

const createList = (state, list) =>
 uniqueArr(state.lastTrans.concat(list), 'txid');

// REDUCER
const hubReducers = (state = initialState, action) => {
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
    rate24: +action.data.percent_change_24h,
    rate7: +action.data.percent_change_7d
   };
  case 'ADD_SENT_TRANS':
   return {
    ...state,
    lastTrans: createList(state, action.sentData)
   };
  case 'ADD_REC_TRANS':
   return {
    ...state,
    lastTrans: createList(state, action.recData)
   };
  default:
   return state;
 }
};

export default hubReducers;
