import React from 'react';
import { ConfirmationOption } from '../../models/ConfirmationOption';
import './Confirmation.css';

interface Props {
    options: ConfirmationOption[];
}

export const Confirmation: React.FC<Props> = ({ options }) => {
    return (
        <div className="confirmation">
            {options.map((option, index) => <button key={index} className={'confirmation-option ' + option.type.toLowerCase() } onClick={option.callback}>{option.label}</button>)}
        </div>
    )
};