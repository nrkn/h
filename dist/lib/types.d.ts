declare type HtmlTagMap = HTMLElementTagNameMap;
declare type SvgTagMap = SVGElementTagNameMap;
export declare type ElAttr = Record<string, any>;
export declare type ElChild = string | Node;
export declare type ElArg = ElChild | ElAttr;
export declare type HElement = HTMLElement | SVGElement;
export declare type HtmlKey = keyof HtmlTagMap;
export declare type SvgKey = keyof SvgTagMap;
export declare type H = {
    <K extends HtmlKey>(tagName: K, ...args: ElArg[]): HtmlTagMap[K];
    (tagName: string, ...args: ElArg[]): HTMLElement;
};
export declare type S = {
    <K extends HtmlKey>(tagName: K, ...args: ElArg[]): HtmlTagMap[K];
};
export {};
