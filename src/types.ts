export type Attr = {
  [key: string]: any
}

export type HChildArg = string | Node

export type HArg = HChildArg | Attr

type HMap = HTMLElementTagNameMap

export type HScript = {
  <K extends keyof HMap>(tagName: K, ...args: HArg[]): HMap[K]
  (tagName: string, ...args: HArg[]): HTMLElement
}

export type HNode<T> = ( ...args: HArg[] ) => T

export type HTagName = keyof HMap

export type HTag = {
  <K extends HTagName>(tagName: K): HNode<HMap[K]>
  (tagName: string): HNode<HTMLElement>
}

export type HProxy = {
  [Name in HTagName]: HNode<HMap[Name]>
} & {
  [key:string]: HNode<HTMLElement>
}

export type HUtil = {
  h: HScript
  text: HNode<Text>
  fragment: HNode<DocumentFragment>
  element: HTag
}
