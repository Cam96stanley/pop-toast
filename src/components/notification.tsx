import { useEffect, type JSX } from "react";
import { CheckCircleIcon, WarningIcon, WarningCircleIcon, InfoIcon, XIcon } from "@phosphor-icons/react";
import type { NotificationType } from "../types/types";

const notificationColors: Record<NotificationType, string> = {
    success: "bg-green-500 text-black",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-black",
    info: "bg-blue-500 text-black",
};

const notificationIcon: Record<NotificationType, JSX.Element> = {
    success: <CheckCircleIcon size={20} />,
    warning: <WarningIcon size={20} />,
    error: <WarningCircleIcon size={20} />,
    info: <InfoIcon size={20} />
};

export type NotificationProps = {
    type: NotificationType;
    message: string;
    stackIndex?: number;
    onClose: () => void;
    style?: React.CSSProperties;
}

const Notification = ({ type, message, onClose, style }: NotificationProps): JSX.Element => {

    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            role="alert"
            className={`min-w-xs p-4 border border-gray-200 shadow-md rounded-md flex items-center ${notificationColors[type]} pointer-events-auto`}
            style={{ position: "absolute", ...style }}    
        >
            {notificationIcon[type]}
            <span className="ml-2 mr-4 flex-1 text-sm break-words">{message}</span>
            <XIcon size={18} className="cursor-pointer" onClick={onClose} />
        </div>
    )
}

export default Notification;