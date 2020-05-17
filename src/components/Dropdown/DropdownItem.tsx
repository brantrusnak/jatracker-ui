import React from 'react';
import { DropdownOption } from '../../models/Dropdown';

export const DropdownItem: React.FC<DropdownOption> = ({label, callback}) => {
    return (
        <React.Fragment>
            <div className="dropdown-item" onClick={() => callback()}>{label}</div>
        </React.Fragment>
    )
};