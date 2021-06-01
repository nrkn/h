"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseFixtures = [
    {
        title: 'creates an element',
        tag: 'div',
        args: [],
        expect: '<div></div>'
    },
    {
        title: 'creates an element with attributes',
        tag: 'div',
        args: [{ class: 'foo' }],
        expect: '<div class="foo"></div>'
    },
    {
        title: 'creates an element with text child',
        tag: 'div',
        args: ['foo'],
        expect: '<div>foo</div>'
    },
    {
        title: 'creates an element with element child',
        tag: 'div',
        elementChild: 'span',
        args: [],
        expect: '<div><span></span></div>'
    },
    {
        title: 'creates an element with dataset',
        tag: 'div',
        args: [{ data: { foo: 'bar' } }],
        expect: '<div data-foo="bar"></div>'
    },
    {
        title: 'creates an element with string style',
        tag: 'div',
        args: [{ style: 'color:red' }],
        expect: '<div style="color:red;"></div>'
    },
    {
        title: 'creates an element with style object',
        tag: 'div',
        args: [{ style: { color: 'red' } }],
        map: el => el.style.color,
        expect: 'red'
    },
];
//# sourceMappingURL=suite.js.map