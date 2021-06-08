import React from 'react';
declare type ButtonProps = {
    type: 'default' | 'primary' | 'danger';
    icon: string;
    className: string;
    style: React.CSSProperties;
    disabled: boolean;
    size: 'small' | 'normal';
    shape: 'round';
    iconColor: string;
    onClick: (e: React.MouseEvent) => void;
    tooltip?: string;
    tooltipFixedWidth?: string | number;
    tooltipDirection?: ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'right-top' | 'right-bottom' | 'bottom-right' | 'bottom-left' | 'left-bottom' | 'left-top');
};
export default class Button extends React.Component<Partial<ButtonProps>> {
    render(): JSX.Element;
}
export {};
