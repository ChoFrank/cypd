import React, { CSSProperties } from 'react';
// import ReactDOM from 'react-dom';

import Sortable from './sortable.min.js';

declare type ListItemProperties = {
    label: React.ReactNode;
    description?: React.ReactNode;
    decoration?: React.ReactNode;
    index?: string;
}

declare type ListItemInterface = ListItemProperties & { __cypd_listitem_order: number; className?: string }

// declare type ListItemHoverType = 'top' | 'bottom' | 'none';

class ListItem extends React.Component<ListItemInterface> {
    state: { checked: boolean } = { checked: false };
    componentWillUnmount() { this.setState = () => {}; }
    onCheck = (event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ checked: event.target.checked }); }
    render() {
        // const { label, description, decoration, className, __cypd_listitem_order } = this.props;
        const { label, description, decoration, className } = this.props;
        const list_id = Math.random().toString();
        let wrapperClass = 'cypd-listitem';
        if (className)
            wrapperClass += ` ${className}`;
        return (
            <li 
                className={wrapperClass} 
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
            </li>
        );
    }
}

declare type ListProperties = {
    items: Array<ListItemProperties>;
    className?: string;
    style?: CSSProperties;
    draggable?: boolean;
    theme?: 'normal' | 'dark'
    onAfterDrag?: (new_order: Array<string>) => void;
}

declare type ListState = { 
    item_flex_order: Array<number>; 
    animated_class: Array<string>;
    dragging: boolean;
    prevProps: ListProperties;
    resetMark: number;
    __refresh?: (() => void);
}

// https://github.com/SortableJS/Sortable
declare type SortEvent = {
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    clone: HTMLElement;
    clones: Array<HTMLElement>;
    composed: boolean;
    defaultPrevented: boolean;
    eventPhase: number;
    newDraggableIndex: number;
    newIndex: number;
    oldDraggableIndex: number;
    oldIndex: number;
}


export default class SortableList extends React.Component<ListProperties> {
    state: ListState;
    sort: any = undefined;
    private _id = Math.random().toString().slice(2);
    refresh_key: number = 0;
    index_order: Array<string>;
    constructor(props: ListProperties) {
        super(props);
        const { items } = this.props;
        this.state = { item_flex_order: items.map((_, idx) => idx), animated_class: items.map(_ => ''), dragging: false, prevProps: { ...this.props }, __refresh: this.initSortable, resetMark: 0 };
        this.index_order = items.map((item, idx) => (item.index?item.index:idx.toString()));
    }
    static getDerivedStateFromProps(nextProps: ListProperties, prevState: ListState): Partial<ListState> | null { 
        let new_state: Partial<ListState> = { prevProps: { ...nextProps } };
        let should_refresh = false;
        if (prevState.prevProps.draggable !== nextProps.draggable) {
            new_state.item_flex_order = nextProps.items.map((_, idx) => idx);
            should_refresh = true;
        }
        if (prevState.item_flex_order.length !== nextProps.items.length) {
            new_state.item_flex_order = nextProps.items.map((_, idx) => idx);
            should_refresh = true;
        }
        if (should_refresh && prevState.__refresh) {
            global.setTimeout(prevState.__refresh, 50);
        }
        return new_state;
    }
    componentDidMount() {
        this.initSortable();
    }
    initSortable = () => {
        const { items } = this.props;
        this.index_order = items.map((item, idx) => (item.index?item.index:idx.toString()));
        if (typeof this.sort !== 'undefined' && typeof this.sort.destroy === 'function') {
            this.forceRefreshSortable(); // detroy sortable and recreate
            this.sort.destroy();
            this.sort = undefined;
        }
        global.setTimeout(() => {
            const { draggable } = this.props;
            let component = document.getElementById(this._id);
            if (component && typeof this.sort !== undefined) {
                this.sort = Sortable.create(component, {
                    animation: 150,
                    onSort: this.onSort,
                    disabled: !draggable,
                });
            }
        }, 50); // delay for sortable reset render finish
    }
    onSort = (event: SortEvent) => {
        // console.log('event :>> ', event);
        const { draggable, onAfterDrag } = this.props;
        const { newIndex, oldIndex } = event;
        if (newIndex !== oldIndex) {
            const string_idx = this.index_order[oldIndex];
            this.index_order.splice(oldIndex, 1);
            this.index_order.splice(newIndex, 0, string_idx);
            if (draggable && onAfterDrag) {
                onAfterDrag(this.index_order);
            }
        }
    }
    forceRefreshSortable = () => { this.setState((prevState: ListState) => ({ resetMark: (prevState.resetMark + 1) })) }
    render() {
        const { items, className, style, draggable, theme } = this.props;
        let wrapperClass = 'cypd-list';
        if (className)
            wrapperClass += ` ${className}`;
        if (draggable)
            wrapperClass += ` draggable`;
        if (theme)
            wrapperClass += ` ${theme}`;
        return (
            <ul id={this._id} className={wrapperClass} style={style} key={this.state.resetMark}>
                {items.map((listitem, idx) => {
                    return <ListItem key={`${this._id}_item_${idx}`} {...listitem} __cypd_listitem_order={parseInt(this.index_order[idx])}/>
                })}
            </ul>
        );
    }
}