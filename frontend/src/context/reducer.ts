import { InitialStateType } from "./context";

export const appReducer = (state: InitialStateType, action: { type: string, payload: Partial<InitialStateType> }) => {
    switch (action.type) {
        case 'update':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}