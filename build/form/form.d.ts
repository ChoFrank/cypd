import React, { ReactNode, CSSProperties } from 'react';
declare type ItemProps = {
    label: ReactNode | string;
    colon: boolean;
    layout: 'vertical' | 'horizontal';
    className: string;
    style: CSSProperties;
    labelClass: string;
    labelStyle: CSSProperties;
    error: string;
    disabled: boolean;
};
declare class Item extends React.Component<Partial<ItemProps>> {
    render(): JSX.Element;
}
declare type FormProps = {
    colon: boolean;
    layout: 'vertical' | 'horizontal';
    className: string;
    style: CSSProperties;
    labelClass: string;
    labelStyle: CSSProperties;
    error: string;
    disabled: boolean;
};
declare class Form extends React.Component<Partial<FormProps>> {
    render(): JSX.Element;
}
declare const _default: {
    Item: typeof Item;
    Form: typeof Form;
};
export default _default;
