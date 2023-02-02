import { h } from './lib/h'
import { s } from './lib/s'
import { ElArg } from './lib/types'

export { h } from './lib/h'
export { s } from './lib/s'
export { attr } from './lib/attr'
export { text, fragment } from './lib/util'

// html

export const a = ( ...args: ElArg[] ) => h('a', ...args )
export const abbr = ( ...args: ElArg[] ) => h('abbr', ...args )
export const address = ( ...args: ElArg[] ) => h('address', ...args )
export const area = ( ...args: ElArg[] ) => h('area', ...args )
export const article = ( ...args: ElArg[] ) => h('article', ...args )
export const aside = ( ...args: ElArg[] ) => h('aside', ...args )
export const audio = ( ...args: ElArg[] ) => h('audio', ...args )
export const b = ( ...args: ElArg[] ) => h('b', ...args )
export const base = ( ...args: ElArg[] ) => h('base', ...args )
export const bdi = ( ...args: ElArg[] ) => h('bdi', ...args )
export const bdo = ( ...args: ElArg[] ) => h('bdo', ...args )
export const blockquote = ( ...args: ElArg[] ) => h('blockquote', ...args )
export const body = ( ...args: ElArg[] ) => h('body', ...args )
export const br = ( ...args: ElArg[] ) => h('br', ...args )
export const button = ( ...args: ElArg[] ) => h('button', ...args )
export const canvas = ( ...args: ElArg[] ) => h('canvas', ...args )
export const caption = ( ...args: ElArg[] ) => h('caption', ...args )
export const cite = ( ...args: ElArg[] ) => h('cite', ...args )
export const code = ( ...args: ElArg[] ) => h('code', ...args )
export const col = ( ...args: ElArg[] ) => h('col', ...args )
export const colgroup = ( ...args: ElArg[] ) => h('colgroup', ...args )
export const data = ( ...args: ElArg[] ) => h('data', ...args )
export const datalist = ( ...args: ElArg[] ) => h('datalist', ...args )
export const dd = ( ...args: ElArg[] ) => h('dd', ...args )
export const del = ( ...args: ElArg[] ) => h('del', ...args )
export const details = ( ...args: ElArg[] ) => h('details', ...args )
export const dfn = ( ...args: ElArg[] ) => h('dfn', ...args )
export const dialog = ( ...args: ElArg[] ) => h('dialog', ...args )
export const dir = ( ...args: ElArg[] ) => h('dir', ...args )
export const div = ( ...args: ElArg[] ) => h('div', ...args )
export const dl = ( ...args: ElArg[] ) => h('dl', ...args )
export const dt = ( ...args: ElArg[] ) => h('dt', ...args )
export const em = ( ...args: ElArg[] ) => h('em', ...args )
export const embed = ( ...args: ElArg[] ) => h('embed', ...args )
export const fieldset = ( ...args: ElArg[] ) => h('fieldset', ...args )
export const figcaption = ( ...args: ElArg[] ) => h('figcaption', ...args )
export const figure = ( ...args: ElArg[] ) => h('figure', ...args )
export const font = ( ...args: ElArg[] ) => h('font', ...args )
export const footer = ( ...args: ElArg[] ) => h('footer', ...args )
export const form = ( ...args: ElArg[] ) => h('form', ...args )
export const frame = ( ...args: ElArg[] ) => h('frame', ...args )
export const frameset = ( ...args: ElArg[] ) => h('frameset', ...args )
export const h1 = ( ...args: ElArg[] ) => h('h1', ...args )
export const h2 = ( ...args: ElArg[] ) => h('h2', ...args )
export const h3 = ( ...args: ElArg[] ) => h('h3', ...args )
export const h4 = ( ...args: ElArg[] ) => h('h4', ...args )
export const h5 = ( ...args: ElArg[] ) => h('h5', ...args )
export const h6 = ( ...args: ElArg[] ) => h('h6', ...args )
export const head = ( ...args: ElArg[] ) => h('head', ...args )
export const header = ( ...args: ElArg[] ) => h('header', ...args )
export const hgroup = ( ...args: ElArg[] ) => h('hgroup', ...args )
export const hr = ( ...args: ElArg[] ) => h('hr', ...args )
export const html = ( ...args: ElArg[] ) => h('html', ...args )
export const i = ( ...args: ElArg[] ) => h('i', ...args )
export const iframe = ( ...args: ElArg[] ) => h('iframe', ...args )
export const img = ( ...args: ElArg[] ) => h('img', ...args )
export const input = ( ...args: ElArg[] ) => h('input', ...args )
export const ins = ( ...args: ElArg[] ) => h('ins', ...args )
export const kbd = ( ...args: ElArg[] ) => h('kbd', ...args )
export const label = ( ...args: ElArg[] ) => h('label', ...args )
export const legend = ( ...args: ElArg[] ) => h('legend', ...args )
export const li = ( ...args: ElArg[] ) => h('li', ...args )
export const link = ( ...args: ElArg[] ) => h('link', ...args )
export const main = ( ...args: ElArg[] ) => h('main', ...args )
export const map = ( ...args: ElArg[] ) => h('map', ...args )
export const mark = ( ...args: ElArg[] ) => h('mark', ...args )
export const marquee = ( ...args: ElArg[] ) => h('marquee', ...args )
export const menu = ( ...args: ElArg[] ) => h('menu', ...args )
export const meta = ( ...args: ElArg[] ) => h('meta', ...args )
export const meter = ( ...args: ElArg[] ) => h('meter', ...args )
export const nav = ( ...args: ElArg[] ) => h('nav', ...args )
export const noscript = ( ...args: ElArg[] ) => h('noscript', ...args )
export const object = ( ...args: ElArg[] ) => h('object', ...args )
export const ol = ( ...args: ElArg[] ) => h('ol', ...args )
export const optgroup = ( ...args: ElArg[] ) => h('optgroup', ...args )
export const option = ( ...args: ElArg[] ) => h('option', ...args )
export const output = ( ...args: ElArg[] ) => h('output', ...args )
export const p = ( ...args: ElArg[] ) => h('p', ...args )
export const param = ( ...args: ElArg[] ) => h('param', ...args )
export const picture = ( ...args: ElArg[] ) => h('picture', ...args )
export const pre = ( ...args: ElArg[] ) => h('pre', ...args )
export const progress = ( ...args: ElArg[] ) => h('progress', ...args )
export const q = ( ...args: ElArg[] ) => h('q', ...args )
export const rp = ( ...args: ElArg[] ) => h('rp', ...args )
export const rt = ( ...args: ElArg[] ) => h('rt', ...args )
export const ruby = ( ...args: ElArg[] ) => h('ruby', ...args )
export const $s = ( ...args: ElArg[] ) => h('s', ...args )
export const samp = ( ...args: ElArg[] ) => h('samp', ...args )
export const script = ( ...args: ElArg[] ) => h('script', ...args )
export const section = ( ...args: ElArg[] ) => h('section', ...args )
export const select = ( ...args: ElArg[] ) => h('select', ...args )
export const slot = ( ...args: ElArg[] ) => h('slot', ...args )
export const small = ( ...args: ElArg[] ) => h('small', ...args )
export const source = ( ...args: ElArg[] ) => h('source', ...args )
export const span = ( ...args: ElArg[] ) => h('span', ...args )
export const strong = ( ...args: ElArg[] ) => h('strong', ...args )
export const style = ( ...args: ElArg[] ) => h('style', ...args )
export const sub = ( ...args: ElArg[] ) => h('sub', ...args )
export const summary = ( ...args: ElArg[] ) => h('summary', ...args )
export const sup = ( ...args: ElArg[] ) => h('sup', ...args )
export const table = ( ...args: ElArg[] ) => h('table', ...args )
export const tbody = ( ...args: ElArg[] ) => h('tbody', ...args )
export const td = ( ...args: ElArg[] ) => h('td', ...args )
export const template = ( ...args: ElArg[] ) => h('template', ...args )
export const textarea = ( ...args: ElArg[] ) => h('textarea', ...args )
export const tfoot = ( ...args: ElArg[] ) => h('tfoot', ...args )
export const th = ( ...args: ElArg[] ) => h('th', ...args )
export const thead = ( ...args: ElArg[] ) => h('thead', ...args )
export const time = ( ...args: ElArg[] ) => h('time', ...args )
export const title = ( ...args: ElArg[] ) => h('title', ...args )
export const tr = ( ...args: ElArg[] ) => h('tr', ...args )
export const track = ( ...args: ElArg[] ) => h('track', ...args )
export const u = ( ...args: ElArg[] ) => h('u', ...args )
export const ul = ( ...args: ElArg[] ) => h('ul', ...args )
export const $var = ( ...args: ElArg[] ) => h('var', ...args )
export const video = ( ...args: ElArg[] ) => h('video', ...args )
export const wbr = ( ...args: ElArg[] ) => h('wbr', ...args )

