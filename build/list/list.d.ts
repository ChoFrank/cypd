import React, { CSSProperties } from 'react';
declare type ListItemProperties = {
    label: React.ReactNode;
    description?: React.ReactNode;
    decoration?: React.ReactNode;
    mouseEvent?: {
        onMouseDown?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onMouseUp?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    };
};
declare type ListProperties = {
    items: Array<ListItemProperties>;
    className?: string;
    style?: CSSProperties;
};
export default class List extends React.Component<ListProperties> {
    private _id;
    render(): JSX.Element;
}
export {};
