import React, { CSSProperties } from 'react';


declare type GridProps = {
    className?: string;
    style?: CSSProperties;
}

export class Grid extends React.Component<GridProps> {
    render() {
        const { className, style } = this.props;
        let gridClass = 'cypd-grid';
        if (className)
            gridClass += ` ${className}`;
        return (
            <div className={gridClass} style={style}>{this.props.children}</div>
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
    style?: CSSProperties;
}

export class Card extends React.Component<CardProps> {
    render() {
        const { label, className, style } = this.props;
        let cardClass = 'cypd-grid-card';
        if (className)
            cardClass += ` ${className}`;
        return (
            <div className='cypd-grid-card-wrapper'>
                <div className={cardClass} style={style}>
                    <div className='title'>{label}</div>
                    <div className='content'>{this.props.children}</div>
                </div>
            </div>
        )
    }
}

