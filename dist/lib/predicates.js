"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLOrSVGElement = exports.isSVGElement = exports.isTextNode = exports.isElement = exports.isNode = void 0;
const const_1 = require("./const");
const isNode = (value) => value && typeof value.nodeType === 'number';
exports.isNode = isNode;
const isElement = (value) => value && value['nodeType'] === 1;
exports.isElement = isElement;
const isTextNode = (value) => value && value['nodeType'] === 3;
exports.isTextNode = isTextNode;
const isSVGElement = (value) => (0, exports.isElement)(value) && value.namespaceURI === const_1.svgNs;
exports.isSVGElement = isSVGElement;
const isHTMLOrSVGElement = (value) => (0, exports.isElement)(value) && 'dataset' in value;
exports.isHTMLOrSVGElement = isHTMLOrSVGElement;
//# sourceMappingURL=predicates.js.map