import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarUnauthorized } from './NavbarUnauthorized/NavbarUnauthorized';
import { NavbarAuthorized } from './NavbarAuthorized/NavbarAuthorized';
import './Navbar.css';
import { AuthContext } from '../../context/AuthContext';

export const Navbar: React.FC = () => {
    const auth = useContext(AuthContext);
    return (
        <nav>
            <div className="left">
                <Link className="logo" to={auth.state.isAuthenticated ? '/jobs' : '/'}>jaTracker</Link>
            </div>
            <div className="right">
                {auth.state.isAuthenticated ? <NavbarAuthorized /> : <NavbarUnauthorized />}
            </div>
        </nav>
    )
}