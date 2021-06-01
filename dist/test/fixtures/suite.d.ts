import { HArg, HTagName } from "../../types";
export declare type Fixture = {
    title: string;
    tag: HTagName | string;
    elementChild?: HTagName | string;
    map?: (el: HTMLElement, ...args: any[]) => any;
    args: HArg[];
    expect: string;
};
export declare const baseFixtures: Fixture[];
