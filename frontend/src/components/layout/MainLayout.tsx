'use client';

import { Frame } from "@shopify/polaris";
import { useRef, useState, useCallback, ReactNode } from "react";
import LeftSideBar from "./LeftSideBar";
import Header from "./Header";

type Props = Readonly<{
    children?: ReactNode;
    role: 'owner' | 'employee'
}>

const logo = {
    width: 86,
    topBarSource: 'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
    contextualSaveBarSource: 'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
    accessibilityLabel: 'Shopify',
};

function MainLayout({ children, role }: Props) {
    const skipToContentRef = useRef(null);
    const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

    // Bật tắt cái sidebar
    const toggleMobileNavigationActive = useCallback(() => {
        setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive)
    }, []);

    return (
        // <ContextProvider>
        <Frame
            logo={logo}
            topBar={<Header toggleSideBar={toggleMobileNavigationActive} />}
            navigation={<LeftSideBar role={role} />}
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
            skipToContentTarget={skipToContentRef}
        >
            {children}
        </Frame>
        // </ContextProvider>
    )
}

export default MainLayout;