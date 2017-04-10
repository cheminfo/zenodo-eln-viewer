import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchRecord} from '../actions/record';

class Record extends Component {
    componentWillMount() {
        this.props.fetchRecord(this.props.match.params.id, this.props.sandbox);
    }

    render() {
        return <div>Record {this.props.match.params.id}</div>
    }
}

function mapStateToProps(state) {
    return {
        sandbox: !!state.query.sandbox
    };
}

export default connect(mapStateToProps, {fetchRecord})(Record);
