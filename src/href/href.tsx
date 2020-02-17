import React, { CSSProperties } from 'react';
import { withRouter } from 'react-router-dom';


declare type HrefProps = {
    to: string,
    external?: boolean,
    className?: string,
    style?: CSSProperties,
}

export default class Href extends React.Component<HrefProps> {
    render() {
        var wrapperClass = 'cypd-href';
        if (this.props.className)
            wrapperClass += ` ${this.props.className}`;
        const Link = withRouter(({history}) => <div className={wrapperClass} style={this.props.style} onClick={() => {
            if (this.props.external)
                window.location.href = this.props.to;
            else 
                history.push(this.props.to);
        }}>{this.props.children}</div>)
        return <Link />;
    }
};
