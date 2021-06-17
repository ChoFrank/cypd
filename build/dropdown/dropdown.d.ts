import React, { CSSProperties } from 'react';
import { IconProps } from '../icon/component';
declare type DropdownItemProps = {
    icon?: IconProps;
    image?: string;
    label: string;
    className?: string;
    style?: CSSProperties;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
};
declare type DropdownProps = {
    children: Array<DropdownItemProps>;
    parent: React.ReactNode | (() => React.ReactNode);
    className?: string;
    style?: CSSProperties;
};
export default class DropdownWrapper extends React.Component<DropdownProps> {
    id: string;
    state: {
        extend: boolean;
    };
    checkbox: React.RefObject<HTMLInputElement>;
    constructor(props: any);
    onToggle: () => void;
    onBlur: () => void;
    render(): JSX.Element;
}
export {};
