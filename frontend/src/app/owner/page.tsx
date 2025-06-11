import MainLayout from "@/components/layout/MainLayout";
import EmployeeTable from "@/components/owner/manageEmployee/EmployeeTable";

export default function OwnerHome() {

    return (
        <MainLayout role="owner">
            <EmployeeTable />
        </MainLayout>
    )
}