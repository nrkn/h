"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fragment = exports.text = void 0;
const args_1 = require("./args");
const text = (...args) => {
    let data = '';
    args.forEach(arg => data += (0, args_1.handleTextArg)(arg));
    return document.createTextNode(data);
};
exports.text = text;
const fragment = (...args) => {
    const documentFragment = document.createDocumentFragment();
    args.forEach(arg => (0, args_1.handleChildArg)(documentFragment, arg));
    return documentFragment;
};
exports.fragment = fragment;
//# sourceMappingURL=util.js.map