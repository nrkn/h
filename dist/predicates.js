"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLOrSVGElement = exports.isSVGElement = exports.isElement = exports.isNode = void 0;
const svgNs = 'http://www.w3.org/2000/svg';
const isNode = (value) => value && typeof value.nodeType === 'number';
exports.isNode = isNode;
const isElement = (value) => value && value['nodeType'] === 1;
exports.isElement = isElement;
const isSVGElement = (value) => (0, exports.isElement)(value) && value.namespaceURI === svgNs;
exports.isSVGElement = isSVGElement;
const isHTMLOrSVGElement = (value) => (0, exports.isElement)(value) && 'dataset' in value;
exports.isHTMLOrSVGElement = isHTMLOrSVGElement;
//# sourceMappingURL=predicates.js.map