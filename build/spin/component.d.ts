import React, { CSSProperties } from 'react';
declare type SpinProps = {
    message: string;
    visible: boolean;
    layout: 'vertical' | 'horizontal';
    className: string;
    style: CSSProperties;
    type?: 'linear';
};
export default class Spin extends React.Component<Partial<SpinProps>> {
    render(): JSX.Element;
}
export {};
