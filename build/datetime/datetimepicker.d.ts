import React, { CSSProperties } from 'react';
declare type ClockSystemType = '12-hour' | '24-hour';
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
    onMeridiemChange: (meridiem: "ante" | "post") => void;
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
    visible: boolean;
    prevProps: Partial<DatePickerProps>;
};
declare class DatePicker extends React.Component<Partial<DatePickerProps>> {
    state: PickerState;
    initTime: Date;
    constructor(props: Partial<DatePickerProps>);
    componentWillUnmount(): void;
    onChange: (date: Date | Date[]) => void;
    onCollapseCalendar: () => void;
    onMouseDown: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void;
    render(): JSX.Element;
}
declare const _default: {
    DatePicker: typeof DatePicker;
    FormatDateTime: (date: Date, format?: string | undefined, clockSystem?: "12-hour" | "24-hour" | undefined) => string;
    TimePicker: typeof TimePicker;
};
export default _default;
