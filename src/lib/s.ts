import { handleArg } from './args'
import { ElArg } from './types'

export const s = (tagName: string, ...args: ElArg[]) => {
  const element = document.createElementNS( 
    'http://www.w3.org/2000/svg', tagName 
  )

  for (const arg of args) handleArg(element, arg)

  return element
}
