import React from 'react';


type TooltipProps = {
    text: string,
    open?: boolean,
    direction?: 'top' | 'bottom' | 'left' | 'right',
    className?: string
}

export default class Tooltip extends React.Component<TooltipProps> {
    render() {
        var wrapperClass = 'cypd-tooltip-wrapper';
        var tipClass = 'cypd-tooltip';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        if (this.props.open)
            wrapperClass += ` open`;
        if (this.props.direction)
            tipClass += ` ${this.props.direction}`;
        else 
            tipClass += ' bottom';
        return <div className={wrapperClass}>{this.props.children}<div className={tipClass}>{this.props.text}</div></div>;
    }
};
