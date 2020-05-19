import React, { FormEvent, useState } from 'react';
import { Signin } from '../../../models/Signin';
import { useAuthHandler } from '../../../effects/auth';

export const SigninForm: React.FC = () => {
    const [form, setForm] = useState<Signin>({ email: '', password: '' });
    const { handleSignin } = useAuthHandler();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        await handleSignin(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />

            <input className="primary" type="submit" value="Submit" />
        </form>
    )
}
