import React, { CSSProperties } from 'react';
declare type ColorSpace = {
    red: number;
    green: number;
    blue: number;
};
declare type ColorASpace = {
    red: number;
    green: number;
    blue: number;
    opacity: number;
};
declare class CYPDColor {
    private _rgba;
    get red(): number;
    set red(v: number);
    get green(): number;
    set green(v: number);
    get blue(): number;
    set blue(v: number);
    get opacity(): number;
    set opacity(v: number);
    get rgb(): ColorSpace;
    set rgb(args: ColorSpace);
    get rgb_a(): ColorASpace;
    set rgb_a(args: ColorASpace);
    get str(): string;
    set str(s: string);
    plus: (space: ColorSpace) => void;
    clone: () => CYPDColor;
}
declare type ColorPickerProps = {
    value: CYPDColor;
    defaultValue: CYPDColor;
    style: CSSProperties;
    className: string;
    onChange: (value: CYPDColor) => void;
};
export default class ColorPicker extends React.Component<Partial<ColorPickerProps>> {
    state: {
        color: CYPDColor;
        color_offset: ColorSpace;
        bar_offset: number;
        canvas_left: number;
        canvas_top: number;
    };
    str_in: HTMLInputElement | undefined | null;
    constructor(props: any);
    componentDidMount(): void;
    calculate_offset: (v: number) => ColorSpace;
    onChangeBar: (v: number) => void;
    onChangeCanvas: () => void;
    onChangeRed: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeGreen: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeBlue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
