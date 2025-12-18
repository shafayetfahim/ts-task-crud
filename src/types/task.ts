export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
    readonly id: number;
    title: string;
    description?: string;
    status: TaskStatus;
    createdAt: Date;
}