export type NotificationType = "success" | "warning" | "error" | "info";
export type NotificationPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type Toast = {
    id: number;
    type: NotificationType;
    message: string;
}