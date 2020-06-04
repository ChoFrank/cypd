import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';


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

interface SiderProps {
    direction?: 'left' | 'right',
    visible?: boolean,
    customizedToggler?: React.ReactNode,
    className?: string,
    style?: CSSProperties,
    toggleClass?: string,
    toggleStyle?: CSSProperties,
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
            <div className='header'>
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
        const { toggleClass, toggleStyle } = this.props;
        const toggler = (
            <label className={`toggle${toggleClass?` ${toggleClass}`:''}`} style={toggleStyle}>
                <input ref={inst => { this.toggler = inst; }} onChange={this.onToggle} type='checkbox'/>
                <div/><div/><div/>
            </label>
        );
        const old_container = document.getElementById('__cypd_sider_toggler_container');
        if (old_container)
            old_container.remove();
        const container = document.createElement('div');
        container.id = '__cypd_sider_toggler_container';
        container.style['position'] = 'fixed';
        container.style['top'] = '0';
        container.style['left'] = '0';
        document.body.appendChild(container);
        if (container)
            ReactDOM.render(toggler, container);

        const mask = document.getElementById('collapse-mask');
        if (mask)
            mask.onclick = this.closeSider;
    }
    componentWillUnmount() {
        const mask = document.getElementById('collapse-mask');
        if (mask)
            mask.onclick = null;
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
        const { className, style } = this.props;
        const { visible } = this.state;
        const direction = this.props.direction ? this.props.direction : 'left';
        let wrapperClass = `column ${direction}${className?` ${className}`:''}`;
        if (direction === 'left')
            window.layout.leftSideStatus = (visible) ? 'extend' : 'collapsed';
        else
            window.layout.rightSideStatus = (visible) ? 'extend' : 'collapsed';
        if (visible)
            wrapperClass += ' visible';
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
    Sider,
    Body,
    Center,
    Footer,
};