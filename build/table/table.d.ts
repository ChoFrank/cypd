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
    responsive: 'no' | 'transform';
}
export default class Table extends React.Component<TableProps> {
    state: TableState;
    id: string;
    wrapperRef: HTMLDivElement | null | undefined;
    needWidth?: number;
    constructor(props: TableProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    get calculate_total_pages(): number;
    handleResize: () => void;
    onPrevPage: () => void;
    onNextPage: () => void;
    gotoPage: (no: number) => void;
    handleGotoKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleInputPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
