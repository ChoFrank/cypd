import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar/dist/entry.nostyle';

import Input from '../input/input';
import Select, { Option } from '../select/component';
import Icon from '../icon/component';


declare type ClockSystemType = '12-hour' | '24-hour';

const toIntegerFixed = (v: number, len: number) => { 
    var ret = v.toString();
    while (ret.length < len) ret = `0${ret}`;
    return ret;
}

function FormatDateTime(date: Date, format?: string, clockSystem?: ClockSystemType): string {
    var r = (clockSystem === '12-hour') ? ((date.getHours() < 12) ? 'AM ': 'PM ') : '';
    r += format ? format.slice() : 'YYYY-MM-DD HH:mm:ss';
    r = r.replace('YYYY', toIntegerFixed(date.getFullYear(), 4).toString());
    r = r.replace('MM', toIntegerFixed(date.getMonth()+1, 2).toString());
    r = r.replace('DD', toIntegerFixed(date.getDate(), 2).toString());
    r = r.replace('mm', toIntegerFixed(date.getMinutes(), 2).toString());
    r = r.replace('sss', toIntegerFixed(date.getMilliseconds(), 3).toString());
    r = r.replace('ss', toIntegerFixed(date.getSeconds(), 2).toString());
    if (clockSystem === '12-hour') {
        r = r.replace('HH', toIntegerFixed((date.getHours() < 12) ? date.getHours(): (date.getHours() - 12), 2).toString());
    } else {
        r = r.replace('HH', toIntegerFixed(date.getHours(), 2).toString());
    }
    return r;
}

function ParseDateTime(str: string, format?: string): Date | undefined {
    const parse = new Date();
    const use_format = (format) ? format.slice() : 'YYYY-MM-DD HH:mm:ss';
    const symbol_parse = [ 'YYYY', 'MM', 'DD', 'HH', 'mm', 'ss', 'sss' ];
    const symbol_index = symbol_parse.map(symbol => {
        const search = use_format.indexOf(symbol);
        if (symbol === 'ss' && search >= 0) {
            const sss_search = use_format.indexOf('sss');
            if (search === sss_search) {
                // avoid conflict with 'sss'
                return use_format.substr(sss_search + 3).indexOf('ss');
            }
        }
        return search;
    });
    const parse_order: Array<string> = [];
    let parse_pattern = use_format.slice();

    for (let i = 0; i < symbol_parse.length; i++) {
        const symbol = symbol_parse[i];
        const search = symbol_index[i];

        if (search >= 0) {
            let insert_idx = 0;

            for (let j = 0; j < parse_order.length; j++) {
                const exist_symbol = parse_order[j];
                const exist_search = symbol_index[symbol_parse.indexOf(exist_symbol)];
                if (exist_search < search) {
                    // find next insert point
                    insert_idx = j + 1;
                } else if (exist_search > search) {
                    // insert here
                    break;
                } else {
                    // never happen!!!
                }
            }
            // record parse order
            parse_order.splice(insert_idx, 0, symbol);
            // generate parse pattern
            parse_pattern = parse_pattern.replace(symbol, '(\\d+)');
        }
    }

    if (parse_order.length > 0) {
        console.log('parse_order :>> ', parse_order);
        const matcher = new RegExp(parse_pattern);
        const match = matcher.exec(str);
        if (match) {
            const match_array = Array.from(match).slice(1);
            parse_order.forEach((symbol, order) => {
                const val = parseInt(match_array[order]);
                if (symbol === 'YYYY') {
                    parse.setFullYear(val);
                } else if (symbol === 'MM') {
                    parse.setMonth((val - 1));
                } else if (symbol === 'DD') {
                    parse.setDate(val);
                } else if (symbol === 'HH') {
                    parse.setHours(val);
                } else if (symbol === 'mm') {
                    parse.setMinutes(val);
                } else if (symbol === 'ss') {
                    parse.setSeconds(val);
                } else if (symbol === 'sss') {
                    parse.setMilliseconds(val);
                }
            });
        } else {
            return undefined;
        }
    }

    return parse;
}

