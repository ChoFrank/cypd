import React from 'react';

import Icon from '../icon/component';


type ButtonProps = {
    type: 'default' | 'primary' | 'danger',
    icon: string,
    className: string,
    style: React.CSSProperties,
    disabled: boolean,
    size: 'small' | 'normal',
    shape: 'round'
    onClick: (e: React.MouseEvent) => void,
}

export default class Button extends React.Component<Partial<ButtonProps>> {
    render() {
        var classString: string = 'cypd-button ';
        var icon: React.ReactNode;
        if (this.props.disabled) {
            classString += 'disabled';
        } else {
            if (this.props.type) 
                classString += this.props.type;
            else 
                classString += 'default';
        }
        if (this.props.icon)
            icon = <Icon type={this.props.icon}/>;
        if (!this.props.children)
            classString += ' no-content';
        if (this.props.className)
            classString += ` ${this.props.className}`
        if (this.props.shape)
            classString += ` ${this.props.shape}`;
        classString += (this.props.size) ? ` ${this.props.size}` : '';
        return (
            <div className={classString} style={this.props.style} onClick={(this.props.disabled)?undefined:this.props.onClick}>
                <span className={(this.props.icon)?'hasicon':''}>{icon}{this.props.children}</span>
            </div>
        );
    }
};
