import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">jaTracker</Link>
                </li>
                <li>
                    <Link to="/signin">Signin</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </nav>
    )
};