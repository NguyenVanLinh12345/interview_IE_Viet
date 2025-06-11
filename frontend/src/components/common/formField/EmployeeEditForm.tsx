'use client'

import { Employee } from '@/types/Common';
import { Button, Form, FormLayout, OptionList, Popover, Select, TextField } from '@shopify/polaris';
import { useState } from 'react';

const options = [
    { label: 'Enable', value: '1' },
    { label: 'Disable', value: '0' },
];

const dataDefault: Omit<Employee, 'id'> = {
    name: "",
    email: "",
    address: "",
    enable: true,
    phoneNumber: "",
    role: ""
};

type Props = Readonly<{
    initData: Employee;
    handleSubmit: (employeeInfo: Employee) => void | Promise<void>;
}>

export default function EmployeeEditForm({ handleSubmit, initData }: Props) {
    const [employeeInfo, setEmployeeInfo] = useState(initData ?? dataDefault);

    const handleChangeName = (value: string) => {
        setEmployeeInfo({ ...employeeInfo, name: value });
    };

    const handleSelectChange = (value: '1' | '0') => {
        setEmployeeInfo({ ...employeeInfo, enable: value === '1' });
    };

    const handleChangeAddress = (value: string) => {
        setEmployeeInfo({ ...employeeInfo, address: value });
    };


    const [selected, setSelected] = useState<string[]>([]);
    const [popoverActive, setPopoverActive] = useState(true);

    const togglePopoverActive = () => setPopoverActive((popoverActive) => !popoverActive)

    const activator = (
        <Button onClick={togglePopoverActive} disclosure>
            User Role
        </Button>
    );

    return (
        <Form
            method='post'
            onSubmit={async () => {
                await handleSubmit(employeeInfo);
            }}
        >
            <FormLayout>
                <Select label="Status" options={options} onChange={handleSelectChange} value={employeeInfo.enable ? '1' : '0'} />

                <TextField
                    value={employeeInfo.email}
                    disabled={Boolean(employeeInfo.email)}
                    onChange={handleChangeAddress}
                    label="Email"
                    type="email"
                    autoComplete='false'
                />

                <TextField
                    label="Name"
                    value={employeeInfo.name}
                    onChange={handleChangeName}
                    type="text"
                    autoComplete='false'
                />


                <TextField
                    value={employeeInfo.address}
                    onChange={handleChangeAddress}
                    label="Phone number"
                    type="text"
                    prefix="+84"
                    autoComplete='false'
                />

                <TextField
                    value={employeeInfo.phoneNumber}
                    onChange={handleChangeAddress}
                    label="Address"
                    type="text"
                    autoComplete='false'
                />

                <Popover
                    active={popoverActive}
                    activator={activator}
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
