import React, { ReactNode, CSSProperties } from 'react';


type ItemProps = {
    label: ReactNode | string,
    colon: boolean,
    layout: 'vertical' | 'horizontal'
    className: string,
    style: CSSProperties,
    labelClass: string,
    labelStyle: CSSProperties,
    error: string,
    disabled: boolean,
}

class Item extends React.Component<Partial<ItemProps>> {
    render() {
        const { className, label, colon, layout, labelClass, labelStyle, error, disabled, style } = this.props;
        let wrapperClass = `cypd-formitem-wrapper${className?` ${className}`:''}${layout?` ${layout}`:''}`;
        let _labelClass = `cypd-formitem-label${labelClass?` ${labelClass}`:''}`;
        if (typeof colon !== 'undefined' && !colon)
            _labelClass += ` no-colon`;
        if (this.props.error && this.props.error.length > 0)
            wrapperClass += ' error';
        return (
            <div className={wrapperClass} style={style}>
                {(label)?<div className={_labelClass} style={labelStyle}>{label}</div>:undefined}
                {React.Children.map(this.props.children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { disabled: ('disabled' in child.props)?child.props.disabled:disabled });
                    } else {
                        return child;
                    }
                })}
                <div className='help'>{error}</div>
            </div>
        );
    }
};

type FormProps = {
    colon: boolean,
    layout: 'vertical' | 'horizontal'
    className: string,
    style: CSSProperties,
    labelClass: string,
    labelStyle: CSSProperties,
    error: string,
    disabled: boolean,
}

class Form extends React.Component<Partial<FormProps>> {
    render() {
        const { className, colon, layout, labelClass, labelStyle, disabled, style } = this.props;
        const item_props = { colon, layout, labelClass, labelStyle, disabled };
        let wrapperClass = `cypd-form${className?` ${className}`:''}`;
        return (
            <div className={wrapperClass} style={style}>
                {React.Children.map(this.props.children, (child) => {
                    if (React.isValidElement(child) && child.type === Item) {
                        return React.cloneElement(child, {...item_props});
                    } else {
                        return child;
                    }
                })}
            </div>
        );
    }
}

export default { Item, Form };