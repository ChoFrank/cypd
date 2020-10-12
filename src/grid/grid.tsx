import React from 'react';


export class Grid extends React.Component {
    render() {
        return (
            <div className='cypd-grid'>{this.props.children}</div>
        );
    }
}

export class Row extends React.Component {
    render() {
        return (
            <div className='cypd-grid-row'>{this.props.children}</div>
        );
    }
}

declare type CardProps = {
    label: React.ReactNode;
    className?: string;
}

export class Card extends React.Component<CardProps> {
    render() {
        const { label, className } = this.props;
        let cardClass = 'cypd-grid-card';
        if (className)
            cardClass += ` ${className}`;
        return (
            <div className='cypd-grid-card-wrapper'>
                <div className={cardClass}>
                    <div className='title'>{label}</div>
                    <div className='content'>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

