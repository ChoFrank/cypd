declare type NitificationType = 'success' | 'info' | 'warning' | 'error';
declare type NotificationArgs = {
    title: string;
    context: string;
    type?: NitificationType;
    timeout?: number;
};
declare const notify: (options: NotificationArgs) => void;
export default notify;
