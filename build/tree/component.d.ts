import React, { CSSProperties } from 'react';
declare type TreeNodeProps = {
    label: string | React.ReactNode;
    className: string;
    style: CSSProperties;
    collapsable: boolean;
    icon: string;
    defaultClose: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
declare type TreeProps = {
    collapsable: boolean;
    color?: 'white' | 'black';
};
interface TreeNodeState {
    collapsed: boolean;
}
declare class Node extends React.Component<Partial<TreeNodeProps>> {
    state: TreeNodeState;
    constructor(props: TreeNodeProps);
    componentDidMount(): void;
    onCollapse: () => void;
    render(): JSX.Element;
}
declare class Tree extends React.Component<Partial<TreeProps>> {
    render(): JSX.Element;
}
declare const _default: {
    Tree: typeof Tree;
    Node: typeof Node;
};
export default _default;
