export declare type Attr = {
    [key: string]: any;
};
export declare type HChildArg = string | Node;
export declare type HArg = HChildArg | Attr;
declare type HMap = HTMLElementTagNameMap;
export declare type HScript = {
    <K extends keyof HMap>(tagName: K, ...args: HArg[]): HMap[K];
    (tagName: string, ...args: HArg[]): HTMLElement;
};
export declare type HNode<T> = (...args: HArg[]) => T;
export declare type HTagName = keyof HMap;
export declare type HTag = {
    <K extends HTagName>(tagName: K): HNode<HMap[K]>;
    (tagName: string): HNode<HTMLElement>;
};
export declare type HProxy = {
    [Name in HTagName]: HNode<HMap[Name]>;
} & {
    [key: string]: HNode<HTMLElement>;
};
export declare type HUtil = {
    h: HScript;
    text: HNode<Text>;
    fragment: HNode<DocumentFragment>;
    element: HTag;
};
export {};
