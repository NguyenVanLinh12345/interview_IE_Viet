'use client'

import React, { useState } from 'react';

import { Badge, BlockStack, Box, Button, ButtonGroup, Card, IndexTable, InlineStack, Modal, Text } from '@shopify/polaris';
import { Employee } from '@/types/Common';

const resourceName = { singular: 'employee', plural: 'listEmployee' };

type Props = Readonly<{

}>

type EditProp = {
    open: boolean;
    employee: Employee | undefined;
}

const listEmployee: Employee[] = [
    {
        id: 0,
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: true,
        phoneNumber: "3232",
        role: ''
    },
    {
        id: 1,
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: false,
        phoneNumber: "3232",
        role: ''
    },
];


export default function TaskManageTable({ }: Props) {
    const [openEdit, setOpenEdit] = useState<EditProp>({ open: false, employee: undefined });
    const [openDelete, setOpenDelete] = useState<EditProp>({ open: false, employee: undefined });

    const handleOpenEditPopup = (employeeInfo?: Employee) => {
        setOpenEdit({ open: true, employee: employeeInfo });
    };

    const handleCloseEditPopup = () => {
        setOpenEdit({ open: false, employee: undefined });
    };

    const handleOpenDeletePopup = (employeeInfo: Employee) => {
        setOpenDelete({ open: true, employee: employeeInfo });
    };

    const handleCloseDeletePopup = () => {
        setOpenDelete({ open: false, employee: undefined });
    };

    const showSuccessMessage = (message: string) => {
    };

    const showErrorMessage = (message: string) => {
    };

    const handleRemoveApp = async (employeeId: number) => {
    };

    const handleSubmit = async () => {
        if (openEdit.employee?.id) {
            // update
        } else {
            //  create
        }
    };

    const rowMarkup = listEmployee.map((employeeInfo: Employee, index: number) => {
        const { id, name, enable, email } = employeeInfo;
        return (
            <IndexTable.Row id={id.toString()} key={id} position={index}>
                <IndexTable.Cell>{name}</IndexTable.Cell>

                <IndexTable.Cell>
                    <Text as="p" variant="headingMd">{email}</Text>
                </IndexTable.Cell>

                <IndexTable.Cell>
                    <Badge tone={enable ? 'success' : 'new'}>{enable ? 'Enable' : 'Disable'}</Badge>
                    {/* 
                    status:
                        + plaining: info
                        + doing: critical
                        + deployed: success 
                    */}
                </IndexTable.Cell>

                <IndexTable.Cell>
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                handleOpenEditPopup(employeeInfo);
                            }}
                            size="slim"
                            variant='primary'
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => {
                                handleOpenDeletePopup(employeeInfo);
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
                        <Button onClick={() => handleOpenEditPopup()}>Add new employee</Button>
                    </InlineStack>
                    <Card>
                        <IndexTable
                            selectable={false}
                            resourceName={resourceName}
                            itemCount={listEmployee.length}
                            headings={[
                                { title: 'Employee Name' },
                                { title: 'Email' },
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
                title={"Manage Employee"}
            >
                <Modal.Section>
                    {/* <EditFormPartner handleSubmit={handleSubmit} initData={openEdit.employee} /> */}
                </Modal.Section>
            </Modal>

            <Modal
                open={openDelete.open}
                onClose={handleCloseDeletePopup}
                title="Delete Partner App"
                primaryAction={{
                    destructive: true,
                    content: 'Delete',
                    onAction: () => handleRemoveApp(openDelete.employee?.id as number),
                }}
            >
                <Modal.Section>
                    Delete <strong>{openDelete.employee?.name}</strong>?
                    <br />
                    This action cannot be undone.
                </Modal.Section>
            </Modal>
        </>
    );
}