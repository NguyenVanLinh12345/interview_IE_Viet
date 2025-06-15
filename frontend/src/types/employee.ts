export type SystemRole = 'employee' | 'owner';

export type EmployeeData = {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: SystemRole;
    enable: boolean;
}

export type Employee = Record<string, EmployeeData>;