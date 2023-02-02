import { handleArg } from './args'
import { ElAttr, HElement } from './types'

export const attr = <T extends HElement>(el: T, ...args: ElAttr[]) => {
  for (const arg of args)
    handleArg(el, arg)

  return el
}
