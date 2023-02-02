import './fixtures/document'

import * as assert from 'assert'
import { Event } from 'html-element'
import { isNode } from '../lib/predicates'
import { baseFixtures, Fixture, htmlHelpers } from './fixtures/suite'
import { h } from '../lib/h'
import { htmlElementPredicates } from './fixtures/predicates'

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
    const htmlKeys = Object.keys( htmlHelpers)  as (keyof HTMLElementTagNameMap)[]
    for (const key of htmlKeys ) {
      
      it( key, () => {
        const el = htmlHelpers[key]()

        assert( htmlElementPredicates[ key ]( el ) )
      })
    }
  })

  describe('svg', () => {
  })
})