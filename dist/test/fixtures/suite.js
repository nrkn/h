"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgHelpers = exports.htmlHelpers = exports.baseFixtures = void 0;
const __1 = require("../..");
const s_1 = require("../../lib/s");
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
exports.htmlHelpers = {
    a: __1.a, abbr: __1.abbr, address: __1.address, area: __1.area, article: __1.article, aside: __1.aside, audio: __1.audio, b: __1.b, base: __1.base, bdi: __1.bdi, bdo: __1.bdo, blockquote: __1.blockquote,
    body: __1.body, br: __1.br, button: __1.button, canvas: __1.canvas, caption: __1.caption, cite: __1.cite, code: __1.code, col: __1.col, colgroup: __1.colgroup, data: __1.data, datalist: __1.datalist,
    dd: __1.dd, del: __1.del, details: __1.details, dfn: __1.dfn, dialog: __1.dialog, div: __1.div, dl: __1.dl, dt: __1.dt, em: __1.em, embed: __1.embed, fieldset: __1.fieldset, figcaption: __1.figcaption,
    figure: __1.figure, footer: __1.footer, form: __1.form, h1: __1.h1, h2: __1.h2, h3: __1.h3, h4: __1.h4, h5: __1.h5, h6: __1.h6, head: __1.head, header: __1.header, hgroup: __1.hgroup, hr: __1.hr, html: __1.html,
    i: __1.i, iframe: __1.iframe, img: __1.img, input: __1.input, ins: __1.ins, kbd: __1.kbd, label: __1.label, legend: __1.legend, li: __1.li, link: __1.link, main: __1.main, map: __1.map, mark: __1.mark,
    menu: __1.menu, meta: __1.meta, meter: __1.meter, nav: __1.nav, noscript: __1.noscript, object: __1.object, ol: __1.ol, optgroup: __1.optgroup, option: __1.option, output: __1.output, p: __1.p,
    picture: __1.picture, pre: __1.pre, progress: __1.progress, q: __1.q, rp: __1.rp, rt: __1.rt, ruby: __1.ruby, s: s_1.s, samp: __1.samp, script: __1.script, section: __1.section, select: __1.select,
    slot: __1.slot, small: __1.small, source: __1.source, span: __1.span, strong: __1.strong, style: __1.style, sub: __1.sub, summary: __1.summary, sup: __1.sup, table: __1.table, tbody: __1.tbody, td: __1.td,
    template: __1.template, textarea: __1.textarea, tfoot: __1.tfoot, th: __1.th, thead: __1.thead, time: __1.time, title: __1.title, tr: __1.tr, track: __1.track, u: __1.u, ul: __1.ul, $var: __1.$var,
    video: __1.video, wbr: __1.wbr
};
exports.svgHelpers = {
    $a: __1.$a, circle: __1.circle, clipPath: __1.clipPath, defs: __1.defs, desc: __1.desc, ellipse: __1.ellipse, feBlend: __1.feBlend, feColorMatrix: __1.feColorMatrix,
    feComponentTransfer: __1.feComponentTransfer, feComposite: __1.feComposite, feConvolveMatrix: __1.feConvolveMatrix, feDiffuseLighting: __1.feDiffuseLighting,
    feDisplacementMap: __1.feDisplacementMap, feDistantLight: __1.feDistantLight, feDropShadow: __1.feDropShadow, feFlood: __1.feFlood, feFuncA: __1.feFuncA, feFuncB: __1.feFuncB,
    feFuncG: __1.feFuncG, feFuncR: __1.feFuncR, feGaussianBlur: __1.feGaussianBlur, feImage: __1.feImage, feMerge: __1.feMerge, feMergeNode: __1.feMergeNode, feMorphology: __1.feMorphology,
    feOffset: __1.feOffset, fePointLight: __1.fePointLight, feSpecularLighting: __1.feSpecularLighting, feSpotLight: __1.feSpotLight, feTile: __1.feTile, feTurbulence: __1.feTurbulence,
    filter: __1.filter, foreignObject: __1.foreignObject, g: __1.g, image: __1.image, line: __1.line, linearGradient: __1.linearGradient, marker: __1.marker, mask: __1.mask, metadata: __1.metadata,
    path: __1.path, pattern: __1.pattern, polygon: __1.polygon, polyline: __1.polyline, radialGradient: __1.radialGradient, rect: __1.rect, stop: __1.stop, svg: __1.svg, $switch: __1.$switch,
    symbol: __1.symbol, $text: __1.$text, textPath: __1.textPath, tspan: __1.tspan, use: __1.use, view: __1.view
};
//# sourceMappingURL=suite.js.map