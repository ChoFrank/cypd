import React, { CSSProperties, ReactNode } from 'react';


type CheckBoxProps = {
    label: ReactNode,
    checked: boolean,
    disabled: boolean,
    className: string,
    style: CSSProperties,
    readOnly: boolean,
    checkedType: 'v-line' | 'square',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default class CheckBox extends React.Component<Partial<CheckBoxProps>> {
    render() {
        const { className, style, disabled, label, checked, readOnly, checkedType, onChange } = this.props;
        let wrapperClass = 'cypd-checkbox-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        if (checkedType)
            wrapperClass += ` ${checkedType}`;
        if (disabled)
            wrapperClass += ` disabled`;
        return (
            <label className={wrapperClass} style={style}>
                <input type='checkbox' checked={checked} disabled={disabled} onChange={onChange} readOnly={readOnly}/>
                <span className='cypd-checkbox'/>
                <span>{label}</span>
            </label>
        );
    }
};
