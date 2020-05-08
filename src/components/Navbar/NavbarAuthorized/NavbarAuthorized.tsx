import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarAuthorized: React.FC = () => {
    return (
        <React.Fragment>
            <Link className="nav-item" to="/jobs">
                Jobs
            </Link>
            <Link className="nav-item" to="/settings">
                Settings
            </Link>
        </React.Fragment>
    )
}