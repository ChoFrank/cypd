import React, { CSSProperties } from 'react';
declare type ProgressBarProps = {
    percentage: number;
    hint?: string | React.ReactNode;
    className?: string;
    style?: CSSProperties;
};
export default class ProgressBar extends React.Component<ProgressBarProps> {
    render(): JSX.Element;
}
export {};
