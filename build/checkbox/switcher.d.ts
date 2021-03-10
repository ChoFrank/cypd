import React, { CSSProperties } from 'react';
declare type SwitchButtonProps = {
    checked: boolean;
    disabled: boolean;
    className: string;
    style: CSSProperties;
    readOnly: boolean;
    defaultChecked: boolean;
    label?: [string | React.ReactNode, string | React.ReactNode];
    type?: 'hexigon' | 'normal';
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare type SwitchButtonState = {
    calibrateMargin?: number;
    calibrateTransformOff?: number;
    calibrateTransformOn?: number;
};
export default class SwitchButton extends React.Component<Partial<SwitchButtonProps>> {
    state: SwitchButtonState;
    onLabel: HTMLDivElement | null | undefined;
    offLabel: HTMLDivElement | null | undefined;
    constructor(props: any);
    testCalibrateLabel: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export {};
