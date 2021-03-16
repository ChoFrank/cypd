import React from 'react';


type TooltipProps = {
    text: string,
    direction?: ('top' | 'bottom' | 'left' | 'right' 
        | 'top-right' | 'top-left' 
        | 'right-top' | 'right-bottom'
        | 'bottom-right' | 'bottom-left'
        | 'left-bottom' | 'left-top'),
    className?: string,
    fillinOutside?: boolean,
    timeout?: number,
    fixedWidth?: number | string,
}

export default class Tooltip extends React.Component<TooltipProps> {
    tooltipId: string = Math.random().toString().slice(2);
    wrapperRef?: HTMLDivElement | null;
    componentWillUnmount() { this.delete(); }
    create = () => {
        var container = document.getElementById(this.tooltipId);
        if (!container && this.wrapperRef) {
            const rect = this.wrapperRef.getBoundingClientRect();
            const { direction, text, timeout, fixedWidth } = this.props;
            const use_direction = (direction)?direction:'bottom';
            container = document.createElement('div');
            container.id = this.tooltipId;
            container.classList.add('cypd-tooltip');
            container.classList.add(use_direction);
            container.innerText = text;
            const leftX = `${window.pageXOffset + rect.left}px`;
            const rightX = `${window.pageXOffset + rect.right}px`;
            const topY = `${window.pageYOffset + rect.top}px`;
            const bottomY = `${window.pageYOffset + rect.bottom}px`;
            const middleX = `${window.pageXOffset + rect.left + (rect.width / 2)}px`;
            const middleY = `${window.pageYOffset + rect.top + (rect.height / 2)}px`;
            if (use_direction === 'left') {
                container.style.left = leftX;
                container.style.top = middleY
            } else if (use_direction === 'left-top' || use_direction === 'top-left') {
                container.style.left = leftX;
                container.style.top = topY;
            } else if (use_direction === 'left-bottom' || use_direction === 'bottom-left') {
                container.style.left = leftX;
                container.style.top = bottomY;
            } else if (use_direction === 'right') {
                container.style.left = rightX
                container.style.top = middleY;
            } else if (use_direction === 'right-top' || use_direction === 'top-right') {
                container.style.left = rightX;
                container.style.top = topY;
            } else if (use_direction === 'right-bottom' || use_direction === 'bottom-right') {
                container.style.left = rightX;
                container.style.top = bottomY;
            } else if (use_direction === 'top') {
                container.style.left = middleX;
                container.style.top = topY;
            } else if (use_direction === 'bottom') {
                container.style.left = middleX;
                container.style.top = bottomY;
            }
            document.body.appendChild(container);
            if (typeof fixedWidth !== 'undefined') {
                container.style.maxWidth = 'none';
                container.style.width = (typeof fixedWidth === 'number') ? `${fixedWidth}px` : fixedWidth;
            }
            setTimeout(() => { if (container) container.classList.add('active') }, (timeout?timeout:1000));
        }
    }
    delete = () => {
        const container = document.getElementById(this.tooltipId);
        if (container) {
            container.classList.add('hide');
            setTimeout(() => {
                try {
                    if (container && document.getElementById(container.id)) document.body.removeChild(container);
                } catch (e) {
                    console.log('cypd error :>> ', e);
                }
            }, 150);
            // setTimeout(() => { if (container) container.remove(); }, 150);
        }
    }
    render() {
        const { className, fillinOutside } = this.props;
        var wrapperClass = 'cypd-tooltip-wrapper';
        if (className)
            wrapperClass += ` ${className}`;
        return (
            <div 
                className={wrapperClass} 
                ref={(inst) => { this.wrapperRef = inst; }} 
                onMouseEnter={this.create} 
                onMouseLeave={this.delete}
                style={(fillinOutside) ? { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } : undefined}
            >
                {this.props.children}
            </div>
        );
    }
};
