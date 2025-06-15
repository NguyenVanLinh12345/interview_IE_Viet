import { Employee } from "@/types/employee";
import { ListConversation } from "@/types/message";
import { Task, TaskStatus } from "@/types/task";

export const listEmployee: Employee = {
    '0': {
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: true,
        phoneNumber: "3232",
        role: 'employee'
    },
    '1': {
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: false,
        phoneNumber: "3232",
        role: 'owner'
    },

};

export const listTask: Task = {
    '0': {
        name: "task 1",
        status: TaskStatus.PLANING,
        description: "Task được tạo ra để test",
        employeeId: '0'
    },
    '1': {
        name: "task 2",
        status: TaskStatus.DOING,
        description: "Task được tạo ra để test",
        employeeId: '0'
    },
    '2': {
        name: "task 3",
        status: TaskStatus.DONE,
        description: "Task được tạo ra để test",
        employeeId: '0'
    }
}

export const listChat: ListConversation = {
    '0': {
        lastMessage: 'mai di nha',
        lastUserName: 'John Time',
        participants: ["1", "2"], // người tham gia (đến lúc truy vấn thì xem danh sách người tham gia có trong này ko)
        messages: {
            '0': {
                content: "hello",
                senderId: '0'
            }
        }
    },
    '1': {
        lastMessage: 'mai di nha',
        lastUserName: 'John Time',
        participants: ["1", "2"],
        messages: {
            '0': {
                content: "hello",
                senderId: '0'
            }
        }
    }
}