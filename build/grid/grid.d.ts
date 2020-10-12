import React, { CSSProperties } from 'react';
declare type GridProps = {
    className?: string;
    style?: CSSProperties;
};
export declare class Grid extends React.Component<GridProps> {
    render(): JSX.Element;
}
export declare class Row extends React.Component {
    render(): JSX.Element;
}
declare type CardProps = {
    label: React.ReactNode;
    className?: string;
    style?: CSSProperties;
};
export declare class Card extends React.Component<CardProps> {
    render(): JSX.Element;
}
export {};
