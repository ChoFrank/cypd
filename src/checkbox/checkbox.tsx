import React, { CSSProperties } from 'react';


type CheckBoxProps = {
    label: string,
    checked: boolean,
    disabled: boolean,
    className: string,
    style: CSSProperties,
    readOnly: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default class CheckBox extends React.Component<Partial<CheckBoxProps>> {
    render() {
        var wrapperClass = 'cypd-checkbox-wrapper';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        if (this.props.disabled)
            wrapperClass += ` disabled`;
        return (
            <label className={wrapperClass} style={this.props.style}>
                <input type='checkbox' checked={this.props.checked} disabled={this.props.disabled} onChange={this.props.onChange} readOnly={this.props.readOnly}/>
                <span className='cypd-checkbox'/>
                <span>{this.props.label}</span>
            </label>
        );
    }
};
