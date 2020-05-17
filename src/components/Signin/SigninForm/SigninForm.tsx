import React, { FormEvent, useState, useContext } from 'react';
import { Signin } from '../../../models/Signin';
import { useAuthHandler } from '../../../effects/auth';
import { AuthContext } from '../../../context/AuthContext';

export const SigninForm: React.FC = () => {
    const [form, setForm] = useState<Signin>({ email: '', password: '' });
    const { handleSignin } = useAuthHandler();
    const auth = useContext(AuthContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        let { token, user } = await handleSignin(form);
        // TODO: Move this into the effect
        auth.dispatch({type: 'LOGIN', payload: {token, user} })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />

            <input type="submit" value="Submit" />
        </form>
    )
}
