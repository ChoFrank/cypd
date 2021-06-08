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
        let wrapperClass = `cypd-formitem-wrapper${className ? ` ${className}` : ''}${layout ? ` ${layout}` : ''}`;
        let _labelClass = `cypd-formitem-label${labelClass ? ` ${labelClass}` : ''}`;
        if (typeof colon !== 'undefined' && !colon)
            _labelClass += ` no-colon`;
        if (this.props.error && this.props.error.length > 0)
            wrapperClass += ' error';
        let children = React.Children.map(this.props.children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { disabled: ('disabled' in child.props) ? child.props.disabled : disabled });
            } else {
                return child;
            }
        });
        return (
            <div className={wrapperClass} style={style}>
                {(label) ? <div className={_labelClass} style={labelStyle}>{label}</div> : undefined}
                {(layout === 'vertical') ? <div className="verical-children_wrapper">{children}</div> : children}
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
        let wrapperClass = `cypd-form${className ? ` ${className}` : ''}`;
        return (
            <div className={wrapperClass} style={style}>
                {React.Children.map(this.props.children, (child) => {
                    if (React.isValidElement(child) && child.type === Item) {
                        item_props.colon = (typeof child.props.colon !== 'undefined') ? child.props.colon : item_props.colon;
                        item_props.layout = (typeof child.props.layout !== 'undefined') ? child.props.layout : item_props.layout;
                        item_props.labelClass = (typeof child.props.labelClass !== 'undefined') ? child.props.labelClass : item_props.labelClass;
                        item_props.labelStyle = (typeof child.props.labelStyle !== 'undefined') ? child.props.labelStyle : item_props.labelStyle;
                        item_props.disabled = (typeof child.props.disabled !== 'undefined') ? child.props.disabled : item_props.disabled;
                        return React.cloneElement(child, { ...item_props });
                    } else {
                        return child;
                    }
                })}
            </div>
        );
    }
}

export default { Item, Form };
