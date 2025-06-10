'use client'

// Lưu ý: dùng polaris phải có use client
import { Frame, Toast } from "@shopify/polaris";

export default function HomeComponent() {
    return (
        <Frame>
            <Toast content="Home" onDismiss={() => { }} />
            main nha
        </Frame>
    );
}