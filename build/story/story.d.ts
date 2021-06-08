import React, { CSSProperties } from 'react';
declare type PageProperties = {
    className?: string;
    style?: CSSProperties;
};
export declare class Page extends React.Component<PageProperties> {
    render(): JSX.Element;
}
declare type BookProperties = {
    page?: number;
    className?: string;
    style?: CSSProperties;
};
export declare class Book extends React.Component<BookProperties> {
    state: {
        _internal_page: number;
    };
    render(): JSX.Element;
}
export {};
