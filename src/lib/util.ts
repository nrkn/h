import { handleChildArg, textFromArg } from './args'
import { ElArg } from './types'

export const text = (...args: ElArg[]) => {
  let data = ''

  args.forEach(arg => data += textFromArg(arg))

  return document.createTextNode(data)
}

export const fragment = (...args: ElArg[]) => {
  const documentFragment = document.createDocumentFragment()

  args.forEach(arg => handleChildArg(documentFragment, arg))

  return documentFragment
}