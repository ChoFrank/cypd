import React from 'react';


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
    container?: HTMLDivElement | null;
    onToggle = (e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ visible: e.target.checked }); }
    render() {
        const { visible } = this.state;
        const { onCollapse } = this.props;
        const direction = this.props.direction ? this.props.direction : 'left';
        let wrapperClass = `column ${direction}`;
        if (direction === 'left')
            window.layout.leftSideStatus = (visible) ? 'extend' : 'collapsed';
        else
            window.layout.rightSideStatus = (visible) ? 'extend' : 'collapsed';
        if (visible)
            wrapperClass += ' visible';
        return (
            <div className={wrapperClass} ref={(e) => { this.container = e; }}>
                {onCollapse ? <label className='toggle'>
                    <input onChange={this.onToggle} type='checkbox'/>
                    <span/><span/><span/>
                </label> : undefined}
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