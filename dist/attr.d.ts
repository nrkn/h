import { ElAttr, HElement } from './types';
export declare const attrFactory: (doc: Document) => <T extends HElement>(el: T, ...args: ElAttr[]) => T;
