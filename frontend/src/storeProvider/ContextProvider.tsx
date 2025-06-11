'use client';

import { ReactNode, useReducer } from "react";
import AppContext, { initState } from "./context";
import reducer from "./reducer";

type Props = Readonly<{
    children: ReactNode;
}>

export default function ContextProvider({ children }: Props) {
    const [listAddress, dispatch] = useReducer(reducer, initState);

    return (
        <AppContext.Provider value={[listAddress, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}

//  