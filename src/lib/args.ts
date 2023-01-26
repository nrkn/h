import { ElArg, HElement } from './types'
import { isNode } from './predicates'

const noop = () => { }

export const handleArg = (el: HElement, arg: ElArg) =>
  handleChildArg( el, arg,
    () => arg ? handleObjectArg(el, arg) : noop()
  )

export const handleChildArg = (
  el: Node, arg: ElArg, next = noop
) => {
  if (typeof arg === 'string') arg = document.createTextNode(arg)
  if (isNode(arg)) return el.appendChild(arg)

  next()
}

export const handleObjectArg = (
  el: HElement, arg: ElArg
) => {
  if( typeof arg !== 'object' ) return

  for( const key in arg ){
    handleEvent( el, key, arg[key],
      () => handleStyle( el, key, arg[key],
        () => handleDataset( el, key, arg[key],
          () => handleAttribute( el, key, arg[key])
        )
      )
    )
  }
}

export const handleTextArg = (arg: ElArg) =>
  typeof arg === 'string' ?
    arg :
    arg instanceof Text ?
      arg.data :
      arg instanceof Element && arg.textContent ?
        arg.textContent :
        ''

//

export const handleEvent = (
  el: HElement, key: string, value: any, next = noop
) =>
  typeof value === 'function' ? el.addEventListener(key, value) : next()

export const handleStyle = (
  el: HElement, key: string, value: any, next = noop
) =>
  key === 'style' ?
    typeof value === 'string' ?
      el.setAttribute('style', value) :
      Object.assign(el.style, value) :
    next()

export const handleDataset = (
  el: HElement, key: string, value: any, next = noop
) =>
  key === 'data' ?
    Object.keys(value).forEach(key => el.dataset[key] = String(value[key])) :
    next()

export const handleAttribute = (
  el: HElement, key: string, value: any
) =>
  el.setAttribute(key, String(value))
