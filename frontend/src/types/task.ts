import { Employee } from "./Common";

export enum TaskStatus {
    PLANING = 'planing',
    DOING = 'doing',
    DONE = 'done'
}

export interface TaskClient {
    name: string;
    description?: string;
    status: TaskStatus;
    employee?: Employee;
}

export interface Task extends TaskClient {
    id: string
}

export interface TaskSubmit {
    name: string;
    description?: string;
    status: TaskStatus;
    employeeId?: string;
}