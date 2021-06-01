import { noop } from '../util'

export const handleEvent = (
  _doc: Document, el: HTMLElement, key: string, value: any, next = noop
) =>
  typeof value === 'function' ? el.addEventListener(key, value) : next()

export const handleStyle = (
  _doc: Document, el: HTMLElement, key: string, value: any, next = noop
) =>
  key === 'style' ?
    typeof value === 'string' ?
      el.setAttribute('style', value) :
      Object.assign(el.style, value) :
    next()

export const handleDataset = (
  _doc: Document, el: HTMLElement, key: string, value: any, next = noop
) =>
  key === 'data' ?
    Object.keys(value).forEach(key => el.dataset[key] = String(value[key])) :
    next()

export const handleAttribute = (
  _doc: Document, el: HTMLElement, key: string, value: any
) =>
  el.setAttribute(key, String(value))
