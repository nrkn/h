"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.s = void 0;
const args_js_1 = require("./args.js");
const const_js_1 = require("./const.js");
const s = (tagName, ...args) => {
    const element = document.createElementNS(const_js_1.svgNs, tagName);
    for (const arg of args)
        (0, args_js_1.handleArg)(element, arg);
    return element;
};
exports.s = s;
//# sourceMappingURL=s.js.map