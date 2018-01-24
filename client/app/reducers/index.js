import { combineReducers } from 'redux';

import hubReducers from './hubReducers';
import transactionReducers from './transactionReducers';
import homeBalReducers from './homeBalReducers';
import exchangeReducers from './exchangeReducers';
import newsReducers from './newsReducers';
import marketReducers from './marketReducers';
import completeTransReducers from './completeTransReducers';
import calcReducers from './calcReducers';
import user from './user';
import balancesReducers from './balances';


export default combineReducers({
 hubReducers,
 completeTransReducers,
 transactionReducers,
 homeBalReducers,
 exchangeReducers,
 marketReducers,
 newsReducers,
 calcReducers,
 user,
 balancesReducers,
});
