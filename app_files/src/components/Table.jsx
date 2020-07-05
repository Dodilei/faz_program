import { Component } from "react";

class STable extends Component {
    constructor(props) {
        this.id = props.id;
        this.state = {};
        //think about best data placement and delivery
        this.row_data = props.row_data;
        this.rows = [];
        for (let i = 0; i < this.row_data.length; i++) {
            let crow_data = this.row_data[i];
            this.rows.push(
                <TableRow cell_data={crow_data.cell_data}
                title={crow_data.title}
                description={crow_data.description}
                open={crow_data.open}
                styleClasses={crow_data.styleClasses}/>
            );
        };
    }

    render() {
        return (
            <div id={this.id+"-container"} className="datatb-container">
                <table id={this.id+"-table"} className="datatbl">
                    {this.rows}
                </table>
            </div>
        )
    };
};