import { useState } from "react";
import Notification from "./notification";
import type { NotificationPosition, Toast } from "../types/types";

export const NotificationContainer = ({ position = "top-right" }: { position?: NotificationPosition }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    (window as any)._addToast = (toast: Omit<Toast, "id">) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { ...toast, id }]);
    }

    const removeToast = (id: number) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }

    const getStyleForStack = (index: number) => {
        const offset = 8 + index * 60;

        switch (position) {
            case "top-left":
            case "top-right":
                return { top:  `${offset}px`, ...(position.includes("left") ? { left: "16px" } : { right: "16px" })};
            case "bottom-left":
            case "bottom-right":
                return { bottom:  `${offset}px`, ...(position.includes("left") ? { left: "16px" } : { right: "16px" })};
            default:
                return { top: `${offset}px`, right: "16px" };
        }
    }

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {toasts.map((t, i) => (
                <Notification
                    key={t.id}
                    type={t.type}
                    message={t.message}
                    stackIndex={i}
                    onClose={() => removeToast(t.id)}
                    style={{ position: "absolute", ...getStyleForStack(i) }}
                />  
            ))}
        </div>
    )
}