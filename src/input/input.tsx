import React from 'react';


type InputProps = {
    placeholder: string,
    disabled: boolean,
    value: string | number,
    defaultValue: string | number,
    size: 'small' | 'normal',
    className: string,
    style: React.CSSProperties,
    readOnly: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void,
}

export default class Input extends React.Component<Partial<InputProps>> {
    render() {
        var { size, className, ...others } = this.props;
        var inputClass = 'cypd-input';
        inputClass += (size) ? ` ${size}` : '';
        if (className)
            inputClass += ` ${className}`;
        return (
            <input className={inputClass} {...others}/>
        );
    }
};
