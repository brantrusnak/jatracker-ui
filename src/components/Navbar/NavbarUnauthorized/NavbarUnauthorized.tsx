import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarUnauthorized: React.FC = () => {
    return (
        <div className="unauthorized">
            <Link className="nav-item" to="/signin">
                Signin
            </Link>
            <Link className="nav-item" to="/signup">
                Signup
            </Link>
        </div>
    )
}