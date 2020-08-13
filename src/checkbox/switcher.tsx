import React, { CSSProperties } from 'react';


type SwitchButtonProps = {
    checked: boolean,
    disabled: boolean,
    className: string,
    style: CSSProperties,
    readOnly: boolean,
    defaultChecked: boolean,
    label?: [string | React.ReactNode, string | React.ReactNode],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default class SwitchButton extends React.Component<Partial<SwitchButtonProps>> {
    state: { calibrateMargin?: number };
    onLabel: HTMLDivElement | null | undefined;
    offLabel: HTMLDivElement | null |undefined;
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        if (this.onLabel && this.offLabel) {
            const on_rect = this.onLabel.getBoundingClientRect();
            const off_rect = this.offLabel.getBoundingClientRect();
            if (on_rect.width !== off_rect.width) {
                const dist = Math.abs(on_rect.width - off_rect.width);
                this.setState({ calibrateMargin: dist });
            }
        }
    }
    render() {
        const { className, disabled, checked, defaultChecked, onChange, readOnly, style, label } = this.props;
        const { calibrateMargin } = this.state;
        var wrapperClass = 'cypd-switchbutton-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        if (label)
            wrapperClass += ` has-label`
        if (disabled)
            wrapperClass += ` disabled`;
        return (
            <label className={wrapperClass} style={style}>
                <input 
                    type='checkbox' 
                    disabled={disabled} 
                    checked={checked} 
                    defaultChecked={defaultChecked}
                    onChange={onChange} 
                    readOnly={readOnly}
                />
                <div className='cypd-switchbutton'>
                    {label ? <div className='display-label'>
                        <div style={(calibrateMargin) ? { marginRight: `${calibrateMargin}px` } : undefined} ref={ (inst) => { this.onLabel = inst; } } id='on'>{label[0]}</div>
                        <div ref={ (inst) => { this.offLabel = inst; } } id='off'>{label[1]}</div>
                    </div> : undefined}
                </div>
            </label>
        );
    }
};