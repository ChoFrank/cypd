import React, { CSSProperties } from 'react';

import Icon from '../icon/component';


type SpinProps = {
    message: string,
    visible: boolean,
    layout: 'vertical' | 'horizontal'
    className: string,
    style: CSSProperties,
}

export default class Spin extends React.Component<Partial<SpinProps>> {
    render() {
        var wrapperClass = 'cypd-spin-wrapper';
        if (this.props.visible)
            wrapperClass += ` visible`;
        if (this.props.layout)
            wrapperClass += ` ${this.props.layout}`;
        return (
            <div className={wrapperClass} style={this.props.style}>
                <Icon className='cypd-spin' type='loading'/>
                <span className='cypd-spin-msg'>{this.props.message}</span>
            </div>
        );
    }
};
