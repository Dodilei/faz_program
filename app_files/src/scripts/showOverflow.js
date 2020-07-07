import React from 'react';

function showOverflow(e) {

    const div = e.currentTarget;
    const cell = div.parentElement;
    const span = div.children[0];

    if (span.scrollWidth <= span.clientWidth) {
        return false;
    }

    let clone = div.cloneNode(true);
    clone.classList.add('datatb-hovercell');

    cell.appendChild(clone);

    let cell_style = getComputedStyle(cell);

    function cloneRemove(host) {
        clone.remove();
        clearInterval(host.id);
    }

    function isInside(host) {
        if (cell_style['z-index'] === '0') {
            cloneRemove(host);
        }
    }

    let host = {};
    host.id = setInterval(isInside.bind(null, host), 100);

    clone.addEventListener("mouseleave", function() {
        cloneRemove(host);
    });

}

export default showOverflow;