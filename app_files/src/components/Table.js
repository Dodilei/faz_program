import { Component } from "react";
import React from 'react';

class TableCell extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        this.seq = props.seq;
        this.state = {};
        this.state.styleClasses = props.styleClasses;
    }

    render() {
        return (
            <td className={'cell'+this.seq}>
                <div className={this.state.styleClasses.join(" ")}>
                    <span>
                        {this.data}
                    </span>
                </div>
            </td>
        )
    }
}

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.description = props.description;
        this.state = {};
        this.state.open = props.open;
        this.state.styleClasses = props.styleClasses;

        //save only modified rows
        //memory improvement? will i need this?
        this.cell_data = props.cellData;
        this.cells = [];
        for (let i = 0; i < this.cell_data.length; i++) {
            let ccell_data = this.cell_data[i];
            this.cells.push(
                <TableCell data={ccell_data.data}
                seq={ccell_data.seq}
                styleClasses={ccell_data.styleClasses}/>
            );
        }
    }

    render() {
        //add this
        if (!this.state.open) {
            return (
                <tr>
                    {this.cells}
                </tr>
            );
        } else {
            //pass
        }
            
    }
};

class STable extends Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.state = {};
        //think about best data placement and delivery
        this.row_data = props.rowData;
        this.rows = [];
        for (let i = 0; i < this.row_data.length; i++) {
            let crow_data = this.row_data[i];
            this.rows.push(
                <TableRow cellData={crow_data.cellData}
                title={crow_data.title}
                description={crow_data.description}
                open={crow_data.open}
                styleClasses={crow_data.styleClasses}/>
            );
        }
    }

    render() {
        return (
            <div id={this.id+"-container"} className="datatb-container">
                <table id={this.id+"-table"} className="datatbl">
                    {this.rows}
                </table>
            </div>
        )
    }
}

export default STable;