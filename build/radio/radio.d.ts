import React, { CSSProperties, ReactNode } from 'react';
declare type RadioOption = {
    label?: string | ReactNode;
    disabled?: boolean;
    value: string;
};
declare type RadioGroupProps = {
    options: Array<RadioOption>;
    layout?: 'vertical' | 'horizontal';
    value?: string;
    onChange?: (v: string) => void;
    style?: CSSProperties;
    className?: string;
    defaultValue?: string;
};
export default class RadioGroup extends React.Component<RadioGroupProps> {
    state: {
        _internal_value: string;
    };
    componentDidMount(): void;
    name: string;
    onRadioChecked: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
