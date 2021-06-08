import React from 'react';
declare type EmptyProps = {
    className: string;
    style: React.CSSProperties;
    text: string;
    textColor: string;
};
export default class Empty extends React.Component<Partial<EmptyProps>> {
    render(): JSX.Element;
}
export {};
