import React from 'react';
export declare class Grid extends React.Component {
    render(): JSX.Element;
}
export declare class Row extends React.Component {
    render(): JSX.Element;
}
declare type CardProps = {
    label: React.ReactNode;
    className?: string;
};
export declare class Card extends React.Component<CardProps> {
    render(): JSX.Element;
}
export {};
