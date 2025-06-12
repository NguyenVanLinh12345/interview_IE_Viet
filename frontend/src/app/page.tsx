import TaskManageTable from "@/components/common/manageTask/TaskManageTable";
import MainLayout from "@/components/layout/MainLayout";

// Lưu ý: dùng polaris phải có use client
export default function Home() {

  return (
    <MainLayout role="employee">
      <TaskManageTable />
    </MainLayout>
  );
}