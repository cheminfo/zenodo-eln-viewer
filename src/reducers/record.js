import {handleActions} from 'redux-actions';

import {RECORD_FETCH} from '../actions/types';

export default handleActions({
    [`${RECORD_FETCH}_PENDING`]: () => null,
    [`${RECORD_FETCH}_FULFILLED`]: (state, action) => action.payload
}, null);
