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
    onCollapse?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

interface CenterProps {
    extend: CenterExtendType
}

class Header extends React.Component {
    render() {
        return (
            <div className='cypd-layout-header'>
                {this.props.children}
            </div>
        );
    }
}

class Navigation extends React.Component {
    render() {
        return (
            <div className='cypd-layout-navigation'>
                {this.props.children}
            </div>
        );
    }
}

class Sider extends React.Component<SiderProps> {
    container?: HTMLDivElement | null;
    render() {
        const direction = this.props.direction ? this.props.direction : 'left';
        if (direction === 'left')
            window.layout.leftSideStatus = (this.props.visible) ? 'extend' : 'collapsed';
        else
            window.layout.rightSideStatus = (this.props.visible) ? 'extend' : 'collapsed';
        return (
            <div className={'column ' + direction + (this.props.visible ? ' visible' : '')} ref={(e) => { this.container = e; }}>
                {this.props.onCollapse ? <div className='collapser' onClick={this.props.onCollapse} /> : undefined}
                <div className='cypd-layout-column-wrapper'>{this.props.children}</div>
            </div>
        );
    }
}

class Center extends React.Component<CenterProps> {
    render() {
        return (
            <div className={'column middle ' + this.props.extend}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className='cypd-layout-content'>
                {this.props.children}
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className='cypd-layout-footer'>
                {this.props.children}
            </div>
        );
    }
}

export default {
    Header,
    Navigation,
    Sider,
    Body,
    Center,
    Footer,
};