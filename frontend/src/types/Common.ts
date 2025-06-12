export interface EmployeeClient {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: 'employee' | 'owner';
    enable: boolean;
}

export interface Employee extends EmployeeClient {
    id: number;
}

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
    id: number
}

export interface TaskSubmit {
    name: string;
    description?: string;
    status: TaskStatus;
    employeeId?: number; // employee id
}