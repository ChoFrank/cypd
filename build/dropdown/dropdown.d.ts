import React, { CSSProperties } from 'react';
declare type DropdownItemProps = {
    icon?: string;
    image?: string;
    label: string;
    className?: string;
    style?: CSSProperties;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
};
export declare class DropdownItem extends React.Component<DropdownItemProps> {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    render(): JSX.Element;
}
declare type DropdownProps = {
    items: Array<React.ReactNode>;
    className?: string;
    style?: CSSProperties;
};
export default class DropdownWrapper extends React.Component<DropdownProps> {
    checkbox?: HTMLInputElement | null;
    forceClose: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    render(): JSX.Element;
}
export {};
