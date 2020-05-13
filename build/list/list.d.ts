import React, { CSSProperties } from 'react';
declare type CypdListDragManagement = {
    onHover: (item_id?: number) => void;
    onDragStart: (drag_order: number) => void;
    onDrop: (drop_order: number) => void;
    drag_order?: number;
};
declare global {
    interface Window {
        __cypd_list_drag_management: {
            [s: string]: CypdListDragManagement;
        };
    }
}
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
    onAfterDrag?: (new_order: Array<string>) => void;
};
declare type ListState = {
    item_flex_order: Array<number>;
    animated_class: Array<string>;
    dragging: boolean;
    prevProps: ListProperties;
};
export default class List extends React.Component<ListProperties> {
    state: ListState;
    private _id;
    constructor(props: ListProperties);
    static getDerivedStateFromProps(nextProps: ListProperties, prevState: ListState): Partial<ListState> | null;
    componentDidMount(): void;
    onDragStart: (drag_order: number) => void;
    onHover: (item_id?: number | undefined) => void;
    onDrop: (drop_order: number) => void;
    releaseMouse: () => void;
    render(): JSX.Element;
}
export {};
