import { Task } from "../types/task.js";

let tasks: Task[] = [];
let nextId = 1;

export function createTask(
    title: string,
    description?: string
): Task {
    const task: Task = {
        id: nextId++,
        title,
        description,
        status: "todo",
        createdAt: new Date(),
    };
    tasks.push(task);
    return task;
}
export function readTasks(): readonly Task[] {return tasks;}
export function updateTask(
    id: number,
    updates: Partial<Omit<Task, "id" | "createdAt">>
): Task
{
    const task = tasks.find(t => t.id === id);
    if (!task) {throw new Error(`Task with id ${id} not found`)}
    Object.assign(task, updates);
    return task;
}


export function deleteTask(id: number): void {tasks = tasks.filter(t => t.id !== id);}