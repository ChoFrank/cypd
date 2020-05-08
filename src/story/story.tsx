import React, { CSSProperties } from 'react';


declare type PageProperties = {
    className?: string;
    style?: CSSProperties;
}

export class Page extends React.Component<PageProperties> {
    render() {
        const { className, style, children } = this.props;
        let wrapperClass = 'cypd-page';
        if (className)
            wrapperClass += ` ${className}`;
        return <div className={wrapperClass} style={style}>
            {children}
        </div>;
    }
}

declare type BookProperties = {
    page?: number;
    className?: string;
    style?: CSSProperties;
}

export class Book extends React.Component<BookProperties> {
    state: { _internal_page: number } = { _internal_page: 0 };
    render() {
        const { _internal_page } = this.state;
        const { page, className, style, children } = this.props;
        const page_reference = (page) ? page : _internal_page;
        let wrapperClass = 'cypd-book';
        if (className)
            wrapperClass += ` ${className}`;
        const process_children = React.Children.map(children, (child, idx) => {
            if (React.isValidElement(child) && child.type === Page) {
                let childClass = (child.props.className) ? child.props.className : '';
                if (idx < page_reference)
                    childClass += ` history`;
                else if (idx > page_reference)
                    childClass += ` future`;
                else
                    childClass += ` current`;
                return React.cloneElement(child, { className: childClass });
            } else {
                return undefined;
            }
        });
        const pages = (process_children) ? process_children.filter(child => (typeof child !== 'undefined')) : [];
        return <div className={wrapperClass} style={style}>
            {pages}
        </div>;
    }
}
