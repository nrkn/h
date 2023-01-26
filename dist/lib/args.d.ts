import { ElArg, HElement } from './types';
export declare const handleArg: (el: HElement, arg: ElArg) => Node | undefined;
export declare const handleChildArg: (el: Node, arg: ElArg, next?: () => void) => Node | undefined;
export declare const handleObjectArg: (el: HElement, arg: ElArg) => void;
export declare const handleTextArg: (arg: ElArg) => string;
export declare const handleEvent: (el: HElement, key: string, value: any, next?: () => void) => void;
export declare const handleStyle: (el: HElement, key: string, value: any, next?: () => void) => any;
export declare const handleDataset: (el: HElement, key: string, value: any, next?: () => void) => void;
export declare const handleAttribute: (el: HElement, key: string, value: any) => void;
