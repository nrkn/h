"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P = (h) => {
    const handler = {
        get: (_proxy, tagName) => {
            if (typeof tagName === 'string')
                return (...args) => h(tagName, ...args);
        }
    };
    const proxy = new Proxy({}, handler);
    return proxy;
};
//# sourceMappingURL=proxy.js.map