import React, { createContext } from "react";

export type StateConfig = {
    name: string;
    listAddress: string[];
}

const initState: StateConfig = {
    name: "",
    listAddress: []
}

const AppContextProvider = createContext<[StateConfig, React.Dispatch<any>]>([initState, ()=>{}]);

export { initState }
export default AppContextProvider;