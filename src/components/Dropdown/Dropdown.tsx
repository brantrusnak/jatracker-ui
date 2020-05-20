import React, { useState, useEffect, RefObject, createRef } from 'react';
import { DropdownOption } from '../../models/Dropdown';
import { DropdownItem } from './DropdownItem';
import './Dropdown.css';

interface Props {
    options: DropdownOption[];
}

export const Dropdown: React.FC<Props> = ({ options, children }) => {
    const [show, setShow] = useState<boolean>(false);
    let refObject: RefObject<HTMLDivElement> = createRef();
    useEffect(() => {
        let handleClickOutside = (event: MouseEvent) => show && !refObject.current?.contains(event.target as Node) ? setShow(false) : null;
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refObject, show]);

    const dropdownItems =
        <div className="dropdown-items">
            {options.map((option, index) => <DropdownItem key={index} label={option.label} callback={() => { setShow(false); option.callback() }}></DropdownItem>)}
        </div>;

    return (
        <div ref={refObject} className="dropdown-container">
            <div className="dropdown-label" onClick={() => setShow(!show)}>
                {children}
            </div>
            {show ? dropdownItems : null}
        </div>
    )
};
