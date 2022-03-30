import React, { CSSProperties } from 'react';

import Icon from '../icon/component';


type SpinProps = {
    message: string,
    visible: boolean,
    layout: 'vertical' | 'horizontal'
    className: string,
    style: CSSProperties,
    type?: 'linear'
}

export default class Spin extends React.Component<Partial<SpinProps>> {
    render() {
        var wrapperClass = 'cypd-spin-wrapper';
        if (this.props.visible)
            wrapperClass += ` visible`;
        if (this.props.layout)
            wrapperClass += ` ${this.props.layout}`;
        if (this.props.type)
            wrapperClass += ` ${this.props.type}`;
        let element = (
            <div className={wrapperClass} style={this.props.style}>
                <Icon className='cypd-spin' type='loading'/>
                <span className='cypd-spin-msg'>{this.props.message}</span>
            </div>
        );
        if (this.props.type === 'linear') {
            element = (
                <div className={wrapperClass} style={this.props.style}>
                    <div className='logo'><div className='cyp3slash'/></div>
                    <div className='container'><div /><div /><div /><div /></div></div>
            );
        }
        return element;
    }
};
