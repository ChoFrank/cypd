import React from 'react';


type TooltipProps = {
    text: string,
    direction?: 'top' | 'bottom' | 'left' | 'right',
    className?: string
}

export default class Tooltip extends React.Component<TooltipProps> {
    tooltipId: string = Math.random().toString().slice(2);
    wrapperRef?: HTMLDivElement | null;
    componentWillUnmount() { this.delete(); }
    create = () => {
        var container = document.getElementById(this.tooltipId);
        if (!container && this.wrapperRef) {
            const rect = this.wrapperRef.getBoundingClientRect();
            const { direction } = this.props;
            container = document.createElement('div');
            container.id = this.tooltipId;
            container.classList.add('cypd-tooltip');
            container.classList.add((this.props.direction)?this.props.direction:'bottom');
            container.innerText = this.props.text;
            if (direction === 'left') {
                container.style.left = `${window.pageXOffset + rect.left}px`;
                container.style.top = `${window.pageYOffset + rect.top + (rect.height / 2)}px`;
            } else if (direction === 'right') {
                container.style.left = `${window.pageXOffset + rect.right}px`;
                container.style.top = `${window.pageYOffset + rect.top + (rect.height / 2)}px`;
            } else if (direction === 'top') {
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
            setTimeout(() => { if (container) document.body.removeChild(container); }, 150);
            // setTimeout(() => { if (container) container.remove(); }, 150);
        }
    }
    render() {
        var wrapperClass = 'cypd-tooltip-wrapper';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        return (
            <div 
                className={wrapperClass} 
                ref={(inst) => { this.wrapperRef = inst; }} 
                onMouseEnter={this.create} 
                onMouseLeave={this.delete}
            >
                {this.props.children}
            </div>
        );
    }
};
