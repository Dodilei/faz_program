import { Component } from "react";
import React from 'react';
import '../styles/sTable.css';

import SelWrapper from './SelectionWrapper.js'

class TableCell extends Component {
    constructor(props) {
        super(props);
        this.inner_data = props.inner_data;
        this.seq = props.seq;
        this.state = {};
        this.state.styleClasses = props.styleClasses;

        this.state.overflow_child = null;
    }

    CellData(props) {
        let data = props.inner_data;
        let clean_props = {...props};
        delete clean_props.inner_data;
    
        return (
            <div {...props}>
                    <span className="datatb-data">
                        {data}
                    </span>
            </div>
        )
    }

    showOverflow(e, Wrapper) {

        const div = e.currentTarget;
        const cell = div.parentElement;
        const span = div.children[0];

        let cell_style = getComputedStyle(cell);

        if (span.scrollWidth <= span.clientWidth) {return false}

        function cloneRemove(host) {
            this.setState({overflow_child: null});
            clearInterval(host.id);
        }

        let host = {};
        cloneRemove = cloneRemove.bind(this, host);

        function isInside() {
            if (cell_style['z-index'] === '0') {cloneRemove()}
        }

        host.id = setInterval(isInside, 100);

        let clone = <this.CellData
            className={this.state.styleClasses.concat('datatb-hovercell').join(" ")}
            inner_data={this.inner_data}
            onMouseLeave={cloneRemove}
        />;

        let wrapper = Wrapper ? <SelWrapper>{clone}</SelWrapper> : clone;

        this.setState({
            overflow_child: wrapper
        });
    }

    render() {
        return (
            <td className={'datatb-cell '+'cell'+this.seq}>
                <this.CellData
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