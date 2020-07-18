import { Component } from "react";
import React from 'react';
import '../stylesheets/comps/Table.scss';

class TableCell extends Component {

    constructor(props) {

        super(props);
        this.state = {};

        this.row = props.row;

        this.inner_data = props.inner_data;
        this.seq = props.seq;

        this.state.styleClasses = props.styleClasses;

        this.userEvents = {}
        for (let i = 0; i<Object.keys(props.userEvents).length; i++) {
            this.userEvents[Object.keys(props.userEvents)[i]] = (
                Object.entries(props.userEvents)[i][1].bind(this)
                );
        }

        this.userEvents = {}
        for (let i = 0; i<Object.keys(props.userEvents).length; i++) {
            this.userEvents[Object.keys(props.userEvents)[i]] = (
                Object.entries(props.userEvents)[i][1].bind(this)
                );
        }

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

    render() {
        return (
            <div className={'datatb-cell '+'cell'+this.seq}>

                <this.CellData
                    className ={this.state.styleClasses.join(' ')}
                    inner_data ={this.inner_data}
                    {...this.userEvents}
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
        this.userEvents = {}
        for (let i = 0; i<Object.keys(props.userEvents).length; i++) {
            this.userEvents[Object.keys(props.userEvents)[i]] = (
                Object.entries(props.userEvents)[i][1].bind(this)
                );
        }
        this.cellEvents = props.cellEvents;

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
                    userEvents ={this.cellEvents}

                    row ={this}
                />
            );
        }
    }

    render() {
        //add this
        if (!this.state.open) {
            return (
                <div
                className ={this.state.styleClasses.concat('datatb-row').join(" ")}
                {...this.userEvents}
                >
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

        this.userEvents = props.userEvents;

        //think about best data placement and delivery
        this.rowsData = props.rowsData;
        this.rows = [];
        for (let i = 0; i < this.rowsData.length; i++) {

            let rowData = this.rowsData[i];

            this.rows.push(

                <TableRow
                    cellsData ={rowData.cellsData}
                    cellEvents ={this.userEvents.cell}

                    title ={rowData.title}
                    description ={rowData.description}

                    open ={rowData.open}

                    styleClasses ={rowData.styleClasses}
                    userEvents ={this.userEvents.row}

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
