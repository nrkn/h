"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attr = void 0;
const args_js_1 = require("./args.js");
const attr = (el, ...args) => {
    for (const arg of args)
        (0, args_js_1.handleArg)(el, arg);
    return el;
};
exports.attr = attr;
//# sourceMappingURL=attr.js.map