"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./fixtures/document");
const assert = require("assert");
const html_element_1 = require("html-element");
const predicates_1 = require("../lib/predicates");
const __1 = require("..");
describe('proxy', () => {
    it('creates an element', () => {
        const el = (0, __1.div)();
        assert(el);
        assert.strictEqual(el.outerHTML, '<div></div>');
    });
    it('creates an element with attributes', () => {
        const el = (0, __1.div)({ class: 'foo' });
        assert.strictEqual(el.outerHTML, '<div class="foo"></div>');
    });
    it('creates an element with text child', () => {
        const el = (0, __1.div)('foo');
        assert.strictEqual(el.outerHTML, '<div>foo</div>');
    });
    it('creates an element with element child', () => {
        const el = (0, __1.div)((0, __1.span)());
        assert.strictEqual(el.outerHTML, '<div><span></span></div>');
    });
    it('creates an element with dataset', () => {
        const el = (0, __1.div)({ data: { foo: 'bar' } });
        assert.strictEqual(el.outerHTML, '<div data-foo="bar"></div>');
    });
    it('creates an element with string style', () => {
        const el = (0, __1.div)({ style: 'color:red' });
        assert.strictEqual(el.outerHTML, '<div style="color:red;"></div>');
    });
    it('creates an element with style object', () => {
        const el = (0, __1.div)({ style: { color: 'red' } });
        assert.strictEqual(el.style.color, 'red');
    });
    it('creates an element with event', () => {
        const event = new html_element_1.Event('click');
        const el = (0, __1.div)({
            click: (e) => {
                if (e && (0, predicates_1.isNode)(e.target)) {
                    e.target.appendChild(html_element_1.document.createTextNode('foo'));
                }
            }
        });
        el.dispatchEvent(event);
        assert.strictEqual(el.outerHTML, '<div>foo</div>');
    });
});
//# sourceMappingURL=proxy.js.map