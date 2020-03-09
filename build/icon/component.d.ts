import React from 'react';
interface IconProps {
    type: string;
    className?: string;
    style?: React.CSSProperties;
    color?: string;
    onClick?: (event: React.MouseEvent) => void;
}
export default class Icon extends React.Component<IconProps> {
    id: string;
    render(): JSX.Element;
}
export {};
