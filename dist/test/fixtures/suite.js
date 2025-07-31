"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgHelpers = exports.htmlHelpers = exports.baseFixtures = void 0;
const index_js_1 = require("../../index.js");
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
        expect: '<div style="color:red"></div>'
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
    a: index_js_1.a, abbr: index_js_1.abbr, address: index_js_1.address, area: index_js_1.area, article: index_js_1.article, aside: index_js_1.aside, audio: index_js_1.audio, b: index_js_1.b, base: index_js_1.base, bdi: index_js_1.bdi, bdo: index_js_1.bdo, blockquote: index_js_1.blockquote,
    body: index_js_1.body, br: index_js_1.br, button: index_js_1.button, canvas: index_js_1.canvas, caption: index_js_1.caption, cite: index_js_1.cite, code: index_js_1.code, col: index_js_1.col, colgroup: index_js_1.colgroup, data: index_js_1.data, datalist: index_js_1.datalist,
    dd: index_js_1.dd, del: index_js_1.del, details: index_js_1.details, dfn: index_js_1.dfn, dialog: index_js_1.dialog, div: index_js_1.div, dl: index_js_1.dl, dt: index_js_1.dt, em: index_js_1.em, embed: index_js_1.embed, fieldset: index_js_1.fieldset, figcaption: index_js_1.figcaption,
    figure: index_js_1.figure, footer: index_js_1.footer, form: index_js_1.form, h1: index_js_1.h1, h2: index_js_1.h2, h3: index_js_1.h3, h4: index_js_1.h4, h5: index_js_1.h5, h6: index_js_1.h6, head: index_js_1.head, header: index_js_1.header, hgroup: index_js_1.hgroup, hr: index_js_1.hr, html: index_js_1.html,
    i: index_js_1.i, iframe: index_js_1.iframe, img: index_js_1.img, input: index_js_1.input, ins: index_js_1.ins, kbd: index_js_1.kbd, label: index_js_1.label, legend: index_js_1.legend, li: index_js_1.li, link: index_js_1.link, main: index_js_1.main, map: index_js_1.map, mark: index_js_1.mark,
    menu: index_js_1.menu, meta: index_js_1.meta, meter: index_js_1.meter, nav: index_js_1.nav, noscript: index_js_1.noscript, object: index_js_1.object, ol: index_js_1.ol, optgroup: index_js_1.optgroup, option: index_js_1.option, output: index_js_1.output, p: index_js_1.p,
    picture: index_js_1.picture, pre: index_js_1.pre, progress: index_js_1.progress, q: index_js_1.q, rp: index_js_1.rp, rt: index_js_1.rt, ruby: index_js_1.ruby, $s: index_js_1.$s, samp: index_js_1.samp, script: index_js_1.script, section: index_js_1.section, select: index_js_1.select,
    slot: index_js_1.slot, small: index_js_1.small, source: index_js_1.source, span: index_js_1.span, strong: index_js_1.strong, style: index_js_1.style, sub: index_js_1.sub, summary: index_js_1.summary, sup: index_js_1.sup, table: index_js_1.table, tbody: index_js_1.tbody, td: index_js_1.td,
    template: index_js_1.template, textarea: index_js_1.textarea, tfoot: index_js_1.tfoot, th: index_js_1.th, thead: index_js_1.thead, time: index_js_1.time, title: index_js_1.title, tr: index_js_1.tr, track: index_js_1.track, u: index_js_1.u, ul: index_js_1.ul, $var: index_js_1.$var,
    video: index_js_1.video, wbr: index_js_1.wbr
};
exports.svgHelpers = {
    $a: index_js_1.$a, circle: index_js_1.circle, clipPath: index_js_1.clipPath, defs: index_js_1.defs, desc: index_js_1.desc, ellipse: index_js_1.ellipse, feBlend: index_js_1.feBlend, feColorMatrix: index_js_1.feColorMatrix,
    feComponentTransfer: index_js_1.feComponentTransfer, feComposite: index_js_1.feComposite, feConvolveMatrix: index_js_1.feConvolveMatrix, feDiffuseLighting: index_js_1.feDiffuseLighting,
    feDisplacementMap: index_js_1.feDisplacementMap, feDistantLight: index_js_1.feDistantLight, feDropShadow: index_js_1.feDropShadow, feFlood: index_js_1.feFlood, feFuncA: index_js_1.feFuncA, feFuncB: index_js_1.feFuncB,
    feFuncG: index_js_1.feFuncG, feFuncR: index_js_1.feFuncR, feGaussianBlur: index_js_1.feGaussianBlur, feImage: index_js_1.feImage, feMerge: index_js_1.feMerge, feMergeNode: index_js_1.feMergeNode, feMorphology: index_js_1.feMorphology,
    feOffset: index_js_1.feOffset, fePointLight: index_js_1.fePointLight, feSpecularLighting: index_js_1.feSpecularLighting, feSpotLight: index_js_1.feSpotLight, feTile: index_js_1.feTile, feTurbulence: index_js_1.feTurbulence,
    filter: index_js_1.filter, foreignObject: index_js_1.foreignObject, g: index_js_1.g, image: index_js_1.image, line: index_js_1.line, linearGradient: index_js_1.linearGradient, marker: index_js_1.marker, mask: index_js_1.mask, metadata: index_js_1.metadata,
    path: index_js_1.path, pattern: index_js_1.pattern, polygon: index_js_1.polygon, polyline: index_js_1.polyline, radialGradient: index_js_1.radialGradient, rect: index_js_1.rect, stop: index_js_1.stop, svg: index_js_1.svg, $switch: index_js_1.$switch,
    symbol: index_js_1.symbol, $text: index_js_1.$text, textPath: index_js_1.textPath, tspan: index_js_1.tspan, use: index_js_1.use, view: index_js_1.view, $script: index_js_1.$script, $style: index_js_1.$style, $title: index_js_1.$title
};
//# sourceMappingURL=suite.js.map