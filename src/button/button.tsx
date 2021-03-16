import React from 'react';

import Icon from '../icon/component';
import Tooltip from '../tooltip/component';


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
    tooltip?: string,
    tooltipFixedWidth?: string | number,
    tooltipDirection?: ('top' | 'bottom' | 'left' | 'right' 
        | 'top-right' | 'top-left' 
        | 'right-top' | 'right-bottom'
        | 'bottom-right' | 'bottom-left'
        | 'left-bottom' | 'left-top'),
}

export default class Button extends React.Component<Partial<ButtonProps>> {
    render() {
        const { type, icon, shape, iconColor, className, style, disabled, size, tooltip, tooltipDirection, tooltipFixedWidth, onClick } = this.props;
        let classString: string = 'cypd-button';
        let icon_node: React.ReactNode;
        let icon_default_color = (type === 'default' || typeof type === 'undefined') ? 'gray' : 'white';

        if (disabled) {
            classString += ' disabled';
            icon_default_color = 'rgb(185, 185, 185)';
        } else {
            if (type) 
                classString += ` ${type}`;
            else 
                classString += ' default';
        }
        if (icon)
            icon_node = <Icon type={icon} color={(iconColor)?iconColor:icon_default_color}/>;
        if (iconColor)
            classString += ' specify-icon-color';
        if (!this.props.children)
            classString += ' no-content';
        if (className)
            classString += ` ${className}`
        if (shape)
            classString += ` ${shape}`;
        classString += (size) ? ` ${size}` : '';

        const button = (
            <div className={classString} style={style} onClick={(disabled)?undefined:onClick}>
                <div className='wrap-icon'>{icon_node}</div>
                <div className='context'>{this.props.children}</div>
                {tooltip ? (
                    <Tooltip fillinOutside text={tooltip} fixedWidth={tooltipFixedWidth} direction={tooltipDirection?tooltipDirection:'top'}/>
                ) : undefined}
            </div>
        );

        return button;
    }
};