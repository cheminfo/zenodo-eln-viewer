import {handleAction} from 'redux-actions';

import {RECORD_FETCH} from '../actions/types';

export default handleAction(`${RECORD_FETCH}_FULFILLED`, (state, action) => action.payload, null);
