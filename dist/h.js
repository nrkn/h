"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H = void 0;
const args_1 = require("./args");
const H = (doc, argHandler = args_1.handleArg) => (tagName, ...args) => {
    const element = doc.createElement(tagName);
    for (const arg of args)
        argHandler(doc, element, arg);
    return element;
};
exports.H = H;
//# sourceMappingURL=h.js.map