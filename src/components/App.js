import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';

class App extends Component {
    render() {
        return (
            <div style={{marginTop: 10}} className="container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}

export default App;
