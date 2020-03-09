import React, { CSSProperties } from 'react';


type CypdSelectEvent = (value: string) => void;

declare global {
    interface Window {
        __cypd_select_on_change: { [s: string]: CypdSelectEvent };
    }
}

type OptionProps = {
    value: string | number,
    disabled?: boolean,
    __selected?: boolean,
    __name?: string,
}

type SelectProps = {
    value: string | number,
    disabled?: boolean,
    placeholder?: string,
    size?: 'normal' | 'small',
    collapsed?: boolean,
    style?: CSSProperties,
    className?: string,
    onChange: CypdSelectEvent,
}

type SelectState = {
    collapsed: boolean,
    direction: 'extend-top' | 'extend-down',
}

window.__cypd_select_on_change = (window.__cypd_select_on_change) ? window.__cypd_select_on_change : {};

export class Option extends React.Component<OptionProps> {
    render() {
        const { value, disabled, __selected, __name } = this.props;
        var optionClass = 'cypd-option';
        if (disabled)
            optionClass += ' disabled';
        return <div className={optionClass}>
            <input id={`${__name}_${value}`} value={value.toString()} name={__name} type='radio' checked={__selected} onChange={(e) => { if (__name) window.__cypd_select_on_change[__name](e.target.value); }}/>
            <label htmlFor={`${__name}_${value}`}>{this.props.children}</label>
        </div>
    }
}

export default class Select extends React.Component<SelectProps> {
    state: SelectState;
    selectId: string;
    scrollIndex?: number;
    selectWrapper?: HTMLDivElement | null;
    optionWrapper?: HTMLDivElement | null;
    constructor(props: SelectProps) {
        super(props);
        this.state = { collapsed: true, direction: 'extend-down' };
        this.selectId = Math.random().toString();
    }
    static getDerivedStateFromProps(nextProps: SelectProps, prevState: SelectState): SelectState | null { return (typeof nextProps.collapsed !== 'undefined') ? { collapsed: nextProps.collapsed, direction: prevState.direction } : null; }
    componentDidMount() { this.autoScroll(); }
    componentWillUnmount() { this.setState = () => {}; }
    componentDidUpdate() { window.__cypd_select_on_change[this.selectId] = (value: string) => { this.props.onChange(value); this.onBlur(); }; }
    // onFocus = () => { /* window.__cypd_select_on_change[this.selectId] = this.props.onChange; */ }
    onBlur = () => { this.setState({ collapsed: true }); this.autoScroll(); }
    onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => { e.persist(); this.setState((prevState: SelectState): Partial<SelectState> => { return { collapsed: !prevState.collapsed, direction: (e.clientY >= 700)?'extend-top':'extend-down' } }); }
    onMouseEnter = () => { document.removeEventListener('mousedown', this.onBlur, false); }
    onMouseLeave = () => { document.addEventListener('mousedown', this.onBlur, false); }
    autoScroll = () => {
        if (this.optionWrapper && typeof this.scrollIndex !== 'undefined') {
            const normalLineHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--default-select-normal-height").replace('px', ''));
            const smallLineHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--default-select-small-height").replace('px', ''));
            const scroll_unit = (this.props.size === 'small') ? smallLineHeight : normalLineHeight;
            const scroll_dist = (!isNaN(scroll_unit)) ? scroll_unit * this.scrollIndex : 0;
            if (typeof this.optionWrapper.scrollTo === 'function')
                this.optionWrapper.scrollTo(0, scroll_dist);
        }
    }
    render() {
        const normalLineHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--default-select-normal-height").replace('px', ''));
        const smallLineHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--default-select-small-height").replace('px', ''));
        const maxDropdownHeight = parseInt(getComputedStyle(document.body).getPropertyValue("--default-select-dropdown-height").replace('px', ''));
        var wrapperClass = 'cypd-select-wrapper';
        var triggerClass = 'cypd-select';
        var optionsClass = 'cypd-options-container ' + this.state.direction;
        var disp = '';
        var children = React.Children.toArray(this.props.children);
        children.forEach((child) => { 
            if (React.isValidElement(child) && child.type === Option) {
                if (`${child.props.value}` === `${this.props.value}`) {
                    if (typeof child.props.children === 'string')
                        disp = child.props.children;
                    else 
                        disp = `${this.props.value}`;
                }
            }
        });
        if (this.state.collapsed) {
            optionsClass += ' collapsed';
        } else {
            triggerClass += ' focus';
        }
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        if (this.props.size)
            wrapperClass += ` ${this.props.size}`;
        if (this.props.size === 'small') { // handle dropdown overflow
            if (!isNaN(smallLineHeight) && (smallLineHeight * children.length > maxDropdownHeight)) {
                optionsClass += ' limit-height';
            }
        } else {
            if (!isNaN(normalLineHeight) && (normalLineHeight * children.length > maxDropdownHeight)) {
                optionsClass += ' limit-height';
            }
        }
        return (
            <div ref={(inst) => { this.selectWrapper = inst; }} className={wrapperClass} style={this.props.style} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <input className={triggerClass} /* onFocus={this.onFocus} */ placeholder={this.props.placeholder} value={disp} readOnly onClick={this.onClick} disabled={this.props.disabled} />
                <div className={optionsClass}><div className='cypd-options-wrapper' ref={(inst) => { this.optionWrapper = inst; }}>{
                    React.Children.map(this.props.children, (child, idx) => {
                        if (React.isValidElement(child) && child.type === Option) {
                            this.scrollIndex = (this.props.value === child.props.value) ? idx : this.scrollIndex;
                            return React.cloneElement(child, { __selected: (`${this.props.value}` === `${child.props.value}`), __name: this.selectId });
                        }
                        else 
                            return child;
                    })
                }</div></div>
            </div>
        );
    }
};
