import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/App';
import reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware()
)(createStore);

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router
            // basename={optionalString}
            // forceRefresh={optionalBool}
            // getUserConfirmation={optionalFunc}
            // keyLength={optionalNumber}
        >
            {/*https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md*/}
            <Route render={({location}) => <App location={location} />} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
