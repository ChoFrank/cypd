import React, { CSSProperties } from 'react';

// import Tooltip from '../tooltip/component';


type SlideProps = {
    value: number,
    min: number,
    max: number,
    step: number,
    className: string,
    style: CSSProperties,
    onChange: (value: number) => void,
    onAfterChange: (value: number) => void,
    disabled: boolean,
}

type SlideState = {
    value: number;
    min: number;
    max: number;
    step: number;
    prevProps: Partial<SlideProps>;
    pressSta?: boolean;
    hoverSta?: boolean;
}

const props_proc = (props: Partial<SlideProps>): SlideState => {
    var { value, min, max, step } = props;
    min = (typeof min === 'number') ? min : 0;
    max = (typeof max === 'number') ? max : 100;
    step = step ? step : 1;
    value = (typeof value === 'number' && !isNaN(value)) ? value : min;
    value = (value < min) ? min : value;
    value = (value > max) ? max : value;
    return { value, min, max, step, prevProps: { ...props } };
}

const cssDragWidth = 17;

export default class Slider extends React.Component<Partial<SlideProps>> {
    state: SlideState;
    trackElem?: HTMLDivElement;
    dragElem?: HTMLDivElement;
    origX?: string;
    origM?: string;
    prevR?: number;
    tempR?: number;
    constructor(props: Partial<SlideProps>) {
        super(props);
        this.state = props_proc(this.props);
    }
    componentDidMount() {
        this.forceUpdate();
    }
    static getDerivedStateFromProps(nextProps: Partial<SlideProps>, prevState: SlideState) {
        const { prevProps } = prevState;
        if (!prevState.pressSta && (nextProps.value !== prevProps.value || nextProps.min !== prevProps.min ||
            nextProps.max !== prevProps.max || nextProps.step !== prevProps.step)) {
            return props_proc(nextProps);
        } else if (!prevState.pressSta && (nextProps.value !== prevState.value || nextProps.min !== prevState.min ||
            nextProps.max !== prevState.max || nextProps.step !== prevState.step)) {
            return props_proc(nextProps);
        } else {
            return null;
        }
    }
    clearTemp = () => {
        this.origX = undefined;
        this.origM = undefined;
        this.tempR = undefined;
    }
    handleXMove = (xpos: number) => {
        const { step, max, min } = this.state;
        if (this.dragElem && this.trackElem && this.origX && this.origM) {
            const drag_w_p = ((isNaN(cssDragWidth)) ? 0 : cssDragWidth);
            const track_w = this.trackElem.offsetWidth ? this.trackElem.offsetWidth : 1; // avoid zero divide
            const orig_px = parseInt(this.origX);
            const orig_p = parseFloat(this.origM);
            const dist_x = xpos - orig_px;
            const offset_bound_p = 100 - (drag_w_p * 100 / track_w);
            const offset_x_p = (dist_x * offset_bound_p / track_w);
            const offset_temp_p = orig_p + offset_x_p;
            if (offset_temp_p < 0) {
                this.tempR = min;
            } else if (offset_temp_p > offset_bound_p) {
                this.tempR = max;
            } else {
                const temp = Math.floor((max - min) * (offset_temp_p / offset_bound_p) / step);
                this.tempR = parseFloat((min + temp * step).toFixed(10));
            }
            if (this.prevR !== this.tempR) {
                this.prevR = this.tempR;
                this.setState({ value: this.tempR });
                if (this.props.onChange) this.props.onChange(this.tempR);
            }
        }
    }
    handleDrag = (ev: MouseEvent) => {
        this.handleXMove(ev.clientX);
    }
    handleTouchDrag = (ev: TouchEvent) => {
        this.handleXMove(ev.touches[0].clientX);
    }
    handleDragMouseUp = () => {
        if (this.props.onAfterChange && typeof this.tempR === 'number') this.props.onAfterChange(this.tempR);
        this.clearTemp();
        document.body.style.userSelect = 'auto';
        document.removeEventListener('mousemove', this.handleDrag, false);
        document.removeEventListener('mouseup', this.handleDragMouseUp, false);
        document.removeEventListener('touchmove', this.handleTouchDrag, false);
        document.removeEventListener('touchend', this.handleDragMouseUp, false);
        this.setState({ pressSta: false });
    }
    handleDragPress = (xpos: number) => {
        if (this.props.disabled) { return; }
        if (this.dragElem && this.dragElem.style.left) {
            this.origX = xpos.toString();
            this.origM = this.dragElem.style.left.replace('%', '');
        }
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', this.handleDrag, false);
        document.addEventListener('mouseup', this.handleDragMouseUp, false);
        this.setState({ pressSta: true });
    }
    handleDragMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        this.handleDragPress(event.clientX);
        document.addEventListener('mousemove', this.handleDrag, false);
        document.addEventListener('mouseup', this.handleDragMouseUp, false);
    }
    handleDragTouchDown = (event: React.TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
        this.handleDragPress(event.touches[0].clientX);
        document.addEventListener('touchmove', this.handleTouchDrag, false);
        document.addEventListener('touchend', this.handleDragMouseUp, false);
    }
    handleTrackMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (this.props.disabled) { return; }
        if (this.trackElem) {
            const { step, max, min } = this.state;
            const { offsetWidth } = this.trackElem;
            const offset_temp_p = (event.clientX - this.trackElem.getBoundingClientRect().left) * 100 / offsetWidth;
            const press_v = parseFloat((min + Math.round((max - min) * (offset_temp_p / 100) / step) * step).toFixed(10));
            if (this.prevR !== press_v) {
                this.setState({value: press_v}, () => { this.prevR = press_v; });
                if (this.props.onChange) this.props.onChange(press_v);
                if (this.props.onAfterChange) this.props.onAfterChange(press_v);
            }
        }
    }
    render() {
        const { value, min, max, pressSta, hoverSta } = this.state
        var containerClass = 'cypd-slider-container';
        var wrapperClass = 'cypd-slider-wrapper';
        var trackClass = 'cypd-slider-track';
        var pointClass = 'cypd-slider-point';
        var rangeClass = 'cypd-slider-range';
        var draw, offset_p = 0;
        if (max > min)
            offset_p = ((value - min) * 100) / (max - min);
        draw = (<svg className={rangeClass} style={{width: `${offset_p}%`, overflow: 'hidden'}}>
            <path d={`M2.5 2.5 H 3000`}/>
        </svg>);
        if (this.props.className)
            containerClass += ` ${this.props.className}`;
        if (this.props.disabled)
            containerClass += ` disabled`;
        if (!!pressSta) {
            pointClass += ' active';
            trackClass += ' active'
        }
        return (
            <div className={containerClass} style={this.props.style}>
                <div className={wrapperClass}>
                    <div className={trackClass} ref={(node) => { if (node) this.trackElem = node; }} onMouseDown={this.handleTrackMouseDown}>
                        {draw}
                        <div
                            ref={(node) => { if (node) this.dragElem = node; }}
                            className={pointClass + ' drag'}
                            style={{ left: `${offset_p}%` }}
                            onMouseDown={this.handleDragMouseDown}
                            onMouseEnter={() => { this.setState({ hoverSta: true }); }}
                            onMouseLeave={() => { this.setState({ hoverSta: false }); }}
                            onTouchStart={this.handleDragTouchDown}
                        >
                            <div className={`cypd-tooltip top ${(pressSta || hoverSta)?'active':'hide'}`} style={{ marginLeft: '6px', visibility: (pressSta || hoverSta)?'visible':'hidden' }}>{value}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
