import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarUnauthorized: React.FC = () => {
    return (
        <React.Fragment>
            <Link className="nav-item" to="/signin">
                Signin
            </Link>
            <Link className="nav-item" to="/signup">
                Signup
            </Link>
        </React.Fragment>
    )
}