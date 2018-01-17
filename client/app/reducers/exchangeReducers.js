const initialState = {
 data1h: [555, 634, 607, 583, 571, 590, 601, 665, 668, 690, 667, 645.11],
 data24h: [345, 364, 444, 434, 457, 353, 456, 334, 456, 534, 567, 550.59],
 data7d: [824, 831, 482, 693, 822, 543, 567, 688, 644, 622, 604, 590.91],
 data1m: [943, 933, 922, 911, 928, 945, 934, 925, 905, 889, 876, 861.83],
 ticker24h: -3.62,
 ticker1h: -2.55,
 ticker7d: -2.75,
 ticker1m: -1.44
};

// REDUCER
const exchangeReducers = (state = initialState, action) => {
 switch (action.type) {
  case 'DATA_1H':
   return {
    ...state,
    data1h: action.data
   };
  case 'DATA_24H':
   return {
    ...state,
    data24h: action.data
   };
  case 'DATA_7D':
   return {
    ...state,
    data7d: action.data
   };
  case 'DATA_1M':
   return {
    ...state,
    data1m: action.data
   };
  case 'TICKER':
   return {
    ...state,
    ticker24h: action.data.percent_change_24h,
    ticker1h: action.data.percent_change_1h,
    ticker7d: action.data.percent_change_7d
   };
  default:
   return state;
 }
};

export default exchangeReducers;
