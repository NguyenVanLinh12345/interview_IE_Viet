import ChatBoard from '@/components/common/message/ChatBoard';
import MainLayout from '@/components/layout/MainLayout';

export default function EmployeeMessage() {

    return (
        <MainLayout role='employee'>
            <ChatBoard />
        </MainLayout>
    )
}