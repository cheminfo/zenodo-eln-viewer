import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import Home from './Home';
import NoMatch from './NoMatch';
import Record from './Record';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Cheminfo - Zenodo ELN viewer" />
                    <div style={{padding: 10}}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/record/:id" component={Record} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
