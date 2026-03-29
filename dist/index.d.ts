import * as react_jsx_runtime from 'react/jsx-runtime';
import { JSX } from 'react';

type NotificationType = "success" | "warning" | "error" | "info";
type NotificationPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type Toast = {
    id: number;
    type: NotificationType;
    message: string;
};

declare const NotificationContainer: ({ position }: {
    position?: NotificationPosition;
}) => react_jsx_runtime.JSX.Element;

type NotificationProps = {
    type: NotificationType;
    message: string;
    stackIndex?: number;
    onClose: () => void;
    style?: React.CSSProperties;
};
declare const Notification: ({ type, message, onClose, style }: NotificationProps) => JSX.Element;

type ToastFn = (message: string, position?: NotificationPosition) => void;
declare const toast: Record<NotificationType, ToastFn>;

export { Notification, NotificationContainer, toast };
export type { NotificationPosition, NotificationType, Toast };
