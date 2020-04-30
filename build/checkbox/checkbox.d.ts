import React, { CSSProperties, ReactNode } from 'react';
declare type CheckBoxProps = {
    label: ReactNode;
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
