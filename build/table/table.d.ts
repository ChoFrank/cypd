import React from 'react';
declare type TableProps = {
    headers: Array<string | React.ReactNode | undefined>;
    rows: Array<Array<string | React.ReactNode | undefined>>;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    pagination?: boolean;
    rowLimit?: number;
    columnWidth?: Array<number>;
};
interface TableState {
    page: number;
    tempPage: string;
    mode: 'nextpage' | 'prevpage' | '';
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
    id: string;
    colElement: Array<HTMLDivElement | null | undefined>;
    colInitWidth: Array<number>;
    constructor(props: TableProps);
    componentDidMount(): void;
    turnNext: () => void;
    turnPrev: () => void;
    onPageChange: (page: string) => void;
    onChangeBlur: () => void;
    onChangeKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    toPage: () => void;
    render(): JSX.Element;
}
export {};
