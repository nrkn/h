import { HArg, HNode, HTag } from './types';
export declare const Util: (document: Document) => {
    h: import("./types").HScript;
    text: HNode<Text>;
    fragment: HNode<DocumentFragment>;
    element: HTag;
};
export declare const noop: () => void;
export declare const handleTextArg: (arg: HArg) => string;
export declare const isNode: (value: any) => value is Node;
