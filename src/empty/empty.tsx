import React from 'react';


declare type EmptyProps = {
    className: string;
    style: React.CSSProperties;
    text: string
}


export default class Empty extends React.Component<Partial<EmptyProps>> {
    render() {
        const { className, style, text } = this.props;
        let wrapperClass = `cypd-empty-view${className?` ${className}`:''}`;
        let graph = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' overflow='visible'>`;
        graph += `<ellipse cx='47' cy='60' rx='27' ry='5' stroke='none' fill='rgba(170,170,170,0.5)' />`;
        graph += `<path d='M22 45 32 30 62 30 72 45 57 45 55 50 39 50 37 45 Z' stroke='rgba(170,170,170,0.8)' fill='white' stroke-linejoin='round' />`;
        graph += `<path d='M72 45 57 45 55 50 39 50 37 45 22 45 22 60 72 60 Z' stroke='rgba(170,170,170,0.8)' fill='rgb(238,238,238)' stroke-linejoin='round' />`;
        graph += `<text x='47' y='85' font-family='Arial' fill='rgba(170,170,170,0.8)' text-anchor='middle'>${text?text:'No Data'}</text></svg>")`;
        return <div className={wrapperClass} style={style}><div style={{backgroundImage: graph }} className='background'/></div>;
    }
};
