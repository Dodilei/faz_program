import React from 'react';

function showOverflow(e, Wrapper) {

    const div = e.currentTarget;
    const cell = div.parentElement;
    const span = div.children[0];

    if (span.scrollWidth <= span.clientWidth) {
        return false;
    }

    let clone = div.cloneNode(true);
    clone.classList.add('datatb-hovercell');

    let wrapper = null;
    if (Wrapper) {
        wrapper = <Wrapper>{clone}</Wrapper>;
    } else {
        wrapper = <div>{clone}</div>;
    }

    this.setState({
        overflow_child: wrapper
    }
    );

    let cell_style = getComputedStyle(cell);

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

    clone.addEventListener("mouseleave", function() {
        cloneRemove(host);
    });

}

export default showOverflow;