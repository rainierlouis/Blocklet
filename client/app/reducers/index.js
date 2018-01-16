import { combineReducers } from 'redux';

import hubReducers from './hubReducers';
import transactionReducers from './transactionReducers';
import homeBalReducers from './homeBalReducers';
import exchangeReducers from './exchangeReducers';
import newsReducers from './newsReducers';
import marketReducers from './marketReducers';
import completeTransReducers from './completeTransReducers';

export default combineReducers({
 hubReducers,
 completeTransReducers,
 transactionReducers,
 homeBalReducers,
 exchangeReducers,
 marketReducers,
 newsReducers
});
