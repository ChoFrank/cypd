import React from 'react';
declare type TooltipProps = {
    text: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
};
export default class Tooltip extends React.Component<TooltipProps> {
    tooltipId: string;
    wrapperRef?: HTMLDivElement | null;
    create: () => void;
    delete: () => void;
    render(): JSX.Element;
}
export {};
