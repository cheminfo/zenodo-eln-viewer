import React from 'react';

import OCL from 'openchemlib/minimal';
import {SvgRenderer} from 'react-ocl';
import {
    Table,
    TableHeader,
    TableBody,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import ExperimentalPart from './ExperimentalPart';

export default function EntriesToc({entries}) {
    if (entries.length === 0) {
        return <div>No entries found in this record</div>;
    }
    return (
        <div>
            <h4>Table of contents</h4>
            <Table
                selectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                    enableSelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Structure</TableHeaderColumn>
                        <TableHeaderColumn>Experimental part</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {entries.map(showEntry)}
                </TableBody>
            </Table>
        </div>
    );
}

function showEntry(entry, i) {
    return (
        <TableRow key={i}>
            <TableRowColumn>{entry.general.description}</TableRowColumn>
            <TableRowColumn>
                <SvgRenderer OCL={OCL} molfile={entry.general.molfile} />
            </TableRowColumn>
            <TableRowColumn>
                <ExperimentalPart entry={entry} />
            </TableRowColumn>
        </TableRow>
    );
}
