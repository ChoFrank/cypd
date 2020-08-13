import React, { CSSProperties } from 'react';


import Icon from '../icon/component';

type SwitchButtonProps = {
    checked: boolean,
    disabled: boolean,
    className: string,
    style: CSSProperties,
    readOnly: boolean,
    defaultChecked: boolean,
    label?: [string | React.ReactNode, string | React.ReactNode],
    type?: 'hexigon' | 'normal',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

type SwitchButtonState = {
    calibrateMargin?: number;
}

export default class SwitchButton extends React.Component<Partial<SwitchButtonProps>> {
    state: SwitchButtonState;
    onLabel: HTMLDivElement | null | undefined;
    offLabel: HTMLDivElement | null |undefined;
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    testCalibrateLabel = () => {
        const { calibrateMargin } = this.state;
        if (this.onLabel && this.offLabel) {
            const on_rect = this.onLabel.getBoundingClientRect();
            const off_rect = this.offLabel.getBoundingClientRect();
            if (on_rect.width !== off_rect.width) {
                const dist = Math.abs(on_rect.width - off_rect.width);
                if (dist !== calibrateMargin)
                    this.setState({ calibrateMargin: dist });
            }
        }
    }
    componentDidMount() { this.testCalibrateLabel(); }
    componentDidUpdate() { this.testCalibrateLabel(); }
    render() {
        const { className, disabled, checked, defaultChecked, onChange, readOnly, style, label, type } = this.props;
        const { calibrateMargin } = this.state;
        var wrapperClass = 'cypd-switchbutton-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        if (label)
            wrapperClass += ` has-label`;
        if (type)
            wrapperClass += ` ${type}`;
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
                {(typeof label === 'undefined' && type === 'hexigon') ? <div className='hexigon-wrapper'>
                    <Icon type='hexigon-no' color={disabled?'rgb(200,200,200)':'rgb(129, 129, 129)'}/>
                    <Icon type='hexigon-yes' color={disabled?'rgb(200,200,200)':'#088aab'}/>
                </div> : undefined }
                <div className='cypd-switchbutton' style={{ display: (type === 'hexigon') ? 'none' : undefined }}>
                    {label ? <div className='display-label'>
                        <div style={(calibrateMargin) ? { marginRight: `${calibrateMargin}px` } : undefined} ref={ (inst) => { this.onLabel = inst; } } id='on'>{label[0]}</div>
                        <div ref={ (inst) => { this.offLabel = inst; } } id='off'>{label[1]}</div>
                    </div> : undefined}
                </div>
            </label>
        );
    }
};