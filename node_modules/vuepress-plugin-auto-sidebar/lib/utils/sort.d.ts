import { AutoSidebarPage, GroupPagesResult, SortOptions } from '../types';
export declare const readmeFirstSort: (pages: AutoSidebarPage[]) => void;
export declare const pagesSort: (pagesGroup: GroupPagesResult, sortOptions: SortOptions) => void;
export declare const specifiedPagesSort: (defaultPagesGroupByMenuPath: GroupPagesResult, specifiedSortPages: AutoSidebarPage[]) => void;
export declare const pagesGroupSort: (defaultPagesGroupByMenuPath: GroupPagesResult) => GroupPagesResult;
