"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFunctionChain = void 0;
// allows you to handle function chaining by registering multiple functions
// that take a next argument as their last argument. Each function may 
// call the next function if it doesn't handle the argument.
const createFunctionChain = () => {
    const handlers = [];
    const registerHandler = (fn) => {
        handlers.push(fn);
    };
    const handle = (...args) => {
        let i = 0;
        const next = () => {
            const fn = handlers[i++];
            if (fn)
                fn(...args, next);
        };
        next();
    };
    return { registerHandler, handle };
};
exports.createFunctionChain = createFunctionChain;
//# sourceMappingURL=next.js.map