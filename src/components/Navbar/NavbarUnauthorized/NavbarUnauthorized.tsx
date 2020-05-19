import React, { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { SigninForm } from '../../Signin/SigninForm/SigninForm';
import { SignupForm } from '../../Signup/SignupForm/SignupForm';

export const NavbarUnauthorized: React.FC = () => {
    const modal = useContext(ModalContext);

    const openSignin = () => {
        modal.dispatch({type: 'LOAD', payload: {component: <SigninForm />, title: 'Signin'}});
        modal.dispatch({type: 'SHOW'});
    }

    const openSignup = () => {
        modal.dispatch({type: 'LOAD', payload: {component: <SignupForm />, title: 'Signup'}});
        modal.dispatch({type: 'SHOW'});
    }

    return (
        <React.Fragment>
            <button className="primary" onClick={openSignin}>Signin</button>
            <button className="primary" onClick={openSignup}>Signup</button>
        </React.Fragment>
    )
}