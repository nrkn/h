import { handleChildArg, handleTextArg } from './args'
import { ElArg } from './types'

export const text = (...args: ElArg[]) => {
  let data = ''

  args.forEach(arg => data += handleTextArg(arg))

  return document.createTextNode(data)
}

export const fragment = (...args: ElArg[]) => {
  const documentFragment = document.createDocumentFragment()

  args.forEach(arg => handleChildArg(documentFragment, arg))

  return documentFragment
}