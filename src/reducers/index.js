import {combineReducers} from 'redux';

import queryReducer from './query';
import recordReducer from './record';
import recordsReducer from './records';

const rootReducer = combineReducers({
    query: queryReducer,
    record: recordReducer,
    records: recordsReducer
});

export default rootReducer;
