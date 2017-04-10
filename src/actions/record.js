import {createAction} from 'redux-actions';
import superagent from 'superagent';

import {RECORD_FETCH} from './types';

const ZENODO_URL = 'https://zenodo.org/api/';
const ZENODO_SANDBOX_URL = 'https://sandbox.zenodo.org/api/';

export const fetchRecord = createAction(RECORD_FETCH, (id, sandbox) => {
    const url = getUrl(`records/${id}`, sandbox);
    return superagent.get(url).then(r => r.body);
});

function getUrl(url, sandbox) {
    const base = sandbox ? ZENODO_SANDBOX_URL : ZENODO_URL;
    return base + url;
}
