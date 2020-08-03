import React, { CSSProperties } from 'react';
import Slider from '../bar/slider';
import Input from '../input/input';

const hexFixed = (v: number) => {
    let fix = v.toString(16);
    if (fix.length === 1)
        fix = '0' + fix;
    return fix;
}

declare type ColorSpace = { red: number, green: number, blue: number };
declare type ColorASpace = { red: number, green: number, blue: number, opacity: number };

const MAX_COLOR_OFFSET_LINEAR = 1535;

class CYPDColor {
    private _rgba: ColorASpace = { red: 0, green: 0, blue: 0, opacity: 1 };
    get red() { return Number(this._rgba.red); }
    set red(v: number) { this._rgba.red = (!isNaN(v) && v >= 0 && v <= 255) ? v : 0; }
    get green() { return Number(this._rgba.green); }
    set green(v: number) { this._rgba.green = (!isNaN(v) && v >= 0 && v <= 255) ? v : 0; }
    get blue() { return Number(this._rgba.blue); }
    set blue(v: number) { this._rgba.blue = (!isNaN(v) && v >= 0 && v <= 255) ? v : 0; }
    get opacity() { return Number(this._rgba.opacity); }
    set opacity(v: number) { this._rgba.opacity = (!isNaN(v) && v >= 0 && v <= 1) ? v : 1; }
    get rgb() { return { red: this.red, green: this.green, blue: this.blue }; }
    set rgb(args: ColorSpace) {
        const {red, green, blue} = args;
        this.red = red;
        this.green = green;
        this.blue = blue;
    }
    get rgb_a() { return { red: this.red, green: this.green, blue: this.blue, opacity: this.opacity }; }
    set rgb_a(args: ColorASpace) {
        const {red, green, blue, opacity} = args;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.opacity = opacity;
    }
    get str() {
        const {red, green, blue, opacity} = this._rgba;
        const list = (opacity === 1) ? [ red, green, blue ] : [ red, green, blue, (opacity * 255) ];
        return '#' + list.map(v => hexFixed(v)).join('');
    }
    set str(s: string) {
        const color = { ...this._rgba };
        if (s[0] === '#') {
            if (s.length === 4) {
                color.red = Math.trunc((parseInt(s[1], 16) / 15) * 255);
                color.green = Math.trunc((parseInt(s[2], 16) / 15) * 255);
                color.blue = Math.trunc((parseInt(s[3], 16) / 15) * 255);
            } else if (s.length === 7) {
                color.red = Math.trunc(parseInt(s.slice(1, 3), 16));
                color.green = Math.trunc(parseInt(s.slice(3, 5), 16));
                color.blue = Math.trunc(parseInt(s.slice(5, 7), 16));
            } else if (s.length === 9) {
                color.red = Math.trunc(parseInt(s.slice(1, 3), 16));
                color.green = Math.trunc(parseInt(s.slice(3, 5), 16));
                color.blue = Math.trunc(parseInt(s.slice(5, 7), 16));
                color.opacity = parseInt(s.slice(5, 7), 16) / 255;
            }
        }
        if (!isNaN(color.red) && !isNaN(color.green) && !isNaN(color.blue) && !isNaN(color.opacity)) {
            this._rgba = color;
        }
    }
    plus = (space: ColorSpace) => {
        const { red, green, blue } = space;
        const tmp_red = red + this.red;
        const tmp_green = green + this.green;    
        const tmp_blue = blue + this.blue;
        this.red = (tmp_red >= 0) ? tmp_red : 0;
        this.green = (tmp_green >= 0) ? tmp_green : 0;
        this.blue = (tmp_blue >= 0) ? tmp_blue : 0;
        this.red = (tmp_red <= 255) ? tmp_red : 255;
        this.green = (tmp_green <= 255) ? tmp_green : 255;
        this.blue = (tmp_blue <= 255) ? tmp_blue : 255;
    }
    clone = () => {
        const new_color = new CYPDColor();
        new_color.rgb_a = this.rgb_a;
        return new_color;
    }
}

