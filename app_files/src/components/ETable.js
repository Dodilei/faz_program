import { Component } from "react";
import React from 'react';

import {OutTable, ExcelRenderer} from 'react-excel-renderer';

class ETable extends Component {

    constructor(props) {

        super(props);
        this.file = props.file;

        this.state = {}
        ExcelRenderer(this.file, (err, resp) => {
            if (err) {console.log(err)}
            else {this.setState({cols: resp.cols, rows: resp.rows})}
            }
        );
    }

    render() {
        return (
            <OutTable
                data={this.state.rows}
                columns={this.state.cols}
                >
            </OutTable>
        )
    }
}

export default ETable;