"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const object_1 = require("./object");
exports.handleArg = (doc, el, arg) => exports.handleChildArg(doc, el, arg, () => arg ? exports.handleObjectArg(doc, el, arg) : util_1.noop());
exports.handleChildArg = (doc, el, arg, next = util_1.noop) => {
    if (typeof arg === 'string')
        arg = doc.createTextNode(arg);
    if (util_1.isNode(arg))
        return el.appendChild(arg);
    next();
};
exports.handleObjectArg = (doc, el, arg) => Object.keys(arg).forEach(key => object_1.handleEvent(doc, el, key, arg[key], () => object_1.handleStyle(doc, el, key, arg[key], () => object_1.handleDataset(doc, el, key, arg[key], () => object_1.handleAttribute(doc, el, key, arg[key])))));
//# sourceMappingURL=index.js.map