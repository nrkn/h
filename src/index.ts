import { HScript, HArg } from './types'
import { handleArg } from './args'

export const H = (document: Document, argHandler = handleArg): HScript =>
  (tagName: string, ...args: HArg[]) => {
    const element = document.createElement(tagName)

    args.forEach(arg => argHandler(document, element, arg))

    return element
  }
