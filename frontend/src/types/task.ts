export enum TaskStatus {
    PLANING = 'planing',
    DOING = 'doing',
    DONE = 'done'
}

export interface TaskData {
    name: string;
    description?: string;
    status: TaskStatus;
    employeeId: string;
}

export type Task = Record<string, TaskData>;