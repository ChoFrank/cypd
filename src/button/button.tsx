import React from 'react';

import Icon from '../icon/component';


type ButtonProps = {
    type: 'default' | 'primary' | 'danger',
    icon: string,
    className: string,
    style: React.CSSProperties,
    disabled: boolean,
    size: 'small' | 'normal',
    shape: 'round',
    iconColor: string,
    onClick: (e: React.MouseEvent) => void,
}

export default class Button extends React.Component<Partial<ButtonProps>> {
    render() {
        const { type, icon, shape, iconColor, className, style, disabled, size, onClick } = this.props;
        let classString: string = 'cypd-button ';
        let icon_node: React.ReactNode;
        let icon_default_color = (type === 'default' || typeof type === 'undefined') ? 'gray' : 'white';
        if (disabled) {
            classString += 'disabled';
        } else {
            if (type) 
                classString += type;
            else 
                classString += 'default';
        }
        if (icon)
            icon_node = <Icon type={icon} color={(iconColor)?iconColor:icon_default_color}/>;
        if (!this.props.children)
            classString += ' no-content';
        if (className)
            classString += ` ${className}`
        if (shape)
            classString += ` ${shape}`;
        classString += (size) ? ` ${size}` : '';
        return (
            <div className={classString} style={style} onClick={(disabled)?undefined:onClick}>
                <div className='wrap-icon'>{icon_node}</div>
                <div className='context'>{this.props.children}</div>
            </div>
        );
    }
};