// svg

export const $a = ( ...args: ElArg[] ) => s('a', ...args )
export const circle = ( ...args: ElArg[] ) => s('circle', ...args )
export const clipPath = ( ...args: ElArg[] ) => s('clipPath', ...args )
export const defs = ( ...args: ElArg[] ) => s('defs', ...args )
export const desc = ( ...args: ElArg[] ) => s('desc', ...args )
export const ellipse = ( ...args: ElArg[] ) => s('ellipse', ...args )
export const feBlend = ( ...args: ElArg[] ) => s('feBlend', ...args )
export const feColorMatrix = ( ...args: ElArg[] ) => s('feColorMatrix', ...args )
export const feComponentTransfer = ( ...args: ElArg[] ) => s('feComponentTransfer', ...args )
export const feComposite = ( ...args: ElArg[] ) => s('feComposite', ...args )
export const feConvolveMatrix = ( ...args: ElArg[] ) => s('feConvolveMatrix', ...args )
export const feDiffuseLighting = ( ...args: ElArg[] ) => s('feDiffuseLighting', ...args )
export const feDisplacementMap = ( ...args: ElArg[] ) => s('feDisplacementMap', ...args )
export const feDistantLight = ( ...args: ElArg[] ) => s('feDistantLight', ...args )
export const feDropShadow = ( ...args: ElArg[] ) => s('feDropShadow', ...args )
export const feFlood = ( ...args: ElArg[] ) => s('feFlood', ...args )
export const feFuncA = ( ...args: ElArg[] ) => s('feFuncA', ...args )
export const feFuncB = ( ...args: ElArg[] ) => s('feFuncB', ...args )
export const feFuncG = ( ...args: ElArg[] ) => s('feFuncG', ...args )
export const feFuncR = ( ...args: ElArg[] ) => s('feFuncR', ...args )
export const feGaussianBlur = ( ...args: ElArg[] ) => s('feGaussianBlur', ...args )
export const feImage = ( ...args: ElArg[] ) => s('feImage', ...args )
export const feMerge = ( ...args: ElArg[] ) => s('feMerge', ...args )
export const feMergeNode = ( ...args: ElArg[] ) => s('feMergeNode', ...args )
export const feMorphology = ( ...args: ElArg[] ) => s('feMorphology', ...args )
export const feOffset = ( ...args: ElArg[] ) => s('feOffset', ...args )
export const fePointLight = ( ...args: ElArg[] ) => s('fePointLight', ...args )
export const feSpecularLighting = ( ...args: ElArg[] ) => s('feSpecularLighting', ...args )
export const feSpotLight = ( ...args: ElArg[] ) => s('feSpotLight', ...args )
export const feTile = ( ...args: ElArg[] ) => s('feTile', ...args )
export const feTurbulence = ( ...args: ElArg[] ) => s('feTurbulence', ...args )
export const filter = ( ...args: ElArg[] ) => s('filter', ...args )
export const foreignObject = ( ...args: ElArg[] ) => s('foreignObject', ...args )
export const g = ( ...args: ElArg[] ) => s('g', ...args )
export const image = ( ...args: ElArg[] ) => s('image', ...args )
export const line = ( ...args: ElArg[] ) => s('line', ...args )
export const linearGradient = ( ...args: ElArg[] ) => s('linearGradient', ...args )
export const marker = ( ...args: ElArg[] ) => s('marker', ...args )
export const mask = ( ...args: ElArg[] ) => s('mask', ...args )
export const metadata = ( ...args: ElArg[] ) => s('metadata', ...args )
export const path = ( ...args: ElArg[] ) => s('path', ...args )
export const pattern = ( ...args: ElArg[] ) => s('pattern', ...args )
export const polygon = ( ...args: ElArg[] ) => s('polygon', ...args )
export const polyline = ( ...args: ElArg[] ) => s('polyline', ...args )
export const radialGradient = ( ...args: ElArg[] ) => s('radialGradient', ...args )
export const rect = ( ...args: ElArg[] ) => s('rect', ...args )
export const $script = ( ...args: ElArg[] ) => s('script', ...args )
export const stop = ( ...args: ElArg[] ) => s('stop', ...args )
export const $style = ( ...args: ElArg[] ) => s('style', ...args )
export const svg = ( ...args: ElArg[] ) => s('svg', ...args )
export const $switch = ( ...args: ElArg[] ) => s('switch', ...args )
export const symbol = ( ...args: ElArg[] ) => s('symbol', ...args )
export const $text = ( ...args: ElArg[] ) => s('text', ...args )
export const textPath = ( ...args: ElArg[] ) => s('textPath', ...args )
export const $title = ( ...args: ElArg[] ) => s('title', ...args )
export const tspan = ( ...args: ElArg[] ) => s('tspan', ...args )
export const use = ( ...args: ElArg[] ) => s('use', ...args )
export const view = ( ...args: ElArg[] ) => s('view', ...args )

//
