const initialState = {
 hubLoaded: false,
 loaded: false,
 baseCurrency: 'BTC',
 quoteCurrency: 'USD',
 balance: 0,
 conversionRate: 0,
 date: new Date(),
 rate24: 0,
 rate7: 0,
 lastTrans: [],
 dogeToBtc: '',
 btcToUsd: ''
};

// HELPER
const filterCurrency = (state, list) => {
 let res = list.filter(item => {
  return item.price_base === state.quoteCurrency ? item : false;
 });
 return res.length !== 0 ? +res[0].price : +list[0].price;
};

const uniqueArr = (arr, prop) =>
 arr
  .slice()
  .filter(
   (obj, i, list) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === i
  );

const createList = (state, list) =>
 uniqueArr(state.lastTrans.concat(list), 'txid');

// REDUCER
const hubReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'RESET_HUB_LOAD':
   return {
    ...state,
    hubLoaded: false
   };
  case 'RESET_TICK':
   return {
    ...state,
    rate24: 0,
    rate7: 0
   };
  case 'RESET_TRANS':
   return {
    ...state,
    lastTrans: []
   };
  case 'HUB_LOADED':
   return {
    ...state,
    hubLoaded: action.bool
   };
  case 'LOADED':
   return {
    ...state,
    loaded: action.bool
   };
  case 'SET_BASE':
   return {
    ...state,
    baseCurrency: action.currency
   };
  case 'ADD_BALANCE':
   return {
    ...state,
    balance: action.balance
   };
  case 'ADD_RATE':
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
  case 'DOGE_TO_BTC':
   return {
    ...state,
    dogeToBtc: action.data
   };
  case 'BTC_TO_USD':
   return {
    ...state,
    btcToUsd: action.data
   };
  default:
   return state;
 }
};

export default hubReducers;
