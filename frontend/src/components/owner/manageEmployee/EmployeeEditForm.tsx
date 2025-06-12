'use client'

import { Employee, EmployeeClient, SystemRole } from '@/types/Common';
import { Button, Form, FormLayout, OptionList, Popover, Select, TextField } from '@shopify/polaris';
import { useState } from 'react';

const options = [
    { label: 'Enable', value: '1' },
    { label: 'Disable', value: '0' },
];

const dataDefault: EmployeeClient = {
    name: "",
    email: "",
    address: "",
    enable: true,
    phoneNumber: "",
    role: "employee"
};

type Props = Readonly<{
    initData: Employee;
    handleSubmit: (employeeInfo: EmployeeClient) => void | Promise<void>;
}>

export default function EmployeeEditForm({ handleSubmit, initData }: Props) {
    const [employeeInfo, setEmployeeInfo] = useState(initData ?? dataDefault);
    const [selected, setSelected] = useState<string[]>([initData?.role ?? 'employee']);
    const [popoverActive, setPopoverActive] = useState(true);
    const togglePopoverActive = () => setPopoverActive((popoverActive) => !popoverActive)

    const handleChangeEnable = (value: '1' | '0') => {
        setEmployeeInfo({ ...employeeInfo, enable: value === '1' });
    };

    const handleChangeEmail = (value: string) => {
        setEmployeeInfo({ ...employeeInfo, email: value });
    };

    const handleChangeName = (value: string) => {
        setEmployeeInfo({ ...employeeInfo, name: value });
    };

    const handleChangePhoneNumber = (value: string) => {
        setEmployeeInfo({ ...employeeInfo, phoneNumber: value });
    };

    const handleChangeAddress = (value: string) => {
        setEmployeeInfo({ ...employeeInfo, address: value });
    };

    return (
        <Form
            method='post'
            onSubmit={async () => {
                await handleSubmit({ ...employeeInfo, role: selected[0] as SystemRole });
            }}
        >
            <FormLayout>
                <Select label="Status" options={options} onChange={handleChangeEnable} value={employeeInfo.enable ? '1' : '0'} />

                <TextField
                    value={employeeInfo.email}
                    disabled={Boolean(initData?.email)}
                    onChange={handleChangeEmail}
                    label="Email"
                    type="email"
                    autoComplete='off'
                />

                <TextField
                    label="Name"
                    value={employeeInfo.name}
                    onChange={handleChangeName}
                    type="text"
                    autoComplete='off'
                />


                <TextField
                    label="Phone number"
                    value={employeeInfo.phoneNumber}
                    onChange={handleChangePhoneNumber}
                    type="text"
                    prefix="+84"
                    autoComplete='off'
                />

                <TextField
                    label="Address"
                    onChange={handleChangeAddress}
                    value={employeeInfo.address}
                    type="text"
                    autoComplete='off'
                />

                <Popover
                    active={popoverActive}
                    activator={<Button onClick={togglePopoverActive} disclosure>User Role</Button>}
                    onClose={togglePopoverActive}
                >
                    <OptionList
                        title="Select Role"
                        onChange={setSelected}
                        // allowMultiple
                        options={[
                            { value: 'owner', label: 'Owner' },
                            { value: 'employee', label: 'Employee' },
                        ]}
                        selected={selected}
                    />
                </Popover>

                <Button variant='primary' submit>Save</Button>
            </FormLayout>
        </Form >
    );
}
