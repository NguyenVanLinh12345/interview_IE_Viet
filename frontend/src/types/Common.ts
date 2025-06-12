import { ListConversation } from "./message";

export type SystemRole = 'employee' | 'owner';

export interface EmployeeClient {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    role: SystemRole;
    enable: boolean;
    conversations?: ListConversation;
}

export interface Employee extends EmployeeClient {
    id: string;
}