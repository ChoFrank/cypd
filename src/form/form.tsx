import React, { ReactNode, CSSProperties } from 'react';


type ItemProps = {
    label: ReactNode | string,
    colon: boolean,
    layout: 'vertical' | 'horizontal'
    className: string,
    style: CSSProperties,
    error: string,
    disabled: boolean,
}

class Item extends React.Component<Partial<ItemProps>> {
    render() {
        var wrapperClass = 'cypd-formitem-wrapper';
        var labelClass = 'cypd-formitem-label';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        if (this.props.layout)
            wrapperClass += ` ${this.props.layout}`;
        if (typeof this.props.colon !== 'undefined' && !this.props.colon)
            labelClass += ` no-colon`;
        if (this.props.error && this.props.error.length > 0)
            wrapperClass += ' error';
        return (
            <div className={wrapperClass} style={this.props.style}>
                {(this.props.label)?<div className={labelClass}>{this.props.label}</div>:undefined}
                {/* {this.props.children} */}
                {React.Children.map(this.props.children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { disabled: ('disabled' in child.props)?child.props.disabled:this.props.disabled });
                    } else {
                        return child;
                    }
                })}
                <div className='help'>{this.props.error}</div>
            </div>
        );
    }
};

export default { Item };