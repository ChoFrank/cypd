import React from 'react';
declare type TooltipProps = {
    text: string;
    direction?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    fillinOutside?: boolean;
};
export default class Tooltip extends React.Component<TooltipProps> {
    tooltipId: string;
    wrapperRef?: HTMLDivElement | null;
    componentWillUnmount(): void;
    create: () => void;
    delete: () => void;
    render(): JSX.Element;
}
export {};
