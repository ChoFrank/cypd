import React from 'react';


type TooltipProps = {
    text: string,
    direction?: 'top' | 'bottom' | 'left' | 'right',
    className?: string,
    fillinOutside?: boolean,
}

export default class Tooltip extends React.Component<TooltipProps> {
    tooltipId: string = Math.random().toString().slice(2);
    wrapperRef?: HTMLDivElement | null;
    componentWillUnmount() { this.delete(); }
    create = () => {
        var container = document.getElementById(this.tooltipId);
        if (!container && this.wrapperRef) {
            const rect = this.wrapperRef.getBoundingClientRect();
            const { direction, text } = this.props;
            const use_direction = (direction)?direction:'bottom';
            container = document.createElement('div');
            container.id = this.tooltipId;
            container.classList.add('cypd-tooltip');
            container.classList.add(use_direction);
            container.innerText = text;
            if (use_direction === 'left') {
                container.style.left = `${window.pageXOffset + rect.left}px`;
                container.style.top = `${window.pageYOffset + rect.top + (rect.height / 2)}px`;
            } else if (use_direction === 'right') {
                container.style.left = `${window.pageXOffset + rect.right}px`;
                container.style.top = `${window.pageYOffset + rect.top + (rect.height / 2)}px`;
            } else if (use_direction === 'top') {
                container.style.left = `${window.pageYOffset + rect.left + (rect.width / 2)}px`;
                container.style.top = `${window.pageYOffset + rect.top}px`;
            } else {
                container.style.left = `${window.pageXOffset + rect.left + (rect.width / 2)}px`;
                container.style.top = `${window.pageYOffset + rect.bottom}px`;
            }
            document.body.appendChild(container);
            setTimeout(() => { if (container) container.classList.add('active') }, 1000);
        }
    }
    delete = () => {
        const container = document.getElementById(this.tooltipId);
        if (container) {
            container.classList.add('hide');
            setTimeout(() => { if (container && document.getElementById(container.id)) document.body.removeChild(container); }, 150);
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
