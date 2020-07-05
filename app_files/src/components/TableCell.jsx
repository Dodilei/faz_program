import { Component } from "react";

class TableCell extends Component {
    constructor(props) {
        this.data = props.data;
        this.seq = props.seq;
        this.state = {};
        this.state.styleClasses = props.styleClasses;
    };

    render() {
        return (
            <td className={this.seq}>
                <div className={this.state.styleClasses.join(" ")}>
                    <span>
                        {this.data}
                    </span>
                </div>
            </td>
        )
    };
};