import React from 'react';

import Button from '../button/button';
import Input from '../input/input';
import Empty from '../empty/empty';
import { Book, Page } from '../story/story';


// const DEFAULT_ROW_LIMIT = 10;

type TableProps = {
    headers: Array<string | React.ReactNode | undefined>,
    rows: Array<Array<string | React.ReactNode | undefined>>,
    headerStyle?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    pagination?: boolean,
    rowLimit?: number,
    columnWidth?: Array<number>,
}

interface TableState {
    page: number,
    tempPage: string,
    mode: 'nextpage' | 'prevpage' | '',
    responsive: 'no' | 'transform',
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
        if (this.wrapperRef) {
            const parent = this.wrapperRef.parentElement;
            const rect = this.wrapperRef.getBoundingClientRect();
            this.needWidth = (this.needWidth) ? this.needWidth : rect.width;
            if (parent) {
                const parent_rect = parent.getBoundingClientRect();
                if (parent && this.needWidth > parent_rect.width - 60) {
                    // global.setTimeout(() => { this.setState({ responsive: 'transform' }); }, 10000); 
                    this.setState({ responsive: 'transform' });
                } else {
                    this.setState({ responsive: 'no' });
                }
            }
        }
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
    render() {
        const id = this.id;
        const { responsive, page, tempPage } =  this.state;
        const { headers, rows, headerStyle, bodyStyle, pagination, rowLimit } = this.props;
        let containerClass = 'cypd-table-container ' + responsive;
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
                let tbody = <tbody></tbody>;
                if (responsive === 'no') {
                    tbody = (
                        <tbody>{rows.slice(start_row, end_row).map((row, idx) => (
                            <tr className={(idx%2)?'odd':'even'} key={`table-${id}-body-row-${idx}`}>{row.map((cell, cell_idx) => (
                                (cell_idx < headers.length) ? <td key={`table-${id}-body-cell-${idx}-${cell_idx}`}><div>{cell}</div></td> : undefined
                            )).filter(cell => (!!cell))}</tr>
                        ))}</tbody>
                    )
                } else if (responsive === 'transform') {
                    tbody = (
                        <tbody>{rows.slice(start_row, end_row).map((row, idx) => (headers.map((head, head_idx) => (
                            <tr className={(idx%2)?'odd':'even'} key={`table-${id}-transform-row-${idx}-${head_idx}`}>
                                <td><div>{head}</div></td>
                                <td><div>{row[head_idx]}</div></td>
                            </tr>
                        ))))}</tbody>
                    );
                }
                return <Page key={`cypd-pagination-table-${this.id}-page-${pageno}`}><table>{thead}{tbody}</table></Page>
            });
            let goto_buttons = [];
            if (this.calculate_total_pages <= 5) {
                goto_buttons = Array.from(Array(this.calculate_total_pages).keys()).map(pageno => {
                    return <Button size='small' key={`cypd-pagination-table-${this.id}-goto-${pageno}`} onClick={() => { this.gotoPage(pageno); }}>{pageno+1}</Button>
                });
            } else {
                const start_pageno = ((page - 2) >= 0) ? (page - 2) : 0;
                const end_pageno = ((page + 2) < this.calculate_total_pages) ? (page + 2) : (this.calculate_total_pages - 1);
                goto_buttons = Array.from(Array(end_pageno - start_pageno + 1).keys()).map(rel_pageno => {
                    const abs_pageno = start_pageno + rel_pageno;
                    return <Button size='small' key={`cypd-pagination-table-${this.id}-goto-${abs_pageno}`} className={(abs_pageno === page)?'focus':undefined} onClick={() => { this.gotoPage(abs_pageno); }}>{abs_pageno+1}</Button>
                });
            }
            const goto_form = <div className='form'>Go to <Input value={tempPage} size='small' onChange={this.handleInputPage}></Input>Page</div>
            return (
                <div className={containerClass} ref={inst => { this.wrapperRef = inst; }}>
                    <div className={wrapperClass} style={bodyStyle}>
                        <Book page={page}>{pages}</Book>
                        {(rows.length === 0)?<Empty />:undefined}
                    </div>
                    <div className='cypd-pagination-footer'>
                        <Button size='small' type='primary' icon='solid-left' onClick={this.onPrevPage}/>
                        <Button size='small' type='primary' icon='solid-right' onClick={this.onNextPage}/>
                        {goto_buttons}
                        {goto_form}
                    </div>
                </div>
            );
        } else {
            let tbody = <tbody></tbody>;
            if (responsive === 'no') {
                tbody = (
                    <tbody>{rows.map((row, idx) => (
                        <tr className={(idx%2)?'odd':'even'} key={`table-${id}-body-row-${idx}`}>{row.map((cell, cell_idx) => (
                            (cell_idx < headers.length) ? <td key={`table-${id}-body-cell-${idx}-${cell_idx}`}><div>{cell}</div></td> : undefined
                        )).filter(cell => (!!cell))}</tr>
                    ))}</tbody>
                )
            } else if (responsive === 'transform') {
                tbody = (
                    <tbody>{rows.map((row, idx) => (headers.map((head, head_idx) => (
                        <tr className={(idx%2)?'odd':'even'} key={`table-${id}-transform-row-${idx}-${head_idx}`}>
                            <td><div>{head}</div></td>
                            <td><div>{row[head_idx]}</div></td>
                        </tr>
                    ))))}</tbody>
                );
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