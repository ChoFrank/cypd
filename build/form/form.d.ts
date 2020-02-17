import React, { ReactNode, CSSProperties } from 'react';
declare type ItemProps = {
    label: ReactNode | string;
    colon: boolean;
    layout: 'vertical' | 'horizontal';
    className: string;
    style: CSSProperties;
    error: string;
    disabled: boolean;
};
declare class Item extends React.Component<Partial<ItemProps>> {
    render(): JSX.Element;
}
declare const _default: {
    Item: typeof Item;
};
export default _default;
