import { HArg, HNode, HTag } from './types'
import { H } from '.'
import { handleChildArg } from './args'

export const Util = (document: Document) => {
  const h = H(document)

  const text: HNode<Text> = (...args: HArg[]) => {
    let data = ''

    args.forEach(arg => data += handleTextArg(arg))

    return document.createTextNode(data)
  }

  const fragment: HNode<DocumentFragment> = (...args: HArg[]) => {
    const documentFragment = document.createDocumentFragment()

    args.forEach(arg => handleChildArg(document, documentFragment, arg))

    return documentFragment
  }

  const element: HTag = (tagName: string) =>
    (...args: HArg[]) => h(tagName, ...args)

  return { h, text, fragment, element }
}

export const noop = () => { }

export const handleTextArg = (arg: HArg) =>
  typeof arg === 'string' ?
    arg :
    arg instanceof Text ?
      arg.data :
      arg instanceof Element && arg.textContent ?
        arg.textContent :
        ''

export const isNode = ( value: any ): value is Node =>
  value && typeof value.nodeType === 'number'
