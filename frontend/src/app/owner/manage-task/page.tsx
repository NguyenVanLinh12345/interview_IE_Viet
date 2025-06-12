import MainLayout from "@/components/layout/MainLayout";
import TaskManageTable from "@/components/owner/manageTask/TaskManageTable";

export default function ManageTask() {
    return (
        <MainLayout role="owner">
            <TaskManageTable />
        </MainLayout>
    )
}