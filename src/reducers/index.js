import {combineReducers} from 'redux';

import queryReducer from './query';
import recordReducer from './record';

const rootReducer = combineReducers({
    query: queryReducer,
    record: recordReducer
});

export default rootReducer;
