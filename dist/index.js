"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const args_1 = require("./args");
exports.H = (document, argHandler = args_1.handleArg) => (tagName, ...args) => {
    const element = document.createElement(tagName);
    args.forEach(arg => argHandler(document, element, arg));
    return element;
};
//# sourceMappingURL=index.js.map