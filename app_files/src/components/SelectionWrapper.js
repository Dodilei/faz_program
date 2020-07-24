import { Component } from "react";
import React from 'react';

class SelectionWrapper extends Component {

    constructor(props) {

        super(props);
        this.children = props.children;
    }

    makeSelection(e) {

        const el = e.currentTarget;

        let selection = window.getSelection();
        selection.empty();

        let range = new Range();
        range.setStartBefore(el);
        range.setEndAfter(el);

        selection.addRange(range);
    }
    
    render() {
        return (
            <div onClick={this.makeSelection}>
                {this.children}
            </div>
        )
    }
}

//finish this

export default SelectionWrapper;