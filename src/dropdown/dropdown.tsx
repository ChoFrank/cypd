import React, { CSSProperties } from 'react';

import Icon from '../icon/component';


declare type DropdownItemProps = {
    icon?: string;
    image?: string;
    label: string;
    className?: string;
    style?: CSSProperties;
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
}

export class DropdownItem extends React.Component<DropdownItemProps> {
    onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        if (this.props.onClick)
            this.props.onClick(event);
    }
    render() {
        const { icon, image, label, className, style } = this.props;
        let wrapperClass = 'cypd-dropdown-item';
        if (className)
            wrapperClass += ` ${className}`;
        let prefix = <div />;
        if (icon)
            prefix = <Icon type={icon}/>;
        if (image)
            prefix = <img src={image} alt={image}/>;
        return (
            <div className={wrapperClass} style={style} onClick={this.onClick}>
                <div className='prefix'>{prefix}</div>
                <div className='label'>{label}</div>
            </div>
        );
    }
}

declare type DropdownProps = {
    items: Array<React.ReactNode>;
    className?: string;
    style?: CSSProperties;
}

export default class DropdownWrapper extends React.Component<DropdownProps> {
    checkbox?: HTMLInputElement | null
    forceClose = () => { if (this.checkbox) this.checkbox.checked = false; }
    onMouseLeave = () => { document.addEventListener('click', this.forceClose, false); }
    onMouseEnter = () => { document.removeEventListener('click', this.forceClose, false); }
    render() {
        const { items, className, style } = this.props;
        let wrapperClass = 'cypd-dropdown';
        if (className)
            wrapperClass += ` ${className}`;
        return (
            <label className={wrapperClass} style={style} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                {this.props.children}
                <input type='checkbox' style={{ display: 'none' }} ref={inst => { this.checkbox = inst; }}/>
                <div className='wrapper'>{items.filter(item => (React.isValidElement(item) && item.type === DropdownItem))}</div>
            </label>
        );
    }
}
