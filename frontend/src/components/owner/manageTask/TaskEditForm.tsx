'use client'

import { Task, TaskClient, TaskStatus, TaskSubmit } from '@/types/Common';
import { Autocomplete, BlockStack, Button, Form, FormLayout, Icon, InlineStack, OptionList, Popover, TextField } from '@shopify/polaris';
import { useCallback, useState } from 'react';
import { SearchIcon } from '@shopify/polaris-icons'
import { useCallbackDebounce } from '@/hooks/useCallbackDebounce';
const dataDefault: TaskClient = {
    name: "",
    description: "",
    status: TaskStatus.PLANING
};

type Props = Readonly<{
    initData: Task;
    handleSubmit: (taskInfo: TaskSubmit) => void | Promise<void>;
    initEmployee: { label: string, value: string }[]
}>

// filter danh sách employee
export default function TaskEditForm({ handleSubmit, initData, initEmployee = [] }: Props) {
    const [taskInfo, setTaskInfo] = useState(initData ?? dataDefault);
    const [statusSelected, setStatusSelected] = useState<string[]>([initData?.status ?? TaskStatus.PLANING]);
    const [popoverActive, setPopoverActive] = useState(true);
    const togglePopoverActive = () => setPopoverActive((popoverActive) => !popoverActive)

    const [selectAssignee, setSelectAssignee] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [listEmployeeSearch, setListEmployeeSearch] = useState(initEmployee);
    const handleChangeName = (value: string) => {
        setTaskInfo({ ...taskInfo, name: value });
    };

    const handleChangeDescription = (value: string) => {
        setTaskInfo({ ...taskInfo, description: value });
    };
    const handleUpdateListEmployeeSearch = async (searchValueText: string) => {
        if (searchValueText === '') {
            setListEmployeeSearch(initEmployee);
            return;
        }

        const filterRegex = new RegExp(searchValueText, 'i');
        const resultOptions = initEmployee.filter((option) =>
            option.label.match(filterRegex),
        );
        setListEmployeeSearch(resultOptions);
    }
    const { debouncedCallback } = useCallbackDebounce(handleUpdateListEmployeeSearch);

    const updateSearchValue = async (searchValueText: string) => {
        setSearchValue(searchValueText);
        await debouncedCallback(searchValueText);
    }

    const updateSelection = (selected: string[]) => {
        const selectedValue = listEmployeeSearch.find(element => element.value === selected[0]);
        setSelectAssignee(selected);
        setSearchValue(selectedValue?.label ?? '');
    }

    return (
        <Form
            method='post'
            onSubmit={async () => {
                await handleSubmit({ ...taskInfo, status: statusSelected[0] as TaskStatus, employeeId: Number(selectAssignee[0]) });
            }}
        >
            <FormLayout>
                <BlockStack gap={'300'}>
                    <TextField
                        label="Name"
                        value={taskInfo.name}
                        onChange={handleChangeName}
                        type="text"
                        autoComplete='false'
                        maxLength={180}
                        showCharacterCount
                    />

                    <TextField
                        label="Description"
                        maxHeight={120}
                        multiline
                        value={taskInfo.description}
                        onChange={handleChangeDescription}
                        type="text"
                        autoComplete='false'
                    />

                    <Popover
                        active={popoverActive}
                        activator={<Button onClick={togglePopoverActive} disclosure>Status</Button>}
                        onClose={togglePopoverActive}
                    >
                        <OptionList
                            title="Select Role"
                            onChange={setStatusSelected}
                            options={[
                                { value: TaskStatus.PLANING, label: 'Plaining' },
                                { value: TaskStatus.DOING, label: 'Doing' },
                                { value: TaskStatus.DONE, label: 'Done' },
                            ]}
                            selected={statusSelected}
                        />
                    </Popover>

                    <Autocomplete
                        options={listEmployeeSearch}
                        selected={selectAssignee}
                        onSelect={updateSelection}
                        textField={
                            <Autocomplete.TextField
                                onChange={updateSearchValue}
                                label="Assignee"
                                value={searchValue}
                                prefix={<Icon source={SearchIcon} tone="base" />}
                                placeholder="Search"
                                autoComplete="off"
                            />
                        }
                    />
                    <InlineStack align='end'>
                        <Button variant='primary' submit>Save</Button>
                    </InlineStack>
                </BlockStack>
            </FormLayout>
        </Form >
    );
}
