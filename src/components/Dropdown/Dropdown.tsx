import React, { useState, useEffect, RefObject, createRef } from 'react';
import { DropdownOption } from '../../models/Dropdown';
import { DropdownItem } from './DropdownItem';
import './Dropdown.css';

interface Props {
    placeholder: string;
    options: DropdownOption[];
}

export const Dropdown: React.FC<Props> = ({ placeholder, options }) => {
    const [show, setShow] = useState<boolean>(false);
    let refObject: RefObject<HTMLDivElement> = createRef();
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (show && refObject.current && event.target && !refObject.current.contains(event.target as Node)) {
                // TODO: Fix clicking label when already open
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refObject, show]);

    const dropdownItems =
        <div ref={refObject} className="dropdown-items">
            {options.map((option, index) => <DropdownItem key={index} label={option.label} callback={() => { setShow(false); option.callback() }}></DropdownItem>)}
        </div>;

    return (
        <div className="dropdown-container">
            <div className="dropdown-label" onClick={() => setShow(!show)}>{placeholder}</div>
            {show ? dropdownItems : null}
        </div>
    )
};
