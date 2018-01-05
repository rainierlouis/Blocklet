import { combineReducers } from 'redux';

import hubReducers from './hubReducers';
import transactionReducers from './transactionReducers';

export default combineReducers({
 hubReducers,
 transactionReducers
});
