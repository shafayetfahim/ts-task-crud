import {
    createTask,
    readTasks,
    updateTask,
    deleteTask,
} from "./services/taskService.js";

const task1 = createTask("Learn TypeScript");
const task2 = createTask("Build CRUD service", "Service-layer focused");

updateTask(task1.id, { status: "in-progress" });
deleteTask(task2.id);

console.log(readTasks());