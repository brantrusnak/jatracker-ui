import React from 'react';
import { Link } from 'react-router-dom';

export const NavbarAuthorized: React.FC = () => {
    return (
        <div className="authorized">
            <Link className="nav-item" to="/jobs">
                Jobs
            </Link>
            <Link className="nav-item" to="/settings">
                Settings
            </Link>
        </div>
    )
}