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
    type?: 'hexigon' | 'heart' | 'normal',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

type SwitchButtonState = {
    calibrateMargin?: number;
    calibrateTransformOff?: number;
    calibrateTransformOn?: number;
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
                const dist = Math.abs(on_rect.width - off_rect.width) + 5;
                const sumwidth = on_rect.width + off_rect.width + dist;
                if (dist !== calibrateMargin) {
                    const calcOff = -1 * ((sumwidth * 0.6 - off_rect.width) / 2 - 5);
                    const calcOn = ((sumwidth * 0.6 - on_rect.width) / 2 - 5);
                    this.setState({ calibrateMargin: dist, calibrateTransformOn: calcOn, calibrateTransformOff: calcOff });
                }
            }
        }
    }
    componentDidMount() { this.testCalibrateLabel(); }
    componentDidUpdate() { this.testCalibrateLabel(); }
    render() {
        const { className, disabled, checked, defaultChecked, onChange, readOnly, style, label, type } = this.props;
        const { calibrateMargin, calibrateTransformOff, calibrateTransformOn } = this.state;
        var wrapperClass = 'cypd-switchbutton-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        if (label)
            wrapperClass += ` has-label`;
        if (type)
            wrapperClass += ` ${type}`;
        if (disabled)
            wrapperClass += ` disabled`;

        const onStyle: React.CSSProperties = {
            marginRight: `${(calibrateMargin?calibrateMargin:0)}px`,
            transform: `translateX(${(calibrateTransformOn?calibrateTransformOn:0)}px)`,
        }
        const offStyle: React.CSSProperties = {
            transform: `translateX(${(calibrateTransformOff?calibrateTransformOff:0)}px)`,
        }
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
                    <Icon type='hexigon-no' color={disabled?'rgb(200,200,200)':'rgb(255, 255, 255)'}/>
                    <Icon type='hexigon-yes' color={disabled?'rgb(200,200,200)':'#088aab'}/>
                </div> : undefined }
                {(typeof label === 'undefined' && type === 'heart') ? <div className='heart-wrapper'>
                    <Icon type='heart' color={disabled?'rgb(200,200,200)':'#b92454'}/>
                    <Icon type='heart-solid' color={disabled?'rgb(200,200,200)':'#b92454'}/>
                </div> : undefined }
                <div className='cypd-switchbutton' style={{ display: (type === 'normal' || !type) ? undefined : 'none' }}>
                    {label ? <div className='display-label'>
                        <div style={onStyle} ref={ (inst) => { this.onLabel = inst; } } id='on'>{label[0]}</div>
                        <div style={offStyle} ref={ (inst) => { this.offLabel = inst; } } id='off'>{label[1]}</div>
                    </div> : undefined}
                </div>
            </label>
        );
    }
};