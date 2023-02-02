
type HtmlTagMap = HTMLElementTagNameMap
type SvgTagMap = SVGElementTagNameMap

//

export type ElAttr = Record<string,any>

export type ElChild = string | Node

export type ElArg = ElChild | ElAttr

//

export type HElement = HTMLElement | SVGElement

export type HtmlKey = keyof HtmlTagMap
export type SvgKey = keyof SvgTagMap

export type H = {
  <K extends HtmlKey>(tagName: K, ...args: ElArg[]): HtmlTagMap[K]
  (tagName: string, ...args: ElArg[]): HTMLElement
}

export type S = {
  <K extends HtmlKey>(tagName: K, ...args: ElArg[]): HtmlTagMap[K]
}