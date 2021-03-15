import React from 'react';
declare type TooltipProps = {
    text: string;
    direction?: ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'right-top' | 'right-bottom' | 'bottom-right' | 'bottom-left' | 'left-bottom' | 'left-top');
    className?: string;
    fillinOutside?: boolean;
    timeout?: number;
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