type ColorPickerProps = {
    value: CYPDColor;
    defaultValue: CYPDColor;
    style: CSSProperties;
    className: string;
    onChange: (value: CYPDColor) => void;
}

export default class ColorPicker extends React.Component<Partial<ColorPickerProps>> {
    state: { color: CYPDColor; color_offset: ColorSpace; bar_offset: number; canvas_left: number; canvas_top: number }
    str_in: HTMLInputElement | undefined | null;
    constructor(props: any) {
        super(props);

        const { value, defaultValue } = this.props;
        const blank_color = new CYPDColor();
        blank_color.str = '#F00';
        this.state = {
            color: (value) ? value : (defaultValue ? defaultValue : blank_color),
            color_offset: { red: 0, green: 0, blue: 0 },
            bar_offset: MAX_COLOR_OFFSET_LINEAR, 
            canvas_left: 100, 
            canvas_top: 0,
        };
    }
    componentDidMount() { this.setState({ color_offset: this.calculate_offset(MAX_COLOR_OFFSET_LINEAR) }) }
    calculate_offset = (v: number): ColorSpace => {
        const { color } = this.state;
        const { red, green, blue } = color.rgb_a;
        const max_value = [ red, green, blue ].sort((a, b) => a-b)[2];
        const offset: ColorSpace = { red: 0, green: 0, blue: 0 };
        
        if (v <= MAX_COLOR_OFFSET_LINEAR && v >= 1280) {
            offset.blue = Math.trunc(max_value * (MAX_COLOR_OFFSET_LINEAR - v) / 255);
        } else if (v <= 1279 && v >= 1024) {
            offset.red = Math.trunc(max_value * (1024 - v) / 255);
        } else if (v <= 1023 && v >= 768) {
            offset.green = Math.trunc(max_value * (1023 - v) / 255);
        } else if (v <= 767 && v >= 512) {
            offset.blue = Math.trunc(max_value * (v - 512) / 255);
        } else if (v <= 511 && v >= 256) {
            offset.red = Math.trunc(max_value * (256 - v) / 255);
        } else if (v <= 255 && v >= 0) {
            offset.green = Math.trunc(max_value * v / 255);
        }
        
        if (v <= 1279 && v >= 768)
            offset.blue = max_value;
        if (v >= 1280 && v <= 255)
            offset.red = max_value;
        if (v <= 768 && v >= 256)
            offset.green = max_value;

        if (v >= 1024)
            offset.green = -1 * max_value;
        if (v >= 512 && v <= 1023)
            offset.red = -1 * max_value;
        if (v <= 511)
            offset.blue = -1 * max_value;

        return offset;
    }
    onChangeBar = (v: number) => {
        this.setState({ color_offset: this.calculate_offset(v), bar_offset: v });
    }
    onChangeCanvas = () => {}
    onChangeRed = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { color, color_offset } = this.state;
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            const new_color = color.clone();
            new_color.plus(color_offset);
            new_color.red = value;
            this.setState({ color: new_color, color_offset: { red: 0, green: 0, blue: 0 } });
        }
    }
    onChangeGreen = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {

        }
    }
    onChangeBlue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {

        }
    }
    render() {
        const { color, color_offset, bar_offset } = this.state;
        const { style, className } = this.props;
        const show_color = color.clone();
        show_color.plus(color_offset);

        let wrapperClass = 'cypd-color-picker-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        return (
            <div className={wrapperClass} style={style}>
                <div id='picker'>
                    <Slider layout='vertical' dragSize={10} value={bar_offset} max={MAX_COLOR_OFFSET_LINEAR} onChange={this.onChangeBar}/>
                    <div id='canvas'></div>
                </div>
                <div id='console'>
                    <div className='row'>
                        <Input value={show_color.str}/>
                    </div>
                    <div className='row'>
                        <Input value={show_color.red} onChange={this.onChangeRed}/>
                    </div>
                    <div className='row'>
                        <Input value={show_color.green} onChange={this.onChangeGreen}/>
                    </div>
                    <div className='row'>
                        <Input value={show_color.blue} onChange={this.onChangeBlue}/>
                    </div>
                </div>
            </div>
        );
    }
}