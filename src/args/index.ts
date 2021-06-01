import { HArg } from '../types'
import { noop, isNode } from '../util'

import {
  handleEvent, handleStyle, handleDataset, handleAttribute
} from './object'

export const handleArg = (doc: Document, el: HTMLElement, arg: HArg) =>
  handleChildArg(doc, el, arg,
    () => arg ? handleObjectArg(doc, el, arg) : noop()
  )

export const handleChildArg = (
  doc: Document, el: Node, arg: HArg, next = noop
) => {
  if (typeof arg === 'string') arg = doc.createTextNode(arg)
  if (isNode(arg)) return el.appendChild(arg)

  next()
}

export const handleObjectArg = (
  doc: Document, el: HTMLElement, arg: HArg
) =>
  Object.keys(arg).forEach(
    key => handleEvent(doc, el, key, arg[key],
      () => handleStyle(doc, el, key, arg[key],
        () => handleDataset(doc, el, key, arg[key],
          () => handleAttribute(doc, el, key, arg[key])
        )
      )
    )
  )
