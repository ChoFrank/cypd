import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';

import Empty from '../empty/empty'; 

declare type CypdListDragManagement = {
    onHover: (item_id?: number) => void;
    onDragStart: (drag_order: number) => void;
    onDrop: (drop_order: number) => void;
    drag_order?: number;
}

declare global {
    interface Window {
        __cypd_list_drag_management: { [s: string]: CypdListDragManagement };
    }
}

declare type ListItemProperties = {
    label: React.ReactNode;
    description?: React.ReactNode;
    decoration?: React.ReactNode;
    index?: string;
}

declare type ListItemInterface = ListItemProperties & { __cypd_listitem_order: number; className: string }

declare type ListItemHoverType = 'top' | 'bottom' | 'none';

class ListItem extends React.Component<ListItemInterface> {
    state: { checked: boolean, parent_id: string, hovering: ListItemHoverType } = { checked: false, parent_id: '', hovering: 'none' };
    itemRef: HTMLDivElement | null | undefined;
    componentDidMount() {
        const parent_dom = ReactDOM.findDOMNode(this);
        const parent_elem = (parent_dom) ? parent_dom.parentElement : undefined;
        const parent_id = (parent_elem) ? parent_elem.getAttribute('id') : '';
        this.setState({ parent_id });
    }
    componentWillUnmount() { this.setState = () => {}; }
    onCheck = (event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ checked: event.target.checked }); }
    onMouseEnter = () => {
        const drag_management = window.__cypd_list_drag_management[this.state.parent_id];
        if (drag_management) {
            drag_management.onHover(this.props.__cypd_listitem_order);
        }
    }
    onMouseLeave = () => {
        const drag_management = window.__cypd_list_drag_management[this.state.parent_id];
        if (drag_management) {
            drag_management.onHover(undefined);
            this.setState({ hovering: 'none' });
        }
    }
    onMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (this.itemRef) {
            const { hovering } = this.state;
            const rect = this.itemRef.getBoundingClientRect();
            const offset_y = event.clientY - rect.top;
            if (offset_y >= (rect.height / 2) && hovering !== 'bottom')
                this.setState({ hovering: 'bottom' });
            if (offset_y < (rect.height / 2) && hovering !== 'top')
                this.setState({ hovering: 'top' });
        }
    }
    get_insert_position = (): number => {
        const { hovering } = this.state;
        const { __cypd_listitem_order } = this.props;
        const drag_management = window.__cypd_list_drag_management[this.state.parent_id];
        const { drag_order } = drag_management;
        if (typeof drag_order === 'number' && __cypd_listitem_order > drag_order)
            return (hovering === 'top') ? (__cypd_listitem_order-1) : __cypd_listitem_order;
        if (typeof drag_order === 'number' && __cypd_listitem_order < drag_order)
            return (hovering === 'bottom') ? (__cypd_listitem_order+1) : __cypd_listitem_order;
        return (typeof drag_order === 'number') ? drag_order : -1;
    }
    onMouseDown = () => {
        const { __cypd_listitem_order } = this.props;
        const drag_management = window.__cypd_list_drag_management[this.state.parent_id];
        if (drag_management) 
            drag_management.onDragStart(__cypd_listitem_order);
    }
    onMouseUp = () => {
        const drag_management = window.__cypd_list_drag_management[this.state.parent_id];
        const insert_idx = this.get_insert_position();
        drag_management.onDrop(insert_idx);
    }
    render() {
        const { hovering } = this.state;
        const { label, description, decoration, className, __cypd_listitem_order } = this.props;
        const list_id = Math.random().toString();
        let wrapperClass = 'cypd-listitem';
        if (className)
            wrapperClass += ` ${className}`;
        if (hovering !== 'none')
            wrapperClass += ` hover-${hovering}`;
        return (
            <div 
                className={wrapperClass} 
                style={{ order: (__cypd_listitem_order+1) }} 
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onMouseMove}
                ref={ (inst) => { this.itemRef = inst; } }
            >
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
    draggable?: boolean;
    onAfterDrag?: (new_order: Array<string>) => void;
}

declare type ListState = { 
    item_flex_order: Array<number>; 
    animated_class: Array<string>;
    dragging: boolean;
    prevProps: ListProperties;
}

