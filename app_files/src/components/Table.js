import { Component } from "react";
import React from 'react';
import '../stylesheets/comps/Table.scss';

import SelWrapper from './SelectionWrapper.js'

// ADD ~IDS TO ROWS AND CELLS
// MAKE EVENTS A PROP GOT FROM MAIN TABLE

class TableCell extends Component {

    constructor(props) {

        super(props);
        this.state = {};

        this.row = props.row;

        this.inner_data = props.inner_data;
        this.seq = props.seq;
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

        let wrapper = Wrapper ? <Wrapper>{clone}</Wrapper> : clone;

        this.setState({
            overflow_child: wrapper
        });
    }

    render() {
        return (
            <div className={'datatb-cell '+'cell'+this.seq}>

                <this.CellData
                    onClick ={(e) => {
                        this.showOverflow.bind(this)(e, SelWrapper)
                        }}
                    className ={this.state.styleClasses.join(' ')}
                    inner_data ={this.inner_data}
                 />

                {this.state.overflow_child}

            </div>
        )
    }
}


class TableRow extends Component {

    constructor(props) {

        super(props);
        this.state = {};
        
        this.table = props.table;

        this.title = props.title;
        this.description = props.description;
        this.state.open = props.open;
        this.state.styleClasses = props.styleClasses;

        //save only modified rows
        //memory improvement? will i need this?
        this.cellsData = props.cellsData;
        this.cells = [];
        for (let i = 0; i < this.cellsData.length; i++) {

            let cellData = this.cellsData[i];

            this.cells.push(

                <TableCell
                    inner_data ={cellData.inner_data}
                    seq ={i}
                    styleClasses ={cellData.styleClasses}
                    row ={this}
                />
            );
        }
    }

    render() {
        //add this
        if (!this.state.open) {
            return (
                <div className={this.state.styleClasses.concat('datatb-row').join(" ")}>
                    {this.cells}
                </div>
            );
        } else {
            //pass
        }  
    }
};


class Table extends Component {

    constructor(props) {

        super(props);
        this.state = {};

        this.id = props.id;

        //think about best data placement and delivery
        this.rowsData = props.rowsData;
        this.rows = [];
        for (let i = 0; i < this.rowsData.length; i++) {

            let rowData = this.rowsData[i];

            this.rows.push(

                <TableRow
                    cellsData ={rowData.cellsData}
                    title ={rowData.title}
                    description ={rowData.description}
                    open ={rowData.open}
                    styleClasses ={rowData.styleClasses}
                    table ={this}
                />
            );
        }
    }

    render() {
        return (
            <div id={this.id+"-container"} className="datatb-container">
                <div id={this.id+"-table"} className="datatb">
                        {this.rows}
                </div>
            </div>
        )
    }
}


export default Table;