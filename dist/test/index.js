"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./fixtures/document");
const assert = require("assert");
const html_element_1 = require("html-element");
const predicates_1 = require("../lib/predicates");
const suite_1 = require("./fixtures/suite");
const h_1 = require("../lib/h");
const predicates_2 = require("./fixtures/predicates");
describe('h', () => {
    const event = new html_element_1.Event('click');
    const eventFixture = {
        title: 'creates an element with event',
        tag: 'div',
        args: [
            {
                click: (e) => {
                    if (e && (0, predicates_1.isNode)(e.target)) {
                        e.target.appendChild(document.createTextNode('foo'));
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
            child = (0, h_1.h)(elementChild);
        }
        it(title, () => {
            const el = child ? (0, h_1.h)(tag, child, ...args) : (0, h_1.h)(tag, ...args);
            const value = map(el);
            assert.strictEqual(value, expect);
        });
    });
});
describe('helpers', () => {
    describe('html', () => {
        const htmlKeys = Object.keys(suite_1.htmlHelpers);
        for (const key of htmlKeys) {
            it(key, () => {
                const el = suite_1.htmlHelpers[key]();
                assert(predicates_2.htmlElementPredicates[key](el));
            });
        }
    });
    describe('svg', () => {
    });
});
//# sourceMappingURL=index.js.map