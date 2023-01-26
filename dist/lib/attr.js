"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attr = void 0;
const args_1 = require("./args");
const attr = (el, ...args) => {
    for (const arg of args)
        (0, args_1.handleArg)(el, arg);
    return el;
};
exports.attr = attr;
//# sourceMappingURL=attr.js.map