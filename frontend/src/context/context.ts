import { SystemRole } from "@/types/employee";
import { createContext, useContext } from "react";

export type InitialStateType = {
    userId: string;
    userName: string;
    userRole: SystemRole;
}

export const initialState: InitialStateType = {
    userId: '',
    userName: '',
    userRole: 'employee'
}


export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<{ type: string; payload: Partial<InitialStateType> }>;
}>({ state: initialState, dispatch: () => { } });

export const useAppContext = () => useContext(AppContext);