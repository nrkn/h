"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s = void 0;
const args_1 = require("./args");
const const_1 = require("./const");
const s = (tagName, ...args) => {
    const element = document.createElementNS(const_1.svgNs, tagName);
    for (const arg of args)
        (0, args_1.handleArg)(element, arg);
    return element;
};
exports.s = s;
//# sourceMappingURL=s.js.map