// declare type HourType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
// declare type MinuteType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
// declare type SecondType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;

type TimePickerProps = {
    value: Date,
    format: string,
    className: string,
    style: CSSProperties,
    clockSystem?: ClockSystemType,
    disabled: boolean,
    onChange: (date: Date | Date[]) => void,
}

type TimePickerState = {
    meridiem: 'ante' | 'post',
    visible: boolean,
    prevProps: Partial<TimePickerProps>,
}

class TimePicker extends React.Component<Partial<TimePickerProps>> {
    state: TimePickerState;
    initTime = new Date();
    constructor(props: Partial<TimePickerProps>) {
        super(props);
        var { value } = props;
        var meridiem: 'ante' | 'post';
        value = value ? value : new Date();
        meridiem = (value.getHours() < 12) ? 'ante' : 'post';
        this.state = {
            visible: false,
            meridiem,
            prevProps: props,
        };
    }
    componentWillUnmount() { this.setState = () => {}; }
    onCollapseSelect = () => { this.setState({visible: false}); }
    onMouseDown = () => { this.setState((prevState: TimePickerState): Partial<TimePickerState> => ({ visible: !prevState.visible })); }
    onMouseLeave = () => { document.addEventListener('mousedown', this.onCollapseSelect, false); }
    onMouseEnter = () => { document.removeEventListener('mousedown', this.onCollapseSelect, false); }
    onMeridiemChange = (meridiem: 'ante' | 'post') => {
        if (this.props.onChange) {
            var ret = (this.props.value) ? this.props.value : this.initTime;
            this.props.onChange(new Date(ret.setHours(ret.getHours() + ((meridiem === 'ante')?(-12):(12)))));
        }
    }
    onHourChange = (hr: string) => { if (this.props.onChange) this.props.onChange(new Date((this.props.value?this.props.value:this.initTime).setHours(parseInt(hr)))); }
    onMinuteChange = (min: string) => { if (this.props.onChange) this.props.onChange(new Date((this.props.value?this.props.value:this.initTime).setMinutes(parseInt(min)))); }
    onSecondChange = (sec: string) => { if (this.props.onChange) this.props.onChange(new Date((this.props.value?this.props.value:this.initTime).setSeconds(parseInt(sec)))); }
    render() {
        var wrapperClass = 'cypd-digital-clock-wrapper';
        const default_time_format = (this.props.format) ? this.props.format : 'HH:mm:ss';
        const { visible, meridiem } = this.state;
        const time = this.props.value ? this.props.value : this.initTime;
        const showValue = FormatDateTime(time, default_time_format, this.props.clockSystem);
        const hr_v = ((this.props.clockSystem === '12-hour' && time.getHours() >= 12) ? (time.getHours() - 12) : time.getHours()).toString();
        const min_v = time.getMinutes().toString();
        const sec_v = time.getSeconds().toString();
        const meridiem_select = (this.props.clockSystem) ? <Select className='meridiem' value={meridiem} onChange={(v) => {
            if (v === 'ante' || v === 'post')
                this.onMeridiemChange(v);
            else
                this.onMeridiemChange('ante');
        }} collapsed={!visible}>
            <Option value='ante'>AM</Option>
            <Option value='post'>PM</Option>
        </Select> : undefined;
        if (this.props.clockSystem === '12-hour')
            wrapperClass += ' clock-system';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        return (
            <div className={wrapperClass} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                <Input readOnly placeholder='Select time' onMouseDown={this.onMouseDown} value={showValue} disabled={this.props.disabled}/>
                {meridiem_select}
                <Select className='hr' value={hr_v} onChange={this.onHourChange} collapsed={!visible}>{
                    Array.from(Array((this.props.clockSystem === '12-hour') ? 12 : 24).keys()).map(v => <Option key={Math.random()} value={v.toString()}>{v}</Option>)
                }</Select>
                <Select className='min' value={min_v} onChange={this.onMinuteChange} collapsed={!visible}>{
                    Array.from(Array(60).keys()).map(v => <Option key={Math.random()} value={v.toString()}>{v}</Option>)
                }</Select>
                <Select className='sec' value={sec_v} onChange={this.onSecondChange} collapsed={!visible}>{
                    Array.from(Array(60).keys()).map(v => <Option key={Math.random()} value={v.toString()}>{v}</Option>)
                }</Select>
                <Icon type='clock' />
            </div>
        );
    }
}

