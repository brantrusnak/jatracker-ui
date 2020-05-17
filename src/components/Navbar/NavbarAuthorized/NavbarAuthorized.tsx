import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown } from '../../Dropdown/Dropdown';
import { DropdownOption } from '../../../models/Dropdown';
import { AuthContext } from '../../../context/AuthContext';

export const NavbarAuthorized: React.FC = () => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    let dropdownOptions: DropdownOption[] = [
        {
            label: 'Settings',
            callback: () => history.push('/user')
        },
        {
            label: 'Signout',
            callback: () => {
                console.log('Removing token. Signout.');
                auth.dispatch({type: 'LOGOUT'});
            }
        }
    ]
    return (
        <React.Fragment>
            <Link className="nav-item" to="/jobs">
                Jobs
            </Link>
            <Dropdown placeholder={auth.state.user?.display_name as string  } options={dropdownOptions} />
        </React.Fragment>
    )
}