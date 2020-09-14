import React, { CSSProperties } from 'react';
declare type CypdSelectEvent = (value: string) => void;
declare global {
    interface Window {
        __cypd_select_on_change: {
            [s: string]: CypdSelectEvent;
        };
    }
}
declare type OptionProps = {
    value: string | number;
    disabled?: boolean;
    __selected?: boolean;
    __name?: string;
};
declare type SelectProps = {
    value: string | number;
    disabled?: boolean;
    placeholder?: string;
    size?: 'normal' | 'small';
    collapsed?: boolean;
    style?: CSSProperties;
    className?: string;
    onChange: CypdSelectEvent;
};
declare type SelectState = {
    collapsed: boolean;
    direction: 'extend-top' | 'extend-down';
};
export declare class Option extends React.Component<OptionProps> {
    render(): JSX.Element;
}
export default class Select extends React.Component<SelectProps> {
    state: SelectState;
    selectId: string;
    scrollIndex?: number;
    selectWrapper?: HTMLDivElement | null;
    optionWrapper?: HTMLDivElement | null;
    constructor(props: SelectProps);
    get windowHeight(): number;
    static getDerivedStateFromProps(nextProps: SelectProps, prevState: SelectState): SelectState | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    onBlur: () => void;
    onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    autoScroll: () => void;
    render(): JSX.Element;
}
export {};
