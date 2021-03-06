import {createAction} from 'redux-actions';
import superagent from 'superagent';

import {RECORD_FETCH, RECORDS_QUERY} from './types';

const ZENODO_URL = 'https://zenodo.org/api/';
const ZENODO_SANDBOX_URL = 'https://sandbox.zenodo.org/api/';

export const fetchRecord = createAction(RECORD_FETCH, async (id, sandbox) => {
    const url = getUrl(`records/${id}`, sandbox);
    const data = await superagent.get(url).then(r => r.body);
    const bucketLink = data.links.bucket;
    const bucket = data.bucket = await superagent.get(bucketLink).then(r => r.body);

    const attachments = {};
    const bucketUrl = bucket.links.self + '/';
    const entries = [];
    for (const attachment of bucket.contents) {
        const path = attachment.links.self.replace(bucketUrl, '');
        if (path === 'index.json') {
            data.toc = await superagent.get(attachment.links.self).then(r => r.body);
            continue;
        } else if (path.endsWith('index.json')) {
            entries.push(superagent.get(attachment.links.self).then(r => r.body));
            continue;
        }
        attachments[path] = attachment;
    }
    data.entries = await Promise.all(entries);
    data.attachments = attachments;

    return data;
});

export const queryRecords = createAction(RECORDS_QUERY, async (sandbox) => {
    const url = getUrl('records?sort=bestmatch&q=keywords%3Acheminfo&page=1&size=100', sandbox);
    const data = await superagent.get(url).then(r => r.body);
    return data.hits.hits;
});

function getUrl(url, sandbox) {
    const base = sandbox ? ZENODO_SANDBOX_URL : ZENODO_URL;
    return base + url;
}
