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
declare type NavitemProps = {
    label: string;
    icon?: string;
    url?: string;
    disabled?: boolean;
    children?: Array<NavitemProps>;
    className?: string;
    style?: React.CSSProperties;
    tooltip?: string;
    tooltipDirection?: ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'right-top' | 'right-bottom' | 'bottom-right' | 'bottom-left' | 'left-bottom' | 'left-top');
    tooltipFixedWidth?: number | string;
    onClick?: () => void;
};
declare class NavigationItem extends React.Component<NavitemProps> {
    state: {
        extend: boolean;
    };
    id: string;
    flag: React.RefObject<HTMLInputElement>;
    mouseon: boolean;
    constructor(props: any);
    get toggler_id(): string;
    onToggle: () => void;
    onBlur: () => void;
    direct: () => void;
    render(): JSX.Element;
}
interface SiderProps {
    direction?: 'left' | 'right';
    forceExtend?: boolean;
    visible?: boolean;
    customizedToggler?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    toggleClass?: string;
    toggleStyle?: CSSProperties;
    toggleTooltip?: string;
    toggleTooltipDirection?: ('top' | 'bottom' | 'left' | 'right' | 'top-right' | 'top-left' | 'right-top' | 'right-bottom' | 'bottom-right' | 'bottom-left' | 'left-bottom' | 'left-top');
    toggleTooltipFixedWidth?: number | string;
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
    NavigationItem: typeof NavigationItem;
    Sider: typeof Sider;
    Body: typeof Body;
    Center: typeof Center;
    Footer: typeof Footer;
};
export default _default;
