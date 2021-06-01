"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./fixtures/document");
const assert = require("assert");
const html_element_1 = require("html-element");
const index_1 = require("../index");
const util_1 = require("../util");
const suite_1 = require("./fixtures/suite");
const h = index_1.H(html_element_1.document);
describe('h', () => {
    const event = new html_element_1.Event('click');
    const eventFixture = {
        title: 'creates an element with event',
        tag: 'div',
        args: [
            {
                click: (e) => {
                    if (e && util_1.isNode(e.target)) {
                        e.target.appendChild(html_element_1.document.createTextNode('foo'));
                    }
                }
            }
        ],
        expect: '<div>foo</div>',
        map: el => { el.dispatchEvent(event); return el.outerHTML; }
    };
    const fixtures = [...suite_1.baseFixtures, eventFixture];
    fixtures.forEach(fix => {
        const { title, tag, args, expect, elementChild, map = el => el.outerHTML } = fix;
        let child = null;
        if (elementChild) {
            child = h(elementChild);
        }
        it(title, () => {
            const el = child ? h(tag, child, ...args) : h(tag, ...args);
            const value = map(el);
            assert.strictEqual(value, expect);
        });
    });
});
//# sourceMappingURL=index.js.map