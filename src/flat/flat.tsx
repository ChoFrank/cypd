import React from 'react';
import Spin from '../spin/component'


declare type FieldProps = {
    title?: React.ReactNode | string;
    className?: string;
    style?: React.CSSProperties;
    contextStyle?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
}

export class Field extends React.Component<FieldProps> {
    render() {
        const { title, className, style, contextStyle, titleStyle } = this.props;
        const wrapperClass = 'cypd_flat_field' + (className?` ${className}`:'');
        return <div className={wrapperClass} style={style}>
            {title?<div className='cypd_flat_field_title' style={titleStyle}>{title}</div>:undefined}
            <div className='cypd_flat_field_context' style={contextStyle}>
                {this.props.children}
            </div>
        </div>
    }
}

declare type SectionProps = {
    title?: React.ReactNode | string;
    className?: string;
    style?: React.CSSProperties;
    titleStyle?: React.CSSProperties;
    contextStyle?: React.CSSProperties;
    disableCollapsed?: boolean;
    extend?: boolean;
    defaultExtend?: boolean;
}

export class Section extends React.Component<SectionProps> {
    wrapper: HTMLDivElement | null | undefined;
    toggler: HTMLDivElement | null | undefined;
    get playground() {
        if (this.wrapper && this.wrapper.parentElement)
            return this.wrapper.parentElement;
        return undefined;
    }
    get isPlaygroundSupportExtend() {
        const playground = this.playground;
        if (playground) {
            const { classList } = playground;
            return (classList.contains('extend') || classList.contains('collapse'));
        }
        return false;
    }
    get isPlaygroundExtended() {
        const playground = this.playground;
        if (playground) {
            return (playground.classList.contains('extend'));
        }
        return false;
    }
    get allNeighborSectionExtend() {
        const playground = this.playground;
        if (playground) {
            for (let i = 1; i < playground.children.length; i++) {
                const section = playground.children.item(i);
                if (section) {
                    const section_toggler = section.children.item(0);
                    const style = section.getAttribute('style');
                    if (style && style.indexOf('display: none') >= 0) // skip unshown section
                        continue;
                    if (section_toggler && section_toggler.classList.contains('collapse')) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    }
    onToggle = () => {
        const playground = this.playground;
        if (this.toggler) {
            if (this.toggler.classList.contains('extend')) { // close section
                this.toggler.classList.remove('extend');
                this.toggler.classList.add('collapse');
                if (playground && this.isPlaygroundSupportExtend && this.isPlaygroundExtended) { // change playground toggler to expand all
                    playground.classList.remove('extend'); // show collapse all
                    playground.classList.add('collapse'); // show expand all
                }
                return;
            }
            if (this.toggler.classList.contains('collapse')) { // open section
                this.toggler.classList.remove('collapse');
                this.toggler.classList.add('extend');
                if (playground && this.isPlaygroundSupportExtend && this.allNeighborSectionExtend) { // change playground toggler to collapse all
                    playground.classList.remove('collapse'); // show expand all
                    playground.classList.add('extend'); // show collapse all
                }
                return;
            }
        }
    }
    render() {
        const { title, className, style, disableCollapsed, titleStyle, contextStyle, defaultExtend } = this.props;
        const wrapperClass = 'cypd_flat_section' + (className?` ${className}`:'');
        return <div ref={(inst) => { this.wrapper = inst; }} className={wrapperClass} style={style}>
            {(!title || disableCollapsed)?undefined:<div ref={(inst) => { this.toggler = inst; }} onClick={this.onToggle} className={`cypd_flat_section_toggler ${defaultExtend?'extend':'collapse'}`}></div>}
            {title?<div className='cypd_flat_section_title' style={titleStyle} onClick={this.onToggle}>{title}</div>:undefined}
            <div className='cypd_flat_section_context' style={contextStyle}>{this.props.children}</div>
        </div>
    }
}

declare type PlaygoundProps = {
    className?: string;
    style?: React.CSSProperties;
    contextStyle?: React.CSSProperties;
    hasExtendToggler?: boolean;
    loading?: boolean;
}

export class Playground extends React.Component<PlaygoundProps> {
    wrapper: HTMLDivElement | null | undefined;
    get isExtended() {
        if (this.wrapper)
            return (this.wrapper.classList.contains('extend'));
        return false;
    }
    componentDidMount() {
        if (this.wrapper) {
            let default_extended = false;
            for (let i = 0; i < this.wrapper.children.length; i++) {
                const element = this.wrapper.children.item(i);
                if (element instanceof HTMLElement && element.classList.contains('cypd_flat_section') && element.style.display !== 'none') {
                    const child_toggler = element.children.item(0);
                    if (child_toggler instanceof HTMLElement) {
                        if (child_toggler.classList.contains('collapse'))
                            default_extended = true;
                    }
                }
            }
            if (!default_extended) {
                this.wrapper.classList.remove('collapse');
                this.wrapper.classList.add('extend');
            }
        }
    }
    onToggle = () => {
        if (this.wrapper) {
            if (!this.isExtended) {
                for (let i = 0; i < this.wrapper.children.length; i++) {
                    const element = this.wrapper.children.item(i);
                    if (element) {
                        const child_toggler = element.children.item(0);
                        if (child_toggler && child_toggler.classList.contains('collapse')) {
                            child_toggler.classList.remove('collapse');
                            child_toggler.classList.add('extend');
                        }
                    }
                }
                if (this.wrapper) {
                    this.wrapper.classList.remove('collapse');
                    this.wrapper.classList.add('extend');
                }
            } else {
                for (let i = 0; i < this.wrapper.children.length; i++) {
                    const element = this.wrapper.children.item(i);
                    if (element) {
                        const child_toggler = element.children.item(0);
                        if (child_toggler && child_toggler.classList.contains('extend')) {
                            child_toggler.classList.remove('extend');
                            child_toggler.classList.add('collapse');
                        }
                    }
                }
                if (this.wrapper) {
                    this.wrapper.classList.remove('extend');
                    this.wrapper.classList.add('collapse');
                }
            }
        }
    }
    render() {
        const { className, style, loading, contextStyle, hasExtendToggler } = this.props;
        const wrapperClass = 'cypd_flat_playground' + (className?` ${className}`:'');
        return (
            <div className={wrapperClass} style={style}>
                <Spin visible={loading} type='linear' style={{ opacity: 0.5, bottom: 0 }}></Spin>
                <div className={`cypd_flat_playground_wrapper${hasExtendToggler?' collapse':''}`} style={contextStyle} ref={(inst) => { this.wrapper = inst; }}>
                    {hasExtendToggler?<div className='extend_wrapper'><div className='toggler' onClick={this.onToggle}></div></div>:undefined}
                    {this.props.children}
                </div>
            </div>
        );
    }
}