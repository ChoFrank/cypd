import React, { CSSProperties } from 'react';


type ProgressBarProps = {
    percentage: number,
    hint?: string | React.ReactNode
    className?: string,
    style?: CSSProperties,
}

export default class ProgressBar extends React.Component<ProgressBarProps> {
    render() {
        const { percentage, hint } = this.props;
        var containerClass = 'cypd-slider-container';
        var wrapperClass = 'cypd-slider-wrapper';
        var trackClass = 'cypd-slider-track progress-track';
        var rangeClass = 'cypd-slider-range';
        var hintClass = 'cypd-progress-hint';
        var draw, offset_p = percentage;
        if (offset_p > 100)
            offset_p = 100;
        if (offset_p < 0)
            offset_p = 0;
        draw = (<svg className={rangeClass} style={{width: `${offset_p}%`, overflow: 'hidden'}}>
            <path d={`M2.5 2.5 H 3000`}/>
        </svg>);
        if (this.props.className)
            containerClass += ` ${this.props.className}`;
        return (
            <div className={containerClass} style={this.props.style}>
                <div className={wrapperClass}>
                    {(hint)?<div className={hintClass}>{hint}</div>:undefined}
                    <div className={trackClass}>
                        {draw}
                    </div>
                </div>
            </div>
        );
    }
};
