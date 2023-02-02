# h

Hyperscript-like dom functions

`npm install @nrkn/h`

## important!

Expects `document` to exist in the global namespace - patch it with 
[jsdom](https://github.com/jsdom/jsdom), `html-element` et al if using in 
Node.js or another runtime without a global `document` - see [example in test 
fixture](src/test/fixtures/document.ts)

## basic usage

HTML:

```ts
import { div, h1, p, attr } from '@nrkn/h'

const el = div(
  h1('Hello World'),
  p({ class: 'foo' }, 'Lorem ipsum dolor sit amet')
)

attr( el, { id: 'bar' }, { class: 'baz' } )
```

Or using h function:

```ts
import { h } from '@nrkn/h'

const el = h(
  'div',
  h('h1', 'Hello World'),
  h('p', { class: 'foo' }, 'Lorem ipsum dolor sit amet')
)
```

SVG:

```ts
import { svg, circle, attr } from '@nrkn/h'

const circ = circle({ cx: 50, cy: 50, r: 40, fill: 'red' })

const svgRoot = svg(
  { viewBox: [ 0, 0, 100, 100 ] },
  circ  
)

attr( circ, { fill: 'blue' } )
```

##  argument handling

The `h` function and all the helpers like `div` etc accept a variable number of
arguments.

For `h`, the first argument is the tag name, the rest can be of mixed type, for
helper functions all arguments can be of mixed type:

- `string` - converted to text node and appended
- `number` - converted to text node and appended
- `Node` - appended
- `Record<string,any>` - converted to attributes and applied to the element,
  with some special handling for `style` and `dataset` properties, and with 
  function values treated as event handlers

### style handling

The `style` property of the attributes object is treated specially, and can be
either a string or an object. If it's a string, it's applied as is. If it's an
object, it should be a `Partial<CSSStyleDeclaration>`, eg:

```ts
h('div', { style: { color: 'red', fontSize: '2em' } })
```

### dataset handling

The `dataset` property of the attributes object is treated specially. It should
be an object, and each key is converted to a `data-` attribute using the same
rules as the regular DOM, eg:

```ts
const el = h('div', { dataset: { fooBar: 'baz' } })

console.log( el.getAttribute( 'data-foo-bar' ) ) // 'baz'
```

### event handling

If an attribute value is a function, it's treated as an event handler, and
attached to the element via `addEventListener`, eg:

```ts
const el = h('div', { click: () => console.log('clicked') })
```

