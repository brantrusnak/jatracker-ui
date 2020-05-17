import React, { FormEvent, useState } from 'react';

interface State {
    email: string;
    password: string;
    display_name: string;
    repeatPassword: string;
}

export const SignupForm: React.FC = () => {
    const [form, setForm] = useState<State>({email: '', password: '', display_name: '', repeatPassword: ''});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: If response is OK, sign them in after. Set state.
        if (form.password === form.repeatPassword) {
            console.log(form);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} />

            <label htmlFor="display_name">Display Name</label>
            <input type="text" name="display_name" onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleChange} />

            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" onChange={handleChange} />

            <input type="submit" value="Submit" />
        </form>
    )
}
