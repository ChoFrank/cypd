import React from 'react';
declare type FieldProps = {
    title?: React.ReactNode | string;
    className?: string;
    style?: React.CSSProperties;
    contextStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
};
export declare class Field extends React.Component<FieldProps> {
    render(): JSX.Element;
}
declare type SectionProps = {
    title?: React.ReactNode | string;
    className?: string;
    style?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    contextStyle?: React.CSSProperties;
    disableCollapsed?: boolean;
    extend?: boolean;
    defaultExtend?: boolean;
};
export declare class Section extends React.Component<SectionProps> {
    wrapper: HTMLDivElement | null | undefined;
    toggler: HTMLDivElement | null | undefined;
    get playground(): HTMLElement | undefined;
    get isPlaygroundSupportExtend(): boolean;
    get isPlaygroundExtended(): boolean;
    get allNeighborSectionExtend(): boolean;
    onToggle: () => void;
    render(): JSX.Element;
}
declare type PlaygoundProps = {
    className?: string;
    style?: React.CSSProperties;
    contextStyle?: React.CSSProperties;
    hasExtendToggler?: boolean;
    loading?: boolean;
};
export declare class Playground extends React.Component<PlaygoundProps> {
    wrapper: HTMLDivElement | null | undefined;
    get isExtended(): boolean;
    componentDidMount(): void;
    onToggle: () => void;
    render(): JSX.Element;
}
export {};
