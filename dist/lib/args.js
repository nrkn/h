"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textFromArg = exports.handleChildArg = exports.handleArg = void 0;
const predicates_1 = require("./predicates");
const next_1 = require("./next");
const noop = () => { };
const handleArg = (el, arg) => (0, exports.handleChildArg)(el, arg, () => handleObjectArg(el, arg));
exports.handleArg = handleArg;
const handleChildArg = (el, arg, next = noop) => {
    if (typeof arg === 'string')
        arg = document.createTextNode(arg);
    if ((0, predicates_1.isNode)(arg))
        return el.appendChild(arg);
    next();
};
exports.handleChildArg = handleChildArg;
const handleObjectArg = (el, arg) => {
    // arg cannot be string by this point but ts doesn't know that, hence cast
    for (const key in arg) {
        chain.handle(el, key, arg[key]);
    }
};
const textFromArg = (arg) => typeof arg === 'string' ?
    arg :
    (0, predicates_1.isTextNode)(arg) ?
        arg.data :
        (0, predicates_1.isElement)(arg) && arg.textContent ?
            arg.textContent :
            '';
exports.textFromArg = textFromArg;
const handleEvent = (el, key, value, next) => typeof value === 'function' ? el.addEventListener(key, value) : next();
const handleStyle = (el, key, value, next) => key === 'style' ?
    typeof value === 'string' ?
        el.setAttribute('style', value) :
        Object.assign(el.style, value) :
    next();
const handleDataset = (el, key, value, next) => key === 'data' ?
    Object.keys(value).forEach(key => el.dataset[key] = String(value[key])) :
    next();
const handleAttribute = (el, key, value) => el.setAttribute(key, String(value));
//
const chain = (0, next_1.createFunctionChain)();
chain.registerHandler(handleEvent);
chain.registerHandler(handleStyle);
chain.registerHandler(handleDataset);
chain.registerHandler(handleAttribute);
//# sourceMappingURL=args.js.map