import React, { Dispatch, createContext, useReducer, ReactElement } from "react";

// type ModalTypes = 

type ModalActions = { type: 'SHOW' } | { type: 'HIDE' } | { type: 'TOGGLE' } | { type: 'LOAD', payload: { component: ReactElement, title: string } };

interface ModalState {
    title: string;
    component: ReactElement | null;
    show: boolean;
    // type: ModalType.alert,
}

interface ModalContextProps {
    state: ModalState;
    dispatch: Dispatch<ModalActions>;
}

const initialModalState: ModalState = {
    title: '',
    component: null,
    show: false
};

const contextState: ModalContextProps = {
    state: initialModalState,
    dispatch: (value: ModalActions) => {}
}

const ModalContext = createContext<ModalContextProps>(contextState);

const ModalProvider = ({children}: any) => {
    const [state, dispatch] = useReducer((state: ModalState, action: ModalActions) => {
        switch (action.type) {
            case "SHOW":
                return {
                    ...state,
                    show: true
                }
            case "HIDE":
                return {
                    ...state,
                    component: null,
                    show: false
                }
            case "TOGGLE":
                return {
                    ...state,
                    show: !state.show
                }
            case "LOAD":
                return {
                    ...state,
                    title: action.payload.title,
                    component: action.payload.component
                }
            default:
                return state;
        }
    }, initialModalState);
    return <ModalContext.Provider value={{state, dispatch}}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalProvider }