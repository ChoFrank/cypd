import React from 'react';

import Button from '../button/button';
// import Input from '../input/input';
import Empty from '../empty/empty';
import Checkbox from '../checkbox/checkbox';
import { Book, Page } from '../story/story';


// const DEFAULT_ROW_LIMIT = 10;

declare type ResponsiveType = 'no' | 'transform' | 'shorten';
declare type ShortenProps = {
    layout: {
        topLeft: number;
        bottomLeft: number;
        topRight: Array<number>;
        bottomRight: Array<number>;
    }
}


type TableProps = {
    headers: Array<string | React.ReactNode | undefined>,
    rows: Array<Array<string | React.ReactNode | undefined>>,
    headerStyle?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    pagination?: boolean,
    rowLimit?: number,
    columnWidth?: Array<number>,
    responsive?: ResponsiveType,
    shortenProps?: ShortenProps,
    forceResponsive?: boolean,
    checkable?: boolean,
    checkList?: Array<number>;
    onCheck?: (row_idx: number, checked: boolean) => void;
    removeable?: boolean,
    onRemove?: (row_idx: number) => void;
}

interface TableState {
    page: number,
    tempPage: string,
    mode: 'nextpage' | 'prevpage' | '',
    responsive: ResponsiveType,
}

export default class Table extends React.Component<TableProps> {
    state: TableState;
    id: string = Math.random().toString().slice(2);
    wrapperRef: HTMLDivElement | null | undefined;
    needWidth?: number;
    constructor(props: TableProps) {
        super(props);
        this.state = { page: 0, tempPage: '', mode: '', responsive: 'no' };
    }
    componentDidMount() { 
        window.onresize = this.handleResize;
        document.addEventListener('transitionend', this.handleResize, false);
        this.handleResize();
    }
    componentWillUnmount() {
        window.onresize = null;
        document.removeEventListener('transitionend', this.handleResize, false);
    }
    get calculate_total_pages() { return (this.props.rowLimit) ? Math.ceil(this.props.rows.length / this.props.rowLimit) : 1; }
    handleResize = () => {
    }
    onPrevPage = () => {
        this.setState((prevState: TableState) => {
            let dest_page = prevState.page - 1;
            if (dest_page < 0) dest_page = 0;
            return { page: dest_page };
        });
    }
    onNextPage = () => {
        this.setState((prevState: TableState) => {
            const max_page = this.calculate_total_pages - 1;
            let dest_page = prevState.page + 1;
            if (dest_page > max_page) dest_page = max_page;
            return { page: dest_page };
        });
    }
    gotoPage = (no: number) => { this.setState({ page: no }); }
    handleGotoKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { tempPage } = this.state;
        const parsePage = parseInt(tempPage) - 1;
        const max_page = this.calculate_total_pages - 1;
        if (e.key === 'Enter' && !isNaN(parsePage)) {
            if (parsePage > max_page) 
                this.gotoPage(max_page);
            else if (parsePage < 0)
                this.gotoPage(0);
            else
                this.gotoPage(parsePage);
        }
    }
    handleInputPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsePage = parseInt(e.target.value) - 1;
        const max_page = this.calculate_total_pages - 1;
        if (!isNaN(parsePage)) {
            if (parsePage > max_page) 
                this.gotoPage(max_page);
            else if (parsePage < 0)
                this.gotoPage(0);
            else
                this.gotoPage(parsePage);
        }
        this.setState({ tempPage: e.target.value });
    }
    basicBody = (rows: Array<Array<React.ReactNode>>) => {
        const { headers } = this.props;
        return (
            <tbody>{rows.map((row, idx) => (
                <tr className={(idx%2)?'odd':'even'} key={`table-${this.id}-body-row-${idx}`}>
                    {row.map((cell, cell_idx) => (
                        (cell_idx < headers.length) ? <td key={`table-${this.id}-body-cell-${idx}-${cell_idx}`}><div>{cell}</div></td> : undefined
                    )).filter(cell => (!!cell))}
                </tr>
            ))}</tbody>
        );
    }
    transformBody = (rows: Array<Array<React.ReactNode>>) => {
        const { headers } = this.props;
        return (
            <tbody>{rows.map((row, idx) => (headers.map((head, head_idx) => (
                <tr className={(idx%2)?'odd':'even'} key={`table-${this.id}-transform-row-${idx}-${head_idx}`}>
                    <td><div>{head}</div></td>
                    <td><div>{row[head_idx]}</div></td>
                </tr>
            ))))}</tbody>
        );
    }
    shortenBody = (rows: Array<Array<React.ReactNode>>) => {
        const { shortenProps } = this.props;
        return (shortenProps) ? (
            <tbody>{rows.map((row, idx) => (
                <tr className={(idx%2)?'odd':'even'} key={`table-${this.id}-shorten-row-${idx}`}>
                    <td><div>
                        <div className='upper'>
                            <div className='top left'>{row[shortenProps.layout.topLeft]}</div>
                            <div className='top right'>{shortenProps.layout.topRight.map((elem_no, elem_idx) => (
                                <div key={`table-${this.id}-shorten-row-${idx}-tr-e-${elem_idx}`}>{row[elem_no]}</div>
                            ))}</div>
                        </div>
                        <div className='lower'>
                            <div className='bottom left'>{row[shortenProps.layout.bottomLeft]}</div>
                            <div className='bottom right'>{shortenProps.layout.bottomRight.map((elem_no, elem_idx) => (
                                <div key={`table-${this.id}-shorten-row-${idx}-tr-e-${elem_idx}`}>{row[elem_no]}</div>
                            ))}</div>
                        </div>
                    </div></td>
                </tr>
            ))}</tbody>
        ) : <tbody></tbody>;
    }
    render() {
        const id = this.id;
        // const { responsive, page, tempPage } =  this.state;
        const { responsive, page } =  this.state;
        const { headers, rows, headerStyle, bodyStyle, pagination, rowLimit, checkable, checkList, onCheck } = this.props;
        const total_pages = this.calculate_total_pages;
        let containerClass = `cypd-table-container ${responsive}${checkable?' checkable':''}`;
        let wrapperClass = 'table-wrapper';
        const thead = (
            <thead style={headerStyle}><tr>
                {headers.map((content, idx) => <th key={`table-${id}-th-${idx}`}>{content}</th>)}
            </tr></thead>
        );
        if (pagination && rowLimit) {
            const pages = Array.from(Array(this.calculate_total_pages).keys()).map(pageno => {
                const start_row = pageno * rowLimit;
                const end_row = (((pageno + 1) * rowLimit) < rows.length) ? ((pageno + 1) * rowLimit) : rows.length;
                const checklist = <div className='cypd-table-checklist'>{
                    Array.from(Array(end_row - start_row).keys()).map(offset => (offset + start_row)).map(row_idx => {
                        const checked = (typeof checkList !== 'undefined' && (checkList.indexOf(row_idx) >= 0));
                        return <Checkbox key={`cypd-table-row-${row_idx}-checked`} checked={checked} onChange={(e) => { if (onCheck) onCheck(row_idx, e.target.checked); }}/>
                    })
                }</div>;
                let tbody = <tbody></tbody>;
                if (responsive === 'no') {
                    tbody = this.basicBody(rows.slice(start_row, end_row));
                } else if (responsive === 'transform') {
                    tbody = this.transformBody(rows.slice(start_row, end_row));
                } else if (responsive === 'shorten') {
                    tbody = this.shortenBody(rows.slice(start_row, end_row));
                }
                return <Page key={`cypd-pagination-table-${this.id}-page-${pageno}`}>{(checkable)?checklist:undefined}<table>{thead}{tbody}</table></Page>
            });
            let goto_buttons = [];
            if (this.calculate_total_pages <= 5) {
                goto_buttons = Array.from(Array(this.calculate_total_pages).keys()).map(pageno => {
                    return <Button size='small' className={`goto_page${(pageno === page)?' focus':''}`} key={`cypd-pagination-table-${this.id}-goto-${pageno}`} onClick={() => { this.gotoPage(pageno); }}>{pageno+1}</Button>
                });
            } else {
                const start_pageno = ((page - 2) >= 0) ? (page - 2) : 0;
                const end_pageno = ((page + 2) < this.calculate_total_pages) ? (page + 2) : (this.calculate_total_pages - 1);
                goto_buttons = Array.from(Array(end_pageno - start_pageno + 1).keys()).map(rel_pageno => {
                    const abs_pageno = start_pageno + rel_pageno;
                    return <Button size='small' key={`cypd-pagination-table-${this.id}-goto-${abs_pageno}`} className={(abs_pageno === page)?'focus':undefined} onClick={() => { this.gotoPage(abs_pageno); }}>{abs_pageno+1}</Button>
                });
            }
            // const goto_form = <div className='form'>Go to <Input value={tempPage} size='small' onChange={this.handleInputPage}></Input>Page</div>
            return (
                <div className={containerClass} ref={inst => { this.wrapperRef = inst; }}>
                    <div className={wrapperClass} style={bodyStyle}>
                        <Book page={page}>{pages}</Book>
                        {(rows.length === 0)?<Empty />:undefined}
                    </div>
                    <div className='cypd-pagination-footer'>
                        <Button size='small' icon='previous' disabled={(page === 0)} onClick={() => { this.gotoPage(0); }}/>
                        <Button size='small' icon='backward' disabled={(page === 0)} onClick={this.onPrevPage}/>
                        <Button size='small' icon='forward' disabled={(page === total_pages-1)} onClick={this.onNextPage}/>
                        <Button size='small' icon='next' disabled={(page === total_pages-1)} onClick={() => { this.gotoPage(total_pages - 1); }}/>
                        {goto_buttons}
                        {/* {goto_form} */}
                    </div>
                </div>
            );
        } else {
            let tbody = <tbody></tbody>;
            if (responsive === 'no') {
                tbody = this.basicBody(rows);
            } else if (responsive === 'transform') {
                tbody = this.transformBody(rows);
            } else if (responsive === 'shorten') {
                tbody = this.shortenBody(rows);
            }
            const table = <table>{thead}{tbody}</table>;
            return (
                <div className={containerClass} ref={inst => { this.wrapperRef = inst; }}><div className={wrapperClass} style={bodyStyle}>
                    {table}
                    {(rows.length === 0)?<Empty />:undefined}
                </div></div>
            );
        }
    }
}