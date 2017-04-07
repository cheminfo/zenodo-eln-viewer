import {combineReducers} from 'redux';

import queryReducer from './query';

const rootReducer = combineReducers({
    query: queryReducer
});

export default rootReducer;
