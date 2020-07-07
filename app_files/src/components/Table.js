import { Component } from "react";
import React from 'react';
import '../styles/sTable.css';

import Wrapper from './ZoomWrapper.js'

class CellData extends Component {
    constructor(props) {
        super(props);
        this.onClick = props.onClick;
        this.styleClasses = props.style;
        this.classes = props.classes ? props.classes : [];
        this.data = props.data;
        this.atts = props.atts;
    }

    render() {
        return (
        <div onClick={this.onClick}
            className={this.styleClasses.concat(this.classes).join(" ")} {...this.atts}>
                <span className="datatb-data">
                    {this.data}
                </span>
        </div>
        )
    }
}

class TableCell extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        this.seq = props.seq;
        this.state = {};
        this.state.styleClasses = props.styleClasses;

        this.state.overflow_child = null;
    }

    showOverflow(e, Wrapper) {

        const div = e.currentTarget;
        const cell = div.parentElement;
        const span = div.children[0];

        if (span.scrollWidth <= span.clientWidth) {
            return false;
        }

        function cloneRemove(cell, host) {
            cell.reset();
            clearInterval(host.id);
        }

        function isInside(host) {
            if (cell_style['z-index'] === '0') {
                cloneRemove(this, host);
            }
        }

        let host = {};
        host.id = setInterval(isInside.bind(this, host), 100);

        let clone = <CellData
        style={this.state.styleClasses}
        classes={'datatb-hovercell'}
        data={this.data}
        atts={{
            onMouseLeave: cloneRemove.bind(null, this, host)
            }
        } />;

        let wrapper = null;
        if (Wrapper) {
            wrapper = <Wrapper>{clone}</Wrapper>;
        } else {
            wrapper = <div>{clone}</div>;
        }

        this.setState({
            overflow_child: wrapper
        });

        let cell_style = getComputedStyle(cell);

    }

    reset() {
        this.setState(
                {
                    overflow_child: null
                }
            )
    }

    render() {
        return (
            <td className={'datatb-cell '+'cell'+this.seq}>
                <CellData onClick={(e) => {this.showOverflow.bind(this)(e, Wrapper)}} style={this.state.styleClasses} data={this.data}/>
                {this.state.overflow_child}
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
                seq={i}
                styleClasses={ccell_data.styleClasses}/>
            );
        }
    }

    render() {
        //add this
        if (!this.state.open) {
            return (
                <tr className={this.state.styleClasses.concat('datatb-row').join(" ")}>
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
                <table id={this.id+"-table"} className="datatb">
                    <tbody>
                        {this.rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default STable;