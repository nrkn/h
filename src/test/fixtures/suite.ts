import { 
  $a, $switch, $text, $var, a, abbr, address, area, article, aside, audio, b, 
  base, bdi, bdo, blockquote, body, br, button, canvas, caption, circle, cite, 
  clipPath, code, col, colgroup, data, datalist, dd, defs, del, desc, details, 
  dfn, dialog, div, dl, dt, ellipse, em, embed, feBlend, feColorMatrix, 
  feComponentTransfer, feComposite, feConvolveMatrix, feDiffuseLighting, 
  feDisplacementMap, feDistantLight, feDropShadow, feFlood, feFuncA, feFuncB, 
  feFuncG, feFuncR, feGaussianBlur, feImage, feMerge, feMergeNode, feMorphology, 
  feOffset, fePointLight, feSpecularLighting, feSpotLight, feTile, feTurbulence, 
  fieldset, figcaption, figure, filter, footer, foreignObject, form, g, h1, h2, 
  h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, image, img, input, 
  ins, kbd, label, legend, li, line, linearGradient, link, main, map, mark, 
  marker, mask, menu, meta, metadata, meter, nav, noscript, object, ol, 
  optgroup, option, output, p, path, pattern, picture, polygon, polyline, pre, 
  progress, q, radialGradient, rect, rp, rt, ruby, samp, script, section, 
  select, slot, small, source, span, strong, style, sub, summary, sup, svg, 
  symbol, table, tbody, td, template, stop, textarea, textPath, tfoot, th, 
  thead, time, title, tr, track, tspan, u, ul, use, video, view, wbr, $s, $script, $style, $title 
} from '../..'

import { ElArg, HtmlKey } from '../../lib/types'

export type Fixture = {
  title: string
  tag: HtmlKey | string
  elementChild?: HtmlKey | string
  map?: ( el: HTMLElement, ...args: any[] ) => any
  args: ElArg[]
  expect: string
}

export const baseFixtures: Fixture[] = [
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
]

export const htmlHelpers = {
  a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, 
  body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, 
  dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, 
  figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, 
  i, iframe, img, input, ins, kbd, label, legend, li, link, main, map, mark, 
  menu, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, 
  picture, pre, progress, q, rp, rt, ruby, $s, samp, script, section, select, 
  slot, small, source, span, strong, style, sub, summary, sup, table, tbody, td, 
  template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, $var, 
  video, wbr 
}

export const svgHelpers = {
  $a, circle, clipPath, defs, desc, ellipse, feBlend, feColorMatrix, 
  feComponentTransfer, feComposite, feConvolveMatrix, feDiffuseLighting, 
  feDisplacementMap, feDistantLight, feDropShadow, feFlood, feFuncA, feFuncB, 
  feFuncG, feFuncR, feGaussianBlur, feImage,feMerge, feMergeNode, feMorphology, 
  feOffset, fePointLight, feSpecularLighting, feSpotLight, feTile, feTurbulence, 
  filter, foreignObject, g, image, line, linearGradient, marker, mask, metadata, 
  path, pattern, polygon, polyline, radialGradient, rect, stop, svg, $switch, 
  symbol, $text, textPath, tspan, use, view, $script, $style, $title
}
