import type { NotificationType, NotificationPosition } from "../types/types";

type ToastFn = (message: string, position?: NotificationPosition) => void;

export const toast: Record<NotificationType, ToastFn> = {
    success: (msg, pos) => (window as any)._addToast({ type: "success", message: msg, position: pos }),
    warning: (msg, pos) => (window as any)._addToast({ type: "warning", message: msg, position: pos }),
    error: (msg, pos) => (window as any)._addToast({ type: "error", message: msg, position: pos }),
    info: (msg, pos) => (window as any)._addToast({ type: "info", message: msg, position: pos }),
}