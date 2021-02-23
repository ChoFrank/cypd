import React from 'react';
declare type ResponsiveType = 'no' | 'transform' | 'shorten';
declare type ShortenProps = {
    layout: {
        topLeft: number;
        bottomLeft: number;
        topRight: Array<number>;
        bottomRight: Array<number>;
    };
};
declare type TableProps = {
    headers: Array<string | React.ReactNode | undefined>;
    rows: Array<Array<string | React.ReactNode | undefined>>;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    pagination?: boolean;
    rowLimit?: number;
    columnWidth?: Array<number>;
    responsive?: ResponsiveType;
    shortenProps?: ShortenProps;
    forceResponsive?: boolean;
    checkable?: boolean;
    checkList?: Array<number>;
    onCheck?: (row_idx: number, checked: boolean) => void;
    removeable?: boolean;
    onRemove?: (row_idx: number) => void;
    className?: string;
};
interface TableState {
    page: number;
    tempPage: string;
    mode: 'nextpage' | 'prevpage' | '';
    responsive: ResponsiveType;
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
    basicBody: (rows: Array<Array<React.ReactNode>>) => JSX.Element;
    transformBody: (rows: Array<Array<React.ReactNode>>) => JSX.Element;
    shortenBody: (rows: Array<Array<React.ReactNode>>) => JSX.Element;
    render(): JSX.Element;
}
export {};
