'use client'

import React, { useState } from 'react';

import { Badge, BlockStack, Box, Button, ButtonGroup, Card, IndexTable, InlineStack, Modal, Text } from '@shopify/polaris';
import { EmployeeData } from '@/types/employee';
import EmployeeEditForm from '@/components/owner/manageEmployee/EmployeeEditForm';
import { listEmployee } from '@/constants/mockData';

const resourceName = { singular: 'employee', plural: 'listEmployee' };

type EditProp = {
    open: boolean;
    employeeId: string | undefined;
}

export default function EmployeeTable() {
    const [openEdit, setOpenEdit] = useState<EditProp>({ open: false, employeeId: undefined });
    const [openDelete, setOpenDelete] = useState<EditProp>({ open: false, employeeId: undefined });

    const handleOpenEditPopup = (employeeId?: string) => {
        setOpenEdit({ open: true, employeeId });
    };

    const handleCloseEditPopup = () => {
        setOpenEdit({ open: false, employeeId: undefined });
    };

    const handleOpenDeletePopup = (employeeId: string) => {
        setOpenDelete({ open: true, employeeId });
    };

    const handleCloseDeletePopup = () => {
        setOpenDelete({ open: false, employeeId: undefined });
    };

    const showSuccessMessage = (message: string) => {
    };

    const showErrorMessage = (message: string) => {
    };

    const handleRemoveEmployee = async (employeeId?: string) => {
    };

    const handleSubmit = async (employeeData: EmployeeData) => {
        console.log(employeeData)
        if (openEdit.employeeId) {
            console.log('edit')
        } else {
            console.log('create')
        }
    };

    const rowMarkup = Object.keys(listEmployee).map((employeeKey: string, index: number) => {
        const { name, enable, email } = listEmployee[employeeKey];
        return (
            <IndexTable.Row id={employeeKey} key={employeeKey} position={index}>
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
                                handleOpenEditPopup(employeeKey);
                            }}
                            size="slim"
                            variant='primary'
                        >
                            Edit
                        </Button>
                        <Button
                            onClick={() => {
                                handleOpenDeletePopup(employeeKey);
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
                            itemCount={Object.keys(listEmployee).length}
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
                    <EmployeeEditForm handleSubmit={handleSubmit} initData={listEmployee[openEdit.employeeId as string]} />
                </Modal.Section>
            </Modal>

            <Modal
                open={openDelete.open}
                onClose={handleCloseDeletePopup}
                title="Delete employee"
                primaryAction={{
                    destructive: true,
                    content: 'Delete',
                    onAction: () => handleRemoveEmployee(openDelete.employeeId),
                }}
            >
                <Modal.Section>
                    Delete <strong>{listEmployee[openDelete.employeeId as string]?.name}</strong>?
                    <br />
                    This action cannot be undone.
                </Modal.Section>
            </Modal>
        </>
    );
}