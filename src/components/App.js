import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Home';
import NoMatch from './NoMatch';
import Record from './Record';

class App extends Component {
    render() {
        return (
            <div style={{marginTop: 10}} className="container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/record/:id" component={Record} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}

export default App;
