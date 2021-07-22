import React from 'react';
interface ModalProps {
    title: string;
    style: React.CSSProperties;
    bodyStyle: React.CSSProperties;
    headerStyle: React.CSSProperties;
    className: string;
    visible: boolean;
    onClose: (e: React.MouseEvent) => void;
}
export default class Modal extends React.Component<Partial<ModalProps>> {
    render(): JSX.Element;
}
export {};
