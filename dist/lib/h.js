"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.h = void 0;
const args_js_1 = require("./args.js");
const h = (tagName, ...args) => {
    const element = document.createElement(tagName);
    for (const arg of args)
        (0, args_js_1.handleArg)(element, arg);
    return element;
};
exports.h = h;
//# sourceMappingURL=h.js.map