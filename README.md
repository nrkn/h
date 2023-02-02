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

Or using `h` function:

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

Or using `s` function:

```ts
import { s } from '@nrkn/h'

const circ = s(
  'circle',
  { cx: 50, cy: 50, r: 40, fill: 'red' }
)
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

### attribute handling 

All attribute values are converted to strings, unless they are: 

1. `null`, `undefined` or `false` - in which case the attribute is removed if it 
  already exists
2. `true` - in which case the attribute is set to an empty string
3. An array, in which case it is joined with spaces eg:

```ts
// numbers are fine
const circ = s( 'circle', { r: 40 } )

console.log( circ.getAttribute( 'r' ) ) // '40'

h('div', { class: [ 'foo', 'bar' ] })

// array of class was joined with spaces
console.log( el.getAttribute( 'className' ) ) // 'foo bar'

// same here
attr( svgRootEl, { viewBox: [ 0, 0, 100, 100 ] } )

console.log( svgRootEl.getAttribute( 'viewBox' ) ) // '0 0 100 100'
```

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

## license

MIT License

Copyright (c) 2023 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
