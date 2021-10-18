import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';

import Icon from '../icon/component';
import Tooltip from '../tooltip/component';


type CenterExtendType = 'extend-left' | 'extend-right' | 'extend-both' | 'collapsed';
type SideExtendType = 'extend' | 'collapsed';

declare global {
    interface Window {
        layout: {
            centerStatus?: CenterExtendType,
            leftSideStatus?: SideExtendType,
            rightSideStatus?: SideExtendType,
        }
    }
}
window.layout = {};

declare type NavitemProps = {
    label: string;
    icon?: string;
    url?: string;
    disabled?: boolean;
    children?: Array<NavitemProps>;
    className?: string;
    style?: React.CSSProperties;
    tooltip?: string,
    tooltipDirection?: ('top' | 'bottom' | 'left' | 'right' 
        | 'top-right' | 'top-left' 
        | 'right-top' | 'right-bottom'
        | 'bottom-right' | 'bottom-left'
        | 'left-bottom' | 'left-top'),
    tooltipFixedWidth?: number | string,
    onClick?: () => void;
}

class NavigationItem extends React.Component<NavitemProps> {
    state = { extend: false };
    id = Math.random().toString().slice(2);
    flag: React.RefObject<HTMLInputElement>;
    mouseon: boolean = false;
    constructor(props: any) {
        super(props);
        this.flag = React.createRef();
    }
    get toggler_id() { return `cypd-navitem-input-${this.id}`; }
    onToggle = () => {
        global.setTimeout(() => {
            const { extend } = this.state;
            if (this.flag.current) {
                if (extend) {
                    this.flag.current.focus();
                } else {
                    this.flag.current.blur();
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
    direct = () => {
        const { url, onClick } = this.props;
        this.onToggle();
        if (url)
            window.location.href = url;
        if (onClick)
            onClick();
    }
    render() {
        const { extend } = this.state;
        const { label, icon, disabled, children, className, style, tooltip, tooltipDirection, tooltipFixedWidth } = this.props;
        const wrapperClass = `cypd-navitem${(children && children.length > 0 && extend) ? ' extend' : ''}${className ? ` ${className}` : ''}`;

        return (!disabled) ? (
            <div className={wrapperClass} style={style}>
                {children ? <input ref={this.flag} style={{ position: 'absolute', transform: 'scale(0)' }} onBlur={this.onBlur} type='checkbox'></input> : undefined}
                <div style={{ display: (icon) ? undefined : 'none' }} onMouseDown={this.direct} className='icon'>
                    <Icon type={(icon) ? icon : ''} color='white' />
                    {(tooltip && !extend) ? <Tooltip
                        fillinOutside
                        text={tooltip}
                        direction={tooltipDirection?tooltipDirection:'right'}
                        fixedWidth={tooltipFixedWidth}
                    /> : undefined}
                </div>
                <div className='label' onMouseDown={this.direct}>{label}</div>
                {children ? <ul>{children.map((props, idx) => <li key={`${this.id}-${idx}`}><NavigationItem {...props} /></li>)}</ul> : undefined}
                {children ? <div className='toggler'></div> : undefined}
            </div>
        ) : <div />;
    }
}


interface SiderProps {
    direction?: 'left' | 'right',
    forceExtend?: boolean,
    visible?: boolean,
    customizedToggler?: React.ReactNode,
    className?: string,
    style?: CSSProperties,
    toggleClass?: string,
    toggleStyle?: CSSProperties,
    toggleTooltip?: string,
    toggleTooltipDirection?: ('top' | 'bottom' | 'left' | 'right' 
        | 'top-right' | 'top-left' 
        | 'right-top' | 'right-bottom'
        | 'bottom-right' | 'bottom-left'
        | 'left-bottom' | 'left-top'),
    toggleTooltipFixedWidth?: number | string,
    onCollapse?: (visible: boolean) => void,
}

class Layout extends React.Component {
    render() {
        return <div className='cypd-layout'>{this.props.children}</div>;
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className='header' id='__cypd_header_container'>
                {this.props.children}
            </div>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className='navigation'>
                {this.props.children}
            </div>
        );
    }
}

class Sider extends React.Component<SiderProps> {
    state = { visible: false };
    toggler: HTMLInputElement | undefined | null;
    // mouseInToggleArea: boolean = false;
    componentDidMount() {
        const { toggleClass, toggleStyle, toggleTooltip, toggleTooltipDirection, toggleTooltipFixedWidth, forceExtend } = this.props;
        const toggler = (
            <label className={`toggle${toggleClass ? ` ${toggleClass}` : ''}${forceExtend ? ` no-transform` : ''}`} style={toggleStyle}>
                <input ref={inst => { this.toggler = inst; }} onChange={this.onToggle} type='checkbox' />
                <div /><div /><div />
                {toggleTooltip ? <Tooltip
                    fillinOutside
                    text={toggleTooltip}
                    direction={toggleTooltipDirection?toggleTooltipDirection:'right'}
                    fixedWidth={toggleTooltipFixedWidth}
                /> : undefined}
            </label>
        );
        const header = document.getElementById('__cypd_header_container');
        const old_container = document.getElementById('__cypd_sider_toggler_container');
        if (old_container && header)
            header.removeChild(old_container);
        const container = document.createElement('div');
        container.id = '__cypd_sider_toggler_container';
        container.style['position'] = 'fixed';
        container.style['top'] = '0';
        container.style['left'] = '0';
        if (header) {
            header.appendChild(container);
            if (container)
                ReactDOM.render(toggler, container);
        }

        const mask = document.getElementById('collapse-mask');
        if (mask)
            mask.onclick = this.closeSider;
    }
    componentWillUnmount() {
        const mask = document.getElementById('collapse-mask');
        const header = document.getElementById('__cypd_header_container');
        const container = document.getElementById('__cypd_sider_toggler_container');
        if (mask)
            mask.onclick = null;
        if (header && container)
            header.removeChild(container);
    }
    onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (this.props.onCollapse)
            this.props.onCollapse(e.target.checked);
        this.setState({ visible: e.target.checked });
    }
    closeSider = () => {
        if (this.toggler && this.state.visible) this.toggler.click();
    }
    render() {
        const { className, style, forceExtend } = this.props;
        const { visible } = this.state;
        const direction = this.props.direction ? this.props.direction : 'left';
        let wrapperClass = `column ${direction}${className ? ` ${className}` : ''}`;
        if (direction === 'left')
            window.layout.leftSideStatus = (visible) ? 'extend' : 'collapsed';
        else
            window.layout.rightSideStatus = (visible) ? 'extend' : 'collapsed';
        if (visible)
            wrapperClass += ' visible';
        if (forceExtend) 
            wrapperClass += ' force-visible'
        return (
            <div className={wrapperClass} style={style}>
                <div className='column-wrapper'>{this.props.children}</div>
            </div>
        );
    }
}

class Center extends React.Component {
    render() {
        return (
            <div className={'column middle'}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className='content'>
                {this.props.children}
                <div id='collapse-mask'></div>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                {this.props.children}
            </div>
        );
    }
}

export default {
    Layout,
    Header,
    Navigation,
    NavigationItem,
    Sider,
    Body,
    Center,
    Footer,
};