import React, { CSSProperties } from 'react';

import Empty from '../empty/empty';


declare type ListItemProperties = {
    label: React.ReactNode;
    description?: React.ReactNode;
    decoration?: React.ReactNode;
    mouseEvent?: {
        onMouseDown?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onMouseUp?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onMouseLeave?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    }
}

class ListItem extends React.Component<ListItemProperties> {
    state = { checked: false };
    onCheck = (event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ checked: event.target.checked }); }
    render() {
        const { label, description, decoration, mouseEvent } = this.props;
        const list_id = Math.random().toString();
        return (
            <div className='cypd-listitem' {...mouseEvent}>
                <input className='readmore-check' id={list_id} type='checkbox' onChange={this.onCheck}/>
                <div className='shorten'>
                    <div className='label'>{label}</div>
                    <div className='decoration'>
                        {decoration}
                        {(description)?<label className='readmore-label' htmlFor={list_id}>{(this.state.checked)?'less':'more'}</label>:undefined}
                    </div>
                </div>
                <div className='detail'>{description}</div>
            </div>
        );
    }
}

declare type ListProperties = {
    items: Array<ListItemProperties>;
    className?: string;
    style?: CSSProperties;
}

export default class List extends React.Component<ListProperties> {
    private _id = Math.random().toString().slice(2);
    render() {
        const { items, className, style } = this.props;
        let wrapperClass = 'cypd-list';
        if (className)
            wrapperClass += ` ${className}`;
        return <div className={wrapperClass} style={style}>
            { items.map((list_item, idx) => <ListItem key={`${this._id}_item_${idx}`} {...list_item} />) }
            { (items.length > 0) ? undefined : <Empty />}
        </div>;
    }
};
