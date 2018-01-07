import { combineReducers } from 'redux';

import hubReducers from './hubReducers';
import transactionReducers from './transactionReducers';
import homeBalReducers from './homeBalReducers';
import exchangeReducers from './exchangeReducers';

export default combineReducers({
 hubReducers,
 transactionReducers,
 homeBalReducers,
 exchangeReducers
});
