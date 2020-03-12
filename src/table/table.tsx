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
    constructor(props: TableProps) {
        super(props);
        this.state = { page: 1, tempPage: '1', mode: '' };
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
        const { headers, rows, headerStyle, bodyStyle, pagination, rowLimit } = this.props;
        var startRow: number = 0, endRow: number = 0;
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
        return (
            <div className='cypd-table-container' style={bodyStyle}>
                <div className={wrapperClass}>
                    <div className={'cypd-table ' + this.state.mode}>
                        <div className='row header' style={headerStyle}>{headers.map((elem, idx) => <div className='cell' key={'cth'+idx}>{elem}</div>)}</div>
                        {showRows}
                    </div>
                </div>
                <div className='footer' style={{display: (pagination?undefined:'none')}}>
                    <Button icon='arrow-right' onClick={this.turnNext}/>
                    <Input style={{width: '35px', marginRight: '10px'}} value={this.state.tempPage} onChange={(e) => { this.onPageChange(e.target.value); }} onBlur={this.onChangeBlur} onKeyPress={this.onChangeKeyPress} />
                    <Button icon='arrow-left' onClick={this.turnPrev} style={{marginRight: '10px'}}/>
                </div>
            </div>
        );
    }
};
