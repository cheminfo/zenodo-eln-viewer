import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Table,
    TableHeader,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import {queryRecords} from '../actions/record';

class Home extends Component {
    componentWillMount() {
        this.props.queryRecords(this.props.sandbox);
    }

    render() {
        if (this.props.records.length === 0) return <div>Nothing to show...</div>;
        return (
            <div>
                <Table
                    selectable={false}
                    onCellClick={(row) => this.props.history.push(`/record/${this.props.records[row].id}${this.props.location.search}`)}
                >
                    <TableHeader
                        displaySelectAll={false}
                        enableSelectAll={false}
                        adjustForCheckbox={false}
                    >
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {this.props.records.map(insertRow)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

function insertRow(record) {
    return (
        <TableRow key={record.id}>
            <TableRowColumn>{record.id}</TableRowColumn>
            <TableRowColumn>{record.metadata.description}</TableRowColumn>
        </TableRow>
    );
}

function mapStateToProps(state) {
    return {
        sandbox: !!state.query.sandbox,
        records: state.records
    };
}

export default connect(mapStateToProps, {queryRecords})(Home);
