import './fixtures/document'

import * as assert from 'assert'
import { document, Event } from 'html-element'
import { isNode, Util } from '../util'

const util = Util( document )

const div = util.element('div')
const span = util.element('span')

describe('proxy', () => {
  it('creates an element', () => {
    const el = div()

    assert(el)
    assert.strictEqual(el.outerHTML, '<div></div>')
  })

  it('creates an element with attributes', () => {
    const el = div({ class: 'foo' })

    assert.strictEqual(el.outerHTML, '<div class="foo"></div>')
  })

  it('creates an element with text child', () => {
    const el = div('foo')

    assert.strictEqual(el.outerHTML, '<div>foo</div>')
  })

  it('creates an element with element child', () => {
    const el = div(span())

    assert.strictEqual(el.outerHTML, '<div><span></span></div>')
  })

  it('creates an element with dataset', () => {
    const el = div({ data: { foo: 'bar' } })

    assert.strictEqual(el.outerHTML, '<div data-foo="bar"></div>')
  })

  it('creates an element with string style', () => {
    const el = div({ style: 'color:red' })

    assert.strictEqual(el.outerHTML, '<div style="color:red;"></div>')
  })

  it('creates an element with style object', () => {
    const el = div({ style: { color: 'red' } })

    assert.strictEqual(el.style.color, 'red')
  })

  it('creates an element with event', () => {
    const event = new Event('click')

    const el = div({
      click: (e: MouseEvent) => {
        if (e && isNode(e.target)) {
          e.target.appendChild(util.text('foo'))
        }
      }
    })

    el.dispatchEvent(event)

    assert.strictEqual(el.outerHTML, '<div>foo</div>')
  })
})
