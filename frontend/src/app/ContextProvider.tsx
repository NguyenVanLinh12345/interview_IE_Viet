'use client'

import { AppContext, initialState } from "@/context/context";
import { appReducer } from "@/context/reducer";
import { ReactNode, useReducer, useMemo } from "react";

type Props = Readonly<{
    children: ReactNode;
}>;

export function AppProvider({ children }: Props) {
    const [data, dispatch] = useReducer(
        appReducer,
        initialState
    );
    const contextValue = useMemo(() => ({ state: data, dispatch }), [data, dispatch]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}
