'use client'

import React, { useState } from 'react';

import { Badge, BlockStack, Box, Button, ButtonGroup, Card, IndexTable, InlineStack, Modal, Text } from '@shopify/polaris';
import { Task, TaskClient, TaskStatus } from '@/types/task';
import TaskEditForm from './TaskEditForm';
import { Employee } from '@/types/Common';

const resourceName = { singular: 'employee', plural: 'listEmployee' };

type EditProp = {
    open: boolean;
    task: Task | undefined;
}

const listEmployee: Employee[] = [
    {
        id: 0,
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: true,
        phoneNumber: "3232",
        role: 'employee'
    },
    {
        id: 1,
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: false,
        phoneNumber: "3232",
        role: 'owner'
    },
];


const listTask: Task[] = [
    {
        id: 0,
        name: "task 1",
        status: TaskStatus.PLANING,
        description: "Task được tạo ra để test",
        employee: listEmployee[0]
    },
    {
        id: 1,
        name: "task 2",
        status: TaskStatus.DOING,
        description: "Task được tạo ra để test",
        employee: listEmployee[0]
    },
    {
        id: 2,
        name: "task 3",
        status: TaskStatus.DONE,
        description: "Task được tạo ra để test",
        employee: listEmployee[1]
    }
]

type CustomTone = 'info' | 'success' | 'critical';

const deselectedOptions = [
    { value: '1', label: 'Quốc Bảo' },
    { value: '2', label: 'Anh Quế' },
    { value: '3', label: 'Vĩnh Lộc' },
    { value: '4', label: 'Vịnh Xuân' },
    { value: '5', label: 'Tài Công' },
]

export default function TaskManageTable() {
    const [openEdit, setOpenEdit] = useState<EditProp>({ open: false, task: undefined });
    const [openDelete, setOpenDelete] = useState<EditProp>({ open: false, task: undefined });
    const [listEmployee, setListEmployee] = useState<{ label: string, value: string }[]>(deselectedOptions);

    const handleOpenEditPopup = (newTask?: Task) => {
        setOpenEdit({ open: true, task: newTask });
    };

    const handleCloseEditPopup = () => {
        setOpenEdit({ open: false, task: undefined });
    };

    const handleOpenDeletePopup = (taskData: Task) => {
        setOpenDelete({ open: true, task: taskData });
    };

    const handleCloseDeletePopup = () => {
        setOpenDelete({ open: false, task: undefined });
    };

    const showSuccessMessage = (message: string) => {
    };

    const showErrorMessage = (message: string) => {
    };

    const handleRemoveTask = async (taskId?: string) => {
    };

    const handleSubmit = async (taskData: TaskClient) => {
        console.log(taskData)
        if (openEdit.task?.id) {
            // update
        } else {
            //  create
        }
    };

    const getBadgeStatus = (status: TaskStatus): { tone: CustomTone, content: string } => {
        switch (status) {
            case TaskStatus.PLANING:
                return { tone: 'info', content: "Planing" };
            case TaskStatus.DOING:
                return { tone: 'critical', content: "Doing" };
            default:
                return { tone: 'success', content: "Done" };
        }
    }

    const rowMarkup = listTask.map((taskData: Task, index: number) => {
        const { id, name, status } = taskData;
        const { tone, content } = getBadgeStatus(status);
        return (
            <IndexTable.Row id={id} key={id} position={index}>
                <IndexTable.Cell>{name}</IndexTable.Cell>

                <IndexTable.Cell>
                    <Badge tone={tone}>{content}</Badge>

                </IndexTable.Cell>

                <IndexTable.Cell>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                handleOpenEditPopup(taskData);
                            }}
                            size="slim"
                            variant='primary'
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => {
                                handleOpenDeletePopup(taskData);
                            }}
                            size="slim"
                            tone='critical'
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                </IndexTable.Cell>
            </IndexTable.Row>
        );
    });

    return (
        <>
            <Box padding={'400'}>
                <BlockStack gap={'300'}>
                    <InlineStack align='end'>
                        <Button onClick={() => handleOpenEditPopup()}>Add new task</Button>
                    </InlineStack>
                    <Card>
                        <IndexTable
                            selectable={false}
                            resourceName={resourceName}
                            itemCount={listTask.length}
                            headings={[
                                { title: 'Task Name' },
                                { title: 'Status' },
                                { title: 'Action' },
                            ]}
                        >
                            {rowMarkup}
                        </IndexTable>
                    </Card>
                </BlockStack>
            </Box>

            <Modal
                open={openEdit.open}
                onClose={handleCloseEditPopup}
                title={"Create or Edit Task"}
            >
                <Modal.Section>
                    <TaskEditForm initEmployee={listEmployee} handleSubmit={handleSubmit} initData={openEdit.task as Task} />
                </Modal.Section>
            </Modal>

            <Modal
                open={openDelete.open}
                onClose={handleCloseDeletePopup}
                title="Delete task"
                primaryAction={{
                    destructive: true,
                    content: 'Delete',
                    onAction: () => handleRemoveTask(openDelete.task?.id),
                }}
            >
                <Modal.Section>
                    Delete <strong>{openDelete.task?.name}</strong>?
                    <br />
                    This action cannot be undone.
                </Modal.Section>
            </Modal>
        </>
    );
}