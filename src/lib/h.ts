import { ElArg, H } from './types'
import { handleArg } from './args'

export const h: H = (tagName: string, ...args: ElArg[]) => {
  const element = document.createElement(tagName)

  for (const arg of args) handleArg(element, arg)

  return element
}
