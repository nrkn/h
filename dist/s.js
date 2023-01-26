"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S = void 0;
const args_1 = require("./args");
const S = (doc, argHandler = args_1.handleArg) => (tagName, ...args) => {
    const element = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
    for (const arg of args)
        argHandler(doc, element, arg);
    return element;
};
exports.S = S;
//# sourceMappingURL=s.js.map