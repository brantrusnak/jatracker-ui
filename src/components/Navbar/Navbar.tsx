import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarUnauthorized } from './NavbarUnauthorized/NavbarUnauthorized';
import { NavbarAuthorized } from './NavbarAuthorized/NavbarAuthorized';
import './Navbar.css';

interface Props {
    authorized: boolean;
}

export class Navbar extends React.Component<Props> {
    render() {
        return (
            <nav>
                <div className="left">
                    <Link className="logo" to="/">
                        jaTracker
                    </Link>
                </div>
                <div className="right">
                    {this.props.authorized ? <NavbarAuthorized /> : <NavbarUnauthorized />}
                </div>
            </nav>
        )
    }
}
