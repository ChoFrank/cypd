import React, { CSSProperties } from 'react';
declare type CheckBoxProps = {
    label: string;
    checked: boolean;
    disabled: boolean;
    className: string;
    style: CSSProperties;
    readOnly: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default class CheckBox extends React.Component<Partial<CheckBoxProps>> {
    render(): JSX.Element;
}
export {};
