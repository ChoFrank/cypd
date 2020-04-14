import React from 'react';


interface ModalProps {
    title: string,
    footer: boolean,
    style: React.CSSProperties,
    bodyStyle: React.CSSProperties,
    headerStyle: React.CSSProperties,
    className: string,
    visible: boolean,
    onClose: (e: React.MouseEvent) => void,
}

export default class Modal extends React.Component<Partial<ModalProps>> {
    render() {
        const { props } = this;
        var wrapperClass = 'cypd-modal-container';
        var modalClass = 'cypd-modal';
        wrapperClass += props.visible?' active':' hide';
        if (this.props.className) modalClass += ` ${this.props.className}`;
        return (
            <div className={wrapperClass}>
                <div className='cypd-modal-background' onClick={props.onClose}>
                    <div className={modalClass} style={this.props.style} onClick={(e) => { e.stopPropagation(); }}>
                        {(props.onClose) ? <svg className='close-svg' onClick={props.onClose}><path d='M4 4 16 16 M4 16 16 4' stroke='black' strokeWidth={3} /></svg> : undefined}
                        {props.title?<h3 style={props.headerStyle}>{props.title}</h3>:undefined}
                        <div className='content' style={props.bodyStyle}>{props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
};
