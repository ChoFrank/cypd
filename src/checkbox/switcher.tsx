import React, { CSSProperties } from 'react';


type SwitchButtonProps = {
    checked: boolean,
    disabled: boolean,
    className: string,
    style: CSSProperties,
    readOnly: boolean,
    defaultChecked: boolean,
    label?: [JSX.Element, JSX.Element],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default class SwitchButton extends React.Component<Partial<SwitchButtonProps>> {
    render() {
        const { className, disabled, checked, defaultChecked, onChange, readOnly, style, label } = this.props;
        var wrapperClass = 'cypd-switchbutton-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        if (label)
            wrapperClass += ` has-label`
        if (disabled)
            wrapperClass += ` disabled`;
        return (
            <label className={wrapperClass} style={style}>
                <input 
                    type='checkbox' 
                    disabled={disabled} 
                    checked={checked} 
                    defaultChecked={defaultChecked}
                    onChange={onChange} 
                    readOnly={readOnly}
                />
                <div className='cypd-switchbutton'>
                    {label ? <div className='display-label'>
                        <div id='on'>{label[0]}</div>
                        <div id='off'>{label[1]}</div>
                    </div> : undefined}
                </div>
            </label>
        );
    }
};