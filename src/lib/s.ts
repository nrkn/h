import { handleArg } from './args'
import { svgNs } from './const'
import { S } from './types'

export const s: S = (tagName, ...args ) => {
  const element = document.createElementNS( svgNs, tagName )

  for (const arg of args) handleArg(element, arg)

  return element
}
