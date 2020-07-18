import React from 'react';

function showOverflow(Wrapper, e) {

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

export {showOverflow};