type DatePickerProps = {
    value: Date,
    format: string,
    className: string,
    style: CSSProperties,
    disabled: boolean,
    onChange: (date: Date | Date[]) => void,
}

type PickerState = {
    mouseOutside: boolean,
    direction: 'extend-top' | 'extend-bottom',
    prevProps: Partial<DatePickerProps>,
}

class DatePicker extends React.Component<Partial<DatePickerProps>> {
    state: PickerState;
    initTime = new Date();
    wrapperRef?: HTMLInputElement | null
    constructor(props: Partial<DatePickerProps>) {
        super(props);
        this.state = { mouseOutside: true, prevProps: props, direction: 'extend-top' };
    }
    componentWillUnmount() { this.setState = () => {}; }
    onChange = (date: Date | Date[]) => { 
        if (this.props.onChange) this.props.onChange(date);
        this.setState({ mouseOutside: true }, this.onCollapseCalendar);
    }
    onCollapseCalendar = () => {
        const container = document.getElementById('g__cypd_calendar_window');
        if (container && this.state.mouseOutside)
            document.body.removeChild(container);
    };
    onMouseUp = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => { 
        const extendDir = (e.clientY < 300) ? 'extend-bottom' : "extend-top";
        var container = document.getElementById('g__cypd_calendar_window');
        if (container) {
            document.body.removeChild(container);
        } else {
            if (this.wrapperRef) {
                this.wrapperRef.focus();
                const rect = this.wrapperRef.getBoundingClientRect();
                const date = (this.props.value) ? this.props.value : this.initTime;
                container = document.createElement('div');
                container.id = 'g__cypd_calendar_window';
                container.style['position'] = 'absolute';
                container.style['width'] = '250px';
                container.style['left'] = `${window.pageXOffset + rect.left}px`
                if (extendDir === 'extend-bottom')
                    container.style['top'] = `${window.pageYOffset + rect.bottom}px`;
                else
                    container.style['top'] = `${window.pageYOffset + rect.top - 260}px`;
                container.addEventListener('mouseenter', this.onMouseEnter, false);
                container.addEventListener('mouseleave', this.onMouseLeave, false);
                document.body.appendChild(container);
                ReactDOM.render(<Calendar onChange={this.onChange} value={date} />, container);
                setTimeout(() => { if (container) container.style.opacity = '1'; }, 50);
            }
        }
    }
    onMouseLeave = () => { this.setState({ mouseOutside: true }) }
    onMouseEnter = () => { this.setState({ mouseOutside: false }); }
    render() {
        const default_date_format = (this.props.format) ? this.props.format : 'YYYY-MM-DD';
        const date = (this.props.value) ? this.props.value : this.initTime;
        var wrapperClass = 'cypd-picker-wrapper';
        wrapperClass += ` ${this.state.direction}`;
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        return (
            <div className={wrapperClass} style={this.props.style}>
                <Input instance={(inst) => { this.wrapperRef = inst; }} readOnly onMouseUp={this.onMouseUp} placeholder='Select date' value={FormatDateTime(date, default_date_format)} disabled={this.props.disabled} onBlur={this.onCollapseCalendar}/>
                <Icon type='calendar' />
            </div>
        );
    }
};
export default { DatePicker, FormatDateTime, ParseDateTime, TimePicker };