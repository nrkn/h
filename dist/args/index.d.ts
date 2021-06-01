import { HArg } from '../types';
export declare const handleArg: (doc: Document, el: HTMLElement, arg: HArg) => Node | undefined;
export declare const handleChildArg: (doc: Document, el: Node, arg: HArg, next?: () => void) => Node | undefined;
export declare const handleObjectArg: (doc: Document, el: HTMLElement, arg: HArg) => void;
