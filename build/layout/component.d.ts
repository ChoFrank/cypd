import React, { CSSProperties } from 'react';
declare type CenterExtendType = 'extend-left' | 'extend-right' | 'extend-both' | 'collapsed';
declare type SideExtendType = 'extend' | 'collapsed';
declare global {
    interface Window {
        layout: {
            centerStatus?: CenterExtendType;
            leftSideStatus?: SideExtendType;
            rightSideStatus?: SideExtendType;
        };
    }
}
interface SiderProps {
    direction?: 'left' | 'right';
    visible?: boolean;
    customizedToggler?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    toggleClass?: string;
    toggleStyle?: CSSProperties;
    onCollapse?: (visible: boolean) => void;
}
declare class Layout extends React.Component {
    render(): JSX.Element;
}
declare class Header extends React.Component {
    render(): JSX.Element;
}
declare class Navigation extends React.Component {
    render(): JSX.Element;
}
declare class Sider extends React.Component<SiderProps> {
    state: {
        visible: boolean;
    };
    toggler: HTMLInputElement | undefined | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    closeSider: () => void;
    render(): JSX.Element;
}
declare class Center extends React.Component {
    render(): JSX.Element;
}
declare class Body extends React.Component {
    render(): JSX.Element;
}
declare class Footer extends React.Component {
    render(): JSX.Element;
}
declare const _default: {
    Layout: typeof Layout;
    Header: typeof Header;
    Navigation: typeof Navigation;
    Sider: typeof Sider;
    Body: typeof Body;
    Center: typeof Center;
    Footer: typeof Footer;
};
export default _default;
