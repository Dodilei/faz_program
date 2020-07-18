function argBinder(func, ...args) {
    return (
        function (...args2) {
            func.call(this, ...args, ...args2)
        }
    );
}

export default argBinder;