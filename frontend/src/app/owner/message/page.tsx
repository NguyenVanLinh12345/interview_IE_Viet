'use client'

import MainLayout from "@/components/layout/MainLayout";
import OwnerChatComponent from "@/components/owner/message/OwnerChat";

export default function OwnerChat() {
    return (
        <MainLayout role="owner">
            <OwnerChatComponent />
        </MainLayout>
    )
}