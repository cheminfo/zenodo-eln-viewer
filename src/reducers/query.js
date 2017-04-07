import {handleAction} from 'redux-actions';

import {SET_QUERY} from '../actions/types';

export default handleAction(SET_QUERY, (state, action) => action.payload, {});
