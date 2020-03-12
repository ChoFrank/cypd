import React, { CSSProperties } from 'react';
declare type SlideProps = {
    value: number;
    min: number;
    max: number;
    step: number;
    className: string;
    style: CSSProperties;
    onChange: (value: number) => void;
    onAfterChange: (value: number) => void;
    disabled: boolean;
};
declare type SlideState = {
    value: number;
    min: number;
    max: number;
    step: number;
    prevProps: Partial<SlideProps>;
    pressSta?: boolean;
    hoverSta?: boolean;
};
export default class Slider extends React.Component<Partial<SlideProps>> {
    state: SlideState;
    trackElem?: HTMLDivElement;
    dragElem?: HTMLDivElement;
    origX?: string;
    origM?: string;
    prevR?: number;
    tempR?: number;
    constructor(props: Partial<SlideProps>);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: Partial<SlideProps>, prevState: SlideState): SlideState | null;
    clearTemp: () => void;
    handleDrag: (ev: MouseEvent) => void;
    handleDragMouseUp: () => void;
    handleDragMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleTrackMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export {};
