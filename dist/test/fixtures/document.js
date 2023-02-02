"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
const dom = new jsdom_1.JSDOM('<!doctype html>');
const { window } = dom;
global['window'] = window;
global['document'] = window.document;
//# sourceMappingURL=document.js.map