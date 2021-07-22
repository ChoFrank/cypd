import React, { CSSProperties } from 'react';
declare type ListItemProperties = {
    label: React.ReactNode;
    description?: React.ReactNode;
    decoration?: React.ReactNode;
    index?: string;
};
declare type ListProperties = {
    items: Array<ListItemProperties>;
    className?: string;
    style?: CSSProperties;
    draggable?: boolean;
    theme?: 'normal' | 'dark';
    onAfterDrag?: (new_order: Array<string>) => void;
};
declare type ListState = {
    item_flex_order: Array<number>;
    animated_class: Array<string>;
    dragging: boolean;
    prevProps: ListProperties;
    resetMark: number;
    __refresh?: (() => void);
};
declare type SortEvent = {
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    clone: HTMLElement;
    clones: Array<HTMLElement>;
    composed: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    newDraggableIndex: number;
    newIndex: number;
    oldDraggableIndex: number;
    oldIndex: number;
};
export default class SortableList extends React.Component<ListProperties> {
    state: ListState;
    sort: any;
    private _id;
    refresh_key: number;
    index_order: Array<string>;
    constructor(props: ListProperties);
    static getDerivedStateFromProps(nextProps: ListProperties, prevState: ListState): Partial<ListState> | null;
    componentDidMount(): void;
    initSortable: () => void;
    onSort: (event: SortEvent) => void;
    forceRefreshSortable: () => void;
    render(): JSX.Element;
}
export {};
