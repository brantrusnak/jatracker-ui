import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from '../../Dropdown/Dropdown';
import { DropdownOption } from '../../../models/Dropdown';
import { AuthContext } from '../../../context/AuthContext';

export const NavbarAuthorized: React.FC = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    const dropdownOptions: DropdownOption[] = [
        {
            label: 'Settings',
            callback: () => history.push('/settings')
        },
        {
            label: 'Signout',
            callback: () => auth.dispatch({ type: 'LOGOUT' })
        }
    ]

    return (
        <React.Fragment>
            <Link className="nav-item" to="/jobs">
                <button className="primary">Jobs</button>
            </Link>
            <Dropdown options={dropdownOptions}>
                <button className="primary">{auth.state.user?.display_name}</button>
            </Dropdown>
        </React.Fragment>
    )
}