export default class List extends React.Component<ListProperties> {
    state: ListState;
    private _id = Math.random().toString().slice(2);
    constructor(props: ListProperties) {
        super(props);
        const { items } = this.props;
        this.state = { item_flex_order: items.map((_, idx) => idx), animated_class: items.map(_ => ''), dragging: false, prevProps: { ...this.props } };
        window.__cypd_list_drag_management = (window.__cypd_list_drag_management) ? window.__cypd_list_drag_management : {};
    }
    static getDerivedStateFromProps(nextProps: ListProperties, prevState: ListState): Partial<ListState> | null { 
        let new_state: Partial<ListState> = { prevProps: { ...nextProps } };
        if (prevState.prevProps.draggable && !nextProps.draggable)
            new_state.item_flex_order = nextProps.items.map((_, idx) => idx);
        if (prevState.item_flex_order.length !== nextProps.items.length)
            new_state.item_flex_order = nextProps.items.map((_, idx) => idx);
        return new_state;
    }
    componentDidMount() {
        window.__cypd_list_drag_management[this._id] = { onHover: this.onHover, onDragStart: this.onDragStart, onDrop: this.onDrop, };
    }
    componentWillUnmount() { 
        delete window.__cypd_list_drag_management[this._id];
        this.setState = () => {}; 
    }
    onDragStart = (drag_order: number) => {
        const { draggable } = this.props;
        if (draggable && window.__cypd_list_drag_management[this._id]) {
            const { item_flex_order, animated_class } = this.state;
            const drag_idx = item_flex_order.indexOf(drag_order);
            window.__cypd_list_drag_management[this._id].drag_order = drag_order;
            animated_class[drag_idx] += 'dragged ';
            this.setState({ animated_class, dragging: true });
        }
    }
    onHover = (item_id?: number) => { 
        const { draggable } = this.props;
        if (draggable) {
            if (item_id)
                document.removeEventListener('mouseup', this.releaseMouse, false);
            else
                document.addEventListener('mouseup', this.releaseMouse, false);
        }
    }
    onDrop = (drop_order: number) => {
        const { item_flex_order } = this.state;
        const { draggable, onAfterDrag, items } = this.props;
        if (draggable) {
            const { drag_order } = window.__cypd_list_drag_management[this._id];
            if (typeof drag_order === 'number' && drag_order !== drop_order) {
                for (let i = 0; i < item_flex_order.length; i++) {
                    const flex_order = item_flex_order[i];
                    if (flex_order < drag_order && flex_order >= drop_order)
                        item_flex_order[i] ++;
                    if (flex_order > drag_order && flex_order <= drop_order)
                        item_flex_order[i] --;
                    if (flex_order == drag_order)
                        item_flex_order[i] = drop_order; // handle hover-bottom class
                }
                if (draggable && onAfterDrag) {
                    const reorder_items = item_flex_order.map((_, idx) => {
                        const idx_flex_order = item_flex_order.indexOf(idx);
                        const item_key = items[idx_flex_order].index;
                        return (item_key) ? item_key : idx_flex_order.toString();
                    });
                    onAfterDrag(reorder_items);
                }
            }
            this.setState({ item_flex_order }, this.releaseMouse);
        }
    }
    releaseMouse = () => {
        if (window.__cypd_list_drag_management[this._id])
            window.__cypd_list_drag_management[this._id].drag_order = undefined;
        this.setState({ animated_class: this.props.items.map(_ => ''), dragging: false });
    }
    render() {
        const { item_flex_order, animated_class, dragging } = this.state
        const { items, className, style, draggable } = this.props;
        let wrapperClass = 'cypd-list';
        if (className)
            wrapperClass += ` ${className}`;
        if (draggable)
            wrapperClass += ` draggable`;
        if (draggable && dragging)
            wrapperClass += ` dragging`;
        return <div className={wrapperClass} style={style} id={this._id}>
            { items.map((list_item, idx) => {
                return <ListItem key={`${this._id}_item_${idx}`} {...list_item} __cypd_listitem_order={item_flex_order[idx]} className={animated_class[idx]}/>;
            }) }
            { (items.length > 0) ? undefined : <Empty />}
        </div>;
    }
};
