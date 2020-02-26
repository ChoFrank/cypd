import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';


declare type NitificationType = 'success' | 'info' | 'warning' | 'error';

declare type NotificationArgs = {
    title: string,
    context: string,
    type?: NitificationType,
    timeout?: number,
}

declare type NotificationProps = {
    title: string,
    context: string,
    type: NitificationType,
    onRemove: () => void,
    className: string,
    style: CSSProperties,
}

class Notification extends React.Component<Partial<NotificationProps>> {
    render() {
        var containerClass = 'cypd-notify-container ' + ((this.props.type) ? this.props.type : 'info');
        if (this.props.className)
            containerClass += ` ${this.props.className}`;
        return (
            <div className={containerClass} style={this.props.style}>
                <div className='icon' />
                <div className='content'>
                    <div className='title'>{this.props.title}</div>
                    <div className='message'>{this.props.context}</div>
                </div>
                <svg className='remove' onClick={this.props.onRemove}><path d='M4 4 16 16 M4 16 16 4' stroke='gray' strokeWidth={1} /></svg>
            </div>
        );
    }
}

const notify = (options: NotificationArgs) => {
    const { title, context, timeout, type } = options;
    var auto_timeout: NodeJS.Timeout;
    var container = document.getElementById('g__cypd_notify_window');
    if (!container) {
        container = document.createElement('div');
        container.id = 'g__cypd_notify_window';
        document.body.appendChild(container);
    }
    var block = document.createElement('div');
    block.classList.add('cypd-notify-wrapper');
    container.appendChild(block);
    const removeBlock = (e: HTMLDivElement) => {
        clearTimeout(auto_timeout);
        e.classList.add('hide');
        setTimeout(() => { if (container) container.removeChild(e); }, 210);
    }
    ReactDOM.render(
        <Notification 
            title={title}
            context={context}
            type={type}
            onRemove={() => { removeBlock(block); }}
        />
    , block);
    auto_timeout = global.setTimeout(() => { removeBlock(block); }, (timeout?timeout:5000));
}

export default notify;