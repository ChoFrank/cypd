import React from 'react';

import Button from '../button/button';
import Input from '../input/input';


const DEFAULT_ROW_LIMIT = 10;

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
    mode: 'nextpage' | 'prevpage' | ''
}
/**
    <Table
        headers={['Full Name', 'Age', 'Job Title', 'Location']}
        rows={[
            [' Vincent Williamson', '1', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '2', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '3', 'iOS Developer', 'Hello world'],
            [' Vincent Williamson', '4', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '5', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '6', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '7', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '8', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '9', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '10', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '11', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '12', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '13', 'iOS Developer', 'Washington'],
            [' Vincent Williamson', '14', 'iOS Developer', 'Washington'],
        ]}
        pagination={true}
        rowLimit={10}
    />
 */
export default class Table extends React.Component<TableProps> {
    state: TableState;
    id: string = Math.random().toString().slice(2);
    colElement: Array<HTMLDivElement | null | undefined> = [];
    colInitWidth: Array<number> = [];
    constructor(props: TableProps) {
        super(props);
        this.state = { page: 1, tempPage: '1', mode: '' };
    }
    componentDidMount() { 
        if (typeof this.props.columnWidth === undefined)
            this.colElement.forEach((col, col_idx) => { this.colInitWidth[col_idx] = (col) ? col.getBoundingClientRect().width : 0; });
    }
    turnNext = () => {
        this.setState( (prevState: TableState): Partial<TableState> => {
            if (this.props.pagination) {
                const left_row_n = this.props.rows.length - (this.props.rowLimit?this.props.rowLimit:DEFAULT_ROW_LIMIT) * (prevState.page);
                if (left_row_n > 0)
                    return { page: prevState.page + 1, tempPage: (prevState.page + 1).toString(), mode: 'nextpage' };
            }
            return {};
        } );
    }
    turnPrev = () => {
        this.setState( (prevState: TableState): Partial<TableState> => {
            return (this.props.pagination && prevState.page > 1) ? { page: prevState.page - 1, tempPage: (prevState.page - 1).toString(), mode: 'prevpage' } : {};
        } );
    }
    onPageChange = (page: string) => {
        this.setState({tempPage: page});
    }
    
    onChangeBlur = () => {
        this.toPage();
    }

    onChangeKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            this.toPage();
    }

    toPage = () => {
        this.setState((prevState: TableState): Partial<TableState> => {
            const overflowPage = Math.ceil(this.props.rows.length / (this.props.rowLimit?this.props.rowLimit:DEFAULT_ROW_LIMIT));
            if (isNaN(Number(prevState.tempPage)))
                return {page: overflowPage, tempPage: overflowPage.toString(), mode: 'nextpage'};
            const newPage = Number(prevState.tempPage);
            const left_row_n = this.props.rows.length - (this.props.rowLimit?this.props.rowLimit:DEFAULT_ROW_LIMIT) * newPage;
            if (newPage > 0 && this.props.rows.length > 0) {
                if (left_row_n > 0) {
                    if (prevState.page !== newPage)
                        return { page: newPage, mode: (prevState.page > newPage) ? 'prevpage' : 'nextpage' };
                    else 
                        return {};
                } else {
                    return { page: overflowPage, tempPage: overflowPage.toString(), mode: 'nextpage' };
                }
            } else { return { page: 1, tempPage: '1', mode: 'prevpage' }; }
        });
    }
    render() {
        const { headers, rows, headerStyle, bodyStyle, pagination, rowLimit, columnWidth } = this.props;
        var startRow: number = 0, endRow: number = 0;
        var col_width_sum = (columnWidth) ? 0 : 1; // calculate width should a column has
        if (pagination) {
            startRow = (rowLimit?rowLimit:DEFAULT_ROW_LIMIT) * (this.state.page - 1);
            endRow = (rowLimit?rowLimit:DEFAULT_ROW_LIMIT) * this.state.page;
        }
        const showRows = rows.map((row, ridx) => {
            if (pagination && (ridx < startRow || ridx >= endRow))
                return null;
            const cols = row.map((elem, cidx) => <div className='cell' key={'ctc'+cidx}><div className='cell-wrapper'>{elem}</div></div>).filter((_v, idx) => idx < headers.length);
            return <div className='row normal' key={'ctr'+ridx}>{cols}</div>;
        }).filter(node => node);
        var wrapperClass = 'table-wrapper';
        if (showRows.length === 0)
            wrapperClass += ' show-empty';
        if (columnWidth)
            columnWidth.forEach(v => { col_width_sum += v; });
        const layout = (
            <div className={wrapperClass}>
                {headers.map((title, title_idx) => {
                    const key_prefix = `table_${this.id}_col`;
                    var guess_width = (this.colInitWidth[title_idx]) ? `${this.colInitWidth[title_idx]}px`: 'auto';
                    if (columnWidth)
                        guess_width = `${(columnWidth[title_idx] * 100) / col_width_sum}%`;
                    return <div 
                        ref={inst => { this.colElement[title_idx] = inst; }} 
                        className='column' 
                        key={`${key_prefix}_${title_idx}`}
                        style={{ width: guess_width }}
                    >
                        <div className='head' style={headerStyle}>{title}</div>
                        {rows.map((row, row_idx) => {
                            if (pagination && (row_idx < startRow || row_idx >= endRow))
                                return null;
                            return <div className='cell' key={`${key_prefix}_${title_idx}_${row_idx}`}>{row[title_idx]}</div>;
                        }).filter(cell => cell)}
                    </div>;
                })}
            </div>
        );
        return (
            <div className={'cypd-table-container ' + this.state.mode} style={bodyStyle}>
                {layout}
                <div className='footer' style={{display: (pagination?undefined:'none')}}>
                    <Button icon='arrow-right' onClick={this.turnNext}/>
                    <Input style={{width: '35px', marginRight: '10px'}} value={this.state.tempPage} onChange={(e) => { this.onPageChange(e.target.value); }} onBlur={this.onChangeBlur} onKeyPress={this.onChangeKeyPress} />
                    <Button icon='arrow-left' onClick={this.turnPrev} style={{marginRight: '10px'}}/>
                </div>
            </div>
        );
    }
};
