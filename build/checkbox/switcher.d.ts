import React, { CSSProperties } from 'react';
declare type SwitchButtonProps = {
    checked: boolean;
    disabled: boolean;
    className: string;
    style: CSSProperties;
    readOnly: boolean;
    defaultChecked: boolean;
    label?: [JSX.Element, JSX.Element];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default class SwitchButton extends React.Component<Partial<SwitchButtonProps>> {
    render(): JSX.Element;
}
export {};
