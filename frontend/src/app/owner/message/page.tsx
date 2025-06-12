'use client'

import MainLayout from "@/components/layout/MainLayout";
import ChatBoard from "@/components/common/message/ChatBoard";

export default function OwnerChat() {
    return (
        <MainLayout role="owner">
            <ChatBoard />
        </MainLayout>
    )
}