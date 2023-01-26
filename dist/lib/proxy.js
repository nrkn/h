"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSvgProxy = exports.createHtmlProxy = void 0;
const createHtmlProxy = (h) => {
    const handler = {
        get: (_proxy, tagName) => {
            if (typeof tagName === 'string')
                return (...args) => h(tagName, ...args);
        }
    };
    const proxy = new Proxy(h, handler);
    return proxy;
};
exports.createHtmlProxy = createHtmlProxy;
const createSvgProxy = (s) => {
    const handler = {
        get: (_proxy, tagName) => {
            if (typeof tagName === 'string')
                return (...args) => s(tagName, ...args);
        }
    };
    const proxy = new Proxy(s, handler);
    return proxy;
};
exports.createSvgProxy = createSvgProxy;
//# sourceMappingURL=proxy.js.map