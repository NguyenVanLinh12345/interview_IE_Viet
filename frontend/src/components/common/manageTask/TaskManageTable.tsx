'use client'

import React, { useState } from 'react';

import { Badge, BlockStack, Box, Button, ButtonGroup, Card, IndexTable, InlineStack, Modal } from '@shopify/polaris';
import { TaskData, TaskStatus } from '@/types/task';
import TaskEditForm from './TaskEditForm';
import { Employee } from '@/types/employee';
import { listTask } from '@/constants/mockData';

const resourceName = { singular: 'employee', plural: 'listAssignee' };

type EditProp = {
    open: boolean;
    taskId: string | undefined;
}

const listAssignee: Employee[] = [
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

type CustomTone = 'info' | 'success' | 'critical';

const deselectedOptions = [
    { value: '1', label: 'Quốc Bảo' },
    { value: '2', label: 'Anh Quế' },
    { value: '3', label: 'Vĩnh Lộc' },
    { value: '4', label: 'Vịnh Xuân' },
    { value: '5', label: 'Tài Công' },
]

export default function TaskManageTable() {
    const [openEdit, setOpenEdit] = useState<EditProp>({ open: false, taskId: undefined });
    const [openDelete, setOpenDelete] = useState<EditProp>({ open: false, taskId: undefined });
    const [listAssignee, setListAssignee] = useState<{ label: string, value: string }[]>(deselectedOptions);

    const handleOpenEditPopup = (newTaskId?: string) => {
        setOpenEdit({ open: true, taskId: newTaskId });
    };

    const handleCloseEditPopup = () => {
        setOpenEdit({ open: false, taskId: undefined });
    };

    const handleOpenDeletePopup = (taskId?: string) => {
        setOpenDelete({ open: true, taskId: taskId });
    };

    const handleCloseDeletePopup = () => {
        setOpenDelete({ open: false, taskId: undefined });
    };

    const handleRemoveTask = async (taskId?: string) => {
    };

    const handleSubmit = async (taskData: TaskData) => {
        console.log(taskData)
        if (openEdit.taskId) {
            console.log('update')
        } else {
            console.log('create')
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

    const rowMarkup = Object.keys(listTask).map((taskKey: string, index: number) => {
        const { name, status } = listTask[taskKey];
        const { tone, content } = getBadgeStatus(status);
        return (
            <IndexTable.Row id={taskKey} key={taskKey} position={index}>
                <IndexTable.Cell>{name}</IndexTable.Cell>

                <IndexTable.Cell>
                    <Badge tone={tone}>{content}</Badge>

                </IndexTable.Cell>

                <IndexTable.Cell>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                handleOpenEditPopup(taskKey);
                            }}
                            size="slim"
                            variant='primary'
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => {
                                handleOpenDeletePopup(taskKey);
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
                            itemCount={Object.keys(listTask).length}
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
                    <TaskEditForm initEmployee={listAssignee} handleSubmit={handleSubmit} initData={listTask[openEdit.taskId as string]} />
                </Modal.Section>
            </Modal>

            <Modal
                open={openDelete.open}
                onClose={handleCloseDeletePopup}
                title="Delete task"
                primaryAction={{
                    destructive: true,
                    content: 'Delete',
                    onAction: () => handleRemoveTask(openDelete.taskId),
                }}
            >
                <Modal.Section>
                    Delete <strong>{listTask[openDelete.taskId as string]?.name}</strong>?
                    <br />
                    This action cannot be undone.
                </Modal.Section>
            </Modal>
        </>
    );
}