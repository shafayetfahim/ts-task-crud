import { describe, it, expect, beforeEach } from "vitest";
import {
    createTask,
    readTasks,
    updateTask,
    deleteTask,
    __resetForTests,
} from "../src/services/taskService.js";

beforeEach(() => {
    __resetForTests();
});

describe("taskService", () => {
    it("creates a task with default status", () => {
        const task = createTask("Test task");
        expect(task.status).toBe("todo");
    });

    it("updates task status with valid transition", () => {
        const task = createTask("Transition test");
        const updated = updateTask(task.id, {
            status: "in-progress",
        });
        expect(updated.status).toBe("in-progress");
    });

    it("rejects invalid status transitions", () => {
        const task = createTask("Invalid transition");

        expect(() =>
            updateTask(task.id, { status: "done" })
        ).toThrow();
    });

    it("deletes tasks correctly", () => {
        const task = createTask("Delete me");
        deleteTask(task.id);
        expect(readTasks().length).toBe(0);
    });
});