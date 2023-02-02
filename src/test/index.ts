import './fixtures/document'

import * as assert from 'assert'
import { isHTMLOrSVGElement, isNode, isSVGElement } from '../lib/predicates'
import { baseFixtures, Fixture, htmlHelpers, svgHelpers } from './fixtures/suite'
import { attr, fragment, h, s, text } from '..'
import { handleArg, handleChildArg, textFromArg } from '../lib/args'
import { createFunctionChain } from '../lib/next'

const { Event } = window

describe('h', () => {
  const event = new Event('click')

  const eventFixture: Fixture = {
    title: 'creates an element with event',
    tag: 'div',
    args: [
      {
        click: (e: MouseEvent) => {
          if (e && isNode(e.target)) {
            e.target.appendChild(document.createTextNode('foo'))
          }
        }
      }
    ],
    expect: '<div>foo</div>',
    map: el => { el.dispatchEvent(event); return el.outerHTML }
  }

  const fixtures = [...baseFixtures, eventFixture]

  fixtures.forEach(fix => {
    const {
      title, tag, args, expect,
      elementChild,
      map = el => el.outerHTML
    } = fix

    let child: HTMLElement | null = null

    if (elementChild) {
      child = h(elementChild)
    }

    it(title, () => {
      const el = child ? h(tag, child, ...args) : h(tag, ...args)

      const value = map(el)

      assert.strictEqual(value, expect)
    })
  })
})

describe('helpers', () => {
  describe('html', () => {
    describe('text helper', () => {
      it('simple', () => {
        const textNode = text('foo')
        const el = h('div', textNode)

        assert.strictEqual(el.textContent, 'foo')
      })

      it('text in a text', () => {
        const foo = text('foo')
        const bar = text(foo, 'bar')

        assert.strictEqual(bar.textContent, 'foobar')
      })

      it('text from an element', () => {
        const foo = h('div', 'foo')
        const bar = text(foo, 'bar')

        assert.strictEqual(bar.textContent, 'foobar')
      })

      it( 'text from empty object', () => {
        const textFromEmpty = textFromArg({})

        assert.strictEqual(textFromEmpty, '')
      })

      it( 'text from number', () => {
        const textFromNumber = textFromArg(1)

        assert.strictEqual(textFromNumber, '1')
      })
    })


    it('fragment helper', () => {
      const frag = fragment(h('div'), h('div'))

      assert.strictEqual(frag.childNodes.length, 2)
    })

    describe('attr helper', () => {
      it('simple set', () => {
        const el = h('div')

        attr(el, { class: 'foo' })

        assert.strictEqual(el.className, 'foo')
      })

      it('handle child arg with no next', () => {
        const el = h('div')

        handleChildArg(el, {})

        assert.strictEqual(el.childNodes.length, 0)
      })

      it( 'sets true attribute', () => {
        const el = h('div', { disabled: true })

        assert.strictEqual(el.getAttribute('disabled'), '')
      })

      it( 'sets falsey attributes', () => {
        const el = h('div', { disabled: true, checked: true, selected: true })

        attr( el, { disabled: false, checked: null, selected: undefined})
        
        assert.strictEqual(el.getAttribute('disabled'), null)
        assert.strictEqual(el.getAttribute('checked'), null)
        assert.strictEqual(el.getAttribute('selected'), null)
      })
    })

    it( 'is HTML or SVG', () => {
      const el = h('div')

      assert( isHTMLOrSVGElement( el ))
    })

    const htmlKeys = Object.keys(htmlHelpers) as (keyof HTMLElementTagNameMap)[]
    for (const key of htmlKeys) {
      const check = key.startsWith('$') ? key.slice(1) : key

      it(check, () => {
        const el = htmlHelpers[key]()

        // html-element doesn't support much, just check that the nodeName matches        
        assert.strictEqual(el.nodeName.toLowerCase(), check)
      })
    }
  })

  describe('svg', () => {
    it('s function', () => {
      const svgRoot = s('svg')

      assert.strictEqual(svgRoot.nodeName, 'svg')
    })

    it( 'has svg ns on tags shared with html', () => {
      const sStyle = s('style')

      assert( isSVGElement( sStyle ))
    })

    it( 'is HTML or SVG', () => {
      const el = s('circle', { cx: 10, cy: 10, r: 10 })

      assert( isHTMLOrSVGElement( el ))
    })

    it( 'viewBox accepts array', () => {
      const el = s('svg', { viewBox: [0, 0, 100, 100] })

      assert.strictEqual(el.getAttribute('viewBox'), '0 0 100 100')
    })

    const svgKeys = Object.keys(svgHelpers) as (keyof SVGElementTagNameMap)[]

    for (const key of svgKeys) {
      const check = key.startsWith('$') ? key.slice(1) : key

      it(check, () => {
        const el = svgHelpers[key]()

        // html-element doesn't support much, just check that the nodeName matches        
        assert.strictEqual(el.nodeName, check)
      })
    }
  })

  describe( 'next handler', () => {
    it( 'should return with doing anything when empty', () => {
      const { handle } = createFunctionChain()

      let callCount = 0

      handle()

      assert.strictEqual(callCount, 0)
    } )
  })
})