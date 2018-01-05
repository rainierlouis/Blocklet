import { combineReducers } from 'redux';

import hubReducers from './hubReducers';
import transactionReducers from './transactionReducers';
import exchangeReducers from './exchangeReducers';

export default combineReducers({
 hubReducers,
 transactionReducers,
 exchangeReducers
});
