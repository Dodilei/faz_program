import { Component } from "react";
import React from 'react';
import '../styles/sTable.css';

import Wrapper from './ZoomWrapper.js'

class CellData extends Component {
    constructor(props) {
        super(props);
        this.atts = {...props};
        this.data = props.inner_data;
        delete this.props.data;
    }

    render() {
        return (
        <div {...this.atts}>
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
        this.inner_data = props.inner_data;
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
            className={this.state.styleClasses.concat('datatb-hovercell').join(" ")}
            inner_data={this.inner_data}
            onMouseLeave={cloneRemove.bind(null, this, host)}
        />;

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
                <CellData
                    onClick={(e) => {this.showOverflow.bind(this)(e, Wrapper)}}
                    className={this.state.styleClasses.join(' ')}
                    inner_data={this.inner_data}
                 />
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
        this.cellsData = props.cellsData;
        this.cells = [];
        for (let i = 0; i < this.cellsData.length; i++) {
            let cellData = this.cellsData[i];
            this.cells.push(
                <TableCell inner_data={cellData.inner_data}
                seq={i}
                styleClasses={cellData.styleClasses}/>
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
        this.rowsData = props.rowsData;
        this.rows = [];
        for (let i = 0; i < this.rowsData.length; i++) {
            let rowData = this.rowsData[i];
            this.rows.push(
                <TableRow cellsData={rowData.cellsData}
                title={rowData.title}
                description={rowData.description}
                open={rowData.open}
                styleClasses={rowData.styleClasses}/>
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