import React, { CSSProperties } from 'react';

import Icon from '../icon/component';


type TreeNodeProps = {
    label: string | React.ReactNode,
    className: string,
    style: CSSProperties,
    collapsable: boolean,
    icon: string,
    defaultClose: boolean,
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

type TreeProps = {
    collapsable: boolean,
    color?: 'white' | 'black',
}

interface TreeNodeState {
    collapsed: boolean,
}

class Node extends React.Component<Partial<TreeNodeProps>> {
    state: TreeNodeState;
    constructor(props: TreeNodeProps) {
        super(props);
        this.state = { collapsed: false };
    }
    componentDidMount() { if (this.props.defaultClose) this.setState({ collapsed: true }); }
    onCollapse = () => {
        this.setState((prevState: TreeNodeState): Partial<TreeNodeState> => {
            return { collapsed: !prevState.collapsed };
        });
    }
    render() {
        const childrenCount = React.Children.toArray(this.props.children).length;
        var parentClass = 'cypd-tree-element';
        if (this.props.className)
            parentClass += ` ${this.props.className}`;
        if (this.props.children) 
            parentClass += ' parent';
        if (this.state.collapsed) 
            parentClass += ' hide';
        parentClass += (this.props.children) ? ' node' : ' leaf';
        return (
            <div className={parentClass} onClick={(e) => { if (this.props.onClick) { e.stopPropagation(); this.props.onClick(e); } }}>
                <div className='self'>
                    {(this.props.children && this.props.collapsable)?<Icon className='cypd-tree-icon-expand' type={this.state.collapsed?'square-plus':'square-minus'} onClick={this.onCollapse}/>:((this.props.icon)?<Icon className='cypd-tree-inline-icon' type={this.props.icon} />:undefined)}
                    <span className='label'>{this.props.label}</span>
                </div>
                <div className='children' style={{display: ((childrenCount>0)?undefined:'none')}}>
                    {React.Children.map(this.props.children, (child, idx) => {
                        var childClass = '';
                        if (idx === 0)
                            childClass += ' first';
                        if (idx === childrenCount-1)
                            childClass += ' last';
                        if (React.isValidElement(child)) 
                            return React.cloneElement(child, { className: `${childClass}${child.props.className?child.props.className:''}`, collapsable: this.props.collapsable });
                        else 
                            return child;
                    })}
                </div>
            </div>
        );
    }
}

class Tree extends React.Component<Partial<TreeProps>> {
    render() {
        const childrenCount = React.Children.toArray(this.props.children).length;
        var containerClass = 'cypd-tree-container';
        if (this.props.collapsable)
            containerClass += ` collapsable`;
        if (this.props.color)
            containerClass += ` ${this.props.color}`;
        return (
            <div className={containerClass}>
                {React.Children.map(this.props.children, (child, idx) => {
                    var childClass = '';
                    if (idx === 0)
                        childClass += ' first';
                    if (idx === childrenCount-1)
                        childClass += ' last';
                    if (React.isValidElement(child)) 
                        return React.cloneElement(child, { className: `${childClass}${child.props.className?child.props.className:''}`, collapsable: this.props.collapsable });
                    else
                        return child;
                })}
            </div>
        );
    }
};

export default { Tree, Node };