import React, {Component} from 'react';
import {connect} from 'react-redux';

import Divider from 'material-ui/Divider';

import EntriesToc from './EntriesToc';

import {fetchRecord} from '../actions/record';

class Record extends Component {
    componentWillMount() {
        this.props.fetchRecord(this.props.match.params.id, this.props.sandbox);
    }

    render() {
        if (!this.props.record) return null;
        if (this.props.record.error) {
            return (
                <div>
                    Could not load this record ({this.props.record.error})
                </div>
            )
        }
        const data = this.props.record;
        const meta = data.metadata;
        return (
            <div>
                <h1>{meta.title}</h1>
                <Divider />
                <h3>{meta.description}</h3>
                <div>
                    <h5>Authors</h5>
                    <ul>
                        {meta.creators.map(showCreator)}
                    </ul>
                </div>
                <Divider />
                <EntriesToc entries={data.entries} />
            </div>
        );
    }
}

function showCreator(creator) {
    return (
        <li key={creator.name}>
            {creator.name}
        </li>
    );
}

function showToc(toc) {
    return (
        <li key={toc.id}>{toc.id}</li>
    );
}

function mapStateToProps(state) {
    return {
        sandbox: !!state.query.sandbox,
        record: state.record
    };
}

export default connect(mapStateToProps, {fetchRecord})(Record);
