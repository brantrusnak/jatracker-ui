import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarUnauthorized } from './NavbarUnauthorized/NavbarUnauthorized';
import { NavbarAuthorized } from './NavbarAuthorized/NavbarAuthorized';
import './Navbar.css';

interface Props {
    authorized: boolean;
}

export const Navbar: React.FC<Props> = ({authorized}) => {
    return (
        <nav>
            <div className="left">
                <Link className="logo" to="/">
                    jaTracker
            </Link>
            </div>
            <div className="right">
                {authorized ? <NavbarAuthorized /> : <NavbarUnauthorized />}
            </div>
        </nav>
    )
}