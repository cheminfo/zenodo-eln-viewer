import {handleAction} from 'redux-actions';

import {RECORDS_QUERY} from '../actions/types';

export default handleAction(`${RECORDS_QUERY}_FULFILLED`, (state, action) => action.payload, []);
