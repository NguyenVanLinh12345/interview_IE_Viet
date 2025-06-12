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