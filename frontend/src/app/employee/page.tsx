import MainLayout from "@/components/layout/MainLayout";
import TaskManageTable from "@/components/common/manageTask/TaskManageTable";

export default function ManageTask() {
    return (
        <MainLayout role="employee">
            <TaskManageTable />
        </MainLayout>
    )
}