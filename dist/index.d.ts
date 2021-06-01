import { HScript, HArg } from './types';
export declare const H: (document: Document, argHandler?: (doc: Document, el: HTMLElement, arg: HArg) => Node | undefined) => HScript;
