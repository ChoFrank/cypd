import React, { CSSProperties } from 'react';

import Icon, { IconProps } from '../icon/component';


declare type DropdownItemProps = {
    icon?: IconProps;
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
            prefix = <Icon {...icon}/>;
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
    children: Array<DropdownItemProps>;
    parent: React.ReactNode | (() => React.ReactNode);
    className?: string;
    style?: CSSProperties;
}

export default class DropdownWrapper extends React.Component<DropdownProps> {
    id: string = Math.random().toString().slice(3);
    state = { extend: false };
    checkbox: React.RefObject<HTMLInputElement>;
    constructor(props: any) {
        super(props);
        this.checkbox = React.createRef();
    }
    onToggle = () => {
        global.setTimeout(() => {
            const { extend } = this.state;
            if (this.checkbox.current) {
                if (extend) {
                    this.checkbox.current.focus();
                } else {
                    this.checkbox.current.blur();
                }
            }
        }, 100);
        this.setState((prevState: { extend: boolean }) => {
            return { extend: !prevState.extend };
        });
    }
    onBlur = () => {
        this.setState({ extend: false });
    }
    render() {
        const { extend } = this.state;
        const { children, className, style, parent } = this.props;
        let renderComponent: React.ReactNode = '';
        let wrapperClass = `cypd-dropdown${(children && children.length > 0 && extend) ? ' extend' : ''}`;
        if (className)
            wrapperClass += ` ${className}`;

        if (typeof parent === 'function') {
            renderComponent = parent();
        } else {
            renderComponent = parent;
        }
        return (
            <label className={wrapperClass} style={style} onMouseDown={this.onToggle}>
                {renderComponent}
                {(children.length > 0) ? <input type='checkbox' style={{ position: 'absolute', transform: 'scale(0)' }} onBlur={this.onBlur} ref={this.checkbox}/> : undefined}
                <div className='wrapper'>{children.map((child, i) => {
                    return (
                        <DropdownItem
                            key={`dropdown_${this.id}_${i}`}
                            {...child}
                        />
                    );
                })}</div>
            </label>
        );
    }
}
