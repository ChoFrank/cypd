import React, { CSSProperties } from 'react';


declare type HrefProps = {
    to: string | (() => void),
    className?: string,
    style?: CSSProperties,
}

export default class Href extends React.Component<HrefProps> {
    render() {
        var wrapperClass = 'cypd-href';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        return <div className={wrapperClass} style={this.props.style} onClick={() => {
            if (typeof this.props.to === 'string')
                window.location.href = this.props.to;
            else
                this.props.to();
        }}>{this.props.children}</div>;
    }
};
