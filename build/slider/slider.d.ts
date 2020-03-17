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
    handleXMove: (xpos: number) => void;
    handleDrag: (ev: MouseEvent) => void;
    handleTouchDrag: (ev: TouchEvent) => void;
    handleDragMouseUp: () => void;
    handleDragPress: (xpos: number) => void;
    handleDragMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    handleDragTouchDown: (event: React.TouchEvent<HTMLDivElement>) => void;
    handleTrackMouseDown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export {};
