import React, { createContext, useReducer, Dispatch } from "react";
import { User } from "../models/User";

export type AuthActions = { type: 'LOGIN', payload: { token: string, user: User } } | { type: 'LOGOUT' };

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}

interface AuthContextProps {
    state: AuthState;
    dispatch: Dispatch<AuthActions>;
}

const initialAuthState: AuthState = {
    isAuthenticated: JSON.parse(localStorage.getItem('token') as string) ? true : false,
    user: JSON.parse(localStorage.getItem('user') as string) as User,
    token: JSON.parse(localStorage.getItem('token') as string)
};

const contextState: AuthContextProps = {
    state: initialAuthState,
    dispatch: (value: AuthActions) => {}
}

const AuthContext = createContext<AuthContextProps>(contextState);

const AuthProvider = ({children}: any) => {
    const [state, dispatch] = useReducer((state: AuthState, action: AuthActions) => {
        switch (action.type) {
            case "LOGIN":
                console.log('login dispatch ran');
                console.log(action.payload);
                localStorage.setItem("token", JSON.stringify(action.payload.token));
                localStorage.setItem("user", JSON.stringify(action.payload.user));
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload.user,
                    token: action.payload.token
                };
            case "LOGOUT":
                localStorage.clear();
                return {
                    ...state,
                    isAuthenticated: false,
                    user: null,
                    token: null
                };
            default:
                return state;
        }
    }, initialAuthState);
    return <AuthContext.Provider value={{state, dispatch}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider }