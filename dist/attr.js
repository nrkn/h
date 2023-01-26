"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attrFactory = void 0;
const args_1 = require("./args");
const attrFactory = (doc) => (el, ...args) => {
    for (const arg of args)
        (0, args_1.handleArg)(doc, el, arg);
    return el;
};
exports.attrFactory = attrFactory;
//# sourceMappingURL=attr.js.map