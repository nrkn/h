"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./fixtures/document");
const assert = require("assert");
const predicates_1 = require("../lib/predicates");
const suite_1 = require("./fixtures/suite");
const __1 = require("..");
const args_1 = require("../lib/args");
const next_1 = require("../lib/next");
const { Event } = window;
describe('h', () => {
    const event = new Event('click');
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
            child = (0, __1.h)(elementChild);
        }
        it(title, () => {
            const el = child ? (0, __1.h)(tag, child, ...args) : (0, __1.h)(tag, ...args);
            const value = map(el);
            assert.strictEqual(value, expect);
        });
    });
});
describe('helpers', () => {
    describe('html', () => {
        describe('text helper', () => {
            it('simple', () => {
                const textNode = (0, __1.text)('foo');
                const el = (0, __1.h)('div', textNode);
                assert.strictEqual(el.textContent, 'foo');
            });
            it('text in a text', () => {
                const foo = (0, __1.text)('foo');
                const bar = (0, __1.text)(foo, 'bar');
                assert.strictEqual(bar.textContent, 'foobar');
            });
            it('text from an element', () => {
                const foo = (0, __1.h)('div', 'foo');
                const bar = (0, __1.text)(foo, 'bar');
                assert.strictEqual(bar.textContent, 'foobar');
            });
            it('text from empty object', () => {
                const textFromEmpty = (0, args_1.textFromArg)({});
                assert.strictEqual(textFromEmpty, '');
            });
            it('text from number', () => {
                const textFromNumber = (0, args_1.textFromArg)(1);
                assert.strictEqual(textFromNumber, '1');
            });
        });
        it('fragment helper', () => {
            const frag = (0, __1.fragment)((0, __1.h)('div'), (0, __1.h)('div'));
            assert.strictEqual(frag.childNodes.length, 2);
        });
        describe('attr helper', () => {
            it('simple set', () => {
                const el = (0, __1.h)('div');
                (0, __1.attr)(el, { class: 'foo' });
                assert.strictEqual(el.className, 'foo');
            });
            it('handle child arg with no next', () => {
                const el = (0, __1.h)('div');
                (0, args_1.handleChildArg)(el, {});
                assert.strictEqual(el.childNodes.length, 0);
            });
            it('sets true attribute', () => {
                const el = (0, __1.h)('div', { disabled: true });
                assert.strictEqual(el.getAttribute('disabled'), '');
            });
            it('sets falsey attributes', () => {
                const el = (0, __1.h)('div', { disabled: true, checked: true, selected: true });
                (0, __1.attr)(el, { disabled: false, checked: null, selected: undefined });
                assert.strictEqual(el.getAttribute('disabled'), null);
                assert.strictEqual(el.getAttribute('checked'), null);
                assert.strictEqual(el.getAttribute('selected'), null);
            });
        });
        it('is HTML or SVG', () => {
            const el = (0, __1.h)('div');
            assert((0, predicates_1.isHTMLOrSVGElement)(el));
        });
        const htmlKeys = Object.keys(suite_1.htmlHelpers);
        for (const key of htmlKeys) {
            const check = key.startsWith('$') ? key.slice(1) : key;
            it(check, () => {
                const el = suite_1.htmlHelpers[key]();
                // html-element doesn't support much, just check that the nodeName matches        
                assert.strictEqual(el.nodeName.toLowerCase(), check);
            });
        }
    });
    describe('svg', () => {
        it('s function', () => {
            const svgRoot = (0, __1.s)('svg');
            assert.strictEqual(svgRoot.nodeName, 'svg');
        });
        it('has svg ns on tags shared with html', () => {
            const sStyle = (0, __1.s)('style');
            assert((0, predicates_1.isSVGElement)(sStyle));
        });
        it('is HTML or SVG', () => {
            const el = (0, __1.s)('circle', { cx: 10, cy: 10, r: 10 });
            assert((0, predicates_1.isHTMLOrSVGElement)(el));
        });
        it('viewBox accepts array', () => {
            const el = (0, __1.s)('svg', { viewBox: [0, 0, 100, 100] });
            assert.strictEqual(el.getAttribute('viewBox'), '0 0 100 100');
        });
        const svgKeys = Object.keys(suite_1.svgHelpers);
        for (const key of svgKeys) {
            const check = key.startsWith('$') ? key.slice(1) : key;
            it(check, () => {
                const el = suite_1.svgHelpers[key]();
                // html-element doesn't support much, just check that the nodeName matches        
                assert.strictEqual(el.nodeName, check);
            });
        }
    });
    describe('next handler', () => {
        it('should return with doing anything when empty', () => {
            const { handle } = (0, next_1.createFunctionChain)();
            let callCount = 0;
            handle();
            assert.strictEqual(callCount, 0);
        });
    });
});
//# sourceMappingURL=index.js.map