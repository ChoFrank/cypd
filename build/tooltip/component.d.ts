import React from 'react';
declare type TooltipProps = {
    text: string;
    open?: boolean;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
};
export default class Tooltip extends React.Component<TooltipProps> {
    render(): JSX.Element;
}
export {};
