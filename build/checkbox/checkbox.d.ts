import React, { CSSProperties, ReactNode } from 'react';
declare type CheckBoxProps = {
    label: ReactNode;
    defaultChecked: boolean;
    checked: boolean;
    disabled: boolean;
    className: string;
    style: CSSProperties;
    readOnly: boolean;
    checkedType: 'v-line' | 'square';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default class CheckBox extends React.Component<Partial<CheckBoxProps>> {
    render(): JSX.Element;
}
export {};
