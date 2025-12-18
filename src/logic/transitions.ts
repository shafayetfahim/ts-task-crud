import { TaskStatus } from "../types/task.js";

export const STATUS_TRANSITIONS: Record<TaskStatus, readonly TaskStatus[]> = {
    todo: ["in-progress"],
    "in-progress": ["done"],
    done: [],
};

export function canTransition(
    from: TaskStatus,
    to: TaskStatus
): boolean {
    return STATUS_TRANSITIONS[from].includes(to);
}