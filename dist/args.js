"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAttribute = exports.handleDataset = exports.handleStyle = exports.handleEvent = exports.handleTextArg = exports.handleObjectArg = exports.handleChildArg = exports.handleArg = void 0;
const predicates_1 = require("./predicates");
const noop = () => { };
const handleArg = (doc, el, arg) => (0, exports.handleChildArg)(doc, el, arg, () => arg ? (0, exports.handleObjectArg)(el, arg) : noop());
exports.handleArg = handleArg;
const handleChildArg = (doc, el, arg, next = noop) => {
    if (typeof arg === 'string')
        arg = doc.createTextNode(arg);
    if ((0, predicates_1.isNode)(arg))
        return el.appendChild(arg);
    next();
};
exports.handleChildArg = handleChildArg;
const handleObjectArg = (el, arg) => {
    if (typeof arg !== 'object')
        return;
    for (const key in arg) {
        (0, exports.handleEvent)(el, key, arg[key], () => (0, exports.handleStyle)(el, key, arg[key], () => (0, exports.handleDataset)(el, key, arg[key], () => (0, exports.handleAttribute)(el, key, arg[key]))));
    }
};
exports.handleObjectArg = handleObjectArg;
const handleTextArg = (arg) => typeof arg === 'string' ?
    arg :
    arg instanceof Text ?
        arg.data :
        arg instanceof Element && arg.textContent ?
            arg.textContent :
            '';
exports.handleTextArg = handleTextArg;
//
const handleEvent = (el, key, value, next = noop) => typeof value === 'function' ? el.addEventListener(key, value) : next();
exports.handleEvent = handleEvent;
const handleStyle = (el, key, value, next = noop) => key === 'style' ?
    typeof value === 'string' ?
        el.setAttribute('style', value) :
        Object.assign(el.style, value) :
    next();
exports.handleStyle = handleStyle;
const handleDataset = (el, key, value, next = noop) => key === 'data' ?
    Object.keys(value).forEach(key => el.dataset[key] = String(value[key])) :
    next();
exports.handleDataset = handleDataset;
const handleAttribute = (el, key, value) => el.setAttribute(key, String(value));
exports.handleAttribute = handleAttribute;
//# sourceMappingURL=args.js.map