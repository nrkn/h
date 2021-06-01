"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const args_1 = require("./args");
exports.Util = (document) => {
    const h = _1.H(document);
    const text = (...args) => {
        let data = '';
        args.forEach(arg => data += exports.handleTextArg(arg));
        return document.createTextNode(data);
    };
    const fragment = (...args) => {
        const documentFragment = document.createDocumentFragment();
        args.forEach(arg => args_1.handleChildArg(document, documentFragment, arg));
        return documentFragment;
    };
    const element = (tagName) => (...args) => h(tagName, ...args);
    return { h, text, fragment, element };
};
exports.noop = () => { };
exports.handleTextArg = (arg) => typeof arg === 'string' ?
    arg :
    arg instanceof Text ?
        arg.data :
        arg instanceof Element && arg.textContent ?
            arg.textContent :
            '';
exports.isNode = (value) => value && typeof value.nodeType === 'number';
//# sourceMappingURL=util.js.map