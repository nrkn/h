declare type HtmlTagMap = HTMLElementTagNameMap;
declare type SvgTagMap = SVGElementTagNameMap;
export declare type ElAttr = Record<string, any>;
export declare type ElChild = string | Node;
export declare type ElArg = ElChild | ElAttr;
export declare type HElement = HTMLElement | SVGElement;
export declare type HtmlKey = keyof HtmlTagMap;
export declare type SvgKey = keyof SvgTagMap;
export declare type NodeFactory<T> = (...args: ElArg[]) => T;
export declare type Factory<TagMap, HEl extends HElement> = {
    <K extends keyof TagMap>(tagName: K, ...args: ElArg[]): TagMap[K];
    (tagName: string, ...args: ElArg[]): HEl;
};
export declare type TagFactory<TagMap, HEl extends HElement> = {
    <K extends keyof TagMap>(tagName: K): NodeFactory<TagMap[K]>;
    (tagName: string): NodeFactory<HEl>;
};
export declare type FactoryProxy<TagMap, HEl extends HElement> = {
    [key in keyof TagMap]: NodeFactory<TagMap[key]>;
} & {
    [key: string]: NodeFactory<HEl>;
};
export declare type HtmlFactory = Factory<HtmlTagMap, HTMLElement>;
export declare type SvgFactory = Factory<SvgTagMap, SVGElement>;
export declare type HtmlTagFactory = TagFactory<HtmlTagMap, HTMLElement>;
export declare type SvgTagFactory = TagFactory<SvgTagMap, SVGElement>;
export declare type HtmlFactoryProxy = FactoryProxy<HtmlTagMap, HTMLElement>;
export declare type SvgFactoryProxy = FactoryProxy<SvgTagMap, SVGElement>;
export {};
