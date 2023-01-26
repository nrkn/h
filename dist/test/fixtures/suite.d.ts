import { ElArg, HtmlKey } from '../../lib/types';
export declare type Fixture = {
    title: string;
    tag: HtmlKey | string;
    elementChild?: HtmlKey | string;
    map?: (el: HTMLElement, ...args: any[]) => any;
    args: ElArg[];
    expect: string;
};
export declare const baseFixtures: Fixture[];
