import React, { CSSProperties } from 'react';
declare type ListItemProperties = {
    label: React.ReactNode;
    description?: React.ReactNode;
    decoration?: React.ReactNode;
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
