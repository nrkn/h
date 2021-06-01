"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.handleEvent = (_doc, el, key, value, next = util_1.noop) => typeof value === 'function' ? el.addEventListener(key, value) : next();
exports.handleStyle = (_doc, el, key, value, next = util_1.noop) => key === 'style' ?
    typeof value === 'string' ?
        el.setAttribute('style', value) :
        Object.assign(el.style, value) :
    next();
exports.handleDataset = (_doc, el, key, value, next = util_1.noop) => key === 'data' ?
    Object.keys(value).forEach(key => el.dataset[key] = String(value[key])) :
    next();
exports.handleAttribute = (_doc, el, key, value) => el.setAttribute(key, String(value));
//# sourceMappingURL=object.js.map