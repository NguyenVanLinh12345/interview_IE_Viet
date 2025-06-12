'use client'

import React, { useState } from 'react';

import { Badge, BlockStack, Box, Button, ButtonGroup, Card, IndexTable, InlineStack, Modal, Text } from '@shopify/polaris';
import { Employee, EmployeeClient } from '@/types/Common';
import EmployeeEditForm from '@/components/owner/manageEmployee/EmployeeEditForm';

const resourceName = { singular: 'employee', plural: 'listEmployee' };

type Props = Readonly<{

}>

type EditProp = {
    open: boolean;
    employee: Employee | undefined;
}

const listEmployee: Employee[] = [
    {
        id: '0',
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: true,
        phoneNumber: "3232",
        role: 'employee'
    },
    {
        id: '1',
        name: "xin chao",
        email: "a@gmail.com",
        address: "American",
        enable: false,
        phoneNumber: "3232",
        role: 'owner'
    },
];


export default function EmployeeTable({ }: Props) {
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

    const handleRemoveEmployee = async (employeeId?: string) => {
    };

    const handleSubmit = async (employeeData: EmployeeClient) => {
        console.log(employeeData)
        if (openEdit.employee?.id) {
            // update
        } else {
            //  create
        }
    };

    const rowMarkup = listEmployee.map((employeeInfo: Employee, index: number) => {
        const { id, name, enable, email } = employeeInfo;
        return (
            <IndexTable.Row id={id} key={id} position={index}>
                <IndexTable.Cell>{name}</IndexTable.Cell>

                <IndexTable.Cell>
                    <Text as="p" variant="headingMd">{email}</Text>
                </IndexTable.Cell>

                <IndexTable.Cell>
                    <Badge tone={enable ? 'success' : 'new'}>{enable ? 'Enable' : 'Disable'}</Badge>
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
                title={"Add or Edit Employee"}
            >
                <Modal.Section>
                    <EmployeeEditForm handleSubmit={handleSubmit} initData={openEdit.employee as Employee} />
                </Modal.Section>
            </Modal>

            <Modal
                open={openDelete.open}
                onClose={handleCloseDeletePopup}
                title="Delete employee"
                primaryAction={{
                    destructive: true,
                    content: 'Delete',
                    onAction: () => handleRemoveEmployee(openDelete.employee?.id),
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