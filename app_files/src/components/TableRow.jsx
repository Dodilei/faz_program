import { Component } from "react";

class TableRow extends Component {
    constructor(props) {
        this.title = props.title;
        this.description = props.description;
        this.state = {};
        this.state.open = props.open;
        this.state.styleClasses = props.styleClasses;

        //save only modified rows
        //memory improvement? will i need this?
        this.cell_data = props.cell_data;
        this.cells = [];
        for (let i = 0; i < this.cell_data.length; i++) {
            let ccell_data = this.cell_data[i];
            this.cells.push(
                <TableCell data={ccell_data.data}
                seq={ccell_data.seq}
                styleClasses={ccell_data.styleClasses}/>
            );
        };
    };

    render() {
        //add this
        if (!this.state.open) {
            return (
                <tr>
                    {this.cells}
                </tr>
            );
        } else {
            1===1;
        };
            
    };
};