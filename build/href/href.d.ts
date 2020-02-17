import React, { CSSProperties } from 'react';
declare type HrefProps = {
    to: string;
    external?: boolean;
    className?: string;
    style?: CSSProperties;
};
export default class Href extends React.Component<HrefProps> {
    render(): JSX.Element;
}
export {};
