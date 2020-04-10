import React, { CSSProperties } from 'react';


type SwitchButtonProps = {
    // label: string,
    checked: boolean,
    disabled: boolean,
    className: string,
    style: CSSProperties,
    readOnly: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default class SwitchButton extends React.Component<Partial<SwitchButtonProps>> {
    render() {
        var wrapperClass = 'cypd-switchbutton-wrapper';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        if (this.props.disabled)
            wrapperClass += ` disabled`;
        return (
            <label className={wrapperClass} style={this.props.style}>
                <input 
                    type='checkbox' 
                    disabled={this.props.disabled} 
                    checked={((typeof this.props.checked !== undefined) && this.props.onChange) ? this.props.checked : undefined} 
                    defaultChecked={((typeof this.props.checked !== undefined) && !this.props.onChange) ? this.props.checked : undefined}
                    onChange={this.props.onChange} 
                    readOnly={this.props.readOnly}
                />
                <div className='cypd-switchbutton'/>
            </label>
        );
    }
};
