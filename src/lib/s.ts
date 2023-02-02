import { handleArg } from './args'
import { svgNs } from './const'
import { ElArg } from './types'

export const s = (tagName: string, ...args: ElArg[]) => {
  const element = document.createElementNS( svgNs, tagName )

  for (const arg of args) handleArg(element, arg)

  return element
}
