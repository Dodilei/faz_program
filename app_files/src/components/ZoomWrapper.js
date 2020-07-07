import { Component } from "react";
import React from 'react';

class ZoomWrapper extends Component {
    constructor(props) {
        super(props);
        this.children = props.children;
    }
    
    render() {
        return (
            <div>
                {this.children}
            </div>
        )
    }
}

//finish this

export default ZoomWrapper;