import React, { CSSProperties, ReactNode } from 'react';


declare type RadioOption = {
    label?: string | ReactNode,
    disabled?: boolean,
    value: string,
}

declare type RadioProps = {
    name: string,
    option: RadioOption,
    checked?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    style?: CSSProperties,
    className?: string,
}

declare type RadioGroupProps = {
    options: Array<RadioOption>,
    layout?: 'vertical' | 'horizontal',
    value?: string,
    onChange?: (v: string) => void,
    style?: CSSProperties,
    className?: string,
}

class Radio extends React.Component<RadioProps> {
    render() {
        var wrapperClass = 'cypd-radio-wrapper';
        if (this.props.option.disabled)
            wrapperClass += ` disabled`;
        return (
            <label className={wrapperClass} style={this.props.style}>
                <input type='radio' name={this.props.name} value={this.props.option.value} disabled={this.props.option.disabled} onChange={this.props.onChange} checked={this.props.checked}/>
                <div className='cypd-radio'/>
                <span>{this.props.option.label}</span>
            </label>
        );
    }
}

export default class RadioGroup extends React.Component<RadioGroupProps> {
    name = Math.random().toString().slice(2);
    onRadioChecked = (event: React.ChangeEvent<HTMLInputElement>) => { if (this.props.onChange) this.props.onChange(event.target.value); }
    render() {
        const { className, value, options, style, layout } = this.props;
        var wrapperClass = 'cypd-radio-group-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        if (layout)
            wrapperClass += ` ${layout}`;
        return (
            <div className={wrapperClass} style={style}>
                {options.map(option => {
                    return <Radio option={option} key={Math.random()} name={this.name} checked={(typeof value === 'undefined') ? undefined : (this.props.value === option.value)} onChange={this.onRadioChecked}/>
                })}
            </div>
        );
    }
};
