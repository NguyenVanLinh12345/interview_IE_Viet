'use client'

import { AppProvider } from "@shopify/polaris"
import { ReactNode } from "react";
import enTranslations from '@shopify/polaris/locales/en.json';

type Props = Readonly<{
    children: ReactNode;
}>
export function PolarisProvider({ children }: Props) {

    return (
        <AppProvider
            i18n={enTranslations}
        >
            {children}
        </AppProvider>
    )
}