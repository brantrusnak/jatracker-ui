import React, { useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const AuthorizedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const auth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) => auth.state.isAuthenticated ? children : <Redirect to={{ pathname: "/signin", state: { from: location } }} />}
        />
    );
}
