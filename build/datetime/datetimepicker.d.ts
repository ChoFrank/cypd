import React, { CSSProperties } from 'react';
declare type ClockSystemType = '12-hour' | '24-hour';
declare function FormatDateTime(date: Date, format?: string, clockSystem?: ClockSystemType): string;
declare function ParseDateTime(str: string, format?: string): Date | undefined;
declare type TimePickerProps = {
    value: Date;
    format: string;
    className: string;
    style: CSSProperties;
    clockSystem?: ClockSystemType;
    disabled: boolean;
    onChange: (date: Date | Date[]) => void;
};
declare type TimePickerState = {
    meridiem: 'ante' | 'post';
    visible: boolean;
    prevProps: Partial<TimePickerProps>;
};
declare class TimePicker extends React.Component<Partial<TimePickerProps>> {
    state: TimePickerState;
    initTime: Date;
    constructor(props: Partial<TimePickerProps>);
    componentWillUnmount(): void;
    onCollapseSelect: () => void;
    onMouseDown: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    onMeridiemChange: (meridiem: 'ante' | 'post') => void;
    onHourChange: (hr: string) => void;
    onMinuteChange: (min: string) => void;
    onSecondChange: (sec: string) => void;
    render(): JSX.Element;
}
declare type DatePickerProps = {
    value: Date;
    format: string;
    className: string;
    style: CSSProperties;
    disabled: boolean;
    onChange: (date: Date | Date[]) => void;
};
declare type PickerState = {
    mouseOutside: boolean;
    direction: 'extend-top' | 'extend-bottom';
    prevProps: Partial<DatePickerProps>;
};
declare class DatePicker extends React.Component<Partial<DatePickerProps>> {
    state: PickerState;
    initTime: Date;
    wrapperRef?: HTMLInputElement | null;
    constructor(props: Partial<DatePickerProps>);
    componentWillUnmount(): void;
    onChange: (date: Date | Date[]) => void;
    onCollapseCalendar: () => void;
    onMouseUp: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    render(): JSX.Element;
}
declare const _default: {
    DatePicker: typeof DatePicker;
    FormatDateTime: typeof FormatDateTime;
    ParseDateTime: typeof ParseDateTime;
    TimePicker: typeof TimePicker;
};
export default _default;
