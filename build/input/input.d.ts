import React from 'react';
declare type InputProps = {
    placeholder: string;
    disabled: boolean;
    value: string | number;
    defaultValue: string | number;
    size: 'small' | 'normal';
    className: string;
    style: React.CSSProperties;
    readOnly: boolean;
    type: string;
    instance: (inst: HTMLInputElement | null) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void;
    onMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void;
    onMouseLeave: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    onMouseEnter: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};
export default class Input extends React.Component<Partial<InputProps>> {
    render(): JSX.Element;
}
export {};
